/**
 * main-hub.js — Own Time Home Club · Hub Central (v2)
 * Layout no-scroll: texto de orientação no topo + botões de tipologia no rodapé.
 * Depende de: data-hub.js (HUB)
 */

function renderTipologiaGrid() {
  const intro = HUB.intro;
  const hero  = HUB.hero;

  const btns = HUB.tipologias.map(t => {
    const bg = t.image ? `style="background-image:url('${t.image}')"` : '';
    return `
      <a href="${t.href}" class="hub__btn" id="btn-${t.id}" aria-label="${t.name} — ${t.subtitle}" ${bg}>
        <span class="hub__btn-text">
          <span class="hub__btn-subtitle">${t.subtitle}</span>
          <span class="hub__btn-name">${t.name}</span>
        </span>
      </a>
    `;
  }).join('');

  document.getElementById('tipologia-grid').innerHTML = `
    <div class="hub__page">
      <div class="hub__content">
        <p class="hub__brand-label">${hero.label} · ${hero.location}</p>
        <h1 class="hub__intro-title">${intro.heading}</h1>
        <p class="hub__intro-p">${intro.summary}</p>
        <div class="hub__intro-ctas">
          <button class="hub__intro-cta hub__intro-cta--ghost bs-trigger" data-bs-target="sheet-sobre-owntime">
            Ler mais
          </button>
        </div>
      </div>
      <nav class="hub__nav" aria-label="Selecione sua tipologia">${btns}</nav>
    </div>
  `;

  // Bottom sheet com texto completo
  const detailsHtml = (intro.details || [])
    .map(p => `<p>${p}</p>`)
    .join('');

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-sobre-owntime';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-sobre-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true">
          <i data-lucide="book-open"></i>
        </div>
        <h3 class="bottom-sheet__title" id="sheet-sobre-title">Own Time Home Club</h3>
      </header>
      <div class="bottom-sheet__body">${detailsHtml}</div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTipologiaGrid();
  lucide.createIcons();
  initBottomSheets();
});
