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
When("กรอก Username {string}",{ timeout: 300000 }, async (string) => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
});
When("กรอก Password {string}", { timeout: 300000 },async (string) => {
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
});
When("คลิกปุ่ม Login {string}", { timeout: 300000 },async (string) => {
    await page.getByRole('button', { name: 'Sign in' }).click();
});

// PM_HC01 : ทดสอบการเข้าถึงหน้า Help Center (Admin)//
When("คลิก OEM Komatsu", { timeout: 300000 }, async () => {
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
})

When("คลิกที่เมนู Ticket Management Center", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
})

When("คลิกที่เมนู Project Management", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
})

When("คลิกเมนู Help Center \\(Admin)", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
    await page.waitForTimeout(1000);
    await page.locator('path').nth(5).click();
})

//PM_HC02 : ทดสอบการเข้าการสนทนาของ Super Admin//
When("คลิก OEM Komatsu2", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
})

When("คลิกที่เมนู Ticket Management Center2", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
})

When("คลิกที่เมนู Project Management2", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
})

When("คลิกเมนู Help Center \\(Admin)2", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
    await page.waitForTimeout(1000);
    await page.locator('path').nth(5).click();
})

//PM_HC03 : ทดสอบการเข้าการสนทนาของ Iimplementer//
When("คลิก OEM Komatsu3", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('c.gen');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).first().click();
    await page.getByRole('button', { name: 'ปิด' }).click();
})

When("คลิกที่เมนู Ticket Management Center3", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
})

When("คลิกที่เมนู Project Management3", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
})

When("คลิกเมนู Help Center \\(Admin)3", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
    await page.waitForTimeout(1000);
    await page.locator('path').nth(5).click();
})

//PM_HC04 : ทดสอบการเข้าการสนทนาของ Tester//
When("คลิก OEM Komatsu4", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('t.ttttt');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).first().click();
    await page.getByRole('button', { name: 'ปิด' }).click();
})

When("คลิกที่เมนู Ticket Management Center4", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
})

When("คลิกที่เมนู Project Management4", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
})

When("คลิกเมนู Help Center \\(Admin)4", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
    await page.waitForTimeout(1000);
    await page.locator('path').nth(5).click();
})

//PM_HC05 : ทดสอบการแสดลผลของ Path//
When("คลิก OEM Komatsu5", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('c.gen');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).first().click();
    await page.getByRole('button', { name: 'ปิด' }).click();
})

When("คลิกที่เมนู Ticket Management Center5", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
})

When("คลิกที่เมนู Project Management5", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
})

When("คลิกเมนู Help Center \\(Admin)5", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
})

//PM_HC06 : ทดสอบการแสดง Tab โครงการ, ช่อง Search, ช่อง Date, ช่อง Type Of Chat, ช่อง Ticket Status, ปุ่ม Search, ปุ่ม Clear, แสดงรายการ Chat ทั้งหมดตาม Tab โครงการ//
When("คลิกเมนู Help Center \\(Admin)6", { timeout: 300000 }, async () => {
  await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
})

//PM_HC07 : ทดสอบการคลิกเลือก Tab โครงการ 1 รายการ//
When("คลิก Tab โครงการ", { timeout: 300000 }, async () => {
  await page.getByText('Test by Boom', { exact: true }).click();
})

//PM_HC08 : ทดสอบการเลือก Dropdown list ของ Tab โครงการ กรณีที่ Tab โครงการมีเยอะ//
When('นำเมาส์ไปชี้\\/คลิก icon {int} จุด', { timeout: 300000 }, async function (iconCount) { 
  await page.getByRole('button', { name: 'ellipsis' }).hover();
})

When("คลิก Tab โครงการ2", { timeout: 300000 }, async () => {
  await page.getByText('Test by Boom', { exact: true }).click();
})

