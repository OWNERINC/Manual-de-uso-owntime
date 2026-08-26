/**
 * main-hub.js — Own Time Home Club · Hub Central
 * Design: Clear Full — scroll-snap, slide-index + 1 slide por modelo
 * Depende de: data-hub.js (HUB)
 */

function renderTipologiaGrid() {
  const intro = HUB.intro;
  const tipOrder = ['fall-house', 'winter-house', 'terraco', 'garden'];
  const tipOrdered = tipOrder.map(id => HUB.tipologias.find(t => t.id === id)).filter(Boolean);
  const allModels = [{ ...HUB.clube }, ...tipOrdered];

  const listNames = {
    'terraco': 'Apartments',
    'garden':  'Apartments',
  };

  const tags = {
    'club-house':   'compartilhado',
    'fall-house':   '4 suítes',
    'winter-house': '3 suítes',
    'terraco':      'cobertura',
    'garden':       'garden',
  };

  const listItems = allModels.map(t => {
    const listName = listNames[t.id] || t.name;
    const tag = tags[t.id] || '';
    return `
    <a class="hub__cl-item" href="${t.href}" aria-label="Ver ${t.name}">
      <div class="hub__cl-item-title">
        <span class="hub__cl-item-name">${listName}</span>
        ${tag ? `<span class="hub__cl-item-tag">${tag}</span>` : ''}
      </div>
      <i data-lucide="chevron-right" class="hub__cl-item-arrow"></i>
    </a>`;
  }).join('');

  document.getElementById('tipologia-grid').innerHTML = `
    <div class="hub__cl-index">
      <div class="hub__cl-content">
        <header class="hub__cl-header">
          <img src="assets/images/logo owntime branco.webp" class="hub__cl-logo" alt="Own Time Home Club" draggable="false">
          <p class="hub__cl-tagline">${intro.summary}</p>
          <div class="hub__cl-actions">
            <button class="hub__intro-cta hub__intro-cta--outline bs-trigger" data-bs-target="sheet-wifi" aria-label="Wi-Fi">
              <i data-lucide="wifi"></i>
            </button>
            <button class="hub__intro-cta hub__intro-cta--hours bs-trigger" data-bs-target="sheet-horarios" aria-label="Horários">
              <i data-lucide="clock"></i>
            </button>
          </div>
        </header>

        <nav class="hub__cl-list" aria-label="Modelos disponíveis">
          ${listItems}
        </nav>

      </div>
    </div>
  `;
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
        <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="clock"></i></div>
        <h3 class="bottom-sheet__title" id="sheet-horarios-title">Horários de Funcionamento</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
      </header>
      <div class="bottom-sheet__body"><div class="hours-list">${groups}</div></div>
      <div class="bottom-sheet__footer"><button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button></div>
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
        <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="wifi"></i></div>
        <h3 class="bottom-sheet__title" id="sheet-wifi-title">Wi-Fi</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
      </header>
      <div class="bottom-sheet__body">
        <p style="font-size:0.9rem;line-height:1.6;opacity:0.75;margin-bottom:1.5rem">A cobertura de rede se estende a todo empreendimento, garantindo que você nunca fique sem acesso.</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem">
          <div style="display:flex;align-items:center;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:8px;color:var(--color-text)">
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
      <div class="bottom-sheet__footer"><button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button></div>
    </div>
  `;
  document.body.appendChild(sheet);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTipologiaGrid();
  renderHorariosSheet(HUB.horarios);
  renderWifiSheet();
  lucide.createIcons();
  initBottomSheets();
});
