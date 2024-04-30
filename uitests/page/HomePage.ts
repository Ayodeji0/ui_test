import { Page } from 'playwright';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

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