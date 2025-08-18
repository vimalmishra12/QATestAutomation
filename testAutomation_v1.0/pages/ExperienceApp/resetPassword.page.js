'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');

module.exports = {
  resetPassword: selectorFile.css.ComproC1.resetPassword.resetPassword,
  resetPassword_Btn: selectorFile.css.ComproC1.resetPassword.resetPassword_Btn,
  enterEmailText: selectorFile.css.ComproC1.resetPassword.enterEmailText,
  backToLogin: selectorFile.css.ComproC1.resetPassword.backToLogin,
  emailWarningText: selectorFile.css.ComproC1.resetPassword.emailWarningText,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.resetPassword),
    };
    return res;
  },

  getData_resetPassword: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    browser.pause(5000);
    obj = {
      resetPassword:
        (await action.getElementCount(this.resetPassword)) > 0
          ? await action.getText(this.resetPassword)
          : null,
      resetPassword_Btn:
        (await action.getElementCount(this.resetPassword_Btn)) > 0
          ? await action.getValue(this.resetPassword_Btn)
          : null,
      enterEmailText:
        (await action.getElementCount(this.enterEmailText)) > 0
          ? await action.getAttribute(this.enterEmailText, "placeholder")
          : null,
      backToLogin:
        (await action.getElementCount(this.backToLogin)) > 0
          ? await action.getText(this.backToLogin)
          : null
      // emailWarningText:
      //   (await action.getElementCount(this.emailWarningText)) > 0 
      //   ? await action.getText(this.emailWarningText) 
      //   : null
    };
    console.log(obj);
    return obj;
  },

  click_resetPassword_Btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res = await action.click(this.resetPassword_Btn);
    browser.pause(30000);
    
    if (res === true) {
      await logger.logInto(await stackTrace.get(), ' resetPassword_Btn is clicked');
      const emailWarningText =
        (await action.getElementCount(this.emailWarningText)) > 0 
        ? await action.getText(this.emailWarningText) 
        : null;
      if (emailWarningText !== null) {
        await logger.logInto(await stackTrace.get(), ` emailWarningText is: "${emailWarningText}"`);
      } else {
        await logger.logInto(await stackTrace.get(), ' emailWarningText is NOT displayed', 'error');
      }
      console.log(emailWarningText);
      return {clickStatus: res, emailWarningText: emailWarningText};
    } else {
      await logger.logInto(await stackTrace.get(), res + ' resetPassword_Btn is NOT clicked', 'error');
      return { clickStatus: res, emailWarningText: null };
    }
  },
  
  

  set_enterEmailText: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.enterEmailText, value);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        'Value is entered in enterEmailText'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'Value is NOT entered in enterEmailText',
        'error'
      );
    }
    return res;
  },

  click_backToLogin: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.backToLogin);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' backToLogin is clicked');
      res = await require('./login.page').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'backToLogin is NOT clicked',
        'error'
      );
    }
    return res;
  }
};
