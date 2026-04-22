const { remote } = require('webdriverio');
const { spawn } = require('child_process');
const path = require('path');

async function test() {
    const driverPath = path.join(__dirname, '../drivers/chromedriver-146.exe');
    console.log("Starting chromedriver at", driverPath);
    
    const driverProcess = spawn(driverPath, ['--port=9516']);
    
    driverProcess.stdout.on('data', (data) => {
        // console.log(`stdout: ${data}`);
    });
    
    // wait a bit for it to start
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
        console.log("Starting remote session...");
        const browser = await remote({
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
        
        console.log("Navigating...");
        await browser.url('https://example.com');
        console.log("Title is: " + await browser.getTitle());
        
        console.log("Closing session...");
        await browser.deleteSession();
    } catch (e) {
        console.error(e);
    } finally {
        driverProcess.kill();
        console.log("Done.");
    }
}

test();
