import { ElementHandle, Page } from '@playwright/test';

export class BusinessPage {
  constructor(page: Page) {}

  async getMatchDate(matchContainer: ElementHandle) {
    return await matchContainer.$("//*[@id=\"main-content\"]/section/div/section");
  }

  async getTeamNameElements(matchContainer: ElementHandle) {
    return await matchContainer.$$("//*[@id=\"main-data\"]/div/div[1]");
  }
}
