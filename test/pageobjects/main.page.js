const Page = require('./page');
class MainPage extends Page
{
    //For accept cookie button moved the locator here 
    get acceptCookies(){
        return $('#onetrust-accept-btn-handler');
    }
    // For Menu Option locator
    get menuOption(){
       return $('#sitenav-sidenav-toggle');
    }
    // For Buy Option locator
    get buyOption(){
        return $('em=Buy');
     }
     // For Buy Option locator
    get carConfig(){
        return $('em=Car Configurator');
     }

     // For RechargeCar locator
    get rechargeCar(){
        return $('h3=C40 Recharge');
     }
   async open(){
       await super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    }
}

module.exports = new MainPage();
