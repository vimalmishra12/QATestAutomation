/**
 * Helper script to install specific chromedriver version
 * Usage: node scripts/setup-chromedriver.js [web|electron]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read chromedriver versions from env.json
const envJsonPath = path.join(__dirname, '../env.json');
const envData = JSON.parse(fs.readFileSync(envJsonPath, 'utf8'));
const chromedriverConfig = envData.ExperienceApp.chromedriver || { webVersion: '132.0.0', electronVersion: '126.0.0' };

const chromedriverVersions = {
  web: chromedriverConfig.webVersion,
  electron: chromedriverConfig.electronVersion
};

const mode = process.argv[2] || 'web';
const version = chromedriverVersions[mode] || chromedriverVersions.web;

console.log(`Installing chromedriver version ${version} for ${mode} testing...`);

try {
  // Update package.json chromedriver version
  const packageJsonPath = path.join(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.dependencies.chromedriver = `^${version}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  // Install chromedriver
  console.log(`Running: npm install chromedriver@${version}`);
  execSync(`npm install chromedriver@${version}`, { stdio: 'inherit' });
  
  console.log(`\n✓ Successfully installed chromedriver ${version} for ${mode} testing`);
  console.log(`\nTo run tests:`);
  console.log(`  Web testing: npm run <your_test_script>`);
  console.log(`  Electron testing: npm run <your_test_script> -- --electronApp=true`);
} catch (error) {
  console.error('Error installing chromedriver:', error.message);
  process.exit(1);
}
