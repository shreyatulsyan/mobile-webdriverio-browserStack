require('dotenv').config()
const path = require('path');
const config  = require('./wdio.shared.conf');
config.user = process.env.BROWSERSTACK_USERNAME,
config.key =  process.env.BROWSERSTACK_ACCESS_KEY,
config.specs = [path.join(process.cwd(), './test/specs/android/android.spec.js')];
config.capabilities = [
        {   
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "Google Pixel 3",
        "automationName": "UIAutomator2",
        "app": "bs://3857d1f5fe9d1aeccd6519d8000ccf50cea541a5"
    }
];
config.services= [
    ['browserstack', {
        browserstackLocal: true
    }]
];
exports.config=config;

