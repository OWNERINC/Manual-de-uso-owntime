/**
 * main-hub.js — Own Time Home Club · Hub Central (v2)
 * Layout no-scroll: texto de orientação no topo + botões de tipologia no rodapé.
 * Depende de: data-hub.js (HUB)
 */

function renderTipologiaGrid() {
  const intro = HUB.intro;
  const hero  = HUB.hero;

  const clube = HUB.clube;

  const cards = HUB.tipologias.map(t => `
    <a href="${t.href}" class="hub__nf-card" aria-label="${t.name} — ${t.subtitle}">
      <span class="hub__nf-card-bg" style="background-image:url('${t.image}')"></span>
      <div class="hub__nf-card-body">
        <span class="hub__nf-card-subtitle">${t.subtitle}</span>
        <span class="hub__nf-card-name">${t.name}</span>
      </div>
    </a>
  `).join('');

  document.getElementById('tipologia-grid').innerHTML = `
    <div class="hub__page">
      <div class="hub__nf-bg" style="background-image:url('${HUB.tipologias[0].image}')"></div>

      <header class="hub__nf-header">
        <div class="hub__content">
          <h1 class="hub__intro-title">
            <span class="hub__intro-title__pre">${intro.preHeading}</span>
            <img src="assets/images/logo owntime branco.webp" class="hub__intro-logo" alt="Own Time Home Club" draggable="false">
          </h1>
          <p class="hub__intro-p">${intro.summary}</p>
          <div class="hub__intro-ctas">
            <button class="hub__intro-cta hub__intro-cta--outline bs-trigger" data-bs-target="sheet-wifi">
              <i data-lucide="wifi"></i>
              Conectar a rede
            </button>
            <button class="hub__intro-cta hub__intro-cta--hours bs-trigger" data-bs-target="sheet-horarios">
              <i data-lucide="clock"></i>
              Horários
            </button>
          </div>
        </div>
        ${HUB.softOpening?.active ? `
        <div class="hub__soft-opening">
          <button class="hub__soft-opening-badge bs-trigger" data-bs-target="sheet-soft-opening" aria-label="Saiba mais sobre o Soft Opening">
            <i data-lucide="sparkles"></i>
            ${HUB.softOpening.label}
          </button>
        </div>` : ''}
      </header>

      <section class="hub__nf-catalog-wrap" aria-label="Selecione sua unidade">
        <div class="hub__nf-catalog">
          <a href="${clube.href}" class="hub__nf-clube hub__nf-card" aria-label="${clube.name}">
            <span class="hub__nf-card-bg" style="background-image:url('${clube.image}')"></span>
            <div class="hub__nf-card-body">
              <span class="hub__nf-card-subtitle">${clube.subtitle}</span>
              <span class="hub__nf-card-name">${clube.name}</span>
            </div>
          </a>
          ${cards}
        </div>
      </section>
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
        <p>O Guia de Uso Digital do Owntime foi pensado para que você conheça sua nova casa.</p>
        <p>Estamos ajustando os bastidores para garantir a melhor experiência possível. Durante esta fase, algumas ferramentas estão em finalização e podem passar por adaptações.</p>
        <p>Contamos com suas avaliações para melhorar a qualidade da sua experiência em Gramado.</p>
      </div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

function renderWifiSheet() {
  const { ssid, password } = HUB.wifi;
  const qrData = `WIFI:T:WPA2;S:${ssid};P:${password};;`;

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-wifi';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-wifi-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true">
          <i data-lucide="wifi"></i>
        </div>
        <h3 class="bottom-sheet__title" id="sheet-wifi-title">Wi-Fi</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar">
          <i data-lucide="x"></i>
        </button>
      </header>
      <div class="bottom-sheet__body">
        <p style="font-size:0.9rem;line-height:1.6;opacity:0.75;margin-bottom:1.5rem">A cobertura de rede se estende a todo empreendimento, garantindo que você nunca fique sem acesso.</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem">
          <button onclick="navigator.clipboard.writeText('${password}').then(()=>{this.querySelector('b').textContent='Copiado ✓';setTimeout(()=>{this.querySelector('b').textContent='Copiar'},2000)})"
            style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;width:100%;-webkit-tap-highlight-color:transparent;text-align:left">
            <span>
              <span style="font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-accent-lt);display:block;margin-bottom:0.15rem">Senha</span>
              <span style="font-family:var(--font-body);font-size:0.9rem">${password}</span>
            </span>
            <b style="font-size:0.62rem;letter-spacing:0.1em;color:var(--color-accent-lt);text-transform:uppercase;font-weight:400;flex-shrink:0;margin-left:1rem">Copiar</b>
          </button>
        </div>
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
  renderWifiSheet();
  lucide.createIcons();
  initBottomSheets();
  animateHub();

});
