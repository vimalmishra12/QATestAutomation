"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
ifYouRequireSupport: selectorFile.css.ComproC1.footerSiteFeedback.ifYouRequireSupport,
next: selectorFile.css.ComproC1.footerSiteFeedback.next,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.ifYouRequireSupport),
};
return res; 
},

getData_siteFeedbackPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
ifYouRequireSupport:(( await action.getElementCount(this.ifYouRequireSupport)) > 0) ? await action.getText(this.ifYouRequireSupport) : null,
next:(( await action.getElementCount(this.next)) > 0) ? await action.getText(this.next) : null,
}
 return obj; 
},


click_ifYouRequireSupport: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.ifYouRequireSupport);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " ifYouRequireSupport is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"ifYouRequireSupport is NOT clicked", 'error');
}
return res;
},

set_next:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.next,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in next");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in next", 'error');
}
return res;
},

}

