# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatausingjsonfile.spec.ts >> ERP multiple data >> validate customer Kumar 
- Location: tests\multipledatausingjsonfile.spec.ts:42:13

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Stock Accounting" [ref=e6] [cursor=pointer]:
      - /url: .
    - strong [ref=e9]: Stock Accounting
  - text:       
  - generic [ref=e13]:
    - list [ref=e14]:
      - listitem [ref=e15]:
        - link " Help (Categories)" [ref=e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=e19]:
        - link " Login" [ref=e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=e21]: 
          - text: Login
    - list
  - generic [ref=e24]:
    - generic [ref=e27]:
      - generic [ref=e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic [ref=e33]:
      - generic [ref=e34]:
        - button "x" [ref=e35] [cursor=pointer]: ×
        - heading [level=4] [ref=e37]:
          - text: Login
          - link "" [ref=e38] [cursor=pointer]:
            - /url: javascript:void(0);
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: User Name
          - textbox "User Name" [active] [ref=e44]: admin
        - generic [ref=e45]:
          - generic [ref=e46]: Password
          - textbox "Password" [ref=e48]: master
        - generic [ref=e51] [cursor=pointer]:
          - text: Options
          - generic [ref=e52]: 
        - generic [ref=e54]:
          - button "Login" [ref=e55] [cursor=pointer]
          - button "Reset" [ref=e56] [cursor=pointer]
      - generic [ref=e58]:
        - link "Forgot Password" [ref=e59] [cursor=pointer]:
          - /url: forgotpwd.php
        - link "Register" [ref=e60] [cursor=pointer]:
          - /url: register.php
  - generic [ref=e62]:
    - text: ©2015
    - link "Masino Sinaga" [ref=e63] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=e64] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=e65] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=e66] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1  | 
  2  | import { AdminLogin } from "../Pages/AdminLogin";
  3  | import { AddSuppliers } from "../Pages/AddSuppliers";
  4  | import { AddCustomers } from "../Pages/AddCustomers";
  5  | import { AdminLogout } from "../Pages/AdminLogout";
  6  | import data from "../TestData/ERP.json"
  7  | import test from "@playwright/test";
  8  | 
  9  | let login:AdminLogin
  10 | let supplier: AddSuppliers
  11 | let customer: AddCustomers
  12 | let logout: AdminLogout
  13 | 
  14 | test.beforeEach(async({page})=>{
  15 |     login =new AdminLogin(page)
  16 |     await login.ERPUrl(process.env.BASE_URL!)
  17 |     await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
  18 | 
  19 | })
  20 | test.describe('ERP multiple data',()=>{
  21 |     //test for supplier module
  22 |     for(const sup of data.suppliers)
  23 |     {
  24 |         test(`validate supplier ${sup.SupplierName}`, async({page})=>{
  25 |             supplier = new AddSuppliers(page)
  26 |             await supplier.addSupplierDetails(
  27 |                 sup.SupplierName,
  28 |                 sup.Address,
  29 |                 sup.City,
  30 |                 sup.Country,
  31 |                 sup.ContactPerson,
  32 |                 sup.PhoneNumber,
  33 |                 sup.Email,
  34 |                 sup.MobileNumber,
  35 |                 sup.Notes
  36 |             )
  37 |                 
  38 |         }) 
  39 |     }
  40 |     //test for coustomer module
  41 |     for(const cus1 of data.customers){
  42 |         test(`validate customer ${cus1.CustomerName} `, async({page})=>{
  43 |             customer = new AddCustomers(page)
  44 |             await customer.addCustomerDetails(
  45 |                 cus1.CustomerName,
  46 |                 cus1.Address,
  47 |                 cus1.City,
  48 |                 cus1.Country,
  49 |                 cus1.ContactPerson,
  50 |                 cus1.PhoneNumber,
  51 |                 cus1.Email,
  52 |                 cus1.MobileNumber,
  53 |                 cus1.Notes
  54 |             )
  55 |         })
  56 |     }
  57 | })
> 58 |  test.afterEach(async({page})=>{
     |       ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  59 |         logout= new AdminLogout(page)
  60 |         await logout.ERPLogout()
  61 |         await page.close()
  62 |     })
```