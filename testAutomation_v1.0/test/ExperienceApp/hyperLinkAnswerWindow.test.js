// file is not using only for reference 
"use strict";
var hyperLinkAnswerWindow= require('../../pages/ExperienceApp/hyperLinkAnswerWindow.page.js');
var sts;

module.exports = {
TST_HYPE_TC_1 :   async function (testdata) { 
sts = await hyperLinkAnswerWindow.click_hyperAnswerReveal();
await assertion.assertEqual(sts, true,"hyperAnswerReveal are not Clicked");
},

TST_HYPE_TC_2 :   async function (testdata) { 
sts = await hyperLinkAnswerWindow.click_hyperAnswerClose();
await assertion.assertEqual(sts, true,"hyperAnswerClose are not Clicked");
},

TST_HYPE_TC_3 :   async function (testdata) { 
sts = await hyperLinkAnswerWindow.click_hyperAnswerFullScreen();
await assertion.assertEqual(sts, true,"hyperAnswerFullScreen are not Clicked");
},

TST_HYPE_TC_4 :   async function (testdata) { 
sts = await hyperLinkAnswerWindow.getData_ebookHyperlinkAnswer(testdata);
await assertion.assertEqual(sts.hyperAnswerReveal, testdata.hyperAnswerReveal,"hyperAnswerReveal Values is not as expected.");
await assertion.assertEqual(sts.hyperAnswerClose, testdata.hyperAnswerClose,"hyperAnswerClose Values is not as expected.");
await assertion.assertEqual(sts.hyperAnswerFullScreen, testdata.hyperAnswerFullScreen,"hyperAnswerFullScreen Values is not as expected.");
await assertion.assertEqual(sts.hyperAnswerQuestion, testdata.hyperAnswerQuestion,"hyperAnswerQuestion Values is not as expected.");
},

}