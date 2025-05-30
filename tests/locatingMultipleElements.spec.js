import {test, expect} from "@playwright/test";

test("Locating multiple elements", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    // Locators
    const usernameInputLoc = page.locator("#user-name");
    const passwordInputLoc = page.locator("#password");
    const loginButttonLoc = page.locator("#login-button");
    const productsTitle = page.locator(".title");

    await usernameInputLoc.fill("standard_user")
    await passwordInputLoc.fill("secret_sauce");
    await loginButttonLoc.click();

    // Check for the header of the page
    // await expect(productsTitle).toBeVisible({timeout:10000});
    // await expect(productsTitle).toHaveText("Products");

    await page.waitForSelector('.title', { timeout: 10000 });
    await page.waitForFunction(() => {
        const el = document.querySelector('.title');
        return el && el.textContent.trim().includes("Products");
    });


    // Wait for the products to load
    await page.waitForSelector(`//a[contains(@id, "title_link")]`);

    // Locating multiple elements (Products)
    const productList = await page.$$(`//a[contains(@id, "title_link")]`);

    // Print the product names
    for (const product of productList) {
        const productName = await product.textContent();
        console.log(productName);
    }

    page.close();
});
