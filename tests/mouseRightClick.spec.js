const {test, expect} = require('@playwright/test');

test("Mouse Right Click", async ({page}) => {

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightClickBtn = page.locator('//span[normalize-space()="right click me"]');

    // Mouse right click
    await rightClickBtn.click({button: "right"});
    await page.waitForTimeout(2000)
});
