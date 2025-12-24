const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

let browser;
let page;

//P_MGT000 : ทดสอบการเข้าสู่เว็บไซต์//
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

//P_MGT001 : (Tap Module) ทดสอบเข้าสู่เมนู Permission MGT และแสดงตาราง//
When("เข้าสู่เมนู Permission MGT", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

//P_MGT002 : (Tap Module) ทดสอบค้นหาข้อมูล Module ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT2", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').click();
  await page.locator('#input_text_account_table_search_input').fill('FMD');
});

When("คลิกปุ่ม Search", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT003 : (Tap Module) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT3", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search2", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').click();
  await page.locator('#input_text_account_table_search_input').fill('Factory Master Data');
});

When("คลิกปุ่ม Search2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT004 : (Tap Module) ทดสอบค้นหาข้อมูล Path ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT4", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search3", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').click();
  await page.locator('#input_text_account_table_search_input').fill('Factory Master Data');
});

When("คลิกปุ่ม Search3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT005 : (Tap Module) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT5", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search4", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').click();
  await page.locator('#input_text_account_table_search_input').fill('01/04/2025');
});

When("คลิกปุ่ม Search4", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT006 : (Tap Module) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT6", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search5", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').click();
  await page.locator('#input_text_account_table_search_input').fill('กดกหแอแอแอกกดกด');
});

When("คลิกปุ่ม Search5", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT007 : (Tap Module) ทดสอบรีเซ็ตการค้นหา//
When("เข้าสู่เมนู Permission MGT7", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search6", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').click();
});

When("คลิกปุ่ม Search6", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกปุ่ม Clear", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT008 : (Tap Module) ทดสอบรีเซ็ตการค้นหา//
When("เข้าสู่เมนู Permission MGT8", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Module", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search7", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('FMD');
});

When("คลิกปุ่ม Search7", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT009 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Module//
When("เข้าสู่เมนู Permission MGT9", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Module2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search8", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('FMD');
});

When("คลิกปุ่ม Search8", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกปุ่ม Reset", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search9", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT010 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT10", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search9", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Factory Master Data');
});

When("คลิกปุ่ม Search10", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

//P_MGT011 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT11", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search10", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Factory Master Data');
});

When("คลิกปุ่ม Search11", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

When("คลิกปุ่ม Reset2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search12", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

//P_MGT012 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Path//
When("เข้าสู่เมนู Permission MGT12", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Path", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search11", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Factory_Master_Data');
});

When("คลิกปุ่ม Search13", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_path').click();
});

//P_MGT013 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Path//
When("เข้าสู่เมนู Permission MGT13", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Path2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search12", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Factory_Master_Data');
});

When("คลิกปุ่ม Search14", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_path').click();
});

When("คลิกปุ่ม Reset3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search15", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_path').click();
});

//P_MGT014 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT14", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create Date", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search13", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('01/04/2025');
});

When("คลิกปุ่ม Search16", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

//P_MGT015 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT15", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create Date2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search14", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('01/04/2025');
});

When("คลิกปุ่ม Search17", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

When("คลิกปุ่ม Reset4", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search18", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

//P_MGT016 : (Tap Module) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน//
When("เข้าสู่เมนู Permission MGT16", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Module3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search15", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('FMD');
});

When("คลิกปุ่ม Search19", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search16", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Factory Master Data');
});

When("คลิกปุ่ม Search20", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Path3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search17", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Factory_Master_Data');
});

When("คลิกปุ่ม Search21", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_path').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create Date3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search18", { timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('01/04/2025');
});

When("คลิกปุ่ม Search22", { timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_created_date').click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT017 : (Tap Module)  ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text(Module , Display Name , Path)//
When("กดปุ่ม Sort ข้อมูล", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
});

//P_MGT018 : (Tap Module)  ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่ (Create Date)//
When("กดปุ่ม Sort ข้อมูล2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
});

//P_MGT019 : (Tap Module) ทดสอบการเลือก Filter Select All//
When("กดปุ่ม Filter เลือกดู Select All", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//P_MGT020 : (Tap Module) ทดสอบการเลือก Filter ดูทีละคอลัมน์//
When("กดปุ่ม Filter เลือกดูทีละรายการ", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Module' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Path' }).check();
  await page.getByRole('checkbox', { name: 'Module' }).uncheck();
  await page.getByRole('checkbox', { name: 'icon' }).check();
  await page.getByRole('checkbox', { name: 'Path' }).uncheck();
  await page.getByRole('checkbox', { name: 'Display Name' }).check();
  await page.getByRole('checkbox', { name: 'icon' }).uncheck();
  await page.getByRole('checkbox', { name: 'Create Date' }).check();
  await page.getByRole('checkbox', { name: 'Display Name' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//P_MGT021 : (Tap Module) ทดสอบ Drag and drop ลำดับ//
// When("เข้าสู่เมนู Permission MGT17", { timeout: 300000 },async () => {
//   await page.getByRole('tab', { name: 'Permission MGT' }).click();
// });

// When("คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ", { timeout: 300000 },async () => {

// });

//P_MGT022 : (Tap Module) ทดสอบแก้ไขลำดับตัวเลข//
When("เข้าสู่เมนู Permission MGT18", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('HR');
  await page.locator('#account_table_search_button').click();
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับ", { timeout: 300000 },async () => {
  //หลังเทสเสร็จ เปลี่ยนกลับมาเป็น 1 เหมือนเดิม
  await page.getByRole('row', { name: 'holder 1 1 HR Humancee' }).locator('#input_text_').fill('40');
});

When("คลิกปุ่ม Save", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT023 : (Tap Module) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ//
When("เข้าสู่เมนู Permission MGT19", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit2", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Ware');
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับ", { timeout: 300000 },async () => {
 await page.getByRole('cell', { name: '14' }).locator('#input_text_').click();
 await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: '14' }).locator('#input_text_').press('ControlOrMeta+a');
  await page.getByRole('cell', { name: '14' }).locator('#input_text_').fill('30');
  await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: '15' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: '15' }).locator('#input_text_').press('ControlOrMeta+a');
  await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: '15' }).locator('#input_text_').fill('31');
});

When("คลิกปุ่ม Save2", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT024 : (Tap Module) ทดสอบกรอกเลขลำดับซ้ำกัน//
When("เข้าสู่เมนู Permission MGT20", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit3", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Acc');
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน", { timeout: 300000 },async () => {
  await page.getByRole('cell', { name: '3' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: '3' }).locator('#input_text_').fill('3');
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 20 2 Acc MGT Acc MGT' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 20 2 Acc MGT Acc MGT' }).locator('#input_text_').fill('3');
});

When("คลิกปุ่ม Save3", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT025 : (Tap Module) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ//
When("เข้าสู่เมนู Permission MGT21", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit4", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("คลิก Tab Module", { timeout: 300000 },async () => {
  await page.getByText('Menu Level 1').click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT026 : (Tap Module) ทดสอบ Add ข้อมูลทั้งหมด//
When("เข้าสู่เมนู Permission MGT22", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Module Name", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').first().fill('test01');
});

When("กรอก Display Name \\(Default)", { timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('t1');
});

When("กรอก Path", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_path').fill('t1');
});

When("เลือก Icon", { timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_13.svg' }).check();
});

When("คลิกปุ่ม Set Config \\(Company Label Configuration)", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company", { timeout: 300000 },async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByTitle('CompTest01').click();
});

When("กรอก Menu Name", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'test01' }).fill('test01');
});

When("กรอก Display Name", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 't1' }).fill('t1');
});

When("คลิกปุ่ม Save \\(Modal Set Config)", { timeout: 300000 },async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

When("กรอก Academy Link \\(Card Academy Content)", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').nth(1).fill('tttspaceship.com');
});

When("คลิกปุ่ม Save4", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT027 : (Tap Module) ทดสอบ Add ข้อมูลเฉพาะ Card Module//
When("เข้าสู่เมนู Permission MGT23", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add2", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Module Name2", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').first().fill('test02');
});

