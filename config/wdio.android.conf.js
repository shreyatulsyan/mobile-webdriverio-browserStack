const path = require('path');
const {config}  = require('./wdio.shared.conf');

const androidConfig = {
    ...config,
port : 4723,
specs : [path.join(process.cwd(), './test/specs/android/Scrolling.spec.js')],
capabilities : [
        {   
        "appium:platformName": "Android",// required
        "appium:platformVersion": "12.0",
        "appium:automationName": "UIAutomator2",//required
        "appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk")
    }
],
services : [
        ['appium', {
            command : 'appium',
            logPath : './logs',
        }]
    ],
}

exports.config=androidConfig;

