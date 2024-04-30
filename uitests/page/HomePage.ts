import { Page } from 'playwright';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
/*  THE HOME PAGE WILL BE REFERENCED IN ALL THE TEST SUITES  TRY CATCH WAS USED BECAUSE THE PAGE WAS FAILING INITIALLY*/

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
}