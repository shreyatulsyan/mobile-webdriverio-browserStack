const path = require('path');
const allure = require('allure-commandline')
const config  = require('./wdio.shared.conf');
config.port = 4723;
config.specs = [path.join(process.cwd(), './test/specs/android/android.spec.js')];
config.capabilities = [
        {   
        "appium:platformName": "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel 5 API 30",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk")
    }
];
config.services = ['appium'];
config.reporters= [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
}]],

config.afterTest= async function({ error}) {
    if (error) {
        await browser.takeScreenshot();
      }
};
config.onComplete= async function() {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(
            () => reject(reportError),
            5000)

        generation.on('exit', function(exitCode) {
            clearTimeout(generationTimeout)

            if (exitCode !== 0) {
                return reject(reportError)
            }

            console.log('Allure report successfully generated')
            resolve()
        })
    })
},
exports.config=config;

