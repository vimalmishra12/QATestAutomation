"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    // Resolves to C1Selectors.json → css.ComproC1.setupSchoolAccount.primaryBtn
    // button.btn-purple is confirmed present on every wizard step — used as the stable init signal
    pageHeading: selectorFile.css.ComproC1.setupSchoolAccount.primaryBtn,

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
        // Resolves to C1Selectors.json → css.ComproC1.setupSchoolAccount.primaryBtn
        let selector = selectorFile.css.ComproC1.setupSchoolAccount.primaryBtn;
        // This shared hover fn is reused across all 8 wizard steps (ADR-011). On the long Address
        // step the button sits below the fold and moveTo() does not auto-scroll, so we use
        // hoverCenter() which scrolls the button to viewport centre before the pointer move to
        // avoid "move target out of bounds". Harmless on steps where the button is already in view.
        res = await action.hoverCenter(selector);
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
     * Clicks the primary "Next" button and confirms navigation to step 2 (school type).
     * Lazy require to avoid circular dependency — ADR-004.
     */
    click_next: async function () {
        await logger.logInto(await stackTrace.get(), 'click_next');
        var res;
        res = await action.click(selectorFile.css.ComproC1.setupSchoolAccount.primaryBtn);
        // true == res intentional loose equality per ADR-009
        if (true == res) {
            await logger.logInto(await stackTrace.get(), 'next button clicked');
            res = await require('./schoolType.page.js').isInitialized();
        } else {
            await logger.logInto(await stackTrace.get(), res + 'next button NOT clicked', 'error');
        }
        return res;
    }
};
