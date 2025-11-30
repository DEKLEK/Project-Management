const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require("@playwright/test");

let browser;
let page;

//PM_HC_C00 : ทดสอบการเข้าสู่เว็บไซต์//
Given("เปิดเว็บไซต์ PMRP {string}", async function (string) {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("http://203.154.184.162:5001/SignIn");
});
When("กรอก Username {string}",{ timeout: 300000 }, async (string) => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('c.gen');
});
When("กรอก Password {string}", { timeout: 300000 },async (string) => {
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
});
When("คลิกปุ่ม Login {string}", { timeout: 300000 },async (string) => {
    await page.getByRole('button', { name: 'Sign in' }).click();
});

//PM_HC_C01 : ทดสอบการแสดง Tip คู่มือใช้งาน//
When("คลิกเมนู Help Center", { timeout: 300000 }, async () => {
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('button', { name: 'ปิด' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Help Center' }).click();
});

//PM_HC_C02 : ทดสอบการค้นหาข้อมูลโดยใช้ทุกการค้นหา//
When("กรอกข้อมูลค้นหา Search", { timeout: 300000 }, async () => {
    await page.locator('#input_text_search').fill('Hi');
    // await page.waitForTimeout(1000);
});

When("เลือกข้อมูลช่วงวันที่ ใน Date", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByText('1', { exact: true }).nth(2).click();
    await page.getByText('31').nth(2).click();
});

When("เลือกข้อมูล Product", { timeout: 300000 }, async () => {
    await page.locator('.ant-select-selector').first().click();
    await page.getByText('Test by Boom', { exact: true }).click();
    await page.getByText('Test by Boom+ 0').click();
});


When("เลือกข้อมูล Type of Chat", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > div > .ant-select > .ant-select-selector').first().click();
    await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
});

When("เลือกข้อมูล Ticket Status", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Processing').click();
});

