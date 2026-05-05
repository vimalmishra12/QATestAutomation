"use strict";

const { remote } = require('webdriverio');
const { spawn } = require('child_process');
const path = require('path');
const login = require("../../pages/ExperienceApp/login.page.js");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// ─────────────────────────────────────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const POST_LOGIN_SELECTOR = '[qid="user-avatar"], .home-dashboard, #user-profile';
const MICRO_NEMO_HOST    = 'micro-nemo.comprodls.com';
const CHROMEDRIVER_PORT  = 9516;

// ─────────────────────────────────────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function log(step, data = "") {
    console.log(`[${new Date().toISOString()}] ${step}`, data || "");
}

async function waitUntil(fn, { timeout = 10000, interval = 500, label = "condition" } = {}) {
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) {
        try { if (await fn()) return true; } catch (_) {}
        await new Promise(r => setTimeout(r, interval));
    }
    log(`TIMEOUT waiting for: ${label}`);
    return false;
}

async function sendOsKeys(keys, delayMs = 300) {
    const escaped = keys.replace(/'/g, "\\'");
    await exec(
        `powershell -Command "$wshell = New-Object -ComObject wscript.shell; ` +
        `$wshell.SendKeys('${escaped}'); Start-Sleep -Milliseconds ${delayMs}"`
    );
}

async function confirmChromeProtocolDialog({ maxAttempts = 3, waitBetween = 1000 } = {}) {
    log("Attempting to confirm Chrome protocol dialog…");
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const psCommand = `
                Add-Type -AssemblyName System.Windows.Forms;
                Add-Type -AssemblyName Microsoft.VisualBasic;
                
                $chromes = Get-Process chrome | Where-Object { $_.MainWindowTitle -ne '' };
                if (-not $chromes) { 
                    Write-Output 'NO_CHROME_WINDOWS'; 
                    exit; 
                }
                
                # Find the most likely window (containing 'Cambridge One' or 'Login')
                $target = $chromes | Where-Object { $_.MainWindowTitle -like '*Cambridge One*' -or $_.MainWindowTitle -like '*Login*' } | Select-Object -First 1;
                if (-not $target) { 
                    $target = $chromes | Select-Object -First 1; 
                }
                
                Write-Output "FOUND_WINDOW: $($target.MainWindowTitle) (ID: $($target.Id))";
                
                # Activate the window
                try {
                    [Microsoft.VisualBasic.Interaction]::AppActivate($target.Id);
                } catch {
                    Write-Output "ACTIVATE_FAILED: $($_.Exception.Message)";
                }
                Start-Sleep -Milliseconds 1000;
                
                # Protocol dialogs often have focus on "Cancel" or "Always allow" checkbox.
                # Common sequences:
                # 1. TAB, TAB, ENTER (Checkbox -> Open -> Cancel? depends on version)
                # 2. LEFT, ENTER (if "Open" is on the left)
                # 3. ENTER (if "Open" is default)
                
                # We will try TAB -> TAB -> ENTER as the primary sequence
                [System.Windows.Forms.SendKeys]::SendWait('{TAB}');
                Start-Sleep -Milliseconds 200;
                [System.Windows.Forms.SendKeys]::SendWait('{TAB}');
                Start-Sleep -Milliseconds 200;
                [System.Windows.Forms.SendKeys]::SendWait('{ENTER}');
                Start-Sleep -Milliseconds 500;
                
                Write-Output 'KEYS_SENT';
            `;
            
            const { stdout } = await exec(`powershell -NoProfile -Command "${psCommand.replace(/\r?\n/g, '; ').replace(/"/g, '\\"')}"`);
            const lines = stdout.split('\n').map(l => l.trim()).filter(l => l);
            
            log(`  Attempt ${attempt} output:`, lines.join(' | '));
            
            if (stdout.includes('KEYS_SENT')) {
                log(`  Keys sent to window: ${lines.find(l => l.startsWith('FOUND_WINDOW')) || 'unknown'}`);
                return true;
            }
        } catch (e) {
            log(`  Attempt ${attempt} error:`, e.message);
        }
        await new Promise(r => setTimeout(r, waitBetween));
    }
    return false;
}


