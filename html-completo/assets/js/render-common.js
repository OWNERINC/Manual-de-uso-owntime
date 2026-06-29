/**
 * render-common.js — Own Time Home Club
 * Funções de render compartilhadas entre tipologias.
 */

/* ── Helpers WhatsApp ── */
const WA_SVG = `<svg class="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.844L0 24l6.335-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.375l-.357-.213-3.763.892.952-3.652-.233-.375A9.818 9.818 0 0112 2.182c5.422 0 9.818 4.396 9.818 9.818S17.422 21.818 12 21.818z"/>
</svg>`;

function waUrl(number) {
  const digits = number.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=Olá!%20Gostaria%20de%20falar%20com%20os%20Anfitriões.`;
}

/* ── Helper: cria e appenda um bottom sheet ao body ── */
function _appendSheet(id, icon, title, bodyHtml, logoSrc) {
  const titleId = id + '-title';
  const body = bodyHtml || '<p class="bottom-sheet__placeholder">Instruções em breve.</p>';
  const titleHtml = logoSrc
    ? `<span>${title}</span><img src="${logoSrc}" style="height:22px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:0.9;flex-shrink:0" alt="" loading="lazy">`
    : title;
  const titleStyle = logoSrc ? ' style="display:flex;align-items:center;gap:0.75rem"' : '';
  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = id;
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', titleId);
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true">
          <i data-lucide="${icon}"></i>
        </div>
        <h3 class="bottom-sheet__title" id="${titleId}"${titleStyle}>${titleHtml}</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar">
          <i data-lucide="x"></i>
        </button>
      </header>
      <div class="bottom-sheet__body">${body}</div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

/* ── Helper: botão guia-item trigger ── */
function _guiaItemBtn(sheetId, icon, title, imageSrc) {
  const iconContent = imageSrc
    ? `<img src="${imageSrc}" class="guia-item__logo" alt="" loading="lazy">`
    : `<i data-lucide="${icon}" class="guia-item__icon"></i>`;
  return `
    <button class="bs-trigger guia-item" data-bs-target="${sheetId}" aria-label="${title}">
      <span class="guia-item__icon-wrap" aria-hidden="true">
        ${iconContent}
      </span>
      <span class="guia-item__label">${title}</span>
      <i data-lucide="chevron-right" class="guia-item__arrow" aria-hidden="true"></i>
    </button>
  `;
}

/* ── Helper: body HTML wrapper ── */
function _bodyHtml(body) {
  if (!body) return '<p class="bottom-sheet__placeholder">Instruções em breve.</p>';
  return body.startsWith('<') ? body : `<p>${body}</p>`;
}

/* ═══════════════════════════════════════════
   renderHero
   ═══════════════════════════════════════════ */
function renderHero(tipologia) {
  document.getElementById('hero').innerHTML = `
    <div class="hero__bg-img" style="background-image: url('${tipologia.hero.image}')"></div>
    <div class="hero__bg"></div>
    <div class="hero__rule"></div>
    <div class="hero__content container">
      <div class="hero__top">
        <p class="hero__label">${tipologia.hero.label.split(' · ').map(s => `<span class="hero__label-seg">${s}</span>`).join('<span class="hero__label-dot" aria-hidden="true">·</span>')}</p>
        <h1 class="hero__headline">${tipologia.hero.headline}</h1>
      </div>
      <div class="hero__bottom">
        <div class="hero__scroll-cta" aria-hidden="true">
          <span class="hero__scroll-cta__line"></span>
          <i data-lucide="chevron-down" class="hero__scroll-cta__arrow"></i>
          <i data-lucide="chevron-down" class="hero__scroll-cta__arrow hero__scroll-cta__arrow--2"></i>
        </div>
        <p class="hero__sub">${tipologia.hero.subheadline}</p>
        <div class="hero__footer">
          <span class="hero__location">${tipologia.hero.location}</span>
          <div class="hero__scroll" aria-hidden="true">
            <span>Explorar</span>
            <span class="hero__scroll-line"></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   renderTipologiaFeatures
   ═══════════════════════════════════════════ */
function renderTipologiaFeatures(tipologia) {
  const stats = (tipologia.stats || []).map(s => `
    <div class="tipologia__stat">
      <span class="tipologia__stat-value">${s.value}</span>
      <span class="tipologia__stat-label">${s.label}</span>
    </div>
  `).join('');

  document.getElementById('tipologia-features').innerHTML = `
    <div class="container section-pad">
      <div class="tipologia__stats">${stats}</div>
      ${tipologia.description ? `<p class="tipologia__desc">${tipologia.description}</p>` : ''}
    </div>
  `;
}

/* ═══════════════════════════════════════════
   renderOrientacoesGerais
   ═══════════════════════════════════════════ */
function renderOrientacoesGerais(common) {
  const items = common.orientacoesGerais;

  const btns = items.map(item => _guiaItemBtn(`sheet-orientacao-${item.id}`, item.icon, item.title)).join('');

  document.getElementById('orientacoes-gerais').innerHTML = `
    <div class="container section-pad">
      <header class="orientacoes__header">
        <span class="section-label">IMPORTANTE</span>
        <h2 class="section-heading">O essencial,<br><em>ao seu alcance.</em></h2>
        <span class="divider"></span>
      </header>
      <div class="guia-section__grid guia-section__grid--light">${btns}</div>
    </div>
  `;

  items.forEach(item => {
    _appendSheet(`sheet-orientacao-${item.id}`, item.icon, item.title, _bodyHtml(item.body));
  });
}

/* ═══════════════════════════════════════════
   renderClube
   ═══════════════════════════════════════════ */
function renderClube(common) {
  const items = common.clube;

  const btns = items.map(item => _guiaItemBtn(`sheet-clube-${item.id}`, item.icon, item.title)).join('');

  const section = document.getElementById('clube');
  section.classList.add('section-dark');
  section.innerHTML = `
    <div class="container section-pad">
      <header class="guia-section__header">
        <span class="section-label">Club House</span>
        <h2 class="section-heading">O clube,<br><em>ao seu alcance.</em></h2>
        <span class="divider"></span>
      </header>
      <div class="guia-section__grid">${btns}</div>
    </div>
  `;

  items.forEach(item => {
    const bodyHtml = `
      ${item.hours ? `<span class="bottom-sheet__hours">${item.hours}</span>` : ''}
      ${_bodyHtml(item.body)}
    `;
    _appendSheet(`sheet-clube-${item.id}`, item.icon, item.title, bodyHtml);
  });
}

/* ═══════════════════════════════════════════
   renderFacilities
   ═══════════════════════════════════════════ */
function renderFacilities(common, tipologia) {
  const overrides = (tipologia && tipologia.facilityOverrides) || {};
  const facilityItems = common.facilities.map(item =>
    overrides[item.id] ? { ...item, ...overrides[item.id] } : item
  );
  const cozinhaItems  = (tipologia && Array.isArray(tipologia.cozinha)) ? tipologia.cozinha : [];

  const facilityBtns = facilityItems.map(item =>
    _guiaItemBtn(`sheet-facility-${item.id}`, item.icon, item.title)
  ).join('');
  const cozinhaBtns = cozinhaItems.map(item =>
    _guiaItemBtn(`sheet-cozinha-${item.id}`, item.icon, item.title)
  ).join('');

  const section = document.getElementById('facilities');
  section.classList.add('section-light');
  section.innerHTML = `
    <div class="container section-pad">
      <header class="facilities__header">
        <span class="section-label">Conforto &amp; Tecnologia</span>
        <h2 class="section-heading">Sua casa,<br><em>com tudo resolvido.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Cada detalhe foi pensado para que você chegue e simplesmente viva Gramado.</p>
      </header>
      <div class="guia-section__grid guia-section__grid--light">${facilityBtns}${cozinhaBtns}</div>
    </div>
  `;

  facilityItems.forEach(item => {
    let sheetBody;
    if (item.tabs) {
      const btnsHtml = item.tabs.map((t, i) =>
        `<button class="bs-tab-btn${i === 0 ? ' is-active' : ''}" data-tab="fac-${item.id}-${t.id}">${t.title}</button>`
      ).join('');
      const panelsHtml = item.tabs.map((t, i) =>
        `<div class="bs-tab-panel${i === 0 ? ' is-active' : ''}" id="fac-${item.id}-${t.id}">${t.body}</div>`
      ).join('');
      sheetBody = `<div class="bs-tab-group"><div class="bs-tab-btns">${btnsHtml}</div>${panelsHtml}</div>`;
    } else {
      sheetBody = _bodyHtml(item.body);
    }
    _appendSheet(`sheet-facility-${item.id}`, item.icon, item.title, sheetBody);

    if (item.tabs) {
      const sheet = document.getElementById(`sheet-facility-${item.id}`);
      sheet.addEventListener('click', e => {
        const btn = e.target.closest('.bs-tab-btn');
        if (!btn) return;
        const targetId = btn.dataset.tab;
        sheet.querySelectorAll('.bs-tab-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        sheet.querySelectorAll('.bs-tab-panel').forEach(p => p.classList.toggle('is-active', p.id === targetId));
      });
    }
  });
  cozinhaItems.forEach(item => {
    _appendSheet(`sheet-cozinha-${item.id}`, item.icon, item.title, _bodyHtml(item.body));
  });
}

/* ═══════════════════════════════════════════
   renderAmenities
   ═══════════════════════════════════════════ */
function renderAmenities(common) {
  const cards = common.amenities.map(a => {
    const noteHtml = a.note
      ? (a.note.startsWith('<')
          ? a.note
          : a.note.split('\n\n').map(p => `<p class="amenity-card__note">${p.replace(/\n/g, '<br>')}</p>`).join(''))
      : '';
    return `
    <article class="amenity-card${a.id === 'spa' ? ' amenity-card--highlight' : ''}">
      <i data-lucide="${a.icon}" class="amenity-card__icon" aria-hidden="true"></i>
      <h3 class="amenity-card__title">${a.title}</h3>
      <span class="amenity-card__hours">${a.hours}</span>
      ${noteHtml}
    </article>
  `;
  }).join('');

  document.getElementById('amenities').innerHTML = `
    <div class="container section-pad">
      <header class="amenities__header">
        <span class="section-label">Club House &amp; Bem-Estar</span>
        <h2 class="section-heading">O coração<br><em>do clube.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Estrutura de resort com o aconchego de um clube privativo. Espaços desenhados para você recuperar a energia e encontrar o ritmo certo.</p>
      </header>
      <div class="amenities__grid">${cards}</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   renderGastronomy
   ═══════════════════════════════════════════ */
function renderGastronomy(common) {
  const items = common.gastronomy;

  const btns = items.map(item => _guiaItemBtn(`sheet-gastro-${item.id}`, item.icon, item.title)).join('');

  const section = document.getElementById('gastronomy');
  section.classList.add('section-dark');
  section.innerHTML = `
    <div class="container section-pad">
      <header class="gastronomy__header">
        <span class="section-label">Gastronomia</span>
        <h2 class="section-heading">À mesa,<br><em>em casa.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Sabores da Serra, do café da manhã à experiência privativa de um chef em casa.</p>
      </header>
      <div class="guia-section__grid">${btns}</div>
    </div>
  `;

  items.forEach(item => {
    const bodyHtml = `
      ${item.hours ? `<span class="bottom-sheet__hours">${item.hours}</span>` : ''}
      ${_bodyHtml(item.body)}
    `;
    _appendSheet(`sheet-gastro-${item.id}`, item.icon, item.title, bodyHtml, item.logo || null);
  });
}

/* ═══════════════════════════════════════════
   renderConcierge
   ═══════════════════════════════════════════ */
function renderConcierge(common) {
  const items = common.concierge;

  const btns = items.map(item => _guiaItemBtn(`sheet-concierge-${item.id}`, item.icon, item.title)).join('');

  const section = document.getElementById('concierge');
  section.classList.add('section-light');
  section.innerHTML = `
    <div class="container section-pad">
      <header class="concierge__header">
        <span class="section-label">Serviços por Demanda</span>
        <h2 class="section-heading">Curadoria<br><em>a seu serviço.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Serviços personalizados disponíveis sob demanda. Solicite ao time de anfitriões com antecedência.</p>
      </header>
      <div class="guia-section__grid guia-section__grid--light">${btns}</div>
      <div class="concierge__note">
        <i data-lucide="info" class="concierge__note-icon" aria-hidden="true"></i>
        <p class="concierge__note-text">Todos os serviços por demanda são cobrados à parte e sujeitos à disponibilidade. Para agendamentos e valores, entre em contato com o seu time de anfitriões.</p>
      </div>
    </div>
  `;

  items.forEach(item => {
    _appendSheet(`sheet-concierge-${item.id}`, item.icon, item.title, _bodyHtml(item.body));
  });
}

/* ═══════════════════════════════════════════
   renderFloatingAction
   ═══════════════════════════════════════════ */
function renderFloatingAction(common) {
  const { concierge } = common.brand;
  const href = waUrl(concierge.whatsapp);

  document.getElementById('floating-action').innerHTML = `
    <div class="floating-action__bar">
      <p class="floating-action__checkout">
        Check-out <strong>${concierge.checkoutTime}</strong>
      </p>
      <a href="${href}" target="_blank" rel="noopener noreferrer" class="floating-action__wa-btn">
        ${WA_SVG}
        <span>Anfitriões</span>
      </a>
    </div>
    <div class="floating-action__fab">
      <p class="floating-action__checkout-label">
        Check-out <strong>${concierge.checkoutTime}</strong>
      </p>
      <a href="${href}" target="_blank" rel="noopener noreferrer"
         class="floating-action__wa-fab"
         title="Falar com os Anfitriões via WhatsApp"
         aria-label="Falar com os Anfitriões via WhatsApp">
        ${WA_SVG}
      </a>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   renderSegurancaAcesso
   ═══════════════════════════════════════════ */
function renderSegurancaAcesso(common) {
  const items = common.segurancaAcesso;
  const btns = items.map(item =>
    _guiaItemBtn(`sheet-seg-${item.id}`, item.icon, item.title)
  ).join('');

  const section = document.getElementById('seguranca-acesso');
  section.innerHTML = `
    <div class="container section-pad">
      <header class="seguranca__header">
        <span class="section-label">Segurança & Acesso</span>
        <h2 class="section-heading">Tranquilidade<br><em>em cada detalhe.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Monitoramento e controle de acesso 24 horas para que você aproveite sua estadia com total segurança.</p>
      </header>
      <div class="guia-section__grid">${btns}</div>
    </div>
  `;

  items.forEach(item => {
    _appendSheet(`sheet-seg-${item.id}`, item.icon, item.title, _bodyHtml(item.body));
  });
}
