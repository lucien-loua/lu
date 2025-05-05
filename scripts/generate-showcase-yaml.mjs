import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXAMPLES_DIR = path.join(__dirname, '../src/examples');
const SHOWCASE_DIR = path.join(__dirname, '../src/contents/showcase');

if (!fs.existsSync(SHOWCASE_DIR)) {
  fs.mkdirSync(SHOWCASE_DIR, { recursive: true });
}

fs.readdirSync(EXAMPLES_DIR).forEach(file => {
  if (file.endsWith('.tsx')) {
    const name = path.basename(file, '.tsx');
    const yaml = `name: ${name}
path: ${name}
description: ''
type: component
`;
    fs.writeFileSync(path.join(SHOWCASE_DIR, `${name}.yaml`), yaml);
    console.log(`Generated: ${name}.yaml`);
  }
}); 