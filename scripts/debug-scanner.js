const fs = require('fs');
const path = require('path');
const APP = path.resolve(process.cwd(), 'app');

let found = 0, skipped_no_meta = 0, skipped_no_desc = 0, no_section = 0;
const cats = {};

function check(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next', '(admin)', 'api', 'feeds', 'rss.xml', 'news-sitemap.xml'].includes(e.name)) {
      check(full);
    } else if (e.name === 'page.tsx' && dir !== APP) {
      const src = fs.readFileSync(full, 'utf-8');
      // Same regex as content-scanner
      const metaMatch = src.match(/export const metadata[:\s]*Metadata\s*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)/s);
      if (!metaMatch) { skipped_no_meta++; return; }
      const ms = metaMatch[0];
      const descMatch = ms.match(/description:\s*["'`]([^"'`]+)["'`]/);
      if (!descMatch || !descMatch[1]) {
        skipped_no_desc++;
        return;
      }
      // Check if section is captured
      const sectionMatch = ms.match(/section:\s*["']([^"']+)["']/);
      const cat = sectionMatch ? sectionMatch[1].toUpperCase() : 'NEWS';
      if (!sectionMatch) no_section++;
      cats[cat] = (cats[cat] || 0) + 1;
      found++;
    }
  }
}

check(APP);
console.log('Scannable:', found);
console.log('No section (defaults to NEWS):', no_section);
console.log('Top categories:', JSON.stringify(
  Object.entries(cats).sort((a,b) => b[1]-a[1]).slice(0,15),
  null, 2
));
