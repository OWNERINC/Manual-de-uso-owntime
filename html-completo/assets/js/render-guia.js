function renderGuia(tipologia) {
  const container = document.getElementById('guia-container');
  if (!container) return;

  const guia = tipologia && tipologia.guia;
  if (!guia || !Array.isArray(guia) || guia.length === 0) return;

  guia.forEach((section, sectionIndex) => {
    const sectionClass = sectionIndex % 2 === 0 ? 'section-dark' : 'section-dark-alt';
    const sectionEl = document.createElement('section');
    sectionEl.id = 'guia-' + section.id;
    sectionEl.className = 'guia-section ' + sectionClass;

    const containerEl = document.createElement('div');
    containerEl.className = 'container section-pad';

    const headerEl = document.createElement('header');
    headerEl.className = 'guia-section__header';

    const labelEl = document.createElement('span');
    labelEl.className = 'section-label';
    labelEl.textContent = section.label;

    headerEl.appendChild(labelEl);
    containerEl.appendChild(headerEl);

    const gridEl = document.createElement('div');
    gridEl.className = 'guia-section__grid';

    if (section.items && Array.isArray(section.items)) {
      section.items.forEach(item => {
        gridEl.insertAdjacentHTML('beforeend', _guiaItemBtn('sheet-guia-' + item.id, item.icon, item.title));
      });
    }

    containerEl.appendChild(gridEl);
    sectionEl.appendChild(containerEl);
    container.appendChild(sectionEl);
  });

  // Append sheets after container is in the DOM
  guia.forEach(section => {
    if (!section.items) return;
    section.items.forEach(item => {
      const body = item.body
        ? `<p>${item.body}</p>`
        : '<p class="bottom-sheet__placeholder">Instruções em breve.</p>';
      _appendSheet('sheet-guia-' + item.id, item.icon, item.title, body);
    });
  });
}
