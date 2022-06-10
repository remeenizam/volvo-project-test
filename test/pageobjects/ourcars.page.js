const Page = require('./page');
class OurcarsPage extends Page
{
    //For accept cookie button moved the locator here 
    get acceptCookies(){
        return $('#onetrust-accept-btn-handler');
    }
    // For Mneu Option locator
    get ourcarOption(){
       return $('em=Our Cars');
    }
   // get suvClick(){
     //   return $('em=XC90 Recharge');
     //}
     get suvClick(){
        return $('em=XC90 Recharge');
     }

   async open(){
       await super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    }
}

module.exports = new OurcarsPage();