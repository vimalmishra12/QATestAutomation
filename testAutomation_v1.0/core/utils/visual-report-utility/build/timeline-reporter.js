'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const reporter_1 = __importDefault(require('@wdio/reporter'));
const mapHooks_1 = require('./mapHooks');
const mapTests_1 = require('./mapTests');
const initResultSet_1 = require('./initResultSet');
const fs_1 = require('fs');
const path_1 = require('path');
const utils_1 = require('./utils');
class TimelineReporter extends reporter_1.default {
  constructor(options) {
    if (!options) {
      throw new Error('Set timeline reporter options object');
    }
    options = Object.assign({}, options, { stdout: false });
    if (!options.outputDir) {
      throw new Error('Set outputDir on reporter options object');
    }
    const mergedOptions = utils_1.deepMerge(
      // default
      {
        fileName: 'timeline-report.html',
        embedImages: false,
        images: {
          quality: 80,
          resize: false,
          reductionRatio: 2,
        },
        screenshotStrategy: 'none',
      },
      options
    );
    super(options);
    this.reporterOptions = mergedOptions;
    this.registerListeners();
  }
  onTestStart(test) {
    this.test = test;
    this.test.screenshots = [];
  }
  onAfterCommand(command) {
    if (
      this.reporterOptions.screenshotStrategy !== 'none' &&
      command.endpoint.includes('screenshot') &&
      command.result &&
      command.result.value &&
      this.test
    ) {
      try {
        const filepath = path_1.resolve(
          this.reporterOptions.outputDir,
          `file-${Date.now()}.jpeg`
        );
        var wstream = fs_1.createWriteStream(filepath);
        wstream.write(Buffer.from(command.result.value, 'base64'));
        wstream.end();
        this.test.screenshots.push(filepath);
      } catch (error) {
        console.log(error);
      }
    }
  }
  onRunnerEnd(runner) {
    let json = this.prepareJson(runner);
    this.write(JSON.stringify(json, null, 2));
  }
  prepareJson(runner) {
    var resultSet = initResultSet_1.initResultSet(runner);
    for (let specId of Object.keys(runner.specs)) {
      resultSet.specs.push(runner.specs[specId]);
      for (let suiteKey of Object.keys(this.suites)) {
        const suite = this.suites[suiteKey];
        let testSuite = {
          title: suite.title,
          duration: suite._duration,
          start: suite.start,
          end: suite.end,
          tests: mapTests_1.MapTests(suite.tests),
          hooks: mapHooks_1.MapHooks(suite.hooks),
        };
        resultSet.state.failed += testSuite.hooks.filter(
          (hook) => hook.error
        ).length;
        resultSet.state.passed += testSuite.tests.filter(
          (test) => test.state === 'passed'
        ).length;
        resultSet.state.failed += testSuite.tests.filter(
          (test) => test.state === 'failed'
        ).length;
        resultSet.state.skipped += testSuite.tests.filter(
          (test) => test.state === 'skipped'
        ).length;
        resultSet.suites.push(testSuite);
      }
    }
    return resultSet;
  }
  registerListeners() {
    // @ts-ignore
    process.on('timeline:addContext', this.addSomeContext.bind(this));
  }
  addSomeContext(object) {
    const { context } = object;
    if (this.test) {
      this.test.context = this.test.context || [];
      this.test.context.push(context);
    }
  }
  static addContext(context) {
    TimelineReporter.tellReporter('timeline:addContext', { context });
  }
  static tellReporter(event, msg = {}) {
    // @ts-ignore
    process.emit(event, msg);
  }
}
exports.default = TimelineReporter;
