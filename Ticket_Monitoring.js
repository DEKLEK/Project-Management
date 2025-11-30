const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require("@playwright/test");

let browser;
let page;

//TM_000 : ทดสอบการเข้าสู่เว็บไซต์//
Given("เปิดเว็บไซต์ PMRP {string}", async function (string) {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("http://203.154.184.162:5001/SignIn");
});
When("กรอก Username {string}",{ timeout: 300000 }, async (string) => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
    // await page.waitForTimeout(1000);
});
When("กรอก Password {string}", { timeout: 300000 },async (string) => {
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')
});
When("คลิกปุ่ม Login {string}", { timeout: 300000 },async (string) => {
    await page.getByRole('button', { name: 'Sign in' }).click();
});

//TM_001 : ทดสอบปุ่ม Search//
When("เข้าสู่ระบบ Ticket Monitoring", { timeout: 300000 },async () => {
    // await page.evaluate(() => {document.body.style.zoom = '75%';});
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
});

When("เลือกข้อมูล Product Code", { timeout: 300000 },async () => {
//     const closeAlertButton = page.locator('#button_close_alert');
//     if (await closeAlertButton.isVisible({ timeout: 0 })) {
//         await closeAlertButton.click();
//     }
    await page.waitForTimeout(2000);
    // await page.locator('#button_close_alert').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone').click();
});

When("กดปุ่ม Search", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByTitle('Bridgestone').locator('svg').click();
});

//TM_002 : ทดสอบปุ่ม Clear//
When("เลือกข้อมูล Product Code2", { timeout: 300000 },async () => {
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม Clear", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
});

//TM_003 : ทดสอบ Dropdown ของ Product Code ให้แสดงชื่อและรหัส Product//
When("กดช่องข้อมูล Product Code", { timeout: 300000 },async () => {
    await page.locator('.ant-select-selection-overflow').click();
});

//TM_004 : ทดสอบ Dropdown ตำแหน่ง Super Admin แสดง Product ทั้งหมด//
When("เข้าสู่ระบบ Ticket Monitoring2", { timeout: 300000 },async () => {
    await page.locator('.ant-select-selection-overflow').click();
});

When("กดช่องข้อมูล Product Code2", { timeout: 300000 },async () => {
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('path').nth(5).click();
});

//TM_005 : ทดสอบ Dropdown ตำแหน่ง Tester Coordinator//
When("เข้าสู่ระบบ Ticket Monitoring3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('t.ttttt');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('button', { name: 'ปิด' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
    await page.locator('path').nth(5).click();
});

// When("กดช่องข้อมูล Product Code3", { timeout: 300000 },async () => {
//     await page.locator('.ant-select-selection-overflow').click();
// });

//TM_006 : ทดสอบ Dropdown ตำแหน่ง Implementer//
When("เข้าสู่ระบบ Ticket Monitoring4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('c.gen');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('button', { name: 'ปิด' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
    await page.locator('path').nth(5).click();
});

// When("กดช่องข้อมูล Product Code3", { timeout: 300000 },async () => {
//     await page.locator('.ant-select-selection-overflow').click();
// });

//TM_007 : ทดสอบ Date Range Picker//
When("กดเลือกวันที่ที่ต้องการ", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.locator('path').nth(5).click();
});

//TM_008 : ทดสอบการเข้าถึงหน้าจอของตำแหน่ง Super Admin//
When("เข้าสู่ระบบ Ticket Monitoring5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
    await page.locator('path').nth(5).click();
});

//TM_009 : ทดสอบการเข้าถึงหน้าจอของตำแหน่ง Tester Coordintor//
When("เข้าสู่ระบบ Ticket Monitoring6", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('t.ttttt');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('button', { name: 'ปิด' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
    await page.locator('path').nth(5).click();
});

//TM_010 : ทดสอบการเข้าถึงหน้าจอของตำแหน่ง Implementer//
When("เข้าสู่ระบบ Ticket Monitoring7", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('c.gen');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('button', { name: 'ปิด' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
    await page.locator('path').nth(5).click();
});

//TM_011 : ทดสอบแสดงผล Path Ticket Management Center//
When("เข้าสู่ระบบ Ticket Monitoring8", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('n.kissadapa');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('div').filter({ hasText: /^Komatsuสำนักงานใหญ่$/ }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Ticket Management Center' }).click();
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    await page.waitForTimeout(2000);
});

//TM_012 : ทดสอบการแสดงผล Severity กรณีมี Product เดี่ยว//
When("เลือกข้อมูล Product Code3", { timeout: 300000 },async () => {
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
    await page.getByTitle('Bridgestone').locator('svg').click();
});

//TM_013 : ทดสอบเลือกดูข้อมูลในกราฟ//
When("เลือกข้อมูล Product Code4", { timeout: 300000 },async () => {
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search5", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกปิดข้อมูลที่ไม่ต้องการดูในกราฟ ของ Severity Dashborad", { timeout: 300000 },async () => {
    await page.locator('canvas').first().click({
    position: {
      x: 198,
      y: 38
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 191,
      y: 39
    }
  });
});

//TM_014 : ทดสอบ All Product ของ Severity Dashborad//
When("เลือกข้อมูล Product Code5", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Severity Dashborad", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).first().click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_015 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Severity Dashborad กรณ๊ไม่มีหน้าต่อไป//
When("เลือกข้อมูล Product Code6", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Severity Dashborad2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).first().click();
});

When("กดปุ่ม Previous Page", { timeout: 300000 },async () => {
const prevBtn = page.locator('button', { hasText: 'left' });
  const isVisible = await prevBtn.isVisible().catch(() => false);
  if (isVisible) {
    const isDisabled = await prevBtn.getAttribute('disabled');
    if (!isDisabled) {
      await prevBtn.click();
    } 
  } 
});

When("กดปุ่ม Next Page", { timeout: 300000 },async () => {
  const nextBtn = page.locator('button', { hasText: 'right' });
  const isVisible = await nextBtn.isVisible().catch(() => false);

  if (isVisible) {
    const isDisabled = await nextBtn.getAttribute('disabled');
    if (!isDisabled) {
      await nextBtn.click();
    }
  } 
  await page.getByRole('button', { name: 'close', exact: true }).click();
});
    
//TM_016 : ทดสอบเลือก หน้า / page ใน Severity Dashborad// ยังบัคอยู่!!
When("เลือกข้อมูล Product Code7", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Severity Dashborad3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).first().click();
});

