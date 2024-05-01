
import { test, expect } from '@playwright/test';
import { HomePage,SignInPage } from './page';


// 
test('Invalid Email Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('invalidemail@example.com');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Invalid Email Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('invalidemail@example.com');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Invalid Email Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('invalidemail@example.com');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Invalid Email Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('invalidemail@example.com');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Invalid Email Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('invalidemail@example.com');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Invalid Email Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('invalidemail@example.com');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

// Other tests follow...

























































































































































































