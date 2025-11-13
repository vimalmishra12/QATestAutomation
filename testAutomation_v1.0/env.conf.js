"use strict";
global.appUrl = undefined;
// global.testJsDir = undefined;
// global.testRepoDir = undefined;
global.testExecDir = undefined;
global.selectorDir = undefined;
//global.tcDataDir = undefined;
global.fs = require('fs');
global.argv = require('yargs').argv;
global.path = require('path');
global.jsonParserUtil = require('./core/utils/jsonParser.js');
global.assertion = require('./core/actionLibrary/baseAssertionLibrary.js');
global.loadashget = require('lodash.get');
global.stackTrace = require('stack-trace');
global.resolution = {
    width: undefined,
    height: undefined
};
global.view = undefined;
global.build = argv.buildNumber;
global.jobName = argv.jobName;
global.suiteKey = undefined;
global.tcId = undefined;
global.tcNumber = undefined;
global.screenshotName = undefined;
global.reportOutputDir = 'output/reports/' + (argv.reportdir ? argv.reportdir : 'TestReports');
global.baseScreenshotDir = undefined;
global.testScreenshotDir = undefined;
global.diffScreenshotDir = undefined;
global.resScreenshotDir = undefined;
global.capabilities = undefined;
global.maximizeWindow = undefined;
global.capabilitiesFile = global.jsonParserUtil.jsonParser(path.join(process.cwd() + '/capabilities.json'));


// after loading env.json
let envData = global.jsonParserUtil.jsonParser(process.cwd() + '/env.json');

// set LT creds globally (fallback if not provided in real env vars)
if (envData.lambdaTestCredentials) {
    process.env.LT_USERNAME = process.env.LT_USERNAME || envData.lambdaTestCredentials.LT_USERNAME;
    process.env.LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || envData.lambdaTestCredentials.LT_ACCESS_KEY;
}

global.envData = envData;


if (
    argv.browserCapability &&
    global.capabilitiesFile[argv.browserCapability] &&
    global.capabilitiesFile[argv.browserCapability].webDriverService ===
        "lambdatest"
) {
    const cap = global.capabilitiesFile[argv.browserCapability];
    cap.hostname = cap.hostname || "hub.lambdatest.com";
    cap.portNumber = cap.portNumber || 443;
    cap.webServicePath = cap.webServicePath || "/wd/hub";

    // prefer env vars for credentials (safer for CI)
    cap.user = process.env.LT_USERNAME || cap.user;
    cap.key = process.env.LT_ACCESS_KEY || cap.key;
}



// // Ensure LambdaTest defaults & pick up LT credentials from env if present
// if (argv.browserCapability && global.capabilitiesFile[argv.browserCapability] && global.capabilitiesFile[argv.browserCapability].webDriverService === 'lambdatest') {
//     const cap = global.capabilitiesFile[argv.browserCapability];
//     cap.hostname = cap.hostname || 'hub.lambdatest.com';
//     cap.portNumber = cap.portNumber || 443;
//     cap.webServicePath = cap.webServicePath || '/wd/hub';

//     // prefer env vars for credentials (safer for CI)
//     cap.user = process.env.LT_USERNAME || cap.user;
//     cap.key  = process.env.LT_ACCESS_KEY || cap.key;
// }

global.appVersion = undefined;
global.moduleOff = undefined;

