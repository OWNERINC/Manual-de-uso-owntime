/**
 * main-hub.js — Own Time Home Club · Hub Central (v2)
 * Layout no-scroll: texto de orientação no topo + botões de tipologia no rodapé.
 * Depende de: data-hub.js (HUB)
 */

function renderTipologiaGrid() {
  const intro = HUB.intro;
  const hero  = HUB.hero;

  const btns = HUB.tipologias.map(t => {
    const bgStyle = t.image ? `style="background-image:url('${t.image}')"` : '';
    return `
      <a href="${t.href}" class="hub__btn" id="btn-${t.id}" aria-label="${t.name} — ${t.subtitle}">
        <span class="hub__btn-bg" ${bgStyle} aria-hidden="true"></span>
        <span class="hub__btn-text">
          <span class="hub__btn-subtitle">${t.subtitle}</span>
          <span class="hub__btn-name">${t.name}</span>
          <span class="hub__btn-stats">${t.area} · ${t.capacidade}</span>
        </span>
      </a>
    `;
  }).join('');

  const softOpeningHtml = (HUB.softOpening?.active)
    ? `<div class="hub__soft-opening">
         <button class="hub__soft-opening-badge bs-trigger" data-bs-target="sheet-soft-opening" aria-label="Saiba mais sobre o Soft Opening">
           <i data-lucide="sparkles"></i>
           ${HUB.softOpening.label}
         </button>
       </div>`
    : '';

  document.getElementById('tipologia-grid').innerHTML = `
    <div class="hub__page">
      <div class="hub__content">
        <h1 class="hub__intro-title">
          <span class="hub__intro-title__pre">${intro.preHeading}</span>
          <img src="assets/logo.png" class="hub__intro-logo" alt="Own Time Home Club" draggable="false">
        </h1>
        <p class="hub__intro-p">${intro.summary}</p>
        ${softOpeningHtml}
        <div class="hub__intro-ctas">
          <button class="hub__intro-cta hub__intro-cta--outline bs-trigger" data-bs-target="sheet-sobre-owntime">
            <i data-lucide="book-open"></i>
            Ler mais
          </button>
          <a href="clube.html" class="hub__intro-cta hub__intro-cta--outline">
            <i data-lucide="building-2"></i>
            Club House
          </a>
          <button class="hub__intro-cta hub__intro-cta--hours bs-trigger" data-bs-target="sheet-horarios">
            <i data-lucide="clock"></i>
            Horários
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
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar">
          <i data-lucide="x"></i>
        </button>
      </header>
      <div class="bottom-sheet__body">${detailsHtml}</div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

function renderHorariosSheet(horarios) {
  const groups = horarios.map(group => {
    const rows = group.items.map(item => `
      <li class="hours-row">
        <span class="hours-row__title">${item.title}</span>
        <span class="hours-row__time">${item.hours}</span>
      </li>
    `).join('');
    return `
      <div class="hours-group">
        <span class="hours-group__label">${group.section}</span>
        <ul class="hours-group__list">${rows}</ul>
      </div>
    `;
  }).join('');

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-horarios';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-horarios-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true">
          <i data-lucide="clock"></i>
        </div>
        <h3 class="bottom-sheet__title" id="sheet-horarios-title">Horários de Funcionamento</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar">
          <i data-lucide="x"></i>
        </button>
      </header>
      <div class="bottom-sheet__body">
        <div class="hours-list">${groups}</div>
      </div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

function renderSoftOpeningSheet() {
  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-soft-opening';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-soft-opening-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true">
          <i data-lucide="sparkles"></i>
        </div>
        <h3 class="bottom-sheet__title" id="sheet-soft-opening-title">Bem-vindo ao nosso soft opening.</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar">
          <i data-lucide="x"></i>
        </button>
      </header>
      <div class="bottom-sheet__body">
        <p>Liberamos seu acesso antecipado ao diretório do Owntime para que você conheça o ambiente em primeira mão.</p>
        <p>Ainda estamos ajustando os bastidores para garantir a melhor experiência possível. Durante esta fase, algumas ferramentas estão em finalização e podem passar por adaptações.</p>
        <p>Explore o espaço e acompanhe nossa evolução.</p>
      </div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

function animateHub() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const el = document.querySelector('.hub__intro-title');
  if (!el) return;
  el.classList.add('hub__intro-title--animate');
}

document.addEventListener('DOMContentLoaded', () => {
  renderTipologiaGrid();
  renderHorariosSheet(HUB.horarios);
  renderSoftOpeningSheet();
  lucide.createIcons();
  initBottomSheets();
  animateHub();
});
