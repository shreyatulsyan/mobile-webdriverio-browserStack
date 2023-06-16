const path = require('path');
const config  = require('./wdio.shared.conf');

config.port = 4723;
config.specs = [path.join(process.cwd(), "./test/specs/ios/todo.ios.spec.js")];
config.capabilities = [
    {   
        "appium:platformName" : "iOS",
        "appium:platformVersion": "16.2",
        "appium:deviceName": "iPhone 14 Pro Max",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "./app/iOS/MVCTodo.app")
    }
];
config.services = [
    ['appium', {
        command : 'appium'
    }]
];

config.reporters = ['spec']

exports.config=config;

