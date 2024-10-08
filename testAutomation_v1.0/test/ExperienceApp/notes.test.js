"use strict";
var notes= require('../../pages/ExperienceApp/notes.page.js');
var sts;

module.exports = {
TST_NOTE_TC_1 :   async function (testdata) { 
sts = await notes.click_eBookAddNotesBtn();
},

TST_NOTE_TC_2 :   async function (testdata) { 
sts = await notes.click_eBookAddNotesTextarea();
await assertion.assertEqual(sts, true,"eBookAddNotesTextarea are not Clicked");
},

TST_NOTE_TC_3 :   async function (testdata) { 
sts = await notes.set_eBookAddNotesTextarea();
await assertion.assertEqual(sts, true ,"eBookAddNotesTextarea values are not set");

},

TST_NOTE_TC_4 :   async function (testdata) { 
sts = await notes.click_eBookSaveNotesBtn();
},

TST_NOTE_TC_5 :   async function (testdata) { 
sts = await notes.click_eBookDeleteNotesBtn();
await assertion.assertEqual(sts, true,"eBookDeleteNotesBtn are not Clicked");
},

TST_NOTE_TC_6 :   async function (testdata) { 
sts = await notes.click_eBookNotesViewMoreBtn();
},

TST_NOTE_TC_7 :   async function (testdata) { 
sts = await notes.click_eBookViewMoreDeleteNotestBtn();
await assertion.assertEqual(sts, true,"eBookViewMoreDeleteNotestBtn are not Clicked");
},

TST_NOTE_TC_8 :   async function (testdata) { 
sts = await notes.click_eBookNoteModalDeleteButton();
},

TST_NOTE_TC_9 :   async function (testdata) { 
sts = await notes.getData_notesContent(testdata);
await assertion.assertEqual(sts.eBookNotesHeadingTxt, testdata.eBookNotesHeadingTxt,"eBookNotesHeadingTxt Values is not as expected.");
await assertion.assertEqual(sts.eBookAddNotesBtn, testdata.eBookAddNotesBtn,"eBookAddNotesBtn Values is not as expected.");
await assertion.assertEqual(sts.eBookAddNotesTextarea, testdata.eBookAddNotesTextarea,"eBookAddNotesTextarea Values is not as expected.");
await assertion.assertEqual(sts.eBookSaveNotesBtn, testdata.eBookSaveNotesBtn,"eBookSaveNotesBtn Values is not as expected.");
await assertion.assertEqual(sts.eBookDeleteNotesBtn, testdata.eBookDeleteNotesBtn,"eBookDeleteNotesBtn Values is not as expected.");
await assertion.assertEqual(sts.eBookNotesViewMoreBtn, testdata.eBookNotesViewMoreBtn,"eBookNotesViewMoreBtn Values is not as expected.");
await assertion.assertEqual(sts.eBookViewMoreDeleteNotestBtn, testdata.eBookViewMoreDeleteNotestBtn,"eBookViewMoreDeleteNotestBtn Values is not as expected.");
await assertion.assertEqual(sts.eBookNoteModalDeleteButton, testdata.eBookNoteModalDeleteButton,"eBookNoteModalDeleteButton Values is not as expected.");
},

}