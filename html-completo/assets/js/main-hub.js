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
            <button class="hub__intro-cta hub__intro-cta--outline bs-trigger" data-bs-target="sheet-wifi" aria-label="Conectar à rede Wi-Fi">
              <i data-lucide="wifi"></i>
            </button>
            ${HUB.softOpening?.active ? `
            <button class="hub__soft-opening-badge bs-trigger" data-bs-target="sheet-soft-opening" aria-label="Saiba mais sobre o Soft Opening">
              ${HUB.softOpening.label}
            </button>` : ''}
            <button class="hub__intro-cta hub__intro-cta--hours bs-trigger" data-bs-target="sheet-horarios" aria-label="Horários de funcionamento">
              <i data-lucide="clock"></i>
            </button>
          </div>
        </div>
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

function animateHub() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const el = document.querySelector('.hub__intro-title');
  if (!el) return;
  el.classList.add('hub__intro-title--animate');
}

function renderV1Popup() {
  if (localStorage.getItem('owntime-v1-seen')) return;

  const overlay = document.createElement('div');
  overlay.id = 'v1-popup-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9999;display:flex;align-items:flex-end;justify-content:center;padding:0 0 env(safe-area-inset-bottom,0);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)';

  overlay.innerHTML = `
    <div id="v1-popup" style="width:100%;max-width:520px;background:#141414;border-radius:20px 20px 0 0;padding:2rem 1.5rem calc(2rem + env(safe-area-inset-bottom,0));position:relative;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1)">
      <div style="width:36px;height:3px;background:rgba(255,255,255,0.15);border-radius:2px;margin:0 auto 1.75rem"></div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem">
        <div style="width:40px;height:40px;border-radius:10px;background:rgba(201,169,110,0.12);border:1px solid rgba(201,169,110,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i data-lucide="sparkles" style="width:18px;height:18px;color:#c9a96e"></i>
        </div>
        <div>
          <p style="font-size:0.6rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(201,169,110,0.8);margin-bottom:0.2rem;font-family:var(--font-body)">Guia Digital · V1</p>
          <h3 style="font-family:var(--font-heading);font-size:1.15rem;font-weight:400;color:#fff;line-height:1.2">Em fase de testes.</h3>
        </div>
      </div>
      <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.6);font-family:var(--font-body);margin-bottom:1.5rem">Este é o Guia Digital do Own Time Home Club em sua primeira versão. Alguns conteúdos ainda estão sendo finalizados. Use o botão de <strong style="color:rgba(255,255,255,0.85)">Sugestões e melhorias</strong> em qualquer página para nos contar o que melhorar.</p>
      <button id="v1-popup-close" style="width:100%;padding:0.9rem;background:rgba(201,169,110,0.15);border:1.5px solid rgba(201,169,110,0.4);border-radius:10px;color:#c9a96e;font-family:var(--font-body);font-size:0.8rem;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;-webkit-tap-highlight-color:transparent">
        Entendi
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.querySelector('#v1-popup').style.transform = 'translateY(0)';
    });
  });

  const close = () => {
    const popup = overlay.querySelector('#v1-popup');
    popup.style.transform = 'translateY(100%)';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s';
    setTimeout(() => {
      overlay.remove();
      localStorage.setItem('owntime-v1-seen', '1');
    }, 350);
  };

  overlay.querySelector('#v1-popup-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  try { lucide.createIcons({ nodes: [overlay] }); } catch(e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  renderTipologiaGrid();
  renderHorariosSheet(HUB.horarios);
  renderSoftOpeningSheet();
  renderWifiSheet();
  lucide.createIcons();
  initBottomSheets();
  animateHub();
  setTimeout(renderV1Popup, 800);
});