When("กรอก Display Name \\(Default)2", { timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('t2');
});

When("กรอก Path2", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_path').fill('t2');
});

When("เลือก Icon2", { timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_13.svg' }).check();
});

When("คลิกปุ่ม Save5", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT028 : (Tap Module) ทดสอบ Add ข้อมูลเฉพาะ Card Module และทำการอัปโหลด Icon เอง//
When("เข้าสู่เมนู Permission MGT24", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add3", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Module Name3", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').first().fill('test03');
});

When("กรอก Display Name \\(Default)3", { timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('t3');
});

When("กรอก Path3", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_path').fill('t3');
});

When("กรอก Upload Image", { timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือก Icon3", { timeout: 300000 },async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save6", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT029 : (Tap Module) ทดสอบ Add ข้อมูลโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB//
When("เข้าสู่เมนู Permission MGT25", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add4", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("อัปโหลด Icon ที่มีขนาดเกิน 5 MB", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT030 : (Tap Module) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก//
When("เข้าสู่เมนู Permission MGT26", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add5", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Save8", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT031 : (Tap Module) ทดสอบ Add ข้อมูลโดยกรอก Module Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ//
When("เข้าสู่เมนู Permission MGT27", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add6", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Module Name4", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').first().fill('HR');
});

When("กรอก Display Name \\(Default)4", { timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('Humance');
});

When("กรอก Path4", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_path').fill('Humance');
});

When("คลิกปุ่ม Save9", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm4", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT032 : (Tap Module) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT28", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add7", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Set Config", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("คลิกปุ่ม Save10", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#root').getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT033 : (Tap Module) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT29", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add8", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Set Config2", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company2", { timeout: 300000 },async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByTitle('CompTest01').click();
});

When("กรอก Menu Name2", { timeout: 300000 },async () => {
  await page.locator('#input_text_menu_name').fill('HR');
});

When("กรอก Display Name2", { timeout: 300000 },async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('Humance');
});

When("คลิกปุ่ม Save11", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//P_MGT034 : (Tap Module) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search19", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('ComepTest01');
});

When("คลิกปุ่ม Search23", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT035 : (Tap Module) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search20", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Humance');
});

When("คลิกปุ่ม Search24", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT036 : (Tap Module) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit5", { timeout: 300000 },async () => {
  await page.getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name", { timeout: 300000 },async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('Humance TT');
});

When("คลิกปุ่ม Save12", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//P_MGT037 : (Tap Module) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด2", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit6", { timeout: 300000 },async () => {
  await page.getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name2", { timeout: 300000 },async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('Humance TT');
});

When("คลิกปุ่ม Cancel", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm5", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT038 : (Tap Module) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด3", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete", { timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel2", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

//P_MGT039 : (Tap Module) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด4", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete2", { timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm6", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT040 : (Tap Module) ทดสอบ Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('HR');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit7", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูลที่ต้องการแก้ไข", { timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('Humancee');
});

When("คลิกปุ่ม Save13", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT041 : (Tap Module) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT2", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit8", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("ลบค่าในช่อง Module Name", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').first().fill('');
});

When("ลบค่าในช่อง Display Name", { timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('');
});

When("ลบค่าในช่อง Path", { timeout: 300000 },async () => {
  await page.locator('#input_text_module_path').fill('');
});

When("คลิกปุ่ม Save14", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT042 : (Tap Module) ทดสอบ Edit โดยแก้ไขให้ Module Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT3", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit9", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขให้ Module Name, Display Name, Path ซ้ำกับข้อมูลอื่นในระบบ", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_name').first().fill('Accounting');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_name').fill('Accounting');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_path').fill('Accounting');
});

When("คลิกปุ่ม Save15", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm7", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT043 : (Tap Module) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT4", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit10", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image", { timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด", { timeout: 300000 },async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save16", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm8", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#button_close_alert').click();
});

//P_MGT044 : (Tap Module) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT5", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit11", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image2", { timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด2", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
});

When("คลิกปุ่ม Save17", { timeout: 300000 },async () => {
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT045 : (Tap Module) ทดสอบเพิ่มข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Edit//
When("เข้าสู่เมนู Permission MGT30", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Edit').click();
});

When("คลิกปุ่ม Set Config3", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("คลิกปุ่ม Save18", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT046 : (Tap Module) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("เข้าสู่เมนู Permission MGT31", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit2", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 26 2 HR Humancee' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Edit').click();
});

When("คลิกปุ่ม Set Config4", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company3", { timeout: 300000 },async () => {
  await page.locator('.ant-select.ant-select-outlined.css-1vjf2v5.ant-select-single.ant-select-allow-clear > .ant-select-selector').click();
  await page.getByTitle('CompTest01').click();
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT047 : (Tap Module) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search21", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('CompTest01');
});

When("คลิกปุ่ม Search25", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT048 : (Tap Module) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search22", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Humancee');
});

When("คลิกปุ่ม Search26", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT049 : (Tap Module) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด5", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit12", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name3", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Humancee' }).fill('Humancee');
});

When("คลิกปุ่ม Save19", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//P_MGT050 : (Tap Module) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด6", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit13", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name4", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Humancee' }).fill('Humancee');
});

When("คลิกปุ่ม Cancel3", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm9", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT051 : (Tap Module) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด8", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete3", { timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel4", { timeout: 300000 },async () => {
  await page.locator('#button_cancel_alert').click();
});

//P_MGT052 : (Tap Module) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด9", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete4", { timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm10", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// //P_MGT053 : (Tap Module) ทดสอบดู Mode View//
When("เข้าสู่เมนู Permission MGT32", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row').filter({
    hasText: 'holder',
    hasText: 'test01',
    hasText: 't1'
  }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('View').click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
});

// //P_MGT054 : (Tap Module) ทดสอบยกเลิกลบข้อมูล//
When("เข้าสู่เมนู Permission MGT33", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete2", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row').filter({
    hasText: 'holder',
    hasText: 'test01',
    hasText: 't1'
  }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Cancel5", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT055 : (Tap Module) ทดสอบลบข้อมูล//
When("เข้าสู่เมนู Permission MGT34", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete3", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row').filter({
    hasText: 'holder',
    hasText: 'test01',
    hasText: 't1'
  }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Confirm11", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// //P_MGT056 : (Tap Module) ทดสอบลบข้อมูล ที่มี Menu Lv1 ผูกอยู่//
When("เข้าสู่เมนู Permission MGT35", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete4", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 4 4 WM Warehouse' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Confirm12", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
});

//P_MGT057 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Module ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText("Menu Level 1").click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search23",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("Human Resource");
});

When("คลิกปุ่ม Search27", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

//P_MGT058 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Menu Level 1 ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)2",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search24",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("ข้อมูลกะวันทำงาน");
});

When("คลิกปุ่ม Search28", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

//P_MGT059 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)3",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search25",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("ข้อมูลกะวันทำงาน");
});

When("คลิกปุ่ม Search29", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

//P_MGT060 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Path ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)4",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click(); 
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search26",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("workingkaday");
});

When("คลิกปุ่ม Search30", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

//P_MGT061 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)5",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search27",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("06/05/2025");
});

When("คลิกปุ่ม Search31", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

//P_MGT062 : (Tap Menu Level 1) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)6",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search28",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("หกฟกฟหกฟ");
});

When("คลิกปุ่ม Search32", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

//P_MGT063 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหา//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)7",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา", { timeout: 300000 }, async () => {
  await page.locator("svg").nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search29",{ timeout: 300000 },async () => {
  await page.locator("#input_text_account_table_search_input").fill("Human Resource");
});

When("คลิกปุ่ม Search33", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "search Search" }).click();
});

When("คลิกปุ่ม Clear2", { timeout: 300000 }, async () => {
  await page.getByRole("button", { name: "delete Clear" }).click();
});

