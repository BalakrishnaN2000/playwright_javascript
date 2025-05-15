const {test, expect} = require('@playwright/test');

test("Record video", async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    // Login to Home page
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    // Verify Logout is displayed
    await expect(page.locator("#logout2")).toBeVisible();;
});


/* In playwright.config.js file, 
   add the following code to enable video recording:
            use: {
                video: 'on',
            }
    The videos or screenshots will be shown in the test reports. // npx playwright show-report
*/