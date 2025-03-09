import { expect } from '@playwright/test';
import { test } from './fixtures/basePage';

test.describe("Main(Home) Page Test Suite", () => {

    test("Homepage first look with screenshots", async ({ homePage }) =>{
        
        //go to site and close pop up
        await homePage.goto();
        await homePage.closeRulesWindow();
        //wait for dynamic elements to, this could be optimized
        await homePage.page.waitForTimeout(5000);



        //make snapshot
        await expect(homePage.page).toHaveScreenshot("home_page_full.png",
            {
                //snapshots the whole page
                fullPage: true,
                //hide header element to reduce flakiness by sessions
                mask: [homePage.headers.wholeHeader],
            }
        )
    })


        //Firefox is using "./LoginAuth.json" to be Logged in when the test is being built
    //Chrome is not using any additional setup

    //Passes on Chrome, fails on Firefox
    test("Home Page while not logged in", async ({ homePage , browserName}) => {

        //Skipping the test if browser is firefox(without auth file)
        //this is probably bad practice, should be run only in test runs where needed
        //if(browserName === 'firefox'){
        //    test.skip();
        //}

        //go to site and close pop up
        await homePage.goto();
        await homePage.closeRulesWindow();

        //assert header options match Not Logged User
        await expect(homePage.getHeadersList()).toHaveText([
            `Начало`,
            `Продукти`,
            `FAQ`,
            `Блог`,
            `Амбасадори`,
            `Контакти`,
            `Вход за клиенти`
          ]);

    });

    //Passes on Firefox, fails on Chrome
    test("Home Page while logged in", async ({ homePage , browserName}) => {

        //if(browserName = 'chromium'){
        //    test.skip();
        //}

        //go to site and close pop up
        await homePage.goto();
        await homePage.closeRulesWindow();

        //assert header options match Logged User
        await expect(homePage.getHeadersList()).toHaveText([
            `Начало`,
            `Продукти`,
            `FAQ`,
            `Блог`,
            `Амбасадори`,
            `Контакти`,
            `Профил`,
            `Изход`
        ]);

    });

    
});