When("เลือก 20 page", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^10 \/ page$/ }).nth(2).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '20 / page' }).click();
});

When("เลือก 50 page", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^20 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '50 / page' }).click();
});

When("เลือก 100 page", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^50 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '100 / page' }).click();
});

When("เลือก 10 page", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^100 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '10 / page' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_017 : ทดสอบการแสดงผล Severity กรณีมี หลาย Product//
When("เลือกข้อมูล Product Code8", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('Pre');
    await page.getByText('PreUAT').click();
});

When("กดปุ่ม Search9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

//TM_018 : ทดสอบปุ่ม All Product ของ Severity Dashboard//
When("เลือกข้อมูล Product Code9", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.anticon > svg > path').first().click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('Pre');
    await page.getByText('PreUAT').click();
});

When("กดปุ่ม Search10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Severity Dashboard3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).first().click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_019 : ทดสอบเลือกดูข้อมูลในกราฟ//
When("เลือกข้อมูล Product Code10", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.anticon > svg > path').first().click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('Pre');
    await page.getByText('PreUAT').click();
});

When("กดปุ่ม Search11", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Severity Dashboard4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).first().click();
});

When("เลือกปิดข้อมูลที่ไม่ต้องการดูในกราฟ ของ Severity Dashboard", { timeout: 300000 },async () => {
    await page.locator('canvas').nth(4).click({
    position: {
      x: 377,
      y: 36
    }
  });
  await page.locator('canvas').nth(5).click({
    position: {
      x: 348,
      y: 35
    }
  });
  await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_020 : ทดสอบการแสดงผล Type Ticket Dashboard//
When("เลือกข้อมูล Product Code11", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.anticon > svg > path').first().click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search12", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

//TM_021 : ทดสอบการแสดงผล All Product ของ Type Ticket Dashboard//
When("เลือกข้อมูล Product Code12", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search13", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_022 : ทดสอบ Filter ของ All Product ของ Type Ticket Dashboard กรณี Select All//
When("เลือกข้อมูล Product Code13", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search14", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});
    
When("กดปุ่ม Filter", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'filter Filter' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_023 : ทดสอบ Filter ของ All Product ของ Type Ticket Dashboard กรณี ไม่เลือกเลย//
When("เลือกข้อมูล Product Code14", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search15", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Filter2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'filter Filter' }).click();
});

When(/กดปุ่ม Select All.*เพื่อยกเลิกรายการที่เลือก/, { timeout: 300000 },async () => {
const selectAll = page.getByRole('checkbox', { name: 'Select All' });

    if (await selectAll.count() === 0) return;

    if (await selectAll.isChecked()) {
        await selectAll.uncheck();
    } else {
        await selectAll.uncheck().catch(() => {});
    }

    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_024 : ทดสอบ Filter ของ All Product ของ Type Ticket Dashboard กรณี เลือกดูที่ละรายการ//
When("เลือกข้อมูล Product Code15", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search16", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Filter3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'filter Filter' }).click();
});

When("กดดูทีละรายการทั้งหมด", { timeout: 300000 },async () => {
const selectAll = page.getByRole('checkbox', { name: 'Select All' });

    if (await selectAll.count() === 0) return;

    if (await selectAll.isChecked()) {
        await selectAll.uncheck({ force: true }); // <-- แก้ไข: เพิ่ม { force: true }
    } else {
        await selectAll.uncheck({ force: true }).catch(() => {}); // <-- แก้ไข: เพิ่ม { force: true }
    }
    await page.waitForTimeout(1000); // หน่วงเวลาหลังจากการ uncheck 'Select All'

    await page.getByRole('checkbox', { name: 'อื่นๆ', exact: true }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'No.', exact: true }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ปัญหาเครื่องลูกข่าย' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'อื่นๆ', exact: true }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Requirement Change' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ปัญหาเครื่องลูกข่าย' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'สนับสนุนอื่นๆ' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Requirement Change' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'สนับสนุนอื่นๆ' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'พบโปรแกรม Error (Bug)' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Sum' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'พบโปรแกรม Error (Bug)' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Product No.' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Sum' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ปัญหาเครื่องแม่ข่าย' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Product No.' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ปัญหาเครื่องแม่ข่าย' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ปรับแต่งระบบให้มีความ' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ให้คำปรึกษาแนะนำระบบ' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ปรับแต่งระบบให้มีความ' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Config Customer site ไม่ตรง' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'ให้คำปรึกษาแนะนำระบบ' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Feedback' }).check({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Config Customer site ไม่ตรง' }).uncheck({ force: true }); // <-- แก้ไข
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_025 : ทดสอบปุ่ม Sort acending, Sort descending, cancel sorting ของตารางใน Type Ticket Dashboard//
When("เลือกข้อมูล Product Code16", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search17", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard5", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
    // เปิด filter panel
    const filterBtn = page.getByRole('button', { name: 'filter Filter' });
    if (await filterBtn.count() > 0) {
        await filterBtn.click();
    }

    // ใช้ checkbox Select All (ล็อก locator)
    const selectAllBox = page.getByRole('checkbox', { name: 'Select All' });
    if (await selectAllBox.count() === 0) return;

    // เช็คทุกตัว
    await selectAllBox.check();
});

When("กดปุ่ม Sort acending ของตาราง Type Ticket Dashboard", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'อื่นๆ', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องแม่ข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องลูกข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Requirement Change' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปรับแต่งระบบให้มีความ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สนับสนุนอื่นๆ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ให้คำปรึกษาแนะนำระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Config Customer site ไม่ตรง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบโปรแกรม Error (Bug)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Feedback' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. Product No. search' }).locator('[id="14"]').click();
    await page.waitForTimeout(1000);
});

When("กดปุ่ม Sort descending ของตาราง Type Ticket Dashboard", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'อื่นๆ', exact: true }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'อื่นๆ', exact: true }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'ปัญหาเครื่องแม่ข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องแม่ข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องลูกข่าย' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'ปัญหาเครื่องลูกข่าย' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Requirement Change' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Requirement Change' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปรับแต่งระบบให้มีความ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปรับแต่งระบบให้มีความ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สนับสนุนอื่นๆ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สนับสนุนอื่นๆ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ให้คำปรึกษาแนะนำระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ให้คำปรึกษาแนะนำระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Config Customer site ไม่ตรง' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'Config Customer site ไม่ตรง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบโปรแกรม Error (Bug)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบโปรแกรม Error (Bug)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Feedback' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Feedback' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. Product No. search' }).locator('[id="14"]').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. Product No. search' }).locator('[id="14"]').click();
    await page.waitForTimeout(1000);
});

