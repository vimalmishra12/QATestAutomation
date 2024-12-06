"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  help_btn: selectorFile.css.ComproC1.dashboard.help_btn,
  progress_btn: selectorFile.css.ComproC1.dashboard.progress_btn,
  praticeExtra_btn: selectorFile.css.ComproC1.dashboard.praticeExtra_btn,
  ebook_btn: selectorFile.css.ComproC1.dashboard.ebook_btn,
  homework_btn: selectorFile.css.ComproC1.dashboard.homework_btn,
  myProgress_btn: selectorFile.css.ComproC1.dashboard.myProgress_btn,
  createNewClass: selectorFile.css.ComproC1.dashboard.createNewClass,
  activeClassCard: selectorFile.css.ComproC1.dashboard.activeClassCard,

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

  // getData_activeClasses: async function (testdata) {
  //   await logger.logInto(await stackTrace.get());
  //   const ebook = await action.getKthElement(this.ebook_btn,  testdata[1].launchEbook);
  //   const res = await action.getText(ebook) ; 
  //   var obj;
  //   obj = {
  //     progress_btn:
  //       (await action.getElementCount(this.progress_btn)) > 0
  //         ? await action.getText(this.progress_btn)
  //         : null,
  //     praticeExtra_btn:
  //       (await action.getElementCount(this.praticeExtra_btn)) > 0
  //         ? await action.getText(this.praticeExtra_btn)
  //         : null,
  //     ebook_btn:
  //       ( await action.getElementCount(this.ebook_btn)) > 0
  //         ? await action.getText(ebook)
  //         : null,
  //     homework_btn:
  //       (await action.getElementCount(this.homework_btn)) > 0
  //         ? await action.getText(this.homework_btn)
  //         : null,
  //     myProgress_btn:
  //       (await action.getElementCount(this.myProgress_btn)) > 0
  //         ? await action.getText(this.myProgress_btn)
  //         : null,
  //   };
  //   return obj;
  // },

  // getData_activeClasses: async function (value) {
  //   await logger.logInto(await stackTrace.get());
  //   const ebook = await action.getKthElement(this.ebook_btn, value[0].eBook_btn_idx);
  //   const progress = await action.getKthElement(this.progress_btn, value[0].progress_btn_idx);
  //   const practiceExtra = await action.getKthElement(this.ebook_btn, value[0].practiceExtra_btn_idx);
  //   const homework = await action.getKthElement(this.homework_btn, value[0].homework_btn_idx);
  //   const res = await action.getText(ebook) ;
  //   console.log("PROGRESS--->", await action.getText(progress));
  //   var obj;
  //   obj = {
  //     progress_btn:
  //       (await action.getElementCount(this.progress_btn)) > 0
  //         ? await action.getText(progress)
  //         : null,
  //     praticeExtra_btn:
  //       (await action.getElementCount(this.ebook_btn)) > 0
  //         ? await action.getText(practiceExtra)
  //         : null,
  //     ebook_btn:
  //       ( await action.getElementCount(this.ebook_btn)) > 0
  //         ? await action.getText(ebook)
  //         : null,
  //     homework_btn:
  //       (await action.getElementCount(this.homework_btn)) > 0
  //         ? await action.getText(homework)
  //         : null,
  //     myProgress_btn:
  //       (await action.getElementCount(this.myProgress_btn)) > 0
  //         ? await action.getText(this.myProgress_btn)
  //         : null,
  //   };
  //   return obj;
  // },


  // Async function to get data for active classes with generalized handling for multiple types of buttons
  // getData_activeClasses: async function (value) {
  //   // Log the stack trace for debugging
  //   await logger.logInto(await stackTrace.get());
    
  //   // Define the list of element types and their corresponding property names in 'value'
  //   const elementTypes = [
  //       { type: 'ebook_btn', idxProp: 'eBook_btn_idx' },
  //       { type: 'practiceExtra_btn', idxProp: 'practiceExtra_btn_idx' },
  //       { type: 'homework_btn', idxProp: 'homework_btn_idx' }
  //   ];
    
    
  //   // Initialize the result object
  //   var results = {};
    
  //   // Iterate over each element type
  //   for (const elementType of elementTypes) {
  //       const element = await action.getKthElement(this[elementType.type], value[elementType.idxProp]);
  //       const count = await action.getElementCount(this[elementType.type]);
        
  //       // Conditionally set the text or null based on the element count
  //       results[elementType.type] = count > 0 ? await action.getText(element) : null;
        
  //       // Debugging log for each element processed
  //       console.log(`Processed ${elementType.type}, Index:`, value[elementType.idxProp]);
  //   }
    
  //   return results;
  // },

  processElementTypes:async function(elementTypes, value, commonSelector) {
    let results = {};
    
    for (const element of elementTypes) {
        const elementIndex = value[0][element.idxKey];
        const elementHandle = await action.getKthElement(commonSelector, elementIndex);
        const elementCount = await action.getElementCount(commonSelector);
        results[element.type] = elementCount > 0 ? await action.getText(elementHandle) : null;
        
        console.log(`Procelssed ${element.type} - Index: ${elementIndex}, Exists: ${elementCount > 0}`);
        console.log('ELEM-->', elementHandle);
    }

    return results;
},

  getData_activeClasses: async function (value) {
    await logger.logInto(await stackTrace.get());
    const commonSelector = this.ebook_btn;
    const elementTypes = [
        { type: 'ebook_btn', idxKey: 'eBook_btn_idx' },
        { type: 'practiceExtra_btn', idxKey: 'practiceExtra_btn_idx' },
    ];  
    const results = await this.processElementTypes(elementTypes, value, commonSelector);
    return results;
},

  click_help_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.help_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " help_btn is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "help_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_progress_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.progress_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " progress_btn is clicked");
      res = await require("./progress.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "progress_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_praticeExtra_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    var res2 = {
      pageStatus: await action.waitForDisplayed(this.praticeExtra_btn),
    };
    res = await action.click(this.praticeExtra_btn);
    console.log("RESSS----->", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " praticeExtra_btn is clicked"
      );
      res = await require("./practiceExtra.page.js").isInitialized();
      console.log("haha", res);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "praticeExtra_btn is NOT clicked",
        "error"
      );
    }
    console.log("Button", res);
    return res;
  },

  
  click_ebook_btn: async function (testdata) {
    await logger.logInto(await stackTrace.get());
    var res;
    console.log("this is testdata 131" , testdata)
    const kthElement = await action.getKthElement(this.ebook_btn, testdata.launchEbook);
    if (kthElement) {
      res = await action.click(kthElement);

      if (res === true) {
        await logger.logInto(
          await stackTrace.get(),
          "4th ebook_btn is clicked"
        );
        res = await require("./eBook.page.js").isInitialized();
      } else {
        await logger.logInto(
          await stackTrace.get(),
          res + " - 4th ebook_btn is NOT clicked",
          "error"
        );
      }
    } else {
      await logger.logInto(
        await stackTrace.get(),
        "4th ebook_btn could not be found",
        "error"
      );
      res = null;
    }

    return res;
  },

  click_homework_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.homework_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " homework_btn is clicked");
      res = await require("./myHomework.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "homework_btn is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_myProgress_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.myProgress_btn);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " myProgress_btn is clicked"
      );
      res = await require("./myProgress.page.js").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "myProgress_btn is NOT clicked",
        "error"
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

};