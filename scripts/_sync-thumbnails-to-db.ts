import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

// Extract OG_IMAGE and determine slug from page.tsx files
// For each stub, parse the OG_IMAGE and the component slug, then update Supabase
async function main() {
  const root = process.cwd();
  
  // Find all page.tsx files that now have an Unsplash OG_IMAGE (not empty)
  const { execSync } = await import('child_process');
  const result = execSync(
    `grep -rn "OG_IMAGE = 'https://images.unsplash.com" app/ --include="page.tsx" -l`,
    { cwd: root, encoding: 'utf8' }
  );
  const files = result.trim().split('\n').filter(Boolean);
  console.log(`Found ${files.length} files with Unsplash OG_IMAGE\n`);

  let updated = 0;
  let errors = 0;

  for (const relFile of files) {
    const content = fs.readFileSync(path.join(root, relFile), 'utf8');
    
    // Extract OG_IMAGE value
    const ogMatch = content.match(/const OG_IMAGE = '(https:\/\/images\.unsplash\.com\/[^']+)'/);
    if (!ogMatch) continue;
    const ogImage = ogMatch[1];

    // Determine which component and slug
    const isNewsArticle = content.includes('NewsArticleDB') || content.includes('JackArticleDB') || content.includes('AlysaArticleDB') || content.includes('CreatorArticleDB');
    const isArticlePage = content.includes('ArticlePageDB');
    
    // Extract slug from the component call
    const slugMatch = content.match(/slug="([^"]+)"/);
    if (!slugMatch) {
      console.log(`⚠️  No slug found in ${relFile}`);
      continue;
    }
    const slug = slugMatch[1];

    // Determine table
    let table = 'articles';
    if (content.includes('JackArticleDB')) table = 'jack_articles';
    else if (content.includes('ArticlePageDB')) table = 'article_pages';
    else if (content.includes('CreatorArticleDB')) table = 'creator_articles';
    else if (content.includes('AlysaArticleDB')) table = 'alysa_articles';

    // The field name varies by table
    const field = table === 'articles' ? 'thumbnail_src' : 
                  table === 'jack_articles' ? 'hero_image_url' :
                  table === 'article_pages' ? 'thumbnail_src' :
                  table === 'creator_articles' ? 'hero_image_src' : 'thumbnail_src';

    const { error } = await sb.from(table).update({ [field]: ogImage }).eq('slug', slug);
    if (error) {
      console.log(`❌ ${slug} [${table}] — ${error.message}`);
      errors++;
    } else {
      console.log(`✅ ${slug} [${table}] → ${field}`);
      updated++;
    }
  }

  console.log(`\nDone. ✅ ${updated} updated | ❌ ${errors} errors`);
}

main().catch(console.error);
