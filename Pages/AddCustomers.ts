import { Locator, Page } from "@playwright/test"
export class AddCustomers{
    //declare variables for supplier module 
        page: Page
        clickCustomers: Locator
        clickAddIcon: Locator
        CustomerNumber: Locator
        CustomerName: Locator
        CAddress:Locator
        Ccity: Locator
        Ccountry: Locator
        CcontactPerson: Locator
        CphoneNum: Locator
        CEmail: Locator
        CmobileNum: Locator
        CNotes: Locator
        ClickAddBtn: Locator
        ClickconfirmOk: Locator
        clickAlertOk: Locator
        searchPanel: Locator
        searchTextBox: Locator
        searchButton: Locator
       CustomerTable: Locator
       constructor(page:Page){
        this.page=page
        this.clickCustomers = page.getByRole('link', {name : 'Customers'})
        this.clickAddIcon =page.getByRole('link',{name: '+' , description: 'Add'})
        this.CustomerNumber= page.locator('#x_Customer_Number')
        this.CustomerName = page.locator('#x_Customer_Name')
        this.CAddress = page.locator('x_Address')
        this.Ccity =page.locator('x_City')
        this.Ccountry= page.locator('x_Country')
        this.CcontactPerson = page.locator('#x_Contact_Person')
        this.CphoneNum = page.locator('#x_Phone_Number')
        this.CEmail = page.locator('#x__Email')
        this.CmobileNum = page.locator('#x_Mobile_Number')
        this.CNotes = page.locator('#x_Notes')
        this.ClickAddBtn = page.locator('#btnAction')
        this.ClickconfirmOk = page.getByText('OK!', {exact:true})
        this.clickAlertOk = page.locator(".ajs-button.btn.btn-primary")
        this.searchPanel = page.locator('.glyphicon.glyphicon-search.ewIcon')
        this.searchTextBox = page.locator('#psearch')
        this.searchButton = page.locator('#btnsubmit')
        this.CustomerTable = page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(5) div span span')
       }
       async addCustomerDetails(Cname:string, Address:string, city:string, country:string, 
        cperson:string, pnumber:string, email:string, mnumber: string, notes:string ){
            await this.clickCustomers.waitFor()
            await this.clickCustomers.click()
            await this.clickAddIcon.waitFor()
            await this.clickAddIcon.click()
            await this.CustomerNumber.waitFor()
            const Ex_num2 = await this.CustomerNumber.inputValue()
            await this.CustomerName.fill(Cname)
            await this.CAddress.fill(Address)
            await this.Ccity.fill(city)
            await this.Ccountry.fill(country)
            await this.CcontactPerson.fill(cperson)
            await this.CphoneNum.fill(pnumber)
            await this.CEmail.fill(email)
            await this.CmobileNum.fill(mnumber)
            await this.CNotes.fill(notes)
            await this.ClickAddBtn.click()
            await this.ClickconfirmOk.waitFor()
            await this.ClickconfirmOk.click()
            await this.clickAlertOk.waitFor()
            await this.clickAlertOk.click()
            await this.searchPanel.waitFor()
            if(!await this.searchTextBox.isVisible())
                await this.searchPanel.click()
                await this.searchTextBox.clear()
                await this.searchTextBox.fill(Ex_num2)
            const Act_Num = await this.CustomerTable.innerText()
                if((await Act_Num).match(Ex_num2))
                    {
                        console.log(`Customer Number Found in table ${Ex_num2}  ${Act_Num}`)
                    }
                 else
                    {
                         console.log(`Customer Number not Found in table ${Ex_num2}  ${Act_Num}`)
                    }           
        }
}