When("กดปุ่ม cancel sorting ของตาราง Type Ticket Dashboard", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'อื่นๆ', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'อื่นๆ', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'อื่นๆ', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องแม่ข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องแม่ข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องแม่ข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องลูกข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องลูกข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปัญหาเครื่องลูกข่าย' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบฐานข้อมูลไม่ถูกต้อง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Requirement Change' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Requirement Change' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Requirement Change' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปรับแต่งระบบให้มีความ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปรับแต่งระบบให้มีความ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ปรับแต่งระบบให้มีความ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สนับสนุนอื่นๆ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สนับสนุนอื่นๆ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'สนับสนุนอื่นๆ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ให้คำปรึกษาแนะนำระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ให้คำปรึกษาแนะนำระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ให้คำปรึกษาแนะนำระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ผู้ใช้ไม่เข้าใจระบบ' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Config Customer site ไม่ตรง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Config Customer site ไม่ตรง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Config Customer site ไม่ตรง' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบโปรแกรม Error (Bug)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบโปรแกรม Error (Bug)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'พบโปรแกรม Error (Bug)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Feedback' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Feedback' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Feedback' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. Product No. search' }).locator('[id="14"]').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. Product No. search' }).locator('[id="14"]').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. Product No. search' }).locator('[id="14"]').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
    await page.waitForTimeout(1000);
});

//TM_026 : ทดสอบ Search ของ Product No. ใน Type Ticket Dashboard//
When("เลือกข้อมูล Product Code17", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search18", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กด icon แว่นขยาย", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Bridgestone - Bridgestone');
});

When("กดปุ่ม search", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_027 : ทดสอบ Reset ของ Product No. ใน Type Ticket Dashboard//
When("เลือกข้อมูล Product Code18", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search19", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กด icon แว่นขยาย2", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Bridgestone - Bridgestone');
});

When("กดปุ่ม search2", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
});

When("กดปุ่ม Reset", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'search', exact: true }).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_028 : ทดสอบ Close ของ Product No. ใน Type Ticket Dashboard//
When("เลือกข้อมูล Product Code19", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search20", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กด icon แว่นขยาย3", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'search', exact: true }).click();
});

When("กดปุ่ม Close ของ Product No.", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_029 : ทดสอบ Search ของ Product No. ใน Type Ticket Dashboard กรณีกด space bar ค่อยค้นหาข้อมูล//
When("เลือกข้อมูล Product Code20", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search21", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กด icon แว่นขยาย4", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'search', exact: true }).click();
});

When("กด space แล้ว กรอกข้อมูลในช่อง Search ของ Product No.", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('          Bridgestone - Bridgestone');
});

When("กดปุ่ม search3", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_030 : ทดสอบ Search ของ Product No. ใน Type Ticket Dashboard กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("เลือกข้อมูล Product Code21", { timeout: 300000 },async () => {
    await page.getByTitle('Bridgestone').locator('svg').click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search22", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กด icon แว่นขยาย5", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Br');
});

When("กดปุ่ม search4", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_031 : ทดสอบการเลือกหน้า ใน Type Ticket Dashboard//
When("กดเลือกวันที่ที่ต้องการ2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search23", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard11", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("เลือกหน้าที่ต้องการ", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: '3', exact: true }).locator('a').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_032 : ทดสอบปุ่ม Next Page และ Previous Page ใน Type Ticket Dashboard//
When("กดเลือกวันที่ที่ต้องการ3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search24", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard12", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Next Page2", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'right' }).click();
});

When("กดปุ่ม Previous Page2", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'left' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_033 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Type Ticket Dashboard//
When("กดเลือกวันที่ที่ต้องการ4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search25", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard13", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Next 3 Page", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: 'Next 3 Pages' }).locator('a').click();
});

When("กดปุ่ม Previous 3 Page", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: 'Previous 3 Pages' }).locator('a').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_034 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Type Ticket Dashboard กรณีไม่มีหน้าต่อไป//
When("เลือกข้อมูล Product Code22", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search26", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard14", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Previous Page3", { timeout: 300000 },async () => {
const prevBtn = page.locator('button', { hasText: 'left' });
  const isVisible = await prevBtn.isVisible().catch(() => false);
  if (isVisible) {
    const isDisabled = await prevBtn.getAttribute('disabled');
    if (!isDisabled) {
      await prevBtn.click();
    } 
  } 
});

When("กดปุ่ม Next Page3", { timeout: 300000 },async () => {
  const nextBtn = page.locator('button', { hasText: 'right' });
  const isVisible = await nextBtn.isVisible().catch(() => false);

  if (isVisible) {
    const isDisabled = await nextBtn.getAttribute('disabled');
    if (!isDisabled) {
      await nextBtn.click();
    }
  } 
  await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_035 : ทดสอบเลือก หน้า / page ใน Type Ticket Dashboard//
When("เลือกข้อมูล Product Code23", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search27", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Type Ticket Dashboard15", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("เลือก 20 page2", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^10 \/ page$/ }).nth(2).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '20 / page' }).click();
});

When("เลือก 50 page2", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^20 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '50 / page' }).click();
});

When("เลือก 100 page2", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^50 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '100 / page' }).click();
});

