const {Given, When, Then} = require('@cucumber/cucumber')
const {POManager} = require('../../pageObjects/POManager')
const playwright = require('@playwright/test')
const {test,expect} = require('@playwright/test')
const {NewTestPage} = require ('../../pageObjects/newtest')
const delay =ms => new Promise (resolve => setTimeout(resolve,ms))


Given('Navigate to URL {string}', {timeout: 30000}, async function (url) {
    const newTestPage = this.poManager.getNewTestPage();
    await newTestPage.navigateToURL(url)
});

When('Validate the button with text {string} is disabled', {timeout: 15000}, async function (buttonText) {
    const newTestPage = this.poManager.getNewTestPage();
    await newTestPage.validateButtonDisabled(buttonText)
});

Then('Enter email as {string} and password as {string}', {timeout: 15000}, async function (email, password) {
    const newTestPage = this.poManager.getNewTestPage();
    await newTestPage.enterCredentials(email, password)
});

Then('Validate the button with text {string} is now enabled and click the button', {timeout: 15000}, async function (buttonText) {
    const newTestPage = this.poManager.getNewTestPage();
    await newTestPage.validateButtonEnabledAndClick(buttonText)
});

Then('Validate \'Recent Activity\' text is displayed', {timeout: 15000}, async function () {
    const newTestPage = this.poManager.getNewTestPage();
    await newTestPage.validateRecentActivityVisible()
});