"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    classheading: selectorFile.css.ComproC1.c1assignment.classheading,
    Assignments: selectorFile.css.ComproC1.c1assignment.Assignments,
    Createassignment: selectorFile.css.ComproC1.c1assignment.Createassignment,
    PracticeExtracqa: selectorFile.css.ComproC1.c1assignment.PracticeExtracqa,
    Unit1: selectorFile.css.ComproC1.c1assignment.Unit1,
    LessonA: selectorFile.css.ComproC1.c1assignment.LessonA,
    Next: selectorFile.css.ComproC1.c1assignment.Next,
    inputTag: selectorFile.css.ComproC1.c1assignment.inputTag,
    setDate: selectorFile.css.ComproC1.c1assignment.setDate,
    selectStudent: selectorFile.css.ComproC1.c1assignment.selectStudent,
    ViewSummary: selectorFile.css.ComproC1.c1assignment.ViewSummary,
    Assign: selectorFile.css.ComproC1.c1assignment.Assign,
    kebabIcon: selectorFile.css.ComproC1.c1assignment.kebabIcon,
    deleteAssignment: selectorFile.css.ComproC1.c1assignment.deleteAssignment,
    yesDelete: selectorFile.css.ComproC1.c1assignment.yesDelete,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.classheading),
        };
        return res;
    },

    getData_c1assignment: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            classheading: ((await action.getElementCount(this.classheading)) > 0) ? await action.getText(this.classheading) : null,
            Assignments: ((await action.getElementCount(this.Assignments)) > 0) ? await action.getText(this.Assignments) : null,
            Createassignment: ((await action.getElementCount(this.Createassignment)) > 0) ? await action.getText(this.Createassignment) : null,
            PracticeExtracqa: ((await action.getElementCount(this.PracticeExtracqa)) > 0) ? await action.getText(this.PracticeExtracqa) : null,
            Unit1: ((await action.getElementCount(this.Unit1)) > 0) ? await action.getText(this.Unit1) : null,
            LessonA: ((await action.getElementCount(this.LessonA)) > 0) ? await action.getText(this.LessonA) : null,
            Next: ((await action.getElementCount(this.Next)) > 0) ? await action.getText(this.Next) : null,
            inputTag: ((await action.getElementCount(this.inputTag)) > 0) ? await action.getText(this.inputTag) : null,
            setDate: ((await action.getElementCount(this.setDate)) > 0) ? await action.getText(this.setDate) : null,
            selectStudent: ((await action.getElementCount(this.selectStudent)) > 0) ? await action.getText(this.selectStudent) : null,
            ViewSummary: ((await action.getElementCount(this.ViewSummary)) > 0) ? await action.getText(this.ViewSummary) : null,
            Assign: ((await action.getElementCount(this.Assign)) > 0) ? await action.getText(this.Assign) : null,
        }
        return obj;
    },

    click_classheading: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.classheading);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " classheading is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " classheading is NOT clicked", 'error');
        }
        return res;
    },

    click_Assignments: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.Assignments);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Assignments is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " Assignments is NOT clicked", 'error');
        }
        return res;
    },

    click_Createassignment: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.Createassignment);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Createassignment is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " Createassignment is NOT clicked", 'error');
        }
        return res;
    },

    click_PracticeExtracqa: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.PracticeExtracqa);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " PracticeExtracqa is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " PracticeExtracqa is NOT clicked", 'error');
        }
        return res;
    },

    click_Unit1: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.Unit1);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Unit1 is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " Unit1 is NOT clicked", 'error');
        }
        return res;
    },

    click_LessonA: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.LessonA);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " LessonA is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " LessonA is NOT clicked", 'error');
        }
        return res;
    },

    click_Next: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.Next);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Next is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " Next is NOT clicked", 'error');
        }
        return res;
    },

    click_inputTag: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.inputTag);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " inputTag is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " inputTag is NOT clicked", 'error');
        }
        await browser.pause(5000);
        return res;
    },

    click_setDate: async function () {
        await browser.pause(5000);
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.setDate);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " setDate is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " setDate is NOT clicked", 'error');
        }
        return res;
    },

    click_selectStudent: async function () {
        await browser.pause(5000);
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.selectStudent);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " selectStudent is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " selectStudent is NOT clicked", 'error');
        }
        return res;
    },

    click_ViewSummary: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.ViewSummary);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " ViewSummary is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " ViewSummary is NOT clicked", 'error');
        }
        return res;
    },

    click_Assign: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.Assign);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " Assign is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + " Assign is NOT clicked", 'error');
        }
        return res;
    },

    click_kebabIcon: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.kebabIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " kebabIcon is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res + " kebabIcon is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteAssignment: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.deleteAssignment);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteAssignment is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res + " deleteAssignment is NOT clicked", 'error');
        }
        return res;
    },

    click_yesDelete: async function () {
        await logger.logInto(await stackTrace.get());
        var res = await action.click(this.yesDelete);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " yesDelete is clicked");
        } else {
            await logger.logInto(await stackTrace.get(), res + " yesDelete is NOT clicked", 'error');
        }
        return res;
    }
}
