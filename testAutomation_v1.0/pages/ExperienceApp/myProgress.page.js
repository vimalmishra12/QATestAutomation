"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  my_progress: selectorFile.css.ComproC1.myProgress.my_progress,
  my_progress_Nemo: selectorFile.css.ComproC1.myProgress.my_progress_Nemo,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.my_progress_Nemo),
    };
    return res;
  },

  getData_myProgress: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      my_progress:
        (await action.getElementCount(this.my_progress_Nemo)) > 0
          ? await action.getText(this.my_progress)
          : null,
      my_homework:
        (await action.getElementCount(this.my_homework)) > 0
          ? await action.getText(this.my_homework)
          : null,
    };
    return obj;
  },
};
