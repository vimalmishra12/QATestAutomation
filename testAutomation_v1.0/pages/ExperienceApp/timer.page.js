"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
timerCountUp: selectorFile.css.ComproC1.timer.timerCountUp,
timerCountDownClear: selectorFile.css.ComproC1.timer.timerCountDownClear,
timerCountDownMute: selectorFile.css.ComproC1.timer.timerCountDownMute,
timerCountDownClose: selectorFile.css.ComproC1.timer.timerCountDownClose,
timerCountDownPlay: selectorFile.css.ComproC1.timer.timerCountDownPlay,
timerBtnOne: selectorFile.css.ComproC1.timer.timerBtnOne,
timerBtnTwo: selectorFile.css.ComproC1.timer.timerBtnTwo,
timerBtnthree: selectorFile.css.ComproC1.timer.timerBtnthree,
timerCountDown: selectorFile.css.ComproC1.timer.timerCountDown,
timerCountUpClose: selectorFile.css.ComproC1.timer.timerCountUpClose,
timerCountUpPause: selectorFile.css.ComproC1.timer.timerCountUpPause,
timerCountUpPlay: selectorFile.css.ComproC1.timer.timerCountUpPlay,
timerReset: selectorFile.css.ComproC1.timer.timerReset,
timerCountDownUnmute: selectorFile.css.ComproC1.timer.timerCountDownUnmute,
timerCountDownPause: selectorFile.css.ComproC1.timer.timerCountDownPause,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.timerCountUp),
};
return res; 
},

getData_timerCountDown: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
timerCountUp:(( await action.getElementCount(this.timerCountUp)) > 0) ? await action.getText(this.timerCountUp) : null,
timerCountDownClear:(( await action.getElementCount(this.timerCountDownClear)) > 0) ? await action.getText(this.timerCountDownClear) : null,
timerCountDownMute:(( await action.getElementCount(this.timerCountDownMute)) > 0) ? await action.getText(this.timerCountDownMute) : null,
timerCountDownClose:(( await action.getElementCount(this.timerCountDownClose)) > 0) ? await action.getText(this.timerCountDownClose) : null,
timerCountDownPlay:(( await action.getElementCount(this.timerCountDownPlay)) > 0) ? await action.getText(this.timerCountDownPlay) : null,
timerBtnOne:(( await action.getElementCount(this.timerBtnOne)) > 0) ? await action.getText(this.timerBtnOne) : null,
timerBtnTwo:(( await action.getElementCount(this.timerBtnTwo)) > 0) ? await action.getText(this.timerBtnTwo) : null,
timerBtnthree:(( await action.getElementCount(this.timerBtnthree)) > 0) ? await action.getText(this.timerBtnthree) : null,
timerReset:(( await action.getElementCount(this.timerReset)) > 0) ? await action.getText(this.timerReset) : null,
timerCountDownUnmute:(( await action.getElementCount(this.timerCountDownUnmute)) > 0) ? await action.getText(this.timerCountDownUnmute) : null,
timerCountDownPause:(( await action.getElementCount(this.timerCountDownPause)) > 0) ? await action.getText(this.timerCountDownPause) : null,
}
 return obj; 
},

getData_timerCountUp: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
timerCountDown:(( await action.getElementCount(this.timerCountDown)) > 0) ? await action.getText(this.timerCountDown) : null,
timerCountUpClose:(( await action.getElementCount(this.timerCountUpClose)) > 0) ? await action.getText(this.timerCountUpClose) : null,
timerCountUpPause:(( await action.getElementCount(this.timerCountUpPause)) > 0) ? await action.getText(this.timerCountUpPause) : null,
timerCountUpPlay:(( await action.getElementCount(this.timerCountUpPlay)) > 0) ? await action.getText(this.timerCountUpPlay) : null,
}
 return obj; 
},


click_timerCountUp: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountUp);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountUp is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountUp is NOT clicked", 'error');
}
return res;
},

click_timerCountDownClear: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDownClear);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDownClear is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDownClear is NOT clicked", 'error');
}
return res;
},

click_timerCountDownMute: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDownMute);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDownMute is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDownMute is NOT clicked", 'error');
}
return res;
},

click_timerCountDownClose: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDownClose);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDownClose is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDownClose is NOT clicked", 'error');
}
return res;
},

click_timerCountDownPlay: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDownPlay);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDownPlay is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDownPlay is NOT clicked", 'error');
}
return res;
},

click_timerBtnOne: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerBtnOne);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerBtnOne is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerBtnOne is NOT clicked", 'error');
}
return res;
},

click_timerBtnTwo: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerBtnTwo);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerBtnTwo is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerBtnTwo is NOT clicked", 'error');
}
return res;
},

click_timerBtnthree: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerBtnthree);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerBtnthree is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerBtnthree is NOT clicked", 'error');
}
return res;
},

click_timerCountDown: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDown);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDown is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDown is NOT clicked", 'error');
}
return res;
},

click_timerCountUpClose: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountUpClose);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountUpClose is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountUpClose is NOT clicked", 'error');
}
return res;
},

click_timerCountUpPlay: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountUpPlay);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountUpPlay is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountUpPlay is NOT clicked", 'error');
}
return res;
},

click_timerReset: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerReset);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerReset is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerReset is NOT clicked", 'error');
}
return res;
},

click_timerCountDownUnmute: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDownUnmute);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDownUnmute is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDownUnmute is NOT clicked", 'error');
}
return res;
},

click_timerCountDownPause: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.timerCountDownPause);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " timerCountDownPause is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"timerCountDownPause is NOT clicked", 'error');
}
return res;
},

}

