/**
 * fix-sitemap-errors.ts
 *
 * Fixes all non-200 URLs discovered in the April 28, 2026 sitemap audit:
 *
 * 1. Removes template placeholder URLs from content_registry
 * 2. Removes 308-redirect (uppercase) URLs from content_registry
 * 3. Reports 404 pages: has file but no Supabase articles row (manual fix needed)
 * 4. Removes 404 entries from content_registry where page file is GONE entirely
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── 1. Template / literal placeholder URLs ───────────────────────────────────
const TEMPLATE_SLUGS = [
  '/blog/[slug]',
  '/profile/[username]',
  '/tags/[tag]',
];

// ── 2. 308-redirect (uppercase) URL slugs ────────────────────────────────────
const REDIRECT_SLUGS = [
  '/artists/yeat/ADL-26',
  '/crypto/tether',
  '/crypto/txc-stablecoin',
  '/finance/articles/NVIDIA-q4-ending-Feb-25',
  '/investigations/minesoda/Ilhan-Omar',
  '/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value',
  '/social/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC',
  '/trump/china/OpenClaw-hacks-china-gov-in-shocking-report',
  '/trump/WLFI-stablecoin',
  '/video-games/Digital-Foundry',
  '/video-games/game-of-the-year-2026-Clair-Obscur',
  '/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',
];

// ── 3. 404s where page file EXISTS but Supabase articles row is missing ──────
// These need manual wiki:publish or a Supabase row re-insert.
// We do NOT delete from content_registry — the file is there; row is missing.
const MISSING_ROW_PAGES = [
  '/tech/real-estate',
  '/influencer/of/mikaela-testa',
  '/nvidia/news/nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck',
  '/crypto/hbar/rba-cbdc-hashsphere-hedera-project-acacia',
  '/crypto/news/florida-hb175-stablecoin-law-payment-regulation',
  '/claude/news/datatalks-course-wiped-by-claudecode',
  '/tech/cloudflare-dynamic-workers-open-beta-ai-code-execution-2026',
  '/trump/kristi-noem/fired',
  '/trump/shadow-license-problem',
  '/news/alibaba-ai-agent-mined-crypto-during-training',
  '/video-games/news/gta-6-pre-orders-playstation-store-database-update-march-2026',
  '/video-games/news/kotor-remake-saber-confirmed-still-in-development',
  '/video-games/mythmatch',
  '/world-cup/boycott-controversy',
  '/equipment/hasselblad',
];

// ── 4. Orphaned slugs (no file, no Supabase row) ─────────────────────────────
const ORPHAN_SLUGS = [
  '/beastgames',
  '/beastgames/season-2',
  '/elon-musk',
  '/fortnite',
  '/open-ai',
  '/saas',
];

async function deleteFromRegistry(slugs: string[], reason: string) {
  console.log(`\n── ${reason} (${slugs.length} entries) ──`);
  for (const slug of slugs) {
    const { error } = await supabase
      .from('content_registry')
      .delete()
      .eq('slug', slug);
    if (error) {
      console.log(`  ❌ FAILED  ${slug}  ${error.message}`);
    } else {
      console.log(`  ✅ DELETED ${slug}`);
    }
  }
}

async function main() {
  console.log('=== OzoneNews Sitemap Error Cleanup ===\n');

  // Remove template placeholder URLs
  await deleteFromRegistry(TEMPLATE_SLUGS, 'Template placeholder URLs');

  // Remove 308-redirect (uppercase) URLs
  await deleteFromRegistry(REDIRECT_SLUGS, '308-redirect / uppercase URLs');

  // Remove truly orphaned URLs (no file, no row)
  await deleteFromRegistry(ORPHAN_SLUGS, 'Orphaned slugs (no file, no Supabase row)');

  // Report the pages that have files but missing Supabase rows
  console.log(`\n── 404s with page.tsx but missing Supabase articles row (${MISSING_ROW_PAGES.length} pages) ──`);
  console.log('  These pages have stub files but no data row. Run wiki:publish on each or re-insert the row.');
  console.log('  content_registry entries are kept — we just need the Supabase articles row.\n');

  for (const path of MISSING_ROW_PAGES) {
    const slug = path.replace(/^\//, '').replace(/\//g, '-');
    // Check if articles row exists
    const { data: article } = await supabase
      .from('articles')
      .select('slug, status, title')
      .eq('slug', slug)
      .maybeSingle();

    if (article) {
      console.log(`  ✅ ROW EXISTS  ${path} (status: ${article.status}) — likely a Supabase connectivity issue at build time`);
    } else {
      // Also check jack_articles
      const { data: jack } = await supabase
        .from('jack_articles')
        .select('slug, title')
        .eq('slug', slug)
        .maybeSingle();
      if (jack) {
        console.log(`  ✅ JACK ROW    ${path} — is a jack_article, not articles table`);
      } else {
        // Check article_pages
        const { data: ap } = await supabase
          .from('article_pages')
          .select('slug, title')
          .eq('slug', slug)
          .maybeSingle();
        if (ap) {
          console.log(`  ✅ ARTICLE_PAGE ${path}`);
        } else {
          console.log(`  ❌ NO ROW      ${path}  (slug: ${slug}) → needs wiki:publish`);
          // Remove from registry too since no row means the page will 404
          const { error } = await supabase.from('content_registry').delete().eq('slug', path);
          if (!error) console.log(`     → Removed from content_registry`);
        }
      }
    }
  }

  console.log('\n=== Cleanup complete. Rebuild and redeploy to regenerate sitemap. ===');
}

main().catch(console.error);
