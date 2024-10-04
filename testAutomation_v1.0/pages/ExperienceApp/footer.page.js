"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
footerTermsOfUse: selectorFile.css.ComproC1.footer.footerTermsOfUse,
footerPrivacyNotice: selectorFile.css.ComproC1.footer.footerPrivacyNotice,
footerAccesibility: selectorFile.css.ComproC1.footer.footerAccesibility,
footerOurApproach: selectorFile.css.ComproC1.footer.footerOurApproach,
footerSiteFeedback: selectorFile.css.ComproC1.footer.footerSiteFeedback,
footerFAQ: selectorFile.css.ComproC1.footer.footerFAQ,
footerCambridgeOneSchool: selectorFile.css.ComproC1.footer.footerCambridgeOneSchool,
footerHelp: selectorFile.css.ComproC1.footer.footerHelp,
footerCambridgeUniversity: selectorFile.css.ComproC1.footer.footerCambridgeUniversity,

promotedArticle: selectorFile.css.ComproC1.footerFAQ.promotedArticle,
back: selectorFile.css.ComproC1.footerFAQ.back,
ifYouRequireSupport: selectorFile.css.ComproC1.footerSiteFeedback.ifYouRequireSupport,
next: selectorFile.css.ComproC1.footerSiteFeedback.next,
languageAssessment: selectorFile.css.ComproC1.footerOurApproach.languageAssessment,
languageLearningMaterials: selectorFile.css.ComproC1.footerOurApproach.languageLearningMaterials,
promotedArticles: selectorFile.css.ComproC1.footerHelp.promotedArticles,
footerHelpBack: selectorFile.css.ComproC1.footerHelp.footerHelpBack,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.footerTermsOfUse),
};
return res; 
},

getData_footerPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
footerTermsOfUse:(( await action.getElementCount(this.footerTermsOfUse)) > 0) ? await action.getText(this.footerTermsOfUse) : null,
footerPrivacyNotice:(( await action.getElementCount(this.footerPrivacyNotice)) > 0) ? await action.getText(this.footerPrivacyNotice) : null,
footerAccesibility:(( await action.getElementCount(this.footerAccesibility)) > 0) ? await action.getText(this.footerAccesibility) : null,
footerOurApproaches:(( await action.getElementCount(this.footerOurApproaches)) > 0) ? await action.getText(this.footerOurApproaches) : null,
footerSiteFeedback:(( await action.getElementCount(this.footerSiteFeedback)) > 0) ? await action.getText(this.footerSiteFeedback) : null,
footerFAQs:(( await action.getElementCount(this.footerFAQs)) > 0) ? await action.getText(this.footerFAQs) : null,
footerCambridgeOneSchool:(( await action.getElementCount(this.footerCambridgeOneSchool)) > 0) ? await action.getText(this.footerCambridgeOneSchool) : null,
footerHelp:(( await action.getElementCount(this.footerHelp)) > 0) ? await action.getText(this.footerHelp) : null,
footerCambridgeUniversity:(( await action.getElementCount(this.footerCambridgeUniversity)) > 0) ? await action.getText(this.footerCambridgeUniversity) : null,
}
 return obj; 
},


click_footerTermsOfUse: async function () {
await logger.logInto(await stackTrace.get());
var res;

browser.pause(3000);
action.waitForDocumentLoad();
action.waitForDisplayed(this.footerTermsOfUse);
//await element.scrollIntoView(this.footerTermsOfUse);
//action.waitForElement(this.footerTermsOfUse);
//await browser.keys('PageDown');
//await element.scrollIntoView(this.footerTermsOfUse);
browser.pause();
//res =  await action.moveTo(this.footerTermsOfUse);
//console.log(res)
res =await action.click(this.footerTermsOfUse);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerTermsOfUse is clicked");
res =await require ('./terms.page.js').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerTermsOfUse is NOT clicked", 'error');
}
return res;
},

