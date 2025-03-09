import { expect, devices } from '@playwright/test';
import { test } from './fixtures/basePage';


test.describe("Some mobile device Tests", ()=>{


    test("mobile headers present", async ({ homePage , browserName}) => {
        //bad way to skip tests if not on mobile
        if(browserName != 'webkit'){
            test.skip();
        }

        await homePage.goto();
        await homePage.closeRulesWindow();

        await expect(homePage.headers.mobileMenuIcon).toBeVisible();

    });
});