"use strict";
var teaDashAssignment= require('../../pages/ExperienceApp/teaDashAssignment.page.js');
var sts;

module.exports = {
TST_TEAD_TC_1 :   async function (testdata) { 
sts = await teaDashAssignment.click_teaDashClassData();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},


TST_TEAD_TC_2 :   async function (testdata) { 
sts = await teaDashAssignment.click_teaDashAssignments();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_TEAD_TC_3 :   async function (testdata) { 
sts = await teaDashAssignment.click_teaDashMaterial();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_TEAD_TC_4 :   async function (testdata) { 
sts = await teaDashAssignment.getData_teaDash(testdata);
await assertion.assertEqual(sts.teaDashClassData, testdata.teaDashClassData,"teaDashClassData Values is not as expected.");
await assertion.assertEqual(sts.teaDashAssignments, testdata.teaDashAssignments,"teaDashAssignments Values is not as expected.");
await assertion.assertEqual(sts.teaDashMaterial, testdata.teaDashMaterial,"teaDashMaterial Values is not as expected.");
},


}