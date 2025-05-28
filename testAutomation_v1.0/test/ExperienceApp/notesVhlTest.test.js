"use strict";
var vhlNotes= require('../../pages/ExperienceApp/notesVhlTest.page.js');
var sts;

module.exports = {
TST_VHLN_TC_1 :   async function (testdata) { 
sts = await vhlNotes.click_notesButton();
await assertion.assertEqual(sts, true,"notesButton are not Clicked");
},

TST_VHLN_TC_2 :   async function (testdata) { 
sts = await vhlNotes.click_dockButton();
await assertion.assertEqual(sts, true,"dockButton are not Clicked");
},

TST_VHLN_TC_3 :   async function (testdata) { 
sts = await vhlNotes.click_allPagesTab();
await assertion.assertEqual(sts, true,"allPagesTab are not Clicked");
},

TST_VHLN_TC_4 :   async function (testdata) { 
sts = await vhlNotes.click_pageCoverTab();
await assertion.assertEqual(sts, true,"pageCoverTab are not Clicked");
},

TST_VHLN_TC_5 :   async function (testdata) { 
sts = await vhlNotes.click_addNoteBtn();
await assertion.assertEqual(sts, true,"addNoteBtn are not Clicked");
},

TST_VHLN_TC_6 :   async function (testdata) { 
sts = await vhlNotes.set_addNotesTextarea(testdata.text);
await assertion.assertEqual(sts, true ,"addNotesTextarea values are not set");

},

TST_VHLN_TC_7 :   async function (testdata) { 
sts = await vhlNotes.click_saveNoteBtn();
await assertion.assertEqual(sts, true,"saveNoteBtn are not Clicked");
},

TST_VHLN_TC_8 :   async function (testdata) { 
sts = await vhlNotes.click_notePreviewText();
await assertion.assertEqual(sts, true,"notePreviewText are not Clicked");
},

TST_VHLN_TC_9 :   async function (testdata) { 
sts = await vhlNotes.click_deleteNoteSvg();
await assertion.assertEqual(sts, true,"deleteNoteSvg are not Clicked");
},

TST_VHLN_TC_10 :   async function (testdata) { 
sts = await vhlNotes.click_deleteNoteBtn();
await assertion.assertEqual(sts, true,"deleteNoteBtn are not Clicked");
},

TST_VHLN_TC_11 :   async function (testdata) { 
sts = await vhlNotes.click_closeButton();
await assertion.assertEqual(sts, true,"closeButton are not Clicked");
},

// TST_VHLN_TC_12 :   async function (testdata) { 
// sts = await vhlNotes.getData_vhlNotes(testdata);
// await assertion.assertEqual(sts.notesButton, testdata.notesButton,"notesButton Values is not as expected.");
// await assertion.assertEqual(sts.dockButton, testdata.dockButton,"dockButton Values is not as expected.");
// await assertion.assertEqual(sts.allPagesTab, testdata.allPagesTab,"allPagesTab Values is not as expected.");
// await assertion.assertEqual(sts.pageCoverTab, testdata.pageCoverTab,"pageCoverTab Values is not as expected.");
// await assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn,"addNoteBtn Values is not as expected.");
// await assertion.assertEqual(sts.addNotesTextarea, testdata.addNotesTextarea,"addNotesTextarea Values is not as expected.");
// await assertion.assertEqual(sts.saveNoteBtn, testdata.saveNoteBtn,"saveNoteBtn Values is not as expected.");
// await assertion.assertEqual(sts.notePreviewText, testdata.notePreviewText,"notePreviewText Values is not as expected.");
// await assertion.assertEqual(sts.deleteNoteSvg, testdata.deleteNoteSvg,"deleteNoteSvg Values is not as expected.");
// await assertion.assertEqual(sts.deleteNoteBtn, testdata.deleteNoteBtn,"deleteNoteBtn Values is not as expected.");
// await assertion.assertEqual(sts.closeButton, testdata.closeButton,"closeButton Values is not as expected.");
// },

}

    //   {
    //     "id": "TST_NOTE_TC_6",
    //     "description": "Verify Notes Data",
    //     "testFile": "./test/ExperienceApp/notesVhlTest.test.js",
    //     "testData": [
    //       {
    //         "dataFile": "./testResources/testcaseData/ExperienceApp/production/appLangEN.json",
    //         "jsonPath": "VHL.notesVhlTest"
    //       }
    //     ]
    //   }
    // Sample VHL Automation Note#1


    //       {
    //     "id": "TST_VHLN_TC_8",
    //     "description": "Check Notes text",
    //     "testFile": "./test/ExperienceApp/notesVhlTest.test.js",
    //     "testData": []
    //   },