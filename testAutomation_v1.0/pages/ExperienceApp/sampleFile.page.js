"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
Welcome:  selectorFile.vhlLoginTest.Welcome,
  Username: selectorFile.vhlLoginTest.Username,
  Password: selectorFile.vhlLoginTest.Password,
  commit:   selectorFile.vhlLoginTest.commit,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.Welcome),
};
return res; 
},

getData_LoginPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
Welcome:(( await action.getElementCount(this.Welcome)) > 0) ? await action.getText(this.Welcome) : null,
Username:(( await action.getElementCount(this.Username)) > 0) ? await action.getText(this.Username) : null,
Password:(( await action.getElementCount(this.Password)) > 0) ? await action.getText(this.Password) : null,
commit:(( await action.getElementCount(this.commit)) > 0) ? await action.getText(this.commit) : null,
}
 return obj; 
},


click_commit: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.commit);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " commit is clicked");
res = await require('./vhl_landingtest.page').isInitialized();
// res = await require('./vhlReader.page').isInitialized() &&   (await browser.getUrl()).startsWith('https://reader3-qa.vhlcentral.com');
// }
// res = (await browser.getUrl()).startsWith('https://reader3-qa.vhlcentral.com');
console.log("this is " , res) ;
}
else {
await logger.logInto(await stackTrace.get(), res +"commit is NOT clicked", 'error');
}
return res;
},

set_Username:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.Username,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in Username");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in Username", 'error');
}
return res;
},

set_Password:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.Password,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in Password");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in Password", 'error');
}
return res;
},

}

