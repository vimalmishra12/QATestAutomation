"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
  drawingToolScribble: selectorFile.css.ComproC1.drawingTool.drawingToolScribble,
  drawingToolPenColour: selectorFile.css.ComproC1.drawingTool.drawingToolPenColour,
  drawingToolPenWidth: selectorFile.css.ComproC1.drawingTool.drawingToolPenWidth,
  drawingToolHighlighter: selectorFile.css.ComproC1.drawingTool.drawingToolHighlighter,
  drawingToolEraser: selectorFile.css.ComproC1.drawingTool.drawingToolEraser,
  drawingToolUndo: selectorFile.css.ComproC1.drawingTool.drawingToolUndo,
  drawingToolRedo: selectorFile.css.ComproC1.drawingTool.drawingToolRedo,
  drawingToolPresentation: selectorFile.css.ComproC1.drawingTool.drawingToolPresentation,
  penColourGreen: selectorFile.css.ComproC1.drawingTool.penColourGreen,
  penColourBlue: selectorFile.css.ComproC1.drawingTool.penColourBlue,
  penColourRed: selectorFile.css.ComproC1.drawingTool.penColourRed,
  penColourBlack: selectorFile.css.ComproC1.drawingTool.penColourBlack,
  penStroke4: selectorFile.css.ComproC1.drawingTool.penStroke4,
  penStroke3: selectorFile.css.ComproC1.drawingTool.penStroke3,
  penStroke2: selectorFile.css.ComproC1.drawingTool.penStroke2,
  penStroke1: selectorFile.css.ComproC1.drawingTool.penStroke1,
  


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.drawingToolScribble),
};
return res; 
},

getData_drawingTool: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
drawingToolScribble:(( await action.getElementCount(this.drawingToolScribble)) > 0) ? await action.getText(this.drawingToolScribble) : null,
drawingToolPenColour:(( await action.getElementCount(this.drawingToolPenColour)) > 0) ? await action.getText(this.drawingToolPenColour) : null,
drawingToolPenWidth:(( await action.getElementCount(this.drawingToolPenWidth)) > 0) ? await action.getText(this.drawingToolPenWidth) : null,
drawingToolHighlighter:(( await action.getElementCount(this.drawingToolHighlighter)) > 0) ? await action.getText(this.drawingToolHighlighter) : null,
drawingToolEraser:(( await action.getElementCount(this.drawingToolEraser)) > 0) ? await action.getText(this.drawingToolEraser) : null,
drawingToolUndo:(( await action.getElementCount(this.drawingToolUndo)) > 0) ? await action.getText(this.drawingToolUndo) : null,
drawingToolRedo:(( await action.getElementCount(this.drawingToolRedo)) > 0) ? await action.getText(this.drawingToolRedo) : null,
drawingToolPresentation:(( await action.getElementCount(this.drawingToolPresentation)) > 0) ? await action.getText(this.drawingToolPresentation) : null,
penColourGreen:(( await action.getElementCount(this.penColourGreen)) > 0) ? await action.getText(this.penColourGreen) : null,
penColourBlue:(( await action.getElementCount(this.penColourBlue)) > 0) ? await action.getText(this.penColourBlue) : null,
penColourRed:(( await action.getElementCount(this.penColourRed)) > 0) ? await action.getText(this.penColourRed) : null,
penColourBlack:(( await action.getElementCount(this.penColourBlack)) > 0) ? await action.getText(this.penColourBlack) : null,
penStroke4:(( await action.getElementCount(this.penStroke4)) > 0) ? await action.getText(this.penStroke4) : null,
penStroke3:(( await action.getElementCount(this.penStroke3)) > 0) ? await action.getText(this.penStroke3) : null,
penStroke2:(( await action.getElementCount(this.penStroke2)) > 0) ? await action.getText(this.penStroke2) : null,
penStroke1:(( await action.getElementCount(this.penStroke1)) > 0) ? await action.getText(this.penStroke1) : null,
}
 return obj; 
},



click_drawingToolScribble: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolScribble);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolScribble is clicked");

 const canvasElement = await $(this.drawingToolPresentation); // Ensure the canvas selector is correct

 // Scroll the canvas into view, if necessary
 await canvasElement.scrollIntoView();
 
 // Define drawing actions using performActions
 await browser.performActions([
   {
     type: 'pointer',
     id: 'mouse1',
     parameters: { pointerType: 'mouse' },
     actions: [
      { type: 'pointerMove', origin: canvasElement, x: 100, y: 100}, // Starting point
      { type: 'pointerDown', button: 0 },
      { type: 'pointerMove', origin: canvasElement, x: 150, y: 150 }, // Draw to this point
      { type: 'pointerMove', origin: canvasElement, x: 200, y: 200 }, // Continue drawing
      { type: 'pointerMove', origin: canvasElement, x: 250, y: 250 }, // Ending point
      { type: 'pointerUp', button: 0 } // Release mouse button
    ]
   }
 ]);
 
 // Release all actions
 await browser.releaseActions();
 
// const canvasSelector = this.drawingToolPresentation ; // Replace with your canvas selector

// // Move to the starting point of your drawing
// await action.moveTo(canvasSelector, 100, 100);

// // Press the left mouse button down to start drawing
// await browser.buttonDown(0);

// // Move to different coordinates to simulate drawing a line or shape
// await action.moveTo(canvasSelector, 150, 150);
// await action.moveTo(canvasSelector, 200, 200);
// await action.moveTo(canvasSelector, 250, 250);

// // Release the mouse button to finish drawing
// await browser.buttonUp(0);




