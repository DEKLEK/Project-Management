const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

const path = require('path');
let browser;
let page;

//TC-SME-00 : ทดสอบการเข้าสู่เว็บไซต์//
Given("เปิดเว็บไซต์ PMRP {string}", async function (string) {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://203.154.184.162:5000/SignIn");
});
When("กรอก Username {string}", { timeout: 300000 }, async (string) => {
  await page.getByRole("textbox", { name: "Enter your username" }).fill("SuperAdmin_TTT");
});
When("กรอก Password {string}", { timeout: 300000 }, async (string) => {
  await page.getByRole("textbox", { name: "Enter your password" }).fill("123456");
});
When("คลิกปุ่ม Login {string}", { timeout: 300000 }, async (string) => {
  await page.getByRole("button", { name: "Sign in" }).click();
});

//TC-SME-01 : ทดสอบการเข้าถึงหน้า SME Factory - OEM Management//
When("เข้าเมนู SME Factory - OEM Management", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

//TC-SME-02 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง//
When("เข้าเมนู SME Factory - OEM Management2", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('Pi');
});

//TC-SME-03 : ทดสอบการ Search ข้อมูล//
When("เข้าเมนู SME Factory - OEM Management3", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('Pi');
});

When("คลิกปุ่มค้นหา", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-04 : ทดสอบการ Clear ข้อมูลค้นหา//
When("เข้าเมนู SME Factory - OEM Management4", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('Pi');
});

When("คลิกปุ่มค้นหา2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกปุ่ม Clear", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-05 : ทดสอบการ Filter ข้อมูล//
When("เข้าเมนู SME Factory - OEM Management5", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กด Filter ข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'OEM' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Apply Date' }).check();
  await page.getByRole('checkbox', { name: 'OEM' }).uncheck();
  await page.getByRole('checkbox', { name: 'Expire Date' }).check();
  await page.getByRole('checkbox', { name: 'Apply Date' }).uncheck();
  await page.getByRole('checkbox', { name: 'Status' }).check();
  await page.getByRole('checkbox', { name: 'Expire Date' }).uncheck();
  await page.getByRole('checkbox', { name: 'Company Name' }).check();
  await page.getByRole('checkbox', { name: 'Status' }).uncheck();
  await page.getByRole('checkbox', { name: 'Deployment Type' }).check();
  await page.getByRole('checkbox', { name: 'Company Name' }).uncheck();
  await page.getByRole('checkbox', { name: 'Start Date' }).check();
  await page.getByRole('checkbox', { name: 'Deployment Type' }).uncheck();
  await page.getByRole('checkbox', { name: 'Remain Date' }).check();
  await page.getByRole('checkbox', { name: 'Start Date' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//TC-SME-06 : ทดสอบไอคอน จัดเรียงข้อมูล (Company Name)//
When("เข้าเมนู SME Factory - OEM Management6", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Company Name search' }).click();
  await page.getByRole('button', { name: 'Company Name search' }).click();
  await page.getByRole('button', { name: 'Company Name search' }).click();
});

//TC-SME-07 : ทดสอบไอคอน ค้นหาข้อมูล (Company Name)//
When("เข้าเมนู SME Factory - OEM Management7", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-08 : ทดสอบการกรอกข้อมูลใน Global Search (Company Name)//
When("เข้าเมนู SME Factory - OEM Management8", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('Pi');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-09 : ทดสอบปุ่ม Search (Company Name)//
When("เข้าเมนู SME Factory - OEM Management9", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('Pi');
});

When("กดปุ่ม Search", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_com_name').click();
});

//TC-SME-10 : ทดสอบปุ่ม Reset (Company Name)//
When("เข้าเมนู SME Factory - OEM Management10", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กดปุ่ม Reset", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-11 : ทดสอบปุ่ม Close (Company Name)//
When("เข้าเมนู SME Factory - OEM Management11", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กดปุ่ม Close", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-12 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM)//
When("เข้าเมนู SME Factory - OEM Management12", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM search' }).click();
  await page.getByRole('button', { name: 'OEM search' }).click();
  await page.getByRole('button', { name: 'OEM search' }).click();
});

//TC-SME-13 : ทดสอบไอคอน ค้นหาข้อมูล (OEM)//
When("เข้าเมนู SME Factory - OEM Management13", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-14 : ทดสอบการกรอกข้อมูลใน Global Search (OEM)//
When("เข้าเมนู SME Factory - OEM Management14", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('pi');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-15 : ทดสอบปุ่ม Search (OEM)//
When("เข้าเมนู SME Factory - OEM Management15", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('pi');
});

When("กดปุ่ม Search2", { timeout: 300000 }, async () => {
    await page.locator('#button_search_column_oem_name').click();
});

//TC-SME-16 : ทดสอบปุ่ม Reset (OEM)//
When("เข้าเมนู SME Factory - OEM Management16", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กดปุ่ม Reset2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-17 : ทดสอบปุ่ม Close (OEM)//
When("เข้าเมนู SME Factory - OEM Management17", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กดปุ่ม Close2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-18 : ทดสอบไอคอน จัดเรียงข้อมูล (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management18", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Deployment Type filter' }).click();
  await page.getByRole('button', { name: 'Deployment Type filter' }).click();
  await page.getByRole('button', { name: 'Deployment Type filter' }).click();
});

//TC-SME-19 : ทดสอบไอคอน กรองข้อมูล (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management19", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
});

//TC-SME-20 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management20", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา6", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('On Premise');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-21 : ทดสอบการเลือกข้อมูล (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management21", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.getByRole('checkbox', { name: 'Select On Premise' }).click();
});

//TC-SME-22 : ทดสอบปุ่ม Search (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management22", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.getByRole('checkbox', { name: 'Select On Premise' }).click();
});

When("กดปุ่ม Search3", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_com_deploy_type').click();
});

//TC-SME-23 : ทดสอบปุ่ม Reset (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management23", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
});

When("กดปุ่ม Reset3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-24 : ทดสอบปุ่ม Close (Deployment Type)//
When("เข้าเมนู SME Factory - OEM Management24", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
});

When("กดปุ่ม Close3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-25 : ทดสอบไอคอน จัดเรียงข้อมูล (Apply Date)//
When("เข้าเมนู SME Factory - OEM Management25", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Apply Date calendar' }).click();
  await page.getByRole('button', { name: 'Apply Date calendar' }).click();
  await page.getByRole('button', { name: 'Apply Date calendar' }).click();
});

//TC-SME-26 : ทดสอบไอคอน ปฏิทิน (Apply Date)//
When("เข้าเมนู SME Factory - OEM Management26", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(1).click();
});

//TC-SME-27 : ทดสอบการกรอกข้อมูลใน Date Picker (Apply Date)//
When("เข้าเมนู SME Factory - OEM Management27", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา8", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('15/12/2025');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-28 : ทดสอบปุ่ม Search (Apply Date)//
When("เข้าเมนู SME Factory - OEM Management28", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByRole('textbox', { name: 'Start date' }).fill('15/12/2025');
  await page.getByRole('textbox', { name: 'End date' }).click();
  await page.getByRole('textbox', { name: 'End date' }).fill('15/12/2025');
});

When("กดปุ่ม Search4", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_com_apply_date').click();
});

//TC-SME-29 : ทดสอบปุ่ม Reset (Apply Date)//
When("เข้าเมนู SME Factory - OEM Management29", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(1).click();
});

When("กดปุ่ม Reset4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-30 : ทดสอบปุ่ม Close (Apply Date)//
When("เข้าเมนู SME Factory - OEM Management30", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(1).click();
});

When("กดปุ่ม Close4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-31 : ทดสอบไอคอน จัดเรียงข้อมูล (Start Date)//
When("เข้าเมนู SME Factory - OEM Management31", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Start Date calendar' }).click();
  await page.getByRole('button', { name: 'Start Date calendar' }).click();
  await page.getByRole('button', { name: 'Start Date calendar' }).click();
});

//TC-SME-32 : ทดสอบไอคอน ปฏิทิน (Start Date)//
When("เข้าเมนู SME Factory - OEM Management32", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ปฏิทิน", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(3).click();
});

//TC-SME-33 : ทดสอบการกรอกข้อมูลใน Date Picker (Start Date)//
When("เข้าเมนู SME Factory - OEM Management33", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา9", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('06/08/2025');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-34 : ทดสอบปุ่ม Search (Start Date)//
When("เข้าเมนู SME Factory - OEM Management34", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByRole('textbox', { name: 'Start date' }).fill('06/08/2025');
  await page.getByRole('textbox', { name: 'End date' }).click();
  await page.getByRole('textbox', { name: 'End date' }).fill('06/08/2025');
});

When("กดปุ่ม Search5", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_com_start_date').click();
});

//TC-SME-35 : ทดสอบปุ่ม Reset (Start Date)//
When("เข้าเมนู SME Factory - OEM Management35", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(3).click();
});

When("กดปุ่ม Reset5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-36 : ทดสอบปุ่ม Close (Start Date)//
When("เข้าเมนู SME Factory - OEM Management36", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(3).click();
});

When("กดปุ่ม Close5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-37 : ทดสอบไอคอน จัดเรียงข้อมูล (Expire Date)//
When("เข้าเมนู SME Factory - OEM Management37", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Expire Date calendar' }).click();
  await page.getByRole('button', { name: 'Expire Date calendar' }).click();
  await page.getByRole('button', { name: 'Expire Date calendar' }).click();
});

//TC-SME-38 : ทดสอบไอคอน ปฏิทิน (Expire Date)//
When("เข้าเมนู SME Factory - OEM Management38", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ปฏิทิน2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(5).click();
});

//TC-SME-39 : ทดสอบการกรอกข้อมูลใน Date Picker (Expire Date)//
When("เข้าเมนู SME Factory - OEM Management39", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา10", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('06/08/2025');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-40 : ทดสอบปุ่ม Search (Expire Date)//
When("เข้าเมนู SME Factory - OEM Management40", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(5).click();
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByRole('textbox', { name: 'Start date' }).fill('06/08/2025');
  await page.getByRole('textbox', { name: 'End date' }).click();
  await page.getByRole('textbox', { name: 'End date' }).fill('06/08/2025');
});

When("กดปุ่ม Search6", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_com_expire_date').click();
});

//TC-SME-41 : ทดสอบปุ่ม Reset (Expire Date)//
When("เข้าเมนู SME Factory - OEM Management41", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(5).click();
});

When("กดปุ่ม Reset6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-42 : ทดสอบปุ่ม Close (Expire Date)//
When("เข้าเมนู SME Factory - OEM Management42", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(5).click();
});

When("กดปุ่ม Close6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-43 : ทดสอบไอคอน จัดเรียงข้อมูล (Remain)//
When("เข้าเมนู SME Factory - OEM Management43", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Remain' }).click();
  await page.getByRole('button', { name: 'Remain' }).click();
  await page.getByRole('button', { name: 'Remain' }).click();
});

//TC-SME-44 : ทดสอบไอคอน จัดเรียงข้อมูล (Status)//
When("เข้าเมนู SME Factory - OEM Management44", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน จัดเรียงข้อมูล8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Status filter' }).click();
  await page.getByRole('button', { name: 'Status filter' }).click();
  await page.getByRole('button', { name: 'Status filter' }).click();
});

//TC-SME-45 : ทดสอบไอคอน กรองข้อมูล (Status)//
When("เข้าเมนู SME Factory - OEM Management45", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
}); 

//TC-SME-46 : ทดสอบการกรอกข้อมูลใน Global Search (Status)//
When("เข้าเมนู SME Factory - OEM Management46", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา11", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
}); 

//TC-SME-47 : ทดสอบการเลือกข้อมูล (Status)//
When("เข้าเมนู SME Factory - OEM Management47", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กรอกข้อมูลค้นหา12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.getByRole('checkbox', { name: 'Select Active' }).click();
}); 

//TC-SME-48 : ทดสอบปุ่ม Search (Status)//
When("เข้าเมนู SME Factory - OEM Management48", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน กรองข้อมูล10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.getByRole('checkbox', { name: 'Select Active' }).click();
}); 

When("กดปุ่ม Search7", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_com_is_active').click();
});

//TC-SME-49 : ทดสอบปุ่ม Reset (Status)//
When("เข้าเมนู SME Factory - OEM Management49", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
}); 

When("กดปุ่ม Reset7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-50 : ทดสอบปุ่ม Close (Status)//
When("เข้าเมนู SME Factory - OEM Management50", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^SME Factory - OEM Management$/ }).first().click();
});

When("กดไอคอน ค้นหาข้อมูล16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
}); 

When("กดปุ่ม Close7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-51 : ทดสอบการปุ่ม Add ในหน้า SME Factory - OEM Management (On-Premise)//
When("คลิกปุ่มAdd", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
}); 

//TC-SME-52 : ทดสอบการกรอกข้้อมูล Company ในหน้า New Company Add - Company//
When("กรอกข้อมูล Fill : Company Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').first().fill('t1');
}); 

When("กรอกข้อมูล Fill : Company Abbreviation", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').nth(1).fill('t1');
}); 

When("กรอกข้อมูล Fill : Email", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').nth(2).fill('t1@gmail.com');
}); 

When("กรอกข้อมูล Fill : Deployment Type", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('On-Premise').click();
}); 

When("กรอกข้อมูล Fill : Company Detail", { timeout: 300000 }, async () => {
  await page.locator('#textarea_input_product_system_brand').fill('TTT');
}); 

When("กรอกข้อมูล Fill : MA per Year", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').first().fill('1');
}); 

When("กรอกข้อมูล Fill : MA per Month", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').nth(1).fill('1');
}); 

When("กรอกข้อมูล Fill : MA per Week", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').nth(2).fill('1');
}); 

//TC-SME-53 : ทดสอบการใส่รูปใน Company ในหน้า New Company Add - Company//
When("ใส่รูป", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
}); 

//TC-SME-54 : ทดสอบการใส่ไฟล์ใน Upload Document ในหน้า New Company Add - Company//
When("ใส่ไฟล์ เอกสารรับรองบริษัท \\(ที่มีตราครุฑ)", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-4 > div').first().click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').first();
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
}); 

When("ใส่ไฟล์ เอกสาร ภพ.20", { timeout: 300000 }, async () => {
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').nth(1);
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
});

//TC-SME-55 : ทดสอบปุ่ม ต่อ MA ใน Date//
When("คลิกปุ่ม ต่อ MA", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'sync ต่อ MA' }).click();
}); 

