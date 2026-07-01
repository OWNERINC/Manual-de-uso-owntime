/**
 * main-hub.js — Own Time Home Club · Hub Central
 * Design: Clear — logo + tagline + botões + lista de modelos com hero reveal
 * Depende de: data-hub.js (HUB)
 */

function renderTipologiaGrid() {
  const intro = HUB.intro;
  const clube = HUB.clube;

  const allModels = [...HUB.tipologias, { ...clube }];

  const modelRows = allModels.map(t => `
    <a href="${t.href}" class="hub__cl-row" aria-label="Abrir guia: ${t.name}">
      <div class="hub__cl-row-label">
        <span class="hub__cl-row-sub">${t.subtitle}</span>
        <span class="hub__cl-row-name">${t.name}</span>
      </div>
      <div class="hub__cl-hero" role="img" aria-label="${t.name}">
        <div class="hub__cl-hero-img" style="background-image:url('${t.image}')"></div>
      </div>
    </a>
  `).join('');

  document.getElementById('tipologia-grid').innerHTML = `
    <div class="hub__cl-page">

      <header class="hub__cl-header">
        <img src="assets/images/logo owntime branco.webp" class="hub__cl-logo" alt="Own Time Home Club" draggable="false">
        <p class="hub__cl-tagline">${intro.summary}</p>
        <div class="hub__cl-actions">
          <button class="hub__intro-cta hub__intro-cta--outline bs-trigger" data-bs-target="sheet-wifi" aria-label="Wi-Fi">
            <i data-lucide="wifi"></i>
          </button>
          ${HUB.softOpening?.active ? `
          <button class="hub__soft-opening-badge bs-trigger" data-bs-target="sheet-soft-opening" aria-label="Soft Opening">
            <i data-lucide="sparkles"></i>
            ${HUB.softOpening.label}
          </button>` : ''}
          <button class="hub__intro-cta hub__intro-cta--hours bs-trigger" data-bs-target="sheet-horarios" aria-label="Horários">
            <i data-lucide="clock"></i>
          </button>
        </div>
      </header>

      <section class="hub__cl-models" aria-label="Selecione seu modelo">
        ${modelRows}
      </section>

    </div>
  `;

  // Hero reveal ao entrar na viewport
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });

    document.querySelectorAll('.hub__cl-row').forEach(row => observer.observe(row));
  } else {
    document.querySelectorAll('.hub__cl-row').forEach(row => row.classList.add('is-visible'));
  }
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
        <p><strong>Soft Opening · 01 a 31 de julho de 2026.</strong></p>
        <p>Liberamos seu acesso ao Guia Digital do Own Time Home Club para que você conheça o ambiente em primeira mão.</p>
        <p>O Own Time é uma nova geração de hospitalidade residencial: <strong>sua casa com serviços de hotel</strong>. Durante o soft opening, alguns serviços estão em fase de ajuste e podem evoluir. Sua experiência e feedback são fundamentais para essa construção.</p>
        <p>Qualquer dúvida ou sugestão, fale diretamente com nosso time de anfitriões na recepção do Club House.</p>
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
          <div style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:8px;color:var(--color-text)">
            <span>
              <span style="font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-accent-lt);display:block;margin-bottom:0.15rem">Rede</span>
              <span style="font-family:var(--font-body);font-size:0.9rem">${ssid}</span>
            </span>
          </div>
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

document.addEventListener('DOMContentLoaded', () => {
  renderTipologiaGrid();
  renderHorariosSheet(HUB.horarios);
  renderSoftOpeningSheet();
  renderWifiSheet();
  lucide.createIcons();
  initBottomSheets();
});
