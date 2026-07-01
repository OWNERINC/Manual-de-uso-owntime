# Rodadas de Revisão — Own Time Home Club · Hub (design/hub-netflix)

**Branch:** `design/hub-netflix`  
**Data:** 2026-07-01  
**Arquivos inspecionados:** `index.html`, `hub.css`, `main-hub.js`, `data-hub.js`, `bottom-sheet.js`, `main.css`, `bottom-sheet.css`

---

## Rodada 1 — Estrutura HTML (`index.html`)

| # | Achado | Severidade |
|---|---|---|
| 1.1 | `<main id="tipologia-grid"></main>` é preenchido inteiramente via JS — se o JS falhar (rede lenta, erro de script) o `<main>` fica vazio e o usuário vê tela preta | Médio |
| 1.2 | `defer` em todos os scripts é correto, mas `lucide.min.js` é carregado via `defer` e pode correr com `main-hub.js` (também `defer`) — se o Lucide não terminar antes do `lucide.createIcons()` a chamada falha. Na prática funciona porque ambos são `defer` e executam em ordem de declaração, mas é frágil | Baixo |
| 1.3 | `qrcode.min.js` (CDN CloudFlare) é carregado em **toda** abertura do hub mas `qrData` nunca é usado no template do `renderWifiSheet` — a biblioteca é importada e não renderiza nenhum QR. Carga desnecessária de recurso externo (~5 KB) | Baixo |
| 1.4 | Nenhum `<noscript>` — usuários com JS bloqueado veem tela preta | Baixo |
| 1.5 | `preload` só para `casa-4-suites.webp` e `casa-3-suites.webp`. O fundo principal do hub (`HUB.tipologias[0].image` = `casa-4-suites.webp`) está coberto, mas `clubhouse.png` (Club House strip) e `logo owntime branco.webp` não têm preload — causam LCP tardio do logo | Baixo |

---

## Rodada 2 — CSS (`hub.css`) · Variação Netflix

| # | Achado | Severidade |
|---|---|---|
| 2.1 | `.hub__nf-header .hub__intro-ctas` tem `justify-content: flex-start`, mas o `text-align: center` e `align-items: center` no `.hub__content` centralizam tudo. Os botões ficam alinhados à esquerda dentro de um container centralizado — visualmente parece centro, mas o comportamento de flex é inconsistente com a intenção declarada. Com 2 botões de `flex: 1 1 0` e `gap: 0.5rem` o efeito final é correto, mas qualquer terceiro botão adicionado quebraria o alinhamento | Baixo |
| 2.2 | `.hub__nf-card` não tem `hover` nem `focus-visible` declarados — os cards de tipologia não dão nenhum feedback visual ao hover no desktop ou ao foco via teclado. Todos os outros elementos interativos do hub têm hover/focus definidos | Médio |
| 2.3 | `@media (prefers-reduced-motion: reduce)` cobre apenas `.hub__intro-title--animate` e `.hub__soft-opening-badge` (animação do shimmer). O `transition` do `.hub__nf-clube::after` (border-color) e do `.hub__btn-bg` (scale) **não são desativados** neste media query | Baixo |
| 2.4 | Nenhum `@media (min-width: 1024px)` para a variação netflix — em desktop o layout estica os cards 2×2 para larguras muito grandes. O `clamp(95px, 20dvh, 140px)` protege a altura mas a largura pode ficar desproporcional em monitores widescreen | Médio |
| 2.5 | `.hub__nf-catalog-wrap` usa `flex: 1; min-height: 0` mas só funciona se o pai (`.hub__page`) for `display: flex; flex-direction: column`. `.hub__page` herdou `display: flex` da regra original — funciona, mas a dependência implícita pode quebrar se a ordem de override das regras mudar | Baixo |
| 2.6 | `body { overflow: hidden }` da linha 8 persiste na variação netflix. A página é `height: 100dvh` e o `hub__page` é `overflow: hidden`, então o conteúdo que excede 100dvh (em telas muito pequenas ou com fonte grande) é silenciosamente cortado sem scroll de recuperação | Médio |
| 2.7 | `.hub__nf-bg` é `position: absolute` mas `.hub__page` é o pai posicionado (tem `position: relative`). Se `.hub__page` não estiver presente no DOM por qualquer razão, o `background` flutua para o viewport. Considerando que `.hub__page` é gerado via JS, existe uma janela entre DOMContentLoaded e renderização | Baixo |

---

## Rodada 3 — JavaScript (`main-hub.js`)

| # | Achado | Severidade |
|---|---|---|
| 3.1 | `const hero = HUB.hero` na linha 9 é declarado mas **nunca usado** em nenhuma parte da função `renderTipologiaGrid()` — variável morta | Baixo |
| 3.2 | `renderTipologiaGrid()` gera `sheet-sobre-owntime` (bottom sheet "Ler mais") mas **nenhum trigger** com `data-bs-target="sheet-sobre-owntime"` existe no HTML renderizado da variação netflix. O sheet é criado e appended ao body mas nunca pode ser aberto pelo usuário | Alto |
| 3.3 | `renderWifiSheet()`: `qrData` é calculado na linha 184 (`WIFI:T:WPA2;S:${ssid};P:${password};;`) mas **não é inserido em nenhum lugar** do template HTML do sheet — a biblioteca `qrcode.min.js` é carregada em vão (ver 1.3) e o QR code não aparece para o usuário | Médio |
| 3.4 | O botão "Copiar senha" no `renderWifiSheet` usa `onclick` inline com template literal: `navigator.clipboard.writeText('${password}')`. Se a senha contiver aspas simples (`'`) o atributo `onclick` quebra com erro de sintaxe JS | Médio |
| 3.5 | `animateHub()` busca `.hub__intro-title` e adiciona classe `hub__intro-title--animate`. A animação `hubFadeUp` (`@keyframes`) está definida no CSS base (linha 534), mas a variação netflix não redefine nem desativa explicitamente — o elemento anima, o que é correto, mas qualquer mudança futura no CSS base pode afetar a variação | Baixo |
| 3.6 | `renderSoftOpeningSheet()` só é chamada incondicionalmente — mesmo que `HUB.softOpening.active` seja `false` (sem badge renderizado), o sheet é criado e appended ao body. Não causa erro mas polui o DOM com sheet inacessível | Baixo |

