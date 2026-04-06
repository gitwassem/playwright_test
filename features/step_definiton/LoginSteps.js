const {Given, When, Then} = require('@cucumber/cucumber')
const {POManager} = require('../../pageObjects/POManager')
const playwright = require('@playwright/test')
const {test,expect} = require('@playwright/test')
const {LoginPage} = require ('../../pageObjects/LoginPage')
const {googlePO} = require ('../../pageObjects/googlePO')
const delay =ms => new Promise (resolve => setTimeout(resolve,ms))


Given('Open the application URL', {timeout: 30000}, async function () {
          
           const loginPage= this.poManager.getLoginPage();
           await loginPage.goTo()
         });   

When('Enter the valid username {string} and password {string}', {timeout: 15000}, async function (emailID, passworduser) {
           const loginPage = this.poManager.getLoginPage();
           await loginPage.validLogin(emailID, passworduser)
         });  

Then('Click the Sign In button', {timeout: 15000}, async function () {
         const loginPage = this.poManager.getLoginPage();
         await loginPage.clickLogin()
          
         });

Then('User must be able to see the dashboard', {timeout: 15000}, async function () {
            const loginPage = this.poManager.getLoginPage();
            await loginPage.visible()
})




        