When("คลิกปุ่ม Search", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C03 : ทดสอบการค้นหาข้อมูลที่ไม่มีอยู่//
When("กรอกข้อมูลค้นหา Search2", { timeout: 300000 }, async () => {
    await page.locator('#input_text_search').fill('---');
});

When("คลิกปุ่ม Search2", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C04 : ทดสอบการค้นหา Search//
When("กรอกข้อมูลค้นหา Search3", { timeout: 300000 }, async () => {
    await page.locator('#input_text_search').fill('Hi');
});

When("คลิกปุ่ม Search3", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C05 : ทดสอบการค้นหา Date//
When("เลือกข้อมูลช่วงวันที่ ใน Date2", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByText('1', { exact: true }).nth(2).click();
  await page.getByText('31').nth(2).click();
});

When("คลิกปุ่ม Search4", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C06 : ทดสอบการค้นหา Product//
When("เลือกข้อมูล Product2", { timeout: 300000 }, async () => {
    await page.locator('.ant-select-selector').first().click();
    await page.getByText('Test by Boom', { exact: true }).click();
  await page.getByText('Test by Boom+ 0').click();
});


When("คลิกปุ่ม Search5", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C07 : ทดสอบการค้นหา Type of Chat//
When("เลือกข้อมูล Type of Chat2", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > div > .ant-select > .ant-select-selector').first().click();
    await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
    await page.getByText('แจ้งปัญหาการใช้งาน+ 0').click();
});

When("คลิกปุ่ม Search6", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C08 : ทดสอบการค้นหา Ticket Status//
When("เลือกข้อมูล Ticket Status2", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Processing').click();
    await page.getByText('Processing+ 0').click();
});

When("คลิกปุ่ม Search7", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C09 : ทดสอบการค้นหาข้อมูลในช่อง Search กรณ๊พิมพ์ไม่ครบ//
When("กรอกข้อมูลค้นหา Search4", { timeout: 300000 }, async () => {
    await page.locator('#input_text_search').fill('ทด');
});

When("คลิกปุ่ม Search8", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C10 : ทดสอบการค้นหาข้อมูลในช่อง Search กรณ๊เว้นวรรคก่อนพิมพ์ข้อความ//
When("กรอกข้อมูลค้นหา Search5", { timeout: 300000 }, async () => {
    await page.locator('#input_text_search').fill('    ทดสอบ');
});

When("คลิกปุ่ม Search9", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C11 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Product เลือกหลายรายการ//
When("เลือกข้อมูล Product3", { timeout: 300000 }, async () => {
    await page.locator('.ant-select-selector').first().click();
    await page.getByTitle('Test by Boom', { exact: true }).click();
    await page.getByTitle('Test By Boom 2').click();
});

When("คลิกปุ่ม Search10", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C12 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat เลือกที่ละหลายการ//
When("เลือกรายการ Type Of Chat : แจ้งปัญหาการใช้งาน", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > div > .ant-select > .ant-select-selector').first().click();
    await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
    await page.getByText('แจ้งปัญหาการใช้งาน+ 0').click();
});

When("คลิกปุ่ม Search11", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("ลบหลายการ Type Of Chat : แจ้งปัญหาการใช้งาน", { timeout: 300000 }, async () => {
    await page.locator('.anticon.anticon-close > svg > path').first().click();
});

When("เลือกรายการ Type Of Chat : สอบถามการใช้งาน", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > div > .ant-select > .ant-select-selector').first().click();
    await page.getByTitle('สอบถามการใช้งาน').click();
    await page.getByText('สอบถามการใช้งาน+ 0').click();
});

When("คลิกปุ่ม Search12", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("ลบหลายการ Type Of Chat : สอบถามการใช้งาน", { timeout: 300000 }, async () => {
    await page.locator('.anticon.anticon-close > svg > path').first().click();
});

//PM_HC_C13 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat เลือกหลายรายการ//
When("เลือกรายการ Type Of Chat", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > div > .ant-select > .ant-select-selector').first().click();
    await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
    await page.getByTitle('สอบถามการใช้งาน').click();
    await page.getByText('แจ้งปัญหาการใช้งานสอบถามการใช้งาน+ 2').click();
});

When("คลิกปุ่ม Search13", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C14 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status เลือกที่ละหลายรายการ//
When("เลือกรายการ Ticket Status : Processing", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Processing').click();
    await page.getByText('Processing+ 0').click();
});

When("คลิกปุ่ม Search14", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("ลบหลายการ Ticket Status : Processing", { timeout: 300000 }, async () => {
    await page.locator('.anticon.anticon-close > svg').first().click();
});

When("เลือกรายการ Ticket Status : Reopen", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Reopen').click();
    await page.getByText('Reopen+ 0').click();
});

When("คลิกปุ่ม Search15", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("ลบหลายการ Ticket Status : Reopen", { timeout: 300000 }, async () => {
    await page.locator('.anticon.anticon-close > svg').first().click();
});

When("เลือกรายการ Ticket Status : Success", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Success').click();
    await page.getByText('Success+ 0').click();
});

When("คลิกปุ่ม Search16", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("ลบหลายการ Ticket Status : Success", { timeout: 300000 }, async () => {
    await page.locator('.anticon.anticon-close > svg').first().click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C15 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status เลือกหลายรายการ//
When("เลือกรายการ Ticket Status", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Processing').click();
    await page.getByTitle('Reopen').click();
    await page.getByTitle('Success').click();
    await page.getByText('ProcessingReopenSuccess+ 2').click();
});

When("คลิกปุ่ม Search17", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C16 : ทดสอบการกดปุ่ม Clear เมื่อข้อมูล//
When("กรอกข้อมูลค้นหา Search6", { timeout: 300000 }, async () => {
    await page.locator('#input_text_search').fill('Hi');
});

When("เลือกข้อมูลช่วงวันที่ ใน Date3", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.getByText('1', { exact: true }).nth(2).click();
  await page.getByText('31').nth(2).click();
});

When("เลือกข้อมูล Product4", { timeout: 300000 }, async () => {
    await page.locator('.ant-select-selector').first().click();
    await page.getByText('Test by Boom', { exact: true }).click();
  await page.getByText('Test by Boom+ 0').click();
});

When("เลือกข้อมูล Type of Chat3", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > div > .ant-select > .ant-select-selector').first().click();
    await page.getByTitle('แจ้งปัญหาการใช้งาน').click();
});

When("เลือกข้อมูล Ticket Status3", { timeout: 300000 }, async () => {
    await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
    await page.getByTitle('Processing').click();
});

When("คลิกปุ่ม Search18", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกปุ่ม Clear", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C17 : ทดสอบการกดปุ่ม Clear เมื่อไม่มีข้อมูล//
When("คลิกปุ่ม Clear2", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C18 : ทดสอบปุ่ม New Chat//
When("คลิกปุ่ม New Chat", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'New Chat' }).click();
});

//PM_HC_C19 : ทดสอบการเลือกโครงการ  และเลือกหัวข้อแนะนำ'แจ้งปัญหาการใช้งาน' และ พิมพ์ข้อความและส่งไฟ ใน New Chat//
When("คลิกปุ่ม New Chat2", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
    await page.getByRole('menuitem', { name: 'Product Management' }).click();
    await page.getByRole('menuitem', { name: 'Help Center', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New Chat' }).click();
});

When("เลือกโครงการ", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('#select_').click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
});

When("เลือกโครงการ 'แจ้งปัญหาการใช้งาน'", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน', exact: true }).click();
});

When("กรอกข้อความช่อง Type your message", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('ทดสอบ');
});

When("เลือกไฟล์", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
});

//PM_HC_C20 : ทดสอบการเลือกโครงการ  และเลือกหัวข้อแนะนำ'สอบถามการใช้งาน'  และ พิมพ์ข้อความและส่งไฟล์ ใน New Chat//
When("คลิกปุ่ม New Chat3", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
    await page.getByRole('menuitem', { name: 'Product Management' }).click();
    await page.getByRole('menuitem', { name: 'Help Center', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New Chat' }).click();
});

When("เลือกโครงการ2", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('#select_').click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
});

When("เลือกโครงการ 'สอบถามการใช้งาน'", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'สอบถามการใช้งาน', exact: true }).click();
});

