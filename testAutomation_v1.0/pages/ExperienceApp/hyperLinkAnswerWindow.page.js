// file is not using only for reference 
"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
hyperAnswerReveal: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerReveal,
hyperAnswerClose: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerClose,
hyperAnswerFullScreen: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerFullScreen,
hyperAnswerQuestion: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerQuestion,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.hyperAnswerReveal),
};
return res; 
},

getData_ebookHyperlinkAnswer: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
hyperAnswerReveal:(( await action.getElementCount(this.hyperAnswerReveal)) > 0) ? await action.getText(this.hyperAnswerReveal) : null,
hyperAnswerClose:(( await action.getElementCount(this.hyperAnswerClose)) > 0) ? await action.getText(this.hyperAnswerClose) : null,
hyperAnswerFullScreen:(( await action.getElementCount(this.hyperAnswerFullScreen)) > 0) ? await action.getText(this.hyperAnswerFullScreen) : null,
hyperAnswerQuestion:(( await action.getElementCount(this.hyperAnswerQuestion)) > 0) ? await action.getText(this.hyperAnswerQuestion) : null,
}
 return obj; 
},


click_hyperAnswerReveal: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.hyperAnswerReveal);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " hyperAnswerReveal is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"hyperAnswerReveal is NOT clicked", 'error');
}
return res;
},

click_hyperAnswerClose: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.hyperAnswerClose);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " hyperAnswerClose is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"hyperAnswerClose is NOT clicked", 'error');
}
return res;
},

click_hyperAnswerFullScreen: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.hyperAnswerFullScreen);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " hyperAnswerFullScreen is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"hyperAnswerFullScreen is NOT clicked", 'error');
}
return res;
},

}

