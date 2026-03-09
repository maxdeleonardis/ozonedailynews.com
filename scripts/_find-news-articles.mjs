import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

function walk(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, item.name);
    if (item.isDirectory()) walk(full);
    else if (item.name === 'page.tsx') {
      const c = readFileSync(full, 'utf8');
      if (c.includes('<NewsArticle ')) {
        console.log(full.replace(/.*app[\\/]/, 'app/'));
      }
    }
  }
}
walk('app');
