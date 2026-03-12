const fs = require('fs');
const path = require('path');

const reg = fs.readFileSync(
  path.join(process.cwd(), 'lib', 'content-registry.ts'),
  'utf8'
);

// Extract all slugs
const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g;
let m;
const results = [];
while ((m = slugRe.exec(reg)) !== null) results.push(m[1]);

console.log('Total slugs extracted:', results.length);

// Check if home page is registered
console.log('Home page ("/") present:', results.includes('/'));

// Top-level slugs
console.log('\nTop-level entries:', results.filter(s => s.split('/').length <= 2).sort());

// Check for duplicate slugs
const seen = new Set();
const dups = [];
results.forEach(s => { if (seen.has(s)) dups.push(s); else seen.add(s); });
console.log('\nDuplicate slugs:', dups.length > 0 ? dups : 'none');
