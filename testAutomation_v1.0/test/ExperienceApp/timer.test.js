"use strict";
var timer= require('../../pages/ExperienceApp/timer.page.js');
var sts;

module.exports = {
// TST_TIME_TC_1: Click the timer count up button
TST_TIME_TC_1: async function (testdata) { 
    sts = await timer.click_timerCountUp();
    await assertion.assertEqual(sts, true, "timerCountUp was not clicked.");
},

// TST_TIME_TC_2: Click the timer count down clear button
TST_TIME_TC_2: async function (testdata) { 
    sts = await timer.click_timerCountDownClear();
    await assertion.assertEqual(sts, true, "timerCountDownClear was not clicked.");
},

// TST_TIME_TC_3: Click the timer count down mute button
TST_TIME_TC_3: async function (testdata) { 
    sts = await timer.click_timerCountDownMute();
    await assertion.assertEqual(sts, true, "timerCountDownMute was not clicked.");
},

// TST_TIME_TC_4: Click the timer count down close button
TST_TIME_TC_4: async function (testdata) { 
    sts = await timer.click_timerCountDownClose();
    await assertion.assertEqual(sts, true, "timerCountDownClose was not clicked.");
},

// TST_TIME_TC_5: Click the timer count down play button
TST_TIME_TC_5: async function (testdata) { 
    sts = await timer.click_timerCountDownPlay();
    await assertion.assertEqual(sts, true, "timerCountDownPlay was not clicked.");
},

// TST_TIME_TC_6: Click the timer button one
TST_TIME_TC_6: async function (testdata) { 
    sts = await timer.click_timerBtnOne();
    await assertion.assertEqual(sts, true, "timerBtnOne was not clicked.");
},

// TST_TIME_TC_7: Click the timer button two
TST_TIME_TC_7: async function (testdata) { 
    sts = await timer.click_timerBtnTwo();
    await assertion.assertEqual(sts, true, "timerBtnTwo was not clicked.");
},

// TST_TIME_TC_8: Click the timer button three
TST_TIME_TC_8: async function (testdata) { 
    sts = await timer.click_timerBtnthree();
    await assertion.assertEqual(sts, true, "timerBtnthree was not clicked.");
},

// TST_TIME_TC_9: Click the timer count down button
TST_TIME_TC_9: async function (testdata) { 
    sts = await timer.click_timerCountDown();
    await assertion.assertEqual(sts, true, "timerCountDown was not clicked.");
},

// TST_TIME_TC_10: Click the timer count up close button
TST_TIME_TC_10: async function (testdata) { 
    sts = await timer.click_timerCountUpClose();
    await assertion.assertEqual(sts, true, "timerCountUpClose was not clicked.");
},

// TST_TIME_TC_11: Click the timer count up play button
TST_TIME_TC_11: async function (testdata) { 
    sts = await timer.click_timerCountUpPlay();
    await assertion.assertEqual(sts, true, "timerCountUpPlay was not clicked.");
},

// TST_TIME_TC_12: Click the timer reset button
TST_TIME_TC_12: async function (testdata) { 
    sts = await timer.click_timerReset();
    await assertion.assertEqual(sts, true, "timerReset was not clicked.");
},

// TST_TIME_TC_13: Click timer count down unmute button
TST_TIME_TC_13: async function (testdata) { 
    sts = await timer.click_timerCountDownUnmute();
    await assertion.assertEqual(sts, true, "timerCountDownUnmute was not clicked.");
},

// TST_TIME_TC_14: Click the timer count down pause button
TST_TIME_TC_14: async function (testdata) { 
    sts = await timer.click_timerCountDownPause();
    await assertion.assertEqual(sts, true, "timerCountDownPause was not clicked.");
},

// TST_TIME_TC_15: Get and validate timer count down data
TST_TIME_TC_15: async function (testdata) { 
    sts = await timer.getData_timerCountDown(testdata);
    await assertion.assertEqual(sts.timerCountUp, testdata.timerCountUp, "timerCountUp value is not as expected.");
    await assertion.assertEqual(sts.timerCountDownClear, testdata.timerCountDownClear, "timerCountDownClear value is not as expected.");
    await assertion.assertEqual(sts.timerCountDownMute, testdata.timerCountDownMute, "timerCountDownMute value is not as expected.");
    await assertion.assertEqual(sts.timerCountDownClose, testdata.timerCountDownClose, "timerCountDownClose value is not as expected.");
    await assertion.assertEqual(sts.timerCountDownPlay, testdata.timerCountDownPlay, "timerCountDownPlay value is not as expected.");
    await assertion.assertEqual(sts.timerBtnOne, testdata.timerBtnOne, "timerBtnOne value is not as expected.");
    await assertion.assertEqual(sts.timerBtnTwo, testdata.timerBtnTwo, "timerBtnTwo value is not as expected.");
    await assertion.assertEqual(sts.timerBtnthree, testdata.timerBtnthree, "timerBtnthree value is not as expected.");
    await assertion.assertEqual(sts.timerReset, testdata.timerReset, "timerReset value is not as expected.");
    await assertion.assertEqual(sts.timerCountDownUnmute, testdata.timerCountDownUnmute, "timerCountDownUnmute value is not as expected.");
    await assertion.assertEqual(sts.timerCountDownPause, testdata.timerCountDownPause, "timerCountDownPause value is not as expected.");
},

// TST_TIME_TC_16: Get and validate timer count up data
TST_TIME_TC_16: async function (testdata) { 
    sts = await timer.getData_timerCountUp(testdata);
    await assertion.assertEqual(sts.timerCountDown, testdata.timerCountDown, "timerCountDown value is not as expected.");
    await assertion.assertEqual(sts.timerCountUpClose, testdata.timerCountUpClose, "timerCountUpClose value is not as expected.");
    await assertion.assertEqual(sts.timerCountUpPause, testdata.timerCountUpPause, "timerCountUpPause value is not as expected.");
    await assertion.assertEqual(sts.timerCountUpPlay, testdata.timerCountUpPlay, "timerCountUpPlay value is not as expected.");
}


}