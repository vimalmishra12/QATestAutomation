"use strict";
const action = require("../../core/actionLibrary/baseActionLibrary.js");
const eBookPage = require("../../pages/ExperienceApp/eBook.page.js");

module.exports = {
  /**
   * Electron-specific eBook click
   * Selector provided by user: a[qid="lDashboard-c1-0-0-0-2"]
   */
  TST_DASH_TC_5: async function (testdata) {
    console.log("Executing Electron Dashboard TC 5: Click Ebook Button", testdata);
    
    const electronEbookSelector = 'a[qid="lDashboard-c1-0-1-0-2"]';
    
    console.log("Clicking Electron eBook button using selector:", electronEbookSelector);
    
    // Wait for element to be present and displayed
    await action.waitForDisplayed(electronEbookSelector, 15000);
    
    // Try regular click first
    let clickStatus = await action.click(electronEbookSelector);
    
    // If click fails with "not interactable", try JS click fallback
    if (clickStatus !== true) {
        console.warn("Standard click failed or returned error, trying JavaScript click fallback... ⚠");
        try {
            await browser.execute((sel) => {
                const el = document.querySelector(sel);
                if (el) {
                    el.click();
                    return true;
                }
                return false;
            }, electronEbookSelector);
            clickStatus = true; // Assume success if execute finished without error
            console.log("JavaScript click executed successfully ✅");
        } catch (jsClickErr) {
            console.error("JavaScript click fallback also failed ❌:", jsClickErr.message);
            clickStatus = jsClickErr;
        }
    }
    
    if (clickStatus === true) {
        // After clicking, verify if the eBook page is launched successfully
        const sts = await eBookPage.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "eBook page status mismatch in Electron");
        console.log("eBook page launched successfully in Electron ✅");
    } else {
        await assertion.assertEqual(clickStatus, true, "Failed to click eBook button in Electron ❌");
    }
  },
};



