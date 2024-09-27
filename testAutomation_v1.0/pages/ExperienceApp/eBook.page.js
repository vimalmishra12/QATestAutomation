"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  cqa_ebook_evolve: selectorFile.css.ComproC1.eBook.cqa_ebook_evolve,
  cqaebookwithoutp_DT: selectorFile.css.ComproC1.eBook.cqaebookwithoutp_DT_Nemo,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    browser.pause(5000);
    res = {
      pageStatus: await action.waitForDisplayed(this.cqaebookwithoutp_DT_Nemo),
    };
    console.log("Before return in isInitiazed", res);
    return res;
  },

  getData_ebookEvolve: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      cqa_ebook_evolve:
        (await action.getElementCount(this.cqaebookwithoutp_DT_Nemo)) > 0
          ? await action.getText(this.cqaebookwithoutp_DT_Nemo)
          : null,
      my_homework:
        (await action.getElementCount(this.my_homework)) > 0
          ? await action.getText(this.my_homework)
          : null,
    };
    return obj;
  },
};
