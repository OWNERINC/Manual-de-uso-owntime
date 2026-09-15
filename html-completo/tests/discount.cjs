// Run: node html-completo/tests/discount.cjs
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');

const sheets = [];
const context = vm.createContext({
  document: {
    createElement: () => ({ setAttribute() {} }),
    body: { appendChild: sheet => sheets.push(sheet) }
  }
});
for (const file of ['data-common.js', 'render-common.js']) {
  vm.runInContext(readFileSync(join(__dirname, '../assets/js', file), 'utf8'), context);
}
const common = vm.runInContext('COMMON', context);
const notice = 'Proprietários Owntime têm 50% de desconto.';
const club = common.gastronomiaClube;
const breakfast = common.gastronomy.find(item => item.id === 'cafe-da-manha');
assert.equal(club.filter(item => item.discount).map(item => item.id).join(','), 'cafe-manha,restaurante');
assert.equal(breakfast.discount, notice);
assert.equal(JSON.stringify(common).split(notice).length - 1, 3, 'No old body/tab/Spa notices');

for (const item of [...club, breakfast, common.amenities.find(item => item.id === 'spa')]) {
  context._appendSheet(item.id, item.icon, item.title, item.body || item.note || 'Tabs', item.logo, item.discount);
  const html = sheets.at(-1).innerHTML;
  assert.equal(html.split(notice).length - 1, item.discount ? 1 : 0, item.id);
  if (item.discount) {
    assert.ok(html.indexOf('</h3>') < html.indexOf(notice), 'Notice follows title');
    assert.ok(html.indexOf(notice) < html.indexOf('</header>'), 'Notice stays above hours and tabs');
  }
}
console.log('OK: discount only on breakfast/restaurant, once in each sheet header.');
