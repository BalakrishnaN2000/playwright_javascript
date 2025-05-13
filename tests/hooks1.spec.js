const {test, expect} = require('@playwright/test');

test("Home page test", async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    // Login to Home page
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    // verify home page
    const products = await page.$$(".hrefch");
    await expect(products.length).toBe(9);

    // Logout
    await page.locator("#logout2").click();
    await page.waitForTimeout(2000);
})

test("Add product to cart", async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    // Login to Home page
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    // Add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

    //alert handling
    page.on("dialog", async dialog => {
        await expect(dialog.message()).toEqual("Product added.");
        await page.waitForTimeout(2000);
        await dialog.accept();
    })
    await page.locator(".btn-success").click();
    await page.waitForTimeout(2000);

    // Logout
    await page.locator("#logout2").click();
})