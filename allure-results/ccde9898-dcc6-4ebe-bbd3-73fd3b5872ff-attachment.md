# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingledata.spec.ts >> ERP Managent Modules >> Validate Customer
- Location: tests\ERPSingledata.spec.ts:22:9

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
  6  | import test from "@playwright/test";
  7  | let login: AdminLogin
  8  | let sup : AddSuppliers
  9  | let cus: AddCustomers
  10 | let logout : AdminLogout
  11 | test.beforeEach(async({page})=>{
  12 |     login = new AdminLogin(page)
  13 |     await login.ERPUrl(process.env.BASE_URL!)
  14 |     await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
  15 | })
  16 | test.describe('ERP Managent Modules',()=>{
  17 |     test('Validate Suppler',async({page})=>{
  18 |         sup = new AddSuppliers(page)
  19 |         await sup.addSupplierDetails('John','USA','London','UK','Qedge','876543','John@gmail.com','765432','AddedSupplier')
  20 | 
  21 |     })
  22 |     test('Validate Customer',async({page})=>{
  23 |         cus = new AddCustomers(page)
  24 |         await cus.addCustomerDetails('Test123','SrNagr','Hyd','India','Ranga','98765','test@gmail.com','76543','Customer Added')
  25 | 
  26 |     })
  27 | })
> 28 | test.afterEach(async({page})=>{
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  29 |     logout = new AdminLogout(page)
  30 |    await logout.ERPLogout()
  31 |    await page.close()
  32 | })
```