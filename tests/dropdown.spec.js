const {test, expect} = require("@playwright/test");

test("Dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Multiple ways to select option from the dropdown
    await page.selectOption("#country", "india");   // By text
    await page.locator("#country").selectOption("india"); // By visible text
    await page.locator("#country").selectOption({label: "India"}); // By label
    await page.locator("#country").selectOption({value: "uk"}); // By value
    await page.locator("#country").selectOption({index: 1}); // By index

    // Assertions for dropdown
    // 1. Check for number of options in the dropdown - Approach 1
    const options = await page.locator("#country option");
    await expect(options).toHaveCount(10);

    // 2. Check for number of options in the dropdown - Approach 2
    const optionsList = await page.$$("#country option");
    expect(optionsList.length).toBe(10);

    // 3. Check for presence of an option in the dropdown - Approach 1
    const content = await page.locator("#country").textContent();
    // console.log(content); // return string
    expect(content.includes("India")).toBeTruthy(); // true

    // 4. Check for presence of an option in the dropdown - Approach 2 - looping
    const dropdownContent = await page.$$("#country option");
    let isPresent = false;
    for (const option of dropdownContent) {
        const text = await option.textContent();
        if (text.includes("Germany")) {
            isPresent = true;
            break;
        }
    }
    expect(isPresent).toBeTruthy();

});
