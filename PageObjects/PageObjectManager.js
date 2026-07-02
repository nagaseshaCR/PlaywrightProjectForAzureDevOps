import { DashboardPage } from './DashboardPage.js';
import { LoginPage } from './LoginPage.js';
import { HomePage } from './HomePage.js';
import { ProductDetailsPage } from './ProductDetailsPage.js';
import { CartPage } from './CartPage.js';

class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.dashboardPage = new DashboardPage(page);
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.productDetailsPage = new ProductDetailsPage(page);
        this.cartPage = new CartPage(page);
    }

    getDashboardPage() {
        return this.dashboardPage;
    }
    getLoginPage() {
        return this.loginPage;
    }

    getHomePage(){
        return this.homePage;
    }

    getProductDetailsPage(){
        return this.productDetailsPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    
}
module.exports = { PageObjectManager };