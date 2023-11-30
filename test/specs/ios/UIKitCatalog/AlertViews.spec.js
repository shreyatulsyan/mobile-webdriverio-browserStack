
describe('Test Cases for Alert Views: ', async()=>{
describe('Test Cases for Alert Style: ', async()=>{
    it('Click on Simple and accept the alert', async()=>{
        await $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Alert Views"`]').click();
        await $('~Simple').click();
        let text = await driver.getAlertText();
        await expect(text).toContain('A Short Title Is Best');
        await $('-ios predicate string:label == "OK"').click();
    });
    it('Click on Okay/Cancel and cancel the alert',async()=>{
        await $('~Okay / Cancel').click();
        await driver.dismissAlert(); 
        await expect(await $('-ios class chain:**/XCUIElementTypeOther[`label == "ALERT STYLE"`]')).toBeDisplayed();

    });
    it('Click on Other and select choice two',async()=>{
        await $('~Other').click();
        //const contexts = await driver.getContexts();
        // console.log(contexts);
        // driver.switchContext();
        await $('~Choice Two').click();
        await expect(await $('-ios class chain:**/XCUIElementTypeOther[`label == "ALERT STYLE"`]')).toBeDisplayed();
    });
    it('Click on Text Entry and enter the text in alert',async()=>{
        await $('~Text Entry').click();
        await driver.sendAlertText("asdfghjklkk");
        await driver.acceptAlert();
        await expect(await $('-ios class chain:**/XCUIElementTypeOther[`label == "ALERT STYLE"`]')).toBeDisplayed();
    });
    it('Click on Secure Text entry, enter the text and verify it is displayed in secured manner',async()=>{
        await $('~Secure Text Entry').click();
        await driver.sendAlertText("asdfghjklkk");
        let val = await $('//XCUIElementTypeSecureTextField').getText();
        await expect(val).toContain('•');
        await driver.acceptAlert();
        await expect(await $('-ios class chain:**/XCUIElementTypeOther[`label == "ALERT STYLE"`]')).toBeDisplayed();

    })
})
describe('Test Cases for Action Sheet Style: ', async()=>{
    it('Click on Click/Cancel and confirm the alert',async()=>{
        await $('~Confirm / Cancel').click();
        await $('~Confirm').click();
        await expect(await $('-ios class chain:**/XCUIElementTypeOther[`label == "ALERT STYLE"`]')).toBeDisplayed();

});
    it('Click on Destructive and select Destructive choice', async()=>{
        await $('~Destructive').click();
        await $('~Destructive Choice').click();
        await expect(await $('-ios class chain:**/XCUIElementTypeOther[`label == "ALERT STYLE"`]')).toBeDisplayed();
});
});
});