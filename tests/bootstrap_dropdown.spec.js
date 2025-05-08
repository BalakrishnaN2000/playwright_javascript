const {test, expect} = require("@playwright/test");

test("Dropdown", async ({page}) => {

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator("button.multiselect").click();

    // check number of options
    const options = await page.locator("ul li input");
    await expect(options).toHaveCount(11);

    // select options
    const optionsList = await page.$$("ul li input");
    for (const option of optionsList) {
        const text = await option.textContent().trim();
        if (text.includes("Angular") || text.includes("Java") || text.includes("Python")) {
            await option.click();
        }
    };

    await page.waitForTimeout(4000);

});
