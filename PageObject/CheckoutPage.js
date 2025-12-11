// const { expect } = require('@playwright/test');

class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Locators for all checkout process elements
        this.shoppingCart = page.getByRole('link', { name: 'Shopping cart' });
        this.termsOfService = page.locator('#termsofservice');
        this.checkout = page.getByRole('button', { name: 'Checkout' });

        // this.addressDropdown = page.locator('.address-select');
        // this.billingAddContinue = page.locator(".new-address-next-step-button");
        // this.shippingAddContinue = page.locator(".new-address-next-step-button");
        // this.shippingMethodContinue = page.locator(".shipping-method-next-step-button");
        // this.paymentMethodContinue = page.locator(".payment-method-next-step-button");
        // this.paymentInfoContinue = page.locator(".payment-info-next-step-button");

        this.continue = page.locator("input.button-1[value='Continue']");
        // this.paymentMethod = page.getByLabel("Credit Card");
        this.confirm = page.getByRole('button', { name: 'Confirm' });
        this.orderConfirmedMsg = page.getByText('Your order has been successfully processed!');

    }

    // Opens the shopping cart page.
    async navigateToShoppingCart() {
        await this.shoppingCart.first().click();
    }

    // Accept Terms of Service and proceed to checkout.
    async shoppingCartProcess() {
        await this.termsOfService.check();
        await this.checkout.click();
    }

    //Useful for multiple steps to continue process.
    continueBtn() {
        return this.continue;

    }

    //Clicks on the final Confirm Order button.
    async confirmBtn() {
        await this.confirm.click();
    }

    //verify and Logs the order success message displayed on the UI.
    // async orderSuccess() {
    //     // await expect(this.page.locator('.title')).toHaveText("Your order has been successfully processed!");
    //     const message = await this.orderConfirmedMsg.textContent();
    //     console.log(message);
    // }

    // async isAddressPresent() {
    //     //const options = this.addressDropdown.locator('option[value!=""]'); 
    //     //return await options.count() > 0; 
    //     return await this.addressDropdown.isVisible();
    // }


    // async setPaymentMethod() {
    //     await this.paymentMethod.check()
    // }


}

export default CheckoutPage ;