//TC-SME-56 : ทดสอบปุ่ม Add ใน MA History//
When("คลิกปุ่ม Add", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'plus Add' }).click();
});

//TC-SME-57 : ทดสอบกรอกข้อมูล ใน New MA//
When("กรอกข้อมูล Fill : Apply Date", { timeout: 300000 }, async () => {
  await page.locator('#datepicker_ma_apply_date').click();
  await page.getByText('Today').click();
});

//TC-SME-58 : ทดสอบปุ่ม Cancel ใน New MA//
When("คลิกปุ่ม Cancel", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-59 : ทดสอบปุ่ม Save ใน New MA//
When("คลิกปุ่มAdd2", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'plus Add' }).click();
});

When("กรอกข้อมูล Fill : Apply Date2", { timeout: 300000 }, async () => {
  await page.locator('#datepicker_ma_apply_date').click();
  await page.getByText('Today').click();
});

When("คลิกปุ่ม Save", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//TC-SME-60 : ทดสอบไอคอน จัดเรียงข้อมูล (Apply Date) ใน MA History//
When("กดไอคอน จัดเรียงข้อมูล9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Apply Date calendar' }).click();
  await page.getByRole('button', { name: 'Apply Date calendar' }).click();
  await page.getByRole('button', { name: 'Apply Date calendar' }).click();
});

//TC-SME-61 : ทดสอบไอคอน ปฏิทิน (Apply Date) ใน MA History//
When("กดไอคอน ปฏิทิน3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(1).click();
});

//TC-SME-62 : ทดสอบไอคอน จัดเรียงข้อมูล (Start Date) ใน MA History//
When("กดไอคอน จัดเรียงข้อมูล10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Start Date calendar' }).click();
  await page.getByRole('button', { name: 'Start Date calendar' }).click();
  await page.getByRole('button', { name: 'Start Date calendar' }).click();
});

//TC-SME-63 : ทดสอบไอคอน ปฏิทิน (Start Date) ใน MA History//
When("กดไอคอน ปฏิทิน4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(3).click();
});

//TC-SME-64 : ทดสอบไอคอน จัดเรียงข้อมูล (Expire Date) ใน MA History//
When("กดไอคอน จัดเรียงข้อมูล11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'calendar' }).nth(5).click();
});

//TC-SME-65 : ทดสอบไอคอน ปฏิทิน (Expire Date) ใน MA History//
When("กดไอคอน ปฏิทิน5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Expire Date calendar' }).click();
  await page.getByRole('button', { name: 'Expire Date calendar' }).click();
  await page.getByRole('button', { name: 'Expire Date calendar' }).click();
});

//TC-SME-66 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ใน MA History//
When("เลือก จำนวน\\/Pageที่ต้องการ", { timeout: 300000 }, async () => {
  await page.getByText('/ page').click();
  await page.getByText('20 / page').click();
});

//TC-SME-67 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ใน MA History//
When("กด ไอคอน >", { timeout: 300000 }, async () => {
const nextButton = page.getByRole('button', { name: 'right', exact: true });
  if (await nextButton.isVisible()) {
    if (await nextButton.isEnabled()) {
      await nextButton.click();
    }
  }
});

//TC-SME-68 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ใน MA History//
When("กด ไอคอน <", { timeout: 300000 }, async () => {
const prevButton = page.getByRole('button', { name: 'left', exact: true });
  if (await prevButton.isVisible() && await prevButton.isEnabled()) {
    await prevButton.click();
  }
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'close' }).click();
});

//TC-SME-69 : ทดสอบการปุ่ม Add Company Group / OEM ในหน้า New Company Add - Company//
When("คลิกปุ่มAdd Company Group OEM", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
});

//TC-SME-70 : ทดสอบการกรอกข้้อมูล ใน Add OEM//
When("กรอกข้อมูล Fill : OEM Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('t1');

});

When("กรอกข้อมูล Fill : Display OEM", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('t1');
});

//TC-SME-71 : ทดสอบการใส่รูปใน Add OEM//
When("ใส่รูป2", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
});

//TC-SME-72 : ทดสอบปุ่ม Cancel ใน New MA (OEM Detail)//
When("คลิกปุ่ม Cancel2", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel').click();
});

//TC-SME-73 : ทดสอบปุ่ม Save ใน New MA (OEM Detail)//
When("คลิกปุ่มAdd Company Group OEM2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
});

When("กรอกข้อมูล Fill : OEM Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('t1');
});

When("กรอกข้อมูล Fill : Display OEM2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('t1');
});

When("ใส่รูป3", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
});

When("คลิกปุ่ม Save2", { timeout: 300000 }, async () => {
  await page.locator('#button_save').click();
});

//TC-SME-74 : ทดสอบปุ่มไอคอน รูปตา ใน Company Group / OEM//
When("คลิกปุ่มไอคอนรูปตา ในข้อมูล Company Group  OEM", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'eye' }).click();
});

//TC-SME-75 : ทดสอบปุ่ม Cancel ใน View OEM//
When("คลิกปุ่ม Cancel3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel').click();
});

//TC-SME-76 : ทดสอบปุ่มไอคอน แก้ไข ข้อมูล ใน Company Group / OEM//
When("คลิกปุ่มไอคอนแก้ไข", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit' }).click();
});

//TC-SME-77 : ทดสอบการแก้ไขข้อมูล ใน Edit OEM//
When("แก้ไขข้อมูล Fill : OEM Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('t11');
});

When("แก้ไขข้อมูล Fill : Display OEM", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('t11');
});

//TC-SME-78 : ทดสอบปุ่ม Cancel ใน Edit OEM//
When("คลิกปุ่ม Cancel4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel').click();
});

//TC-SME-79 : ทดสอบปุ่ม Save ใน Edit OEM//
When("คลิกปุ่มไอคอนแก้ไข2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit' }).click();
});

When("แก้ไขข้อมูล Fill : OEM Name2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_oem_name').fill('t11');
});

When("แก้ไขข้อมูล Fill : Display OEM2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_oem').fill('t11');
});

When("คลิกปุ่ม Save3", { timeout: 300000 }, async () => {
  await page.locator('#button_save').click();
});

//TC-SME-80 : ทดสอบปุ่มไอคอน ถังขยะ ข้อมูล ใน Company Group / OEM//
When("คลิกปุ่มไอคอนถังขยะ", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete', exact: true }).click();
});

//TC-SME-81 : ทดสอบปุ่ม Cancel ใน Edit OEM (Delete Confirmation)//
When("คลิกปุ่ม Cancel5", { timeout: 300000 }, async () => {
  await page.getByRole('tooltip').getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-82 : ทดสอบปุ่ม Confirm ใน Edit OEM (Delete Confirmation)//
When("คลิกปุ่มไอคอนถังขยะ2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete', exact: true }).click();
});

When("คลิกปุ่ม Confirm", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-83 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ใน Company Group / OEM//
When("กรอกข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
  await page.locator('#input_text_oem_name').fill('t1');
  await page.locator('#input_text_display_oem').fill('t1');
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
  await page.locator('#button_save').click();
  await page.locator('#input_text_search_input').fill('t1');
});

//TC-SME-84 : ทดสอบการ Search ข้อมูล ใน Company Group / OEM//
When("คลิกปุ่ม Search", { timeout: 300000 }, async () => {
  await page.locator('#search_button').click();
});

//TC-SME-85 : ทดสอบการ Clear ข้อมูลค้นหา ใน Company Group / OEM//
When("คลิกปุ่ม Clear2", { timeout: 300000 }, async () => {
  await page.locator('#clear_button').click();
});

//TC-SME-86 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน Company Group / OEM//
When("กดไอคอน จัดเรียงข้อมูล12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM search', exact: true }).click();
  await page.getByRole('button', { name: 'OEM search', exact: true }).click();
  await page.getByRole('button', { name: 'OEM search', exact: true }).click();
});

//TC-SME-87 : ทดสอบไอคอน ค้นหาข้อมูล (OEM) ใน Company Group / OEM//
When("กดไอคอน กรองข้อมูล11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-88 : ทดสอบการกรอกข้อมูลใน Global Search (Display OEM) ใน Company Group / OEM//
When("กรอกข้อมูลค้นหา13", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').fill('t1');
  await page.waitForTimeout(1000);
  await page.locator('#search_button').click();
});

//TC-SME-89 : ทดสอบปุ่ม Search (OEM) ใน Company Group / OEM//
When("คลิกปุ่ม Search2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.locator('#input_text_search_input').fill('t1');
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-90 : ทดสอบปุ่ม Reset (OEM) ใน Company Group / OEM//
When("คลิกปุ่ม Reset", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-91 : ทดสอบปุ่ม Close (OEM) ใน Company Group / OEM//
When("คลิกปุ่ม Close", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#clear_button').click();
});

//TC-SME-92 : ทดสอบไอคอน จัดเรียงข้อมูล (Display OEM) ใน Company Group / OEM//
When("กดไอคอน จัดเรียงข้อมูล13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Display OEM search' }).click();
  await page.getByRole('button', { name: 'Display OEM search' }).click();
  await page.getByRole('button', { name: 'Display OEM search' }).click();
});

//TC-SME-93 : ทดสอบไอคอน ค้นหาข้อมูล (Display OEM) ใน Company Group / OEM//
When("กดไอคอน กรองข้อมูล12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-94 : ทดสอบการกรอกข้อมูลใน Global Search (Display OEM) ใน Company Group / OEM//
When("กรอกข้อมูลค้นหา14", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').fill('t1');
  await page.waitForTimeout(1000);
  await page.locator('#search_button').click();
});

//TC-SME-95 : ทดสอบปุ่ม Search (Display OEM) ใน Company Group / OEM//
When("คลิกปุ่ม Search3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('t1');
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-96 : ทดสอบปุ่ม Reset (Display OEM) ใน Company Group / OEM//
When("คลิกปุ่ม Reset2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-97 : ทดสอบปุ่ม Close (Display OEM) ใน Company Group / OEM//
When("คลิกปุ่ม Close2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#clear_button').click();
});

//TC-SME-98 : ทดสอบไอคอน จัดเรียงข้อมูล (Active) ใน Company Group / OEM//
When("กดไอคอน จัดเรียงข้อมูล14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Active filter' }).click();
  await page.getByRole('button', { name: 'Active filter' }).click();
  await page.getByRole('button', { name: 'Active filter' }).click();
}); 

//TC-SME-99 : ทดสอบไอคอน กรองข้อมูล (Active) ใน Company Group / OEM//
When("กดไอคอน กรองข้อมูล13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

//TC-SME-100 : ทดสอบการกรอกข้อมูลใน Global Search (Active) ใน Company Group / OEM//
When("กรอกข้อมูลค้นหา15", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').click();
  await page.locator('#search_button').click();
});

//TC-SME-101 : ทดสอบการเลือกข้อมูล (Active) ใน Company Group / OEM//
When("กรอกข้อมูลค้นหา16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Select Active' }).click();
});

//TC-SME-102 : ทดสอบปุ่ม Search (Active) ใน Company Group / OEM//
When("คลิกปุ่ม Search4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-103 : ทดสอบปุ่ม Reset (Active) ใน Company Group / OEM//
When("คลิกปุ่ม Reset3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-104 : ทดสอบปุ่ม Close (Active) ใน Company Group / OEM//
When("คลิกปุ่ม Close3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#clear_button').click();
});

//TC-SME-105 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ใน Permission Management//
When("กรอกข้อมูล ในช่องกรอก", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_permission_mgt_company').fill('t1');
});

//TC-SME-106 : ทดสอบการเลือก OEM ใน Permission Management//
When("เลือก OEM", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-overflow').click();
  await page.getByText('t1').nth(3).click();
});

//TC-SME-107 : ทดสอบการ Search ข้อมูล ใน Permission Management//
When("คลิกปุ่ม Search5", { timeout: 300000 }, async () => {
  await page.locator('#serach_complaint_history').click();
});

//TC-SME-108 : ทดสอบการ Clear ข้อมูลค้นหา ใน Permission Management//
When("คลิกปุ่ม Clear3", { timeout: 300000 }, async () => {
  await page.locator('#clear_complaint_history').click();
});

//TC-SME-109 : ทดสอบปุ่ม Add Menu ใน Permission Management//
When("คลิกปุ่ม Add Menu", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add Menu' }).click();
});

//TC-SME-110 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').first().fill('H');
});

//TC-SME-111 : ทดสอบการ Search ข้อมูล Module ในหน้า Permission Management//
When("คลิกปุ่ม Search6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).first().click();
});

//TC-SME-112 : ทดสอบการ Clear ข้อมูลค้นหา Module ในหน้า Permission Management//
When("คลิกปุ่ม Clear4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).first().click();
});

//TC-SME-113 : ทดสอบการเลือกข้อมูล Module ในหน้า Permission Management//
When("คลิกเลือก ข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Humancee' }).check();
  await page.getByRole('checkbox', { name: 'Humancee' }).uncheck();
});

//TC-SME-114 : ทดสอบการเลือก Select All Module ในหน้า Permission Management//
When("คลิกเลือก Select All", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-115 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Menu Level 1 ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').nth(1).fill('ข้อมูล');
});

//TC-SME-116 : ทดสอบการ Search ข้อมูล Menu Level 1 ในหน้า Permission Management//
When("คลิกปุ่ม Search7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(1).click();
});

//TC-SME-117 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 1 ในหน้า Permission Management//
When("คลิกปุ่ม Clear5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).nth(1).click();
  await page.getByRole('treeitem', { name: 'caret-down Select tree node Human Resource' }).getByLabel('Select tree node').click();
});

//TC-SME-118 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Menu Level 2 ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').nth(2).fill('ข้อมูล');
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-119 : ทดสอบการ Search ข้อมูล Menu Level 2 ในหน้า Permission Management//
When("คลิกปุ่ม Search8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-120 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 2 ในหน้า Permission Management//
When("คลิกปุ่ม Clear6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).nth(2).click();
});

//TC-SME-121 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Feature ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').nth(3).fill('จัดการ');
});

//TC-SME-122 : ทดสอบการ Search ข้อมูล Feature ในหน้า Permission Management//
When("คลิกปุ่ม Search9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(3).click();
});

