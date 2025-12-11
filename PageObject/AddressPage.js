class AddressPage {

    constructor(page) {

        this.page = page;

        // Locators for all billing address fields
        this.company = page.getByRole('textbox', { name: 'Company:' });
        this.country = page.getByLabel('Country:');
        this.city = page.getByRole('textbox', { name: 'City:' });
        this.address = page.getByRole('textbox', { name: 'Address 1:' });
        this.zipCode = page.getByRole('textbox', { name: 'Zip / postal code:' });
        this.phoneNo = page.getByRole('textbox', { name: 'Phone number:' });
        this.faxNo = page.getByRole('textbox', { name: 'Fax number:' });

    }

    async setAddress(company, country, city, address, zipCode, phoneNo) {

         // Check if billing address form is displayed
        if (await this.company.isVisible()) {
        //  await this.company.waitFor({ state: 'visible', timeout: 5000 });
             // Fill each address field
            await this.company.fill(company);
            await this.country.selectOption(country);
            await this.city.fill(city);
            await this.address.fill(address);
            await this.zipCode.fill(zipCode);
            await this.phoneNo.fill(phoneNo);
        }

    }
}

export default AddressPage ;