/**
 * search.js — Busca por palavra-chave no Guia Digital
 * Indexação DOM-based: varre todos os .bs-trigger do DOM,
 * incluindo itens de TIPOLOGIA e COMMON (facilities, concierge, etc.).
 * Busca em: título + seção + texto completo do body sheet.
 */

function initSearch() {
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  /* ── 1. Índice DOM-based ── */
  const index = [];

  document.querySelectorAll('.bs-trigger[data-bs-target]').forEach(trigger => {
    const sheetId = trigger.getAttribute('data-bs-target');
    const sheet   = document.getElementById(sheetId);

    // Pula itens sem conteúdo (apenas placeholder)
    if (sheet && sheet.querySelector('.bottom-sheet__placeholder')) return;

    // Título: aria-label ou texto do .guia-item__label
    const labelEl = trigger.querySelector('.guia-item__label');
    const title   = (labelEl ? labelEl.textContent : (trigger.getAttribute('aria-label') || '')).trim();
    if (!title) return;

    // Ícone: primeiro [data-lucide] que não é a seta de chevron
    const iconEl = trigger.querySelector('[data-lucide]:not(.guia-item__arrow)');
    const icon   = iconEl ? iconEl.getAttribute('data-lucide') : 'circle';

    // Seção: section mais próxima acima com .section-label
    let sectionLabel = '';
    const sectionEl  = trigger.closest('section');
    if (sectionEl) {
      const hdr = sectionEl.querySelector('.section-label, .guia-section__header .section-label');
      if (hdr) sectionLabel = hdr.textContent.trim();
    }

    // Body text: conteúdo completo do sheet (textContent strip HTML automaticamente)
    const bodyText = sheet ? sheet.textContent.replace(/\s+/g, ' ').trim() : '';

    // Texto buscável pré-normalizado
    const searchText = normalize([title, sectionLabel, bodyText].join(' '));

    index.push({ title, icon, sectionLabel, element: trigger, searchText });
  });

  if (index.length === 0) return;

  /* ── 2. Injeta HTML ── */
  const fab = document.createElement('div');
  fab.className = 'search-fab';
  fab.setAttribute('role', 'search');
  fab.innerHTML = `
    <div class="search-fab__row">
      <button class="search-fab__btn" aria-label="Buscar no guia" aria-expanded="false">
        <i data-lucide="search"></i>
      </button>
      <input
        class="search-fab__input"
        type="search"
        inputmode="search"
        placeholder="Buscar no guia..."
        autocomplete="off"
        aria-label="Buscar item do guia"
      >
    </div>
    <div class="search-fab__dropdown" role="listbox" aria-label="Resultados da busca"></div>
  `;
  document.body.appendChild(fab);
  try { lucide.createIcons({ nodes: [fab] }); } catch (_) {}

  const btn      = fab.querySelector('.search-fab__btn');
  const input    = fab.querySelector('.search-fab__input');
  const dropdown = fab.querySelector('.search-fab__dropdown');

  /* ── 3. Mobile: integra page-back na barra ── */
  const pageBack = document.querySelector('.page-back');
  if (isMobile() && pageBack) {
    pageBack.classList.add('search-fab__back');
    fab.insertBefore(pageBack, fab.querySelector('.search-fab__row'));
  }

  if (!isMobile()) input.setAttribute('tabindex', '-1');

  /* ── 4. Helpers ── */
  let debounceTimer = null;

  function setOpenIcon() {
    btn.innerHTML = '<i data-lucide="x"></i>';
    btn.setAttribute('aria-label', 'Limpar busca');
    try { lucide.createIcons({ nodes: [btn] }); } catch (_) {}
  }

  function setClosedIcon() {
    btn.innerHTML = '<i data-lucide="search"></i>';
    btn.setAttribute('aria-label', 'Buscar no guia');
    try { lucide.createIcons({ nodes: [btn] }); } catch (_) {}
  }

  function desktopOpen() {
    fab.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    setOpenIcon();
    input.removeAttribute('tabindex');
    input.focus();
  }

  function close() {
    fab.classList.remove('is-open', 'has-results', 'has-empty');
    btn.setAttribute('aria-expanded', 'false');
    setClosedIcon();
    input.value = '';
    dropdown.innerHTML = '';
    if (!isMobile()) {
      input.setAttribute('tabindex', '-1');
    } else {
      input.blur();
    }
  }

  function renderResults(query) {
    const q = normalize(query.trim());
    dropdown.innerHTML = '';
    fab.classList.remove('has-results', 'has-empty');
    if (!q) return;

    const matches = index.filter(e => e.searchText.includes(q));

    if (matches.length === 0) {
      fab.classList.add('has-empty');
      const empty = document.createElement('div');
      empty.className = 'search-fab__empty';
      empty.textContent = `Nenhum resultado para "${query.trim()}"`;
      dropdown.appendChild(empty);
      return;
    }

    fab.classList.add('has-results');
    matches.slice(0, 12).forEach(entry => {
      const item = document.createElement('button');
      item.className = 'search-fab__item';
      item.setAttribute('role', 'option');
      item.setAttribute('aria-label', entry.title);
      item.innerHTML = `
        <span class="search-fab__item-icon"><i data-lucide="${entry.icon}"></i></span>
        <span class="search-fab__item-text">
          <span class="search-fab__item-title">${entry.title}</span>
          <span class="search-fab__item-section">${entry.sectionLabel}</span>
        </span>
      `;
      try { lucide.createIcons({ nodes: [item] }); } catch (_) {}
      item.addEventListener('click', () => {
        close();
        entry.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => entry.element.click(), 400);
      });
      dropdown.appendChild(item);
    });
  }

  /* ── 5. Eventos ── */
  btn.addEventListener('click', () => {
    if (isMobile()) {
      fab.classList.contains('is-open') ? close() : input.focus();
    } else {
      fab.classList.contains('is-open') ? close() : desktopOpen();
    }
  });

  input.addEventListener('input', () => {
    const hasText = input.value.length > 0;
    if (isMobile()) {
      if (hasText && !fab.classList.contains('is-open')) {
        fab.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        setOpenIcon();
      } else if (!hasText && fab.classList.contains('is-open')) {
        fab.classList.remove('is-open', 'has-results', 'has-empty');
        btn.setAttribute('aria-expanded', 'false');
        setClosedIcon();
        dropdown.innerHTML = '';
      }
    }
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderResults(input.value), 200);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && fab.classList.contains('is-open')) close();
  });

  document.addEventListener('click', e => {
    if (!isMobile() && fab.classList.contains('is-open') && !fab.contains(e.target)) close();
  });

  /* ── 6. Mobile: scroll-hide do page-back ── */
  if (pageBack) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!isMobile()) {
          pageBack.classList.remove('is-hidden');
          ticking = false;
          return;
        }
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          pageBack.classList.add('is-hidden');
        } else if (currentScrollY < lastScrollY - 8) {
          pageBack.classList.remove('is-hidden');
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
    }, { passive: true });
  }
}
