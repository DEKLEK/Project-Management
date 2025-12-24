Feature: Ticket_Monitoring

  Scenario: TM_000 : ทดสอบการเข้าสู่เว็บไซต์
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5001/SignIn"
    When กรอก Username "#username"
    When กรอก Password "#password"
    When คลิกปุ่ม Login "Sign in"

  Scenario: TM_001 : ทดสอบปุ่ม Search
    When เข้าสู่ระบบ Ticket Monitoring
    When เลือกข้อมูล Product Code
    When กดปุ่ม Search ของหน้า Ticket

  Scenario: TM_002 : ทดสอบปุ่ม Clear
    When เลือกข้อมูล Product Code2
    When กดปุ่ม Search2 ของหน้า Ticket
    When กดปุ่ม Clear

  Scenario: TM_003 : ทดสอบ Dropdown ของ Product Code ให้แสดงชื่อและรหัส Product
    When กดช่องข้อมูล Product Code

  Scenario: TM_004 : ทดสอบ Dropdown ตำแหน่ง Super Admin แสดง Product ทั้งหมด
    When เข้าสู่ระบบ Ticket Monitoring2
    When กดช่องข้อมูล Product Code2

  Scenario: TM_005 : ทดสอบ Dropdown ตำแหน่ง Tester Coordinator
    When เข้าสู่ระบบ Ticket Monitoring3
    # When กดช่องข้อมูล Product Code3

  Scenario: TM_006 : ทดสอบ Dropdown ตำแหน่ง Implementer
    When เข้าสู่ระบบ Ticket Monitoring4
  #   When กดช่องข้อมูล Product Code4

  Scenario: TM_007 : ทดสอบ Date Range Picker
    When กดเลือกวันที่ที่ต้องการ
    When กดปุ่ม Search3 ของหน้า Ticket

  Scenario: TM_008 : ทดสอบการเข้าถึงหน้าจอของตำแหน่ง Super Admin
    When เข้าสู่ระบบ Ticket Monitoring5

  Scenario: TM_009 : ทดสอบการเข้าถึงหน้าจอของตำแหน่ง Tester Coordintor
    When เข้าสู่ระบบ Ticket Monitoring6

  Scenario: TM_010 : ทดสอบการเข้าถึงหน้าจอของตำแหน่ง Implementer
    When เข้าสู่ระบบ Ticket Monitoring7

  Scenario: TM_011 : ทดสอบแสดงผล Path Ticket Management Center
    When เข้าสู่ระบบ Ticket Monitoring8

  Scenario: TM_012 : ทดสอบการแสดงผล Severity กรณีมี Product เดี่ยว
    When เลือกข้อมูล Product Code3
    When กดปุ่ม Search4 ของหน้า Ticket

  Scenario: TM_013 : ทดสอบเลือกดูข้อมูลในกราฟ
    When เลือกข้อมูล Product Code4
    When กดปุ่ม Search5 ของหน้า Ticket
    When เลือกปิดข้อมูลที่ไม่ต้องการดูในกราฟ ของ Severity Dashborad

  Scenario: TM_014 : ทดสอบ All Product ของ Severity Dashborad
    When เลือกข้อมูล Product Code5
    When กดปุ่ม Search6 ของหน้า Ticket
    When กดปุ่ม All Product ของ Severity Dashborad

  Scenario: TM_015 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Severity Dashborad กรณ๊ไม่มีหน้าต่อไป
    When เลือกข้อมูล Product Code6
    When กดปุ่ม Search7 ของหน้า Ticket
    When กดปุ่ม All Product ของ Severity Dashborad2
    When กดปุ่ม Previous Page
    When กดปุ่ม Next Page

  Scenario: TM_016 : ทดสอบเลือก หน้า / page ใน Severity Dashborad
    When เลือกข้อมูล Product Code7
    When กดปุ่ม Search8 ของหน้า Ticket
    When กดปุ่ม All Product ของ Severity Dashborad3
    When เลือก 20 page
    When เลือก 50 page
    When เลือก 100 page
    When เลือก 10 page

  Scenario: TM_017 : ทดสอบการแสดงผล Severity กรณีมี หลาย Product
    When เลือกข้อมูล Product Code8
    When กดปุ่ม Search9 ของหน้า Ticket

  Scenario: TM_018 : ทดสอบปุ่ม All Product ของ Severity Dashboard
    When เลือกข้อมูล Product Code9
    When กดปุ่ม Search10 ของหน้า Ticket
    When กดปุ่ม All Product ของ Severity Dashboard3

  Scenario: TM_019 : ทดสอบเลือกดูข้อมูลในกราฟ
    When เลือกข้อมูล Product Code10
    When กดปุ่ม Search11 ของหน้า Ticket
    When กดปุ่ม All Product ของ Severity Dashboard4
    When เลือกปิดข้อมูลที่ไม่ต้องการดูในกราฟ ของ Severity Dashboard

  Scenario: TM_020 : ทดสอบการแสดงผล Type Ticket Dashboard
    When เลือกข้อมูล Product Code11
    When กดปุ่ม Search12 ของหน้า Ticket

  Scenario: TM_021 : ทดสอบการแสดงผล All Product ของ Type Ticket Dashboard
    When เลือกข้อมูล Product Code12
    When กดปุ่ม Search13 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard

  Scenario: TM_022 : ทดสอบ Filter ของ All Product ของ Type Ticket Dashboard กรณี Select All
    When เลือกข้อมูล Product Code13
    When กดปุ่ม Search14 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard2
    When กดปุ่ม Filter

  Scenario: TM_023 : ทดสอบ Filter ของ All Product ของ Type Ticket Dashboard กรณี ไม่เลือกเลย
    When เลือกข้อมูล Product Code14
    When กดปุ่ม Search15 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard3
    When กดปุ่ม Filter2
    When กดปุ่ม Select All (เพื่อยกเลิกรายการที่เลือก)

  Scenario: TM_024 : ทดสอบ Filter ของ All Product ของ Type Ticket Dashboard กรณี เลือกดูที่ละรายการ
    When เลือกข้อมูล Product Code15
    When กดปุ่ม Search16 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard4
    When กดปุ่ม Filter3
    When กดดูทีละรายการทั้งหมด

  Scenario: TM_025 : ทดสอบปุ่ม Sort acending, Sort descending, cancel sorting ของตารางใน Type Ticket Dashboard
    When เลือกข้อมูล Product Code16
    When กดปุ่ม Search17 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard5
    When กดปุ่ม Sort acending ของตาราง Type Ticket Dashboard
    When กดปุ่ม Sort descending ของตาราง Type Ticket Dashboard
    When กดปุ่ม cancel sorting ของตาราง Type Ticket Dashboard

  Scenario: TM_026 : ทดสอบ Search ของ Product No. ใน Type Ticket Dashboard
    When เลือกข้อมูล Product Code17
    When กดปุ่ม Search18 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard6
    When กด icon แว่นขยาย
    When กรอกข้อมูลในช่อง Search ของ Product No.
    When กดปุ่ม search ของหน้า Ticket

  Scenario: TM_027 : ทดสอบ Reset ของ Product No. ใน Type Ticket Dashboard
    When เลือกข้อมูล Product Code18
    When กดปุ่ม Search19 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard7
    When กด icon แว่นขยาย2
    When กรอกข้อมูลในช่อง Search ของ Product No.2
    When กดปุ่ม search2 ของหน้า Ticket
    When กดปุ่ม Reset

  Scenario: TM_028 : ทดสอบ Close ของ Product No. ใน Type Ticket Dashboard
    When เลือกข้อมูล Product Code19
    When กดปุ่ม Search20 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard8
    When กด icon แว่นขยาย3
    When กดปุ่ม Close ของ Product No.

  Scenario: TM_029 : ทดสอบ Search ของ Product No. ใน Type Ticket Dashboard กรณีกด space bar ค่อยค้นหาข้อมูล
    When เลือกข้อมูล Product Code20
    When กดปุ่ม Search21 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard9
    When กด icon แว่นขยาย4
    When กด space แล้ว กรอกข้อมูลในช่อง Search ของ Product No.
    When กดปุ่ม search3 ของหน้า Ticket

  Scenario: TM_030 : ทดสอบ Search ของ Product No. ใน Type Ticket Dashboard กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When เลือกข้อมูล Product Code21
    When กดปุ่ม Search22 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard10
    When กด icon แว่นขยาย5
    When กรอกข้อมูลในช่อง Search ของ Product No.3
    When กดปุ่ม search4 ของหน้า Ticket

  Scenario: TM_031 : ทดสอบการเลือกหน้า ใน Type Ticket Dashboard
    When กดเลือกวันที่ที่ต้องการ2
    When กดปุ่ม Search23 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard11
    When เลือกหน้าที่ต้องการ

  Scenario: TM_032 : ทดสอบปุ่ม Next Page และ Previous Page ใน Type Ticket Dashboard
    When กดเลือกวันที่ที่ต้องการ3
    When กดปุ่ม Search24 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard12
    When กดปุ่ม Next Page2
    When กดปุ่ม Previous Page2

  Scenario: TM_033 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Type Ticket Dashboard
    When กดเลือกวันที่ที่ต้องการ4
    When กดปุ่ม Search25 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard13
    When กดปุ่ม Next 3 Page
    When กดปุ่ม Previous 3 Page

  Scenario: TM_034 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Type Ticket Dashboard กรณีไม่มีหน้าต่อไป
    When เลือกข้อมูล Product Code22
    When กดปุ่ม Search26 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard14
    When กดปุ่ม Previous Page3
    When กดปุ่ม Next Page3

  Scenario: TM_035 : ทดสอบเลือก หน้า / page ใน Type Ticket Dashboard
    When เลือกข้อมูล Product Code23
    When กดปุ่ม Search27 ของหน้า Ticket
    When กดปุ่ม All Product ของ Type Ticket Dashboard15
    When เลือก 20 page2
    When เลือก 50 page2
    When เลือก 100 page2
    When เลือก 10 page2

  Scenario: TM_036 : ทดสอบการแสดงผล Remain All Ticket
    When กดปุ่ม Search28 ของหน้า Ticket

  Scenario: TM_037 : ทดสอบการแสดงผล All Product ของ Remain All Ticket
    When กดปุ่ม Search29 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket

  Scenario: TM_038 : ทดสอบปุ่ม Sort acending,  Sort descending, cancel sorting ของตารางใน Remain All Ticket
    When กดปุ่ม Search30 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket2
    When กดปุ่ม Sort acending ของตาราง Remain All Ticket
    When กดปุ่ม Sort descending ของตาราง Remain All Ticket
    When กดปุ่ม cancel sorting ของตาราง Remain All Ticket

  Scenario: TM_039 : ทดสอบ Search ของ Product No. ใน Remain All Ticket
    When กดปุ่ม Search31 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket3
    When กด icon แว่นขยาย6
    When กรอกข้อมูลในช่อง Search ของ Product No.4
    When กดปุ่ม search5 ของหน้า Ticket

  Scenario: TM_040 : ทดสอบ Reset ของ Product No. ใน Remain All Ticket
    When กดปุ่ม Search32 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket4
    When กด icon แว่นขยาย7
    When กรอกข้อมูลในช่อง Search ของ Product No.5
    When กดปุ่ม search6 ของหน้า Ticket
    When กดปุ่ม Reset2

  Scenario: TM_041 : ทดสอบ Close ของ Product No. ใน Remain All Ticket
    When กดปุ่ม Search33 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket5
    When กด icon แว่นขยาย8
    When กดปุ่ม Close ของ Product No.2

  Scenario: TM_042 : ทดสอบ Search ของ Product No. ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search34 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket6
    When กด icon แว่นขยาย9
    When กด space แล้ว กรอกข้อมูลในช่อง Search ของ Product No.2
    When กดปุ่ม search7 ของหน้า Ticket

  Scenario: TM_043 : ทดสอบ Search ของ Product No. ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search35 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket7
    When กด icon แว่นขยาย10
    When กรอกข้อมูลในช่อง Search ของ Product No.6
    When กดปุ่ม search8 ของหน้า Ticket

  Scenario: TM_044 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket
    When กดปุ่ม Search36 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket8
    When กด icon แว่นขยาย11
    When กรอกข้อมูลในช่อง Search ของ Remain Ticket
    When กดปุ่ม search9 ของหน้า Ticket

  Scenario: TM_045 : ทดสอบ Reset ของ Remain Ticket ใน Remain All Ticket
    When กดปุ่ม Search37 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket9
    When กด icon แว่นขยาย12
    When กรอกข้อมูลในช่อง Search ของ Remain Ticket2
    When กดปุ่ม search10 ของหน้า Ticket
    When กดปุ่ม Reset3

  Scenario: TM_046 : ทดสอบ Close ของ Remain Ticket ใน Remain All Ticket
    When กดปุ่ม Search38 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket10
    When กด icon แว่นขยาย13
    When กดปุ่ม Close ของ Remain Ticket

  Scenario: TM_047 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search39 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket11
    When กด icon แว่นขยาย14
    When กรอกข้อมูลในช่อง Search ของ Remain Ticket3
    When กดปุ่ม search11 ของหน้า Ticket

  Scenario: TM_048 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search40 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket12
    When กด icon แว่นขยาย15
    When กรอกข้อมูลในช่อง Search ของ Remain Ticket4
    When กดปุ่ม search12 ของหน้า Ticket

  Scenario: TM_049 : ทดสอบ Search ของ Remain Ticket ใน Remain All Ticket กรณีไม่พิมพ์ตัวเลข
    When กดปุ่ม Search41 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket13
    When กด icon แว่นขยาย16
    When กรอกข้อมูลในช่อง Search ของ Remain Ticket5
    When กดปุ่ม search13 ของหน้า Ticket

  Scenario: TM_050 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket
    When กดปุ่ม Search42 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket14
    When กด icon แว่นขยาย17
    When กรอกข้อมูลในช่อง Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA)
    When กดปุ่ม search14 ของหน้า Ticket

  Scenario: TM_051 : ทดสอบ Reset ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket
    When กดปุ่ม Search43 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket15
    When กด icon แว่นขยาย18
    When กรอกข้อมูลในช่อง Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA)2
    When กดปุ่ม search15 ของหน้า Ticket
    When กดปุ่ม Reset4

  Scenario: TM_052 : ทดสอบ Close ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket
    When กดปุ่ม Search44 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket16
    When กด icon แว่นขยาย19
    When กดปุ่ม Close ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA)

  Scenario: TM_053 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search45 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket17
    When กด icon แว่นขยาย20
    When กด space แล้ว กรอกข้อมูลในช่อง Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA)
    When กดปุ่ม search16 ของหน้า Ticket

  Scenario: TM_054 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search46 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket18
    When กด icon แว่นขยาย21
    When กรอกข้อมูลในช่อง Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA)3
    When กดปุ่ม search17 ของหน้า Ticket

  Scenario: TM_055 : ทดสอบ Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Remain All Ticket กรณีไม่พิมพ์ตัวเลข
    When กดปุ่ม Search47 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket19
    When กด icon แว่นขยาย22
    When กรอกข้อมูลในช่อง Search ของ Fail (กำลังดำเนินการเรียบร้อย ไม่ผ่าน SLA)4
    When กดปุ่ม search18 ของหน้า Ticket

  Scenario: TM_056 : ทดสอบ Search ของ In progress ใน Remain All Ticket
    When กดปุ่ม Search48 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket20
    When กด icon แว่นขยาย23
    When กรอกข้อมูลในช่อง Search ของ In progress
    When กดปุ่ม search19 ของหน้า Ticket

  Scenario: TM_057 : ทดสอบ Reset ของ In progress ใน Remain All Ticket
    When กดปุ่ม Search49 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket21
    When กด icon แว่นขยาย24
    When กรอกข้อมูลในช่อง Search ของ In progress2
    When กดปุ่ม search20 ของหน้า Ticket
    When กดปุ่ม Reset5

  Scenario: TM_058 : ทดสอบ Close ของ In progress ใน Remain All Ticket
    When กดปุ่ม Search50 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket22
    When กด icon แว่นขยาย25
    When กดปุ่ม Close ของ In progress

  Scenario: TM_059 : ทดสอบ Search ของ In progress ใน Remain All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search51 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket23
    When กด icon แว่นขยาย26
    When กรอกข้อมูลในช่อง Search ของ In progress3
    When กดปุ่ม search21 ของหน้า Ticket

  Scenario: TM_060 : ทดสอบ Search ของ In progress ใน Remain All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search52 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket24
    When กด icon แว่นขยาย27
    When กรอกข้อมูลในช่อง Search ของ In progress4
    When กดปุ่ม search22 ของหน้า Ticket

  Scenario: TM_061 : ทดสอบ Search ของ In progress ใน Remain All Ticket กรณีไม่พิมพ์ตัวเลข
    When กดปุ่ม Search53 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket25
    When กด icon แว่นขยาย28
    When กรอกข้อมูลในช่อง Search ของ In progress5
    When กดปุ่ม search23 ของหน้า Ticket

  Scenario: TM_062 : ทดสอบการเลือกหน้า ใน Remain All Ticket
    When กดเลือกวันที่ที่ต้องการ5
    When กดปุ่ม Search54 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket26
    When กดเลือกหน้าที่ต้องการ2

  Scenario: TM_063 : ทดสอบปุ่ม Next Page และ Previous Page ใน Remain All Ticket
    When กดเลือกวันที่ที่ต้องการ6
    When กดปุ่ม Search55 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket27
    When กดปุ่ม Next Page4
    When กดปุ่ม Previous Page4

  Scenario: TM_064 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Remain All Ticket
    When กดเลือกวันที่ที่ต้องการ7
    When กดปุ่ม Search56 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket28
    When กดปุ่ม Next 3 Page2
    When กดปุ่ม Previous 3 Page2

  Scenario: TM_065 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Remain All Ticket กรณ๊ไม่มีหน้าต่อไป
    When เลือกข้อมูล Product Code24
    When กดปุ่ม Search57 ของหน้า Ticket
    When กดปุ่ม All Product ของ ของ Remain All Ticket29
    When กดปุ่ม Previous Page5
    When กดปุ่ม Next Page5

  Scenario: TM_066 : ทดสอบเลือก หน้า / page ใน Remain All Ticket
    When เลือกข้อมูล Product Code25
    When กดปุ่ม Search58 ของหน้า Ticket
    When กดปุ่ม All Product ของ Remain All Ticket30
    When เลือก 20 page3
    When เลือก 50 page3
    When เลือก 100 page3
    When เลือก 10 page3

  Scenario: TM_067 : ทดสอบการแสดงผล Complete All Ticket
    When กดปุ่ม Search59 ของหน้า Ticket

  Scenario: TM_068 : ทดสอบการแสดงผล All Product ของ Complete All Ticket
    When กดปุ่ม Search60 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket

  Scenario: TM_069 : ทดสอบปุ่ม Sort acending, Sort descending, cancel sorting ของตารางใน Complete All Ticket
    When กดปุ่ม Search61 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket2
    When กดปุ่ม Sort acending ของตาราง Complete All Ticket
    When กดปุ่ม Sort descending ของตาราง Complete All Ticket
    When กดปุ่ม cancel sorting ของตาราง Complete All Ticket

  Scenario: TM_070 : ทดสอบ Search ของ Product No. ใน Complete All Ticket
    When กดปุ่ม Search62 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket3
    When กด icon แว่นขยาย29
    When กรอกข้อมูลในช่อง Search ของ Product No.7
    When กดปุ่ม search24 ของหน้า Ticket

  Scenario: TM_071 : ทดสอบ Reset ของ Product No. ใน Complete All Ticket
    When กดปุ่ม Search63 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket4
    When กด icon แว่นขยาย30
    When กรอกข้อมูลในช่อง Search ของ Product No.8
    When กดปุ่ม search25 ของหน้า Ticket
    When กดปุ่ม Reset6 ของหน้า Ticket

  Scenario: TM_072 : ทดสอบ Close ของ Product No. ใน Complete All Ticket
    When กดปุ่ม Search64 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket5
    When กด icon แว่นขยาย31
    When กดปุ่ม Close ของ Product No.3

  Scenario: TM_073 : ทดสอบ Search ของ Product No. ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search65 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket6
    When กด icon แว่นขยาย32
    When กรอกข้อมูลในช่อง Search ของ Product No.9
    When กดปุ่ม search26 ของหน้า Ticket

  Scenario: TM_074 : ทดสอบ Search ของ Product No. ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search66 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket7
    When กด icon แว่นขยาย33
    When กรอกข้อมูลในช่อง Search ของ Product No.10
    When กดปุ่ม search27 ของหน้า Ticket

  Scenario: TM_075 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket
    When กดปุ่ม Search67 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket8
    When กด icon แว่นขยาย34
    When กรอกข้อมูลในช่อง Search ของ Complete Ticket
    When กดปุ่ม search28 ของหน้า Ticket

  Scenario: TM_076 : ทดสอบ Reset ของ Complete Ticket ใน Complete All Ticket
    When กดปุ่ม Search68 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket9
    When กด icon แว่นขยาย35
    When กรอกข้อมูลในช่อง Search ของ Complete Ticket2
    When กดปุ่ม search29 ของหน้า Ticket
    When กดปุ่ม Reset7

  Scenario: TM_077 : ทดสอบ Close ของ Complete Ticket ใน Complete All Ticket
    When กดปุ่ม Search69 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket10
    When กด icon แว่นขยาย36
    When กดปุ่ม Close ของ Complete Ticket

  Scenario: TM_078 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search70 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket11
    When กด icon แว่นขยาย37
    When กรอกข้อมูลในช่อง Search ของ Complete Ticket3
    When กดปุ่ม search30 ของหน้า Ticket

  Scenario: TM_079 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search71 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket12
    When กด icon แว่นขยาย38
    When กรอกข้อมูลในช่อง Search ของ Complete Ticket4
    When กดปุ่ม search31 ของหน้า Ticket

  Scenario: TM_080 : ทดสอบ Search ของ Complete Ticket ใน Complete All Ticket กรณีไม่พิมพ์ตัวเลข
    When กดปุ่ม Search72 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket13
    When กด icon แว่นขยาย39
    When กรอกข้อมูลในช่อง Search ของ Complete Ticket5
    When กดปุ่ม search32 ของหน้า Ticket

  Scenario: TM_081 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket
    When กดปุ่ม Search73 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket14
    When กด icon แว่นขยาย40
    When กรอกข้อมูลในช่อง Search ของ Pass (SLA)
    When กดปุ่ม search33 ของหน้า Ticket

  Scenario: TM_082 : ทดสอบ Reset ของ Pass (SLA) ใน Complete All Ticket
    When กดปุ่ม Search74 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket15
    When กด icon แว่นขยาย41
    When กรอกข้อมูลในช่อง Search ของ Pass (SLA)2
    When กดปุ่ม search34 ของหน้า Ticket
    When กดปุ่ม Reset8

  Scenario: TM_083 : ทดสอบ Close ของ Pass (SLA) ใน Complete All Ticket
    When กดปุ่ม Search75 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket16
    When กด icon แว่นขยาย42
    When กดปุ่ม Close ของ Pass (SLA)

  Scenario: TM_084 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search76 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket17
    When กด icon แว่นขยาย43
    When กรอกข้อมูลในช่อง Search ของ Pass (SLA)3
    When กดปุ่ม search35 ของหน้า Ticket

  Scenario: TM_085 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search77 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket18
    When กด icon แว่นขยาย44
    When กรอกข้อมูลในช่อง Search ของ Pass (SLA)4
    When กดปุ่ม search36 ของหน้า Ticket

  Scenario: TM_086 : ทดสอบ Search ของ Pass (SLA) ใน Complete All Ticket กรณีไม่พิมพ์ตัวเลข
    When กดปุ่ม Search78 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket19
    When กด icon แว่นขยาย45
    When กรอกข้อมูลในช่อง Search ของ Pass (SLA)5
    When กดปุ่ม search37 ของหน้า Ticket

  Scenario: TM_087 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket
    When กดปุ่ม Search79 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket20
    When กด icon แว่นขยาย46
    When กรอกข้อมูลในช่อง Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA)
    When กดปุ่ม search38 ของหน้า Ticket

  Scenario: TM_088 : ทดสอบ Reset ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket
    When กดปุ่ม Search80 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket21
    When กด icon แว่นขยาย47
    When กรอกข้อมูลในช่อง Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA)2
    When กดปุ่ม search39 ของหน้า Ticket
    When กดปุ่ม Reset9

  Scenario: TM_089 : ทดสอบ Close ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket
    When กดปุ่ม Search81 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket22
    When กด icon แว่นขยาย48
    When กดปุ่ม Close ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA)

  Scenario: TM_090 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket กรณีกด space bar ค่อยค้นหาข้อมูล
    When กดปุ่ม Search82 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket23
    When กด icon แว่นขยาย49
    When กรอกข้อมูลในช่อง Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA)3
    When กดปุ่ม search40 ของหน้า Ticket

  Scenario: TM_091 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กดปุ่ม Search83 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket24
    When กด icon แว่นขยาย50
    When กรอกข้อมูลในช่อง Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA)4
    When กดปุ่ม search41 ของหน้า Ticket

  Scenario: TM_092 : ทดสอบ Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA) ใน Complete All Ticket กรณีไม่พิมพ์ตัวเลข
    When กดปุ่ม Search84 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket25
    When กด icon แว่นขยาย51
    When กรอกข้อมูลในช่อง Search ของ Fail (ดำเนินการเรียบร้อย ไม่ผ่าน SLA)5
    When กดปุ่ม search42 ของหน้า Ticket
 
  Scenario: TM_093 : ทดสอบการเลือกหน้า ใน Complete All Ticket
    When กดเลือกวันที่ที่ต้องการ8
    When กดปุ่ม Search85 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket26
    When กดเลือกหน้าที่ต้องการ3

  Scenario: TM_094 : ทดสอบปุ่ม Next Page และ Previous Page ใน Complete All Ticket
    When กดเลือกวันที่ที่ต้องการ9
    When กดปุ่ม Search86 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket27
    When กดปุ่ม Next Page6
    When กดปุ่ม Previous Page6

  Scenario: TM_095 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Complete All Ticket
    When กดเลือกวันที่ที่ต้องการ10
    When กดปุ่ม Search87 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket28
    When กดปุ่ม Next 3 Page3
    When กดปุ่ม Previous 3 Page3

  Scenario: TM_096 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Complete All Ticket กรณ๊ไม่มีหน้าต่อไป
    When เลือกข้อมูล Product Code26
    When กดปุ่ม Search88 ของหน้า Ticket
    When กดปุ่ม All Product ของ Complete All Ticket29
    When กดปุ่ม Previous Page7
    When กดปุ่ม Next Page7

  Scenario: TM_097 : ทดสอบเลือก หน้า / page ใน Complete All Ticket
    When เลือกข้อมูล Product Code27
    When กดปุ่ม Search89 ของหน้า Ticket
    When When กดปุ่ม All Product ของ Complete All Ticket30
    When เลือก 20 page4
    When เลือก 50 page4
    When เลือก 100 page4
    When เลือก 10 page4

  Scenario: TM_098 : ทดสอบการแสดงผล  Team Management Ticket Dashboard
    When เลือกข้อมูล Product Code28
    When กดปุ่ม Search90 ของหน้า Ticket

  Scenario: TM_99 : ทดสอบปุ่ม Sort acending, Sort descending, cancel sorting ของตารางใน Team Management Ticket Dashboard
    When เลือกข้อมูล Product Code29
    When กดปุ่ม Search91 ของหน้า Ticket
    When กดปุ่ม Sort acending ของตาราง Team Management Ticket Dashboard
    When กดปุ่ม Sort descending ของตาราง Team Management Ticket Dashboard
    When กดปุ่ม cancel sorting ของตาราง Team Management Ticket Dashboard

  Scenario: TM_100 : ทดสอบ Search ของ Responsible person ใน Team Management Ticket Dashboard
    When กดปุ่ม Search92 ของหน้า Ticket
    When กด icon แว่นขยาย52
    When กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard
    When กดปุ่ม search43 ของหน้า Ticket

  Scenario: TM_101 : ทดสอบ Reset ของ Responsible person ใน Team Management Ticket Dashboard
    When กด icon แว่นขยาย53
    When กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard2
    When กดปุ่ม search44 ของหน้า Ticket
    When กดปุ่ม Reset10

  Scenario: TM_102 : ทดสอบ Close ของ Responsible person ใน Team Management Ticket Dashboard
    When กด icon แว่นขยาย54
    When กดปุ่ม Close ของ Responsible person ใน Team Management Ticket Dashboard

  Scenario: TM_103 : ทดสอบ Search ของ Responsible person ใน Team Management Ticket Dashboard กรณีกด space bar ค่อยค้นหาข้อมูล
    When กด icon แว่นขยาย55
    When กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard3
    When กดปุ่ม search45 ของหน้า Ticket

  Scenario: TM_104 : ทดสอบ Search ของ Responsible person ใน Team Management Ticket Dashboard กรณีกด ค้นหาข้อมูลโดยไม่ต้องพิมพ์คำครบ
    When กด icon แว่นขยาย56
    When กรอกข้อมูลในช่อง Search ของ Responsible person ใน Team Management Ticket Dashboard4
    When กดปุ่ม search46 ของหน้า Ticket

  Scenario: TM_105 : ทดสอบปุ่ม Next Page และ Previous Page ใน Team Management Ticket Dashboard
    When กดปุ่ม Next Page8
    When กดปุ่ม Previous Page8

  Scenario: TM_106 : ทดสอบปุ่ม Next 3 Page และ Previous 3 Page ใน Team Management Ticket Dashboard
    When กดปุ่ม Next 3 Page4
    When กดปุ่ม Previous 3 Page4

  Scenario: TM_107 : ทดสอบ Next Page และ Previous Page ของ All Product ของ Team Management Ticket Dashboard กรณ๊ไม่มีหน้าต่อไป
    When เลือกข้อมูล Product Code30
    When กดปุ่ม Search93 ของหน้า Ticket
    When กดปุ่ม Previous Page9
    When กดปุ่ม Next Page9

  Scenario: TM_108 : ทดสอบเลือก หน้า / page ใน Team Management Ticket Dashboard
    When เลือกข้อมูล Product Code31
    When กดปุ่ม Search94 ของหน้า Ticket
    When เลือก 20 page5
    When เลือก 50 page5
    When เลือก 100 page5
    When เลือก 10 page5

  Scenario: TM_109 : ทดสอบการแสดงผล  Latest Tickets Created
    When กดปุ่ม Search95 ของหน้า Ticket

  # Scenario: TM_110 : ทดสอบการดูข้อมูลใน Latest Tickets Created
  #   When กดปุ่ม Search96 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created

  # Scenario: TM_111 : ทดสอบแสดงผล Ticket Detail ใน Latest Tickets Created
  #   When เข้าสู่ระบบ Ticket Monitoring9
  #   When กดปุ่ม Search97 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created2

  # Scenario: TM_112 : ทดสอบแสดงผล Log Ticket Phase ใน Latest Tickets Created
  #   When เข้าสู่ระบบ Ticket Monitoring10
  #   When กดปุ่ม Search98 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created3

  # Scenario: TM_113 : ทดสอบแสดงผล Description ใน Latest Tickets Created
  #   When เข้าสู่ระบบ Ticket Monitoring11
  #   When กดปุ่ม Search99 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created4

  # Scenario: TM_114 : ทดสอบแสดงผล Comment ใน Latest Tickets Created
  #   When เข้าสู่ระบบ Ticket Monitoring12
  #   When กดปุ่ม Search100 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created5

  # Scenario: TM_115 : ทดสอบการดู Create by ของ Ticket Detail ใน Latest Tickets Created
  #   When เข้าสู่ระบบ Ticket Monitoring13
  #   When กดปุ่ม Search101 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created6
  #   When คลิก Create by

  # Scenario: TM_116 : ทดสอบการดู Manage by ของ Ticket Detail ใน Latest Tickets Created
  #   When เข้าสู่ระบบ Ticket Monitoring14
  #   When กดปุ่ม Search102 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created7
  #   When คลิก Manage by

  # Scenario: TM_117 : ทดสอบการเปิดปิดหน้าต่างของ Ticket Detail
  #   When เข้าสู่ระบบ Ticket Monitoring15
  #   When กดปุ่ม Search103 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created8
  #   When กดปุ่มลบของ Ticket Detail
  #   When กดปุ่มบวกของ Ticket Detail

  # Scenario: TM_118 : ทดสอบการเปิดปิดหน้าต่างของ Log Ticket Phase
  #   When เข้าสู่ระบบ Ticket Monitoring16
  #   When กดปุ่ม Search104 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created9
  #   When กดปุ่มลบของ Log Ticket Phase
  #   When กดปุ่มบวกของ Log Ticket Phase

  # Scenario: TM_119 : ทดสอบการเปิดปิดหน้าต่างของ Description
  #   When เข้าสู่ระบบ Ticket Monitoring17
  #   When กดปุ่ม Search105 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created10
  #   When กดปุ่มลบของ Description
  #   When กดปุ่มบวกของ Description

  # Scenario: TM_120 : ทดสอบการส่งข้อความและหลายไฟล์ ในช่อง comment
  #   When เข้าสู่ระบบ Ticket Monitoring18
  #   When กดปุ่ม Search106 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created11
  #   When กรอกข้อความ Type your message...
  #   When เลือกไฟล์ส่งมา 3 ไฟล์
  #   When กดส่งข้อความ

  # Scenario: TM_121 : ทดสอบการแก้ไขข้อความและหลายไฟล์ ในช่อง comment
  #   When เข้าสู่ระบบ Ticket Monitoring19
  #   When กดปุ่ม Search107 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created12
  #   When แก้ไขข้อความ Type your message...
  #   When เลือกไฟล์ใหม่ส่งมา 3 ไฟล์
  #   When กด Save

  # Scenario: TM_122 : ทดสอบลบ comment
  #   When เข้าสู่ระบบ Ticket Monitoring20
  #   When กดปุ่ม Search108 ของหน้า Ticket
  #   When เลือกดูข้อมูลใน Latest Tickets Created13
  #   When กดปุ่มถังขยะ

  # Scenario: TM_123 : ทดสอบการกดปุ่ม Cancel หน้าการแจ้งเตือน
  #   When กดปุ่ม Cancel

  # Scenario: TM_124 : ทดสอบการกดปุ่ม Confirm หน้าการแจ้งเตือน
  #   When กดปุ่ม Confirm

  # Scenario: TM_125 : ทดสอบการแสดงผล Last 10 User Chats
  #   When เข้าสู่ระบบ Ticket Monitoring21
  #   When กดปุ่ม Search109 ของหน้า Ticket
