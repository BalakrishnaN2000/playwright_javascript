import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import { HomePage} from '../pages/homePage';
import { CartPage } from '../pages/cartPage';

test('Login test', async ({page}) => {

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await expect(page.locator(loginPage.swagLabsLogo)).toBeVisible();
    await expect(page.locator(loginPage.swagLabsLogo)).toHaveText("Swag Labs");
    await loginPage.doLogin("standard_user", "secret_sauce");
    await page.waitForTimeout(3000);

    // Add to Cart
    const homePage = new HomePage(page);
    await expect(page.locator(homePage.productsTitle)).toBeVisible();
    await expect(page.locator(homePage.productsTitle)).toHaveText("Products");
    await homePage.addProductToCart("Sauce Labs Fleece Jacket");

    await homePage.goToCart();
    await page.waitForTimeout(3000);

    // Cart Page
    const cartPage = new CartPage(page);
    await expect(cartPage.getCartTitle()).toHaveText("Your Cart");
    expect(await cartPage.checkProductInCart("Sauce Labs Fleece Jacket")).toBe(true);
    await page.waitForTimeout(3000);
});