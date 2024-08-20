"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
help_btn: selectorFile.css.ComproC1.dashboard.help_btn,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.help_btn),
};

return res; 
},

getData_dashboard: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
help_btn:(( await action.getElementCount(this.help_btn)) > 0) ? await action.getText(this.help_btn) : null,
subheadingText:(( await action.getElementCount(this.subheadingText)) > 0) ? await action.getText(this.subheadingText) : null,
signupBtn:(( await action.getElementCount(this.signupBtn)) > 0) ? await action.getText(this.signupBtn) : null,
loginBtn:(( await action.getElementCount(this.loginBtn)) > 0) ? await action.getText(this.loginBtn) : null,
brandLogo_img:(( await action.getElementCount(this.brandLogo_img)) > 0) ? await action.waitForDisplayed(this.brandLogo_img) : false,
}
 return obj; 
},


click_help_btn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.help_btn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " help_btn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"help_btn is NOT clicked", 'error');
}
return res;
},

}

