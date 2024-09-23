"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  notes: selectorFile.css.ComproC1.eBookTools.notes,
  Timer: selectorFile.css.ComproC1.eBookTools.Timer,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.notes),
    };
    return res;
  },

  getData_ebookTools: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      notes:
        (await action.getElementCount(this.notes)) > 0
          ? await action.getText(this.notes)
          : null,
      Timer:
        (await action.getElementCount(this.Timer)) > 0
          ? await action.getText(this.Timer)
          : null,
    };
    return obj;
  },

  click_notes: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notes);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notes is clicked");
      res = await require("./notes.page").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "notes is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_Timer: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.Timer);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " Timer is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "Timer is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
