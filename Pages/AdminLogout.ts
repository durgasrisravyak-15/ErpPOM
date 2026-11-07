import { Locator, Page } from "@playwright/test";

export class AdminLogout{

    page:Page
    clickLogout :Locator
    constructor(page:Page)
    {
        this.page=page
        this.clickLogout=page.locator('li#mi_logout')
    }
    async ERPLogout()
    {
        await this.clickLogout.waitFor()
        await this.clickLogout.click()      
    }
}