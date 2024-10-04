"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
teaDashClassData: selectorFile.css.ComproC1.teaDashAssignment.teaDashClassData,
teaDashAssignments: selectorFile.css.ComproC1.teaDashAssignment.teaDashAssignments,
teaDashMaterial: selectorFile.css.ComproC1.teaDashAssignment.teaDashMaterial,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.teaDashClassData),
};
return res; 
},

getData_teaDash: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
teaDashClassData:(( await action.getElementCount(this.teaDashClassData)) > 0) ? await action.getText(this.teaDashClassData) : null,
teaDashAssignments:(( await action.getElementCount(this.teaDashAssignments)) > 0) ? await action.getText(this.teaDashAssignments) : null,
teaDashMaterial:(( await action.getElementCount(this.teaDashMaterial)) > 0) ? await action.getText(this.teaDashMaterial) : null,
}
 return obj; 
},


click_teaDashClassData: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.teaDashClassData);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " teaDashClassData is clicked");
res =await require ('./classdata.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"teaDashClassData is NOT clicked", 'error');
}
return res;
},

click_teaDashAssignments: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.teaDashAssignments);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " teaDashAssignments is clicked");
res =await require ('./assignments.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"teaDashAssignments is NOT clicked", 'error');
}
return res;
},

click_teaDashMaterial: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.teaDashMaterial);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " teaDashMaterial is clicked");
res =await require ('./materials.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"teaDashMaterial is NOT clicked", 'error');
}
return res;
},

}

