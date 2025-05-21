import {test, expect} from "@playwright/test";

test("Test1", async ({page}) => {

    await page.goto("https://www.amazon.in");
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
});

test("Test2", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
});

test("Test3", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
});
