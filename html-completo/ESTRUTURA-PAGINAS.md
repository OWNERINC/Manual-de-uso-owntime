# Own Time Home Club · Guia Digital v2
## Estrutura Completa das Páginas

> Atualizado em 2026-06-22. Gerado a partir dos data files reais.
> **Legenda:** ✅ Preenchido · ⚠️ Parcial (faltam dados operacionais) · ❌ Pendente (body vazio)

---

## VISÃO GERAL — ARQUITETURA DO PROJETO

| Arquivo | Página | Dados | Render |
|---|---|---|---|
| `index.html` | Hub Central (entrada) | `data-hub.js` | `main-hub.js` |
| `fall-house.html` | Fall House · Casa 4 Suítes | `data-common.js` + `data-fall-house.js` | `render-common.js` + `render-guia.js` + `main-tipologia.js` |
| `winter-house.html` | Winter House · Casa 3 Suítes | `data-common.js` + `data-winter-house.js` | `render-common.js` + `render-guia.js` + `main-tipologia.js` |
| `garden.html` | Garden · Apartamento Garden | `data-common.js` + `data-garden.js` | `render-common.js` + `render-guia.js` + `main-tipologia.js` |
| `terraco.html` | Terraço · Apartamento Cobertura | `data-common.js` + `data-terraco.js` | `render-common.js` + `render-guia.js` + `main-tipologia.js` |

---

## PÁGINA: index.html — Hub Central

**Função:** Tela de entrada do guia. Apresenta o Own Time e direciona para cada tipologia.

### Componentes renderizados

| Elemento | ID/Classe | Conteúdo |
|---|---|---|
| Label + Logo | `.hub__brand-label` + `.hub__intro-logo` | `assets/logo.png` |
| Texto intro | `.hub__intro-p` | Resumo sobre o Own Time |
| Botão "Ler mais" | `.bs-trigger` → `#sheet-sobre-owntime` | Abre bottom sheet com texto completo (4 parágrafos) |
| Grade de tipologias | `.hub__nav` | 4 botões de navegação com imagem de fundo |

### Tipologias no grid de entrada

| ID | Nome | Subtítulo | Área | Capacidade | Vagas | Imagem |
|---|---|---|---|---|---|---|
| `fall-house` | Fall House | Casa 4 Suítes | 448 m² | Até 10 hóspedes | 2 vagas | `casa 4 suites.png` |
| `winter-house` | Winter House | Casa 3 Suítes | 325 m² | Até 8 hóspedes | 2 vagas | `casa 3 suites.png` |
| `garden` | Garden | Apartamento | ≈ 60 m² | Para pequenos núcleos | 1 vaga | `apto garden.jpeg` |
| `terraco` | Cobertura | Apartamento | ≈ 60 m² | Para pequenos núcleos | 1 vaga | `apto cobertura.png` |

---

## SEÇÕES COMPARTILHADAS (todas as 4 tipologias)

Renderizadas a partir de `data-common.js` em todas as páginas de tipologia, sempre na mesma ordem e com o mesmo conteúdo.

### Ordem das seções em cada página de tipologia

```
#hero                 → Hero + imagem da tipologia
#tipologia-features   → Stats (área, suítes/quartos, hóspedes, vagas) + descrição
#orientacoes-gerais   → Orientações Gerais                          [COMMON]
#guia-container       → Guia da Casa (tabs por categoria)           [TIPOLOGIA-ESPECÍFICO]
#clube                → Club House / Amenities                       [COMMON]
#facilities           → Conforto & Tecnologia                        [COMMON]
#gastronomy           → Gastronomia                                  [COMMON]
#concierge            → Concierge · Comodidades Pay Per Use          [COMMON]
#seguranca-acesso     → Segurança & Acesso                           [COMMON]
#floating-action      → Botão flutuante (WhatsApp concierge)
```

---

### Orientações Gerais (`#orientacoes-gerais`) — COMMON

| Ícone | ID | Título | Status |
|---|---|---|---|
| `key` | `check-in` | Check-in & Segurança | ✅ |
| `alert-triangle` | `emergencia` | Em Caso de Emergência | ⚠️ ramal `[xx]` e WhatsApp `[xxxxxxxx]` a confirmar |
| `clock` | `checkout` | Check-out · Horário Padrão: 12h00 | ✅ |
| `paw-print` | `pet` | Espaço Pet | ✅ |

---

### Club House / Amenities (`#clube`) — COMMON

