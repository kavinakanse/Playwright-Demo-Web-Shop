import  RegisterPage from './RegisterPage';
import  LoginPage  from './LoginPage';
import  AddToCartPage  from './AddToCartPage';
import AddressPage from './AddressPage';
import CheckoutPage from './CheckoutPage';
import Address from './Address';
import ShippingMethod  from './ShippingMethod';
import PaymentMethod  from './PaymentMethod';
import PaymentInformation from './PaymentInformation';

class POManager{

    constructor(page){

        this.page = page;
        // Instantiate all Page Objects.
        this.register = new RegisterPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.addToCart = new AddToCartPage(this.page);
        this.addressPage = new AddressPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.address = new Address(this.page);
        this.shippingMethod = new ShippingMethod(this.page);
        this.paymentMethod = new PaymentMethod(this.page);
        this.paymentInformation = new PaymentInformation(this.page);


    }

    // Getter Methods for Each Page Object

    getRegisterPage(){
        return this.register;
    }

    getLoginPage(){
        return this.loginPage;
    }

    getAddToCartPage(){
        return this.addToCart;
    }

    getAddressPage(){
        return this.addressPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getAddress(){
        return this.address;
    }

    getShippingMethod(){
        return this.shippingMethod;
    }

    getPaymentMethod(){
        return this.paymentMethod;
    }
    
    getPaymentInformation(){
        return this.paymentInformation;
    }
}

export default POManager;