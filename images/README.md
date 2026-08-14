# รูปสินค้า

รูปในโฟลเดอร์นี้มาจากคอลเลกชัน **Late Checkout** ย่อจากไฟล์ต้นฉบับ 5350×8021 px
เหลือ 1200×1800 px (สัดส่วน 2:3 เดิม ไม่ crop) JPEG quality 70 — รวม 13MB / 38 ไฟล์

## การตั้งชื่อ

`<style>-<color>-N.jpg` — แต่ละสีมีแกลเลอรีของตัวเอง เวลากดเปลี่ยนสีในหน้าสินค้ารูปจะเปลี่ยนทั้งชุด

| ชุด | สี | ไฟล์ |
| --- | --- | --- |
| Adeline | Pink Blossom | `adeline-pink-1..4.jpg` |
| Anne | Lilac | `anne-lilac-1..4.jpg` |
| Aubrey | Champagne | `aubrey-metallic-1..4.jpg` |
| Aubrey | Pearl | `aubrey-pearl-1..4.jpg` |
| Bree | Pink Blossom | `bree-pink-1..4.jpg` |
| Bree | Sage | `bree-green-1..4.jpg` |
| Isabelle | Pink Blossom | `isabelle-pink-1..4.jpg` |
| Kimberly | Pink Blossom | `kimberly-pink-1..4.jpg` |
| Paula | Sage | `paula-green-1..4.jpg` |
| — | campaign | `editorial-1.jpg` (hero หน้าแรก), `editorial-2.jpg` (บล็อก editorial) |

รูป `-1` คือรูปที่โชว์ในกริด ส่วน `-2` คือรูปที่ขึ้นมาแทนตอนเอาเมาส์ไปชี้

## เพิ่มหรือเปลี่ยนรูป

ไฟล์ต้นฉบับใหญ่มาก (40MB+ ต่อไฟล์) ต้องย่อก่อนใส่ repo คำสั่งที่ใช้:

```bash
sips -s format jpeg -s formatOptions 70 -Z 1800 ต้นฉบับ.jpg --out images/ชื่อใหม่.jpg
```

ถ้าเพิ่มจำนวนรูปต่อสี ต้องแก้เลขใน `photos('slug', จำนวน)` ที่ [`js/products.js`](../js/products.js) ด้วย

## ต้นฉบับ

`/Users/boeing/Downloads/late checkout 2` — 76 ไฟล์ 2GB (ไม่ได้ commit เข้า repo)
แต่ละชุดมีรูปมากกว่า 4 รูป ถ้าอยากเพิ่มในแกลเลอรีก็ดึงเพิ่มได้