//P_MGT064 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Module//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)8",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Module4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search30",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_module');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Human Resource');
});

When("คลิกปุ่ม Search34", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_module').click();
});

//P_MGT065 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Module//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)9",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search31",{ timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('Human Resource');
});

When("คลิกปุ่ม Search35", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_module').click();
});

When("คลิกปุ่ม Reset5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search36", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_module').click();
});

//P_MGT066 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu Level 1//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)10",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Menu Level 1", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search32",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('ข้อมูลกะวันทำงาน');
});

When("คลิกปุ่ม Search37", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT067 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์  Menu Level 1//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)11",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search33",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('ข้อมูลกะวันทำงาน');
});

When("คลิกปุ่ม Search38", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกปุ่ม Reset6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search39", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT068 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)12",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Display Name4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search34",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('ข้อมูลกะวันทำงาน');
});

When("คลิกปุ่ม Search40", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

//P_MGT069 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)13",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search35",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('ข้อมูลกะวันทำงาน');
});

When("คลิกปุ่ม Search41", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

When("คลิกปุ่ม Reset7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search42", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

//P_MGT070 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Path//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)14",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Path4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search36",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('workingkaday');
});

When("คลิกปุ่ม Search43", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

//P_MGT0671 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Path//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)15",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search37",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('workingkaday');
});

When("คลิกปุ่ม Search44", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

When("คลิกปุ่ม Reset8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search45", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

//P_MGT072 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)16",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Create Date4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search38",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('06/05/2025');
});

When("คลิกปุ่ม Search46", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

//P_MGT073 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)17",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search39",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('06/05/2025');
});

When("คลิกปุ่ม Search47", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

When("คลิกปุ่ม Reset9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search48", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

//P_MGT074 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)18",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Module5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search40",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_module');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Human Resource');
});

When("คลิกปุ่ม Search49", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_module').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search41",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('ข้อมูลกะวันทำงาน');
});

When("คลิกปุ่ม Search50", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Path5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search42",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('workingkaday');
});

When("คลิกปุ่ม Search51", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create Date5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search43",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('06/05/2025');
});

When("คลิกปุ่ม Search52", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT075 : (Tap Menu Level 1) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text (Module , Menu LV.1 , Display Name , Path)//
When("กดปุ่ม Sort ข้อมูล3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Menu LV.1 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.1 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.1 search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
});

//P_MGT076 : (Tap Menu Level 1) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่(Create Date)//
When("กดปุ่ม Sort ข้อมูล4", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
});

//P_MGT077 : (Tap Menu Level 1) ทดสอบการเลือก Filter Select All//
When("กดปุ่ม Filter เลือกดู Select All2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

//P_MGT078 : (Tap Menu Level 1) ทดสอบการเลือก Filter ดูทีละคอลัมน์//
When("กดปุ่ม Filter เลือกดูทีละรายการ2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Module' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Display Name' }).check();
  await page.getByRole('checkbox', { name: 'Module' }).uncheck();
  await page.getByRole('checkbox', { name: 'Create Date' }).check();
  await page.getByRole('checkbox', { name: 'Display Name' }).uncheck();
  await page.getByRole('checkbox', { name: 'icon' }).check();
  await page.getByRole('checkbox', { name: 'Create Date' }).uncheck();
  await page.getByRole('checkbox', { name: 'Menu LV.1' }).check();
  await page.getByRole('checkbox', { name: 'icon' }).uncheck();
  await page.getByRole('checkbox', { name: 'Path' }).check();
  await page.getByRole('checkbox', { name: 'Menu LV.1' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

// // //P_MGT079 : (Tap Menu Level 1) ทดสอบ Drag and drop ลำดับ//
// // When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)19", { timeout: 300000 }, async () => {
// //   await page.getByRole("tab", { name: "Permission MGT" }).click();
// // });

// // When("When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ2", { timeout: 300000 }, async () => {

// // });

// // //P_MGT080 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลแล้ว Drag and drop ลำดับ//
// // When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)20", { timeout: 300000 }, async () => {
// //   await page.getByRole("tab", { name: "Permission MGT" }).click();
// // });

// // When("ค้นหาข้อมูลแล้วคลิกปุ่ม Seach", { timeout: 300000 }, async () => {

// // });

// // When("คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ3", { timeout: 300000 }, async () => {

// // });

//P_MGT081 : (Tap Menu Level 1) ทดสอบแก้ไขลำดับตัวเลข//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)21", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit14", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Human Resource');
  await page.locator('#account_table_search_button').click();
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับ2", { timeout: 300000 }, async () => {
  //หลังเทสเสร็จ เปลี่ยนกลับมาเป็น 1 เหมือนเดิม
  await page.getByRole('row', { name: 'holder 1 1 Human Resource' }).locator('#input_text_').fill('99');
});

When("คลิกปุ่ม Save20", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT082 : (Tap Menu Level 1) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)22", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับ2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 1 1 WM MachineInOut' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 1 1 WM MachineInOut' }).locator('#input_text_').fill('99');
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 2 2 Accounting Spend' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 2 2 Accounting Spend' }).locator('#input_text_').fill('98');
});

When("คลิกปุ่ม Save21", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT083 : (Tap Menu Level 1) ทดสอบกรอกเลขลำดับซ้ำกัน//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)23", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 1 1 WM MachineInOut' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 1 1 WM MachineInOut' }).locator('#input_text_').fill('99');
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 2 2 Accounting Spend' }).locator('#input_text_').click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'holder 2 2 Accounting Spend' }).locator('#input_text_').fill('99');
});

When("คลิกปุ่ม Save22", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT084 : (Tap Menu Level 1) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)24", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("คลิก Tab Module2", { timeout: 300000 }, async () => {
  await page.getByText('Menu Level 2').click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT085 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลทั้งหมด//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)25", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Module Name", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Accounting').click();
}); 

When("กรอก Menu Name3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test');
});

When("กรอก Display Name \\(Default)5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test1');
});

When("กรอก Path5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test1');
});

When("เลือก Icon4", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_2.svg' }).check();
});

When("คลิกปุ่ม Set Config \\(Company Label Configuration)2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company4", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('CompTest01').click();
});

When("กรอก Display Name3", { timeout: 300000 }, async () => {
    await page.getByRole('textbox', { name: 'Test1' }).fill('Test1');
});

When("คลิกปุ่ม Save \\(Modal Set Config)2", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

When("กรอก Academy Link \\(Card Academy Content)2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').nth(1).fill('tttspaceship.com');
});

When("คลิกปุ่ม Save23", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT086 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลเฉพาะ Card Module//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)26", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Module Name2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Accounting').click();
});

When("กรอก Menu Name4", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test2');
});

When("กรอก Display Name \\(Default)6", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test2');
});

When("กรอก Path6", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test2');
});

When("เลือก Icon5", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_2.svg' }).check();
});

When("คลิกปุ่ม Save24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT087 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลเฉพาะ Card Module และทำการอัปโหลด Icon เอง//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)27", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Module Name5", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Accounting').click();
});

When("กรอก Menu Name5", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test');
});

When("กรอก Display Name \\(Default)7", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test3');
});

When("กรอก Path7", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test3');
});

When("เลือก Upload Image3", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("อัปโหลด Icon", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT088 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)28", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("อัปโหลด Icon ที่มีขนาดเกิน 5 MB2", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT089 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)29", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Save26", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT090 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)30", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Menu Name ที่ซ้ำกับระบบ", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selection-item').click();
  await page.getByText('Accounting').click();
  await page.locator('#input_text_module_name').first().fill('Test');
  await page.locator('#input_text_display_name').fill('Test1');
  await page.locator('#input_text_module_path').fill('Test1');
});

When("คลิกปุ่ม Save27", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT091 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบแต่อยู่ใน Module ที่ไม่ซ้ำกัน//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)31", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Module Name3", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Favorite').click();
});

