// Product catalogue — คอลเลกชัน Late Checkout
//
// รูปสินค้าอยู่ใน images/ ตั้งชื่อตามแบบ <style>-<color>-N.jpg
// แต่ละสีมีแกลเลอรีของตัวเอง เวลากดเปลี่ยนสีในหน้าสินค้ารูปจะเปลี่ยนตาม
//
// ⚠️ ราคายังเป็นตัวเลขสมมติ รอยืนยันราคาจริง

const photos = (slug, count) =>
  Array.from({ length: count }, (_, i) => `images/${slug}-${i + 1}.jpg`);

const PRODUCTS = [
  {
    id: 1, name: 'Adeline Tiered Chiffon Gown', price: 5900, was: null,
    cat: ['gowns', 'floral', 'new', 'bestsellers'], tag: 'New',
    colors: [
      { name: 'Pink Blossom', hex: '#f3d9dc', photos: photos('adeline-pink', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Chiffon 100% · ซับในผ้าซาติน',
    desc: 'เดรสยาวชีฟองพิมพ์ลายดอกไม้ ตัดเย็บเป็นชั้นระบายไล่ระดับตลอดตัว สายเดี่ยวพร้อมผ้าคลุมไหล่ซีทรูติดคอ เคลื่อนไหวพลิ้วสวยทุกจังหวะ เหมาะกับงานแต่งงานและงานเลี้ยงกลางแจ้ง'
  },
  {
    id: 2, name: 'Anne Corset Lace Gown', price: 6900, was: null,
    cat: ['gowns', 'lace', 'new'], tag: 'New',
    colors: [
      { name: 'Lilac', hex: '#e0d4e2', photos: photos('anne-lilac', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['XS'],
    material: 'Lace 88%, Nylon 12% · โครงในเสริมแบบคอร์เซ็ต',
    desc: 'เดรสยาวผ้าลูกไม้ทรงเมอร์เมด อกเสื้อทรงหัวใจเสริมโครงคอร์เซ็ตช่วยกระชับรูปร่าง เกาะอกไร้สาย ลูกไม้ลายดอกทอละเอียดทั้งตัว งานราตรีที่ต้องการความหวานแบบคลาสสิก'
  },
  {
    id: 3, name: 'Aubrey Feather-Hem Satin Gown', price: 7900, was: null,
    cat: ['gowns', 'satin', 'new', 'bestsellers'], tag: 'New',
    colors: [
      { name: 'Champagne', hex: '#d8c4a4', photos: photos('aubrey-metallic', 4) },
      { name: 'Pearl', hex: '#efe7d9', photos: photos('aubrey-pearl', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Satin 95%, Elastane 5% · ชายกระโปรงแต่งขนเฟอร์สังเคราะห์',
    desc: 'เดรสยาวผ้าซาตินตัดเฉลียง (bias cut) เปิดหลังลึก คอผูกหลัง ชายกระโปรงแต่งขนฟูเป็นชั้นให้ความหรูหราแบบฮอลลีวูดยุคเก่า ผ้าทิ้งตัวแนบเรียบไปกับรูปร่าง'
  },
  {
    id: 4, name: 'Bree Ruched Column Gown', price: 5500, was: null,
    cat: ['gowns', 'floral', 'bestsellers'], tag: null,
    colors: [
      { name: 'Pink Blossom', hex: '#f4d8d6', photos: photos('bree-pink', 4) },
      { name: 'Sage', hex: '#c9cfba', photos: photos('bree-green', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['L'],
    material: 'Printed Chiffon · ซับในสองชั้น',
    desc: 'เดรสยาวทรงตรงเกาะอก จับจีบรูดด้านหน้าช่วยเก็บทรงและพรางหน้าท้อง มาพร้อมผ้าพันคอผืนยาวลายเดียวกัน ใส่คลุมไหล่หรือผูกคอได้ตามใจ'
  },
  {
    id: 5, name: 'Isabelle Floral Maxi Dress', price: 4900, was: null,
    cat: ['gowns', 'floral', 'new'], tag: 'New',
    colors: [
      { name: 'Pink Blossom', hex: '#f6dbdc', photos: photos('isabelle-pink', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Chiffon 100% · ซับในผ้าซาติน',
    desc: 'เดรสยาวชีฟองพิมพ์ลายดอกไม้ทรงเอ ไลน์ สายเดี่ยว อกเสื้อทรงหัวใจ กระโปรงบานพอดีไม่อลังการเกินไป ใส่ไปงานหมั้นหรือถ่ายพรีเวดดิงได้สบาย'
  },
  {
    id: 6, name: 'Kimberly Floral Ball Gown', price: 6500, was: null,
    cat: ['gowns', 'floral'], tag: null,
    colors: [
      { name: 'Pink Blossom', hex: '#f3d5d7', photos: photos('kimberly-pink', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: [],
    material: 'Printed Taffeta · โครงกระโปรงเสริมทรง',
    desc: 'เดรสยาวทรงบอลกาวน์ผ้าทาฟเฟต้าพิมพ์ลายดอกไม้ คอผูกหลังเปิดไหล่ กระโปรงบานเต็มทรงมีโครงเสริมด้านใน ชุดเจ้าบทเจ้าทางสำหรับงานที่ต้องการความโดดเด่น'
  },
  {
    id: 7, name: 'Paula Jacquard Halter Gown', price: 6900, was: null,
    cat: ['gowns', 'jacquard', 'bestsellers'], tag: null,
    colors: [
      { name: 'Sage', hex: '#cdd0b8', photos: photos('paula-green', 4) }
    ],
    sizes: ['XS', 'S', 'M', 'L'], soldOut: ['XS'],
    material: 'Jacquard 100% · ทอลายนูนในตัว',
    desc: 'เดรสยาวทรงคอลัมน์ผ้าแจ็คการ์ดทอลายนูน คอวีผูกหลังเปิดแผ่นหลัง ทรงเรียบตรงยาวจรดพื้นช่วยให้สัดส่วนดูสูงโปร่ง เนื้อผ้ามีน้ำหนักอยู่ทรงสวย'
  }
];

const CAT_LABELS = {
  gowns: 'All Gowns', new: 'New In', bestsellers: 'Bestsellers',
  floral: 'Floral Print', lace: 'Lace', satin: 'Satin', jacquard: 'Jacquard',
  'late-checkout': 'Late Checkout'
};

function baht(n) { return '฿' + n.toLocaleString(); }

// รูปหลักของสินค้า = รูปแรกของสีแรก
function heroPhotos(p) {
  const set = p.colors[0].photos;
  return [set[0], set[1] || set[0]];
}

function productCardHTML(p) {
  const tagHTML = p.tag
    ? `<span class="card-tag${p.was ? ' sale' : ''}">${p.tag}</span>` : '';
  const priceHTML = p.was
    ? `<span class="was">${baht(p.was)}</span><span class="now">${baht(p.price)}</span>`
    : baht(p.price);
  const [main, alt] = heroPhotos(p);
  return `
  <a href="product.html?id=${p.id}" class="card">
    <div class="card-img">
      ${tagHTML}
      <div class="card-wish"><svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></div>
      <img class="img-main" src="${main}" alt="${p.name}" loading="lazy">
      <img class="img-alt" src="${alt}" alt="${p.name} alternate view" loading="lazy">
    </div>
    <div class="card-name">${p.name}</div>
    <div class="card-price">${priceHTML}</div>
    <div class="card-swatches">${p.colors.map(c => `<span class="swatch" style="background:${c.hex}" title="${c.name}"></span>`).join('')}</div>
  </a>`;
}
