"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
footerCambridgeOneForSchools: selectorFile.css.ComproC1.footerCambridgeOneForSchool.footerCambridgeOneForSchools,
footerBack: selectorFile.css.ComproC1.footerCambridgeOneForSchool.footerBack,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.footerCambridgeOneForSchools),
};
return res; 
},

getData_CambridgeOneForSchools: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
footerCambridgeOneForSchools:(( await action.getElementCount(this.footerCambridgeOneForSchools)) > 0) ? await action.getText(this.footerCambridgeOneForSchools) : null,
footerBack:(( await action.getElementCount(this.footerBack)) > 0) ? await action.getText(this.footerBack) : null,
}
 return obj; 
},


click_footerBack: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.footerBack);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerBack is clicked");
res =await require ('./signup.page.js').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerBack is NOT clicked", 'error');
}
return res;
},

}

