import { type Page, type Locator } from "@playwright/test";

export default class commonActions{
    readonly page: Page;
    readonly rulesWinwow: Locator;

    constructor(page: Page){
        this.page = page;
        this.rulesWinwow = page.getByRole('button', { name: 'Приемам всички' });
    }
    
    
    public async closeRulesWindow(){
        await this.rulesWinwow.click();
    }

}
