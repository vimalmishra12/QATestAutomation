"use strict";

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
        // 1. Try to see if there is a direct href attribute
        const hrefAttr = await loginBtn.getAttribute('href');
        console.log("Captured href attribute directly from button:", hrefAttr);

        // 2. Override window.open just in case clicking it fires a JS redirect to a new window
        await browser.execute(function() {
            window._capturedUrl = null;
            const originalOpen = window.open;
            window.open = function(url, target, features) {
                window._capturedUrl = url; // Save the URL!
                return originalOpen.apply(this, arguments);
            };
        });

        console.log("=== Clicking Login Button ===");
        await loginBtn.click();
        
        // Pause briefly to let the JS execute
        await browser.pause(2000);

        // Retrieve the captured URL from the browser context
        const redirectedUrl = await browser.execute(function() {
            return window._capturedUrl;
        });

        if (redirectedUrl) {
            console.log("!!! Successfully Captured URL via window.open !!! =>", redirectedUrl);
        } else {
            console.log("No URL captured via window.open. It might be using a different method like shell.openExternal");
        }
        
        console.log("=== Click completed ===");
        await browser.pause(3000);
    }
};
