"use strict";
var footer= require('../../pages/ExperienceApp/footer.page.js');
var sts;

module.exports = {
TST_FOOT_TC_1 :   async function (testdata) { 
sts = await footer.click_footerTermsOfUse();
console.log(sts);
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");
},


TST_FOOT_TC_2 :   async function (testdata) { 
sts = await footer.click_footerPrivacy();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_FOOT_TC_3 :   async function (testdata) { 
sts = await footer.click_footerAccesibility();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");
},

TST_FOOT_TC_4 :   async function (testdata) { 
sts = await footer.click_footerOurApproach();
await assertion.assertEqual(sts, true,"Page is not launched. ");

},

TST_FOOT_TC_5 :   async function (testdata) { 
sts = await footer.click_footerSiteFeedback();
await assertion.assertEqual(sts, true,"Page is not launched.");

},


TST_FOOT_TC_6 :   async function (testdata) { 

sts = await footer.click_footerFAQ();
await assertion.assertEqual(sts, true,"Page is not launched. ");

},

TST_FOOT_TC_7 :   async function (testdata) { 
sts = await footer.click_footerCambridgeOneSchool();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_FOOT_TC_8 :   async function (testdata) { 
sts = await footer.click_footerHelp();
await assertion.assertEqual(sts, true,"Page is not launched. ");
}



}