const { test, expect } = require("@playwright/test");

test("Dropdown", async ({ page }) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator("button.multiselect").click();

    // Check number of options
    const options = page.locator("ul.multiselect-container.dropdown-menu li");
    await expect(options).toHaveCount(14);

    // Loop through options and select Angular, Java, Python
    const count = await options.count();
    for (let i = 0; i < count; i++) {
        const option = options.nth(i);
        const text = (await option.textContent())?.trim();
        if (text.includes("Angular") || text.includes("Java") || text.includes("Python") || text.includes("HTML")) {
            await option.locator("input").click();
        }
    }

    await page.waitForTimeout(4000);  // Just for demo pause
});
