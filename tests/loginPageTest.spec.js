const {test, expect} = require("@playwright/test");

test("Login page test", async ( {page} ) => {
   await page.goto("https://www.saucedemo.com/");
   
   const pageTitle = await page.title();
   const pageURL = page.url();

   console.log("Page Title: " + pageTitle);
   console.log("Page URL: " + pageURL);

   await expect(page).toHaveTitle("Swag Labs");
   await expect(page).toHaveURL("https://www.saucedemo.com/");

   await page.close();
});
