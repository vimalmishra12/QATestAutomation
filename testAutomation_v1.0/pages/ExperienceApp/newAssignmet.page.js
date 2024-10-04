"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
cancel: selectorFile.css.ComproC1.newAssignment.cancel,
back: selectorFile.css.ComproC1.newAssignment.back,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.cancel),
};
return res; 
},

getData_newAssignmetPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
cancel:(( await action.getElementCount(this.cancel)) > 0) ? await action.getText(this.cancel) : null,
back:(( await action.getElementCount(this.back)) > 0) ? await action.getText(this.back) : null,
}
 return obj; 
},


click_cancel: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.cancel);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " cancel is clicked");
res =await require ('./assignment.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"cancel is NOT clicked", 'error');
}
return res;
},

click_back: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.back);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " back is clicked");
res =await require ('./assignment.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"back is NOT clicked", 'error');
}
return res;
},

}

