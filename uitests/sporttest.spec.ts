import { test, expect, Page } from '@playwright/test';
import { HomePage,  SearchResultsPage } from './page';


test('TEST AS A SPORT USER', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.searchFor('sport');

    const searchResultsPage = new SearchResultsPage(page);
    const headings = await searchResultsPage.getHeadings();

    const firstHeading = headings[0];
    const lastHeading = headings[headings.length - 1];

});
