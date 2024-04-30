import { test, expect } from '@playwright/test';
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