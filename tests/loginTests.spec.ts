import { expect } from '@playwright/test';
import { test } from './fixtures/basePage';

test.describe("Login tests", () => {
  test('Successful login', async ({ loginPage, welcomePage}) => {

    //Go to login page and login with valid cridentials
    await loginPage.goto();
    //input valid login credentials(mail, password) in string values below
    await loginPage.enterLoginCredentials("MAIL_HERE", "PASS_HERE");
    await loginPage.clickLoginButton();

    //Assert login is succesfull by checking url and text on page
    await expect(welcomePage.welcomeMessage).toBeVisible();
    //should be optimized
    await expect(welcomePage.page).toHaveURL("https://www.carembassy.com/welcome.html#info");

    //next line is used to make Authentication file
    await welcomePage.page.context().storageState({path: "./LoginAuth.json"});
  });

  test('Login with wrong cridentials', async ({ loginPage }) => {

    //Go to login page and login with valid cridentials
    await loginPage.goto();
    await loginPage.enterLoginCredentials("testmail", "123");
    await loginPage.clickLoginButton();

    //Assert login failed
    await expect(loginPage.loginFailedMessage).toBeVisible();
  });
});