import {test, expect} from '@playwright/test';
import POManager from '../PageObject/POManager'
const data = JSON.parse(JSON.stringify(require("./Utils/RegistrationData.json")));

test('@register Registration on DWS', async ({page})=>{
    
    const user = data[0];

    // test data
    // const firstName = 'sanu';
    // const lastName = 'sharma';
    // const email = 'sanu1112@gmail.com';
    // const password = 'sanu1234';
    // const confirmPassword = 'sanu1234';

    // POM setup
    const poManager = new POManager(page);
    const registerPage = poManager.getRegisterPage();
    const address = poManager.getAddress();

    // navigate and complete registration
    await registerPage.goTo();
    await registerPage.regitrationProcess(user.firstName, user.lastName, user.email, user.password, user.confirmPassword);

    // await address.NavigateToAddress();
    // await address.FillTheAddress(user.firstName, user.lastName, user.email, user.company, user.country, user.state,user.city,user.address,user.zipCode, user.phoneNo)
    
    // verification
    await expect(page.getByText('Your registration completed')).toBeVisible();
})


