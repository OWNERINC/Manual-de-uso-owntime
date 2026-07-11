/**
 * main-tipologia.js — Own Time Home Club
 * Inicialização para páginas de tipologia.
 * Depende: COMMON (data-common.js), TIPOLOGIA (data-{slug}.js),
 *          render-common.js, render-guia.js,
 *          components/bottom-sheet.js, components/animations.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const hk = (COMMON.concierge || []).find(c => c.id === 'housekeeping');
  if (hk && TIPOLOGIA.housekeepingDay) hk.hours = TIPOLOGIA.housekeepingDay;

  if (Array.isArray(TIPOLOGIA.extraOrientacoes)) {
    COMMON.orientacoesGerais = [...COMMON.orientacoesGerais, ...TIPOLOGIA.extraOrientacoes];
  }

  // 1. Render — ordem importa (top → bottom da página)
  renderHero(TIPOLOGIA);
  renderTipologiaFeatures(TIPOLOGIA);
  renderOrientacoesGerais(COMMON);
  renderGuia(TIPOLOGIA);
  renderFacilities(COMMON, TIPOLOGIA);
  renderGastronomy(COMMON);
  renderConcierge(COMMON);
  renderTelefonesUteis(COMMON);
  renderSegurancaAcesso(COMMON);
  renderFloatingAction(COMMON);
  renderSugestaoSheet(TIPOLOGIA.hero.headline);
  renderServicosAdicionaisSheet(TIPOLOGIA);
  renderCardapiosSheet();
  initSearch();

  // 2. Ícones após todo DOM estar pronto
  try { lucide.createIcons(); } catch (e) { console.warn('Lucide:', e); }

  // 3. Interações
  initSectionNav();
  initBottomSheets();
  try {
    initAnimations();
  } catch (e) {
    // Fallback: revela hero se GSAP falhar
    document.querySelectorAll('.hero__label,.hero__headline,.hero__sub,.hero__footer')
      .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    console.warn('Animations:', e);
  }
  try { initFloatingVisibility(); } catch (e) { console.warn('FloatingVisibility:', e); }
});

function renderCardapiosSheet() {
  [
    { id: 'sheet-cardapio-ala-carte', title: 'Cardápio À la Carte', file: 'assets/cardapios/cafe-a-la-carte.pdf' },
    { id: 'sheet-cardapio-em-casa',   title: 'Café em Casa',         file: 'assets/cardapios/cafe-em-casa.pdf'   }
  ].forEach(({ id, title, file }) => {
    const sheet = document.createElement('div');
    sheet.className = 'bottom-sheet';
    sheet.id = id;
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
        <div class="bottom-sheet__body" style="padding:0;overflow:hidden;display:flex;flex-direction:column">
          <iframe src="${file}" style="flex:1;border:none;min-height:0;display:block;width:100%" title="${title}"></iframe>
        </div>
        <div class="bottom-sheet__footer">
          <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
        </div>
      </div>
    `;
    document.body.appendChild(sheet);
  });
}

function renderServicosAdicionaisSheet(tipologia) {
  if (!Array.isArray(tipologia.servicosAdicionais)) return;

  const itens = tipologia.servicosAdicionais.map(s => `
    <div style="padding:1rem 0;border-bottom:1px solid var(--color-border)">
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;margin-bottom:0.35rem">
        <span style="font-family:var(--font-body);font-size:0.85rem;font-weight:500;color:var(--color-text)">${s.title}</span>
        <span style="font-family:var(--font-body);font-size:0.85rem;font-weight:600;color:var(--color-accent-lt);white-space:nowrap">${s.price}</span>
      </div>
      <p style="font-family:var(--font-body);font-size:0.8rem;line-height:1.55;color:var(--color-muted)">${s.desc}</p>
    </div>
  `).join('');

  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.id = 'sheet-servicos-adicionais';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-hidden', 'true');
  sheet.setAttribute('aria-labelledby', 'sheet-servicos-adicionais-title');
  sheet.innerHTML = `
    <div class="bottom-sheet__inner">
      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true"><i data-lucide="plus-circle"></i></div>
        <h3 class="bottom-sheet__title" id="sheet-servicos-adicionais-title">Serviços Pay Per Use</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar"><i data-lucide="x"></i></button>
      </header>
      <div class="bottom-sheet__body">
        <div style="margin-bottom:1rem">
          <p style="font-family:var(--font-body);font-size:0.8rem;line-height:1.55;color:var(--color-muted)">Serviços opcionais cobrados à parte. Para solicitar, entre em contato com o time de anfitriões com antecedência.</p>
        </div>
        ${itens}
        <a href="https://wa.me/5554999588947?text=Olá%2C%20gostaria%20de%20contratar%20um%20serviço%20adicional%20de%20housekeeping." target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Solicitar pelo WhatsApp</a>
      </div>
      <div class="bottom-sheet__footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

function initSectionNav() {
  const SECTIONS = [
    { id: 'orientacoes-gerais', label: 'Orientações' },
    { id: 'guia-container',     label: 'Guia da Casa' },
    { id: 'facilities',         label: 'Conforto' },
    { id: 'gastronomy',         label: 'Gastronomia' },
    { id: 'concierge',          label: 'Anfitriões' },
    { id: 'seguranca-acesso',   label: 'Segurança' },
  ].filter(s => document.getElementById(s.id));

  if (SECTIONS.length < 2) return;

  const nav = document.createElement('nav');
  nav.className = 'section-nav';
  nav.id = 'section-nav';
  nav.setAttribute('aria-label', 'Ir para seção');

  const track = document.createElement('div');
  track.className = 'section-nav__track';
  nav.appendChild(track);

  const pills = SECTIONS.map((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'section-nav__pill' + (i === 0 ? ' is-active' : '');
    btn.textContent = s.label;
    btn.setAttribute('aria-label', `Ir para ${s.label}`);
    btn.addEventListener('click', () => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const navH    = nav.offsetHeight;
      const searchH = window.matchMedia('(max-width: 768px)').matches ? 58 : 0;
      const top     = el.getBoundingClientRect().top + window.scrollY - navH - searchH - 1;
      isScrollingProgrammatically = true;
      window.scrollTo({ top, behavior: 'smooth' });
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => { isScrollingProgrammatically = false; }, 800);
    });
    track.appendChild(btn);
    return btn;
  });

  document.getElementById('hero').after(nav);

  // Scroll-spy via rAF
  let rafId = null;
  let lastActiveIdx = -1;
  let isScrollingProgrammatically = false;
  let scrollEndTimer = null;
  function updateActive() {
    const scrollMid = window.scrollY + window.innerHeight * 0.35;
    let activeIdx = 0;
    SECTIONS.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (el && el.offsetTop <= scrollMid) activeIdx = i;
    });
    if (activeIdx !== lastActiveIdx) {
      pills.forEach((p, i) => p.classList.toggle('is-active', i === activeIdx));
      if (!isScrollingProgrammatically) {
        pills[activeIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      lastActiveIdx = activeIdx;
    }
  }

  window.addEventListener('scroll', () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => { updateActive(); rafId = null; });
  }, { passive: true });

  updateActive();
}

function initFloatingVisibility() {
  const el      = document.getElementById('floating-action');
  const trigger = document.getElementById('seguranca-acesso');
  if (!el || !trigger) return;

  const io = new IntersectionObserver(([entry]) => {
    el.classList.toggle('is-visible', entry.isIntersecting);
  }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
  io.observe(trigger);
}
