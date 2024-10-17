// file is not using only for reference 
"use strict";
var eBookLearningPageHyperlink= require('../../pages/ExperienceApp/eBookLearningPageHyperlink.page.js');
var sts;

module.exports = {

// mannnually changed id "TST_EBOO_TC_1" to "TST_EBOOK_TC_1"
TST_EBOOK_TC_1 :   async function (testdata) { 
sts = await eBookLearningPageHyperlink.click_hyperLinkAnswer();
await assertion.assertEqual(sts, true,"hyperLinkAnswer are not Clicked");
},

TST_EBOO_TC_2 :   async function (testdata) { 
sts = await eBookLearningPageHyperlink.click_hyperlinkAudio();
await assertion.assertEqual(sts, true,"hyperlinkAudio are not Clicked");
},

TST_EBOO_TC_3 :   async function (testdata) { 
sts = await eBookLearningPageHyperlink.getData_ebookLearningHyperlink(testdata);
await assertion.assertEqual(sts.hyperLinkAnswer, testdata.hyperLinkAnswer,"hyperLinkAnswer Values is not as expected.");
await assertion.assertEqual(sts.hyperlinkAudio, testdata.hyperlinkAudio,"hyperlinkAudio Values is not as expected.");
},

}