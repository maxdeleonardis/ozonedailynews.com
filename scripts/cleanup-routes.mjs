/**
 * cleanup-routes.mjs
 * Deletes all page.tsx routes NOT in the KEEP list, outputs a redirect map.
 * Run: node scripts/cleanup-routes.mjs [--dry-run] [--write-redirects]
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const DRY_RUN = process.argv.includes('--dry-run');
const WRITE_REDIRECTS = process.argv.includes('--write-redirects');
const APP_DIR = path.resolve(process.cwd(), 'app');

// ─── TOP-100 KEEP LIST (exact paths from GSC) ────────────────────────────────
const KEEP_PATHS = new Set([
  // Top-100 performing pages
  '/',
  '/news',
  '/define/hetzner-cloud-vs-digitalocean',
  '/define/how-does-copy-paste-work',
  '/youtube/sidemen/inside-uk/season3/ratings-review-winner',
  '/youtube/sidemen/inside-uk/season3',
  '/youtube/sidemen/charity-match',
  '/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne',
  '/youtube/sidemen/alfie-buttle',
  '/youtube/sidemen/chippo-grimes',
  '/youtube/sidemen/italian-bach',
  '/youtube/sidemen/charity-match-results-2026',
  '/youtube/chicos-toxicos/sava-schultz',
  '/youtube/spanish',
  '/youtube',
  '/microsoft/news/life-biosciences-fda-clearance-epigenetic-reprogramming-er-100',
  '/microsoft/news/nvidia-groq-inference-processor-gtc-2026',
  '/microsoft/news/valve-ships-cs2-animation-overhaul-not-cs3-april-2026',
  '/microsoft/news/apple-five-new-products-march-2026',
  '/microsoft/news/yamanaka-factors-reverse-cellular-aging-markers',
  '/microsoft/news/federal-agencies-grok-safety-pentagon-classified',
  '/microsoft/xbox/asha-sharma',
  '/google/news/turboquant-llm-kv-cache-compression',
  '/google/news/flash-attention-3-vs-turboquant-vs-paged-kv-cache-llm-optimization',
  '/google/news/iran-cyber-attacks-google-threat-intelligence-march-2026',
  '/google/news/gemini-embedding-2-multimodal-embedding-model',
  '/google/waymo/waymo-500000-rides-per-week-10-cities-2026',
  '/google/google-research-releases-turboquant',
  '/google/ai-coding-strike-team-antigravity-claude-code-2026',
  '/redbull',
  '/video-games/top-10-anime-games-2026',
  '/video-games/valve-corporation',
  '/video-games/gta-6',
  '/video-games/mha/ultra-rumble/season-16',
  '/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026',
  '/video-games/new/crimson-desert',
  '/video-games/epic',
  '/video-games/nintendo',
  '/video-games/nintendo/donkey-kong-bananza',
  '/video-games/arknights-endfield',
  '/apple',
  '/apple/core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg',
  '/apple/copyright/ninth-circuit-denies-apple-rehearing-epic-games-2026',
  '/entertainment/news/fortnite-moves-into-movies',
  '/influencer/daddywellness',
  '/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube',
  '/influencer/uk/stephen-tries',
  '/influencer/diamond-gym',
  '/influencer/diamond-gym/prime',
  '/influencer/instagram',
  '/influencer/faithordway',
  '/technology/cursor',
  '/technology/news/intel-amd-cpu-prices-surge-15-percent-shortage-2026',
  '/technology/tencent-openclaw-ai-agent-wechat',
  '/technology/alibaba/wukong-ai-agent-enterprise-platform-march-2026',
  '/tech/news/softbank-natural-ai-phone-brain-technologies-japan-2026',
  '/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue',
  '/tech/news/87-percent-ai-agent-pull-requests-security-flaws-dryrun-report-2026',
  '/tech/news/gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026',
  '/tech/alphafold-protein-complex-structures-database-2026',
  '/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026',
  '/tech/dell/dell-pro-max-gb300-grace-blackwell-ultra-desktop-gtc-2026',
  '/tech/perplexity/news/perplexity-personal-computer-ai-agent-developer-suite-ask-2026',
  '/tech/anthropic-private-equity-10-billion-blackstone-joint-venture-2026',
  '/bio-hacking/life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026',
  '/saas/news/shopify-agentic-storefronts-chatgpt-default-march-2026',
  '/saas/hashicorp',
  '/open-ai/news/symphony-open-source-autonomous-coding-agents',
  '/austin-private-detective-agency',
  '/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal',
  '/nvidia/news/nvidia-blackwell-b300-data-center-demand-surge-2026',
  '/nvidia/news/blackwell-b300-vs-amd-mi300x-vs-google-tpu-v6-2026-benchmark',
  '/nvidia/news/nvidia-engineer-inference-budget-token-salary-gtc-2026',
  '/california/california-tech-layoffs-2026-ai-restructuring-26000-job-cuts',
  '/copyright/news/mastercard-ai-disruption-selloff',
  '/copyright/news/ex-human-files-lawsuit-against-apple',
  '/cloudflare/news/dynamic-workers-open-beta-ai-code-execution-2026',
  '/events/davos',
  '/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',
  '/nasa/news/black-hole-jet-power-measured-cygnus-x1-curtin-university',
  '/news/alibaba-qwen-3-6-model-preview-responses-api-typescript-sdk-2026',
  '/news/china-bars-manus-cofounders-meta-acquisition-review-2026',
  '/news/blue-owl-halts-fund-redemptions',
  '/news/anthropic-claude-sonnet-4-6-saas-selloff',
  '/github',
  '/disney',
  '/elon-musk/xai',
  '/elon-musk/boring-company',
  '/cursor/automations-event-driven-ai-coding',
  '/social/x-twitter',
  '/social/meta/news/meta-ray-ban-display-glasses-eu-blocked-battery-regulation-2026',
  '/superintelligence-force-meta-into-their-4th-restructuring-this-year',
  '/trump/trump-auto-tariffs-25-percent-april-3',
  '/tags/creator-economy',
  '/tags/youtube',
  '/intel',
  '/intel/18a-high-volume-manufacturing',
  '/shopify/news/shopify-tinker-app-100-ai-creative-tools-2026',
  '/comet-ai-web-browser-vs-atlas-by-chatgpt',
  '/clothing/gymshark',

  // ─── HUB / NAVIGATION pages (keep for internal linking) ───────────────────
  '/tech',
  '/technology',
  '/nvidia',
  '/microsoft',
  '/google',
  '/video-games',
  '/entertainment',
  '/open-ai',
  '/cloudflare',
  '/elon-musk',
  '/cursor',
  '/saas',
  '/shopify',
  '/copyright',
  '/bio-hacking',
  '/influencer',
  '/social',
  '/california',
  '/fortnite',
  '/nasa',
  '/trump',
  '/tags',
  '/clothing',
  '/amazon',     // keep hub for internal linking (has traffic)
  '/crypto',     // keep hub

  // ─── Site utility pages (must never be deleted) ───────────────────────────
  '/(admin)/admin',
  '/(admin)/admin/dashboard',
  '/(admin)/admin/editor',
  '/about',
  '/account',
  '/auth',
  '/login',
  '/saved',
  '/profile',
  '/authors',
  '/authors/alfansa',
  '/authors/conan-boyle',
  '/authors/jack-brennan',
  '/authors/jack-sterling',
  '/authors/jack-wang',
  '/privacy-policy',
  '/terms-of-service',
  '/corrections',
  '/editorial-standards',
  '/get-help',
  '/search',
  '/site-index',
]);

// Routes that start with these prefixes are always kept (utility/auth/api)
const KEEP_PREFIXES = [
  '/api/',
  '/auth/',
  '/feed',
  '/feeds',
  '/rss',
  '/news-sitemap',
  '/sitemap',
  '/robots',
  '/manifest',
  '/opengraph',
  '/(public)',
];

function routeFromPageFile(filePath) {
  // app/foo/bar/page.tsx -> /foo/bar
  const rel = path.relative(APP_DIR, filePath);
  const route = '/' + rel.replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
  return route === '/' ? '/' : route;
}

function shouldKeep(route) {
  if (KEEP_PATHS.has(route)) return true;
  for (const prefix of KEEP_PREFIXES) {
    if (route.startsWith(prefix)) return true;
  }
  return false;
}

// Recursively gather all page.tsx files
function findPageFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPageFiles(full));
    } else if (entry.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const allPages = findPageFiles(APP_DIR);
const toDelete = [];
const toKeep = [];

for (const f of allPages) {
  const route = routeFromPageFile(f);
  if (shouldKeep(route)) {
    toKeep.push({ route, file: f });
  } else {
    toDelete.push({ route, file: f });
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Total pages : ${allPages.length}`);
console.log(`   Keeping     : ${toKeep.length}`);
console.log(`   Deleting    : ${toDelete.length}`);

if (DRY_RUN) {
  console.log('\n🗑  Would delete:');
  for (const { route } of toDelete) {
    console.log(`   ${route}`);
  }
  console.log('\n✅ Dry run complete — nothing changed.');
  process.exit(0);
}

// ─── Delete pages ─────────────────────────────────────────────────────────────
let deleted = 0;
let errors = 0;

for (const { route, file } of toDelete) {
  try {
    fs.unlinkSync(file);
    deleted++;
  } catch (e) {
    console.error(`  ✗ Could not delete ${file}: ${e.message}`);
    errors++;
  }
}

// Clean up empty directories (leaf-first)
function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      removeEmptyDirs(path.join(dir, entry.name));
    }
  }
  const remaining = fs.readdirSync(dir);
  if (remaining.length === 0) {
    try { fs.rmdirSync(dir); } catch {}
  }
}

removeEmptyDirs(APP_DIR);

console.log(`\n✅ Deleted ${deleted} page files (${errors} errors).`);

// ─── Generate redirect entries ────────────────────────────────────────────────
if (WRITE_REDIRECTS) {
  const redirectLines = toDelete.map(({ route }) => {
    // Best-guess destination: parent hub or /news
    const parts = route.split('/').filter(Boolean);
    let dest = '/news';
    if (parts.length >= 2) {
      // Check if parent hub is in KEEP_PATHS
      const parent = '/' + parts[0];
      if (KEEP_PATHS.has(parent)) dest = parent;
    }
    return `      { source: '${route}', destination: '${dest}', permanent: true },`;
  });

  const output = redirectLines.join('\n');
  fs.writeFileSync('/tmp/new-redirects.txt', output, 'utf8');
  console.log(`\n📄 Redirect entries written to /tmp/new-redirects.txt`);
  console.log(`   Add these inside the redirects: async () => [...] array in next.config.ts`);
}
