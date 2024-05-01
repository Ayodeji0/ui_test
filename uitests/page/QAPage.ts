
import { Page } from '@playwright/test';

export class SignInPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
//  EACH LOCATOR HAVE THEIR FUNCTIONS SEPARATELY 
    async fillUsername(email: string) {
        await this.page.fill('[data-testid="input"]', email);
    }

    async clickContinue() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async fillPassword(password: string) {
        await this.page.getByTestId('input',).fill(password);
    }

    async clickSignInButton() {
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }
}