# Wi-Fi Highlights Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Destacar a rede, os formatos de login e a senha nos painéis de Wi-Fi.

**Architecture:** Preservar `HUB.wifi`, `renderWifiSheet()` e a facilidade
`conectividade` de `COMMON`. Usar marcação equivalente nos dois arquivos de
dados e CSS restrito às classes `wifi-*`. Não alterar o componente genérico
de painel nem introduzir dependências.

**Tech Stack:** HTML, CSS, JavaScript estático, Lucide existente, Node e testes
de navegador.

## Global Constraints

- Rede `OwnHospedes`; opção `Sou hóspede`; casas `0` + número, exemplo `013`.
- Apartamentos com hífen antes da letra, exemplo `101-A`.
- Senha para casas e apartamentos: último sobrenome; sem botão de copiar senha.
- Preservar suporte, cobertura da rede, cardápios e metragens.
- Usar os tokens atuais, Roobert, verde-pinheiro e dourado; sem novos recursos.
- Layout sem transbordamento em 320–390 px, com rolagem interna do painel.
- Não publicar sem autorização. Não descartar ou commitar alterações anteriores.

## Steps

### Task 1: Painel de Wi-Fi com hierarquia visual

**Files:**
- Modify: `html-completo/assets/js/data-hub.js`
- Modify: `html-completo/assets/js/data-common.js`
- Modify: `html-completo/assets/js/main-hub.js`
- Modify: `html-completo/assets/css/bottom-sheet.css`
- Test: `html-completo/tests/wifi.cjs`
- Test: `html-completo/tests/wifi.html`

**Interfaces:**
- Consumes: `HUB.wifi = { ssid: string, instructions: string }`,
  `COMMON.facilities.find(item => item.id === 'conectividade').body`.
- Produces: `.wifi-network`, `.wifi-guide`, `.wifi-access`,
  `.wifi-example__value`, `.wifi-password`; os mesmos seletores nos dois painéis.
- Preserves: `renderWifiSheet()`, IDs dos painéis e gatilhos, suporte e eventos.

- [x] **Step 1: Testes primeiro.** Atualizar os dois testes para exigir a
  marcação estruturada, dois blocos, exemplos maiores e senha compartilhada.
  No teste Node, usar estas asserções em cada painel renderizado:

```js
assert.ok(html.includes('class="wifi-network"'));
assert.equal((html.match(/class="wifi-access"/g) || []).length, 2);
assert.equal((html.match(/class="wifi-example__value"/g) || []).length, 2);
assert.equal((html.match(/class="wifi-password"/g) || []).length, 1);
assert.ok(html.includes('Para casas e apartamentos'));
```

- [x] **Step 2: Confirmar falha antes de implementar.**

```bash
node html-completo/tests/wifi.cjs
```

  Esperado: falha por ausência de `.wifi-network`.

- [x] **Step 3: Implementar marcação.** Em `HUB.wifi.instructions`, substituir
  a lista por `.wifi-guide`: instrução de acesso, dois `.wifi-access` com
  títulos e ícones, exemplos e `.wifi-password` comum. Usar a mesma string
  dentro do `body` de Conectividade. Rede antes das instruções nos dois
  consumidores. Mover a frase de cobertura da home para depois das instruções.
  Preservar a seção de informações e o CTA de contato das unidades.

  Estrutura de referência para o exemplo, sem interação:

```html
<p class="wifi-example">
  <span class="wifi-example__label">Exemplo · Casa 13</span>
  <strong class="wifi-example__value">013</strong>
</p>
```

- [x] **Step 4: Implementar CSS escopado.** Usar fundo de superfície nas duas
  acomodações, sem cartões aninhados. Aplicar `min-width: 0`, largura fluida,
  rótulos legíveis e exemplos com `font-variant-numeric: tabular-nums`.
  Rede em `clamp(1.5rem, 6vw, 2rem)`, exemplos em `2rem`; texto branco e
  dourado apenas nos destaques. Senha em faixa verde discreta com texto branco.
  Não alterar regras genéricas de `.bottom-sheet` ou `.bs-steps`.

- [x] **Step 5: Sincronizar hashes e testes.** Calcular SHA-256 dos arquivos
  alterados e atualizar referências nos seis HTMLs consumidores por patch.
  Ajustar o teste de navegador para conferir as duas acomodações, senha comum,
  tamanhos e ausência de transbordamento.

```bash
node html-completo/tests/wifi.cjs
node html-completo/tests/unit-areas.cjs
node html-completo/tests/material-loans.cjs
node html-completo/tests/discount.cjs
python scripts/cache_bust_static_assets.py --root html-completo --check
git diff --check
```

- [x] **Step 6: Verificação visual e revisão.** Servir a v2 localmente, executar
  `tests/wifi.html`, conferir home em 320/390 px e desktop e Conectividade em
  uma unidade. Verificar rolagem interna, foco e fechamento. Pedir revisão
  somente leitura do diff, informando as alterações anteriores fora do escopo.
  Encerrar o servidor e manter o resultado local para aprovação de publicação.

## Execution

Execução inline nesta sessão, seguindo a aprovação “Aprovar e implementar”.
Revisão independente ao final; nenhuma sessão separada de implementação.
