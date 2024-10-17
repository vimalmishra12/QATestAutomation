"use strict";
var pageNoDialogBox= require('../../pages/ExperienceApp/pageNoDialogBox.page.js');
var sts;

module.exports = {
TST_PAGE_TC_1 :   async function (testdata) { 
sts = await pageNoDialogBox.click_pageNoOneBtn();
await assertion.assertEqual(sts, true,"pageNoOneBtn are not Clicked");
},

TST_PAGE_TC_2 :   async function (testdata) { 
sts = await pageNoDialogBox.click_pageNoTwoBtn();
await assertion.assertEqual(sts, true,"pageNoTwoBtn are not Clicked");
},

TST_PAGE_TC_3 :   async function (testdata) { 
sts = await pageNoDialogBox.click_pageNoClearBtn();
await assertion.assertEqual(sts, true,"pageNoClearBtn are not Clicked");
},

TST_PAGE_TC_4 :   async function (testdata) { 
sts = await pageNoDialogBox.click_pageNoGoToPageBtn();
await assertion.assertEqual(sts, true,"pageNoGoToPageBtn are not Clicked");
},

TST_PAGE_TC_5 :   async function (testdata) { 
sts = await pageNoDialogBox.click_pageNOShow();
await assertion.assertEqual(sts, true,"pageNOShow are not Clicked");
},

TST_PAGE_TC_6 :   async function (testdata) { 
sts = await pageNoDialogBox.getData_pageNumberDialogBox(testdata);
await assertion.assertEqual(sts.pageNoOneBtn, testdata.pageNoOneBtn,"pageNoOneBtn Values is not as expected.");
await assertion.assertEqual(sts.pageNoTwoBtn, testdata.pageNoTwoBtn,"pageNoTwoBtn Values is not as expected.");
await assertion.assertEqual(sts.pageNoClearBtn, testdata.pageNoClearBtn,"pageNoClearBtn Values is not as expected.");
await assertion.assertEqual(sts.pageNoGoToPageBtn, testdata.pageNoGoToPageBtn,"pageNoGoToPageBtn Values is not as expected.");
await assertion.assertEqual(sts.pageNOShow, testdata.pageNOShow,"pageNOShow Values is not as expected.");
},

}