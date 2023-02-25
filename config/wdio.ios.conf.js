const path = require('path');
const {config}  = require('./wdio.shared.conf');

config.port = 4723;
config.specs = ['/Users/shreya.tulsyan/Documents/GitCodes/FuncTesting/test/specs/ios/todo.ios.spec.js'];
config.capabilities = [
    {   
        platformName: "iOS",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 12 Pro",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "./app/iOS/MVCTodo.app")
    }
]
exports.config=config;

