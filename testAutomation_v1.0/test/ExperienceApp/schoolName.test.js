"use strict";
var schoolName = require('../../pages/ExperienceApp/schoolName.page.js');
var sts;

module.exports = {

    // Verify wizard step 4 (school name) is loaded
    TST_SNAM_TC_1: async function (testdata) {
        sts = await schoolName.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'School name step did not load.');
    },

    // Fill school name field ("Test School") to enable the Next button on step 4
    TST_SNAM_TC_3: async function (testdata) {
        sts = await schoolName.set_schoolName(testdata);
        await assertion.assertEqual(sts, true, 'School name field could not be filled on step 4.');
    },

    /**
     * Clicks "Next" on step 4 to advance to step 5 (school location).
     * Used in Before hooks of suites that need to reach step 5 or beyond.
     */
    TST_SNAM_TC_2: async function (testdata) {
        sts = await schoolName.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'School location step did not load after clicking Next on school name.');
    }

};
