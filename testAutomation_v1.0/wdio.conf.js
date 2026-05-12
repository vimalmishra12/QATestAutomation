"use strict";
require("./env.conf.js");
const novusVisualCompare = require("wdio-novus-visual-regression-service/compare");
const { TimelineService } = require("wdio-timeline-reporter/timeline-service");
const specGenerator = require(process.cwd() + "/core/runner/specGenerator.js");
const visualTimelineReportService =
  require("./core/utils/visual-report-utility/report-service").TimelineService;
var visualReportService = new visualTimelineReportService();

const path = require("path");
const os = require("os");
const { spawn } = require("child_process");

const useElectronApp = argv.electronApp === true || argv.electronApp === "true";

// Read electron app path from env.json
const appConfig = global.envData[argv.appType] || {};
const defaultElectronPath = "C:\\Users\\{USERNAME}\\AppData\\Local\\Programs\\CambridgeOne\\Cambridge One Desktop App.exe";
const electronAppPath = (appConfig.electronAppPath || defaultElectronPath).replace("{USERNAME}", os.userInfo().username);

// Get local chromedriver binary path based on test type
const chromedriverPath = useElectronApp 
  ? path.join(__dirname, 'drivers', 'chromedriver-126.exe') 
  : path.join(__dirname, 'drivers', 'chromedriver-146.exe');
const effectiveBrowserCapability = argv.browserCapability || "desktop-chrome-1920";

// execution file (loginTest.json → loginTest)
const execFileName = argv.testExecFile
  ? path.basename(argv.testExecFile, path.extname(argv.testExecFile))
  : "LocalRun";

// test environment (production → PRODUCTION)
const testEnvName = argv.testEnv ? argv.testEnv.toUpperCase() : "LOCAL";

const {
  generateShareableLink,
} = require("./core/utils/lambdatest/shareableLink");
const { getLatestBuildId } = require("./core/utils/lambdatest/getBuildId");

var retryTimes = 0;
if (argv.retry) retryTimes = 1;

var resizeImage = true;
if (argv.noCompressImage) resizeImage = false;

var hostname;
var portNumber;
var webServicePath;
var webDriverService;
var user;
var key;
var protocol;

// ═══════════════════════════════════════════════════════════════════════
// KEY FIX: Track the normally-launched Electron process
// ═══════════════════════════════════════════════════════════════════════
var electronProcess = null;
var electronDebugPort = 9222; // Port for Chrome DevTools Protocol

if (useElectronApp) {
  hostname = "localhost";
  portNumber = 9515;
  webServicePath = "/";
  webDriverService = "chromedriver";
  user = "";
  key = "";
  protocol = "http";
} else {
  hostname = global.capabilitiesFile[effectiveBrowserCapability].hostname;
  portNumber = global.capabilitiesFile[effectiveBrowserCapability].portNumber;
  webServicePath =
    global.capabilitiesFile[effectiveBrowserCapability].webServicePath;
  webDriverService =
    global.capabilitiesFile[effectiveBrowserCapability].webDriverService;
  user = global.capabilitiesFile[effectiveBrowserCapability].user;
  key = global.capabilitiesFile[effectiveBrowserCapability].key;
  protocol = global.capabilitiesFile[effectiveBrowserCapability].protocol;
}

// allow secure override from environment variables (CI)
user = process.env.LT_USERNAME || user;
key = process.env.LT_ACCESS_KEY || key;

var browserstackLocal =
  global.capabilitiesFile[effectiveBrowserCapability].browserstackLocal;
var updateJob = global.capabilitiesFile[effectiveBrowserCapability].updateJob;
var enableEyesLogs =
  global.capabilitiesFile[effectiveBrowserCapability].enableEyesLogs;
var eyes = global.capabilitiesFile[effectiveBrowserCapability].eyes;

var NovusService = [
  "novus-visual-regression",
  {
    compare: new novusVisualCompare.LocalCompare({
      referenceName: getScreenshotName(
        path.join(process.cwd(), global.baseScreenshotDir)
      ),
      screenshotName: getScreenshotName(
        path.join(process.cwd(), global.testScreenshotDir)
      ),
      diffName: getScreenshotName(
        path.join(process.cwd(), global.diffScreenshotDir)
      ),
      misMatchTolerance: 15,
      ignoreComparison: "nothing",
    }),
  },
];
console.log(NovusService);

function getScreenshotName(basePath) {
  return function (context) {
    if (context.test.file.indexOf("/") >= 0)
      global.testFileName = context.test.file
        .split("tempRunner/")[1]
        .replace(".js", "");
    else
      global.testFileName = context.test.file
        .split("tempRunner\\")[1]
        .replace(".js", "");

    global.screenshotName =
      global.suiteKey +
      "-" +
      (global.tcNumber.toString().length == 1
        ? "0" + global.tcNumber
        : global.tcNumber) +
      "-" +
      global.tcId +
      ".png";
    return path.join(basePath, global.testFileName, global.screenshotName);
    console.log(
      path.join(basePath, global.testFileName, global.screenshotName)
    );
  };
}

