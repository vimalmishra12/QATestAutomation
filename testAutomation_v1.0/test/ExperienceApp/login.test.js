"use strict";
var login= require('../../pages/ExperienceApp/login.page.js');
var sts;

module.exports = {
ENG_LOGI_TC_1 :   async function (testdata) { 
sts = await login.set_userName_tbox(testdata.email);
await assertion.assertEqual(sts, true ,"userName_tbox values are not set");

},

ENG_LOGI_TC_2 :   async function (testdata) { 
sts = await login.set_password_tbox(testdata.password);
await assertion.assertEqual(sts, true ,"password_tbox values are not set");

},

ENG_IDEN_TC_2: async function (testdata) {
    sts = await login.isInitialized()
    await assertion.assertEqual(sts.loginPage_title, testdata[0].loginPage_title, "Login Page Title Mismatch");
   
},

ENG_LOGI_TC_3 :   async function (testdata) { 
sts = await login.click_loginPassword_eye();
await assertion.assertEqual(sts, true,"loginPassword_eye are not Clicked");
},

ENG_LOGI_TC_4 :   async function (testdata) { 
sts = await login.click_forgotPassword();
await assertion.assertEqual(sts, true,"forgotPassword are not Clicked");
},

ENG_LOGI_TC_5 :   async function (testdata) { 
sts = await login.click_login_btn();
await assertion.assertEqual(sts, true,"login_btn are not Clicked");
},

ENG_LOGI_TC_6 :   async function (testdata) { 
sts = await login.click_signup_btn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");

},

}