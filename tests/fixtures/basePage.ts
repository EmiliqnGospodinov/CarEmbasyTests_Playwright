import { test as base } from "@playwright/test";
import LoginPage from "../pom/pages/loginPage";
import WelcomePage from "../pom/pages/welcomePage";
import HomePage from "../pom/pages/homePage"

export const test = base.extend<{
    loginPage: LoginPage;
    welcomePage: WelcomePage;
    homePage: HomePage;
}>({
    //Define fixtures
    homePage: async ({page}, use) =>{
        await use(new HomePage(page));
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    welcomePage: async ({page}, use) => {
        await use(new WelcomePage(page));
    }

})

