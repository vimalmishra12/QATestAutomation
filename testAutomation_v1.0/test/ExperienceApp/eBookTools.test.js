"use strict";
var eBookTools= require('../../pages/ExperienceApp/eBookTools.page.js');
var sts;

module.exports = {
TST_EBOO_TC_1 :   async function () { 
sts = await eBookTools.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "eBookTools page status mismatch");
},

TST_EBOO_TC_2 :   async function (testdata) { 
sts = await eBookTools.click_notes();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_EBOO_TC_3 :   async function (testdata) { 
sts = await eBookTools.click_Timer();
await assertion.assertEqual(sts, true,"Timer are not Clicked");
},

TST_EBOO_TC_4 :   async function (testdata) { 
sts = await eBookTools.getData_ebookTools(testdata);
await assertion.assertEqual(sts.notes, testdata.notes,"notes Values is not as expected.");
await assertion.assertEqual(sts.Timer, testdata.Timer,"Timer Values is not as expected.");
},

}