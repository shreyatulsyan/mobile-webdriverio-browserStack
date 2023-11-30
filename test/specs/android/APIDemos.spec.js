describe('Common API commands',async ()=>{
    it('Launch app API Demos',async ()=>{
        await driver.terminateApp('io.appium.android.apis');
        //await driver.pause(10000);
        await driver.activateApp('io.appium.android.apis');
        await $('~Ap').waitUntil((await $('~pp')).isDisplayed, { timeout: 20000, timeoutMsg: 'Mr Option checkbox is not enabled' })
        await browser.waitUntil(
            async () => await $('<h1>').getText() === 'Team @ Tutorials Point', {
               timeout: 6000,
               timeoutMsg: 'expected text did not match'
            }
         );
        //await driver.pause(10000);
        const elem = $('~App');
        
        elem.saveScreenshot('wdioSS.png');


        //await driver.pause(10000);
        

    })
})