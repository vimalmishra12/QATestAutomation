"use strict";
var notes = require("../../pages/ExperienceApp/notes.page.js");
var sts;

module.exports = {
  // Click on the Add Note Button
  TST_NOTE_TC_1: async function (testdata) {
    sts = await notes.click_eBookAddNotesBtn();
    await assertion.assertEqual(sts, true, "Notes Pane not open");
  },

  // Click on the Add Notes Text Area
  TST_NOTE_TC_2: async function (testdata) {
    sts = await notes.click_eBookAddNotesTextarea();
    await assertion.assertEqual(
      sts,
      true,
      "eBookAddNotesTextarea is not clicked"
    );
  },

  // Set the value in the Add Notes Text Area and verify it
  TST_NOTE_TC_3: async function (testdata) {

    await browser.pause(2000); // pause added to avoid element not interactable issue, we will see it later

    sts = await notes.set_eBookAddNotesTextarea(testdata.eBookSaveNotesBtn);

    await assertion.assertEqual(
      sts,
      true,
      "eBookAddNotesTextarea values are not set"
    );
  },

  // Click on the Save Notes Button and verify the saved notes
  TST_NOTE_TC_4: async function (testdata) {
    sts = await notes.click_eBookSaveNotesBtn();
    await assertion.assertEqual(sts, testdata.notes, "status mismatch");
  },

  // Click on the Delete Notes Button
  TST_NOTE_TC_5: async function (testdata) {
    sts = await notes.click_eBookDeleteNotesBtn();
    await assertion.assertEqual(
      sts,
      null,
      "eBookDeleteNotesBtn is not clicked"
    );
  },

  // Click on the 'View More' Button in Notes
  TST_NOTE_TC_6: async function (testdata) {
    sts = await notes.click_eBookNotesViewMoreBtn();
    await assertion.assertEqual(
      sts,
      true,
      "eBookNotesViewMoreBtn is not clicked"
    );
  },

  // Click on the 'View More' Delete Notes Button
  TST_NOTE_TC_7: async function (testdata) {
    sts = await notes.click_eBookViewMoreDeleteNotestBtn();
    await assertion.assertEqual(
      sts,
      true,
      "eBookViewMoreDeleteNotestBtn is not clicked"
    );
  },

  // Click on the Delete Button inside the Notes Modal
  TST_NOTE_TC_8: async function (testdata) {
    sts = await notes.click_eBookNoteModalDeleteButton();
    await assertion.assertEqual(
      sts,
      null,
      "eBookNoteModalDeleteButton is not clicked"
    );
  },

  // Get the Notes Content and verify its values
  TST_NOTE_TC_9: async function (testdata) {
    sts = await notes.getData_notesContent(testdata);
    await assertion.assertEqual(
      sts.eBookNotesHeadingTxt,
      testdata.eBookNotesHeadingTxt,
      "eBookNotesHeadingTxt values are not as expected."
    );
    await assertion.assertEqual(
      sts.eBookAddNotesTextarea,
      testdata.eBookSaveNotesBtn,
      "eBookAddNotesTextarea values are not as expected."
    );
  },
};
