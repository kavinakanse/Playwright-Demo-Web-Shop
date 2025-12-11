import CheckoutPage from './CheckoutPage';

class PaymentInformation{

    constructor(page){

        this.page = page;

        // Locators for all checkout fields
        this.checkoutPage = new CheckoutPage(this.page);
        this.cardType = page.locator('.dropdownlists');
        this.cardHolderName = page.getByRole('textbox', { name: 'Cardholder name' });
        this.cardNumber = page.getByRole('textbox', { name: 'Card number' });
        this.expireMonth = page.getByLabel('Expiration date');
        this.expireYear = page.locator('#ExpireYear');
        this.cardCode = page.locator('#CardCode');
        this.pONumber = page.locator('#PurchaseOrderNumber');

    }

    //Click on continue for Cash on delivery method.
    async setCod(){
        await this.checkoutPage.continueBtn().nth(4).click();
    }

    //Click on continue for Check/Money Order method.
    async setCheckOrder(){
        await this.checkoutPage.continueBtn().nth(4).click();
    }

    async setCreditCardInfo(cardType,cardName,cardNumber,expireMonth,expireYear,cvv){

        // Fill all credit card fields
        await this.cardType.selectOption(cardType);
        await this.cardHolderName.fill(cardName);
        await this.cardNumber.fill(cardNumber);
        await this.expireMonth.selectOption(expireMonth);
        await this.expireYear.selectOption(expireYear);
        await this.cardCode.fill(cvv);
        // Continue to next step
        await this.checkoutPage.continueBtn().nth(4).click();
    }

    // Fill Purchase Order number for PO-based payment method and continue
    async setPurchaseOrder(pOnumber){
        await this.pONumber.fill(pOnumber);
        await this.checkoutPage.continueBtn().nth(4).click();
    }

}

export default PaymentInformation ;