import { expect, Locator, Page } from "@playwright/test";

export class AdminLogin {
    //declare varibles for login 
    page: Page
    userName: Locator
    PassWord: Locator
    Login: Locator
    //write construtor for initilization for above variable 
    constructor(page:Page){
        this.page= page
        this.userName= page.locator('.username')
        this.PassWord=page.locator('.password')
        this.Login= page.locator('.btnsubmit')
    }
    async ERPUrl(Url:string)
    {
        await this.page.goto('http://webapp.qedgetech.com/login.php')
    }
    //method for login 
    async ERPLogin(user: string, p0: string)
    {   
        await this.userName.waitFor({state:'visible'})
        await this.userName.clear()
        await this.userName.fill(user)
        await this.PassWord.waitFor()
        await this.PassWord.clear()
        await this.PassWord.fill('pass')
        await this.Login.click()
        await expect(this.page).toHaveURL(/dashboard.php/)

    }
}