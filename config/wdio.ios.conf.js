const path = require('path');
const {config}  = require('./wdio.shared.conf');

config.port = 4723;
config.specs = [path.join(process.cwd(), "./test/specs/ios/todo.ios.spec.js")];
config.capabilities = [
    {   
        platformName: "iOS",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 12 Pro",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "./app/iOS/MVCTodo.app")
    }
]
config.services = ['appium'],
config.reporters= [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
}]],
exports.config=config;

