/**
 * sugestao.js — Own Time Home Club
 * Sistema de sugestões: sheet com foto + texto, envio para Google Sheets via Apps Script.
 */

function renderSugestaoSheet(tipologiaNome) {
  if (document.getElementById('sheet-sugestao')) return;

  const sheet = document.createElement('div');
  sheet.className  = 'bottom-sheet';
  sheet.id         = 'sheet-sugestao';
  sheet.setAttribute('role',            'dialog');
  sheet.setAttribute('aria-modal',      'true');
  sheet.setAttribute('aria-hidden',     'true');
  sheet.setAttribute('aria-labelledby', 'sheet-sugestao-title');

  sheet.innerHTML = `
    <div class="bottom-sheet__inner" style="position:relative">

      <!-- Banner de sucesso — desliza sobre o header -->
      <div class="sug-banner" id="sug-banner" aria-live="polite">
        <i data-lucide="check"></i>
        Enviado com sucesso
      </div>

      <header class="bottom-sheet__header">
        <div class="bottom-sheet__header-icon" aria-hidden="true">
          <i data-lucide="lightbulb"></i>
        </div>
        <h3 class="bottom-sheet__title" id="sheet-sugestao-title">Sugestões</h3>
        <button class="bottom-sheet__close-btn bs-close" aria-label="Fechar">
          <i data-lucide="x"></i>
        </button>
      </header>

      <div class="bottom-sheet__body" id="sug-form-body">
        <p class="sug-intro">Conte-nos o que pode melhorar a sua experiência na <strong>${tipologiaNome}</strong>.</p>

        <!-- Categoria -->
        <div class="sug-categoria" id="sug-categoria" role="group" aria-label="Categoria da sugestão">
          <button class="sug-cat-btn is-active" data-cat="imovel" type="button">Imóvel</button>
          <button class="sug-cat-btn" data-cat="servicos" type="button">Serviços</button>
          <button class="sug-cat-btn" data-cat="outro" type="button">Outro</button>
        </div>

        <!-- Foto -->
        <input type="file" accept="image/*" capture="environment" id="sug-photo-input" aria-label="Adicionar foto" style="display:none">
        <div class="sug-photo" id="sug-photo-area" role="button" tabindex="0" aria-label="Adicionar foto">
          <div class="sug-photo__placeholder" id="sug-photo-placeholder">
            <i data-lucide="camera"></i>
            <span>Adicionar foto <span class="sug-optional">(opcional)</span></span>
          </div>
          <img class="sug-photo__preview" id="sug-photo-preview" alt="Preview da foto selecionada" style="display:none">
          <button class="sug-photo__remove" id="sug-photo-remove" aria-label="Remover foto" style="display:none">
            <i data-lucide="x"></i>
          </button>
        </div>

        <!-- Texto -->
        <textarea class="sug-textarea" id="sug-text" placeholder="Descreva sua sugestão..." rows="4" maxlength="500" aria-label="Sugestão"></textarea>
        <div class="sug-count"><span id="sug-count">0</span>/500</div>

        <!-- Erro -->
        <div id="sug-error" class="sug-feedback sug-feedback--error" style="display:none" aria-live="assertive">
          <p>Não foi possível enviar. <button id="sug-retry" class="sug-retry-btn">Tentar novamente</button></p>
        </div>
      </div>

      <div class="bottom-sheet__footer sug-footer">
        <button class="bottom-sheet__back bs-close" aria-label="Fechar">← Voltar</button>
        <button class="sug-submit" id="sug-submit">
          <i data-lucide="send"></i>
          Enviar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(sheet);
  _initSugestaoLogic(tipologiaNome);
}

function _initSugestaoLogic(tipologiaNome) {
  const sheet       = document.getElementById('sheet-sugestao');
  const input       = document.getElementById('sug-photo-input');
  const area        = document.getElementById('sug-photo-area');
  const placeholder = document.getElementById('sug-photo-placeholder');
  const preview     = document.getElementById('sug-photo-preview');
  const removeBtn   = document.getElementById('sug-photo-remove');
  const textarea    = document.getElementById('sug-text');
  const counter     = document.getElementById('sug-count');
  const submitBtn   = document.getElementById('sug-submit');
  const errorDiv    = document.getElementById('sug-error');
  const retryBtn    = document.getElementById('sug-retry');
  const banner      = document.getElementById('sug-banner');
  const catBtns     = document.querySelectorAll('#sug-categoria .sug-cat-btn');

  // ── Seletor de categoria ──
  let categoriaAtual = 'imovel';
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      categoriaAtual = btn.dataset.cat;
    });
  });

  // ── Reset ao reabrir o sheet ──
  new MutationObserver(() => {
    if (sheet.classList.contains('is-open')) _resetForm();
  }).observe(sheet, { attributes: true, attributeFilter: ['class'] });

  function _resetForm() {
    textarea.value = '';
    counter.textContent = '0';
    input.value = '';
    preview.style.display = 'none';
    preview.src = '';
    placeholder.style.display = 'flex';
    removeBtn.style.display = 'none';
    errorDiv.style.display = 'none';
    banner.classList.remove('is-visible');
    // Reset categoria para padrão
    catBtns.forEach(b => b.classList.remove('is-active'));
    catBtns[0]?.classList.add('is-active');
    categoriaAtual = 'imovel';
    _setSubmitting(false);
  }

  // ── iOS: empurra o sheet acima do teclado ──
  if (window.visualViewport) {
    const _onVV = () => {
      const vv = window.visualViewport;
      const offset = window.innerHeight - vv.offsetTop - vv.height;
      sheet.style.bottom = Math.max(0, offset) + 'px';
    };
    const _resetVV = () => { sheet.style.bottom = ''; };
    textarea.addEventListener('focus', () => {
      window.visualViewport.addEventListener('resize', _onVV);
      window.visualViewport.addEventListener('scroll', _onVV);
    });
    textarea.addEventListener('blur', () => {
      window.visualViewport.removeEventListener('resize', _onVV);
      window.visualViewport.removeEventListener('scroll', _onVV);
      setTimeout(_resetVV, 100);
    });
  }

  // ── Foto ──
  area.addEventListener('click', (e) => {
    if (!e.target.closest('#sug-photo-remove')) input.click();
  });
  area.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
  });

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      preview.src = ev.target.result;
      preview.style.display = 'block';
      placeholder.style.display = 'none';
      removeBtn.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  });

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    input.value = '';
    preview.style.display = 'none';
    preview.src = '';
    placeholder.style.display = 'flex';
    removeBtn.style.display = 'none';
  });

  // ── Contador ──
  textarea.addEventListener('input', () => { counter.textContent = textarea.value.length; });

  // ── Submit ──
  function submit() {
    const texto  = textarea.value.trim();
    const temFoto = preview.style.display !== 'none' && preview.src;
    if (!texto && !temFoto) {
      textarea.focus();
      textarea.style.borderColor = 'rgba(255,100,100,0.6)';
      setTimeout(() => { textarea.style.borderColor = ''; }, 2000);
      return;
    }

    _setSubmitting(true);
    errorDiv.style.display = 'none';

    const webhookUrl = (typeof COMMON !== 'undefined' && COMMON.sugestoes && COMMON.sugestoes.webhookUrl) || '';

    const hora      = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const device    = _parseDevice(navigator.userAgent);

    const enviar = (fotoData) => {
      if (!webhookUrl) {
        console.log('[Sugestão — dev mode]', { tipologiaNome, device, hora, texto, fotoData });
        _showSuccess();
        return;
      }

      if (fotoData) {
        // Com foto: POST x-www-form-urlencoded (sem limite de URL, e.parameter populado)
        const body = new URLSearchParams({ tipologia: tipologiaNome, device, hora, sugestao: texto, foto: fotoData, categoria: categoriaAtual });
        fetch(webhookUrl, { method: 'POST', mode: 'no-cors', body }).catch(() => {});
      } else {
        // Sem foto: GET no-cors (comprovadamente funciona)
        const params = new URLSearchParams({ tipologia: tipologiaNome, device, hora, sugestao: texto, categoria: categoriaAtual });
        fetch(webhookUrl + '?' + params.toString(), { mode: 'no-cors' }).catch(() => {});
      }
      _showSuccess(); // fire-and-forget — não espera resposta
    };

    if (temFoto) {
      _compressImage(preview.src, 1280, 0.75).then(enviar);
    } else {
      enviar(null);
    }
  }

  function _setSubmitting(loading) {
    submitBtn.disabled = loading;
    submitBtn.innerHTML = loading
      ? '<i data-lucide="loader-2" class="sug-spin"></i> Enviando...'
      : '<i data-lucide="send"></i> Enviar';
    try { lucide.createIcons({ nodes: [submitBtn] }); } catch(e) {}
  }

  function _showSuccess() {
    // Mostra banner verde sobre o header
    banner.classList.add('is-visible');
    try { lucide.createIcons({ nodes: [banner] }); } catch(e) {}
    // Fecha o sheet após 1.8s
    setTimeout(() => {
      sheet.querySelector('.bs-close')?.click();
    }, 1800);
  }

  function _showError() {
    _setSubmitting(false);
    errorDiv.style.display = 'block';
  }

  submitBtn.addEventListener('click', submit);
  if (retryBtn) retryBtn.addEventListener('click', submit);
}

// ── Utilitários ──

function _parseDevice(ua) {
  let device = 'Desktop';
  let os = '';

  if      (/iPad/i.test(ua))             device = 'iPad';
  else if (/iPhone/i.test(ua))           device = 'iPhone';
  else if (/Android.*Mobile/i.test(ua))  device = 'Android Phone';
  else if (/Android/i.test(ua))          device = 'Android Tablet';

  const iosMatch = ua.match(/iPhone OS ([\d_]+)/i) || ua.match(/iPad.*OS ([\d_]+)/i);
  if (iosMatch)                           os = 'iOS ' + iosMatch[1].replace(/_/g, '.');
  else if (/Android ([\d.]+)/i.test(ua)) os = 'Android ' + RegExp.$1;
  else if (/Mac OS X/i.test(ua))         os = 'macOS';
  else if (/Windows/i.test(ua))          os = 'Windows';

  return os ? device + ' · ' + os : device;
}

function _compressImage(dataUrl, maxPx, quality) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w > maxPx || h > maxPx) {
        if (w >= h) { h = Math.round(h * maxPx / w); w = maxPx; }
        else        { w = Math.round(w * maxPx / h); h = maxPx; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

function _submitViaIframe(url, data) {
  const iframeName = 'sug-iframe-' + Date.now();
  const iframe = document.createElement('iframe');
  iframe.name = iframeName;
  iframe.style.cssText = 'display:none;position:absolute;width:0;height:0;border:0';
  document.body.appendChild(iframe);

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = url;
  form.target = iframeName;
  form.style.display = 'none';

  Object.entries(data).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value || '';
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    try { document.body.removeChild(form); } catch(e) {}
    try { document.body.removeChild(iframe); } catch(e) {}
  }, 15000);
}
