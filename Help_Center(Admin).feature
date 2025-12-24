Feature: Help_Center_Admin

  Scenario: PM_HC00 : ทดสอบการเข้าสู่เว็บไซต์
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5001/SignIn"
    When กรอก Username "#username"
    When กรอก Password "#password"
    When คลิกปุ่ม Login "Sign in"

  Scenario: PM_HC01 : ทดสอบการเข้าถึงหน้า Help Center (Admin)
    When คลิก OEM Komatsu
    When คลิกที่เมนู Ticket Management Center
    When คลิกที่เมนู Project Management
    When คลิกเมนู Help Center (Admin)

  Scenario: PM_HC02 : ทดสอบการเข้าการสนทนาของ Super Admin
    When คลิก OEM Komatsu2
    When คลิกที่เมนู Ticket Management Center2
    When คลิกที่เมนู Project Management2
    When คลิกเมนู Help Center (Admin)2

  Scenario: PM_HC03 : ทดสอบการเข้าการสนทนาของ Iimplementer
    When คลิก OEM Komatsu3
    When คลิกที่เมนู Ticket Management Center3
    When คลิกที่เมนู Project Management3
    When คลิกเมนู Help Center (Admin)3

  Scenario: PM_HC04 : ทดสอบการเข้าการสนทนาของ Tester
    When คลิก OEM Komatsu4
    When คลิกที่เมนู Ticket Management Center4
    When คลิกที่เมนู Project Management4
    When คลิกเมนู Help Center (Admin)4

  Scenario: PM_HC05 : ทดสอบการแสดลผลของ Path
    When คลิก OEM Komatsu5
    When คลิกที่เมนู Ticket Management Center5
    When คลิกที่เมนู Project Management5
    When คลิกเมนู Help Center (Admin)5

  Scenario: PM_HC06 : ทดสอบการแสดง Tab โครงการ, ช่อง Search, ช่อง Date, ช่อง Type Of Chat, ช่อง Ticket Status, ปุ่ม Search, ปุ่ม Clear, แสดงรายการ Chat ทั้งหมดตาม Tab โครงการ
    When คลิกเมนู Help Center (Admin)6

  Scenario: PM_HC07 : ทดสอบการคลิกเลือก Tab โครงการ 1 รายการ
    When คลิก Tab โครงการ

  Scenario: PM_HC08 : ทดสอบการเลือก Dropdown list ของ Tab โครงการ กรณีที่ Tab โครงการมีเยอะ
    When นำเมาส์ไปชี้/คลิก icon 3 จุด
    When คลิก Tab โครงการ2

  Scenario: PM_HC09 : ทดสอบการค้นหาด้วยชื่อที่แสดงในรายการ Chat
    When กรอกข้อมูลค้นหา
    When คลิกปุ่ม Search ของหน้า admin

  Scenario: PM_HC10 : ทดสอบการค้นหาด้วยชื่อที่ไม่แสดงในรายการ Chat
    When กรอกข้อมูลค้นหา2
    When คลิกปุ่ม Search2 ของหน้า admin

  Scenario: PM_HC11 : ทดสอบการค้นหาด้วย Date Picker
    When เลือก Start date - End date
    When คลิกปุ่ม Search3 ของหน้า admin

  Scenario: PM_HC12 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat
    When เลือกรายการ Type Of Chat
    When คลิกปุ่ม Search4 ของหน้า admin

  Scenario: PM_HC13 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Type Of Chat เลือก 2 รายการ
    When เลือกรายการ Type Of Chat2
    When คลิกปุ่ม Search5 ของหน้า admin

  Scenario: PM_HC14 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status
    When เลือกรายการ Ticket Status
    When คลิกปุ่ม Search6 ของหน้า admin

  Scenario: PM_HC15 : ทดสอบการค้นหาด้วย Dropdown list ช่อง Ticket Status เลือก 3 รายการ
    When เลือกรายการ Ticket Status2
    When คลิกปุ่ม Search7 ของหน้า admin

  Scenario: PM_HC16 : ทดสอบการกดปุ่ม Clear เมื่อกรอกข้อมูลทุกช่อง
    When กรอกข้อมูลช่อง Seach, Date, Type Of Chat, Ticket Status
    When คลิกปุ่ม Clear

  Scenario: PM_HC17 : ทดสอบการกดปุ่ม Clear เมื่อกรอกข้อมูลทุกช่อง
    When กรอกข้อมูลช่อง Seach, Date, Type Of Chat, Ticket Status2
    When คลิกปุ่ม Search8 ของหน้า admin
    When คลิกปุ่ม Clear2

  Scenario: PM_HC18 : ทดสอบการกดคลิกรายการ Chat
    When กรอกข้อมูลค้นหา3
    When คลิกปุ่ม Search9 ของหน้า admin
    When คลิกรายการ Chat

  Scenario: PM_HC19 : ทดสอบการแสดงผล tooltip
    When กรอกข้อมูลค้นหา4
    When คลิกปุ่ม Search10 ของหน้า admin
    When คลิกรายการ Chat2
    When นำ cursor ไปที่ Icon +

  Scenario: PM_HC20 : ทดสอบการส่งข้อความผ่านช่อง Message
    When กรอกข้อมูลค้นหา5
    When คลิกปุ่ม Search11 ของหน้า admin
    When คลิกรายการ Chat3
    When กรอกข้อความในช่อง Type your message…
    When คลิกปุ่ม icon ส่งข้อความหริอกด Enter

  Scenario: PM_HC21 : ทดสอบการส่งไฟล์ผ่าน icon +
    When คลิกรายการ Chat4
    When คลิก icon + เพื่อแนบไฟล์
    When คลิกปุ่ม icon ส่งข้อความหริอกด Enter2

  Scenario: PM_HC22 : ทดสอบการส่งข้อความ + ส่งไฟล์ พร้อมกัน
    When คลิกรายการ Chat5
    When กรอกข้อความในช่อง Type your message…2
    When คลิก icon + เพื่อแนบไฟล์2
    When คลิกปุ่ม icon ส่งข้อความหริอกด Enter3

  Scenario: PM_HC23 : ทดสอบการคลิกปุ่ม + Add Ticket
    When คลิกรายการ Chat6
    When คลิกปุ่ม + Add Ticket

  Scenario: PM_HC24 : ทดสอบการแสดงผล Type of Ticket ของ Add Ticket
    When คลิกรายการ Chat7
    When คลิกปุ่ม + Add Ticket2
    When คลิกปุ่ม Type of Ticket

  Scenario: PM_HC25 : ทดสอบ Dropdown Severity กรณี ยังไม่เลือก  Type of Ticket
    When คลิกรายการ Chat8
    When คลิกปุ่ม + Add Ticket3
    When คลิกปุ่ม Severity

  Scenario: PM_HC26 : ทดสอบการกรอกข้อมูล, เลือก Date แบบเลือกวัน 1,2,3 เลือก Dropdown list และอัปโหลดไฟล์ในหน้า Add Ticket ให้ครบทุกช่อง
    When คลิกรายการ Chat9
    When คลิกปุ่ม + Add Ticket4
    When กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!

  Scenario: PM_HC27 : ทดสอบการกรอกข้อมูล, เลือก Date เลือกวันที่ Dropdown list และอัปโหลดไฟล์ในหน้า Add Ticket ให้ครบทุกช่อง
    When คลิกรายการ Chat10
    When คลิกปุ่ม + Add Ticket5
    When กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!2

  Scenario: PM_HC28 : ทดสอบการลบไฟล์หลังจากเพิ่มไฟล์
    When คลิกรายการ Chat11
    When คลิกปุ่ม + Add Ticket6
    When Drop File here!
    When ลบไฟล์

  Scenario: PM_HC29 : ทดสอบการกดคลิกปุ่ม Save หน้า Add Ticket
    When คลิกรายการ Chat12
    When คลิกปุ่ม + Add Ticket7
    When กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!3
    When คลิกปุ่ม Save

  Scenario: PM_HC30 : ทดสอบการกดคลิกปุ่ม Cancel หน้าการแจ้งเตือน
    When คลิกปุ่ม Cancel

  Scenario: PM_HC31 : ทดสอบการกดคลิกปุ่ม Cancel หน้า Add Ticket
    When คลิกปุ่ม Cancel2

  Scenario: PM_HC32 : ทดสอบการไม่กรอกข้อมูลหน้า Add Ticket
    When คลิกปุ่ม + Add Ticket8
    When คลิกปุ่ม Save2

  Scenario: PM_HC33 : ทดสอบการกรอกข้อมูลแค่ช่อง Ticket Name หน้า Add Ticket
    When คลิกปุ่ม + Add Ticket9
    When กรอกข้อมูล Ticket Name
    When คลิกปุ่ม Save3

  Scenario: PM_HC34 : ททดสอบการเลือก Dropdown list แค่ช่อง Type of Ticket, Severity หน้า Add Ticket
    When เลือก พบโปรแกรม Error (Bug)
    When เลือก Critical
    When คลิกปุ่ม Save4

  Scenario: PM_HC35 : ทดสอบการกรอกข้อมูลแค่ช่อง Description หน้า Add Ticket
    When กรอกข้อมูล Description
    When คลิกปุ่ม Save5

  Scenario: PM_HC36 : ทดสอบการคลิก Checkbox ช่อง Chat กรณี + Add Ticket
    When คลิกรายการ Chat13
    When กดคลิก Checkbox ทั้งข้อความและไฟล์
    When คลิกปุ่ม + Add Ticket10

  Scenario: PM_HC37 : ทดสอบการคลิก Checkbox ช่อง Chat กรณี Add Comment
    When คลิกรายการ Chat14
    When กดคลิก Checkbox ทั้งข้อความและไฟล์2
    When คลิกปุ่ม Add Comment

  Scenario: PM_HC38 : ทดสอบการสร้าง Ticket โดยกดคลิกปุ่ม Confirm หน้า Add Ticket
    When คลิกรายการ Chat15
    When คลิกปุ่ม + Add Ticket11
    When กรอกข้อมูลช่อง Ticket Name, Type of Ticket, Severity, Start Date, Notified Time, Assign To, Description, Drop File here!4
    When คลิกปุ่ม Save6
    When คลิกปุ่ม Confirm

  Scenario: PM_HC39 : ทดสอบการคลิกปุ่ม Add Comment
    When คลิกรายการ Chat16
    When คลิกปุ่ม Add Comment2

  Scenario: PM_HC40 : ทดสอบการกรอกข้อมูลและ Upload ไฟล์ ช่อง Comment และ Upload หน้า Add Comment
    When กรอกข้อมูล Comment
    When Upload ไฟล์
    When คลิกปุ่ม Save7

  Scenario: PM_HC41 : ทดสอบการกดคลิกปุ่ม Cancel หน้าการแจ้งเตือน
    When คลิกปุ่ม Cancel3

  Scenario: PM_HC42 : ทดสอบการไม่กรอกข้อมูลหน้า Add Comment
    When คลิกปุ่ม Add Comment3
    When คลิกปุ่ม Save8

  Scenario: PM_HC43 : ทดสอบการกดคลิกปุ่ม Confirm หน้าการแจ้งเตือน หน้า Add Comment
    When กรอกข้อมูล Comment2
    When คลิกปุ่ม Save9
    When คลิกปุ่ม Confirm2
  # # Scenario: PM_HC44 : ทดสอบได้รับข้อความตอบกลับและตอบกลับข้อความ
  # #   When คลิกเมนู Help Center (Admin)
  # #   When กด Notification
  # #   When กดเลือก ข้อความที่แจ้งเตือน
  # #   When ส่งข้อความ ให้ User

  Scenario: PM_HC45 : ทดสอบสิ้นสุดการสนทนา
    When กดปุ่มสิ้นสุดการสนทนา
  # # Scenario: PM_HC46 : ทดสอบการ ลูกค้าแจ้งปัญหาเข้ามาครั้งแรก
  # #   When คลิกเมนู Help Center
  # #   When ส่งข้อความแจ้งปัญหา

  Scenario: PM_HC47 : ทดสอบการแสดงผล Ticket Status กรณี สร้าง Ticket
    When คลิก Chat แล้วกด + Add Ticket

  Scenario: PM_HC48 : ทดสอบการแสดงผล Ticket Status กรณีกด Ticket ได้รับการ Reopen (1) จาก Admin
    When เข้าแชทที่ได้รับ Ticket Status : Processing

  Scenario: PM_HC49 : ทดสอบการแสดงผล Ticket Status กรณีกด Close Ticket
    When เข้าแชทที่ได้รับ Ticket Status : Success

  Scenario: PM_HC50 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  แก้ไขอีกครั้ง
    When เข้าแชทที่ได้รับ Ticket Status : Reopen

  Scenario: PM_HC51 : ทดสอบการแสดงผล Ticket Status กรณี  Ticket  เสร็จสิ้น
    When เข้าแชทที่ได้รับ Ticket Status : Success2
  # # Scenario: PM_HC52 : ทดสอบกรณีไม่กดเสร็จสิ้นหรือแก้ไขอีกครั้งภายใน 7 วัน
  # #   When คลิกเมนู Help Center (Admin)13
  # #   When เข้าแชทที่ได้รับ Ticket Status : Success4
