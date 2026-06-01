"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    // button.btn-purple is the stable init signal — confirmed present on every wizard step
    pageHeading: selectorFile.css.ComproC1.schoolAddress.primaryBtn,

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
        // Resolves to C1Selectors.json → css.ComproC1.schoolAddress.primaryBtn
        let selector = selectorFile.css.ComproC1.schoolAddress.primaryBtn;
        res = await action.moveTo(selector);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            let color = await action.getCSSProperty(selector, 'background-color');
            return { pageStatus: true, hoverColor: color };
        }
        return { pageStatus: res };
    },

    /**
     * Fills street address (textarea) and city — required fields before Next is enabled on step 6.
     * Street address is a textarea element (qid t-ss-ad-inpt-1); city is an input (qid t-ss-ad-inpt-2).
     */
    set_address: async function (testdata) {
        await logger.logInto(await stackTrace.get(), 'set_address');
        var res;
        // Resolves to C1Selectors.json → css.ComproC1.schoolAddress.streetAddressInput
        res = await action.setValue(selectorFile.css.ComproC1.schoolAddress.streetAddressInput, testdata.streetAddress);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'streetAddress set to: ' + testdata.streetAddress);
            // Resolves to C1Selectors.json → css.ComproC1.schoolAddress.cityInput
            res = await action.setValue(selectorFile.css.ComproC1.schoolAddress.cityInput, testdata.city);
            if (true == res) {
                await logger.logInto(await stackTrace.get(), 'city set to: ' + testdata.city);
            } else {
                await logger.logInto(await stackTrace.get(), res + 'city NOT set', 'error');
            }
        } else {
            await logger.logInto(await stackTrace.get(), res + 'streetAddress NOT set', 'error');
        }
        return res;
    },

    /**
     * Clicks the primary "Next" button and confirms navigation to step 7 (contact details).
     * Lazy require to avoid circular dependency — ADR-004.
     */
    click_next: async function () {
        await logger.logInto(await stackTrace.get(), 'click_next');
        var res;
        res = await action.click(selectorFile.css.ComproC1.schoolAddress.primaryBtn);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'next button clicked');
            res = await require('./schoolContactDetails.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res + 'next button NOT clicked', 'error');
        }
        return res;
    }
};
