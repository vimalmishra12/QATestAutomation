"use strict";
const action = require("../../core/actionLibrary/baseActionLibrary.js");
const selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
  walkthroughSkipBtn: selectorFile.electronLogin.walkthroughSkipBtn,
  profileDropdown: selectorFile.electronLogin.profileDropdown,
  logoutBtn: selectorFile.electronLogin.logoutBtn,
  confirmLogoutBtn: selectorFile.electronLogin.confirmLogoutBtn,
  loginBtn: selectorFile.electronLogin.loginBtn,

  closeWalkthrough: async function () {
    await logger.logInto(await stackTrace.get());
    let res = false;
    try {
      const skipBtnSelector = this.walkthroughSkipBtn;
      if (await action.waitForDisplayed(skipBtnSelector, 5000)) {
        console.log("Walkthrough skip button visible. Clicking to close...");
        res = await action.click(skipBtnSelector);
        console.log("Walkthrough skip button clicked successfully ✅");
      } else {
        console.log("Walkthrough skip button not visible.");
      }
    } catch (e) {
      console.log("Walkthrough skip button not found or error: ", e.message);
    }
    return res;
  },

  logoutUser: async function () {
    await logger.logInto(await stackTrace.get());
    
    // 1. Click Profile Dropdown
    await action.waitForDisplayed(this.profileDropdown, 10000);
    await action.click(this.profileDropdown);
    
    // 2. Click Logout Button in Dropdown
    await action.waitForDisplayed(this.logoutBtn, 10000);
    await action.click(this.logoutBtn);
    
    // 3. Click Confirm Logout button in modal
    await action.waitForDisplayed(this.confirmLogoutBtn, 10000);
    await action.click(this.confirmLogoutBtn);
    
    // 4. Verify logout completed by checking if loginBtn is displayed
    const isLoggedOut = await action.waitForDisplayed(this.loginBtn, 15000);
    console.log("Logout status (is login button visible?):", isLoggedOut);
    return isLoggedOut;
  }
};
