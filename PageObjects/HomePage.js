const { expect } = require('@playwright/test');

class HomePage{

    constructor(page){
        this.page = page;
        this.productsList = page.locator('[class="card-body"]');
    }

    async waitForProductsToLoad(){
        await this.page.waitForLoadState('networkidle');
        await this.productsList.last().waitFor({ state: 'visible' });
    }

    async verifyProductIsDisplayed(productName){
        const product = await this.productsList.filter({ hasText: productName }).locator('h5 b');
        console.log(await product.textContent());
        await expect(product).toBeVisible();
    }

    async getProductPrice(productName){
        const product = await this.productsList.filter({ hasText: productName }).locator('div.text-muted');
        let priceText = await product.textContent();
        return priceText.replace('$', '').trim();
    }

    async clickToViewProductDetails(productName){
        const product = await this.productsList.filter({ hasText: productName }).getByRole('button', { name: 'View'});
        await product.click();
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports = { HomePage };