// const canvasSelector = this.drawingToolPresentation; // Update this with your actual canvas selector
// const canvasElement = await $(canvasSelector);

// // Ensure the canvas is visible in the viewport
// await canvasElement.scrollIntoView();

// // Get canvas dimensions and location
// const canvasPosition = await canvasElement.getLocation();
// const canvasSize = await canvasElement.getSize();

// // Define safe starting coordinates within the canvas
// const startX = Math.round(canvasPosition.x + 10);  // Adjust to a smaller offset if needed
// const startY = Math.round(canvasPosition.y + 10);

// // Perform the drawing action within the bounds of the canvas
// await browser.performActions([
//   {
//     type: 'pointer',
//     id: 'mouse1',
//     parameters: { pointerType: 'mouse' },
//     actions: [
//       { type: 'pointerMove', origin: canvasElement, x: startX, y: startY },
//       { type: 'pointerDown', button: 0 },
//       { type: 'pointerMove', origin: canvasElement, x: startX + Math.min(canvasSize.width - 20, 50), y: startY + Math.min(canvasSize.height - 20, 50) },
//       { type: 'pointerMove', origin: canvasElement, x: startX + Math.min(canvasSize.width - 20, 100), y: startY + Math.min(canvasSize.height - 20, 100) },
//       { type: 'pointerUp', button: 0 }
//     ]
//   }
// ]);

// // Release all actions after completion
// await browser.releaseActions();


}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolScribble is NOT clicked", 'error');
}
return res;
},

click_drawingToolHighlighter: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.drawingToolHighlighter);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " drawingToolScribble is clicked");
  
   const canvasElement = await $(this.drawingToolPresentation); // Ensure the canvas selector is correct
  
   // Scroll the canvas into view, if necessary
   await canvasElement.scrollIntoView();
   
   // Define drawing actions using performActions
   await browser.performActions([
     {
       type: 'pointer',
       id: 'mouse1',
       parameters: { pointerType: 'mouse' },
       actions: [
        { type: 'pointerMove', origin: canvasElement, x: 100, y: 100}, // Starting point
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', origin: canvasElement, x: 150, y: 150 }, // Draw to this point
        { type: 'pointerMove', origin: canvasElement, x: 200, y: 200 }, // Continue drawing
        { type: 'pointerMove', origin: canvasElement, x: 250, y: 250 }, // Ending point
        { type: 'pointerUp', button: 0 } // Release mouse button
      ]
     }
   ]);
   
   // Release all actions
   await browser.releaseActions();
   
  
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"drawingToolScribble is NOT clicked", 'error');
  }
  return res;
  },

click_drawingToolPenColour: async function () {
await logger.logInto(await stackTrace.get());
var res;
console.log("199" , this.drawingToolPenColour )
res =await action.click(this.drawingToolPenColour);
console.log("199 clicked" , res )
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolPenColour is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolPenColour is NOT clicked", 'error');
}
return res;
},

click_drawingToolPenWidth: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolPenWidth);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolPenWidth is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolPenWidth is NOT clicked", 'error');
}
return res;
},

click_drawingToolEraser: async function () {
await logger.logInto(await stackTrace.get());
var res;
//console.log("101",this.drawingToolEraser);
res =await action.click(this.drawingToolEraser);
//console.log("102 clicked",res );

if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolEraser is clicked");

 //console.log("103 clicked");
 const canvasElement = await $(this.drawingToolPresentation); // Ensure the canvas selector is correct

 // Scroll the canvas into view, if necessary
 await canvasElement.scrollIntoView();
 
 // Define drawing actions using performActions
 await browser.performActions([
   {
     type: 'pointer',
     id: 'mouse1',
     parameters: { pointerType: 'mouse' },
     actions: [
       { type: 'pointerMove', origin: canvasElement, x: 100, y: 100}, // Starting point
       { type: 'pointerDown', button: 0 },
       { type: 'pointerMove', origin: canvasElement, x: 150, y: 150 }, // Draw to this point
       { type: 'pointerMove', origin: canvasElement, x: 200, y: 200 }, // Continue drawing
       { type: 'pointerMove', origin: canvasElement, x: 250, y: 250 }, // Ending point
       { type: 'pointerUp', button: 0 } // Release mouse button
     ]
   }
 ]);
 
 // Release all actions
 await browser.releaseActions();


}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolEraser is NOT clicked", 'error');
}
return res;
},

click_drawingToolUndo: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolUndo);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolUndo is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolUndo is NOT clicked", 'error');
}
return res;
},

click_drawingToolRedo: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolRedo);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolRedo is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolRedo is NOT clicked", 'error');
}
return res;
},

click_drawingToolPresentation: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolPresentation);

console.log("vikrant 1",res);

if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolPresentation is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolPresentation is NOT clicked", 'error');
}
return res;
},





click_penColourGreen: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penColourGreen);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penColourGreen is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penColourGreen is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penColourBlue: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penColourBlue);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penColourBlue is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penColourBlue is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penColourRed: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penColourRed);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penColourRed is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penColourRed is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penColourBlack: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penColourBlack);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penColourBlack is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penColourBlack is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penStroke4: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penStroke4);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penStroke4 is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penStroke4 is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penStroke3: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penStroke3);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penStroke3 is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penStroke3 is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penStroke2: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penStroke2);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penStroke2 is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penStroke2 is NOT clicked", 'error');
  }
  return res;
  },
  
  click_penStroke1: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.penStroke1);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " penStroke1 is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"penStroke1 is NOT clicked", 'error');
  }
  return res;
  }

}

