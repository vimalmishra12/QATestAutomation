"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  help_btn: selectorFile.css.ComproC1.dashboard.help_btn,
  progress_btn: selectorFile.css.ComproC1.dashboard.progress_btn,
  praticeExtra_btn: selectorFile.css.ComproC1.dashboard.praticeExtra_btn,
  ebook_btn: selectorFile.css.ComproC1.dashboard.ebook_btn,
  homework_btn: selectorFile.css.ComproC1.dashboard.homework_btn,
  myProgress_btn: selectorFile.css.ComproC1.dashboard.myProgress_btn,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.help_btn),
    };
    return res;
  },

  getData_dashboard: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      help_btn:
        (await action.getElementCount(this.help_btn)) > 0
          ? await action.getText(this.help_btn)
          : null,
    };
    console.log(obj);
    return obj;
  },

  getData_activeClasses: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      progress_btn:
        (await action.getElementCount(this.progress_btn)) > 0
          ? await action.getText(this.progress_btn)
          : null,
      praticeExtra_btn:
        (await action.getElementCount(this.praticeExtra_btn)) > 0
          ? await action.getText(this.praticeExtra_btn)
          : null,
      ebook_btn:
        (await action.getElementCount(this.ebook_btn)) > 0
          ? await action.getText(this.ebook_btn)
          : null,
      homework_btn:
        (await action.getElementCount(this.homework_btn)) > 0
          ? await action.getText(this.homework_btn)
          : null,
      myProgress_btn:
        (await action.getElementCount(this.myProgress_btn)) > 0
          ? await action.getText(this.myProgress_btn)
          : null,
    };
    return obj;
  },

  click_help_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.help_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " help_btn is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "help_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_progress_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.progress_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " progress_btn is clicked");
      res = await require("./progress.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "progress_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_praticeExtra_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    var res2 = {
      pageStatus: await action.waitForDisplayed(this.praticeExtra_btn),
    };
    res = await action.click(this.praticeExtra_btn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " praticeExtra_btn is clicked"
      );
      res = await require("./practiceExtra.page.js").isInitialized();
      console.log("haha", res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "praticeExtra_btn is NOT clicked",
        "error"
      );
    }
    console.log("Button", res);
    return res;
  },

  click_ebook_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.ebook_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " ebook_btn is clicked");
      res = await require("./eBook.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "ebook_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_homework_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.homework_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " homework_btn is clicked");
      res = await require("./myHomework.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "homework_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_myProgress_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.myProgress_btn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " myProgress_btn is clicked"
      );
      res = await require("./myProgress.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "myProgress_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
