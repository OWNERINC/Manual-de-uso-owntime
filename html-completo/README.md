# Own Time Home Club · Guia Digital v2

Guia digital interativo para hóspedes do **Own Time Home Club** em Gramado, Serra Gaúcha. Funciona como um app mobile dentro do browser: o hóspede seleciona sua tipologia (tipo de imóvel) e acessa todas as informações da estadia — operação da unidade, gastronomia, clube, concierge e segurança — sem instalar nada.

**URL em produção:** https://owntime-diretorio-v2.web.app

---

## Variações de layout do Hub (`index.html`)

O hub de entrada tem variações de design em branches Git separadas, todas a partir de `master`.

| Branch | Conceito | Status |
|---|---|---|
| `master` | Layout original — hero + grid 2×2 na parte inferior | Base / produção |
| `design/hub-cinematic` | Scroll-snap vertical — cada unidade ocupa 100dvh (estilo Stories) | Variação A |
| `design/hub-netflix` | Grid 2×2 estático com fundo escuro 95% overlay — todas as unidades visíveis de uma vez | **Branch atual** |

### `design/hub-netflix` — detalhes

- Fundo: foto da primeira tipologia com `rgba(4,4,4,0.95)` de overlay
- Header centralizado com logo, texto resumo e CTAs (Wi-Fi · Horários)
- Badge **Soft Opening** abaixo dos CTAs, no fluxo do header
- Strip do **Club House** como elemento estático acima do grid
- Grid 2×2 com as 4 tipologias, sem animação, sem scroll horizontal
- Sem carrossel — todas as unidades visíveis ao mesmo tempo
- `padding-top: 17dvh` no header com suporte a `safe-area-inset-top`

Arquivos modificados nesta branch: `assets/css/hub.css` · `assets/js/main-hub.js`

---

## O que o site faz

O hóspede entra na URL, escolhe sua tipologia e navega por um guia completo com dois tipos de conteúdo:

1. **Conteúdo compartilhado** — igual para todos os hóspedes: orientações de check-in/check-out, gastronomia, clube, concierge, segurança
2. **Conteúdo da unidade** — específico do imóvel alugado: guia de operação dos equipamentos (geladeira, forno, lava-louças, spa jacuzzi etc.)

Ao clicar em qualquer item, abre um **bottom sheet** (painel deslizante) com as instruções detalhadas. Não há navegação entre sub-páginas — tudo está em uma única rolagem vertical por página.

---

## Páginas

| Arquivo | O que é | URL |
|---|---|---|
| `index.html` | Hub de entrada — apresenta o clube e redireciona para a tipologia | `/` |
| `fall-house.html` | Guia da Fall House · Casa 4 Suítes · 448 m² · 10 hóspedes | `/fall-house.html` |
| `winter-house.html` | Guia da Winter House · Casa 3 Suítes · 325 m² · 8 hóspedes | `/winter-house.html` |
| `garden.html` | Guia do Apartamento Garden · ≈ 60 m² · 1 quarto | `/garden.html` |
| `terraco.html` | Guia do Apartamento Cobertura (Terraço) · ≈ 60 m² · 1 quarto | `/terraco.html` |
| `clube.html` | Página do Club House — serviços, amenidades e estrutura do clube | `/clube.html` |

---

## Estrutura de seções em cada página de tipologia

As páginas de tipologia (fall-house, winter-house, garden, terraco) seguem sempre a mesma ordem de seções:

```
1. Hero               → imagem da unidade + nome da tipologia
2. Stats              → área, suítes/quartos, hóspedes, vagas + descrição
3. Orientações Gerais → check-in, checkout, emergência, pet  [compartilhado]
4. Guia da Casa       → equipamentos da unidade (tabs por cômodo) [específico]
5. Conforto & Tec.    → climatização, lareira, piso aquecido, Wi-Fi [compartilhado]
6. Gastronomia        → chef em casa, café da manhã [compartilhado — restaurante/bar/coffee no Club House]
7. Concierge          → housekeeping, babysitter, personal, car wash etc. [compartilhado]
8. Segurança & Acesso → monitoramento, controle eletrônico, perimetral [compartilhado]
9. Barra flutuante    → check-out 12:00 + botão WhatsApp concierge
```

