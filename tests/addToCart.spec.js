import {test, expect} from '@playwright/test';
import POManager from '../PageObject/POManager';
const data = JSON.parse(JSON.stringify(require("./Utils/RegistrationData.json")));


test('@addtocart Add to Cart Process', async({page})=>{

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
     
    
    // await page.pause();
})