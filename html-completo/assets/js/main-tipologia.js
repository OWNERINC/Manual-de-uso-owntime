/**
 * main-tipologia.js — Own Time Home Club
 * Inicialização para páginas de tipologia.
 * Depende: COMMON (data-common.js), TIPOLOGIA (data-{slug}.js),
 *          render-common.js, render-guia.js,
 *          components/bottom-sheet.js, components/animations.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render — ordem importa (top → bottom da página)
  renderHero(TIPOLOGIA);
  renderTipologiaFeatures(TIPOLOGIA);
  renderOrientacoesGerais(COMMON);
  renderGuia(TIPOLOGIA);
  renderClube(COMMON);
  renderFacilities(COMMON);
  renderAmenities(COMMON);
  renderGastronomy(COMMON);
  renderConcierge(COMMON);
  renderSegurancaAcesso(COMMON);
  renderFloatingAction(COMMON);

  // 2. Ícones após todo DOM estar pronto
  try { lucide.createIcons(); } catch (e) { console.warn('Lucide:', e); }

  // 3. Interações
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

function initFloatingVisibility() {
  const el = document.getElementById('floating-action');
  const trigger = document.getElementById('seguranca-acesso');
  if (!el || !trigger) return;

  ScrollTrigger.create({
    trigger,
    start: 'top bottom',
    end: 'bottom top',
    onEnter:      () => el.classList.add('is-visible'),
    onLeave:      () => el.classList.remove('is-visible'),
    onEnterBack:  () => el.classList.add('is-visible'),
    onLeaveBack:  () => el.classList.remove('is-visible')
  });
}
