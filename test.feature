Feature: Help_Center_Admin

  Scenario: PM_HC00 : ทดสอบการเข้าสู่เว็บไซต์
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5001/SignIn"
    When กรอก Username "n.kissadapa"
    When กรอก Password "123456"
    When คลิกปุ่ม Login
    When กรอก Username "c.gen"
    When กรอก Password "123456"
    When คลิกปุ่ม Login
