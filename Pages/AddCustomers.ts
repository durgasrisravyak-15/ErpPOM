import { Locator, Page } from "@playwright/test"

export class AddCustomers{
    //declare varibales for supplier module
        page: Page
        clickCustomers: Locator
        clickAddIcon: Locator
        CustomerNumber: Locator
        CustomerName :Locator
        CAddress :Locator
        Ccity : Locator
        Ccountry: Locator
        CContactPerson : Locator
        CphoneNum : Locator
        CEmail : Locator
        CmobileNum : Locator
        CNotes: Locator
        ClickAddBtn : Locator
        clickconfirmOk : Locator
        clickAlertok : Locator
        searchPanel : Locator
        searchTextBox: Locator
        searchButton :Locator
        SupplierTable :Locator
        constructor(page:Page)
        {
          this.page=page
        this.clickCustomers=page.getByRole('link', { name: 'Customers' })
        this.clickAddIcon = page.locator("span[data-caption='Add']").first()
        this.CustomerNumber =page.locator('#x_Customer_Number')
        this.CustomerName = page.locator('#x_Customer_Name')
        this.CAddress =  page.locator('#x_Address')
        this.Ccity =  page.locator('#x_City')
        this.Ccountry =  page.locator('#x_Country')
        this.CContactPerson = page.locator('#x_Contact_Person')
        this.CphoneNum =  page.locator('#x_Phone_Number')
        this.CEmail =  page.locator('#x__Email')
        this.CmobileNum =  page.locator('#x_Mobile_Number')
        this.CNotes =  page.locator('#x_Notes')
        this.ClickAddBtn =  page.locator('#btnAction')
        this.clickconfirmOk = page.getByText('OK!', { exact: true })
        this.clickAlertok =  page.locator('button.ajs-button.btn.btn-primary')
        this.searchPanel =  page.locator('.glyphicon.glyphicon-search.ewIcon')
        this.searchTextBox =  page.locator('#psearch')
        this.searchButton =  page.locator('#btnsubmit')
        this.SupplierTable =  page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(5) div span span')
        }
        async addCustomerDatials(cname:string,address:string,city:string,country:string,
            cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
            {
                await this.clickCustomers.waitFor()
       await this.clickCustomers.click()
       await this.clickAddIcon.waitFor()
       await this.clickAddIcon.click()
       await this.CustomerNumber.waitFor()
       const Exp_num = await this.CustomerNumber.inputValue()
       await this.CustomerName.fill(cname)
       await this.CAddress.fill(address)
       await this.Ccity.fill(city)
       await this.Ccountry.fill(country)
       await this.CContactPerson.fill(cperson)
       await this.CphoneNum.fill(String(pnumber));
       await this.CEmail.fill(email)
       await this.CmobileNum.fill(String(mnumber));
       await this.CNotes.fill(notes)
       await this.ClickAddBtn.click()
       await this.clickconfirmOk.waitFor()
       await this.clickconfirmOk.click()
       await this.clickAlertok.waitFor()
       await this.clickAlertok.click()
       await this.searchPanel.waitFor()
       if(!await this.searchTextBox.isVisible())
        await this.searchPanel.click()
        await this.searchTextBox.clear()
        await this.searchTextBox.fill(Exp_num)
        await this.searchButton.click()
        const Act_Num =await this.SupplierTable.innerText()
        if((await Act_Num).match(Exp_num))
        {
            console.log(`Customer Number Found in table ${Exp_num}  ${Act_Num}`)
        }
        else{
            console.log(`Customer Number Not Found in table ${Exp_num}  ${Act_Num}`)
        }

            }

}