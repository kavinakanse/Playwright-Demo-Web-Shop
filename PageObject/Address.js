
class Address{ 
    constructor(page){ 
        
        this.page = page;
        this.profileLnk = page.locator('.account');
        this.address = page.locator('.inactive');
        this.addAddress = page.locator('.add-address-button');
        this.firstName = page.locator('#Address_FirstName');
        this.lastName = page.locator('#Address_LastName');
        this.email = page.locator('#Address_Email');
        this.company = page.locator('#Address_Company');
        this.country = page.locator('#Address_CountryId');
        this.city = page.locator('#Address_City');
        this.address = page.locator('#Address_Address1');
        this.zipCode = page.locator('#Address_ZipPostalCode');
        this.phoneNo = page.locator('#Address_PhoneNumber');
        this.SaveBtn = page.locator('.save-address-button');
    }

    async navigateToAddress(){ 
       this.profileLnk.first().click();
       this.address.first().click();
       this.addAddress.click();
    }

    
}

export default Address