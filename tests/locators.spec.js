// const {test, expect} = require("@playwright/test");
import { test, expect } from '@playwright/test';

test("Locators", async ({page}) => {
    await page.goto("https://saucedemo.com/");

    // Locators
    const usernameInputLoc = page.locator("#user-name");
    const passwordInputLoc = page.locator("#password");
    const loginButttonLoc = page.locator("#login-button");
    const productsTitle = page.locator(".title");

    await usernameInputLoc.fill("standard_user")
    await passwordInputLoc.fill("secret_sauce");
    await loginButttonLoc.click();

    // Check for the header of the page
    expect(productsTitle).toBeVisible();
    expect(productsTitle).toHaveText("Products");

    page.close();
});
