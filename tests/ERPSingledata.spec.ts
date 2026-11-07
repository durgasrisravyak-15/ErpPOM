
import { AdminLogin } from "../Pages/AdminLogin";
import { AddSuppliers } from "../Pages/AddSuppliers";
import { AddCustomers } from "../Pages/AddCustomers";
import { AdminLogout } from "../Pages/AdminLogout";
import test from "@playwright/test";
let login: AdminLogin
let sup : AddSuppliers
let cus: AddCustomers
let logout : AdminLogout
test.beforeEach(async({page})=>{
    login = new AdminLogin(page)
    await login.ERPUrl(process.env.BASE_URL!)
    await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
})
test.describe('ERP Managent Modules',()=>{
    test('Validate Suppler',async({page})=>{
        sup = new AddSuppliers(page)
        await sup.addSupplierDetails('John','USA','London','UK','Qedge','876543','John@gmail.com','765432','AddedSupplier')

    })
    test('Validate Customer',async({page})=>{
        cus = new AddCustomers(page)
        await cus.addCustomerDetails('Test123','SrNagr','Hyd','India','Ranga','98765','test@gmail.com','76543','Customer Added')

    })
})
test.afterEach(async({page})=>{
    logout = new AdminLogout(page)
   await logout.ERPLogout()
   await page.close()
})