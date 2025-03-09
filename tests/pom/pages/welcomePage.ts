import { type Locator, type Page } from "@playwright/test";

export default class WelcomePage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    
    get welcomeMessage(): Locator {
        return this.page.getByText("Здравейте !");
    }
}