require('dotenv').config()
const path = require('path');
const config  = require('./wdio.shared.conf');
config.user = process.env.BROWSERSTACK_USERNAME || 'shreyatulsyan_rWlB4D',
config.key =  process.env.BROWSERSTACK_ACCESS_KEY || 'x7scq1qUBxLzDsYf8xbG',
config.specs = [path.join(process.cwd(), './test/specs/android/**/*.js')];
config.capabilities = [{
    "appium:app": "bs://99f5054b9dd28676b70a3b59a9a8344ee41ca681",
    'bstack:options': {
      deviceName: 'Google Pixel 3',
      osVersion: "9.0",
    }
  }, {
    "appium:app": "bs://99f5054b9dd28676b70a3b59a9a8344ee41ca681",
    'bstack:options': {
      deviceName: 'Samsung Galaxy S10e',
      osVersion: "9.0"
    }
  }]
// config.capabilities = [
//         {   
//         "platformName": "Android",
//         "platformVersion": "9.0",
//         "deviceName": "Google Pixel 3",
//         "automationName": "UIAutomator2",
//         "app": "bs://99f5054b9dd28676b70a3b59a9a8344ee41ca681"
//     }
// ];
config.services= [
    ['browserstack', {
        browserstackLocal: true
    }]
];
exports.config=config;

