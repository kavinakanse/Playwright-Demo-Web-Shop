class LoginPage {

    constructor(page) {

        this.page = page;
        // Locators for all Login fields
        this.loginLnk = page.getByRole('link', { name: 'Log in' });
        this.email = page.getByRole('textbox', { name: 'Email:' });
        this.password = page.getByRole('textbox', { name: 'Password:' });
        this.loginBtn = page.getByRole('button', { name: 'Log in' });
    }

    //navigate to demo web shop page
    async goTo() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    // perform login process.
    async getLogin(email, password) {
        await this.loginLnk.click();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();

    }

    //verify login is success.
    // verifyLoginSuccess(email){
    //     expect(this.page.locator('body')).toContainText(email);
    // }
}

export default LoginPage ;