/**
 * main-clube.js — Own Time Home Club · Club House (v3)
 * Página dedicada ao Club House: bem-estar + serviços como bottom sheets + busca.
 * Depende de: COMMON (data-common.js), render-common.js, bottom-sheet.js, search.js
 */

function renderClubeHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  el.innerHTML = `
    <div class="hero__bg-img" style="background-image: url('assets/images/clubhouse.png')"></div>
    <div class="hero__bg"></div>
    <div class="hero__rule"></div>
    <div class="hero__content container">
      <div class="hero__top">
        <p class="hero__label">
          <span class="hero__label-seg">Own Time Home Club</span>
          <span class="hero__label-dot" aria-hidden="true">·</span>
          <span class="hero__label-seg">Guia Digital</span>
        </p>
        <h1 class="hero__headline">Club<br><em>House</em></h1>
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
        <p class="hero__sub">Desfrute da piscina aquecida, spa, fitness center e uma curadoria de serviços com a chancela Casa Hotéis, desenhados para que o seu único compromisso na Serra Gaúcha seja o seu bem-estar.</p>
        <footer class="hero__footer">
          <span class="hero__location">Gramado · Serra Gaúcha · Brasil</span>
          <div class="hero__scroll" aria-hidden="true">
            <span>Explorar</span>
            <span class="hero__scroll-line"></span>
          </div>
        </footer>
      </div>
    </div>
  `;
}

function renderClubeOrientacoes() {
  const section = document.getElementById('clube-orientacoes');
  if (!section) return;

  const items = COMMON.clubeOrientacoes || [];
  if (!items.length) { section.style.display = 'none'; return; }

  const btns = items.map(item => _guiaItemBtn(`sheet-clube-ori-${item.id}`, item.icon, item.title)).join('');

  section.innerHTML = `
    <div class="container section-pad">
      <header class="orientacoes__header">
        <span class="section-label">Club House</span>
        <h2 class="section-heading">Orientações<br><em>do clube.</em></h2>
        <span class="divider"></span>
      </header>
      <div class="guia-section__grid guia-section__grid--light">${btns}</div>
    </div>
  `;

  items.forEach(item => {
    _appendSheet(`sheet-clube-ori-${item.id}`, item.icon, item.title, _bodyHtml(item.body));
  });
}

function renderClubeAmenities() {
  const section = document.getElementById('amenities');
  if (!section) return;

  const items = COMMON.amenities;

  section.innerHTML = `
    <div class="container section-pad">
      <header class="guia-section__header">
        <span class="section-label">Club House &amp; Bem-Estar</span>
        <h2 class="section-heading">O coração<br><em>do clube.</em></h2>
        <p style="font-size:0.72rem;letter-spacing:0.12em;text-transform:uppercase;opacity:0.5;margin-top:0.5rem">Para acesso às áreas utilize o cartão-chave.</p>
        <span class="divider"></span>
      </header>
      <div class="guia-section__grid">
        ${items.map(a => _guiaItemBtn(`sheet-amenity-${a.id}`, a.icon, a.title)).join('')}
      </div>
    </div>
  `;

  items.forEach(a => {
    const noteHtml = a.note
      ? (a.note.startsWith('<')
          ? a.note
          : a.note.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join(''))
      : '';
    const bodyHtml = [
      a.hours ? `<span class="bottom-sheet__hours">${a.hours}</span>` : '',
      noteHtml
    ].filter(Boolean).join('');
    _appendSheet(`sheet-amenity-${a.id}`, a.icon, a.title, bodyHtml);
  });
}

function renderClubeGastronomy() {
  const container = document.getElementById('guia-container');
  if (!container) return;

  const items = COMMON.gastronomiaClube.filter(i => !i.hidden);

  const sectionEl = document.createElement('section');
  sectionEl.className = 'guia-section section-dark';
  sectionEl.id = 'clube-gastronomy';

  const containerEl = document.createElement('div');
  containerEl.className = 'container section-pad';

  const headerEl = document.createElement('header');
  headerEl.className = 'guia-section__header';
  headerEl.innerHTML = `
    <span class="section-label">Gastronomia</span>
    <h2 class="section-heading">À mesa,<br><em>no clube.</em></h2>
    <span class="divider"></span>
  `;
  containerEl.appendChild(headerEl);

  const gridEl = document.createElement('div');
  gridEl.className = 'guia-section__grid';

  items.forEach(item => {
    gridEl.insertAdjacentHTML('beforeend', _guiaItemBtn(`sheet-gastro-${item.id}`, item.icon, item.title));
  });

  containerEl.appendChild(gridEl);
  sectionEl.appendChild(containerEl);
  container.appendChild(sectionEl);

  items.forEach(item => {
    const bodyHtml = [
      item.hours ? `<span class="bottom-sheet__hours">${item.hours}</span>` : '',
      _bodyHtml(item.body)
    ].filter(Boolean).join('');
    _appendSheet(`sheet-gastro-${item.id}`, item.icon, item.title, bodyHtml, item.logo || null);
  });
}

function renderClubeServicos() {
  const container = document.getElementById('guia-container');
  if (!container) return;

  const items = COMMON.clube;

  const sectionEl = document.createElement('section');
  sectionEl.className = 'guia-section section-light';
  sectionEl.id = 'clube-servicos';

  const containerEl = document.createElement('div');
  containerEl.className = 'container section-pad';

  const headerEl = document.createElement('header');
  headerEl.className = 'guia-section__header';
  headerEl.innerHTML = `
    <span class="section-label">Serviços &amp; Estrutura</span>
    <h2 class="section-heading">O clube,<br><em>ao seu alcance.</em></h2>
    <span class="divider"></span>
  `;
  containerEl.appendChild(headerEl);

  const gridEl = document.createElement('div');
  gridEl.className = 'guia-section__grid guia-section__grid--light';

  items.forEach(item => {
    gridEl.insertAdjacentHTML('beforeend', _guiaItemBtn(`sheet-clube-${item.id}`, item.icon, item.title));
  });

  containerEl.appendChild(gridEl);
  sectionEl.appendChild(containerEl);
  container.appendChild(sectionEl);

  items.forEach(item => {
    const bodyHtml = [
      item.hours ? `<span class="bottom-sheet__hours">${item.hours}</span>` : '',
      _bodyHtml(item.body)
    ].filter(Boolean).join('');
    _appendSheet(`sheet-clube-${item.id}`, item.icon, item.title, bodyHtml);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderClubeHero();
  renderClubeOrientacoes();
  renderClubeAmenities();
  renderClubeGastronomy();
  renderClubeServicos();
  if (typeof renderSugestaoSheet === 'function') renderSugestaoSheet('Club House');
  renderCardapiosSheet();
  renderRestauranteCardapioSheet();
  renderCafeBarCardapioSheet();
  renderSpaCardapioSheet();

  try { lucide.createIcons(); } catch (e) { console.warn('Lucide:', e); }

  initBottomSheets();
  initSearch();
});