//TC-SME-123 : ทดสอบการ Clear ข้อมูลค้นหา Feature ในหน้า Permission Management//
When("คลิกปุ่ม Clear7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).nth(3).click();
  await page.locator('div:nth-child(2) > .ant-tree-list > .ant-tree-list-holder > div > .ant-tree-list-holder-inner > .ant-tree-treenode.ant-tree-treenode-switcher-open > .ant-tree-checkbox').first().click();
  await page.locator('.ant-tree.ant-tree-icon-hide.feature-tree-green > .ant-tree-list > .ant-tree-list-holder > div > .ant-tree-list-holder-inner > .ant-tree-treenode.ant-tree-treenode-switcher-open > .ant-tree-checkbox').first().click();
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-124 : ทดสอบกด Module & Menu//
When("คลิก Module & Menu", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

//TC-SME-125 : ทดสอบกด Feature//
When("คลิก Feature", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
  await page.getByText('Module & Menu').click();
});

//TC-SME-126 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu//
When("กด เลือกข้อมูล", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select Humancee' }).click();
});

//TC-SME-127 : ทดสอบกดเลือก Select All ใน Module & Menu//
When("กด Select All", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-128 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu//
When("คลิกปุ่มแว่นขยาย", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div').first().click();
});

//TC-SME-129 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module & Menu ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก6", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_permission_mgt_company').fill('ข้อมูล');
  await page.waitForTimeout(1000);
  await page.locator('#serach_complaint_history').click();
});

//TC-SME-130 : ทดสอบปุ่ม Search (Module & Menu)//
When("คลิกปุ่ม Search10", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div').first().click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('ข้อมูล');
  await page.waitForTimeout(1000);
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-131 : ทดสอบปุ่ม Reset (Module & Menu)//
When("คลิกปุ่ม Reset4", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div').first().click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-132 : ทดสอบปุ่ม Close (Module & Menu)//
When("กดปุ่ม Close8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#clear_complaint_history').click();
});

//TC-SME-133 : ทดสอบกดเลือก ข้อมูล ใน Feature//
When("คลิก  Feature", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

When("กด เลือกข้อมูล2", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
});

//TC-SME-134 : ทดสอบกดเลือก Select All ใน Feature//
When("กด Select All2", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-135 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Feature//
When("คลิกปุ่มแว่นขยาย2", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div > .anticon > svg').click();
});

//TC-SME-136 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Feature ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก7", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_permission_mgt_company').fill('33');
});

//TC-SME-137 : ทดสอบปุ่ม Search (Feature)//
When("คลิกปุ่ม Search11", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div > .anticon > svg').click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('33');
  await page.waitForTimeout(1000);
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-138 : ทดสอบปุ่ม Reset (Feature)//
When("คลิกปุ่ม Reset5", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div > .anticon > svg').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-139 : ทดสอบปุ่ม Close (Feature)//
When("กดปุ่ม Close9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#clear_complaint_history').click();
});

//TC-SME-140 : ทดสอบปุ่ม Cancel ในหน้า New Company Add - Company//
When("คลิกปุ่ม Cancel6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-141 : ทดสอบปุ่ม Save ในหน้า New Company Add - Company//
When("คลิกปุ่มAdd3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอกข้อมูล Fill : Company Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').first().fill('t1');
});

When("กรอกข้อมูล Fill : Company Abbreviation2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').nth(1).fill('t1');
});

When("กรอกข้อมูล Fill : Email2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').nth(2).fill('t1@gmail.com');
});

When("กรอกข้อมูล Fill : Deployment Type2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-item').click();
  await page.getByText('On-Premise').click();
});

When("กรอกข้อมูล Fill : Company Detail2", { timeout: 300000 }, async () => {
  await page.locator('#textarea_input_product_system_brand').fill('t1');
});

When("กรอกข้อมูล Fill : MA per Year2", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').first().fill('1');

});

When("กรอกข้อมูล Fill : MA per Month2", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').nth(1).fill('1');
});

When("กรอกข้อมูล Fill : MA per Week2", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').nth(2).fill('1');
});

When("ใส่รูป4", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
});

When("ใส่ไฟล์ เอกสารรับรองบริษัท \\(ที่มีตราครุฑ)2", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-4 > div').first().click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').first();
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
});


When("ใส่ไฟล์ เอกสาร ภพ.202", { timeout: 300000 }, async () => {
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').nth(1);
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
});


When("คลิกปุ่ม ต่อ MA2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'sync ต่อ MA' }).click();
});

When("คลิกปุ่มAdd4", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'plus Add' }).click();
});

When("กรอกข้อมูล Fill : Apply Date3", { timeout: 300000 }, async () => {
  await page.locator('#datepicker_ma_apply_date').click();
  await page.getByText('Today').click();
});

When("คลิกปุ่ม Save4", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'close' }).click();
});

When("คลิกปุ่มAdd Company Group OEM3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
});

When("กรอกข้อมูล Fill : OEM Name3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('t1');
});

When("กรอกข้อมูล Fill : Display OEM3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('t1');
});

When("ใส่รูป5", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
});

When("คลิกปุ่ม Save5", { timeout: 300000 }, async () => {
  await page.locator('#button_save').click();
});

When("เลือก OEM2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-overflow').click();
  await page.getByText('t1').nth(4).click();
});

When("คลิกปุ่ม Add Menu2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add Menu' }).click();
});

When("คลิกเลือก Select All2", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).check();
  await page.getByRole('treeitem', { name: 'caret-down Select tree node Human Resource' }).getByLabel('Select tree node').click();
  await page.locator('div:nth-child(2) > .ant-tree-list > .ant-tree-list-holder > div > .ant-tree-list-holder-inner > .ant-tree-treenode.ant-tree-treenode-switcher-open > .ant-tree-checkbox').first().click();
  await page.locator('.ant-tree.ant-tree-icon-hide.feature-tree-green > .ant-tree-list > .ant-tree-list-holder > div > .ant-tree-list-holder-inner > .ant-tree-treenode.ant-tree-treenode-switcher-open > .ant-tree-checkbox').first().click();
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิก Module & Menu2", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

When("กด เลือกข้อมูล3", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select ข้อมูลกะวันทำงาน' }).click();
});

When("กด Select All3", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

When("คลิก  Feature2", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});


When("กด เลือกข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select 3333' }).click();
});

When("คลิกปุ่ม Save6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-142 : ทดสอบปุ่ม Cancel ในหน้า Warning//
When("คลิกปุ่ม Cancel7", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-143 : ทดสอบปุ่ม Confirm ในหน้า Warning//
When("คลิกปุ่ม Save7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-144 : ทดสอบกด User//
When("คลิก User", { timeout: 300000 }, async () => {
  await page.getByText('User', { exact: true }).click();
});

//TC-SME-145 : ทดสอบการปุ่ม Add ในหน้า New Company Edit - User//
When("คลิกปุ่มAdd5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

//TC-SME-146 : ทดสอบการกรอกข้้อมูล User Information ในหน้า New Company Edit - User - User Add//
When("กรอกข้อมูล Fill : Username", { timeout: 300000 }, async () => {
  await page.locator('#input_text_').fill('AomKung');
});

When("กรอกข้อมูล Fill : First Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-name-input').first().fill('Yanisa');
});

When("กรอกข้อมูล Fill : Last Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-last-name-input').fill('Wongsawat');
});

When("กรอกข้อมูล Fill : Gender", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('หญิง').click();
});

When("กรอกข้อมูล Fill : Birthday", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByText('User InformationImport').click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByRole('button', { name: 'Choose a year' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByText('2003').click();
  await page.getByText('Jan').click();
  await page.getByText('31').nth(3).click();
});

When("กรอกข้อมูล Fill : Relationship Status", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(6) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('สมรส').click();
});

When("กรอกข้อมูล Fill : Nationality", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_nation-input').fill('ไทย');
});

When("กรอกข้อมูล Fill : Religion", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_religion-input').fill('พุทธ');
});

When("กรอกข้อมูล Fill : Employee ID", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-name-input').nth(1).fill('123');
});

When("กรอกข้อมูล Fill : Department", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-department-input').fill('ABC');
});

When("กรอกข้อมูล Fill : Position", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-position-input').fill('CBA');
});

When("กรอกข้อมูล Fill : House Number  Alley  Village  Building", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_address_detail-input').fill('11/22');
});

When("กรอกข้อมูล Fill : Province", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').first().click();
  await page.getByText('พระนครศรีอยุธยา').click();
});

When("กรอกข้อมูล Fill : District", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(6) > div:nth-child(3) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('วังน้อย').click();
});

When("กรอกข้อมูล Fill : Sub-district Ward", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(4) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('บ่อตาโล่').click();
});

When("กรอกข้อมูล Fill : Remark", { timeout: 300000 }, async () => {
  await page.locator('#textarea_iu-iu_remark-input').fill('55');
});

When("กรอกข้อมูล Fill : Contact Number", { timeout: 300000 }, async () => {
  await page.locator('#input_telformat_iu-tel-input').fill('123-456-7890');
});

When("กรอกข้อมูล Fill : Email3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-email-input').fill('Yanisa@gmail.com');
});

When("กรอกข้อมูล Fill : Line ID", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-lineid-input').fill('Ya123');
});

When("กรอกข้อมูล Fill : Remark2", { timeout: 300000 }, async () => {
  await page.locator('#textarea_iu-remark-input').fill('55');
});

//TC-SME-147 : ทดสอบการใส่รูปใน User Information ในหน้า New Company Edit - User - User Add//
When("ใส่รูป6", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
});

//TC-SME-148 : ทดสอบการใส่ไฟล์ใน Upload Document ในหน้า New Company Edit - User - User Add//
When("ใส่ไฟล์ เอกสารประจำตัว", { timeout: 300000 }, async () => {
  await page.locator('.anticon.anticon-plus > svg').first().click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').first();
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
});

When("ใส่ไฟล์ เอกสารสัญญาจ้างงาน", { timeout: 300000 }, async () => {
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').first();
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
});

When("ใส่ไฟล์ เอกสารอื่น ๆ", { timeout: 300000 }, async () => {
  await page.locator('path:nth-child(2)').click();
  await page.waitForTimeout(1000);
  const filePath = 'img/test.pptx';
  const fileUploader = page.locator('input[type="file"]').first();
  await fileUploader.setInputFiles(filePath);
  await page.locator('#button_close_alert').click();
});

//TC-SME-149 : ทดสอบการเลือกข้อมูลใน Select OEM ในหน้า New Company Edit - User - User Add//
When("เลือกข้อมูล Fill : Select OEM", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-sm-24.ant-col-md-12.ant-col-lg-6 > div > .ant-select > .ant-select-selector').first().click();
  await page.getByText('t1').click();
});

When("เลือกข้อมูล Fill : Select User Group", { timeout: 300000 }, async () => {
  await page.locator('.card-element-body > div:nth-child(2) > .ant-col > div > .ant-select > .ant-select-selector').click();
});

