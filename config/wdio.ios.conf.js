const path = require('path');
const {config}  = require('./wdio.shared.conf');

const iOSConfig = {
    ...config,
    port : 4723,
specs :[path.join(process.cwd(), "./test/specs/ios/UIKitCatalog/UIKitCatalog.spec.js")],
capabilities : [
    {   
        "appium:platformName" : "iOS",
        "appium:automationName": "XCUITest",
        "appium:noReset":true,
        "appium:isHeadless":true,
        "appium:platformVersion": "16.2",
        "appium:deviceName":"iPhone 14 Pro Max",
        "appium:app": path.join(process.cwd(), "./app/iOS/Simulator/UIKitCatalog.app"),

        // "appium:platformVersion": "14.7.1",
        // "appium:udid": "00008101-00017D300E02001E",
        // "appium:app": path.join(process.cwd(), "./app/iOS/RealDevice/UIKitCatalog.app"),
    }
],
services : [
    ['appium', {
        command : 'appium',
        logPath : './logs',
    }]
],
// before: async () => {
//     await import('expect-webdriverio');
//     global.wdioExpect = global.expect;
//     const chai = await import('chai');
//     global.expect = chai.expect;
// },
};

exports.config=iOSConfig;

