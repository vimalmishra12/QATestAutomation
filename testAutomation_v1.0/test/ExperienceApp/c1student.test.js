"use strict";
var c1student = require('../../pages/ExperienceApp/c1student.page.js');
var sts;

module.exports = {
    TST_C1ST_TC_1: async function (testdata) {
        sts = await c1student.click_bellIcon();
        await assertion.assertEqual(sts, true, "bellIcon are not Clicked");
    },

    TST_C1ST_TC_2: async function (testdata) {
        sts = await c1student.click_assignmentNotification();
        await assertion.assertEqual(sts, true, "assignmentNotification are not Clicked");
    },

    TST_C1ST_TC_3: async function (testdata) {
        sts = await c1student.click_routeToAssignment();
        await assertion.assertEqual(sts, true, "routeToAssignment are not Clicked");
    },

    TST_C1ST_TC_4: async function (testdata) {
        sts = await c1student.click_openHamburgerIcon();
        await assertion.assertEqual(sts, true, "openHamburgerIcon are not Clicked");
    },

    TST_C1ST_TC_5: async function (testdata) {
        sts = await c1student.click_assignmentBack();
        await assertion.assertEqual(sts, true, "assignmentBack are not Clicked");
    },

    TST_C1ST_TC_6: async function (testdata) {
        sts = await c1student.click_closeSideBar();
        await assertion.assertEqual(sts, true, "closeSideBar are not Clicked");
    },

    TST_C1ST_TC_7: async function (testdata) {
        sts = await c1student.click_goBack();
        await assertion.assertEqual(sts, true, "goBack are not Clicked");
    },

    TST_C1ST_TC_8: async function (testdata) {
        sts = await c1student.getData_c1assignmentstudent(testdata);
        await assertion.assertEqual(sts.bellIcon, testdata.bellIcon, "bellIcon Values is not as expected.");
        await assertion.assertEqual(sts.assignmentNotification, testdata.assignmentNotification, "assignmentNotification Values is not as expected.");
        await assertion.assertEqual(sts.routeToAssignment, testdata.routeToAssignment, "routeToAssignment Values is not as expected.");
        await assertion.assertEqual(sts.openHamburgerIcon, testdata.openHamburgerIcon, "openHamburgerIcon Values is not as expected.");
        await assertion.assertEqual(sts.assignmentBack, testdata.assignmentBack, "assignmentBack Values is not as expected.");
        await assertion.assertEqual(sts.closeSideBar, testdata.closeSideBar, "closeSideBar Values is not as expected.");
        await assertion.assertEqual(sts.goBack, testdata.goBack, "goBack Values is not as expected.");
    },

}