describe('Land on website',async ()=>{
    it('Scroll on website',async ()=>{
        await driver.url('https://webdriver.io/');
        await driver.pause(2000);
            console.log(await browser.getTitle());
            const lighthouse = await $('//*[@id="__docusaurus_skipToContent_fallback"]/main/section[4]/div/div/div[1]/h3')
             await lighthouse.scrollIntoView();
           await browser.scroll(0,200);
            await driver.pause(2000);
    })
})