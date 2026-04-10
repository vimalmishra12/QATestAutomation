# Web & Electron Testing Setup

This project supports both web browser testing and Electron app testing with dynamic configuration.

## Configuration

### Electron App Path

The Electron app path is configured in `env.json` under the `ExperienceApp` section:

```json
{
  "ExperienceApp": {
    "electronAppPath": "C:\\Users\\{USERNAME}\\AppData\\Local\\Programs\\CambridgeOne\\Cambridge One Desktop App.exe",
    "chromedriver": {
      "webVersion": "132.0.0",
      "electronVersion": "126.0.0"
    }
  }
}
```

The `{USERNAME}` placeholder is automatically replaced with the current system username at runtime.

### Chromedriver Versions

Different Chrome versions are used for web and electron testing:
- **Web testing**: ChromeDriver 132.0.0 (for latest Chrome)
- **Electron testing**: ChromeDriver 126.0.0 (for Electron app's embedded Chrome)

## Usage

### Switching Between Web and Electron Testing

**For Electron testing:**
```bash
# Switch to electron-compatible chromedriver version
npm run setup:chromedriver:electron

# Run electron tests
npm run landingFeatureTest_electron
```

**For Web testing:**
```bash
# Switch to web-compatible chromedriver version
npm run setup:chromedriver:web

# Run web tests
npm run landingFeatureTest_prod
```

### Environment Variables

You can override the electron app path using an environment variable:

```bash
# Windows PowerShell
$env:ELECTRON_APP_PATH="C:\Custom\Path\To\App.exe"
npm run landingFeatureTest_electron

# Windows CMD
set ELECTRON_APP_PATH=C:\Custom\Path\To\App.exe
npm run landingFeatureTest_electron
```

### Configuration Files

- **env.json**: Contains app-specific configurations including electron app path and chromedriver versions
- **capabilities.json**: Browser and platform configurations for different test environments
- **wdio.conf.js**: Main WebDriverIO configuration that reads from env.json dynamically

## Troubleshooting

### "no chrome binary at path" Error
- Ensure the Electron app is installed at the correct path
- Check that the username in the path matches your system username
- Or use the `ELECTRON_APP_PATH` environment variable to override

### ChromeDriver Version Mismatch
- For Electron tests: Run `npm run setup:chromedriver:electron`
- For Web tests: Run `npm run setup:chromedriver:web`
- Check the Chrome version of your Electron app and update `electronVersion` in env.json if needed

### Checking Chrome Version in Electron App
The Electron app logs its Chrome version on startup. Look for messages like:
```
Current browser version is 126.0.6478.234
```

Update the `electronVersion` in env.json to match this version.
