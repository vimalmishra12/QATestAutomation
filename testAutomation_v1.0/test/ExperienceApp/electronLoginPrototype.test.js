"use strict";

const { remote } = require('webdriverio');
const { spawn } = require('child_process');
const path = require('path');
const login = require("../../pages/ExperienceApp/login.page.js");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

function log(step, data = "") {
    console.log(`[${new Date().toISOString()}] ${step}`, data || "");
}

module.exports = {
    PROTO_ELEC_LOGIN: async function () {

        log("START: Electron Prototype Login Flow");

        try {
            log("STEP 1: Locating Login Button");

            const loginBtn = await $('button.btn-purple.login-btn');

            log("Login button found?", !!loginBtn);

            await loginBtn.waitForExist({ timeout: 15000 });
            await loginBtn.waitForDisplayed({ timeout: 15000 });

            log("Login button is visible");

            log("STEP 2: Injecting URL + Token Hooks");

            await browser.execute(() => {
                const originalAssign = window.location.assign;

                window.location.assign = function (url) {
                    if (url && url.includes('micro-nemo')) {
                        window.__capturedLoginUrl = url;
                        console.log("Captured URL:", url);
                    }
                    return originalAssign.call(this, url);
                };

                const origSetItem = localStorage.setItem.bind(localStorage);
                localStorage.setItem = function (key, value) {
                    if (
                        key === 'desktop-login-token' ||
                        (typeof value === 'string' && value.length > 20)
                    ) {
                        window.__capturedToken = value;
                        console.log("Captured Token:", value);
                    }
                    return origSetItem(key, value);
                };
            });

            log("Hooks injected successfully");

            log("STEP 3: Clicking Login Button");
            await loginBtn.click();

            await browser.pause(2000);

            log("STEP 4: Extracting captured data");

            let capturedUrl = await browser.execute(() => {
                return {
                    url: window.__capturedLoginUrl,
                    token: window.__capturedToken,
                    lsToken: localStorage.getItem('desktop-login-token')
                };
            });

            log("Captured Data:", capturedUrl);

            let finalCaptured = capturedUrl.url || capturedUrl.token || capturedUrl.lsToken;

            // OS fallback
            if (!finalCaptured || !finalCaptured.includes('http')) {
                log("STEP 5: OS-level fallback triggered");

                try {
                    const { stdout } = await exec(
                        `powershell -Command "Get-WmiObject Win32_Process | Where-Object { $_.Name -eq 'chrome.exe' -and $_.CommandLine -like '*micro-nemo*' } | Select-Object -ExpandProperty CommandLine"`
                    );

                    log("Raw OS output:", stdout);

                    const urlMatch = stdout.match(/(https:\/\/micro-nemo\.comprodls\.com\/login\?u=[^\s"&]+)/);

                    if (urlMatch) {
                        finalCaptured = urlMatch[1];
                        log("Captured from Chrome process:", finalCaptured);
                    }

                } catch (e) {
                    log("OS capture failed", e.message);
                }
            }

            let targetUrl;

            if (finalCaptured && finalCaptured.includes('http')) {
                targetUrl = finalCaptured;
            } else if (finalCaptured) {
                targetUrl = `https://micro-nemo.comprodls.com/login?u=${finalCaptured}`;
            } else {
                log("WARNING: Using fallback static token");
                targetUrl = "https://micro-nemo.comprodls.com/login?u=FQ6MObWpj1T-MhiJzaCVUe84BwQ0UPDr";
            }

            log("Final URL:", targetUrl);

            // --- START WEB SESSION ---
            log("STEP 6: Starting ChromeDriver");

            const driverPath = path.join(__dirname, '../../drivers/chromedriver-146.exe');
            const driverProcess = spawn(driverPath, ['--port=9516']);

            driverProcess.stdout.on('data', data => log("Driver STDOUT:", data.toString()));
            driverProcess.stderr.on('data', data => log("Driver STDERR:", data.toString()));

            await new Promise(r => setTimeout(r, 2000));

            let webBrowser;

            try {
                log("STEP 7: Creating WebDriver session");

                webBrowser = await remote({
                    hostname: 'localhost',
                    port: 9516,
                    path: '/',
                    capabilities: {
                        browserName: 'chrome',
                        'goog:chromeOptions': {
                            args: ['--no-sandbox', '--start-maximized'],
                        }
                    }
                });

                log("Web session created");

                await webBrowser.url(targetUrl);
                log("Navigated to URL");

                log("Current URL:", await webBrowser.getUrl());

                const landmark = await webBrowser.$('#onboarding-header-login-btn');
                await landmark.waitForDisplayed({ timeout: 20000 });

                log("Login page verified");

                // Swap context
                const originalBrowser = global.browser;
                const original$ = global.$;
                const original$$ = global.$$;

                global.browser = webBrowser;
                global.$ = webBrowser.$.bind(webBrowser);
                global.$$ = webBrowser.$$.bind(webBrowser);

                try {
                    log("STEP 8: Performing Login");

                    await login.set_userName_tbox('teacher12june__@mailsac.com');
                    await login.set_password_tbox('Compro11');
                    await login.click_login_btn();

                    log("Login submitted");

                    const deepLinkBtn = await $('a[qid="home-2"], .btn-purple.login-btn');
                    await deepLinkBtn.waitForDisplayed({ timeout: 45000 });

                    log("Deep link button found");

                    await deepLinkBtn.click();
                    log("Deep link clicked");

                    await browser.pause(3000);

                    log("Post-login flow complete");

                } catch (innerErr) {
                    log("Login flow error", innerErr);
                } finally {
                    global.browser = originalBrowser;
                    global.$ = original$;
                    global.$$ = original$$;
                }

            } catch (e) {
                log("Web session error", e);
            } finally {
                if (webBrowser) {
                    log("Closing browser session");
                    await webBrowser.deleteSession();
                }
                driverProcess.kill();
                log("Driver stopped");
            }

        } catch (err) {
            log("FATAL ERROR", err);
        }

        log("END: Back to Electron");
        await browser.pause(5000);
    }
};