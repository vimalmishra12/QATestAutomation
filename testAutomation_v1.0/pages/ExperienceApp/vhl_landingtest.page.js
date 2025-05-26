"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
usernameLabel: selectorFile.vhl_landingtest.usernameLabel,
notes: selectorFile.vhl_landingtest.notes,
closeNoteBox: selectorFile.vhl_landingtest.closeNoteBox,
tableOfContentsPage1: selectorFile.vhl_landingtest.tableOfContentsPage1,
closeTOC: selectorFile.vhl_landingtest.closeTOC,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.usernameLabel),
};
await browser.pause(10000);
return res; 
},

getData_vhl_landingtest: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
usernameLabel:(( await action.getElementCount(this.usernameLabel)) > 0) ? await action.getText(this.usernameLabel) : null,
notes:(( await action.getElementCount(this.notes)) > 0) ? await action.getText(this.notes) : null,
closeNoteBox:(( await action.getElementCount(this.closeNoteBox)) > 0) ? await action.getText(this.closeNoteBox) : null,
tableOfContentsPage1:(( await action.getElementCount(this.tableOfContentsPage1)) > 0) ? await action.getText(this.tableOfContentsPage1) : null,
closeTOC:(( await action.getElementCount(this.closeTOC)) > 0) ? await action.getText(this.closeTOC) : null,
}
 return obj; 
},


click_usernameLabel: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.usernameLabel);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " usernameLabel is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"usernameLabel is NOT clicked", 'error');
}
return res;
},

click_notes: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.notes);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " notes is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"notes is NOT clicked", 'error');
}
return res;
},

click_closeNoteBox: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.closeNoteBox);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " closeNoteBox is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"closeNoteBox is NOT clicked", 'error');
}
return res;
},

click_tableOfContentsPage1: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tableOfContentsPage1);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tableOfContentsPage1 is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tableOfContentsPage1 is NOT clicked", 'error');
}
return res;
},

click_closeTOC: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.closeTOC);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " closeTOC is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"closeTOC is NOT clicked", 'error');
}
return res;
},

}

