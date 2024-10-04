"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
classData: selectorFile.css.ComproC1.assignment.classData,
assignments: selectorFile.css.ComproC1.assignment.assignments,
materials: selectorFile.css.ComproC1.assignment.materials,
createAssignment: selectorFile.css.ComproC1.assignment.createAssignment,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.classData),
};
return res; 
},

getData_assignmentPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
classData:(( await action.getElementCount(this.classData)) > 0) ? await action.getText(this.classData) : null,
assignments:(( await action.getElementCount(this.assignments)) > 0) ? await action.getText(this.assignments) : null,
materials:(( await action.getElementCount(this.materials)) > 0) ? await action.getText(this.materials) : null,
createAssignment:(( await action.getElementCount(this.createAssignment)) > 0) ? await action.getText(this.createAssignment) : null,
}
 return obj; 
},


click_classData: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.classData);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " classData is clicked");
res =await require ('./classdata.Page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"classData is NOT clicked", 'error');
}
return res;
},

click_assignments: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.assignments);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " assignments is clicked");
res =await require ('./assignments.Page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"assignments is NOT clicked", 'error');
}
return res;
},

click_materials: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.materials);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " materials is clicked");
res =await require ('./materials.Page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"materials is NOT clicked", 'error');
}
return res;
},

click_createAssignment: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.createAssignment);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " createAssignment is clicked");
res =await require ('./newAssignmet.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"createAssignment is NOT clicked", 'error');
}
return res;
},

}

