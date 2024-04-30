import {Locator, Page} from 'playwright'

//  ALL TYPES DECLARED HERE 
export class SignInPage {
  readonly page:Page;
  readonly signing:Locator;
  readonly emailfield:Locator;
  readonly continuebtn:Locator;
  readonly passwordfield:Locator;
  readonly submitbtn:Locator;

  //PAGE CONSTRUCTORS TO LINK THE PAGE WITH THE LOCATORS
   constructor (page: Page) {
    this.page = page;
    this.signing = page.locator('text=Sign in')
    this.emailfield = page.locator('[data-testid=input]')
    this.continuebtn = page.locator('text=Continue')
    this.passwordfield = page.locator('[data-testid=input]')
    this.submitbtn = page.locator('button[type="submit"]')
   }

  //  THIS IS THE ASYNC FUNCTION THAT WILL BE REFERENCED ON THE SPEC FILE.

   async signInWithEmail(email: String, password: String): Promise<void>{
    await this.signing.click()
    await this.emailfield.fill('email')
    await this.continuebtn.click()
    await this.passwordfield.fill('password')
    await this.submitbtn.click()
   }
}




