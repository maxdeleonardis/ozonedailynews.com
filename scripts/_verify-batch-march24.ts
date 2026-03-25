import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
const jackSlugs = [
  'trump-ice-arrest-sfo-airport-nationwide-deployment',
  'technology-tencent-openclaw-ai-agent-wechat',
  'copyright-news-aoc-mlb-polymarket-gambling-warning',
];
const newsSlugs = [
  'trump-trump-ice-agents-drop-masks-airports',
  'blackrock-blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop',
  'amazon-news-amazon-acquires-fauna-robotics-sprout-humanoid',
];

const { data: jackRows, error: je } = await sb.from('jack_articles').select('slug').in('slug', jackSlugs);
const { data: newsRows, error: ne } = await sb.from('articles').select('slug,status').in('slug', newsSlugs);

if (je) console.error('jack_articles error:', je.message);
if (ne) console.error('articles error:', ne.message);

console.log('\njack_articles:');
jackSlugs.forEach(s => {
  const found = jackRows?.find(r => r.slug === s);
  console.log(found ? `  ✓ ${found.slug}` : `  ✗ MISSING: ${s}`);
});

console.log('\narticles:');
newsSlugs.forEach(s => {
  const found = newsRows?.find(r => r.slug === s);
  console.log(found ? `  ✓ ${found.slug} [${found.status}]` : `  ✗ MISSING: ${s}`);
});

const missing = [
  ...jackSlugs.filter(s => !jackRows?.find(r => r.slug === s)),
  ...newsSlugs.filter(s => !newsRows?.find(r => r.slug === s)),
];
console.log(missing.length ? `\n✗ ${missing.length} MISSING slug(s)` : '\nAll 6 slugs confirmed in Supabase ✓');
}

main();
