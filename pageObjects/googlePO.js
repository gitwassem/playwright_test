class googlePO{ 

    constructor(page){
        this.page = page;
        this.search = page.locator('#APjFqb')
        this.searchButton = page.locator('(//input[@value="Google Search"])[2]')        

    }

    async goTogoogle(){
        await this.page.goto("https://www.google.com/")
        await this.page.waitForLoadState('networkidle')
    }
    async enterSearch(searchtool){

        //await this.username.waitFor({state: 'visible'})
        await this.search.fill(searchtool)             
    }     

    async clickSearch(){
        await this.searchButton.click()
    }

}
module.exports ={googlePO};