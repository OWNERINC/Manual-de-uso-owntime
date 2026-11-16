// Run: node html-completo/tests/material-loans.cjs
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { createHash } = require('node:crypto');
const vm = require('node:vm');

const root = join(__dirname, '..');
const source = readFileSync(join(root, 'assets/js/data-common.js'), 'utf8');
const sheets = [];
const context = vm.createContext({
  document: {
    createElement: () => ({ setAttribute() {} }),
    body: { appendChild: sheet => sheets.push(sheet) }
  }
});
for (const file of ['data-common.js', 'render-common.js']) {
  vm.runInContext(readFileSync(join(root, 'assets/js', file), 'utf8'), context);
}
const common = vm.runInContext('COMMON', context);
const hosts = common.concierge.filter(item => item.id === 'anfitrioes');
assert.equal(hosts.length, 1, 'Keep a single Time de Anfitriões entry');
const host = hosts[0];
context._appendSheet(host.id, host.icon, host.title, host.body);
const html = sheets.at(-1).innerHTML;
assert.ok(html.includes('Empréstimo de materiais'));
for (const item of ['Berço', 'Cadeira de rodas', 'Carrinho de bebê', 'Banheira de bebê', 'Ferro e tábua de passar', 'Steamer']) {
  assert.ok(html.includes(`<li>${item}</li>`), item);
}
assert.ok(html.includes('diretamente ao Time de Anfitriões'));
assert.ok(html.includes('unidades são limitadas'));
assert.ok(html.includes('sujeito à disponibilidade'));
assert.ok(html.includes('href="https://wa.me/555434210620"'));
assert.ok(html.includes('ramal 9'));
assert.ok(html.includes('ajustes na configuração das camas'));
assert.ok(html.includes('itens adicionais de enxoval'));

const hash = createHash('sha256').update(source).digest('hex').slice(0, 12);
for (const page of ['fall-house', 'winter-house', 'garden', 'terraco']) {
  const pageHtml = readFileSync(join(root, `${page}.html`), 'utf8');
  assert.ok(pageHtml.includes('id="concierge"'), `${page}: concierge section`);
  assert.ok(pageHtml.includes(`assets/js/data-common.js?v=${hash}`), `${page}: current shared data`);
  assert.ok(pageHtml.includes('assets/js/main-tipologia.js'), `${page}: shared initialization`);
}
console.log('OK: material loans in Time de Anfitriões, complete list, availability notice and existing contact across all four unit pages.');
