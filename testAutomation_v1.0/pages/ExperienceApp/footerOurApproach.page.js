"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
languageAssessment: selectorFile.css.ComproC1.footerOurApproach.languageAssessment,
languageLearningMaterials: selectorFile.css.ComproC1.footerOurApproach.languageLearningMaterials,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.languageAssessment),
};
return res; 
},

getData_ourApproachPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
languageAssessment:(( await action.getElementCount(this.languageAssessment)) > 0) ? await action.getText(this.languageAssessment) : null,
languageLearningMaterials:(( await action.getElementCount(this.languageLearningMaterials)) > 0) ? await action.getText(this.languageLearningMaterials) : null,
}
 return obj; 
},


click_languageAssessment: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.languageAssessment);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " languageAssessment is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"languageAssessment is NOT clicked", 'error');
}
return res;
},

click_languageLearningMaterials: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.languageLearningMaterials);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " languageLearningMaterials is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"languageLearningMaterials is NOT clicked", 'error');
}
return res;
},

}

