"use strict";
var login     = require("../../pages/ExperienceApp/login.page.js");
var adultPage = require("../../pages/ExperienceApp/createAdultStudentAccounts.page.js");
var childPage = require("../../pages/ExperienceApp/createNewAccountsForChildren.page.js");
var sts;

/**
 * Lenient negative-error assertion helper.
 * Asserts that at least one inline validation error appears, AND if testdata.expectedError
 * is a non-empty string, also asserts that one of the errors contains it (case-sensitive substring).
 *
 * This dual mode lets us run the suite once with empty expectedError to CAPTURE the actual
 * error string from the live app, then update the testdata and re-run for strict verification.
 * Used for AC2 (password) and AC3 (CSV size) negative TCs where message wording is still
 * [ASSUMED] in product-knowledge.md.
 */
async function assertExpectedError(errors, expected, contextLabel) {
  await assertion.assertEqual(
    errors.length > 0,
    true,
    "Expected at least one inline validation error (" + contextLabel + ") but none appeared"
  );
  // Print captured errors for the log so we can confirm and update product-knowledge.md
  console.log("[NEMO-24306] " + contextLabel + " -> captured errors: " + JSON.stringify(errors));
  if (expected && typeof expected === "string" && expected.length > 0) {
    await assertion.assertEqual(
      errors.some(function (e) { return e.indexOf(expected) !== -1; }),
      true,
      "Expected error '" + expected + "' not found. Actual: " + errors.join(" | ")
    );
  }
}

module.exports = {

  /**
   * School-admin login TC — used in the Before section of NEMO-24306 execution files.
   * Calls click_login_btn_schoolAdmin so the post-login isInitialized check targets the
   * admin dashboard ("My school accounts"), not the student/teacher dashboard.
   */
  TST_NEMO24306_TC_LOGIN: async function (testdata) {
    await login.acceptCookies();
    sts = await login.click_login_btn_schoolAdmin();
    await assertion.assertEqual(sts.pageStatus, true, "School admin dashboard did not load after login");
  },

  // ── POSITIVE ─────────────────────────────────────────────────────────────────

  /**
   * TC_1 — AC1.UC1.S1.TC1: Valid adult CSV upload — no inline format errors.
   * testdata: { adultCsvPageRelPath, csvPath }
   */
  TST_NEMO24306_TC_1: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no validation errors but found: " + errors.join(" | "));
  },

  /**
   * TC_2 — AC1.UC1.S1.TC2: Valid children CSV upload — no inline format errors.
   * testdata: { childrenCsvPageRelPath, csvPath }
   */
  TST_NEMO24306_TC_2: async function (testdata) {
    sts = await childPage.navigateTo(testdata.childrenCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create new accounts for children page did not load");
    sts = await childPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await childPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no validation errors but found: " + errors.join(" | "));
  },

  /**
   * TC_3 — AC2.UC2.S1.TC1: Password contains at least one letter and one number — accepted.
   * testdata: { adultCsvPageRelPath, csvPath }
   */
  TST_NEMO24306_TC_3: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for letter+number password but found: " + errors.join(" | "));
  },

  /**
   * TC_4 — AC2.UC2.S2.TC1: Password contains at least one letter and one special character — accepted.
   * testdata: { adultCsvPageRelPath, csvPath }
   */
  TST_NEMO24306_TC_4: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for letter+special password but found: " + errors.join(" | "));
  },

  // ── EDGE ──────────────────────────────────────────────────────────────────────

  /**
   * TC_5 — AC1.UC2.S1.TC1: Username at 3-char minimum boundary — accepted.
   */
  TST_NEMO24306_TC_5: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for 3-char username but found: " + errors.join(" | "));
  },

  /**
   * TC_6 — AC1.UC2.S2.TC1: Username at 30-char maximum boundary — accepted.
   */
  TST_NEMO24306_TC_6: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for 30-char username but found: " + errors.join(" | "));
  },

  /**
   * TC_7 — AC1.UC3.S1.TC1: Username with hyphen and underscore — accepted.
   */
  TST_NEMO24306_TC_7: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for hyphen/underscore username but found: " + errors.join(" | "));
  },

  /**
   * TC_8 — AC2.UC1.S1.TC1: Password at exactly 8 chars with complexity — accepted.
   * NOTE: csv used here actually has a 9-char password (Welcome1a) per the manual doc remarks.
   */
  TST_NEMO24306_TC_8: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for password boundary but found: " + errors.join(" | "));
  },

  /**
   * TC_9 — AC3.UC1.S1.TC1: CSV with exactly 200 records (upper boundary) — accepted.
   * Each row has a valid username/password/class key; no per-row format errors expected.
   */
  TST_NEMO24306_TC_9: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertion.assertEqual(errors.length, 0, "Expected no errors for 200-record CSV but found: " + errors.join(" | "));
  },

  // ── NEGATIVE ─────────────────────────────────────────────────────────────────

  /**
   * TC_10 — AC1.UC1.S2.TC1: Username starts with uppercase letter — error shown.
   */
  TST_NEMO24306_TC_10: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "uppercase-start username");
  },

  /**
   * TC_11 — AC1.UC1.S3.TC1: Username starts with a number — error shown.
   */
  TST_NEMO24306_TC_11: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "digit-start username");
  },

  /**
   * TC_12 — AC1.UC1.S4.TC1: HEADLINE DEFECT NEMO-24306 — empty username (adult) shows "Enter Username".
   */
  TST_NEMO24306_TC_12: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "empty username (adult)");
  },

  /**
   * TC_13 — AC1.UC1.S4.TC2: HEADLINE DEFECT NEMO-24306 — empty username (children) shows "Enter Username".
   */
  TST_NEMO24306_TC_13: async function (testdata) {
    sts = await childPage.navigateTo(testdata.childrenCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create new accounts for children page did not load");
    sts = await childPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await childPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "empty username (children)");
  },

  /**
   * TC_14 — AC1.UC2.S3.TC1: Username below 3-char minimum — length error shown.
   */
  TST_NEMO24306_TC_14: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "2-char username (below min)");
  },

  /**
   * TC_15 — AC2.UC1.S2.TC1: Password less than 8 chars — error shown.
   * Expected message currently [ASSUMED] — captured on first run, then set in testdata.
   */
  TST_NEMO24306_TC_15: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "password too short (<8 chars)");
  },

  /**
   * TC_16 — AC2.UC2.S3.TC1: Password contains only letters — error shown.
   */
  TST_NEMO24306_TC_16: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "password letters-only (no number/special)");
  },

  /**
   * TC_17 — AC2.UC2.S4.TC1: Password contains only numbers — error shown.
   */
  TST_NEMO24306_TC_17: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "password numbers-only (no letter)");
  },

  /**
   * TC_18 — AC3.UC1.S2.TC1: CSV with 201 records (one above 200 max) — error shown.
   * Expected message currently [ASSUMED] — captured on first run.
   */
  TST_NEMO24306_TC_18: async function (testdata) {
    sts = await adultPage.navigateTo(testdata.adultCsvPageRelPath);
    await assertion.assertEqual(sts.pageStatus, true, "Create adult student accounts page did not load");
    sts = await adultPage.upload_csvFile(testdata.csvPath);
    await assertion.assertEqual(sts, true, "CSV file upload failed: " + testdata.csvPath);
    var errors = await adultPage.getData_uploadErrors();
    await assertExpectedError(errors, testdata.expectedError, "CSV exceeds 200 records (201 rows)");
  }
};
