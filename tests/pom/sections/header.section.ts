import { type Locator, type Page } from "@playwright/test";

export default class Headers{
    readonly page: Page;
    readonly headersList: Locator;
    readonly wholeHeader: Locator;
    readonly mobileMenuIcon: Locator;

    constructor(page: Page){
        this.page = page;
        this.wholeHeader = page.getByText('0887788179 Начало Продукти');
        this.headersList = page.locator('.gn-main-menu li a');
        this.mobileMenuIcon = page.locator('#gs-mobile-menu');
    }
    
    get headerList(): Locator {
        return this.headersList;
    }

    get mobileIcon(): Locator {
        return this.mobileMenuIcon
    }

}
