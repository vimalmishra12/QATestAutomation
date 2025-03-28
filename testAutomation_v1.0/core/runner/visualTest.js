"use strict";
var rootDir = process.cwd();
var mergeImg = require(path.join(rootDir, "/core/utils/mergeImage.js"));
var hideSelectors = [
  // 'class="copyright mb-0"'
];
var excludeSelectors = [];
const {
  Eyes,
  Target,
  ClassicRunner,
  By,
  Configuration,
  BatchInfo,
} = require("@applitools/eyes-webdriverio");
var eyes = new Eyes();
var action = require(rootDir + "/core/actionLibrary/baseActionLibrary");
var labelsDir = "/screenshots/labels/" + global.view;

module.exports = {
  //function for writing visual test's logs
  setVisualReportData(testExecFile, visualTotalTc, startTime, endTime, suites) {
    let visualPassedTc = 0;
    let visualFailedTc = 0;
    for (var suiteindex = 0; suiteindex < suites.length; ) {
      for (var testindex = 0; testindex < suites[suiteindex].tests.length; ) {
        if (suites[suiteindex].tests[testindex].visual == "no") {
          suites[suiteindex].tests.splice(testindex, 1);
        } else {
          if (suites[suiteindex].tests[testindex].state === "failed")
            visualFailedTc = visualFailedTc + 1;

          if (suites[suiteindex].tests[testindex].state === "passed")
            visualPassedTc = visualPassedTc + 1;
          testindex++;
        }
      }
      //visualTotalTc = visualTotalTc + suites[suiteindex].tests.length;
      if (suites[suiteindex].tests.length == 0) suites.splice(suiteindex, 1);
      else suiteindex++;
    }

    let logDataobj = {};
    (logDataobj.start = startTime),
      (logDataobj.end = endTime),
      (logDataobj.duration = endTime - startTime);
    logDataobj.capabilities = browser.capabilities;
    logDataobj.capabilities.sessionId = browser.sessionId;
    logDataobj.capabilities.screenResolution = {
      width: global.resolution.width,
      height: global.resolution.height,
    };
    logDataobj.specs = [testExecFile];
    logDataobj.suites = suites;
    logDataobj.state = {
      skipped: visualTotalTc - (visualPassedTc + visualFailedTc),
      passed: visualPassedTc,
      failed: visualFailedTc,
    };
    logDataobj.appVersion = global.appVersion;
    let filePath =
      rootDir +
      "/" +
      global.reportOutputDir +
      "/visual/" +
      testExecFile.split(".")[0] +
      "-visualReport-" +
      startTime +
      ".log";
    fs.openSync(filePath, "w");
    fs.writeFileSync(filePath, JSON.stringify(logDataobj));
  },

  //generate Screenshots and logs for Visual test for Novus
  generateScreenshotsAndLogs: async function (
    testObj,
    suiteIndex,
    testIndex,
    Arr,
    count
  ) {
    await this.enableFullPageScrolling();

    global.suiteKey = suiteIndex;
    global.tcNumber = parseInt(testIndex) + 1;
    global.tcId = testObj.id;
    var hideElements = [];

    // find all the elements to be hide while taking screenshots
    let codemod_placeholder_6971 = Object.keys(hideSelectors);
    /*for (const selector of codemod_placeholder_6971) {
            hideElements[selector] = await action.findElements(hideSelectors[selector]);
            console.log(hideSelectors[selector])
            console.log(hideElements[selector].length)
        };*/

    await Promise.all(
      codemod_placeholder_6971.map(async (selector) => {
        hideElements[selector] = await action.findElements(
          hideSelectors[selector]
        );
        //console.log(hideSelectors[selector])
        //console.log(hideElements[selector].length)
      })
    );

    var excludeElements = [];
    // find all the elements to be hide while taking screenshots
    let codemod_placeholder_2646 = Object.keys(excludeSelectors);

    for (const selector of codemod_placeholder_2646) {
      excludeElements[selector] = await action.findElements(
        await excludeSelectors[selector]
      );
    }
    //console.log(" Mismatch Percentage for " + execJsonData[suiteIndex].Test[testIndex].id + " = " + result[0].misMatchPercentage);
    var result = await browser.checkDocument({
      exclude: excludeElements,
      hide: hideElements,
      misMatchTolerance: testObj.visualTolerance,
      fuzzLevel: testObj.visualTolerance,
    });

    //await this.disableFullPageScrolling();

    await browser.call(() =>
      mergeImg.combineImages(
        [
          path.join(rootDir, labelsDir, "/baselineLbl.png"),
          path.join(
            rootDir,
            global.baseScreenshotDir,
            global.testFileName,
            global.screenshotName
          ),
        ],
        path.join(
          rootDir,
          global.reportOutputDir,
          "/visual/baseline-" + global.screenshotName
        ),
        "row"
      )
    );
    console.log(
      mergeImg.combineImages(
        [
          path.join(rootDir, labelsDir, "/baselineLbl.png"),
          path.join(
            rootDir,
            global.baseScreenshotDir,
            global.testFileName,
            global.screenshotName
          ),
        ],

        path.join(
          rootDir,
          global.reportOutputDir,
          "/visual/baseline-" + global.screenshotName
        ),
        "row"
      )
    );

    await browser.call(() =>
      mergeImg.combineImages(
        [
          path.join(rootDir, labelsDir, "/testLbl.png"),
          path.join(
            rootDir,
            global.testScreenshotDir,
            global.testFileName,
            global.screenshotName
          ),
        ],
        path.join(
          rootDir,
          global.reportOutputDir,
          "/visual/test-" + global.screenshotName
        ),
        "row"
      )
    );

    Arr[count].tests[testIndex] = Object.assign(
      Arr[count].tests[testIndex],
      result[0]
    );
    console.log(
      " Mismatch Percentage for " +
        global.screenshotName +
        " in " +
        global.testFileName +
        " = " +
        result[0].misMatchPercentage
    );

    if (result[0].isWithinMisMatchTolerance == true) {
      Arr[count].tests[testIndex].state = "passed";
      Arr[count].tests[testIndex].screenshots = [
        rootDir +
          global.reportOutputDir +
          "/visual/baseline-" +
          global.screenshotName,
        rootDir +
          global.reportOutputDir +
          "/visual/test-" +
          global.screenshotName,
      ];
    } else {
      Arr[count].tests[testIndex].state = "failed";
      Arr[count].tests[testIndex].screenshots = [
        rootDir +
          global.reportOutputDir +
          "/visual/baseline-" +
          global.screenshotName,
        rootDir +
          global.reportOutputDir +
          "/visual/test-" +
          global.screenshotName,
        rootDir +
          global.reportOutputDir +
          "/visual/diff-" +
          global.screenshotName,
      ];
      await browser.call(() =>
        mergeImg.combineImages(
          [
            path.join(rootDir, labelsDir, "/diffLbl.png"),
            path.join(
              rootDir,
              global.diffScreenshotDir,
              global.testFileName,
              global.screenshotName
            ),
          ],
          path.join(
            rootDir,
            global.reportOutputDir,
            "/visual/diff-" + global.screenshotName
          ),
          "row"
        )
      );
    }

    // merge condition for mobile mode
    if (
      result[0].isWithinMisMatchTolerance == true &&
      global.view == "mobile"
    ) {
      await browser.call(() =>
        mergeImg.combineImages(
          [
            path.join(
              rootDir,
              global.reportOutputDir,
              "/visual/baseline-" + global.screenshotName
            ),
            path.join(
              rootDir,
              global.reportOutputDir,
              "/visual/test-" + global.screenshotName
            ),
          ],
          path.join(
            rootDir,
            global.reportOutputDir,
            "/visual/merge-" + global.screenshotName
          ),
          "col"
        )
      );
      Arr[count].tests[testIndex].screenshots = [
        rootDir +
          global.reportOutputDir +
          "/visual/merge-" +
          global.screenshotName,
      ];
    } else if (
      result[0].isWithinMisMatchTolerance == false &&
      global.view == "mobile"
    ) {
      await browser.call(() =>
        mergeImg.combineImages(
          [
            path.join(
              rootDir,
              global.reportOutputDir,
              "/visual/baseline-" + global.screenshotName
            ),
            path.join(
              rootDir,
              global.reportOutputDir,
              "/visual/test-" + global.screenshotName
            ),
            path.join(
              rootDir,
              global.reportOutputDir,
              "/visual/diff-" + global.screenshotName
            ),
          ],
          path.join(
            rootDir,
            global.reportOutputDir,
            "/visual/merge-" + global.screenshotName
          ),
          "col"
        )
      );
      Arr[count].tests[testIndex].screenshots = [
        rootDir +
          global.reportOutputDir +
          "/visual/merge-" +
          global.screenshotName,
      ];
    }
    return Arr[count];
  },

  //take screenshot for Applitools
  generateScreenshotsApplitools: async function (testObj) {
    //Ignore Region Capabilty- Applitools
    if (testObj.visualTolerance) {
      await browser.call(() =>
        eyes.check(
          testObj.id,
          Target.window().fully().ignoreRegions(By.css(testObj.visualTolerance))
        )
      );
    }
    //Default screenshot capture- Applitools
    else
      await browser.call(() => eyes.check(testObj.id, Target.window().fully()));
  },

  //setting params to initiate Applitools
  initiateApplitools: async function () {
    console.log("applitools Initiated..");
    eyes.setConfiguration(browser.config.eyes);
    eyes.setMatchLevel(browser.config.eyes.matchLevel);
    eyes.setStitchMode(browser.config.eyes.stitchMode);
    eyes.setBatch(browser.config.eyes.batch);
    //eyes.setBaselineEnvName('MasterEnv');
    eyes.setApiKey(browser.config.eyes.apiKey);
  },

  //open Applitools eyes
  openApplitoolsEyes: async function (suiteIndex, suiteName) {
    await browser.call(() =>
      eyes.open(browser, "Engage", suiteIndex + " - " + suiteName, {
        width: argv.windowWidth,
        height: argv.windowHeight,
      })
    );
  },

  //closing Applitools Eyes
  closeApplitoolsEyes: async function () {
    await browser.call(() => eyes.close());
  },

  //change scroolbarDiv property
  enableFullPageScrolling: async function () {
    await browser.execute(() => {
      var elem = document.getElementById("data-js-focus-visible");
      // var elem = document.getElementById("container p-0 m-0 container-fluid d-flex flex-column c1-onboarding-home-container");
      console.log(elem);
      // elem.setAttribute("style", "overflow-y: visible !important")
      //elem.classList.add("overflow-y-visible");
      //console.log(elem.getAttribute("class"));
    });
  },

  //change scroolbarDiv property
  disableFullPageScrolling: async function () {
    await browser.execute(() => {
      var elem = document.getElementById("scroolbarDiv");
      elem.classList.remove("overflow-y-visible");
      //console.log(elem.getAttribute("class"));
    });
  },
};
