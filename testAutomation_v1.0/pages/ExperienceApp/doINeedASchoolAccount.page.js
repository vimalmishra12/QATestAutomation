"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    // Resolves to C1Selectors.json → css.ComproC1.doINeedASchoolAccount.pageHeading
    pageHeading: selectorFile.css.ComproC1.doINeedASchoolAccount.pageHeading,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.pageHeading)
        };
        return res;
    },

    /**
     * Clicks "Set up a school account" CTA and confirms navigation to wizard step 1.
     * Lazy require to avoid circular dependency — ADR-004.
     */
    click_setupSchoolAccount: async function () {
        await logger.logInto(await stackTrace.get(), 'click_setupSchoolAccount');
        var res;
        // Resolves to C1Selectors.json → css.ComproC1.doINeedASchoolAccount.setupSchoolAccountBtn
        res = await action.click(selectorFile.css.ComproC1.doINeedASchoolAccount.setupSchoolAccountBtn);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'setupSchoolAccountBtn clicked');
            res = await require('./setupSchoolAccount.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res + 'setupSchoolAccountBtn NOT clicked', 'error');
        }
        return res;
    }
};
