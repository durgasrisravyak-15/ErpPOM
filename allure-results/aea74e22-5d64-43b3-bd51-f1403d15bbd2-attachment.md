# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatausingjsonfile.spec.ts >> ERP multiple data >> validate supplier John
- Location: tests\multipledatausingjsonfile.spec.ts:24:13

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard.php/
Received string:  "http://webapp.qedgetech.com/login.php"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "http://webapp.qedgetech.com/login.php"

```

```yaml
- link "Stock Accounting":
  - /url: .
- strong: Stock Accounting
- list:
  - listitem:
    - link " Help (Categories)":
      - /url: help_categorieslist.php
  - listitem:
    - link " Login":
      - /url: login.php
- list
- radio "en" [checked]
- text: en
- radio "id"
- text: id
- button "x"
- heading "Login " [level=4]:
  - text: Login
  - link "":
    - /url: javascript:void(0);
- text: User Name
- textbox "User Name": adminpass
- text: Password
- textbox "Password"
- text: Options 
- button "Login"
- button "Reset"
- link "Forgot Password":
  - /url: forgotpwd.php
- link "Register":
  - /url: register.php
- text: ©2015
- link "Masino Sinaga":
  - /url: http://www.ilovephpmaker.com
- text: . All rights reserved. |
- link "Terms and Conditions":
  - /url: javascript:void(0);
- text: "|"
- link "About Us":
  - /url: javascript:void(0);
- text: "|"
- link "Back to Top":
  - /url: javascript:void(0);
- button
- button
- button
- text: Alert
- paragraph: Please enter password
- button "OK"
- button
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogin{
  4  |     //declare varibales for login
  5  |     page :Page
  6  |     userName: Locator
  7  |     passWord: Locator
  8  |     Login: Locator
  9  |     //write constructor for initilization for above varibale
  10 |     constructor(page:Page)
  11 |     {
  12 |         this.page=page
  13 |         this.userName= page.locator('#username')
  14 |         this.passWord = page.locator('#password')
  15 |         this.Login =page.locator('#btnsubmit')
  16 |     }
  17 |     async ERPUrl(Url:string)
  18 |     {
  19 |         await this.page.goto('http://webapp.qedgetech.com/login.php')
  20 |     }
  21 |     //method for login 
  22 |     async ERPLogin(user: string, p0: string)
  23 |     {   
  24 |        await this.userName.waitFor({state:'visible'})
  25 |         await this.userName.clear()
  26 |         await this.userName.fill(user)
  27 |         await this.passWord.waitFor()
  28 |         await this.passWord.clear()
  29 |         await this.passWord.fill('pass')
  30 |         await this.Login.click()
> 31 |         await expect(this.page).toHaveURL(/dashboard.php/)
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  32 | 
  33 |     }
  34 | }
```