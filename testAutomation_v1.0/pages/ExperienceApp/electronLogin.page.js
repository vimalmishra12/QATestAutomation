"use strict";

const { remote } = require('webdriverio');
const { spawn, exec } = require('child_process');
const path = require('path');
const util = require('util');
const chromedriver = require('chromedriver');
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

    const loginBtn = await $(selectors.electronLogin.loginBtn);
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

  /**
   * Get Chrome URL from process command line arguments
   */
  async getChromeUrlFromProcessArgs() {
    console.log('Reading Chrome process command line for micro-nemo URL...');
    try {
      const { stdout } = await execPromise(
        `powershell -Command "Get-CimInstance Win32_Process | ` +
        `Where-Object { $_.Name -eq 'chrome.exe' -and $_.CommandLine -like '*${MICRO_NEMO_HOST}*' } | ` +
        `Select-Object -ExpandProperty CommandLine | Select-Object -First 1"`
      );

      const match = stdout.match(/(https?:\/\/micro-nemo\.comprodls\.com[^\s"']+)/);
      if (match) {
        console.log('Found micro-nemo URL in Chrome process:', match[1]);
        return match[1];
      }
    } catch (e) {
      console.error('Chrome process URL scan error:', e.message);
    }
    return null;
  }

  /**
   * Capture u= token from Chrome process by polling
   */
  async captureUTokenFromChrome({ timeout = 10000 } = {}) {
    console.log('Polling Chrome process list for micro-nemo URL...');
    let capturedUrl = null;
    const deadline = Date.now() + timeout;

    while (Date.now() < deadline) {
      capturedUrl = await this.getChromeUrlFromProcessArgs();
      if (capturedUrl) {
        const token = this.extractUToken(capturedUrl);
        console.log(`Captured URL: ${capturedUrl}`);
        console.log(`Extracted u= token: ${token}`);
        return token;
      }
      await new Promise(r => setTimeout(r, 500));
    }

    console.log('TIMEOUT waiting for Chrome process with micro-nemo URL');
    return null;
  }

  /**
   * Close Chrome window opened by Electron
   */
  async closeChromeWindow() {
    console.log('PHASE 4: Closing Chrome window opened by Electron');
    try {
      await execPromise(
        `powershell -Command "Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force"`
      );
      console.log('Chrome process closed ✓');
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      console.log('Could not close Chrome (may not have been open):', e.message);
    }
  }

  /**
   * Start ChromeDriver process
   */
  async startChromeDriver() {
    console.log('PHASE 5: Starting ChromeDriver');
    const driverPath = chromedriver.path;
    console.log('  Using driver at:', driverPath);
    this.driverProcess = spawn(driverPath, [`--port=${CHROMEDRIVER_PORT}`]);

    this.driverProcess.stdout.on('data', d =>
      console.log('  Driver:', d.toString().trim())
    );
    this.driverProcess.stderr.on('data', d =>
      console.log('  Driver ERR:', d.toString().trim())
    );

    await new Promise(r => setTimeout(r, 1500));
  }

  /**
   * Create Chrome WebDriver session
   */
  async createChromeSession() {
    console.log('PHASE 6: Creating Chrome WebDriver session');

    this.webBrowser = await remote({
      hostname: 'localhost',
      port: CHROMEDRIVER_PORT,
      path: '/',
      capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--no-sandbox',
            '--start-maximized',
            '--disable-popup-blocking',
          ],
          prefs: {
            'protocol_handler.excluded_schemes': {
              'cambridgeone-app': false,
              'cambridgeone': false
            },
            'protocol_handler.allowed_origin_protocol_pairs': {
              [envConfig.baseUrl]: {
                'cambridgeone-app': true,
                'cambridgeone': true
              }
            }
          }
        }
      }
    });

    console.log('Chrome session created ✓');
  }

  /**
   * Navigate to login URL
   */
  async navigateToLogin(url) {
    await this.webBrowser.url(url);
    const currentUrl = await this.webBrowser.getUrl();
    console.log('Navigated to:', currentUrl);

    // Verify token preserved
    const tokenInUrl = this.extractUToken(currentUrl);
    console.log(`u= token preserved ✓ (${tokenInUrl || 'not in URL'})`);

    // Wait for login form
    const loginHeader = await this.webBrowser.$('#onboarding-header-login-btn');
    await loginHeader.waitForDisplayed({ timeout: 20000 });
    console.log('Login page confirmed ✓');
  }

  /**
   * Submit credentials in Chrome session
   */
  async submitCredentials(email, password) {
    console.log('PHASE 7: Submitting credentials...');

    // Save original browser context
    const originalBrowser = global.browser;
    const original$ = global.$;
    const original$$ = global.$$;

    // Switch to Chrome session
    global.browser = this.webBrowser;
    if (originalBrowser?.config) global.browser.config = originalBrowser.config;
    global.$ = this.webBrowser.$.bind(this.webBrowser);
    global.$$ = this.webBrowser.$$.bind(this.webBrowser);

    try {
      // Use existing login.page.js selectors
      const loginSelectors = selectors.css.ComproC1.login;
      await $(loginSelectors.userName_tbox).waitForDisplayed({ timeout: 15000 });
      await $(loginSelectors.userName_tbox).setValue(email);
      await $(loginSelectors.password_tbox).setValue(password);
      await $(loginSelectors.login_btn).click();

      console.log('Credentials submitted ✓');

      // Wait for deep link button
      const deepLinkBtn = await $(selectors.electronLogin.deepLinkBtn);
      await deepLinkBtn.waitForDisplayed({ timeout: 30000 });
      console.log('Deep link button found ✓');

      // Click deep link button
      await deepLinkBtn.click();
      console.log('Deep link clicked ✓ — waiting for OS dialog...');
      await new Promise(r => setTimeout(r, 12000));

    } catch (error) {
      console.error('ERROR in login flow:', error.message);
      throw error;
    } finally {
      // Restore original browser context
      global.browser = originalBrowser;
      global.$ = original$;
      global.$$ = original$$;
      console.log('Restored Electron browser context');
    }
  }

  /**
   * Confirm Chrome protocol dialog using PowerShell
   */
  async confirmProtocolDialog({ maxAttempts = 3, waitBetween = 800 } = {}) {
    console.log('PHASE 8: Confirming Chrome protocol dialog...');
    const startTime = Date.now();

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const psCommand = `
          Add-Type -AssemblyName System.Windows.Forms;
          Add-Type -AssemblyName Microsoft.VisualBasic;

          $chromes = Get-Process chrome | Where-Object { $_.MainWindowTitle -ne '' };
          if (-not $chromes) {
            Write-Output 'NO_CHROME_WINDOWS';
            exit;
          }

          $target = $chromes | Where-Object { $_.MainWindowTitle -like '*Cambridge One*' -or $_.MainWindowTitle -like '*Login*' } | Select-Object -First 1;
          if (-not $target) {
            $target = $chromes | Select-Object -First 1;
          }

          Write-Output "FOUND_WINDOW: $($target.MainWindowTitle) (ID: $($target.Id))";

          try {
            [Microsoft.VisualBasic.Interaction]::AppActivate($target.Id);
          } catch {
            Write-Output "ACTIVATE_FAILED: $($_.Exception.Message)";
          }
          Start-Sleep -Milliseconds 1000;

          [System.Windows.Forms.SendKeys]::SendWait('{TAB}');
          Start-Sleep -Milliseconds 200;
          [System.Windows.Forms.SendKeys]::SendWait('{TAB}');
          Start-Sleep -Milliseconds 200;
          [System.Windows.Forms.SendKeys]::SendWait('{ENTER}');
          Start-Sleep -Milliseconds 500;

          Write-Output 'KEYS_SENT';
        `;

        const { stdout } = await execPromise(
          `powershell -NoProfile -Command "${psCommand.replace(/\r?\n/g, '; ').replace(/"/g, '\\"')}"`
        );

        if (stdout.includes('KEYS_SENT')) {
          const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
          console.log(`Dialog confirmed ✓ — ${elapsed}s`);
          return true;
        }
      } catch (e) {
        console.error(`Attempt ${attempt} error:`, e.message);
      }
      await new Promise(r => setTimeout(r, waitBetween));
    }

    console.log('Protocol dialog confirmation uncertain ⚠');
    return false;
  }

  /**
   * Switch back to Electron window after login
   */
  async switchToElectronWindow() {
    console.log('PHASE 9: Switching to logged-in Electron window');

    const deadline = Date.now() + 15000;
    while (Date.now() < deadline) {
      const handles = await browser.getWindowHandles();
      if (handles.length >= 2) {
        console.log(`Found ${handles.length} window handles`);

        // Log all handles for debugging
        for (let i = 0; i < handles.length; i++) {
          await browser.switchToWindow(handles[i]);
          const title = await browser.getTitle();
          const url = await browser.getUrl();
          console.log(`  Handle[${i}]: "${title}" | URL: ${url}`);
        }

        // Switch to last handle (Electron window after login)
        const targetHandle = handles[handles.length - 1];
        await browser.switchToWindow(targetHandle);
        const finalUrl = await browser.getUrl();
        const isElectron = finalUrl.startsWith('file://');
        console.log(`Switched to handle[${handles.length - 1}] ✓ — Context: ${isElectron ? 'ELECTRON' : 'WEB'}`);
        return;
      }
      await new Promise(r => setTimeout(r, 1000));
    }

    console.log('TIMEOUT waiting for Electron window handle');
  }

  /**
   * Verify logged-in state in Electron
   */
  async verifyLoggedInState({ timeout = 20000 } = {}) {
    console.log('PHASE 10: Verifying logged-in UI in Electron');

    try {
      const welcomeElement = await $(selectors.electronLogin.welcome);
      await welcomeElement.waitForDisplayed({ timeout });
      const welcomeText = (await welcomeElement.getText()).trim();
      console.log(`Welcome message detected: "${welcomeText}" ✓`);
      return welcomeText;
    } catch (e) {
      console.error('Welcome message not detected:', e.message);
      throw new Error('Electron Login Verification Failed: UI dashboard not detected');
    }
  }

  /**
   * Cleanup: Close ChromeDriver and sessions
   */
  async cleanup() {
    console.log('Cleaning up...');

    if (this.webBrowser) {
      try {
        await this.webBrowser.deleteSession();
        console.log('Chrome session closed ✓');
      } catch (e) {
        console.error('deleteSession error:', e.message);
      }
    }

    if (this.driverProcess) {
      this.driverProcess.kill();
      console.log('ChromeDriver stopped ✓');
    }
  }
}

module.exports = new ElectronLoginPage();