//TC-SME-150 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User - User Add//
When("คลิกปุ่ม Cancel8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-151 : ทดสอบปุ่ม Cancel ในหน้า Warning//
When("คลิกปุ่ม Cancel9", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-152 : ทดสอบปุ่ม Confirm ในหน้า Warning//
When("คลิกปุ่ม Cancel10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-153 : ทดสอบปุ่ม Save ในหน้า New Company Edit - User - User Add//
When("คลิกปุ่ม Save8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.locator('#input_text_').fill('43');
  await page.locator('#input_text_iu-name-input').first().fill('43');
  await page.locator('#input_text_iu-last-name-input').fill('43');
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('หญิง').click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByText('User InformationImport').click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByRole('button', { name: 'Choose a year' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByText('2003').click();
  await page.getByText('Jan').click();
  await page.getByText('31').nth(3).click();
  await page.locator('div:nth-child(6) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('สมรส').click();
  await page.locator('#input_text_iu-iu_nation-input').fill('ไทย');
  await page.locator('#input_text_iu-iu_religion-input').fill('พุทธ');
  await page.locator('#input_text_iu-name-input').nth(1).fill('19');
  await page.locator('#input_text_iu-department-input').fill('ABC');
  await page.locator('#input_text_iu-position-input').fill('CBA');
  await page.locator('#input_text_iu-iu_address_detail-input').fill('11/22');
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').first().click();
  await page.getByText('พระนครศรีอยุธยา').click();
  await page.locator('div:nth-child(6) > div:nth-child(3) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('วังน้อย').click();
  await page.locator('div:nth-child(4) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('บ่อตาโล่').click();
  await page.locator('#textarea_iu-iu_remark-input').fill('19');
  await page.locator('#input_telformat_iu-tel-input').fill('019-019-1919');
  await page.locator('#input_text_iu-email-input').fill('19@gmail.com');
  await page.locator('#input_text_iu-lineid-input').fill('19');
  await page.locator('#textarea_iu-remark-input').fill('19');
  const path = require('path');
  const filePath = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath);
  await page.locator('.anticon.anticon-plus > svg').first().click();
  await page.waitForTimeout(1000);
  const filePath2 = 'img/test.pptx';
  const fileUploader2 = page.locator('input[type="file"]').first();
  await fileUploader2.setInputFiles(filePath2);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath3 = 'img/test.pptx';
  const fileUploader3 = page.locator('input[type="file"]').first();
  await fileUploader3.setInputFiles(filePath3);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').click();
  await page.waitForTimeout(1000);
  const filePath4 = 'img/test.pptx';
  const fileUploader4 = page.locator('input[type="file"]').first();
  await fileUploader4.setInputFiles(filePath4);
  await page.locator('#button_close_alert').click();
  await page.locator('.ant-col.ant-col-sm-24.ant-col-md-12.ant-col-lg-6 > div > .ant-select > .ant-select-selector').first().click();
  await page.getByText('t1').click();
  await page.locator('.card-element-body > div:nth-child(2) > .ant-col > div > .ant-select > .ant-select-selector').click();
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-154 : ทดสอบปุ่ม Cancel ในหน้า Warning (กรณี Save)//
When("คลิกปุ่ม Cancel11", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-155 : ทดสอบปุ่ม Confirm ในหน้า Warning (กรณี Save)//
When("คลิกปุ่ม Save9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-156 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User//
When("กรอกข้อมูลค้นหา17", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').fill('Yani');
});

//TC-SME-157 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User//
When("คลิกปุ่มค้นหา3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-158 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User//
When("คลิกปุ่ม Clear8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-159 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User//
When("กด Filter ข้อมูล2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Name', exact: true }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Contact Number' }).check();
  await page.getByRole('checkbox', { name: 'Name', exact: true }).uncheck();
  await page.getByRole('checkbox', { name: 'Status' }).check();
  await page.getByRole('checkbox', { name: 'Contact Number' }).uncheck();
  await page.getByRole('checkbox', { name: 'Picture' }).check();
  await page.getByRole('checkbox', { name: 'Status' }).uncheck();
  await page.getByRole('checkbox', { name: 'Username' }).check();
  await page.getByRole('checkbox', { name: 'Picture' }).uncheck();
  await page.getByRole('checkbox', { name: 'OEM' }).check();
  await page.getByRole('checkbox', { name: 'Username' }).uncheck();
  await page.getByRole('checkbox', { name: 'MGT' }).check();
  await page.getByRole('checkbox', { name: 'OEM' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//TC-SME-160 : ทดสอบไอคอน จัดเรียงข้อมูล (Name) ใน New Company Edit - User//
When("กดไอคอน จัดเรียงข้อมูล15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Name search', exact: true }).click();
  await page.getByRole('button', { name: 'Name search', exact: true }).click();
  await page.getByRole('button', { name: 'Name search', exact: true }).click();
});

//TC-SME-161 : ทดสอบไอคอน ค้นหาข้อมูล (Name) ใน New Company Edit - User//
When("กดไอคอน กรองข้อมูล14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-162 : ทดสอบการกรอกข้อมูลใน Global Search (Name)//
When("กรอกข้อมูลค้นหา18", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('Yani');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-163 : ทดสอบปุ่ม Search (Name) ใน New Company Edit - User//
When("กดไอคอน กรองข้อมูล15", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_iu_fullname').fill('Yani');
});

When("กดปุ่ม Search8", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_iu_fullname').click();
});

//TC-SME-164 : ทดสอบปุ่ม Reset (Name) ใน New Company Edit - User//
When("กดปุ่ม Reset8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-165 : ทดสอบปุ่ม Close (Name) ใน New Company Edit - User//
When("กดปุ่ม Close10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-166 : ทดสอบไอคอน จัดเรียงข้อมูล (Username) ใน New Company Edit - User//
When("กดไอคอน จัดเรียงข้อมูล16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Username search' }).click();
  await page.getByRole('button', { name: 'Username search' }).click();
  await page.getByRole('button', { name: 'Username search' }).click();
});

//TC-SME-167 : ทดสอบไอคอน ค้นหาข้อมูล (Username) ใน New Company Edit - User//
When("กดไอคอน กรองข้อมูล16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-168 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type) ในหน้า User//
When("กรอกข้อมูลค้นหา19", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('Aom');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-169 : ทดสอบปุ่ม Search (Username) ใน New Company Edit - User//
When("กดปุ่ม Search9", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_iu_username').fill('Aom');
  await page.waitForTimeout(1000);
  await page.locator('#button_search_column_iu_username').click();
});

//TC-SME-170 : ทดสอบปุ่ม Reset (Username) ใน New Company Edit - User//
When("กดปุ่ม Reset9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-171 : ทดสอบปุ่ม Close (Username) ใน New Company Edit - User//
When("กดปุ่ม Close11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-172 : ทดสอบไอคอน จัดเรียงข้อมูล (Contract Number) ใน New Company Edit - User//
When("กดไอคอน จัดเรียงข้อมูล17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Contact Number search' }).click();
  await page.getByRole('button', { name: 'Contact Number search' }).click();
  await page.getByRole('button', { name: 'Contact Number search' }).click();
});

//TC-SME-173 : ทดสอบไอคอน ค้นหาข้อมูล (Contract Number) ใน New Company Edit - User//
When("กดไอคอน ค้นหา17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

//TC-SME-174 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type)//
When("กรอกข้อมูลค้นหา20", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('333');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).first().click();
  await page.waitForTimeout(1000);
});

//TC-SME-175 : ทดสอบปุ่ม Search (Contract Number) ใน New Company Edit - User//
When("กดปุ่ม Search10", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_iu_con_tel').fill('333');
  await page.waitForTimeout(1000);
  await page.locator('#button_search_column_iu_con_tel').click();
});

//TC-SME-176 : ทดสอบปุ่ม Reset (Contract Number) ใน New Company Edit - User//
When("กดปุ่ม Reset10", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-177 : ทดสอบปุ่ม Close (Contract Number) ใน New Company Edit - User//
When("กดปุ่ม Close12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-178 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User//
When("กดไอคอน จัดเรียงข้อมูล18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
});

//TC-SME-179 : ทดสอบปุ่มกรองข้อมูล (OEM) ใน New Company Edit - User//
When("กดไอคอน กรองข้อมูล17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
});

//TC-SME-180 : ทดสอบการกรอกข้อมูลใน Global Search (OEM) ใน New Company Edit - User//
When("กรอกข้อมูลค้นหา21", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('t1');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-181 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User//
When("เลือกข้อมูล", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Select t1' }).click();
});

//TC-SME-182 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User//
When("กดปุ่ม Search11", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_search_column_t_oem').click();
});

//TC-SME-183 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User//
When("กดปุ่ม Reset11", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-184 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User//
When("กดปุ่ม Close13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-185 : ทดสอบไอคอน จัดเรียงข้อมูล (Status) ใน New Company Edit - User//
When("กดไอคอน จัดเรียงข้อมูล19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Status filter' }).click();
  await page.getByRole('button', { name: 'Status filter' }).click();
  await page.getByRole('button', { name: 'Status filter' }).click();
});

//TC-SME-186 : ทดสอบปุ่มกรองข้อมูล (Status) ใน New Company Edit - User//
When("กดไอคอน กรองข้อมูล18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
});

//TC-SME-187 : ทดสอบการกรอกข้อมูลใน Global Search (Status) ใน New Company Edit - User//
When("กรอกข้อมูลค้นหา22", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-188 : ทดสอบการเลือกข้อมูล (Status) ใน New Company Edit - User//
When("เลือกข้อมูล2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Select Active' }).click();
});

//TC-SME-189 : ทดสอบปุ่ม Search (Status) ใน New Company Edit - User//
When("กดปุ่ม Search12", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_iu_is_active').click();
});

//TC-SME-190 : ทดสอบปุ่ม Reset (Status) ใน New Company Edit - User//
When("กดปุ่ม Reset12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-191 : ทดสอบปุ่ม Close (Status) ใน New Company Edit - User//
When("กดปุ่ม Close14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-192 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User//
When("เลือก จำนวน\\/Pageที่ต้องการ2", { timeout: 300000 }, async () => {
  await page.getByText('/ page').click();
  await page.getByText('20 / page').click();
});

//TC-SME-193 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ในหน้า New Company Edit - User//
When("กด ไอคอน >2", { timeout: 300000 }, async () => {
const nextButton = page.getByRole('button', { name: 'right', exact: true });
  if (await nextButton.isVisible()) {
    if (await nextButton.isEnabled()) {
      await nextButton.click();
    }
  }
});

//TC-SME-194 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ในหน้า New Company Edit - User//
When("กด ไอคอน <2", { timeout: 300000 }, async () => {
const prevButton = page.getByRole('button', { name: 'left', exact: true });
  if (await prevButton.isVisible() && await prevButton.isEnabled()) {
    await prevButton.click();
  }
  await page.waitForTimeout(1000);
});

//TC-SME-195 : ทดสอบกด User Group//
When("คลิก User Group", { timeout: 300000 }, async () => {
  await page.getByText('User Group').click();
});

//TC-SME-196 : ทดสอบการปุ่ม Add ในหน้า New Company Edit - User Group Add//
When("คลิกปุ่มAdd6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

//TC-SME-197 : ทดสอบการกรอกข้้อมูล User Group ในหน้า New Company Edit - User Group Add//
When("กรอกข้อมูล Fill : User Group Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_name_input').fill('5');
});

When("Fill : Select OEM2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-overflow').first().click();
  await page.getByText('t1').click();
});

When("กรอกข้อมูล Fill : Remark3", { timeout: 300000 }, async () => {
  await page.locator('#textarea_user_group_remark_input').fill('5');
});

//TC-SME-198 : ทดสอบการเลือกข้้อมูล Select User ในหน้า New Company Edit - User Group Add//
When("เลือกข้อมูล Fill : Select User", { timeout: 300000 }, async () => {
  await page.locator('.ant-select.ant-select-outlined.css-1vjf2v5.ant-select-multiple.ant-select-allow-clear > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow').click();
  await page.getByText('Select all').nth(1).click();
});

//TC-SME-199 : ทดสอบการเลือกข้อมูลใน Select OEMด้วยข้อมูลที่แสดงในตาราง Module & Menuใน  หน้าPermission Management//
When("เลือกข้อมูล Fill : Select OEM2", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-12 > div > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow').click();
  await page.getByText('t1').nth(3).click();
});

//TC-SME-200 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module & Menu ใน  หน้าPermission Management//
When("กรอกข้อมูล ในช่องกรอก8", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('A');
  await page.waitForTimeout(1000);
});

//TC-SME-201 : ทดสอบการ Search ข้อมูล Module & Menu ใน Permission Management//
When("กดปุ่ม Search13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-202 : ทดสอบการ Clear ข้อมูลค้นหา Module & Menu ใน Permission Management//
When("คลิกปุ่ม Clear9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-203 : ทดสอบกด Module & Menu//
When("คลิก Module & Menu3", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

//TC-SME-204 : ทดสอบกด Feature//
When("คลิก Feature2", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

//TC-SME-205 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu//
When("คลิก Module & Menu4", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

When("กด เลือกข้อมูล5", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select Acc MGT' }).click();
});

//TC-SME-206 : ทดสอบกดเลือก Select All ใน Module & Menu//
When("กด Select All4", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-207 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu//
When("คลิกปุ่มแว่นขยาย3", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
});

//TC-SME-208 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module & Menu ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก9", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('A');
});

//TC-SME-209 : ทดสอบปุ่ม Search (Module & Menu)//
When("กดปุ่ม Search14", { timeout: 300000 }, async () => {
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-210 : ทดสอบปุ่ม Reset (Module & Menu)//
When("กดปุ่ม Reset13", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-211 : ทดสอบปุ่ม Close (Module & Menu)//
When("กดปุ่ม Close15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-212 : ทดสอบกดเลือก ข้อมูล ใน Feature//
When("คลิก  Feature3", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

When("กด เลือกข้อมูล6", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select 3333' }).click();
});

//TC-SME-213 : ทดสอบกดเลือก Select All ใน Feature//
When("กด Select All5", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
});

//TC-SME-214 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Feature//
When("คลิกปุ่มแว่นขยาย4", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
});

//TC-SME-215 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Feature ในหน้า Permission Management//
When("กรอกข้อมูล ในช่องกรอก10", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('3');
});

//TC-SME-216 : ทดสอบปุ่ม Search (Feature)//
When("กดปุ่ม Search15", { timeout: 300000 }, async () => {
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-217 : ทดสอบปุ่ม Reset (Feature)//
When("กดปุ่ม Reset14", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-218 : ทดสอบปุ่ม Close (Feature)//
When("กดปุ่ม Close16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-219 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User Group Edit//
When("คลิกปุ่ม Cancel12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-220 : ทดสอบปุ่ม Cancel ในหน้า Warning//
When("คลิกปุ่ม Cancel13", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-221 : ทดสอบปุ่ม Confirm ในหน้า Warning//
When("คลิกปุ่ม Cancel14", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm5", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-222 : ทดสอบปุ่ม Save ในหน้า New Company Edit - User Group Edit//
When("คลิกปุ่ม Save11", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_user_group_name_input').fill('5');
  await page.waitForTimeout(1000);
  await page.locator('.ant-select-selection-overflow').first().click();
  await page.waitForTimeout(1000);
  await page.getByText('t1').click();
  await page.locator('#textarea_user_group_remark_input').fill('5');
  await page.waitForTimeout(1000);
  await page.locator('.ant-select.ant-select-outlined.css-1vjf2v5.ant-select-multiple.ant-select-allow-clear > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow').click();
  await page.waitForTimeout(1000);
  await page.getByText('Select all').nth(1).click();
  await page.waitForTimeout(1000);
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-12 > div > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow').click();
  await page.waitForTimeout(1000);
  await page.getByText('t1').nth(3).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Select all' }).check();
  await page.getByText('Feature').click();
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-223 : ทดสอบปุ่ม Cancel ในหน้า Warning (กรณี Save)//
When("คลิกปุ่ม Cancel15", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-224 : ทดสอบปุ่ม Confirm ในหน้า Warning (กรณี Save)//
When("คลิกปุ่ม Save12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm6", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-225 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User Group//
When("กรอกข้อมูลค้นหา23", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('1');
});

//TC-SME-226 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User Group//
When("คลิกปุ่มค้นหา4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-227 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User Group//
When("คลิกปุ่ม Clear10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-228 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User Group//
When("กด Filter ข้อมูล3", { timeout: 300000 }, async () => {
await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Member' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Remark' }).check();
  await page.getByRole('checkbox', { name: 'Member' }).uncheck();
  await page.getByRole('checkbox', { name: 'User Group' }).check();
  await page.getByRole('checkbox', { name: 'Remark' }).uncheck();
  await page.getByRole('checkbox', { name: 'OEM' }).check();
  await page.getByRole('checkbox', { name: 'User Group' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//TC-SME-229 : ทดสอบไอคอน จัดเรียงข้อมูล (User Group) ใน New Company Edit - User Group//
When("กดไอคอน จัดเรียงข้อมูล20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'User Group search' }).click();
  await page.getByRole('button', { name: 'User Group search' }).click();
  await page.getByRole('button', { name: 'User Group search' }).click();
});

//TC-SME-230 : ทดสอบไอคอน ค้นหาข้อมูล (User Group) ใน New Company Edit - User Group//
When("กดไอคอน กรองข้อมูล19", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-231 : ทดสอบการกรอกข้อมูลใน Global Search (User Group) ใน New Company Edit - User Group//
When("กรอกข้อมูลค้นหา24", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_group_name').fill('1');
});

//TC-SME-232 : ทดสอบปุ่ม Search (User Group) ใน New Company Edit - User Group//
When("กดปุ่ม Search16", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_group_name').click();
});

//TC-SME-233 : ทดสอบปุ่ม Reset (User Group) ใน New Company Edit - User Group//
When("กดปุ่ม Reset15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-234 : ทดสอบปุ่ม Close (User Group) ใน New Company Edit - User Group//
When("กดปุ่ม Close17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-235 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User Group//
When("กดไอคอน จัดเรียงข้อมูล21", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
});

//TC-SME-236 : ทดสอบปุ่มกรองข้อมูล (OEM) ใน New Company Edit - User Group//
When("กดไอคอน กรองข้อมูล20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

//TC-SME-237 : ทดสอบการกรอกข้อมูลใน Global Search (OEM) ใน New Company Edit - User Group//
When("กรอกข้อมูลค้นหา25", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('t1');
});

//TC-SME-238 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User Group//
When("เลือกข้อมูล3", { timeout: 300000 }, async () => {
  await page.getByRole('searchbox', { name: 'Search...' }).fill('t1');
});

//TC-SME-239 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User Group//
When("กดปุ่ม Search17", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_oem_name').click();
});

//TC-SME-240 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User Group//
When("กดปุ่ม Reset16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-241 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User Group//
When("กดปุ่ม Close18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-242 : ทดสอบไอคอน จัดเรียงข้อมูล (Remark) ใน New Company Edit - User Group//
When("กดไอคอน จัดเรียงข้อมูล22", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Remark search' }).click();
  await page.getByRole('button', { name: 'Remark search' }).click();
  await page.getByRole('button', { name: 'Remark search' }).click();
});

//TC-SME-243 : ทดสอบไอคอน ค้นหาข้อมูล (Remark) ใน New Company Edit - User Group//
When("กดไอคอน กรองข้อมูล21", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-244 : ทดสอบการกรอกข้อมูลใน Global Search (Remark) ใน New Company Edit - User Group//
When("กรอกข้อมูลค้นหา26", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('1');
});

//TC-SME-245 : ทดสอบปุ่ม Search (Remark) ใน New Company Edit - User Group//
When("กดปุ่ม Search18", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_group_remark').click();
});

//TC-SME-246 : ทดสอบปุ่ม Reset (Remark) ใน New Company Edit - User Group//
When("กดปุ่ม Reset17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-247 : ทดสอบปุ่ม Close (Remark) ใน New Company Edit - User Group//
When("กดปุ่ม Close19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-248 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User Group//
When("เลือก จำนวน\\/Pageที่ต้องการ3", { timeout: 300000 }, async () => {
  await page.getByText('/ page').click();
  await page.getByText('20 / page').click();
});

//TC-SME-249 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ในหน้า New Company Edit - User Group//
When("กด ไอคอน >3", { timeout: 300000 }, async () => {
const nextButton = page.getByRole('button', { name: 'right', exact: true });
  if (await nextButton.isVisible()) {
    if (await nextButton.isEnabled()) {
      await nextButton.click();
    }
  }
});

//TC-SME-250 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ในหน้า New Company Edit - User Group//
When("กด ไอคอน <3", { timeout: 300000 }, async () => {
const prevButton = page.getByRole('button', { name: 'left', exact: true });
  if (await prevButton.isVisible() && await prevButton.isEnabled()) {
    await prevButton.click();
  }
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'arrow-left' }).click();
});

//TC-SME-251 : ทดสอบปุ่มไอคอน จุด 3 จุด (More Options) ที่รายการข้อมูล//
When("กดจุด 3 จุด", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sme_oem_table_search_input').fill('t1');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: /2 t1 t1 On Premise/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

//TC-SME-252 : ทดสอบการปุ่ม Edit .ในหน้า New Company Edit - Company//
When("คลิกปุ่มEdit", { timeout: 300000 }, async () => {
  await page.getByText('Edit').click();
});

//TC-SME-253 : ทดสอบการแก้ไขข้้อมูล Companyในหน้า New Company Add - Company (Edit)//
When("แก้ไขข้อมูล Fill : Company Name", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_product_system_brand').first().fill('');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_product_system_brand').first().fill('t11');
});

When("แก้ไขข้อมูล Fill : Company Abbreviation", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_product_system_brand').nth(1).fill('');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_product_system_brand').nth(1).fill('tt');
});

When("แก้ไขข้อมูล Fill : Email", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_product_system_brand').nth(2).fill('t11@gmail.com');
});

When("แก้ไขข้อมูล Fill : Deployment Type", { timeout: 300000 }, async () => {
  await page.locator('#root').getByTitle('On-Premise').click();
  await page.getByText('On-Premise').nth(1).click();
});

When("แก้ไขข้อมูล Fill : Company Detail", { timeout: 300000 }, async () => {
  await page.locator('#textarea_input_product_system_brand').fill('t11');
});

When("แก้ไขข้อมูล Fill : MA per Year", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').first().fill('11');
});

When("แก้ไขข้อมูล Fill : MA per Month", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').nth(1).fill('11');
});

When("แก้ไขข้อมูล Fill : MA per Week", { timeout: 300000 }, async () => {
  await page.locator('#input_numberformat_input_product_system_brand').nth(2).fill('11');
});

//TC-SME-254 : ทดสอบการแก้ไขรูปใน Company ในหน้า New Company Add - Company (Edit)//
When("แก้ไขรูป", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath5 = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath5);
});

//TC-SME-255 : ทดสอบการใส่ไฟล์ใน Upload Documentในหน้า New Company Add - Company (Edit)//
When("ใส่ไฟล์", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-4 > div').first().click();
  await page.waitForTimeout(1000);
  const filePath6 = 'img/test.pptx';
  const fileUploader5 = page.locator('input[type="file"]').first();
  await fileUploader5.setInputFiles(filePath6);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath7 = 'img/test.pptx';
  const fileUploader6 = page.locator('input[type="file"]').nth(1);
  await fileUploader6.setInputFiles(filePath7);
  await page.locator('#button_close_alert').click();
});

//TC-SME-256 : ทดสอบการปุ่ม Add .Company Group / OEM ในหน้า New Company Add - Company (Edit)//
When("คลิกปุ่มAdd Company Group \\/ OEM", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
});

//TC-SME-256 : ทดสอบการปุ่ม Add .Company Group / OEM ในหน้า New Company Add - Company (Edit)//
When("กรอกข้อมูล Fill : OEM Name4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('a');
});

When("กรอกข้อมูล Fill : Display OEM4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('a');
});

//TC-SME-256 : ทดสอบการปุ่ม Add .Company Group / OEM ในหน้า New Company Add - Company (Edit)//
When("ใส่รูป7", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath8 = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath8);
});

//TC-SME-256 : ทดสอบการปุ่ม Add .Company Group / OEM ในหน้า New Company Add - Company (Edit)//
When("คลิกปุ่ม Cancel16", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel').click();
});

//TC-SME-260 : ทดสอบปุ่ม Save ใน New MA (Edit)//
When("คลิกปุ่มAdd Company Group \\/ OEM2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
});

When("กรอกข้อมูล Fill : OEM Name5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('a');
});


When("กรอกข้อมูล Fill : Display OEM5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('a');
});

When("ใส่รูป8", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath9 = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath9);
});

When("คลิกปุ่ม Save13", { timeout: 300000 }, async () => {
  await page.locator('#button_save').click();
});

//TC-SME-261 : ทดสอบปุ่มไอคอน รูปตา ใน Company Group / OEM (Edit)//
When("คลิกปุ่มไอคอนรูปตา ในข้อมูล Company Group \\/ OEM", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'eye' }).nth(1).click();
});

//TC-SME-262 : ทดสอบปุ่มCancel ใน View OEM (Edit)//
When("คลิกปุ่ม Cancel17", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel').click();
});

//TC-SME-263 : ทดสอบปุ่มไอคอน แก้ไข ข้อมูลใน Company Group / OEM (Edit)//
When("คลิกปุ่มไอคอนแก้ไข3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit' }).nth(1).click();
});