//PM_HC09 : ทดสอบการค้นหาด้วยชื่อที่แสดงในรายการ Chat//
When("กรอกข้อมูลค้นหา", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search').fill('Hi');
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Search ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC10 : ทดสอบการค้นหาด้วยชื่อที่ไม่แสดงในรายการ Chat//
When("กรอกข้อมูลค้นหา2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search').fill('---');
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Search2 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC11 : ทดสอบการค้นหาด้วย Date Picker//
When("เลือก Start date - End date", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByText('1').nth(4).click();
  await page.getByText('30').nth(1).click();
})

When("คลิกปุ่ม Search3 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC12 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat//
When("เลือกรายการ Type Of Chat", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
  await page.getByText('แจ้งปัญหาการใช้งาน+ 0').click();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Search4 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
  await page.locator('.ant-select-selector').first().click();
  await page.getByTitle('สอบถามการใช้งาน').click();
  await page.getByText('สอบถามการใช้งาน+ 0').click();
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC13 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat เลือก 2 รายการ//
When("เลือกรายการ Type Of Chat2", { timeout: 300000 }, async () => {
await page.locator('.ant-select-selector').first().click();
  await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
  await page.getByTitle('สอบถามการใช้งาน').click();
  await page.getByText('แจ้งปัญหาการใช้งานสอบถามการใช้งาน+ 2').click();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Search5 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC14 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status//
When("เลือกรายการ Ticket Status", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Processing').click();
  await page.getByText('Processing+ 0').click();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Search6 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Reopen').click();
  await page.getByText('Reopen+ 0').click();
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Success').click();
  await page.getByText('Success+ 0').click();
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC15 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status เลือก 3 รายการ//
When("เลือกรายการ Ticket Status2", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Processing').click();
  await page.getByTitle('Reopen').click();
  await page.getByTitle('Success').click();
  await page.getByText('ProcessingReopenSuccess+ 2').click();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Search7 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC16 : ทดสอบการกดปุ่ม Clear เมื่อกรอกข้อมูลทุกช่อง//
When("กรอกข้อมูลช่อง Seach, Date, Type Of Chat, Ticket Status", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search').fill('Hi');
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByText('1').nth(4).click();
  await page.getByText('30').nth(1).click();
  await page.locator('.ant-select-selector').first().click();
  await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
  await page.getByTitle('สอบถามการใช้งาน').click();
  await page.getByText('แจ้งปัญหาการใช้งานสอบถามการใช้งาน+ 2').click();
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Processing').click();
  await page.getByTitle('Reopen').click();
  await page.getByTitle('Success').click();
  await page.getByText('ProcessingReopenSuccess+ 2').click();
})

When("คลิกปุ่ม Clear", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC17 : ทดสอบการกดปุ่ม Clear เมื่อกรอกข้อมูลทุกช่อง//
When("กรอกข้อมูลช่อง Seach, Date, Type Of Chat, Ticket Status2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search').fill('Hi');
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByText('1').nth(4).click();
  await page.getByText('30').nth(1).click();
  await page.locator('.ant-select-selector').first().click();
  await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
  await page.getByTitle('สอบถามการใช้งาน').click();
  await page.getByText('แจ้งปัญหาการใช้งานสอบถามการใช้งาน+ 2').click();
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Processing').click();
  await page.getByTitle('Reopen').click();
  await page.getByTitle('Success').click();
  await page.getByText('ProcessingReopenSuccess+ 2').click();
})

When("คลิกปุ่ม Search8 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
})

When("คลิกปุ่ม Clear2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC18 : ทดสอบการกดคลิกรายการ Chat//
When("กรอกข้อมูลค้นหา3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search').fill('Hello');
})

When("คลิกปุ่ม Search9 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
})

When("คลิกรายการ Chat", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account Hello Ticket Status' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
  await page.waitForTimeout(1000);
})

//PM_HC19 : ทดสอบการแสดงผล tooltip//
When("กรอกข้อมูลค้นหา4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_search').fill('Hi');
})

When("คลิกปุ่ม Search10 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
})

When("คลิกรายการ Chat2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen' }).click();
})

When("นำ cursor ไปที่ Icon +", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus', exact: true }).hover();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC20 : ทดสอบการส่งข้อความผ่านช่อง Message//
When("กรอกข้อมูลค้นหา5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_search').fill('Hello');
})

When("คลิกปุ่ม Search11 ของหน้า admin", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
})

When("คลิกรายการ Chat3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account Hello Ticket Status' }).click();
})

When("กรอกข้อความในช่อง Type your message…", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Type your message...' }).fill('Hello');
  await page.waitForTimeout(2000);
})

When("คลิกปุ่ม icon ส่งข้อความหริอกด Enter", { timeout: 300000 }, async () => {
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC21 : ทดสอบการส่งไฟล์ผ่าน icon +//
When("คลิกรายการ Chat4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account ส่งไฟล์ Ticket Status' }).click();
})

When("คลิก icon + เพื่อแนบไฟล์", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.waitForTimeout(10000);
})

