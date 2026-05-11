"use strict";

const { remote } = require('webdriverio');
const { spawn, exec } = require('child_process');
const path = require('path');
const util = require('util');
const selectors = require(process.cwd() + '/testResources/selectors/ExperienceApp/C1Selectors.json');

const execPromise = util.promisify(exec);

// Environment configuration
const ENV_CONFIG = {
  thor: {
    baseUrl: 'https://micro-nemo.comprodls.com',
    protocolHandler: 'cambridgeone-app'
  },
  qa: {
    baseUrl: 'https://qa.cambridgeone.org',
    protocolHandler: 'cambridgeone'
  },
  rel: {
    baseUrl: 'https://release.cambridgeone.org',
    protocolHandler: 'cambridgeone'
  },
  production: {
    baseUrl: 'https://www.cambridgeone.org',
    protocolHandler: 'cambridgeone'
  }
};

// Get current environment from argv
const currentEnv = global.argv?.testEnv || 'thor';
const envConfig = ENV_CONFIG[currentEnv] || ENV_CONFIG.thor;

// Constants
const MICRO_NEMO_HOST = 'micro-nemo.comprodls.com';
const CHROMEDRIVER_PORT = 9516;
const ELECTRON_DEBUG_PORT = 9222;

class ElectronLoginPage {
  constructor() {
    this.chromeProcess = null;
    this.driverProcess = null;
    this.webBrowser = null;
  }

  // ─────────────────────────────────────────────────────
  // CORE METHOD (called from test)
  // ─────────────────────────────────────────────────────

  /**
   * Full Electron login flow
   * @param {Object} testdata - Test data with email, password, role
   * @returns {Object} { isLoggedIn: boolean, welcomeText: string }
   */
  async login(testdata) {
    try {
      // Phase 1: Click login button in Electron
      await this.clickLoginButton();

      // Phase 2: Capture u= token from Chrome process
      const token = await this.captureUTokenFromChrome();
      if (!token) {
        throw new Error('Failed to capture u= token from Chrome process');
      }

      // Phase 3: Close Chrome window opened by Electron
      await this.closeChromeWindow();

      // Phase 4: Start ChromeDriver
      await this.startChromeDriver();

      // Phase 5: Create Chrome session and navigate to login
      const targetUrl = `${envConfig.baseUrl}/desktop-login?u=${token}`;
      await this.createChromeSession();
      await this.navigateToLogin(targetUrl);

      // Phase 6: Submit credentials
      await this.submitCredentials(testdata.email, testdata.password);

      // Phase 7: Confirm protocol dialog
      await this.confirmProtocolDialog();

      // Phase 8: Switch back to Electron window
      await this.switchToElectronWindow();

      // Phase 9: Verify logged-in state
      const welcomeElement = await this.verifyLoggedInState();

      return {
        isLoggedIn: true,
        welcomeText: welcomeElement
      };
    } catch (error) {
      console.error('Electron login failed:', error.message);
      await this.cleanup();
      return { isLoggedIn: false, error: error.message };
    }
  }

  // ─────────────────────────────────────────────────────
  // HELPER METHODS (internal use)
  // ─────────────────────────────────────────────────────

  /**
   * Click the login button in Electron
   */
  async clickLoginButton() {
    console.log('PHASE 1: Locating Login Button in Electron');

    const loginBtn = await $(selectors.css.electronLogin.loginBtn);
    await loginBtn.waitForExist({ timeout: 15000 });
    await loginBtn.waitForDisplayed({ timeout: 15000 });
    console.log('Login button visible ✓');

    await loginBtn.click();
    console.log('Login button clicked ✓ — Chrome should open now');
  }

  /**
   * Extract u= token from URL
   */
  extractUToken(url) {
    if (!url) return null;
    const match = url.match(/[?&]u=([^&\s#]+)/);
    return match ? match[1] : null;
  }
}

module.exports = new ElectronLoginPage();
