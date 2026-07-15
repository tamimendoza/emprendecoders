let sharedObserver = null;

const defaults = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px',
};

function getObserver(options = {}) {
  if (!sharedObserver) {
    const config = { ...defaults, ...options };
    sharedObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sharedObserver.unobserve(entry.target);
        }
      });
    }, config);
  }
  return sharedObserver;
}

export function observe(elements, options = {}) {
  const observer = getObserver(options);
  const items = elements instanceof NodeList ? Array.from(elements)
    : Array.isArray(elements) ? elements
    : [elements];
  items.forEach((el) => observer.observe(el));
}

export function observeReveal(options = {}) {
  if (typeof document === 'undefined') return;
  const els = document.querySelectorAll('.reveal');
  if (els.length) observe(els, options);
}
