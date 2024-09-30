"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
privacyHealding: selectorFile.css.ComproC1.privacy.privacyHealding,
privacyBack: selectorFile.css.ComproC1.privacy.privacyBack,



isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
browser.pause(3000);
await action.waitForDocumentLoad();
res = {
    
pageStatus: await action.waitForDisplayed(this.privacyHealding),
};
return res; 
},

getData_privacyPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
termsHealding:(( await action.getElementCount(this.privacyHealding)) > 0) ? await action.getText(this.privacyHealding) : null,
termBack:(( await action.getElementCount(this.privacyBack)) > 0) ? await action.getText(this.privacyBack) : null,
}
 return obj; 
},


click_privacyBack: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.privacyBack);
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

