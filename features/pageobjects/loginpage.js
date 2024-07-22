const {$} = require('@wdio/globals');

const loginPageView = '//XCUIElementTypeOther[@name="Login-screen"]';
const emailInput = '//XCUIElementTypeTextField[@name="input-email"]';
const passwordInput = '//XCUIElementTypeSecureTextField[@name="input-password"]';
const loginBtn = '//XCUIElementTypeOther[@name="button-LOGIN"]';
const loginAlert = '//XCUIElementTypeAlert[@name="Success"]';
const loginAlertText = '//XCUIElementTypeStaticText[@name="You are logged in!"]';
const loginOKBtn = '//XCUIElementTypeButton[@name="OK"]';
const signUpPage = '//XCUIElementTypeOther[@name="button-sign-up-container"]';
const SUemail = '//XCUIElementTypeTextField[@name="input-email"]';
const SUpassword = '//XCUIElementTypeSecureTextField[@name="input-password"]';
const SUrepeatPassword = '//XCUIElementTypeSecureTextField[@name="input-repeat-password"]';
const signUpBtn = '//XCUIElementTypeOther[@name="button-SIGN UP"]';
const signUpAlert = '//XCUIElementTypeAlert[@name="Signed Up!"]';
const signUpAlertText = '//XCUIElementTypeStaticText[@name="You successfully signed up!"]';
const signUpOK = '//XCUIElementTypeButton[@name="OK"]';

class Login{

    async checkRedirectionToLoginPage(){
        return (await $(loginPageView).isDisplayed());
    }

    async inputCredentials(username,password){
        await $(emailInput).setValue(username);
        await $(passwordInput).setValue(password);
        await $(loginBtn).click();
    }

    async checkLogin(notification){
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        if(await $(loginAlert).isDisplayed()){
            if(await $(loginAlertText)==notification){
                console.log("Logged in");
                return true;
            }
        }
        await $(loginOKBtn).click();
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }

    async goToSignUp(){
        await $(signUpPage).click();
    }

    async enterCredentials(email,pass){
        await $(SUemail).setValue(email);
        await $(SUpassword).setValue(pass);
        await $(SUrepeatPassword).setValue(pass);
    }

    async clickSignUp(){
        await $(signUpBtn).click();
        await new Promise(resolve => setTimeout(resolve, 2000));

    }

    async checkSignUp(notif){
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        if(await $(signUpAlert).isDisplayed()){
            if(await $(signUpAlertText)==notif){
                console.log("Signed Up");
                return true;
            }
        }
        await $(signUpOK).click();
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }

}

module.exports = new Login();