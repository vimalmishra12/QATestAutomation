"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
// Selectors resolved at load time from C1Selectors.json → createNewAccountsForChildren (root level)
// Note: this section lives at JSON root (not under css.ComproC1) — matches the vhlNotes pattern.
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
  // Resolves to C1Selectors.json → createNewAccountsForChildren.*
  pageHeading:      selectorFile.createNewAccountsForChildren.pageHeading,
  csvFileInput:     selectorFile.createNewAccountsForChildren.csvFileInput,
  uploadFileBtn:    selectorFile.createNewAccountsForChildren.uploadFileBtn,
  backBtn:          selectorFile.createNewAccountsForChildren.backBtn,
  getCsvTemplateLink: selectorFile.createNewAccountsForChildren.getCsvTemplateLink,
  // inline error element rendered per field after CSV upload
  inlineErrorText:  selectorFile.createNewAccountsForChildren.inlineErrorText,
  // Global-error modal — fires when the whole CSV is rejected (e.g. > 200 records)
  uploadErrorModalTitle: selectorFile.createNewAccountsForChildren.uploadErrorModalTitle,
  uploadErrorModalBody:  selectorFile.createNewAccountsForChildren.uploadErrorModalBody,

  /**
   * Confirms the "Create new accounts for children" CSV upload page has loaded.
   * Uses the Upload file button [qid="aBulkActions-2"] as the stable anchor element.
   * The children and adult pages share the same qid scheme — see decisions.md ADR-002.
   */
  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.uploadFileBtn)
    };
    return res;
  },

  /**
   * Navigates directly to the children CSV upload page using the appUrl global + a relative path.
   * relPath example: "admin/admin/org_mqa-sierra-thor/children/new_csv"
   * The user must already be authenticated (logged in as school admin) before calling this.
   */
  navigateTo: async function (relPath) {
    // Navigate via about:blank first to force Angular to fully teardown and re-mount
    // the upload component — same reasoning as createAdultStudentAccounts.page.js. NEMO-24306.
    await logger.logInto(await stackTrace.get(), "navigating to: " + relPath);
    await browser.url("about:blank");
    await browser.url(appUrl + relPath);
    return await this.isInitialized();
  },

  /**
   * Uploads a CSV file to the hidden file input [qid="aBulkActions-1"].
   * Identical upload mechanism to createAdultStudentAccounts.page.js — see that file
   * for the rationale on bypassing action.setValue for hidden file inputs.
   */
  upload_csvFile: async function (csvFilePath) {
    await logger.logInto(await stackTrace.get(), "uploading: " + csvFilePath);
    var remotePath;
    try {
      // Transfer local file to WebDriver session and get the remote path
      remotePath = await action.uploadFile(path.resolve(csvFilePath));
      if (typeof remotePath !== "string") {
        await logger.logInto(await stackTrace.get(), "uploadFile failed for: " + csvFilePath, "error");
        return remotePath;
      }
      // The file input is hidden (class="d-none") — temporarily expose it so setValue works,
      // then restore to hidden. Same fix as createAdultStudentAccounts.page.js — see NEMO-24306.
      await browser.execute(function (sel) {
        var el = document.querySelector(sel);
        el.style.cssText = "display:block!important;visibility:visible!important;opacity:1!important;";
      }, this.csvFileInput);
      await (await $(this.csvFileInput)).setValue(remotePath);
      await browser.execute(function (sel) {
        document.querySelector(sel).style.cssText = "";
      }, this.csvFileInput);
      // setValue triggers the Angular change event — upload starts automatically.
      // Step 1: wait for the uploading modal to APPEAR (confirms upload has started).
      //         Mirrors the fix in createAdultStudentAccounts.page.js — see NEMO-24306.
      await action.waitForDisplayed(".uploading-file-modal");
      // Step 2: wait for the modal to DISAPPEAR (confirms upload has fully completed).
      await action.waitForDisplayed(".uploading-file-modal", undefined, true);
      // Step 3: pause 2s for Angular to finish rendering inline validation error text.
      await browser.pause(2000);
      await action.waitForDocumentLoad();
      await logger.logInto(await stackTrace.get(), "CSV uploaded successfully: " + csvFilePath);
      return true;
    } catch (err) {
      await logger.logInto(await stackTrace.get(), err.message, "error");
      return err;
    }
  },

  /**
   * Returns an array of non-empty inline validation error texts after CSV upload.
   * See createAdultStudentAccounts.page.js getData_uploadErrors for full context.
   * Used to verify the NEMO-24306 empty-username error fix on the children page (TC_7).
   */
  getData_uploadErrors: async function () {
    await logger.logInto(await stackTrace.get());
    var errors = [];
    try {
      // 1) Per-row inline errors — same approach as createAdultStudentAccounts.page.js.
      var inlineCount = await action.getElementCount(this.inlineErrorText);
      if (inlineCount > 0) {
        await action.scrollIntoView(this.inlineErrorText, { block: "center" });
        var elements = await $$(this.inlineErrorText);
        for (var i = 0; i < elements.length; i++) {
          var text = await elements[i].getText();
          if (text && text.trim()) {
            errors.push(text.trim());
          }
        }
      }
      // 2) Global error modal (e.g. CSV > 200 records). Same approach as the adult page.
      var modalCount = await action.getElementCount(this.uploadErrorModalTitle);
      if (modalCount > 0) {
        var title = await action.getText(this.uploadErrorModalTitle);
        var body  = await action.getText(this.uploadErrorModalBody);
        if (title && title.trim()) errors.push(title.trim());
        if (body  && body.trim())  errors.push(body.trim().replace(/\s+/g, " "));
      }
    } catch (err) {
      await logger.logInto(await stackTrace.get(), err.message, "error");
    }
    return errors;
  }
};
