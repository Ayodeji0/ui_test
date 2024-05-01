import { test, expect } from "@playwright/test";
import { HomePage, SignInPage } from "./page";
import { faker } from '@faker-js/faker';

// BEFORE EACH HOOKS SETUP

test("Invalid Email Test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToScoresAndFixtures();
  await homePage.clickSignInLink();
  // ACTIONS TO EXECUTE TEST
  const signInPage = new SignInPage(page);
  const randomEmail = faker.internet.email()
  await signInPage.fillUsername(randomEmail);
  await signInPage.clickContinue();

  // WAITING ERROR MESSAGE ELEMENT
  const errorMessageElement = await page.waitForSelector(
    "//p[@class='sb-form-message__content__text']",
    { timeout: 20000 }
  );
  const actualErrorMessage = await errorMessageElement.textContent();
  const expectedErrorMessage =
    "We don’t recognise that email or username. You can try again or register for an account";

  expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

test("Empty Email Field Test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToScoresAndFixtures();
  await homePage.clickSignInLink();
  // ACTIONS TO EXECUTE TEST
  const signInPage = new SignInPage(page);
  await signInPage.fillUsername("");
  await signInPage.clickContinue();

  // WAITING ERROR MESSAGE ELEMENT
  const errorMessageElement = await page.waitForSelector(
    "//p[@class='sb-form-message__content__text']",
    { timeout: 20000 }
  );
  const actualErrorMessage = await errorMessageElement.textContent();
  const expectedErrorMessage = "Something's missing. Please check and try again.";

  //  Assertion to confirm the actual error message on the page is as expected
  expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

test("Special Character Email Field Test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToScoresAndFixtures();
  await homePage.clickSignInLink();
  // ACTIONS TO EXECUTE TEST
  const signInPage = new SignInPage(page);
  const specialsymbols =faker.string.symbol(10)
  await signInPage.fillUsername("Katwhwbw@h");
  await signInPage.clickContinue();

  // WAITING ERROR MESSAGE ELEMENT
  const errorMessageElement = await page.waitForSelector(
    "//p[@class='sb-form-message__content__text']",
    { timeout: 20000 }
  );
  const actualErrorMessage = await errorMessageElement.textContent();
  const expectedErrorMessage = "Sorry, that email doesn’t look right. Please check it's a proper email.";

  //  Assertion to confirm the actual error message on the page is as expected
  expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

test("Empty Password Field Test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToScoresAndFixtures();
  await homePage.clickSignInLink();

  const signInPage = new SignInPage(page);
  const username = faker.person.firstName();
  await signInPage.fillUsername(username);
  await signInPage.clickContinue();
  await signInPage.fillPassword('');
  await signInPage.clickSignInButton();

  try {
    // Wait for error message element
    const errorMessageElement = await page.waitForSelector(
      "//p[@class='sb-form-message__content__text']",
      { timeout: 30000 }
    );

    if (errorMessageElement) {
      const actualErrorMessage = await errorMessageElement.textContent();
      const expectedErrorMessages = [
        "Sorry, those details don't match. Check you've typed them correctly.",
        "Something's missing. Please check and try again.",
      ];

      expect(
        expectedErrorMessages.some((message) =>
          actualErrorMessage?.includes(message)
        )
      ).toBeTruthy();
    } else {
      throw new Error("Error message element not found.");
    }
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      // HANDLE TIME OUT ERROR
      console.error("Timeout error occurred:", error.message);
      // Retry or do other actions here
    } else {
      // HANDLE ANY OTHER ERROR MESSAGE
      throw error;
    }
  }
});

test("Short Password Field Test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToScoresAndFixtures();
  await homePage.clickSignInLink();
  // ACTIONS TO EXECUTE TEST
  const signInPage = new SignInPage(page);
  const username = faker.person.firstName();
  const password = faker.internet.password({ length: 3})
  await signInPage.fillUsername(username);
  await signInPage.clickContinue();
  await signInPage.fillPassword(password);
  await signInPage.clickSignInButton();
  try {
    // Wait for error message element
    const errorMessageElement = await page.waitForSelector(
      "//p[@class='sb-form-message__content__text']",
      { timeout: 30000 }
    );

    if (errorMessageElement) {
      const actualErrorMessage = await errorMessageElement.textContent();
      const expectedErrorMessages = [
        "Sorry, those details don't match. Check you've typed them correctly.",
        "Sorry, that password is too short. It needs to be eight characters or more.",
      ];

      expect(
        expectedErrorMessages.some((message) =>
          actualErrorMessage?.includes(message)
        )
      ).toBeTruthy();
    } else {
      throw new Error("Error message element not found.");
    }
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      // HANDLE TIME OUT ERROR
      console.error("Timeout error occurred:", error.message);
      // Retry or do other actions here
    } else {
      // HANDLE ANY OTHER ERROR MESSAGE
      throw error;
    }
  }
});

test("Invalid Password Test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToScoresAndFixtures();
  await homePage.clickSignInLink();
  // ACTIONS TO EXECUTE TEST
  const signInPage = new SignInPage(page);
  const username = faker.person.firstName();
   const password = faker.internet.password({ length: 10 })
  await signInPage.fillUsername(username);
  await signInPage.clickContinue();
  await signInPage.fillPassword(password);
  await signInPage.clickSignInButton();

  try {
    // Wait for error message element
    const errorMessageElement = await page.waitForSelector(
      "//p[@class='sb-form-message__content__text']",
      { timeout: 30000 }
    );
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage =
      "That password isn’t right. You can try again or reset your password";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "TimeoutError") {
      // Handle timeout error
      console.error("Timeout error occurred:", error.message);
      // Retry or do other actions here
    } else {
      // Handle other errors
      throw error;
    }
  }
});





