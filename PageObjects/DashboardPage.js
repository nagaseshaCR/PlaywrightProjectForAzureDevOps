
class DashboardPage {
    constructor(page) {
        this.page = page;
    }
    
    getProducts(){
        return this.page.locator('.card-body');
    }

   
}
module.exports = { DashboardPage };