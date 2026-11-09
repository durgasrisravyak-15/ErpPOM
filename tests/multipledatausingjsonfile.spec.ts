
import { AdminLogin } from "../Pages/AdminLogin";
import { AddSuppliers } from "../Pages/AddSuppliers";
import { AddCustomers } from "../Pages/AddCustomers";
import { AdminLogout } from "../Pages/AdminLogout";
import data from "../TestData/ERP.json"
import test from "@playwright/test";

let login:AdminLogin
let supplier: AddSuppliers
let customer: AddCustomers
let logout: AdminLogout

test.beforeEach(async({page})=>{
    login =new AdminLogin(page)
    await login.ERPUrl(process.env.BASE_URL!)
    await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)

})
test.describe('ERP multiple data',()=>{
    //test for supplier module
    for(const sup of data.suppliers)
    {
        test(`validate supplier ${sup.SupplierName}`, async({page})=>{
            supplier = new AddSuppliers(page)
            await supplier.addSupplierDetails(
                sup.SupplierName,
                sup.Address,
                sup.City,
                sup.Country,
                sup.ContactPerson,
                sup.PhoneNumber,
                sup.Email,
                sup.MobileNumber,
                sup.Notes
            )
                
        }) 
    }
    //test for coustomer module
    for(const cus1 of data.customers){
        test(`validate customer ${cus1.CustomerName} `, async({page})=>{
            customer = new AddCustomers(page)
            await customer.addCustomerDetails(
                cus1.CustomerName,
                cus1.Address,
                cus1.City,
                cus1.Country,
                cus1.ContactPerson,
                cus1.PhoneNumber,
                cus1.Email,
                cus1.MobileNumber,
                cus1.Notes
            )
        })
    }
})
 test.afterEach(async({page})=>{
        logout= new AdminLogout(page)
        await logout.ERPLogout()
        await page.close()
    })