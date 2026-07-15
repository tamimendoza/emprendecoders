let currentIndex = 0;
let items = [];
let lightbox = null;
let lightboxImg = null;
let lightboxLabel = null;

function lockScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.overflow = '';
}

function open(index) {
  items = document.querySelectorAll('[data-gallery-index]');
  if (!items.length) return;
  lightbox = document.getElementById('gallery-lightbox');
  lightboxImg = document.getElementById('lightbox-image');
  lightboxLabel = document.getElementById('lightbox-label');

  currentIndex = index;
  render();
  lightbox.classList.remove('hidden');
  lockScroll();
}

function close() {
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  unlockScroll();
}

function render() {
  const item = items[currentIndex];
  if (!item) return;
  lightboxImg.src = item.dataset.gallerySrc;
  lightboxImg.alt = item.dataset.galleryLabel || '';
  lightboxLabel.textContent = item.dataset.galleryLabel || '';
}

function next(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex + 1) % items.length;
  render();
}

function prev(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  render();
}

function handleKeydown(e) {
  if (lightbox?.classList.contains('hidden')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
}

export function initGallery() {
  document.querySelectorAll('[data-gallery-index]').forEach((btn) => {
    btn.addEventListener('click', () => {
      open(parseInt(btn.dataset.galleryIndex));
    });
  });

  document.addEventListener('keydown', handleKeydown);

  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = document.getElementById('lightbox-backdrop');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);
}
