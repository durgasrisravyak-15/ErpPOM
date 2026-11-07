import { Locator, Page } from "@playwright/test";

export class AddSuppliers{

    //declare variables for suppiler module 
    page: Page
    clickSuppliers: Locator
    clickAddIcon: Locator
    SupplierNumber: Locator
    SupplierName: Locator
    SAddress:Locator
    Scity: Locator
    Scountry: Locator
    ScontactPerson: Locator
    SphoneNum: Locator
    SEmail: Locator
    SmobileNum: Locator
    SNotes: Locator
    ClickAddBtn: Locator
    ClickconfirmOk: Locator
    clickAlertOk: Locator
    searchPanel: Locator
    searchTextBox: Locator
    searchButton: Locator
    SuppilerTable: Locator
    constructor(page:Page){
        this.page=page
        this.clickSuppliers = page.getByRole('link',{name :'Suppliers' })
        this.clickAddIcon = page.getByRole('link',{name: '+', description: 'Add' })
        this.SupplierNumber = page.locator('#x_Supplier_Number')
        this.SupplierName = page.locator('#x_Supplier_Name')
        this.SAddress = page.locator('#x_Address')   
        this.Scity = page.locator('#x_City')
        this.Scountry = page.locator('#x_Country')
        this.ScontactPerson = page.locator('#x_Contact_Person')
        this.SphoneNum = page.locator('#x_Phone_Number')
        this.SEmail = page.locator('#x__Email')
        this.SmobileNum = page.locator('#x_Mobile_Number')
        this.SNotes = page.locator('#x_Notes')
        this.ClickAddBtn = page.locator('#btnAction')
        this.ClickconfirmOk = page.getByText('OK!', {exact:true})
        this.clickAlertOk = page.locator(".ajs-button.btn.btn-primary")
        this.searchPanel = page.locator('..glyphicon.glyphicon-search.ewIcon')
        this.searchTextBox = page.locator('#psearch')
        this.searchButton = page.locator('#btnsubmit')
        this.SuppilerTable = page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(6) div span span')
}
async addSupplierDetails(sname:string,Address:string,city:string,country:string,cperson:string,
    pnumber:string,email:string,mnumber:string,notes:string)
    {   
        await this.clickSuppliers.waitFor()
        await this.clickSuppliers.click()
        await this.clickAddIcon.waitFor()
        await this.clickAddIcon.click()
        await this.SupplierNumber.waitFor()
        const Ex_num = await this.SupplierNumber.inputValue()
        await this.SupplierName.fill(sname)
        await this.SAddress.fill(Address)
        await this.Scity.fill(city)
        await this.Scountry.fill(country)
        await this.ScontactPerson.fill(cperson)
        await this.SphoneNum.fill(pnumber)
        await this.SEmail.fill(email)
        await this.SmobileNum.fill(mnumber)
        await this.SNotes.fill(notes)
        await this.ClickAddBtn.click()
        await this.ClickconfirmOk.waitFor()
        await this.ClickconfirmOk.click()
        await this.clickAlertOk.waitFor()
        await this.clickAlertOk.click()
        await this.searchPanel.waitFor()
        if (!await this.searchTextBox.isVisible)
            await this.searchPanel.click()
            await this.searchTextBox.clear()
            await this.searchTextBox.fill(Ex_num)
        const Act_Num = await this.SuppilerTable.innerText()
        if((await Act_Num).match(Ex_num))
        {
            console.log(`Supplier Number Found in table ${Ex_num}  ${Act_Num}`)
        }
        else
        {
            console.log(`Supplier Number not Found in table ${Ex_num}  ${Act_Num}`)
        }
    }
}
