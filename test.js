const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require("@playwright/test");

let browser;
let page;

//PM_HC00 : ทดสอบการเข้าสู่เว็บไซต์//
Given("เปิดเว็บไซต์ PMRP {string}", async function (string) {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("http://203.154.184.162:5001/SignIn");
});
When("กรอก Username {string}",{ timeout: 300000 }, async (username) => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill(username);
});
When("กรอก Password {string}", { timeout: 300000 },async (password) => {
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(password)
});
When("คลิกปุ่ม Login", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('path').nth(5).click();
});
