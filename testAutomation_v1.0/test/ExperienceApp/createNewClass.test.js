'use strict';
var createNewClass = require('../../pages/ExperienceApp/createNewClass.page.js');
var sts;

module.exports = {
  TST_ENTE_TC_1: async function () {
    sts = await createNewClass.isInitialized();
    await assertion.assertEqual(
      sts.pageStatus,
      true,
      'enterClassDetails page status mismatch'
    );
  },

  TST_ENTE_TC_2: async function () {
    sts = await createNewClass.click_back_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_ENTE_TC_3: async function (testData) {
    sts = await createNewClass.set_enterClassName(testData);
    await assertion.assertEqual(sts, true, 'enterClassName values are not set');
  },

  TST_ENTE_TC_4: async function (testdata) {
    sts = await createNewClass.set_startDate();
    await assertion.assertEqual(sts, true, 'startDate values are not set');
  },

  TST_ENTE_TC_5: async function (testdata) {
    sts = await createNewClass.set_endDate();
    await assertion.assertEqual(sts, true, 'endDate values are not set');
  },

  TST_ENTE_TC_6: async function (testdata) {
    sts = await createNewClass.set_enterYourSchool();
    await assertion.assertEqual(
      sts,
      true,
      'enterYourSchool values are not set'
    );
  },

  TST_ENTE_TC_7: async function (testdata) {
    sts = await createNewClass.click_cancel_btn();
    await assertion.assertEqual(sts, true, 'cancel_btn are not Clicked');
  },

  TST_ENTE_TC_8: async function (testdata) {
    sts = await createNewClass.getData_classDetails(testdata);
    await assertion.assertEqual(
      sts.enterClassDetails,
      testdata.enterClassDetails,
      'enterClassDetails Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.back_btn,
      testdata.back_btn,
      'back_btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.enterClassName,
      testdata.enterClassName,
      'enterClassName Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.startDate,
      testdata.startDate,
      'startDate Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.endDate,
      testdata.endDate,
      'endDate Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.enterYourSchool,
      testdata.enterYourSchool,
      'enterYourSchool Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.cancel_btn,
      testdata.cancel_btn,
      'cancel_btn Values is not as expected.'
    );
  },

  TST_ENTE_TC_9: async function (testdata) {
    sts = await createNewClass.click_next_btn();
    await assertion.assertEqual(sts, true, 'next_btn are not Clicked');
  },

  TST_ENTE_TC_10: async function (testdata) {
    sts = await createNewClass.click_cancel_btn_classMaterial();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_ENTE_TC_11: async function (testdata) {
    sts = await createNewClass.click_addLater_Btn();
    await assertion.assertEqual(sts, true, 'addLater_Btn are not Clicked');
  },

  TST_ENTE_TC_12: async function (testdata) {
    sts = await createNewClass.click_dashboard_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_ENTE_TC_13: async function (testdata) {
    sts = await createNewClass.click_noKeep_btn();
    await assertion.assertEqual(sts, true, 'noKeep_btn are not Clicked');
  },

  TST_ENTE_TC_14: async function (testdata) {
    sts = await createNewClass.getData_classMaterial(testdata);
    await assertion.assertEqual(
      sts.addClassMaterials,
      testdata.addClassMaterials,
      'addClassMaterials Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.cancel_btn_classMaterial,
      testdata.cancel_btn_classMaterial,
      'cancel_btn_classMaterial Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.addLater_Btn,
      testdata.addLater_Btn,
      'addLater_Btn Values is not as expected.'
    );

    await assertion.assertEqual(
      sts.addMaterial_btn,
      testdata.addMaterial_btn,
      'addMaterial_btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.addMaterial_input,
      testdata.addMaterial_input,
      'addMaterial_input Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.dev_test_ebook_bundle_104_bundle,
      testdata.dev_test_ebook_bundle_104_bundle,
      'dev_test_ebook_bundle_104_bundle Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.addToClass_Btn,
      testdata.addToClass_Btn,
      'addToClass_Btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.finish_btn,
      testdata.finish_btn,
      'finish_btn Values is not as expected.'
    );
  },

  TST_ENTE_TC_15: async function (testdata) {
    sts = await createNewClass.getData_successfullyCreated(testdata);
    await assertion.assertEqual(
      sts.classSuccessfullyCreated,
      testdata.classSuccessfullyCreated,
      'classSuccessfullyCreated Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.dashboard_btn,
      testdata.dashboard_btn,
      'dashboard_btn Values is not as expected.'
    );
  },

  TST_ENTE_TC_16: async function (testdata) {
    sts = await createNewClass.getData_cancelModal(testdata);
    await assertion.assertEqual(
      sts.cancelThisClass,
      testdata.cancelThisClass,
      'cancelThisClass Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.yesCancel_btn,
      testdata.yesCancel_btn,
      'yesCancel_btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.noKeep_btn,
      testdata.noKeep_btn,
      'noKeep_btn Values is not as expected.'
    );
  },

  TST_ENTE_TC_17: async function (testdata) {
    sts = await createNewClass.click_yesCancel_btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_ENTE_TC_18: async function (testdata) {
    sts = await createNewClass.click_finish_btn();
    await assertion.assertEqual(sts, true, 'finish_btn are not Clicked');
  },

  TST_ENTE_TC_19: async function (testdata) {
    sts = await createNewClass.click_addToClass_Btn();
    await assertion.assertEqual(sts, true, 'addToClass_Btn are not Clicked');
  },

  TST_ENTE_TC_20: async function (testdata) {
    sts = await createNewClass.click_dev_test_ebook_bundle_104_bundle();
    await assertion.assertEqual(
      sts,
      true,
      'dev_test_ebook_bundle_104_bundle are not Clicked'
    );
  },

  TST_ENTE_TC_21: async function (testdata) {
    sts = await createNewClass.set_addMaterial_input(testdata);
    await assertion.assertEqual(
      sts,
      true,
      'addMaterial_input values are not set'
    );
  },

  TST_ENTE_TC_22: async function (testdata) {
    sts = await createNewClass.click_addMaterial_btn();
    await assertion.assertEqual(sts, true, 'addMaterial_btn are not Clicked');
  },

  TST_ENTE_TC_23: async function (testdata) {
    sts =
      await createNewClass.click_dev_test_ebook_bundle_104_bundle_dropdown();
    await assertion.assertEqual(
      sts,
      true,
      'dev_test_ebook_bundle_104_bundle_dropdown are not Clicked'
    );
  },
};