This is experimental repo for trying some playwright functionalities like:
- Playwright devices configuration(2 browsers + 1 mobile device);
- Recording(screenshots + video) failed test cases;
- POM + Fixtures;
- Different Assertions(Snapshots of web page, list of elements to be visible, etc.);
- Storing Authentication information


1. Prerequisites
    Before running the tests, ensure you have the following installed:

    - [Node.js](https://nodejs.org/) (version 16 or later)
    - [Playwright](https://playwright.dev/) (installed via npm)
    - Registration in [CarEmbassy Site](https://www.carembassy.com/) (to use login credentials)

2. Installation
    - Clone this repository:
```sh   
       git clone https://github.com/your-username/your-playwright-repo.git
       cd your-playwright-repo
```
    - Install dependencies and Playwright browsers:
```sh
npm install
npx playwright install
```

3. First Run: Generate Authentication File

    - Before running tests that require authentication, generate an authentication file with valid credentials by:
        1. Go in file '\loginTests.spec.ts'
        2. Find "Successful login" test and on line 10 fill valid credentials(email and password) 
        3. Run: (This command runs the Successful login test, storing authentication data for later use.)
```sh
npx playwright test -g "Successful login" --project="Google Chrome"
```
        4. *Optional* Update snapshots for some of the tests:
```sh
npx playwright test --update-snapshots
```
        
4. To Run All Tests:
```sh
npx playwright test
```