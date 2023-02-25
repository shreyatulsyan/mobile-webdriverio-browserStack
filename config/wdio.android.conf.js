const path = require('path');
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
exports.config=config;