**Piscinas, Sauna, Fitness e Spa** são renderizados como cards com horário (seção `amenities` do COMMON):

| Ícone | ID | Título | Horário | Status |
|---|---|---|---|---|
| `waves` | `piscinas` | Piscinas | 08h00 às 22h00 | ✅ |
| `wind` | `sauna` | Sauna | 16h00 às 21h00 | ⚠️ confirmar horário |
| `dumbbell` | `fitness` | Fitness Center | 24 horas | ✅ |
| `leaf` | `spa` | Spa | 10h00 às 20h00 · Último atend. 19h00 | ✅ |

**Club House** (seção `clube` do COMMON — accordion/cards):

| Ícone | ID | Título | Status |
|---|---|---|---|
| `store` | `emporio` | Empório | ⚠️ corpo existe, catálogo pendente |
| `baby` | `kids` | Kids | ✅ 09h–21h |
| `users` | `teens` | Teens | ✅ 09h–21h |
| `trees` | `playground` | Playground Externo | ❌ |
| `watch` | `pulseira` | Acesso via Pulseira | ❌ |
| `car-front` | `golf-carts` | Carrinhos de Golf | ❌ |
| `plug` | `carregadores` | Carregadores Elétricos | ❌ |

---

### Conforto & Tecnologia — Facilities (`#facilities`) — COMMON

| Ícone | ID | Título | Status |
|---|---|---|---|
| `thermometer` | `climatizacao` | Climatização | ⚠️ corpo existe, 5 passos do fabricante pendentes |
| `flame` | `lareira` | Lareira | ⚠️ corpo existe, 4 passos de acendimento pendentes |
| `droplets` | `hidromassagem` | Hidromassagem | ✅ |
| `wifi` | `conectividade` | Conectividade | ⚠️ nome da rede, login e senha Wi-Fi pendentes |

---

### Gastronomia (`#gastronomy`) — COMMON

| Ícone | ID | Título | Horário | Status |
|---|---|---|---|---|
| `utensils` | `restaurante` | Restaurante | 12h00 às 22h00 · Último pedido 21h30 | ✅ ⚠️ confirmar horário |
| `coffee` | `coffee-shop` | Coffee Shop | 08h00 às 20h00 | ✅ ⚠️ confirmar horário |
| `wine` | `bar` | Bar | 17h00 às 23h00 | ✅ ⚠️ confirmar horário |
| `chef-hat` | `chef-em-casa` | Chef em Casa | Agendamento 48h de antecedência | ✅ |
| `salad` | `cafe-da-manha` | Café da Manhã | — | ✅ |

---

### Concierge · Comodidades Pay Per Use (`#concierge`) — COMMON

| Ícone | ID | Título | Status |
|---|---|---|---|
| `users` | `anfitrioes` | Time de Anfitriões | ✅ |
| `brush-cleaning` | `housekeeping` | Housekeeping Adicional | ✅ |
| `heart` | `babysitter` | Babysitter | ✅ |
| `activity` | `personal` | Personal Trainer | ✅ |
| `scissors` | `pet-care` | Pet Care | ✅ |
| `droplets` | `car-wash` | Car Wash | ✅ |
| `shopping-bag` | `shopper` | Private Shopper | ✅ |

---

### Segurança & Acesso (`#seguranca-acesso`) — COMMON

| Ícone | ID | Título | Status |
|---|---|---|---|
| `shield` | `monitoramento` | Monitoramento 24 Horas | ✅ |
| `scan-line` | `controle-acesso` | Controle Eletrônico de Acesso | ✅ |
| `shield-check` | `seguranca-perimetral` | Sistema de Segurança Perimetral | ✅ |

---

---

## FALL HOUSE · fall-house.html · Casa 4 Suítes

**Stats:** 448 m² · 4 Suítes · 10 Hóspedes · 2 Vagas
**Descrição:** Casa de alto padrão com 4 suítes, área gourmet completa e espaços projetados para convívio e conforto em meio à Serra Gaúcha.
**Destaques exclusivos:** Fogo de Chão · Forno de Pizza · Sala de Banho SPA Jacuzzi (2º andar) · Inverter · Lava e Seca · Filtro d'Água

### Guia da Casa — Geral

