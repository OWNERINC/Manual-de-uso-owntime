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
  const searchableText = `${title} ${body}`;
  const stayHours = [
    /check[\s-]?in/i.test(searchableText) ? 'Check-in a partir das 16h' : '',
    /check[\s-]?out/i.test(searchableText) ? 'Check-out até às 10h' : ''
  ].filter(Boolean).join(' · ');
  const stayHoursHtml = stayHours ? `<span class="bottom-sheet__hours">${stayHours}</span>` : '';
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
      <div class="bottom-sheet__body">${stayHoursHtml}${body}</div>
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
        <button class="hero__suggest bs-trigger" data-bs-target="sheet-sugestao" aria-label="Sugestões e melhorias">
          <i data-lucide="lightbulb"></i>
          Sugestões e melhorias
        </button>
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
  const excludes  = (tipologia && tipologia.facilityExcludes)  || [];
  const facilityItems = common.facilities
    .filter(item => !excludes.includes(item.id))
    .map(item => overrides[item.id] ? { ...item, ...overrides[item.id] } : item);
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
        <p class="section-sub">Sabores da Serra, da cesta de café da manhã à experiência privativa de um chef em casa.</p>
      </header>
      <div class="guia-section__grid">${btns}</div>
    </div>
  `;

  items.forEach(item => {
    let sheetBody;
    if (item.tabs) {
      const btnsHtml = item.tabs.map((t, i) =>
        `<button class="bs-tab-btn${i === 0 ? ' is-active' : ''}" data-tab="gastro-${item.id}-${t.id}">${t.title}</button>`
      ).join('');
      const panelsHtml = item.tabs.map((t, i) =>
        `<div class="bs-tab-panel${i === 0 ? ' is-active' : ''}" id="gastro-${item.id}-${t.id}">${t.body}</div>`
      ).join('');
      sheetBody = `<div class="bs-tab-group"><div class="bs-tab-btns">${btnsHtml}</div>${panelsHtml}</div>`;
    } else {
      sheetBody = `
        ${item.hours ? `<span class="bottom-sheet__hours">${item.hours}</span>` : ''}
        ${_bodyHtml(item.body)}
      `;
    }
    _appendSheet(`sheet-gastro-${item.id}`, item.icon, item.title, sheetBody, item.logo || null);

    if (item.tabs) {
      const sheet = document.getElementById(`sheet-gastro-${item.id}`);
      sheet.addEventListener('click', e => {
        const btn = e.target.closest('.bs-tab-btn');
        if (!btn) return;
        const targetId = btn.dataset.tab;
        sheet.querySelectorAll('.bs-tab-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        sheet.querySelectorAll('.bs-tab-panel').forEach(p => p.classList.toggle('is-active', p.id === targetId));
      });

      item.tabs.forEach(t => {
        if (!t.pdf) return;
        const pdfBody = `<div style="border-radius:8px;overflow:hidden;border:1px solid var(--color-border)"><iframe src="${t.pdf}" style="width:100%;height:65vh;border:none;display:block" title="Cardápio ${t.title}"></iframe></div><a href="${t.pdf}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:0.75rem;padding:0.75rem 1rem;background:transparent;color:var(--color-accent);border:1.5px solid var(--color-accent);border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.8rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="external-link"></i> Abrir em nova aba</a>`;
        _appendSheet(`sheet-gastro-${item.id}-pdf-${t.id}`, 'scroll-text', `Cardápio · ${t.title}`, pdfBody);
      });
    }
  });
}

/* ═══════════════════════════════════════════
   renderConcierge
   ═══════════════════════════════════════════ */
