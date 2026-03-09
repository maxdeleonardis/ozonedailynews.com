/**
 * fix-url-constants.js
 * Fixes trimmed page.tsx files that reference constants stripped during trim.
 * For each WikiArticle page:
 *  1. Reads the .bak backup and extracts all `const NAME = 'value'` declarations
 *  2. Resolves any ${SLUG} references using the canonical path derived from file location
 *  3. Inlines any constants still referenced in the current (trimmed) file
 *  4. Handles special cases: SITE_CONFIG property access, AUTHOR_NAME/OBJ lines
 */
const fs = require('fs');
const path = require('path');

const APP = path.resolve(process.cwd(), 'app');
const BASE_URL = 'https://www.objectwire.org';

function slugPathFromFile(filePath) {
  const rel = path.relative(APP, path.dirname(filePath));
  return '/' + rel.replace(/\\/g, '/');
}

/**
 * Extract all single-line const declarations from backup source.
 * Resolves ${SLUG} template expressions using resolvedSlug.
 */
function extractConsts(src, resolvedSlug) {
  const result = {};
  // Match: const NAME = 'value'; or const NAME = `value`;
  const re = /const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(["'`])([^]*?)\2\s*;/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    let value = m[3];
    // Resolve ${SLUG} inside the value
    if (value.includes('${SLUG}')) {
      value = value.replace(/\$\{SLUG\}/g, resolvedSlug);
    }
    result[m[1]] = value;
  }
  return result;
}

function walk(dir, results = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next'].includes(e.name)) {
      walk(full, results);
    } else if (e.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const files = walk(APP);
let fixed = 0;

for (const file of files) {
  let pg = fs.readFileSync(file, 'utf-8');
  if (!pg.includes('WikiArticle')) continue; // only process trimmed pages

  const original = pg;
  const bak = file.replace('page.tsx', 'page.tsx.bak');
  const bakSrc = fs.existsSync(bak) ? fs.readFileSync(bak, 'utf-8') : '';
  const pagePath = slugPathFromFile(file);
  const derivedUrl = BASE_URL + pagePath;

  // Extract all constants from backup and resolve ${SLUG}
  const consts = bakSrc ? extractConsts(bakSrc, pagePath) : {};

  // Provide fallback values for URL-type constants not in backup
  for (const k of ['ARTICLE_URL', 'FULL_URL', 'CANONICAL', 'PAGE_URL', 'CANONICAL_URL']) {
    if (!consts[k]) consts[k] = derivedUrl;
  }
  if (!consts['IMAGE_URL']) consts['IMAGE_URL'] = '';

  // Fix 1: Resolve ${SLUG} in template literals (backtick strings)
  pg = pg.replace(/`([^`]*)\$\{SLUG\}([^`]*)`/g, (_m, prefix, suffix) => `'${prefix}${pagePath}${suffix}'`);

  // Fix 2: Resolve single-quoted strings that contain literal ${SLUG} text
  pg = pg.replace(/'([^']*)\$\{SLUG\}([^']*)'/g, (_m, prefix, suffix) => `'${prefix}${pagePath}${suffix}'`);

  // Fix 3: SITE_CONFIG property access
  if (pg.includes('SITE_CONFIG')) {
    pg = pg.replace(/`\$\{SITE_CONFIG\.url\}([^`]*)`/g, (_m, suffix) => `'${BASE_URL}${suffix}'`);
    pg = pg.replace(/\bSITE_CONFIG\.name\b/g, "'ObjectWire'");
    pg = pg.replace(/\bSITE_CONFIG\.url\b/g, `'${BASE_URL}'`);
  }

  // Fix 4: Remove authors: [AUTHOR_NAME] / [AUTHOR_OBJ] lines
  if (pg.includes('AUTHOR_NAME') || pg.includes('AUTHOR_OBJ')) {
    pg = pg.split('\n').filter(line => !/authors\s*:\s*\[AUTHOR(?:_NAME|_OBJ)\]/.test(line)).join('\n');
  }

  // Fix 5: Inline all constants found in backup
  for (const [name, value] of Object.entries(consts)) {
    if (!pg.includes(name)) continue;
    // Skip if already declared in the current file
    if (new RegExp(`(?:const|let|var)\\s+${name}\\b`).test(pg)) continue;
    if (name.length < 3) continue;

    const replacement = value === '' ? "''" : `'${value}'`;
    pg = pg.replace(new RegExp(`\\b${name}\\b`, 'g'), replacement);
  }

  if (pg !== original) {
    fs.writeFileSync(file, pg, 'utf-8');
    console.log('  ✓  fixed', path.relative(APP, file));
    fixed++;
  }
}

console.log(`\nDone — ${fixed} fixed`);
