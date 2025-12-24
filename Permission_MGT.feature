Feature: Permission_MGT

  Scenario: P_MGT000 : ทดสอบการเข้าสู่เว็บไซต์
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5000/SignIn"
    When กรอก Username "#username"
    When กรอก Password "#password"
    When คลิกปุ่ม Login "Sign in"
    ##(Tap Module)##

  Scenario: P_MGT001 : (Tap Module) ทดสอบเข้าสู่เมนู Permission MGT และแสดงตาราง
    When เข้าสู่เมนู Permission MGT

  Scenario: P_MGT002 : (Tap Module) ทดสอบค้นหาข้อมูล Module ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search
    When คลิกปุ่ม Search

  Scenario: P_MGT003 : (Tap Module) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search2
    When คลิกปุ่ม Search2

  Scenario: P_MGT004 : (Tap Module) ทดสอบค้นหาข้อมูล Path ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search3
    When คลิกปุ่ม Search3

  Scenario: P_MGT005 : (Tap Module) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search4
    When คลิกปุ่ม Search4

  Scenario: P_MGT006 : (Tap Module) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search
    When เข้าสู่เมนู Permission MGT6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search5
    When คลิกปุ่ม Search5

  Scenario: P_MGT007 : (Tap Module) ทดสอบรีเซ็ตการค้นหา
    When เข้าสู่เมนู Permission MGT7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search6
    When คลิกปุ่ม Search6
    When คลิกปุ่ม Clear

  Scenario: P_MGT008 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Module
    When เข้าสู่เมนู Permission MGT8
    When คลิกไอคอนค้นหาคอลัมน์ Module
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search7
    When คลิกปุ่ม Search7

  Scenario: P_MGT009 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Module
    When เข้าสู่เมนู Permission MGT9
    When คลิกไอคอนค้นหาคอลัมน์ Module2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search8
    When คลิกปุ่ม Search8
    When คลิกปุ่ม Reset
    When คลิกปุ่ม Search9

  Scenario: P_MGT010 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT10
    When คลิกไอคอนค้นหาคอลัมน์ Display Name
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search9
    When คลิกปุ่ม Search10

  Scenario: P_MGT011 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT11
    When คลิกไอคอนค้นหาคอลัมน์ Display Name2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search10
    When คลิกปุ่ม Search11
    When คลิกปุ่ม Reset2
    When คลิกปุ่ม Search12

  Scenario: P_MGT012 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Path
    When เข้าสู่เมนู Permission MGT12
    When คลิกไอคอนค้นหาคอลัมน์ Path
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search11
    When คลิกปุ่ม Search13

  Scenario: P_MGT013 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Path
    When เข้าสู่เมนู Permission MGT13
    When คลิกไอคอนค้นหาคอลัมน์ Path2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search12
    When คลิกปุ่ม Search14
    When คลิกปุ่ม Reset3
    When คลิกปุ่ม Search15

  Scenario: P_MGT014 : (Tap Module) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT14
    When คลิกไอคอนค้นหาคอลัมน์ Create Date
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search13
    When คลิกปุ่ม Search16

  Scenario: P_MGT015 : (Tap Module) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT15
    When คลิกไอคอนค้นหาคอลัมน์ Create Date2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search14
    When คลิกปุ่ม Search17
    When คลิกปุ่ม Reset4
    When คลิกปุ่ม Search18

  Scenario: P_MGT016 : (Tap Module) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน
    When เข้าสู่เมนู Permission MGT16
    When คลิกไอคอนค้นหาคอลัมน์ Module3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search15
    When คลิกปุ่ม Search19
    When คลิกไอคอนค้นหาคอลัมน์ Display Name3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search16
    When คลิกปุ่ม Search20
    When คลิกไอคอนค้นหาคอลัมน์ Path3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search17
    When คลิกปุ่ม Search21
    When คลิกไอคอนค้นหาคอลัมน์ Create Date3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search18
    When คลิกปุ่ม Search22

  Scenario: P_MGT017 : (Tap Module)  ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text(Module , Display Name , Path)
    When กดปุ่ม Sort ข้อมูล

  Scenario: P_MGT018 : (Tap Module)  ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่ (Create Date)
    When กดปุ่ม Sort ข้อมูล2

  Scenario: P_MGT019 : (Tap Module) ทดสอบการเลือก Filter Select All
    When กดปุ่ม Filter เลือกดู Select All

  Scenario: P_MGT020 : (Tap Module) ทดสอบการเลือก Filter ดูทีละคอลัมน์
    When กดปุ่ม Filter เลือกดูทีละรายการ
  # Scenario: P_MGT021 : (Tap Module) ทดสอบ Drag and drop ลำดับ
  #   When เข้าสู่เมนู Permission MGT17
  #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ

  Scenario: P_MGT022 : (Tap Module) ทดสอบแก้ไขลำดับตัวเลข
    When เข้าสู่เมนู Permission MGT18
    When คลิกปุ่ม Edit
    When ใส่เลขลำดับ
    When คลิกปุ่ม Save

  Scenario: P_MGT023 : (Tap Module) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ
    When เข้าสู่เมนู Permission MGT19
    When คลิกปุ่ม Edit2
    When ใส่เลขลำดับในช่องลำดับ
    When คลิกปุ่ม Save2

  Scenario: P_MGT024 : (Tap Module) ทดสอบกรอกเลขลำดับซ้ำกัน
    When เข้าสู่เมนู Permission MGT20
    When คลิกปุ่ม Edit3
    When ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน
    When คลิกปุ่ม Save3

  Scenario: P_MGT025 : (Tap Module) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ
    When เข้าสู่เมนู Permission MGT21
    When คลิกปุ่ม Edit4
    When คลิก Tab Module

  Scenario: P_MGT026 : (Tap Module) ทดสอบ Add ข้อมูลทั้งหมด
    When เข้าสู่เมนู Permission MGT22
    When คลิกปุ่ม Add
    When กรอก Module Name
    When กรอก Display Name (Default)
    When กรอก Path
    When เลือก Icon
    When คลิกปุ่ม Set Config (Company Label Configuration)
    When เลือก Company
    When กรอก Menu Name
    When กรอก Display Name
    When คลิกปุ่ม Save (Modal Set Config)
    When กรอก Academy Link (Card Academy Content)
    When คลิกปุ่ม Save4
    When คลิกปุ่ม Confirm

  Scenario: P_MGT027 : (Tap Module) ทดสอบ Add ข้อมูลเฉพาะ Card Module
    When เข้าสู่เมนู Permission MGT23
    When คลิกปุ่ม Add2
    When กรอก Module Name2
    When กรอก Display Name (Default)2
    When กรอก Path2
    When เลือก Icon2
    When คลิกปุ่ม Save5
    When คลิกปุ่ม Confirm2

  Scenario: P_MGT028 : (Tap Module) ทดสอบ Add ข้อมูลเฉพาะ Card Module และทำการอัปโหลด Icon เอง
    When เข้าสู่เมนู Permission MGT24
    When คลิกปุ่ม Add3
    When กรอก Module Name3
    When กรอก Display Name (Default)3
    When กรอก Path3
    When กรอก Upload Image
    When เลือก Icon3
    When คลิกปุ่ม Save6
    When คลิกปุ่ม Confirm3

  Scenario: P_MGT029 : (Tap Module) ทดสอบ Add ข้อมูลโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB
    When เข้าสู่เมนู Permission MGT25
    When คลิกปุ่ม Add4
    When อัปโหลด Icon ที่มีขนาดเกิน 5 MB

  Scenario: P_MGT030 : (Tap Module) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก
    When เข้าสู่เมนู Permission MGT26
    When คลิกปุ่ม Add5
    When คลิกปุ่ม Save8

  Scenario: P_MGT031 : (Tap Module) ทดสอบ Add ข้อมูลโดยกรอก Module Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ
    When เข้าสู่เมนู Permission MGT27
    When คลิกปุ่ม Add6
    When กรอก Module Name4
    When กรอก Display Name (Default)4
    When กรอก Path4
    When คลิกปุ่ม Save9
    When คลิกปุ่ม Confirm4

  Scenario: P_MGT032 : (Tap Module) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT28
    When คลิกปุ่ม Add7
    When คลิกปุ่ม Set Config
    When คลิกปุ่ม Save10

  Scenario: P_MGT033 : (Tap Module) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT29
    When คลิกปุ่ม Add8
    When คลิกปุ่ม Set Config2
    When เลือก Company2
    When กรอก Menu Name2
    When กรอก Display Name2
    When คลิกปุ่ม Save11

  Scenario: P_MGT034 : (Tap Module) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search19
    When คลิกปุ่ม Search23

  Scenario: P_MGT035 : (Tap Module) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search20
    When คลิกปุ่ม Search24

  Scenario: P_MGT036 : (Tap Module) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด
    When คลิกปุ่ม Edit5
    When แก้ไขข้อมูล Display Name
    When คลิกปุ่ม Save11

  Scenario: P_MGT037 : (Tap Module) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด2
    When คลิกปุ่ม Edit6
    When แก้ไขข้อมูล Display Name2
    When คลิกปุ่ม Cancel
    When คลิกปุ่ม Confirm5

  Scenario: P_MGT038 : (Tap Module) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด3
    When คลิกปุ่ม Delete
    When คลิกปุ่ม Cancel2

  Scenario: P_MGT039 : (Tap Module) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด4
    When คลิกปุ่ม Delete2
    When คลิกปุ่ม Confirm6

  Scenario: P_MGT040 : (Tap Module) ทดสอบ Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT
    When คลิกปุ่ม Edit7
    When แก้ไขข้อมูลที่ต้องการแก้ไข
    When คลิกปุ่ม Save13

  Scenario: P_MGT041 : (Tap Module) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT2
    When คลิกปุ่ม Edit8
    When ลบค่าในช่อง Module Name
    When ลบค่าในช่อง Display Name
    When ลบค่าในช่อง Path
    When คลิกปุ่ม Save14

  Scenario: P_MGT042 : (Tap Module) ทดสอบ Edit โดยแก้ไขให้ Module Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT3
    When คลิกปุ่ม Edit9
    When แก้ไขให้ Module Name, Display Name, Path ซ้ำกับข้อมูลอื่นในระบบ
    When คลิกปุ่ม Save15
    When คลิกปุ่ม Confirm7

  Scenario: P_MGT043 : (Tap Module) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT4
    When คลิกปุ่ม Edit10
    When เลือก Upload Image
    When เลือกรูปภาพเพื่ออัปโหลด
    When คลิกปุ่ม Save16
    When คลิกปุ่ม Confirm8

  Scenario: P_MGT044 : (Tap Module) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT5
    When คลิกปุ่ม Edit11
    When เลือก Upload Image2
    When เลือกรูปภาพเพื่ออัปโหลด2
    When คลิกปุ่ม Save17

  Scenario: P_MGT045 : (Tap Module) ทดสอบเพิ่มข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Edit
    When เข้าสู่เมนู Permission MGT30
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit
    When คลิกปุ่ม Set Config3
    When คลิกปุ่ม Save18

  Scenario: P_MGT046 : (Tap Module) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Edit
    When เข้าสู่เมนู Permission MGT31
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit2
    When คลิกปุ่ม Set Config4
    When เลือก Company3

  Scenario: P_MGT047 : (Tap Module) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search21
    When คลิกปุ่ม Search25

  Scenario: P_MGT048 : (Tap Module) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search22
    When คลิกปุ่ม Search26

  Scenario: P_MGT049 : (Tap Module) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด5
    When คลิกปุ่ม Edit12
    When แก้ไขข้อมูล Display Name3
    When คลิกปุ่ม Save19

  Scenario: P_MGT050 : (Tap Module) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด6
    When คลิกปุ่ม Edit13
    When แก้ไขข้อมูล Display Name4
    When คลิกปุ่ม Cancel3
    When คลิกปุ่ม Confirm9

  Scenario: P_MGT051 : (Tap Module) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด8
    When คลิกปุ่ม Delete3
    When คลิกปุ่ม Cancel4

  Scenario: P_MGT052 : (Tap Module) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด9
    When คลิกปุ่ม Delete4
    When คลิกปุ่ม Confirm10

  Scenario: P_MGT053 : (Tap Module) ทดสอบดู Mode View
    When เข้าสู่เมนู Permission MGT32
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View

  Scenario: P_MGT054 : (Tap Module) ทดสอบยกเลิกลบข้อมูล
    When เข้าสู่เมนู Permission MGT33
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete2
    When คลิกปุ่ม Cancel5

  Scenario: P_MGT055 : (Tap Module) ทดสอบลบข้อมูล
    When เข้าสู่เมนู Permission MGT34
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete3
    When คลิกปุ่ม Confirm11

  Scenario: P_MGT056 : (Tap Module) ทดสอบลบข้อมูล ที่มี Menu Lv1 ผูกอยู่
    When เข้าสู่เมนู Permission MGT35
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete4
    When คลิกปุ่ม Confirm12
