"use strict";
var c1assignment= require('../../pages/ExperienceApp/c1assignment.page.js');
var sts;

module.exports = {
TST_C1AS_TC_1 :   async function (testdata) { 
sts = await c1assignment.click_classheading();
await assertion.assertEqual(sts, true,"classheading are not Clicked");
},

TST_C1AS_TC_2 :   async function (testdata) { 
sts = await c1assignment.click_Assignments();
await assertion.assertEqual(sts, true,"Assignments are not Clicked");
},

TST_C1AS_TC_3 :   async function (testdata) { 
sts = await c1assignment.click_Createassignment();
await assertion.assertEqual(sts, true,"Createassignment are not Clicked");
},

TST_C1AS_TC_4 :   async function (testdata) { 
sts = await c1assignment.click_PracticeExtracqa();
await assertion.assertEqual(sts, true,"PracticeExtracqa are not Clicked");
},

TST_C1AS_TC_5 :   async function (testdata) { 
sts = await c1assignment.click_Unit1();
await assertion.assertEqual(sts, true,"Unit1 are not Clicked");
},

TST_C1AS_TC_6 :   async function (testdata) { 
sts = await c1assignment.click_LessonA();
await assertion.assertEqual(sts, true,"LessonA are not Clicked");
},

TST_C1AS_TC_7 :   async function (testdata) { 
sts = await c1assignment.click_Next();
await assertion.assertEqual(sts, true,"Next are not Clicked");
},

TST_C1AS_TC_8 :   async function (testdata) { 
sts = await c1assignment.click_setDate();
await assertion.assertEqual(sts, true,"setDate are not Clicked");
},

TST_C1AS_TC_9 :   async function (testdata) { 
sts = await c1assignment.click_selectStudent();
await assertion.assertEqual(sts, true,"selectStudent are not Clicked");
},

TST_C1AS_TC_10 :   async function (testdata) { 
sts = await c1assignment.click_ViewSummary();
await assertion.assertEqual(sts, true,"ViewSummary are not Clicked");
},

TST_C1AS_TC_11 :   async function (testdata) { 
sts = await c1assignment.click_Assign();
await assertion.assertEqual(sts, true,"Assign are not Clicked");
},

TST_C1AS_TC_12 :   async function (testdata) { 
sts = await c1assignment.getData_c1assignment(testdata);
await assertion.assertEqual(sts.classheading, testdata.classheading,"classheading Values is not as expected.");
await assertion.assertEqual(sts.Assignments, testdata.Assignments,"Assignments Values is not as expected.");
await assertion.assertEqual(sts.Createassignment, testdata.Createassignment,"Createassignment Values is not as expected.");
await assertion.assertEqual(sts.PracticeExtracqa, testdata.PracticeExtracqa,"PracticeExtracqa Values is not as expected.");
await assertion.assertEqual(sts.Unit1, testdata.Unit1,"Unit1 Values is not as expected.");
await assertion.assertEqual(sts.LessonA, testdata.LessonA,"LessonA Values is not as expected.");
await assertion.assertEqual(sts.Next, testdata.Next,"Next Values is not as expected.");
await assertion.assertEqual(sts.setDate, testdata.setDate,"setDate Values is not as expected.");
await assertion.assertEqual(sts.selectStudent, testdata.selectStudent,"selectStudent Values is not as expected.");
await assertion.assertEqual(sts.ViewSummary, testdata.ViewSummary,"ViewSummary Values is not as expected.");
await assertion.assertEqual(sts.Assign, testdata.Assign,"Assign Values is not as expected.");
},

}