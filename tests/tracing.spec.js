import {test, expect} from '@playwright/test';

test("Trace view", async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    // Login to Home page
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    // Verify Logout is displayed
    const products = await page.$$(".hrefch");
    await expect(products.length).toBe(9);
    await expect(page.locator("#logout2")).toBeVisible();

});


/* Turn on Trace in playwright.config.js file 
    - .zip trace folder is created in the test-results folder
    - npx playwright show-trace trace.zip       // run this command to view the trace
    - if test is fails, then trace.zip will be attached to the test report, then
    - use the command npx playwright show-report to view the test report
    - In the test report, click on the trace.zip file at the bottom, to view the trace
*/
