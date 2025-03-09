import { type Locator, type Page } from "@playwright/test";
import Headers from "../sections/header.section";
import commonActions from "../utils/commonActions";

export default class HomePage extends commonActions {
    headers: Headers;

    constructor(page: Page){
        super(page);
        this.headers = new Headers(this.page);
    }

    public async goto(){
        await this.page.goto("https://www.carembassy.com/");
    }
        
    public getHeadersList(): Locator{
        return this.headers.headerList;
    }

}