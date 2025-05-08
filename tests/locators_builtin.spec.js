const {test, expect} = require("@playwright/test");

test("Built-in Locators", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // page.getByAltText()
    const logo = page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    // page.getByPlaceholder()
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    // page.getByRole()
    await page.getByRole("button", {type: 'submit'}).click();

    // page.getByText()
    const nameText = await page.locator(`p[class*="userdropdown-name"]`).textContent();
    await expect(page.getByText(nameText)).toBeVisible();

});
