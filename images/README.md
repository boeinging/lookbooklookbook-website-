# รูปสินค้า

วางไฟล์รูปในโฟลเดอร์นี้ตามชื่อด้านล่าง เว็บจะหยิบไปใช้เองทันทีโดยไม่ต้องแก้โค้ด
ถ้ายังไม่มีไฟล์ไหน ตำแหน่งนั้นจะแสดง placeholder สีพื้นแทน ไม่ขึ้นรูปแตก

## ชื่อไฟล์ที่ต้องใช้

รูปแรกของแต่ละตัว (ลงท้าย `-1`) คือรูปที่โชว์ในกริดหน้าแรกและหน้า Shop
รูปที่สอง (`-2`) คือรูปที่ขึ้นมาแทนตอนเอาเมาส์ไปชี้ ควรเป็นมุมอื่นหรือทั้งตัว

| สินค้า | ไฟล์ |
| --- | --- |
| Satin Slip Midi Dress | `satin-slip-dress-1.jpg` … `-4.jpg` |
| Oversized Wool-Blend Coat | `wool-coat-1.jpg` … `-3.jpg` |
| Ribbed Knit Top | `ribbed-knit-top-1.jpg` … `-3.jpg` |
| Tailored Wide-Leg Trousers | `wide-leg-trousers-1.jpg` … `-3.jpg` |
| Relaxed Linen Shirt | `linen-shirt-1.jpg` … `-3.jpg` |
| Pleated Midi Skirt | `pleated-skirt-1.jpg` … `-3.jpg` |
| Cropped Tailored Blazer | `cropped-blazer-1.jpg` … `-3.jpg` |
| Essential Cotton Tee | `cotton-tee-1.jpg` … `-3.jpg` |
| Poplin Oversized Shirt | `poplin-shirt-1.jpg` `-2.jpg` |
| Merino Crewneck Sweater | `merino-sweater-1.jpg` `-2.jpg` |
| Leather Shoulder Bag | `leather-bag-1.jpg` `-2.jpg` |
| Slim Tapered Chinos | `chinos-1.jpg` `-2.jpg` |

## ข้อกำหนดรูป

- **สัดส่วน 3:4 แนวตั้ง** — เว็บ crop ให้พอดีอยู่แล้ว แต่ถ้าส่งมาเป็น 3:4 อยู่แล้วจะคุมองค์ประกอบภาพได้ตรงใจกว่า
- **ขนาดแนะนำ 1200×1600 px** ใหญ่พอสำหรับจอ Retina
- **ไฟล์ไม่ควรเกิน 300KB ต่อรูป** — บีบด้วย https://squoosh.app ได้ ถ้าใช้ `.webp` จะเล็กกว่า `.jpg` ราวครึ่งหนึ่ง (ถ้าเปลี่ยนเป็น webp ต้องแก้นามสกุลใน `js/products.js` ด้วย)
- พื้นหลังโทนสว่างจะเข้ากับธีมขาว-ชมพูของเว็บที่สุด

## ถ้าอยากเปลี่ยนชื่อสินค้า ราคา หรือจำนวนรูป

แก้ที่ [`js/products.js`](../js/products.js) — ตรง `slug` คือชื่อไฟล์ ส่วนตัวเลขใน `photos(slug, จำนวนรูป, ...)` คือจำนวนรูปของสินค้าตัวนั้น