When("กรอก Menu Name ซ้ำกับที่มีอยู่", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test');
});

When("กรอก Display Name \\(Default)8", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test1');
});

When("กรอก Path8", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test1');
});

When("เลือก Icon6", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_2.svg' }).check();
});

When("คลิกปุ่ม Save28", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT092 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอกเมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)32", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add16", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Set Config5", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("คลิกปุ่ม Save29", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT093 : (Tap Menu Level 1) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)33", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Add17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Set Config6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company5", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('CompTest01').click();
});

When("กรอก Display Name4", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('Test');
});

When("คลิกปุ่ม Save30", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//P_MGT094 : (Tap Menu Level 1) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search44", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('CompTest01');
});

When("คลิกปุ่ม Search53", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT095 : (Tap Menu Level 1) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search45", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
});

When("คลิกปุ่ม Search54", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT096 : (Tap Menu Level 1) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด10", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit18", { timeout: 300000 }, async () => {
  await page.getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name5", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('Test');
});

When("คลิกปุ่ม Save31", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//P_MGT097 : (Tap Menu Level 1) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด11", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit19", { timeout: 300000 }, async () => {
  await page.getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name6", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('Test1');
});

When("คลิกปุ่ม Cancel6", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm17", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT098 : (Tap Menu Level 1) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด12", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete5", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel7", { timeout: 300000 }, async () => {
  await page.locator('#button_cancel_alert').click();
});

//P_MGT099 : (Tap Menu Level 1) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด13", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('cell', { name: 'more' }).locator('a');
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete6", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT100 : (Tap Menu Level 1) ทดสอบ Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT6", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Accounting Test' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit20", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูลที่ต้องการแก้ไข2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test11');
});

When("คลิกปุ่ม Save32", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT101 : (Tap Menu Level 1) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT7", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Accounting Test' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit21", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("ลบค่าในช่อง Module Name2", { timeout: 300000 }, async () => {
  await page.getByLabel('close-circle').locator('svg').click();
});

When("ลบค่าในช่อง Menu Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('');
});

When("ลบค่าในช่อง Display Name2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('');
});

When("ลบค่าในช่อง Path2", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('');
});

When("คลิกปุ่ม Save33", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT102 : (Tap Menu Level 1) ทดสอบ Edit โดยแก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT8", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Accounting Test' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit22", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นในระบบ", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_name').first().fill('Test2');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_name').fill('Test2');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_path').fill('Test2');
});

When("คลิกปุ่ม Save34", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT103 : (Tap Menu Level 1) ทดสอบ Edit โดยแก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบแต่เปลี่ยน Module เป็น Module อื่น//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT9", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Accounting Test' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit23", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นในระบบ2", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^Accounting$/ }).nth(1).click();
  await page.getByText('Favorite').click();
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_name').first().fill('TestDe');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_name').fill('TestDe1');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_path').fill('TestDe1');
});

When("คลิกปุ่ม Save35", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT104 : (Tap Menu Level 1) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT10", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 70 5 TestDe TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit24", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image4", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด3", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save36", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT105 : (Tap Menu Level 1) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT11", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 70 5 TestDe TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit25", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image5", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
});

When("คลิกปุ่ม Save37", { timeout: 300000 }, async () => {
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT106 : (Tap Menu Level 1) ทดสอบเพิ่มข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอกเมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Edit//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)34",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText("Menu Level 1").click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit3",{ timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Favorite TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Edit').click();
});

When("คลิกปุ่ม Set Config7",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("คลิกปุ่ม Save38",{ timeout: 300000 },async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'close' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT107 : (Tap Menu Level 1) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)35",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText("Menu Level 1").click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit4",{ timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Favorite TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Edit').click();
});

When("คลิกปุ่ม Set Config8",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company6",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-select > .ant-select-selector').click();
  await page.waitForTimeout(1000);
  await page.getByTitle('d1', { exact: true }).click();
});

When("กรอก Display Name5",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'TestDe1' }).fill('TestDe1');
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
});

//P_MGT108 : (Tap Menu Level 1) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search46",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('CompTest01');
});

When("คลิกปุ่ม Search55",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT109 : (Tap Menu Level 1)  ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search47",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test1');
});

When("คลิกปุ่ม Search56",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT110 : (Tap Menu Level 1) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด14",{ timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 TestDe1 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});
When("คลิกปุ่ม Edit26",{ timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name7",{ timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'TestDe1' }).fill('TestDe11');
});

When("คลิกปุ่ม Save39",{ timeout: 300000 },async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

//P_MGT111 : (Tap Menu Level 1) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด15",{ timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 TestDe11 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit27",{ timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name8",{ timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'TestDe1' }).click();
});

When("คลิกปุ่ม Cancel8",{ timeout: 300000 },async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm21",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT112 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด16",{ timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 TestDe11 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete7",{ timeout: 300000 },async () => {
  await page.getByText('Delete').click()
}); 

When("คลิกปุ่ม Cancel9",{ timeout: 300000 },async () => {
  await page.locator('#button_cancel_alert').click();
});

//P_MGT113 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด17",{ timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 TestDe11 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete8",{ timeout: 300000 },async () => {
  await page.getByText('Delete').click()
}); 

When("คลิกปุ่ม Confirm22",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT114 : (Tap Menu Level 1) ทดสอบดู Mode View//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)36",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View2",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Favorite TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('View').click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
});

//P_MGT115 : (Tap Menu Level 1) ทดสอบยกเลิกลบข้อมูล//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)37",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete5",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Favorite TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Cancel10",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT116 : (Tap Menu Level 1) ทดสอบลบข้อมูล//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)38",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete6",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 72 6 Favorite TestDe' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Confirm23",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT117 : (Tap Menu Level 1) ทดสอบลบข้อมูล ที่มี Menu Lv2 ผูกอยู่//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 1)39",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete7",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('TestDe');
  await page.getByRole('button', { name: 'search Search' }).click();
  const row = page.getByRole('row', { name: /TestDe/i });
  const moreIcon = row.getByRole('cell', { name: 'more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Confirm24",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT118 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Module ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search48",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('HR Unity');
});

When("คลิกปุ่ม Search57",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT119 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Menu Level 1 ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)2",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search49",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Unity1');
});


When("คลิกปุ่ม Search58",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT120 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Menu Level 2 ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)3",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search50",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test1');
});


When("คลิกปุ่ม Search59",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT121 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)4",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search51",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test1');
});


When("คลิกปุ่ม Search60",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});


//P_MGT122 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Path ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)5",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search52",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test1');
});


When("คลิกปุ่ม Search61",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT123 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)6",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search53",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('10/12/2025');
});

When("คลิกปุ่ม Search62",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT124 : (Tap Menu Level 2) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)7",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search54",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('ฟหกหฟกหฟกฟหก');
});

When("คลิกปุ่ม Search63",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT125 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหา//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)8",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search55",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('HR Unity');
});

When("คลิกปุ่ม Search64",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกปุ่ม Clear3",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT126 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Module//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)9",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Module6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search56",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_module');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('HR Unity');
});

When("คลิกปุ่ม Search65",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_module').click();
});

//P_MGT127 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Module//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)10",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search57",{ timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Search..' }).fill('HR Unity');
});

When("คลิกปุ่ม Search66", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_module').click();
});

When("คลิกปุ่ม Reset10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search67", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_module').click();
});

//P_MGT128 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu Level 1//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)11",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Menu Level 1_2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search58",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_level_one');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Unity1');
});

When("คลิกปุ่ม Search68", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_level_one').click();
});

//P_MGT129 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์  Menu Level 1//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)12",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา8", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search59",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_level_one');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Unity1');
});

When("คลิกปุ่ม Search69", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_level_one').click();
});

When("คลิกปุ่ม Reset11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search70", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_level_one').click();
});

