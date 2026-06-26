/**
 * main-tipologia.js — Own Time Home Club
 * Inicialização para páginas de tipologia.
 * Depende: COMMON (data-common.js), TIPOLOGIA (data-{slug}.js),
 *          render-common.js, render-guia.js,
 *          components/bottom-sheet.js, components/animations.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const hk = (COMMON.concierge || []).find(c => c.id === 'housekeeping');
  if (hk && TIPOLOGIA.housekeepingDay) hk.hours = TIPOLOGIA.housekeepingDay;

  if (Array.isArray(TIPOLOGIA.extraOrientacoes)) {
    COMMON.orientacoesGerais = [...COMMON.orientacoesGerais, ...TIPOLOGIA.extraOrientacoes];
  }

  // 1. Render — ordem importa (top → bottom da página)
  renderHero(TIPOLOGIA);
  renderTipologiaFeatures(TIPOLOGIA);
  renderOrientacoesGerais(COMMON);
  renderGuia(TIPOLOGIA);
  renderFacilities(COMMON, TIPOLOGIA);
  renderGastronomy(COMMON);
  renderConcierge(COMMON);
  renderSegurancaAcesso(COMMON);
  renderFloatingAction(COMMON);
  initSearch();

  // 2. Ícones após todo DOM estar pronto
  try { lucide.createIcons(); } catch (e) { console.warn('Lucide:', e); }

  // 3. Interações
  initSectionNav();
  initBottomSheets();
  try {
    initAnimations();
  } catch (e) {
    // Fallback: revela hero se GSAP falhar
    document.querySelectorAll('.hero__label,.hero__headline,.hero__sub,.hero__footer')
      .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    console.warn('Animations:', e);
  }
  try { initFloatingVisibility(); } catch (e) { console.warn('FloatingVisibility:', e); }
});

function initSectionNav() {
  const SECTIONS = [
    { id: 'orientacoes-gerais', label: 'Orientações' },
    { id: 'guia-container',     label: 'Guia da Casa' },
    { id: 'facilities',         label: 'Conforto' },
    { id: 'gastronomy',         label: 'Gastronomia' },
    { id: 'concierge',          label: 'Anfitriões' },
    { id: 'seguranca-acesso',   label: 'Segurança' },
  ].filter(s => document.getElementById(s.id));

  if (SECTIONS.length < 2) return;

  const nav = document.createElement('nav');
  nav.className = 'section-nav';
  nav.id = 'section-nav';
  nav.setAttribute('aria-label', 'Ir para seção');

  const track = document.createElement('div');
  track.className = 'section-nav__track';
  nav.appendChild(track);

  const pills = SECTIONS.map((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'section-nav__pill' + (i === 0 ? ' is-active' : '');
    btn.textContent = s.label;
    btn.setAttribute('aria-label', `Ir para ${s.label}`);
    btn.addEventListener('click', () => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const navH    = nav.offsetHeight;
      const searchH = window.matchMedia('(max-width: 768px)').matches ? 58 : 0;
      const top     = el.getBoundingClientRect().top + window.scrollY - navH - searchH - 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
    track.appendChild(btn);
    return btn;
  });

  document.getElementById('hero').after(nav);

  // Scroll-spy via rAF
  let rafId = null;
  function updateActive() {
    const scrollMid = window.scrollY + window.innerHeight * 0.35;
    let activeIdx = 0;
    SECTIONS.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (el && el.offsetTop <= scrollMid) activeIdx = i;
    });
    pills.forEach((p, i) => p.classList.toggle('is-active', i === activeIdx));
    pills[activeIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  window.addEventListener('scroll', () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => { updateActive(); rafId = null; });
  }, { passive: true });

  updateActive();
}

function initFloatingVisibility() {
  const el      = document.getElementById('floating-action');
  const trigger = document.getElementById('seguranca-acesso');
  if (!el || !trigger) return;

  ScrollTrigger.create({
    trigger,
    start:       'top 80%',
    onEnter:     () => el.classList.add('is-visible'),
    onLeaveBack: () => el.classList.remove('is-visible'),
  });
}
