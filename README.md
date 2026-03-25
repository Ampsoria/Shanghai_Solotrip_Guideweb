# 🇨🇳✈️ Shanghai Guide สำหรับคนไทย

> เว็บแนะนำสถานที่ท่องเที่ยว ร้านอาหาร และเคล็ดลับเที่ยวเซี่ยงไฮ้ ฉบับคนไทย — จัดตามงบ จัดตามสไตล์ พร้อมแผนที่ วิธีเดินทาง และราคาเป็นบาทไทย

![Hero](screenshots/01_hero.png)

---

## 📌 เกี่ยวกับโปรเจกต์

เว็บไซต์ Static สำหรับนักท่องเที่ยวชาวไทยที่ต้องการเที่ยวเซี่ยงไฮ้ ออกแบบมาสำหรับ **Solo Trip** โดยเฉพาะ มีข้อมูลครบถ้วนจบในเว็บเดียว ✨

### ✨ Features หลัก

| Feature | รายละเอียด |
|---------|-----------|
| 📍 **30+ สถานที่ท่องเที่ยว** | พร้อมรูปภาพจริง ราคา วิธีเดินทาง Tips |
| 🍜 **15 ร้านอาหารแนะนำ** | Street Food, ร้านดัง, Fine Dining พร้อมเมนูต้องสั่ง |
| 💰 **กรองตามงบ** | สายงบน้อย / ปานกลาง / งบเยอะ |
| 🎨 **กรองตามสไตล์** | ประวัติศาสตร์ / ช้อปปิ้ง / ธรรมชาติ / อาหาร / วิวเมือง / บันเทิง |
| 📌 **แนะนำตามทำเล** | เลือกโซนที่อยู่ แนะนำสถานที่ใกล้เคียง |
| 🗺️ **แผนที่ Interactive** | Leaflet.js พร้อมหมุดสีแยกตามงบ |
| 💱 **คำนวณเงิน** | แปลงหยวน → บาท พร้อมราคาที่ใช้บ่อย |
| 💡 **Tricks & Tips** | เคล็ดลับ VPN, Alipay, ภาษา, อากาศ, มารยาท |
| 🎒 **คู่มือ Solo Trip** | แอพที่ต้องมี ความปลอดภัย งบ/วัน เตรียมตัว |
| 📱 **Responsive** | รองรับ PC, Tablet, iPhone ทุกขนาดหน้าจอ |

---

## 🎬 Demo

### 🏠 Hero Section
หน้าแรกที่ดึงดูดสายตา พร้อมสถิติ 30+ สถานที่ 3 ระดับงบ 7 สไตล์

![Hero Section](screenshots/01_hero.png)

---

### 📍 สถานที่ท่องเที่ยว — ระบบกรอง
กรองสถานที่ตามงบประมาณและสไตล์ที่ชอบ แต่ละการ์ดมีรูปภาพจริง ราคา วิธีเดินทาง Tips

![Attractions](screenshots/02_attractions.png)

---

### 🍜 ของกิน & ร้านอาหาร
แนะนำ 15 ร้าน จัดตามงบ (ถูก / ปานกลาง / หรู) พร้อมราคา ¥/฿ เมนูต้องสั่ง วิธีไป

![Food Section](screenshots/03_food.png)

![Food Cards](screenshots/04_food_cards.png)

---

### 📌 แนะนำตามทำเล
เลือกโซนที่คุณพัก แนะนำสถานที่ใกล้เคียงพร้อมวิธีเดินทาง

![Location Section](screenshots/05_location.png)

---

### 🚇 วิธีเดินทาง
เปรียบเทียบ Metro, แท็กซี่, รถเมล์, เดินเท้า, Didi, เรือข้ามฟาก

![Transport Section](screenshots/06_transport.png)

---

### 🗺️ แผนที่ Interactive
แผนที่ Leaflet.js แสดงตำแหน่งสถานที่ทั้งหมด หมุดสีแยกตามระดับงบ

![Map Section](screenshots/07_map.png)

---

### 🔻 Footer
ลิงก์ด่วน ข้อมูลเพิ่มเติม พร้อมเครดิต

![Footer Section](screenshots/08_footer.png)

---

## 🛠️ เทคโนโลยีที่ใช้

| Technology | Purpose |
|-----------|---------|
| HTML5 | โครงสร้างเว็บ |
| CSS3 | ดีไซน์ Dark Theme + Glassmorphism |
| Vanilla JavaScript | Logic ทั้งหมด (กรอง, แนะนำ, คำนวณ) |
| Leaflet.js | แผนที่ Interactive |
| Google Fonts | Typography (Inter + Noto Sans Thai) |

---

## 📁 โครงสร้างโปรเจกต์

```
Shanghai_Tourism/
├── index.html          # หน้าเว็บหลัก
├── style.css           # CSS ทั้งหมด (Design System + Responsive)
├── script.js           # JavaScript (ข้อมูล 30 สถานที่ + 15 ร้านอาหาร + Logic)
├── images/             # รูปภาพสถานที่ท่องเที่ยว & ร้านอาหาร (33 รูป)
│   ├── the_bund.jpg
│   ├── nanjing_road.jpg
│   ├── xiaolongbao.jpg
│   ├── hotpot.jpg
│   └── ... (33 files)
├── screenshots/        # Screenshots สำหรับ README
│   ├── 01_hero.png
│   ├── 02_attractions.png
│   ├── 03_food.png
│   └── ...
└── README.md           # ไฟล์นี้
```

---

## 🚀 วิธีใช้งาน

1. Clone หรือ Download โปรเจกต์
```bash
git clone https://github.com/Ampsoria/Shanghai_Solotrip_Guideweb.git
```

2. เปิดไฟล์ `index.html` ในเบราว์เซอร์
```bash
open index.html
```

> 💡 ไม่ต้องติดตั้งอะไรเพิ่มเติม เป็น Static Website 100%

---

## 📱 Responsive Design

รองรับทุกขนาดหน้าจอ:

| Breakpoint | Device |
|-----------|--------|
| `> 768px` | 💻 Desktop |
| `≤ 768px` | 📱 Tablet |
| `≤ 480px` | 📱 iPhone |
| `≤ 375px` | 📱 iPhone SE / Mini |

---

## 👤 ผู้จัดทำ

**Made with ❤️ by Ampsoria 🐥**

© 2026 Shanghai Guide สำหรับคนไทย — All rights reserved
