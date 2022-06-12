const mainPage =require('../pageobjects/main.page')
const ourcarsPage= require('../pageobjects/ourcars.page');

describe('Volvo',()=>{
    it('Should launch the webpage',async()=>{
       await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more'); 
       await expect(browser).toHaveTitle('A million more | Volvo Cars - International');
    });
    // cookie Test case:1
    it('should accept the cookies first', async()=>{
      await mainPage.acceptCookies.click();
      await expect(mainPage.acceptCookies).toBeExisting();
      await browser.pause(3000);
  });
  // Click the our cars button: Test case 2
    it('Click the our car button', async()=>{
        console.log(await ourcarsPage.ourcarOption.getText()); // outputs: "our cars"
        console.log(await ourcarsPage.ourcarOption.getTagName());  
        await ourcarsPage.ourcarOption.click();
        await expect(ourcarsPage.ourcarOption).toBeExisting();
        await browser.pause(3000);
         });
   // click the suvs button to display the car image: Test case 3
         it('Click the SUV button', async()=>{ 
            console.log(await ourcarsPage.suvClick.getText());
            console.log(await ourcarsPage.suvClick.getTagName());
            await ourcarsPage.suvClick.click();
            await browser.pause(3000);
         });
    });
    
    