"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  back_btn: selectorFile.css.ComproC1.myHomework.back_btn,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.back_btn),
    };
    console.log("Before return in isInitiazed", res);
    return res;
  },

  getData_myHomework: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      back_btn:
        (await action.getElementCount(this.back_btn)) > 0
          ? await action.getText(this.back_btn)
          : null,
      back_btn1:
        (await action.getElementCount(this.back_btn1)) > 0
          ? await action.getText(this.back_btn1)
          : null,
    };
    return obj;
  },

  click_back_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.back_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " back_btn is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "back_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
