"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
  welcome: selectorFile.vhlLoginTest.welcome,
  userName: selectorFile.vhlLoginTest.userName,
  password: selectorFile.vhlLoginTest.password,
  commit: selectorFile.vhlLoginTest.commit,


  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.welcome),
    };
    return res;
  },

  getData_LoginPage: async function () {
    await logger.logInto(await stackTrace.get());

    let obj = {
      welcome: ((await action.getElementCount(this.welcome)) > 0)
        ? await action.getText(this.welcome)
        : null,

      userName: ((await action.getElementCount(this.userName)) > 0)
        ? await action.getAttribute(this.userName, 'value')  // ✅ Changed from getText to getAttribute
        : null,

      password: ((await action.getElementCount(this.password)) > 0)
        ? await action.getAttribute(this.password, 'value')  // ✅ Changed from getText to getAttribute
        : null,

      commit: ((await action.getElementCount(this.commit)) > 0)
        ? await action.getText(this.commit)
        : null,
    };
    return obj;
  },


click_commit: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.commit);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " commit is clicked");
      res = await require('./vhl_landingtest.page.js').isInitialized();
      // res = await require('./vhlReader.page').isInitialized() &&   (await browser.getUrl()).startsWith('https://reader3-qa.vhlcentral.com');
      // }
      // res = (await browser.getUrl()).startsWith('https://reader3-qa.vhlcentral.com');
      console.log("this is ", res);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "commit is NOT clicked", 'error');
    }
    return res;
  },

  set_userName: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.userName, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in userName");
    } else {
      await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in userName", 'error');
    }
    return res;
  },

  set_password: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.password, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in password");
    } else {
      await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in password", 'error');
    }
    return res;
  },

}

