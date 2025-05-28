"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
notesButton: selectorFile.vhlNotes.notesButton,
dockButton: selectorFile.vhlNotes.dockButton,
allPagesTab: selectorFile.vhlNotes.allPagesTab,
pageCoverTab: selectorFile.vhlNotes.pageCoverTab,
addNoteBtn: selectorFile.vhlNotes.addNoteBtn,
addNotesTextarea: selectorFile.vhlNotes.addNotesTextarea,
saveNoteBtn: selectorFile.vhlNotes.saveNoteBtn,
notePreviewText: selectorFile.vhlNotes.notePreviewText,
deleteNoteSvg: selectorFile.vhlNotes.deleteNoteSvg,
deleteNoteBtn: selectorFile.vhlNotes.deleteNoteBtn,
closeButton: selectorFile.vhlNotes.closeButton,
addNotesCanvas: selectorFile.vhlNotes.addNotesCanvas,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.notesButton),
};
return res; 
},

getData_vhlNotes: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
notesButton:(( await action.getElementCount(this.notesButton)) > 0) ? await action.getText(this.notesButton) : null,
dockButton:(( await action.getElementCount(this.dockButton)) > 0) ? await action.getText(this.dockButton) : null,
allPagesTab:(( await action.getElementCount(this.allPagesTab)) > 0) ? await action.getText(this.allPagesTab) : null,
pageCoverTab:(( await action.getElementCount(this.pageCoverTab)) > 0) ? await action.getText(this.pageCoverTab) : null,
addNoteBtn:(( await action.getElementCount(this.addNoteBtn)) > 0) ? await action.getText(this.addNoteBtn) : null,
addNotesTextarea:(( await action.getElementCount(this.addNotesTextarea)) > 0) ? await action.getText(this.addNotesTextarea) : null,
saveNoteBtn:(( await action.getElementCount(this.saveNoteBtn)) > 0) ? await action.getText(this.saveNoteBtn) : null,
notePreviewText:(( await action.getElementCount(this.notePreviewText)) > 0) ? await action.getText(this.notePreviewText) : null,
deleteNoteSvg:(( await action.getElementCount(this.deleteNoteSvg)) > 0) ? await action.getText(this.deleteNoteSvg) : null,
deleteNoteBtn:(( await action.getElementCount(this.deleteNoteBtn)) > 0) ? await action.getText(this.deleteNoteBtn) : null,
closeButton:(( await action.getElementCount(this.closeButton)) > 0) ? await action.getText(this.closeButton) : null,
}
 return obj; 
},


click_notesButton: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.notesButton);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " notesButton is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"notesButton is NOT clicked", 'error');
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

click_addNoteBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.addNoteBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " addNoteBtn is clicked");
 await action.dragAndDropWithPath(this.addNotesCanvas,
             100, 100,
             100, 100
            )
}
else {
await logger.logInto(await stackTrace.get(), res +"addNoteBtn is NOT clicked", 'error');
}
return res;
},

click_saveNoteBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.saveNoteBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " saveNoteBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"saveNoteBtn is NOT clicked", 'error');
}
browser.pause(10000);
return res;
},

click_notePreviewText: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.notePreviewText);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " notePreviewText is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"notePreviewText is NOT clicked", 'error');
}
return res;
},

click_deleteNoteSvg: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.deleteNoteSvg);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " deleteNoteSvg is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"deleteNoteSvg is NOT clicked", 'error');
}
return res;
},

click_deleteNoteBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.deleteNoteBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " deleteNoteBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"deleteNoteBtn is NOT clicked", 'error');
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

set_addNotesTextarea:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.addNotesTextarea,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in addNotesTextarea");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in addNotesTextarea", 'error');
}
return res;
},

}

