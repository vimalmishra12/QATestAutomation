"use strict";
var vhlLoginTest= require('../../pages/ExperienceApp/vhlLoginTest.page.js');
var sts;

module.exports = {
TST_VLOG_TC_1 :   async function () { 
sts = await vhlLoginTest.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "vhlLoginTest page status mismatch");
},

TST_VLOG_TC_2 :   async function (testdata) { 
sts = await vhlLoginTest.set_userName(testdata.userName);
await assertion.assertEqual(sts, true ,"userName values are not set");

},

TST_VLOG_TC_3 :   async function (testdata) { 
sts = await vhlLoginTest.set_password(testdata.password);
await assertion.assertEqual(sts, true ,"password values are not set");

},

TST_VLOG_TC_4 :   async function (testdata) { 
sts = await vhlLoginTest.click_commit();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_VLOG_TC_5 :   async function (testdata) { 
sts = await vhlLoginTest.getData_LoginPage(testdata);
await assertion.assertEqual(sts.welcome, testdata.welcome,"welcome Values is not as expected.");
await assertion.assertEqual(sts.userName, testdata.userName,"userName Values is not as expected.");
await assertion.assertEqual(sts.password, testdata.password,"password Values is not as expected.");
await assertion.assertEqual(sts.commit, testdata.commit,"commit Values is not as expected.");
},

}