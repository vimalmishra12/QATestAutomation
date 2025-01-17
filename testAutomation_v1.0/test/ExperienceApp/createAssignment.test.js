"use strict";
var createAssignment = require("../../pages/ExperienceApp/createAssignment.page.js");
var sts;

module.exports = {
  TST_CREA_TC_1: async function (testdata) {
    sts = await createAssignment.click_automationClass();
    await assertion.assertEqual(sts, true, "automationClass are not Clicked");
  },

  TST_CREA_TC_2: async function (testdata) {
    sts = await createAssignment.click_materials();
    await assertion.assertEqual(sts, true, "materials are not Clicked");
  },

  TST_CREA_TC_3: async function (testdata) {
    sts = await createAssignment.click_cqaEbook();
    await assertion.assertEqual(sts, true, "cqaEbook are not Clicked");
  },

  TST_CREA_TC_4: async function (testdata) {
    sts = await createAssignment.click_createAssignment();
    await assertion.assertEqual(sts, true, "createAssignment are not Clicked");
  },

  TST_CREA_TC_5: async function (testdata) {
    sts = await createAssignment.click_takeMeToAssignment();
    await assertion.assertEqual(
      sts,
      true,
      "takeMeToAssignment are not Clicked"
    );
  },

  TST_CREA_TC_6: async function (testdata) {
    sts = await createAssignment.click_comprotestPE();
    await assertion.assertEqual(sts, true, "comprotestPE are not Clicked");
  },

  TST_CREA_TC_7: async function (testdata) {
    sts = await createAssignment.click_unit1();
    await assertion.assertEqual(sts, true, "unit1 are not Clicked");
  },

  TST_CREA_TC_8: async function (testdata) {
    sts = await createAssignment.click_lesson1Checkbox();
    await assertion.assertEqual(sts, true, "lesson1Checkbox are not Clicked");
  },

  TST_CREA_TC_9: async function (testdata) {
    sts = await createAssignment.click_nextBtn();
    await assertion.assertEqual(sts, true, "nextBtn are not Clicked");
  },

  TST_CREA_TC_10: async function (testdata) {
    sts = await createAssignment.click_dueDateInput();
    await assertion.assertEqual(sts, true, "dueDateInput are not Clicked");
  },

  TST_CREA_TC_11: async function (testdata) {
    sts = await createAssignment.click_setBtn();
    await assertion.assertEqual(sts, true, "setBtn are not Clicked");
  },

  TST_CREA_TC_12: async function (testdata) {
    sts = await createAssignment.click_assignBtn();
    await assertion.assertEqual(sts, true, "assignBtn are not Clicked");
  },

  TST_CREA_TC_13: async function (testdata) {
    sts = await createAssignment.click_returnToeBookBtn();
    await assertion.assertEqual(sts, true, "returnToeBookBtn are not Clicked");
  },
};
