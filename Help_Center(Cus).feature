Feature: Help_Center_Admin

  Scenario: PM_HC_C00 : ทดสอบการเข้าสู่เว็บไซต์
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5001/SignIn"
    When กรอก Username "#username"
    When กรอก Password "#password"
    When คลิกปุ่ม Login "Sign in"

  Scenario: PM_HC_C01 : ทดสอบการแสดง Tip คู่มือใช้งาน
    When คลิกเมนู Help Center

  Scenario: PM_HC_C02 : ทดสอบการค้นหาข้อมูลโดยใช้ทุกการค้นหา
    When กรอกข้อมูลค้นหา Search
    When เลือกข้อมูลช่วงวันที่ ใน Date
    When เลือกข้อมูล Product
    When เลือกข้อมูล Type of Chat
    When เลือกข้อมูล Ticket Status
    When คลิกปุ่ม Search

  Scenario: PM_HC_C03 : ทดสอบการค้นหาข้อมูลที่ไม่มีอยู่
    When กรอกข้อมูลค้นหา Search2
    When คลิกปุ่ม Search2

  Scenario: PM_HC_C04 : ทดสอบการค้นหา Search
    When กรอกข้อมูลค้นหา Search3
    When คลิกปุ่ม Search3

  Scenario: PM_HC_C05 : ทดสอบการค้นหา Date
    When เลือกข้อมูลช่วงวันที่ ใน Date2
    When คลิกปุ่ม Search4

  Scenario: PM_HC_C06 : ทดสอบการค้นหา Product
    When เลือกข้อมูล Product2
    When คลิกปุ่ม Search5

  Scenario: PM_HC_C07 : ทดสอบการค้นหา Type of Chat
    When เลือกข้อมูล Type of Chat2
    When คลิกปุ่ม Search6

  Scenario: PM_HC_C08 : ทดสอบการค้นหา Ticket Status
    When เลือกข้อมูล Ticket Status2
    When คลิกปุ่ม Search7

  Scenario: PM_HC_C09 : ทดสอบการค้นหาข้อมูลในช่อง Search กรณ๊พิมพ์ไม่ครบ
    When กรอกข้อมูลค้นหา Search4
    When คลิกปุ่ม Search8

  Scenario: PM_HC_C10 : ทดสอบการค้นหาข้อมูลในช่อง Search กรณ๊เว้นวรรคก่อนพิมพ์ข้อความ
    When กรอกข้อมูลค้นหา Search5
    When คลิกปุ่ม Search9

  Scenario: PM_HC_C11 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Product เลือกหลายรายการ
    When เลือกข้อมูล Product3
    When คลิกปุ่ม Search10

  Scenario: PM_HC_C12 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat เลือกที่ละหลายการ
    When เลือกรายการ Type Of Chat : แจ้งปัญหาการใช้งาน
    When คลิกปุ่ม Search11
    When ลบหลายการ Type Of Chat : แจ้งปัญหาการใช้งาน
    When เลือกรายการ Type Of Chat : สอบถามการใช้งาน
    When คลิกปุ่ม Search12
    When ลบหลายการ Type Of Chat : สอบถามการใช้งาน

  Scenario: PM_HC_C13 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat เลือกหลายรายการ
    When เลือกรายการ Type Of Chat
    When คลิกปุ่ม Search13

  Scenario: PM_HC_C14 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status เลือกที่ละหลายรายการ
    When เลือกรายการ Ticket Status : Processing
    When คลิกปุ่ม Search14
    When ลบหลายการ Ticket Status : Processing
    When เลือกรายการ Ticket Status : Reopen
    When คลิกปุ่ม Search15
    When ลบหลายการ Ticket Status : Reopen
    When เลือกรายการ Ticket Status : Success
    When คลิกปุ่ม Search16
    When ลบหลายการ Ticket Status : Success

  Scenario: PM_HC_C15 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status เลือกหลายรายการ
    When เลือกรายการ Ticket Status
    When คลิกปุ่ม Search17

  Scenario: PM_HC_C16 : ทดสอบการกดปุ่ม Clear เมื่อข้อมูล
    When กรอกข้อมูลค้นหา Search6
    When เลือกข้อมูลช่วงวันที่ ใน Date3
    When เลือกข้อมูล Product4
    When เลือกข้อมูล Type of Chat3
    When เลือกข้อมูล Ticket Status3
    When คลิกปุ่ม Search18
    When คลิกปุ่ม Clear

  Scenario: PM_HC_C17 : ทดสอบการกดปุ่ม Clear เมื่อไม่มีข้อมูล
    When คลิกปุ่ม Clear2

  Scenario: PM_HC_C18 : ทดสอบปุ่ม New Chat
    When คลิกปุ่ม New Chat

  Scenario: PM_HC_C19 : ทดสอบการเลือกโครงการ  และเลือกหัวข้อแนะนำ'แจ้งปัญหาการใช้งาน' และ พิมพ์ข้อความและส่งไฟ ใน New Chat
    When คลิกปุ่ม New Chat2
    When เลือกโครงการ
    When เลือกโครงการ 'แจ้งปัญหาการใช้งาน'
    When กรอกข้อความช่อง Type your message
    When เลือกไฟล์

  Scenario: PM_HC_C20 : ทดสอบการเลือกโครงการ  และเลือกหัวข้อแนะนำ'สอบถามการใช้งาน'  และ พิมพ์ข้อความและส่งไฟล์ ใน New Chat
    When คลิกปุ่ม New Chat3
    When เลือกโครงการ2
    When เลือกโครงการ 'สอบถามการใช้งาน'
    When กรอกข้อความช่อง Type your message2
    When เลือกไฟล์2

  Scenario: PM_HC_C21 : ทดสอบพิมพ์ข้อความและส่งไฟล์ ใน New Chat กรณียังไม่ได้เลือกโครงการและหัวข้อแนะนำ
    When คลิกปุ่ม New Chat4
    When กดช่อง Type your message
    When เลือกไฟล์3

  Scenario: PM_HC_C22 : ทดสอบพิมพ์ส่งไฟล์ ใน New Chat กรณีส่งหลายไฟล์
    When คลิกปุ่ม New Chat5
    When เลือกโครงการ3
    When เลือกโครงการ 'แจ้งปัญหาการใช้งาน'2
    When เลือกไฟล์ 2 ไฟล์

  Scenario: PM_HC_C23 : ทดสอบการส่งไฟล์ขนาด 100 MB  ใน New Chat
    When คลิกปุ่ม New Chat6
    When เลือกโครงการ4
    When เลือกโครงการ 'แจ้งปัญหาการใช้งาน'3
    When เลือกไฟล์ขนาด 100 MB

  Scenario: PM_HC_C24 : ทดสอบการเลือก Chat
    When เลือกข้อมูล Product5
    When คลิกปุ่ม Search19
    When เลือกแชทที่ต้องการมา

  Scenario: PM_HC_C25 : ทดสอบพิมพ์ข้อความและส่งไฟล์ ใน Chat
    When เลือกแชทที่ต้องการมา2
    When กรอกข้อความช่อง Type your message3
    When เลือกไฟล์4
    When ส่งข้อความ

  Scenario: PM_HC_C26 : ทดสอบพิมพ์ส่งไฟล์ ใน Chat กรณีส่งหลายไฟล์
    When เลือกแชทที่ต้องการมา3
    When เลือกไฟล์ 2 ไฟล์2
    When ส่งข้อความ2

  Scenario: PM_HC_C27 : ทดสอบการส่งไฟล์ขนาด 100 MB ใน Chat
    When เลือกแชทที่ต้องการมา4
    When เลือกไฟล์ขนาด 100 MB2
    When ส่งข้อความ3
  # # Scenario: PM_HC_C28 : ทดสอบได้รับข้อความตอบกลับ
  # #   When คลิกเมนู Help Center2
  # #   When กด Notification
  # #   When กดเลือก ข้อความที่แจ้งเตือน

  Scenario: PM_HC_C29 : ทดสอบสิ้นสุดการสนทนา
    When กดปุ่มสิ้นสุดการสนทนา

  Scenario: PM_HC_C30 : ทดสอบการแสดงผล Ticket Status กรณี ได้รับ Ticket
    When เข้าแชทที่ได้รับ Ticket

  Scenario: PM_HC_C31 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  ได้รับการ Reopen(1) จาก Admin
    When เข้าแชทที่ได้รับ Ticket Status : Processing

  Scenario: PM_HC_C32 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket ได้รับการ Close
    When เข้าแชทที่ได้รับ Ticket Status : Success

  Scenario: PM_HC_C33 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  แก้ไขอีกครั้ง
    When เข้าแชทที่ได้รับ Ticket Status : Reopen
    When กดปุ่มแก้ไขอีกครั้ง

  Scenario: PM_HC_C34 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  เสร็จสิ้น
    When เข้าแชทที่ได้รับ Ticket Status : Success2
    When กดปุ่มดสร็จสิ้น
  # Scenario: PM_HC_C35 : ทดสอบกรณีไม่กดเสร็จสิ้นหรือแก้ไขอีกครั้งภายใน 7 วัน
  #   When เข้าแชทที่ได้รับ Ticket Status : Success3

  Scenario: PM_HC_C36 : ทดสอบสิ้นสุดการสนทนา กรณ๊ ได้รับ Ticket
    When กดปุ่มสิ้นสุดการสนทนา2

  Scenario: PM_HC_C37 : ทดสอบสิ้นสุดการสนทนา กรณี  Ticket ได้รับการ Close
    When กดปุ่มสิ้นสุดการสนทนา3

  Scenario: PM_HC_C38 : ทดสอบสิ้นสุดการสนทนา กรณ๊ ได้รับ Ticket Ticket  แก้ไขอีกครั้ง
    When กดปุ่มสิ้นสุดการสนทนา4

  Scenario: PM_HC_C39 : ทดสอบสิ้นสุดการสนทนา กรณ๊ ได้รับ Ticket  กรณี  Ticket  เสร็จสิ้น
    When กดปุ่มสิ้นสุดการสนทนา5
