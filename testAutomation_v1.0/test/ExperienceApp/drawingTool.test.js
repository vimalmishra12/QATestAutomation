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

TST_DRAW_TC_9 :   async function (testdata) { 
    sts = await drawingTool.click_drawingToolHighlighter();
    await assertion.assertEqual(sts, true,"drawingToolHighlighter are not Clicked");
    },

TST_DRAW_TC_10 :   async function (testdata) { 
    sts = await drawingTool.click_penColourGreen();
    await assertion.assertEqual(sts, true,"penColourGreen are not Clicked");
    },
    
    TST_DRAW_TC_11 :   async function (testdata) { 
    sts = await drawingTool.click_penColourBlue();
    await assertion.assertEqual(sts, true,"penColourBlue are not Clicked");
    },
    
    TST_DRAW_TC_12 :   async function (testdata) { 
    sts = await drawingTool.click_penColourRed();
    await assertion.assertEqual(sts, true,"penColourRed are not Clicked");
    },
    
    TST_DRAW_TC_13 :   async function (testdata) { 
    sts = await drawingTool.click_penColourBlack();
    await assertion.assertEqual(sts, true,"penColourBlack are not Clicked");
    },
    
    TST_DRAW_TC_14 :   async function (testdata) { 
    sts = await drawingTool.click_penStroke4();
    await assertion.assertEqual(sts, true,"penStroke4 are not Clicked");
    },
    
    TST_DRAW_TC_15 :   async function (testdata) { 
    sts = await drawingTool.click_penStroke3();
    await assertion.assertEqual(sts, true,"penStroke3 are not Clicked");
    },
    
    TST_DRAW_TC_16 :   async function (testdata) { 
    sts = await drawingTool.click_penStroke2();
    await assertion.assertEqual(sts, true,"penStroke2 are not Clicked");
    },
    
    TST_DRAW_TC_17 :   async function (testdata) { 
    sts = await drawingTool.click_penStroke1();
    await assertion.assertEqual(sts, true,"penStroke1 are not Clicked");
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
    await assertion.assertEqual(sts.penColourGreen, testdata.penColourGreen,"penColourGreen Values is not as expected.");
    await assertion.assertEqual(sts.penColourBlue, testdata.penColourBlue,"penColourBlue Values is not as expected.");
    await assertion.assertEqual(sts.penColourRed, testdata.penColourRed,"penColourRed Values is not as expected.");
    await assertion.assertEqual(sts.penColourBlack, testdata.penColourBlack,"penColourBlack Values is not as expected.");
    await assertion.assertEqual(sts.penStroke4, testdata.penStroke4,"penStroke4 Values is not as expected.");
    await assertion.assertEqual(sts.penStroke3, testdata.penStroke3,"penStroke3 Values is not as expected.");
    await assertion.assertEqual(sts.penStroke2, testdata.penStroke2,"penStroke2 Values is not as expected.");
    await assertion.assertEqual(sts.penStroke1, testdata.penStroke1,"penStroke1 Values is not as expected.");
    },
        

}