> **Nota:** O acesso ao Club House (piscinas, sauna, spa, academia etc.) é detalhado em `clube.html`, não nas páginas de tipologia.

---

## Stack técnica

O projeto **não usa nenhum framework ou build step**. É HTML/CSS/JS puro.

### Bibliotecas externas (CDN)
| Biblioteca | Versão | Para quê |
|---|---|---|
| **GSAP** | 3.12.5 | Animações do hero (timeline de entrada) |
| **GSAP ScrollTrigger** | 3.12.5 | Linha de scroll shrink no hero · visibilidade da barra flutuante |
| **Lucide Icons** | latest | Ícones em todo o site (via `<i data-lucide="nome">`) |
| **Google Fonts** | — | Raleway + Cormorant Garamond |

### Fontes locais
| Fonte | Pesos | Formato |
|---|---|---|
| **Roobert** | 300 · 400 · 500 · 600 | `.otf` em `assets/fonts/` |

Roobert é a fonte brand do Own Time. Cormorant Garamond é usada nos títulos de seção.

### Sem dependências de runtime
- Sem React, Vue, Angular
- Sem jQuery
- Sem bundler (Webpack, Vite etc.)
- Sem TypeScript

---

## Estrutura de arquivos

```
html-completo/
│
├── index.html              ← Hub de entrada
├── fall-house.html         ← Página Fall House
├── winter-house.html       ← Página Winter House
├── garden.html             ← Página Garden
├── terraco.html            ← Página Terraço
├── clube.html              ← Página Club House
│
├── assets/
│   ├── css/
│   │   ├── main.css            ← Reset, tokens de design, tipografia base
│   │   ├── hero.css            ← Seção hero (imagem + texto)
│   │   ├── hub.css             ← Layout da página de entrada (index)
│   │   ├── tipologia.css       ← Stats + descrição da tipologia
│   │   ├── guia.css            ← Guia da casa (tabs + grid de itens)
│   │   ├── bottom-sheet.css    ← Componente bottom sheet
│   │   ├── facilities.css      ← Seção Conforto & Tecnologia
│   │   ├── gastronomy.css      ← Seção Gastronomia
│   │   ├── concierge.css       ← Seção Concierge
│   │   ├── seguranca-acesso.css← Seção Segurança & Acesso
│   │   ├── search.css          ← Barra de busca
│   │   └── floating-action.css ← Barra flutuante inferior
│   │
│   ├── js/
│   │   ├── data-hub.js         ← Conteúdo da página de entrada (v13)
│   │   ├── data-common.js      ← Todo conteúdo compartilhado entre tipologias (v4)
│   │   ├── data-fall-house.js  ← Conteúdo específico da Fall House (v6)
│   │   ├── data-winter-house.js← Conteúdo específico da Winter House (v6)
│   │   ├── data-garden.js      ← Conteúdo específico do Garden (v6)
│   │   ├── data-terraco.js     ← Conteúdo específico do Terraço (v6)
│   │   ├── render-common.js    ← Funções que constroem o HTML das seções compartilhadas
│   │   ├── render-guia.js      ← Função que constrói o Guia da Casa
│   │   ├── main-hub.js         ← Inicialização da index.html (v22)
│   │   ├── main-tipologia.js   ← Inicialização das páginas de tipologia (v8)
│   │   ├── main-clube.js       ← Inicialização da clube.html
│   │   └── components/
│   │       ├── bottom-sheet.js ← Componente autônomo (sem deps externas)
│   │       ├── animations.js   ← GSAP hero + IntersectionObserver reveals
│   │       ├── tabs.js         ← Navegação em abas (Guia da Casa)
│   │       └── search.js       ← Busca no guia
│   │
│   ├── fonts/                  ← Roobert (4 pesos em .otf)
│   └── images/                 ← Fotos das tipologias
│
├── firebase.json               ← Configuração de deploy e cache
├── .firebaserc                 ← Alias do projeto Firebase (target: v2)
│
└── README.md                   ← Este arquivo
```

