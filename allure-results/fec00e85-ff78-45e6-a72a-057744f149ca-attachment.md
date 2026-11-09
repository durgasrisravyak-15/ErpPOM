# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatausingjsonfile.spec.ts >> ERP multiple data >> validate supplier David
- Location: tests\multipledatausingjsonfile.spec.ts:24:13

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('.username') to be visible
    - waiting for "http://webapp.qedgetech.com/dashboard.php" navigation to finish...
    - navigated to "http://webapp.qedgetech.com/dashboard.php"
    - waiting for "http://webapp.qedgetech.com/logout.php" navigation to finish...
    - navigated to "http://webapp.qedgetech.com/login.php"

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogin {
  4  |     //declare varibles for login 
  5  |     page: Page
  6  |     userName: Locator
  7  |     PassWord: Locator
  8  |     Login: Locator
  9  |     //write construtor for initilization for above variable 
  10 |     constructor(page:Page){
  11 |         this.page= page
  12 |         this.userName= page.locator('.username')
  13 |         this.PassWord=page.locator('.password')
  14 |         this.Login= page.locator('.btnsubmit')
  15 |     }
  16 |     async ERPUrl(Url:string)
  17 |     {
  18 |         await this.page.goto('http://webapp.qedgetech.com/login.php')
  19 |     }
  20 |     //method for login 
  21 |     async ERPLogin(user: string, p0: string)
  22 |     {   
> 23 |         await this.userName.waitFor({state:'visible'})
     |                             ^ Error: locator.waitFor: Target page, context or browser has been closed
  24 |         await this.userName.clear()
  25 |         await this.userName.fill(user)
  26 |         await this.PassWord.waitFor()
  27 |         await this.PassWord.clear()
  28 |         await this.PassWord.fill('pass')
  29 |         await this.Login.click()
  30 |         await expect(this.page).toHaveURL(/dashboard.php/)
  31 | 
  32 |     }
  33 | }
```