'use strict';
var resetPassword = require('../../pages/ExperienceApp/resetPassword.page.js');
var sts;

module.exports = {
  TST_RESE_TC_1: async function () {
    sts = await resetPassword.isInitialized();
    await assertion.assertEqual(
      sts.pageStatus,
      true,
      'resetPassword page status mismatch'
    );
  },

  TST_RESE_TC_2: async function (testdata) {
    const sts = await resetPassword.click_resetPassword_Btn();
    await assertion.assertEqual(
      sts.emailWarningText,
      testdata.expectedEmailWarningText,
      'emailWarningText is not visible or does not match the expected value'
    );
  },

  TST_RESE_TC_3: async function (testdata) {
    sts = await resetPassword.set_enterEmailText(testdata.email);
    await assertion.assertEqual(sts, true, 'enterEmailText values are not set');
  },

  TST_RESE_TC_4: async function (testdata) {
    sts = await resetPassword.click_backToLogin();
    await assertion.assertEqual(sts.pageStatus, true, 'Page is not launched. ');
  },

  TST_RESE_TC_5: async function (testdata) {
    sts = await resetPassword.getData_resetPassword(testdata);
    console.log(`Input Value: ${sts.enterEmailText}`);
    await assertion.assertEqual(
      sts.resetPassword,
      testdata.resetPassword,
      'resetPassword Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.resetPassword_Btn,
      testdata.resetPassword_Btn,
      'resetPassword_Btn Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.enterEmailText,
      testdata.enterEmailText,
      'enterEmailText Values is not as expected.'
    );
    await assertion.assertEqual(
      sts.backToLogin,
      testdata.backToLogin,
      'backToLogin Values is not as expected.'
    );
  },
};