//P_MGT130 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu Level 2//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)13",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Menu Level 2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search60",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search71", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT131 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์  Menu Level 2//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)14",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search61",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search72", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกปุ่ม Reset12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search73", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT132 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)15",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Display Name6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search62",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search74", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

//P_MGT133 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)16",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search63",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search75", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

When("คลิกปุ่ม Reset13", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search76", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

//P_MGT134 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Path//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)17",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Path6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search64",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search77", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

//P_MGT135 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Path//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)18",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา11", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search65",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search78", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

When("คลิกปุ่ม Reset14", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search79", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

//P_MGT136 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)19",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Create Date6", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(5).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search66",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('10/12/2025');
});

When("คลิกปุ่ม Search80", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

//P_MGT137 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)20",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหา12", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(5).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search67",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('10/12/2025');
});

When("คลิกปุ่ม Search81", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

When("คลิกปุ่ม Reset15", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(5).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search82", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
});

//P_MGT138 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)21",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});
When("คลิกไอคอนค้นหาคอลัมน์ Module7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search68",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_module');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('HR Unity');
});

When("คลิกปุ่ม Search83",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_module').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Menu Level 1_3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search69",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_level_one');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Unity1');
});

When("คลิกปุ่ม Search84", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_level_one').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Menu Level 2_2", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search70",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search85", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search71",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_display_name');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search86", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_display_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Path7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search72",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_path');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('Test1');
});

When("คลิกปุ่ม Search87", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_path').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create Date7", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(5).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search73",{ timeout: 300000 },async () => {
  const searchBox = page.locator('#input_text_input_search_column_menu_created_date');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.fill('10/12/2025');
});

When("คลิกปุ่ม Search88", { timeout: 300000 }, async () => {
  await page.locator('#button_search_column_menu_created_date').click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// P_MGT139 : (Tap Menu Level 2) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text (Module , Menu LV.1, Menu LV.2, Display Name , Path)//
When("กดปุ่ม Sort ข้อมูล5",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Module search' }).click();
  await page.getByRole('button', { name: 'Menu LV.1 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.1 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.1 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.2 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.2 search' }).click();
  await page.getByRole('button', { name: 'Menu LV.2 search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
  await page.getByRole('button', { name: 'Path search' }).click();
});

// P_MGT140 : (Tap Menu Level 2) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่ (Create Date)//
When("กดปุ่ม Sort ข้อมูล6",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
});

// P_MGT141 : (Tap Menu Level 2) ทดสอบการเลือก Filter Select All//
When("กดปุ่ม Filter เลือกดู Select All3",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

// P_MGT142 : (Tap Menu Level 2) ทดสอบการเลือก Filter ดูทีละคอลัมน์//
When("กดปุ่ม Filter เลือกดูทีละรายการ3",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Module' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Menu LV.2' }).check();
  await page.getByRole('checkbox', { name: 'Module' }).uncheck();
  await page.getByRole('checkbox', { name: 'Path' }).check();
  await page.getByRole('checkbox', { name: 'Menu LV.2' }).uncheck();
  await page.getByRole('checkbox', { name: 'icon' }).check();
  await page.getByRole('checkbox', { name: 'Path' }).uncheck();
  await page.getByRole('checkbox', { name: 'Menu LV.1' }).check();
  await page.getByRole('checkbox', { name: 'icon' }).uncheck();
  await page.getByRole('checkbox', { name: 'Display Name' }).check();
  await page.getByRole('checkbox', { name: 'Menu LV.1' }).uncheck();
  await page.getByRole('checkbox', { name: 'Create Date' }).check();
  await page.getByRole('checkbox', { name: 'Display Name' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

// Scenario: P_MGT143 : (Tap Menu Level 2) ทดสอบ Drag and drop ลำดับ//
// When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)22",{ timeout: 300000 },async () => {
//   await page.getByRole("tab", { name: "Permission MGT" }).click();
// });

// When("คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ4",{ timeout: 300000 },async () => {
// });
// Scenario: P_MGT144 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลแล้ว Drag and drop ลำดับ//
// When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)23",{ timeout: 300000 },async () => {
//   await page.getByRole("tab", { name: "Permission MGT" }).click();
// });
// When("ค้นหาข้อมูลแล้วคลิกปุ่ม Search",{ timeout: 300000 },async () => {
// });
// When("คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ5",{ timeout: 300000 },async () => {
// });

//P_MGT145 : (Tap Menu Level 2) ทดสอบแก้ไขลำดับตัวเลข//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)24",{ timeout: 300000 },async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit28",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับ3",{ timeout: 300000 },async () => {
  await page.getByRole('row', { name: 'holder 1 1 HR Unity Unity1' }).locator('#input_text_').fill('99');
});

When("คลิกปุ่ม Save40",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// P_MGT146 : (Tap Menu Level 2) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)25", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit29", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับ3", { timeout: 300000 }, async () => {
  await page.getByRole('row', { name: 'holder 1 1 Human Resource' }).locator('#input_text_').click();
  await page.getByRole('row', { name: 'holder 1 1 Human Resource' }).locator('#input_text_').fill('99');
  await page.getByRole('row', { name: 'holder 2 2 Human Resource' }).locator('#input_text_').click();
  await page.getByRole('row', { name: 'holder 2 2 Human Resource' }).locator('#input_text_').fill('98');
});

When("คลิกปุ่ม Save41", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT147 : (Tap Menu Level 2) ทดสอบกรอกเลขลำดับซ้ำกัน//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)26", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit30", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน3", { timeout: 300000 }, async () => {
  await page.getByRole('row', { name: 'holder 1 1 Human Resource' }).locator('#input_text_').click();
  await page.getByRole('row', { name: 'holder 1 1 Human Resource' }).locator('#input_text_').fill('99');
  await page.getByRole('row', { name: 'holder 2 2 Human Resource' }).locator('#input_text_').click();
  await page.getByRole('row', { name: 'holder 2 2 Human Resource' }).locator('#input_text_').fill('99');
});

When("คลิกปุ่ม Save42", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT148 : (Tap Menu Level 2) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)27", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
});

When("คลิกปุ่ม Edit31", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("คลิก Tab Module3", { timeout: 300000 }, async () => {
  await page.getByText('Menu Level 1').click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT149 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลทั้งหมด//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)28", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add18", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Module Name4", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('Accounting').click();
});

When("เลือก Menu Level 1", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('global_config').click();
});

When("กรอก Menu Name6", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test2');
});

When("กรอก Display Name \\(Default)9", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test2');
});

When("กรอก Path9", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test2');
});

When("เลือก Icon7", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_1.svg' }).check();
});

When("คลิกปุ่ม Set Config \\(Company Label Configuration)3", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company7", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-select > .ant-select-selector').click();
  await page.getByTitle('CompTest01').click();
});

When("กรอก Display Name6", { timeout: 300000 }, async () => {
  await page.getByRole('textbox', { name: 'Test2' }).fill('Test2');
});

When("คลิกปุ่ม Save \\(Modal Set Config)3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

When("กรอก Academy Link \\(Card Academy Content)3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').nth(1).fill('tttspaceship.com');
});

When("คลิกปุ่ม Save43", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT150 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลเฉพาะ Card Menu LV.2//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)29", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add19", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Module Name5", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('.ant-select-selector').first().click();
  await page.waitForTimeout(1000);
  await page.getByText('Accounting').click();
});

When("เลือก Menu Level 1_2", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('global_config').click();
});

When("กรอก Menu Name7", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test3');
});

When("กรอก Display Name \\(Default)10", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test3');
});

When("กรอก Path10", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test3');
});

When("เลือก Icon8", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_1.svg' }).check();
});

When("คลิกปุ่ม Save44", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm26", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

//P_MGT151 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลเฉพาะ Card Module และทำการอัปโหลด Icon เอง//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)30", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add20", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Module Name6", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('Accounting').click();
});

When("เลือก Menu Level 1_3", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('global_config').click();
});

