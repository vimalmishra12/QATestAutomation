"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
hideSelection: selectorFile.css.ComproC1.showHideSelection.hideSelection,
showSelection: selectorFile.css.ComproC1.showHideSelection.showSelection,
closeSelection: selectorFile.css.ComproC1.showHideSelection.closeSelection,
drawingToolPresentation: selectorFile.css.ComproC1.drawingTool.drawingToolPresentation,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.hideSelection),
};
return res; 
},

getData_showAndHideSelection: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
hideSelection:(( await action.getElementCount(this.hideSelection)) > 0) ? await action.getText(this.hideSelection) : null,
showSelection:(( await action.getElementCount(this.showSelection)) > 0) ? await action.getText(this.showSelection) : null,
closeSelection:(( await action.getElementCount(this.closeSelection)) > 0) ? await action.getText(this.closeSelection) : null,
}
 return obj; 
},


click_hideSelection: async function () {
    await logger.logInto(await stackTrace.get());
    var res;

    //Ensure hideSelection element is clickable
    const hideSelectionElement = await $(this.hideSelection);
    await hideSelectionElement.waitForClickable({ timeout: 5000 });

    res =await action.click(this.hideSelection);
    if (true == res) {
    await logger.logInto(await stackTrace.get(), " hideSelection is clicked");

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
       
    await browser.pause(10000);
   
   


    }
    else {
    await logger.logInto(await stackTrace.get(), res +"hideSelection is NOT clicked", 'error');
    }
    return res;
},

click_showSelection: async function () {
await logger.logInto(await stackTrace.get());
var res= true;
//res =await action.click(this.showSelection);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " showSelection is clicked");
 //console.log("slow selection is clicked ");

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
    
 await browser.pause(10000);


 
}
else {
await logger.logInto(await stackTrace.get(), res +"showSelection is NOT clicked", 'error');
}
return res;
},




click_closeSelection: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.closeSelection);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " closeSelection is clicked");

}
else {
await logger.logInto(await stackTrace.get(), res +"closeSelection is NOT clicked", 'error');
}
return res;
},

}

