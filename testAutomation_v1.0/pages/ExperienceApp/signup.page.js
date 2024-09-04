"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');
var res;

module.exports = {
    createAccountTitleTxt: selectorFile.css.ComproC1.signUp.createAccountTitleTxt,

    isInitialized: async function () {
       // var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.createAccountTitleTxt, 5000),
           // appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },
}

