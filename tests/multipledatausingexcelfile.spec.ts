import test from "@playwright/test";
import { AdminLogin } from "../Pages/AdminLogin";
import { AddSuppliers } from "../Pages/AddSuppliers";
import { AddCustomers } from "../Pages/AddCustomers";
import { AdminLogout } from "../Pages/AdminLogout";
import { ExcelUtility } from "../Utiles/ExcelUtility";
import path from "path";

let login: AdminLogin;
let supplier: AddSuppliers;
let customer: AddCustomers;
let logout: AdminLogout;
//to store excel sheet data
let supdata:any
let cusdata:any
//read path of excel file
let filepath =path.join(__dirname,'../TestData/ERPExceldata.xlsx')
try {
    supdata =ExcelUtility.getExcelData(filepath,"supplierdata")
    cusdata =ExcelUtility.getExcelData(filepath,"customerdata")
    //console.log(supdata)
    //console.log(cusdata)
} catch (error) {
    console.log(error)
}
test.beforeEach(async({page})=>{
    login = new AdminLogin(page)
    await login.ERPUrl(process.env.BASE_URL!)
    await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
})
test.describe('ERP Modules',()=>{
    //supplier module
    for (const data of supdata) {
        test(`Supplier Multipedata ${data.SupplierName}`,async({page})=>{
           supplier = new AddSuppliers(page) 
           await supplier.addSupplierDeatils(
            data.SupplierName,
            data.Address,
            data.City,
            data.Country,
            data.ContactPerson,
            data.Phone,
            data.Email,
            data.Mobile,
            data.Notes
           )

        })
    }
 for (const data of cusdata) {
    test(`Add customer ${data.CustomerName}`,async({page})=>{
       customer = new AddCustomers(page) 
       await customer.addCustomerDatials(
        data.CustomerName,
        data.Address,
        data.City,
        data.Country,
        data.ContactPerson,
        data.Phone,
        data.Email,
        data.Mobile,
        data.Notes
       )

    })
}

})
test.afterEach(async({page})=>{
    logout = new AdminLogout(page)
    await logout.ERPLogout()
    await page.close()
}) 
