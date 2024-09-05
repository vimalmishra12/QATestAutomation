"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  progress: selectorFile.css.ComproC1.progress.progress,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.progress),
    };
    return res;
  },

  getData_progress: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      progress:
        (await action.getElementCount(this.progress)) > 0
          ? await action.getText(this.progress)
          : null,
      my_homework:
        (await action.getElementCount(this.my_homework)) > 0
          ? await action.getText(this.my_homework)
          : null,
    };
    return obj;
  },
};
