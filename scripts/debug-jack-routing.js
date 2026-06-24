const fs = require('fs');
const path = require('path');
const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

function findJsonFilesRecursive(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsonFilesRecursive(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== '_index.json' && entry.name !== 'content_registry.json') {
      results.push(fullPath);
    }
  }
  return results;
}

// Test sharded scan
const slug = 'tech-google-nvidia-ai-chip-playbook-tpu-2026';
const target = slug + '.json';
const allFiles = findJsonFilesRecursive(path.join(STATIC_BASE, 'jack_articles'));
console.log('Total jack_article files found:', allFiles.length);
console.log('Files:', allFiles.map(f => path.relative(STATIC_BASE, f)));
const match = allFiles.find(f => path.basename(f) === target);
console.log('\nSharded match for slug:', match ? path.relative(STATIC_BASE, match) : 'NOT FOUND');

// Also test URL scan
const fullPath = '/tech/google-nvidia-ai-chip-playbook-tpu-2026';
const parsed = allFiles.map(f => {
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return null; }
}).filter(Boolean);
const byUrl = parsed.find(a => {
  if (!a.url) return false;
  try { return new URL(a.url).pathname === fullPath; } catch { return a.url === fullPath; }
});
console.log('URL scan match:', byUrl ? byUrl.slug : 'NOT FOUND');