//TC-SME-264 : ทดสอบการแก้ไขข้อมูลใน Edit OEM (Edit)//
When("แก้ไขข้อมูล Fill : OEM Name3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('aa');
});

When("แก้ไขข้อมูล Fill : Display OEM3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('aa');
});

//TC-SME-265 : ทดสอบปุ่ม Cancel ใน Edit OEM (Edit)//
When("คลิกปุ่ม Cancel18", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel').click();
});

//TC-SME-266 : ทดสอบปุ่ม Save ใน Edit OEM (Edit)//
When("คลิกปุ่มไอคอนแก้ไข4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit' }).nth(1).click();
});

When("แก้ไขข้อมูล Fill : OEM Name4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_oem_name').fill('aa');
});

When("แก้ไขข้อมูล Fill : Display OEM4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_oem').fill('aa');
});

When("คลิกปุ่ม Save14", { timeout: 300000 }, async () => {
  await page.locator('#button_save').click();
});

//TC-SME-267 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตารางใน Company Group / OEM (Edit)//
When("กรอกข้อมูลค้นหา27", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').fill('a');
});

//TC-SME-268 : ทดสอบการ Search ข้อมูลใน Company Group / OEM (Edit)//
When("คลิกปุ่ม Search12", { timeout: 300000 }, async () => {
  await page.locator('#search_button').click();
});

//TC-SME-269 : ทดสอบการ Clear ข้อมูลค้นหาใน Company Group / OEM (Edit)//
When("คลิกปุ่ม Clear11", { timeout: 300000 }, async () => {
  await page.locator('#clear_button').click();
});

//TC-SME-270 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน Company Group / OEM (Edit)//
When("กดไอคอน จัดเรียงข้อมูล23", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM search', exact: true }).click();
  await page.getByRole('button', { name: 'OEM search', exact: true }).click();
  await page.getByRole('button', { name: 'OEM search', exact: true }).click();
});

//TC-SME-271 : ทดสอบไอคอน ค้นหาข้อมูล (OEM) ใน Company Group / OEM (Edit)//
When("กดไอคอน กรองข้อมูล22", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-272 : ทดสอบการกรอกข้อมูลใน Global Search (Display OEM) ใน Company Group / OEM (Edit)//
When("กรอกข้อมูลค้นหา28", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').fill('t1');
  await page.waitForTimeout(1000);
  await page.locator('#search_button').click();
});

//TC-SME-273 : ทดสอบปุ่ม Search (OEM) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Search19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.locator('#input_text_search_input').fill('t1');
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-274 : ทดสอบปุ่ม Reset (OEM) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Reset18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-275 : ทดสอบปุ่ม Close (OEM) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Close20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#clear_button').click();
});

//TC-SME-276 : ทดสอบไอคอน จัดเรียงข้อมูล (Display OEM) ใน Company Group / OEM (Edit)//
When("กดไอคอน จัดเรียงข้อมูล24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Display OEM search' }).click();
  await page.getByRole('button', { name: 'Display OEM search' }).click();
  await page.getByRole('button', { name: 'Display OEM search' }).click();
});

//TC-SME-277 : ทดสอบไอคอน ค้นหาข้อมูล (Display OEM) ใน Company Group / OEM (Edit)//
When("กดไอคอน กรองข้อมูล23", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-278 : ทดสอบการกรอกข้อมูลใน Global Search(Display OEM) ใน Company Group / OEM (Edit)//
When("กรอกข้อมูลค้นหา29", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').fill('t1');
  await page.waitForTimeout(1000);
  await page.locator('#search_button').click();
});

//TC-SME-279 : ทดสอบปุ่ม Search (Display OEM) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Search20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('t1');
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-280 : ทดสอบปุ่ม Reset (Display OEM) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Reset19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-281 : ทดสอบปุ่ม Close (Display OEM) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Close21", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#clear_button').click();
});

//TC-SME-282 : ทดสอบไอคอน จัดเรียงข้อมูล (Active)ใน Company Group / OEM (Edit)//
When("กดไอคอน จัดเรียงข้อมูล25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Active filter' }).click();
  await page.getByRole('button', { name: 'Active filter' }).click();
  await page.getByRole('button', { name: 'Active filter' }).click();
}); 

//TC-SME-283 : ทดสอบไอคอน กรองข้อมูล (Active) ใน Company Group / OEM (Edit)//
When("กดไอคอน กรองข้อมูล24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

//TC-SME-284 : ทดสอบการกรอกข้อมูลใน Global Search (Active) ใน Company Group / OEM (Edit)//
When("กรอกข้อมูลค้นหา30", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search_input').click();
  await page.locator('#search_button').click();
});

//TC-SME-285 : ทดสอบการเลือกข้อมูล (Active) ใน Company Group / OEM (Edit)//
When("เลือกข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Select Active' }).click();
});

//TC-SME-286 : ทดสอบปุ่ม Search (Active) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Search21", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//TC-SME-287 : ทดสอบปุ่ม Reset (Active) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Reset20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-288 : ทดสอบปุ่ม Close (Active) ใน Company Group / OEM (Edit)//
When("กดปุ่ม Close22", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#clear_button').click();
});

//TC-SME-289 : ทดสอบปุ่มไอคอน ถังขยะ ข้อมูล ใน Company Group / OEM (Edit)//
When("คลิกปุ่มไอคอนถังขยะ3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete' }).nth(2).click();
});

//TC-SME-290 : ทดสอบปุ่ม Cancel ใน Edit OEM (Edit)//
When("คลิกปุ่ม Cancel19", { timeout: 300000 }, async () => {
  await page.getByRole('tooltip').getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-291 : ทดสอบปุ่ม Confirm ใน Edit OEM (Edit)//
When("คลิกปุ่มไอคอนถังขยะ4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete' }).nth(2).click();
});

When("คลิกปุ่ม Confirm7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-292 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง ใน Permission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก11", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_permission_mgt_company').fill('Humance');
});

//TC-SME-293 : ทดสอบการกเลือก OEM ใน Permission Management (Edit)//
When("เลือก OEM3", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-overflow').click();
  await page.getByText('t1').nth(4).click();
});

//TC-SME-294 : ทดสอบการ Search ข้อมูล ใน Permission Management (Edit)//
When("คลิกปุ่ม Search13", { timeout: 300000 }, async () => {
  await page.locator('#serach_complaint_history').click();
});

//TC-SME-295 : ทดสอบการ Clear ข้อมูลค้นหา ใน Permission Management (Edit)//
When("คลิกปุ่ม Clear12", { timeout: 300000 }, async () => {
  await page.locator('#clear_complaint_history').click();
});

//TC-SME-296 : ทดสอบปุ่ม Add Menuใน Permission Management (Edit)//
When("คลิกปุ่ม Add Menu3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add Menu' }).click();
});

//TC-SME-297 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก12", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').first().fill('H');
  await page.waitForTimeout(1000);
});

//TC-SME-298 : ทดสอบการ Search ข้อมูล Module ใน  หน้าPermission Management (Edit)//
When("คลิกปุ่ม Search14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).first().click();
});

//TC-SME-299 : ทดสอบการ Clear ข้อมูลค้นหา Module ใน หน้าPermission Management (Edit)//
When("คลิกปุ่ม Clear13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).first().click();
});

