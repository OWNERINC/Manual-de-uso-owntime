# Own Time Home Club · Gramado — Estrutura de Páginas

**URL:** https://owntime-diretorio-lp.web.app  
**Stack:** HTML + CSS + JS (vanilla) · Firebase Hosting · GSAP ScrollTrigger

---

## Fluxo de Navegação

```
index.html  (Hub de Seleção)
  ├── fall-house.html    — Casa 4 Suítes · 448 m²
  ├── winter-house.html  — Casa 3 Suítes · 325 m²
  ├── garden.html        — Apartamento Garden · ≈ 60 m²
  └── terraco.html       — Apartamento Cobertura · ≈ 60 m²
```

---

## 1. index.html — Hub de Seleção de Tipologias

> Grid 2×2 no mobile, 4 colunas no desktop. Dados em `data-hub.js`.

- **Título da página** — "Onde você *está*?"
- **Grid de Cards de Tipologia** `hub__grid`
  - **Card: Fall House**
    - Imagem de fundo (foto da casa)
    - Subtitle: "Casa 4 Suítes"
    - Nome: "Fall House"
    - Link → `fall-house.html`
  - **Card: Winter House**
    - Imagem de fundo
    - Subtitle: "Casa 3 Suítes"
    - Nome: "Winter House"
    - Link → `winter-house.html`
  - **Card: Garden**
    - Imagem de fundo
    - Subtitle: "Apartamento"
    - Nome: "Garden"
    - Link → `garden.html`
  - **Card: Cobertura**
    - Imagem de fundo
    - Subtitle: "Apartamento"
    - Nome: "Cobertura"
    - Link → `terraco.html`

---

## 2–5. Páginas de Tipologia

> Todas as 4 tipologias compartilham a mesma estrutura de seções e componentes.  
> O que varia é o arquivo de dados (`data-[tipologia].js`) e o conteúdo do **Guia da Casa**.

### Elemento Global

- **Link "← Início"** `page-back` — fixo no topo, retorna ao `index.html`
- **Barra Flutuante** `floating-action` — fixa no rodapé
  - Horário de check-out: **12h00**
  - Botão WhatsApp → Concierge (link `wa.me`)

---

### Seção 1 — Hero `#hero`

> Fundo: foto da tipologia. Animação de entrada com GSAP.

- Label da tipologia *(ex: "Fall House · Casa 4 Suítes · Diretório Digital")*
- Headline em destaque *(ex: "Fall House.")*
- Subtítulo descritivo
- Localização: "Gramado · Serra Gaúcha · Brasil"
- Indicador de scroll "Explorar ↓"

---

### Seção 2 — Features da Tipologia `#tipologia-features`

- **Stats** em linha horizontal
  - Área total *(ex: 448 m²)*
  - Número de suítes *(ex: 4)*
  - Capacidade de hóspedes *(ex: 10)*
  - Vagas de garagem *(ex: 2)*
- Descrição resumida da tipologia

---

### Seção 3 — Orientações Gerais `#orientacoes-gerais`

> Lista de botões que abrem Bottom Sheets. Dados em `data-common.js`.

- **Consumos** — Energia, Água e Gás
- **Café da Manhã**
- **Carrinho de Bebidas**

---

### Seção 4 — Guia da Casa `#guia-container`

> Gerado dinamicamente por `render-guia.js`. Cada tipologia tem seu próprio conjunto de abas e itens (`data-[tipologia].js`). Cada item abre um **Bottom Sheet** com instruções.

#### Fall House — abas e itens:

- **Geral**
  - Acesso às Unidades · Iluminação · TV · Ventilação/Exaustão · Climatização · Conectividade · Piso Aquecido · Telefone · Fogo de Chão · Inverter
- **Cozinha**
  - Forno de Pizza · Churrasqueira
- **Sala**
  - Lareira
- **Segundo Andar**
  - Sala de Banho · SPA Jacuzzi · Iluminação · Climatização · Piso Aquecido
