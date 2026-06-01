"use strict";
var setupSchoolAccount = require('../../pages/ExperienceApp/setupSchoolAccount.page.js');
var sts;

module.exports = {

    /**
     * Verifies the primary button hover background-color is #6019B5 (rgb(96, 25, 181)).
     * Reused across all 8 wizard steps — button.btn-purple is present on every step,
     * so one TC covers all 8 assertions within the single suite — ADR-011.
     */
    TST_SUSA_TC_1: async function (testdata) {
        sts = await setupSchoolAccount.getHoverColor_primaryButton();
        await assertion.assertEqual(sts.pageStatus, true, 'Primary button was not found or hover failed.');
        // getCSSProperty returns an object; .value holds the resolved string e.g. "rgb(96, 25, 181)"
        await assertion.assertEqual(sts.hoverColor.value, testdata.expectedHoverColor,
            'Primary button hover color should be ' + testdata.expectedHoverColor + ' on ' + testdata.stepDescription);
    },

    // Clicks Next on wizard step 1 (intro) to advance to step 2 (school type)
    TST_SUSA_TC_2: async function (testdata) {
        sts = await setupSchoolAccount.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'School type step did not load after clicking Next on step 1.');
    }

};