---

## Como o conteúdo funciona (arquitetura de dados)

O site usa uma **separação clara entre dados e renderização**. Nenhum texto aparece hard-coded no HTML — tudo vem de arquivos JS de dados.

### Dois tipos de data files

**`data-common.js`** — exporta o objeto `COMMON` com todo conteúdo que aparece igual em todas as tipologias:
- `orientacoesGerais` — check-in, checkout, emergência, pet (nesta ordem)
- `facilities` — climatização, lareira, piso aquecido, Wi-Fi
- `amenities` — piscinas, saunas, fitness center, spa (seção do Club House)
- `gastronomy` — **somente** chef em casa e café da manhã (exclusivo das tipologias)
- `gastronomiaClube` — restaurante, coffee shop, bar (exclusivo do Club House — renderizado por `main-clube.js`)
- `concierge` — time de anfitriões, housekeeping, babysitter, personal trainer, pet care, car wash, private shopper
- `clube` — empório, kids, teens, playground, pulseira, golf carts, carregadores, sauna-clube, spa-clube
- `segurancaAcesso` — monitoramento, controle eletrônico, segurança perimetral
- `brand` — nome, localização, número do concierge, horário de check-out

**`data-{tipologia}.js`** — exporta o objeto `TIPOLOGIA` com o conteúdo exclusivo de cada unidade:
- `hero` — label, título, subtítulo, imagem
- `stats` — área, suítes, hóspedes, vagas
- `description` — frase descritiva
- `housekeepingDay` — dia da semana da limpeza inclusa (`'Segunda-feira'` para casas, `'Terça-feira'` para apartamentos)
- `guia` — array de categorias, cada uma com itens (ícone, id, título, body)
- `cozinha` — array de equipamentos da cozinha/área gourmet (renderizados em Conforto & Tecnologia)

### Dia de housekeeping por tipologia

| Tipologia | `housekeepingDay` |
|---|---|
| Fall House · Winter House | `'Segunda-feira'` |
| Garden · Terraço | `'Terça-feira'` |

Antes dos renders, `main-tipologia.js` injeta esse valor no campo `hours` do item `housekeeping` em `COMMON.concierge`, exibindo o dia correto como subtítulo no bottom sheet.

### Diferenças por tipologia no Conforto & Tecnologia

`renderFacilities(COMMON, TIPOLOGIA)` aceita a tipologia como segundo parâmetro opcional. Quando presente, os itens de `TIPOLOGIA.cozinha` são incluídos no grid junto com os itens compartilhados de `COMMON.facilities`.

**Fall House:** `cozinha` inclui `sala-banho` (SPA Jacuzzi) como primeiro item, além dos demais eletrodomésticos.
**Garden:** suíte inclui banheira hidro jacuzzi (renderizada via `render-guia.js`, aba Suíte).
**Terraço:** tem aba "Mini Spa Terrace" no guia com jacuzzi exclusiva no terraço privativo.

### Como um item do guia é estruturado

```js
// Exemplo em data-fall-house.js
{
  id: 'geladeira',
  icon: 'refrigerator',   // nome do ícone Lucide
  title: 'Geladeira',
  body: '<span class="bs-model-tag">Brastemp 500L</span><ul class="bs-steps"><li>...</li></ul>'
  // body vazio '' → exibe "Instruções em breve." para o usuário
}
```

### Pipeline de renderização