#(Tap Menu Level 1)##

  Scenario: P_MGT057 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Module ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 1)
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search23
    When คลิกปุ่ม Search27

  Scenario: P_MGT058 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Menu Level 1 ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 1)2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search24
    When คลิกปุ่ม Search28

  Scenario: P_MGT059 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 1)3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search25
    When คลิกปุ่ม Search29

  Scenario: P_MGT060 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Path ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 1)4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search26
    When คลิกปุ่ม Search30

  Scenario: P_MGT061 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 1)5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search27
    When คลิกปุ่ม Search31

  Scenario: P_MGT062 : (Tap Menu Level 1) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 1)6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search28
    When คลิกปุ่ม Search32

  Scenario: P_MGT063 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหา
    When เข้าสู่เมนู Permission MGT (Menu Level 1)7
    When คลิกไอคอนค้นหา
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search29
    When คลิกปุ่ม Search33
    When คลิกปุ่ม Clear2

  Scenario: P_MGT064 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Module
    When เข้าสู่เมนู Permission MGT (Menu Level 1)8
    When คลิกไอคอนค้นหาคอลัมน์ Module4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search30
    When คลิกปุ่ม Search34

  Scenario: P_MGT065 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Module
    When เข้าสู่เมนู Permission MGT (Menu Level 1)9
    When คลิกไอคอนค้นหา2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search31
    When คลิกปุ่ม Search35
    When คลิกปุ่ม Reset5
    When คลิกปุ่ม Search36

  Scenario: P_MGT066 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu Level 1
    When เข้าสู่เมนู Permission MGT (Menu Level 1)10
    When คลิกไอคอนค้นหาคอลัมน์ Menu Level 1
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search32
    When คลิกปุ่ม Search37

  Scenario: P_MGT067 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์  Menu Level 1
    When เข้าสู่เมนู Permission MGT (Menu Level 1)11
    When คลิกไอคอนค้นหา3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search33
    When คลิกปุ่ม Search38
    When คลิกปุ่ม Reset6
    When คลิกปุ่ม Search39

  Scenario: P_MGT068 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT (Menu Level 1)12
    When คลิกไอคอนค้นหาคอลัมน์ Display Name4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search34
    When คลิกปุ่ม Search40

  Scenario: P_MGT069 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT (Menu Level 1)13
    When คลิกไอคอนค้นหา4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search35
    When คลิกปุ่ม Search41
    When คลิกปุ่ม Reset7
    When คลิกปุ่ม Search42

  Scenario: P_MGT070 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Path
    When เข้าสู่เมนู Permission MGT (Menu Level 1)14
    When คลิกไอคอนค้นหาคอลัมน์ Path4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search36
    When คลิกปุ่ม Search43

  Scenario: P_MGT071 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Path
    When เข้าสู่เมนู Permission MGT (Menu Level 1)15
    When คลิกไอคอนค้นหา5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search37
    When คลิกปุ่ม Search44
    When คลิกปุ่ม Reset8
    When คลิกปุ่ม Search45

  Scenario: P_MGT072 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT (Menu Level 1)16
    When คลิกไอคอนค้นหาคอลัมน์ Create Date4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search38
    When คลิกปุ่ม Search46

  Scenario: P_MGT073 : (Tap Menu Level 1) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT (Menu Level 1)17
    When คลิกไอคอนค้นหา6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search39
    When คลิกปุ่ม Search47
    When คลิกปุ่ม Reset9
    When คลิกปุ่ม Search48

  Scenario: P_MGT074 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน
    When เข้าสู่เมนู Permission MGT (Menu Level 1)18
    When คลิกไอคอนค้นหาคอลัมน์ Module5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search40
    When คลิกปุ่ม Search49
    When คลิกไอคอนค้นหาคอลัมน์ Display Name5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search41
    When คลิกปุ่ม Search50
    When คลิกไอคอนค้นหาคอลัมน์ Path5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search42
    When คลิกปุ่ม Search51
    When คลิกไอคอนค้นหาคอลัมน์ Create Date5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search43
    When คลิกปุ่ม Search52

  Scenario: P_MGT075 : (Tap Menu Level 1) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text (Module , Menu LV.1 , Display Name , Path)
    When กดปุ่ม Sort ข้อมูล3

  Scenario: P_MGT076 : (Tap Menu Level 1) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่(Create Date)
    When กดปุ่ม Sort ข้อมูล4

  Scenario: P_MGT077 : (Tap Menu Level 1) ทดสอบการเลือก Filter Select All
    When กดปุ่ม Filter เลือกดู Select All2

  Scenario: P_MGT078 : (Tap Menu Level 1) ทดสอบการเลือก Filter ดูทีละคอลัมน์
    When กดปุ่ม Filter เลือกดูทีละรายการ2
  # Scenario: P_MGT079 : (Tap Menu Level 1) ทดสอบ Drag and drop ลำดับ
  #   When เข้าสู่เมนู Permission MGT (Menu Level 1)19
  #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ2
  # Scenario: P_MGT080 : (Tap Menu Level 1) ทดสอบค้นหาข้อมูลแล้ว Drag and drop ลำดับ
  #   When เข้าสู่เมนู Permission MGT (Menu Level 1)20
  #   When ค้นหาข้อมูลแล้วคลิกปุ่ม Seach
  #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ3

  Scenario: P_MGT081 : (Tap Menu Level 1) ทดสอบแก้ไขลำดับตัวเลข
    When เข้าสู่เมนู Permission MGT (Menu Level 1)21
    When คลิกปุ่ม Edit14
    When ใส่เลขลำดับ2
    When คลิกปุ่ม Save20

  Scenario: P_MGT082 : (Tap Menu Level 1) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ
    When เข้าสู่เมนู Permission MGT (Menu Level 1)22
    When คลิกปุ่ม Edit15
    When ใส่เลขลำดับในช่องลำดับ2
    When คลิกปุ่ม Save21

  Scenario: P_MGT083 : (Tap Menu Level 1) ทดสอบกรอกเลขลำดับซ้ำกัน
    When เข้าสู่เมนู Permission MGT (Menu Level 1)23
    When คลิกปุ่ม Edit16
    When ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน2
    When คลิกปุ่ม Save22

  Scenario: P_MGT084 : (Tap Menu Level 1) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ
    When เข้าสู่เมนู Permission MGT (Menu Level 1)24
    When คลิกปุ่ม Edit17
    When คลิก Tab Module2

  Scenario: P_MGT085 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลทั้งหมด
    When เข้าสู่เมนู Permission MGT (Menu Level 1)25
    When คลิกปุ่ม Add9
    When เลือก Module Name
    When กรอก Menu Name3
    When กรอก Display Name (Default)5
    When กรอก Path5
    When เลือก Icon4
    When คลิกปุ่ม Set Config (Company Label Configuration)2
    When เลือก Company4
    When กรอก Display Name3
    When คลิกปุ่ม Save (Modal Set Config)2
    When กรอก Academy Link (Card Academy Content)2
    When คลิกปุ่ม Save23
    When คลิกปุ่ม Confirm13

  Scenario: P_MGT086 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลเฉพาะ Card Module
    When เข้าสู่เมนู Permission MGT (Menu Level 1)26
    When คลิกปุ่ม Add10
    When เลือก Module Name2
    When กรอก Menu Name4
    When กรอก Display Name (Default)6
    When กรอก Path6
    When เลือก Icon5
    When คลิกปุ่ม Save24
    When คลิกปุ่ม Confirm14

  Scenario: P_MGT087 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลเฉพาะ Card Moduleและทำการอัปโหลด Icon เอง
    When เข้าสู่เมนู Permission MGT (Menu Level 1)27
    When คลิกปุ่ม Add11
    When กรอก Module Name5
    When กรอก Menu Name5
    When กรอก Display Name (Default)7
    When กรอก Path7
    When เลือก Upload Image3
    When อัปโหลด Icon
    When คลิกปุ่ม Save25
    When คลิกปุ่ม Confirm15

  Scenario: P_MGT088 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB
    When เข้าสู่เมนู Permission MGT (Menu Level 1)28
    When คลิกปุ่ม Add12
    When อัปโหลด Icon ที่มีขนาดเกิน 5 MB2

  Scenario: P_MGT089 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก
    When เข้าสู่เมนู Permission MGT (Menu Level 1)29
    When คลิกปุ่ม Add13
    When คลิกปุ่ม Save26

  Scenario: P_MGT090 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ
    When เข้าสู่เมนู Permission MGT (Menu Level 1)30
    When คลิกปุ่ม Add14
    When กรอก Menu Name ที่ซ้ำกับระบบ
    When คลิกปุ่ม Save27

  Scenario: P_MGT091 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบแต่อยู่ใน Module ที่ไม่ซ้ำกัน
    When เข้าสู่เมนู Permission MGT (Menu Level 1)31
    When คลิกปุ่ม Add15
    When เลือก Module Name3
    When กรอก Menu Name ซ้ำกับที่มีอยู่
    When กรอก Display Name (Default)8
    When กรอก Path8
    When เลือก Icon6
    When คลิกปุ่ม Save28
    When คลิกปุ่ม Confirm16

  Scenario: P_MGT092 : (Tap Menu Level 1) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอกเมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT (Menu Level 1)32
    When คลิกปุ่ม Add16
    When คลิกปุ่ม Set Config5
    When คลิกปุ่ม Save29

  Scenario: P_MGT093 : (Tap Menu Level 1) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT (Menu Level 1)33
    When คลิกปุ่ม Add17
    When คลิกปุ่ม Set Config6
    When เลือก Company5
    When กรอก Display Name4
    When คลิกปุ่ม Save30

  Scenario: P_MGT094 : (Tap Menu Level 1) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search44
    When คลิกปุ่ม Search53

  Scenario: P_MGT095 : (Tap Menu Level 1) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search45
    When คลิกปุ่ม Search54

  Scenario: P_MGT096 : (Tap Menu Level 1) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด10
    When คลิกปุ่ม Edit18
    When แก้ไขข้อมูล Display Name5
    When คลิกปุ่ม Save31

  Scenario: P_MGT097 : (Tap Menu Level 1) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด11
    When คลิกปุ่ม Edit19
    When แก้ไขข้อมูล Display Name6
    When คลิกปุ่ม Cancel6
    When คลิกปุ่ม Confirm17

  Scenario: P_MGT098 : (Tap Menu Level 1) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด12
    When คลิกปุ่ม Delete5
    When คลิกปุ่ม Cancel7

  Scenario: P_MGT099 : (Tap Menu Level 1) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด13
    When คลิกปุ่ม Delete6
    When คลิกปุ่ม Confirm18

  Scenario: P_MGT100 : (Tap Menu Level 1) ทดสอบ Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT6
    When คลิกปุ่ม Edit20
    When แก้ไขข้อมูลที่ต้องการแก้ไข2
    When คลิกปุ่ม Save32

  Scenario: P_MGT101 : (Tap Menu Level 1) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT7
    When คลิกปุ่ม Edit21
    When ลบค่าในช่อง Module Name2
    When ลบค่าในช่อง Menu Name2
    When ลบค่าในช่อง Display Name2
    When ลบค่าในช่อง Path2
    When คลิกปุ่ม Save33

  Scenario: P_MGT102 : (Tap Menu Level 1) ทดสอบ Edit โดยแก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT8
    When คลิกปุ่ม Edit22
    When แก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นในระบบ
    When คลิกปุ่ม Save34

  Scenario: P_MGT103 : (Tap Menu Level 1) ทดสอบ Edit โดยแก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบแต่เปลี่ยน Module เป็น Module อื่น
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT9
    When คลิกปุ่ม Edit23
    When แก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นในระบบ2
    When คลิกปุ่ม Save35
    When คลิกปุ่ม Confirm19

  Scenario: P_MGT104 : (Tap Menu Level 1) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT10
    When คลิกปุ่ม Edit24
    When เลือก Upload Image4
    When เลือกรูปภาพเพื่ออัปโหลด3
    When คลิกปุ่ม Save36
    When คลิกปุ่ม Confirm20

  Scenario: P_MGT105 : (Tap Menu Level 1) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT11
    When คลิกปุ่ม Edit25
    When เลือก Upload Image5
    When เลือกรูปภาพเพื่ออัปโหลด4
    When คลิกปุ่ม Save37

  Scenario: P_MGT106 : (Tap Menu Level 1) ทดสอบเพิ่มข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอกเมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Edit
    When เข้าสู่เมนู Permission MGT (Menu Level 1)34
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit3
    When คลิกปุ่ม Set Config7
    When คลิกปุ่ม Save38

  Scenario: P_MGT107 : (Tap Menu Level 1) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Edit
    When เข้าสู่เมนู Permission MGT (Menu Level 1)35
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit4
    When คลิกปุ่ม Set Config8
    When เลือก Company6
    When กรอก Display Name5

  Scenario: P_MGT108 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search46
    When คลิกปุ่ม Search55

  Scenario: P_MGT109 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search47
    When คลิกปุ่ม Search56

  Scenario: P_MGT110 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด14
    When คลิกปุ่ม Edit26
    When แก้ไขข้อมูล Display Name7
    When คลิกปุ่ม Save39

  Scenario: P_MGT111 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด15
    When คลิกปุ่ม Edit27
    When แก้ไขข้อมูล Display Name8
    When คลิกปุ่ม Cancel8
    When คลิกปุ่ม Confirm21

  Scenario: P_MGT112 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด16
    When คลิกปุ่ม Delete7
    When คลิกปุ่ม Cancel9

  Scenario: P_MGT113 : (Tap Menu Level 1) (Tap Menu Level 1) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด17
    When คลิกปุ่ม Delete8
    When คลิกปุ่ม Confirm22

  Scenario: P_MGT114 : (Tap Menu Level 1) ทดสอบดู Mode View
    When เข้าสู่เมนู Permission MGT (Menu Level 1)36
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View2

  Scenario: P_MGT115 : (Tap Menu Level 1) ทดสอบยกเลิกลบข้อมูล
    When เข้าสู่เมนู Permission MGT (Menu Level 1)37
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete5
    When คลิกปุ่ม Cancel10

  Scenario: P_MGT116 : (Tap Menu Level 1) ทดสอบลบข้อมูล
    When เข้าสู่เมนู Permission MGT (Menu Level 1)38
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete6
    When คลิกปุ่ม Confirm23

  Scenario: P_MGT117 : (Tap Menu Level 1) ทดสอบลบข้อมูล ที่มี Menu Lv2 ผูกอยู่
    When เข้าสู่เมนู Permission MGT (Menu Level 1)39
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete7
    When คลิกปุ่ม Confirm24

  Scenario: P_MGT118 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Module ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search48
    When คลิกปุ่ม Search57

  Scenario: P_MGT119 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Menu Level 1 ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search49
    When คลิกปุ่ม Search58

  Scenario: P_MGT120 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Menu Level 2 ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search50
    When คลิกปุ่ม Search59

  Scenario: P_MGT121 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search51
    When คลิกปุ่ม Search60

  Scenario: P_MGT122 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Path ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search52
    When คลิกปุ่ม Search61

  Scenario: P_MGT123 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search53
    When คลิกปุ่ม Search62

  Scenario: P_MGT124 : (Tap Menu Level 2) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Menu Level 2)7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search54
    When คลิกปุ่ม Search63

  Scenario: P_MGT125 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหา
    When เข้าสู่เมนู Permission MGT (Menu Level 2)8
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search55
    When คลิกปุ่ม Search64
    When คลิกปุ่ม Clear3

  Scenario: P_MGT126 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Module
    When เข้าสู่เมนู Permission MGT (Menu Level 2)9
    When คลิกไอคอนค้นหาคอลัมน์ Module6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search56
    When คลิกปุ่ม Search65

  Scenario: P_MGT127 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Module
    When เข้าสู่เมนู Permission MGT (Menu Level 2)10
    When คลิกไอคอนค้นหา7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search57
    When คลิกปุ่ม Search66
    When คลิกปุ่ม Reset10
    When คลิกปุ่ม Search67

  Scenario: P_MGT128 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu Level 1
    When เข้าสู่เมนู Permission MGT (Menu Level 2)11
    When คลิกไอคอนค้นหาคอลัมน์ Menu Level 1_2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search58
    When คลิกปุ่ม Search68

  Scenario: P_MGT129 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์  Menu Level 1
    When เข้าสู่เมนู Permission MGT (Menu Level 2)12
    When คลิกไอคอนค้นหา8
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search59
    When คลิกปุ่ม Search69
    When คลิกปุ่ม Reset11
    When คลิกปุ่ม Search70

  Scenario: P_MGT130 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu Level 2
    When เข้าสู่เมนู Permission MGT (Menu Level 2)13
    When คลิกไอคอนค้นหาคอลัมน์ Menu Level 2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search60
    When คลิกปุ่ม Search71

  Scenario: P_MGT131 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์  Menu Level 2
    When เข้าสู่เมนู Permission MGT (Menu Level 2)14
    When คลิกไอคอนค้นหา9
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search61
    When คลิกปุ่ม Search72
    When คลิกปุ่ม Reset12
    When คลิกปุ่ม Search73

  Scenario: P_MGT132 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT (Menu Level 2)15
    When คลิกไอคอนค้นหาคอลัมน์ Display Name6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search62
    When คลิกปุ่ม Search74

  Scenario: P_MGT133 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT (Menu Level 2)16
    When คลิกไอคอนค้นหา10
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search63
    When คลิกปุ่ม Search75
    When คลิกปุ่ม Reset13
    When คลิกปุ่ม Search76

  Scenario: P_MGT134 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Path
    When เข้าสู่เมนู Permission MGT (Menu Level 2)17
    When คลิกไอคอนค้นหาคอลัมน์ Path6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search64
    When คลิกปุ่ม Search77

  Scenario: P_MGT135 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Path
    When เข้าสู่เมนู Permission MGT (Menu Level 2)18
    When คลิกไอคอนค้นหา11
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search65
    When คลิกปุ่ม Search78
    When คลิกปุ่ม Reset14
    When คลิกปุ่ม Search79

  Scenario: P_MGT136 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT (Menu Level 2)19
    When คลิกไอคอนค้นหาคอลัมน์ Create Date6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search66
    When คลิกปุ่ม Search80

  Scenario: P_MGT137 : (Tap Menu Level 2) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT (Menu Level 2)20
    When คลิกไอคอนค้นหา12
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search67
    When คลิกปุ่ม Search81
    When คลิกปุ่ม Reset15
    When คลิกปุ่ม Search82

  Scenario: P_MGT138 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน
    When เข้าสู่เมนู Permission MGT (Menu Level 2)21
    When คลิกไอคอนค้นหาคอลัมน์ Module7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search68
    When คลิกปุ่ม Search83
    When คลิกไอคอนค้นหาคอลัมน์ Menu Level 1_3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search69
    When คลิกปุ่ม Search84
    When คลิกไอคอนค้นหาคอลัมน์ Menu Level 2_2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search70
    When คลิกปุ่ม Search85
    When คลิกไอคอนค้นหาคอลัมน์ Display Name7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search71
    When คลิกปุ่ม Search86
    When คลิกไอคอนค้นหาคอลัมน์ Path7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search72
    When คลิกปุ่ม Search87
    When คลิกไอคอนค้นหาคอลัมน์ Create Date7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search73
    When คลิกปุ่ม Search88

  Scenario: P_MGT139 : (Tap Menu Level 2) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text (Module , Menu LV.1, Menu LV.2, Display Name , Path)
    When กดปุ่ม Sort ข้อมูล5

  Scenario: P_MGT140 : (Tap Menu Level 2) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่ (Create Date)
    When กดปุ่ม Sort ข้อมูล6

  Scenario: P_MGT141 : (Tap Menu Level 2)ทดสอบการเลือก Filter Select All
    When กดปุ่ม Filter เลือกดู Select All3

  Scenario: P_MGT142 : (Tap Menu Level 2)ทดสอบการเลือก Filterดูทีละคอลัมน์
    When กดปุ่ม Filter เลือกดูทีละรายการ3
  # # Scenario: P_MGT143 : (Tap Menu Level 2) ทดสอบ Drag and drop ลำดับ
  # #   When เข้าสู่เมนู Permission MGT (Menu Level 2)22
  # #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ4
  # # Scenario: P_MGT144 : (Tap Menu Level 2) ทดสอบค้นหาข้อมูลแล้ว Drag and drop ลำดับ
  # #   When เข้าสู่เมนู Permission MGT (Menu Level 2)23
  # #   When ค้นหาข้อมูลแล้วคลิกปุ่ม Search
  # #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ5

  Scenario: P_MGT145 : (Tap Menu Level 2) ทดสอบแก้ไขลำดับตัวเลข
    When เข้าสู่เมนู Permission MGT (Menu Level 2)24
    When คลิกปุ่ม Edit28
    When ใส่เลขลำดับ3
    When คลิกปุ่ม Save40

  Scenario: P_MGT146 : (Tap Menu Level 2) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ
    When เข้าสู่เมนู Permission MGT (Menu Level 2)25
    When คลิกปุ่ม Edit29
    When ใส่เลขลำดับในช่องลำดับ3
    When คลิกปุ่ม Save41

  Scenario: P_MGT147 : (Tap Menu Level 2) ทดสอบกรอกเลขลำดับซ้ำกัน
    When เข้าสู่เมนู Permission MGT (Menu Level 2)26
    When คลิกปุ่ม Edit30
    When ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน3
    When คลิกปุ่ม Save42

  Scenario: P_MGT148 : (Tap Menu Level 2) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ
    When เข้าสู่เมนู Permission MGT (Menu Level 2)27
    When คลิกปุ่ม Edit31
    When คลิก Tab Module3

  Scenario: P_MGT149 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลทั้งหมด
    When เข้าสู่เมนู Permission MGT (Menu Level 2)28
    When คลิกปุ่ม Add18
    When เลือก Module Name4
    When เลือก Menu Level 1
    When กรอก Menu Name6
    When กรอก Display Name (Default)9
    When กรอก Path9
    When เลือก Icon7
    When คลิกปุ่ม Set Config (Company Label Configuration)3
    When เลือก Company7
    When กรอก Display Name6
    When คลิกปุ่ม Save (Modal Set Config)3
    When กรอก Academy Link (Card Academy Content)3
    When คลิกปุ่ม Save43
    When คลิกปุ่ม Confirm25

  Scenario: P_MGT150 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลเฉพาะ Card Menu LV.2
    When เข้าสู่เมนู Permission MGT (Menu Level 2)29
    When คลิกปุ่ม Add19
    When เลือก Module Name5
    When เลือก Menu Level 1_2
    When กรอก Menu Name7
    When กรอก Display Name (Default)10
    When กรอก Path10
    When เลือก Icon8
    When คลิกปุ่ม Save44
    When คลิกปุ่ม Confirm26

  Scenario: P_MGT151 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลเฉพาะ Card Module และทำการอัปโหลด Icon เอง
    When เข้าสู่เมนู Permission MGT (Menu Level 2)30
    When คลิกปุ่ม Add20
    When เลือก Module Name6
    When เลือก Menu Level 1_3
    When กรอก Menu Name8
    When กรอก Display Name (Default)11
    When กรอก Path11
    When เลือก Upload Image6
    When อัปโหลด Icon2
    When คลิกปุ่ม Save45
    When คลิกปุ่ม Confirm27

  Scenario: P_MGT152 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB
    When เข้าสู่เมนู Permission MGT (Menu Level 2)31
    When คลิกปุ่ม Add21
    When อัปโหลด Icon ที่มีขนาดเกิน 5 MB3

  Scenario: P_MGT153 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก
    When เข้าสู่เมนู Permission MGT (Menu Level 2)32
    When คลิกปุ่ม Add22
    When คลิกปุ่ม Save46

  Scenario: P_MGT154 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ
    When เข้าสู่เมนู Permission MGT (Menu Level 2)33
    When คลิกปุ่ม Add23
    When กรอก Menu Name ที่ซ้ำกับระบบ2
    When คลิกปุ่ม Save47

  Scenario: P_MGT155 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ โดยเพิ่มอีก Menu LV.1
    When เข้าสู่เมนู Permission MGT (Menu Level 2)34
    When คลิกปุ่ม Add24
    When กรอก Menu Name ที่ซ้ำกับระบบ3
    When คลิกปุ่ม Save48

  Scenario: P_MGT156 : (Tap Menu Level 2) ทำการเลือก Menu Lv.1  ก่อนเลือก Module ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT (Menu Level 2)35
    When คลิกปุ่ม Add25
    When เลือก Menu Level 1_4

  Scenario: P_MGT157 : (Tap Menu Level 2) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT (Menu Level 2)36
    When คลิกปุ่ม Add26
    When คลิกปุ่ม Set Config9
    When คลิกปุ่ม Save49

  Scenario: P_MGT158 : (Tap Menu Level 2) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Add
    When เข้าสู่เมนู Permission MGT (Menu Level 2)37
    When คลิกปุ่ม Add27
    When คลิกปุ่ม Set Config10
    When เลือก Company8
    When กรอก Display Name7

  Scenario: P_MGT159 : (Tap Menu Level 2) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search74
    When คลิกปุ่ม Search89

  Scenario: P_MGT160 : (Tap Menu Level 2) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Add
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search75
    When คลิกปุ่ม Search90

  Scenario: P_MGT161 : (Tap Menu Level 2) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด18
    When คลิกปุ่ม Edit32
    When แก้ไขข้อมูล Display Name9
    When คลิกปุ่ม Save50

  Scenario: P_MGT162 : (Tap Menu Level 2) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด19
    When คลิกปุ่ม Edit33
    When แก้ไขข้อมูล Display Name10
    When คลิกปุ่ม Cancel11
    When คลิกปุ่ม Confirm28

  Scenario: P_MGT163 : (Tap Menu Level 2) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด20
    When คลิกปุ่ม Delete9
    When คลิกปุ่ม Cancel12

  Scenario: P_MGT164 : (Tap Menu Level 2) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Add
    When คลิกไอคอนจุด3จุด21
    When คลิกปุ่ม Delete10
    When คลิกปุ่ม Confirm29

  Scenario: P_MGT165 : (Tap Menu Level 2) ทดสอบ Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT12
    When คลิกปุ่ม Edit34
    When แก้ไขข้อมูลที่ต้องการแก้ไข3
    When คลิกปุ่ม Save51

  Scenario: P_MGT166 : (Tap Menu Level 2) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT13
    When คลิกปุ่ม Edit35
    When ลบค่าในช่อง Module Name3
    When ลบค่าในช่อง Menu Name3
    When ลบค่าในช่อง Display Name3
    When ลบค่าในช่อง Path3
    When คลิกปุ่ม Save52

  Scenario: P_MGT167 : (Tap Menu Level 2) ทดสอบ Edit โดยแก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT14
    When คลิกปุ่ม Edit36
    When แก้ไขให้ Menu Name ซ้ำกับข้อมูลอื่นในระบบ3
    When คลิกปุ่ม Save53
    When คลิกปุ่ม Confirm30

  Scenario: P_MGT168 : (Tap Menu Level 2) ทดสอบ Edit ข้อมูลโดยกรอก Menu Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ โดยเพิ่มอีก Menu LV.1
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT15
    When คลิกปุ่ม Edit37
    When กรอก Menu Name ที่ซ้ำกับระบบ4
    When คลิกปุ่ม Save54

  Scenario: P_MGT169 : (Tap Menu Level 2) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT16
    When คลิกปุ่ม Edit38
    When เลือก Upload Image7
    When เลือกรูปภาพเพื่ออัปโหลด5
    When คลิกปุ่ม Save55
    When คลิกปุ่ม Confirm31

  Scenario: P_MGT170 : (Tap Menu Level 2) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT17
    When คลิกปุ่ม Edit39
    When เลือก Upload Image8
    When เลือกรูปภาพเพื่ออัปโหลด6
    When คลิกปุ่ม Save56

  Scenario: P_MGT171 : (Tap Menu Level 2) ทดสอบเพิ่มข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก เมื่อคลิกปุ่ม Set Config (Card Company Label Configuration) ในฟังก์ชัน Edit
    When เข้าสู่เมนู Permission MGT (Menu Level 2)38
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit5
    When คลิกปุ่ม Set Config11
    When คลิกปุ่ม Save57

  Scenario: P_MGT172 : (Tap Menu Level 2) ทดสอบ Set Config (Company Label Configuration) ในฟังก์ชัน Edit
    When เข้าสู่เมนู Permission MGT (Menu Level 2)39
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Edit6
    When คลิกปุ่ม Set Config12
    When เลือก Company9
    When กรอก Display Name8

  Scenario: P_MGT173 : (Tap Menu Level 2) ทดสอบค้นหา Company ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search76
    When คลิกปุ่ม Search91

  Scenario: P_MGT174 : (Tap Menu Level 2) ทดสอบค้นหา Display Name ด้วย Global Search (Company Label Configuration) ในฟังก์ชัน Edit
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search77
    When คลิกปุ่ม Search92

  Scenario: P_MGT175 : (Tap Menu Level 2) ทดสอบแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด22
    When คลิกปุ่ม Edit40
    When แก้ไขข้อมูล Display Name11
    When คลิกปุ่ม Save58

  Scenario: P_MGT176 : (Tap Menu Level 2) ทดสอบยกเลิกแก้ไข Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด23
    When คลิกปุ่ม Edit41
    When แก้ไขข้อมูล Display Name12
    When คลิกปุ่ม Cancel13
    When คลิกปุ่ม Confirm32

  Scenario: P_MGT177 : (Tap Menu Level 2) ทดสอบยกเลิกการลบ Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด24
    When คลิกปุ่ม Delete11
    When คลิกปุ่ม Cancel14

  Scenario: P_MGT178 : (Tap Menu Level 2) ทดสอบลบ Config (Company Label Configuration) ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุด25
    When คลิกปุ่ม Delete12
    When คลิกปุ่ม Confirm33

  Scenario: P_MGT179 : (Tap Menu Level 2) ทดสอบดู Mode View
    When เข้าสู่เมนู Permission MGT (Menu Level 2)40
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View3

  Scenario: P_MGT180 : (Tap Menu Level 2) ทดสอบยกเลิกลบข้อมูล
    When เข้าสู่เมนู Permission MGT (Menu Level 2)41
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete8
    When คลิกปุ่ม Cancel15

  Scenario: P_MGT181 : (Tap Menu Level 2) ทดสอบลบข้อมูล
    When เข้าสู่เมนู Permission MGT (Menu Level 2)42
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete9
    When คลิกปุ่ม Confirm34

  Scenario: P_MGT182 : (Tap Feature) ทดสอบค้นหาข้อมูล Menu ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Tab Feature )
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search78
    When คลิกปุ่ม Search93

  Scenario: P_MGT183 : (Tap Feature) ทดสอบค้นหาข้อมูล Type ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Tab Feature )2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search79
    When คลิกปุ่ม Search94

  Scenario: P_MGT184 : (Tap Feature) ทดสอบค้นหาข้อมูล feature ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Tab Feature )3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search80
    When คลิกปุ่ม Search95

  Scenario: P_MGT185 : (Tap Feature) ทดสอบค้นหาข้อมูล Display Name ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Tab Feature )4
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search81
    When คลิกปุ่ม Search96

  Scenario: P_MGT186 : (Tap Feature) ทดสอบค้นหาข้อมูล Create Date ในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Tab Feature )5
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search82
    When คลิกปุ่ม Search97

  Scenario: P_MGT187 : (Tap Feature) ทดสอบข้อมูลที่ไม่มีในระบบในช่อง Global Search
    When เข้าสู่เมนู Permission MGT (Tab Feature )6
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search83
    When คลิกปุ่ม Search98

  Scenario: P_MGT188 : (Tap Feature) ทดสอบรีเซ็ตการค้นหา
    When เข้าสู่เมนู Permission MGT (Tab Feature )7
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search84
    When คลิกปุ่ม Search99
    When คลิกปุ่ม Clear4

  Scenario: P_MGT189 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Menu
    When เข้าสู่เมนู Permission MGT (Tab Feature )8
    When คลิกไอคอนค้นหาคอลัมน์ Menu
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search85
    When คลิกปุ่ม Search100

  Scenario: P_MGT190 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Menu
    When เข้าสู่เมนู Permission MGT (Tab Feature )9
    When คลิกไอคอนค้นหาคอลัมน์ Menu2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search86
    When คลิกปุ่ม Search101
    When คลิกปุ่ม Reset16
    When คลิกปุ่ม Search102

  Scenario: P_MGT191 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search และ Checkbox คอลัมน์ Type
    When เข้าสู่เมนู Permission MGT (Tab Feature )10
    When คลิกไอคอนค้นหาคอลัมน์ Type
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search87
    When เลือก Checkbox Type
    When คลิกปุ่ม Search103

  Scenario: P_MGT192 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาและ Checkbox ในช่อง Search คอลัมน์ Type
    When เข้าสู่เมนู Permission MGT (Tab Feature )11
    When คลิกไอคอนค้นหาคอลัมน์ Type2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search88
    When เลือก Checkbox Type2
    When คลิกปุ่ม Search104
    When คลิกปุ่ม Reset17
    When คลิกปุ่ม Search105

  Scenario: P_MGT193 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ feature
    When เข้าสู่เมนู Permission MGT (Tab Feature )12
    When คลิกไอคอนค้นหาคอลัมน์ Feature
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search89
    When คลิกปุ่ม Search106

  Scenario: P_MGT194 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ feature
    When เข้าสู่เมนู Permission MGT (Tab Feature )13
    When คลิกไอคอนค้นหาคอลัมน์ Feature2
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search90
    When คลิกปุ่ม Search107
    When คลิกปุ่ม Reset18
    When คลิกปุ่ม Search108

  Scenario: P_MGT195 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT (Tab Feature )14
    When คลิกไอคอนค้นหาคอลัมน์ Display Name8
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search91
    When คลิกปุ่ม Search109

  Scenario: P_MGT196 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Display Name
    When เข้าสู่เมนู Permission MGT (Tab Feature )15
    When คลิกไอคอนค้นหาคอลัมน์ Display Name9
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search92
    When คลิกปุ่ม Search110
    When คลิกปุ่ม Reset19
    When คลิกปุ่ม Search111

  Scenario: P_MGT197 : (Tap Feature) ทดสอบค้นหาข้อมูลในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT (Tab Feature )16
    When คลิกไอคอนค้นหาคอลัมน์ Create date8
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search93
    When คลิกปุ่ม Search112

  Scenario: P_MGT198 : (Tap Feature) ทดสอบรีเซ็ตการค้นหาในช่อง Search คอลัมน์ Create date
    When เข้าสู่เมนู Permission MGT (Tab Feature )17
    When คลิกไอคอนค้นหาคอลัมน์ Create date9
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search94
    When คลิกปุ่ม Search113
    When คลิกปุ่ม Reset20
    When คลิกปุ่ม Search114

  Scenario: P_MGT199 : (Tap Feature) (Tap Feature) ทดสอบค้นหาข้อมูลในทุกคอลัมน์พร้อมกัน
    When เข้าสู่เมนู Permission MGT (Tab Feature )18
    When คลิกไอคอนค้นหาคอลัมน์ Menu3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search95
    When คลิกปุ่ม Search115
    When คลิกไอคอนค้นหาคอลัมน์ Type3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search96
    When คลิกปุ่ม Search116
    When คลิกไอคอนค้นหาคอลัมน์ Feature3
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search97
    When คลิกปุ่ม Search117
    When คลิกไอคอนค้นหาคอลัมน์ Display Name10
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search98
    When คลิกปุ่ม Search118
    When คลิกไอคอนค้นหาคอลัมน์ Create Date10
    When กรอกข้อมูลที่ต้องการค้นหาในช่อง Search99
    When คลิกปุ่ม Search119

  Scenario: P_MGT200 : (Tap Feature) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็น Text (Module , Type , Feature, Display Name)
    When กดปุ่ม Sort ข้อมูล7

  Scenario: P_MGT201 : (Tap Feature) ทดสอบกด Sort ในคอลัมน์ที่แสดงเป็นวันที่(Create Date)
    When กดปุ่ม Sort ข้อมูล8

  Scenario: P_MGT202 : (Tab Feature ) ทดสอบการเลือก Filter Select All
    When กดปุ่ม Filter เลือกดู Select All4

  Scenario: P_MGT203 : (Tab Feature ) ทดสอบการเลือก Filter ดูทีละคอลัมน์
    When กดปุ่ม Filter เลือกดูทีละรายการ4
  # # Scenario: P_MGT204 : (Tap Feature) ทดสอบ Drag and drop ลำดับ
  # #   When เข้าสู่เมนู Permission MGT (Tab Feature )19
  # #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ6
  # # Scenario: P_MGT205 : (Tap Feature) ทดสอบค้นหาข้อมูลแล้ว Drag and drop ลำดับ
  # #   When เข้าสู่เมนู Permission MGT (Tab Feature )20
  # #   When ค้นหาข้อมูลแล้วคลิกปุ่ม Seach2
  # #   When คลิกที่ไอคอน 6 จุดแล้วทำการลากไปไว้ตำแหน่งที่ต้องการ7

  Scenario: P_MGT206 : (Tap Feature) ทดสอบแก้ไขลำดับตัวเลข
    When เข้าสู่เมนู Permission MGT (Tab Feature )21
    When คลิกปุ่ม Edit42
    When ใส่เลขลำดับ4
    When คลิกปุ่ม Save59

  Scenario: P_MGT207 : (Tap Feature) ทดสอบแก้ไขลำดับตัวเลขหลายรายการ
    When เข้าสู่เมนู Permission MGT (Tab Feature )22
    When คลิกปุ่ม Edit43
    When ใส่เลขลำดับในช่องลำดับ4
    When คลิกปุ่ม Save60

  Scenario: P_MGT208 : (Tap Feature) ทดสอบกรอกเลขลำดับซ้ำกัน
    When เข้าสู่เมนู Permission MGT (Tab Feature )23
    When คลิกปุ่ม Edit44
    When ใส่เลขลำดับในช่องลำดับให้ซ้ำกัน4
    When คลิกปุ่ม Save61

  Scenario: P_MGT209 : (Tab Feature ) ทดสอบกดเปลี่ยน Tab ขณะกดปุ่ม Edit ลำดับ
    When เข้าสู่เมนู Permission MGT (Tab Feature )24
    When คลิกปุ่ม Edit45
    When คลิก Tab Module4

  Scenario: P_MGT210 : (Tap Feature) ทดสอบ Add ข้อมูลทั้งหมด
    When เข้าสู่เมนู Permission MGT (Tab Feature )25
    When คลิกปุ่ม Add28
    When เลือก Select Menu
    When กรอก Feature Name
    When เลือก Feature Type
    When กรอก Display Name9
    When เลือก Icon9
    When คลิกปุ่ม Save62
    When คลิกปุ่ม Confirm35

  Scenario: P_MGT211 : (Tap Feature) ทดสอบ Add ข้อมูล และ ทำการอัปโหลด Icon เอง
    When เข้าสู่เมนู Permission MGT (Tab Feature )26
    When คลิกปุ่ม Add29
    When เลือก Select Menu2
    When กรอก Feature Name2
    When เลือก Feature Type2
    When กรอก Display Name10
    When เลือก Upload Image9
    When เลือกรูปภาพเพื่ออัปโหลด7
    When คลิกปุ่ม Save63
    When คลิกปุ่ม Confirm36

  Scenario: P_MGT212 : (Tap Feature) (Tap Feature) ทดสอบ Add ข้อมูล และ ทำการอัปโหลด Icon เองโดยอัปโหลดรูปภาพ ขนาดมากกว่า 5 MB
    When เข้าสู่เมนู Permission MGT (Tab Feature )27
    When คลิกปุ่ม Add30
    When เลือก Upload Image10
    When เลือกรูปภาพเพื่ออัปโหลด8

  Scenario: P_MGT213 : (Tap Feature) ทดสอบ Add ข้อมูลโดยไม่ทำการกรอกข้อมูลที่มีการบังคับกรอก
    When เข้าสู่เมนู Permission MGT (Tab Feature )28
    When คลิกปุ่ม Add31
    When คลิกปุ่ม Save64

  Scenario: P_MGT214 : (Tap Feature) ทดสอบ Add ข้อมูลโดยกรอก Feature Name ซ้ำกับข้อมูลที่มีอยู่ในระบบ
    When เข้าสู่เมนู Permission MGT (Tab Feature )29
    When คลิกปุ่ม Add32
    When กรอก Feature Name3
    When คลิกปุ่ม Save65

  Scenario: P_MGT215 : (Tap Feature) ทดสอบ Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT18
    When คลิกปุ่ม Edit46
    When แก้ไขข้อมูลที่ต้องการแก้ไข4
    When คลิกปุ่ม Save66

  Scenario: P_MGT216 : (Tap Feature) ทดสอบ Edit โดยลบข้อมูลที่บังคับกรอกออกทั้งหมด
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT19
    When คลิกปุ่ม Edit47
    When ลบค่าในช่อง Select Menu
    When ลบค่าในช่อง Feature Name
    When ลบค่าในช่อง Display Name4
    When คลิกปุ่ม Save67

  Scenario: P_MGT217 : (Tap Feature) ทดสอบ Edit โดยแก้ไขให้ Feature Name ซ้ำกับข้อมูลอื่นที่อยู่ในระบบ
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT20
    When คลิกปุ่ม Edit48
    When แก้ไขให้ Feature Name , Display Name ซ้ำกับข้อมูลอื่นในระบบ
    When คลิกปุ่ม Save68
    When คลิกปุ่ม Confirm37

  Scenario: P_MGT218 : (Tap Feature) ทดสอบเปลี่ยนจาก Master Icon เป็น Upload Image ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT21
    When คลิกปุ่ม Edit49
    When เลือก Upload Image11
    When เลือกรูปภาพเพื่ออัปโหลด9
    When คลิกปุ่ม Save69
    When คลิกปุ่ม Confirm38

  Scenario: P_MGT219 : (Tap Feature) ทดสอบ Upload Image ที่มีขนาดไฟล์เกิน 5 MB ในฟังก์ชัน Edit
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT22
    When คลิกปุ่ม Edit50
    When เลือก Upload Image12
    When เลือกรูปภาพเพื่ออัปโหลด10
    When คลิกปุ่ม Save70

  Scenario: P_MGT220 : (Tap Feature) ทดสอบดู Mode View
    When เข้าสู่เมนู Permission MGT (Tab Feature )30
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม View4

  Scenario: P_MGT221 : (Tap Feature) ทดสอบยกเลิกลบข้อมูล
    When เข้าสู่เมนู Permission MGT (Tab Feature )31
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete10
    When คลิกปุ่ม Cancel16

  Scenario: P_MGT222 : (Tap Feature) ทดสอบลบข้อมูล
    When เข้าสู่เมนู Permission MGT (Tab Feature )32
    When คลิกไอคอนจุด3จุดคอลัมน์ MGT แล้วคลิกปุ่ม Delete11
    When คลิกปุ่ม Confirm39
