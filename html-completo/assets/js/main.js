/**
 * main.js — Own Time Home Club · Diretório Digital
 * Renderiza todos os componentes a partir de data.js
 * e inicializa interações + animações.
 */

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */

// SVG WhatsApp (brand icon — não usa Lucide)
const WA_SVG = `<svg class="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.844L0 24l6.335-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.375l-.357-.213-3.763.892.952-3.652-.233-.375A9.818 9.818 0 0112 2.182c5.422 0 9.818 4.396 9.818 9.818S17.422 21.818 12 21.818z"/>
</svg>`;

function waUrl(number) {
  const digits = number.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=Olá!%20Gostaria%20de%20falar%20com%20o%20Concierge.`;
}

/* ═══════════════════════════════════════════
   RENDER — HeroSection
   ═══════════════════════════════════════════ */
function renderHero() {
  const { hero, brand } = OWNTIME;
  document.getElementById('hero').innerHTML = `
    <div class="hero__bg"></div>
    <div class="hero__rule"></div>
    <div class="hero__content container">
      <p class="hero__label">${hero.label}</p>
      <h1 class="hero__headline">${hero.headline}</h1>
      <p class="hero__sub">${hero.subheadline}</p>
      <div class="hero__footer">
        <span class="hero__location">${hero.location}</span>
        <div class="hero__scroll" aria-hidden="true">
          <span>Explorar</span>
          <span class="hero__scroll-line"></span>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   RENDER — FacilitiesAccordion
   ═══════════════════════════════════════════ */
function renderFacilities() {
  const items = OWNTIME.facilities.map(f => `
    <div class="accordion__item">
      <button class="accordion__trigger" aria-expanded="false">
        <span class="accordion__icon-wrap" aria-hidden="true">
          <i data-lucide="${f.icon}" class="accordion__icon"></i>
        </span>
        <span class="accordion__title">${f.title}</span>
        <span class="accordion__arrow-wrap" aria-hidden="true">
          <i data-lucide="plus" class="accordion__arrow"></i>
        </span>
      </button>
      <div class="accordion__body" role="region">
        <div class="accordion__body-inner">${f.body}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('facilities').innerHTML = `
    <div class="container section-pad">
      <header class="facilities__header">
        <span class="section-label">Conforto &amp; Tecnologia</span>
        <h2 class="section-heading">Sua casa,<br><em>com tudo resolvido.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Cada detalhe foi pensado para que você chegue e simplesmente viva. Consulte abaixo as informações de uso dos sistemas da casa.</p>
      </header>
      <div class="accordion">${items}</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   RENDER — AmenitiesGrid
   ═══════════════════════════════════════════ */
function renderAmenities() {
  const cards = OWNTIME.amenities.map(a => `
    <article class="amenity-card${a.id === 'spa' ? ' amenity-card--highlight' : ''}">
      <i data-lucide="${a.icon}" class="amenity-card__icon" aria-hidden="true"></i>
      <h3 class="amenity-card__title">${a.title}</h3>
      <span class="amenity-card__hours">${a.hours}</span>
      <p class="amenity-card__note">${a.note}</p>
    </article>
  `).join('');

  document.getElementById('amenities').innerHTML = `
    <div class="container section-pad">
      <header class="amenities__header">
        <span class="section-label">Club House &amp; Bem-Estar</span>
        <h2 class="section-heading">O coração<br><em>do clube.</em></h2>
        <span class="divider" style="background:var(--color-text);opacity:0.15"></span>
        <p class="section-sub">Estrutura de resort com o aconchego de um clube privativo. Espaços desenhados para você recuperar a energia e encontrar o ritmo certo.</p>
      </header>
      <div class="amenities__grid">${cards}</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   RENDER — GastronomyAccordion
   ═══════════════════════════════════════════ */
function renderGastronomy() {
  const items = OWNTIME.gastronomy.map(g => `
    <div class="accordion__item">
      <button class="accordion__trigger" aria-expanded="false">
        <span class="accordion__icon-wrap" aria-hidden="true">
          <i data-lucide="${g.icon}" class="accordion__icon"></i>
        </span>
        <span class="accordion__title">${g.title}</span>
        <span class="accordion__arrow-wrap" aria-hidden="true">
          <i data-lucide="plus" class="accordion__arrow"></i>
        </span>
      </button>
      <div class="accordion__body" role="region">
        <div class="accordion__body-inner">
          <span class="gastronomy__hours">${g.hours}</span>
          ${g.body}
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('gastronomy').innerHTML = `
    <div class="container section-pad">
      <header class="gastronomy__header">
        <span class="section-label">Gastronomia</span>
        <h2 class="section-heading">À mesa,<br><em>em casa.</em></h2>
        <span class="divider"></span>
        <p class="section-sub">Sabores da Serra, do café da manhã à experiência privativa de um chef em casa.</p>
      </header>
      <div class="accordion">${items}</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   RENDER — ConciergeServices (accordion)
   ═══════════════════════════════════════════ */
function renderConcierge() {
  const items = OWNTIME.concierge.map(s => `
    <div class="accordion__item">
      <button class="accordion__trigger" aria-expanded="false">
        <span class="accordion__icon-wrap" aria-hidden="true">
          <i data-lucide="${s.icon}" class="accordion__icon"></i>
        </span>
        <span class="accordion__title">${s.title}</span>
        <span class="accordion__arrow-wrap" aria-hidden="true">
          <i data-lucide="plus" class="accordion__arrow"></i>
        </span>
      </button>
      <div class="accordion__body" role="region">
        <div class="accordion__body-inner">${s.body}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('concierge').innerHTML = `
    <div class="container section-pad">
      <header class="concierge__header">
        <span class="section-label">Serviços por Demanda</span>
        <h2 class="section-heading">Curadoria<br><em>a seu serviço.</em></h2>
        <span class="divider" style="background:var(--color-text);opacity:0.15"></span>
        <p class="section-sub">Serviços personalizados disponíveis sob demanda. Solicite ao seu time de anfitriões com antecedência.</p>
      </header>
      <div class="accordion accordion--dark">${items}</div>
      <div class="concierge__note">
        <i data-lucide="info" class="concierge__note-icon" aria-hidden="true"></i>
        <p class="concierge__note-text">Todos os serviços por demanda são cobrados à parte e sujeitos à disponibilidade. Para agendamentos e valores, entre em contato com o seu time de anfitriões.</p>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   RENDER — FloatingAction
   ═══════════════════════════════════════════ */
function renderFloatingAction() {
  const { concierge } = OWNTIME.brand;
  const href = waUrl(concierge.whatsapp);

  document.getElementById('floating-action').innerHTML = `
    <!-- Mobile bar -->
    <div class="floating-action__bar">
      <p class="floating-action__checkout">
        Check-out <strong>${concierge.checkoutTime}</strong>
      </p>
      <a href="${href}" target="_blank" rel="noopener noreferrer" class="floating-action__wa-btn">
        ${WA_SVG}
        <span>Concierge</span>
      </a>
    </div>

    <!-- Desktop FAB -->
    <div class="floating-action__fab">
      <p class="floating-action__checkout-label">
        Check-out <strong>${concierge.checkoutTime}</strong>
      </p>
      <a href="${href}" target="_blank" rel="noopener noreferrer"
         class="floating-action__wa-fab"
         title="Falar com o Concierge via WhatsApp"
         aria-label="Falar com o Concierge via WhatsApp">
        ${WA_SVG}
      </a>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   FLOATING ACTION VISIBILITY
   ═══════════════════════════════════════════ */
function initFloatingVisibility() {
  const el = document.getElementById('floating-action');

  ScrollTrigger.create({
    trigger: 'body',
    start: '12% top',
    onEnter:     () => el.classList.add('is-visible'),
    onLeaveBack: () => el.classList.remove('is-visible')
  });
}

/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render
  renderHero();
  renderFacilities();
  renderAmenities();
  renderGastronomy();
  renderConcierge();
  renderFloatingAction();

  // 2. Inicializa ícones Lucide após render do DOM
  lucide.createIcons();

  // 3. Interações
  initAccordion();
  initTabs();

  // 4. Animações (Antigravity)
  initAnimations();

  // 5. Floating action
  initFloatingVisibility();
});
