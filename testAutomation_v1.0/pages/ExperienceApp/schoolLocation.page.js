"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    // button.btn-purple is the stable init signal — confirmed present on every wizard step
    pageHeading: selectorFile.css.ComproC1.schoolLocation.primaryBtn,

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
        // Resolves to C1Selectors.json → css.ComproC1.schoolLocation.primaryBtn
        let selector = selectorFile.css.ComproC1.schoolLocation.primaryBtn;
        res = await action.moveTo(selector);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            let color = await action.getCSSProperty(selector, 'background-color');
            return { pageStatus: true, hoverColor: color };
        }
        return { pageStatus: res };
    },

    /**
     * Clears and re-types the location field to ensure validation triggers and Next is enabled.
     * Field is pre-filled with the user's country but requires user interaction to activate Next.
     */
    set_location: async function (testdata) {
        await logger.logInto(await stackTrace.get(), 'set_location');
        var res;
        // Resolves to C1Selectors.json → css.ComproC1.schoolLocation.locationInput
        res = await action.setValue(selectorFile.css.ComproC1.schoolLocation.locationInput, testdata.location);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'location set to: ' + testdata.location);
        } else {
            await logger.logInto(await stackTrace.get(), res + 'location NOT set', 'error');
        }
        return res;
    },

    /**
     * Clicks the primary "Next" button and confirms navigation to step 6 (school address).
     * Lazy require to avoid circular dependency — ADR-004.
     */
    click_next: async function () {
        await logger.logInto(await stackTrace.get(), 'click_next');
        var res;
        res = await action.click(selectorFile.css.ComproC1.schoolLocation.primaryBtn);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'next button clicked');
            res = await require('./schoolAddress.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res + 'next button NOT clicked', 'error');
        }
        return res;
    }
};
