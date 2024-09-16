"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  practice_extra: selectorFile.css.ComproC1.practiceExtra.practice_extra,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.practice_extra),
    };
    return res;
  },

  getData_practiceExtra: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      practice_extra:
        (await action.getElementCount(this.practice_extra)) > 0
          ? await action.getText(this.practice_extra)
          : null,
      my_homework:
        (await action.getElementCount(this.my_homework)) > 0
          ? await action.getText(this.my_homework)
          : null,
    };
    return obj;
  },
};
