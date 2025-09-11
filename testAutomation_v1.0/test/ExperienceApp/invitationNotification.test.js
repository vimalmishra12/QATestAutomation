"use strict";

var invitationNotification= require('../../pages/ExperienceApp/invitationNotification.page.js');
var sts;

module.exports = {
TST_INVI_TC_1 :   async function (testdata) { 
sts = await invitationNotification.click_notificationBtn();
await assertion.assertEqual(sts, true,"notificationBtn are not Clicked");
},

TST_INVI_TC_2 :   async function (testdata) { 
sts = await invitationNotification.click_invitationNotify();
await assertion.assertEqual(sts, true,"invitationNotify are not Clicked");
},

TST_INVI_TC_3 :   async function (testdata) { 
//For now, We are clicking on selectAll checkbox, In future if we have to select specific checkbox then we have to modify the function(in page file) accordingly.   
sts = await invitationNotification.click_selectCheckbox(testdata);
await assertion.assertEqual(sts, true,"selectCheckbox are not Clicked");
},

TST_INVI_TC_4 :   async function (testdata) { 
sts = await invitationNotification.click_acceptBtn();
await assertion.assertEqual(sts, true,"acceptBtn are not Clicked");
},

TST_INVI_TC_5 :   async function (testdata) { 
sts = await invitationNotification.click_goToDashboard();
await assertion.assertEqual(sts, true,"goToDashboard are not Clicked");
},

TST_INVI_TC_6 :   async function (testdata) { 
sts = await invitationNotification.getData_invitationAccept(testdata);
await assertion.assertEqual(sts.notificationBtn, testdata.notificationBtn,"notificationBtn Values is not as expected.");
await assertion.assertEqual(sts.invitationNotify, testdata.invitationNotify,"invitationNotify Values is not as expected.");
await assertion.assertEqual(sts.selectCheckbox, testdata.selectCheckbox,"selectCheckbox Values is not as expected.");
await assertion.assertEqual(sts.acceptBtn, testdata.acceptBtn,"acceptBtn Values is not as expected.");
await assertion.assertEqual(sts.goToDashboard, testdata.goToDashboard,"goToDashboard Values is not as expected.");
},

}