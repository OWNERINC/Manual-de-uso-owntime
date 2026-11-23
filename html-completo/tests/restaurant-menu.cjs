// Run: node html-completo/tests/restaurant-menu.cjs
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { createHash } = require('node:crypto');
const vm = require('node:vm');

const root = join(__dirname, '..');
// Drive folder 1oM6feUU5ET_Bn2I-oS2k0ULc4-v5lhSH:
// Prancheta 2.webp through Prancheta 9.webp, copied without re-encoding.
const originalHashes = [
  '41319b74d6a672a5b36d80f2b7375070f119c0a576a7dc273ead55ae5d808d6e',
  '57b4a21610e8c59f84dd0c05ac8e0d942ae026a054736c7b56286d744ef5f443',
  '37f164b6e2eb62a9f6e9ae20a597e41d09242a52fba088c98a362f50a372c2dc',
  '4cc0fad672a66aaf6a7305705f76768fab43b63a0707b5d47ab6d02246982137',
  'c73e722d14f9fbbd0ad409ec3bea3ce9ec416739500b9c0d0756c93e0d8011cc',
  '6c852b0da202ac343251335aae9a615185abf2bf023a78db8e4388f1e747e883',
  '924d5f4d0b06486112f23edb9a712546c09bbda3e99b4bb77fe77968640d8519',
  '7e8e70e95218af5a1e1ed467430153e9543c7b91461c2a2f0d2c65959f56e2ad'
];
originalHashes.forEach((expected, index) => {
  const bytes = readFileSync(join(root, 'assets/cardapios/restaurante', `pagina-${index + 1}.webp`));
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `Page ${index + 1}: original Drive file and correct order`);
});

const sheets = new Map();
const context = vm.createContext({ document: { getElementById: id => sheets.get(id) || null } });
vm.runInContext(readFileSync(join(root, 'assets/js/render-common.js'), 'utf8'), context);
context._appendSheet = (id, icon, title, html) => {
  const image = { src: html.match(/src="([^"]+)"/)[1] };
  const body = { scrollTop: 0 };
  const counter = { textContent: '' };
  const button = disabled => ({
    disabled,
    addEventListener(type, listener) { this[type] = listener; }
  });
  const prev = button(true);
  const next = button(false);
  const footer = { insertAdjacentHTML(position, markup) {
    counter.textContent = markup.match(/aria-atomic="true">([^<]+)/)[1];
  } };
  const elements = {
    '.bottom-sheet__body img': image,
    '.bottom-sheet__body': body,
    '.bottom-sheet__footer': footer,
    '.cardapio-counter': counter,
    '.cardapio-prev': prev,
    '.cardapio-next': next
  };
  sheets.set(id, {
    image, body, counter, prev, next,
    classList: { add() {} },
    events: {},
    querySelector: selector => elements[selector],
    addEventListener(type, listener) { this.events[type] = listener; }
  });
};
context.renderRestauranteCardapioSheet();
const restaurant = sheets.get('sheet-cardapio-restaurante');
for (let page = 1; page <= 8; page++) {
  assert.equal(restaurant.image.src, `assets/cardapios/restaurante/pagina-${page}.webp?v=20261123`);
  assert.equal(restaurant.counter.textContent, `${page} / 8`);
  assert.equal(restaurant.prev.disabled, page === 1);
  assert.equal(restaurant.next.disabled, page === 8);
  restaurant.body.scrollTop = 120;
  restaurant.next.click();
  if (page < 8) assert.equal(restaurant.body.scrollTop, 0);
}
assert.equal(restaurant.counter.textContent, '8 / 8', 'Do not go beyond the last page');
restaurant.events['bs:open']();
assert.equal(restaurant.counter.textContent, '1 / 8', 'Restart when reopening');
assert.equal(restaurant.body.scrollTop, 0);
restaurant.next.click();
restaurant.prev.click();
assert.equal(restaurant.counter.textContent, '1 / 8', 'Previous-page navigation');

context.renderCardapiosSheet();
context.renderCafeBarCardapioSheet();
context.renderSpaCardapioSheet();
for (const id of ['ala-carte', 'em-casa', 'cafe-bar', 'spa']) {
  assert.ok(sheets.get(`sheet-cardapio-${id}`).image.src.endsWith('?v=20261116'), `${id}: existing menu revision preserved`);
}
console.log('OK: eight original restaurant WebPs in source order; current cache revision; navigation/reopening; other menu revisions preserved.');
