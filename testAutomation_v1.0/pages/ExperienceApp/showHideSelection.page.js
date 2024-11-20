"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  hideSelection: selectorFile.css.ComproC1.showHideSelection.hideSelection,
  showSelection: selectorFile.css.ComproC1.showHideSelection.showSelection,
  closeSelection: selectorFile.css.ComproC1.showHideSelection.closeSelection,
  drawingToolPresentation:
    selectorFile.css.ComproC1.drawingTool.drawingToolPresentation,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.hideSelection),
    };
    return res;
  },

  getData_showAndHideSelection: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      hideSelection:
        (await action.getElementCount(this.hideSelection)) > 0
          ? await action.getText(this.hideSelection)
          : null,
      showSelection:
        (await action.getElementCount(this.showSelection)) > 0
          ? await action.getText(this.showSelection)
          : null,
      closeSelection:
        (await action.getElementCount(this.closeSelection)) > 0
          ? await action.getText(this.closeSelection)
          : null,
    };
    return obj;
  },

  click_hideSelection: async function () {
    await logger.logInto(await stackTrace.get());
    var res;

    //Ensure hideSelection element is clickable
    const hideSelectionElement = await $(this.hideSelection);
    await hideSelectionElement.waitForClickable({ timeout: 5000 });

    res = await action.click(this.hideSelection);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " hideSelection is clicked");

      // await action.dragAndDropWithPath(this.drawingToolPresentation,
      //   100,100,
      //   300,300 ,
      //   [
      //     { x: 100, y: 150 },
      //     { x: 300, y: 200 }
      //   ]
      //)
      await action.dragAndDropWithPath(
        this.drawingToolPresentation,
        100,
        100,
        300,
        300
      );
      await browser.pause(500);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hideSelection is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_showSelection: async function () {
    await logger.logInto(await stackTrace.get());
    var res = true;
    //res =await action.click(this.showSelection);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " showSelection is clicked");

      await action.dragAndDropWithPath(
        this.drawingToolPresentation,
        100,
        100,
        300,
        300
      );

      await browser.pause(5000);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "showSelection is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_closeSelection: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.closeSelection);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " closeSelection is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "closeSelection is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
