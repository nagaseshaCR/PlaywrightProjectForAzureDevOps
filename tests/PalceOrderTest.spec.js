const {test, expect} = require('@playwright/test');
const { PageObjectManager } = require('../PageObjects/PageObjectManager');

test('Place Order', async ({ page }) => {
    const username = 'nagasesha.cr@gmail.com';
    const password = 'Seshu24@';
    const pageObjectManager = new PageObjectManager(page);
    const dashboardPage = pageObjectManager.getDashboardPage();
    const loginPage = pageObjectManager.getLoginPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.waitForLoadState('networkidle');
    await pageObjectManager.getLoginPage().login(username, password);
    await page.waitForLoadState('networkidle');
    await pageObjectManager.getHomePage().waitForProductsToLoad();
    await pageObjectManager.getHomePage().verifyProductIsDisplayed('ADIDAS ORIGINAL');
    const productPrice = await pageObjectManager.getHomePage().getProductPrice('ADIDAS ORIGINAL');
    console.log('Product Price: ' + productPrice);
    await pageObjectManager.getHomePage().clickToViewProductDetails('ADIDAS ORIGINAL');
    await pageObjectManager.getProductDetailsPage().verifyProductTitle('ADIDAS ORIGINAL');
    await pageObjectManager.getProductDetailsPage().addToCart();
    await pageObjectManager.getCartPage().clickOnCartButton();
})