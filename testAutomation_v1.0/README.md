# QA Test Automation Framework

This framework supports testing web applications and Electron desktop apps using WebDriverIO.

## Desktop App Testing

To run tests against the Electron desktop app "Cambridge One Desktop App.exe":

1. Ensure the app is installed at `C:\Users\Dhruv\AppData\Local\Programs\CambridgeOne\Cambridge One Desktop App.exe`

2. Use the desktop scripts:
   - `npm run desktopApp_login_prod` - Run login tests on production desktop app
   - `npm run desktopApp_dashboard_prod` - Run dashboard tests
   - etc.

Note: Requires wdio-electron-service. If tests fail due to WDIO version (currently v7), upgrade to WDIO v8+ for compatibility.