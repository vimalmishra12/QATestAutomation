"use strict";
var notesVhlTest= require('../../pages/ExperienceApp/notesVhlTest.page.js');
var sts;

module.exports = {
TST_NOTE_TC_1 :   async function (testdata) { 
sts = await notesVhlTest.click_addNoteButton();
await assertion.assertEqual(sts, true,"addNoteButton are not Clicked");
},

TST_NOTE_TC_2 :   async function (testdata) { 
sts = await notesVhlTest.click_dockButton();
await assertion.assertEqual(sts, true,"dockButton are not Clicked");
},

TST_NOTE_TC_3 :   async function (testdata) { 
sts = await notesVhlTest.click_pageCoverTab();
await assertion.assertEqual(sts, true,"pageCoverTab are not Clicked");
},

TST_NOTE_TC_4 :   async function (testdata) { 
sts = await notesVhlTest.click_allPagesTab();
await assertion.assertEqual(sts, true,"allPagesTab are not Clicked");
},

TST_NOTE_TC_5 :   async function (testdata) { 
sts = await notesVhlTest.click_closeButton();
await assertion.assertEqual(sts, true,"closeButton are not Clicked");
},

TST_NOTE_TC_6 :   async function (testdata) { 
sts = await notesVhlTest.getData_vhlNotes(testdata);
// await assertion.assertEqual(sts.addNoteButton, testdata.addNoteButton,"addNoteButton Values is not as expected.");
await assertion.assertEqual(sts.dockButton, testdata.dockButton,"dockButton Values is not as expected.");
await assertion.assertEqual(sts.pageCoverTab, testdata.pageCoverTab,"pageCoverTab Values is not as expected.");
await assertion.assertEqual(sts.allPagesTab, testdata.allPagesTab,"allPagesTab Values is not as expected.");
await assertion.assertEqual(sts.closeButton, testdata.closeButton,"closeButton Values is not as expected.");
},

}