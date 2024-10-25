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
}
 return obj; 
},


click_drawingToolScribble: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolScribble);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolScribble is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolScribble is NOT clicked", 'error');
}
return res;
},

click_drawingToolPenColour: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.drawingToolPenColour);
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
res =await action.click(this.drawingToolEraser);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolEraser is clicked");
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
if (true == res) {
 await logger.logInto(await stackTrace.get(), " drawingToolPresentation is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"drawingToolPresentation is NOT clicked", 'error');
}
return res;
},

}

