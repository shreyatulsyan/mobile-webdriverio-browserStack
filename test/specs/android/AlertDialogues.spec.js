const AppPage = require('../../page/android/AppPage.js');
//const percyScreenshot = require('@percy/appium-app');

describe('To verify alert dialogues: ', async() => {
    xit('Validate accept alert', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");
        await AppPage.getByAccessibilityId('App').click();
        await AppPage.getByAccessibilityId('Alert Dialogs').click();
        await AppPage.getByAccessibilityId('OK Cancel dialog with a message').click();
        await driver.acceptAlert();
        let abs = "swsw";
        abs.length;
        //abs.length();
    });
    it('Validate alert and message', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");
        await AppPage.getByAccessibilityId('App').click();
        await AppPage.getByAccessibilityId('Alert Dialogs').click();
        await AppPage.getByAccessibilityId('List dialog').click();
        await $(`(//*[@resource-id='android:id/text1'])[1]`).click();
        let text = await $(`//*[@resource-id='android:id/message']`).getText();
        await expect(text).toEqual('You selected: 0 , Command one');
        //await percyScreenshot('Form page');
    });
});