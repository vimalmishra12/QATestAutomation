"use strict";
var schoolContactDetails = require('../../pages/ExperienceApp/schoolContactDetails.page.js');
var sts;

module.exports = {

    // Verify wizard step 7 (contact details) is loaded
    TST_SCON_TC_1: async function (testdata) {
        sts = await schoolContactDetails.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'School contact details step did not load.');
    },

    // Fill telephone number (required) to enable the Next button on step 7
    TST_SCON_TC_3: async function (testdata) {
        sts = await schoolContactDetails.set_telephone(testdata);
        await assertion.assertEqual(sts, true, 'Telephone field could not be filled on step 7.');
    },

    /**
     * Clicks "Next" on step 7 to advance to step 8 (request summary).
     * Used in Before hooks of suites that need to reach step 8.
     */
    TST_SCON_TC_2: async function (testdata) {
        sts = await schoolContactDetails.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'School request summary step did not load after clicking Next on contact details.');
    }

};
