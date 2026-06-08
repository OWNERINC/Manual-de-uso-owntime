/**
 * main-hub.js — Own Time Home Club · Hub Central
 * Mostra imediatamente os 4 cards de tipologia ao abrir o link.
 * Depende de: data-hub.js (HUB)
 */

/* ═══════════════════════════════════════════
   RENDER — Grid dos 4 cards de tipologia
   ═══════════════════════════════════════════ */
function renderTipologiaGrid() {
  const cards = HUB.tipologias.map(t => {
    const bgStyle = t.image ? `style="background-image: url('${t.image}')"` : '';
    return `
      <a href="${t.href}" class="hub__card" id="card-${t.id}" aria-label="${t.name} — ${t.subtitle}">
        <div class="hub__card-bg" ${bgStyle} aria-hidden="true"></div>
        <div class="hub__card-overlay" aria-hidden="true"></div>
        <div class="hub__card-content">
          <span class="hub__card-subtitle">${t.subtitle}</span>
          <h2 class="hub__card-name">${t.name}</h2>
        </div>
      </a>
    `;
  }).join('');

  document.getElementById('tipologia-grid').innerHTML = `
    <h1 class="hub__title">Onde você <em>está</em>?</h1>
    <div class="hub__grid">${cards}</div>
  `;
}

/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderTipologiaGrid();
  lucide.createIcons();
});
