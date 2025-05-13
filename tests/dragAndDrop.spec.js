const {test, expect} = require('@playwright/test');

test("Drag and drop", async ({page}) => {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

    const washington = page.locator("#box3");
    const usa = page.locator("#box103");
    
    // Drag and drop - method 1
    await washington.dragTo(usa);
    await page.waitForTimeout(2000);

    // Drag and drop - method 2 (manually)
    const rome = page.locator("#box6");
    const italy = page.locator("#box106");
    await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();
    await page.waitForTimeout(2000);
})
