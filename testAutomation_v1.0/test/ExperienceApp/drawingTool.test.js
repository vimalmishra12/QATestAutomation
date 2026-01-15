"use strict";
var drawingTool = require("../../pages/ExperienceApp/drawingTool.page.js");
var sts;

module.exports = {
  // Test case to validate the Pen Drawing (Scribble) tool is clickable.
  TST_DRAW_TC_1: async function (testdata) {
    sts = await drawingTool.click_drawingToolScribble();
    await assertion.assertEqual(
      sts,
      true,
      "Pen Drawing (Scribble) tool is not Clicked"
    );
  },

  // Test case to validate the Pen Colour selector is clickable.
  TST_DRAW_TC_2: async function (testdata) {
    sts = await drawingTool.click_drawingToolPenColour();
    await assertion.assertEqual(
      sts,
      true,
      "Pen Colour selector is not Clicked"
    );
  },

  // Test case to validate the Pen Width selector is clickable.
  TST_DRAW_TC_3: async function (testdata) {
    sts = await drawingTool.click_drawingToolPenWidth();
    await assertion.assertEqual(sts, true, "Pen Width selector is not Clicked");
  },

  // Test case to validate the Eraser tool is clickable.
  TST_DRAW_TC_4: async function (testdata) {
    sts = await drawingTool.click_drawingToolEraser();
    console.log("102 clicked",sts );
    await assertion.assertEqual(sts, true, "Eraser tool is not Clicked");
  },

  // Test case to validate the Undo action is clickable.
  TST_DRAW_TC_5: async function (testdata) {
    sts = await drawingTool.click_drawingToolUndo();
    await assertion.assertEqual(sts, true, "Undo action is not Clicked");
  },

  // Test case to validate the Redo action is clickable.
  TST_DRAW_TC_6: async function (testdata) {
    sts = await drawingTool.click_drawingToolRedo();
    await assertion.assertEqual(sts, true, "Redo action is not Clicked");
  },

  // Test case to validate the Presentation mode button is clickable.
  TST_DRAW_TC_7: async function (testdata) {
    sts = await drawingTool.click_drawingToolPresentation();
    await assertion.assertEqual(
      sts,
      true,
      "Presentation mode button is not Clicked"
    );
  },

  // Test case to validate the Highlighter tool is clickable.
  TST_DRAW_TC_9: async function (testdata) {
    sts = await drawingTool.click_drawingToolHighlighter();
    await assertion.assertEqual(sts, true, "Highlighter tool is not Clicked");
  },

  // Test case to validate the Green Pen Colour option is clickable.
  TST_DRAW_TC_10: async function (testdata) {
    sts = await drawingTool.click_penColourGreen();
    await assertion.assertEqual(
      sts,
      true,
      "Green Pen Colour option is not Clicked"
    );
  },

  // Test case to validate the Blue Pen Colour option is clickable.
  TST_DRAW_TC_11: async function (testdata) {
    sts = await drawingTool.click_penColourBlue();
    await assertion.assertEqual(
      sts,
      true,
      "Blue Pen Colour option is not Clicked"
    );
  },

  // Test case to validate the Red Pen Colour option is clickable.
  TST_DRAW_TC_12: async function (testdata) {
    sts = await drawingTool.click_penColourRed();
    await assertion.assertEqual(
      sts,
      true,
      "Red Pen Colour option is not Clicked"
    );
  },

  // Test case to validate the Black Pen Colour option is clickable.
  TST_DRAW_TC_13: async function (testdata) {
    sts = await drawingTool.click_penColourBlack();
    await assertion.assertEqual(
      sts,
      true,
      "Black Pen Colour option is not Clicked"
    );
  },

  // Test case to validate the largest Pen Stroke size (4) is selectable.
  TST_DRAW_TC_14: async function (testdata) {
    sts = await drawingTool.click_penStroke4();
    await assertion.assertEqual(sts, true, "Pen Stroke size 4 is not Clicked");
  },

  // Test case to validate the medium Pen Stroke size (3) is selectable.
  TST_DRAW_TC_15: async function (testdata) {
    sts = await drawingTool.click_penStroke3();
    await assertion.assertEqual(sts, true, "Pen Stroke size 3 is not Clicked");
  },

  // Test case to validate the small Pen Stroke size (2) is selectable.
  TST_DRAW_TC_16: async function (testdata) {
    sts = await drawingTool.click_penStroke2();
    await assertion.assertEqual(sts, true, "Pen Stroke size 2 is not Clicked");
  },

  // Test case to validate the smallest Pen Stroke size (1) is selectable.
  TST_DRAW_TC_17: async function (testdata) {
    sts = await drawingTool.click_penStroke1();
    await assertion.assertEqual(sts, true, "Pen Stroke size 1 is not Clicked");
  },

  // Test case to validate the consistency of drawing tool properties with expected data.
  TST_DRAW_TC_8: async function (testdata) {
    sts = await drawingTool.getData_drawingTool(testdata);
    await assertion.assertEqual(
      sts.drawingToolScribble,
      testdata.drawingToolScribble,
      "Pen Drawing (Scribble) values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolPenColour,
      testdata.drawingToolPenColour,
      "Pen Colour values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolPenWidth,
      testdata.drawingToolPenWidth,
      "Pen Width values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolHighlighter,
      testdata.drawingToolHighlighter,
      "Highlighter values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolEraser,
      testdata.drawingToolEraser,
      "Eraser values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolUndo,
      testdata.drawingToolUndo,
      "Undo values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolRedo,
      testdata.drawingToolRedo,
      "Redo values are not as expected."
    );
    await assertion.assertEqual(
      sts.drawingToolPresentation,
      testdata.drawingToolPresentation,
      "Presentation mode values are not as expected."
    );
    await assertion.assertEqual(
      sts.penColourGreen,
      testdata.penColourGreen,
      "Green Pen Colour values are not as expected."
    );
    await assertion.assertEqual(
      sts.penColourBlue,
      testdata.penColourBlue,
      "Blue Pen Colour values are not as expected."
    );
    await assertion.assertEqual(
      sts.penColourRed,
      testdata.penColourRed,
      "Red Pen Colour values are not as expected."
    );
    await assertion.assertEqual(
      sts.penColourBlack,
      testdata.penColourBlack,
      "Black Pen Colour values are not as expected."
    );
    await assertion.assertEqual(
      sts.penStroke4,
      testdata.penStroke4,
      "Pen Stroke size 4 values are not as expected."
    );
    await assertion.assertEqual(
      sts.penStroke3,
      testdata.penStroke3,
      "Pen Stroke size 3 values are not as expected."
    );
    await assertion.assertEqual(
      sts.penStroke2,
      testdata.penStroke2,
      "Pen Stroke size 2 values are not as expected."
    );
    await assertion.assertEqual(
      sts.penStroke1,
      testdata.penStroke1,
      "Pen Stroke size 1 values are not as expected."
    );
  },
};
