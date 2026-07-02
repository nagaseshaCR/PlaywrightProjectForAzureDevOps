const { expect, test } = require('@playwright/test');
class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('div[class="container mt-5"]  h2');
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
    }

    async verifyProductTitle(expectedTitle) {
        await this.productTitle.waitFor();
        const actualTitle = await this.productTitle.textContent();
        console.log('Actual Title: ' + actualTitle);
        await expect(await actualTitle.trim()).toBe(expectedTitle);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}
module.exports = { ProductDetailsPage };