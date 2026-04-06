const { expect } = require("@playwright/test");


class PractiseTestPage {

    constructor(page){
        this.page = page;
        this.pageGetText = page.getByText("Web Elements Playground")
        this.buttonOne = page.locator('.btn-primary').nth(0)
        this.signInButton = page.getByRole('button', { name: ' SIGN IN' })
        // this.toastMessage = page.getByText("Challenging DOM rlefreshed!")
        this.toastMessage = page.locator('.toast')
        this.dropdown = page.locator('#dropdown')
        //this.selectedOption = page.getByText("Option 2").nth(1)
        this.selectedOption = page.selectOption('#dropdown', 'Option 2');
        this.uploadfile = page.locator('#file-upload')
    }

    async navigateToURL(url){
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
    }

    async validatePageText(text){
        const pageText = this.pageGetText;
        const isDisplayed = await pageText.isVisible();
        if (!isDisplayed) {
            throw new Error(`Expected text "${text}" to be displayed, but it was not found`);
        }
    }
     async buttonClick(){
        await this.buttonOne.click()
    }

    async validateTextDisplayed(text){
        await this.toastMessage.isVisible();
        const toastText = await this.toastMessage.textContent();
        console.log("Toast message text:", toastText);
        await expect(this.toastMessage).toHaveText("Challenging DOM refreshed!");
    }
        
        async selectOptionFromDropdown(){
        //await this.toastMessage.isnotVisible();
        await this.dropdown.selectOption('Option 2');
        //await expect(this.dropdown).toHaveText('Option 2');
        //await this.dropdown.click();
        //await this.selectedOption.isDisplayed();
        //await this.selectedOption;

    }
       
        async validateSelectedOption(optionText){
        /*const selectedOption = await this.dropdown.inputValue();
        console.log("Selected option value:", selectedOption);
        await expect(this.dropdown).toHaveText(optionText);*/

        await this.toastMessage.isVisible();
        const toastText = await this.toastMessage.textContent();
        console.log("Toast message text:", toastText);
        await expect(this.toastMessage).toHaveText("Selected: Option 2");
        
    }
        async uploadFile(){
        const filePath = 'tests/test-data/test.pdf';

        // If the file input is visible and accessible, set files directly.
        await this.uploadfile.setInputFiles(filePath);

        // Optionally add a check that the file name is loaded in the form control.
        const uploadedFileName = await this.uploadfile.inputValue();
        console.log('Uploaded file path (input value):', uploadedFileName);

        // If your page shows file name text somewhere, you can assert it here.
         await expect(this.page.locator('text=test.pdf')).toBeVisible();
    }


    async uploadFile1() {
  const filePath = 'C:\\Users\\wasee\\Desktop\\test.pdf';

  // 1) click button that opens popup
  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.uploadfile.click()          // or the real "open popup" button locator
  ]);

  // 2) wait for popup load ready
  await popup.waitForLoadState('domcontentloaded');

  // 3) locate file input inside popup then set the file
  const fileInput = popup.locator('input[type="file"]'); // adjust selector if needed
  await fileInput.setInputFiles(filePath);

  // 4) optionally assert
  await expect(fileInput).toHaveValue(/test\.pdf$/);
  // or check popup text confirmation
  await expect(popup.locator('text=test.pdf')).toBeVisible();
}}


module.exports ={PractiseTestPage};