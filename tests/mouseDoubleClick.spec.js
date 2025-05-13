const {test, expect} = require('@playwright/test');

test("Mouse Double Click", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const doubleClickBtn = page.locator("//button[normalize-space()='Copy Text']");
    // Mouse double click
    await doubleClickBtn.dblclick();
    const field2 = await page.locator("#field2");

    expect(field2).toHaveValue("Hello World!");
    await page.waitForTimeout(2000);
})