| Ícone | ID | Título | Status |
|---|---|---|---|
| `key` | `acesso` | Acesso às Unidades | ❌ |
| `lightbulb` | `iluminacao` | Iluminação | ❌ |
| `tv` | `tv` | TV | ❌ |
| `wind` | `ventilacao` | Ventilação / Exaustão | ❌ |
| `flame` | `piso-aquecido` | Piso Aquecido | ❌ |
| `phone` | `telefone` | Telefone | ❌ |
| `flame-kindling` | `fogo-chao` | Fogo de Chão | ❌ *(exclusivo Fall House)* |
| `thermometer` | `inverter` | Inverter | ❌ *(exclusivo Fall House)* |

### Guia da Casa — Cozinha

| Ícone | ID | Título | Status |
|---|---|---|---|
| `pizza` | `forno-pizza` | Forno de Pizza | ❌ *(exclusivo Fall House)* |
| `beef` | `churrasqueira` | Churrasqueira | ❌ |

### Guia da Casa — Segundo Andar

| Ícone | ID | Título | Status |
|---|---|---|---|
| `droplets` | `sala-banho` | Sala de Banho · SPA Jacuzzi | ❌ *(exclusivo Fall House)* |
| `thermometer` | `climatizacao-2a` | Climatização | ❌ |

### Guia da Casa — Eletros

| Ícone | ID | Título | Modelo | Status |
|---|---|---|---|---|
| `wine` | `adega` | Adega Climatizada | — | ❌ |
| `refrigerator` | `geladeira` | Geladeira | Brastemp Frost Free 500L | ✅ |
| `microwave` | `microondas` | Micro-ondas | Tramontina Glass Cook 25L | ✅ |
| `microwave` | `forno-eletrico` | Forno Elétrico | Tramontina Glass Cook 73L | ✅ |
| `coffee` | `cafeteira` | Máquina de Café | — | ❌ |
| `sparkles` | `lava-loucas` | Lava-louças | — | ❌ |
| `washing-machine` | `lava-seca` | Lava e Seca | — | ❌ *(exclusivo Fall/Winter)* |
| `cooking-pot` | `fogao` | Fogão + Depurador | — | ❌ |
| `filter` | `filtro-agua` | Filtro de Água | Consul Purificador Facilite | ✅ *(exclusivo Fall/Winter)* |

---

---

## WINTER HOUSE · winter-house.html · Casa 3 Suítes

**Stats:** 325 m² · 3 Suítes · 8 Hóspedes · 2 Vagas
**Descrição:** Casa de alto padrão com 3 suítes, área gourmet completa e espaços projetados para convívio em meio à Serra Gaúcha.
**Destaques exclusivos:** Lava e Seca · Filtro d'Água · (sem Fogo de Chão, Forno de Pizza, Sala de Banho SPA, Inverter)

### Guia da Casa — Geral

| Ícone | ID | Título | Status |
|---|---|---|---|
| `key` | `acesso` | Acesso às Unidades | ❌ |
| `lightbulb` | `iluminacao` | Iluminação | ❌ |
| `tv` | `tv` | TV | ❌ |
| `wind` | `ventilacao` | Ventilação / Exaustão | ❌ |
| `flame` | `piso-aquecido` | Piso Aquecido | ❌ |
| `phone` | `telefone` | Telefone | ❌ |

### Guia da Casa — Cozinha

| Ícone | ID | Título | Status |
|---|---|---|---|
| `beef` | `churrasqueira` | Churrasqueira | ❌ |

### Guia da Casa — Segundo Andar

| Ícone | ID | Título | Status |
|---|---|---|---|
| `thermometer` | `climatizacao-2a` | Climatização | ❌ |

### Guia da Casa — Eletros

| Ícone | ID | Título | Modelo | Status |
|---|---|---|---|---|
| `wine` | `adega` | Adega Climatizada | — | ❌ |
| `refrigerator` | `geladeira` | Geladeira | Brastemp Frost Free 500L | ✅ |
| `microwave` | `microondas` | Micro-ondas | Tramontina Glass Cook 25L | ✅ |
| `microwave` | `forno-eletrico` | Forno Elétrico | Tramontina Glass Cook 73L | ✅ |
| `coffee` | `cafeteira` | Máquina de Café | — | ❌ |
| `utensils` | `lava-loucas` | Lava-louças | — | ❌ |
| `washing-machine` | `lava-seca` | Lava e Seca | — | ❌ |
| `cooking-pot` | `fogao` | Fogão + Depurador | — | ❌ |
| `filter` | `filtro-agua` | Filtro de Água | Consul Purificador Facilite | ✅ |

---

---

## GARDEN · garden.html · Apartamento Garden