When("กรอกข้อความช่อง Type your message2", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('ทดสอบ');
});

When("เลือกไฟล์2", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
});

//PM_HC_C21 : ทดสอบพิมพ์ข้อความและส่งไฟล์ ใน New Chat กรณียังไม่ได้เลือกโครงการและหัวข้อแนะนำ//
When("คลิกปุ่ม New Chat4", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
    await page.getByRole('menuitem', { name: 'Product Management' }).click();
    await page.getByRole('menuitem', { name: 'Help Center', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New Chat' }).click();
});

When("กดช่อง Type your message", { timeout: 300000 }, async () => {
    try {
        const textbox = page.getByRole('textbox', { name: 'Type your message...' });
        if (await textbox.isVisible()) {
            await textbox.click();
        } else {
            
        }
    } catch (err) {
        
    }
});

When("เลือกไฟล์3", { timeout: 300000 }, async () => {
    try {
        const plusBtn = page.getByRole('button', { name: 'plus' });
        if (await plusBtn.isVisible() && await plusBtn.isEnabled()) {
            await plusBtn.click();
        } else {
            
        }
    } catch (err) {
        
    }
});

//PM_HC_C22 : ทดสอบพิมพ์ส่งไฟล์ ใน New Chat กรณีส่งหลายไฟล์//
When("คลิกปุ่ม New Chat5", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
    await page.getByRole('menuitem', { name: 'Product Management' }).click();
    await page.getByRole('menuitem', { name: 'Help Center', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New Chat' }).click();
});

When("เลือกโครงการ3", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('#select_').click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
});

When("เลือกโครงการ 'แจ้งปัญหาการใช้งาน'2", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน', exact: true }).click();
});

