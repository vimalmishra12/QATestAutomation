"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
cqaTestProd: selectorFile.css.ComproC1.eBookContents.cqaTestProd,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.cqaTestProd),
};
return res; 
},

getData_ebookContents: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
cqaTestProd:(( await action.getElementCount(this.cqaTestProd)) > 0) ? await action.getText(this.cqaTestProd) : null,
Timer:(( await action.getElementCount(this.Timer)) > 0) ? await action.getText(this.Timer) : null,
}
 return obj; 
},


}

