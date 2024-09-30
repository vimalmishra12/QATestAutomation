"use strict";
var footer= require('../../pages/ExperienceApp/footer.page.js');
var sts;

module.exports = {
TST_FOOT_TC_1 :   async function (testdata) { 
sts = await footer.click_footerTermsOfUse();
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

// TST_FOOT_TC_4 :   async function (testdata) { 
// sts = await footer.click_footerOurApproaches();
// await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

// },

// TST_FOOT_TC_5 :   async function (testdata) { 
// sts = await footer.click_footerSiteFeedback();
// await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

// },

// TST_FOOT_TC_6 :   async function (testdata) { 
// sts = await footer.click_footerFAQs();
// await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

// },

TST_FOOT_TC_7 :   async function (testdata) { 
sts = await footer.click_footerCambridgeOneSchool();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

// TST_FOOT_TC_8 :   async function (testdata) { 
// sts = await footer.click_footerHelp();
// //console.log("debug 1 footer.test.js .1")
// await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");
// //console.log("debug 2 footer.test.js .2")
// },

// TST_FOOT_TC_9 :   async function (testdata) { 
// sts = await footer.getData_footerPage(testdata);
// await assertion.assertEqual(sts.footerTermsOfUse, testdata.footerTermsOfUse,"footerTermsOfUse Values is not as expected.");
// await assertion.assertEqual(sts.footerPrivacyNotice, testdata.footerPrivacyNotice,"footerPrivacyNotice Values is not as expected.");
// await assertion.assertEqual(sts.footerAccesibility, testdata.footerAccesibility,"footerAccesibility Values is not as expected.");
// await assertion.assertEqual(sts.footerOurApproaches, testdata.footerOurApproaches,"footerOurApproaches Values is not as expected.");
// await assertion.assertEqual(sts.footerSiteFeedback, testdata.footerSiteFeedback,"footerSiteFeedback Values is not as expected.");
// await assertion.assertEqual(sts.footerFAQs, testdata.footerFAQs,"footerFAQs Values is not as expected.");
// await assertion.assertEqual(sts.footerCambridgeOneSchool, testdata.footerCambridgeOneSchool,"footerCambridgeOneSchool Values is not as expected.");
// await assertion.assertEqual(sts.footerHelp, testdata.footerHelp,"footerHelp Values is not as expected.");
// await assertion.assertEqual(sts.footerCambridgeUniversity, testdata.footerCambridgeUniversity,"footerCambridgeUniversity Values is not as expected.");
// },

}