"use strict";
var vhlhighlighter= require('../../pages/ExperienceApp/vhlhighlighter.page.js');
var sts;

module.exports = {
TST_VHLH_TC_1 :   async function (testdata) { 
sts = await vhlhighlighter.click_highlighterIcon();
await assertion.assertEqual(sts, true,"highlighterIcon are not Clicked");
},

TST_VHLH_TC_2 :   async function (testdata) { 
sts = await vhlhighlighter.click_eraserButton();
await assertion.assertEqual(sts, true,"eraserButton is not Clicked");
},

TST_VHLH_TC_3 :   async function (testdata) { 
sts = await vhlhighlighter.click_highlighterBtn();
await assertion.assertEqual(sts, true,"highlighterBtn is not Clicked");
},

TST_VHLH_TC_4 :   async function (testdata) { 
sts = await vhlhighlighter.click_closeIcon();
await assertion.assertEqual(sts, true,"closeIcon is not Clicked");
},

TST_VHLH_TC_5 :   async function (testdata) { 
sts = await vhlhighlighter.click_removeAllButton();
await assertion.assertEqual(sts, true,"Remove all Button is not Clicked");
}

}