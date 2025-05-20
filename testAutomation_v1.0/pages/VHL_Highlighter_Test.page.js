"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
undefined: selectorFile.css.ComproC1.VHL_Highlighter_Test.undefined,
undefined: selectorFile.css.ComproC1.VHL_Highlighter_Test.undefined,
undefined: selectorFile.css.ComproC1.VHL_Highlighter_Test.undefined,
undefined: selectorFile.css.ComproC1.VHL_Highlighter_Test.undefined,
undefined: selectorFile.css.ComproC1.VHL_Highlighter_Test.undefined,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.undefined),
};
return res; 
},

getData_vhl_highlighter_test: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
undefined:(( await action.getElementCount(this.undefined)) > 0) ? await action.waitForDisplayed(this.undefined) : false,
undefined:(( await action.getElementCount(this.undefined)) > 0) ? await action.getText(this.undefined) : null,
undefined:(( await action.getElementCount(this.undefined)) > 0) ? await action.getText(this.undefined) : null,
undefined:(( await action.getElementCount(this.undefined)) > 0) ? await action.getText(this.undefined) : null,
undefined:(( await action.getElementCount(this.undefined)) > 0) ? await action.getText(this.undefined) : null,
}
 return obj; 
},


click_undefined: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.undefined);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " undefined is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"undefined is NOT clicked", 'error');
}
return res;
},

click_undefined: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.undefined);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " undefined is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"undefined is NOT clicked", 'error');
}
return res;
},

click_undefined: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.undefined);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " undefined is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"undefined is NOT clicked", 'error');
}
return res;
},

}

