'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');

module.exports = {
  help_btn: selectorFile.css.ComproC1.dashboard.help_btn,
  progress_btn: selectorFile.css.ComproC1.dashboard.progress_btn,
  progress_btn_Nemo: selectorFile.css.ComproC1.dashboard.progress_btn_Nemo,
  praticeExtra_btn: selectorFile.css.ComproC1.dashboard.praticeExtra_btn,
  praticeExtra_btn_Nemo:
    selectorFile.css.ComproC1.dashboard.praticeExtra_btn_Nemo,
  ebook_btn: selectorFile.css.ComproC1.dashboard.ebook_btn,
  ebook_btn_Nemo: selectorFile.css.ComproC1.dashboard.ebook_btn_Nemo,
  homework_btn: selectorFile.css.ComproC1.dashboard.homework_btn,
  assignment_btn_Nemo: selectorFile.css.ComproC1.dashboard.assignment_btn_Nemo,
  myProgress_btn: selectorFile.css.ComproC1.dashboard.myProgress_btn,
  myProgress_btn_Nemo: selectorFile.css.ComproC1.dashboard.myProgress_btn_Nemo,
  createNewClass: selectorFile.css.ComproC1.dashboard.createNewClass,
  activeClassCard: selectorFile.css.ComproC1.dashboard.activeClassCard,
  dismiss_btn: selectorFile.css.ComproC1.dashboard.dismiss_btn,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.help_btn),
    };
    return res;
  },

  getData_dashboard: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      help_btn:
        (await action.getElementCount(this.help_btn)) > 0
          ? await action.getText(this.help_btn)
          : null,
    };
    console.log(obj);
    return obj;
  },

  getData_activeClasses: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      progress_btn_Nemo:
        (await action.getElementCount(this.progress_btn_Nemo)) > 0
          ? await action.getText(this.progress_btn_Nemo)
          : null,
      praticeExtra_btn_Nemo:
        (await action.getElementCount(this.praticeExtra_btn_Nemo)) > 0
          ? await action.getText(this.praticeExtra_btn_Nemo)
          : null,
      ebook_btn_Nemo:
        (await action.getElementCount(this.ebook_btn_Nemo)) > 0
          ? await action.getText(this.ebook_btn_Nemo)
          : null,
      // homework_btn:
      //   (await action.getElementCount(this.homework_btn)) > 0
      //     ? await action.getText(this.homework_btn)
      //     : null,
      assignment_btn_Nemo:
        (await action.getElementCount(this.assignment_btn_Nemo)) > 0
          ? await action.getText(this.assignment_btn_Nemo)
          : null,
      myProgress_btn_Nemo:
        (await action.getElementCount(this.myProgress_btn_Nemo)) > 0
          ? await action.getText(this.myProgress_btn_Nemo)
          : null,
    };
    console.log(obj);
    return obj;
  },

  click_help_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.help_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' help_btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'help_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_progress_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.progress_btn_Nemo);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' progress_btn is clicked');
      res = await require('./progress.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'progress_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_praticeExtra_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    var res2 = {
      pageStatus: await action.waitForDisplayed(this.praticeExtra_btn_Nemo),
    };
    res = await action.click(this.praticeExtra_btn_Nemo);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' praticeExtra_btn is clicked'
      );
      res = await require('./practiceExtra.page.js').isInitialized();
      console.log('haha', res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'praticeExtra_btn is NOT clicked',
        'error'
      );
    }
    console.log('Button', res);
    return res;
  },

  click_ebook_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    browser.pause(10000);
    res = await action.click(this.ebook_btn_Nemo);
    await browser.pause(10000);
    console.log('Button', res);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' ebook_btn is clicked');
      res = await require('./eBook.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'ebook_btn is NOT clicked',
        'error'
      );
    }
    console.log('Before Return', res);
    return res;
  },

  // This HW button function need to be removed once assigment_btn_Nemo is moved to prod.
  click_homework_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.assignment_btn_Nemo);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' homework_btn is clicked');
      res = await require('./myHomework.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'homework_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_assignment_btn_Nemo: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    browser.pause(10000);
    const assignment_button = await action.findElements(
      this.assignment_btn_Nemo
    );
    const first_btn = assignment_button[0];
    console.log('X', assignment_button);
    res = await action.click(first_btn);
    console.log('Button', res);
    console.log('Assignment value', this.assignment_btn_Nemo);
    await browser.pause(10000);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' homework_btn is clicked');
      res = await require('./myHomework.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'homework_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_myProgress_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.myProgress_btn_Nemo);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' myProgress_btn is clicked'
      );
      res = await require('./myProgress.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'myProgress_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_createNewClass: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.createNewClass);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' createNewClass is clicked'
      );
      browser.pause(10000);
      res = await require('./createNewClass.page').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'createNewClass is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_activeClassCard: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.activeClassCard);
    console.log('RES VAL', res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' activeClassCard is clicked'
      );
      res = await require('./activeClass.page').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'activeClassCard is NOT clicked',
        'error'
      );
    }
    console.log('RES VAL BEFORE RETURN', res);
    return res;
  },

  click_dismiss_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.dismiss_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' dismiss_btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'dismiss_btn is NOT clicked',
        'error'
      );
    }
    console.log('RES VAL BEFORE RETURN', res);
    return res;
  },
};