click_footerFAQ: async function () { 
    await logger.logInto(await stackTrace.get());
    let res;

    // Wait for the footer link to be displayed and click it
    await action.waitForDocumentLoad();
    await action.waitForDisplayed(this.footerFAQ);
    res = await action.click(this.footerFAQ);

    console.log("res is : ",res);

    if (res === true) {
        await logger.logInto(await stackTrace.get(), "footer FAQ  is clicked");

        // Pause to allow the new window to open
        await browser.pause(3000); 

        // Get all window handles
        const allWindows = await browser.getWindowHandles();
        const currentWindow = await browser.getWindowHandle(); // Get the current window

        if (allWindows.length > 1) {
            // Switch to the new window (assuming it's the last one opened)
            browser.pause(500);
            await browser.switchToWindow(allWindows[1]);
            await logger.logInto(await stackTrace.get(), "Switched to new window");

            // Wait for the element with the id '.promoted-title' to be displayed
            const isDisplayed = await $(this.promotedArticle).isDisplayed();
            browser.pause(500);

            // Add assertion for the '.promoted-title' element
            if (isDisplayed) {
                await logger.logInto(await stackTrace.get(), "Element '.promoted-title' is displayed on the new window.");
            } else {
                await logger.logInto(await stackTrace.get(), "Element '.promoted-title' is NOT displayed", 'error');
            }

            // After your assertion, you can close the new window and switch back to the original window if needed
            await browser.closeWindow();  // Close the new window
            await browser.switchToWindow(currentWindow);  // Switch back to the original window
        } else {
            await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
        }
    } else {
        await logger.logInto(await stackTrace.get(), res + "footer FAQ is NOT clicked", 'error');
    }
    console.log("res val : ",res);
    return res;
},




// click_footerTermsOfUse: async function () { 
//     await logger.logInto(await stackTrace.get());
//     let res;

//     // Wait for the footer link to be displayed and click it
//     await action.waitForDocumentLoad();
//     await action.waitForDisplayed("a[qid='cFooter-9'][aria-label='FAQs']");
//     res = await action.click("a[qid='cFooter-9'][aria-label='FAQs']");

//     if (res === true) {
//         await logger.logInto(await stackTrace.get(), "footerTermsOfUse is clicked");

//         // Pause to allow the new window to open
//         await browser.pause(3000); 

//         // Get all window handles
//         const allWindows = await browser.getWindowHandles();
//         const currentWindow = await browser.getWindowHandle(); // Get the current window

//         if (allWindows.length > 1) {
//             // Switch to the new window (assuming it's the last one opened)
//             browser.pause(500);
//             await browser.switchToWindow(allWindows[1]);
//             await logger.logInto(await stackTrace.get(), "Switched to new window");

//             // Wait for the element with the id '.promoted-title' to be displayed
//             const isDisplayed = await $( '.promoted-title' ).isDisplayed();
//             browser.pause(500);

//             // Add assertion for the '.promoted-title' element
//             if (isDisplayed) {
//                 await logger.logInto(await stackTrace.get(), "Element '.promoted-title' is displayed on the new window.");
//             } else {
//                 await logger.logInto(await stackTrace.get(), "Element '.promoted-title' is NOT displayed", 'error');
//             }

//             // After your assertion, you can close the new window and switch back to the original window if needed
//             await browser.closeWindow();  // Close the new window
//             await browser.switchToWindow(currentWindow);  // Switch back to the original window
//         } else {
//             await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
//         }
//     } else {
//         await logger.logInto(await stackTrace.get(), res + "footerTermsOfUse is NOT clicked", 'error');
//     }
//     console.log("res val : ",res);
//     return res;
// },




click_footerPrivacy: async function () {
await logger.logInto(await stackTrace.get());
var res;


 await browser.pause(1000);
 await action.waitForDocumentLoad();
 await action.waitForDisplayed(this.footerPrivacyNotice);

//console.log (" prevacy page is loaded sucessfully :-");
//await browser.pause(500);

res =await action.click(this.footerPrivacyNotice);
await action.waitForDocumentLoad();

if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerPrivacyNotice is clicked");
res =await require ('./privacy.page.js').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerPrivacyNotice is NOT clicked", 'error');
}
console.log("res value is", res);
return res;
},

