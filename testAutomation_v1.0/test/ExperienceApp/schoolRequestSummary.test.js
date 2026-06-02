"use strict";
var schoolRequestSummary = require('../../pages/ExperienceApp/schoolRequestSummary.page.js');
var sts;

module.exports = {

    // Verify wizard step 8 (school request summary) is loaded
    TST_SRQS_TC_1: async function (testdata) {
        sts = await schoolRequestSummary.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, 'School request summary step did not load.');
    }

};