When("เลือกไฟล์ 2 ไฟล์", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
});

//PM_HC_C23 : ทดสอบการส่งไฟล์ขนาด 100 MB  ใน New Chat//
When("คลิกปุ่ม New Chat6", { timeout: 300000 }, async () => {
    await page.getByRole('menuitem', { name: 'Project Management' }).click();
    await page.getByRole('menuitem', { name: 'Product Management' }).click();
    await page.getByRole('menuitem', { name: 'Help Center', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New Chat' }).click();
});

When("เลือกโครงการ4", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('#select_').click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
});

When("เลือกโครงการ 'แจ้งปัญหาการใช้งาน'3", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน', exact: true }).click();
});

When("เลือกไฟล์ขนาด 100 MB", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
    await page.getByRole('button', { name: 'close-circle' }).click();
});

//PM_HC_C24 : ทดสอบการเลือก Chat//
When("เลือกข้อมูล Product5", { timeout: 300000 }, async () => {
    await page.locator('.ant-select-selector').first().click();
    await page.getByTitle('Test by Boom', { exact: true }).nth(1).click();
    await page.getByText('Test by Boom+ 0').click();
});

When("คลิกปุ่ม Search19", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
});
When("เลือกแชทที่ต้องการมา", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน Test by Boom Hi 29/11/2025 15:' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//PM_HC_C25 : ทดสอบพิมพ์ข้อความและส่งไฟล์ ใน Chat//
When("เลือกแชทที่ต้องการมา2", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.getByTitle('PMRP_WM').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน PMRP_WM ส่งไฟล์ 29/11/2025 21:' }).click();

});

When("กรอกข้อความช่อง Type your message3", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('ทดสอบ');
});

When("เลือกไฟล์4", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
});

When("ส่งข้อความ", { timeout: 300000 }, async () => {
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
});

//PM_HC_C26 : ทดสอบพิมพ์ส่งไฟล์ ใน Chat กรณีส่งหลายไฟล์//
When("เลือกแชทที่ต้องการมา3", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน PMRP_WM ส่งไฟล์ 29/11/2025 21:' }).click();

});

When("เลือกไฟล์ 2 ไฟล์2", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
});

When("ส่งข้อความ2", { timeout: 300000 }, async () => {
    await page.waitForTimeout(2000);
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
});

//PM_HC_C27 : ทดสอบการส่งไฟล์ขนาด 100 MB ใน Chat//
When("เลือกแชทที่ต้องการมา4", { timeout: 300000 }, async () => {
    const chat = page.getByRole('button', { name: /แจ้งปัญหาการใช้งาน TestOpen ส่งไฟล์/ }).first();
  if (await chat.count()) await chat.click();
});

When("เลือกไฟล์ขนาด 100 MB2", { timeout: 300000 }, async () => {
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'plus' }).click();
    await page.waitForTimeout(10000);
});

