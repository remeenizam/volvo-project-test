const mainPage = require('../pageobjects/main.page.js');
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
   //Click menu button test case:2
   it('Click the menu button', async()=>{
      //const menuButton =  await $('#sitenav-sidenav-toggle');
        await mainPage.menuOption.click();
        await expect(mainPage.menuOption).toBeExisting();
        await browser.pause(1000);
   });
  //Click Buy button test case:3
 it('Click the Buy button', async()=>{
  console.log(await mainPage.buyOption.getText());
  console.log(await mainPage.buyOption.getTagName());
  await mainPage.buyOption.click();
  await expect(mainPage.buyOption).toBeExisting();
  await browser.pause(2000);
   });
  
   //Click Car configurator button test case:4
 it('Click the Car Configurator', async()=>{
  console.log(await mainPage.carConfig.getText()) // outputs: "Car Configurator"
  console.log(await mainPage.carConfig.getTagName())  
  await mainPage.carConfig.click();
  await browser.pause(1000);
   });
  //Click Car  C40 Recharge button test case:5
  it('Click the C40 Recharge car', async()=>{
    console.log(await mainPage.rechargeCar.getText()) // outputs: "Welcome to my Page"
    console.log(await mainPage.rechargeCar.getTagName());
    await mainPage.rechargeCar.click();
    await browser.pause(1000);
  });
});

 
  
