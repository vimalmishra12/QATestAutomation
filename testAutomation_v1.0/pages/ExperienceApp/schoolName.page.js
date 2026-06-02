"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    // button.btn-purple is the stable init signal — confirmed present on every wizard step
    pageHeading: selectorFile.css.ComproC1.schoolName.primaryBtn,

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
     * Hovers the primary "Next" button and returns its background-color CSS property.
     * Used to verify the purple hover colour change per NEMO-24388.
     */
    getHoverColor_primaryButton: async function () {
        await logger.logInto(await stackTrace.get(), 'getHoverColor_primaryButton');
        var res;
        // Resolves to C1Selectors.json → css.ComproC1.schoolName.primaryBtn
        let selector = selectorFile.css.ComproC1.schoolName.primaryBtn;
        res = await action.moveTo(selector);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            // Pause 400ms to let CSS transition finish before reading the settled hover colour
            await browser.pause(400);
            let color = await action.getCSSProperty(selector, 'background-color');
            return { pageStatus: true, hoverColor: color };
        }
        return { pageStatus: res };
    },

    /**
     * Types the school name into the text input to enable the Next button.
     * Field is required before Next becomes active on this wizard step.
     */
    set_schoolName: async function (testdata) {
        await logger.logInto(await stackTrace.get(), 'set_schoolName');
        var res;
        // Resolves to C1Selectors.json → css.ComproC1.schoolName.schoolNameInput
        res = await action.setValue(selectorFile.css.ComproC1.schoolName.schoolNameInput, testdata.schoolName);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'school name set to: ' + testdata.schoolName);
        } else {
            await logger.logInto(await stackTrace.get(), res + 'school name NOT set', 'error');
        }
        return res;
    },

    /**
     * Clicks the primary "Next" button and confirms navigation to step 5 (school location).
     * Lazy require to avoid circular dependency — ADR-004.
     */
    click_next: async function () {
        await logger.logInto(await stackTrace.get(), 'click_next');
        var res;
        res = await action.click(selectorFile.css.ComproC1.schoolName.primaryBtn);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'next button clicked');
            res = await require('./schoolLocation.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res + 'next button NOT clicked', 'error');
        }
        return res;
    }
};
