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

- Fundo: `bg home.webp` com `rgba(0,0,0,0.80)` de overlay
- Tela única com scroll interno (`overflow-y: auto` no container)
- Logo + tagline + botões Wi-Fi/Horários no topo
- Lista vertical de 5 tipologias: nome em Cormorant Garamond italic + descritor em Roboto cinza
- Clicar em qualquer tipologia navega diretamente para a página correspondente
- Scroll hint removido — a navegação mantém o scroll natural

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
- `gastronomy` — chef em casa e cesta de café da manhã (exclusivo das tipologias)
- `gastronomiaClube` — restaurante, coffee shop, bar (exclusivo do Club House); itens com `hidden: true` são filtrados do grid
- `concierge` — housekeeping, babysitter, personal trainer, pet care, car wash
- `clube` — empório, kids, teens, playground, pulseira, golf carts, carregadores
- `segurancaAcesso` — monitoramento, controle eletrônico, segurança perimetral
- `telefonesUteis` — emergência, saúde, Ownerinc, gastronomia, mercados
- `brand` — nome, localização, número do concierge, horário de check-out

**`data-{tipologia}.js`** — exporta o objeto `TIPOLOGIA` com o conteúdo exclusivo de cada unidade:
- `hero` — label, título, subtítulo, imagem
- `stats` — área, suítes, hóspedes, vagas
- `description` — frase descritiva
- `housekeepingDay` — dia da semana da limpeza inclusa
- `facilityExcludes` — array de IDs a remover de `COMMON.facilities` (ex.: `['jacuzzi']` na Fall House e Cobertura)
- `facilityOverrides` — objeto `{ [id]: { ...campos } }` para sobrescrever campos de um item compartilhado
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
        ├── renderTipologiaGrid()   ← hub com lista
        ├── renderHorariosSheet()
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
| `hub.css` | v53 |
| `bottom-sheet.css` (index) | v6 |
| `bottom-sheet.css` (tipologias/clube) | v11 |
| `guia.css` | v5 |
| `hero.css` | v5 |
| `data-hub.js` | v28 |
| `data-common.js` | v80 |
| `data-fall-house.js` | v34 |
| `data-winter-house.js` | v26 |
| `data-garden.js` | v28 |
| `data-terraco.js` | v31 |
| `main-hub.js` | v44 |
| `main-tipologia.js` | v16 |
| `main-clube.js` | v10 |
| `render-common.js` | v29 |
| `sugestao.js` | v8 |

---

## Acessibilidade

- `aria-hidden`, `role="dialog"`, `aria-modal`, `aria-labelledby` em todos os bottom sheets
- `aria-label` em todos os botões sem texto visível
- Tecla `ESC` fecha o sheet ativo
- `prefers-reduced-motion` desativa todas as animações CSS e JS
- `:focus-visible` com outline dourado em todos os elementos interativos
- Touch targets mínimos de 44px em todos os botões interativos

---

## Textos Originais — Itens em Soft Opening (restaurar quando disponíveis)

> Estes textos foram substituídos por "Soft Opening" temporariamente. Copie o conteúdo abaixo de volta para os respectivos arquivos para reativar cada serviço.

---

### Mini Spa Terrace Jacuzzi
**Arquivo:** `assets/js/data-terraco.js` → `guia[id='mini-spa'] > items[id='spa-jacuzzi'] > body`

```
'<ul class="bs-steps"><li><strong>Exclusividade da Cobertura:</strong> Localizado na sua sacada, o Mini Spa oferece uma experiência de relaxamento premium ao ar livre, o cenário perfeito para apreciar a vista e o clima típico da serra.</li><li><strong>Acionamento e Bem-Estar:</strong> Verifique se a água cobre completamente os jatos antes de ligar o sistema de hidromassagem e aquecimento. Para um aproveitamento seguro e revitalizante, sugerimos sessões de 20 a 30 minutos.</li><li><strong>Preservação e Cuidado:</strong> Para garantir a pureza da água e o pleno funcionamento do sistema, não é permitido o consumo de alimentos e bebidas no interior do equipamento. Utilize exclusivamente sais e espumas homologados para spas.</li></ul>'
```

---

### Jacuzzi Compartilhada (Garden e Winter House)
**Arquivo:** `assets/js/data-common.js` → `facilities[id='jacuzzi'] > body`

```
'<p class="bs-model-tag">Antes de utilizar</p><ul class="bs-steps"><li>Certifique-se de que o nível da água esteja acima dos jatos antes de acionar a hidromassagem ou o aquecimento.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Recomendação</p><ul class="bs-steps"><li>Para um aproveitamento seguro e confortável, sugerimos sessões de, no máximo, 30 minutos.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>Não consuma alimentos ou bebidas no interior da banheira.</li><li>Utilize apenas sais e espumas próprios para banheiras de hidromassagem.</li></ul>'
```

---

