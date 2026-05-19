"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');

module.exports = {
  manageReports_link: selectorFile.css.ComproC1.manageReports.manageReports_link,
  downloadReport_btn: selectorFile.css.ComproC1.manageReports.downloadReport_btn,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.downloadReport_btn),
    };
    return res;
  },

  click_manageReports_link: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.manageReports_link);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " manageReports_link is clicked");
      await action.waitForDocumentLoad();
      res = await this.isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "manageReports_link is NOT clicked",
        "error"
      );
    }
    return res;
  },

  getDownloadBtnTagName: async function () {
    await logger.logInto(await stackTrace.get());
    var tagName;
    try {
      await action.waitForDisplayed(this.downloadReport_btn);
      tagName = await browser.execute(function (selector) {
        var elem = document.querySelector(selector);
        if (elem) {
          return elem.tagName.toUpperCase();
        }
        return null;
      }, this.downloadReport_btn);
      await logger.logInto(
        await stackTrace.get(),
        "Download button tag name: " + tagName
      );
    } catch (err) {
      await logger.logInto(
        await stackTrace.get(),
        err.message,
        "error"
      );
      return null;
    }
    return tagName;
  },

  getDownloadBtnRole: async function () {
    await logger.logInto(await stackTrace.get());
    var role;
    try {
      role = await action.getAttribute(this.downloadReport_btn, "role");
      await logger.logInto(
        await stackTrace.get(),
        "Download button role attribute: " + role
      );
    } catch (err) {
      await logger.logInto(
        await stackTrace.get(),
        err.message,
        "error"
      );
      return null;
    }
    return role;
  },

  verifyDownloadBtnIsButton: async function () {
    await logger.logInto(await stackTrace.get());
    var tagName = await this.getDownloadBtnTagName();
    var role = await this.getDownloadBtnRole();
    var isButton = (tagName === "BUTTON") || (role === "button");
    await logger.logInto(
      await stackTrace.get(),
      "Download button accessibility check - tagName: " + tagName + ", role: " + role + ", isButton: " + isButton
    );
    return {
      tagName: tagName,
      role: role,
      isButton: isButton
    };
  },

};