When("คลิกปุ่ม icon ส่งข้อความหริอกด Enter2", { timeout: 300000 }, async () => {
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC22 : ทดสอบการส่งข้อความ + ส่งไฟล์ พร้อมกัน//
When("คลิกรายการ Chat5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account ส่งไฟล์ Ticket Status' }).click();
})

When("กรอกข้อความในช่อง Type your message…2", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Type your message...' }).fill('Hello');
  await page.waitForTimeout(2000);
}) 

When("คลิก icon + เพื่อแนบไฟล์2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.waitForTimeout(10000);
})

When("คลิกปุ่ม icon ส่งข้อความหริอกด Enter3", { timeout: 300000 }, async () => {
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC23 : ทดสอบการคลิกปุ่ม + Add Ticket//
When("คลิกรายการ Chat6", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC24 : ทดสอบการแสดงผล Type of Ticket ของ Add Ticket//
When("คลิกรายการ Chat7", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("คลิกปุ่ม Type of Ticket", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC25 : ทดสอบ Dropdown Severity กรณี ยังไม่เลือก  Type of Ticket//
When("คลิกรายการ Chat8", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("คลิกปุ่ม Severity", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC26 : ทดสอบการกรอกข้อมูล, เลือก Date แบบเลือกวัน 1,2,3 เลือก Dropdown list และอัปโหลดไฟล์ในหน้า Add Ticket ให้ครบทุกช่อง//
When("คลิกรายการ Chat9", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_ticket_name').fill('test');
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.getByTitle('พบโปรแกรม Error (Bug)').click();
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Critical').click();
  await page.getByRole('button', { name: '1 Day' }).click();
  await page.locator('#datepicker_input_start_date').click();
  await page.getByRole('listitem').filter({ hasText: 'Now' }).locator('a').click();
  await page.locator('div:nth-child(5) > .ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('gen account').click();
  await page.locator('#textarea_input_description').fill('test01');
  await page.getByRole('button', { name: 'Drop File here! Support File' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC27 : ทดสอบการกรอกข้อมูล, เลือก Date เลือกวันที่ Dropdown list และอัปโหลดไฟล์ในหน้า Add Ticket ให้ครบทุกช่อง//
When("คลิกรายการ Chat10", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket5", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_ticket_name').fill('test');
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.getByTitle('พบโปรแกรม Error (Bug)').click();
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Critical').click();
  await page.locator('.ant-row.ant-row-bottom > .ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-picker').click();
  await page.getByRole('listitem').filter({ hasText: 'Now' }).click();
  await page.locator('div:nth-child(5) > .ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('gen account').click();
  await page.locator('#textarea_input_description').fill('test01');
  await page.getByRole('button', { name: 'Drop File here! Support File' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC28 : ทดสอบการลบไฟล์หลังจากเพิ่มไฟล์//
When("คลิกรายการ Chat11", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket6", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("Drop File here!", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Drop File here! Support File' }).click();
  await page.waitForTimeout(10000);
})

When("ลบไฟล์", { timeout: 300000 }, async () => {
  await page.locator('.file-icon-delete').click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC29 : ทดสอบการกดคลิกปุ่ม Save หน้า Add Ticket//
When("คลิกรายการ Chat12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account add ticket Ticket Status' }).click();
})

When("คลิกปุ่ม + Add Ticket7", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_ticket_name').fill('test');
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.getByTitle('พบโปรแกรม Error (Bug)').click();
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Critical').click();
  await page.locator('.ant-row.ant-row-bottom > .ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-picker').click();
  await page.getByRole('listitem').filter({ hasText: 'Now' }).click();
  await page.locator('div:nth-child(5) > .ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-8 > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('gen account').click();
  await page.locator('#textarea_input_description').fill('test01');
  await page.getByRole('button', { name: 'Drop File here! Support File' }).click();
  await page.waitForTimeout(10000);
})
   
When("คลิกปุ่ม Save", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
})

//PM_HC30 : ทดสอบการกดคลิกปุ่ม Cancel หน้าการแจ้งเตือน//
When("คลิกปุ่ม Cancel", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
})

//PM_HC31 : ทดสอบการกดคลิกปุ่ม Cancel หน้า Add Ticket//
When("คลิกปุ่ม Cancel2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
})

//PM_HC32 : ทดสอบการไม่กรอกข้อมูลหน้า Add Ticket//
When("คลิกปุ่ม + Add Ticket8", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("คลิกปุ่ม Save2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
})

//PM_HC33 : ทดสอบการกรอกข้อมูลแค่ช่อง Ticket Name หน้า Add Ticket//
When("คลิกปุ่ม + Add Ticket9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("กรอกข้อมูล Ticket Name", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_ticket_name').fill('test');
})

When("คลิกปุ่ม Save3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
})

//PM_HC34 : ททดสอบการเลือก Dropdown list แค่ช่อง Type of Ticket, Severity หน้า Add Ticket//
When("เลือก พบโปรแกรม Error \\(Bug)", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_ticket_name').fill('');
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.getByTitle('พบโปรแกรม Error (Bug)').click();
})

When("เลือก Critical", { timeout: 300000 }, async () => {
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Critical').click();
})

When("คลิกปุ่ม Save4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
})

//PM_HC35 : ทดสอบการกรอกข้อมูลแค่ช่อง Description หน้า Add Ticket//
When("กรอกข้อมูล Description", { timeout: 300000 }, async () => {
  const clearType = page.locator('.ant-select-clear').first();
  if (await clearType.isVisible()) await clearType.click();

  const clearSeverity = page.locator('.modal-component-body .ant-select-clear').first();
  if (await clearSeverity.isVisible()) await clearSeverity.click();
  await page.locator('#textarea_input_description').fill('test01');
})

When("คลิกปุ่ม Save5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC36 : ทดสอบการคลิก Checkbox ช่อง Chat กรณี + Add Ticket//
When("คลิกรายการ Chat13", { timeout: 300000 }, async () => {
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'ellipsis' }).hover();
  await page.waitForTimeout(5000);
  await page.getByRole('option', { name: 'Test By Boom 2' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account t Ticket Status' }).click();
})

When("กดคลิก Checkbox ทั้งข้อความและไฟล์", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByLabel('', { exact: true }).first().check();
  await page.waitForTimeout(1000);
  await page.getByLabel('', { exact: true }).nth(1).check();
})

When("คลิกปุ่ม + Add Ticket10", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC37 : ทดสอบการคลิก Checkbox ช่อง Chat กรณี Add Comment//
When("คลิกรายการ Chat14", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account Ticket Status : Processing Ticket No. : Test By' }).click();
})

When("กดคลิก Checkbox ทั้งข้อความและไฟล์2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByLabel('', { exact: true }).first().check();
  await page.waitForTimeout(1000);
  await page.getByLabel('', { exact: true }).nth(1).check();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Add Comment", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Add Comment' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC38 : ทดสอบการสร้าง Ticket โดยกดคลิกปุ่ม Confirm หน้า Add Ticket//
When("คลิกรายการ Chat15", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ellipsis' }).hover();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Test By Boom 3' }).click();
  await page.waitForTimeout(1000);

  //เปลี่ยน locator ใหม่ตลอดทุกครั้งที่รัน
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account AT3 Ticket Status' }).click();

  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม + Add Ticket11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
})

When("กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_input_ticket_name').fill('test');
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.getByTitle('พบโปรแกรม Error (Bug)').click();
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Critical').click();
  await page.locator('.ant-row.ant-row-bottom > .ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-picker').click();
  await page.getByRole('listitem').filter({ hasText: 'Now' }).click();
  await page.locator('#textarea_input_description').fill('test01');
  await page.getByRole('button', { name: 'Drop File here! Support File' }).click();
  await page.waitForTimeout(10000);
})

When("คลิกปุ่ม Save6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Confirm", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC39 : ทดสอบการคลิกปุ่ม Add Comment//
When("คลิกรายการ Chat16", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account Ticket Status : Processing Ticket No. : Test By Boom 3-001 ได้รับการตอบกลับเรียนร้อยแล้ว 29/11/2025 16:40', exact: true }).click();
})

When("คลิกปุ่ม Add Comment2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Comment' }).click();
})

//PM_HC40 : ทดสอบการกรอกข้อมูลและ Upload ไฟล์ ช่อง Comment และ Upload หน้า Add Comment//
When("กรอกข้อมูล Comment", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#textarea_input_description').fill('test');
})

When("Upload ไฟล์", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('span').filter({ hasText: 'Upload' }).nth(1).click();
  await page.waitForTimeout(10000);
})

When("คลิกปุ่ม Save7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
})

//PM_HC41 : ทดสอบการกดคลิกปุ่ม Cancel หน้าการแจ้งเตือน//
When("คลิกปุ่ม Cancel3", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC42 : ทดสอบการไม่กรอกข้อมูลหน้า Add Comment//
When("คลิกปุ่ม Add Comment3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account Ticket Status : Processing Ticket No. : Test By Boom 3-001 ได้รับการตอบกลับเรียนร้อยแล้ว 29/11/2025 16:40', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Comment' }).click();
})

When("คลิกปุ่ม Save8", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
})

