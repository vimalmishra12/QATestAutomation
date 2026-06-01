"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    // button.btn-purple is the stable init signal — confirmed present on every wizard step
    pageHeading: selectorFile.css.ComproC1.numberOfTeachers.primaryBtn,

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
        // Resolves to C1Selectors.json → css.ComproC1.numberOfTeachers.primaryBtn
        let selector = selectorFile.css.ComproC1.numberOfTeachers.primaryBtn;
        res = await action.moveTo(selector);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            let color = await action.getCSSProperty(selector, 'background-color');
            return { pageStatus: true, hoverColor: color };
        }
        return { pageStatus: res };
    },

    /**
     * Selects the first radio option ("2-14") to enable the Next button.
     * Radio must be selected before Next becomes active on this wizard step.
     */
    click_firstOption: async function () {
        await logger.logInto(await stackTrace.get(), 'click_firstOption');
        var res;
        // Resolves to C1Selectors.json → css.ComproC1.numberOfTeachers.firstOptionRadio
        res = await action.click(selectorFile.css.ComproC1.numberOfTeachers.firstOptionRadio);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'first radio option selected');
        } else {
            await logger.logInto(await stackTrace.get(), res + 'first radio option NOT selected', 'error');
        }
        return res;
    },

    /**
     * Clicks the primary "Next" button and confirms navigation to step 4 (school name).
     * Lazy require to avoid circular dependency — ADR-004.
     */
    click_next: async function () {
        await logger.logInto(await stackTrace.get(), 'click_next');
        var res;
        res = await action.click(selectorFile.css.ComproC1.numberOfTeachers.primaryBtn);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'next button clicked');
            res = await require('./schoolName.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res + 'next button NOT clicked', 'error');
        }
        return res;
    }
};
