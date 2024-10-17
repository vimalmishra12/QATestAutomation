// file is not using only for reference 

"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
hyperLinkAnswer: selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperLinkAnswer,
hyperlinkAudio: selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkAudio,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.hyperLinkAnswer),
};
return res; 
},

getData_ebookLearningHyperlink: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
hyperLinkAnswer:(( await action.getElementCount(this.hyperLinkAnswer)) > 0) ? await action.getText(this.hyperLinkAnswer) : null,
hyperlinkAudio:(( await action.getElementCount(this.hyperlinkAudio)) > 0) ? await action.getText(this.hyperlinkAudio) : null,
}
 return obj; 
},


click_hyperLinkAnswer: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.hyperLinkAnswer);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " hyperLinkAnswer is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"hyperLinkAnswer is NOT clicked", 'error');
}
return res;
},

click_hyperlinkAudio: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.hyperlinkAudio);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " hyperlinkAudio is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"hyperlinkAudio is NOT clicked", 'error');
}
return res;
},

}

