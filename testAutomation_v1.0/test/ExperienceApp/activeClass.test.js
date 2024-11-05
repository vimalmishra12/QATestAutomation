'use strict';
var activeClass = require('../../pages/ExperienceApp/activeClass.page.js');
var sts;

module.exports = {
  TST_ACTI_TC_1: async function (testdata) {
    sts = await activeClass.click_actionButton();
    await assertion.assertEqual(sts, true, 'actionButton are not Clicked');
  },

  TST_ACTI_TC_2: async function (testdata) {
    sts = await activeClass.click_deleteClass();
    await assertion.assertEqual(sts, true, 'deleteClass are not Clicked');
  },

  TST_ACTI_TC_3: async function (testdata) {
    sts = await activeClass.click_yesDelete_Btn();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_ACTI_TC_4: async function (testdata) {
    sts = await activeClass.getData_dropdown(testdata);
    await assertion.assertEqual(
      sts.actionButton,
      testdata.actionButton,
      'actionButton Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.deleteClass,
      testdata.deleteClass,
      'deleteClass Values is not as expected.'
    );
  },

  TST_ACTI_TC_5: async function (testdata) {
    sts = await activeClass.getData_deleteModal(testdata);
    await assertion.assertEqual(
      sts.yesDelete_Btn,
      testdata.yesDelete_Btn,
      'yesDelete_Btn Values is not as expected.'
    );
  },
};
