import { test, expect, Page } from '@playwright/test';
import { HomePage, BusinessPage } from './page';


test('should retrieve teams playing today', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.isPageLoaded();

    const footballPage = new BusinessPage(page);
    const teamNames = await footballPage.getTeamNames();

    if (teamNames.length > 0) {
        console.log("Teams playing today:");
        teamNames.forEach(team => console.log(team));
    } else {
        console.log("There are no matches today.");
    }
});