- **Eletros**
  - Adega Climatizada · Geladeira · Micro-ondas · Forno Elétrico · Máquina de Café · Lava-louças · Lava e Seca · Fogão + Depurador · Filtro de Água

> *Winter House, Garden e Cobertura têm abas e itens próprios conforme a planta de cada tipologia.*

---

### Seção 5 — Club House `#clube`

> Diretório do clube. Dados em `data-common.js`. Cada item abre um Bottom Sheet.

- Empório · Kids · Teens · Piscina · Sauna Seca · Sauna Húmida · Spa · Academia · Playground Externo · Acesso via Pulseira · Carrinhos de Golf · Carregadores Elétricos

---

### Seção 6 — Conforto & Tecnologia `#facilities`

> Sistemas da casa. Dados em `data-common.js`. Cada item abre um Bottom Sheet com instruções de uso.

- **Climatização** — Ar-condicionado split inverter
- **Lareira** — Regras de uso e reposição de lenha
- **Hidromassagem** — Horários (08h–22h) e orientações
- **Conectividade** — Wi-Fi e credenciais de acesso

---

### Seção 7 — Club House & Bem-Estar `#amenities`

> Cards informativos (sem bottom sheet). Dados em `data-common.js`.

- **Piscinas** — 07h–22h · piscina aquecida coberta + ao ar livre
- **Sauna** — 08h–21h · finlandesa e a vapor
- **Fitness Center** — 24 horas · equipamentos Technogym
- **Spa** *(destaque)* — Sob agendamento · 24h de antecedência

---

### Seção 8 — Gastronomia `#gastronomy`

> Botões que abrem Bottom Sheets com horários e descrição. Dados em `data-common.js`.

- **Restaurante** — Café 07h–10h · Jantar 19h–22h
- **Coffee Shop** — 08h–18h
- **Bar** — 12h–00h
- **Chef em Casa** — Agendamento com 48h de antecedência via concierge

---

### Seção 9 — Comodidades Pay Per Use `#concierge`

> Serviços sob demanda. Dados em `data-common.js`. Cada item abre um Bottom Sheet.

- **Time de Anfitriões** — Disponível 24h
- **Personal Trainer** — Sessões individuais ou em grupo
- **Pet Care** — Pet Walker e Banho & Tosa (24h de antecedência)
- **Car Wash** — Lavagem completa durante a estadia
- **Private Shopper** — Curadoria de compras e presentes locais

> Nota informativa: *"Todos os serviços pay per use são cobrados à parte."*

---

## Componente: Bottom Sheet

> Drawer que desliza de baixo para cima ao clicar em qualquer item do guia, clube, facilities, gastronomia ou concierge.

- **Header**
  - Ícone Lucide
  - Título do item
- **Body**
  - Conteúdo em texto *(ou placeholder "Instruções em breve.")*
  - Horário de funcionamento *(quando aplicável)*
- **Footer**
  - Botão "← Voltar" (fecha o sheet)

---

## Arquitetura de Dados

| Arquivo | Conteúdo |
|---------|----------|
| `data-hub.js` | Cards do index (nome, subtitle, imagem, link) |
| `data-common.js` | Orientações gerais, clube, facilities, amenities, gastronomia, concierge, brand |
| `data-fall-house.js` | Hero, stats, descrição e guia da Fall House |
| `data-winter-house.js` | Hero, stats, descrição e guia da Winter House |
| `data-garden.js` | Hero, stats, descrição e guia do Garden |
| `data-terraco.js` | Hero, stats, descrição e guia da Cobertura |

## Arquitetura de Render

| Arquivo | O que renderiza |
|---------|-----------------|
| `render-common.js` | Hero, Features, Orientações, Clube, Facilities, Amenities, Gastronomia, Concierge, Floating Action |
| `render-guia.js` | Guia da Casa (seções e itens por tipologia) |
| `main-hub.js` | Grid de cards do index |
| `main-tipologia.js` | Orquestra o render de todas as seções de cada tipologia |
