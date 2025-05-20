"use strict";
var vhl_landingtest= require('../../pages/ExperienceApp/vhl_landingtest.page.js');
var sts;

module.exports = {
TST_VHL__TC_1 :   async function () { 
sts = await vhl_landingtest.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "vhl_landingtest page status mismatch");
},

TST_VHL__TC_2 :   async function (testdata) { 
sts = await vhl_landingtest.click_usernameLabel();
await assertion.assertEqual(sts, true,"usernameLabel are not Clicked");
},

TST_VHL__TC_3 :   async function (testdata) { 
sts = await vhl_landingtest.click_notes();
await assertion.assertEqual(sts, true,"notes are not Clicked");
},

TST_VHL__TC_4 :   async function (testdata) { 
sts = await vhl_landingtest.click_closeNoteBox();
await assertion.assertEqual(sts, true,"closeNoteBox are not Clicked");
},

TST_VHL__TC_5 :   async function (testdata) { 
sts = await vhl_landingtest.click_tableOfContentsPage1();
await assertion.assertEqual(sts, true,"tableOfContentsPage1 are not Clicked");
},

TST_VHL__TC_6 :   async function (testdata) { 
sts = await vhl_landingtest.click_closeTOC();
await assertion.assertEqual(sts, true,"closeTOC are not Clicked");
},

TST_VHL__TC_7 :   async function (testdata) { 
sts = await vhl_landingtest.getData_vhl_landingtest(testdata);
await assertion.assertEqual(sts.usernameLabel, testdata.usernameLabel,"usernameLabel Values is not as expected.");
await assertion.assertEqual(sts.notes, testdata.notes,"notes Values is not as expected.");
await assertion.assertEqual(sts.closeNoteBox, testdata.closeNoteBox,"closeNoteBox Values is not as expected.");
await assertion.assertEqual(sts.tableOfContentsPage1, testdata.tableOfContentsPage1,"tableOfContentsPage1 Values is not as expected.");
await assertion.assertEqual(sts.closeTOC, testdata.closeTOC,"closeTOC Values is not as expected.");
},

}