When("กรอก Menu Name8", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test4');
});

When("กรอก Display Name \\(Default)11", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('Test4');
});

When("กรอก Path11", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('Test4');
});

When("เลือก Upload Image6", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("อัปโหลด Icon2", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save45", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm27", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT152 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)31", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add21", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("อัปโหลด Icon ที่มีขนาดเกิน 5 MB3", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT153 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)32", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add22", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Save46", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT154 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)33", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add23", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Menu Name ที่ซ้ำกับระบบ2", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('Accounting').click();
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('global_config').click();
  await page.locator('#input_text_module_name').first().click();
  await page.locator('#input_text_module_name').first().fill('Test4');
  await page.locator('#input_text_display_name').click(); 
  await page.locator('#input_text_display_name').fill('Test4');
  await page.locator('#input_text_module_path').click();
  await page.locator('#input_text_module_path').fill('Test4');
});

When("คลิกปุ่ม Save47", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT155 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ โดยเพิ่มอีก Menu LV.1//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)34", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add24", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Menu Name ที่ซ้ำกับระบบ3", { timeout: 300000 }, async () => {
  await page.locator('.ant-select-selector').first().click();
  await page.getByText('Accounting').click();
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.getByText('withholding').click();
  await page.locator('#input_text_module_name').first().click();
  await page.locator('#input_text_module_name').first().fill('Test4');
  await page.locator('#input_text_display_name').click();
  await page.locator('#input_text_display_name').fill('Test4');
  await page.locator('#input_text_module_path').click();
  await page.locator('#input_text_module_path').fill('Test4');
});

When("คลิกปุ่ม Save48", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT156 : (Tap Menu Level 2) ทำการเลือก Menu Lv.1  ก่อนเลือก Module ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)35", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add25", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Menu Level 1_4", { timeout: 300000 }, async () => {
  await page.locator('div:nth-child(2) > div > .ant-select > .ant-select-selector').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT157 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)36", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add26", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Set Config9", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("คลิกปุ่ม Save49", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#root').getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT158 : (Tap Menu Level 2) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Add//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)37", { timeout: 300000 }, async () => {
  await page.getByRole("tab", { name: "Permission MGT" }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกปุ่ม Add27", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Set Config10", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company8", { timeout: 300000 }, async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-select > .ant-select-selector').click();
  await page.getByText('d1', { exact: true }).click();
});

When("กรอก Display Name7", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('tt');
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

// P_MGT159 : (Tap Menu Level 2) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search74", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('d1');
});

When("คลิกปุ่ม Search89", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

// P_MGT160 : (Tap Menu Level 2) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search75", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('tt');
});

When("คลิกปุ่ม Search90", { timeout: 300000 }, async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

// P_MGT161 : (Tap Menu Level 2) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด18", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 tt more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit32", { timeout: 300000 }, async () => {
  await page.getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name9", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('ttt');
});

When("คลิกปุ่ม Save50", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

// P_MGT162 : (Tap Menu Level 2) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด19", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 ttt more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit33", { timeout: 300000 }, async () => {
  await page.getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name10", { timeout: 300000 }, async () => {
  await page.getByRole('dialog').locator('#input_text_display_name').fill('ttt');
});

When("คลิกปุ่ม Cancel11", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm28", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT163 : (Tap Menu Level 2) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด20", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 ttt more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete9", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel12", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#button_cancel_alert').click();
});

// P_MGT164 : (Tap Menu Level 2) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Add//
When("คลิกไอคอนจุด3จุด21", { timeout: 300000 }, async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 ttt more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete10", { timeout: 300000 }, async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm29", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT165 : (Tap Menu Level 2) ทดสอบ Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT12", { timeout: 300000 }, async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 67 5 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit34", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูลที่ต้องการแก้ไข3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test22');
  await page.locator('#input_text_display_name').fill('Test22');
  await page.locator('#input_text_module_path').fill('Test22');
});

When("คลิกปุ่ม Save51", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT166 : (Tap Menu Level 2) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT13", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit35", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("ลบค่าในช่อง Module Name3", { timeout: 300000 }, async () => {
  await page.locator('svg').nth(3).click();
});

When("ลบค่าในช่อง Menu Name3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('');
});

When("ลบค่าในช่อง Display Name3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_display_name').fill('');
});

When("ลบค่าในช่อง Path3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_path').fill('');
});

When("คลิกปุ่ม Save52", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000)
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT167 : (Tap Menu Level 2) ทดสอบ Edit โดยแก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT14", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit36", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นในระบบ3", { timeout: 300000 }, async () => {
  await page.locator('#input_text_module_name').first().fill('Test4');
  await page.locator('#input_text_display_name').fill('Test4');
  await page.locator('#input_text_module_path').fill('Test4');
});

When("คลิกปุ่ม Save53", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
});

When("คลิกปุ่ม Confirm30", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000) 
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000)
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT168 : (Tap Menu Level 2) ทดสอบ Edit ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ โดยเพิ่มอีก Menu LV.1//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT15", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 67 5 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit37", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("กรอก Menu Name ที่ซ้ำกับระบบ4", { timeout: 300000 }, async () => {
  await page.locator('div').filter({ hasText: /^global_config$/ }).nth(1).click();
  await page.getByText('dashboard').click();
  await page.locator('#input_text_module_name').first().fill('Test4');
  await page.locator('#input_text_display_name').fill('Test4');
  await page.locator('#input_text_module_path').fill('Test4');
});

When("คลิกปุ่ม Save54", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000) 
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT169 : (Tap Menu Level 2) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT16", { timeout: 300000 }, async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit38", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image7", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด5", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save55", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm31", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000) 
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT170 : (Tap Menu Level 2) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT17", { timeout: 300000 }, async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit39", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image8", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด6", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
});

When("คลิกปุ่ม Save56", { timeout: 300000 }, async () => {
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT171 : (Tap Menu Level 2) ทดสอบเพิ่มข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Edit//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)38", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit5", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  const moreIcon = page.getByRole('row', { name: 'holder 67 5 Accounting' }).locator('a')
  await moreIcon.hover(); 
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Edit').click();
});

When("คลิกปุ่ม Set Config11", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("คลิกปุ่ม Save57", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await page.locator('#button_close_alert').click();
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT172 : (Tap Menu Level 2) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)39", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit6", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'holder 67 5 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Edit').click();
});

When("คลิกปุ่ม Set Config12", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Set Config' }).click();
});

When("เลือก Company9", { timeout: 300000 },async () => {
  await page.locator('.ant-col.ant-col-xs-24.ant-col-sm-24 > div > .ant-select > .ant-select-selector').click();
  await page.getByText('d1', { exact: true }).click();
});

When("กรอก Display Name8", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Test4' }).fill('Test4');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

// P_MGT173 : (Tap Menu Level 2) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search76", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('d1');
});

When("คลิกปุ่ม Search91", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
});

// P_MGT174 : (Tap Menu Level 2) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit//
When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search77", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test4');
});

When("คลิกปุ่ม Search92", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// P_MGT175 : (Tap Menu Level 2) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด22", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 Test4 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit40", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name11", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Test4' }).fill('Test44');
});

When("คลิกปุ่ม Save58", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
});

// P_MGT176 : (Tap Menu Level 2) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด23", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 Test44 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit41", { timeout: 300000 },async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูล Display Name12", { timeout: 300000 },async () => {
  await page.getByRole('textbox', { name: 'Test4' }).fill('Test43');
});

When("คลิกปุ่ม Cancel13", { timeout: 300000 },async () => {
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
});

When("คลิกปุ่ม Confirm32", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT177 : (Tap Menu Level 2) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด24", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 Test44 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete11", { timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel14", { timeout: 300000 },async () => {
  await page.locator('#button_cancel_alert').click();
});

