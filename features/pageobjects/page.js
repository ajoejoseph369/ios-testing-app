const {$} = require('@wdio/globals');

const homePageView = '//XCUIElementTypeOther[@name="Home-screen"]';
const loginbtn = '//XCUIElementTypeOther[@name="Login"]';

class Homepage{

    async checkRedirectionToHomePage(){
        return (await $(homePageView).isDisplayed());
    }
    async clickLoginBtn(){
        await $(loginbtn).click();
        // await driver.pause(8000);
    }
}

module.exports = new Homepage();