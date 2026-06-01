"use strict";
var schoolLocation = require('../../pages/ExperienceApp/schoolLocation.page.js');
var sts;

module.exports = {

    // Verify wizard step 5 (school location) is loaded
    TST_SLOC_TC_1: async function (testdata) {
        sts = await schoolLocation.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'School location step did not load.');
    },

    /**
     * Clears and re-types location to trigger validation and enable Next on step 5.
     * Field is pre-filled but requires interaction for the Next button to activate.
     */
    TST_SLOC_TC_3: async function (testdata) {
        sts = await schoolLocation.set_location(testdata);
        await assertion.assertEqual(sts, true, 'Location field could not be set on step 5.');
    },

    /**
     * Clicks "Next" on step 5 to advance to step 6 (school address).
     * Used in Before hooks of suites that need to reach step 6 or beyond.
     */
    TST_SLOC_TC_2: async function (testdata) {
        sts = await schoolLocation.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'School address step did not load after clicking Next on school location.');
    }

};
