class LoginPage {

    constructor(page){
        this.page = page;
        this.username = page.locator('//input[@type="text"]')
        this.userpassword = page.locator('(//input[@type="password"])[2]')
        this.signInButton = page.locator('(//button[@type="button"])[1]')
        this.dashboardText = page.getByText("Dashboard")
        this.opportunityButton = page.getByText(" Create an Opportunity ")

    }

    async goTo(){
        await this.page.goto("https://uat.trellisplatform.com/issuers/pages/login")
        await this.page.waitForLoadState('networkidle')
    }

    async validLogin(emailID, passworduser){

        //await this.username.waitFor({state: 'visible'})
        await this.username.fill(emailID)
        //await this.userpassword.waitFor({state: 'visible'})
        await this.userpassword.fill(passworduser)
        
    }

    async clickLogin(){

       
        await this.signInButton.click()
        await this.page.waitForLoadState('networkidle')
    }

     async visible(){

       
        await this.dashboardText.isVisible()
        await this.opportunityButton.click()


}}
module.exports ={LoginPage};