const {Given, When, Then} = require('@cucumber/cucumber')
const {POManager} = require('../../pageObjects/POManager')
const playwright = require('@playwright/test')
const {test,expect} = require('@playwright/test')
const {NewTestPage} = require ('../../pageObjects/newtest')
const {PractiseTestPage} = require('../../pageObjects/practisePO.js');
const delay =ms => new Promise (resolve => setTimeout(resolve,ms))


Given('Navigate to the URL {string}', {timeout: 30000}, async function (url) {
    this.poManager = new POManager(this.page);
    const practiseTestPage = this.poManager.getPractiseTestPage();
    await practiseTestPage.navigateToURL(url)
});

When('Validate the text {string} is displayed', {timeout: 15000}, async function (text) {
    const practiseTestPage = this.poManager.getPractiseTestPage();
    await practiseTestPage.validatePageText(text)
});

 When ('Button is clicked', {timeout: 15000}, async function () {
    const practiseTestPage = this.poManager.getPractiseTestPage();
    await practiseTestPage.buttonClick();
})

Then ('Validate toast is displayed with text {string}', {timeout: 15000}, async function (text) {
     const practiseTestPage = this.poManager.getPractiseTestPage();
        await practiseTestPage.validateTextDisplayed(text)
})

Then ('Select option from dropdown', {timeout: 10000}, async function () {
        const practiseTestPage = this.poManager.getPractiseTestPage();
        await practiseTestPage.selectOptionFromDropdown();
})

Then ('Upload the file',  async function () {
        const practiseTestPage = this.poManager.getPractiseTestPage();
        await practiseTestPage.uploadFile1();
})