async function switchToLoggedInElectronWindow() {
    log("Waiting for new Electron window handle…");
    await waitUntil(async () => {
        const h = await browser.getWindowHandles();
        log(`  Handles: ${h.length}`);
        return h.length >= 2;
    }, { timeout: 15000, interval: 1000, label: "second Electron window" });

    const handles = await browser.getWindowHandles();
    log(`Final handles: ${handles.length}`);
    
    for (let i = 0; i < handles.length; i++) {
        await browser.switchToWindow(handles[i]);
        const title = await browser.getTitle();
        const url = await browser.getUrl();
        log(`  Handle[${i}]: "${title}" | URL: ${url}`);
    }

    const targetHandle = handles[handles.length - 1];
    await browser.switchToWindow(targetHandle);
    const finalUrl = await browser.getUrl();
    const isElectron = finalUrl.startsWith('file://');
    log(`Switched to handle[${handles.length - 1}] ✓ — Context: ${isElectron ? "ELECTRON (Local File)" : "WEB (Remote URL)"}`);
}

async function verifyElectronLoginSuccess({ timeout = 20000 } = {}) {
    try {
        const collapseBtn = await $('[qid="tDashboard-9"]');
        await collapseBtn.waitForDisplayed({ timeout });
        
        await collapseBtn.click();
        console.log("Clicked Collapse all ✅");

        return true;
    } catch (e) {
        console.log("Element not found or not clickable ❌", e.message);
        return false;
    }
}