When("ส่งข้อความ3", { timeout: 300000 }, async () => {
    await page.waitForTimeout(2000);
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

// // //PM_HC_C28 : ทดสอบได้รับข้อความตอบกลับ//
// // When("คลิกเมนู Help Center2", { timeout: 300000 }, async () => {
// //     await page.getByRole('menuitem', { name: 'Project Management' }).click();
// //     await page.getByRole('menuitem', { name: 'Customer Management' }).click();
// //     await page.getByRole('menuitem', { name: 'Help Center (Admin)' }).click();
// //     await page.getByRole('button', { name: 'ellipsis' }).hover();
// //     await page.waitForTimeout(5000);
// //     await page.getByRole('option', { name: 'TestOpen' }).click();
// //     await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน Kissadapa Nguanchon สวัสดี Ticket Status' }).click();
// //     await page.getByRole('textbox', { name: 'Type your message...' }).fill('สวัสดี');
// //     await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
// //     await page.getByRole('menuitem', { name: 'Help Center', exact: true }).click();
// // });

// // When("กด Notification", { timeout: 300000 }, async () => {
    
// // });

// // When("กดเลือก ข้อความที่แจ้งเตือน", { timeout: 300000 }, async () => {
    
// // });

//PM_HC_C29 : ทดสอบสิ้นสุดการสนทนา//
When("กดปุ่มสิ้นสุดการสนทนา", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('PMRP_WM').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน PMRP_WM ee3 29/11/2025 20:' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สิ้นสุดการสนทนา', exact: true }).click();
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C30 : ทดสอบการแสดงผล Ticket Status กรณี ได้รับ Ticket//
When("เข้าแชทที่ได้รับ Ticket", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus1 Ticket Status : Processing Ticket No. : TestCus1-' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C31 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  ได้รับการ Reopen(1) จาก Admin//
When("เข้าแชทที่ได้รับ Ticket Status : Processing", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus1 แก้ไขอีกครั้ง Ticket Status : Reopen Ticket No. : TestCus1-002 29/11/2025 21:06', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C32 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket ได้รับการ Close//
When("เข้าแชทที่ได้รับ Ticket Status : Success", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus1').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus1 Ticket Status : Success Ticket No. : TestCus1-003' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C33 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  แก้ไขอีกครั้ง//
When("เข้าแชทที่ได้รับ Ticket Status : Reopen", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus2').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus2 Ticket Status : Success Ticket No. : TestCus2-003' }).click();
});
When("กดปุ่มแก้ไขอีกครั้ง", { timeout: 300000 }, async () => {
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'แก้ไขอีกครั้ง' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(5000);
});

//PM_HC_C34 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  เสร็จสิ้น//
When("เข้าแชทที่ได้รับ Ticket Status : Success2", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus2').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus2 Ticket Status : Success Ticket No. : TestCus2-004' }).click();
});
When("กดปุ่มดสร็จสิ้น", { timeout: 300000 }, async () => {
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'เสร็จสิ้น' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

// //PM_HC_C35 : ทดสอบกรณีไม่กดเสร็จสิ้นหรือแก้ไขอีกครั้งภายใน 7 วัน//
// When("เข้าแชทที่ได้รับ Ticket Status : Success3", { timeout: 300000 }, async () => {
    
// });

//PM_HC_C36 : ทดสอบสิ้นสุดการสนทนา กรณ๊ ได้รับ Ticket//
When("กดปุ่มสิ้นสุดการสนทนา2", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus3').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus3 Ticket Status : Processing Ticket No. : TestCus3-' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สิ้นสุดการสนทนา', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C37 : ทดสอบสิ้นสุดการสนทนา กรณี  Ticket ได้รับการ Close//
When("เกดปุ่มสิ้นสุดการสนทนา3", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus3').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus3 Ticket Status : Success Ticket No. : TestCus3-002' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สิ้นสุดการสนทนา', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C38 : ทดสอบสิ้นสุดการสนทนา กรณ๊ ได้รับ Ticket Ticket  แก้ไขอีกครั้ง//
When("กดปุ่มสิ้นสุดการสนทนา4", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus3').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus3 แก้ไขอีกครั้ง Ticket Status : Reopen Ticket No. :' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สิ้นสุดการสนทนา', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

//PM_HC_C39 : ทดสอบสิ้นสุดการสนทนา กรณ๊ ได้รับ Ticket  กรณี  Ticket  เสร็จสิ้น//
When("กดปุ่มสิ้นสุดการสนทนา5", { timeout: 300000 }, async () => {
    await page.waitForTimeout(1000);
    await page.locator('.ant-select-selector').first().click();
    await page.waitForTimeout(1000);
    await page.getByTitle('TestCus3').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'แจ้งปัญหาการใช้งาน TestCus3 เสร็จสิ้น Ticket Status : Success Ticket No. :' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สิ้นสุดการสนทนา', exact: true }).click();
    await page.waitForTimeout(1000);  
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(1000);
});

  
