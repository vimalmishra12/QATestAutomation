"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  eBookNotesHeadingTxt: selectorFile.css.ComproC1.notes.eBookNotesHeadingTxt,
  eBookAddNotesBtn: selectorFile.css.ComproC1.notes.eBookAddNotesBtn,
  eBookAddNotesTextarea: selectorFile.css.ComproC1.notes.eBookAddNotesTextarea,
  eBookSaveNotesBtn: selectorFile.css.ComproC1.notes.eBookSaveNotesBtn,
  eBookDeleteNotesBtn: selectorFile.css.ComproC1.notes.eBookDeleteNotesBtn,
  eBookNotesViewMoreBtn: selectorFile.css.ComproC1.notes.eBookNotesViewMoreBtn,
  eBookViewMoreDeleteNotestBtn:
    selectorFile.css.ComproC1.notes.eBookViewMoreDeleteNotestBtn,
  eBookNoteModalDeleteButton:
    selectorFile.css.ComproC1.notes.eBookNoteModalDeleteButton,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.eBookNotesHeadingTxt),
    };
    return res;
  },

  getData_notesContent: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      eBookNotesHeadingTxt:
        (await action.getElementCount(this.eBookNotesHeadingTxt)) > 0
          ? await action.getText(this.eBookNotesHeadingTxt)
          : null,
      eBookAddNotesBtn:
        (await action.getElementCount(this.eBookAddNotesBtn)) > 0
          ? await action.getText(this.eBookAddNotesBtn)
          : null,
      eBookAddNotesTextarea:
        (await action.getElementCount(this.eBookAddNotesTextarea)) > 0
          ? await action.getValue(this.eBookAddNotesTextarea)
          : null,
      eBookSaveNotesBtn:
        (await action.getElementCount(this.eBookSaveNotesBtn)) > 0
          ? await action.getText(this.eBookSaveNotesBtn)
          : null,
      eBookDeleteNotesBtn:
        (await action.getElementCount(this.eBookDeleteNotesBtn)) > 0
          ? await action.getText(this.eBookDeleteNotesBtn)
          : null,
      eBookNotesViewMoreBtn:
        (await action.getElementCount(this.eBookNotesViewMoreBtn)) > 0
          ? await action.getText(this.eBookNotesViewMoreBtn)
          : null,
      eBookViewMoreDeleteNotestBtn:
        (await action.getElementCount(this.eBookViewMoreDeleteNotestBtn)) > 0
          ? await action.getText(this.eBookViewMoreDeleteNotestBtn)
          : null,
      eBookNoteModalDeleteButton:
        (await action.getElementCount(this.eBookNoteModalDeleteButton)) > 0
          ? await action.getText(this.eBookNoteModalDeleteButton)
          : null,
    };
    return obj;
  },

  click_eBookAddNotesBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookAddNotesBtn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookAddNotesBtn is clicked"
      );
      res = await action.waitForDisplayed(this.eBookNotesViewMoreBtn);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookAddNotesBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_eBookAddNotesTextarea: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookAddNotesTextarea);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookAddNotesTextarea is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookAddNotesTextarea is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_eBookSaveNotesBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookSaveNotesBtn);
    console.log("this is 111 res", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookSaveNotesBtn is clicked"
      );
      res = await action.getValue(this.eBookAddNotesTextarea);
      console.log("this is 118 res", res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookSaveNotesBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_eBookDeleteNotesBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookDeleteNotesBtn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookDeleteNotesBtn is clicked"
      );
      res = await action.getValue(this.eBookAddNotesTextarea);
      console.log("this is 139 res", res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookDeleteNotesBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_eBookNotesViewMoreBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookNotesViewMoreBtn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookNotesViewMoreBtn is clicked"
      );
      // res = await this.getData_eBookViewMoreDeleteNotestBtn();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookNotesViewMoreBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_eBookViewMoreDeleteNotestBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookViewMoreDeleteNotestBtn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookViewMoreDeleteNotestBtn is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookViewMoreDeleteNotestBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_eBookNoteModalDeleteButton: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.eBookNoteModalDeleteButton);
    console.log("193", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " eBookNoteModalDeleteButton is clicked"
      );
      res = await this.getData_notesContent().eBookAddNotesTextarea;
      console.log("200", res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "eBookNoteModalDeleteButton is NOT clicked",
        "error"
      );
    }
    return res;
  },

  set_eBookAddNotesTextarea: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    console.log("hjk", this.eBookAddNotesTextarea);
    res = await action.setValue(this.eBookAddNotesTextarea, value);

    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        "Value is entered in eBookAddNotesTextarea"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "Value is NOT entered in eBookAddNotesTextarea",
        "error"
      );
    }
    return res;
  },
};
