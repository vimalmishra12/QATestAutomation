"use strict";
var showHideSelection= require('../../pages/ExperienceApp/showHideSelection.page.js');
var sts;

module.exports = {
TST_SHOW_TC_1 :   async function (testdata) { 
sts = await showHideSelection.click_hideSelection();
await assertion.assertEqual(sts, true,"hideSelection are not Clicked");
},

TST_SHOW_TC_2 :   async function (testdata) { 
sts = await showHideSelection.click_showSelection();
await assertion.assertEqual(sts, true,"showSelection are not Clicked");
},

TST_SHOW_TC_3 :   async function (testdata) { 
sts = await showHideSelection.click_closeSelection();
await assertion.assertEqual(sts, true,"closeSelection are not Clicked");
},

TST_SHOW_TC_4 :   async function (testdata) { 
sts = await showHideSelection.getData_showAndHideSelection(testdata);
await assertion.assertEqual(sts.hideSelection, testdata.hideSelection,"hideSelection Values is not as expected.");
await assertion.assertEqual(sts.showSelection, testdata.showSelection,"showSelection Values is not as expected.");
await assertion.assertEqual(sts.closeSelection, testdata.closeSelection,"closeSelection Values is not as expected.");
},

}