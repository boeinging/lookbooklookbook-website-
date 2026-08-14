// Shared header / drawer / search / footer markup for all pages.
// Injected into [data-layout-header] and [data-layout-footer] placeholders.

const HEADER_HTML = `
<div class="announce">ส่งฟรีเมื่อซื้อครบ ฿1,500 · คอลเลกชันใหม่มาแล้ววันนี้</div>

<header class="header">
  <div class="header-inner">
    <div style="display:flex;align-items:center;gap:18px;">
      <button class="hamburger" data-drawer-open aria-label="Menu">
        <svg class="icon" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <ul class="nav-main">
        <li>
          <a href="shop.html?cat=woman" class="nav-link">Woman</a>
          <div class="mega">
            <div class="mega-col">
              <h4>Clothing</h4>
              <ul>
                <li><a href="shop.html?cat=dresses">Dresses</a></li>
                <li><a href="shop.html?cat=tops">Tops &amp; Blouses</a></li>
                <li><a href="shop.html?cat=knitwear">Knitwear</a></li>
                <li><a href="shop.html?cat=outerwear">Outerwear</a></li>
                <li><a href="shop.html?cat=bottoms">Trousers &amp; Skirts</a></li>
              </ul>
            </div>
            <div class="mega-col">
              <h4>Featured</h4>
              <ul>
                <li><a href="shop.html?cat=new">New In</a></li>
                <li><a href="shop.html?cat=bestsellers">Bestsellers</a></li>
                <li><a href="shop.html?cat=accessories">Accessories</a></li>
                <li><a href="shop.html?cat=sale">Sale</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="shop.html?cat=man" class="nav-link">Man</a>
          <div class="mega">
            <div class="mega-col">
              <h4>Clothing</h4>
              <ul>
                <li><a href="shop.html?cat=shirts">Shirts</a></li>
                <li><a href="shop.html?cat=tshirts">T-Shirts</a></li>
                <li><a href="shop.html?cat=knitwear-m">Knitwear</a></li>
                <li><a href="shop.html?cat=trousers">Trousers</a></li>
              </ul>
            </div>
            <div class="mega-col">
              <h4>Featured</h4>
              <ul>
                <li><a href="shop.html?cat=new-man">New In</a></li>
                <li><a href="shop.html?cat=sale-man">Sale</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="shop.html?cat=new" class="nav-link">New In</a></li>
        <li><a href="shop.html?cat=sale" class="nav-link" style="color:#b46a7d;">Sale</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </div>

    <a href="index.html" class="logo">lookbooklookbook</a>

    <div class="header-icons">
      <button data-search-open aria-label="Search" class="hide-mobile">
        <svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <a href="#" aria-label="Account" class="hide-mobile">
        <svg class="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </a>
      <a href="cart.html" aria-label="Bag">
        <svg class="icon" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="bag-count">0</span>
      </a>
    </div>
  </div>
</header>

<div class="drawer-overlay" data-drawer-close></div>
<nav class="drawer">
  <button class="drawer-close" data-drawer-close aria-label="Close menu">&times;</button>
  <h3>Woman</h3>
  <div class="drawer-sub">
    <a href="shop.html?cat=dresses">Dresses</a>
    <a href="shop.html?cat=tops">Tops &amp; Blouses</a>
    <a href="shop.html?cat=knitwear">Knitwear</a>
    <a href="shop.html?cat=outerwear">Outerwear</a>
  </div>
  <h3>Man</h3>
  <div class="drawer-sub">
    <a href="shop.html?cat=shirts">Shirts</a>
    <a href="shop.html?cat=tshirts">T-Shirts</a>
    <a href="shop.html?cat=trousers">Trousers</a>
  </div>
  <h3>&nbsp;</h3>
  <a href="shop.html?cat=new">New In</a>
  <a href="shop.html?cat=sale">Sale</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>

<div class="search-overlay">
  <button class="search-close" data-search-close aria-label="Close search">&times;</button>
  <div class="search-box">
    <input type="text" placeholder="ค้นหาสินค้า, คอลเลกชัน...">
    <div class="search-suggest">
      คำค้นยอดนิยม:
      <a href="shop.html?cat=dresses">Dresses</a>
      <a href="shop.html?cat=knitwear">Knitwear</a>
      <a href="shop.html?cat=new">New In</a>
      <a href="shop.html?cat=sale">Sale</a>
    </div>
  </div>
</div>
`;

const FOOTER_HTML = `
<section class="newsletter">
  <div class="container">
    <h3>Join The Lookbook List</h3>
    <p>รับส่วนลด 10% สำหรับการสั่งซื้อครั้งแรก พร้อมอัปเดตคอลเลกชันใหม่ก่อนใคร</p>
    <form class="newsletter-form" data-newsletter>
      <input type="email" placeholder="อีเมลของคุณ" required>
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">lookbooklookbook</div>
        <p>แบรนด์เสื้อผ้ามินิมอลโทนขาว-ชมพู ออกแบบเพื่อความเรียบง่ายและสวมใส่สบายในทุกวัน<br>@lookbooklookbook</p>
        <div class="footer-social">
          <a href="https://instagram.com/lookbooklookbook" target="_blank" rel="noopener" aria-label="Instagram"><svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="Facebook"><svg class="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg class="icon" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
        </div>
      </div>
      <div>
        <h5>Shop</h5>
        <ul>
          <li><a href="shop.html?cat=woman">Woman</a></li>
          <li><a href="shop.html?cat=man">Man</a></li>
          <li><a href="shop.html?cat=accessories">Accessories</a></li>
          <li><a href="shop.html?cat=sale">Sale</a></li>
        </ul>
      </div>
      <div>
        <h5>Help</h5>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html#faq">Shipping &amp; Returns</a></li>
          <li><a href="contact.html#faq">Size Guide</a></li>
          <li><a href="contact.html#faq">Track Order</a></li>
        </ul>
      </div>
      <div>
        <h5>About</h5>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="about.html#sustainability">Sustainability</a></li>
          <li><a href="about.html#careers">Careers</a></li>
          <li><a href="about.html#stores">Store Locator</a></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="mailto:hello@lookbooklookbook.com">hello@lookbooklookbook.com</a></li>
          <li><a href="tel:+6620000000">02-000-0000</a></li>
          <li><a href="#">123 สุขุมวิท, กรุงเทพฯ</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 lookbooklookbook. All rights reserved. (Design Mockup)</span>
      <div class="payments">
        <span>VISA</span><span>MASTER</span><span>PROMPTPAY</span><span>COD</span>
      </div>
    </div>
  </div>
</footer>
`;

const headerSlot = document.querySelector('[data-layout-header]');
const footerSlot = document.querySelector('[data-layout-footer]');
if (headerSlot) headerSlot.outerHTML = HEADER_HTML;
if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