```
DOMContentLoaded (tipologias)
  └── main-tipologia.js
        ├── [injeta housekeepingDay em COMMON.concierge.housekeeping.hours]
        ├── renderHero(TIPOLOGIA)
        ├── renderTipologiaFeatures(TIPOLOGIA)
        ├── renderOrientacoesGerais(COMMON)
        ├── renderGuia(TIPOLOGIA)               ← tabs específicas da unidade
        ├── renderFacilities(COMMON, TIPOLOGIA) ← facilities + cozinha da tipologia
        ├── renderGastronomy(COMMON)            ← chef em casa + café da manhã
        ├── renderConcierge(COMMON)
        ├── renderSegurancaAcesso(COMMON)
        └── renderFloatingAction(COMMON)

DOMContentLoaded (clube.html)
  └── main-clube.js
        ├── renderClubeHero()
        ├── renderClubeAmenities()    ← piscinas, sauna, spa, fitness
        ├── renderClubeGastronomy()   ← restaurante, coffee shop, bar (COMMON.gastronomiaClube)
        └── renderClubeServicos()     ← kids, teens, transporte etc. (COMMON.clube)
```

Cada função de render:
1. Gera o HTML da seção e injeta no elemento com o `id` correspondente
2. Para cada item clicável, cria um bottom sheet no `<body>` com o conteúdo detalhado

---

## Componente Bottom Sheet

O componente central de interação do site. Funciona como um painel que desliza de baixo para cima ao clicar em qualquer item do guia. No desktop, abre como modal centralizado.

**Arquivo:** `assets/js/components/bottom-sheet.js`

**Funcionamento:**
- Qualquer elemento com `class="bs-trigger"` e `data-bs-target="sheet-{id}"` abre o painel
- O painel correspondente tem `id="sheet-{id}"` e `class="bottom-sheet"`
- O overlay escuro é criado automaticamente pelo `initBottomSheets()`
- O overlay usa `pointer-events: none` quando inativo — garante clicabilidade de todos os elementos da página em qualquer resolução

**Formas de fechar:**
- Clicar no botão X no header do sheet
- Clicar no overlay escuro fora do painel
- Pressionar `ESC`
- Swipe para baixo (touch devices)

**Sem dependências externas** — vanilla JS puro, sem jQuery ou GSAP.

---

## Sistema de Animações

**Arquivo:** `assets/js/components/animations.js`

### Hero (GSAP timeline)
Sequência de entrada no carregamento da página:
1. Label (`opacity 0 → 1`, `y: 12 → 0`)
2. Headline (`opacity 0 → 1`, `y: 40 → 0`)
3. Subtítulo (`opacity 0 → 1`, `y: 16 → 0`)
4. Texto intro (`opacity 0 → 1`, `y: 14 → 0`)
5. Footer do hero (`opacity 0 → 1`, `y: 12 → 0`)

A linha de scroll do hero encolhe em `scaleX` conforme o usuário rola a página (ScrollTrigger, `scrub: true`).

### Seções abaixo do fold (IntersectionObserver)
Elementos com `class="js-reveal"` entram com `opacity 0 → 1` + `translateY(24px → 0)` conforme ficam visíveis. Fallback de 3 segundos garante visibilidade mesmo se o observer falhar.

### Acessibilidade
Todas as animações são desativadas automaticamente quando `prefers-reduced-motion: reduce` está ativo.

---

## Design System

### Cores (tokens CSS em `:root`)
| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0A0A0A` | Fundo dark padrão |
| `--color-bg-alt` | `#111111` | Fundo dark alternativo |
| `--color-bg-light` | `#F7F5F2` | Seções claras |
| `--color-accent` | `#3D5A3E` | Verde pinheiro (escuro) |
| `--color-accent-lt` | `#6B8F6C` | Verde pinheiro (claro) |
| `--color-gold` | `#C9A96E` | Dourado discreto (focus ring) |

### Tipografia
| Token | Fonte | Uso |
|---|---|---|
| `--font-display` | Cormorant Garamond, Raleway, Georgia | Títulos de seção (`section-heading`) |
| `--font-body` | Roobert, system-ui | Todo o resto |

### Classes de seção
| Classe | Background | Texto |
|---|---|---|
| `.section-dark` | `#0A0A0A` | branco |
| `.section-dark-alt` | `#111111` | branco |
| `.section-light` | `#F7F5F2` | preto |

---

## Como adicionar ou editar conteúdo

### Editar conteúdo compartilhado (vale para todas as tipologias)
Abra `assets/js/data-common.js` e edite o array correspondente.

