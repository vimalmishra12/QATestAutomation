"use strict";
var eBook = require("../../pages/ExperienceApp/eBook.page.js");
var pageNoDialogBox= require("../../pages/ExperienceApp/eBook.page.js");
var eBookLearningPageHyperlink= require("../../pages/ExperienceApp/eBook.page.js");
var hyperLinkAnswerWindow= require("../../pages/ExperienceApp/eBook.page.js");
var hyperlinkAudio= require('../../pages/ExperienceApp/eBook.page.js');

var sts;

module.exports = {
  TST_EBOO_TC_1: async function () {
    sts = await eBook.isInitialized();
    console.log("this is sts1", sts);
    await assertion.assertEqual(
      sts.pageStatus,
      true,
      "eBook page status mismatch"
    );
  },

  TST_EBOO_TC_2: async function (testdata) {
    sts = await eBook.click_contentButton();
    console.log("this is sts2", sts);
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_3: async function (testdata) {
    sts = await eBook.click_toolsButton();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_4: async function (testdata) {
    sts = await eBook.click_closeButton();
    console.log("this is sts", sts);
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_5: async function (testdata) {
    sts = await eBook.click_homeButton();
    await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
  },

  TST_EBOO_TC_6: async function (testdata) {
    sts = await eBook.click_cqaEbookEvolveDropdown();
    await assertion.assertEqual(
      sts.value,
      "rgba(251,246,228,1)",
      "cqaEbookEvolveDropdown are not Clicked"
    );
  },

  TST_EBOO_TC_7: async function (testdata) {
    sts = await eBook.click_cqaTestEbookOnlyAssets();
    await assertion.assertEqual(
      sts,
      true,
      "cqaTestEbookOnlyAssets are not Clicked"
    );
    await assertion.assertEqual(
      sts.cqaTestEbookOnlyAssets,
      testdata.cqaTestEbookOnlyAssets,
      "cqaTestEbookOnlyAssets Values is not as expected."
    );
  },

  TST_EBOO_TC_8: async function (testdata) {
    sts = await eBook.click_notes();
    await assertion.assertEqual(sts, true, "notes are not Clicked");
  },

  TST_EBOO_TC_9: async function (testdata) {
    sts = await eBook.click_pageNumber();
    await assertion.assertEqual(sts, true, "pageNumber are not Clicked");
  },

  TST_EBOO_TC_10: async function (testdata) {
    sts = await eBook.getData_ebookEvolve(testdata);
    await assertion.assertEqual(
      sts.cqa_ebook_evolve,
      testdata.cqa_ebook_evolve,
      "cqa_ebook_evolve Values is not as expected."
    );
  },

  TST_EBOO_TC_11: async function (testdata) {
    sts = await eBook.getData_eTextToolBar(testdata);
    await assertion.assertEqual(
      sts.contentButton,
      testdata.contentButton,
      "contentButton Values is not as expected."
    );
    await assertion.assertEqual(
      sts.toolsButton,
      testdata.toolsButton,
      "toolsButton Values is not as expected."
    );
    await assertion.assertEqual(
      sts.homeButton,
      testdata.homeButton,
      "homeButton Values is not as expected."
    );
    await assertion.assertEqual(
      sts.pageNumber,
      testdata.pageNumber,
      "pageNumber Values is not as expected."
    );
  },

  TST_EBOO_TC_12: async function (testdata) {
    sts = await eBook.getData_ebookContents(testdata);
    await assertion.assertEqual(
      sts.closeButton,
      testdata.closeButton,
      "closeButton Values is not as expected."
    );
  },

  TST_EBOO_TC_13: async function (testdata) {
    console.log("this is testdata", testdata);
    sts = await eBook.getData_ebookToolsNotes(testdata);
    await assertion.assertEqual(
      sts.myNotes,
      testdata.myNotes,
      "myNotes Values is not as expected."
    );
  },

  TST_EBOO_TC_14: async function (testdata) {
    sts = await eBook.getData_ebookContent(testdata);
    await assertion.assertEqual(
      sts.cqaEbookEvolveDropdown,
      testdata.cqaEbookEvolveDropdown,
      "cqaEbookEvolveDropdown Values is not as expected."
    );
  },

  TST_EBOO_TC_15: async function (testdata) {
    sts = await eBook.getData_ebookContentDropdown(testdata);
    await assertion.assertEqual(
      sts.cqaTestEbookOnlyAssets,
      testdata.cqaTestEbookOnlyAssets,
      "cqaTestEbookOnlyAssets Values is not as expected."
    );
  },

  TST_EBOO_TC_16: async function (testdata) {
    sts = await eBook.getData_ebookTools(testdata);
    await assertion.assertEqual(
      sts.notes,
      testdata.notes,
      "notes Values is not as expected."
    );
  },
  TST_PAGE_TC_1 :   async function (testdata) { 
    sts = await pageNoDialogBox.click_pageNoOneBtn();
    await assertion.assertEqual(sts, true,"pageNoOneBtn are not Clicked");
    },
    
    TST_PAGE_TC_2 :   async function (testdata) { 
    sts = await pageNoDialogBox.click_pageNoTwoBtn();
    await assertion.assertEqual(sts, true,"pageNoTwoBtn are not Clicked");
    },
    
    TST_PAGE_TC_3 :   async function (testdata) { 
    sts = await pageNoDialogBox.click_pageNoClearBtn();
    await assertion.assertEqual(sts, true,"pageNoClearBtn are not Clicked");
    },
    
    TST_PAGE_TC_4 :   async function (testdata) { 
    sts = await pageNoDialogBox.click_pageNoGoToPageBtn();
    await assertion.assertEqual(sts, true,"pageNoGoToPageBtn are not Clicked");
    },
    
    TST_PAGE_TC_5 :   async function (testdata) { 
    sts = await pageNoDialogBox.click_pageNOShow();
    await assertion.assertEqual(sts, true,"pageNOShow are not Clicked");
    },
    
    TST_PAGE_TC_6 :   async function (testdata) { 
    sts = await pageNoDialogBox.getData_pageNumberDialogBox(testdata);
    await assertion.assertEqual(sts.pageNoOneBtn, testdata.pageNoOneBtn,"pageNoOneBtn Values is not as expected.");
    await assertion.assertEqual(sts.pageNoTwoBtn, testdata.pageNoTwoBtn,"pageNoTwoBtn Values is not as expected.");
    await assertion.assertEqual(sts.pageNoClearBtn, testdata.pageNoClearBtn,"pageNoClearBtn Values is not as expected.");
    await assertion.assertEqual(sts.pageNoGoToPageBtn, testdata.pageNoGoToPageBtn,"pageNoGoToPageBtn Values is not as expected.");
    await assertion.assertEqual(sts.pageNOShow, testdata.pageNOShow,"pageNOShow Values is not as expected.");
    },

    // mannnually changed id "TST_EBOO_TC_1" to "TST_EBOOK_TC_1"
    TST_EBOOK_TC_1 :   async function (testdata) { 
    sts = await eBookLearningPageHyperlink.click_hyperLinkAnswer();
    await assertion.assertEqual(sts, true,"hyperLinkAnswer are not Clicked");
    },

    //mannnually changed id "TST_EBOO_TC_2" to "TST_EBOOK_TC_2"
    TST_EBOOK_TC_2 :   async function (testdata) { 
    sts = await eBookLearningPageHyperlink.click_hyperlinkAudio();
    await assertion.assertEqual(sts, true,"hyperlinkAudio are not Clicked");
    },

    //mannnually changed id "TST_EBOO_TC_3" to "TST_EBOOK_TC_3"
    TST_EBOOK_TC_3 :   async function (testdata) { 
    sts = await eBookLearningPageHyperlink.getData_ebookLearningHyperlink(testdata);
    await assertion.assertEqual(sts.hyperLinkAnswer, testdata.hyperLinkAnswer,"hyperLinkAnswer Values is not as expected.");
    await assertion.assertEqual(sts.hyperlinkAudio, testdata.hyperlinkAudio,"hyperlinkAudio Values is not as expected.");
    },

     // mannnually changed id "TST_EBOO_TC_1" to "TST_EBOOK_TC_1"
     TST_EBOOK_TC_4 :   async function (testdata) { 
      sts = await eBookLearningPageHyperlink.click_hyperLinkAnswer2();
      await assertion.assertEqual(sts, true,"hyperLinkAnswer are not Clicked");
      },

    //hyper link answer  clicked new window 

    TST_HYPE_TC_1 :   async function (testdata) { 
    sts = await hyperLinkAnswerWindow.click_hyperAnswerReveal();
    await assertion.assertEqual(sts, true,"hyperAnswerReveal are not Clicked");
    },
    
    TST_HYPE_TC_2 :   async function (testdata) { 
    sts = await hyperLinkAnswerWindow.click_hyperAnswerClose();
    await assertion.assertEqual(sts, true,"hyperAnswerClose are not Clicked");
    },
    
    TST_HYPE_TC_3 :   async function (testdata) { 
    sts = await hyperLinkAnswerWindow.click_hyperAnswerFullScreen();
    await assertion.assertEqual(sts, true,"hyperAnswerFullScreen are not Clicked");
    },
    
    TST_HYPE_TC_4 :   async function (testdata) { 
    sts = await hyperLinkAnswerWindow.getData_ebookHyperlinkAnswer(testdata);
    await assertion.assertEqual(sts.hyperAnswerReveal, testdata.hyperAnswerReveal,"hyperAnswerReveal Values is not as expected.");
    await assertion.assertEqual(sts.hyperAnswerClose, testdata.hyperAnswerClose,"hyperAnswerClose Values is not as expected.");
    await assertion.assertEqual(sts.hyperAnswerFullScreen, testdata.hyperAnswerFullScreen,"hyperAnswerFullScreen Values is not as expected.");
    await assertion.assertEqual(sts.hyperAnswerQuestion, testdata.hyperAnswerQuestion,"hyperAnswerQuestion Values is not as expected.");
    },

    
    //  TST_HYPE_TC_1 changed manually to TST_HYPE_AUD_TC_1
    TST_HYPE_AUD_TC_1 :   async function (testdata) { 
    sts = await hyperlinkAudio.click_hyperAudioPlay_pause();
    await assertion.assertEqual(sts, true,"hyperAudioPlay_pause are not Clicked");
    },
    //   TST_HYPE_TC_2 changed manually to TST_HYPE_AUD_TC_2
    TST_HYPE_AUD_TC_2 :   async function (testdata) { 
    sts = await hyperlinkAudio.click_hyperAudioClose();
    await assertion.assertEqual(sts, true,"hyperAudioClose are not Clicked");
    },


     // TST_HYPE_TC_3 changed manually to TST_HYPE_AUD_TC_3
    TST_HYPE_AUD_TC_3 :   async function (testdata) { 
    sts = await hyperlinkAudio.getData_ebookHyperlinkAudio(testdata);
    await assertion.assertEqual(sts.hyperAudioPlay_pause, testdata.hyperAudioPlay_pause,"hyperAudioPlay_pause Values is not as expected.");
    await assertion.assertEqual(sts.hyperAudioClose, testdata.hyperAudioClose,"hyperAudioClose Values is not as expected.");
    },
      
    






};





