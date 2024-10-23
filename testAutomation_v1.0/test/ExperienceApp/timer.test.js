"use strict";
var timer= require('../../pages/ExperienceApp/timer.page.js');
var sts;

module.exports = {
TST_TIME_TC_1 :   async function (testdata) { 
sts = await timer.click_timerCountUp();
await assertion.assertEqual(sts, true,"timerCountUp are not Clicked");
},

TST_TIME_TC_2 :   async function (testdata) { 
sts = await timer.click_timerCountDownClear();
await assertion.assertEqual(sts, true,"timerCountDownClear are not Clicked");
},

TST_TIME_TC_3 :   async function (testdata) { 
sts = await timer.click_timerCountDownMute();
await assertion.assertEqual(sts, true,"timerCountDownMute are not Clicked");
},

TST_TIME_TC_4 :   async function (testdata) { 
sts = await timer.click_timerCountDownClose();
await assertion.assertEqual(sts, true,"timerCountDownClose are not Clicked");
},

TST_TIME_TC_5 :   async function (testdata) { 
sts = await timer.click_timerCountDownPlay();
await assertion.assertEqual(sts, true,"timerCountDownPlay are not Clicked");
},

TST_TIME_TC_6 :   async function (testdata) { 
sts = await timer.click_timerBtnOne();
await assertion.assertEqual(sts, true,"timerBtnOne are not Clicked");
},

TST_TIME_TC_7 :   async function (testdata) { 
sts = await timer.click_timerBtnTwo();
await assertion.assertEqual(sts, true,"timerBtnTwo are not Clicked");
},

TST_TIME_TC_8 :   async function (testdata) { 
sts = await timer.click_timerBtnthree();
await assertion.assertEqual(sts, true,"timerBtnthree are not Clicked");
},

TST_TIME_TC_9 :   async function (testdata) { 
sts = await timer.click_timerCountDown();
await assertion.assertEqual(sts, true,"timerCountDown are not Clicked");
},

TST_TIME_TC_10 :   async function (testdata) { 
sts = await timer.click_timerCountUpClose();
await assertion.assertEqual(sts, true,"timerCountUpClose are not Clicked");
},

TST_TIME_TC_11 :   async function (testdata) { 
sts = await timer.click_timerCountUpPlay();
await assertion.assertEqual(sts, true,"timerCountUpPlay are not Clicked");
},

TST_TIME_TC_12 :   async function (testdata) { 
sts = await timer.click_timerReset();
await assertion.assertEqual(sts, true,"timerReset are not Clicked");
},

TST_TIME_TC_13 :   async function (testdata) { 
sts = await timer.click_timerCountDownUnmute();
await assertion.assertEqual(sts, true,"timerCountDownUnmute are not Clicked");
},

TST_TIME_TC_14 :   async function (testdata) { 
sts = await timer.click_timerCountDownPause();
await assertion.assertEqual(sts, true,"timerCountDownPause are not Clicked");
},

TST_TIME_TC_15 :   async function (testdata) { 
sts = await timer.getData_timerCountDown(testdata);
await assertion.assertEqual(sts.timerCountUp, testdata.timerCountUp,"timerCountUp Values is not as expected.");
await assertion.assertEqual(sts.timerCountDownClear, testdata.timerCountDownClear,"timerCountDownClear Values is not as expected.");
await assertion.assertEqual(sts.timerCountDownMute, testdata.timerCountDownMute,"timerCountDownMute Values is not as expected.");
await assertion.assertEqual(sts.timerCountDownClose, testdata.timerCountDownClose,"timerCountDownClose Values is not as expected.");
await assertion.assertEqual(sts.timerCountDownPlay, testdata.timerCountDownPlay,"timerCountDownPlay Values is not as expected.");
await assertion.assertEqual(sts.timerBtnOne, testdata.timerBtnOne,"timerBtnOne Values is not as expected.");
await assertion.assertEqual(sts.timerBtnTwo, testdata.timerBtnTwo,"timerBtnTwo Values is not as expected.");
await assertion.assertEqual(sts.timerBtnthree, testdata.timerBtnthree,"timerBtnthree Values is not as expected.");
await assertion.assertEqual(sts.timerReset, testdata.timerReset,"timerReset Values is not as expected.");
await assertion.assertEqual(sts.timerCountDownUnmute, testdata.timerCountDownUnmute,"timerCountDownUnmute Values is not as expected.");
await assertion.assertEqual(sts.timerCountDownPause, testdata.timerCountDownPause,"timerCountDownPause Values is not as expected.");
},

TST_TIME_TC_16 :   async function (testdata) { 
sts = await timer.getData_timerCountUp(testdata);
await assertion.assertEqual(sts.timerCountDown, testdata.timerCountDown,"timerCountDown Values is not as expected.");
await assertion.assertEqual(sts.timerCountUpClose, testdata.timerCountUpClose,"timerCountUpClose Values is not as expected.");
await assertion.assertEqual(sts.timerCountUpPause, testdata.timerCountUpPause,"timerCountUpPause Values is not as expected.");
await assertion.assertEqual(sts.timerCountUpPlay, testdata.timerCountUpPlay,"timerCountUpPlay Values is not as expected.");
},

}