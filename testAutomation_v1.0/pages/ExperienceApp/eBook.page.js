
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
  timer: selectorFile.css.ComproC1.eBook.timer,
  drawingTool: selectorFile.css.ComproC1.eBook.drawingTool,
  showAndHideSelection:selectorFile.css.ComproC1.eBook.showAndHideSelection,
  pageNumber: selectorFile.css.ComproC1.eBook.pageNumber,

  pageNoOneBtn: selectorFile.css.ComproC1.pageNoDialogBox.pageNoOneBtn,
  pageNoTwoBtn: selectorFile.css.ComproC1.pageNoDialogBox.pageNoTwoBtn,
  pageNoClearBtn: selectorFile.css.ComproC1.pageNoDialogBox.pageNoClearBtn,
  pageNoGoToPageBtn: selectorFile.css.ComproC1.pageNoDialogBox.pageNoGoToPageBtn,
  pageNOShow: selectorFile.css.ComproC1.pageNoDialogBox.pageNOShow,

  hyperLinkAnswer: selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperLinkAnswer,
  hyperLinkAnswer2: selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperLinkAnswer2,
  hyperlinkAudio: selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkAudio,

  hyperAnswerReveal: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerReveal,
  hyperAnswerClose: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerClose,
  hyperAnswerFullScreen: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerFullScreen,
  hyperAnswerExitFullScreen: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerExitFullScreen,

  hyperAnswerQuestion: selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerQuestion,

  hyperAudioPlay_pause: selectorFile.css.ComproC1.hyperlinkAudio.hyperAudioPlay_pause,
  hyperAudioClose: selectorFile.css.ComproC1.hyperlinkAudio.hyperAudioClose,




  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus : await action.waitForDisplayed(this.cqa_ebook_evolve),
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
    await action.waitForDisplayed(this.contentButton);
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
    console.log("Clicked");
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
    console.log("this is res", res);
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

      res = await action.getCSSProperty(
        "a[qid='ebook-list-item-5']",
        "background-color"
      );

      console.log("this is res", res);
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
      await browser.pause (4000);
      console.log("this is res", res);
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
    await action.waitForDocumentLoad();

    res = await action.click(this.notes);
    
   // console.log("this is notes res", res);
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
  click_timer: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    await action.waitForDocumentLoad();

    res = await action.click(this.timer);
    
   // console.log("this is notes res", res);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " timer is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "timer is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_drawingTool: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    await action.waitForDocumentLoad();

    res = await action.click(this.drawingTool);
    
   
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " drawing  tool is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "drawing tool is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_showAndHideSelection: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    await action.waitForDocumentLoad();

    res = await action.click(this.showAndHideSelection);
    
   
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " showAndHideSelection  tool is clicked");
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "showAndHideSelection tool is NOT clicked",
        "error"
      );
    }
    return res;
  },


  click_pageNumber: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    await browser.pause(500);
    await action.waitForDisplayed(this.pageNumber);
    res = await action.click(this.pageNumber);
    //console.log("res val is :-- :- "+res)

    if (true == res) {
      await logger.logInto(await stackTrace.get(), " pageNumber is clicked");
     // console.log("pagee status in page no 1:- ")
       var pageStatus= await action.waitForDisplayed(this.pageNoOneBtn)

      //console.log("pagee status in page no 2 :- "+pageStatus)
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "pageNumber is NOT clicked",
        "error"
      );
    }
    return res;
  }, 

  click_pageNoOneBtn: async function () {
    await logger.logInto(await stackTrace.get());
    action.waitForDocumentLoad();
    browser.pause(500);
    var res;
    res =await action.click(this.pageNoOneBtn);
    if (true == res) {
     await logger.logInto(await stackTrace.get(), " pageNoOneBtn is clicked");
     console.log("one is clicked fron dialogboc.page ")
    }
    else {
    await logger.logInto(await stackTrace.get(), res +"pageNoOneBtn is NOT clicked", 'error');
    }
    return res;
    },
    click_pageNoTwoBtn: async function () {
      await logger.logInto(await stackTrace.get());
      var res;
      res =await action.click(this.pageNoTwoBtn);
      if (true == res) {
       await logger.logInto(await stackTrace.get(), " pageNoTwoBtn is clicked");
      }
      else {
      await logger.logInto(await stackTrace.get(), res +"pageNoTwoBtn is NOT clicked", 'error');
      }
      return res;
      },
      click_pageNoGoToPageBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res =await action.click(this.pageNoGoToPageBtn);
        if (true == res) {
         await logger.logInto(await stackTrace.get(), " pageNoGoToPageBtn is clicked");

          var pageStatus= await action.waitForDisplayed(this.pageNOShow)
          
          
          //console.log("page no stauus ",pageStatus);
        }
        else {
        await logger.logInto(await stackTrace.get(), res +"pageNoGoToPageBtn is NOT clicked", 'error');
        }
        //console.log("check:- ",res)
        return res;
        },


        // isInitialized: async function ()
        // { 
        // var res;
        // await logger.logInto(await stackTrace.get());
        // await action.waitForDocumentLoad();
        // res = {
        // pageStatus: await action.waitForDisplayed(this.hyperLinkAnswer),
        // };
        // return res; 
        // },

        // getData_ebookLearningHyperlink: async function ()
        // {
        // await logger.logInto(await stackTrace.get());
        // var obj;
        // obj = {
        // hyperLinkAnswer:(( await action.getElementCount(this.hyperLinkAnswer)) > 0) ? await action.getText(this.hyperLinkAnswer) : null,
        // hyperlinkAudio:(( await action.getElementCount(this.hyperlinkAudio)) > 0) ? await action.getText(this.hyperlinkAudio) : null,
        // }
        // return obj; 
        // },

        acceptCookies : async function() {
          const cookieButtonSelector = 'cookies-2'; // Replace with the actual selector
          const isCookieBannerVisible = await $(cookieButtonSelector).isDisplayed();
      
          if (isCookieBannerVisible) {
              await $(cookieButtonSelector).click();
          }
        },

        click_hyperLinkAnswer: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res =await action.click(this.hyperLinkAnswer);
        console.log("val of res is hyperLinkAnswer: ",res );
        if (true == res) {
          await logger.logInto(await stackTrace.get(), " hyperLinkAnswer is clicked");

   
        
        


        //  const cookieButtonSelector = 'cookies-2'; // Replace with the actual selector
        //  const isCookieBannerVisible = await $(cookieButtonSelector).isDisplayed();
     
        //  if (isCookieBannerVisible) {
        //      await $(cookieButtonSelector).click();
        //  }
        // await acceptCookies();


        // await $("img[title=\"Exit fullscreen\"]").waitForDisplayed(); 

        // const cookieBannerSelector = 'cookies-2'; // Replace with actual button selector in the cookie banner
        // const cookieBanner = browser.$(cookieBannerSelector);
        // if (cookieBanner.isDisplayed()) {
        //     cookieBanner.click(); // Close the cookie banner if it's displayed
        // }
        // const isCookieBannerVisible = browser.isVisible(cookieBannerSelector);
        // if (isCookieBannerVisible) {
        //     browser.click(cookieBannerSelector); // Close the cookie banner
        // }


        //  await $("img[title=\"Exit fullscreen\"]").waitForDisplayed(); 
        //  browser.execute((element) => {
        //   element.click();
        //  }, $("img[title=\"Exit fullscreen\"]"));

       
        await $(this.hyperAnswerFullScreen).waitForDisplayed(); 
        await $(this.hyperAnswerFullScreen).click();
        await browser.pause(3000)

        await $(this.hyperAnswerReveal).waitForDisplayed(); 
        await $(this.hyperAnswerReveal).click();
        await browser.pause(3000)

        await $(this.hyperAnswerExitFullScreen).waitForDisplayed(); 
        await $(this.hyperAnswerExitFullScreen).click();
        await browser.pause(3000)

        

        await $(this.hyperAnswerClose).waitForDisplayed(); 
        await $(this.hyperAnswerClose).click();
        await browser.pause(3000)

       

         // Increased timeout for slower loading modals

         // Interact th the modal once it appears
        // var modal  await $("#hotspot-overlay-modal-3");
       // console.log("Modal value is: ", modal);
          // const closeButton = await modal.$('.close-btn'); // Locate the close button inside the modal
          // await closeButton.click(); // Click the close butto

          // await browser.pause(2000); 
          // console.log("after pause " );
          // // Get all window handles
          // const allWindows = await browser.getWindowHandles();
          // const currentWindow = await browser.getWindowHandle(); // Get the current window
          // console.log("after pause  check ",allWindows.length );

          // if (allWindows.length > 1) {
          //     // Switch to the new window (assuming it's the last one opened)
          //     browser.pause(3000);
          //     await browser.switchToWindow(allWindows[1]);
          //     await logger.logInto(await stackTrace.get(), "Switched to new window");
          //     console.log("after pause  new window ")

          //     // Wait for the element with the id '.promoted-title' to be displayed
          //     // const isDisplayed = await $(this.promotedArticle).isDisplayed();
          //     // browser.pause(500);

          //     // // Add assertion for the '.promoted-title' element
          //     // if (isDisplayed) {
          //     //     await logger.logInto(await stackTrace.get(), "Element '.promoted-title' is displayed on the new window.");
          //     // } else {
          //     //     await logger.logInto(await stackTrace.get(), "Element '.promoted-title' is NOT displayed", 'error');
          //     // }

          //     // After your assertion, you can close the new window and switch back to the original window if needed
          //     await browser.closeWindow();  // Close the new window
          //     await browser.switchToWindow(currentWindow);  // Switch back to the original window
          // } else {
          //   console.log("after pause   old  window ")
          //     await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
          // }

        }
        else {
        await logger.logInto(await stackTrace.get(), res +"hyperLinkAnswer is NOT clicked", 'error');
        }
        return res;
        },

        click_hyperLinkAnswer2: async function () {
          await logger.logInto(await stackTrace.get());
          var res;
          res =await action.click(this.hyperLinkAnswer2);
          console.log("val of res is hyperLinkAnswer 2: ",res );
          if (true == res) {
            await logger.logInto(await stackTrace.get(), " hyperLinkAnswer 2 is clicked");



          await $(this.hyperAnswerFullScreen).waitForDisplayed(); 
          await $(this.hyperAnswerFullScreen).click();
          await browser.pause(3000)

          await $(this.hyperAnswerReveal).waitForDisplayed(); 
          await $(this.hyperAnswerReveal).click();
          await browser.pause(3000)
  

          await $(this.hyperAnswerExitFullScreen).waitForDisplayed(); 
          await $(this.hyperAnswerExitFullScreen).click();
          await browser.pause(3000)


          
          
          await $(this.hyperAnswerClose).waitForDisplayed(); 
          await $(this.hyperAnswerClose).click();
          await browser.pause(3000)
  
         
  
            //     // After your assertion, you can close the new window and switch back to the original window if needed
            //     await browser.closeWindow();  // Close the new window
            //     await browser.switchToWindow(currentWindow);  // Switch back to the original window
            // } else {
            //   console.log("after pause   old  window ")
            //     await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
            // }
  
          }
          else {
          await logger.logInto(await stackTrace.get(), res +"hyperLinkAnswer is NOT clicked", 'error');
          }
          return res;
          },

        click_hyperlinkAudio: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res =await action.click(this.hyperlinkAudio);
        if (true == res) {
           await logger.logInto(await stackTrace.get(), " hyperlinkAudio is clicked");


          // for play the audio
           await $(this.hyperAudioPlay_pause).waitForDisplayed(); 
           await $(this.hyperAudioPlay_pause).click();
           await browser.pause(3000)


// // for pause the audio 
//            await $("button[class='plyr__control playpause plyr__control--pressed plyr__tab-focus'] div[class='icon--pressed'] span[class='glyph']").waitForDisplayed(); 
//            await $("button[class='plyr__control playpause plyr__control--pressed plyr__tab-focus'] div[class='icon--pressed'] span[class='glyph']").click();
//            //await $("div[class='ctrls'] div[class='icon--not-pressed'] span[class='glyph']").click();
//            await browser.pause(5000)

          await $(this.hyperAudioClose).waitForDisplayed(); 
          await $(this.hyperAudioClose).click();
          await browser.pause(3000)


        }
        else {
        await logger.logInto(await stackTrace.get(), res +"hyperlinkAudio is NOT clicked", 'error');
        }
        return res;
        },


        // hyper link clicked answer new window
        // isInitialized: async function ()
        // { 
        // var res;
        // await logger.logInto(await stackTrace.get());
        // await action.waitForDocumentLoad();
        // res = {
        // pageStatus: await action.waitForDisplayed(this.hyperAnswerReveal),
        // };
        // return res; 
        // },

        // getData_ebookHyperlinkAnswer: async function ()
        // {
        // await logger.logInto(await stackTrace.get());
        // var obj;
        // obj = {
        // hyperAnswerReveal:(( await action.getElementCount(this.hyperAnswerReveal)) > 0) ? await action.getText(this.hyperAnswerReveal) : null,
        // hyperAnswerClose:(( await action.getElementCount(this.hyperAnswerClose)) > 0) ? await action.getText(this.hyperAnswerClose) : null,
        // hyperAnswerFullScreen:(( await action.getElementCount(this.hyperAnswerFullScreen)) > 0) ? await action.getText(this.hyperAnswerFullScreen) : null,
        // hyperAnswerQuestion:(( await action.getElementCount(this.hyperAnswerQuestion)) > 0) ? await action.getText(this.hyperAnswerQuestion) : null,
        // }
        // return obj; 
        // },


        // click_hyperAnswerReveal: async function () {
        // await logger.logInto(await stackTrace.get());
        // var res;
        // res =await action.click(this.hyperAnswerReveal);
        // if (true == res) {
        // await logger.logInto(await stackTrace.get(), " hyperAnswerReveal is clicked");
        // }
        // else {
        // await logger.logInto(await stackTrace.get(), res +"hyperAnswerReveal is NOT clicked", 'error');
        // }
        // return res;
        // },

        // click_hyperAnswerClose: async function () {
        // await logger.logInto(await stackTrace.get());
        // var res;
        // res =await action.click(this.hyperAnswerClose);
        // if (true == res) {
        // await logger.logInto(await stackTrace.get(), " hyperAnswerClose is clicked");
        // }
        // else {
        // await logger.logInto(await stackTrace.get(), res +"hyperAnswerClose is NOT clicked", 'error');
        // }
        // return res;
        // },
        

        // click_hyperAnswerFullScreen: async function () {
        // await logger.logInto(await stackTrace.get());
        // var res;
        // res =await action.click(this.hyperAnswerFullScreen);
        // if (true == res) {
        // await logger.logInto(await stackTrace.get(), " hyperAnswerFullScreen is clicked");
        // }
        // else {
        // await logger.logInto(await stackTrace.get(), res +"hyperAnswerFullScreen is NOT clicked", 'error');
        // }
        // return res;
        // },

        click_hyperAudioPlay_pause: async function () {
          await logger.logInto(await stackTrace.get());
          var res;
          res =await action.click(this.hyperAudioPlay_pause);
          if (true == res) {
           await logger.logInto(await stackTrace.get(), " hyperAudioPlay_pause is clicked");
          }
          else {
          await logger.logInto(await stackTrace.get(), res +"hyperAudioPlay_pause is NOT clicked", 'error');
          }
          return res;
          },
          
          click_hyperAudioClose: async function () {
          await logger.logInto(await stackTrace.get());
          var res;
          res =await action.click(this.hyperAudioClose);
          if (true == res) {
           await logger.logInto(await stackTrace.get(), " hyperAudioClose is clicked");
          }
          else {
          await logger.logInto(await stackTrace.get(), res +"hyperAudioClose is NOT clicked", 'error');
          }
          return res;
          },

};



