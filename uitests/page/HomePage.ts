import { Page } from 'playwright';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
//  TRY CATCH TO CATCH NAVIAGTION ERROR IS WAS USED BECAUSE ON ONE TRY IT WAS THROWING TIME OUT ERROR
    async navigateToScoresAndFixtures(): Promise<void> {
      const maxRetries = 3;
      let retries = 0;
      while (retries < maxRetries) {
        try {
          await this.page.goto('https://www.bbc.com/sport/football/scores-fixtures');
          break; 
        } catch (error) {
          console.error(`Navigation attempt ${retries + 1} failed:`, error);
          retries++;
        }
      }
    }
// THIS IS TO CLICK ON THE SIGN IN BUTTON AFTER LANDING ON THE BBC URL
    async clickSignInLink() {
      await this.page.getByRole('link', { name: 'Sign in' }).click();;
    }
// THIS IS FOR TEST AS A BUSINESS USER
    async isPageLoaded() {
      await this.page.waitForSelector('.sp-c-fixture__wrapper');
  }
// THIS IS FOR TEST AS A SPORT READER 
  async searchFor(query: string) {
    await this.page.getByRole('link', { name: 'Search BBC' }).click();
    await this.page.getByPlaceholder('Search the BBC').click();
    await this.page.getByPlaceholder('Search the BBC').fill(query);
}
}
