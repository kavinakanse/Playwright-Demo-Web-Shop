import test, { expect }  from '@playwright/test';
import POManager from '../PageObject/POManager';
const data = JSON.parse(JSON.stringify(require("./Utils/RegistrationData.json")));


test('@checkout Checkout Process', async ({ page }) => {

    const user = data[0];

    // POM setup
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage(page);

    //navigate to login and complete login
    await loginPage.goTo();
    await loginPage.getLogin(user.email, user.password);
    expect(page.locator('body')).toContainText(user.email);

    //add to cart product
    const addToCartPage = poManager.getAddToCartPage(page);
    await addToCartPage.navigateToBook();
    await addToCartPage.getBook();
    const before = await addToCartPage.getcartCount();
    await addToCartPage.addToCart();
    const after = await addToCartPage.getcartCount();

    //verify cart count is grater than  previous one
    expect(after).toBeGreaterThan(before);
    // addToCartPage.verifyCartCountIncreased(before, after)

    //navigate to shopping cart
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.navigateToShoppingCart();
    await checkoutPage.shoppingCartProcess();
    const addressPage = poManager.getAddressPage();

    //Billing Address
    // await page.waitForSelector('.address-select', { timeout: 5000 })

    const addressDropdown = page.locator('.address-select')

    // await page.waitForTimeout(500);
    await page.waitForLoadState('load');

    const isAddressVisible = await addressDropdown.isVisible();
    console.log("isAddressVisible:", isAddressVisible);

    console.log(addressDropdown.isVisible());

    if (await addressDropdown.isVisible()) {
        console.log('Address Present')
        await checkoutPage.continueBtn().nth(0).click();
    } else {
        console.log('Address not Present')
        await addressPage.setAddress(user.company, user.country, user.city, user.address, user.zipCode, user.phoneNo)

        await checkoutPage.continueBtn().nth(0).click();
    }

    //Shipping Address
    await checkoutPage.continueBtn().nth(1).click();

    //Shipping Method
    const shippingMethod = poManager.getShippingMethod(page);
    await shippingMethod.checkGround();

    //Payment Method
    const paymentMethod = poManager.getPaymentMethod(page);
    await paymentMethod.checkCreditCard();

    // await checkoutPage.paymentMethod();
    const paymentInformation = poManager.getPaymentInformation(page);
    await paymentInformation.setCreditCardInfo(user.cardType, user.cardName, user.cardNumber, user.expireMonth, user.expireYear, user.cvv);

    //confirm order
    await checkoutPage.confirmBtn();

    //verify order confirmed
    await page.waitForLoadState('load');
    expect(checkoutPage.orderConfirmedMsg).toBeVisible();  
    // await checkoutPage.orderSuccess();



})