click_footerAccesibility: async function () {
await logger.logInto(await stackTrace.get());
var res;

 browser.pause(3000);
action.waitForDocumentLoad();
action.waitForDisplayed(this.footerAccesibility);

res =await action.click(this.footerAccesibility);

console.log("accessibility button clicked");

if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerAccesibility is clicked");
res =await require ('./accesibility.page.js').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerAccesibility is NOT clicked", 'error');
}
return res;
},

// click_footerOurApproach: async function () {
// await logger.logInto(await stackTrace.get());

// var res;

// browser.pause(3000);
// action.waitForDocumentLoad();
// action.waitForDisplayed(this.footerOurApproaches);
// res =await action.click(this.footerOurApproaches);
// if (true == res) {
//  await logger.logInto(await stackTrace.get(), " footerOurApproaches is clicked");
// res =await require ('./ourApproaches.page').isInitialized();
// }
// else {
// await logger.logInto(await stackTrace.get(), res +"footerOurApproaches is NOT clicked", 'error');
// }
// return res;
// },

click_footerOurApproach: async function () { 
    await logger.logInto(await stackTrace.get());
    let res;

    // Wait for the footer link to be displayed and click it
    await action.waitForDocumentLoad();
    await action.waitForDisplayed(this.footerOurApproach);
    res = await action.click(this.footerOurApproach);

    console.log("res is : ",res);

    if (res === true) {
        await logger.logInto(await stackTrace.get(), "footer site feedback  is clicked");

        // Pause to allow the new window to open
        await browser.pause(3000); 

        // Get all window handles
        const allWindows = await browser.getWindowHandles();
        const currentWindow = await browser.getWindowHandle(); // Get the current window

        if (allWindows.length > 1) {
            // Switch to the new window (assuming it's the last one opened)
            browser.pause(500);
            await browser.switchToWindow(allWindows[1]);
            await logger.logInto(await stackTrace.get(), "Switched to new window");

            // Wait for the element with the id '.promoted-title' to be displayed
            const isDisplayed = await $(this.languageLearningMaterials).isDisplayed();
            browser.pause(500);

            // Add assertion for the '.promoted-title' element
            if (isDisplayed) {
                await logger.logInto(await stackTrace.get(), "Element languageLearningMaterials is displayed on the new window.");
            } else {
                await logger.logInto(await stackTrace.get(), "Element languageLearningMaterials is NOT displayed", 'error');
            }

            // After your assertion, you can close the new window and switch back to the original window if needed
            await browser.closeWindow();  // Close the new window
            await browser.switchToWindow(currentWindow);  // Switch back to the original window
        } else {
            await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
        }
    } else {
        await logger.logInto(await stackTrace.get(), res + "footer our approaches is NOT clicked", 'error');
    }
   // console.log("res val : ",res);
    return res;
},

click_footerSiteFeedback: async function () { 
    await logger.logInto(await stackTrace.get());
    let res;

    // Wait for the footer link to be displayed and click it
    await action.waitForDocumentLoad();
    await action.waitForDisplayed(this.footerSiteFeedback);
    res = await action.click(this.footerSiteFeedback);

    console.log("res is : ",res);

    if (res === true) {
        await logger.logInto(await stackTrace.get(), "footer site feedback  is clicked");

        // Pause to allow the new window to open
        await browser.pause(3000); 

        // Get all window handles
        const allWindows = await browser.getWindowHandles();
        const currentWindow = await browser.getWindowHandle(); // Get the current window

        if (allWindows.length > 1) {
            // Switch to the new window (assuming it's the last one opened)
            browser.pause(500);
            await browser.switchToWindow(allWindows[1]);
            await logger.logInto(await stackTrace.get(), "Switched to new window");

            // Wait for the element with the id '.promoted-title' to be displayed
            const isDisplayed = await $(this.ifYouRequireSupport).isDisplayed();
            browser.pause(500);

            // Add assertion for the '.promoted-title' element
            if (isDisplayed) {
                await logger.logInto(await stackTrace.get(), "Element 'ifYouRequireSupport is displayed on the new window.");
            } else {
                await logger.logInto(await stackTrace.get(), "Element 'ifYouRequireSupport' is NOT displayed", 'error');
            }

            // After your assertion, you can close the new window and switch back to the original window if needed
            await browser.closeWindow();  // Close the new window
            await browser.switchToWindow(currentWindow);  // Switch back to the original window
        } else {
            await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
        }
    } else {
        await logger.logInto(await stackTrace.get(), res + "footer site feedback is NOT clicked", 'error');
    }
   // console.log("res val : ",res);
    return res;
},


