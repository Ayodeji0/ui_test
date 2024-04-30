import { test, expect, Page } from '@playwright/test';
import { HomePage, SignInPage } from './page';

//  THIS NEGATIVE TEST IS DONE USING FAKER API WHICH GENERATE RANDOM EMAILS TO TEST WITH
test('Testing As A QA', async({page})=>{
  const { faker } = require('@faker-js/faker');
  const signInPage = new SignInPage(page)
  const homePage = new HomePage(page)
  const randomEmail = faker.internet.email();
  const randomPassword = faker.internet.password({ length: 20 });
  await homePage.navigateToScoresAndFixtures();
  await signInPage.signInWithEmail(randomEmail, randomPassword);
})

//  VERIFYING ERROR MESSAGE FROM TEST
async function verifyErrorMessage(page: Page, expectedErrorMessage: string): Promise<void> {

  // GET THE ERROR MESSAGE FROM IT'S ELEMENT AND GET THE ACTUAL ERROR MESSAGE USING TEXTCONTENT METHOD
  const errorMessageElement = await page.waitForSelector('[data-testid=error-message]');
  const actualErrorMessage = await errorMessageElement.textContent();
  expect(actualErrorMessage).toBe(expectedErrorMessage);
}