### Sala de Banho · SPA Jacuzzi (Fall House)
**Arquivo:** `assets/js/data-fall-house.js` → `cozinha[id='sala-banho'] > body`
> Já estava em soft opening antes desta rodada. Não há texto anterior para restaurar.

---

### Restaurante
**Arquivo:** `assets/js/data-common.js` → `gastronomiaClube[id='restaurante']`
> Para reativar o botão no clube, remova também o campo `hidden: true` do item.

```js
// hours original:
'12h às 22h · com o último pedido às 21h30'

// body original:
'<ul class="bs-steps"><li><strong>Localização:</strong> No andar térreo do Club House.</li><li><strong>Ambientes:</strong> Desfrute do serviço à la carte no conforto do nosso salão interno ou no charme da área externa.</li><li><strong>Restrições Alimentares:</strong> Nosso cardápio foi planejado para diferentes paladares. Nossa equipe está à disposição para detalhar ingredientes e adaptar pratos conforme as suas necessidades.</li><li><strong>Segurança:</strong> Ambiente monitorado continuamente por câmeras de segurança (CFTV).</li></ul><a href="https://wa.me/5554999588947?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20o%20card%C3%A1pio%20do%20restaurante!" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Ver cardápio</a>'
```

---

### Coffee Shop
**Arquivo:** `assets/js/data-common.js` → `gastronomiaClube[id='coffee-shop']`

```js
// hours original:
'8h às 20h'

// body original:
'<p class="bs-model-tag">O que você encontra</p><ul class="bs-steps"><li>Cafés especiais, chás, lanches leves e confeitaria artesanal para aproveitar uma pausa a qualquer hora do dia.</li></ul><ul class="bs-steps" style="margin-top:0.75rem"><li><strong>Segurança:</strong> O ambiente é monitorado por câmeras de segurança (CFTV).</li></ul><a href="https://wa.me/5554999588947?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20o%20card%C3%A1pio%20do%20Coffee%20Shop!" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Ver cardápio</a>'
```

---

### Bar
**Arquivo:** `assets/js/data-common.js` → `gastronomiaClube[id='bar']`

```js
// hours original:
'17h às 23h'

// body original:
'<p class="bs-model-tag">Drinks</p><ul class="bs-steps"><li>Clássicos, autorais e boas conversas costumam combinar. Escolha o seu favorito e aproveite.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Vinhos</p><ul class="bs-steps"><li>Nossa carta reúne rótulos nacionais e internacionais, com um olhar especial para os vinhos produzidos na Serra Gaúcha.</li></ul><a href="https://wa.me/5554999588947?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20o%20card%C3%A1pio%20do%20Bar!" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Ver cardápio</a>'
```

---

### Saunas
**Arquivo:** `assets/js/data-common.js` → `amenities[id='sauna']`

```js
// hours original:
'8h às 22h'

// note original:
'<ul class="bs-steps"><li>As saunas estão disponíveis diariamente para seu momento de relaxamento.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Proibido</p><ul class="bs-steps"><li>Entrada com bebidas, itens de vidro, ou caixas de som.</li><li>Captação de imagens (Fotos e Vídeos), protegendo a privacidade de todos.</li><li>Bebidas alcoólicas</li><li>Fumar</li></ul><ul class="bs-steps" style="margin-top:1rem"><li><strong>Segurança:</strong> Ambiente monitorado continuamente por câmeras de segurança (CFTV).</li></ul>'
```

---

### Spa (ex-Spa Pocahy — título renomeado para "Spa")
**Arquivo:** `assets/js/data-common.js` → `amenities[id='spa']`

```js
// hours original:
'10h às 19h · Segunda a Sábado'

// note original:
'<ul class="bs-steps"><li>Massagens terapêuticas e relaxantes, tratamentos faciais, rituais corporais e terapias holísticas para um momento de cuidado e bem-estar.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Agendamentos</p><ul class="bs-steps"><li>Recomendamos realizar sua reserva com antecedência, especialmente em períodos de maior movimento.</li><li>Cancelamentos devem ser informados com, no mínimo, 5 horas de antecedência.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Faixa etária</p><ul class="bs-steps"><li>O spa é destinado a hóspedes a partir de 16 anos. Tratamentos infantis estão disponíveis em modalidades específicas, sempre com acompanhamento de um responsável.</li></ul><ul class="bs-steps" style="margin-top:1rem"><li><strong>Segurança:</strong> O ambiente é monitorado por câmeras de segurança (CFTV).</li></ul><div style="display:flex;flex-direction:column;gap:0.5rem;margin-top:1.25rem"><a href="https://wa.me/5554984111140?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20tratamentos%20do%20Spa%20do%20Owntime!" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Conheça os tratamentos</a><a href="https://wa.me/5554984111140?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20no%20Spa%20do%20Owntime!" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:transparent;color:var(--color-accent);border:1px solid var(--color-accent);border-radius:8px;text-decoration:none;font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="calendar-check"></i> Agendar</a></div>'
```
