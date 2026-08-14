// Mock product catalogue. Images are placeholder services — swap for real photography.

const IMG = (label, bg = 'fbeef1') =>
  `https://placehold.co/600x800/${bg}/1a1a1a?text=${encodeURIComponent(label)}`;

const PRODUCTS = [
  {
    id: 1, name: 'Satin Slip Midi Dress', price: 1890, was: null,
    cat: ['woman', 'dresses', 'new'], tag: 'New',
    colors: [{ name: 'Blush', hex: '#f6dde3' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Cream', hex: '#e9e4de' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: ['XL'],
    material: 'ผ้าซาตินสัมผัสนุ่ม 96% Viscose, 4% Elastane',
    desc: 'เดรสทรงสลิปยาวระดับกลางน่อง ตัดเย็บด้วยผ้าซาตินทิ้งตัวสวย สายเดี่ยวปรับระดับได้ ใส่ได้ทั้งลุคกลางวันและงานเลี้ยงยามค่ำ',
    img: [IMG('Satin Slip Dress'), IMG('Satin Slip 02', 'f6dde3'), IMG('Satin Slip 03', 'f2f2f2'), IMG('Satin Slip 04', 'efe6e2')]
  },
  {
    id: 2, name: 'Oversized Wool-Blend Coat', price: 3290, was: null,
    cat: ['woman', 'outerwear', 'new', 'bestsellers'], tag: null,
    colors: [{ name: 'Sand', hex: '#efe6e2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Wool 62%, Polyester 34%, Other 4%',
    desc: 'โค้ตทรงโอเวอร์ไซส์ ปกเสื้อแบบ notched lapel กระดุมหน้าเม็ดใหญ่ ผ้าผสมขนแกะเนื้อแน่นให้ความอบอุ่นโดยไม่หนักเกินไป',
    img: [IMG('Wool Coat', 'f2f2f2'), IMG('Wool Coat 02', 'efe6e2'), IMG('Wool Coat 03', 'fbeef1')]
  },
  {
    id: 3, name: 'Ribbed Knit Top', price: 790, was: 990,
    cat: ['woman', 'knitwear', 'sale'], tag: '-20%',
    colors: [{ name: 'Blush', hex: '#f6dde3' }, { name: 'White', hex: '#ffffff' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['XS'],
    material: 'Cotton 70%, Polyamide 30%',
    desc: 'เสื้อนิตลายริ้วเข้ารูป คอกลม แขนยาว เนื้อผ้ายืดหยุ่นสวมใส่สบาย เหมาะกับการใส่เดี่ยวหรือใส่ซ้อนใต้เบลเซอร์',
    img: [IMG('Ribbed Knit Top'), IMG('Ribbed Knit 02', 'f6dde3'), IMG('Ribbed Knit 03', 'f2f2f2')]
  },
  {
    id: 4, name: 'Tailored Wide-Leg Trousers', price: 1590, was: null,
    cat: ['woman', 'bottoms', 'bestsellers'], tag: null,
    colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'Sand', hex: '#efe6e2' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Polyester 88%, Viscose 10%, Elastane 2%',
    desc: 'กางเกงขากว้างทรงสูง จีบหน้าคมชัด เอวสูงช่วยให้ขาดูยาว ตัดเย็บจากผ้าเนื้อเรียบทิ้งตัว',
    img: [IMG('Wide-Leg Trousers', 'f2f2f2'), IMG('Trousers 02', 'efe6e2'), IMG('Trousers 03', 'fbeef1')]
  },
  {
    id: 5, name: 'Relaxed Linen Shirt', price: 1190, was: null,
    cat: ['woman', 'tops', 'new'], tag: 'New',
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Blush', hex: '#f6dde3' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Linen 100%',
    desc: 'เชิ้ตลินินทรงหลวม ปกคลาสสิก กระดุมหน้า ระบายอากาศได้ดีเหมาะกับอากาศร้อน',
    img: [IMG('Linen Shirt'), IMG('Linen Shirt 02', 'f6dde3'), IMG('Linen Shirt 03', 'f2f2f2')]
  },
  {
    id: 6, name: 'Pleated Midi Skirt', price: 1390, was: null,
    cat: ['woman', 'bottoms'], tag: null,
    colors: [{ name: 'Sand', hex: '#efe6e2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['L'],
    material: 'Polyester 100%',
    desc: 'กระโปรงจีบรอบตัวยาวระดับกลางน่อง เอวยางยืดด้านหลัง เคลื่อนไหวพลิ้วสวยทุกก้าว',
    img: [IMG('Pleated Skirt', 'f2f2f2'), IMG('Pleated Skirt 02', 'efe6e2'), IMG('Pleated Skirt 03', 'fbeef1')]
  },
  {
    id: 7, name: 'Cropped Tailored Blazer', price: 2290, was: null,
    cat: ['woman', 'outerwear', 'bestsellers'], tag: null,
    colors: [{ name: 'Black', hex: '#1a1a1a' }, { name: 'Blush', hex: '#f6dde3' }],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Polyester 76%, Viscose 22%, Elastane 2%',
    desc: 'เบลเซอร์ทรงครอปเข้ารูป ปกแหลม กระดุมเดี่ยว โครงสร้างไหล่คมชัด ใส่คู่กับกางเกงขากว้างได้ลงตัว',
    img: [IMG('Cropped Blazer'), IMG('Cropped Blazer 02', 'f6dde3'), IMG('Cropped Blazer 03', 'f2f2f2')]
  },
  {
    id: 8, name: 'Essential Cotton Tee', price: 499, was: 590,
    cat: ['woman', 'man', 'tops', 'tshirts', 'sale'], tag: '-15%',
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Blush', hex: '#f6dde3' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Organic Cotton 100%',
    desc: 'เสื้อยืดคอกลมทรงพื้นฐาน ผ้าคอตตอนออร์แกนิกเนื้อแน่น ไม่ย้วยง่าย เป็นไอเทมยืนพื้นของทุกตู้เสื้อผ้า',
    img: [IMG('Cotton Tee', 'f2f2f2'), IMG('Cotton Tee 02', 'efe6e2'), IMG('Cotton Tee 03', 'fbeef1')]
  },
  {
    id: 9, name: 'Poplin Oversized Shirt', price: 1290, was: null,
    cat: ['man', 'shirts', 'new-man', 'new'], tag: 'New',
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Sand', hex: '#efe6e2' }],
    sizes: ['S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Cotton 100%',
    desc: 'เชิ้ตป็อปลินทรงโอเวอร์ไซส์ กระเป๋าอกหนึ่งใบ ปลายแขนกระดุมคู่ ใส่สบายทั้งวัน',
    img: [IMG('Poplin Shirt', 'f2f2f2'), IMG('Poplin Shirt 02', 'efe6e2')]
  },
  {
    id: 10, name: 'Merino Crewneck Sweater', price: 1990, was: null,
    cat: ['man', 'knitwear-m'], tag: null,
    colors: [{ name: 'Cream', hex: '#e9e4de' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M', 'L', 'XL'], soldOut: ['S'],
    material: 'Merino Wool 100%',
    desc: 'สเวตเตอร์คอกลมผ้าเมอริโนวูลแท้ 100% เนื้อบางเบาแต่อบอุ่น ไม่คันผิว',
    img: [IMG('Merino Sweater', 'efe6e2'), IMG('Merino 02', 'f2f2f2')]
  },
  {
    id: 11, name: 'Leather Shoulder Bag', price: 2590, was: null,
    cat: ['accessories', 'bestsellers', 'woman'], tag: null,
    colors: [{ name: 'Blush', hex: '#f6dde3' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['ONE SIZE'], soldOut: [],
    material: 'Genuine Leather',
    desc: 'กระเป๋าสะพายไหล่หนังแท้ ทรงเรียบง่าย สายปรับความยาวได้ ช่องด้านในหนึ่งช่องพร้อมซิป',
    img: [IMG('Leather Bag'), IMG('Leather Bag 02', 'f6dde3')]
  },
  {
    id: 12, name: 'Slim Tapered Chinos', price: 1490, was: null,
    cat: ['man', 'trousers'], tag: null,
    colors: [{ name: 'Sand', hex: '#efe6e2' }, { name: 'Black', hex: '#1a1a1a' }],
    sizes: ['S', 'M', 'L', 'XL'], soldOut: [],
    material: 'Cotton 98%, Elastane 2%',
    desc: 'กางเกงชิโนทรงเรียวเข้ารูป ยืดหยุ่นเล็กน้อยเพื่อความสบายในการเคลื่อนไหว',
    img: [IMG('Chinos', 'f2f2f2'), IMG('Chinos 02', 'efe6e2')]
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
  return `
  <a href="product.html?id=${p.id}" class="card">
    <div class="card-img">
      ${tagHTML}
      <div class="card-wish"><svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></div>
      <img class="img-main" src="${p.img[0]}" alt="${p.name}" loading="lazy">
      <img class="img-alt" src="${p.img[1] || p.img[0]}" alt="${p.name} alternate" loading="lazy">
    </div>
    <div class="card-name">${p.name}</div>
    <div class="card-price">${priceHTML}</div>
    <div class="card-swatches">${p.colors.map(c => `<span class="swatch" style="background:${c.hex}"></span>`).join('')}</div>
  </a>`;
}
