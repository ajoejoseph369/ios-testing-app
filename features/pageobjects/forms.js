const {$} = require('@wdio/globals');
const { ok } = require('appium-doctor/build/lib/utils');

const formsBtn = '//XCUIElementTypeOther[@name="Forms"]';
const formsView = '//XCUIElementTypeOther[@name="Forms-screen"]';
const textInput = '//XCUIElementTypeTextField[@name="text-input"]';
const enteredText = '//XCUIElementTypeStaticText[@name="input-text-result"]';
const toggleBtn = '//XCUIElementTypeSwitch[@name="switch"]';
const switchText = '//XCUIElementTypeStaticText[@name="switch-text"]';
const dropdown = '//XCUIElementTypeOther[@name="select-Dropdown"]';
const secondOption = '//XCUIElementTypePickerWheel[@value="Appium is awesome"]';
const done = '//XCUIElementTypeOther[@name="header-Dropdown"]';
const activeBtn = '//XCUIElementTypeOther[@name="Active"]';
const btnPressConfirmation = '//XCUIElementTypeAlert[@name="This button is"]';
const okBtn = '//XCUIElementTypeButton[@name="OK"]';

class Forms{

    async redirectToFormsPage(){
        await $(formsBtn).click();
    }

    async checkRedirectionToFormsPage(){
        return (await $(formsView).isDisplayed());
    }

    async enterText(text){
        await $(textInput).setValue(text);
    }

    async checkEnteredText(text){
        return (await $(enteredText)==text);
    }

    async clickToggleBtn(){
        await $(toggleBtn).click();
    }

    async checkToggleBtnClick(){
        return (await $(switchText)=="Click to turn the switch OFF");
    }

    async selectDropDown(){
        await $(dropdown).click();
        await $(secondOption).waitForDisplayed({ timeout: 5000 });
        await $(done).click();
    }

    async clickActiveBtn(){
        await $(activeBtn).click();
    }

    async checkBtnClick(){
        if(await $(btnPressConfirmation).isDisplayed()){
            await $(okBtn).click();
            return true;
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 5 seconds
    }

}

module.exports = new Forms();