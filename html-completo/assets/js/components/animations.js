/**
 * animations.js
 *
 * Hero  → GSAP timeline (entrada no load, sem ScrollTrigger)
 * Seções → IntersectionObserver + CSS transitions
 *
 * Regras do observer:
 *  - Elementos já visíveis no load (acima do fold) NUNCA recebem opacity:0
 *  - Threshold baixo (5%) + sem rootMargin = dispara assim que o elemento aparece
 *  - Fallback de 3s revela qualquer elemento que o IO não tenha alcançado
 */

function initAnimations() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─────────────────────────────────────────
     HERO — GSAP timeline (sem ScrollTrigger)
     ───────────────────────────────────────── */

  // Se GSAP não carregou (CDN offline, cache corrompido), força visibilidade imediata
  if (typeof gsap === 'undefined') {
    document.querySelectorAll('.hero__label,.hero__headline,.hero__sub,.hero__intro,.hero__footer').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  if (!reducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    const heroTl = gsap.timeline({ delay: 0.1 });
    heroTl
      .from('.hero__label',    { opacity: 0, y: 12, duration: 0.9,  ease: 'power3.out', clearProps: 'all' })
      .from('.hero__headline', { opacity: 0, y: 40, duration: 1.1,  ease: 'power3.out', clearProps: 'all' }, '-=0.5')
      .from('.hero__sub',      { opacity: 0, y: 16, duration: 0.9,  ease: 'power3.out', clearProps: 'all' }, '-=0.55')
      .from('.hero__intro',    { opacity: 0, y: 14, duration: 0.85, ease: 'power3.out', clearProps: 'all' }, '-=0.45')
      .from('.hero__footer',   { opacity: 0, y: 12, duration: 0.75, ease: 'power3.out', clearProps: 'all' }, '-=0.5');

  }

  /* ─────────────────────────────────────────
     REVEALS DE SEÇÃO — IntersectionObserver
     ───────────────────────────────────────── */
  initRevealObserver(reducedMotion);
}

function initRevealObserver(reducedMotion) {
  if (reducedMotion) return;

  const targets = [
    { sel: '.facilities__header',          delay: 0 },
    { sel: '.facilities .accordion__item', stagger: 0.09 },
    { sel: '.amenities__header',           delay: 0 },
    { sel: '.amenity-card',                diagonal: true },
    { sel: '.gastronomy__header',           delay: 0 },
    { sel: '.gastronomy .accordion__item', stagger: 0.09 }
    // ← concierge intencionalmente ausente: sempre visível
  ];

  const vh = window.innerHeight;
  const toObserve = [];

  targets.forEach(({ sel, stagger, diagonal, delay }) => {
    document.querySelectorAll(sel).forEach((el, i) => {

      // Elementos já no viewport inicial ficam visíveis — não recebem js-reveal
      const rect = el.getBoundingClientRect();
      if (rect.top < vh) return;

      el.classList.add('js-reveal');
      toObserve.push(el);

      let d = (delay != null && !stagger && !diagonal) ? delay : 0;
      if (stagger)  d = i * stagger;
      if (diagonal) d = ((i % 2) + Math.floor(i / 2)) * 0.12;

      if (d > 0) el.style.transitionDelay = `${d}s`;
    });
  });

  if (!toObserve.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.05
    // rootMargin padrão — viewport real, sem redução
  });

  toObserve.forEach(el => observer.observe(el));

  // Fallback: garante visibilidade total após 3 s caso o IO falhe
  setTimeout(() => {
    document.querySelectorAll('.js-reveal:not(.js-revealed)').forEach(reveal);
  }, 3000);
}

function reveal(el) {
  el.classList.add('js-revealed');
  el.addEventListener('transitionend', () => {
    el.style.transitionDelay = '';
  }, { once: true });
}
