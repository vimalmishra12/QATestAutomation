"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
activityAnsCheck: selectorFile.css.ComproC1.commonActivity.activityAnsCheck,
activityNext: selectorFile.css.ComproC1.commonActivity.activityNext,
activityClose: selectorFile.css.ComproC1.commonActivity.activityClose,
activityStartAgain: selectorFile.css.ComproC1.commonActivity.activityStartAgain,
activityExit: selectorFile.css.ComproC1.commonActivity.activityExit,



isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.activityAnsCheck),
};
return res; 
},

getData_commonActivity: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
activityAnsCheck:(( await action.getElementCount(this.activityAnsCheck)) > 0) ? await action.getText(this.activityAnsCheck) : null,
activityNext:(( await action.getElementCount(this.activityNext)) > 0) ? await action.getText(this.activityNext) : null,
activityClose:(( await action.getElementCount(this.activityClose)) > 0) ? await action.getText(this.activityClose) : null,
activityStartAgain:(( await action.getElementCount(this.activityStartAgain)) > 0) ? await action.getText(this.activityStartAgain) : null,
activityExit:(( await action.getElementCount(this.activityExit)) > 0) ? await action.getText(this.activityExit) : null,
}
 return obj; 
},


click_activityAnsCheck: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.activityAnsCheck);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " activityAnsCheck is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"activityAnsCheck is NOT clicked", 'error');
}
return res;
},

click_activityNext: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.activityNext);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " activityNext is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"activityNext is NOT clicked", 'error');
}
return res;
},

click_activityClose: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.activityClose);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " activityClose is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"activityClose is NOT clicked", 'error');
}
return res;
},

click_activityStartAgain: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.activityStartAgain);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " activityStartAgain is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"activityStartAgain is NOT clicked", 'error');
}
return res;
},

click_activityExit: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.activityExit);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " activityExit is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"activityExit is NOT clicked", 'error');
}
return res;
},

}

