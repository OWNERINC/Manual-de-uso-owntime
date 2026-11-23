// Run: node html-completo/tests/wifi.cjs
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { createHash } = require('node:crypto');
const vm = require('node:vm');

const root = join(__dirname, '..');
const sheets = [];
const context = vm.createContext({
  document: {
    addEventListener() {},
    createElement: () => ({ setAttribute() {} }),
    body: { appendChild: sheet => sheets.push(sheet) }
  }
});
for (const file of ['data-hub.js', 'main-hub.js', 'data-common.js', 'render-common.js']) {
  vm.runInContext(readFileSync(join(root, 'assets/js', file), 'utf8'), context);
}
const wifi = vm.runInContext('HUB.wifi', context);
const facility = vm.runInContext('COMMON.facilities.find(item => item.id === "conectividade")', context);
assert.equal(wifi.ssid, 'OwnHospedes');
assert.equal(wifi.password, undefined, 'No shared fixed password');
assert.ok(facility.body.includes(wifi.instructions), 'Identical login instructions on home and unit pages');

context.renderWifiSheet();
const home = sheets.at(-1);
assert.equal(home.id, 'sheet-wifi');
context._appendSheet('sheet-facility-conectividade', facility.icon, facility.title, facility.body);
const unit = sheets.at(-1);
for (const sheet of [home, unit]) {
  const html = sheet.innerHTML;
  for (const expected of [
    'OwnHospedes', 'Sou hóspede', 'Casas', 'número 0 + número da casa',
    'Casa 13', '013', 'Apartamentos',
    'número do apartamento com hífen antes da letra', 'Apartamento 101A',
    '101-A', 'Último sobrenome', 'Confira atentamente os dados informados'
  ]) assert.ok(html.includes(expected), `${sheet.id}: ${expected}`);
  assert.ok(html.includes('class="wifi-network"'), `${sheet.id}: prominent network`);
  assert.equal((html.match(/class="wifi-access"/g) || []).length, 2, `${sheet.id}: distinct accommodation blocks`);
  assert.equal((html.match(/class="wifi-example__value"/g) || []).length, 2, `${sheet.id}: highlighted login examples`);
  assert.equal((html.match(/class="wifi-password"/g) || []).length, 1, `${sheet.id}: one shared password callout`);
  assert.ok(html.includes('Para casas e apartamentos'), `${sheet.id}: password applies to both formats`);
  assert.ok(!html.includes('owntime2026'), `${sheet.id}: old fixed password removed`);
  assert.ok(!html.includes('>hospedes<'), `${sheet.id}: old network removed`);
  assert.ok(!html.includes('navigator.clipboard'), `${sheet.id}: do not copy a password instruction`);
  assert.ok(!html.includes('undefined'), `${sheet.id}: complete rendered data`);
}
assert.ok(unit.innerHTML.includes('https://wa.me/555434210620'), 'Existing support contact');

const checkVersion = (html, file, page) => {
  const bytes = readFileSync(join(root, 'assets/js', file));
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 12);
  assert.ok(html.includes(`assets/js/${file}?v=${hash}`), `${page}: current ${file}`);
};
const homeHtml = readFileSync(join(root, 'index.html'), 'utf8');
for (const file of ['data-hub.js', 'main-hub.js']) checkVersion(homeHtml, file, 'index');
for (const slug of ['fall-house', 'winter-house', 'garden', 'terraco']) {
  const html = readFileSync(join(root, `${slug}.html`), 'utf8');
  checkVersion(html, 'data-common.js', slug);
  const unitContext = vm.createContext({});
  vm.runInContext(readFileSync(join(root, 'assets/js', `data-${slug}.js`), 'utf8'), unitContext);
  assert.equal(vm.runInContext('Boolean(TIPOLOGIA.facilityOverrides?.conectividade)', unitContext), false, `${slug}: no old Wi-Fi override`);
  assert.equal(vm.runInContext('Boolean(TIPOLOGIA.facilityExcludes?.includes("conectividade"))', unitContext), false, `${slug}: Wi-Fi available`);
}
checkVersion(readFileSync(join(root, 'clube.html'), 'utf8'), 'data-common.js', 'clube');
console.log('OK: OwnHospedes, guest login, house/apartment examples and surname password on home and all unit pages; no fixed-password copying; asset versions current.');
