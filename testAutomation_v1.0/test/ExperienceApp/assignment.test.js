"use strict";
var assignment= require('../../pages/ExperienceApp/assignment.page.js');
var sts;

module.exports = {
TST_ASSI_TC_1 :   async function (testdata) { 
sts = await assignment.click_classData();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_ASSI_TC_2 :   async function (testdata) { 
sts = await assignment.click_assignments();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_ASSI_TC_3 :   async function (testdata) { 
sts = await assignment.click_materials();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_ASSI_TC_4 :   async function (testdata) { 
sts = await assignment.click_createAssignment();
await assertion.assertEqual(sts.pageStatus, true,"createAssignment are not Clicked");
},

TST_ASSI_TC_5 :   async function (testdata) { 
sts = await assignment.getData_assignmentPage(testdata);
await assertion.assertEqual(sts.classData, testdata.classData,"classData Values is not as expected.");
await assertion.assertEqual(sts.assignments, testdata.assignments,"assignments Values is not as expected.");
await assertion.assertEqual(sts.materials, testdata.materials,"materials Values is not as expected.");
await assertion.assertEqual(sts.createAssignment, testdata.createAssignment,"createAssignment Values is not as expected.");
},

}