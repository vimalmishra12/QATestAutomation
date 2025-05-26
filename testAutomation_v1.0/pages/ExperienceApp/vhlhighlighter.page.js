"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    highlighterIcon: selectorFile.vhlhighlighter.highlighterIcon,
    eraserButton: selectorFile.vhlhighlighter.eraserButton,
    highlighterBtn: selectorFile.vhlhighlighter.highlighterBtn,
    colorPicker: selectorFile.vhlhighlighter.colorPicker,
    closeIcon: selectorFile.vhlhighlighter.closeIcon,
    drawingToolPresentation: selectorFile.vhlhighlighter.drawingToolPresentation,
    removeAllButton: selectorFile.vhlhighlighter.removeAllButton,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.highlighterIcon),
        };
        return res;
    },

    vhlhighlighter_Data: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            highlighterIcon: ((await action.getElementCount(this.highlighterIcon)) > 0) ? await action.getText(this.highlighterIcon) : null,
            eraserButton: ((await action.getElementCount(this.eraserButton)) > 0) ? await action.getText(this.eraserButton) : null,
            highlighterBtn: ((await action.getElementCount(this.highlighterBtn)) > 0) ? await action.getText(this.highlighterBtn) : null,
            colorPicker: ((await action.getElementCount(this.colorPicker)) > 0) ? await action.getText(this.colorPicker) : null,
            closeIcon: ((await action.getElementCount(this.closeIcon)) > 0) ? await action.getText(this.closeIcon) : null,
        }
        return obj;
    },


    click_highlighterIcon: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.highlighterIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " highlighterIcon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "highlighterIcon is NOT clicked", 'error');
        }
        return res;
    },

    click_eraserButton: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.eraserButton);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " eraserButton is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "eraserButton is NOT clicked", 'error');
        }
        return res;
    },
    

    click_highlighterBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.highlighterBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " highlighterBtn is clicked");
            await action.dragAndDropWithPath(this.drawingToolPresentation,
            100, 100,
            300, 300
        )
        await browser.pause(500);
    }  else {
            await logger.logInto(await stackTrace.get(), res + "highlighterBtn is NOT clicked", 'error');
        }
        // await action.dragAndDropWithPath(this.drawingToolPresentation,
        // 100,100,
        // 300,300 ,
        // [
        // { x: 100, y: 150 },
        // { x: 300, y: 200 }
        // ]
        // )
        return res;
},





    click_closeIcon: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeIcon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeIcon is NOT clicked", 'error');
        }
        return res;
    },
        click_removeAllButton: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.removeAllButton);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeAllButton is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeAllButton is NOT clicked", 'error');
        }
        return res;
    },


}

