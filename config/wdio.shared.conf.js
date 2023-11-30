
exports.config = {
   // port : 4723,
    runner: 'local', 
    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
    },
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    //baseUrl: 'http://localhost',
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000, 
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    // services : [
    //     ['appium', {
    //         command : 'appium',
    //         logPath : './logs',
    //     }]
    // ],
}
