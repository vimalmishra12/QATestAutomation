"use strict";
var schoolType = require('../../pages/ExperienceApp/schoolType.page.js');
var sts;

module.exports = {

    // Navigate from wizard step 1 to step 2 (school type selection)
    TST_SCTY_TC_1: async function (testdata) {
        sts = await schoolType.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'School type step did not load.');
    },

    // Select first radio option ("Primary school") to enable the Next button on step 2
    TST_SCTY_TC_3: async function (testdata) {
        sts = await schoolType.click_firstOption();
        await assertion.assertEqual(sts, true, 'First radio option on school type step could not be selected.');
    },

    /**
     * Clicks "Next" on step 2 to advance to step 3 (number of teachers).
     * Used in Before hooks of suites that need to reach step 3 or beyond.
     */
    TST_SCTY_TC_2: async function (testdata) {
        sts = await schoolType.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'Number of teachers step did not load after clicking Next on school type.');
    }

};
