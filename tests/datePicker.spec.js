const {test, expect} = require("@playwright/test");

test("Handle Date picker", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("#datepicker").fill("04/23/2024");

    // Date picker
    await page.locator("#datepicker").click();  //to open the calendar
    const date = "23";
    const month = "April";
    const year = "2025";


    while(true) {
        const calendarMonth = await page.locator(".ui-datepicker-month").textContent();
        const calendarYear = await page.locator(".ui-datepicker-year").textContent();
    
        if (calendarMonth == month && calendarYear == year) {
            break;
        }
        await page.locator(".ui-datepicker-prev").click();  // to go to previous month
    }

    // select the date without using loop
    await page.click(`//td[@data-handler="selectDay"]/a[text()='${date}']`);


    await page.waitForTimeout(4000);

});
