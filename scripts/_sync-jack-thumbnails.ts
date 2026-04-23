import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function main() {
  const root = process.cwd();
  const { execSync } = await import('child_process');
  const result = execSync(
    `grep -rn "OG_IMAGE = 'https://images.unsplash.com" app/ --include="page.tsx" -l`,
    { cwd: root, encoding: 'utf8' }
  );
  const files = result.trim().split('\n').filter(Boolean);

  let updated = 0;
  let errors = 0;

  for (const relFile of files) {
    const content = fs.readFileSync(path.join(root, relFile), 'utf8');
    if (!content.includes('JackArticleDB')) continue;

    const ogMatch = content.match(/const OG_IMAGE = '(https:\/\/images\.unsplash\.com\/[^']+)'/);
    if (!ogMatch) continue;
    const ogImage = ogMatch[1];

    const slugMatch = content.match(/slug="([^"]+)"/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];

    const { error } = await sb.from('jack_articles').update({ hero_image: ogImage }).eq('slug', slug);
    if (error) {
      console.log(`❌ ${slug} — ${error.message}`);
      errors++;
    } else {
      console.log(`✅ ${slug} → hero_image`);
      updated++;
    }
  }

  console.log(`\nDone. ✅ ${updated} | ❌ ${errors}`);
}

main().catch(console.error);
