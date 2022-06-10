/*describe('Volvo',()=>{
    it('Should launch the webpage',async()=>{
       await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
       
       await expect(browser).toHaveTitle('A million more | Volvo Cars - International');
       //await browser.maximizeWindow(); 
    });
    // cookie Test case:1
  it('should accept the cookies first', async()=>{
    const acceptCookiebutton = $('#onetrust-accept-btn-handler');
   //await acceptCookiebutton.waitForClickable({ reverse: true })
      await  acceptCookiebutton.click();
      await expect(acceptCookiebutton).toBeExisting();
      await browser.pause(3000);
 });
    it('Click the our car button', async()=>{
        const carButton = await $('em=Our Cars');
        console.log(await carButton.getText()) // outputs: "our cars"
        console.log(await carButton.getTagName())  
        await carButton.click();
        await browser.pause(3000);
         });

         it('Click the SUV button', async()=>{
            const suvButton = await $('em=XC90 Recharge');
            console.log(await suvButton.getText()) // outputs: "Buy"
            console.log(await suvButton.getTagName())  
            await suvButton.click();
          //  await expect(suvButton).toBeDisplayed();
            await browser.pause(3000);
         });
      });
         /*it('Click the interior button', async()=>{
            const interiorButton = await $('pdpSubmenu:link-1');
           // console.log(await suvButton.getText()) // outputs: "Buy"
           // console.log(await suvButton.getTagName())  
            await interiorButton.click();
          //  await expect(suvButton).toBeDisplayed();
            await browser.pause(3000);
         });
    });
*/
    //const baseUrl = require('../main.js/');

//const { ourcarOption } = require("./pageobjects/ourcars.page");
const mainPage =require('../pageobjects/main.page')
const ourcarsPage= require('../pageobjects/ourcars.page');


/*describe(' Our Cars Page ', () => {
it('Should display the car page',()=>{
 browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
 browser.maximizeWindow();
 const ourCarbutton = $ ('#sitenav:topbar:cars');
 expect(ourCarbutton).toBeClickable();
browser.pause(2000);
//expect(browser).toHaveTitle('SUVS'); 
});   
});*/


//******************************************POM */

//const OurcarsPage = require('../pageobjects/ourcars.page');
describe('Volvo',()=>{
    it('Should launch the webpage',async()=>{
       await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
       
       await expect(browser).toHaveTitle('A million more | Volvo Cars - International');
       //await browser.maximizeWindow(); 
    });
    // cookie Test case:1
    it('should accept the cookies first', async()=>{
      await mainPage.acceptCookies.click();
      await expect(mainPage.acceptCookies).toBeExisting();
      await browser.pause(3000);
  });
    it('Click the our car button', async()=>{
       // const carButton = await $('em=Our Cars');
        console.log(await ourcarsPage.ourcarOption.getText()); // outputs: "our cars"
        console.log(await ourcarsPage.ourcarOption.getTagName());  
        await ourcarsPage.ourcarOption.click();
        await expect(ourcarsPage.ourcarOption).toBeExisting();
        await browser.pause(3000);
         });

         it('Click the SUV button', async()=>{
            //const suvButton = await $('em=XC90 Recharge');
            //console.log(await suvButton.getText()) // outputs: "Buy"
            //console.log(await suvButton.getTagName())  
            console.log(await ourcarsPage.suvClick.getText());
            console.log(await ourcarsPage.suvClick.getTagName());
            await ourcarsPage.suvClick.click();
           // await expect(suvButton).toBeClickable();
            await browser.pause(3000);
         });

         /*it('Click the interior button', async()=>{
            const interiorButton = await $('pdpSubmenu:link-1');
           // console.log(await suvButton.getText()) // outputs: "Buy"
           // console.log(await suvButton.getTagName())  
            await interiorButton.click();
          //  await expect(suvButton).toBeDisplayed();
            await browser.pause(3000);
         });*/
    });
    
    