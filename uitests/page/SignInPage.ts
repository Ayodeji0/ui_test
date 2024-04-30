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



/*

THIS IS FOR PERSONAL REFERENCE WHICH IS ANOTHER METHOD TO SETUP THE SIGNIN PAGE BY REDUCING THE CODE
 readonly page: Page;
 readonly usernameField: Locator;
 readonly passwordField: Locator;
 readonly loginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
}


async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
}

await this.page.click('text=Sign in');
await this.page.fill('[data-testid=input]', email);
await this.page.click('text=Continue');
await this.page.fill('[data-testid=input]', password);
await this.page.click('button[type="submit"]');
}

*/