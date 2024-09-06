"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  cqa_ebook_evolve: selectorFile.css.ComproC1.eBook.cqa_ebook_evolve,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.cqa_ebook_evolve),
    };
    return res;
  },

  getData_ebookEvolve: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      cqa_ebook_evolve:
        (await action.getElementCount(this.cqa_ebook_evolve)) > 0
          ? await action.getText(this.cqa_ebook_evolve)
          : null,
      my_homework:
        (await action.getElementCount(this.my_homework)) > 0
          ? await action.getText(this.my_homework)
          : null,
    };
    return obj;
  },
};
