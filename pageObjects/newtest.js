class NewTestPage {

    constructor(page){
        this.page = page;
        this.emailInput = page.locator('input[type="text"]')
        this.passwordInput = page.locator('(//input[@type="password"])[2]')
        this.signInButton = page.getByRole('button', { name: ' SIGN IN' })
        this.recentActivityText = page.getByText("Recent Activity")
    }

    async navigateToURL(url){
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
    }

    async validateButtonDisabled(buttonText){
        const button = this.signInButton;
        const isDisabled = await button.isDisabled();
        if (!isDisabled) {
            throw new Error(`Expected button "${buttonText}" to be disabled, but it was enabled`);
        }
    }

    async enterCredentials(email, password){
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
    }

    async validateButtonEnabledAndClick(buttonText){
        const button = this.signInButton;
        // Wait for button to become enabled
        await button.waitFor({ state: 'visible', timeout: 5000 });
        await this.page.waitForTimeout(1000); // Wait for potential JavaScript validation
        
        const isDisabled = await button.isDisabled();
        if (isDisabled) {
            throw new Error(`Expected button "${buttonText}" to be enabled, but it was disabled`);
        }
        await button.click()
        await this.page.waitForLoadState('networkidle')
    }

    async validateRecentActivityVisible(){
        await this.recentActivityText.isVisible()
    }
}
module.exports ={NewTestPage};