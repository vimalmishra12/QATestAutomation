"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  cqa_ebook_evolve: selectorFile.css.ComproC1.eBook.cqa_ebook_evolve,
  contentButton: selectorFile.css.ComproC1.eBook.contentButton,
  toolsButton: selectorFile.css.ComproC1.eBook.toolsButton,
  closeButton: selectorFile.css.ComproC1.eBook.closeButton,
  homeButton: selectorFile.css.ComproC1.eBook.homeButton,
  myNotes: selectorFile.css.ComproC1.eBook.myNotes,
  cqaEbookEvolveDropdown:
    selectorFile.css.ComproC1.eBook.cqaEbookEvolveDropdown,
  cqaTestEbookOnlyAssets:
    selectorFile.css.ComproC1.eBook.cqaTestEbookOnlyAssets,
  notes: selectorFile.css.ComproC1.eBook.notes,
  pageNumber: selectorFile.css.ComproC1.eBook.pageNumber,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.cqa_ebook_evolve),
    };
    return res;
  },

  getData_ebookEvolve: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      cqa_ebook_evolve:
        (await action.getElementCount(this.cqa_ebook_evolve)) > 0
          ? await action.getText(this.cqa_ebook_evolve)
          : null,
    };
    return obj;
  },

  getData_eTextToolBar: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      contentButton:
        (await action.getElementCount(this.contentButton)) > 0
          ? await action.getText(this.contentButton)
          : null,
      toolsButton:
        (await action.getElementCount(this.toolsButton)) > 0
          ? await action.getText(this.toolsButton)
          : null,
      homeButton:
        (await action.getElementCount(this.homeButton)) > 0
          ? await action.getText(this.homeButton)
          : null,
      pageNumber:
        (await action.getElementCount(this.pageNumber)) > 0
          ? await action.getText(this.pageNumber)
          : null,
    };
    return obj;
  },

  getData_ebookContents: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      closeButton:
        (await action.getElementCount(this.closeButton)) > 0
          ? await action.getText(this.closeButton)
          : null,
    };
    return obj;
  },

  getData_ebookToolsNotes: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      myNotes:
        (await action.getElementCount(this.myNotes)) > 0
          ? await action.getText(this.myNotes)
          : null,
    };
    return obj;
  },

  getData_ebookContent: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      cqaEbookEvolveDropdown:
        (await action.getElementCount(this.cqaEbookEvolveDropdown)) > 0
          ? await action.getText(this.cqaEbookEvolveDropdown)
          : null,
    };
    return obj;
  },

  getData_ebookContentDropdown: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      cqaTestEbookOnlyAssets:
        (await action.getElementCount(this.cqaTestEbookOnlyAssets)) > 0
          ? await action.getText(this.cqaTestEbookOnlyAssets)
          : null,
    };
    return obj;
  },

  getData_ebookTools: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      notes:
        (await action.getElementCount(this.notes)) > 0
          ? await action.getText(this.notes)
          : null,
    };
    return obj;
  },

  click_contentButton: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.contentButton);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " contentButton is clicked");
      res = await require("./eBookContents.page").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "contentButton is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_toolsButton: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.toolsButton);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " toolsButton is clicked");
      res = await require("./eBookTools.page").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "toolsButton is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_closeButton: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.closeButton);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " closeButton is clicked");
      res = await require("./eBook.page").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "closeButton is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_homeButton: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.homeButton);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " homeButton is clicked");
      res = await require("./dashboard.page").isInitialized();
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "homeButton is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_cqaEbookEvolveDropdown: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cqaEbookEvolveDropdown);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " cqaEbookEvolveDropdown is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "cqaEbookEvolveDropdown is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_cqaTestEbookOnlyAssets: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cqaTestEbookOnlyAssets);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " cqaTestEbookOnlyAssets is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "cqaTestEbookOnlyAssets is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_notes: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notes);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notes is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "notes is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_pageNumber: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.pageNumber);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " pageNumber is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "pageNumber is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
