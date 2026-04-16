import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(url, key);

async function main() {
  const slugs = [
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

  for (const slug of slugs) {
    const { data, error } = await supabase
      .from('articles')
      .select('slug, content_html')
      .eq('slug', slug)
      .single();
    
    if (error) { console.log(`❌ ${slug}: ${error.message}`); continue; }
    if (!data) { console.log(`❌ ${slug}: NO ROW`); continue; }
    
    const html = data.content_html || '';
    const startsWithComponent = html.trimStart().startsWith('<NewsArticle');
    const hasJSX = html.includes('{SLUG}') || html.includes('{OG_IMAGE}') || html.includes('url={');
    const hasProseDiv = html.trimStart().startsWith('<div class="prose');
    
    if (startsWithComponent || hasJSX) {
      console.log(`🔴 BROKEN: ${slug} — content_html starts with <NewsArticle> JSX (length: ${html.length})`);
    } else if (hasProseDiv) {
      console.log(`✅ OK: ${slug} — proper prose HTML (length: ${html.length})`);
    } else {
      console.log(`⚠️  CHECK: ${slug} — starts with: ${html.substring(0, 60)} (length: ${html.length})`);
    }
  }
  return;
  
  const slug = 'microsoft-news-nadella-copilot-code-red-ai-gap-e7-suite';
  
  const { data, error } = await supabase
    .from('articles')
    .select('slug, title, subtitle, category, status, topic_tag, publish_date, published_at, author_name, author_slug, read_time, hero_image_src, thumbnail_src, tags, url, content_html')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('ERROR:', error.message);
    return;
  }
  if (!data) {
    console.log('NO ROW FOUND for slug:', slug);
    return;
  }

  console.log('=== Article Check ===');
  console.log('slug:', data.slug);
  console.log('title:', data.title);
  console.log('subtitle:', data.subtitle);
  console.log('category:', data.category);
  console.log('status:', data.status);
  console.log('topic_tag:', data.topic_tag);
  console.log('publish_date:', data.publish_date);
  console.log('published_at:', data.published_at);
  console.log('author_name:', data.author_name);
  console.log('author_slug:', data.author_slug);
  console.log('read_time:', data.read_time);
  console.log('hero_image_src:', data.hero_image_src);
  console.log('thumbnail_src:', data.thumbnail_src);
  console.log('tags:', data.tags);
  console.log('url:', data.url);
  console.log('content_html length:', data.content_html?.length ?? 0);
  
  if (data.content_html) {
    console.log('\n=== content_html first 1000 chars ===');
    console.log(data.content_html.substring(0, 1000));
    console.log('\n=== content_html last 500 chars ===');
    console.log(data.content_html.substring(data.content_html.length - 500));
  } else {
    console.log('\nWARNING: content_html is NULL or empty');
  }
}

main();
