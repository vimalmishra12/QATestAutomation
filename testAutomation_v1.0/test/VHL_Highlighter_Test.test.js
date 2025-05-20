"use strict";
var VHL_Highlighter_Test= require('../../pages/ExperienceApp/VHL_Highlighter_Test.page.js');
var sts;

module.exports = {
TST_VHL__TC_1 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");
},

TST_VHL__TC_2 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");
},

TST_VHL__TC_3 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");sts = await VHL_Highlighter_Test.click_undefined();
await assertion.assertEqual(sts, true ,"undefined are not Clicked");
},

TST_VHL__TC_4 :   async function (testdata) { 
sts = await VHL_Highlighter_Test.getData_vhl_highlighter_test(testdata);
await assertion.assertEqual(sts.undefined, true ,"undefined Values is not as expected.");
await assertion.assertEqual(sts.undefined, testdata.undefined,"undefined Values is not as expected.");
await assertion.assertEqual(sts.undefined, testdata.undefined,"undefined Values is not as expected.");
await assertion.assertEqual(sts.undefined, testdata.undefined,"undefined Values is not as expected.");
await assertion.assertEqual(sts.undefined, testdata.undefined,"undefined Values is not as expected.");
},

}