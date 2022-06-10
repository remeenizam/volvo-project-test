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
  
   //Click menu button test case:2
   it('Click the menu button', async()=>{
      const menuButton =  await $('#sitenav-sidenav-toggle');
        await  menuButton.click();
        await expect(menuButton).toBeExisting();
        await browser.pause(3000);
   });
  
  //Click Buy button test case:3
   it('Click the Buy button', async()=>{
  const buyButton = await $('em=Buy');
  console.log(await buyButton.getText()) // outputs: "Buy"
  console.log(await buyButton.getTagName())  
  await buyButton.click();
  await browser.pause(3000);
   });
  
   //Click Car configuration button test case:4
   it('Click the Car Configurator', async()=>{
  const carConfiguratorButton = await $('em=Car Configurator');
  console.log(await carConfiguratorButton.getText()) // outputs: "Buy"
  console.log(await carConfiguratorButton.getTagName())  
  await carConfiguratorButton.click();
  await browser.pause(3000);
   });
  //Click Car  C40 Recharge button test case:5
  it('Click the C40 Recharge car', async()=>{
    const header = await $('h3=C40 Recharge')
    console.log(await header.getText()) // outputs: "Welcome to my Page"
    console.log(await header.getTagName());
    await header.click();
  await browser.pause(3000);
  });
  });
  
  // Click the comapre button test case 6
  /*it('Click the menu button', async()=>{
    const elem = await $('.stage-intro:scrollToStage');
    await elem.click();
    // scroll to specific element
   // await elem.scrollIntoView();
   // const compareButton =  await $('k oa ob');
    //  await  compareButton.click();
   //   await expect(compareButton).toBeExisting();
      await browser.pause(3000);
  });
  
  });*/


  //**********************************************
//const { carConfig, rechargeCar } = require('../pageobjects/main.page.js');
//const { buyOption } = require('../pageobjects/main.page.js');
//const { menuOption } = require('../pageobjects/main.page.js');
const mainPage = require('../pageobjects/main.page.js');
//const MainPage= require('../pageobjects/main.page.js');

describe('Volvo',()=>{
    it('Should launch the webpage',async()=>{
       await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    // await mainPage.open();
     await expect(browser).toHaveTitle('A million more | Volvo Cars - International');
      // await browser.maximizeWindow(); 
    });
  // cookie Test case:1
    it('should accept the cookies first', async()=>{
       await mainPage.acceptCookies.click();
       await expect(mainPage.acceptCookies).toBeExisting();
       await browser.pause(1000);
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
 // const buyButton = await $('em=Buy');
  //console.log(await buyOption.buyButton.getText()) // outputs: "Buy"
  //console.log(await buyOption.buyButton.getTagName())  
  console.log(await mainPage.buyOption.getText());
  console.log(await mainPage.buyOption.getTagName());
  await mainPage.buyOption.click();
  await expect(mainPage.buyOption).toBeExisting();
  await browser.pause(1000);
   });
  
   //Click Car configuration button test case:4
 it('Click the Car Configurator', async()=>{
  //const carConfiguratorButton = await $('em=Car Configurator');
  console.log(await mainPage.carConfig.getText()) // outputs: "Buy"
  console.log(await mainPage.carConfig.getTagName())  
  await mainPage.carConfig.click();
 // await expect(mainPage.carConfig).toBeDisplayed();
  await browser.pause(1000);
   });
  //Click Car  C40 Recharge button test case:5
  it('Click the C40 Recharge car', async()=>{
   // const header = await $('h3=C40 Recharge')
    console.log(await mainPage.rechargeCar.getText()) // outputs: "Welcome to my Page"
    console.log(await mainPage.rechargeCar.getTagName());
    await mainPage.rechargeCar.click();
    await browser.pause(1000);
  
  });
});

 
  
