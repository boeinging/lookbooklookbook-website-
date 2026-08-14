# lookbooklookbook — website mockup

Static mockup ของเว็บไซต์ขายเสื้อผ้า ธีมขาว–ชมพู สไตล์มินิมอล (แรงบันดาลใจจาก Zara)

## หน้าเว็บ

| ไฟล์ | หน้า |
| --- | --- |
| `index.html` | หน้าแรก — hero, หมวดหมู่, New Arrivals, editorial, newsletter |
| `shop.html` | รายการสินค้า — ตัวกรอง (หมวด/ไซซ์/สี/ราคา) + การเรียงลำดับ |
| `product.html` | รายละเอียดสินค้า — แกลเลอรี, เลือกสี/ไซซ์, จำนวน, accordion |
| `cart.html` | ตะกร้าสินค้า — สรุปยอด, โค้ดส่วนลด, empty state |
| `about.html` | เกี่ยวกับแบรนด์, ความยั่งยืน, สาขา, ร่วมงานกับเรา |
| `contact.html` | ติดต่อ, ติดตามพัสดุ, FAQ, ตารางไซซ์ |

## โครงสร้าง

```
css/style.css     ระบบดีไซน์ทั้งหมด (ตัวแปรสี, layout, responsive)
js/layout.js      header / เมนู / search overlay / footer ที่ใช้ร่วมกันทุกหน้า
js/products.js    ข้อมูลสินค้าจำลอง + ตัวสร้างการ์ดสินค้า
js/main.js        ตะกร้า (localStorage), accordion, drawer, toast
```

ไม่มี build step — เป็น HTML/CSS/JS ล้วน เปิดไฟล์หรือเสิร์ฟด้วย static server ได้เลย

```bash
python3 -m http.server 4321
```

## หมายเหตุ

- รูปภาพทั้งหมดเป็น placeholder จาก placehold.co — เปลี่ยนเป็นรูปถ่ายจริงได้ที่ `js/products.js`
- ตะกร้าเก็บใน `localStorage` เท่านั้น ยังไม่มีระบบชำระเงินจริง
- สีหลักปรับได้จากตัวแปร CSS ที่ `:root` ใน `css/style.css`
