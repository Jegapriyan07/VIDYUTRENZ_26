const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: node copy-logo.js "C:\\path\\to\\image.png"');
  process.exit(1);
}

const srcPath = path.resolve(process.argv[2]);
const destPath = path.resolve(__dirname, '..', 'src', 'assets', 'navbar_logo.png');

try {
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${srcPath} -> ${destPath}`);
} catch (err) {
  console.error('Error copying file:', err.message);
  process.exit(2);
}
