/**
 * tabs.js — GastronomyTabs
 * Cross-fade com GSAP autoAlpha entre painéis.
 */

function initTabs() {
  const nav    = document.querySelector('.tabs__nav');
  const panels = document.querySelectorAll('.tabs__panel');
  if (!nav || !panels.length) return;

  const btns = nav.querySelectorAll('.tabs__btn');

  // Estado inicial: painel 0 visível
  panels.forEach((p, i) => {
    gsap.set(p, { autoAlpha: i === 0 ? 1 : 0 });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      const activeBtn = nav.querySelector('.tabs__btn.is-active');
      if (activeBtn === btn) return;

      const currentPanel = document.querySelector('.tabs__panel.is-active');
      const nextPanel    = document.querySelector(`.tabs__panel[data-tab="${targetId}"]`);
      if (!nextPanel) return;

      // Atualiza classes de nav
      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Animação cross-fade
      gsap.to(currentPanel, {
        autoAlpha: 0,
        y: -6,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          currentPanel.classList.remove('is-active');
          nextPanel.classList.add('is-active');
          gsap.fromTo(nextPanel,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.38, ease: 'power2.out' }
          );
        }
      });
    });
  });
}
