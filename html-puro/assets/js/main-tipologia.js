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
  renderFloatingAction(COMMON);

  // 2. Ícones após todo DOM estar pronto
  lucide.createIcons();

  // 3. Interações
  initBottomSheets();
  initAnimations();
  initFloatingVisibility();
});

function initFloatingVisibility() {
  const el = document.getElementById('floating-action');
  ScrollTrigger.create({
    trigger: 'body',
    start: '12% top',
    onEnter:     () => el.classList.add('is-visible'),
    onLeaveBack: () => el.classList.remove('is-visible')
  });
}
