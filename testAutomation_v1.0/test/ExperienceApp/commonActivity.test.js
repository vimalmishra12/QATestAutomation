"use strict";
var commonActivity= require('../../pages/ExperienceApp/commonActivity.page.js');
var sts;

module.exports = {
TST_COMM_TC_1 :   async function (testdata) { 
sts = await commonActivity.click_activityAnsCheck();
await assertion.assertEqual(sts, true,"activityAnsCheck are not Clicked");
},

TST_COMM_TC_2 :   async function (testdata) { 
sts = await commonActivity.click_activityNext();
await assertion.assertEqual(sts, true,"activityNext are not Clicked");
},

TST_COMM_TC_3 :   async function (testdata) { 
sts = await commonActivity.click_activityClose();
await assertion.assertEqual(sts, true,"activityClose are not Clicked");
},

TST_COMM_TC_4 :   async function (testdata) { 
sts = await commonActivity.click_activityStartAgain();
await assertion.assertEqual(sts, true,"activityStartAgain are not Clicked");
},

TST_COMM_TC_5 :   async function (testdata) { 
sts = await commonActivity.click_activityExit();
await assertion.assertEqual(sts, true,"activityExit are not Clicked");
},

TST_COMM_TC_6 :   async function (testdata) { 
sts = await commonActivity.getData_commonActivity(testdata);
await assertion.assertEqual(sts.activityAnsCheck, testdata.activityAnsCheck,"activityAnsCheck Values is not as expected.");
await assertion.assertEqual(sts.activityNext, testdata.activityNext,"activityNext Values is not as expected.");
await assertion.assertEqual(sts.activityClose, testdata.activityClose,"activityClose Values is not as expected.");
await assertion.assertEqual(sts.activityStartAgain, testdata.activityStartAgain,"activityStartAgain Values is not as expected.");
await assertion.assertEqual(sts.activityExit, testdata.activityExit,"activityExit Values is not as expected.");
},

}