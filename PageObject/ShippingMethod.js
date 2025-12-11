import CheckoutPage from './CheckoutPage';

class ShippingMethod{

    constructor(page){

        this.page = page;
        //Locators for Shipping method fields.
        this.checkoutPage = new CheckoutPage(this.page);
        this.ground = page.locator('#shippingoption_0');
        this.nextDayAir = page.locator('#shippingoption_1');
        this.secondDayAir = page.locator('#shippingoption_2');
    }
    
    //Select Ground Shipping Method and Continue for next step.
    async checkGround(){
        await this.ground.click();
        await this.checkoutPage.continueBtn().nth(2).click();
    }

    //Select Next Day Air Shipping Method and Continue for next step.
    async checkNextDayAir(){
        await this.nextDayAir.click();
        await this.checkoutPage.continueBtn().nth(2).click();
    }

    //Select Second Day Air Shipping Method and Continue for next step.
    async checkSecondDayAir(){
        await this.secondDayAir.click();
        await this.checkoutPage.continueBtn().nth(2).click();
    }
}
export default ShippingMethod;