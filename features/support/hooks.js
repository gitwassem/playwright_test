const playwright = require('@playwright/test')
const {POManager} = require('../../pageObjects/POManager')
const {Before,After,AfterStep} = require('@cucumber/cucumber')

Before(async function () {
            const browser =await playwright.chromium.launch({headless:false});
            const context =await browser.newContext();
            this.page =await context.newPage()
            this.poManager=new POManager(this.page)
})

After(async function () {
            console.log("Closing the browser")
})

AfterStep(function ({result}) {
    if(result.status === "FAILED"){
        console.log("Step failed, taking screenshot")
        return this.page.screenshot({path: `screenshot-${Date.now()}.png`})
    }            
})