import {Given, When, Then} from '@cucumber/cucumber';
import {expect, chromium, firefox, webkit} from "@playwright/test";

let browser;
let page;

const browserType = chromium;

Given('The user is on the login page {string}', async function (loginPage) {
  browser = await browserType.launch({
    headless: false
  });
  const context = await browser.newContext();

  page = await context.newPage();
  await page.goto(loginPage);

});

//success scenario
When('User provides a valid username {string}', async function (username) {
  await page.fill('input[id="username"]', username);
});

When('User provides a valid password {string}', async function (password) {
  await page.fill('input[id="password"]', password);
});

When('User clicks the login button', async function () {
  await page.click('button[id="submit"]');
});

Then('A valid login message should appear {string}', async (loginMessage) => {
  const msg = await page.locator('.post-title').textContent();
  expect(msg).toBe(loginMessage);
  await browser.close();
});

//fail scenario
When('User provides an incorrect username {string}', async function (username) {
  await page.fill('input[id="username"]', username);
});

When('User provides an incorrect password {string}', async function (password) {
  await page.fill('input[id="password"]', password);
});

Then('A error message should appear {string}', async (loginError) => {
  const msg = await page.locator('#error').textContent();
  expect(msg).toBe(loginError);
  await browser.close();
});