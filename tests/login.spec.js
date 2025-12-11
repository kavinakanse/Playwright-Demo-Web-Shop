import {test, expect} from '@playwright/test';
import POManager from '../PageObject/POManager';
const data = JSON.parse(JSON.stringify(require("./Utils/RegistrationData.json")));

test('@login Login Process', async({page})=>{

    const user = data[0];

    // POM setup
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage(page);

    //navigate to login and complete login
    await loginPage.goTo();
    await loginPage.getLogin(user.email, user.password);

    //verify login success
    expect(page.locator('body')).toContainText(user.email);
   
    // await page.pause();
})