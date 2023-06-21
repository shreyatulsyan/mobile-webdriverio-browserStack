const path = require('path');
const {config}  = require('./wdio.shared.conf');

const androidConfig = {
    ...config,
port : 4723,
specs : [path.join(process.cwd(), './test/specs/android/android.spec.js')],
capabilities : [
        {   
        "appium:platformName": "Android",// required
        "appium:platformVersion": "11.0",
        "appium:automationName": "UIAutomator2",//required
        "appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk")
    }
]
}

exports.config=androidConfig;

