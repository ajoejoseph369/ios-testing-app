const {$} = require('@wdio/globals');
const { ok } = require('appium-doctor/build/lib/utils');
const page = require('./page');

const formsBtn = '//XCUIElementTypeOther[@name="Forms"]';
const formsView = '//XCUIElementTypeOther[@name="Forms-screen"]';
const pageHeader = '//XCUIElementTypeStaticText[@name="Form components"]';
const textInput = '//XCUIElementTypeTextField[@name="text-input"]';
const enteredText = '//XCUIElementTypeStaticText[@name="input-text-result"]';
const toggleBtn = '//XCUIElementTypeSwitch[@name="switch"]';
const switchText = '//XCUIElementTypeStaticText[@name="switch-text"]';
const dropdown = '//XCUIElementTypeOther[@name="select-Dropdown"]';
const pickerWheel = '//XCUIElementTypePickerWheel';
const firstOption = '//XCUIElementTypePickerWheel[@value="webdriver.io is awesome"]'
const secondOption = '//XCUIElementTypePickerWheel[@value="Appium is awesome"]';
const done = '//XCUIElementTypeOther[@name="header-Dropdown"]';
const activeBtn = '//XCUIElementTypeOther[@name="Active"]';
const btnPressConfirmation = '//XCUIElementTypeAlert[@name="This button is"]';
const okBtn = '//XCUIElementTypeButton[@name="OK"]';

class Forms{

    async redirectToFormsPage(){
        // while(!(await $(pageHeader).isDisplayed())){
        await $(formsBtn).click();
        await $(pageHeader).waitForDisplayed({timeout:6000});
        // }
    }

    async checkRedirectionToFormsPage(){
        // await $(formsView).waitForExist({timeout:6000});
        if(await $(pageHeader).isDisplayed())
            console.log("On Forms Page");
        else
            console.log("not on forms page yet");
        return (await $(pageHeader).isDisplayed());
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
        // await $(pickerWheel).waitForDisplayed({timeout:8000});
        await $(pickerWheel).setValue('Appium is awesome');
        // await $(firstOption).waitForDisplayed({ timeout: 5000 });
        // await $(secondOption).waitForDisplayed({ timeout: 5000 });
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
        await browser.pause(2000);
    }

}

module.exports = new Forms();