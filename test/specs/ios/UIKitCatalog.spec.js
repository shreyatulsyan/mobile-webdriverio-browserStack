xdescribe('Starting ios App',async ()=>{
    it('Start UIKitCatalog iOS app and verify the dialog box text.',async ()=>{
        await $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Alert Views"`]').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
        await $('-ios predicate string:label == "OK"').click();
        await $('-ios class chain:**/XCUIElementTypeButton[`label == "UIKitCatalog"`]').click();
    });
});

describe('Scrolling:',async ()=>{
    it('Scroll down',async ()=>{
    await $('~Picker View').click();
    const red = await $('~Red color component value');
    await red.waitForDisplayed({ timeout: 10000 });
    await driver.execute('mobile:scroll',{element : red.elementId, direction:'down'});
    const green = await $('~Green color component value');
    await green.waitForDisplayed({ timeout: 20000 });
    await driver.execute('mobile:scroll',{element : green.elementId, direction:'up'});

    });
    });
