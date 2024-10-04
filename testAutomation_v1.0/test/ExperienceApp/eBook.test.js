"use strict";
var eBook = require("../../pages/ExperienceApp/eBook.page.js");
var sts;

module.exports = {
  TST_EBOO_TC_1: async function () {
    sts = await eBook.isInitialized();
    console.log("this is sts1", sts);
    await assertion.assertEqual(
      sts.pageStatus,
      true,
      "eBook page status mismatch"
    );
  },

  TST_EBOO_TC_2: async function (testdata) {
    sts = await eBook.click_contentButton();
    console.log("this is sts2", sts);
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_3: async function (testdata) {
    sts = await eBook.click_toolsButton();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_4: async function (testdata) {
    sts = await eBook.click_closeButton();
    console.log("this is sts", sts);
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_5: async function (testdata) {
    sts = await eBook.click_homeButton();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_6: async function (testdata) {
    sts = await eBook.click_cqaEbookEvolveDropdown();
    await assertion.assertEqual(
      sts.value,
      "rgba(251,246,228,1)",
      "cqaEbookEvolveDropdown are not Clicked"
    );
  },

  TST_EBOO_TC_7: async function (testdata) {
    sts = await eBook.click_cqaTestEbookOnlyAssets();
    await assertion.assertEqual(
      sts,
      true,
      "cqaTestEbookOnlyAssets are not Clicked"
    );
    await assertion.assertEqual(
      sts.cqaTestEbookOnlyAssets,
      testdata.cqaTestEbookOnlyAssets,
      "cqaTestEbookOnlyAssets Values is not as expected."
    );
  },

  TST_EBOO_TC_8: async function (testdata) {
    sts = await eBook.click_notes();
    await assertion.assertEqual(sts, true, "notes are not Clicked");
  },

  TST_EBOO_TC_9: async function (testdata) {
    sts = await eBook.click_pageNumber();
    await assertion.assertEqual(sts, true, "pageNumber are not Clicked");
  },

  TST_EBOO_TC_10: async function (testdata) {
    sts = await eBook.getData_ebookEvolve(testdata);
    await assertion.assertEqual(
      sts.cqa_ebook_evolve,
      testdata.cqa_ebook_evolve,
      "cqa_ebook_evolve Values is not as expected."
    );
  },

  TST_EBOO_TC_11: async function (testdata) {
    sts = await eBook.getData_eTextToolBar(testdata);
    await assertion.assertEqual(
      sts.contentButton,
      testdata.contentButton,
      "contentButton Values is not as expected."
    );
    await assertion.assertEqual(
      sts.toolsButton,
      testdata.toolsButton,
      "toolsButton Values is not as expected."
    );
    await assertion.assertEqual(
      sts.homeButton,
      testdata.homeButton,
      "homeButton Values is not as expected."
    );
    await assertion.assertEqual(
      sts.pageNumber,
      testdata.pageNumber,
      "pageNumber Values is not as expected."
    );
  },

  TST_EBOO_TC_12: async function (testdata) {
    sts = await eBook.getData_ebookContents(testdata);
    await assertion.assertEqual(
      sts.closeButton,
      testdata.closeButton,
      "closeButton Values is not as expected."
    );
  },

  TST_EBOO_TC_13: async function (testdata) {
    console.log("this is testdata", testdata);
    sts = await eBook.getData_ebookToolsNotes(testdata);
    await assertion.assertEqual(
      sts.myNotes,
      testdata.myNotes,
      "myNotes Values is not as expected."
    );
  },

  TST_EBOO_TC_14: async function (testdata) {
    sts = await eBook.getData_ebookContent(testdata);
    await assertion.assertEqual(
      sts.cqaEbookEvolveDropdown,
      testdata.cqaEbookEvolveDropdown,
      "cqaEbookEvolveDropdown Values is not as expected."
    );
  },

  TST_EBOO_TC_15: async function (testdata) {
    sts = await eBook.getData_ebookContentDropdown(testdata);
    await assertion.assertEqual(
      sts.cqaTestEbookOnlyAssets,
      testdata.cqaTestEbookOnlyAssets,
      "cqaTestEbookOnlyAssets Values is not as expected."
    );
  },

  TST_EBOO_TC_16: async function (testdata) {
    sts = await eBook.getData_ebookTools(testdata);
    await assertion.assertEqual(
      sts.notes,
      testdata.notes,
      "notes Values is not as expected."
    );
  },
};