function renderConcierge(common) {
  const items = common.concierge.filter(item => !item.hidden);

  const btns = items.map(item => _guiaItemBtn(`sheet-concierge-${item.id}`, item.icon, item.title)).join('');

  const section = document.getElementById('concierge');
  section.classList.add('section-light');
  section.innerHTML = `
    <div class="container section-pad">
      <header class="concierge__header">
        <span class="section-label">Serviços sob Demanda</span>
        <h2 class="section-heading">Curadoria<br><em>a seu serviço.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Serviços personalizados disponíveis sob demanda. Solicite ao time de anfitriões com antecedência.</p>
      </header>
      <div class="guia-section__grid guia-section__grid--light">${btns}</div>
      <div class="concierge__note">
        <i data-lucide="info" class="concierge__note-icon" aria-hidden="true"></i>
        <p class="concierge__note-text">Todos os serviços sob demanda são cobrados à parte e sujeitos à disponibilidade. Para agendamentos e valores, entre em contato com o seu time de anfitriões.</p>
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
  const items = common.segurancaAcesso.filter(i => !i.hidden);
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

/* ═══════════════════════════════════════════
   renderTelefonesUteis
   ═══════════════════════════════════════════ */
function renderTelefonesUteis(common) {
  const grupos = common.telefonesUteis;
  if (!grupos || !grupos.length) return;

  const section = document.getElementById('telefones-uteis');
  if (!section) return;

  const btns = grupos.map(g =>
    _guiaItemBtn(`sheet-tel-${g.id}`, g.icon, g.categoria)
  ).join('');

  section.innerHTML = `
    <div class="container section-pad">
      <header class="guia-section__header">
        <span class="section-label">Utilidade</span>
        <h2 class="section-heading">Telefones<br><em>úteis.</em></h2>
        <span class="divider"></span>
      </header>
      <div class="guia-section__grid guia-section__grid--light">${btns}</div>
    </div>
  `;

  function _telRowsHtml(itens) {
    return itens.map(item => {
      if (item.instagram) {
        return `<a href="${item.instagram}" target="_blank" rel="noopener" class="tel-row" aria-label="Instagram: ${item.label}">
          <span class="tel-row__label">${item.label}</span>
          <span class="tel-row__num" style="color:var(--color-accent-lt)">Instagram ↗</span>
        </a>`;
      }
      const raw = item.tel.replace(/[\s\(\)\-]/g, '');
      const isPlaceholder = item.tel.includes('[');
      const href = item.wpp
        ? `https://wa.me/${raw.replace('+', '')}`
        : `tel:${raw}`;
      const num = isPlaceholder ? '—' : item.wpp ? 'WhatsApp ↗' : item.tel;
      if (isPlaceholder) {
        return `<div class="tel-row tel-row--disabled">
          <span class="tel-row__label">${item.label}</span>
          <span class="tel-row__num">—</span>
        </div>`;
      }
      return `<a href="${href}" class="tel-row" aria-label="Contato: ${item.label}">
        <span class="tel-row__label">${item.label}</span>
        <span class="tel-row__num">${num}</span>
      </a>`;
    }).join('');
  }

  grupos.forEach(grupo => {
    let sheetBody;
    if (grupo.tabs) {
      const btnsHtml = grupo.tabs.map((t, i) =>
        `<button class="bs-tab-btn${i === 0 ? ' is-active' : ''}" data-tab="tel-${grupo.id}-${t.id}">${t.title}</button>`
      ).join('');
      const panelsHtml = grupo.tabs.map((t, i) =>
        `<div class="bs-tab-panel${i === 0 ? ' is-active' : ''}" id="tel-${grupo.id}-${t.id}">${_telRowsHtml(t.itens)}</div>`
      ).join('');
      sheetBody = `<div class="bs-tab-group"><div class="bs-tab-btns">${btnsHtml}</div>${panelsHtml}</div>`;
    } else {
      sheetBody = _telRowsHtml(grupo.itens);
    }

    _appendSheet(`sheet-tel-${grupo.id}`, grupo.icon, grupo.categoria, sheetBody);

    if (grupo.tabs) {
      const sheet = document.getElementById(`sheet-tel-${grupo.id}`);
      sheet.addEventListener('click', e => {
        const btn = e.target.closest('.bs-tab-btn');
        if (!btn) return;
        const targetId = btn.dataset.tab;
        sheet.querySelectorAll('.bs-tab-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        sheet.querySelectorAll('.bs-tab-panel').forEach(p => p.classList.toggle('is-active', p.id === targetId));
      });
    }
  });
}

/* ═══════════════════════════════════════════
   renderRestauranteCardapioSheet
   Viewer de páginas do cardápio do restaurante.
   Chamado por main-tipologia.js e main-clube.js.
   ═══════════════════════════════════════════ */
