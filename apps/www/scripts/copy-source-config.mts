import fs from 'fs';
import path from 'path';

const sourceFile = path.join(process.cwd(), 'lib', 'source.config.mjs');
const destDir = path.join(process.cwd(), '.source');
const destFile = path.join(destDir, 'source.config.mjs');

// Create .source directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy source.config.mjs
fs.copyFileSync(sourceFile, destFile);

console.log('✓ Copied source.config.mjs to .source directory');
