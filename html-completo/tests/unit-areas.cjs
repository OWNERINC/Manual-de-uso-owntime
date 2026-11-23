// Run: node html-completo/tests/unit-areas.cjs
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { createHash } = require('node:crypto');
const vm = require('node:vm');

const root = join(__dirname, '..');
const load = (file, variable, context = vm.createContext({})) => {
  vm.runInContext(readFileSync(join(root, 'assets/js', file), 'utf8'), context);
  return vm.runInContext(variable, context);
};
const checkAssetVersion = (page, file) => {
  const bytes = readFileSync(join(root, 'assets/js', file));
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 12);
  const html = readFileSync(join(root, `${page}.html`), 'utf8');
  assert.ok(html.includes(`assets/js/${file}?v=${hash}`), `${page}: current asset version`);
  return html;
};

const hub = load('data-hub.js', 'HUB');
for (const [slug, expected] of [['garden', '57 m²'], ['terraco', '65 m²']]) {
  const features = {};
  const context = vm.createContext({
    document: {
      getElementById: id => {
        assert.equal(id, 'tipologia-features');
        return features;
      }
    }
  });
  const unit = load(`data-${slug}.js`, 'TIPOLOGIA', context);
  assert.equal(unit.stats.find(stat => stat.label === 'Área Total').value, expected, slug);
  assert.equal(hub.tipologias.find(item => item.id === slug).area, expected, `${slug}: home data`);
  load('render-common.js', 'renderTipologiaFeatures', context)(unit);
  assert.ok(features.innerHTML.includes(`>${expected}</span>`), `${slug}: rendered area`);
  const html = checkAssetVersion(slug, `data-${slug}.js`);
  const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.ok(description.includes(expected), `${slug}: metadata`);
  assert.ok(!description.includes('60 m²'), `${slug}: no old area`);
}
checkAssetVersion('index', 'data-hub.js');
for (const [slug, expected] of [['fall-house', '448 m²'], ['winter-house', '325 m²']]) {
  const unit = load(`data-${slug}.js`, 'TIPOLOGIA');
  assert.equal(unit.stats.find(stat => stat.label === 'Área Total').value, expected, slug);
  assert.equal(hub.tipologias.find(item => item.id === slug).area, expected, `${slug}: home data`);
}
console.log('OK: Garden 57 m² and Cobertura 65 m² in home data, unit stats, rendered HTML, metadata and current asset versions; house areas unchanged.');
