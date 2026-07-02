import { expect } from '@playwright/test';
class CartPage{

    constructor(page){
        this.page = page;
        this.cartButton  = page.locator('button[routerlink="/dashboard/cart"]');
    }

    async clickOnCartButton(){
        await this.cartButton.click();
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports = { CartPage };