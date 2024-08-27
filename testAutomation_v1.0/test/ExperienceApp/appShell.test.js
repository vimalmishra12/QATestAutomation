"use strict";
var appShell= require('../../pages/ExperienceApp/appShell.page.js');
var sts;

module.exports = {
TST_APPS_TC_1 :   async function (testdata) { 
sts = await appShell.click_userDrop_down();
await assertion.assertEqual(sts, true,"userDrop_down are not Clicked");
},

TST_APPS_TC_2 :   async function (testdata) { 
sts = await appShell.click_logout_btn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

}