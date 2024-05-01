
import { Page } from '@playwright/test';

export class SignInPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email: string) {
        await this.page.fill('[data-testid="input"]', email);
    }

    async clickContinue() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async fillPassword(password: string) {
        await this.page.fill('#password-input', password);
    }

    async clickSignInButton() {
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }
}
