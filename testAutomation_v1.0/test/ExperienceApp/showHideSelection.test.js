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
     "hide Selection functionality did not work as expected."
    );

    if (sts) {
      console.log("TST_SHOW_TC_1: Test case passed. Hide Selection is verified.");
    }
  },

  // Test case to validate the "Show Selection" button is clickable.
  // TST_SHOW_TC_2: async function (testdata) {
  //   sts = await showHideSelection.click_showSelection();
  //   await assertion.assertEqual(
  //     sts,
  //     true,
  //     "Show Selection button is not Clicked"
  //   );
  // },

  TST_SHOW_TC_2: async function (testdata) {
    // Call the click_showSelection function and store the result
    const sts = await showHideSelection.click_showSelection();

    // Assert that the result is true (indicating success)
    await assertion.assertEqual(
        sts,
        true,
        "Show Selection functionality did not work as expected."
    );

    if (sts) {
        console.log("TST_SHOW_TC_2: Test case passed. Show Selection is verified.");
    }
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