// P_MGT178 : (Tap Menu Level 2) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุด25", { timeout: 300000 },async () => {
  const moreIcon = page.getByRole('row', { name: 'd1 Test44 more' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Delete12", { timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm33", { timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT179 : (Tap Menu Level 2) ทดสอบดู Mode View//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)40", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();

});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View3", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('View').click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
});

// P_MGT180 : (Tap Menu Level 2) ทดสอบยกเลิกลบข้อมูล//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)41", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete8", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Cancel15", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT181 : (Tap Menu Level 2) ทดสอบลบข้อมูล//
When("เข้าสู่เมนู Permission MGT \\(Menu Level 2)42", { timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Menu Level 2').click();
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete9", { timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 68 6 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
  await page.getByRole('menu').getByText('Delete').click();
});

When("คลิกปุ่ม Confirm34", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT182 : (Tap Feature) ทดสอบค้นหาข้อมูล Menu ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.getByText('Feature', { exact: true }).click();
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search78",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('HR Unity');
});

When("คลิกปุ่ม Search93",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT183 : (Tap Feature) ทดสอบค้นหาข้อมูล Type ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )2",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search79",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Advanced');
});

When("คลิกปุ่ม Search94",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT184 : (Tap Feature) ทดสอบค้นหาข้อมูล feature ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )3",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search80",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test1');
});

When("คลิกปุ่ม Search95",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT185 : (Tap Feature) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )4",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search81",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('Test1');
});

When("คลิกปุ่ม Search96",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT186 : (Tap Feature) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )5",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search82",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('09/12/2025');
});

When("คลิกปุ่ม Search97",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT187 : (Tap Feature) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )6",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search83",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('ฟหกหฟกฟกหฟก');
});

When("คลิกปุ่ม Search98",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

//P_MGT188 : (Tap Feature) ทดสอบรีเซ็ตการค้นหา//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )7",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search84",{ timeout: 300000 },async () => {
  await page.locator('#input_text_account_table_search_input').fill('ฟหกหฟกฟกหฟก');
});

When("คลิกปุ่ม Search99",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search Search' }).click();
});

When("คลิกปุ่ม Clear4",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT189 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )8",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Menu",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search85",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_menu_name').fill('HR Unity');
});

When("คลิกปุ่ม Search100",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT190 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Menu//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )9",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Menu2",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search86",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_input_search_column_menu_name').fill('HR Unity');
});

When("คลิกปุ่ม Search101",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกปุ่ม Reset16",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search102",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

//P_MGT191 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Type//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )10",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Type",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search87",{ timeout: 300000 },async () => {
  await page.getByRole('searchbox', { name: 'Search...' }).fill('Advanced');
});

When("เลือก Checkbox Type",{ timeout: 300000 },async () => {
  await page.getByRole('checkbox', { name: 'Select Advanced' }).click();
});

When("คลิกปุ่ม Search103",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_type').click();
});

//P_MGT192 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาและ Checkbox ในช่อง Search คอลัมน์ Type//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )11",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Type2",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search88",{ timeout: 300000 },async () => {
  await page.getByRole('searchbox', { name: 'Search...' }).fill('Advanced');
});

When("เลือก Checkbox Type2",{ timeout: 300000 },async () => {
  await page.getByRole('checkbox', { name: 'Select Advanced' }).click();
});

When("คลิกปุ่ม Search104",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_type').click();
});

When("คลิกปุ่ม Reset17",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search105",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_type').click();
});

//P_MGT193 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ feature//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )12",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Feature",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search89",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_name').fill('Test1');
});

When("คลิกปุ่ม Search106",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_name').click();
});

//P_MGT194 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ feature//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )13",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Feature2",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search90",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_name').fill('Test1');
});

When("คลิกปุ่ม Search107",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_name').click();
});

When("คลิกปุ่ม Reset18",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search108",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_name').click();
});

//P_MGT195 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )14",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name8",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search91",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_display_name').fill('Test1');
});

When("คลิกปุ่ม Search109",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_display_name').click();
});

//P_MGT196 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )15",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name9",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search92",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_display_name').fill('Test1');
});

When("คลิกปุ่ม Search110",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_display_name').click();
});

When("คลิกปุ่ม Reset19",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search111",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_display_name').click();
});

//P_MGT197 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )16",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create date8",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search93",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_create_date').fill('09/12/2025');
});

When("คลิกปุ่ม Search112",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_create_date').click();
});

//P_MGT198 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )17",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create date9",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();

});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search94",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_create_date').fill('09/12/2025');
});

When("คลิกปุ่ม Search113",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_create_date').click();
});

When("คลิกปุ่ม Reset20",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});

When("คลิกปุ่ม Search114",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_create_date').click();
});

//P_MGT199 : (Tap Feature) (Tap Feature) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )18",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Menu3",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search95",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_menu_name').fill('HR Unity');
});

When("คลิกปุ่ม Search115",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_menu_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Type3",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter', exact: true }).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search96",{ timeout: 300000 },async () => {
  await page.getByRole('searchbox', { name: 'Search...' }).fill('Advanced');
});

When("คลิกปุ่ม Search116",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_type').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Feature3",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search' }).nth(4).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search97",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_name').fill('Test1');
});

When("คลิกปุ่ม Search117",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Display Name10",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(2).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search98",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_display_name').fill('Test1');
});

When("คลิกปุ่ม Search118",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_display_name').click();
});

When("คลิกไอคอนค้นหาคอลัมน์ Create Date10",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'search', exact: true }).nth(3).click();
});

When("กรอกข้อมูลที่ต้องการค้นหาในช่อง Search99",{ timeout: 300000 },async () => {
  await page.locator('#input_text_input_search_column_feature_create_date').fill('09/12/2025');
});

When("คลิกปุ่ม Search119",{ timeout: 300000 },async () => {
  await page.locator('#button_search_column_feature_create_date').click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT200 : (Tab Feature ) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text (Module , Type , Feature, Display Name)//
When("กดปุ่ม Sort ข้อมูล7",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Menu search' }).click();
  await page.getByRole('button', { name: 'Menu search' }).click();
  await page.getByRole('button', { name: 'Menu search' }).click();
  await page.getByRole('button', { name: 'Type filter' }).click();
  await page.getByRole('button', { name: 'Type filter' }).click();
  await page.getByRole('button', { name: 'Type filter' }).click();
  await page.getByRole('button', { name: 'Feature search' }).click();
  await page.getByRole('button', { name: 'Feature search' }).click();
  await page.getByRole('button', { name: 'Feature search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
  await page.getByRole('button', { name: 'Display Name search' }).click();
});

//P_MGT201 : (Tab Feature ) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่ (Create Date)//
When("กดปุ่ม Sort ข้อมูล8",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'Create Date search' }).click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

//P_MGT202 : (Tab Feature ) ทดสอบการเลือก Filter Select All//
When("กดปุ่ม Filter เลือกดู Select All4",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
});


//P_MGT203 : (Tab Feature ) ทดสอบการเลือก Filter ดูทีละคอลัมน์//
When("กดปุ่ม Filter เลือกดูทีละรายการ4",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'filter Filter' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).uncheck();
  await page.getByRole('checkbox', { name: 'Menu' }).check();
  await page.getByRole('checkbox', { name: 'No.' }).uncheck();
  await page.getByRole('checkbox', { name: 'Feature' }).check();
  await page.getByRole('checkbox', { name: 'Menu' }).uncheck();
  await page.getByRole('checkbox', { name: 'Create Date' }).check();
  await page.getByRole('checkbox', { name: 'Feature' }).uncheck();
  await page.getByRole('checkbox', { name: 'icon' }).check();
  await page.getByRole('checkbox', { name: 'Create Date' }).uncheck();
  await page.getByRole('checkbox', { name: 'Type' }).check();
  await page.getByRole('checkbox', { name: 'icon' }).uncheck();
  await page.getByRole('checkbox', { name: 'Display Name' }).check();
  await page.getByRole('checkbox', { name: 'Type' }).uncheck();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('button', { name: 'filter Filter' }).click();
});

