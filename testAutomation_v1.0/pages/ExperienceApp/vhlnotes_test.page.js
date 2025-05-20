"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
// notes: selectorFile.css.ComproC1.vhlnotes_test.notes,
// addNote: selectorFile.css.ComproC1.vhlnotes_test.addNote,
// presentation: selectorFile.css.ComproC1.vhlnotes_test.presentation,
// typeYourNotesHere: selectorFile.css.ComproC1.vhlnotes_test.typeYourNotesHere,
// save	: selectorFile.css.ComproC1.vhlnotes_test.save	,
// close: selectorFile.css.ComproC1.vhlnotes_test.close,
notes:selectorFile.vhlnotes_test.notes,
addNote:selectorFile.vhlnotes_test.addNote,
presentation:selectorFile.vhlnotes_test.presentation,
typeYourNotesHere:selectorFile.vhlnotes_test.typeYourNotesHere,
save:selectorFile.vhlnotes_test.save,
close:selectorFile.vhlnotes_test.close,



isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.save	),
};
return res; 
},

getData_Notes_start: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
notes:(( await action.getElementCount(this.notes)) > 0) ? await action.getText(this.notes) : null,
addNote:(( await action.getElementCount(this.addNote)) > 0) ? await action.getText(this.addNote) : null,
presentation:(( await action.getElementCount(this.presentation)) > 0) ? await action.getText(this.presentation) : null,
typeYourNotesHere:(( await action.getElementCount(this.typeYourNotesHere)) > 0) ? await action.getText(this.typeYourNotesHere) : null,
save	:(( await action.getElementCount(this.save	)) > 0) ? await action.getText(this.save	) : null,
close:(( await action.getElementCount(this.close)) > 0) ? await action.getText(this.close) : null,
}
 return obj; 
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

click_addNote: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.addNote);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " addNote is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"addNote is NOT clicked", 'error');
}
return res;
},

click_presentation: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.presentation);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " presentation is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"presentation is NOT clicked", 'error');
}
return res;
},

click_typeYourNotesHere: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.typeYourNotesHere);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " typeYourNotesHere is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"typeYourNotesHere is NOT clicked", 'error');
}
return res;
},

click_save	: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.save	);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " save	 is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"save	 is NOT clicked", 'error');
}
return res;
},

click_close: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.close);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " close is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"close is NOT clicked", 'error');
}
return res;
},

set_typeYourNotesHere:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.typeYourNotesHere,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in typeYourNotesHere");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in typeYourNotesHere", 'error');
}
return res;
},

}

