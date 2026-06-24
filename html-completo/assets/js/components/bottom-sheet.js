/**
 * bottom-sheet.js — Own Time Home Club
 *
 * Componente de bottom sheet (mobile-first) para exibir conteúdo em modal.
 * Sem dependências externas (jQuery, GSAP, etc).
 *
 * Uso: initBottomSheets()
 *
 * HTML esperado:
 * - Trigger: <button class="bs-trigger" data-bs-target="sheet-{id}">...</button>
 * - Sheet:   <div class="bottom-sheet" id="sheet-{id}" role="dialog" aria-modal="true" aria-hidden="true">...</div>
 * - Overlay: criado automaticamente pelo initBottomSheets()
 */

function initBottomSheets() {
  if (document.body.dataset.bsInit) return;
  document.body.dataset.bsInit = '1';

  // Criar overlay único se não existir
  let overlay = document.querySelector('.bs-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'bs-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  // State: rastreia qual sheet está aberto
  let currentOpenSheet = null;

  /**
   * Abre um sheet pelo ID
   */
  function openSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    if (!sheet || !sheet.classList.contains('bottom-sheet')) return;

    // Se há um sheet aberto, fecha primeiro
    if (currentOpenSheet && currentOpenSheet !== sheet) {
      closeSheet(currentOpenSheet);
    }

    sheet.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-active');
    document.documentElement.classList.add('sheet-open');

    currentOpenSheet = sheet;

    // Focus trap: move foco para o sheet
    const closeBtn = sheet.querySelector('.bs-close');
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  /**
   * Fecha um sheet específico (ou o atual)
   */
  function closeSheet(sheet) {
    if (!sheet) sheet = currentOpenSheet;
    if (!sheet) return;

    sheet.classList.remove('is-open');
    sheet.setAttribute('aria-hidden', 'true');

    // Remove overlay e scroll-lock apenas se nenhum sheet está aberto
    if (sheet === currentOpenSheet) {
      currentOpenSheet = null;
      overlay.classList.remove('is-active');
      document.documentElement.classList.remove('sheet-open');
    }
  }

  /**
   * Delegação de eventos no document
   */
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.bs-trigger');
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-bs-target');
      if (targetId) {
        openSheet(targetId);
      }
      return;
    }

    const closeBtn = e.target.closest('.bs-close');
    if (closeBtn) {
      e.preventDefault();
      closeSheet();
      return;
    }

    // Clique no overlay fecha o sheet
    if (e.target === overlay) {
      e.preventDefault();
      closeSheet();
      return;
    }
  });

  /**
   * Fechar com tecla ESC
   */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentOpenSheet) {
      e.preventDefault();
      closeSheet();
    }
  });

  /**
   * Swipe para fechar (touch drag a partir do header)
   */
  let touchStartY = 0;
  let touchCurrentY = 0;
  let isSwiping = false;

  document.addEventListener('touchstart', (e) => {
    if (!currentOpenSheet) return;
    if (e.target.closest('.bottom-sheet__body')) return;
    touchStartY = e.touches[0].clientY;
    touchCurrentY = touchStartY;
    isSwiping = true;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isSwiping || !currentOpenSheet) return;
    touchCurrentY = e.touches[0].clientY;
    const dy = touchCurrentY - touchStartY;
    if (dy > 0) {
      currentOpenSheet.style.transition = 'none';
      currentOpenSheet.style.transform = `translateY(${dy}px)`;
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!isSwiping || !currentOpenSheet) return;
    isSwiping = false;
    const dy = touchCurrentY - touchStartY;
    currentOpenSheet.style.transition = '';
    currentOpenSheet.style.transform = '';
    if (dy > 80) closeSheet();
    touchStartY = 0;
    touchCurrentY = 0;
  });
}
