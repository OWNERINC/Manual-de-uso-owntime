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
  if (!reducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    const heroTl = gsap.timeline({ delay: 0.1 });
    heroTl
      .to('.hero__label',    { opacity: 1, y: 0, duration: 0.9,  ease: 'power3.out' })
      .to('.hero__headline', { opacity: 1, y: 0, duration: 1.1,  ease: 'power3.out' }, '-=0.5')
      .to('.hero__sub',      { opacity: 1, y: 0, duration: 0.9,  ease: 'power3.out' }, '-=0.55')
      .to('.hero__footer',   { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.5');

    // Linha de scroll shrink (scrub puro — sem estado inicial oculto)
    gsap.to('.hero__scroll-line', {
      scaleX: 0,
      transformOrigin: 'right center',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
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
