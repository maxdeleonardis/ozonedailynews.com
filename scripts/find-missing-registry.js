const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

// Get all page.tsx slugs from the app directory, including route groups
// Route groups (parenthesis dirs) don't affect URL, so strip them from slug
function getPageSlugs(dir, slugBase = '') {
  const slugs = [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return slugs;
  }
  for (const e of entries) {
    // Skip private folders, api, and dynamic segments
    if (e.name.startsWith('_') || e.name === 'api' || e.name.startsWith('[')) continue;
    const full = path.join(dir, e.name);
    // Route groups don't add to the slug
    const isRouteGroup = e.name.startsWith('(');
    const slug = isRouteGroup ? slugBase : slugBase + '/' + e.name;
    if (e.isDirectory()) {
      if (!isRouteGroup && fs.existsSync(path.join(full, 'page.tsx'))) {
        slugs.push(slug);
      }
      slugs.push(...getPageSlugs(full, slug));
    }
  }
  return slugs;
}

const appDir = path.join(ROOT, 'app');
const pageSlugs = getPageSlugs(appDir);

// Extract slugs from content-registry.ts
const reg = fs.readFileSync(path.join(ROOT, 'lib', 'content-registry.ts'), 'utf8');
const regSlugs = new Set();
const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g;
let m;
while ((m = slugRe.exec(reg)) !== null) regSlugs.add(m[1]);

// Find missing (exclude admin pages - they don't need SEO)
const missing = pageSlugs.filter(s => !regSlugs.has(s) && !s.startsWith('/admin'));

console.log('Total public pages found:', pageSlugs.filter(s => !s.startsWith('/admin')).length);
console.log('Registry slugs:', regSlugs.size);
console.log('Missing count:', missing.length);
if (missing.length > 0) {
  console.log('\nMISSING PAGES:');
  missing.forEach(s => console.log(s));
}

// Also show pages in registry that don't have a matching page.tsx
const pageSlugSet = new Set(pageSlugs);
const orphaned = [...regSlugs].filter(s => !pageSlugSet.has(s) && s.length > 1 && !s.startsWith('/admin'));
console.log('\nRegistry entries without a page.tsx (orphaned/hub slugs):', orphaned.length);
if (orphaned.length <= 30) orphaned.forEach(s => console.log(' ', s));
