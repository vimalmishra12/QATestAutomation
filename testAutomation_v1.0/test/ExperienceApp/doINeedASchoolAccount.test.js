"use strict";
var doINeedASchoolAccount = require('../../pages/ExperienceApp/doINeedASchoolAccount.page.js');
var sts;

module.exports = {

    TST_DINS_TC_1: async function (testdata) {
        // Verify "Do I need a school account?" page is loaded, then navigate to wizard step 1
        sts = await doINeedASchoolAccount.click_setupSchoolAccount();
        await assertion.assertEqual(sts.pageStatus, true, 'Set up a school account wizard step 1 did not load.');
    }

};