// ====================================
// Check for mandatory input parameters
// ====================================
if (!argv.appType || !argv.testEnv || !argv.testExecFile) {
    console.log("!!!!! ERROR: One or more of the following run parameters are missing !!!!!!!!!!!");
    console.log("appType = " + argv.appType);
    console.log("testEnv = " + argv.testEnv);
    console.log("testExecFile = " + argv.testExecFile);
    console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    process.exit(1);
}
else {
    let envData = global.jsonParserUtil.jsonParser(process.cwd() + '/env.json');
    //global.testJsDir = envData[argv.appType].testJsDir;
    // global.testRepoDir = envData[argv.appType].testRepoDir;
    global.testExecDir = envData[argv.appType].testExecDir;
    // global.tcDataDir = envData[argv.appType].environments[argv.testEnv].tcDataDir;
    // global.selectorDir = envData[argv.appType].selectorDir;
    global.appUrl = envData[argv.appType].environments[argv.testEnv].url;
    global.moduleOff = envData[argv.appType].environments[argv.testEnv].moduleOff;

    // Load Cloudflare headers for bypass if they exist
    if (envData[argv.appType].environments[argv.testEnv].headers) {
        global.headers = envData[argv.appType].environments[argv.testEnv].headers;
        console.log("[ENV] Cloudflare headers loaded for bypass:", Object.keys(global.headers));
    } else {
        console.log("[ENV] No Cloudflare headers found in environment configuration");
    }

    if (!global.appUrl || !global.testExecDir) {
        console.log("!!!!! ERROR: One or more environment parameters are missing in the env.json !!!!!");
        console.log("appUrl = " + global.appUrl);
        //console.log("testJsDir = " + global.testJsDir);
        //console.log("testRepoDir = " + global.testRepoDir);
        console.log("testExecDir = " + global.testExecDir);
        //console.log("tcDataDir = " + global.tcDataDir);
        //console.log("selectorDir = " + global.selectorDir);
        console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        process.exit(1);
    }

    // ============================
    // Setting browser capabilities
    // ============================
    if (!argv.browserCapability || argv.browserCapability == "") {
        argv.browserCapability = "desktop-chrome-1920";
        console.log("WARNING!! Browser capability not provided, using default capabilities (" + argv.browserCapability + ")...");
    }
    if (capabilitiesFile[argv.browserCapability] == undefined) {
        console.log("!!!!! ERROR: Browser capability not found in the capabilities.json !!!!!");
        console.log("browserCapability = " + argv.browserCapability);
        console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        process.exit(1);
    }
    global.capabilities = capabilitiesFile[argv.browserCapability].capabilities;
    global.maximizeWindow = capabilitiesFile[argv.browserCapability].maximizeWindow;
    global.resScreenshotDir = argv.browserCapability;
    if (capabilitiesFile[argv.browserCapability].resolution != undefined) {
        global.resolution.width = capabilitiesFile[argv.browserCapability].resolution.split("x")[0].trim();
        global.resolution.height = capabilitiesFile[argv.browserCapability].resolution.split("x")[1].trim();
    }
    if (parseInt(global.resolution.width, 10) > 1023)
        global.view = 'desktop';
    else
        global.view = 'mobile';
}

global.baseScreenshotDir = path.join('screenshots/baseline/' + argv.appType, argv.testEnv, global.resScreenshotDir);
global.testScreenshotDir = path.join('screenshots/screen/' + argv.appType, argv.testEnv, global.resScreenshotDir);
global.diffScreenshotDir = path.join('screenshots/diff/' + argv.appType, argv.testEnv, global.resScreenshotDir);

// ========================================
// Setting screenshot label folder location
// ========================================
if (argv.visual) {
    fs.mkdirSync(global.reportOutputDir + '/visual/', { recursive: true });
}

global.setupCDPHeaders = async () => {
  const puppeteerBrowser = await browser.getPuppeteer();
  // Get the first page from the browser
  const pages = await puppeteerBrowser.pages();
  const page = pages[0];
  console.log("🔧 [CDP] Page obtained:", page ? page.url() : 'undefined');

  // Create CDP session from the page's target
  const client = await page.target().createCDPSession();
  console.log("🔧 [CDP] CDP session created:", typeof client, client ? Object.keys(client) : 'undefined');

  // Enable network domain using CDP commands
  await client.send('Network.enable');

  // Set up request interception
  await client.send('Network.setRequestInterception', {
    patterns: [{ urlPattern: `*${new URL(global.appUrl).hostname}*` }]
  });

  console.log("🔧 [CDP] Request interception enabled via CDP");

  // Listen for requests and inject headers
  client.on('Network.requestIntercepted', async (event) => {
    const { interceptionId, request } = event;

    console.log(`📡 [CDP] Intercepted request: ${request.method} ${request.url}`);

    // Check if this request should have headers
    const shouldAddHeaders = global.appUrl && request.url.includes(new URL(global.appUrl).hostname);

    if (shouldAddHeaders) {
      console.log(`🔐 [CDP] Adding headers to: ${request.url}`);

      // Add headers to the request
      const headers = { ...request.headers, ...global.headers };

      console.log(`🔐 [CDP] Headers injected:`, Object.keys(global.headers));

      // Continue the request with modified headers
      await client.send('Network.continueInterceptedRequest', {
        interceptionId,
        headers
      });
    } else {
      // Continue the request without modification
      await client.send('Network.continueInterceptedRequest', {
        interceptionId
      });
    }
  });

  // console.log("🔧 [CDP] CDP header injection setup complete");
};