function extractUToken(url) {
    if (!url) return null;
    const match = url.match(/[?&]u=([^&\s#]+)/);
    return match ? match[1] : null;
}

// ─────────────────────────────────────────────────────────────────────────────
//  KEY FIX: Capture the u= token from Chrome's remote debugging API
//
//  WHY the JS hooks failed:
//    Electron's Login button calls Electron's shell.openExternal(url) via IPC.
//    This sends the URL directly to the OS to open in the default browser.
//    It NEVER touches window.location, window.open, or localStorage in the
//    renderer process — so all JS hooks return null.
//
//  THE SOLUTION:
//    After clicking Login, Chrome opens with the micro-nemo URL.
//    Chrome exposes its open tabs via its remote debugging HTTP API:
//      http://localhost:PORT/json
//    We attach to Chrome's existing instance via that API, read the tab URL,
//    and extract the u= token from it — then reuse that token.
//
//  HOW:
//    1. Find Chrome's remote debugging port from its process args (--remote-debugging-port)
//    2. Fetch http://localhost:PORT/json to list open tabs
//    3. Find the tab with micro-nemo URL
//    4. Extract u= token from that URL
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Find the remote debugging port of the Chrome instance that Electron opened.
 * Chrome is launched by Electron's shell.openExternal — it may or may not have
 * --remote-debugging-port in its args.
 *
 * Fallback: use PowerShell to read Chrome's command line and find the port.
 */
async function getChromeDebugPort() {
    log("Scanning for Chrome remote debugging port…");
    try {
        const { stdout } = await exec(
            `powershell -Command "Get-WmiObject Win32_Process | ` +
            `Where-Object { $_.Name -eq 'chrome.exe' -and $_.CommandLine -like '*remote-debugging-port*' } | ` +
            `Select-Object -ExpandProperty CommandLine"`
        );
        const match = stdout.match(/--remote-debugging-port=(\d+)/);
        if (match) {
            log(`Found Chrome debug port: ${match[1]}`);
            return parseInt(match[1], 10);
        }
    } catch (e) {
        log("Port scan error:", e.message);
    }
    return null;
}

/**
 * Use PowerShell to read Chrome's open URLs from its process command line.
 * This works even without remote debugging — the URL is in the process args
 * when Chrome first opens.
 *
 * Returns the full URL if found, null otherwise.
 */
async function getChromeUrlFromProcessArgs() {
    log("Reading Chrome process command line for micro-nemo URL…");
    try {
        const { stdout } = await exec(
            `powershell -Command "Get-WmiObject Win32_Process | ` +
            `Where-Object { $_.Name -eq 'chrome.exe' -and $_.CommandLine -like '*${MICRO_NEMO_HOST}*' } | ` +
            `Select-Object -ExpandProperty CommandLine | Select-Object -First 1"`
        );
        log("Chrome process raw output:", stdout.trim().substring(0, 300));

        // Extract the full micro-nemo URL from the command line
        const match = stdout.match(/(https?:\/\/micro-nemo\.comprodls\.com[^\s"']+)/);
        if (match) {
            log("Found micro-nemo URL in Chrome process:", match[1]);
            return match[1];
        }
    } catch (e) {
        log("Chrome process URL scan error:", e.message);
    }
    return null;
}

/**
 * Main token capture strategy:
 *
 * After Electron's Login button fires shell.openExternal(url), Chrome opens
 * with the micro-nemo URL. We poll Chrome's process list until that URL
 * appears in a chrome.exe process command line, then extract the u= token.
 *
 * This is the only reliable way to get the token since shell.openExternal
 * bypasses all JS hooks in the Electron renderer.
 */
async function captureUTokenFromChrome({ timeout = 10000 } = {}) {
    log("Polling Chrome process list for micro-nemo URL…");
    let capturedUrl = null;

    await waitUntil(async () => {
        capturedUrl = await getChromeUrlFromProcessArgs();
        return !!capturedUrl;
    }, { timeout, interval: 500, label: "Chrome process with micro-nemo URL" });

    if (!capturedUrl) return null;

    const token = extractUToken(capturedUrl);
    log(`Captured URL: ${capturedUrl}`);
    log(`Extracted u= token: ${token}`);
    return token;
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
    PROTO_ELEC_LOGIN: async function () {

        log("════════════════════════════════════════════════════");
        log("  START: Electron Prototype Login Flow");
        log("  ⚠  JWT TTL ≈ 5 min — move fast!");
        log("════════════════════════════════════════════════════");

        // ── PHASE 1: Find Login button ────────────────────────────────────────
        log("PHASE 1 ▶ Locate Login Button in Electron");
        
        const initialHandles = await browser.getWindowHandles();
        log(`  Initial Handles: ${initialHandles.length}`);
        for (let i = 0; i < initialHandles.length; i++) {
            await browser.switchToWindow(initialHandles[i]);
            const title = await browser.getTitle();
            const url = await browser.getUrl();
            log(`  Handle[${i}]: "${title}" | URL: ${url}`);
            if (title !== "DevTools" && title !== "" && !url.startsWith("devtools://")) {
                log(`  Found potential main window at Handle[${i}]`);
                // Stay on this handle
                break;
            }
        }

        // Check if already logged in
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('dashboard') || currentUrl.includes('teacher-dashboard')) {
            log("⚠ Already logged in! Skipping to Phase 9/10…");
            // Skip to verification
            return await this.VERIFY_ONLY();
        }

        const loginBtn = await $('button.btn-purple.login-btn');
        await loginBtn.waitForExist({ timeout: 15000 });
        await loginBtn.waitForDisplayed({ timeout: 15000 });
        log("Login button visible ✓");

        // ── PHASE 2: Click Login — Electron calls shell.openExternal(url) ─────
        //
        // Electron's Login button does NOT use window.location or window.open.
        // It calls shell.openExternal(url) via Electron IPC which sends the URL
        // directly to the OS. Chrome opens with that URL at the OS level.
        // JS hooks in the renderer cannot see this call at all.
        //
        // We click the button and then read the URL from Chrome's process list.
        // ─────────────────────────────────────────────────────────────────────
        log("PHASE 2 ▶ Clicking Login button");
        log("  (Electron uses shell.openExternal — JS hooks cannot capture this)");
        log("  (Will read u= token from Chrome process args instead)");

        await loginBtn.click();
        log("Login button clicked ✓ — Chrome should open now");

        // ── PHASE 3: Capture the u= token from the Chrome process ─────────────
        log("PHASE 3 ▶ Capturing u= token from Chrome process args");

        // Give Chrome a moment to launch and appear in the process list
        await browser.pause(2000);

        let originalUToken = await captureUTokenFromChrome({ timeout: 10000 });

        if (!originalUToken) {
            log("⚠ Could not capture u= token from Chrome process.");
            log("  Trying alternative: reading from Electron's localStorage…");

            // Last attempt: maybe the app wrote it to localStorage before opening Chrome
            try {
                const lsToken = await browser.execute(() =>
                    localStorage.getItem('desktop-login-token')
                );
                if (lsToken) {
                    originalUToken = lsToken;
                    log("  Found in localStorage:", originalUToken);
                }
            } catch (e) {
                log("  localStorage read failed:", e.message);
            }
        }

        if (!originalUToken) {
            log("FATAL: Could not capture u= token from any source.");
            log("  This means Chrome opened but the URL wasn't in its process args.");
            log("  Possible reason: Chrome was already running, URL opened as a new tab.");
            log("  Trying to read from an already-running Chrome via netstat…");

            // Try to find an already-running Chrome debug port
            const debugPort = await getChromeDebugPort();
            if (debugPort) {
                log(`  Chrome debug port found: ${debugPort}`);
                log(`  Fetch http://localhost:${debugPort}/json to see open tabs`);
                try {
                    const http = require('http');
                    const tabsJson = await new Promise((resolve, reject) => {
                        http.get(`http://localhost:${debugPort}/json`, (res) => {
                            let data = '';
                            res.on('data', chunk => data += chunk);
                            res.on('end', () => resolve(data));
                        }).on('error', reject);
                    });
                    const tabs = JSON.parse(tabsJson);
                    log(`  Open Chrome tabs: ${tabs.length}`);
                    const microNemoTab = tabs.find(t => t.url && t.url.includes(MICRO_NEMO_HOST));
                    if (microNemoTab) {
                        log(`  Found micro-nemo tab: ${microNemoTab.url}`);
                        originalUToken = extractUToken(microNemoTab.url);
                        log(`  Extracted token: ${originalUToken}`);
                    }
                } catch (e) {
                    log("  Chrome debug API fetch failed:", e.message);
                }
            }
        }

        if (!originalUToken) {
            throw new Error(
                "Cannot proceed: u= token not found.\n" +
                "Electron's shell.openExternal opened Chrome but the URL was not captured.\n" +
                "If Chrome was already open, the URL opened as a background tab with no process args.\n" +
                "Solution: close Chrome before running this test, or enable Chrome remote debugging."
            );
        }

        log(`✓ Original u= token captured: ${originalUToken}`);

        // Build the target URL for our Chrome WebDriver session.
        // Use /desktop-login?u=ORIGINAL_TOKEN — same path the app uses natively.
        // This preserves the token so the deep-link fires with the same u= value
        // that Electron already registered.
        const targetUrl = `https://micro-nemo.comprodls.com/desktop-login?u=${originalUToken}`;
        log(`Chrome target URL: ${targetUrl}`);

        // ── PHASE 4: Close the Chrome window Electron opened ──────────────────
        //
        // Electron opened Chrome with the URL. We need to close that tab/window
        // because we will drive the login flow ourselves via ChromeDriver.
        // If we leave it open, it may consume the u= token before our session does.
        // ─────────────────────────────────────────────────────────────────────
        log("PHASE 4 ▶ Closing Chrome window opened by Electron");
        try {
            await exec(
                `powershell -Command "Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force"`
            );
            log("Chrome process closed ✓");
            await browser.pause(1000);
        } catch (e) {
            log("Could not close Chrome (may not have been open):", e.message);
        }

        // ── PHASE 5: Start ChromeDriver ───────────────────────────────────────
        log("PHASE 5 ▶ Starting ChromeDriver");
        const driverPath = path.join(__dirname, '../../drivers/chromedriver-146.exe');
        const driverProcess = spawn(driverPath, [`--port=${CHROMEDRIVER_PORT}`]);
        driverProcess.stdout.on('data', d => log("  Driver:", d.toString().trim()));
        driverProcess.stderr.on('data', d => log("  Driver ERR:", d.toString().trim()));
        await new Promise(r => setTimeout(r, 1500));

        let webBrowser;

        try {
            log("PHASE 6 ▶ Creating Chrome WebDriver session");

            webBrowser = await remote({
                hostname: 'localhost',
                port: CHROMEDRIVER_PORT,
                path: '/',
                capabilities: {
                    browserName: 'chrome',
                    'goog:chromeOptions': {
                        args: [
                            '--no-sandbox',
                            '--start-maximized',
                            '--disable-popup-blocking',
                        ],
                        prefs: {
                            'protocol_handler.excluded_schemes': {
                                'cambridgeone-app': false,
                                'cambridgeone': false
                            },
                            'protocol_handler.allowed_origin_protocol_pairs': {
                                'https://micro-nemo.comprodls.com': {
                                    'cambridgeone-app': true,
                                    'cambridgeone': true
                                }
                            }
                        }
                    }
                }
            });

            log("Chrome session created ✓");
            await webBrowser.url(targetUrl);

            const currentUrl = await webBrowser.getUrl();
            log("Navigated to:", currentUrl);

            // Sanity check: confirm the u= token is still the same
            const tokenInUrl = extractUToken(currentUrl);
            if (tokenInUrl && tokenInUrl !== originalUToken) {
                log(`⚠ WARNING: u= token changed during navigation!`);
                log(`  Expected: ${originalUToken}`);
                log(`  Got:      ${tokenInUrl}`);
                log("  This will cause login to fail. Check if /desktop-login redirects.");
            } else {
                log(`u= token preserved ✓ (${tokenInUrl || 'not in URL — may be in session'})`);
            }

            // Wait for login form
            const loginHeader = await webBrowser.$('#onboarding-header-login-btn');
            await loginHeader.waitForDisplayed({ timeout: 20000 });
            log("Login page confirmed ✓");

            // ── PHASE 7: Swap context → login in Chrome ───────────────────────
            log("PHASE 7 ▶ Swapping to Chrome context");

            const originalBrowser = global.browser;
            const original$       = global.$;
            const original$$      = global.$$;

            global.browser = webBrowser;
            if (originalBrowser?.config) global.browser.config = originalBrowser.config;
            global.$  = webBrowser.$.bind(webBrowser);
            global.$$ = webBrowser.$$.bind(webBrowser);

            try {
                log("Submitting credentials…");
                await $(login.userName_tbox).waitForDisplayed({ timeout: 15000 });
                await login.set_userName_tbox('teacher12june__@mailsac.com');
                await login.set_password_tbox('Compro11');
                await login.click_login_btn();
                log("Credentials submitted ✓");

                const deepLinkBtn = await $('a[qid="home-2"], .btn-purple.login-btn');
                await deepLinkBtn.waitForDisplayed({ timeout: 30000 });
                log("Deep link button found ✓");

                // Log current URL — u= token must still match originalUToken
                const urlBeforeClick = await browser.getUrl();
                log(`URL before deep-link click: ${urlBeforeClick}`);
                log(`u= in URL: ${extractUToken(urlBeforeClick)}`);

                const t0 = Date.now();
                await deepLinkBtn.click();
                log("Deep link clicked ✓ — waiting for OS dialog…");
                // browser.pause(300000);
                await browser.pause(12000);

                // ── PHASE 8: Confirm protocol dialog ─────────────────────────
                log("PHASE 8 ▶ Confirming Chrome protocol dialog");
                const dialogConfirmed = await confirmChromeProtocolDialog({
                    maxAttempts: 3,
                    waitBetween: 800,
                });
                log(`Dialog ${dialogConfirmed ? "confirmed ✓" : "uncertain ⚠"} — ${((Date.now() - t0) / 1000).toFixed(1)}s`);


            } catch (loginErr) {
                log("ERROR in login flow:", loginErr.message || loginErr);
                throw loginErr;
            } finally {
                log("Restoring Electron browser context");
                global.browser = originalBrowser;
                global.$  = original$;
                global.$$ = original$$;
            }

        } catch (sessionErr) {
            log("Chrome session error:", sessionErr.message || sessionErr);
        } finally {
            if (webBrowser) {
                log("Closing Chrome WebDriver session");
                await webBrowser.deleteSession().catch(e => log("deleteSession error:", e.message));
            }
            driverProcess.kill();
            log("ChromeDriver stopped ✓");
        }

        await this.VERIFY_ONLY();
    },

    VERIFY_ONLY: async function () {
        // ── PHASE 9: Switch to logged-in Electron window ──────────────────────
        log("PHASE 9 ▶ Switching to logged-in Electron window");
        try {
            await switchToLoggedInElectronWindow();
        } catch (winErr) {
            log("Window switch error:", winErr.message || winErr);      

        }

        // ── PHASE 10: Verify logged-in UI ─────────────────────────────────────
        log("PHASE 10 ▶ Verifying logged-in UI in Electron");
        const uiOk = await verifyElectronLoginSuccess({ timeout: 20000 });

        if (uiOk) {
            log("════ LOGIN FLOW COMPLETE — User authenticated in Electron ✓ ════");
        } else {
            log("════ LOGIN FLOW ENDED — UI check failed. See warnings above. ════");
            throw new Error("Electron Login Verification Failed: UI dashboard not detected.");
        }

        await browser.pause(300000); // debug only
    }
};