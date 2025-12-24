Feature: SME Factory_OEM Management

  Scenario: TC-SME-00 : ทดสอบการเข้าสู่เว็บไซต์
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5000/SignIn"
    When กรอก Username "#username"
    When กรอก Password "#password"
    When คลิกปุ่ม Login "Sign in"

  Scenario: TC-SME-01 : ทดสอบการเข้าถึงหน้า SME Factory - OEM Management
    When เข้าเมนู SME Factory - OEM Management

  Scenario: TC-SME-02 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง
    When เข้าเมนู SME Factory - OEM Management2
    When กรอกข้อมูลค้นหา

  Scenario: TC-SME-03 : ทดสอบการ Search ข้อมูล
    When เข้าเมนู SME Factory - OEM Management3
    When กรอกข้อมูลค้นหา2
    When คลิกปุ่มค้นหา

  Scenario: TC-SME-04 : ทดสอบการ Clear ข้อมูลค้นหา
    When เข้าเมนู SME Factory - OEM Management4
    When กรอกข้อมูลค้นหา3
    When คลิกปุ่มค้นหา2
    When คลิกปุ่ม Clear

  Scenario: TC-SME-05 : ทดสอบการ Filter ข้อมูล
    When เข้าเมนู SME Factory - OEM Management5
    When กด Filter ข้อมูล

  Scenario: TC-SME-06 : ทดสอบไอคอน จัดเรียงข้อมูล (Company Name)
    When เข้าเมนู SME Factory - OEM Management6
    When กดไอคอน จัดเรียงข้อมูล

  Scenario: TC-SME-07 : ทดสอบไอคอน ค้นหาข้อมูล (Company Name)
    When เข้าเมนู SME Factory - OEM Management7
    When กดไอคอน ค้นหาข้อมูล

  Scenario: TC-SME-08 : ทดสอบการกรอกข้อมูลใน Global Search (Company Name)
    When เข้าเมนู SME Factory - OEM Management8
    When กรอกข้อมูลค้นหา4

  Scenario: TC-SME-09 : ทดสอบปุ่ม Search (Company Name)
    When เข้าเมนู SME Factory - OEM Management9
    When กดไอคอน ค้นหาข้อมูล2
    When กดปุ่ม Search

  Scenario: TC-SME-10 : ทดสอบปุ่ม Reset (Company Name)
    When เข้าเมนู SME Factory - OEM Management10
    When กดไอคอน ค้นหาข้อมูล3
    When กดปุ่ม Reset

  Scenario: TC-SME-11 : ทดสอบปุ่ม Close (Company Name)
    When เข้าเมนู SME Factory - OEM Management11
    When กดไอคอน ค้นหาข้อมูล4
    When กดปุ่ม Close

  Scenario: TC-SME-12 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM)
    When เข้าเมนู SME Factory - OEM Management12
    When กดไอคอน จัดเรียงข้อมูล2

  Scenario: TC-SME-13 : ทดสอบไอคอน ค้นหาข้อมูล (OEM)
    When เข้าเมนู SME Factory - OEM Management13
    When กดไอคอน กรองข้อมูล

  Scenario: TC-SME-14 : ทดสอบการกรอกข้อมูลใน Global Search (OEM)
    When เข้าเมนู SME Factory - OEM Management14
    When กรอกข้อมูลค้นหา5

  Scenario: TC-SME-15 : ทดสอบปุ่ม Search (OEM)
    When เข้าเมนู SME Factory - OEM Management15
    When กดไอคอน กรองข้อมูล2
    When กดปุ่ม Search2

  Scenario: TC-SME-16 : ทดสอบปุ่ม Reset (OEM)
    When เข้าเมนู SME Factory - OEM Management16
    When กดไอคอน ค้นหาข้อมูล5
    When กดปุ่ม Reset2

  Scenario: TC-SME-17 : ทดสอบปุ่ม Close (OEM)
    When เข้าเมนู SME Factory - OEM Management17
    When กดไอคอน ค้นหาข้อมูล6
    When กดปุ่ม Close2

  Scenario: TC-SME-18 : ทดสอบไอคอน จัดเรียงข้อมูล (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management18
    When กดไอคอน จัดเรียงข้อมูล3

  Scenario: TC-SME-19 : ทดสอบไอคอน กรองข้อมูล (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management19
    When กดไอคอน กรองข้อมูล3

  Scenario: TC-SME-20 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management20
    When กรอกข้อมูลค้นหา6

  Scenario: TC-SME-21 : ทดสอบการเลือกข้อมูล (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management21
    When กรอกข้อมูลค้นหา7

  Scenario: TC-SME-22 : ทดสอบปุ่ม Search (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management22
    When กดไอคอน กรองข้อมูล4
    When กดปุ่ม Search3

  Scenario: TC-SME-23 : ทดสอบปุ่ม Reset (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management23
    When กดไอคอน ค้นหาข้อมูล7
    When กดปุ่ม Reset3

  Scenario: TC-SME-24 : ทดสอบปุ่ม Close (Deployment Type)
    When เข้าเมนู SME Factory - OEM Management24
    When กดไอคอน ค้นหาข้อมูล8
    When กดปุ่ม Close3

  Scenario: TC-SME-25 : ทดสอบไอคอน จัดเรียงข้อมูล (Apply Date)
    When เข้าเมนู SME Factory - OEM Management25
    When กดไอคอน จัดเรียงข้อมูล4

  Scenario: TC-SME-26 : ทดสอบไอคอน ปฏิทิน (Apply Date)
    When เข้าเมนู SME Factory - OEM Management26
    When กดไอคอน กรองข้อมูล5

  Scenario: TC-SME-27 : ทดสอบการกรอกข้อมูลใน Date Picker (Apply Date)
    When เข้าเมนู SME Factory - OEM Management27
    When กรอกข้อมูลค้นหา8

  Scenario: TC-SME-28 : ทดสอบปุ่ม Search (Apply Date)
    When เข้าเมนู SME Factory - OEM Management28
    When กดไอคอน กรองข้อมูล6
    When กดปุ่ม Search4

  Scenario: TC-SME-29 : ทดสอบปุ่ม Reset (Apply Date)
    When เข้าเมนู SME Factory - OEM Management29
    When กดไอคอน ค้นหาข้อมูล9
    When กดปุ่ม Reset4

  Scenario: TC-SME-30 : ทดสอบปุ่ม Close (Apply Date)
    When เข้าเมนู SME Factory - OEM Management30
    When กดไอคอน ค้นหาข้อมูล10
    When กดปุ่ม Close4

  Scenario: TC-SME-31 : ทดสอบไอคอน จัดเรียงข้อมูล (Start Date)
    When เข้าเมนู SME Factory - OEM Management31
    When กดไอคอน จัดเรียงข้อมูล5

  Scenario: TC-SME-32 : ทดสอบไอคอน ปฏิทิน (Start Date)
    When เข้าเมนู SME Factory - OEM Management32
    When กดไอคอน ปฏิทิน

  Scenario: TC-SME-33 : ทดสอบการกรอกข้อมูลใน Date Picker (Start Date)
    When เข้าเมนู SME Factory - OEM Management33
    When กรอกข้อมูลค้นหา9

  Scenario: TC-SME-34 : ทดสอบปุ่ม Search (Start Date)
    When เข้าเมนู SME Factory - OEM Management34
    When กดไอคอน กรองข้อมูล7
    When กดปุ่ม Search5

  Scenario: TC-SME-35 : ทดสอบปุ่ม Reset (Start Date)
    When เข้าเมนู SME Factory - OEM Management35
    When กดไอคอน ค้นหาข้อมูล11
    When กดปุ่ม Reset5

  Scenario: TC-SME-36 : ทดสอบปุ่ม Close (Start Date)
    When เข้าเมนู SME Factory - OEM Management36
    When กดไอคอน ค้นหาข้อมูล12
    When กดปุ่ม Close5

  Scenario: TC-SME-37 : ทดสอบไอคอน จัดเรียงข้อมูล (Expire Date)
    When เข้าเมนู SME Factory - OEM Management37
    When กดไอคอน จัดเรียงข้อมูล6

  Scenario: TC-SME-38 : ทดสอบไอคอน ปฏิทิน (Expire Date)
    When เข้าเมนู SME Factory - OEM Management38
    When กดไอคอน ปฏิทิน2

  Scenario: TC-SME-39 : ทดสอบการกรอกข้อมูลใน Date Picker (Expire Date)
    When เข้าเมนู SME Factory - OEM Management39
    When กรอกข้อมูลค้นหา10

  Scenario: TC-SME-40 : ทดสอบปุ่ม Search (Expire Date)
    When เข้าเมนู SME Factory - OEM Management40
    When กดไอคอน กรองข้อมูล8
    When กดปุ่ม Search6

  Scenario: TC-SME-41 : ทดสอบปุ่ม Reset (Expire Date)
    When เข้าเมนู SME Factory - OEM Management41
    When กดไอคอน ค้นหาข้อมูล13
    When กดปุ่ม Reset6

  Scenario: TC-SME-42 : ทดสอบปุ่ม Close (Expire Date)
    When เข้าเมนู SME Factory - OEM Management42
    When กดไอคอน ค้นหาข้อมูล14
    When กดปุ่ม Close6

  Scenario: TC-SME-43 : ทดสอบไอคอน จัดเรียงข้อมูล (Remain)
    When เข้าเมนู SME Factory - OEM Management43
    When กดไอคอน จัดเรียงข้อมูล7

  Scenario: TC-SME-44 : ทดสอบไอคอน จัดเรียงข้อมูล (Status)
    When เข้าเมนู SME Factory - OEM Management44
    When กดไอคอน จัดเรียงข้อมูล8

  Scenario: TC-SME-45 : ทดสอบไอคอน กรองข้อมูล (Status)
    When เข้าเมนู SME Factory - OEM Management45
    When กดไอคอน กรองข้อมูล9

  Scenario: TC-SME-46 : ทดสอบการกรอกข้อมูลใน Global Search (Status)
    When เข้าเมนู SME Factory - OEM Management46
    When กรอกข้อมูลค้นหา11

  Scenario: TC-SME-47 : ทดสอบการเลือกข้อมูล (Status)
    When เข้าเมนู SME Factory - OEM Management47
    When กรอกข้อมูลค้นหา12

  Scenario: TC-SME-48 : ทดสอบปุ่ม Search (Status)
    When เข้าเมนู SME Factory - OEM Management48
    When กดไอคอน กรองข้อมูล10
    When กดปุ่ม Search7

  Scenario: TC-SME-49 : ทดสอบปุ่ม Reset (Status)
    When เข้าเมนู SME Factory - OEM Management49
    When กดไอคอน ค้นหาข้อมูล15
    When กดปุ่ม Reset7

  Scenario: TC-SME-50 : ทดสอบปุ่ม Close (Status)
    When เข้าเมนู SME Factory - OEM Management50
    When กดไอคอน ค้นหาข้อมูล16
    When กดปุ่ม Close7

  Scenario: TC-SME-51 : ทดสอบการปุ่ม Add ในหน้า SME Factory - OEM Management (On-Premise)
    When คลิกปุ่มAdd

  Scenario: TC-SME-52 : ทดสอบการกรอกข้้อมูล Company ในหน้า New Company Add - Company
    When กรอกข้อมูล Fill : Company Name
    When กรอกข้อมูล Fill : Company Abbreviation
    When กรอกข้อมูล Fill : Email
    When กรอกข้อมูล Fill : Deployment Type
    When กรอกข้อมูล Fill : Company Detail
    When กรอกข้อมูล Fill : MA per Year
    When กรอกข้อมูล Fill : MA per Month
    When กรอกข้อมูล Fill : MA per Week

  Scenario: TC-SME-53 : ทดสอบการใส่รูปใน Company ในหน้า New Company Add - Company
    When ใส่รูป

  Scenario: TC-SME-54 : ทดสอบการใส่ไฟล์ใน Upload Document ในหน้า New Company Add - Company
    When ใส่ไฟล์ เอกสารรับรองบริษัท (ที่มีตราครุฑ)
    When ใส่ไฟล์ เอกสาร ภพ.20

  Scenario: TC-SME-55 : ทดสอบปุ่ม ต่อ MA ใน Date
    When คลิกปุ่ม ต่อ MA

  Scenario: TC-SME-56 : ทดสอบปุ่ม Add ใน MA History
    When คลิกปุ่ม Add

  Scenario: TC-SME-57 : ทดสอบกรอกข้อมูล ใน New MA
    When กรอกข้อมูล Fill : Apply Date

  Scenario: TC-SME-58 : ทดสอบปุ่ม Cancel ใน New MA
    When คลิกปุ่ม Cancel

  Scenario: TC-SME-59 : ทดสอบปุ่ม Save ใน New MA
    When คลิกปุ่มAdd2
    When กรอกข้อมูล Fill : Apply Date2
    When คลิกปุ่ม Save

  Scenario: TC-SME-60 : ทดสอบไอคอน จัดเรียงข้อมูล (Apply Date) ใน MA History
    When กดไอคอน จัดเรียงข้อมูล9

  Scenario: TC-SME-61 : ทดสอบไอคอน ปฏิทิน (Apply Date) ใน MA History
    When กดไอคอน ปฏิทิน3

  Scenario: TC-SME-62 : ทดสอบไอคอน จัดเรียงข้อมูล (Start Date) ใน MA History
    When กดไอคอน จัดเรียงข้อมูล10

  Scenario: TC-SME-63 : ทดสอบไอคอน ปฏิทิน (Start Date) ใน MA History
    When กดไอคอน ปฏิทิน4

  Scenario: TC-SME-64 : ทดสอบไอคอน จัดเรียงข้อมูล (Expire Date) ใน MA History
    When กดไอคอน จัดเรียงข้อมูล11

  Scenario: TC-SME-65 : ทดสอบไอคอน ปฏิทิน (Expire Date) ใน MA History
    When กดไอคอน ปฏิทิน5

  Scenario: TC-SME-66 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ใน MA History
    When เลือก จำนวน/Pageที่ต้องการ

  Scenario: TC-SME-67 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ใน MA History
    When กด ไอคอน >

  Scenario: TC-SME-68 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ใน MA History
    When กด ไอคอน <

  Scenario: TC-SME-69 : ทดสอบการปุ่ม Add Company Group / OEM ในหน้า New Company Add - Company
    When คลิกปุ่มAdd Company Group OEM

  Scenario: TC-SME-70 : ทดสอบการกรอกข้้อมูล ใน Add OEM
    When กรอกข้อมูล Fill : OEM Name
    When กรอกข้อมูล Fill : Display OEM

  Scenario: TC-SME-71 : ทดสอบการใส่รูปใน Add OEM
    When ใส่รูป2

  Scenario: TC-SME-72 : ทดสอบปุ่ม Cancel ใน New MA (OEM Detail)
    When คลิกปุ่ม Cancel2

  Scenario: TC-SME-73 : ทดสอบปุ่ม Save ใน New MA (OEM Detail)
    When คลิกปุ่มAdd Company Group OEM2
    When กรอกข้อมูล Fill : OEM Name2
    When กรอกข้อมูล Fill : Display OEM2
    When ใส่รูป3
    When คลิกปุ่ม Save2

  Scenario: TC-SME-74 : ทดสอบปุ่มไอคอน รูปตา ใน Company Group / OEM
    When คลิกปุ่มไอคอนรูปตา ในข้อมูล Company Group  OEM

  Scenario: TC-SME-75 : ทดสอบปุ่ม Cancel ใน View OEM
    When คลิกปุ่ม Cancel3

  Scenario: TC-SME-76 : ทดสอบปุ่มไอคอน แก้ไข ข้อมูล ใน Company Group / OEM
    When คลิกปุ่มไอคอนแก้ไข

  Scenario: TC-SME-77 : ทดสอบการแก้ไขข้อมูล ใน Edit OEM
    When แก้ไขข้อมูล Fill : OEM Name
    When แก้ไขข้อมูล Fill : Display OEM

  Scenario: TC-SME-78 : ทดสอบปุ่ม Cancel ใน Edit OEM
    When คลิกปุ่ม Cancel4

  Scenario: TC-SME-79 : ทดสอบปุ่ม Save ใน Edit OEM
    When คลิกปุ่มไอคอนแก้ไข2
    When แก้ไขข้อมูล Fill : OEM Name2
    When แก้ไขข้อมูล Fill : Display OEM2
    When คลิกปุ่ม Save3

  Scenario: TC-SME-80 : ทดสอบปุ่มไอคอน ถังขยะ ข้อมูล ใน Company Group / OEM
    When คลิกปุ่มไอคอนถังขยะ

  Scenario: TC-SME-81 : ทดสอบปุ่ม Cancel ใน Edit OEM (Delete Confirmation)
    When คลิกปุ่ม Cancel5

  Scenario: TC-SME-82 : ทดสอบปุ่ม Confirm ใน Edit OEM (Delete Confirmation)
    When คลิกปุ่มไอคอนถังขยะ2
    When คลิกปุ่ม Confirm

  Scenario: TC-SME-83 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ใน Company Group / OEM
    When กรอกข้อมูล

  Scenario: TC-SME-84 : ทดสอบการ Search ข้อมูล ใน Company Group / OEM
    When คลิกปุ่ม Search

  Scenario: TC-SME-85 : ทดสอบการ Clear ข้อมูลค้นหา ใน Company Group / OEM
    When คลิกปุ่ม Clear2

  Scenario: TC-SME-86 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน Company Group / OEM
    When กดไอคอน จัดเรียงข้อมูล12

  Scenario: TC-SME-87 : ทดสอบไอคอน ค้นหาข้อมูล (OEM) ใน Company Group / OEM
    When กดไอคอน กรองข้อมูล11

  Scenario: TC-SME-88 : ทดสอบการกรอกข้อมูลใน Global Search (Display OEM) ใน Company Group / OEM
    When กรอกข้อมูลค้นหา13

  Scenario: TC-SME-89 : ทดสอบปุ่ม Search (OEM) ใน Company Group / OEM
    When คลิกปุ่ม Search2

  Scenario: TC-SME-90 : ทดสอบปุ่ม Reset (OEM) ใน Company Group / OEM
    When คลิกปุ่ม Reset

  Scenario: TC-SME-91 : ทดสอบปุ่ม Close (OEM) ใน Company Group / OEM
    When คลิกปุ่ม Close

  Scenario: TC-SME-92 : ทดสอบไอคอน จัดเรียงข้อมูล (Display OEM) ใน Company Group / OEM
    When กดไอคอน จัดเรียงข้อมูล13

  Scenario: TC-SME-93 : ทดสอบไอคอน ค้นหาข้อมูล (Display OEM) ใน Company Group / OEM
    When กดไอคอน กรองข้อมูล12

  Scenario: TC-SME-94 : ทดสอบการกรอกข้อมูลใน Global Search (Display OEM) ใน Company Group / OEM
    When กรอกข้อมูลค้นหา14

  Scenario: TC-SME-95 : ทดสอบปุ่ม Search (Display OEM) ใน Company Group / OEM
    When คลิกปุ่ม Search3

  Scenario: TC-SME-96 : ทดสอบปุ่ม Reset (Display OEM) ใน Company Group / OEM
    When คลิกปุ่ม Reset2

  Scenario: TC-SME-97 : ทดสอบปุ่ม Close (Display OEM) ใน Company Group / OEM
    When คลิกปุ่ม Close2

  Scenario: TC-SME-98 : ทดสอบไอคอน จัดเรียงข้อมูล (Active) ใน Company Group / OEM
    When กดไอคอน จัดเรียงข้อมูล14

  Scenario: TC-SME-99 : ทดสอบไอคอน กรองข้อมูล (Active) ใน Company Group / OEM
    When กดไอคอน กรองข้อมูล13

  Scenario: TC-SME-100 : ทดสอบการกรอกข้อมูลใน Global Search (Active) ใน Company Group / OEM
    When กรอกข้อมูลค้นหา15

  Scenario: TC-SME-101 : ทดสอบการเลือกข้อมูล (Active) ใน Company Group / OEM
    When กรอกข้อมูลค้นหา16

  Scenario: TC-SME-102 : ทดสอบปุ่ม Search (Active) ใน Company Group / OEM
    When คลิกปุ่ม Search4

  Scenario: TC-SME-103 : ทดสอบปุ่ม Reset (Active) ใน Company Group / OEM
    When คลิกปุ่ม Reset3

  Scenario: TC-SME-104 : ทดสอบปุ่ม Close (Active) ใน Company Group / OEM
    When คลิกปุ่ม Close3

  Scenario: TC-SME-105 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ใน Permission Management
    When กรอกข้อมูล ในช่องกรอก

  Scenario: TC-SME-106 : ทดสอบการเลือก OEM ใน Permission Management
    When เลือก OEM

  Scenario: TC-SME-107 : ทดสอบการ Search ข้อมูล ใน Permission Management
    When คลิกปุ่ม Search5

  Scenario: TC-SME-108 : ทดสอบการ Clear ข้อมูลค้นหา ใน Permission Management
    When คลิกปุ่ม Clear3

  Scenario: TC-SME-109 : ทดสอบปุ่ม Add Menu ใน Permission Management
    When คลิกปุ่ม Add Menu

  Scenario: TC-SME-110 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก2

  Scenario: TC-SME-111 : ทดสอบการ Search ข้อมูล Module ในหน้า Permission Management
    When คลิกปุ่ม Search6

  Scenario: TC-SME-112 : ทดสอบการ Clear ข้อมูลค้นหา Module ในหน้า Permission Management
    When คลิกปุ่ม Clear4

  Scenario: TC-SME-113 : ทดสอบการเลือกข้อมูล Module ในหน้า Permission Management
    When คลิกเลือก ข้อมูล

  Scenario: TC-SME-114 : ทดสอบการเลือก Select All Module ในหน้า Permission Management
    When คลิกเลือก Select All

  Scenario: TC-SME-115 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Menu Level 1 ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก3

  Scenario: TC-SME-116 : ทดสอบการ Search ข้อมูล Menu Level 1 ในหน้า Permission Management
    When คลิกปุ่ม Search7

  Scenario: TC-SME-117 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 1 ในหน้า Permission Management
    When คลิกปุ่ม Clear5

  Scenario: TC-SME-118 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Menu Level 2 ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก4

  Scenario: TC-SME-119 : ทดสอบการ Search ข้อมูล Menu Level 2 ในหน้า Permission Management
    When คลิกปุ่ม Search8

  Scenario: TC-SME-120 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 2 ในหน้า Permission Management
    When คลิกปุ่ม Clear6

  Scenario: TC-SME-121 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Feature ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก5

  Scenario: TC-SME-122 : ทดสอบการ Search ข้อมูล Feature ในหน้า Permission Management
    When คลิกปุ่ม Search9

  Scenario: TC-SME-123 : ทดสอบการ Clear ข้อมูลค้นหา Feature ในหน้า Permission Management
    When คลิกปุ่ม Clear7

  Scenario: TC-SME-124 : ทดสอบกด Module & Menu
    When คลิก Module & Menu

  Scenario: TC-SME-125 : ทดสอบกด Feature
    When คลิก Feature

  Scenario: TC-SME-126 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu
    When กด เลือกข้อมูล

  Scenario: TC-SME-127 : ทดสอบกดเลือก Select All ใน Module & Menu
    When กด Select All

  Scenario: TC-SME-128 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu
    When คลิกปุ่มแว่นขยาย

  Scenario: TC-SME-129 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module & Menu ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก6

  Scenario: TC-SME-130 : ทดสอบปุ่ม Search (Module & Menu)
    When คลิกปุ่ม Search10

  Scenario: TC-SME-131 : ทดสอบปุ่ม Reset (Module & Menu)
    When คลิกปุ่ม Reset4

  Scenario: TC-SME-132 : ทดสอบปุ่ม Close (Module & Menu)
    When กดปุ่ม Close8

  Scenario: TC-SME-133 : ทดสอบกดเลือก ข้อมูล ใน Feature
    When คลิก  Feature
    When กด เลือกข้อมูล2

  Scenario: TC-SME-134 : ทดสอบกดเลือก Select All ใน Feature
    When กด Select All2

  Scenario: TC-SME-135 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Feature
    When คลิกปุ่มแว่นขยาย2

  Scenario: TC-SME-136 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Feature ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก7

  Scenario: TC-SME-137 : ทดสอบปุ่ม Search (Feature)
    When คลิกปุ่ม Search11

  Scenario: TC-SME-138 : ทดสอบปุ่ม Reset (Feature)
    When คลิกปุ่ม Reset5

  Scenario: TC-SME-139 : ทดสอบปุ่ม Close (Feature)
    When กดปุ่ม Close9

  Scenario: TC-SME-140 : ทดสอบปุ่ม Cancel ในหน้า New Company Add - Company
    When คลิกปุ่ม Cancel6

  Scenario: TC-SME-141 : ทดสอบปุ่ม Save ในหน้า New Company Add - Company
    When คลิกปุ่มAdd3
    When กรอกข้อมูล Fill : Company Name2
    When กรอกข้อมูล Fill : Company Abbreviation2
    When กรอกข้อมูล Fill : Email2
    When กรอกข้อมูล Fill : Deployment Type2
    When กรอกข้อมูล Fill : Company Detail2
    When กรอกข้อมูล Fill : MA per Year2
    When กรอกข้อมูล Fill : MA per Month2
    When กรอกข้อมูล Fill : MA per Week2
    When ใส่รูป4
    When ใส่ไฟล์ เอกสารรับรองบริษัท (ที่มีตราครุฑ)2
    When ใส่ไฟล์ เอกสาร ภพ.202
    When คลิกปุ่ม ต่อ MA2
    When คลิกปุ่มAdd4
    When กรอกข้อมูล Fill : Apply Date3
    When คลิกปุ่ม Save4
    When คลิกปุ่มAdd Company Group OEM3
    When กรอกข้อมูล Fill : OEM Name3
    When กรอกข้อมูล Fill : Display OEM3
    When ใส่รูป5
    When คลิกปุ่ม Save5
    When เลือก OEM2
    When คลิกปุ่ม Add Menu2
    When คลิกเลือก Select All2
    When คลิก Module & Menu2
    When กด เลือกข้อมูล3
    When กด Select All3
    When คลิก  Feature2
    When กด เลือกข้อมูล4
    When คลิกปุ่ม Save6

  Scenario: TC-SME-142 : ทดสอบปุ่ม Cancel ในหน้า Warning
    When คลิกปุ่ม Cancel7

  Scenario: TC-SME-143 : ทดสอบปุ่ม Confirm ในหน้า Warning
    When คลิกปุ่ม Save7
    When คลิกปุ่ม Confirm2

  Scenario: TC-SME-144 : ทดสอบกด User
    When คลิก User

  Scenario: TC-SME-145 : ทดสอบการปุ่ม Add ในหน้า New Company Edit - User
    When คลิกปุ่มAdd5

  Scenario: TC-SME-146 : ทดสอบการกรอกข้้อมูล User Information ในหน้า New Company Edit - User - User Add
    When กรอกข้อมูล Fill : Username
    When กรอกข้อมูล Fill : First Name
    When กรอกข้อมูล Fill : Last Name
    When กรอกข้อมูล Fill : Gender
    When กรอกข้อมูล Fill : Birthday
    When กรอกข้อมูล Fill : Relationship Status
    When กรอกข้อมูล Fill : Nationality
    When กรอกข้อมูล Fill : Religion
    When กรอกข้อมูล Fill : Employee ID
    When กรอกข้อมูล Fill : Department
    When กรอกข้อมูล Fill : Position
    When กรอกข้อมูล Fill : House Number  Alley  Village  Building
    When กรอกข้อมูล Fill : Province
    When กรอกข้อมูล Fill : District
    When กรอกข้อมูล Fill : Sub-district Ward
    When กรอกข้อมูล Fill : Remark
    When กรอกข้อมูล Fill : Contact Number
    When กรอกข้อมูล Fill : Email3
    When กรอกข้อมูล Fill : Line ID
    When กรอกข้อมูล Fill : Remark2

  Scenario: TC-SME-147 : ทดสอบการใส่รูปใน User Information ในหน้า New Company Edit - User - User Add
    When ใส่รูป6

  Scenario: TC-SME-148 : ทดสอบการใส่ไฟล์ใน Upload Document ในหน้า New Company Edit - User - User Add
    When ใส่ไฟล์ เอกสารประจำตัว
    When ใส่ไฟล์ เอกสารสัญญาจ้างงาน
    When ใส่ไฟล์ เอกสารอื่น ๆ

  Scenario: TC-SME-149 : ทดสอบการเลือกข้อมูลใน Select OEM ในหน้า New Company Edit - User - User Add
    When เลือกข้อมูล Fill : Select OEM
    When เลือกข้อมูล Fill : Select User Group

  Scenario: TC-SME-150 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User - User Add
    When คลิกปุ่ม Cancel8

  Scenario: TC-SME-151 : ทดสอบปุ่ม Cancel ในหน้า Warning
    When คลิกปุ่ม Cancel9

  Scenario: TC-SME-152 : ทดสอบปุ่ม Confirm ในหน้า Warning
    When คลิกปุ่ม Cancel10
    When คลิกปุ่ม Confirm3

  Scenario: TC-SME-153 : ทดสอบปุ่ม Save ในหน้า New Company Edit - User - User Add
    When คลิกปุ่ม Save8

  Scenario: TC-SME-154 : ทดสอบปุ่ม Cancel ในหน้า Warning (กรณี Save)
    When คลิกปุ่ม Cancel11

  Scenario: TC-SME-155 : ทดสอบปุ่ม Confirm ในหน้า Warning (กรณี Save)
    When คลิกปุ่ม Save9
    When คลิกปุ่ม Confirm4

  Scenario: TC-SME-156 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User
    When กรอกข้อมูลค้นหา17

  Scenario: TC-SME-157 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User
    When คลิกปุ่มค้นหา3

  Scenario: TC-SME-158 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User
    When คลิกปุ่ม Clear8

  Scenario: TC-SME-159 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User
    When กด Filter ข้อมูล2

  Scenario: TC-SME-160 : ทดสอบไอคอน จัดเรียงข้อมูล (Name) ใน New Company Edit - User
    When กดไอคอน จัดเรียงข้อมูล15

  Scenario: TC-SME-161 : ทดสอบไอคอน ค้นหาข้อมูล (Name) ใน New Company Edit - User
    When กดไอคอน กรองข้อมูล14

  Scenario: TC-SME-162 : ทดสอบการกรอกข้อมูลใน Global Search (Name)
    When กรอกข้อมูลค้นหา18

  Scenario: TC-SME-163 : ทดสอบปุ่ม Search (Name) ใน New Company Edit - User
    When กดไอคอน กรองข้อมูล15
    When กดปุ่ม Search8

  Scenario: TC-SME-164 : ทดสอบปุ่ม Reset (Name) ใน New Company Edit - User
    When กดปุ่ม Reset8

  Scenario: TC-SME-165 : ทดสอบปุ่ม Close (Name) ใน New Company Edit - User
    When กดปุ่ม Close10

  Scenario: TC-SME-166 : ทดสอบไอคอน จัดเรียงข้อมูล (Username) ใน New Company Edit - User
    When กดไอคอน จัดเรียงข้อมูล16

  Scenario: TC-SME-167 : ทดสอบไอคอน ค้นหาข้อมูล (Username) ใน New Company Edit - User
    When กดไอคอน กรองข้อมูล16

  Scenario: TC-SME-168 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type) ในหน้า User
    When กรอกข้อมูลค้นหา19

  Scenario: TC-SME-169 : ทดสอบปุ่ม Search (Username) ใน New Company Edit - User
    When กดปุ่ม Search9

  Scenario: TC-SME-170 : ทดสอบปุ่ม Reset (Username) ใน New Company Edit - User
    When กดปุ่ม Reset9

  Scenario: TC-SME-171 : ทดสอบปุ่ม Close (Username) ใน New Company Edit - User
    When กดปุ่ม Close11

  Scenario: TC-SME-172 : ทดสอบไอคอน จัดเรียงข้อมูล (Contract Number) ใน New Company Edit - User
    When กดไอคอน จัดเรียงข้อมูล17

  Scenario: TC-SME-173 : ทดสอบไอคอน ค้นหาข้อมูล (Contract Number) ใน New Company Edit - User
    When กดไอคอน ค้นหา17

  Scenario: TC-SME-174 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type)
    When กรอกข้อมูลค้นหา20

  Scenario: TC-SME-175 : ทดสอบปุ่ม Search (Contract Number) ใน New Company Edit - User
    When กดปุ่ม Search10

  Scenario: TC-SME-176 : ทดสอบปุ่ม Reset (Contract Number) ใน New Company Edit - User
    When กดปุ่ม Reset10

  Scenario: TC-SME-177 : ทดสอบปุ่ม Close (Contract Number) ใน New Company Edit - User
    When กดปุ่ม Close12

  Scenario: TC-SME-178 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User
    When กดไอคอน จัดเรียงข้อมูล18

  Scenario: TC-SME-179 : ทดสอบปุ่มกรองข้อมูล (OEM) ใน New Company Edit - User
    When กดไอคอน กรองข้อมูล17

  Scenario: TC-SME-180 : ทดสอบการกรอกข้อมูลใน Global Search (OEM) ใน New Company Edit - User
    When กรอกข้อมูลค้นหา21

  Scenario: TC-SME-181 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User
    When เลือกข้อมูล

  Scenario: TC-SME-182 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User
    When กดปุ่ม Search11

  Scenario: TC-SME-183 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User
    When กดปุ่ม Reset11

  Scenario: TC-SME-184 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User
    When กดปุ่ม Close13

  Scenario: TC-SME-185 : ทดสอบไอคอน จัดเรียงข้อมูล (Status) ใน New Company Edit - User
    When กดไอคอน จัดเรียงข้อมูล19

  Scenario: TC-SME-186 : ทดสอบปุ่มกรองข้อมูล (Status) ใน New Company Edit - User
    When กดไอคอน กรองข้อมูล18

  Scenario: TC-SME-187 : ทดสอบการกรอกข้อมูลใน Global Search (Status) ใน New Company Edit - User
    When กรอกข้อมูลค้นหา22

  Scenario: TC-SME-188 : ทดสอบการเลือกข้อมูล (Status) ใน New Company Edit - User
    When เลือกข้อมูล2

  Scenario: TC-SME-189 : ทดสอบปุ่ม Search (Status) ใน New Company Edit - User
    When กดปุ่ม Search12

  Scenario: TC-SME-190 : ทดสอบปุ่ม Reset (Status) ใน New Company Edit - User
    When กดปุ่ม Reset12

  Scenario: TC-SME-191 : ทดสอบปุ่ม Close (Status) ใน New Company Edit - User
    When กดปุ่ม Close14

  Scenario: TC-SME-192 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User
    When เลือก จำนวน/Pageที่ต้องการ2

  Scenario: TC-SME-193 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ในหน้า New Company Edit - User
    When กด ไอคอน >2

  Scenario: TC-SME-194 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ในหน้า New Company Edit - User
    When กด ไอคอน <2

  Scenario: TC-SME-195 : ทดสอบกด User Group
    When คลิก User Group

  Scenario: TC-SME-196 : ทดสอบการปุ่ม Add ในหน้า New Company Edit - User Group Add
    When คลิกปุ่มAdd6

  Scenario: TC-SME-197 : ทดสอบการกรอกข้้อมูล User Group ในหน้า New Company Edit - User Group Add
    When กรอกข้อมูล Fill : User Group Name
    When Fill : Select OEM2
    When กรอกข้อมูล Fill : Remark3

  Scenario: TC-SME-198 : ทดสอบการเลือกข้้อมูล Select User ในหน้า New Company Edit - User Group Add
    When เลือกข้อมูล Fill : Select User

  Scenario: TC-SME-199 : ทดสอบการเลือกข้อมูลใน Select OEM ด้วยข้อมูลที่แสดงในตาราง Module & Menuใน  หน้าPermission Management
    When เลือกข้อมูล Fill : Select OEM2

  Scenario: TC-SME-200 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module & Menu ใน  หน้าPermission Management
    When กรอกข้อมูล ในช่องกรอก8

  Scenario: TC-SME-201 : ทดสอบการ Search ข้อมูล Module & Menu ใน Permission Management
    When กดปุ่ม Search13

  Scenario: TC-SME-202 : ทดสอบการ Clear ข้อมูลค้นหา Module & Menu ใน Permission Management
    When คลิกปุ่ม Clear9

  Scenario: TC-SME-203 : ทดสอบกด Module & Menu
    When คลิก Module & Menu3

  Scenario: TC-SME-204 : ทดสอบกด Feature
    When คลิก Feature2

  Scenario: TC-SME-205 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu
    When คลิก Module & Menu4
    When กด เลือกข้อมูล5

  Scenario: TC-SME-206 : ทดสอบกดเลือก Select All ใน Module & Menu
    When กด Select All4

  Scenario: TC-SME-207 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu
    When คลิกปุ่มแว่นขยาย3

  Scenario: TC-SME-208 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Module & Menu ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก9

  Scenario: TC-SME-209 : ทดสอบปุ่ม Search (Module & Menu)
    When กดปุ่ม Search14

  Scenario: TC-SME-210 : ทดสอบปุ่ม Reset (Module & Menu)
    When กดปุ่ม Reset13

  Scenario: TC-SME-211 : ทดสอบปุ่ม Close (Module & Menu)
    When กดปุ่ม Close15

  Scenario: TC-SME-212 : ทดสอบกดเลือก ข้อมูล ใน Feature
    When คลิก  Feature3
    When กด เลือกข้อมูล6

  Scenario: TC-SME-213 : ทดสอบกดเลือก Select All ใน Feature
    When กด Select All5

  Scenario: TC-SME-214 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Feature
    When คลิกปุ่มแว่นขยาย4

  Scenario: TC-SME-215 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง Feature ในหน้า Permission Management
    When กรอกข้อมูล ในช่องกรอก10

  Scenario: TC-SME-216 : ทดสอบปุ่ม Search (Feature)
    When กดปุ่ม Search15

  Scenario: TC-SME-217 : ทดสอบปุ่ม Reset (Feature)
    When กดปุ่ม Reset14

  Scenario: TC-SME-218 : ทดสอบปุ่ม Close (Feature)
    When กดปุ่ม Close16

  Scenario: TC-SME-219 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User Group Edit
    When คลิกปุ่ม Cancel12

  Scenario: TC-SME-220 : ทดสอบปุ่ม Cancel ในหน้า Warning
    When คลิกปุ่ม Cancel13

  Scenario: TC-SME-221 : ทดสอบปุ่ม Confirm ในหน้า Warning
    When คลิกปุ่ม Cancel14
    When คลิกปุ่ม Confirm5

  Scenario: TC-SME-222 : ทดสอบปุ่ม Save ในหน้า New Company Edit - User Group Edit
    When คลิกปุ่ม Save11

  Scenario: TC-SME-223 : ทดสอบปุ่ม Cancel ในหน้า Warning (กรณี Save)
    When คลิกปุ่ม Cancel15

  Scenario: TC-SME-224 : ทดสอบปุ่ม Confirm ในหน้า Warning (กรณี Save)
    When คลิกปุ่ม Save12
    When คลิกปุ่ม Confirm6

  Scenario: TC-SME-225 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User Group
    When กรอกข้อมูลค้นหา23

  Scenario: TC-SME-226 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User Group
    When คลิกปุ่มค้นหา4

  Scenario: TC-SME-227 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User Group
    When คลิกปุ่ม Clear10

  Scenario: TC-SME-228 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User Group
    When กด Filter ข้อมูล3

  Scenario: TC-SME-229 : ทดสอบไอคอน จัดเรียงข้อมูล (User Group) ใน New Company Edit - User Group
    When กดไอคอน จัดเรียงข้อมูล20

  Scenario: TC-SME-230 : ทดสอบไอคอน ค้นหาข้อมูล (User Group) ใน New Company Edit - User Group
    When กดไอคอน กรองข้อมูล19

  Scenario: TC-SME-231 : ทดสอบการกรอกข้อมูลใน Global Search (User Group) ใน New Company Edit - User Group
    When กรอกข้อมูลค้นหา24

  Scenario: TC-SME-232 : ทดสอบปุ่ม Search (User Group) ใน New Company Edit - User Group
    When กดปุ่ม Search16

  Scenario: TC-SME-233 : ทดสอบปุ่ม Reset (User Group) ใน New Company Edit - User Group
    When กดปุ่ม Reset15

  Scenario: TC-SME-234 : ทดสอบปุ่ม Close (User Group) ใน New Company Edit - User Group
    When กดปุ่ม Close17

  Scenario: TC-SME-235 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User Group
    When กดไอคอน จัดเรียงข้อมูล21

  Scenario: TC-SME-236 : ทดสอบปุ่มกรองข้อมูล (OEM) ใน New Company Edit - User Group
    When กดไอคอน กรองข้อมูล20

  Scenario: TC-SME-237 : ทดสอบการกรอกข้อมูลใน Global Search (OEM) ใน New Company Edit - User Group
    When กรอกข้อมูลค้นหา25

  Scenario: TC-SME-238 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User Group
    When เลือกข้อมูล3

  Scenario: TC-SME-239 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User Group
    When กดปุ่ม Search17

  Scenario: TC-SME-240 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User Group
    When กดปุ่ม Reset16

  Scenario: TC-SME-241 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User Group
    When กดปุ่ม Close18

  Scenario: TC-SME-242 : ทดสอบไอคอน จัดเรียงข้อมูล (Remark) ใน New Company Edit - User Group
    When กดไอคอน จัดเรียงข้อมูล22

  Scenario: TC-SME-243 : ทดสอบไอคอน ค้นหาข้อมูล (Remark) ใน New Company Edit - User Group
    When กดไอคอน กรองข้อมูล21

  Scenario: TC-SME-244 : ทดสอบการกรอกข้อมูลใน Global Search (Remark) ใน New Company Edit - User Group
    When กรอกข้อมูลค้นหา26

  Scenario: TC-SME-245 : ทดสอบปุ่ม Search (Remark) ใน New Company Edit - User Group
    When กดปุ่ม Search18

  Scenario: TC-SME-246 : ทดสอบปุ่ม Reset (Remark) ใน New Company Edit - User Group
    When กดปุ่ม Reset17

  Scenario: TC-SME-247 : ทดสอบปุ่ม Close (Remark) ใน New Company Edit - User Group
    When กดปุ่ม Close19

  Scenario: TC-SME-248 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User Group
    When เลือก จำนวน/Pageที่ต้องการ3

  Scenario: TC-SME-249 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ในหน้า New Company Edit - User Group
    When กด ไอคอน >3

  Scenario: TC-SME-250 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ในหน้า New Company Edit - User Group
    When กด ไอคอน <3

  Scenario: TC-SME-251 : ทดสอบปุ่มไอคอน จุด 3 จุด (More Options) ที่รายการข้อมูล
    When กดจุด 3 จุด

  Scenario: TC-SME-252 : ทดสอบการปุ่ม Edit .ในหน้า New Company Edit - Company
    When คลิกปุ่มEdit

  Scenario: TC-SME-253 : ทดสอบการแก้ไขข้้อมูล Companyในหน้า New Company Add - Company (Edit)
    When แก้ไขข้อมูล Fill : Company Name
    When แก้ไขข้อมูล Fill : Company Abbreviation
    When แก้ไขข้อมูล Fill : Email
    When แก้ไขข้อมูล Fill : Deployment Type
    When แก้ไขข้อมูล Fill : Company Detail
    When แก้ไขข้อมูล Fill : MA per Year
    When แก้ไขข้อมูล Fill : MA per Month
    When แก้ไขข้อมูล Fill : MA per Week

  Scenario: TC-SME-254 : ทดสอบการแก้ไขรูปใน Company ในหน้า New Company Add - Company (Edit)
    When แก้ไขรูป

  Scenario: TC-SME-255 : ทดสอบการใส่ไฟล์ใน Upload Documentในหน้า New Company Add - Company (Edit)
    When ใส่ไฟล์

  Scenario: TC-SME-256 : ทดสอบการปุ่ม Add .Company Group / OEM ในหน้า New Company Add - Company (Edit)
    When คลิกปุ่มAdd Company Group / OEM

  Scenario: TC-SME-257 : ทดสอบการกรอกข้้อมูล ใน Add OEM (Edit)
    When กรอกข้อมูล Fill : OEM Name4
    When กรอกข้อมูล Fill : Display OEM4

  Scenario: TC-SME-258 : ทดสอบการใส่รูปใน Add OEM (Edit)
    When ใส่รูป7

  Scenario: TC-SME-259 : ทดสอบปุ่ม Cancel ใน New MA (Edit)
    When คลิกปุ่ม Cancel16

  Scenario: TC-SME-260 : ทดสอบปุ่ม Save ใน New MA (Edit)
    When คลิกปุ่มAdd Company Group / OEM2
    When กรอกข้อมูล Fill : OEM Name5
    When กรอกข้อมูล Fill : Display OEM5
    When ใส่รูป8
    When คลิกปุ่ม Save13

  Scenario: TC-SME-261 : ทดสอบปุ่มไอคอน รูปตา ใน Company Group / OEM (Edit)
    When คลิกปุ่มไอคอนรูปตา ในข้อมูล Company Group / OEM

  Scenario: TC-SME-262 : ทดสอบปุ่มCancel ใน View OEM (Edit)
    When คลิกปุ่ม Cancel17

  Scenario: TC-SME-263 : ทดสอบปุ่มไอคอน แก้ไข ข้อมูลใน Company Group / OEM (Edit)
    When คลิกปุ่มไอคอนแก้ไข3

  Scenario: TC-SME-264 : ทดสอบการแก้ไขข้อมูลใน Edit OEM (Edit)
    When แก้ไขข้อมูล Fill : OEM Name3
    When แก้ไขข้อมูล Fill : Display OEM3

  Scenario: TC-SME-265 : ทดสอบปุ่ม Cancel ใน Edit OEM (Edit)
    When คลิกปุ่ม Cancel18

  Scenario: TC-SME-266 : ทดสอบปุ่ม Save ใน Edit OEM (Edit)
    When คลิกปุ่มไอคอนแก้ไข4
    When แก้ไขข้อมูล Fill : OEM Name4
    When แก้ไขข้อมูล Fill : Display OEM4
    When คลิกปุ่ม Save14

  Scenario: TC-SME-267 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตารางใน Company Group / OEM (Edit)
    When กรอกข้อมูลค้นหา27

  Scenario: TC-SME-268 : ทดสอบการ Search ข้อมูลใน Company Group / OEM (Edit)
    When คลิกปุ่ม Search12

  Scenario: TC-SME-269 : ทดสอบการ Clear ข้อมูลค้นหาใน Company Group / OEM (Edit)
    When คลิกปุ่ม Clear11

  Scenario: TC-SME-270 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน Company Group / OEM (Edit)
    When กดไอคอน จัดเรียงข้อมูล23

  Scenario: TC-SME-271 : ทดสอบไอคอน ค้นหาข้อมูล (OEM) ใน Company Group / OEM (Edit)
    When กดไอคอน กรองข้อมูล22

  Scenario: TC-SME-272 : ทดสอบการกรอกข้อมูลใน Global Search(Display OEM) ใน Company Group / OEM (Edit)
    When กรอกข้อมูลค้นหา28

  Scenario: TC-SME-273 : ทดสอบปุ่ม Search (OEM) ใน Company Group / OEM (Edit)
    When กดปุ่ม Search19

  Scenario: TC-SME-274 : ทดสอบปุ่ม Reset (OEM) ใน Company Group / OEM (Edit)
    When กดปุ่ม Reset18

  Scenario: TC-SME-275 : ทดสอบปุ่ม Close (OEM) ใน Company Group / OEM (Edit)
    When กดปุ่ม Close20

  Scenario: TC-SME-276 : ทดสอบไอคอน จัดเรียงข้อมูล (Display OEM) ใน Company Group / OEM (Edit)
    When กดไอคอน จัดเรียงข้อมูล24

  Scenario: TC-SME-277 : ทดสอบไอคอน ค้นหาข้อมูล (Display OEM) ใน Company Group / OEM (Edit)
    When กดไอคอน กรองข้อมูล23

  Scenario: TC-SME-278 : ทดสอบการกรอกข้อมูลใน Global Search(Display OEM) ใน Company Group / OEM (Edit)
    When กรอกข้อมูลค้นหา29

  Scenario: TC-SME-279 : ทดสอบปุ่ม Search (Display OEM) ใน Company Group / OEM (Edit)
    When กดปุ่ม Search20

  Scenario: TC-SME-280 : ทดสอบปุ่ม Reset (Display OEM) ใน Company Group / OEM (Edit)
    When กดปุ่ม Reset19

  Scenario: TC-SME-281 : ทดสอบปุ่ม Close (Display OEM) ใน Company Group / OEM (Edit)
    When กดปุ่ม Close21

  Scenario: TC-SME-282 : ทดสอบไอคอน จัดเรียงข้อมูล (Active)ใน Company Group / OEM (Edit)
    When กดไอคอน จัดเรียงข้อมูล25

  Scenario: TC-SME-283 : ทดสอบไอคอน กรองข้อมูล (Active) ใน Company Group / OEM (Edit)
    When กดไอคอน กรองข้อมูล24

  Scenario: TC-SME-284 : ทดสอบการกรอกข้อมูลใน Global Search (Active) ใน Company Group / OEM (Edit)
    When กรอกข้อมูลค้นหา30

  Scenario: TC-SME-285 : ทดสอบการเลือกข้อมูล (Active) ใน Company Group / OEM (Edit)
    When เลือกข้อมูล4

  Scenario: TC-SME-286 : ทดสอบปุ่ม Search (Active) ใน Company Group / OEM (Edit)
    When กดปุ่ม Search21

  Scenario: TC-SME-287 : ทดสอบปุ่ม Reset (Active) ใน Company Group / OEM (Edit)
    When กดปุ่ม Reset20

  Scenario: TC-SME-288 : ทดสอบปุ่ม Close (Active) ใน Company Group / OEM (Edit)
    When กดปุ่ม Close22

  Scenario: TC-SME-289 : ทดสอบปุ่มไอคอน ถังขยะ ข้อมูล ใน Company Group / OEM (Edit)
    When คลิกปุ่มไอคอนถังขยะ3

  Scenario: TC-SME-290 : ทดสอบปุ่ม Cancel ใน Edit OEM (Edit)
    When คลิกปุ่ม Cancel19

  Scenario: TC-SME-291 : ทดสอบปุ่ม Confirm ใน Edit OEM (Edit)
    When คลิกปุ่มไอคอนถังขยะ4
    When คลิกปุ่ม Confirm7

  Scenario: TC-SME-292 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง ใน Permission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก11

  Scenario: TC-SME-293 : ทดสอบการกเลือก OEM ใน Permission Management (Edit)
    When เลือก OEM3

  Scenario: TC-SME-294 : ทดสอบการ Search ข้อมูล ใน Permission Management (Edit)
    When คลิกปุ่ม Search13

  Scenario: TC-SME-295 : ทดสอบการ Clear ข้อมูลค้นหา ใน Permission Management (Edit)
    When คลิกปุ่ม Clear12

  Scenario: TC-SME-296 : ทดสอบปุ่ม Add Menuใน Permission Management (Edit)
    When คลิกปุ่ม Add Menu3

  Scenario: TC-SME-297 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก12

  Scenario: TC-SME-298 : ทดสอบการ Search ข้อมูล Module ใน  หน้าPermission Management (Edit)
    When คลิกปุ่ม Search14

  Scenario: TC-SME-299 : ทดสอบการ Clear ข้อมูลค้นหา Module ใน หน้าPermission Management (Edit)
    When คลิกปุ่ม Clear13

  Scenario: TC-SME-300 : ทดสอบการเลือกข้อมูล Module ใน หน้าPermission Management (Edit)
    When คลิกเลือก ข้อมูล2

  Scenario: TC-SME-301 : ทดสอบการเลือกSelect All Module ใน หน้าPermission Management (Edit)
    When คลิกเลือก Select All3

  Scenario: TC-SME-302 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Menu Level 1 ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก13

  Scenario: TC-SME-303 : ทดสอบการ Search ข้อมูล Menu Level 1 ใน  หน้าPermission Management (Edit)
    When คลิกปุ่ม Search15

  Scenario: TC-SME-304 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 1ใน หน้าPermission Management (Edit)
    When คลิกปุ่ม Clear14

  Scenario: TC-SME-305 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Menu Level 2 ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก14

  Scenario: TC-SME-306 : ทดสอบการ Search ข้อมูล Menu Level 2 ใน  หน้าPermission Management (Edit)
    When คลิกปุ่ม Search16

  Scenario: TC-SME-307 : ทดสอบการ Clear ข้อมูลค้นหา Menu Level 2 ใน หน้าPermission Management (Edit)
    When คลิกปุ่ม Clear15

  Scenario: TC-SME-308 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก15

  Scenario: TC-SME-309 : ทดสอบการ Search ข้อมูล Feature ใน  หน้าPermission Management (Edit)
    When คลิกปุ่ม Search17

  Scenario: TC-SME-310 : ทดสอบการ Clear ข้อมูลค้นหา Feature ใน หน้าPermission Management (Edit)
    When คลิกปุ่ม Clear16

  Scenario: TC-SME-311 : ทดสอบกด Module & Menu (Edit)
    When คลิก Module & Menu5

  Scenario: TC-SME-312 : ทดสอบกด Feature (Edit)
    When คลิก Feature3

  Scenario: TC-SME-313 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu(Edit)
    When คลิก Module & Menu6
    When กด เลือกข้อมูล7

  Scenario: TC-SME-314 : ทดสอบกดเลือก Select All ใน Module & Menu (Edit)
    When กด เลือกข้อมูล8

  Scenario: TC-SME-315 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu (Edit)
    When คลิกปุ่มแว่นขยาย5

  Scenario: TC-SME-316 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module & Menu ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก16

  Scenario: TC-SME-317 : ทดสอบปุ่ม Search (Module & Menu) (Edit)
    When กดปุ่ม Search22

  Scenario: TC-SME-318 : ทดสอบปุ่ม Reset (Module & Menu) (Edit)
    When กดปุ่ม Reset21

  Scenario: TC-SME-319 : ทดสอบปุ่ม Close (Module & Menu) (Edit)
    When กดปุ่ม Close23

  Scenario: TC-SME-320 : ทดสอบกดเลือก ข้อมูล ใน  Feature (Edit)
    When คลิก  Feature4
    When กด เลือกข้อมูล9

  Scenario: TC-SME-321 : ทดสอบกดเลือก Select All ใน  Feature (Edit)
    When กด เลือกข้อมูล10

  Scenario: TC-SME-322 : ทดสอบปุ่มไอคอน แว่นขยาย ใน  Feature (Edit)
    When คลิกปุ่มแว่นขยาย6

  Scenario: TC-SME-323 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก17

  Scenario: TC-SME-324 : ทดสอบปุ่ม Search ( Feature) (Edit)
    When กดปุ่ม Search23

  Scenario: TC-SME-325 : ทดสอบปุ่ม Reset ( Feature) (Edit)
    When กดปุ่ม Reset22

  Scenario: TC-SME-326 : ทดสอบปุ่ม Close ( Feature) (Edit)
    When กดปุ่ม Close24

  Scenario: TC-SME-327 : ทดสอบปุ่ม Cancel ในหน้า New Company Add - Company (Edit)
    When คลิกปุ่ม Cancel20

  Scenario: TC-SME-328 : ทดสอบปุ่ม Savel ในหน้า New Company Add - Company (Edit)
    When คลิกปุ่ม Save15

  Scenario: TC-SME-329 : ทดสอบกด User (Edit)
    When คลิก User2

  Scenario: TC-SME-330 : ทดสอบการปุ่ม Add .ในหน้า New Company Edit - User (Edit)
    When คลิกปุ่มAdd7

  Scenario: TC-SME-331 : ทดสอบการกรอกข้้อมูล User Information ในหน้า New Company Edit - User - User Add(Edit)
    When กรอกข้อมูล Fill : Username2
    When กรอกข้อมูล Fill : First Name2
    When กรอกข้อมูล Fill : Last Name2
    When กรอกข้อมูล Fill : Gender2
    When กรอกข้อมูล Fill : Birthday2
    When กรอกข้อมูล Fill : Relationship Status2
    When กรอกข้อมูล Fill : Nationality2
    When กรอกข้อมูล Fill : Religion2
    When กรอกข้อมูล Fill : Employee ID2
    When กรอกข้อมูล Fill : Department2
    When กรอกข้อมูล Fill : Position2
    When กรอกข้อมูล Fill : House Number  Alley  Village  Building2
    When กรอกข้อมูล Fill : Province2
    When กรอกข้อมูล Fill : District2
    When กรอกข้อมูล Fill : Sub-district Ward2
    When กรอกข้อมูล Fill : Remark4
    When กรอกข้อมูล Fill : Contact Number2
    When กรอกข้อมูล Fill : Email4
    When กรอกข้อมูล Fill : Line ID2
    When กรอกข้อมูล Fill : Remark5

  Scenario: TC-SME-332 : ทดสอบการใส่รูปใน User Information ในหน้า New Company Edit - User - User Add(Edit)
    When ใส่รูป9

  Scenario: TC-SME-333 : ทดสอบการใส่ไฟล์ใน Upload Document ในหน้า New Company Edit - User - User Add(Edit)
    When ใส่ไฟล์2

  Scenario: TC-SME-334 : ทดสอบการเลือกข้อมูลใน Select OEM ในหน้า New Company Edit - User - User Add(Edit)
    When เลือกข้อมูล Fill : Select OEM3
    When เลือกข้อมูล Fill : Select User Group2

  Scenario: TC-SME-335 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User - User Add (Edit)
    When คลิกปุ่ม Cancel21

  Scenario: TC-SME-336 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel22

  Scenario: TC-SME-337 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel23
    When คลิกปุ่ม Confirm8

  Scenario: TC-SME-338 : ทดสอบปุ่ม Savel ในหน้าNew Company Edit - User - User Add (Edit)
    When คลิกปุ่ม Save16

  Scenario: TC-SME-339 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel24

  Scenario: TC-SME-340 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Save17
    When คลิกปุ่ม Confirm9

  Scenario: TC-SME-341 : ทดสอบกดจุด 3 จุด (Edit)
    When คลิกจุด 3 จุด

  Scenario: TC-SME-342 : ทดสอบการปุ่ม Edit .ในหน้า New Company Edit - User - User Edit (Edit)
    When คลิกปุ่มEdit2

  Scenario: TC-SME-343 : ทดสอบการปุ่ม Cancel.ในหน้า New Company Edit - User - User Edit (Edit)
    When คลิกปุ่ม Cancel25

  Scenario: TC-SME-344 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel26

  Scenario: TC-SME-345 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel27
    When คลิกปุ่ม Confirm10

  Scenario: TC-SME-346 : ทดสอบการแก้ไขข้้อมูล Companyในหน้า New Company Edit - User(Edit)
    When คลิกจุด 3 จุด2
    When คลิกปุ่มEdit3
    When แก้ไขข้อมูล Fill : Username
    When แก้ไขข้อมูล Fill : First Name
    When แก้ไขข้อมูล Fill : Last Name
    When แก้ไขข้อมูล Fill : Gender
    When แก้ไขข้อมูล Fill : Birthday
    When แก้ไขข้อมูล Fill : Relationship Status
    When แก้ไขข้อมูล Fill : Nationality
    When แก้ไขข้อมูล Fill : Religion
    When แก้ไขข้อมูล Fill : Employee ID
    When แก้ไขข้อมูล Fill : Department
    When แก้ไขข้อมูล Fill : Position
    When แก้ไขข้อมูล Fill : House Number  Alley  Village  Building
    When แก้ไขข้อมูล Fill : Province
    When แก้ไขข้อมูล Fill : District
    When แก้ไขข้อมูล Fill : Sub-district Ward
    When แก้ไขข้อมูล Fill : Remark
    When แก้ไขข้อมูล Fill : Contact Number
    When แก้ไขข้อมูล Fill : Email2
    When แก้ไขข้อมูล Fill : Line ID
    When แก้ไขข้อมูล Fill : Remark2

  Scenario: TC-SME-347 : ทดสอบการใส่รูปใน User Informationในหน้า New Company Edit - User - User Add(Edit)
    When แก้รูป

  Scenario: TC-SME-348 : ทดสอบการใส่ไฟล์ใน Upload Documentในหน้า New Company Edit - User - User Add(Edit)
    When ใส่ไฟล์3

  Scenario: TC-SME-349 : ทดสอบการเลือกข้อมูลใน Select OEM ในหน้า New Company Edit - User - User Add(Edit)
    When เลือกข้อมูล11

  Scenario: TC-SME-350 : ทดสอบปุ่ม Savel ในหน้า New Company Edit - User - User Add (Edit)
    When คลิกปุ่ม Save18

  Scenario: TC-SME-351 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel28

  Scenario: TC-SME-352 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Save19
    When คลิกปุ่ม Confirm11

  Scenario: TC-SME-353 : ทดสอบปุ่ม View ในหน้า New Company Edit - User (Edit)
    When คลิกจุด 3 จุด3
    When คลิกปุ่ม View
    When คลิกลูกศรกลับ

  Scenario: TC-SME-354 : ทดสอบการกรอกข้อมูลใน Global Search ด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User (Edit)
    When กรอกข้อมูลค้นหา31

  Scenario: TC-SME-355 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User (Edit)
    When คลิกปุ่มค้นหา5

  Scenario: TC-SME-356 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User (Edit)
    When คลิกปุ่ม Clear17

  Scenario: TC-SME-357 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User (Edit)
    When กด Filter ข้อมูล4

  Scenario: TC-SME-358 : ทดสอบไอคอน จัดเรียงข้อมูล (Name) ใน New Company Edit - User (Edit)
    When กดไอคอน จัดเรียงข้อมูล26

  Scenario: TC-SME-359 : ทดสอบไอคอน ค้นหาข้อมูล (Name) ใน New Company Edit - User (Edit)
    When กดไอคอน กรองข้อมูล25

  Scenario: TC-SME-360 : ทดสอบการกรอกข้อมูลใน Global Search(Name) (Edit)
    When กรอกข้อมูลค้นหา32

  Scenario: TC-SME-361 : ทดสอบปุ่ม Search (Name) ใน New Company Edit - User (Edit)
    When กดปุ่ม Search24

  Scenario: TC-SME-362 : ทดสอบปุ่ม Reset (Name) ใน New Company Edit - User (Edit)
    When กดปุ่ม Reset23

  Scenario: TC-SME-363 : ทดสอบปุ่ม Close (Name) ใน New Company Edit - User (Edit)
    When กดปุ่ม Close25

  Scenario: TC-SME-364 : ทดสอบไอคอน จัดเรียงข้อมูล (Username) ใน New Company Edit - User (Edit
    When กดไอคอน จัดเรียงข้อมูล27

  Scenario: TC-SME-365 : ทดสอบไอคอน ค้นหาข้อมูล (Username) ใน New Company Edit - User (Edit)
    When กดไอคอน กรองข้อมูล26

  Scenario: TC-SME-366 : ทดสอบการกรอกข้อมูลใน Global Search (Username) (Edit)
    When กรอกข้อมูลค้นหา33

  Scenario: TC-SME-367 : ทดสอบปุ่ม Search (Username) ใน New Company Edit - User (Edit)
    When กดปุ่ม Search25

  Scenario: TC-SME-368 : ทดสอบปุ่ม Reset (Username) ใน New Company Edit - User (Edit)
    When กดปุ่ม Reset24

  Scenario: TC-SME-369 : ทดสอบปุ่ม Close (Username) ใน New Company Edit - User (Edit)
    When กดปุ่ม Close26

  Scenario: TC-SME-370 : ทดสอบไอคอน จัดเรียงข้อมูล (Contract Number) ใน New Company Edit - User (Edit)
    When กดไอคอน จัดเรียงข้อมูล28

  Scenario: TC-SME-371 : ทดสอบไอคอน ค้นหาข้อมูล (Contract Number) ใน New Company Edit - User (Edit)
    When กดไอคอน กรองข้อมูล27

  Scenario: TC-SME-372 : ทดสอบการกรอกข้อมูลใน Global Search (Deployment Type) (Edit)
    When กรอกข้อมูลค้นหา34

  Scenario: TC-SME-373 : ทดสอบปุ่ม Search (Contract Number) ใน New Company Edit - User (Edit)
    When กดปุ่ม Search26

  Scenario: TC-SME-374 : ทดสอบปุ่ม Reset (Contract Number) ใน New Company Edit - User (Edit)
    When กดปุ่ม Reset25

  Scenario: TC-SME-375 : ทดสอบปุ่ม Close (Contract Number) ใน New Company Edit - User (Edit)
    When กดปุ่ม Close27

  Scenario: TC-SME-376 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User (Edit)
    When กดไอคอน จัดเรียงข้อมูล29

  Scenario: TC-SME-377 : ทดสอบปุ่มกรองข้อมูล  (OEM) ใน New Company Edit - User (Edit)
    When กดไอคอน กรองข้อมูล28

  Scenario: TC-SME-378 : ทดสอบการกรอกข้อมูลใน Global Search (OEM) ใน New Company Edit - User (Edit)
    When กรอกข้อมูลค้นหา35

  Scenario: TC-SME-379 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User (Edit)
    When เลือกข้อมูล12

  Scenario: TC-SME-380 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User (Edit)
    When กดปุ่ม Search27

  Scenario: TC-SME-381 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User (Edit)
    When กดปุ่ม Reset26

  Scenario: TC-SME-382 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User (Edit)
    When กดปุ่ม Close28

  Scenario: TC-SME-383 : ทดสอบไอคอน จัดเรียงข้อมูล (Status) ใน New Company Edit - User (Edit)
    When กดไอคอน จัดเรียงข้อมูล30

  Scenario: TC-SME-384 : ทดสอบปุ่มกรองข้อมูล (Status) ใน New Company Edit - User (Edit)
    When กดไอคอน กรองข้อมูล29

  Scenario: TC-SME-385 : ทดสอบการกรอกข้อมูลใน Global Search (Status) ใน New Company Edit - User (Edit)
    When กรอกข้อมูลค้นหา36

  Scenario: TC-SME-386 : ทดสอบการเลือกข้อมูล (Status) ใน New Company Edit - User (Edit)
    When เลือกข้อมูล13

  Scenario: TC-SME-387 : ทดสอบปุ่ม Search (Status) ใน New Company Edit - User (Edit)
    When กดปุ่ม Search28

  Scenario: TC-SME-388 : ทดสอบปุ่ม Reset (Status) ใน New Company Edit - User (Edit)
    When กดปุ่ม Reset27

  Scenario: TC-SME-389 : ทดสอบปุ่ม Close (Status) ใน New Company Edit - User (Edit)
    When กดปุ่ม Close29

  Scenario: TC-SME-390 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User (Edit)
    When เลือก จำนวน/Pageที่ต้องการ4

  Scenario: TC-SME-391 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า ในหน้า New Company Edit - User (Edit)
    When กด ไอคอน >4

  Scenario: TC-SME-392 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า ในหน้า New Company Edit - User (Edit)
    When กด ไอคอน <4

  Scenario: TC-SME-393 : ทดสอบปุ่ม Delete ในหน้า New Company Edit - User (Edit)
    When คลิกปุ่มจุด 3 จุด
    When คลิกปุ่ม Delete

  Scenario: TC-SME-394 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel29

  Scenario: TC-SME-395 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่มจุด 3 จุด2
    When คลิกปุ่ม Delete2
    When คลิกปุ่ม Confirm12

  Scenario: TC-SME-396 : ทดสอบกด User Group (Edit)
    When คลิก User Group2

  Scenario: TC-SME-397 : ทดสอบการปุ่ม Add .ในหน้า New Company Edit - User Group Add (Edit)
    When คลิกปุ่มAdd8

  Scenario: TC-SME-398 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User Group Edit (Edit)
    When คลิกปุ่ม Cancel30

  Scenario: TC-SME-399 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel31

  Scenario: TC-SME-400 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel32
    When คลิกปุ่ม Confirm13

  Scenario: TC-SME-401 : ทดสอบการกรอกข้้อมูล User Groupในหน้า New Company Edit - User Group Add(Edit)
    When คลิกปุ่มAdd9
    When กรอกข้อมูล Fill : User Group Name2
    When กรอกข้อมูล Fill : Select OEM
    When กรอกข้อมูล Fill : Remark6

  Scenario: TC-SME-402 : ทดสอบการเลือกข้้อมูล Select Userในหน้า New Company Edit - User Group Add(Edit)
    When เลือกข้อมูล Select User

  Scenario: TC-SME-403 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน Permission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก18

  Scenario: TC-SME-404 : ทดสอบการ Search ข้อมูล Feature ใน Permission Management (Edit)
    When คลิกปุ่ม Search18

  Scenario: TC-SME-405 : ทดสอบการ Clear ข้อมูลค้นหา Feature ใน Permission Management (Edit)
    When คลิกปุ่ม Clear18

  Scenario: TC-SME-406 : ทดสอบกด Module & Menu (Edit)
    When คลิก Module & Menu7

  Scenario: TC-SME-407 : ทดสอบกด Feature (Edit)
    When คลิก Feature4

  Scenario: TC-SME-408 : ทดสอบกดเลือก ข้อมูล ใน Module & Menu(Edit)
    When คลิก Module & Menu8
    When กด เลือกข้อมูล11

  Scenario: TC-SME-409 : ทดสอบกดเลือก Select All ใน Module & Menu (Edit)
    When คลิก Module & Menu9
    When กด เลือกข้อมูล12

  Scenario: TC-SME-410 : ทดสอบปุ่มไอคอน แว่นขยาย ใน Module & Menu (Edit)
    When คลิกปุ่มแว่นขยาย7

  Scenario: TC-SME-411 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Module & Menu ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก19

  Scenario: TC-SME-412 : ทดสอบปุ่ม Search (Module & Menu) (Edit)
    When กดปุ่ม Search29

  Scenario: TC-SME-413 : ทดสอบปุ่ม Reset (Module & Menu) (Edit)
    When กดปุ่ม Reset28

  Scenario: TC-SME-414 : ทดสอบปุ่ม Close (Module & Menu) (Edit)
    When กดปุ่ม Close30

  Scenario: TC-SME-415 : ทดสอบกดเลือก ข้อมูล ใน  Feature (Edit)
    When คลิก  Feature5
    When กด เลือกข้อมูล13

  Scenario: TC-SME-416 : ทดสอบกดเลือก Select All ใน  Feature (Edit)
    When กด Select All6

  Scenario: TC-SME-417 : ทดสอบปุ่มไอคอน แว่นขยาย ใน  Feature (Edit)
    When คลิกปุ่มแว่นขยาย8

  Scenario: TC-SME-418 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง Feature ใน  หน้าPermission Management (Edit)
    When กรอกข้อมูล ในช่องกรอก20

  Scenario: TC-SME-419 : ทดสอบปุ่ม Search ( Feature) (Edit)
    When กดปุ่ม Search30

  Scenario: TC-SME-420 : ทดสอบปุ่ม Reset ( Feature) (Edit)
    When กดปุ่ม Reset29

  Scenario: TC-SME-421 : ทดสอบปุ่ม Close ( Feature) (Edit)
    When กดปุ่ม Close31

  Scenario: TC-SME-422 : ทดสอบปุ่ม Savel ในหน้า New Company Edit - User Group Edit (Edit)
    When คลิกปุ่ม Save20

  Scenario: TC-SME-423 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel33

  Scenario: TC-SME-424 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Save21
    When คลิกปุ่ม Confirm14

  Scenario: TC-SME-425 : ทดสอบกดจุด 3 จุด (Edit) New Company Edit - User Group
    When คลิกจุด 3 จุด4

  Scenario: TC-SME-426 : ทดสอบกดปุ่ม Edit (Edit) New Company Edit - User Group
    When คลิกปุ่ม Edit

  Scenario: TC-SME-427 : ทดสอบปุ่ม Cancel ในหน้า New Company Edit - User Group Edit (Edit)
    When คลิกปุ่ม Cancel34

  Scenario: TC-SME-428 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel35

  Scenario: TC-SME-429 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel36
    When คลิกปุ่ม Confirm15

  Scenario: TC-SME-430 : ทดสอบการกรอกข้้อมูล User Groupในหน้า New Company Edit - User Group Edit(Edit)
    When คลิกจุด 3 จุด5
    When คลิกปุ่ม Edit2
    When แก้ไขข้อมูล Fill : User Group Name
    When แก้ไขข้อมูล Fill : Select OEM
    When แก้ไขข้อมูล Fill : Remark3

  Scenario: TC-SME-431 : ทดสอบการเลือกข้้อมูล Select Userในหน้า New Company Edit - User Group Edit(Edit)
    When เลือกข้อมูล Select User2

  Scenario: TC-SME-432 : ทดสอบปุ่ม Savel ในหน้า New Company Edit - User Group Edit (Edit)
    When คลิกปุ่ม Save22

  Scenario: TC-SME-433 : ทดสอบปุ่ม Cancel ในหน้า Warning (Edit)
    When คลิกปุ่ม Cancel37

  Scenario: TC-SME-434 : ทดสอบปุ่ม Confirm ในหน้า Warning (Edit)
    When คลิกปุ่ม Save23
    When คลิกปุ่ม Confirm16

  Scenario: TC-SME-435 : ทดสอบการกรอกข้อมูลใน Global Searchด้วยข้อมูลที่แสดงในตาราง ในหน้า New Company Edit - User Group (Edit)
    When กรอกข้อมูลค้นหา37

  Scenario: TC-SME-436 : ทดสอบการ Search ข้อมูล ในหน้า New Company Edit - User Group (Edit)
    When คลิกปุ่มค้นหา6

  Scenario: TC-SME-437 : ทดสอบการ Clear ข้อมูลค้นหา ในหน้า New Company Edit - User Group (Edit)
    When คลิกปุ่ม Clear19

  Scenario: TC-SME-438 : ทดสอบการ Filter ข้อมูล ในหน้า New Company Edit - User Group (Edit)
    When กด Filter ข้อมูล5

  Scenario: TC-SME-439 : ทดสอบไอคอน จัดเรียงข้อมูล (User Group) ใน New Company Edit - User Group (Edit)
    When กดไอคอน จัดเรียงข้อมูล31

  Scenario: TC-SME-440 : ทดสอบไอคอน ค้นหาข้อมูล (User Group) ใน New Company Edit - User Group (Edit)
    When กดไอคอน กรองข้อมูล30

  Scenario: TC-SME-441 : ทดสอบการกรอกข้อมูลใน Global Search(User Group) ใน New Company Edit - User Group (Edit)
    When กรอกข้อมูลค้นหา38

  Scenario: TC-SME-442 : ทดสอบปุ่ม Search (User Group) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Search31

  Scenario: TC-SME-443 : ทดสอบปุ่ม Reset (User Group) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Reset30

  Scenario: TC-SME-444 : ทดสอบปุ่ม Close (User Group) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Close32

  Scenario: TC-SME-445 : ทดสอบไอคอน จัดเรียงข้อมูล (OEM) ใน New Company Edit - User Group (Edit)
    When กดไอคอน จัดเรียงข้อมูล32

  Scenario: TC-SME-446 : ทดสอบปุ่มกรองข้อมูล  (OEM) ใน New Company Edit - User Group (Edit)
    When กดไอคอน กรองข้อมูล31

  Scenario: TC-SME-447 : ทดสอบการกรอกข้อมูลใน Global Search(OEM) ใน New Company Edit - User Group (Edit)
    When กรอกข้อมูลค้นหา39

  Scenario: TC-SME-448 : ทดสอบการเลือกข้อมูล (OEM) ใน New Company Edit - User Group (Edit)
    When กด เลือกข้อมูล14

  Scenario: TC-SME-449 : ทดสอบปุ่ม Search (OEM) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Search32

  Scenario: TC-SME-450 : ทดสอบปุ่ม Reset (OEM) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Reset31

  Scenario: TC-SME-451 : ทดสอบปุ่ม Close (OEM) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Close33

  Scenario: TC-SME-452 : ทดสอบไอคอน จัดเรียงข้อมูล (Remark) ใน New Company Edit - User Group (Edit)
    When กดไอคอน จัดเรียงข้อมูล33

  Scenario: TC-SME-453 : ทดสอบไอคอน ค้นหาข้อมูล (Remark) ใน New Company Edit - User Group (Edit)
    When กดไอคอน ค้นหาข้อมูล17

  Scenario: TC-SME-454 : ทดสอบการกรอกข้อมูลใน Global Search(Remark) ใน New Company Edit - User Group (Edit)
    When กรอกข้อมูลค้นหา40

  Scenario: TC-SME-455 : ทดสอบปุ่ม Search (Remark)ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Search33

  Scenario: TC-SME-456 : ทดสอบปุ่ม Reset (Remark) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Reset32

  Scenario: TC-SME-457 : ทดสอบปุ่ม Close (Remark) ใน New Company Edit - User Group (Edit)
    When กดปุ่ม Close34

  Scenario: TC-SME-458 : ทดสอบการใช้งาน Pagination Control โดยทำการเปลี่ยน Limit ในหน้า New Company Edit - User Group (Edit)
    When เลือก จำนวน/Pageที่ต้องการ5

  Scenario: TC-SME-459 : ทดสอบการใช้งาน ไอคอนมากกว่าเปลี่ยนหน้า New Company Edit - User Group (Edit)
    When กด ไอคอน >5

  Scenario: TC-SME-460 : ทดสอบการใช้งาน ไอคอนน้อยเปลี่ยนหน้า New Company Edit - User Group (Edit)
    When กด ไอคอน <5

  Scenario: TC-SME-461 : ทดสอบการปุ่ม View ในหน้า New Company Edit - User Group (Edit)
    When คลิกจุด 3 จุด6
    When คลิกปุ่ม View2

  Scenario: TC-SME-462 : ทดสอบปุ่ม Cancel ใน View
    When คลิก User

  Scenario: TC-SME-463 : ทดสอบการปุ่ม Delete ในหน้า New Company Edit - User Group (Edit)
    When คลิกจุด 3 จุด7
    When คลิกปุ่ม Delete3

  Scenario: TC-SME-464 : ทดสอบปุ่ม Cancel ใน Warning
    When คลิกปุ่ม Cancel39

  Scenario: TC-SME-465 : ทดสอบปุ่ม Confirm ใน Warning
    When คลิกจุด 3 จุด8
    When คลิกปุ่ม Delete4
    When คลิกปุ่ม Confirm17

  Scenario: TC-SME-466 : ทดสอบการปุ่ม View ในหน้า SME Factory - OEM Management
    When คลิกจุด 3 จุด9
    When คลิกปุ่ม View3

  Scenario: TC-SME-467 : ทดสอบการกด View ใน User Group
    When คลิก User3

  Scenario: TC-SME-468 : ทดสอบการกด User Group ในView
    When คลิก User Group3

  Scenario: TC-SME-469 : ทดสอบการกด Company ในView
    When คลิก Company

  Scenario: TC-SME-470 : ทดสอบการปุ่ม Sort Menu ในหน้า SME Factory - OEM Management
    When คลิกจุด 3 จุด10
    When คลิกปุ่ม Sort Menu

  Scenario: TC-SME-471 : ทดสอบการกรอกข้อมูลใน Global Search ในหน้า Sort Menu
    When กรอกข้อมูล ในช่องกรอก21

  Scenario: TC-SME-472 : ทดสอบปุ่มไอคอน ปากกา ใน Sort Menu
    When คลิกปุ่ม Sort Menu2
    When คลิกปุ่ม ปากกา

  Scenario: TC-SME-473 : ทดสอบปุ่ม Cancel ใน Sort Menu
    When คลิกปุ่ม Cancel40

  Scenario: TC-SME-474 : ทดสอบปุ่ม Save ใน Sort Menu
    When คลิกปุ่ม Sort Menu3
    When คลิกปุ่ม Save24

  Scenario: TC-SME-475 : ทดสอบปุ่ม Cancel ใน Warning
    When คลิกปุ่มไอคอนถังขยะ5
    When คลิกปุ่ม Cancel41

  Scenario: TC-SME-476 : ทดสอบปุ่ม Confirm ใน Warning
    When คลิกปุ่มไอคอนถังขยะ6
    When คลิกปุ่ม Confirm18
