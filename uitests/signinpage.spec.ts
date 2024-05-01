
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

test('Empty Email Field Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('');
    await signInPage.clickContinue();

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']");
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "Something's missing. Please check and try again.";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Invalid Password Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('symphony');
    await signInPage.clickContinue();
    await signInPage.fillPassword('password123')
    await signInPage.clickSignInButton()

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']", { timeout: 20000 });

    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "That password isn’t right. You can try again or reset your password";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

test('Empty Password Field Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('symphony');
    await signInPage.clickContinue();
    await signInPage.fillPassword('')
    await signInPage.clickSignInButton()

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']", { timeout: 20000 });
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "Sorry, those details don't match. Check you've typed them correctly.";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Short Password Field Test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillEmail('symphony');
    await signInPage.clickContinue();
    await signInPage.fillPassword('abc')
    await signInPage.clickSignInButton()

    // Wait for error message element
    const errorMessageElement = await page.waitForSelector("//p[@class='sb-form-message__content__text']", { timeout: 20000 });
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "Sorry, that password is too short. It needs to be eight characters or more.";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});
test('Special Character Field Test', async ({ page }) => {
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

























































































































































































