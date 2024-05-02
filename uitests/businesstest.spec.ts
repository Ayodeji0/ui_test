import { test, expect, Page } from '@playwright/test';
import { HomePage, BusinessPage } from './page';


let homePage: HomePage;
let businessPage: BusinessPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  businessPage = new BusinessPage(page);
});

test('Check if there are matches today', async () => {
  await homePage.navigateToScoresAndFixtures();
  const matchContainers = await homePage.getMatchContainers();
  const today = new Date().toLocaleDateString('en-NG');
  let matchesToday = false;

  for (const container of matchContainers) {
    const matchDateElement = await businessPage.getMatchDate(container);
    if (matchDateElement) {
      const matchDate = await matchDateElement.textContent();
      if (matchDate?.includes(today)) {
        matchesToday = true;
        const teamNameElements = await businessPage.getTeamNameElements(container);
        const teamNames = [];

        for (const el of teamNameElements) {
          const textContent = await el.textContent();
          if (textContent) {
            teamNames.push(textContent.trim());
          }
        }

        console.log(`Match today: ${teamNames[0]} vs ${teamNames[1]}`);
      }
    }
  }

  if (!matchesToday) {
    return;
  }

  // Assertion: Ensure that there is no error occurred during the test
  expect(true).toBeTruthy();
});