When("เลือก 10 page2", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^100 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '10 / page' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_036 : ทดสอบการแสดงผล Remain All Ticket//
When("กดปุ่ม Search28", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

//TM_037 : ทดสอบการแสดงผล All Product ของ Remain All Ticket//
When("กดปุ่ม Search29", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_038 : ทดสอบปุ่ม Sort acending,  Sort descending, cancel sorting ของตารางใน Remain All Ticket//
When("กดปุ่ม Search30", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กดปุ่ม Sort acending ของตาราง Remain All Ticket", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remain Ticket search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress search' }).click();
    await page.waitForTimeout(1000);
});

When("กดปุ่ม Sort descending ของตาราง Remain All Ticket", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remain Ticket search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remain Ticket search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress search' }).click();
    await page.waitForTimeout(1000);
});

When("กดปุ่ม cancel sorting ของตาราง Remain All Ticket", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Product No. search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remain Ticket search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remain Ticket search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remain Ticket search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_039 : ทดสอบ Search ของ Product No. ใน Remain All Ticket//
When("กดปุ่ม Search31", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Bridgestone');
});

When("กดปุ่ม search5", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_040 : ทดสอบ Reset ของ Product No. ใน Remain All Ticket//
When("กดปุ่ม Search32", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Bridgestone');
});

When("กดปุ่ม search6", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
});

When("กดปุ่ม Reset2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_041 : ทดสอบ Close ของ Product No. ใน Remain All Ticket//
When("กดปุ่ม Search33", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket5", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กดปุ่ม Close ของ Product No.2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_042 : ทดสอบ Search ของ Product No. ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search34", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กด space แล้ว กรอกข้อมูลในช่อง Search ของ Product No.2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('          Bridgestone - Bridgestone');
});

When("กดปุ่ม search7", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_043 : ทดสอบ Search ของ Product No. ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search35", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.6", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Br');
});

When("กดปุ่ม search8", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_044 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket//
When("กดปุ่ม Search36", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย11", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Remain Ticket", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('42');
});

When("กดปุ่ม search9", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    const closeAlertButton = page.locator('#button_close_alert');
    if (await closeAlertButton.isVisible({ timeout: 0 })) {
        await closeAlertButton.click();
    }
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_045 : ทดสอบ Reset ของ Remain Ticket ใน Remain All Ticket//
When("กดปุ่ม Search37", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย12", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Remain Ticket2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('42');
});

When("กดปุ่ม search10", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    const closeAlertButton = page.locator('#button_close_alert');
    if (await closeAlertButton.isVisible({ timeout: 0 })) {
        await closeAlertButton.click();
    }
});

When("กดปุ่ม Reset3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_046 : ทดสอบ Close ของ Remain Ticket ใน Remain All Ticket//
When("กดปุ่ม Search38", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย13", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กดปุ่ม Close ของ Remain Ticket", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_047 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search39", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket11", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย14", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Remain Ticket3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('        42');
});

When("กดปุ่ม search11", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
    if (await closeAlertButton.isVisible({ timeout: 0 })) {
        await closeAlertButton.click();
    }
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_048 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search40", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket12", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย15", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Remain Ticket4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('4');
});

When("กดปุ่ม search12", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
    if (await closeAlertButton.isVisible({ timeout: 0 })) {
        await closeAlertButton.click();
    }
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_049 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket กรณีไม่พิมพ์ตัวเลข//
When("กดปุ่ม Search41", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket13", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย16", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Remain Ticket5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('ทดสอบ');
});

When("กดปุ่ม search13", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
    if (await closeAlertButton.isVisible({ timeout: 0 })) {
        await closeAlertButton.click();
    }
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_050 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket//
When("กดปุ่ม Search42", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket14", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย17", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA\\)", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('26');
});

When("กดปุ่ม search14", { timeout: 300000 },async () => {
    await page.waitForTimeout(1000);
    await page.locator('#button_search_column_count_failed').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_051 : ทดสอบ Reset ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket//
When("กดปุ่ม Search43", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket15", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย18", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA\\)2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('26');
});

When("กดปุ่ม search15", { timeout: 300000 },async () => {
    await page.waitForTimeout(1000);
    await page.locator('#button_search_column_count_failed').click();
    await page.waitForTimeout(1000);
});

When("กดปุ่ม Reset4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_052 : ทดสอบ Close ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket//
When("กดปุ่ม Search44", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket16", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย19", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กดปุ่ม Close ของ Fail \\(กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA\\)", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_053 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search45", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket17", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย20", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กด space แล้ว กรอกข้อมูลในช่อง Search ของ Fail \\(กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA\\)", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('         26');
});

When("กดปุ่ม search16", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
     if (await closeAlertButton.isVisible({ timeout: 0 })) {
         await closeAlertButton.click();
     }
     await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_054 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search46", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket18", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย21", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA\\)3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('2');
});

When("กดปุ่ม search17", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
     if (await closeAlertButton.isVisible({ timeout: 0 })) {
         await closeAlertButton.click();
     }
     await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_055 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket กรณีไม่พิมพ์ตัวเลข//
When("กดปุ่ม Search47", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket19", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย22", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA\\)4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('ทดสอบ');
});

When("กดปุ่ม search18", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
     if (await closeAlertButton.isVisible({ timeout: 0 })) {
         await closeAlertButton.click();
     }
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_056 : ทดสอบ Search ของ In progress ใน Remain All Ticket//
When("กดปุ่ม Search48", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket20", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย23", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ In progress", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('16');
});

When("กดปุ่ม search19", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_in_process').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
      if (await closeAlertButton.isVisible({ timeout: 0 })) {
          await closeAlertButton.click();
      }
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_057 : ทดสอบ Reset ของ In progress ใน Remain All Ticket//
When("กดปุ่ม Search49", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket21", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย24", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ In progress2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('16');
});

When("กดปุ่ม search20", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_in_process').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
      if (await closeAlertButton.isVisible({ timeout: 0 })) {
          await closeAlertButton.click();
      }
    await page.waitForTimeout(1000);
});

