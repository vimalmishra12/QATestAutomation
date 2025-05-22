"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
Pen Icon: selectorFile.VHL_Highlighter_Test.Pen Icon,
Color Picker: selectorFile.VHL_Highlighter_Test.Color Picker,
Eraser Button: selectorFile.VHL_Highlighter_Test.Eraser Button,
Clear All: selectorFile.VHL_Highlighter_Test.Clear All,
Close Button: selectorFile.VHL_Highlighter_Test.Close Button,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.Pen Icon),
};
return res; 
},

getData_Annotation Toolbar: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
Pen Icon:(( await action.getElementCount(this.Pen Icon)) > 0) ? await action.waitForDisplayed(this.Pen Icon) : false,
Color Picker:(( await action.getElementCount(this.Color Picker)) > 0) ? await action.getText(this.Color Picker) : null,
Eraser Button:(( await action.getElementCount(this.Eraser Button)) > 0) ? await action.getText(this.Eraser Button) : null,
Clear All:(( await action.getElementCount(this.Clear All)) > 0) ? await action.getText(this.Clear All) : null,
}
 return obj; 
},

getData_button: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
Close Button:(( await action.getElementCount(this.Close Button)) > 0) ? await action.getText(this.Close Button) : null,
}
 return obj; 
},


click_Eraser Button: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.Eraser Button);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " Eraser Button is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"Eraser Button is NOT clicked", 'error');
}
return res;
},

click_Clear All: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.Clear All);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " Clear All is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"Clear All is NOT clicked", 'error');
}
return res;
},

}