function renderCardapiosSheet() {
  [
    { id: 'sheet-cardapio-ala-carte', title: 'Cardápio À la Carte', folder: 'cafe-ala-carte' },
    { id: 'sheet-cardapio-em-casa',   title: 'Café em Casa',         folder: 'cafe-em-casa'   }
  ].forEach(({ id, title, folder }) => {
    if (document.getElementById(id)) return;

    const sheet = document.createElement('div');
    sheet.className = 'bottom-sheet';
    sheet.id = id;
    sheet.style.height = '94dvh';
    sheet.style.maxHeight = '94dvh';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-hidden', 'true');
    sheet.setAttribute('aria-labelledby', `${id}-title`);
    sheet.innerHTML = `
      <div class="bottom-sheet__inner">
        <header class="bottom-sheet__header">
          <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="scroll-text"></i></div>
          <h3 class="bottom-sheet__title" id="${id}-title">${title}</h3>
          <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
        </header>
        <div class="bottom-sheet__body" style="padding:0;overflow-y:auto">
          <img src="assets/cardapios/${folder}/pagina-1.webp" alt="${title}" style="width:100%;display:block">
        </div>
        <div class="bottom-sheet__footer">
          <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
        </div>
      </div>
    `;
    document.body.appendChild(sheet);
  });
}

function renderSpaCardapioSheet() {
  if (document.getElementById('sheet-cardapio-spa')) return;

  const pages = ['pagina-1','pagina-2','pagina-3','pagina-4','pagina-5','pagina-6','pagina-7','pagina-8','pagina-9'];
  const total = pages.length;
  let current = 0;

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-cardapio-spa';
  sheet.style.height = '94dvh';
  sheet.style.maxHeight = '94dvh';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-cardapio-spa-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="scroll-text"></i></div>
        <h3 class="bottom-sheet__title" id="sheet-cardapio-spa-title">Menu do Spa</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
      </header>
      <div class="bottom-sheet__body" style="padding:0;overflow-y:auto">
        <img id="cardapio-spa-img" src="assets/cardapios/spa/pagina-1.webp" alt="Menu do Spa página 1" style="width:100%;display:block">
      </div>
      <div class="bottom-sheet__footer" style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
        <div style="display:flex;align-items:center;gap:0.75rem">
          <button id="cardapio-spa-prev" aria-label="Página anterior" style="display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;font-size:1rem;-webkit-tap-highlight-color:transparent">←</button>
          <span id="cardapio-spa-counter" style="font-family:var(--font-body);font-size:0.78rem;color:var(--color-muted);min-width:3.5rem;text-align:center">1 / ${total}</span>
          <button id="cardapio-spa-next" aria-label="Próxima página" style="display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;font-size:1rem;-webkit-tap-highlight-color:transparent">→</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);

  const img     = sheet.querySelector('#cardapio-spa-img');
  const counter = sheet.querySelector('#cardapio-spa-counter');
  const prev    = sheet.querySelector('#cardapio-spa-prev');
  const next    = sheet.querySelector('#cardapio-spa-next');
  const body    = sheet.querySelector('.bottom-sheet__body');

  function update() {
    img.src = `assets/cardapios/spa/${pages[current]}.webp`;
    img.alt = `Menu do Spa ${pages[current].replace('-', ' ')}`;
    counter.textContent = `${current + 1} / ${total}`;
    prev.disabled = current === 0;
    next.disabled = current === total - 1;
    body.scrollTop = 0;
  }

  prev.addEventListener('click', () => { if (current > 0)         { current--; update(); } });
  next.addEventListener('click', () => { if (current < total - 1) { current++; update(); } });

  sheet.addEventListener('transitionend', () => {
    if (!sheet.classList.contains('is-open')) { current = 0; update(); }
  });
}

