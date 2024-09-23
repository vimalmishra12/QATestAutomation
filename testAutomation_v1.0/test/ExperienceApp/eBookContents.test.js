"use strict";
var eBookContents= require('../../pages/ExperienceApp/eBookContents.page.js');
var sts;

module.exports = {
TST_EBOO_TC_1 :   async function () { 
sts = await eBookContents.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "eBookContents page status mismatch");
},

TST_EBOO_TC_2 :   async function (testdata) { 
sts = await eBookContents.getData_ebookContents(testdata);
await assertion.assertEqual(sts.cqaTestProd, testdata.cqaTestProd,"cqaTestProd Values is not as expected.");
await assertion.assertEqual(sts.Timer, testdata.Timer,"Timer Values is not as expected.");
},

}