# Own Time Home Club · Guia Digital v2

Guia digital interativo para hóspedes do **Own Time Home Club** em Gramado, Serra Gaúcha. Funciona como um app mobile dentro do browser: o hóspede seleciona sua tipologia (tipo de imóvel) e acessa todas as informações da estadia — operação da unidade, gastronomia, clube, concierge e segurança — sem instalar nada.

**URL em produção:** https://owntime-diretorio-v2.web.app

---

## Variações de layout do Hub (`index.html`)

O hub de entrada tem variações de design em branches Git separadas, todas a partir de `master`.

| Branch | Conceito | Status |
|---|---|---|
| `master` | Layout original — hero + grid 2×2 | Base |
| `design/hub-netflix` | Grid 2×2 estático com fundo escuro | Variação A |
| `design/hub-clear` | Tela única — fundo com foto, lista de tipologias com links diretos | **Atual em produção** |

### `design/hub-clear` — layout atual

- Fundo: `profundidade.webp` com `rgba(0,0,0,0.80)` de overlay
- Tela única com scroll interno (`overflow-y: auto` no container)
- Logo + tagline + botões Wi-Fi/Horários no topo
- Lista vertical de 5 tipologias: nome em Cormorant Garamond italic + descritor em Roboto cinza
- Clicar em qualquer tipologia navega diretamente para a página correspondente
- Badge "Soft Opening" abaixo da lista, centralizada
- Scroll hint removido — a badge incentiva o scroll natural

Arquivos modificados nesta branch: `assets/css/hub.css` · `assets/js/main-hub.js`

---

## O que o site faz

O hóspede entra na URL, escolhe sua tipologia e navega por um guia completo com dois tipos de conteúdo:

1. **Conteúdo compartilhado** — igual para todos os hóspedes: orientações de check-in/check-out, gastronomia, clube, concierge, segurança
2. **Conteúdo da unidade** — específico do imóvel alugado: guia de operação dos equipamentos (geladeira, forno, lava-louças, spa jacuzzi etc.)

Ao clicar em qualquer item, abre um **bottom sheet** (painel deslizante) com as instruções detalhadas.

---

## Páginas

| Arquivo | O que é | URL |
|---|---|---|
| `index.html` | Hub de entrada — apresenta o clube e redireciona para a tipologia | `/` |
| `fall-house.html` | Guia da Fall House · Casa 4 Suítes · 448 m² · 10 hóspedes | `/fall-house.html` |
| `winter-house.html` | Guia da Winter House · Casa 3 Suítes · 325 m² · 8 hóspedes | `/winter-house.html` |
| `garden.html` | Guia do Apartamento Garden · ≈ 60 m² · 1 quarto | `/garden.html` |
| `terraco.html` | Guia do Apartamento Cobertura · ≈ 60 m² · 1 quarto | `/terraco.html` |
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
6. Gastronomia        → chef em casa, café da manhã [compartilhado]
7. Concierge          → housekeeping, babysitter, personal, car wash etc. [compartilhado]
8. Segurança & Acesso → monitoramento, controle eletrônico, perimetral [compartilhado]
9. Barra flutuante    → check-out + botão WhatsApp concierge
```

> **Nota:** O acesso ao Club House (piscinas, sauna, spa, academia etc.) é detalhado em `clube.html`, não nas páginas de tipologia.

---

## Stack técnica

O projeto **não usa nenhum framework ou build step**. É HTML/CSS/JS puro.

### Bibliotecas externas (CDN)
| Biblioteca | Versão | Para quê |
|---|---|---|
| **GSAP** | 3.12.5 | Animações do hero (timeline de entrada) |
| **GSAP ScrollTrigger** | 3.12.5 | Linha de scroll shrink no hero |
| **Lucide Icons** | bundled | Ícones em todo o site (via `<i data-lucide="nome">`) |
| **Google Fonts** | — | Raleway · Cormorant Garamond · Roboto |

### Fontes locais
| Fonte | Pesos | Formato |
|---|---|---|
| **Roobert** | 300 · 400 · 500 · 600 | `.otf` em `assets/fonts/` |

Roobert é a fonte brand do Own Time. Cormorant Garamond é usada nos títulos do hub e heroes. Roboto é usada na tagline e nos descritores de tipologia.

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
├── terraco.html            ← Página Cobertura
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
│   │   ├── sugestao.css        ← Sheet de sugestões
│   │   ├── search.css          ← Barra de busca
│   │   └── floating-action.css ← Barra flutuante inferior
│   │
│   ├── js/
│   │   ├── data-hub.js         ← Conteúdo da página de entrada
│   │   ├── data-common.js      ← Todo conteúdo compartilhado entre tipologias
│   │   ├── data-fall-house.js  ← Conteúdo específico da Fall House
│   │   ├── data-winter-house.js← Conteúdo específico da Winter House
│   │   ├── data-garden.js      ← Conteúdo específico do Garden
│   │   ├── data-terraco.js     ← Conteúdo específico do Terraço
│   │   ├── render-common.js    ← Funções que constroem o HTML das seções compartilhadas
│   │   ├── render-guia.js      ← Função que constrói o Guia da Casa
│   │   ├── sugestao.js         ← Sistema de sugestões (sheet + envio Google Sheets)
│   │   ├── main-hub.js         ← Inicialização da index.html
│   │   ├── main-tipologia.js   ← Inicialização das páginas de tipologia
│   │   ├── main-clube.js       ← Inicialização da clube.html
│   │   └── components/
│   │       ├── bottom-sheet.js ← Componente autônomo (sem deps externas)
│   │       ├── animations.js   ← GSAP hero + IntersectionObserver reveals
│   │       ├── tabs.js         ← Navegação em abas (Guia da Casa)
│   │       └── search.js       ← Busca no guia
│   │
│   ├── fonts/                  ← Roobert (4 pesos em .otf)
│   └── images/                 ← Fotos das tipologias e backgrounds
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
- `orientacoesGerais` — check-in, checkout, emergência, pet
- `facilities` — climatização, lareira, piso aquecido, Wi-Fi
- `amenities` — piscinas, saunas, fitness center, spa (seção do Club House)
- `gastronomy` — chef em casa e café da manhã (exclusivo das tipologias)
- `gastronomiaClube` — restaurante, coffee shop, bar (exclusivo do Club House)
- `concierge` — housekeeping, babysitter, personal trainer, pet care, car wash, private shopper
- `clube` — empório, kids, teens, playground, pulseira, golf carts, carregadores
- `segurancaAcesso` — monitoramento, controle eletrônico, segurança perimetral
- `telefonesUteis` — emergência, saúde, Ownerinc, gastronomia, mercados
- `brand` — nome, localização, número do concierge, horário de check-out

**`data-{tipologia}.js`** — exporta o objeto `TIPOLOGIA` com o conteúdo exclusivo de cada unidade:
- `hero` — label, título, subtítulo, imagem
- `stats` — área, suítes, hóspedes, vagas
- `description` — frase descritiva
- `housekeepingDay` — dia da semana da limpeza inclusa
- `guia` — array de categorias, cada uma com itens (ícone, id, título, body)
- `cozinha` — equipamentos da cozinha/área gourmet

### Dia de housekeeping por tipologia

| Tipologia | `housekeepingDay` |
|---|---|
| Fall House · Winter House | `'Segunda-feira'` |
| Garden · Cobertura | `'Terça-feira'` |

### Como um item do guia é estruturado

```js
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
        ├── renderGuia(TIPOLOGIA)
        ├── renderFacilities(COMMON, TIPOLOGIA)
        ├── renderGastronomy(COMMON)
        ├── renderConcierge(COMMON)
        ├── renderSegurancaAcesso(COMMON)
        ├── renderSugestaoSheet(TIPOLOGIA.hero.headline)
        └── renderFloatingAction(COMMON)

