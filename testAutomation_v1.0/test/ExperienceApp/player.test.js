"use strict";

var eBookLearningPageHyperlink = require("../../pages/ExperienceApp/player.page.js");

var hyperlinkAudio = require("../../pages/ExperienceApp/player.page.js");

var sts;

module.exports = {
  
  

  TST_PLAY_TC_1: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperlinkActivity();
    await assertion.assertEqual(sts, true, "hyperlinkActivity are not Clicked");
  },
  //   TST_HYPE_TC_2 changed manually to TST_HYPE_AUD_TC_2
  TST_PLAY_TC_2: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperlinkNewTab();
    await assertion.assertEqual(sts, true, "hyperlinkNewTab are not Clicked");
  },
  TST_PLAY_TC_3: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperlinkAudioNoTranscript();
    await assertion.assertEqual(
      sts,
      true,
      "hyperlinkAudioNoTranscript are not Clicked"
    );
  },


  TST_PLAY_TC_4: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperLinkGame();
    await assertion.assertEqual(
      sts,
      true,
      "click_hyperLinkGame are not Clicked"
    );
  },
  TST_PLAY_TC_5: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperlinkGoToPage();
    await assertion.assertEqual(sts, true, "hyperlinkGoToPage are not Clicked");
  },
  TST_PLAY_TC_6: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperZoomHotspot();
    await assertion.assertEqual(sts, true, "hyperZoomHotspot are not Clicked");
  },

  
  TST_PLAY_TC_7: async function (testdata) {
    sts = await hyperlinkAudio.click_hyperZoomHotspotClose();
    await assertion.assertEqual(
      sts,
      true,
      "hyperZoomHotspotClose are not Clicked"
    );
  },
  // mannnually changed id "TST_EBOO_TC_1" to "TST_EBOOK_TC_1"
  TST_PLAY_TC_8: async function (testdata) {
    sts = await eBookLearningPageHyperlink.click_hyperLinkAnswer();
    await assertion.assertEqual(sts, true, "hyperLinkAnswer are not Clicked");
  },
  //mannnually changed id "TST_EBOO_TC_2" to "TST_EBOOK_TC_2"
  TST_PLAY_TC_9: async function (testdata) {
    sts = await eBookLearningPageHyperlink.click_hyperlinkAudio();
    await assertion.assertEqual(sts, true, "hyperlinkAudio are not Clicked");
  },
  //mannnually changed id "TST_EBOO_TC_3" to "TST_EBOOK_TC_3"
  TST_PLAY_TC_11: async function (testdata) {
    sts = await eBookLearningPageHyperlink.getData_ebookLearningHyperlink(
      testdata
    );
    await assertion.assertEqual(
      sts.hyperLinkAnswer,
      testdata.hyperLinkAnswer,
      "hyperLinkAnswer Values is not as expected."
    );
    await assertion.assertEqual(
      sts.hyperlinkAudio,
      testdata.hyperlinkAudio,
      "hyperlinkAudio Values is not as expected."
    );
  },
  // mannnually changed id "TST_EBOO_TC_1" to "TST_EBOOK_TC_1"
  TST_PLAY_TC_10: async function (testdata) {
    sts = await eBookLearningPageHyperlink.click_hyperLinkVideo();
    await assertion.assertEqual(sts, true, "hyperLinkVideo are not Clicked");
  },

}
