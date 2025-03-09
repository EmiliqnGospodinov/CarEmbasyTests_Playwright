import { type Locator, type Page } from "@playwright/test";

export default class LoginPage {
    //define Page
    readonly page: Page;
    //Define Locators for Constructor Example
    readonly mailTextBox: Locator;
    readonly passTextBox: Locator;
    readonly loginButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      
      //Centralizing Locators in the Constructor Example(For Small/Medium Size Projects)
      this.mailTextBox = page.getByLabel('* Имейл');
      this.passTextBox = page.getByLabel('* Парола');
      this.loginButton = page.getByRole('button', { name: 'Вход', exact: true })
    }

    //Lazy-Loaded Locators Using Getters Example(For Large/Complex Projects)
    get loginFailedMessage(): Locator {
        return this.page.getByText("Въведените данни са грешни.");
    }

    public async goto(){
        await this.page.goto("https://www.carembassy.com/login.html");
    }

    //Actions
    public async enterLoginCredentials(mail: string, password: string){
        await this.mailTextBox.fill(mail);
        await this.passTextBox.fill(password);
    }
    
    public async clickLoginButton(){
        await this.loginButton.click();
    }

}