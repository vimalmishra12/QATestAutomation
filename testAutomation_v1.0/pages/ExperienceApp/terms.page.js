"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
termsHealding: selectorFile.css.ComproC1.term.termsHealding,
termBack: selectorFile.css.ComproC1.term.termBack,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
browser.pause(3000);
await action.waitForDocumentLoad();
res = {
    
pageStatus: await action.waitForDisplayed(this.termsHealding),
};
return res; 
},

getData_termPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
termsHealding:(( await action.getElementCount(this.termsHealding)) > 0) ? await action.getText(this.termsHealding) : null,
termBack:(( await action.getElementCount(this.termBack)) > 0) ? await action.getText(this.termBack) : null,
}
 return obj; 
},

click_termBack: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.termBack);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " termBack is clicked");
res =await require ('./landing.page.js').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"termBack is NOT clicked", 'error');
}
return res;
},






// isInitialized: async function ()
// { 
// var res;
// await logger.logInto(await stackTrace.get());
// browser.pause(3000);
// await action.waitForDocumentLoad();
// res = {
    
// pageStatus: await action.waitForDisplayed(".promoted-title"),
// };
// return res; 
// },

// getData_termPage: async function ()
// {
// await logger.logInto(await stackTrace.get());
// var obj;
// obj = {
// termsHealding:(( await action.getElementCount(".promoted-title")) > 0) ? await action.getText(".promoted-title") : null,
// termBack:(( await action.getElementCount("a[href=\"https://www.cambridgeone.org/login\"]")) > 0) ? await action.getText("a[href=\"https://www.cambridgeone.org/login\"]") : null,
// }
//  return obj; 
// },

// click_termBack: async function () {
// await logger.logInto(await stackTrace.get());
// var res;
// res =await action.click(this.termBack);
// if (true == res) {
//  await logger.logInto(await stackTrace.get(), " termBack is clicked");
// res =await require ('./landing.page.js').isInitialized();
// }
// else {
// await logger.logInto(await stackTrace.get(), res +"termBack is NOT clicked", 'error');
// }
// return res;
// },
}