function renderCafeBarCardapioSheet() {
  if (document.getElementById('sheet-cardapio-cafe-bar')) return;

  const pages = ['pagina-1','pagina-2','pagina-3','pagina-4','pagina-5','pagina-6','pagina-7'];
  const total = pages.length;
  let current = 0;

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-cardapio-cafe-bar';
  sheet.style.height = '94dvh';
  sheet.style.maxHeight = '94dvh';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-cardapio-cafe-bar-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="scroll-text"></i></div>
        <h3 class="bottom-sheet__title" id="sheet-cardapio-cafe-bar-title">Cardápio</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
      </header>
      <div class="bottom-sheet__body" style="padding:0;overflow-y:auto">
        <img id="cardapio-cafebar-img" src="assets/cardapios/cafe-bar/pagina-1.webp" alt="Cardápio página 1" style="width:100%;display:block">
      </div>
      <div class="bottom-sheet__footer" style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
        <div style="display:flex;align-items:center;gap:0.75rem">
          <button id="cardapio-cafebar-prev" aria-label="Página anterior" style="display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;font-size:1rem;-webkit-tap-highlight-color:transparent">←</button>
          <span id="cardapio-cafebar-counter" style="font-family:var(--font-body);font-size:0.78rem;color:var(--color-muted);min-width:3.5rem;text-align:center">1 / ${total}</span>
          <button id="cardapio-cafebar-next" aria-label="Próxima página" style="display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;font-size:1rem;-webkit-tap-highlight-color:transparent">→</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);

  const img     = sheet.querySelector('#cardapio-cafebar-img');
  const counter = sheet.querySelector('#cardapio-cafebar-counter');
  const prev    = sheet.querySelector('#cardapio-cafebar-prev');
  const next    = sheet.querySelector('#cardapio-cafebar-next');
  const body    = sheet.querySelector('.bottom-sheet__body');

  function update() {
    img.src = `assets/cardapios/cafe-bar/${pages[current]}.webp`;
    img.alt = `Cardápio ${pages[current].replace('-', ' ')}`;
    counter.textContent = `${current + 1} / ${total}`;
    prev.disabled = current === 0;
    next.disabled = current === total - 1;
    body.scrollTop = 0;
  }

  prev.addEventListener('click', () => { if (current > 0)         { current--; update(); } });
  next.addEventListener('click', () => { if (current < total - 1) { current++; update(); } });

  sheet.addEventListener('transitionend', () => {
    if (!sheet.classList.contains('is-open')) { current = 0; update(); }
  });
}

function renderRestauranteCardapioSheet() {
  if (document.getElementById('sheet-cardapio-restaurante')) return;

  const pages = ['pagina-2','pagina-4','pagina-6','pagina-7','pagina-9'];
  const total = pages.length;
  let current = 0;

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-cardapio-restaurante';
  sheet.style.height = '94dvh';
  sheet.style.maxHeight = '94dvh';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-cardapio-restaurante-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="scroll-text"></i></div>
        <h3 class="bottom-sheet__title" id="sheet-cardapio-restaurante-title">Cardápio</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
      </header>
      <div class="bottom-sheet__body" style="padding:0;overflow-y:auto">
        <img id="cardapio-rest-img" src="assets/cardapios/restaurante/pagina-1.webp" alt="Cardápio página 1" style="width:100%;display:block">
      </div>
      <div class="bottom-sheet__footer" style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
        <div style="display:flex;align-items:center;gap:0.75rem">
          <button id="cardapio-rest-prev" aria-label="Página anterior" style="display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;font-size:1rem;-webkit-tap-highlight-color:transparent">←</button>
          <span id="cardapio-rest-counter" style="font-family:var(--font-body);font-size:0.78rem;color:var(--color-muted);min-width:3.5rem;text-align:center">1 / ${total}</span>
          <button id="cardapio-rest-next" aria-label="Próxima página" style="display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);cursor:pointer;font-size:1rem;-webkit-tap-highlight-color:transparent">→</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);

  const img     = sheet.querySelector('#cardapio-rest-img');
  const counter = sheet.querySelector('#cardapio-rest-counter');
  const prev    = sheet.querySelector('#cardapio-rest-prev');
  const next    = sheet.querySelector('#cardapio-rest-next');
  const body    = sheet.querySelector('.bottom-sheet__body');

  function update() {
    img.src = `assets/cardapios/restaurante/${pages[current]}.webp`;
    img.alt = `Cardápio ${pages[current].replace('-', ' ')}`;
    counter.textContent = `${current + 1} / ${total}`;
    prev.disabled = current === 0;
    next.disabled = current === total - 1;
    body.scrollTop = 0;
  }

  prev.addEventListener('click', () => { if (current > 0)         { current--; update(); } });
  next.addEventListener('click', () => { if (current < total - 1) { current++; update(); } });

  sheet.addEventListener('transitionend', () => {
    if (!sheet.classList.contains('is-open')) { current = 0; update(); }
  });
}
