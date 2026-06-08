/**
 * accordion.js — Accordion genérico
 * Suporta múltiplas instâncias (.accordion) na mesma página.
 * Cada container opera de forma independente.
 */

function initAccordion() {
  document.querySelectorAll('.accordion').forEach(container => {
    const items = container.querySelectorAll('.accordion__item');
    if (!items.length) return;

    items.forEach(item => {
      const trigger = item.querySelector('.accordion__trigger');
      const body    = item.querySelector('.accordion__body');
      if (!trigger || !body) return;

      gsap.set(body, { height: 0 });

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Fecha todos dentro DESTE container
        items.forEach(i => {
          if (i.classList.contains('is-open')) {
            i.classList.remove('is-open');
            i.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
            gsap.to(i.querySelector('.accordion__body'), {
              height: 0,
              duration: 0.4,
              ease: 'power2.inOut'
            });
          }
        });

        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          gsap.to(body, {
            height: 'auto',
            duration: 0.52,
            ease: 'power3.out'
          });
        }
      });
    });
  });
}
