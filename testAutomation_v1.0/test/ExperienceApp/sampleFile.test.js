"use strict";
var sampleFile= require('../../pages/ExperienceApp/sampleFile.page.js');
var sts;

module.exports = {
TST_SAMP_TC_1 :   async function () { 
sts = await sampleFile.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "sampleFile page status mismatch");
},

TST_SAMP_TC_2 :   async function (testdata) { 
sts = await sampleFile.set_Username(testdata.Username);
await assertion.assertEqual(sts, true ,"Username values are not set");

},

TST_SAMP_TC_3 :   async function (testdata) { 
sts = await sampleFile.set_Password(testdata.Password);
await assertion.assertEqual(sts, true ,"Password values are not set");

},

TST_SAMP_TC_4 :   async function (testdata) { 
sts = await sampleFile.click_commit();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

TST_SAMP_TC_5 :   async function (testdata) { 
sts = await sampleFile.getData_LoginPage(testdata);
await assertion.assertEqual(sts.Welcome, testdata.Welcome,"Welcome Values is not as expected.");
await assertion.assertEqual(sts.Username, testdata.Username,"Username Values is not as expected.");
await assertion.assertEqual(sts.Password, testdata.Password,"Password Values is not as expected.");
await assertion.assertEqual(sts.commit, testdata.commit,"commit Values is not as expected.");
},

}