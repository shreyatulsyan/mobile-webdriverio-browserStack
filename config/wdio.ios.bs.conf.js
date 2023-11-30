const path = require('path');
const config = require('./wdio.shared.conf');
config.user = process.env.BROWSERSTACK_USERNAME || 'shreyatulsyan_rWlB4D',
config.key =  process.env.BROWSERSTACK_ACCESS_KEY || 'x7scq1qUBxLzDsYf8xbG',
config.specs = [path.join(process.cwd(), "./test/specs/ios/UIKitCatalog/AlertViews.spec.js")];

config.capabilities = [
    {   
    "platformName": "iOS",
    "platformVersion": "16.5",
    "deviceName": "iPhone 14",
    "automationName": "XCUITest",
    "app": "bs://99f5054b9dd28676b70a3b59a9a8344ee41ca681"
}
];
config.services= [
['browserstack', {
    browserstackLocal: true
}]
];
exports.config=config;
