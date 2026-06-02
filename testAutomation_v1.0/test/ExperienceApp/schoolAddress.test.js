"use strict";
var schoolAddress = require('../../pages/ExperienceApp/schoolAddress.page.js');
var sts;

module.exports = {

    // Verify wizard step 6 (school address) is loaded
    TST_SADR_TC_1: async function (testdata) {
        sts = await schoolAddress.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'School address step did not load.');
    },

    // Fill street address and city (required) to enable the Next button on step 6
    TST_SADR_TC_3: async function (testdata) {
        sts = await schoolAddress.set_address(testdata);
        await assertion.assertEqual(sts, true, 'Street address or city field could not be filled on step 6.');
    },

    /**
     * Clicks "Next" on step 6 to advance to step 7 (contact details).
     * Used in Before hooks of suites that need to reach step 7 or beyond.
     */
    TST_SADR_TC_2: async function (testdata) {
        sts = await schoolAddress.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'School contact details step did not load after clicking Next on school address.');
    }

};
