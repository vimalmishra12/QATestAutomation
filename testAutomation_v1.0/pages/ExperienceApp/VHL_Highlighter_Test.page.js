"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
editIcon: selectorFile.VHL_Highlighter_Test.editIcon,
highlighterButton: selectorFile.VHL_Highlighter_Test.highlighterButton,
highlighter_inside_Button: selectorFile.VHL_Highlighter_Test.highlighter_inside_Button,
colorPickerButton: selectorFile.VHL_Highlighter_Test.colorPickerButton,
eraserButton: selectorFile.VHL_Highlighter_Test.eraserButton,
clearAllButton: selectorFile.VHL_Highlighter_Test.clearAllButton,



isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.editIcon),
};
return res; 
},

getData_vhl_highlighter_test: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
editIcon:(( await action.getElementCount(this.editIcon)) > 0) ? await action.waitForDisplayed(this.editIcon) : false,
highlighterButton:(( await action.getElementCount(this.highlighterButton)) > 0) ? await action.getText(this.highlighterButton) : null,
// highlighter_inside_Button:(( await action.getElementCount(this.highlighter_inside_Button)) > 0) ? await action.getText(this.highlighter_inside_Button) : null,
colorPickerButton:(( await action.getElementCount(this.colorPickerButton)) > 0) ? await action.getText(this.colorPickerButton) : null,
eraserButton:(( await action.getElementCount(this.eraserButton)) > 0) ? await action.getText(this.eraserButton) : null,
clearAllButton:(( await action.getElementCount(this.clearAllButton)) > 0) ? await action.getText(this.clearAllButton) : null,

}
 return obj; 
},


click_highlighterButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.highlighterButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " highlighterButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"highlighterButton is NOT clicked", 'error');
}
return res;
},

click_eraserButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.eraserButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " eraserButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"eraserButton is NOT clicked", 'error');
}
return res;
},

click_clearAllButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.clearAllButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " clearAllButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"clearAllButton is NOT clicked", 'error');
}
return res;
},

}

