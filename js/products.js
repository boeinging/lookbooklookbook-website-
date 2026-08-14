// Product catalogue.
//
// รูปสินค้า: วางไฟล์จริงไว้ในโฟลเดอร์ images/ ตามชื่อที่กำหนดใน slug ด้านล่าง
// เช่น สินค้า slug 'satin-slip-dress' ที่มี 4 รูป ต้องมีไฟล์
//   images/satin-slip-dress-1.jpg ... images/satin-slip-dress-4.jpg
// ถ้ายังไม่มีไฟล์ เว็บจะแสดง placeholder สีพื้นแทนโดยอัตโนมัติ (ไม่ขึ้นรูปแตก)

const PLACEHOLDER = (label, bg = 'fbeef1') =>
  `https://placehold.co/600x800/${bg}/1a1a1a?text=${encodeURIComponent(label)}`;

// สร้าง path ไฟล์จริง + path สำรองไว้คู่กัน
function photos(slug, count, label, bg) {
  return {
    img: Array.from({ length: count }, (_, i) => `images/${slug}-${i + 1}.jpg`),
    fallback: Array.from({ length: count }, (_, i) =>
      PLACEHOLDER(i === 0 ? label : `${label} ${i + 1}`, bg))
  };
}

const PRODUCTS = [
  {
    id: 1, slug: 'satin-slip-dress', name: 'Satin Slip Midi Dress', price: 1890, was: null,
    cat: ['woman', 'dresses', 'new'], tag: 'New',
    colors: [{ name: 'Blush', hex: '#f6dde3' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Cream', hex: '#e9e4de' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: ['XL'],
    material: 'ผ้าซาตินสัมผัสนุ่ม 96% Viscose, 4% Elastane',
    desc: 'เดรสทรงสลิปยาวระดับกลางน่อง ตัดเย็บด้วยผ้าซาตินทิ้งตัวสวย สายเดี่ยวปรับระดับได้ ใส่ได้ทั้งลุคกลางวันและงานเลี้ยงยามค่ำ',
    ...photos('satin-slip-dress', 4, 'Satin Slip Dress', 'fbeef1')
  },
  {
    id: 2, slug: 'wool-coat', name: 'Oversized Wool-Blend Coat', price: 3290, was: null,
    cat: ['woman', 'outerwear', 'new', 'bestsellers'], tag: null,
    colors: [{ name: 'Sand', hex: '#efe6e2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Wool 62%, Polyester 34%, Other 4%',
    desc: 'โค้ตทรงโอเวอร์ไซส์ ปกเสื้อแบบ notched lapel กระดุมหน้าเม็ดใหญ่ ผ้าผสมขนแกะเนื้อแน่นให้ความอบอุ่นโดยไม่หนักเกินไป',
    ...photos('wool-coat', 3, 'Wool Coat', 'f2f2f2')
  },
  {
    id: 3, slug: 'ribbed-knit-top', name: 'Ribbed Knit Top', price: 790, was: 990,
    cat: ['woman', 'knitwear', 'sale'], tag: '-20%',
    colors: [{ name: 'Blush', hex: '#f6dde3' }, { name: 'White', hex: '#ffffff' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['XS'],
    material: 'Cotton 70%, Polyamide 30%',
    desc: 'เสื้อนิตลายริ้วเข้ารูป คอกลม แขนยาว เนื้อผ้ายืดหยุ่นสวมใส่สบาย เหมาะกับการใส่เดี่ยวหรือใส่ซ้อนใต้เบลเซอร์',
    ...photos('ribbed-knit-top', 3, 'Ribbed Knit Top', 'fbeef1')
  },
  {
    id: 4, slug: 'wide-leg-trousers', name: 'Tailored Wide-Leg Trousers', price: 1590, was: null,
    cat: ['woman', 'bottoms', 'bestsellers'], tag: null,
    colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'Sand', hex: '#efe6e2' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Polyester 88%, Viscose 10%, Elastane 2%',
    desc: 'กางเกงขากว้างทรงสูง จีบหน้าคมชัด เอวสูงช่วยให้ขาดูยาว ตัดเย็บจากผ้าเนื้อเรียบทิ้งตัว',
    ...photos('wide-leg-trousers', 3, 'Wide-Leg Trousers', 'f2f2f2')
  },
  {
    id: 5, slug: 'linen-shirt', name: 'Relaxed Linen Shirt', price: 1190, was: null,
    cat: ['woman', 'tops', 'new'], tag: 'New',
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Blush', hex: '#f6dde3' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Linen 100%',
    desc: 'เชิ้ตลินินทรงหลวม ปกคลาสสิก กระดุมหน้า ระบายอากาศได้ดีเหมาะกับอากาศร้อน',
    ...photos('linen-shirt', 3, 'Linen Shirt', 'fbeef1')
  },
  {
    id: 6, slug: 'pleated-skirt', name: 'Pleated Midi Skirt', price: 1390, was: null,
    cat: ['woman', 'bottoms'], tag: null,
    colors: [{ name: 'Sand', hex: '#efe6e2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['L'],
    material: 'Polyester 100%',
    desc: 'กระโปรงจีบรอบตัวยาวระดับกลางน่อง เอวยางยืดด้านหลัง เคลื่อนไหวพลิ้วสวยทุกก้าว',
    ...photos('pleated-skirt', 3, 'Pleated Skirt', 'f2f2f2')
  },
  {
    id: 7, slug: 'cropped-blazer', name: 'Cropped Tailored Blazer', price: 2290, was: null,
    cat: ['woman', 'outerwear', 'bestsellers'], tag: null,
    colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'Blush', hex: '#f6dde3' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Polyester 76%, Viscose 22%, Elastane 2%',
    desc: 'เบลเซอร์ทรงครอปเข้ารูป ปกแหลม กระดุมเดี่ยว โครงสร้างไหล่คมชัด ใส่คู่กับกางเกงขากว้างได้ลงตัว',
    ...photos('cropped-blazer', 3, 'Cropped Blazer', 'fbeef1')
  },
  {
    id: 8, slug: 'cotton-tee', name: 'Essential Cotton Tee', price: 499, was: 590,
    cat: ['woman', 'man', 'tops', 'tshirts', 'sale'], tag: '-15%',
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Blush', hex: '#f6dde3' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Organic Cotton 100%',
    desc: 'เสื้อยืดคอกลมทรงพื้นฐาน ผ้าคอตตอนออร์แกนิกเนื้อแน่น ไม่ย้วยง่าย เป็นไอเทมยืนพื้นของทุกตู้เสื้อผ้า',
    ...photos('cotton-tee', 3, 'Cotton Tee', 'f2f2f2')
  },
  {
    id: 9, slug: 'poplin-shirt', name: 'Poplin Oversized Shirt', price: 1290, was: null,
    cat: ['man', 'shirts', 'new-man', 'new'], tag: 'New',
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Sand', hex: '#efe6e2' }],
    sizes: ['S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Cotton 100%',
    desc: 'เชิ้ตป็อปลินทรงโอเวอร์ไซส์ กระเป๋าอกหนึ่งใบ ปลายแขนกระดุมคู่ ใส่สบายทั้งวัน',
    ...photos('poplin-shirt', 2, 'Poplin Shirt', 'f2f2f2')
  },
  {
    id: 10, slug: 'merino-sweater', name: 'Merino Crewneck Sweater', price: 1990, was: null,
    cat: ['man', 'knitwear-m'], tag: null,
    colors: [{ name: 'Cream', hex: '#e9e4de' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M', 'L', 'XL'], soldOut: ['S'],
    material: 'Merino Wool 100%',
    desc: 'สเวตเตอร์คอกลมผ้าเมอริโนวูลแท้ 100% เนื้อบางเบาแต่อบอุ่น ไม่คันผิว',
    ...photos('merino-sweater', 2, 'Merino Sweater', 'efe6e2')
  },
  {
    id: 11, slug: 'leather-bag', name: 'Leather Shoulder Bag', price: 2590, was: null,
    cat: ['accessories', 'bestsellers', 'woman'], tag: null,
    colors: [{ name: 'Blush', hex: '#f6dde3' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['ONE SIZE'], soldOut: [],
    material: 'Genuine Leather',
    desc: 'กระเป๋าสะพายไหล่หนังแท้ ทรงเรียบง่าย สายปรับความยาวได้ ช่องด้านในหนึ่งช่องพร้อมซิป',
    ...photos('leather-bag', 2, 'Leather Bag', 'fbeef1')
  },
  {
    id: 12, slug: 'chinos', name: 'Slim Tapered Chinos', price: 1490, was: null,
    cat: ['man', 'trousers'], tag: null,
    colors: [{ name: 'Sand', hex: '#efe6e2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Cotton 98%, Elastane 2%',
    desc: 'กางเกงชิโนทรงเรียวเข้ารูป ยืดหยุ่นเล็กน้อยเพื่อความสบายในการเคลื่อนไหว',
    ...photos('chinos', 2, 'Chinos', 'f2f2f2')
  }
];

const CAT_LABELS = {
  woman: 'Woman', man: 'Man', new: 'New In', 'new-man': 'New In — Man',
  sale: 'Sale', 'sale-man': 'Sale — Man', dresses: 'Dresses', tops: 'Tops & Blouses',
  knitwear: 'Knitwear', 'knitwear-m': 'Knitwear', outerwear: 'Outerwear',
  bottoms: 'Trousers & Skirts', shirts: 'Shirts', tshirts: 'T-Shirts',
  trousers: 'Trousers', accessories: 'Accessories', bestsellers: 'Bestsellers'
};

function baht(n) { return '฿' + n.toLocaleString(); }

function productCardHTML(p) {
  const tagHTML = p.tag
    ? `<span class="card-tag${p.was ? ' sale' : ''}">${p.tag}</span>` : '';
  const priceHTML = p.was
    ? `<span class="was">${baht(p.was)}</span><span class="now">${baht(p.price)}</span>`
    : baht(p.price);
  const alt = p.img[1] ? 1 : 0;
  return `
  <a href="product.html?id=${p.id}" class="card">
    <div class="card-img">
      ${tagHTML}
      <div class="card-wish"><svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></div>
      <img class="img-main" src="${p.img[0]}" data-fallback="${p.fallback[0]}" alt="${p.name}" loading="lazy">
      <img class="img-alt" src="${p.img[alt]}" data-fallback="${p.fallback[alt]}" alt="${p.name} alternate" loading="lazy">
    </div>
    <div class="card-name">${p.name}</div>
    <div class="card-price">${priceHTML}</div>
    <div class="card-swatches">${p.colors.map(c => `<span class="swatch" style="background:${c.hex}"></span>`).join('')}</div>
  </a>`;
}
