const path = require('path');
const {config}  = require('./wdio.shared.conf');

const iOSConfig = {
    ...config,

specs :[path.join(process.cwd(), "./test/specs/ios/UIKitCatalog.spec.js")],
capabilities : [
    {   
        "appium:platformName" : "iOS",
        "appium:automationName": "XCUITest",
        "appium:noReset":true,

        // "appium:platformVersion": "16.2",
        // "appium:deviceName":"iPhone 14 Pro Max",
        // "appium:app": path.join(process.cwd(), "./app/iOS/Simulator/UIKitCatalog.app"),

        "appium:platformVersion": "14.7.1",
        "appium:udid": "00008101-00017D300E02001E",
        "appium:app": path.join(process.cwd(), "./app/iOS/RealDevice/UIKitCatalog.app"),
    }
]
};

exports.config=iOSConfig;