When("กดปุ่ม Reset5", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_058 : ทดสอบ Close ของ In progress ใน Remain All Ticket//
When("กดปุ่ม Search50", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket22", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย25", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กดปุ่ม Close ของ In progress", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_059 : ทดสอบ Search ของ In progress ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search51", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket23", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย26", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ In progress3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('      16');
});

When("กดปุ่ม search21", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_in_process').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
      if (await closeAlertButton.isVisible({ timeout: 0 })) {
          await closeAlertButton.click();
      }
      await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_060 : ทดสอบ Search ของ In progress ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search52", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket24", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย27", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ In progress4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('1');
});

When("กดปุ่ม search22", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_in_process').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
      if (await closeAlertButton.isVisible({ timeout: 0 })) {
          await closeAlertButton.click();
      }
      await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_061 : ทดสอบ Search ของ In progress ใน Remain All Ticket กรณีไม่พิมพ์ตัวเลข//
When("กดปุ่ม Search53", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket25", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(2).click();
});

When("กด icon แว่นขยาย28", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ In progress5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('ทดสอบ');
});

When("กดปุ่ม search23", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_in_process').click();
    await page.waitForTimeout(1000);
    const closeAlertButton = page.locator('#button_close_alert');
      if (await closeAlertButton.isVisible({ timeout: 0 })) {
          await closeAlertButton.click();
      }
      await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_062 : ทดสอบการเลือกหน้า ใน Remain All Ticket//
When("กดเลือกวันที่ที่ต้องการ5", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search54", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket26", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดเลือกหน้าที่ต้องการ2", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: '3', exact: true }).locator('a').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_063 : ทดสอบปุ่ม Next Page และ Previous Page ใน Remain All Ticket//
When("กดเลือกวันที่ที่ต้องการ6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search55", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket27", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Next Page4", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'right' }).click();
});

When("กดปุ่ม Previous Page4", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'left' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_064 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Remain All Ticket//
When("กดเลือกวันที่ที่ต้องการ7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search56", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket28", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Next 3 Page2", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: 'Next 3 Pages' }).locator('a').click();
});

When("กดปุ่ม Previous 3 Page2", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: 'Previous 3 Pages' }).locator('a').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_065 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Remain All Ticket กรณ๊ไม่มีหน้าต่อไป//
When("เลือกข้อมูล Product Code24", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search57", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ ของ Remain All Ticket29", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("กดปุ่ม Previous Page5", { timeout: 300000 },async () => {
const prevBtn = page.locator('button', { hasText: 'left' });
  const isVisible = await prevBtn.isVisible().catch(() => false);
  if (isVisible) {
    const isDisabled = await prevBtn.getAttribute('disabled');
    if (!isDisabled) {
      await prevBtn.click();
    } 
  } 
});

When("กดปุ่ม Next Page5", { timeout: 300000 },async () => {
  const nextBtn = page.locator('button', { hasText: 'right' });
  const isVisible = await nextBtn.isVisible().catch(() => false);

  if (isVisible) {
    const isDisabled = await nextBtn.getAttribute('disabled');
    if (!isDisabled) {
      await nextBtn.click();
    }
  } 
  await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_066 : ทดสอบเลือก หน้า / page ใน Remain All Ticket//
When("เลือกข้อมูล Product Code25", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search58", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Remain All Ticket30", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(1).click();
});

When("เลือก 20 page3", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^10 \/ page$/ }).nth(2).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '20 / page' }).click();
});

When("เลือก 50 page3", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^20 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '50 / page' }).click();
});

When("เลือก 100 page3", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^50 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '100 / page' }).click();
});

When("เลือก 10 page3", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^100 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '10 / page' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_067 : ทดสอบการแสดงผล Complete All Ticket//
When("กดปุ่ม Search59", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

//TM_068 : ทดสอบการแสดงผล All Product ของ Complete All Ticket//
When("กดปุ่ม Search60", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_069 : ทดสอบปุ่ม Sort acending, Sort descending, cancel sorting ของตารางใน Complete All Ticket//
When("กดปุ่ม Search61", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket2", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กดปุ่ม Sort acending ของตาราง Complete All Ticket", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Product No. search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Complete Ticket search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Pass (SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
});

When("กดปุ่ม Sort descending ของตาราง Complete All Ticket", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Product No. search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Product No. search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Complete Ticket search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Complete Ticket search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Pass (SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Pass (SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
});

When("กดปุ่ม cancel sorting ของตาราง Complete All Ticket", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Product No. search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Product No. search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Product No. search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Complete Ticket search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Complete Ticket search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Complete Ticket search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Pass (SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Pass (SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Pass (SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) search' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_070 : ทดสอบ Search ของ Product No. ใน Complete All Ticket//
When("กดปุ่ม Search62", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย29", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.7", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Bridgestone');
});

When("กดปุ่ม search24", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_071 : ทดสอบ Reset ของ Product No. ใน Complete All Ticket//
When("กดปุ่ม Search63", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket4", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย30", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.8", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Bridgestone');
});

When("กดปุ่ม search25", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
});

When("กดปุ่ม Reset6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_072 : ทดสอบ Close ของ Product No. ใน Complete All Ticket//
When("กดปุ่ม Search64", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket5", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย31", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กดปุ่ม Close ของ Product No.3", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_073 : ทดสอบ Search ของ Product No. ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search65", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket6", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย32", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.9", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('       Bridgestone');
});

When("กดปุ่ม search26", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_074 : ทดสอบ Search ของ Product No. ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search66", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย33", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Product No.10", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('Br');
});

When("กดปุ่ม search27", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_proj_code').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_075 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket//
When("กดปุ่ม Search67", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย34", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Complete Ticket", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('10');
});

When("กดปุ่ม search28", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_076 : ทดสอบ Reset ของ Complete Ticket ใน Complete All Ticket//
When("กดปุ่ม Search68", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย35", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Complete Ticket2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('10');
});

When("กดปุ่ม search29", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
});

When("กดปุ่ม Reset7", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_077 : ทดสอบ Close ของ Complete Ticket ใน Complete All Ticket//
When("กดปุ่ม Search69", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย36", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กดปุ่ม Close ของ Complete Ticket", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_078 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search70", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket11", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย37", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Complete Ticket3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('     10');
});

When("กดปุ่ม search30", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_079 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search71", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket12", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย38", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Complete Ticket4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('1');
});

When("กดปุ่ม search31", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_080 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket กรณีไม่พิมพ์ตัวเลข//
When("กดปุ่ม Search72", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket13", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย39", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลในช่อง Search ของ Complete Ticket5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('ทดสอบ');
});

When("กดปุ่ม search32", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_ticket_type').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_081 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket//
When("กดปุ่ม Search73", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket14", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย40", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Pass \\(SLA)", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('10');
});

When("กดปุ่ม search33", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_pass').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_082 : ทดสอบ Reset ของ Pass (SLA) ใน Complete All Ticket//
When("กดปุ่ม Search74", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket15", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย41", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Pass \\(SLA)2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('10');
});

When("กดปุ่ม search34", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_pass').click();
});

When("กดปุ่ม Reset8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_083 : ทดสอบ Close ของ Pass (SLA) ใน Complete All Ticket//
When("กดปุ่ม Search75", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket16", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย42", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กดปุ่ม Close ของ Pass \\(SLA)", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_084 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search76", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket17", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย43", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Pass \\(SLA)3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('     10');
});

When("กดปุ่ม search35", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_pass').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_085 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search77", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket18", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย44", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Pass \\(SLA)4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('1');
});