**Stats:** ≈ 60 m² · 1 Quarto · 1 Vaga
**Descrição:** Apartamento garden de alto padrão com acesso direto ao jardim e hidro jacuzzi exclusivo.
**Destaques exclusivos:** Banheira Hidro Jacuzzi no quarto · AR Central · Fogão Indução · Depurador de Ar (coifa)
**Diferenças vs. casas:** Sem Churrasqueira, sem Lava e Seca, sem Filtro d'Água, sem Segundo Andar. Ícone de ventilação é `fan` (não `wind`).

### Guia da Casa — Geral

| Ícone | ID | Título | Status |
|---|---|---|---|
| `key` | `acesso` | Acesso às Unidades | ❌ |
| `lightbulb` | `iluminacao` | Iluminação | ❌ |
| `tv` | `tv` | TV | ❌ |
| `fan` | `ventilacao` | Ventilação / Exaustão | ❌ |
| `thermometer` | `ar-central` | AR Central | ❌ *(exclusivo Garden/Terraço)* |
| `flame` | `piso-aquecido` | Piso Aquecido | ❌ |
| `phone` | `telefone` | Telefone | ❌ |

### Guia da Casa — Cozinha

| Ícone | ID | Título | Status |
|---|---|---|---|
| `cooking-pot` | `fogao-inducao` | Fogão Indução | ❌ *(exclusivo Garden/Terraço)* |

### Guia da Casa — Eletros

| Ícone | ID | Título | Modelo | Status |
|---|---|---|---|---|
| `wine` | `adega` | Adega Climatizada | — | ❌ |
| `refrigerator` | `geladeira` | Geladeira | Tramontina Duplex Inverse 435L | ✅ |
| `microwave` | `microondas` | Micro-ondas | Tramontina Glass Cook 25L | ✅ |
| `microwave` | `forno-eletrico` | Forno Elétrico | Tramontina Epic T Smart 60 | ✅ |
| `coffee` | `cafeteira` | Máquina de Café | — | ❌ |
| `utensils` | `lava-loucas` | Lava-louças | — | ❌ |
| `air-vent` | `depurador` | Depurador de Ar | Tramontina Coifa Square Isla 40 | ✅ *(exclusivo Garden/Terraço)* |

### Guia da Casa — Quartos

| Ícone | ID | Título | Status |
|---|---|---|---|
| `droplets` | `hidro-jacuzzi` | Banheira Hidro Jacuzzi | ❌ *(exclusivo Garden)* |

---

---

## TERRAÇO · terraco.html · Apartamento Cobertura

**Stats:** ≈ 60 m² · 1 Quarto · 1 Vaga
**Descrição:** Apartamento cobertura de alto padrão com mini spa terrace jacuzzi exclusivo no terraço privativo.
**Destaques exclusivos:** Mini Spa Terrace Jacuzzi (no terraço) · AR Central · Fogão Indução · Depurador de Ar
**Diferenças vs. Garden:** Sem seção `quartos` com Hidro Jacuzzi. Tem seção `mini-spa` com Jacuzzi no terraço.

### Guia da Casa — Geral

| Ícone | ID | Título | Status |
|---|---|---|---|
| `key` | `acesso` | Acesso às Unidades | ❌ |
| `lightbulb` | `iluminacao` | Iluminação | ❌ |
| `tv` | `tv` | TV | ❌ |
| `fan` | `ventilacao` | Ventilação / Exaustão | ❌ |
| `thermometer` | `ar-central` | AR Central | ❌ |
| `flame` | `piso-aquecido` | Piso Aquecido | ❌ |
| `phone` | `telefone` | Telefone | ❌ |

### Guia da Casa — Cozinha

| Ícone | ID | Título | Status |
|---|---|---|---|
| `cooking-pot` | `fogao-inducao` | Fogão Indução | ❌ |

### Guia da Casa — Eletros

| Ícone | ID | Título | Modelo | Status |
|---|---|---|---|---|
| `wine` | `adega` | Adega Climatizada | — | ❌ |
| `refrigerator` | `geladeira` | Geladeira | Tramontina Duplex Inverse 435L | ✅ |
| `microwave` | `microondas` | Micro-ondas | Tramontina Glass Cook 25L | ✅ |
| `microwave` | `forno-eletrico` | Forno Elétrico | Tramontina Epic T Smart 60 | ✅ |
| `coffee` | `cafeteira` | Máquina de Café | — | ❌ |
| `utensils` | `lava-loucas` | Lava-louças | — | ❌ |
| `air-vent` | `depurador` | Depurador de Ar | Tramontina Coifa Square Isla 40 | ✅ |

