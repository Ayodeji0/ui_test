import { test, expect } from "@playwright/test";
import { HomePage, QAPage } from "./page";
import { faker } from '@faker-js/faker';

let homePage: HomePage;
let qaPage: QAPage;

test.describe("TEST AS QA", () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    qaPage = new QAPage(page);
    await homePage.navigateToScoresAndFixtures();
    await homePage.clickSignInLink();
  });

  test("Invalid Email Test", async () => {
    const randomEmail = faker.internet.email();
    await qaPage.fillUsername(randomEmail);
    await qaPage.clickContinue();

    const errorMessageElement = await qaPage.waitForErrorMessage();
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage =
      "We don’t recognise that email or username. You can try again or register for an account";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  });

  test("Empty Email Field Test", async () => {
    await qaPage.fillUsername("");
    await qaPage.clickContinue();

    const errorMessageElement = await qaPage.waitForErrorMessage();
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "Something's missing. Please check and try again.";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  });

  test("Special Character Email Field Test", async () => {
    const specialsymbols = faker.string.symbol(10);
    await qaPage.fillUsername(`Katwhwbw@h`);
    await qaPage.clickContinue();

    const errorMessageElement = await qaPage.waitForErrorMessage();
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage = "Sorry, that email doesn’t look right. Please check it's a proper email.";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  });

  test("Empty Password Field Test", async () => {
    const username = faker.person.firstName();
    await qaPage.fillUsername(username);
    await qaPage.clickContinue();
    await qaPage.fillPassword('');
    await qaPage.clickSignInButton();

    const errorMessageElement = await qaPage.waitForErrorMessage();
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessages = [
      "Sorry, those details don't match. Check you've typed them correctly.",
      "Something's missing. Please check and try again.",
    ];

    expect(expectedErrorMessages.some(message => actualErrorMessage?.includes(message))).toBeTruthy();
  });

  test("Short Password Field Test", async () => {
    const username = faker.person.firstName();
    const password = faker.internet.password({ length: 3});
    await qaPage.fillUsername(username);
    await qaPage.clickContinue();
    await qaPage.fillPassword(password);
    await qaPage.clickSignInButton();

    const errorMessageElement = await qaPage.waitForErrorMessage();
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessages = [
      "Sorry, those details don't match. Check you've typed them correctly.",
      "Sorry, that password is too short. It needs to be eight characters or more.",
    ];

    expect(expectedErrorMessages.some(message => actualErrorMessage?.includes(message))).toBeTruthy();
  });

  test("Invalid Password Test", async () => {
    const username = faker.person.firstName();
    const password = faker.internet.password({ length: 10 });
    await qaPage.fillUsername(username);
    await qaPage.clickContinue();
    await qaPage.fillPassword(password);
    await qaPage.clickSignInButton();

    const errorMessageElement = await qaPage.waitForErrorMessage();
    const actualErrorMessage = await errorMessageElement.textContent();
    const expectedErrorMessage =
      "That password isn’t right. You can try again or reset your password";

    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  });
});
