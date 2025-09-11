"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
notificationBtn: selectorFile.css.ComproC1.invitationNotification.notificationBtn,
invitationNotify: selectorFile.css.ComproC1.invitationNotification.invitationNotify,
selectCheckbox: selectorFile.css.ComproC1.invitationNotification.selectCheckbox,
acceptBtn: selectorFile.css.ComproC1.invitationNotification.acceptBtn,
goToDashboard: selectorFile.css.ComproC1.invitationNotification.goToDashboard,




isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.notificationBtn),
};
return res; 
},

getData_invitationAccept: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
notificationBtn:(( await action.getElementCount(this.notificationBtn)) > 0) ? await action.getText(this.notificationBtn) : null,
invitationNotify:(( await action.getElementCount(this.invitationNotify)) > 0) ? await action.getText(this.invitationNotify) : null,
selectCheckbox:(( await action.getElementCount(this.selectCheckbox)) > 0) ? await action.getText(this.selectCheckbox) : null,
acceptBtn:(( await action.getElementCount(this.acceptBtn)) > 0) ? await action.getText(this.acceptBtn) : null,
goToDashboard:(( await action.getElementCount(this.goToDashboard)) > 0) ? await action.getText(this.goToDashboard) : null,
}
 return obj; 
},


click_notificationBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
await browser.pause(5000);
await action.waitForDocumentLoad();
await action.waitForDisplayed(this.notificationBtn,undefined);
res =await action.click(this.notificationBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " notificationBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"notificationBtn is NOT clicked", 'error');
}
return res;
},

click_invitationNotify: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.invitationNotify);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " invitationNotify is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"invitationNotify is NOT clicked", 'error');
}
return res;
},



click_selectCheckbox: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.selectCheckbox);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " selectCheckbox is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"selectCheckbox is NOT clicked", 'error');
}
return res;
},

click_acceptBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.acceptBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " acceptBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"acceptBtn is NOT clicked", 'error');
}
return res;
},

click_goToDashboard: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.goToDashboard);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " goToDashboard is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"goToDashboard is NOT clicked", 'error');
}
return res;
},

}

