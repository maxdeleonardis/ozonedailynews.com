import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(url, key);

const SLUGS = [
  'claude-news-imf-georgieva-anthropic-mythos-financial-stability-warning',
  'claude-news-anthropic-coreweave-multiyear-data-center-deal',
  'claude-news-software-stocks-crater-anthropic-mythos-gatekeep',
  'trump-news-trump-iran-warning-pakistan-negotiations',
  'finance-news-visa-doubles-ai-token-usage-1-9-trillion-per-month',
  'amazon-news-andy-jassy-2025-pay-2-1-million-30-percent-raise',
  'bio-hacking-penn-study-unreported-glp-1-side-effects-reddit',
  'blackrock-news-blackrock-600m-bitcoin-cold-storage-ibit-etf-settlement',
  'tech-deepseek-news-deepseek-v4-model-late-april-launch-huawei-ascend-chips',
  'meta-news-meta-ai-app-number-5-app-store-muse-spark-launch',
  'crypto-news-tether-qvac-sdk-on-device-ai-cloud-monopoly',
  'indonesia-news-indonesia-5-5-percent-q1-growth-world-bank-cut',
  'microsoft-news-nadella-copilot-code-red-ai-gap-e7-suite',
];

/**
 * The content_html currently looks like:
 * <NewsArticle title="..." subtitle="..." category="..." ...>
 *   <div>
 *     <p>actual content...</p>
 *     ...
 *   </div>
 * 
 * We need to:
 * 1. Strip the outer <NewsArticle ...> opening tag (everything up to first >)
 * 2. Strip the closing </NewsArticle> if present (or just trailing whitespace)
 * 3. Wrap the inner content in <div class="prose prose-lg max-w-none">
 */
function extractInnerHtml(raw: string): string {
  let html = raw.trim();

  // Remove the <NewsArticle ...> opening tag.
  // The opening tag may span multiple lines and ends with >
  // It could contain nested JSX like {{ name: '...' }} so we need to find the 
  // closing > that ends the opening tag (after all the props).
  if (html.startsWith('<NewsArticle')) {
    // Find the end of the opening tag - need to handle JSX objects in props
    // Strategy: find the first > that's followed by whitespace and then a tag or content
    let depth = 0;
    let i = 0;
    let foundTagEnd = -1;
    
    for (i = '<NewsArticle'.length; i < html.length; i++) {
      const ch = html[i];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (ch === '>' && depth === 0) {
        foundTagEnd = i;
        break;
      }
    }
    
    if (foundTagEnd > 0) {
      html = html.substring(foundTagEnd + 1);
    }
  }

  // Remove closing </NewsArticle> if present
  // Also handle the closing tag for the content wrapper like </NewsArticle>
  html = html.replace(/<\/NewsArticle>\s*$/, '');

  // Trim whitespace
  html = html.trim();

  // Wrap in prose div if not already wrapped
  if (!html.startsWith('<div class="prose')) {
    html = `<div class="prose prose-lg max-w-none">\n${html}\n</div>`;
  }

  return html;
}

const DRY_RUN = process.argv.includes('--dry-run');

async function main() {
  console.log(DRY_RUN ? '🔍 DRY RUN — no changes will be made\n' : '🔧 LIVE RUN — fixing content_html in Supabase\n');

  for (const slug of SLUGS) {
    const { data, error } = await supabase
      .from('articles')
      .select('slug, content_html')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      console.log(`❌ ${slug}: ${error?.message || 'NO ROW'}`);
      continue;
    }

    const raw = data.content_html || '';
    if (!raw.trimStart().startsWith('<NewsArticle')) {
      console.log(`✅ SKIP: ${slug} — already clean`);
      continue;
    }

    const fixed = extractInnerHtml(raw);
    
    console.log(`🔧 ${slug}`);
    console.log(`   Raw length: ${raw.length} → Fixed length: ${fixed.length}`);
    console.log(`   Starts with: ${fixed.substring(0, 80)}...`);

    if (!DRY_RUN) {
      const { error: updateErr } = await supabase
        .from('articles')
        .update({ content_html: fixed })
        .eq('slug', slug);
      
      if (updateErr) {
        console.log(`   ❌ UPDATE FAILED: ${updateErr.message}`);
      } else {
        console.log(`   ✅ Updated in Supabase`);
      }
    }
  }

  console.log('\nDone.');
}

main();
