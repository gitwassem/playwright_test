const {LoginPage} = require('./LoginPage.js');
const {googlePO} = require ('./googlePO');
const {NewTestPage} = require('./newtest.js');
const {PractiseTestPage} = require('./practisePO.js');

class POManager
{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.googlePage = new googlePO(this.page);
        this.newTestPage = new NewTestPage(this.page);
        this.practiseTestPage = new PractiseTestPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getGooglePage()
    {
        return this.googlePage;
    }

    getNewTestPage()
    {
        return this.newTestPage;
    }
    getPractiseTestPage()
    {
        return this.practiseTestPage;
    }
    
}
module.exports = {POManager};