### Guia da Casa — Mini Spa Terrace

| Ícone | ID | Título | Status |
|---|---|---|---|
| `sparkles` | `spa-jacuzzi` | Mini Spa Terrace Jacuzzi | ❌ *(exclusivo Terraço)* |

---

---

## RESUMO DE STATUS DO CONTEÚDO

### Conteúdo preenchido e pronto (✅)

**COMMON:**
- Orientações Gerais: Check-in, Emergência, Check-out, Pet
- Amenities: Piscinas, Sauna, Fitness, Spa
- Club House: Kids, Teens
- Facilities: Hidromassagem
- Gastronomia: Restaurante, Coffee Shop, Bar, Chef em Casa, Café da Manhã
- Concierge: todos os 7 itens
- Segurança: todos os 3 itens

**Eletros com instrução de uso documentada:**
- Geladeira Brastemp 500L (Fall/Winter) · Tramontina Duplex Inverse 435L (Garden/Terraço)
- Micro-ondas Tramontina 25L (todas)
- Forno Elétrico: Tramontina 73L (Fall/Winter) · Tramontina Epic T Smart 60 (Garden/Terraço)
- Filtro d'Água Consul Facilite (Fall/Winter)
- Depurador de Ar Tramontina Coifa Square Isla 40 (Garden/Terraço)

---

### Conteúdo parcial — dados operacionais pendentes (⚠️)

| Seção | O que falta | Arquivo |
|---|---|---|
| Climatização (COMMON) | 5 passos de instrução do fabricante | `data-common.js` → `facilities[0].body` |
| Lareira (COMMON) | 4 passos de acendimento do fabricante | `data-common.js` → `facilities[1].body` |
| Conectividade (COMMON) | Nome da rede, login, senha do Wi-Fi | `data-common.js` → `facilities[3].body` |
| Empório (COMMON) | Catálogo e horário de funcionamento | `data-common.js` → `clube[0].body` |
| Em Caso de Emergência | Ramal `[xx]` e WhatsApp `[xxxxxxxx]` | `data-common.js` → `orientacoesGerais[1].body` |
| WhatsApp concierge | Substituir `+5554999999999` pelo número real | `data-common.js` → `brand.concierge.whatsapp` |
| Botão "Ler mais" (hub) | Substituir `+5554999999999` pelo número real | `data-hub.js` → `intro.ctaWhatsapp` |

---

### Conteúdo totalmente pendente — body vazio (❌)

**COMMON:**
- Club House: Playground Externo · Acesso via Pulseira · Carrinhos de Golf · Carregadores Elétricos

**Guia da Casa (todas as tipologias):**
- Acesso às Unidades · Iluminação · TV · Ventilação / Exaustão · Piso Aquecido · Telefone
- Adega Climatizada · Máquina de Café · Lava-louças · Fogão

**Guia da Casa (exclusivos por tipologia):**

| Item | Tipologia |
|---|---|
| Fogo de Chão | Fall House |
| Inverter | Fall House |
| Forno de Pizza | Fall House |
| Churrasqueira | Fall House e Winter House |
| Sala de Banho · SPA Jacuzzi (2º andar) | Fall House |
| Climatização (2º andar) | Fall House e Winter House |
| Lava e Seca | Fall House e Winter House |
| AR Central | Garden e Terraço |
| Fogão Indução | Garden e Terraço |
| Banheira Hidro Jacuzzi (quarto) | Garden |
| Mini Spa Terrace Jacuzzi | Terraço |

---

### Dados operacionais a confirmar com a operação

| Campo | Valor atual no código | Ação necessária |
|---|---|---|
| Ramal de emergência | `[xx]` | Confirmar ramal da recepção |
| WhatsApp emergência | `[xxxxxxxx]` | Confirmar número |
| WhatsApp concierge | `+5554999999999` | Substituir pelo número real (2 arquivos) |
| Horário Sauna | 16h00 às 21h00 | Confirmar se é definitivo |
| Horário Restaurante | 12h00 às 22h00 | Confirmar se é definitivo |
| Horário Coffee Shop | 08h00 às 20h00 | Confirmar se é definitivo |
| Horário Bar | 17h00 às 23h00 | Confirmar se é definitivo |
| Horário Check-out | 12h00 | Confirmar se é definitivo |
| Rede Wi-Fi | `[nome da rede]` / `[login]` / `[senha]` | Fornecer credenciais reais |
