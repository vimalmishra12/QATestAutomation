"use strict";
var drawingTool= require('../../pages/ExperienceApp/drawingTool.page.js');
var sts;

module.exports = {
TST_DRAW_TC_1 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolScribble();
await assertion.assertEqual(sts, true,"drawingToolScribble are not Clicked");
},

TST_DRAW_TC_2 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolPenColour();
await assertion.assertEqual(sts, true,"drawingToolPenColour are not Clicked");
},

TST_DRAW_TC_3 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolPenWidth();
await assertion.assertEqual(sts, true,"drawingToolPenWidth are not Clicked");
},

TST_DRAW_TC_4 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolEraser();
await assertion.assertEqual(sts, true,"drawingToolEraser are not Clicked");
},

TST_DRAW_TC_5 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolUndo();
await assertion.assertEqual(sts, true,"drawingToolUndo are not Clicked");
},

TST_DRAW_TC_6 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolRedo();
await assertion.assertEqual(sts, true,"drawingToolRedo are not Clicked");
},

TST_DRAW_TC_7 :   async function (testdata) { 
sts = await drawingTool.click_drawingToolPresentation();
await assertion.assertEqual(sts, true,"drawingToolPresentation are not Clicked");
},

TST_DRAW_TC_8 :   async function (testdata) { 
sts = await drawingTool.getData_drawingTool(testdata);
await assertion.assertEqual(sts.drawingToolScribble, testdata.drawingToolScribble,"drawingToolScribble Values is not as expected.");
await assertion.assertEqual(sts.drawingToolPenColour, testdata.drawingToolPenColour,"drawingToolPenColour Values is not as expected.");
await assertion.assertEqual(sts.drawingToolPenWidth, testdata.drawingToolPenWidth,"drawingToolPenWidth Values is not as expected.");
await assertion.assertEqual(sts.drawingToolHighlighter, testdata.drawingToolHighlighter,"drawingToolHighlighter Values is not as expected.");
await assertion.assertEqual(sts.drawingToolEraser, testdata.drawingToolEraser,"drawingToolEraser Values is not as expected.");
await assertion.assertEqual(sts.drawingToolUndo, testdata.drawingToolUndo,"drawingToolUndo Values is not as expected.");
await assertion.assertEqual(sts.drawingToolRedo, testdata.drawingToolRedo,"drawingToolRedo Values is not as expected.");
await assertion.assertEqual(sts.drawingToolPresentation, testdata.drawingToolPresentation,"drawingToolPresentation Values is not as expected.");
},

}