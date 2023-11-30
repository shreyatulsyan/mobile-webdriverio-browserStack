xdescribe('Starting ios App',async ()=>{
    it('Start UIKitCatalog iOS app and verify the dialog box text.',async ()=>{
        await $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Alert Views"`]').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContainEqual('A Short Title Is Best');
        await $('-ios predicate string:label == "OK"').click();
        await $('-ios class chain:**/XCUIElementTypeButton[`label == "UIKitCatalog"`]').click();
    });
});

describe('Scrolling:',async ()=>{
    xit('Scroll down',async ()=>{
    await $('~Picker View').click();
    await browser.setTimeout({ 'implicit': 30000 });
    const red = await $('~Red color component valu');
    await driver.execute('mobile:scroll',{element : red.elementId, direction:'down'});
    const green = await $('~Green color component value');
    await driver.execute('mobile:scroll',{element : green.elementId, direction:'up'});
    });

    it('Scroll down using TouchAction',async ()=>{
        let size = await browser.getWindowSize();
        let wid = (size.width)/2;
        let startHeight = (size.height)*0.8;
        let endHeight = (size.height)*0.2;
        await browser.touchAction([
            {action:'longPress',x:wid,y:startHeight},
            { action: 'moveTo',x:wid, y:endHeight},
            'release'])
        await driver.pause(2000);
        });
    });
