const {Given, When, Then} = require('@cucumber/cucumber')
const {POManager} = require('../../pageObjects/POManager')
const playwright = require('@playwright/test')
const {test,expect} = require('@playwright/test')

const {googlePO} = require ('../../pageObjects/googlePO')
const delay =ms => new Promise (resolve => setTimeout(resolve,ms))


         Given('Open the Google URL', {timeout: 15000}, async function () {
            const googlePage = this.poManager.getGooglePage();
            await googlePage.goTogoogle()
          
         });

  

         When('Enter the valid search {string}', async function (searchtool) {
             const googlePage = this.poManager.getGooglePage();
             await googlePage.enterSearch(searchtool)
      
         });

         Then('Click the Search button', async function () {
             const googlePage = this.poManager.getGooglePage();
             await googlePage.clickSearch()
         });