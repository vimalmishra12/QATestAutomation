'use strict';
var dashboard = require('../../pages/ExperienceApp/dashboard.page.js');
var sts;

module.exports = {
  TST_DASH_TC_1: async function () {
    sts = await dashboard.isInitialized();
    await assertion.assertEqual(
      sts.pageStatus,
      true,
      'dashboard page status mismatch'
    );
  },

  TST_DASH_TC_2: async function (testdata) {
    sts = await dashboard.click_help_btn();
    await assertion.assertEqual(sts, true, 'help_btn are not Clicked');
  },

  TST_DASH_TC_3: async function (testdata) {
    sts = await dashboard.click_progress_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_DASH_TC_4: async function (testdata) {
    sts = await dashboard.click_praticeExtra_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_DASH_TC_5: async function (testdata) {
    sts = await dashboard.click_ebook_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  //HW btn changed to assignment_btn_Nemo
  TST_DASH_TC_6: async function (testdata) {
    sts = await dashboard.click_assignment_btn_Nemo();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_DASH_TC_7: async function (testdata) {
    sts = await dashboard.click_myProgress_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_DASH_TC_8: async function (testdata) {
    sts = await dashboard.getData_dashboard(testdata);
    await assertion.assertEqual(
      sts.help_btn,
      testdata.help_btn,
      'help_btn Values is not as expected.'
    );
  },

  TST_DASH_TC_9: async function (testdata) {
    sts = await dashboard.getData_activeClasses(testdata);
    await assertion.assertEqual(
      sts.progress_btn_Nemo,
      testdata.progress_btn,
      'progress_btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.praticeExtra_btn_Nemo,
      testdata.praticeExtra_btn,
      'praticeExtra_btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.ebook_btn_Nemo,
      testdata.ebook_btn,
      'ebook_btn Values is not as expected.'
    );

    //HW btn changed to assignment_btn_Nemo
    await assertion.assertEqual(
      sts.assignment_btn_Nemo,
      testdata.assignment_btn_Nemo,
      'homework_btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.myProgress_btn_Nemo,
      testdata.myProgress_btn,
      'myProgress_btn Values is not as expected.'
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

  TST_DASH_TC_12: async function (testdata) {
    sts = await dashboard.click_dismiss_btn();
    await assertion.assertEqual(sts, true, 'dismiss_btn are not Clicked');
  },

  TST_DASH_TC_13: async function (testdata) {
    sts = await dashboard.getData_teacher(testdata);
    await assertion.assertEqual(
      sts.createNewClass,
      testdata.createNewClass,
      'createNewClass Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.activeClassCard,
      testdata.activeClassCard,
      'activeClassCard Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.dismiss_btn,
      testdata.dismiss_btn,
      'dismiss_btn Values is not as expected.'
    );
  },

};