When("กดปุ่ม search36", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_pass').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_086 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket กรณีไม่พิมพ์ตัวเลข//
When("กดปุ่ม Search78", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket19", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย45", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลในช่อง Search ของ Pass \\(SLA)5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('ทดสอบ');
});

When("กดปุ่ม search37", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_pass').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_087 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket//
When("กดปุ่ม Search79", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket20", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย46", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(ดำเนินการเรียบร้อย ไม่ผ่าน SLA)", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('10');
});

When("กดปุ่ม search38", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_088 : ทดสอบ Reset ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket//
When("กดปุ่ม Search80", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket21", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย47", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(ดำเนินการเรียบร้อย ไม่ผ่าน SLA)2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('10');
});

When("กดปุ่ม search39", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
});

When("กดปุ่ม Reset9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_089 : ทดสอบ Close ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket//
When("กดปุ่ม Search81", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket22", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย48", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กดปุ่ม Close ของ Fail \\(ดำเนินการเรียบร้อย ไม่ผ่าน SLA)", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_090 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กดปุ่ม Search82", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket23", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย49", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(ดำเนินการเรียบร้อย ไม่ผ่าน SLA)3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('    10');
});

When("กดปุ่ม search40", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_091 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กดปุ่ม Search83", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket24", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย50", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(ดำเนินการเรียบร้อย ไม่ผ่าน SLA)4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('1');
});

When("กดปุ่ม search41", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_092 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket กรณีไม่พิมพ์ตัวเลข//
When("กดปุ่ม Search84", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket25", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กด icon แว่นขยาย51", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลในช่อง Search ของ Fail \\(ดำเนินการเรียบร้อย ไม่ผ่าน SLA)5", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('ทดสอบ');
});

When("กดปุ่ม search42", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_count_failed').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_093 : ทดสอบการเลือกหน้า ใน Complete All Ticket//
When("กดเลือกวันที่ที่ต้องการ8", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search85", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket26", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กดเลือกหน้าที่ต้องการ3", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: '3', exact: true }).locator('a').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_094 : ทดสอบปุ่ม Next Page และ Previous Page ใน Complete All Ticket//
When("กดเลือกวันที่ที่ต้องการ9", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search86", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket27", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กดปุ่ม Next Page6", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'right' }).click();
});

When("กดปุ่ม Previous Page6", { timeout: 300000 },async () => {
    await page.getByRole('dialog').getByRole('button', { name: 'left' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_095 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Complete All Ticket//
When("กดเลือกวันที่ที่ต้องการ10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByRole('cell', { name: '1', exact: true }).nth(3).click();
    await page.getByText('31').nth(2).click();
});

When("กดปุ่ม Search87", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket28", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กดปุ่ม Next 3 Page3", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: 'Next 3 Pages' }).locator('a').click();
});

When("กดปุ่ม Previous 3 Page3", { timeout: 300000 },async () => {
    await page.getByRole('listitem', { name: 'Previous 3 Pages' }).locator('a').click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_096 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Complete All Ticket กรณ๊ไม่มีหน้าต่อไป//
When("เลือกข้อมูล Product Code26", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search88", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม All Product ของ Complete All Ticket29", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("กดปุ่ม Previous Page7", { timeout: 300000 },async () => {
const prevBtn = page.locator('button', { hasText: 'left' });
  const isVisible = await prevBtn.isVisible().catch(() => false);
  if (isVisible) {
    const isDisabled = await prevBtn.getAttribute('disabled');
    if (!isDisabled) {
      await prevBtn.click();
    } 
  } 
});

When("กดปุ่ม Next Page7", { timeout: 300000 },async () => {
  const nextBtn = page.locator('button', { hasText: 'right' });
  const isVisible = await nextBtn.isVisible().catch(() => false);

  if (isVisible) {
    const isDisabled = await nextBtn.getAttribute('disabled');
    if (!isDisabled) {
      await nextBtn.click();
    }
  } 
  await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_097 : ทดสอบเลือก หน้า / page ใน Complete All Ticket//
When("เลือกข้อมูล Product Code27", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search89", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("When กดปุ่ม All Product ของ Complete All Ticket30", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'All Product' }).nth(3).click();
});

When("เลือก 20 page4", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^10 \/ page$/ }).nth(2).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '20 / page' }).click();
});

When("เลือก 50 page4", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^20 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '50 / page' }).click();
});

When("เลือก 100 page4", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^50 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '100 / page' }).click();
});

