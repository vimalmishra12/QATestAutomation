"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
classheading: selectorFile.css.ComproC1.c1assignment.classheading,
Assignments: selectorFile.css.ComproC1.c1assignment.Assignments,
Createassignment: selectorFile.css.ComproC1.c1assignment.Createassignment,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.classheading),
};
return res; 
},

getData_c1assignment: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
classheading:(( await action.getElementCount(this.classheading)) > 0) ? await action.getText(this.classheading) : null,
Assignments:(( await action.getElementCount(this.Assignments)) > 0) ? await action.getText(this.Assignments) : null,
Createassignment:(( await action.getElementCount(this.Createassignment)) > 0) ? await action.getText(this.Createassignment) : null,
}
 return obj; 
},


click_classheading: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.classheading);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " classheading is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"classheading is NOT clicked", 'error');
}
return res;
},

click_Assignments: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.Assignments);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " Assignments is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"Assignments is NOT clicked", 'error');
}
return res;
},

click_Createassignment: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.Createassignment);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " Createassignment is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"Createassignment is NOT clicked", 'error');
}
return res;
},

}