DOMContentLoaded (clube.html)
  └── main-clube.js
        ├── renderClubeHero()
        ├── renderClubeOrientacoes()
        ├── renderClubeAmenities()
        ├── renderClubeGastronomy()
        ├── renderClubeServicos()
        └── renderSugestaoSheet('Club House')

DOMContentLoaded (index.html)
  └── main-hub.js
        ├── renderTipologiaGrid()   ← hub com lista + badge soft opening
        ├── renderHorariosSheet()
        ├── renderSoftOpeningSheet()
        └── renderWifiSheet()
```

---

## Componente Bottom Sheet

O componente central de interação do site. Funciona como um painel que desliza de baixo para cima ao clicar em qualquer item do guia. No desktop, abre como modal centralizado.

**Arquivo:** `assets/js/components/bottom-sheet.js`

**Funcionamento:**
- Qualquer elemento com `class="bs-trigger"` e `data-bs-target="sheet-{id}"` abre o painel
- O painel correspondente tem `id="sheet-{id}"` e `class="bottom-sheet"`
- O overlay escuro é criado automaticamente pelo `initBottomSheets()`

**Formas de fechar:**
- Clicar no botão X no header do sheet
- Clicar no overlay escuro fora do painel
- Pressionar `ESC`
- Swipe para baixo (touch devices)

---

## Sistema de Sugestões

**Arquivo:** `assets/js/sugestao.js`

Presente em todas as páginas de tipologia e no Club House. O hóspede pode selecionar uma categoria (Imóvel / Serviços), adicionar foto opcional e enviar uma sugestão que vai para o Google Sheets via Apps Script.

O script de recebimento está em `../sugestao-apps-script.js` na raiz do repositório.

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
| `--font-display` | Cormorant Garamond, Raleway, Georgia | Títulos do hub e heroes |
| `--font-body` | Roobert, system-ui | Todo o resto |
| — | Roboto | Tagline da home e descritores de tipologia |

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
| Imagens (webp, png, jpg, jpeg) | `max-age=31536000, immutable` (1 ano) |
| HTML | `no-cache` (sempre revalidado) |

Para forçar atualização de JS ou CSS sem limpar o cache dos usuários, incremente o query param de versão nas tags `<script>` e `<link>`:
```html
<script src="assets/js/data-common.js?v=73"></script>
<!--                                     ^^^ incrementar aqui -->
```

### Versões atuais dos arquivos
| Arquivo | Versão |
|---|---|
| `main.css` | v9 |
| `hub.css` | v52 |
| `bottom-sheet.css` (index) | v6 |
| `bottom-sheet.css` (tipologias/clube) | v11 |
| `guia.css` | v5 |
| `hero.css` | v5 |
| `data-hub.js` | v26 |
| `data-common.js` | v73 |
| `data-fall-house.js` | v25 |
| `data-winter-house.js` | v25 |
| `data-garden.js` | v25 |
| `data-terraco.js` | v25 |
| `main-hub.js` | v44 |
| `main-tipologia.js` | v16 |
| `main-clube.js` | v9 |
| `render-common.js` | v27 |
| `sugestao.js` | v8 |

---

## Acessibilidade

- `aria-hidden`, `role="dialog"`, `aria-modal`, `aria-labelledby` em todos os bottom sheets
- `aria-label` em todos os botões sem texto visível
- Tecla `ESC` fecha o sheet ativo
- `prefers-reduced-motion` desativa todas as animações CSS e JS
- `:focus-visible` com outline dourado em todos os elementos interativos
- Touch targets mínimos de 44px em todos os botões interativos
