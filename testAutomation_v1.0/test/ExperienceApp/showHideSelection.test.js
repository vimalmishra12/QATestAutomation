"use strict";
var showHideSelection = require("../../pages/ExperienceApp/showHideSelection.page.js");
var sts;

module.exports = {
  // Test case to validate the "Hide Selection" button is clickable.
  TST_SHOW_TC_1: async function (testdata) {
    sts = await showHideSelection.click_hideSelection();
    await assertion.assertEqual(
      sts,
      true,
      "Hide Selection button is not Clicked"
    );
  },

  // Test case to validate the "Show Selection" button is clickable.
  TST_SHOW_TC_2: async function (testdata) {
    sts = await showHideSelection.click_showSelection();
    await assertion.assertEqual(
      sts,
      true,
      "Show Selection button is not Clicked"
    );
  },

  // Test case to validate the "Close Selection" button is clickable.
  TST_SHOW_TC_3: async function (testdata) {
    sts = await showHideSelection.click_closeSelection();
    await assertion.assertEqual(
      sts,
      true,
      "Close Selection button is not Clicked"
    );
  },

  // Test case to validate the consistency of show and hide selection properties with expected data.
  TST_SHOW_TC_4: async function (testdata) {
    sts = await showHideSelection.getData_showAndHideSelection(testdata);
    await assertion.assertEqual(
      sts.hideSelection,
      testdata.hideSelection,
      "Hide Selection values are not as expected."
    );
    await assertion.assertEqual(
      sts.showSelection,
      testdata.showSelection,
      "Show Selection values are not as expected."
    );
    await assertion.assertEqual(
      sts.closeSelection,
      testdata.closeSelection,
      "Close Selection values are not as expected."
    );
  },
};
