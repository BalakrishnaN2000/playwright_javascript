const {test, expect} = require("@playwright/test");

test("Autosuggest Dropdown", async ({page}) => {

    await page.goto("https://www.amazon.in/");

    await page.locator("input[aria-label*='Search']").fill("Samsung");

    await page.waitForSelector("//div[starts-with(@class,'autocomplete-results')]");

    const suggestions = await page.$$("div[class*='suggestion'][role='button']");

    for (let suggestion of suggestions) {
        const value = await suggestion.textContent();
        // console.log(value);
        if (value.includes("ultra")) {
            await suggestion.click();
            break;
        }
    }

    // await page.waitForTimeout(4000);
});
