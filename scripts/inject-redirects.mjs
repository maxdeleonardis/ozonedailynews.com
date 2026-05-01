import fs from 'fs';

const config = fs.readFileSync('next.config.ts', 'utf8');

const newRedirects = fs.readFileSync('/tmp/non-ranking-redirects.txt', 'utf8')
  .split('\n')
  .filter((l) => l.trim());

// Deduplicate against what's already in next.config.ts
const filtered = newRedirects.filter((line) => {
  const m = line.match(/source: '([^']+)'/);
  if (!m) return false;
  const src = m[1];
  return !config.includes(`'${src}'`);
});

console.log(`Total new redirect entries:   ${newRedirects.length}`);
console.log(`After dedup against existing: ${filtered.length}`);

if (filtered.length === 0) {
  console.log('Nothing to add.');
  process.exit(0);
}

// Inject before the last `    ];` (closes the redirects return array)
const insertPoint = config.lastIndexOf('\n    ];');
const newConfig =
  config.slice(0, insertPoint) +
  '\n      // ── Non-ranking GSC cleanup (Table.csv May 2026) ──\n' +
  filtered.join('\n') + '\n' +
  config.slice(insertPoint);

fs.writeFileSync('next.config.ts', newConfig, 'utf8');
console.log('✅ next.config.ts updated.');