**Dados operacionais a preencher em `data-common.js`:**
- `brand.concierge.whatsapp` → número real do WhatsApp do concierge
- `orientacoesGerais[1].body` → ramal `[xx]` e WhatsApp `[xxxxxxxx]` de emergência
- `facilities[0].body` → passos de instrução do sistema de climatização (substituir placeholder)
- `facilities[1].body` → passos de acendimento da lareira (substituir placeholder)
- `facilities[2].body` → rede e senha do Wi-Fi (substituir `[nome da rede]` e `[senha]`)
- `clube[0].body` → catálogo e horário do empório
- `segurancaAcesso[1].body` → número de câmeras do CFTV (substituir `[INSERIR NÚMERO]`)

**Índices dos arrays após refatoração:**

`facilities`: `[0]` climatização · `[1]` lareira · `[2]` piso aquecido · `[3]` conectividade

> ⚠️ O item `hidromassagem` foi removido de `facilities` — cada tipologia tem sua própria entrada de jacuzzi/spa no guia específico da unidade.

`clube`: `[0]` empório · `[1]` kids · `[2]` teens · `[3]` playground · `[4]` pulseira · `[5]` golf-carts · `[6]` carregadores · `[7]` sauna-clube · `[8]` spa-clube

> ⚠️ `piscinas-clube` e `academia-clube` foram removidos do array `clube` — as piscinas e academia já constam em `amenities` com texto e horário completos.

### Editar conteúdo de uma tipologia específica
Abra o arquivo `assets/js/data-{tipologia}.js` correspondente e localize o item pelo `id`.

Itens com `body: ''` exibem automaticamente "Instruções em breve." para o usuário — não é necessário remover o item, apenas preencher o body quando o conteúdo estiver pronto.

### Adicionar um ícone
O site usa a biblioteca Lucide Icons. O valor do campo `icon` deve ser o nome do ícone em kebab-case conforme o catálogo em https://lucide.dev/icons

---

## Deploy

O site é hospedado no **Firebase Hosting** (target `v2`).

```bash
# Na raiz de html-completo/
firebase deploy --only hosting:v2
```

### Estratégia de cache
| Tipo de arquivo | Cache |
|---|---|
| JS e CSS | `max-age=31536000, immutable` (1 ano) |
| Imagens (webp, png, jpg, jpeg, svg, gif) | `max-age=31536000, immutable` (1 ano) |
| HTML | `no-cache` (sempre revalidado) |

Para forçar atualização de JS ou CSS sem limpar o cache dos usuários, incremente o query param de versão nas tags `<script>` e `<link>`:
```html
<script src="assets/js/data-common.js?v=4"></script>
<!--                                     ^^^ incrementar aqui -->
```

### Versões atuais dos arquivos (referência)
| Arquivo | Versão |
|---|---|
| `main.css` | v8 |
| `hub.css` | v9 |
| `bottom-sheet.css` (index) | v5 |
| `bottom-sheet.css` (tipologias/clube) | v7 |
| `guia.css` | v5 |
| `hero.css` | v5 |
| `data-hub.js` | v21 |
| `data-common.js` | v35 |
| `data-fall-house.js` | v13 |
| `data-winter-house.js` | v11 |
| `data-garden.js` | v10 |
| `data-terraco.js` | v11 |
| `main-hub.js` | v35 |
| `main-tipologia.js` | v12 |
| `main-clube.js` | v7 |
| `render-common.js` | v16 |

---

## Acessibilidade

- `aria-hidden`, `role="dialog"`, `aria-modal`, `aria-labelledby` em todos os bottom sheets
- `aria-label` em todos os botões sem texto visível
- Focus automático no botão de fechar ao abrir um sheet (focus trap básico)
- Tecla `ESC` fecha o sheet ativo
- `prefers-reduced-motion` desativa todas as animações CSS e JS
- `:focus-visible` com outline dourado em todos os elementos interativos
- Touch targets mínimos de 44px em todos os botões interativos