let serviceEntry;
if (useElectronApp) {
  // For Electron, we use chromedriver to ATTACH to running instance
  serviceEntry = [
    "chromedriver",
    {
      port: 9515,
      logFileName: "wdio-electron-chromedriver.log",
      chromedriverCustomPath: chromedriverPath,
    },
  ];
} else if (webDriverService === "lambdatest") {
  serviceEntry = ["lambdatest", { tunnel: true, setSessionStatus: true }];
} else if (webDriverService === "chromedriver") {
  serviceEntry = ["chromedriver", { chromedriverCustomPath: chromedriverPath }];
} else {
  serviceEntry = webDriverService;
}

exports.config = {
  hostname: hostname,
  port: portNumber,
  path: webServicePath,
  protocol: protocol,
  user: user,
  key: key,
  browserstackLocal: browserstackLocal,
  enableEyesLogs: enableEyesLogs,
  eyes: eyes,

  specs: ["./test/tempRunner/**.js"],
  specFileRetries: retryTimes,
  exclude: [],
  logFormat: "jsonFileFormat",

  maxInstances: 10,
  port: portNumber,

  // ═══════════════════════════════════════════════════════════════════════
  // KEY FIX: For Electron, capabilities use debuggerAddress to ATTACH
  // instead of binary to LAUNCH
  // ═══════════════════════════════════════════════════════════════════════
  capabilities: useElectronApp
    ? [
        {
          browserName: "chrome",
          "goog:chromeOptions": {
            // DON'T use binary here — we launch Electron normally in onPrepare
            // and attach to it via debuggerAddress
            debuggerAddress: `localhost:${electronDebugPort}`,
            args: [
              // These args are for the Chrome session that attaches
              "--disable-infobars",
              "--no-sandbox",
            ],
          },
        },
      ]
    : global.capabilities,

  logLevel: "warn",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  services: argv.electronApp
    ? [[TimelineService], serviceEntry, NovusService]
    : argv.browserCapability
    ? [[TimelineService], serviceEntry, NovusService]
    : argv.deviceName
    ? [[TimelineService], serviceEntry, NovusService]
    : [[TimelineService], "chromedriver", NovusService, webDriverService],

  framework: "mocha",

  reporters: [
    "spec",
    [
      "timeline",
      {
        outputDir: global.reportOutputDir,
        fileName: "index.html",
        embedImage: true,
        images: {
          quality: 40,
          resize: resizeImage,
          reductionRatio: 1,
        },
        screenshotStrategy: "none",
      },
    ],
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        disableMochaHooks: true,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
    grep: argv.testFilter,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KEY FIX: Launch Electron normally in onPrepare, then WDIO attaches
  // ═══════════════════════════════════════════════════════════════════════
  onPrepare: async function (config, capabilities) {
    await specGenerator.fileArrayGenerator();
    if (argv.visual) {
      await visualReportService.onPrepare();
    }

    // Launch Electron normally (NOT via ChromeDriver) so Windows protocol
    // handler can find it when deep-link fires
    if (useElectronApp) {
      console.log("═══════════════════════════════════════════════════");
      console.log("  Launching Electron normally (not via ChromeDriver)");
      console.log("  This ensures Windows protocol handler can find it");
      console.log("═══════════════════════════════════════════════════");

      electronProcess = spawn(electronAppPath, [
        `--remote-debugging-port=${electronDebugPort}`,
        "--no-sandbox",
      ], {
        detached: false,
        windowsHide: false, // Show window normally
        env: {
          ...process.env,
          // Ensure app uses same user data dir
          // NODE_ENV: 'development'
        }
      });

      console.log(`Electron launched with PID: ${electronProcess.pid}`);
      console.log(`DevTools port: ${electronDebugPort}`);

      // Wait for Electron to fully initialize
      console.log("Waiting 10 seconds for Electron to initialize...");
      await new Promise(r => setTimeout(r, 10000));
      console.log("Electron should be ready for WDIO to attach");
    }
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (webDriverService === "lambdatest") {
      let status = "unknown";
      if (passed) {
        status = "passed";
      } else if (error) {
        status = "failed";
      } else if (test.pending) {
        status = "skipped";
      }
      await browser.execute(`lambda-status=${status}`);
    }
  },

  afterSuite: async function (suite) {
    if (webDriverService === "lambdatest" && suite.error) {
      await browser.execute("lambda-status=failed");
    }
  },

  before: async function (capabilities, specs) {
    if (webDriverService !== "lambdatest") {
      await setupCDPHeaders();
    }
  },

  beforeSession: async function (config, capabilities, specs) {
    if (capabilities["LT:Options"]) {
      capabilities[
        "LT:Options"
      ].name = `Suite- ${testEnvName} | ${execFileName}`;
    }
  },

  beforeCommand: async function (commandName, args) {
    if (commandName === "url") {
      if (webDriverService !== "lambdatest") {
        await setupCDPHeaders();
      }
    }
  },

  afterSession: async function (config, capabilities, specs) {
    require("./core/utils/reportUpdater.js").updateFunctionalObj();
  },

  onComplete: async function (exitCode, config, capabilities, results) {
    // ... existing onComplete code ...

    await specGenerator.removingTempSpecs();
    if (argv.visual) {
      await visualReportService.onComplete();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // KEY FIX: Kill the normally-launched Electron process
    // ═══════════════════════════════════════════════════════════════════════
    if (electronProcess) {
      console.log("Killing Electron process...");
      electronProcess.kill();
      // Force kill if graceful doesn't work
      setTimeout(() => {
        if (!electronProcess.killed) {
          electronProcess.kill('SIGKILL');
        }
      }, 3000);
    }
  },

  afterStep: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};