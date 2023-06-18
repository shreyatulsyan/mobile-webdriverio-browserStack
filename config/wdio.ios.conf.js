const path = require('path');
const config  = require('./wdio.shared.conf');

config.port = 4723;
config.specs = [path.join(process.cwd(), "./test/specs/ios/todo.ios.spec.js")];
config.capabilities = [
    {   
        "appium:platformName" : "iOS",
        "appium:automationName": "XCUITest",
        // "appium:platformVersion": "16.2",
        // "appium:deviceName":"iPhone 14 Pro Max",
        // "appium:app": path.join(process.cwd(), "./app/iOS/Simulator/MVCTodo.app"),

        "appium:platformVersion": "14.7.1",
        "appium:udid": "00008101-00017D300E02001E",
        "appium:xcodeOrgId": "462KN823JR",
        "appium:xcodeSigningId": "iPhone Developer",
        "appium:updateWDABundleId": "com.shreya12.WebDriverAgentRunner",
        "appium:app": path.join(process.cwd(), "./app/iOS/RealDevice/UIKitCatalog.app")
    }
];
config.services = [
    ['appium', {
        command : 'appium'
    }]
];

config.reporters = ['spec']

exports.config=config;

