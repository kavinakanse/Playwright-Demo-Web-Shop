import { expect } from '@playwright/test';

class RegisterPage{

    constructor(page){
        this.page = page;

        // locators
        this.registerLnk = page.getByRole('link', { name: 'Register' });
        this.male = page.getByRole('radio', { name: 'Male', exact: true });
        this.female = page.getByRole('radio', { name: 'Female' });
        this.firstName = page.getByRole('textbox', { name: 'First name:' });
        this.lastName = page.getByRole('textbox', { name: 'Last name:' });
        this.email = page.getByRole('textbox', { name: 'Email:' });
        this.password = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm password:' });
        this.registerBtn = page.getByRole('button', { name: 'Register' });
    }

    // navigate site
    async goTo(){
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    // fill registration form
    async regitrationProcess(firstName, lastName, email, password, confirmPassword){
        await this.registerLnk.click();
        await this.male.check();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.registerBtn.click();
        // await this.page.pause();
    }

    // verify result
    async verifyRegistrationSuccess(){
        await expect(this.page.getByText('Your registration completed')).toBeVisible();
    }
          
}

export default RegisterPage;