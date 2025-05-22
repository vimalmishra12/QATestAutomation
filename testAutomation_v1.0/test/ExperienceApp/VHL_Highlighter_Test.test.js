"use strict";
var highlighterTest = require('../../pages/ExperienceApp/highlighterTest.page.js');
var sts;

module.exports = {
  TST_HIGH_TC_1: async function (testdata) {
    sts = await highlighterTest.click_Eraser_Button(); // fixed method name
    await assertion.assertEqual(sts, true, "Eraser Button is not clicked");
  },

  TST_HIGH_TC_2: async function (testdata) {
    sts = await highlighterTest.click_Clear_All(); // fixed method name
    await assertion.assertEqual(sts, true, "Clear All is not clicked");
  },

  TST_HIGH_TC_3: async function (testdata) {
    sts = await highlighterTest.getData_Annotation_Toolbar(testdata); // fixed method name

    await assertion.assertEqual(sts["Pen Icon"], true, "Pen Icon value is not as expected.");
    await assertion.assertEqual(sts["Color Picker"], testdata["Color Picker"], "Color Picker value is not as expected.");
    await assertion.assertEqual(sts["Eraser Button"], testdata["Eraser Button"], "Eraser Button value is not as expected.");
    await assertion.assertEqual(sts["Clear All"], testdata["Clear All"], "Clear All value is not as expected.");
  },

  TST_HIGH_TC_4: async function (testdata) {
    sts = await highlighterTest.getData_button(testdata); // assuming method name is correct

    await assertion.assertEqual(sts["Close Button"], testdata["Close Button"], "Close Button value is not as expected.");
  },
};
