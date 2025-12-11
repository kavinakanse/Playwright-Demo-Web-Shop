import { expect } from '@playwright/test';

class AddToCartPage {
    constructor(page) {
        this.page = page;

        // locators
        this.book = page.getByRole('link', { name: 'Books' });
        this.selectBook = page.getByRole('link', { name: 'Computing and Internet', exact: true });
        this.addToCartBtn = page.locator('#add-to-cart-button-13');
        this.cartQty = page.locator('.cart-qty');
    }

    async navigateToBook() {
        await this.book.first().click();
    }

    async getBook() {
        await this.selectBook.click();
        await this.addToCartBtn.click();
    }

    async getcartCount(){
        const quantity = await this.cartQty.innerText();
        return Number(quantity.replace(/[()]/g, ''));
    }

    async addToCart(){
        await this.page.locator('.ico-cart').first().click();
    }
    
    // verifyCartCountIncreased(before, after){
    //     expect(after).toBeGreaterThan(before);
    // }
}

export default AddToCartPage ;