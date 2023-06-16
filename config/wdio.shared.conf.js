
exports.config = {
    port : 4723,
    runner: 'local', 
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000, 
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot','spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services : [
        ['appium', {
            command : 'appium'
        }]
    ],
     afterTest: async function({ error}) {
        if (error) {
            await browser.takeScreenshot();
          }
    }
}
