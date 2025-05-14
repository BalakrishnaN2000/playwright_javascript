import {test, expect} from '@playwright/test';
import path from 'path';

test("page screenshot", async ({page}) => {
    await page.goto("https://www.amazon.in/");

    await page.screenshot({path: 'tests/screenshots/amazon_homepage_' + Date.now() + '.png'});
});

test("Full page screenshot", async ({page}) => {
    await page.goto("https://www.amazon.in/");

    await page.screenshot({path: 'tests/screenshots/amazon_fullpage_' + Date.now() + '.png', fullPage: true});
});

test.only("Element screenshot", async ({page}) => {
    await page.goto("https://www.amazon.in/");

    await page.locator("#nav-logo").screenshot({path: 'tests/screenshots/amazon_logo_' + Date.now() + '.png'});
});