// P_MGT204 : (Tab Feature ) ทดสอบ Drag and drop ลำดับ//
// When("เข้าสู่เมนู Permission MGT \\(Tab Feature )19",{ timeout: 300000 },async () => {
//   await page.getByRole('tab', { name: 'Permission MGT' }).click();
// });
// When("คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ6",{ timeout: 300000 },async () => {
  
// });
// P_MGT205 : (Tab Feature ) ทดสอบค้นหาข้อมูลแล้ว Drag and drop ลำดับ//
// When("เข้าสู่เมนู Permission MGT \\(Tab Feature )20",{ timeout: 300000 },async () => {
//   await page.getByRole('tab', { name: 'Permission MGT' }).click();
// });
// When("ค้นหาข้อมูลแล้วคลิกปุ่ม Seach2",{ timeout: 300000 },async () => {
  
// });
// When("คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ7",{ timeout: 300000 },async () => {
  
// });

// P_MGT206 : (Tap Feature) ทดสอบแก้ไขลำดับตัวเลข//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )21",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit42",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับ4",{ timeout: 300000 },async () => {
  await page.getByRole('row', { name: 'holder 1 1 HR Unity Advanced' }).locator('#input_text_').fill('99');
});

When("คลิกปุ่ม Save59",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// P_MGT207 : (Tap Feature) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )22",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit43",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับ4",{ timeout: 300000 },async () => {
  await page.getByRole('row', { name: 'holder 1 1 Customize' }).locator('#input_text_').fill('99');
  await page.getByRole('row', { name: 'holder 2 2' }).locator('#input_text_').fill('98');
});

When("คลิกปุ่ม Save60",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT208 : (Tap Feature) ทดสอบกรอกเลขลำดับซ้ำกัน//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )23",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Edit44",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});

When("ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน4",{ timeout: 300000 },async () => {
  await page.getByRole('row', { name: 'holder 1 1 Customize' }).locator('#input_text_').fill('99');
  await page.getByRole('row', { name: 'holder 2 2' }).locator('#input_text_').fill('99');
});

When("คลิกปุ่ม Save61",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// P_MGT209 : (Tab Feature ) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )24",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});
When("คลิกปุ่ม Edit45",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'edit Edit' }).click();
});
When("คลิก Tab Module4",{ timeout: 300000 },async () => {
  await page.getByText('Menu Level 2').click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
});

// P_MGT210 : (Tap Feature) ทดสอบ Add ข้อมูลทั้งหมด//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )25",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add28",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Select Menu",{ timeout: 300000 },async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Accounting').click();
});

When("กรอก Feature Name",{ timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').fill('Test2');
});

When("เลือก Feature Type",{ timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Advanced' }).check();
});

When("กรอก Display Name9",{ timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('Test2');
});

When("เลือก Icon9",{ timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'default_menu_icon_1.svg' }).check();
});

When("คลิกปุ่ม Save62",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm35",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT211 : (Tap Feature) ทดสอบ Add ข้อมูล และ ทำการอัปโหลด Icon เอง//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )26",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add29",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Select Menu2",{ timeout: 300000 },async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Accounting').click();
});

When("กรอก Feature Name2",{ timeout: 300000 },async () => {
  await page.locator('#input_text_module_name').fill('Test3');  
});

When("เลือก Feature Type2",{ timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Advanced' }).check();
});

When("กรอก Display Name10",{ timeout: 300000 },async () => {
  await page.locator('#input_text_display_name').fill('Test3');
});

When("เลือก Upload Image9",{ timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด7",{ timeout: 300000 },async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save63",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm36",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT212 : (Tap Feature) (Tap Feature) ทดสอบ Add ข้อมูล และ ทำการอัปโหลด Icon เองโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )27",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add30",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("เลือก Upload Image10",{ timeout: 300000 },async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด8",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT213 : (Tap Feature) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )28",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add31",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("คลิกปุ่ม Save64",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT214 : (Tap Feature) ทดสอบ Add ข้อมูลโดยกรอก Feature Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )29",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
});

When("คลิกปุ่ม Add32",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'plus Add' }).click();
});

When("กรอก Feature Name3",{ timeout: 300000 },async () => {
  await page.locator('.ant-select-selector').click();
  await page.getByText('Accounting').click();
  await page.locator('#input_text_module_name').fill('Test3');
  await page.locator('#input_text_display_name').fill('Test3'); 
});

When("คลิกปุ่ม Save65",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT215 : (Tap Feature) ทดสอบ Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT18",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit46", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขข้อมูลที่ต้องการแก้ไข4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_name').fill('Test22');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_name').fill('Test22');
});

When("คลิกปุ่ม Save66", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT216 : (Tap Feature) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT19",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit47", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("ลบค่าในช่อง Select Menu", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByLabel('close-circle').locator('svg').click();
});
When("ลบค่าในช่อง Feature Name", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_name').fill('');
});
When("ลบค่าในช่อง Display Name4", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_name').fill('');
});

When("คลิกปุ่ม Save67", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT217 : (Tap Feature) ทดสอบ Edit โดยแก้ไขให้ Feature Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT20",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click(); 
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit48", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("แก้ไขให้ Feature Name , Display Name ซ้ำกับข้อมูลอื่นในระบบ", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.locator('#input_text_module_name').fill('Test1');
  await page.waitForTimeout(1000);
  await page.locator('#input_text_display_name').fill('Test1');
});

When("คลิกปุ่ม Save68", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm37", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

// P_MGT218 : (Tap Feature) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT21",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();   
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit49", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image11", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด9", { timeout: 300000 }, async () => {
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/test01.png'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save69", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
});

When("คลิกปุ่ม Confirm38", { timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
});

// P_MGT219 : (Tap Feature) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit//
When("คลิกไอคอนจุด3จุดคอลัมน์ MGT22",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click(); 
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกปุ่ม Edit50", { timeout: 300000 }, async () => {
  await page.getByRole('menu').getByText('Edit').click();
});

When("เลือก Upload Image12", { timeout: 300000 }, async () => {
  await page.getByRole('radio', { name: 'Upload Image' }).check();
});

When("เลือกรูปภาพเพื่ออัปโหลด10", { timeout: 300000 }, async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Upload Image' }).check();
  await page.waitForTimeout(1000);
  const fileUploaderSelector = 'input[type="file"]'; 
  await page.waitForTimeout(1000);
  const filePath = 'img/5MB.jpg'; 
  await page.waitForTimeout(1000);
  await page.setInputFiles(fileUploaderSelector, filePath);
});

When("คลิกปุ่ม Save70", { timeout: 300000 }, async () => {
  await page.locator('#button_close_alert').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#button_close_alert').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT220 : (Tap Feature) ทดสอบดู Mode View//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )30",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View4",{ timeout: 300000 },async () => {
  await page.getByText('View', { exact: true }).click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Close', exact: true }).click();
});

//P_MGT221 : (Tap Feature) ทดสอบยกเลิกลบข้อมูล//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )31",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete10",{ timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Cancel16",{ timeout: 300000 },async () => {
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//P_MGT222 : (Tap Feature) ทดสอบลบข้อมูล//
When("เข้าสู่เมนู Permission MGT \\(Tab Feature )32",{ timeout: 300000 },async () => {
  await page.getByRole('tab', { name: 'Permission MGT' }).click();
  await page.locator('#input_text_account_table_search_input').fill('Test');
  await page.getByRole('button', { name: 'search Search' }).click();
  const moreIcon = page.getByRole('row', { name: 'holder 39 3 Accounting' }).locator('a')
  await moreIcon.hover();
  await page.getByRole('menu').waitFor({ state: 'visible' });
});

When("คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete11",{ timeout: 300000 },async () => {
  await page.getByText('Delete').click();
});

When("คลิกปุ่ม Confirm39",{ timeout: 300000 },async () => {
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'delete Clear' }).click();
}); 