'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require('./appShell.page.js');

module.exports = {
  enterClassDetails:
    selectorFile.css.ComproC1.createNewClass.enterClassDetails,
  back_btn: selectorFile.css.ComproC1.createNewClass.back_btn,
  enterClassName: selectorFile.css.ComproC1.createNewClass.enterClassName,
  startDate: selectorFile.css.ComproC1.createNewClass.startDate,
  endDate: selectorFile.css.ComproC1.createNewClass.endDate,
  enterYourSchool: selectorFile.css.ComproC1.createNewClass.enterYourSchool,
  cancel_btn: selectorFile.css.ComproC1.createNewClass.cancel_btn,
  next_btn: selectorFile.css.ComproC1.createNewClass.next_btn,
  addClassMaterials:
    selectorFile.css.ComproC1.createNewClass.addClassMaterials,
  cancel_btn_classMaterial:
    selectorFile.css.ComproC1.createNewClass.cancel_btn_classMaterial,
  addLater_Btn: selectorFile.css.ComproC1.createNewClass.addLater_Btn,
  classSuccessfullyCreated:
    selectorFile.css.ComproC1.createNewClass.classSuccessfullyCreated,
  dashboard_btn: selectorFile.css.ComproC1.createNewClass.dashboard_btn,
  cancelThisClass: selectorFile.css.ComproC1.createNewClass.cancelThisClass,
  yesCancel_btn: selectorFile.css.ComproC1.createNewClass.yesCancel_btn,
  noKeep_btn: selectorFile.css.ComproC1.createNewClass.noKeep_btn,
  addMaterial_btn: selectorFile.css.ComproC1.createNewClass.addMaterial_btn,
  addMaterial_input:
    selectorFile.css.ComproC1.createNewClass.addMaterial_input,
  dev_test_ebook_bundle_104_bundle:
    selectorFile.css.ComproC1.createNewClass
      .dev_test_ebook_bundle_104_bundle,
  addToClass_Btn: selectorFile.css.ComproC1.createNewClass.addToClass_Btn,
  finish_btn: selectorFile.css.ComproC1.createNewClass.finish_btn,
  dev_test_ebook_bundle_104_bundle_dropdown:
    selectorFile.css.ComproC1.createNewClass
      .dev_test_ebook_bundle_104_bundle_dropdown,
  classData: selectorFile.css.ComproC1.createNewClass.classData,
  addStudents: selectorFile.css.ComproC1.createNewClass.addStudents,
  adultsRadio: selectorFile.css.ComproC1.createNewClass.adultsRadio,
  confirmationNextBtn: selectorFile.css.ComproC1.createNewClass.confirmationNextBtn,
  studentEmail_input: selectorFile.css.ComproC1.createNewClass.studentEmail_input,
  inviteStudentBtn: selectorFile.css.ComproC1.createNewClass.inviteStudentBtn,
  pendingTitle: selectorFile.css.ComproC1.createNewClass.pendingTitle,    

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.enterClassDetails),
    };
    return res;
  },

  getData_classDetails: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      enterClassDetails:
        (await action.getElementCount(this.enterClassDetails)) > 0
          ? await action.getText(this.enterClassDetails)
          : null,
      back_btn:
        (await action.getElementCount(this.back_btn)) > 0
          ? await action.getText(this.back_btn)
          : null,
      enterClassName:
        (await action.getElementCount(this.enterClassName)) > 0
          ? await action.getAttribute(this.enterClassName, 'placeholder')
          : null,
      startDate:
        (await action.getElementCount(this.startDate)) > 0
          ? await action.getText(this.startDate)
          : null,
      endDate:
        (await action.getElementCount(this.endDate)) > 0
          ? await action.getText(this.endDate)
          : null,
      enterYourSchool:
        (await action.getElementCount(this.enterYourSchool)) > 0
          ? await action.getAttribute(this.enterYourSchool, 'placeholder')
          : null,
      cancel_btn:
        (await action.getElementCount(this.cancel_btn)) > 0
          ? await action.getText(this.cancel_btn)
          : null,
      next_btn:
        (await action.getElementCount(this.next_btn)) > 0
          ? await action.getText(this.next_btn)
          : null,
    };
    console.log(obj);
    return obj;
  },

  click_back_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    browser.pause(10000);
    res = await action.click(this.back_btn);
    console.log('back_btn', this.back_btn);
    console.log(res);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' back_btn is clicked');
      res = await require('./dashboard.page.js').isInitialized();
      console.log('After click', res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'back_btn is NOT clicked',
        'error'
      );
    }
    console.log('Before return', res);
    return res;
  },

  click_next_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    browser.pause(10000);
    res = await action.click(this.next_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' next_btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'next_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  getData_classMaterial: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      addClassMaterials:
        (await action.getElementCount(this.addClassMaterials)) > 0
          ? await action.getText(this.addClassMaterials)
          : null,
      cancel_btn_classMaterial:
        (await action.getElementCount(this.cancel_btn_classMaterial)) > 0
          ? await action.getText(this.cancel_btn_classMaterial)
          : null,
      addLater_Btn:
        (await action.getElementCount(this.addLater_Btn)) > 0
          ? await action.getText(this.addLater_Btn)
          : null,
      addMaterial_btn:
        (await action.getElementCount(this.addMaterial_btn)) > 0
          ? await action.getText(this.addMaterial_btn)
          : null,
      addMaterial_input:
        (await action.getElementCount(this.addMaterial_input)) > 0
          ? await action.getText(this.addMaterial_input)
          : null,
      dev_test_ebook_bundle_104_bundle:
        (await action.getElementCount(this.dev_test_ebook_bundle_104_bundle)) >
        0
          ? await action.getText(this.dev_test_ebook_bundle_104_bundle)
          : null,
      addToClass_Btn:
        (await action.getElementCount(this.addToClass_Btn)) > 0
          ? await action.getText(this.addToClass_Btn)
          : null,
      finish_btn:
        (await action.getElementCount(this.finish_btn)) > 0
          ? await action.getText(this.finish_btn)
          : null,
    };
    return obj;
  },

  getData_successfullyCreated: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      classSuccessfullyCreated:
        (await action.getElementCount(this.classSuccessfullyCreated)) > 0
          ? await action.getText(this.classSuccessfullyCreated)
          : null,
      dashboard_btn:
        (await action.getElementCount(this.dashboard_btn)) > 0
          ? await action.getText(this.dashboard_btn)
          : null,
    };
    return obj;
  },

  click_cancel_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cancel_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' cancel_btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'cancel_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  getData_cancelModal: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      cancelThisClass:
        (await action.getElementCount(this.cancelThisClass)) > 0
          ? await action.getText(this.cancelThisClass)
          : null,
      yesCancel_btn:
        (await action.getElementCount(this.yesCancel_btn)) > 0
          ? await action.getText(this.yesCancel_btn)
          : null,
      noKeep_btn:
        (await action.getElementCount(this.noKeep_btn)) > 0
          ? await action.getText(this.noKeep_btn)
          : null,
    };
    return obj;
  },

  set_enterClassName: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.enterClassName, value);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        'Value is entered in enterClassName'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'Value is NOT entered in enterClassName',
        'error'
      );
    }
    return res;
  },

  set_startDate: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.startDate, value);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        'Value is entered in startDate'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'Value is NOT entered in startDate',
        'error'
      );
    }
    return res;
  },

  set_endDate: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.endDate, value);
    browser.pause(5000);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        'Value is entered in endDate'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'Value is NOT entered in endDate',
        'error'
      );
    }
    return res;
  },

  set_enterYourSchool: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.enterYourSchool, value);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        'Value is entered in enterYourSchool'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'Value is NOT entered in enterYourSchool',
        'error'
      );
    }
    return res;
  },

  click_cancel_btn_classMaterial: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cancel_btn_classMaterial);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' cancel_btn_classMaterial is clicked'
      );
      res = await require('./createNewClass.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'cancel_btn_classMaterial is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_addLater_Btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addLater_Btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' addLater_Btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'addLater_Btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_dashboard_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    console.log('dashboard_btn',this.dashboard_btn);
    res = await action.click(this.dashboard_btn);
    console.log(res);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' dashboard_btn is clicked');
      res = await require('./dashboard.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'dashboard_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_noKeep_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.noKeep_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' noKeep_btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'noKeep_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_yesCancel_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.yesCancel_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), ' yesCancel_btn is clicked');
      res = await require('./dashboard.page.js').isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'yesCancel_btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_addMaterial_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addMaterial_btn);
    await action.waitForDisplayed(this.addMaterial_input, undefined);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' addMaterial_btn is clicked'
      );
      
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'addMaterial_btn is NOT clicked',
        'error'
      );
      
    }
    return res;
  },

  click_dev_test_ebook_bundle_104_bundle: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.dev_test_ebook_bundle_104_bundle);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' dev_test_ebook_bundle_104_bundle is clicked'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'dev_test_ebook_bundle_104_bundle is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_addToClass_Btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addToClass_Btn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' addToClass_Btn is clicked'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'addToClass_Btn is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_finish_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.finish_btn);
    if (true == res) {
      await browser.pause(5000);
      await logger.logInto(await stackTrace.get(), ' finish_btn is clicked');
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'finish_btn is NOT clicked',
        'error'
      );
    }
    console.log("Vimal",res);
    return res;
  },

  set_addMaterial_input: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.addMaterial_input, value);

    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        'Value is entered in addMaterial_input'
      );
      
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'Value is NOT entered in addMaterial_input',
        'error'
      );
    }
    return res;
  },

  click_dev_test_ebook_bundle_104_bundle_dropdown: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.dev_test_ebook_bundle_104_bundle_dropdown);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        ' dev_test_ebook_bundle_104_bundle_dropdown is clicked'
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + 'dev_test_ebook_bundle_104_bundle_dropdown is NOT clicked',
        'error'
      );
    }
    return res;
  },

  click_classData: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.classData);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " classData is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"classData is NOT clicked", 'error');
  }
  return res;
  },
  
  click_addStudents: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.addStudents);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " addStudents is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"addStudents is NOT clicked", 'error');
  }
  return res;
  },
  
  click_adultsRadio: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.adultsRadio);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " adultsRadio is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"adultsRadio is NOT clicked", 'error');
  }
  return res;
  },
  
  click_confirmationNextBtn: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.confirmationNextBtn);
  if (true == res) {
   await logger.logInto(await stackTrace.get(), " confirmationNextBtn is clicked");
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"confirmationNextBtn is NOT clicked", 'error');
  }
  return res;
  },
  
  click_inviteStudentBtn: async function () {
  await logger.logInto(await stackTrace.get());
  var res;
  res =await action.click(this.inviteStudentBtn);
  await browser.pause(5000);

  if (true == res) {
   await logger.logInto(await stackTrace.get(), " inviteStudentBtn is clicked");
  res = await action.waitForDisplayed(this.pendingTitle, undefined, false);
  }
  else {
  await logger.logInto(await stackTrace.get(), res +"inviteStudentBtn is NOT clicked", 'error');
  }
  return res;
  },

  set_studentEmail_input:async  function (value){
  var res;
  await logger.logInto(await stackTrace.get());
  res =await action.setValue(this.studentEmail_input,value);
  await browser.pause(5000);
  if (true == res) {
  await logger.logInto(await stackTrace.get(), "Value is entered in studentEmail_input");
  }else {
  await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in studentEmail_input", 'error');
  }
  return res;
  },

};