When("เลือก 10 page4", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^100 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '10 / page' }).click();
    await page.getByRole('button', { name: 'close', exact: true }).click();
});

//TM_098 : ทดสอบการแสดงผล  Team Management Ticket Dashboard//
When("เลือกข้อมูล Product Code28", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search90", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

//TM_99 : ทดสอบปุ่ม Sort acending, Sort descending, cancel sorting ของตารางใน Team Management Ticket Dashboard//
When("เลือกข้อมูล Product Code29", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search91", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม Sort acending ของตาราง Team Management Ticket Dashboard", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'Responsible person search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ticket Amount' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Pass (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sum' }).click();
});

When("กดปุ่ม Sort descending ของตาราง Team Management Ticket Dashboard", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'Responsible person search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Responsible person search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ticket Amount' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ticket Amount' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Pass (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Pass (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sum' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sum' }).click();
});

When("กดปุ่ม cancel sorting ของตาราง Team Management Ticket Dashboard", { timeout: 300000 }, async () => {
    await page.getByRole('button', { name: 'Responsible person search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Responsible person search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Responsible person search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ticket Amount' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ticket Amount' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ticket Amount' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Pass (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Pass (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Pass (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fail (SLA)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'In progress' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sum' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sum' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sum' }).click();
});

//TM_100 : ทดสอบ Search ของ Responsible person ใน Team Management Ticket Dashboard//
When("กดปุ่ม Search92", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กด icon แว่นขยาย52", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('TTTTT TTTTT');
});

When("กดปุ่ม search43", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_fullname').click();
});

//TM_101 : ทดสอบ Reset ของ Responsible person ใน Team Management Ticket Dashboard//
When("กด icon แว่นขยาย53", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard2", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('TTTTT TTTTT');
});

When("กดปุ่ม search44", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_fullname').click();
});

When("กดปุ่ม Reset10", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
});

//TM_102 : ทดสอบ Close ของ Responsible person ใน Team Management Ticket Dashboard//
When("กด icon แว่นขยาย54", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).click();
});

When("กดปุ่ม Close ของ Responsible person ใน Team Management Ticket Dashboard", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Close', exact: true }).click();
});

//TM_103 : ทดสอบ Search ของ Responsible person ใน Team Management Ticket Dashboard กรณีกด space bar ค่อยค้นหาข้อมูล//
When("กด icon แว่นขยาย55", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard3", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('       TTTTT TTTTT');
});

When("กดปุ่ม search45", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_fullname').click();
});

//TM_104 : ทดสอบ Search ของ Responsible person ใน Team Management Ticket Dashboard กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ//
When("กด icon แว่นขยาย56", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search', exact: true }).click();
});

When("กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard4", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Search..' }).fill('TT');
});

When("กดปุ่ม search46", { timeout: 300000 },async () => {
    await page.locator('#button_search_column_fullname').click();
});

//TM_105 : ทดสอบปุ่ม Next Page และ Previous Page ใน Team Management Ticket Dashboard//
When("กดปุ่ม Next Page8", { timeout: 300000 },async () => {
  const nextBtn = page.locator('button', { hasText: 'right' });
  const isVisible = await nextBtn.isVisible().catch(() => false);

  if (isVisible) {
    const isDisabled = await nextBtn.getAttribute('disabled');
    if (!isDisabled) {
      await nextBtn.click();
    }
  } 
});

When("กดปุ่ม Previous Page8", { timeout: 300000 },async () => {
const prevBtn = page.locator('button', { hasText: 'left' });
  const isVisible = await prevBtn.isVisible().catch(() => false);
  if (isVisible) {
    const isDisabled = await prevBtn.getAttribute('disabled');
    if (!isDisabled) {
      await prevBtn.click();
    } 
  } 
});

// TM_106 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Team Management Ticket Dashboard
When("กดปุ่ม Next 3 Page4", { timeout: 300000 }, async () => {
    const next3Button = page.getByRole('listitem', { name: 'Next 3 Pages' }).locator('a');
    if (await next3Button.isVisible({ timeout: 0 })) {
        await next3Button.click();
    } 
});

When("กดปุ่ม Previous 3 Page4", { timeout: 300000 }, async () => {
    const previous3Button = page.getByRole('listitem', { name: 'Previous 3 Pages' }).locator('a');
    if (await previous3Button.isVisible({ timeout: 0 })) {
        await previous3Button.click();
    }
});

//TM_107 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Team Management Ticket Dashboard กรณ๊ไม่มีหน้าต่อไป//
When("เลือกข้อมูล Product Code30", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search93", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("กดปุ่ม Previous Page9", { timeout: 300000 },async () => {
const prevBtn = page.locator('button', { hasText: 'left' });
  const isVisible = await prevBtn.isVisible().catch(() => false);
  if (isVisible) {
    const isDisabled = await prevBtn.getAttribute('disabled');
    if (!isDisabled) {
      await prevBtn.click();
    } 
  } 
});

When("กดปุ่ม Next Page9", { timeout: 300000 },async () => {
  const nextBtn = page.locator('button', { hasText: 'right' });
  const isVisible = await nextBtn.isVisible().catch(() => false);

  if (isVisible) {
    const isDisabled = await nextBtn.getAttribute('disabled');
    if (!isDisabled) {
      await nextBtn.click();
    }
  } 
});

//TM_108 : ทดสอบเลือก หน้า / page ใน Team Management Ticket Dashboard//
When("เลือกข้อมูล Product Code31", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.locator('.ant-select-selection-overflow').click();
    await page.locator('#select_select_product_list_ticket_monitoring').fill('B');
    await page.getByText('Bridgestone', { exact: true }).click();
});

When("กดปุ่ม Search94", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือก 20 page5", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^10 \/ page$/ }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '20 / page' }).click();
});

When("เลือก 50 page5", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^20 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '50 / page' }).click();
});

When("เลือก 100 page5", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^50 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '100 / page' }).click();
});

When("เลือก 10 page5", { timeout: 300000 },async () => {
    await page.locator('div').filter({ hasText: /^100 \/ page$/ }).first().click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: '10 / page' }).click();
});

