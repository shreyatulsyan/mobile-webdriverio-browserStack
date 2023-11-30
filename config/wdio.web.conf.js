
const path = require('path');
const {config} = require('./wdio.shared.conf.js');

const webconfig = {
    ...config,
    specs :[path.join(process.cwd(), "./test/specs/web/webdriverio.spec.js")],
    capabilities: [{
        browserName: 'chrome',
}],
}

exports.config=webconfig;