// click_footerSiteFeedback: async function () {
// await logger.logInto(await stackTrace.get());
// var res;
// browser.pause(3000);
// action.waitForDocumentLoad();
// action.waitForDisplayed(this.footerSiteFeedback);

// browser.pause();
// res =await action.click(this.footerSiteFeedback);

// console.log("res value is :",res);
// if (true == res) {
//  await logger.logInto(await stackTrace.get(), " footerSiteFeedback is clicked");
// res =await require ('./footerSiteFeedback.page').isInitialized();
// }
// else {
// await logger.logInto(await stackTrace.get(), res +"footerSiteFeedback is NOT clicked", 'error');
// }
// return res;
// },



// click_footerFAQ: async function () {
// await logger.logInto(await stackTrace.get());
// var res;
// res =await action.click(this.footerFAQ);
// if (true == res) {
//  await logger.logInto(await stackTrace.get(), " footerFAQ is clicked");
// res =await require ('./footerFAQ.page').isInitialized();
// }
// else {
// await logger.logInto(await stackTrace.get(), res +"footerFAQ is NOT clicked", 'error');
// }
// return res;
// },

click_footerCambridgeOneSchool: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.footerCambridgeOneSchool);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " footerCambridgeOneSchool is clicked");
res =await require ('./footerCambridgeOneForSchool.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"footerCambridgeOneSchool is NOT clicked", 'error');
}
return res;
},

click_footerHelp: async function () { 
    await logger.logInto(await stackTrace.get());
    let res;

    // Wait for the footer link to be displayed and click it
    await action.waitForDocumentLoad();
    await action.waitForDisplayed(this.footerHelp);
    res = await action.click(this.footerHelp);

    console.log("res is : ",res);

    if (res === true) {
        await logger.logInto(await stackTrace.get(), "footer help page   is clicked");

        // Pause to allow the new window to open
        await browser.pause(3000); 

        // Get all window handles
        const allWindows = await browser.getWindowHandles();
        const currentWindow = await browser.getWindowHandle(); // Get the current window

        if (allWindows.length > 1) {
            // Switch to the new window (assuming it's the last one opened)
            browser.pause(500);
            await browser.switchToWindow(allWindows[1]);
            await logger.logInto(await stackTrace.get(), "Switched to new window");

            // Wait for the element with the id '.promoted-title' to be displayed
            const isDisplayed = await $(this.promotedArticles).isDisplayed();

            browser.pause(500);

            // Add assertion for the '.promoted-title' element
            if (isDisplayed) {
                await logger.logInto(await stackTrace.get(), "Element promotedArticles is displayed on the new window.");
            } else {
                await logger.logInto(await stackTrace.get(), "Element promotedArticles is NOT displayed", 'error');
            }

            // After your assertion, you can close the new window and switch back to the original window if needed
            await browser.closeWindow();  // Close the new window
            await browser.switchToWindow(currentWindow);  // Switch back to the original window
        } else {
            await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
        }
    } else {
        await logger.logInto(await stackTrace.get(), res + "footer help is NOT clicked", 'error');
    }
   // console.log("res val : ",res);
    return res;
}

}

