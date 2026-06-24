import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './assets/images';
const MAX_WIDTH   = 1400;
const QUALITY     = 80;

const files = await readdir(IMAGES_DIR);
const targets = files.filter(f => /\.(png|jpe?g)$/i.test(f));

for (const file of targets) {
  const input  = join(IMAGES_DIR, file);
  const name   = basename(file, extname(file)).replace(/\s+/g, '-').toLowerCase();
  const output = join(IMAGES_DIR, name + '.webp');

  const before = (await stat(input)).size;
  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);
  const after = (await stat(output)).size;

  console.log(`${file}  →  ${name}.webp   (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${(100 - after/before*100).toFixed(0)}%)`);
}