//TC-SME-300 : ทดสอบการเลือกข้อมูล Module ใน หน้าPermission Management (Edit)//
When("คลิกเลือก ข้อมูล2", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Humancee' }).uncheck();
  await page.getByRole('checkbox', { name: 'Humancee' }).check();
});

//TC-SME-301 : ทดสอบการเลือกSelect All Module ใน หน้าPermission Management (Edit)//
When("คลิกเลือก Select All3", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-302 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Menu Level 1 ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก13", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').nth(1).fill('ข้อมูล');
});

//TC-SME-303 : ทดสอบการ Search ข้อมูล Menu Level 1 ใน  หน้าPermission Management (Edit)//
When("คลิกปุ่ม Search15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(1).click();
});

//TC-SME-304 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 1ใน หน้าPermission Management (Edit)//
When("คลิกปุ่ม Clear14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).nth(1).click();
  await page.getByRole('treeitem', { name: 'caret-down Select tree node Human Resource' }).getByLabel('Select tree node').click();
});

//TC-SME-305 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Menu Level 2 ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก14", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').nth(2).fill('ข้อมูล');
});

//TC-SME-306 : ทดสอบการ Search ข้อมูล Menu Level 2 ใน  หน้าPermission Management (Edit)//
When("คลิกปุ่ม Search16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(2).click();
});

//C-SME-307 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 2 ใน หน้าPermission Management (Edit)//
When("คลิกปุ่ม Clear15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).nth(2).click();
  await page.locator('div:nth-child(2) > .ant-tree-list > .ant-tree-list-holder > div > .ant-tree-list-holder-inner > .ant-tree-treenode.ant-tree-treenode-switcher-open > .ant-tree-checkbox').first().click();
});

//TC-SME-308 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก15", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').nth(3).fill('3');
});

//TC-SME-309 : ทดสอบการ Search ข้อมูล Feature ใน  หน้าPermission Management (Edit)//
When("คลิกปุ่ม Search17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).nth(3).click();
});

//TC-SME-310 : ทดสอบการ Clear ข้อมูลค้นหา Feature ใน หน้าPermission Management (Edit)//
When("คลิกปุ่ม Clear16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).nth(3).click();
  await page.locator('.ant-tree.ant-tree-icon-hide.feature-tree-green > .ant-tree-list > .ant-tree-list-holder > div > .ant-tree-list-holder-inner > .ant-tree-treenode.ant-tree-treenode-switcher-open > .ant-tree-checkbox').first().click();
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-311 : ทดสอบกด Module & Menu (Edit)//
When("คลิก Module & Menu5", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

//TC-SME-312 : ทดสอบกด Feature (Edit)//
When("คลิก Feature3", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

//TC-SME-313 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu(Edit)//
When("คลิก Module & Menu6", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

When("กด เลือกข้อมูล7", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select Humancee' }).click();
});

//TC-SME-314 : ทดสอบกดเลือก Select All ใน Module & Menu (Edit)//
When("กด เลือกข้อมูล8", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-315 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu (Edit)//
When("คลิกปุ่มแว่นขยาย5", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div').first().click();
});

//TC-SME-316 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module & Menu ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก16", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_permission_mgt_company').fill('ข้อมูล');
  await page.waitForTimeout(1000);
  await page.locator('#serach_complaint_history').click();
});

//TC-SME-317 : ทดสอบปุ่ม Search (Module & Menu) (Edit)//
When("กดปุ่ม Search22", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div').first().click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('ข้อมูล');
  await page.waitForTimeout(1000);
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-318 : ทดสอบปุ่ม Reset (Module & Menu) (Edit)//
When("กดปุ่ม Reset21", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div').first().click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-319 : ทดสอบปุ่ม Close (Module & Menu) (Edit)//
When("กดปุ่ม Close23", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#clear_complaint_history').click();
});

//TC-SME-320 : ทดสอบกดเลือก ข้อมูล ใน  Feature (Edit)//
When("คลิก  Feature4", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

When("กด เลือกข้อมูล9", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
});

//TC-SME-321 : ทดสอบกดเลือก Select All ใน  Feature (Edit)//
When("กด เลือกข้อมูล10", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-322 : ทดสอบปุ่มไอคอน แว่นขยาย ใน  Feature (Edit)//
When("คลิกปุ่มแว่นขยาย6", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div > .anticon > svg').click();
});

//TC-SME-323 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก17", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_permission_mgt_company').fill('33');
});

//TC-SME-324 : ทดสอบปุ่ม Search ( Feature) (Edit)//
When("กดปุ่ม Search23", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div > .anticon > svg').click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('33');
  await page.waitForTimeout(1000);
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-325 : ทดสอบปุ่ม Reset ( Feature) (Edit)//
When("กดปุ่ม Reset22", { timeout: 300000 }, async () => {
  await page.locator('.container-card-select-menu-oem > div > div > div > .anticon > svg').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-326 : ทดสอบปุ่ม Close ( Feature) (Edit)//
When("กดปุ่ม Close24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#clear_complaint_history').click();
});

//TC-SME-327 : ทดสอบปุ่ม Cancel ในหน้า New Company Add - Company (Edit)//
When("คลิกปุ่ม Cancel20", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-328 : ทดสอบปุ่ม Savel ในหน้า New Company Add - Company (Edit)//
When("คลิกปุ่ม Save15", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_sme_oem_table_search_input').fill('t1');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: /2 t1 t1 On Premise/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByText('Edit').click();
  await page.locator('#input_text_input_product_system_brand').first().fill('t11');
  await page.locator('#input_text_input_product_system_brand').nth(1).fill('t11');
  await page.locator('#input_text_input_product_system_brand').nth(2).fill('t11@gmail.com');
  await page.getByText('On-Premise').click();
  await page.getByText('On-Premise').nth(1).click();
  await page.locator('#textarea_input_product_system_brand').fill('t11');
  await page.locator('#input_numberformat_input_product_system_brand').first().fill('11');
  await page.locator('#input_numberformat_input_product_system_brand').nth(1).fill('11');
  await page.locator('#input_numberformat_input_product_system_brand').nth(2).fill('11');
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath10 = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath10);
  await page.locator('.ant-col.ant-col-xs-4 > div').first().click();
  await page.waitForTimeout(1000);
  const filePath11 = 'img/test.pptx';
  const fileUploader7 = page.locator('input[type="file"]').first();
  await fileUploader7.setInputFiles(filePath11);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath12 = 'img/test.pptx';
  const fileUploader8 = page.locator('input[type="file"]').nth(1);
  await fileUploader8.setInputFiles(filePath12);
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'plus Add', exact: true }).click();
  await page.locator('#input_text_oem_name').fill('a');
  await page.locator('#input_text_display_oem').fill('a');
  const path = require('path');
  const filePath13 = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath13);
  await page.locator('#button_save').click();
  await page.waitForTimeout(1000);
  await page.locator('.ant-select-selection-overflow').click();
  await page.getByText('t1').nth(4).click();
  await page.getByRole('checkbox', { name: 'Select all' }).nth(1).check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-329 : ทดสอบกด User (Edit)//
When("คลิก User2", { timeout: 300000 }, async () => {
  await page.getByText('User', { exact: true }).click();
});

//TC-SME-330 : ทดสอบการปุ่ม Add .ในหน้า New Company Edit - User (Edit)//
When("คลิกปุ่มAdd7", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

//TC-SME-331 : ทดสอบการกรอกข้้อมูล User Information ในหน้า New Company Edit - User - User Add(Edit)//
When("กรอกข้อมูล Fill : Username2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_').fill('a');
});

When("กรอกข้อมูล Fill : First Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-name-input').first().fill('a');
});

When("กรอกข้อมูล Fill : Last Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-last-name-input').fill('a');
});

When("กรอกข้อมูล Fill : Gender2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('หญิง').click();
});

When("กรอกข้อมูล Fill : Birthday2", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByText('User InformationImport').click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByRole('button', { name: 'Choose a year' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByText('2003').click();
  await page.getByText('Jan').click();
  await page.getByText('31').nth(3).click();
});

When("กรอกข้อมูล Fill : Relationship Status2", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(6) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('สมรส').click();
});

When("กรอกข้อมูล Fill : Nationality2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_nation-input').fill('ไทย');
});

When("กรอกข้อมูล Fill : Religion2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_religion-input').fill('พุทธ');
});

When("กรอกข้อมูล Fill : Employee ID2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-name-input').nth(1).fill('123');
});

When("กรอกข้อมูล Fill : Department2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-department-input').fill('ABC');
});

When("กรอกข้อมูล Fill : Position2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-position-input').fill('CBA');
});

When("กรอกข้อมูล Fill : House Number  Alley  Village  Building2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_address_detail-input').fill('11/22');
});

When("กรอกข้อมูล Fill : Province2", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').first().click();
  await page.getByText('พระนครศรีอยุธยา').click();
});

When("กรอกข้อมูล Fill : District2", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(6) > div:nth-child(3) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('วังน้อย').click();
});

When("กรอกข้อมูล Fill : Sub-district Ward2", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(4) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('บ่อตาโล่').click();
});

When("กรอกข้อมูล Fill : Remark4", { timeout: 300000 }, async () => {
  await page.locator('#textarea_iu-iu_remark-input').fill('a');
});

When("กรอกข้อมูล Fill : Contact Number2", { timeout: 300000 }, async () => {
  await page.locator('#input_telformat_iu-tel-input').fill('147-258-369');
});

When("กรอกข้อมูล Fill : Email4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-email-input').fill('a@gmail.com');
});

When("กรอกข้อมูล Fill : Line ID2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-lineid-input').fill('a');
});

When("กรอกข้อมูล Fill : Remark5", { timeout: 300000 }, async () => {
  await page.locator('#textarea_iu-remark-input').fill('a');
});

//TC-SME-332 : ทดสอบการใส่รูปใน User Information ในหน้า New Company Edit - User - User Add(Edit)//
When("ใส่รูป9", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath14 = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath14);
});

//TC-SME-333 : ทดสอบการใส่ไฟล์ใน Upload Document ในหน้า New Company Edit - User - User Add(Edit)//
When("ใส่ไฟล์2", { timeout: 300000 }, async () => {
  await page.locator('.anticon.anticon-plus > svg').first().click();
  await page.waitForTimeout(1000);
  const filePath15 = 'img/test.pptx';
  const fileUploader9 = page.locator('input[type="file"]').first();
  await fileUploader9.setInputFiles(filePath15);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath16 = 'img/test.pptx';
  const fileUploader10 = page.locator('input[type="file"]').first();
  await fileUploader10.setInputFiles(filePath16);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').click();
  await page.waitForTimeout(1000);
  const filePath17 = 'img/test.pptx';
  const fileUploader11 = page.locator('input[type="file"]').first();
  await fileUploader11.setInputFiles(filePath17);
  await page.locator('#button_close_alert').click();
});

//TC-SME-334 : ทดสอบการเลือกข้อมูลใน Select OEM ในหน้า New Company Edit - User - User Add(Edit)//
When("เลือกข้อมูล Fill : Select OEM3", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-sm-24.ant-col-md-12.ant-col-lg-6 > div > .ant-select > .ant-select-selector').first().click();
  await page.waitForTimeout(1000);
  await page.getByText('t1').click();
});

When("เลือกข้อมูล Fill : Select User Group2", { timeout: 300000 }, async () => {
  await page.locator('.card-element-body > div:nth-child(2) > .ant-col > div > .ant-select > .ant-select-selector').click();
  await page.waitForTimeout(1000);
  await page.locator('.ant-select-item-option-content').getByText('5', { exact: true }).click();
});

//TC-SME-335 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User - User Add (Edit)//
When("คลิกปุ่ม Cancel21", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-336 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel22", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-337 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel23", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-338 : ทดสอบปุ่ม Savel ในหน้าNew Company Edit - User - User Add (Edit)//
When("คลิกปุ่ม Save16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.locator('#input_text_').fill('b');
  await page.locator('#input_text_iu-name-input').first().fill('b');
  await page.locator('#input_text_iu-last-name-input').fill('b');
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('หญิง').click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByText('User InformationImport').click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByRole('button', { name: 'Choose a year' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByRole('button', { name: 'Last year (Control + left)' }).click();
  await page.getByText('2003').click();
  await page.getByText('Jan').click();
  await page.getByText('31').nth(3).click();
  await page.locator('div:nth-child(6) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('สมรส').click();
  await page.locator('#input_text_iu-iu_nation-input').fill('ไทย');
  await page.locator('#input_text_iu-iu_religion-input').fill('พุทธ');
  await page.locator('#input_text_iu-name-input').nth(1).fill('123');
  await page.locator('#input_text_iu-department-input').fill('ABC');
  await page.locator('#input_text_iu-position-input').fill('CBA');
  await page.locator('#input_text_iu-iu_address_detail-input').fill('11/22');
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').first().click();
  await page.getByText('พระนครศรีอยุธยา').click();
  await page.locator('div:nth-child(6) > div:nth-child(3) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('วังน้อย').click();
  await page.locator('div:nth-child(4) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('บ่อตาโล่').click();
  await page.locator('#textarea_iu-iu_remark-input').fill('a');
  await page.locator('#input_telformat_iu-tel-input').fill('147-258-3690');
  await page.locator('#input_text_iu-email-input').fill('a@gmail.com');
  await page.locator('#input_text_iu-lineid-input').fill('a');
  await page.locator('#textarea_iu-remark-input').fill('a');
  const path = require('path');
  const filePath18 = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath18);
  await page.locator('.anticon.anticon-plus > svg').first().click();
  await page.waitForTimeout(1000);
  const filePath19 = 'img/test.pptx';
  const fileUploader12 = page.locator('input[type="file"]').first();
  await fileUploader12.setInputFiles(filePath19);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath20 = 'img/test.pptx';
  const fileUploader13 = page.locator('input[type="file"]').first();
  await fileUploader13.setInputFiles(filePath20);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').click();
  await page.waitForTimeout(1000);
  const filePath21 = 'img/test.pptx';
  const fileUploader14 = page.locator('input[type="file"]').first();
  await fileUploader14.setInputFiles(filePath21);
  await page.locator('#button_close_alert').click();
  await page.locator('.ant-col.ant-col-sm-24.ant-col-md-12.ant-col-lg-6 > div > .ant-select > .ant-select-selector').first().click();
  await page.waitForTimeout(1000);
  await page.getByText('t1').click();
  await page.locator('.card-element-body > div:nth-child(2) > .ant-col > div > .ant-select > .ant-select-selector').click();
  await page.waitForTimeout(1000);
  await page.locator('.ant-select-item-option-content').getByText('5', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-339 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel24", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-340 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Save17", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm9", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-341 : ทดสอบกดจุด 3 จุด (Edit)//
When("คลิกจุด 3 จุด", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'b b b 147-258-3690 t1 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

//TC-SME-342 : ทดสอบการปุ่ม Edit .ในหน้า New Company Edit - User - User Edit (Edit))//
When("คลิกปุ่มEdit2", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

//TC-SME-343 : ทดสอบการปุ่ม Cancel.ในหน้า New Company Edit - User - User Edit (Edit)//
When("คลิกปุ่ม Cancel25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-344 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel26", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-345 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel27", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm10", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-346 : ทดสอบการแก้ไขข้้อมูล Companyในหน้า New Company Edit - User(Edit)//
When("คลิกจุด 3 จุด2", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'b b b 147-258-3690 t1 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่มEdit3", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Fill : Username", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_').fill('aa');
});

When("แก้ไขข้อมูล Fill : First Name", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_iu-name-input').first().fill('aa');
});
When("แก้ไขข้อมูล Fill : Last Name", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_iu-last-name-input').fill('aa');
});

When("แก้ไขข้อมูล Fill : Gender", { timeout: 300000 }, async () => {
  await page.locator('#root').getByTitle('หญิง').click();
  await page.getByText('ชาย').click();
});

When("แก้ไขข้อมูล Fill : Birthday", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await page.getByRole('button', { name: 'Choose a year' }).click();
  await page.getByText('2003').click();
  await page.getByText('Jan').click();
  await page.getByText('31').nth(2).click();
});

When("แก้ไขข้อมูล Fill : Relationship Status", { timeout: 300000 }, async () => {
  await page.locator('#root').getByTitle('สมรส').click();
  await page.getByText('โสด').click();
});

When("แก้ไขข้อมูล Fill : Nationality", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_nation-input').fill('ไทย');
});

When("แก้ไขข้อมูล Fill : Religion", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_religion-input').fill('พุทธ');
});

When("แก้ไขข้อมูล Fill : Employee ID", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-name-input').nth(1).fill('123');
});

When("แก้ไขข้อมูล Fill : Department", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-department-input').fill('ABC');
});

When("แก้ไขข้อมูล Fill : Position", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-position-input').fill('CBA');
});

