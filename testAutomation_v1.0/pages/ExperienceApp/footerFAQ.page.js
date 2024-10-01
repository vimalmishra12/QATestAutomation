"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
promotedArticle: selectorFile.css.ComproC1.footerFAQ.promotedArticle,
back: selectorFile.css.ComproC1.footerFAQ.back,


// isInitialized: async function ()
// { 
// var res;
// await logger.logInto(await stackTrace.get());
// await action.waitForDocumentLoad();
// res = {
// pageStatus: await action.waitForDisplayed(this.promotedArticle),
// };
// return res; 
// },

// getData_fAQPage: async function ()
// {
// await logger.logInto(await stackTrace.get());
// var obj;
// obj = {
// promotedArticle:(( await action.getElementCount(this.promotedArticle)) > 0) ? await action.getText(this.promotedArticle) : null,
// Back:(( await action.getElementCount(this.Back)) > 0) ? await action.getText(this.Back) : null,
// }
//  return obj; 
// },


// click_Back: async function () {
// await logger.logInto(await stackTrace.get());
// var res;
// res =await action.click(this.Back);
// if (true == res) {
//  await logger.logInto(await stackTrace.get(), " Back is clicked");
// res =await require ('./login.page').isInitialized();
// }
// else {
// await logger.logInto(await stackTrace.get(), res +"Back is NOT clicked", 'error');
// }
// return res;
// },



isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
browser.pause(3000);
await action.waitForDocumentLoad();
res = {
    
pageStatus: await action.waitForDisplayed(this.promotedArticle),
};
return res; 
},

getData_fAQPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
promotedArticle:(( await action.getElementCount(this.promotedArticle)) > 0) ? await action.getText(this.promotedArticle) : null,
back:(( await action.getElementCount(this.back)) > 0) ? await action.getText(this.back) : null,
}
 return obj; 
},

click_Back: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.back);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " termBack is clicked");
res =await require ('./landing.page.js').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"termBack is NOT clicked", 'error');
}
return res;
},

}