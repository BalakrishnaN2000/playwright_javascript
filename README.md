# playwright_javascript
Playwright JavaScript Automation

Steps to generate Allure reports for Playwright:
1. Installation of "allure-playwright" module
    * npm i -D @playwright/test allure-playwright
2. Installing allure command line
    * npm install -g allure-commandline --save-dev
    (or)
    * sudo npm install -g allure-commandline --save-dev
3. playwright.config.js
    * reporter = ['allure-playwright', {outputFolder: 'my-allure-results'}]
    (or)
    * npx playwright test --reporter=allure-playwright
4. Run the tests
    * npx playwright test <tests/testfile.spec.js>
5. Generate allure report:
    * allure generate my-allure-results -o allure-report --clean
6. Open allure report:
    * allure open allure-report