When("แก้ไขข้อมูล Fill : House Number  Alley  Village  Building", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-iu_address_detail-input').fill('11/22');
});

When("แก้ไขข้อมูล Fill : Province", { timeout: 300000 }, async () => {
  await page.locator('#root').getByText('พระนครศรีอยุธยา').click();
  await page.getByText('หนองคาย').click();
});

When("แก้ไขข้อมูล Fill : District", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(6) > div:nth-child(3) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('ศรีเชียงใหม่').click();
});

When("แก้ไขข้อมูล Fill : Sub-district Ward", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(4) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('พานพร้าว').click();
});

When("แก้ไขข้อมูล Fill : Remark", { timeout: 300000 }, async () => {
  await page.locator('#textarea_iu-iu_remark-input').fill('aa');
});

When("แก้ไขข้อมูล Fill : Contact Number", { timeout: 300000 }, async () => {
  await page.locator('#input_telformat_iu-tel-input').fill('147-258-3690');
});

When("แก้ไขข้อมูล Fill : Email2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-email-input').fill('aa@gmail.com');
});

When("แก้ไขข้อมูล Fill : Line ID", { timeout: 300000 }, async () => {
  await page.locator('#input_text_iu-lineid-input').fill('aa');

});

When("แก้ไขข้อมูล Fill : Remark2", { timeout: 300000 }, async () => {
  await page.getByText('a', { exact: true }).fill('aa');
});

//TC-SME-347 : ทดสอบการใส่รูปใน User Informationในหน้า New Company Edit - User - User Add(Edit)//
When("แก้รูป", { timeout: 300000 }, async () => {
  const path = require('path');
  const filePath22 = path.resolve(__dirname, 'img/test01.png');
  const fileInput = page.locator('input[type="file"]').last(); 
  await fileInput.waitFor({ state: 'attached' }); 
  await fileInput.setInputFiles(filePath22);
});

//TC-SME-348 : ทดสอบการใส่ไฟล์ใน Upload Documentในหน้า New Company Edit - User - User Add(Edit)//
When("ใส่ไฟล์3", { timeout: 300000 }, async () => {
  await page.locator('.anticon.anticon-plus > svg').first().click();
  await page.waitForTimeout(1000);
  const filePath23 = 'img/test.pptx';
  const fileUploader15 = page.locator('input[type="file"]').first();
  await fileUploader15.setInputFiles(filePath23);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').first().click();
  await page.waitForTimeout(1000);
  const filePath24 = 'img/test.pptx';
  const fileUploader16 = page.locator('input[type="file"]').first();
  await fileUploader16.setInputFiles(filePath24);
  await page.locator('#button_close_alert').click();
  await page.locator('path:nth-child(2)').click();
  await page.waitForTimeout(1000);
  const filePath25 = 'img/test.pptx';
  const fileUploader17 = page.locator('input[type="file"]').first();
  await fileUploader17.setInputFiles(filePath25);
  await page.locator('#button_close_alert').click();
});

//TC-SME-349 : ทดสอบการเลือกข้อมูลใน Select OEM ในหน้า New Company Edit - User - User Add(Edit)//
When("เลือกข้อมูล11", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-sm-24.ant-col-md-12.ant-col-lg-6 > div > .ant-select > .ant-select-selector').first().click();
  await page.waitForTimeout(1000);
  await page.getByText('t1').click();
  await page.locator('.card-element-body > div:nth-child(2) > .ant-col > div > .ant-select > .ant-select-selector').click();
  await page.waitForTimeout(1000);
  await page.locator('.ant-select-item-option-content').getByText('5', { exact: true }).click();
});

//TC-SME-350 : ทดสอบปุ่ม Savel ในหน้า New Company Edit - User - User Add (Edit)//
When("คลิกปุ่ม Save18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-351 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel28", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-352 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Save19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-353 : ทดสอบปุ่ม View ในหน้า New Company Edit - User (Edit)//
When("คลิกจุด 3 จุด3", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'aa aa aa 147-258-3690 t1 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม View", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('View').click();
});

When("คลิกลูกศรกลับ", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'arrow-left' }).click();
});

//TC-SME-354 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User (Edit)//
When("กรอกข้อมูลค้นหา31", { timeout: 300000 }, async () => {
  await page.locator('#input_text_serach_complaint_history').fill('aa');
});

//TC-SME-355 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User (Edit)//
When("คลิกปุ่มค้นหา5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-356 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User (Edit)//
When("คลิกปุ่ม Clear17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-357 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User (Edit)//
When("กด Filter ข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Name', exact: true }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Contact Number' }).check();
  await page.getByRole('checkbox', { name: 'Name', exact: true }).uncheck();
  await page.getByRole('checkbox', { name: 'Status' }).check();
  await page.getByRole('checkbox', { name: 'Contact Number' }).uncheck();
  await page.getByRole('checkbox', { name: 'Picture' }).check();
  await page.getByRole('checkbox', { name: 'Status' }).uncheck();
  await page.getByRole('checkbox', { name: 'Username' }).check();
  await page.getByRole('checkbox', { name: 'Picture' }).uncheck();
  await page.getByRole('checkbox', { name: 'OEM' }).check();
  await page.getByRole('checkbox', { name: 'Username' }).uncheck();
  await page.getByRole('checkbox', { name: 'MGT' }).check();
  await page.getByRole('checkbox', { name: 'OEM' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//TC-SME-358 : ทดสอบไอคอน จัดเรียงข้อมูล (Name) ใน New Company Edit - User (Edit)//
When("กดไอคอน จัดเรียงข้อมูล26", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Name search', exact: true }).click();
  await page.getByRole('button', { name: 'Name search', exact: true }).click();
  await page.getByRole('button', { name: 'Name search', exact: true }).click();
});

//TC-SME-359 : ทดสอบไอคอน ค้นหาข้อมูล (Name) ใน New Company Edit - User (Edit)//
When("กดไอคอน กรองข้อมูล25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-360 : ทดสอบการกรอกข้อมูลใน Global Search(Name) (Edit)//
When("กรอกข้อมูลค้นหา32", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_search_column_iu_fullname').fill('aa');
});

//TC-SME-361 : ทดสอบปุ่ม Search (Name) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Search24", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_iu_fullname').click();
});

//TC-SME-362 : ทดสอบปุ่ม Reset (Name) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Reset23", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-363 : ทดสอบปุ่ม Close (Name) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Close25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
});

//TC-SME-364 : ทดสอบไอคอน จัดเรียงข้อมูล (Username) ใน New Company Edit - User (Edit//
When("กดไอคอน จัดเรียงข้อมูล27", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Username search' }).click();
  await page.getByRole('button', { name: 'Username search' }).click();
  await page.getByRole('button', { name: 'Username search' }).click();
});

//TC-SME-365 : ทดสอบไอคอน ค้นหาข้อมูล (Username) ใน New Company Edit - User (Edit)//
When("กดไอคอน กรองข้อมูล26", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-366 : ทดสอบการกรอกข้อมูลใน Global Search (Username) (Edit)//
When("กรอกข้อมูลค้นหา33", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('aa');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-367 : ทดสอบปุ่ม Search (Username) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Search25", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_iu_username').fill('aa');
  await page.waitForTimeout(1000);
  await page.locator('#button_search_column_iu_username').click();
});

//TC-SME-368 : ทดสอบปุ่ม Reset (Username) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Reset24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-369 : ทดสอบปุ่ม Close (Username) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Close26", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-370 : ทดสอบไอคอน จัดเรียงข้อมูล (Contract Number) ใน New Company Edit - User (Edit)//
When("กดไอคอน จัดเรียงข้อมูล28", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Contact Number search' }).click();
  await page.getByRole('button', { name: 'Contact Number search' }).click();
  await page.getByRole('button', { name: 'Contact Number search' }).click();
});

//TC-SME-371 : ทดสอบไอคอน ค้นหาข้อมูล (Contract Number) ใน New Company Edit - User (Edit)//
When("กดไอคอน กรองข้อมูล27", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

//TC-SME-372 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type) (Edit)//
When("กรอกข้อมูลค้นหา34", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('147');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).first().click();
  await page.waitForTimeout(1000);
});

//TC-SME-373 : ทดสอบปุ่ม Search (Contract Number) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Search26", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_iu_con_tel').fill('147');
  await page.waitForTimeout(1000);
  await page.locator('#button_search_column_iu_con_tel').click();
});

//TC-SME-374 : ทดสอบปุ่ม Reset (Contract Number) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Reset25", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-375 : ทดสอบปุ่ม Close (Contract Number) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Close27", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-376 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User (Edit)//
When("กดไอคอน จัดเรียงข้อมูล29", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
});

//TC-SME-377 : ทดสอบปุ่มกรองข้อมูล  (OEM) ใน New Company Edit - User (Edit)//
When("กดไอคอน กรองข้อมูล28", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
});

//TC-SME-378 : ทดสอบการกรอกข้อมูลใน Global Search (OEM) ใน New Company Edit - User (Edit)//
When("กรอกข้อมูลค้นหา35", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').fill('t1');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-379 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User (Edit)//
When("เลือกข้อมูล12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Select t1' }).click();
});

//TC-SME-380 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Search27", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_search_column_t_oem').click();
});

//TC-SME-381 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Reset26", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-382 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Close28", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-383 : ทดสอบไอคอน จัดเรียงข้อมูล (Status) ใน New Company Edit - User (Edit)//
When("กดไอคอน จัดเรียงข้อมูล30", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Status filter' }).click();
  await page.getByRole('button', { name: 'Status filter' }).click();
  await page.getByRole('button', { name: 'Status filter' }).click();
});

//TC-SME-384 : ทดสอบปุ่มกรองข้อมูล (Status) ใน New Company Edit - User (Edit)//
When("กดไอคอน กรองข้อมูล29", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
});

//TC-SME-385 : ทดสอบการกรอกข้อมูลใน Global Search (Status) ใน New Company Edit - User (Edit)//
When("กรอกข้อมูลค้นหา36", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_serach_complaint_history').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-386 : ทดสอบการเลือกข้อมูล (Status) ใน New Company Edit - User (Edit)//
When("เลือกข้อมูล13", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox', { name: 'Select Active' }).click();
});

//TC-SME-387 : ทดสอบปุ่ม Search (Status) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Search28", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_iu_is_active').click();
});

//TC-SME-388 : ทดสอบปุ่ม Reset (Status) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Reset27", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-389 : ทดสอบปุ่ม Close (Status) ใน New Company Edit - User (Edit)//
When("กดปุ่ม Close29", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-390 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User (Edit)//
When("เลือก จำนวน\\/Pageที่ต้องการ4", { timeout: 300000 }, async () => {
  await page.getByText('/ page').click();
  await page.getByText('20 / page').click();
});

//TC-SME-391 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ในหน้า New Company Edit - User (Edit)//
When("กด ไอคอน >4", { timeout: 300000 }, async () => {
const nextButton = page.getByRole('button', { name: 'right', exact: true });
  if (await nextButton.isVisible()) {
    if (await nextButton.isEnabled()) {
      await nextButton.click();
    }
  }
});

//TC-SME-392 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ในหน้า New Company Edit - User (Edit)//
When("กด ไอคอน <4", { timeout: 300000 }, async () => {
const prevButton = page.getByRole('button', { name: 'left', exact: true });
  if (await prevButton.isVisible() && await prevButton.isEnabled()) {
    await prevButton.click();
  }
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-393 : ทดสอบปุ่ม Delete ในหน้า New Company Edit - User (Edit)//
When("คลิกปุ่มจุด 3 จุด", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'aa aa aa 147-258-3690 t1 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

//TC-SME-394 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel29", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-395 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่มจุด 3 จุด2", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'aa aa aa 147-258-3690 t1 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete2", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-396 : ทดสอบกด User Group (Edit)//
When("คลิก User Group2", { timeout: 300000 }, async () => {
  await page.getByText('User Group').click();
});

//TC-SME-397 : ทดสอบการปุ่ม Add .ในหน้า New Company Edit - User Group Add (Edit)//
When("คลิกปุ่มAdd8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

//TC-SME-398 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User Group Edit (Edit)//
When("คลิกปุ่ม Cancel30", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});


//TC-SME-399 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel31", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});


//TC-SME-400 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel32", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm13", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-401 : ทดสอบการกรอกข้้อมูล User Groupในหน้า New Company Edit - User Group Add(Edit)//
When("คลิกปุ่มAdd9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอกข้อมูล Fill : User Group Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_name_input').fill('b');
});

When("กรอกข้อมูล Fill : Select OEM", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('t1').click();
  await page.locator('.ant-select-selection-overflow').first().click();
});

When("กรอกข้อมูล Fill : Remark6", { timeout: 300000 }, async () => {
  await page.locator('#textarea_user_group_remark_input').fill('b');
});

//TC-SME-402 : ทดสอบการเลือกข้้อมูล Select Userในหน้า New Company Edit - User Group Add(Edit)//
When("เลือกข้อมูล Select User", { timeout: 300000 }, async () => {
  await page.locator('.ant-select.ant-select-outlined.css-1vjf2v5.ant-select-multiple.ant-select-allow-clear > .ant-select-selector').click();

});

//TC-SME-403 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน Permission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก18", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('A');
});

