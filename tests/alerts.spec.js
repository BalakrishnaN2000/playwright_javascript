import {test, expect} from "@playwright/test";

test("Alert with OK", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling Dialog window handler
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })
    await page.locator("//button[normalize-space()='Simple Alert']").click();
    // await page.waitForTimeout(5000)

});

test("Confirmation dialog", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling Dialog window handler
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
    })
    await page.locator("//button[normalize-space()='Confirmation Alert']").click();
    // await page.waitForTimeout(5000)\
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");

});

test("Prompt dialog", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling Dialog window handler
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");

        await dialog.accept("Thomas Shelby");
    })
    await page.locator("//button[normalize-space()='Prompt Alert']").click();
    // await page.waitForTimeout(5000);
    await expect(page.locator("#demo")).toHaveText("Hello Thomas Shelby! How are you today?");
    await page.waitForTimeout(5000);
});
