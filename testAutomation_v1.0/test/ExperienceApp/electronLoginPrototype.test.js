"use strict";

const { remote } = require('webdriverio');
const { spawn } = require('child_process');
const path = require('path');

module.exports = {
    PROTO_ELEC_LOGIN: async function () {
        console.log("=== Electron Prototype: Locating Login Button ===");
        
        // Find the button by its class. We use standard CSS selectors.
        const loginBtn = await $('button.btn-purple.login-btn');
        
        // Wait for it to exist and be visible
        await loginBtn.waitForExist({ timeout: 15000 });
        await loginBtn.waitForDisplayed({ timeout: 15000 });

        console.log("=== Button Found! Attempting to capture URL ===");
        
        // --- URL CAPTURE PROTOTYPE ---
        await browser.execute(function() {
            window._capturedUrl = null;
            window._ipcLogs = [];
            
            // 1. Standard window.open intercept
            const originalOpen = window.open;
            window.open = function(url) {
                window._capturedUrl = url;
                window._ipcLogs.push({ method: 'window.open', url });
                return originalOpen.apply(this, arguments);
            };

            // 2. Intercept require('electron').shell.openExternal
            try {
                if (typeof require !== 'undefined') {
                    const electron = require('electron');
                    if (electron && electron.shell && electron.shell.openExternal) {
                        const originalOpenExternal = electron.shell.openExternal;
                        electron.shell.openExternal = function(url) {
                            window._capturedUrl = url;
                            window._ipcLogs.push({ method: 'shell.openExternal', url });
                            return originalOpenExternal.apply(this, arguments);
                        };
                    }
                    if (electron && electron.ipcRenderer && electron.ipcRenderer.send) {
                        const originalSend = electron.ipcRenderer.send;
                        electron.ipcRenderer.send = function(channel, ...args) {
                            window._ipcLogs.push({ method: 'ipcRenderer.send', channel, args });
                            try {
                                const strArgs = JSON.stringify(args);
                                const urlMatch = strArgs.match(/https?:\/\/[^"'\s]+/);
                                if (urlMatch) window._capturedUrl = urlMatch[0];
                            } catch(e) {}
                            return originalSend.apply(this, [channel, ...args]);
                        };
                    }
                }
            } catch(e) {
                window._ipcLogs.push({ method: 'require_error', error: e.toString() });
            }

            // 3. Intercept global click events to catch dynamically created <a> tags
            document.addEventListener('click', function(e) {
                let target = e.target;
                while (target && target !== document) {
                    if (target.tagName === 'A' && target.href && target.href.startsWith('http')) {
                        window._capturedUrl = target.href;
                        window._ipcLogs.push({ method: 'anchor_click', url: target.href });
                    }
                    target = target.parentNode;
                }
            }, true); // use capture phase
        });

        console.log("=== Clicking Login Button ===");
        await loginBtn.click();
        
        // Pause to let the action occur
        await browser.pause(2000);

        // Retrieve the captured URL and logs
        const { redirectedUrl, ipcLogs } = await browser.execute(function() {
            return {
                redirectedUrl: window._capturedUrl,
                ipcLogs: window._ipcLogs
            };
        });

        console.log("Captured URL from Bridge:", redirectedUrl);
        console.log("Detailed IPC Logs:", JSON.stringify(ipcLogs, null, 2));

        if (redirectedUrl) {
            console.log("!!! Successfully Captured URL via window.open !!! =>", redirectedUrl);
            
            // --- START WEB BROWSER SESSION ---
            console.log("=== Launching External Web Browser ===");
            
            // 1. Start the chromedriver for the web browser
            const driverPath = path.join(__dirname, '../../drivers/chromedriver-146.exe');
            const driverProcess = spawn(driverPath, ['--port=9516']);
            
            // Wait a bit for chromedriver to start up
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            let webBrowser;
            try {
                // 2. Connect to the local chromedriver we just started
                webBrowser = await remote({
                    hostname: 'localhost',
                    port: 9516,
                    path: '/',
                    capabilities: {
                        browserName: 'chrome',
                        'goog:chromeOptions': {
                            args: ['--disable-infobars', '--no-sandbox']
                        }
                    },
                    logLevel: 'error'
                });
                
                // 3. Navigate to the captured URL
                console.log("Web Browser: Navigating to", redirectedUrl);
                await webBrowser.url(redirectedUrl);
                
                // 4. Perform Web Operations
                console.log("Web Browser: Entering credentials...");
                
                const usernameInput = await webBrowser.$('input[name="username"]');
                await usernameInput.waitForDisplayed({ timeout: 15000 });
                await usernameInput.setValue('teacher12june__@mailsac.com');
                
                const passwordInput = await webBrowser.$('input[name="password"]');
                await passwordInput.setValue('Compro11');
                
                const submitBtn = await webBrowser.$('input[type="submit"]');
                console.log("Web Browser: Clicking Submit...");
                await submitBtn.click();
                
                console.log("Web Browser: Waiting for redirect and deep link button...");
                const deepLinkBtn = await webBrowser.$('a[qid="home-2"].btn-started');
                await deepLinkBtn.waitForDisplayed({ timeout: 30000 });
                
                console.log("Web Browser: Clicking Open Cambridge One Desktop App...");
                await deepLinkBtn.click();
                
                // Wait to ensure the deep link protocol is triggered
                await webBrowser.pause(3000);
                
            } catch (e) {
                console.error("Error during Web Browser session:", e);
            } finally {
                // 5. Clean up the web browser session
                if (webBrowser) {
                    console.log("=== Closing External Web Browser ===");
                    await webBrowser.deleteSession();
                }
                // Kill the chromedriver process
                driverProcess.kill();
            }
            
        } else {
            console.log("No URL captured via window.open. It might be using a different method like shell.openExternal");
        }
        
        console.log("=== Returning control to Electron Session ===");
        // The rest of your Electron tests can continue here on the 'browser' object!
        await browser.pause(5000);
    }
};
