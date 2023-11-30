const AppPage = require('../../page/android/AppPage.js');
xdescribe('Starting app', () => {
    xit('Start app', async () => {
        await AppPage.getByAccessibilityId('App').click();
        await driver.isAppInstalled('io.appium.android.apis')
        await browser.back();
        await expect(true);
    })
});

describe('Scrolling: ', () => {
    xit('Vertical Scroll using UIScrollable [scrollToEnd]', async () => {

        await AppPage.getByAccessibilityId('App').click();
        await AppPage.getByAccessibilityId('Activity').click();
        await driver.saveScreenshot('ss1.png');
        //scroll to end will scroll to end , first param says how many time to scroll and second param say speed
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await AppPage.getByAccessibilityId('Secure Surfaces').click();
        await expect(AppPage.getByAccessibilityId('Secure Dialog')).toExist();
        
    });
    xit('Vertical Scroll using UIScrollable [scrollTextIntoView]', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");
        await AppPage.getByAccessibilityId('App').click();
        await AppPage.getByAccessibilityId('Activity').click();
        //ScrollTextIntoView --> it will scroll up and down both and search the element few times and then throw element not found. We have to pass text in argument.
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        await expect(AppPage.getByAccessibilityId('Secure Dialog')).toExist();
    });
    xit('Horizontal Scroll using UIScrollable [setAsHorizontalList.scrollToEnd]', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');    
    });
    xit('Horizontal Scroll using UIScrollable [setAsHorizontalList.scrollForward]', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       
    });
    xit('Change the date in Date Picker', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");
        const date = await $(`//*[@resource-id='io.appium.android.apis:id/dateDisplay']`).getText();
        console.log(date);
        await AppPage.getByAccessibilityId('change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)'); 
        await $(`//*[@text='10']`).click();
        await $(`//*[@resource-id='android:id/button1']`).click();   
        await expect(await $(`//*[@resource-id='io.appium.android.apis:id/dateDisplay']`).getText()).not.toEqual(date);
    })
    it('Vertical Scroll using TouchAction', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");
        await AppPage.getByAccessibilityId('App').click();
        await AppPage.getByAccessibilityId('Activity').click();
        console.log(await browser.getWindowSize())
       // { width: 1440, height: 2952 }
        let size = await browser.getWindowSize();
        let wid = (size.width)/2;
        let startHeight = (size.height)*0.8;
        let endHeight = (size.height)*0.2;
        await browser.touchAction([
            {action:'press',x:wid,y:startHeight},
            { action: 'moveTo',x:wid, y:endHeight},
            'release'])
        await driver.pause(2000);
        await (await AppPage.getByAccessibilityId('Secure Surfaces')).click();

        await expect(AppPage.getByAccessibilityId('Secure Dialog')).toExist();
    });
});
xdescribe('Gestures: ', async ()=>{
    it('Long Press: ',async ()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");
        await AppPage.getByAccessibilityId('Views').click();
        await AppPage.getByAccessibilityId('Expandable Lists').click();
        await AppPage.getByAccessibilityId('1. Custom Adapter').click();
        //const ele = await AppPage.PeopleNames;
        await driver.touchPerform([{
            action: 'longPress',
            options: {
              element: AppPage.PeopleNames
            }
          }]);
    })
})


