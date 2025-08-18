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
sts = await c1assignment.getData_c1assignment(testdata);
await assertion.assertEqual(sts.classheading, testdata.classheading,"classheading Values is not as expected.");
await assertion.assertEqual(sts.Assignments, testdata.Assignments,"Assignments Values is not as expected.");
await assertion.assertEqual(sts.Createassignment, testdata.Createassignment,"Createassignment Values is not as expected.");
},

}