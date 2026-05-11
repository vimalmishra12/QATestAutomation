"use strict";

const electronLoginPage = require("../../pages/ExperienceApp/electronLogin.page.js");

module.exports = {
  PROTO_ELEC_LOGIN: async function(testdata) {
    console.log("════════════════════════════════════════════════════");
    console.log("  START: Electron Login Prototype");
    console.log("  Using test data:", testdata.email);
    console.log("════════════════════════════════════════════════════");

    // Check if already logged in
    const currentUrl = await browser.getUrl();
    if (currentUrl.includes('dashboard') || currentUrl.includes('teacher-dashboard')) {
      console.log("⚠ Already logged in! Skipping login flow...");
      return await this.VERIFY_ONLY();
    }

    // Execute login flow via page object
    const result = await electronLoginPage.login(testdata);

    // Assert result
    if (!result.isLoggedIn) {
      throw new Error(`Electron login failed: ${result.error}`);
    }

    console.log("════ LOGIN FLOW COMPLETE — User authenticated in Electron ✓ ════");
  },

  VERIFY_ONLY: async function() {
    console.log("PHASE 10: Verifying logged-in UI in Electron");

    try {
      const welcomeElement = await $('.welcome');
      await welcomeElement.waitForDisplayed({ timeout: 20000 });

      const welcomeText = (await welcomeElement.getText()).trim();
      console.log(`Welcome message detected: "${welcomeText}" ✓`);

      console.log("════ VERIFICATION COMPLETE — User is logged in ✓ ════");
    } catch (e) {
      console.error("Welcome message not detected:", e.message);
      throw new Error("Electron Login Verification Failed: UI dashboard not detected");
    }
  }
};
