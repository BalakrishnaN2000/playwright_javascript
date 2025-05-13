const {test, expect} = require("@playwright/test");

test("Mouse Hover", async ( {page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const pointMeLoc = page.locator('//button[normalize-space()="Point Me"]');
    const laptopsLoc = page.locator("//a[normalize-space()='Laptops']");

    // Mouse hover
    await pointMeLoc.hover();
    await laptopsLoc.click();

})
