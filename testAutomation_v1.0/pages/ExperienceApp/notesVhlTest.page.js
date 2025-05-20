"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
addNoteButton: selectorFile.notesVhlTest.addNoteButton,
dockButton: selectorFile.notesVhlTest.dockButton,
pageCoverTab: selectorFile.notesVhlTest.pageCoverTab,
allPagesTab: selectorFile.notesVhlTest.allPagesTab,
closeButton: selectorFile.notesVhlTest.closeButton,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.addNoteButton),
};
return res; 
},

getData_vhlNotes: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
// addNoteButton:(( await action.getElementCount(this.addNoteButton)) > 0) ? await action.getText(this.addNoteButton) : null,
dockButton:(( await action.getElementCount(this.dockButton)) > 0) ? await action.getText(this.dockButton) : null,
pageCoverTab:(( await action.getElementCount(this.pageCoverTab)) > 0) ? await action.getText(this.pageCoverTab) : null,
allPagesTab:(( await action.getElementCount(this.allPagesTab)) > 0) ? await action.getText(this.allPagesTab) : null,
closeButton:(( await action.getElementCount(this.closeButton)) > 0) ? await action.getText(this.closeButton) : null,
}
 return obj; 
},


click_addNoteButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.addNoteButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " addNoteButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"addNoteButton is NOT clicked", 'error');
}
return res;
},

click_dockButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.dockButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " dockButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"dockButton is NOT clicked", 'error');
}
return res;
},

click_pageCoverTab: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.pageCoverTab);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " pageCoverTab is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"pageCoverTab is NOT clicked", 'error');
}
return res;
},

click_allPagesTab: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.allPagesTab);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " allPagesTab is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"allPagesTab is NOT clicked", 'error');
}
return res;
},

click_closeButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.closeButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " closeButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"closeButton is NOT clicked", 'error');
}
return res;
},

}