//PM_HC43 : ทดสอบการกดคลิกปุ่ม Confirm หน้าการแจ้งเตือน หน้า Add Comment//
When("กรอกข้อมูล Comment2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account Ticket Status : Processing Ticket No. : Test By Boom 3-001 ได้รับการตอบกลับเรียนร้อยแล้ว 29/11/2025 16:40', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Comment' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#textarea_input_description').fill('hi');
  await page.waitForTimeout(1000);
  await page.locator('span').filter({ hasText: 'Upload' }).nth(1).click();
  await page.waitForTimeout(10000);
})

When("คลิกปุ่ม Save9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
})

When("คลิกปุ่ม Confirm2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
})

// //PM_HC44 : ทดสอบได้รับข้อความตอบกลับและตอบกลับข้อความ//

//PM_HC45 : ทดสอบสิ้นสุดการสนทนา//
When("กดปุ่มสิ้นสุดการสนทนา", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ellipsis' }).hover();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Test By Boom 4' }).click();
  await page.waitForTimeout(1000);

  //เปลี่ยน locator ใหม่ตลอดทุกครั้งที่รัน
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account e2 Ticket Status' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'สิ้นสุดการสนทนา', exact: true }).click();
})

// //PM_HC46 : ทดสอบการ ลูกค้าแจ้งปัญหาเข้ามาครั้งแรก//

