// Remove `scripts` from the package.json copied into dist/. The package is
// published from dist/, and npm 10 runs `prepare` while packing even with
// --ignore-scripts, which would re-run the build from inside dist/ and fail.
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const path = join(__dirname, '../dist/package.json');
const pkg = JSON.parse(readFileSync(path, 'utf8'));
delete pkg.scripts;
writeFileSync(path, JSON.stringify(pkg, null, 2) + '\n');
