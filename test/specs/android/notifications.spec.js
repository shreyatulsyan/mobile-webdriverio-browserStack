//App- >Notification-> Notifywith text->Show Long notification

describe('Validations of Notifications',async()=>{
    it('To Validate Long notification', async()=>{
        await $('~App').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Notification")').click();

        await $('~NotifyWithText').click();
        await expect($(`//*[@resource-id='android:id/action_bar']//android.widget.TextView`)).toHaveTextContaining('App/Notification/NotifyWithText');
        await $('~Show Long Notification').click();
        await expect($('//android.widget.Toast')).toHaveTextContaining('This is a long notification');

    });
    
});