//TM_109 : ทดสอบการแสดงผล  Latest Tickets Created//
When("กดปุ่ม Search95", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

//TM_110 : ทดสอบการดูข้อมูลใน Latest Tickets Created//
When("กดปุ่ม Search96", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});
  

//TM_111 : ทดสอบแสดงผล Ticket Detail ใน Latest Tickets Created//
When("เข้าสู่ระบบ Ticket Monitoring9", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search97", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created2", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

//TM_112 : ทดสอบแสดงผล Log Ticket Phase ใน Latest Tickets Created//
When("เข้าสู่ระบบ Ticket Monitoring10", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search98", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created3", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

//TM_113 : ทดสอบแสดงผล Description ใน Latest Tickets Created//
When("เข้าสู่ระบบ Ticket Monitoring11", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search99", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created4", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

//TM_114 : ทดสอบแสดงผล Comment ใน Latest Tickets Created//
When("เข้าสู่ระบบ Ticket Monitoring12", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search100", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created5", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

//TM_115 : ทดสอบการดู Create by ของ Ticket Detail ใน Latest Tickets Created//
When("เข้าสู่ระบบ Ticket Monitoring13", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search101", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created6", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("คลิก Create by", { timeout: 300000 },async () => {
    await page.getByText('Create by').click();
    await page.getByRole('button', { name: 'close' }).click();
});

//TM_116 : ทดสอบการดู Manage by ของ Ticket Detail ใน Latest Tickets Created//
When("เข้าสู่ระบบ Ticket Monitoring14", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search102", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created7", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("คลิก Manage by", { timeout: 300000 },async () => {
    await page.getByText('Manage by').click();
    await page.getByRole('button', { name: 'close' }).click();
});

//TM_117 : ทดสอบการเปิดปิดหน้าต่างของ Ticket Detail//
When("เข้าสู่ระบบ Ticket Monitoring15", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search103", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created8", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("กดปุ่มลบของ Ticket Detail", { timeout: 300000 },async () => {
    await page.locator('.ant-col.ant-col-xs-4 > div').first().click();
});

When("กดปุ่มบวกของ Ticket Detail", { timeout: 300000 },async () => {
    await page.locator('.ant-col.ant-col-xs-4 > div').first().click();
});

//TM_118 : ทดสอบการเปิดปิดหน้าต่างของ Log Ticket Phase//
When("เข้าสู่ระบบ Ticket Monitoring16", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search104", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created9", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("กดปุ่มลบของ Log Ticket Phase", { timeout: 300000 },async () => {
    await page.locator('.card-element-header.header-toggle > .ant-row > .ant-col.ant-col-xs-4 > div').first().click();
});

When("กดปุ่มบวกของ Log Ticket Phase", { timeout: 300000 },async () => {
    await page.locator('.card-element-header.header-toggle > .ant-row > .ant-col.ant-col-xs-4 > div').first().click();
});

//TM_119 : ทดสอบการเปิดปิดหน้าต่างของ Description//
When("เข้าสู่ระบบ Ticket Monitoring17", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search105", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created10", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("กดปุ่มลบของ Description", { timeout: 300000 },async () => {
    await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-24 > div > div > div > .ant-row > .ant-col.ant-col-xs-4 > div').click();
});

When("กดปุ่มบวกของ Description", { timeout: 300000 },async () => {
    await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-24 > div > div > div > .ant-row > .ant-col.ant-col-xs-4 > div').click();
});

//TM_120 : ทดสอบการส่งข้อความและหลายไฟล์ ในช่อง comment//
When("เข้าสู่ระบบ Ticket Monitoring18", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search106", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created11", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("กรอกข้อความ Type your message...", { timeout: 300000 },async () => {
    await page.getByRole('textbox', { name: 'Type your message...' }).fill('ทดสอบระบบ');
    await page.waitForTimeout(1000);
});

When("เลือกไฟล์ส่งมา 3 ไฟล์", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'paper-clip' }).click();
    await page.waitForTimeout(30000);
});

When("กดส่งข้อความ", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'send' }).click();
});

//TM_121 : ทดสอบการแก้ไขข้อความและหลายไฟล์ ในช่อง comment//
When("เข้าสู่ระบบ Ticket Monitoring19", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search107", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created12", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("แก้ไขข้อความ Type your message...", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'edit' }).last().click();
    await page.getByRole('textbox', { name: 'Edit your comment...' }).fill('แก้ไข');
    await page.waitForTimeout(1000);
});

When("เลือกไฟล์ใหม่ส่งมา 3 ไฟล์", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'paper-clip Upload' }).click();
    await page.waitForTimeout(30000);
});

When("กด Save", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Save' }).click();
});

//TM_122 : ทดสอบลบ comment//
When("เข้าสู่ระบบ Ticket Monitoring20", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search108", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});

When("เลือกดูข้อมูลใน Latest Tickets Created13", { timeout: 300000 },async () => {
    await page.getByText('4', { exact: true }).nth(1).click();
    await page.waitForTimeout(2000);
});

When("กดปุ่มถังขยะ", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete' }).last().click();
    await page.waitForTimeout(2000);
});

//TM_123 : ทดสอบการกดปุ่ม Cancel หน้าการแจ้งเตือน//
When("กดปุ่ม Cancel", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'Cancel' }).click();
});

//TM_124 : ทดสอบการกดปุ่ม Confirm หน้าการแจ้งเตือน//
When("กดปุ่ม Confirm", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete' }).last().click();
    await page.getByRole('button', { name: 'Confirm' }).click();
});

//TM_125 : ทดสอบการแสดงผล Last 10 User Chats//
When("เข้าสู่ระบบ Ticket Monitoring21", { timeout: 300000 },async () => {
    await page.getByRole('menuitem', { name: 'Ticket Monitoring' }).click();
    // await page.locator('#button_close_alert').click();
});

When("กดปุ่ม Search109", { timeout: 300000 },async () => {
    await page.getByRole('button', { name: 'delete Clear' }).click();
    await page.getByRole('button', { name: 'search Search' }).click();
});