//PM_HC47 : ทดสอบการแสดงผล Ticket Status กรณี สร้าง Ticket//
When("คลิก Chat แล้วกด + Add Ticket", { timeout: 300000 }, async () => {
await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ellipsis' }).hover();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Test By Boom 5' }).click();
  await page.waitForTimeout(1000);

  //เปลี่ยน locator ใหม่ตลอดทุกครั้งที่รัน
  await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน gen account a2 Ticket Status' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add Ticket' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_ticket_name').fill('test');
  await page.locator('.ant-select.ant-select-outlined.css-1v28nim.ant-select-single.ant-select-allow-clear > .ant-select-selector').first().click();
  await page.getByTitle('พบโปรแกรม Error (Bug)').click();
  await page.locator('.modal-component-body > div:nth-child(2) > div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('Critical').click();
  await page.locator('.ant-row.ant-row-bottom > .ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-picker').click();
  await page.getByRole('listitem').filter({ hasText: 'Now' }).click();
  await page.locator('#textarea_input_description').fill('test01');
  await page.getByRole('button', { name: 'Drop File here! Support File' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
})

//PM_HC48 : ทดสอบการแสดงผล Ticket Status กรณีกด Ticket ได้รับการ Reopen (1) จาก Admin//
When("เข้าแชทที่ได้รับ Ticket Status : Processing", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ellipsis' }).hover();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Test By Boom 6' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'สอบถามการใช้งาน gen account Ticket Status : Processing Ticket No. : Test By' }).click();
})

//PM_HC49 : ทดสอบการแสดงผล Ticket Status กรณีกด Close Ticket//
When("เข้าแชทที่ได้รับ Ticket Status : Success", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'สอบถามการใช้งาน gen account Ticket Status : Success Ticket No. : Test By Boom 6' }).click();
})

//PM_HC50 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  แก้ไขอีกครั้ง//
When("เข้าแชทที่ได้รับ Ticket Status : Reopen", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'สอบถามการใช้งาน gen account แก้ไขอีกครั้ง Ticket Status : Reopen Ticket No. :' }).click();
})

//PM_HC51 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  เสร็จสิ้น//
When("เข้าแชทที่ได้รับ Ticket Status : Success2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'สอบถามการใช้งาน gen account เสร็จสิ้น Ticket Status : Success Ticket No. : Test' }).click();
})

// //PM_HC52 : ทดสอบกรณีไม่กดเสร็จสิ้นหรือแก้ไขอีกครั้งภายใน 7 วัน//


