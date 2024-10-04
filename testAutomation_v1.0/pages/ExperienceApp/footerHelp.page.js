"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
promotedArticles: selectorFile.css.ComproC1.footerHelp.promotedArticles,
footerHelpBack: selectorFile.css.ComproC1.footerHelp.footerHelpBack,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.promotedArticles),
};
return res; 
},

getData_footerHelpPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
promotedArticles:(( await action.getElementCount(this.promotedArticles)) > 0) ? await action.getText(this.promotedArticles) : null,
footerHelpBack:(( await action.getElementCount(this.footerHelpBack)) > 0) ? await action.getText(this.footerHelpBack) : null,
}
 return obj; 
},


click_footerHelpBack: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.footerHelpBack);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerHelpBack is clicked");
res =await require ('./login.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerHelpBack is NOT clicked", 'error');
}
return res;
},

}

