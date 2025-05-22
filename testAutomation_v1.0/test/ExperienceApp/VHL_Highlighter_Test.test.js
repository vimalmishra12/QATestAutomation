"use strict";
var highlighterTest= require('../../pages/ExperienceApp/highlighterTest.page.js');
var sts;

module.exports = {
TST_HIGH_TC_1 :   async function (testdata) { 
sts = await highlighterTest.click_Eraser Button();
await assertion.assertEqual(sts, true,"Eraser Button are not Clicked");
},

TST_HIGH_TC_2 :   async function (testdata) { 
sts = await highlighterTest.click_Clear All();
await assertion.assertEqual(sts, true,"Clear All are not Clicked");
},

TST_HIGH_TC_3 :   async function (testdata) { 
sts = await highlighterTest.getData_Annotation Toolbar(testdata);
await assertion.assertEqual(sts.Pen Icon, true ,"Pen Icon Values is not as expected.");
await assertion.assertEqual(sts.Color Picker, testdata.Color Picker,"Color Picker Values is not as expected.");
await assertion.assertEqual(sts.Eraser Button, testdata.Eraser Button,"Eraser Button Values is not as expected.");
await assertion.assertEqual(sts.Clear All, testdata.Clear All,"Clear All Values is not as expected.");
},

TST_HIGH_TC_4 :   async function (testdata) { 
sts = await highlighterTest.getData_button(testdata);
await assertion.assertEqual(sts.Close Button, testdata.Close Button,"Close Button Values is not as expected.");
},

}