const {test, expect} = require("@playwright/test");

test("Handling table", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator("#productTable");

    // total number of row & columns
    const columns = table.locator("thead tr th");
    console.log("Number of columns: " + await columns.count());

    const rows = table.locator("tbody tr");
    console.log("Number of rows: " + await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    // select check box for Smartwatch
    /*
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    });
    await matchedRow.locator("input").check();
*/

    // Select multiple products by re-usable function
    await selectProduct(rows, page, "Smartphone");
    await selectProduct(rows, page, "Laptop");
    await selectProduct(rows, page, "Wireless Earbuds");
    
    await page.waitForTimeout(4000);

    // Handle the pagination for the table
    const pages = page.locator("#pagination li a");

    for (let currentPage = 0; currentPage < await pages.count(); currentPage++) {
        if (currentPage > 0) {
            await pages.nth(currentPage).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            for (let j = 0; j < await columns.count()-1; j++) {
                const cellValue = await rows.nth(i).locator("td").nth(j).textContent();
                console.log(cellValue);
            }
        }
    }
});

// function to select multiple products
async function selectProduct(rows, page, productName) {
    const matchedRow = rows.filter(
        {
            has: page.locator('td'),
            hasText: productName
        }
    )
    await matchedRow.locator("input").check();
};