---

## Rodada 4 — Dados (`data-hub.js`)

| # | Achado | Severidade |
|---|---|---|
| 4.1 | `HUB.wifi.ssid` = `'[nome da rede]'` e `HUB.wifi.password` = `'[senha]'` — valores **placeholder** ainda no arquivo. O sheet de Wi-Fi exibirá `[nome da rede]` e `[senha]` para o hóspede real | Alto |
| 4.2 | `HUB.intro.ctaWhatsapp` está declarado em `data-hub.js` (linha 38) mas **nunca é usado** em `main-hub.js` — link do WhatsApp de suporte não está acessível ao usuário pelo hub | Médio |
| 4.3 | `HUB.hero` tem `headline`, `subheadline` e `location` que não são utilizados na variação netflix (e a variável `hero` no JS já foi identificada como morta em 3.1) | Info |
| 4.4 | `HUB.softOpening.label` = `'Soft Opening'` — texto em inglês. Dependendo do público-alvo esperado, considerar tradução/adaptação | Info |

---

## Rodada 5 — Assets e Referências

| # | Achado | Severidade |
|---|---|---|
| 5.1 | `assets/images/logo owntime branco.webp` — **nome com espaço**. Funciona em navegadores, mas é uma armadilha em linha de comando, deploy e CDN. Referenciado diretamente no JS sem encode | Baixo |
| 5.2 | `assets/images/clubhouse.png` é uma imagem **PNG** (não webp), potencialmente mais pesada que as outras. Todas as demais tipologias usam `.webp` | Baixo |
| 5.3 | Arquivo `assets.zip` na raiz do projeto provavelmente não deveria ser commitado no repositório (binário grande desnecessário) | Info |
| 5.4 | `~$NTEUDO-PAGINAS.md` na raiz — arquivo temporário do Word (lock file) commitado no repo | Info |
| 5.5 | `Briefing de Captação Audiovisual - OWNTIME HOME CLUB.docx` dentro de `assets/images/` — documento Word em pasta de imagens, improvável que faça parte do deploy | Info |
| 5.6 | Fontes Roobert todas presentes (`Light`, `Regular`, `Medium`, `SemiBold` em `.otf`) — sem gaps | OK |
| 5.7 | `lucide.min.js` presente em `assets/js/vendor/` — sem dependência de CDN | OK |
| 5.8 | Todas as imagens referenciadas em `data-hub.js` existem em `assets/images/` com nomes corretos (kebab-case `.webp`) | OK |

---

## Rodada 6 — Acessibilidade e UX

| # | Achado | Severidade |
|---|---|---|
| 6.1 | `.hub__nf-card` (links de tipologia) não têm `focus-visible` — usuário de teclado não vê onde está o foco ao navegar pelos cards | Médio |
| 6.2 | `<section class="hub__nf-catalog-wrap" aria-label="Selecione sua unidade">` — correto. Mas `<header class="hub__nf-header">` não tem `aria-label` — para screen readers o header não tem contexto declarado | Baixo |
| 6.3 | Botão "Copiar senha" no Wi-Fi usa `<button>` sem `type="button"` — em alguns contextos pode ser tratado como `type="submit"` | Baixo |
| 6.4 | `<img ... draggable="false">` no logo — correto. Sem `width`/`height` declarados no atributo HTML, pode causar layout shift (CLS) antes do CSS carregar | Baixo |
| 6.5 | Touch targets: CTAs de Wi-Fi e Horários têm `min-height: 44px` — correto. Cards de tipologia têm `height: clamp(95px, 20dvh, 140px)` — acima do mínimo | OK |
| 6.6 | Swipe para fechar bottom sheet implementado (`dy > 80px`) com `{ passive: true }` — correto | OK |

---

## Resumo por Prioridade

### Alta Prioridade (deve corrigir antes do go-live)
- **3.2** — Sheet `sheet-sobre-owntime` criado sem trigger: usuário não consegue acessar o conteúdo
- **4.1** — Wi-Fi com valores placeholder `[nome da rede]` / `[senha]`

### Média Prioridade (impacto funcional ou visual)
- **2.2** — Cards sem hover/focus-visible (desktop + teclado)
- **2.4** — Sem breakpoint desktop para variação netflix
- **2.6** — `overflow: hidden` no body pode cortar conteúdo em telas pequenas
- **3.3** — QR code calculado mas não renderizado
- **3.4** — XSS potencial em `onclick` inline se senha tiver aspas simples
- **4.2** — WhatsApp de suporte declarado em dados mas nunca exibido

### Baixa Prioridade / Info (melhorias de qualidade)
- **1.2** — Ordem de carregamento Lucide vs `createIcons()`
- **1.3** — `qrcode.min.js` carregado sem uso
- **1.5** — Logo e Club House sem preload
- **2.3** — `prefers-reduced-motion` incompleto para novos elementos
- **3.1** — Variável `hero` declarada sem uso
- **3.6** — Sheet de Soft Opening criado mesmo quando inativo
- **5.1** — Nome de arquivo com espaço no logo
- **5.2** — `clubhouse.png` não convertido para webp
- **5.3** / **5.4** / **5.5** — Arquivos desnecessários no repositório
