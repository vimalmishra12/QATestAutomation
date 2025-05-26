"use strict";
var dashboard = require("../../pages/ExperienceApp/dashboard.page.js");
var sts;

module.exports = {
  TST_DASH_TC_1: async function () {
    sts = await dashboard.isInitialized();
    await assertion.assertEqual(
      sts.pageStatus,
      true,
      "dashboard page status mismatch"
    );
  },

  TST_DASH_TC_2: async function (testdata) {
    sts = await dashboard.click_help_btn();
    await assertion.assertEqual(sts, true, "help_btn are not Clicked");
  },

  TST_DASH_TC_3: async function (testdata) {
    sts = await dashboard.click_progress_btn();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_DASH_TC_4: async function (testdata) {
    sts = await dashboard.click_praticeExtra_btn();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_DASH_TC_5: async function (testdata) {
    console.log("testdata 31" ,testdata); 
    sts = await dashboard.click_ebook_btn(testdata);
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_DASH_TC_6: async function (testdata) {
    sts = await dashboard.click_homework_btn();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_DASH_TC_7: async function (testdata) {
    sts = await dashboard.click_myProgress_btn();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_DASH_TC_8: async function (testdata) {
    sts = await dashboard.getData_dashboard(testdata);
    await assertion.assertEqual(
      sts.help_btn,
      testdata.help_btn,
      "help_btn Values is not as expected."
    );
  },

  TST_DASH_TC_9: async function (testdata) {
    sts = await dashboard.getData_activeClasses(testdata);
    await assertion.assertEqual(
      sts.progress_btn,
      testdata[0].progress_btn,
      "progress_btn Values is not as expected."
    );
    await assertion.assertEqual(
      sts.praticeExtra_btn,
      testdata[0].praticeExtra_btn,
      "praticeExtra_btn Values is not as expected."
    );
    await assertion.assertEqual(
      sts.ebook_btn,
      testdata[0].ebook_btn,
      "ebook_btn Values is not as expected."
    );
    await assertion.assertEqual(
      sts.homework_btn,
      testdata[0].homework_btn,
      "homework_btn Values is not as expected."
    );
    await assertion.assertEqual(
      sts.myProgress_btn,
      testdata[0].myProgress_btn,
      "myProgress_btn Values is not as expected."
    );
  },

  TST_DASH_TC_10: async function (testdata) {
    sts = await dashboard.click_createNewClass();
    await browser.pause(1000);
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_DASH_TC_11: async function (testdata) {
    sts = await dashboard.click_activeClassCard();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

};
