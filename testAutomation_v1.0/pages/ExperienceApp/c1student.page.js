"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    bellIcon: selectorFile.css.ComproC1.c1student.bellIcon,
    assignmentNotification: selectorFile.css.ComproC1.c1student.assignmentNotification,
    routeToAssignment: selectorFile.css.ComproC1.c1student.routeToAssignment,
    openHamburgerIcon: selectorFile.css.ComproC1.c1student.openHamburgerIcon,
    assignmentBack: selectorFile.css.ComproC1.c1student.assignmentBack,
    closeSideBar: selectorFile.css.ComproC1.c1student.closeSideBar,
    goBack: selectorFile.css.ComproC1.c1student.goBack,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.bellIcon),
        };
        return res;
    },

    getData_c1assignmentstudent: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            bellIcon: ((await action.getElementCount(this.bellIcon)) > 0) ? await action.getText(this.bellIcon) : null,
            assignmentNotification: ((await action.getElementCount(this.assignmentNotification)) > 0) ? await action.getText(this.assignmentNotification) : null,
            routeToAssignment: ((await action.getElementCount(this.routeToAssignment)) > 0) ? await action.getText(this.routeToAssignment) : null,
            openHamburgerIcon: ((await action.getElementCount(this.openHamburgerIcon)) > 0) ? await action.getText(this.openHamburgerIcon) : null,
            assignmentBack: ((await action.getElementCount(this.assignmentBack)) > 0) ? await action.getText(this.assignmentBack) : null,
            closeSideBar: ((await action.getElementCount(this.closeSideBar)) > 0) ? await action.getText(this.closeSideBar) : null,
            goBack: ((await action.getElementCount(this.goBack)) > 0) ? await action.getText(this.goBack) : null,
        }
        return obj;
    },


    click_bellIcon: async function () {
        await browser.pause(5000); // Let UI catch up
        await action.waitForDisplayed(this.bellIcon, undefined);
        console.log("clicked on belli con")
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bellIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bellIcon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bellIcon is NOT clicked", 'error');
        }
        return res;
    },

    click_assignmentNotification: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.assignmentNotification);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " assignmentNotification is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "assignmentNotification is NOT clicked", 'error');
        }
        return res;
    },

    click_routeToAssignment: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.routeToAssignment);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " routeToAssignment is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "routeToAssignment is NOT clicked", 'error');
        }
        return res;
    },

    click_openHamburgerIcon: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.openHamburgerIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " openHamburgerIcon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "openHamburgerIcon is NOT clicked", 'error');
        }
        return res;
    },

    click_assignmentBack: async function () {
        console.log("goin gto lcik on < btn")
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.assignmentBack);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " assignmentBack is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "assignmentBack is NOT clicked", 'error');
        }
        return res;
    },

    click_closeSideBar: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeSideBar);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeSideBar is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeSideBar is NOT clicked", 'error');
        }
        return res;
    },

    click_goBack: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.goBack);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " goBack is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "goBack is NOT clicked", 'error');
        }
        return res;
    },

}

