import CheckoutPage from './CheckoutPage';

class PaymentMethod{

    constructor(page){
        this.page = page;
        this.checkoutPage = new CheckoutPage(this.page);
        this.cod = page.locator('#paymentmethod_0');
        this.moneyOrder = page.locator('#paymentmethod_1');
        this.creditCard = page.getByRole('radio', { name: 'Credit Card Credit Card' });
        this.purchaseOrder = page.locator('#paymentmethod_3');
    }

    // Select Cash on Delivery (COD) payment method and click Continue to move to the next step.
    async checkCOD(){
        await this.cod.click();
        await this.checkoutPage.continueBtn().nth(3).click();
    }

    // Select Check / Money Order payment method and click Continue to move to the next step.
    async checkMoneyOrder(){
        await this.moneyOrder.click();
        await this.checkoutPage.continueBtn().nth(3).click();
    }

    // Select Credit Card payment method and click Continue to move to the next step.
    async checkCreditCard(){
        await this.creditCard.click();
        await this.checkoutPage.continueBtn().nth(3).click();
    }

    // Select Purchase Order payment method and click Continue to move to the next step.
    async checkPurchaseOrder(){
        await this.purchaseOrder.click();
        await this.checkoutPage.continueBtn().nth(3).click();
    }
}

export default PaymentMethod ;