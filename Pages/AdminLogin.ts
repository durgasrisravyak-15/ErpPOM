import { expect, Locator, Page } from "@playwright/test";

export class AdminLogin{
    //declare varibales for login
    page :Page
    userName: Locator
    passWord: Locator
    Login: Locator
    //write constructor for initilization for above varibale
    constructor(page:Page)
    {
        this.page=page
        this.userName= page.locator('#username')
        this.passWord = page.locator('#password')
        this.Login =page.locator('#btnsubmit')
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
        await this.passWord.waitFor()
        await this.passWord.clear()
        await this.passWord.fill('pass')
        await this.Login.click()
        await expect(this.page).toHaveURL(/dashboard.php/)

    }
}