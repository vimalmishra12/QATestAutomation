"use strict";
var VHL_Highlighter_Test= require('../../pages/ExperienceApp/VHL_Highlighter_Test.page.js');
var sts;

module.exports = {
TST_VHL__TC_1 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.click_highlighterButton();
await assertion.assertEqual(sts, true,"highlighterButton are not Clicked");
},

TST_VHL__TC_2 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.click_eraserButton();
await assertion.assertEqual(sts, true,"eraserButton are not Clicked");
},

TST_VHL__TC_3 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.click_clearAllButton();
await assertion.assertEqual(sts, true,"clearAllButton are not Clicked");
},

TST_VHL__TC_4 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.getData_vhl_highlighter_test(testdata);
await assertion.assertEqual(sts.editIcon, true ,"editIcon Values is not as expected.");
// await assertion.assertEqual(sts.highlighterButton, testdata.highlighterButton,"highlighterButton Values is not as expected.");
// await assertion.assertEqual(sts.colorPickerButton, testdata.colorPickerButton,"colorPickerButton Values is not as expected.");
await assertion.assertEqual(sts.eraserButton, testdata.eraserButton,"eraserButton Values is not as expected.");
await assertion.assertEqual(sts.clearAllButton, testdata.clearAllButton,"clearAllButton Values is not as expected.");
},

}