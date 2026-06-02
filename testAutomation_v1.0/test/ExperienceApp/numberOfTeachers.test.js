"use strict";
var numberOfTeachers = require('../../pages/ExperienceApp/numberOfTeachers.page.js');
var sts;

module.exports = {

    // Verify wizard step 3 (number of teachers) is loaded
    TST_NTCH_TC_1: async function (testdata) {
        sts = await numberOfTeachers.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'Number of teachers step did not load.');
    },

    // Select first radio option ("2-14") to enable the Next button on step 3
    TST_NTCH_TC_3: async function (testdata) {
        sts = await numberOfTeachers.click_firstOption();
        await assertion.assertEqual(sts, true, 'First radio option on number of teachers step could not be selected.');
    },

    /**
     * Clicks "Next" on step 3 to advance to step 4 (school name).
     * Used in Before hooks of suites that need to reach step 4 or beyond.
     */
    TST_NTCH_TC_2: async function (testdata) {
        sts = await numberOfTeachers.click_next();
        await assertion.assertEqual(sts.pageStatus, true, 'School name step did not load after clicking Next on number of teachers.');
    }

};
