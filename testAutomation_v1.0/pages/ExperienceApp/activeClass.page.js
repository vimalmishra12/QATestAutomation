'use strict';
const { log } = require('winston');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');

module.exports = {
  actionButton: selectorFile.css.ComproC1.activeClass.actionButton,
  deleteClass: selectorFile.css.ComproC1.activeClass.deleteClass,
  yesDelete_Btn: selectorFile.css.ComproC1.activeClass.yesDelete_Btn,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.actionButton),
    };
    return res;
  },

  getData_dropdown: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      actionButton:
        (await action.getElementCount(this.actionButton)) > 0
          ? await action.getText(this.actionButton)
          : null,
      deleteClass:
        (await action.getElementCount(this.deleteClass)) > 0
          ? await action.getText(this.deleteClass)
          : null,
    };
    console.log(obj);
    return obj;
  },

  getData_deleteModal: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      yesDelete_Btn:
        (await action.getElementCount(this.yesDelete_Btn)) > 0
          ? await action.getText(this.yesDelete_Btn)
          : null,
    };
    return obj;
  },

  click_actionButton: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.actionButton);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' actionButton is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'actionButton is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_deleteClass: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deleteClass);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' deleteClass is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'deleteClass is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_yesDelete_Btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    
    res = await action.click(this.yesDelete_Btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' yesDelete_Btn is clicked');
      res = await require('./dashboard.page').isInitialized(); 
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'yesDelete_Btn is NOT clicked',
        'error'
      );
    }
    return res;
  },
};