//TC-SME-404 : ทดสอบการ Search ข้อมูล Feature ใน Permission Management (Edit)//
When("คลิกปุ่ม Search18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-405 : ทดสอบการ Clear ข้อมูลค้นหา Feature ใน Permission Management (Edit)//
When("คลิกปุ่ม Clear18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-406 : ทดสอบกด Module & Menu (Edit)//
When("คลิก Module & Menu7", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

//TC-SME-407 : ทดสอบกด Feature (Edit)//
When("คลิก Feature4", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

//TC-SME-408 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu(Edit)//
When("คลิก Module & Menu8", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

When("กด เลือกข้อมูล11", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select Acc MGT' }).click();
});

//TC-SME-409 : ทดสอบกดเลือก Select All ใน Module & Menu (Edit)//
When("คลิก Module & Menu9", { timeout: 300000 }, async () => {
  await page.getByText('Module & Menu').click();
});

When("กด เลือกข้อมูล12", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select all' }).check();
});

//TC-SME-410 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu (Edit)//
When("คลิกปุ่มแว่นขยาย7", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
  await page.waitForTimeout(1000);
});

//TC-SME-411 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module & Menu ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก19", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('A');
  await page.waitForTimeout(1000);
  await page.locator('#user_group_table_search_button').click();
  await page.waitForTimeout(1000);
});

//TC-SME-412 : ทดสอบปุ่ม Search (Module & Menu) (Edit)//
When("กดปุ่ม Search29", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('div > .anticon > svg').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Search..' }).fill('A');
  await page.waitForTimeout(1000);
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-413 : ทดสอบปุ่ม Reset (Module & Menu) (Edit)//
When("กดปุ่ม Reset28", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-414 : ทดสอบปุ่ม Close (Module & Menu) (Edit)//
When("กดปุ่ม Close30", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-415 : ทดสอบกดเลือก ข้อมูล ใน  Feature (Edit)//
When("คลิก  Feature5", { timeout: 300000 }, async () => {
  await page.getByText('Feature').click();
});

When("กด เลือกข้อมูล13", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
});

//TC-SME-416 : ทดสอบกดเลือก Select All ใน  Feature (Edit)//
When("กด Select All6", { timeout: 300000 }, async () => {
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
  await page.getByRole('checkbox', { name: 'Select ประเภทคำร้องเรียน' }).click();
});

//TC-SME-417 : ทดสอบปุ่มไอคอน แว่นขยาย ใน  Feature (Edit)//
When("คลิกปุ่มแว่นขยาย8", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
});

//TC-SME-418 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน  หน้าPermission Management (Edit)//
When("กรอกข้อมูล ในช่องกรอก20", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('33');
});

//TC-SME-419 : ทดสอบปุ่ม Search ( Feature) (Edit)//
When("กดปุ่ม Search30", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
  await page.getByRole('textbox', { name: 'Search..' }).fill('33');
  await page.waitForTimeout(1000);
  await page.getByRole('tooltip').getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-420 : ทดสอบปุ่ม Reset ( Feature) (Edit)//
When("กดปุ่ม Reset29", { timeout: 300000 }, async () => {
  await page.locator('div > .anticon > svg').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-421 : ทดสอบปุ่ม Close ( Feature) (Edit)//
When("กดปุ่ม Close31", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-422 : ทดสอบปุ่ม Savel ในหน้า New Company Edit - User Group Edit (Edit)//
When("คลิกปุ่ม Save20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-423 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel33", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-424 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Save21", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm14", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-425 : ทดสอบกดจุด 3 จุด (Edit) New Company Edit - User Group//
When("คลิกจุด 3 จุด4", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'b - t1 b more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

//TC-SME-426 : ทดสอบกดปุ่ม Edit (Edit) New Company Edit - User Group//
When("คลิกปุ่ม Edit", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

//TC-SME-427 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User Group Edit (Edit)//
When("คลิกปุ่ม Cancel34", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-428 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel35", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-429 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel36", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-430 : ทดสอบการกรอกข้้อมูล User Groupในหน้า New Company Edit - User Group Edit(Edit)//
When("คลิกจุด 3 จุด5", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'b - t1 b more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit2", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Fill : User Group Name", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_user_group_name_input').fill('bb');
});

When("แก้ไขข้อมูล Fill : Select OEM", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-overflow').first().click();
  await page.getByText('t1').nth(2).click();
  await page.locator('.ant-select-selection-overflow').first().click();
});

When("แก้ไขข้อมูล Fill : Remark3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByText('b', { exact: true }).fill('bb');
});

//TC-SME-431 : ทดสอบการเลือกข้้อมูล Select Userในหน้า New Company Edit - User Group Edit(Edit)//
When("เลือกข้อมูล Select User2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select.ant-select-outlined.css-1vjf2v5.ant-select-multiple.ant-select-allow-clear > .ant-select-selector').click();
});

//TC-SME-432 : ทดสอบปุ่ม Savel ในหน้า New Company Edit - User Group Edit (Edit)//
When("คลิกปุ่ม Save22", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

//TC-SME-433 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)//
When("คลิกปุ่ม Cancel37", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-434 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)//
When("คลิกปุ่ม Save23", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-435 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User Group (Edit)//
When("กรอกข้อมูลค้นหา37", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('b');
});

//TC-SME-436 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User Group (Edit)//
When("คลิกปุ่มค้นหา6", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//TC-SME-437 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User Group (Edit)//
When("คลิกปุ่ม Clear19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-438 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User Group (Edit)//
When("กด Filter ข้อมูล5", { timeout: 300000 }, async () => {
await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Member' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Remark' }).check();
  await page.getByRole('checkbox', { name: 'Member' }).uncheck();
  await page.getByRole('checkbox', { name: 'User Group' }).check();
  await page.getByRole('checkbox', { name: 'Remark' }).uncheck();
  await page.getByRole('checkbox', { name: 'OEM' }).check();
  await page.getByRole('checkbox', { name: 'User Group' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//TC-SME-439 : ทดสอบไอคอน จัดเรียงข้อมูล (User Group) ใน New Company Edit - User Group (Edit)//
When("กดไอคอน จัดเรียงข้อมูล31", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'User Group search' }).click();
  await page.getByRole('button', { name: 'User Group search' }).click();
  await page.getByRole('button', { name: 'User Group search' }).click();
});

//TC-SME-440 : ทดสอบไอคอน ค้นหาข้อมูล (User Group) ใน New Company Edit - User Group (Edit)//
When("กดไอคอน กรองข้อมูล30", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

//TC-SME-441 : ทดสอบการกรอกข้อมูลใน Global Search(User Group) ใน New Company Edit - User Group (Edit)//
When("กรอกข้อมูลค้นหา38", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_group_name').fill('b');
});

//TC-SME-442 : ทดสอบปุ่ม Search (User Group) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Search31", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_group_name').click();
});

//TC-SME-443 : ทดสอบปุ่ม Reset (User Group) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Reset30", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-444 : ทดสอบปุ่ม Close (User Group) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Close32", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-445 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User Group (Edit)//
When("กดไอคอน จัดเรียงข้อมูล32", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
  await page.getByRole('button', { name: 'OEM filter' }).click();
});

//TC-SME-446 : ทดสอบปุ่มกรองข้อมูล  (OEM) ใน New Company Edit - User Group (Edit)//
When("กดไอคอน กรองข้อมูล31", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

//TC-SME-447 : ทดสอบการกรอกข้อมูลใน Global Search(OEM) ใน New Company Edit - User Group (Edit)//
When("กรอกข้อมูลค้นหา39", { timeout: 300000 }, async () => {
  await page.locator('#input_text_user_group_search').fill('t1');
});

//TC-SME-448 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User Group (Edit)//
When("กด เลือกข้อมูล14", { timeout: 300000 }, async () => {
  await page.getByRole('searchbox', { name: 'Search...' }).fill('t1');
});

//TC-SME-449 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Search32", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_oem_name').click();
});

//TC-SME-450 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Reset31", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-451 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Close33", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-452 : ทดสอบไอคอน จัดเรียงข้อมูล (Remark) ใน New Company Edit - User Group (Edit)//
When("กดไอคอน จัดเรียงข้อมูล33", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Remark search' }).click();
  await page.getByRole('button', { name: 'Remark search' }).click();
  await page.getByRole('button', { name: 'Remark search' }).click();
});

//TC-SME-453 : ทดสอบไอคอน ค้นหาข้อมูล (Remark) ใน New Company Edit - User Group (Edit)//
When("กดไอคอน ค้นหาข้อมูล17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

//TC-SME-454 : ทดสอบการกรอกข้อมูลใน Global Search(Remark) ใน New Company Edit - User Group (Edit)//
When("กรอกข้อมูลค้นหา40", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('1');
});

//TC-SME-455 : ทดสอบปุ่ม Search (Remark)ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Search33", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_group_remark').click();
});

//TC-SME-456 : ทดสอบปุ่ม Reset (Remark) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Reset32", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

//TC-SME-457 : ทดสอบปุ่ม Close (Remark) ใน New Company Edit - User Group (Edit)//
When("กดปุ่ม Close34", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-458 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User Group (Edit)//
When("เลือก จำนวน\\/Pageที่ต้องการ5", { timeout: 300000 }, async () => {
  await page.getByText('/ page').click();
  await page.getByText('20 / page').click();
});

//TC-SME-459 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า New Company Edit - User Group (Edit)//
When("กด ไอคอน >5", { timeout: 300000 }, async () => {
const nextButton = page.getByRole('button', { name: 'right', exact: true });
  if (await nextButton.isVisible()) {
    if (await nextButton.isEnabled()) {
      await nextButton.click();
    }
  }
});

//TC-SME-460 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า New Company Edit - User Group (Edit)//
When("กด ไอคอน <5", { timeout: 300000 }, async () => {
const prevButton = page.getByRole('button', { name: 'left', exact: true });
  if (await prevButton.isVisible() && await prevButton.isEnabled()) {
    await prevButton.click();
  }
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TC-SME-461 : ทดสอบการปุ่ม View ในหน้า New Company Edit - User Group (Edit)//
When("คลิกจุด 3 จุด6", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'bb - t1 bb more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม View2", { timeout: 300000 }, async () => {
  await page.getByText('View', { exact: true }).click();
});

//TC-SME-462 : ทดสอบปุ่ม Cancel ในView/
When("คลิกปุ่ม Cancel38", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-463 : ทดสอบการปุ่ม Delete ในหน้า New Company Edit - User Group (Edit)//
When("คลิกจุด 3 จุด7", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'bb - t1 bb more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete3", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

//TC-SME-464 : ทดสอบปุ่ม Cancel ใน Warning//
When("คลิกปุ่ม Cancel39", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//TC-SME-465 : ทดสอบปุ่ม Confirm ใน Warning//
When("คลิกจุด 3 จุด8", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'bb - t1 bb more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete4", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'arrow-left' }).click();
});

//TC-SME-466 : ทดสอบการปุ่ม View ในหน้า SME Factory - OEM Management//
When("คลิกจุด 3 จุด9", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: /^2 t11/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม View3", { timeout: 300000 }, async () => {
  await page.getByText('View').click();
});

//TC-SME-467 : ทดสอบการกด View ใน User Group//
When("คลิก User3", { timeout: 300000 }, async () => {
  await page.getByText('User', { exact: true }).click();
});

//TC-SME-468 : ทดสอบการกด User Group ในView//
When("คลิก User Group3", { timeout: 300000 }, async () => {
  await page.getByText('User Group').click();
});

//TC-SME-469 : ทดสอบการกด Company ในView//
When("คลิก Company", { timeout: 300000 }, async () => {
  await page.getByText('Company', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Close', exact: true }).click();
});

//TC-SME-470 : ทดสอบการปุ่ม Sort Menu ในหน้า SME Factory - OEM Management//
When("คลิกจุด 3 จุด10", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: /^2 t11/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Sort Menu", { timeout: 300000 }, async () => {
  await page.getByText('Sort Menu').click();
});

//TC-SME-471 : ทดสอบการกรอกข้อมูลใน Global Search ในหน้า Sort Menu//
When("กรอกข้อมูล ในช่องกรอก21", { timeout: 300000 }, async () => {
  await page.locator('#input_text_sort_menu_search_input').fill('Human');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-472 : ทดสอบปุ่มไอคอน ปากกา ใน Sort Menu//
When("คลิกปุ่ม Sort Menu2", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: /^2 t11/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);
  await page.getByText('Sort Menu').click();
});

When("คลิกปุ่ม ปากกา", { timeout: 300000 }, async () => {
  await page.getByRole('img', { name: 'menu-icon' }).click();
});

//TC-SME-473 : ทดสอบปุ่ม Cancel ใน Sort Menu//
When("คลิกปุ่ม Cancel40", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-474 : ทดสอบปุ่ม Save ใน Sort Menu//
When("คลิกปุ่ม Sort Menu3", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: /^2 t11/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);
  await page.getByText('Sort Menu').click();
});

When("คลิกปุ่ม Save24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//TC-SME-475 : ทดสอบปุ่ม Cancel ใน Warning//
When("คลิกปุ่มไอคอนถังขยะ5", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: /^2 t11/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel41", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//TC-SME-476 : ทดสอบปุ่ม Confirm ใน Warning//
When("คลิกปุ่มไอคอนถังขยะ6", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: /^2 t11/ }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm18", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});








