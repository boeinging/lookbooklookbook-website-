// ============================================
// lookbooklookbook — shared front-end interactions (mockup)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initDrawer();
  initSearch();
  initAccordion();
  initColorSwatches();
  initSizeButtons();
  initQtyControls();
  initAddToBag();
  initCardHoverImages();
  updateBagBadge();
  initRemoveFromBag();
  initNewsletter();
});

function initNewsletter() {
  const form = document.querySelector('[data-newsletter]');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.reset();
    showToast('ขอบคุณที่สมัครสมาชิก! ตรวจสอบส่วนลด 10% ในอีเมลของคุณ');
  });
}

/* ---------- Cart (localStorage) ---------- */
function getBag() {
  try { return JSON.parse(localStorage.getItem('lbl_bag')) || []; }
  catch (e) { return []; }
}
function saveBag(bag) { localStorage.setItem('lbl_bag', JSON.stringify(bag)); }

function updateBagBadge() {
  const bag = getBag();
  const count = bag.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('.bag-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToBag(item) {
  const bag = getBag();
  const existing = bag.find(i => i.id === item.id && i.size === item.size && i.color === item.color);
  if (existing) existing.qty += item.qty;
  else bag.push(item);
  saveBag(bag);
  updateBagBadge();
  showToast(`Added to bag — ${item.name} (${item.size})`);
}

/* ---------- Mobile drawer ---------- */
function initDrawer() {
  const openBtn = document.querySelector('[data-drawer-open]');
  const closeBtn = document.querySelector('[data-drawer-close]');
  const overlay = document.querySelector('.drawer-overlay');
  const drawer = document.querySelector('.drawer');
  if (!drawer) return;

  const open = () => { drawer.classList.add('open'); overlay.classList.add('open'); };
  const close = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); };

  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  overlay && overlay.addEventListener('click', close);
}

/* ---------- Search overlay ---------- */
function initSearch() {
  const openBtn = document.querySelector('[data-search-open]');
  const closeBtn = document.querySelector('[data-search-close]');
  const overlay = document.querySelector('.search-overlay');
  if (!overlay) return;

  const open = () => {
    overlay.classList.add('open');
    setTimeout(() => overlay.querySelector('input').focus(), 200);
  };
  const close = () => overlay.classList.remove('open');

  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ---------- Accordion (PDP details) ---------- */
function initAccordion() {
  document.querySelectorAll('.accordion-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.closest('.accordion-item');
      item.classList.toggle('open');
    });
  });
}

/* ---------- Color swatches (PDP) ---------- */
function initColorSwatches() {
  document.querySelectorAll('.color-options').forEach(group => {
    group.querySelectorAll('.color-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        group.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        sw.classList.add('selected');
        const label = document.querySelector('[data-color-label]');
        if (label) label.textContent = sw.dataset.color;
      });
    });
  });
}

/* ---------- Size buttons (PDP) ---------- */
function initSizeButtons() {
  document.querySelectorAll('.size-options').forEach(group => {
    group.querySelectorAll('.size-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  });
}

/* ---------- Quantity control ---------- */
function initQtyControls() {
  document.querySelectorAll('.qty-control').forEach(ctrl => {
    const span = ctrl.querySelector('span');
    const [minus, plus] = ctrl.querySelectorAll('button');
    minus.addEventListener('click', () => {
      let v = parseInt(span.textContent, 10);
      if (v > 1) span.textContent = v - 1;
    });
    plus.addEventListener('click', () => {
      let v = parseInt(span.textContent, 10);
      if (v < 9) span.textContent = v + 1;
    });
  });
}

/* ---------- Add to bag button (PDP) ---------- */
function initAddToBag() {
  const btn = document.querySelector('[data-add-to-bag]');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const sizeGroup = document.querySelector('.size-options');
    const selectedSize = sizeGroup ? sizeGroup.querySelector('.size-btn.selected') : null;
    if (sizeGroup && !selectedSize) {
      showToast('Please select a size');
      return;
    }
    const qtyEl = document.querySelector('.qty-control span');
    addToBag({
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      image: btn.dataset.image,
      size: selectedSize ? selectedSize.textContent.trim() : 'ONE SIZE',
      color: document.querySelector('[data-color-label]') ? document.querySelector('[data-color-label]').textContent : '',
      qty: qtyEl ? parseInt(qtyEl.textContent, 10) : 1
    });
  });
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ---------- Product card hover swap (shop grid) ---------- */
function initCardHoverImages() {
  // handled purely via CSS opacity transitions; no JS needed currently
}

/* ---------- Cart page rendering ---------- */
function renderBagPage() {
  const wrap = document.querySelector('[data-bag-items]');
  if (!wrap) return;
  const bag = getBag();

  if (bag.length === 0) {
    document.querySelector('[data-bag-empty]').style.display = 'block';
    document.querySelector('[data-bag-full]').style.display = 'none';
    return;
  }

  document.querySelector('[data-bag-empty]').style.display = 'none';
  document.querySelector('[data-bag-full]').style.display = 'grid';

  wrap.innerHTML = bag.map((item, idx) => `
    <div class="bag-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div class="bag-item-name">${item.name}</div>
        <div class="bag-item-meta">Color: ${item.color || '—'}</div>
        <div class="bag-item-meta">Size: ${item.size}</div>
        <div class="bag-item-meta">Qty: ${item.qty}</div>
        <a class="bag-item-remove" data-remove="${idx}">Remove</a>
      </div>
      <div class="bag-item-price">฿${(item.price * item.qty).toLocaleString()}</div>
    </div>
  `).join('');

  const subtotal = bag.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 1500 || subtotal === 0 ? 0 : 90;
  const total = subtotal + shipping;

  const subtotalEl = document.querySelector('[data-subtotal]');
  const shippingEl = document.querySelector('[data-shipping]');
  const totalEl = document.querySelector('[data-total]');
  if (subtotalEl) subtotalEl.textContent = `฿${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `฿${shipping}`;
  if (totalEl) totalEl.textContent = `฿${total.toLocaleString()}`;

  initRemoveFromBag();
}

function initRemoveFromBag() {
  document.querySelectorAll('[data-remove]').forEach(el => {
    el.addEventListener('click', () => {
      const bag = getBag();
      bag.splice(parseInt(el.dataset.remove, 10), 1);
      saveBag(bag);
      updateBagBadge();
      renderBagPage();
    });
  });
}

// run bag render on cart page load
if (document.querySelector('[data-bag-items]')) {
  document.addEventListener('DOMContentLoaded', renderBagPage);
}
