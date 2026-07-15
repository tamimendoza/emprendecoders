let state = {
  activeIndex: 0,
  steps: [],
  autoPlayTimer: null,
  isAutoPlaying: true,
  isTransitioning: false,
};

function lockScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.overflow = '';
}

function selectStep(index) {
  if (state.isTransitioning || index === state.activeIndex) return;
  stopAutoPlay();
  goToStep(index);
}

function goToStep(index) {
  if (state.isTransitioning) return;
  state.isTransitioning = true;

  const prevIndex = state.activeIndex;
  state.activeIndex = index;

  const mockupImg = document.getElementById('sc-mockup-img');
  const dots = document.querySelectorAll('.sc-dot');
  const stepBtns = document.querySelectorAll('.sc-step-btn');

  stepBtns.forEach((btn, i) => {
    const circle = btn.querySelector('.sc-step-circle');
    const title = btn.querySelector('.sc-step-title');
    const desc = btn.querySelector('.sc-step-desc');
    const isActive = i === index;

    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    circle.className = `sc-step-circle w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-[0_0_12px_rgba(92,53,140,0.4)]' : 'border border-primary/20 text-skin-secondary bg-transparent'}`;
    title.className = `sc-step-title text-left transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-skin-secondary font-medium'}`;
    if (desc) {
      desc.className = `sc-step-desc text-xs sm:text-sm text-skin-secondary leading-relaxed overflow-hidden transition-all duration-400 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`;
    }
  });

  dots.forEach((dot, i) => {
    dot.className = `sc-dot w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-3' : 'bg-primary/30'}`;
  });

  if (mockupImg) {
    const newSrc = state.steps[index]?.image || mockupImg.src;
    const tempImg = new Image();
    tempImg.onload = () => {
      mockupImg.style.opacity = '0';
      mockupImg.style.transform = 'scale(0.95)';
      setTimeout(() => {
        mockupImg.src = newSrc;
        mockupImg.alt = state.steps[index]?.imageAlt || '';
        requestAnimationFrame(() => {
          mockupImg.style.opacity = '1';
          mockupImg.style.transform = 'scale(1)';
        });
        state.isTransitioning = false;
      }, 200);
    };
    tempImg.onerror = () => {
      mockupImg.src = newSrc;
      mockupImg.alt = state.steps[index]?.imageAlt || '';
      mockupImg.style.opacity = '1';
      mockupImg.style.transform = 'scale(1)';
      state.isTransitioning = false;
    };
    tempImg.src = newSrc;
  } else {
    state.isTransitioning = false;
  }

  const prevDesc = stepBtns[prevIndex]?.querySelector('.sc-step-desc');
  const newDesc = stepBtns[index]?.querySelector('.sc-step-desc');
  if (prevDesc) {
    prevDesc.classList.remove('max-h-40', 'opacity-100', 'mt-2');
    prevDesc.classList.add('max-h-0', 'opacity-0', 'mt-0');
  }
  if (newDesc) {
    newDesc.classList.remove('max-h-0', 'opacity-0', 'mt-0');
    newDesc.classList.add('max-h-40', 'opacity-100', 'mt-2');
  }
}

function startAutoPlay() {
  if (!state.isAutoPlaying) return;
  state.autoPlayTimer = setTimeout(() => {
    const next = (state.activeIndex + 1) % state.steps.length;
    goToStep(next);
    if (state.isAutoPlaying) startAutoPlay();
  }, 5000);
}

function stopAutoPlay() {
  state.isAutoPlaying = false;
  if (state.autoPlayTimer) {
    clearTimeout(state.autoPlayTimer);
    state.autoPlayTimer = null;
  }
  const indicator = document.getElementById('sc-autoplay-indicator');
  if (indicator) indicator.classList.add('opacity-0');
}

function handleKeydown(e) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault();
    const next = (state.activeIndex + 1) % state.steps.length;
    selectStep(next);
  }
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault();
    const prev = (state.activeIndex - 1 + state.steps.length) % state.steps.length;
    selectStep(prev);
  }
}

export function initSmartCapture() {
  const container = document.getElementById('smart-capture');
  if (!container) return;

  const stepElements = container.querySelectorAll('.sc-step-btn');
  state.steps = [];

  stepElements.forEach((btn) => {
    state.steps.push({
      image: btn.dataset.scImage,
      imageAlt: btn.dataset.scAlt || '',
    });
  });

  if (state.steps.length === 0) return;

  stepElements.forEach((btn, index) => {
    btn.addEventListener('click', () => selectStep(index));
  });

  document.addEventListener('keydown', handleKeydown);

  const mockupImg = document.getElementById('sc-mockup-img');
  if (mockupImg && state.steps[0]) {
    mockupImg.src = state.steps[0].image;
    mockupImg.alt = state.steps[0].imageAlt;
  }

  const dots = document.querySelectorAll('.sc-dot');
  dots.forEach((dot, i) => {
    dot.className = `sc-dot w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-primary w-3' : 'bg-primary/30'}`;
  });

  startAutoPlay();
}
