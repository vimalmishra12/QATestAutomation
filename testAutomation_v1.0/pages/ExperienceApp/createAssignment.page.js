"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  automationClass: selectorFile.css.ComproC1.createAssignment.automationClass,
  materials: selectorFile.css.ComproC1.createAssignment.materials,
  cqaEbook: selectorFile.css.ComproC1.createAssignment.cqaEbook,
  createAssignment: selectorFile.css.ComproC1.createAssignment.createAssignment,
  takeMeToAssignment:
    selectorFile.css.ComproC1.createAssignment.takeMeToAssignment,
  comprotestPE: selectorFile.css.ComproC1.createAssignment.comprotestPE,
  unit1: selectorFile.css.ComproC1.createAssignment.unit1,
  lesson1Checkbox: selectorFile.css.ComproC1.createAssignment.lesson1Checkbox,
  nextBtn: selectorFile.css.ComproC1.createAssignment.nextBtn,
  dueDateInput: selectorFile.css.ComproC1.createAssignment.dueDateInput,
  setBtn: selectorFile.css.ComproC1.createAssignment.setBtn,
  assignBtn: selectorFile.css.ComproC1.createAssignment.assignBtn,
  returnToeBookBtn: selectorFile.css.ComproC1.createAssignment.returnToeBookBtn,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.automationClass),
    };
    return res;
  },

  createAssignment_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      automationClass:
        (await action.getElementCount(this.automationClass)) > 0
          ? await action.getText(this.automationClass)
          : null,
      materials:
        (await action.getElementCount(this.materials)) > 0
          ? await action.getText(this.materials)
          : null,
      cqaEbook:
        (await action.getElementCount(this.cqaEbook)) > 0
          ? await action.getText(this.cqaEbook)
          : null,
      createAssignment:
        (await action.getElementCount(this.createAssignment)) > 0
          ? await action.getText(this.createAssignment)
          : null,
      takeMeToAssignment:
        (await action.getElementCount(this.takeMeToAssignment)) > 0
          ? await action.getText(this.takeMeToAssignment)
          : null,
      comprotestPE:
        (await action.getElementCount(this.comprotestPE)) > 0
          ? await action.getText(this.comprotestPE)
          : null,
      unit1:
        (await action.getElementCount(this.unit1)) > 0
          ? await action.getText(this.unit1)
          : null,
      lesson1Checkbox:
        (await action.getElementCount(this.lesson1Checkbox)) > 0
          ? await action.getText(this.lesson1Checkbox)
          : null,
      nextBtn:
        (await action.getElementCount(this.nextBtn)) > 0
          ? await action.getText(this.nextBtn)
          : null,
      dueDateInput:
        (await action.getElementCount(this.dueDateInput)) > 0
          ? await action.getText(this.dueDateInput)
          : null,
      setBtn:
        (await action.getElementCount(this.setBtn)) > 0
          ? await action.getText(this.setBtn)
          : null,
      assignBtn:
        (await action.getElementCount(this.assignBtn)) > 0
          ? await action.getText(this.assignBtn)
          : null,
      returnToeBookBtn:
        (await action.getElementCount(this.returnToeBookBtn)) > 0
          ? await action.getText(this.returnToeBookBtn)
          : null,
    };
    return obj;
  },

  click_automationClass: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.automationClass);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " automationClass is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "automationClass is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_materials: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.materials);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " materials is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "materials is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_cqaEbook: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cqaEbook);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " cqaEbook is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "cqaEbook is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_createAssignment: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.createAssignment);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " createAssignment is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "createAssignment is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_takeMeToAssignment: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.takeMeToAssignment);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " takeMeToAssignment is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "takeMeToAssignment is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_comprotestPE: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.comprotestPE);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " comprotestPE is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "comprotestPE is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_unit1: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.unit1);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " unit1 is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "unit1 is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_lesson1Checkbox: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.lesson1Checkbox);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " lesson1Checkbox is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "lesson1Checkbox is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_nextBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.nextBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " nextBtn is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "nextBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_dueDateInput: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.dueDateInput);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " dueDateInput is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "dueDateInput is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_setBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.setBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " setBtn is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "setBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_assignBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.assignBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " assignBtn is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "assignBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_returnToeBookBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.returnToeBookBtn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " returnToeBookBtn is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "returnToeBookBtn is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
