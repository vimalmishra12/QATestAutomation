"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
footerAccessibility: selectorFile.css.ComproC1.accesibility.footerAccessibility,
footerAccesibilityBack: selectorFile.css.ComproC1.accesibility.footerAccesibilityBack,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.footerAccessibility),
};
return res; 
},

getData_footerAccessibility: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;



obj = {
footerAccessibility:(( await action.getElementCount(this.footerAccessibility)) > 0) ? await action.getText(this.footerAccessibility) : null,
footerAccesibilityBack:(( await action.getElementCount(this.footerAccesibilityBack)) > 0) ? await action.getText(this.footerAccesibilityBack) : null,
}
 return obj; 
},


click_footerAccesibilityBack: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.footerAccesibilityBack);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerAccesibilityBack is clicked");
res =await require ('./landing.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerAccesibilityBack is NOT clicked", 'error');
}
return res;
},

}

