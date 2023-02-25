describe('Starting ios App',async ()=>{
it('Start ios app',async ()=>{
await $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Alert Views"`]').click();
await $('~Simple').click();
await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
});
});
describe('Scrolling:',async ()=>{
    it('Scroll down',async ()=>{
    //await driver.execute('mobile:scroll',{direction: 'down'});
    //await driver.execute('mobile:scroll',{direction: 'up'});
    await $('~Picker View').click();
    const red = await $('~Red color component value');
    driver.execute('mobile:scroll',{element : red.elementId, direction:'down'});
    });
    });
