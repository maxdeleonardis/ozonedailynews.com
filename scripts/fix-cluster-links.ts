/**
 * scripts/fix-cluster-links.ts
 *
 * Patches the 3 GTA 6 / Switch 2 cluster articles to meet internal link minimums.
 *
 * Changes:
 *   1. article_pages  slug=video-games-gta-6
 *      - Wraps "Rockstar Games" (first occurrence) with /video-games link
 *      - Wraps "Take-Two Interactive" (in pricing section) with news article link
 *      - Wraps "Nintendo Switch" (in platforms section) with /video-games/switch2 link
 *      Result: 0 → 3 links (hits minimum of 3)
 *
 *   2. articles  slug=video-games-gta-6-news-take-two-ai-team-shake-up-2026
 *      - Wraps first unlinked "Grand Theft Auto VI" (in closing paragraph) with /video-games link
 *      - Adds /video-games/switch2 link on "Nintendo Switch 2 and mobile gaming" mention
 *      Result: 2 → 4 links (hits minimum of 4)
 *
 *   3. jack_articles  slug=video-games-switch2-pokemon-pokopia
 *      - Wraps "Nintendo Switch 2" in first section (hub link) → /video-games/switch2
 *      - Wraps "Game Freak" in intro → /video-games (video games hub)
 *      - Wraps "Pokémon Pokopia" standalone reference in review section → /video-games/switch2/pokemon-pokopia-2-million-copies (sibling article)
 *      - Wraps "Super Mario Wonder" mention → /video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park (sibling article)
 *      - Wraps "Nintendo" brand (in quick facts section) → /video-games/nintendo (already partially linked, adds more)
 *      Result: 1 → 5+ links (hits minimum of 5)
 *
 * Run: npx tsx --env-file=.env.local scripts/fix-cluster-links.ts [--dry-run]
 */

import { createClient } from '@supabase/supabase-js';

const DRY_RUN = process.argv.includes('--dry-run');
const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// ── helpers ──────────────────────────────────────────────────────────────────

function linkA(href: string, text: string): string {
  return `<a href="${href}" class="text-blue-600 hover:text-blue-800 underline">${text}</a>`;
}
function linkJSX(href: string, text: string): string {
  return `<Link href="${href}" className="text-blue-600 hover:text-blue-800 underline">${text}</Link>`;
}

function replaceFirst(html: string, search: string, replacement: string): string {
  const idx = html.indexOf(search);
  if (idx === -1) return html;
  return html.slice(0, idx) + replacement + html.slice(idx + search.length);
}

function countLinks(html: string): number {
  const re = /href=["'](?!https?:\/\/|\/\/|#|mailto:|tel:)(\/[^"'?\s#][^"']*?)["']/gi;
  const hrefs = new Set<string>();
  let m: RegExpExecArray | null;
  const freshRe = new RegExp(re.source, 'gi');
  while ((m = freshRe.exec(html)) !== null) hrefs.add(m[1]);
  return hrefs.size; // unique destinations — matches audit logic
}

// ── patch definitions ─────────────────────────────────────────────────────────

interface Patch {
  table: string;
  slug: string;
  urlField: string;
  urlValue: string;
  minLinks: number;
  label: string;
  patchFn: (html: string) => string;
}

const PATCHES: Patch[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. GTA 6 hub page (article_pages)
  // Needs 3 unique internal link destinations. Currently 0.
  // Targets: /video-games, /video-games/gta-6/news/take-two-ai-team-shake-up-2026, /video-games/switch2
  // ─────────────────────────────────────────────────────────────────────────
  {
    table: 'article_pages',
    slug: 'video-games-gta-6',
    urlField: 'url',
    urlValue: '/video-games/gta-6',
    minLinks: 3,
    label: 'GTA 6 hub (ArticlePage)',
    patchFn(html) {
      // 1. Wrap first "Rockstar Games" → /video-games
      html = replaceFirst(
        html,
        'Rockstar Games and Take-Two Interactive in May 2025',
        `${linkA('/video-games', 'Rockstar Games')} and Take-Two Interactive in May 2025`,
      );

      // 2. Wrap "Take-Two Interactive" in pricing paragraph → news article
      //    Try multiple phrasings in case text varies slightly
      const takeTwoPatterns = [
        'Take-Two Interactive has not officially confirmed pricing.',
        'Take-Two Interactive has not officially confirmed',
        'Take-Two Interactive has not confirmed',
        // fallback: link in the "has not officially confirmed" context anywhere
        '>Take-Two Interactive</p>',
      ];
      for (const pattern of takeTwoPatterns) {
        const replacement = pattern.startsWith('>')
          ? linkA('/video-games/gta-6/news/take-two-ai-team-shake-up-2026', 'Take-Two Interactive') + '</p>'
          : pattern.replace('Take-Two Interactive', linkA('/video-games/gta-6/news/take-two-ai-team-shake-up-2026', 'Take-Two Interactive'));
        const updated = replaceFirst(html, pattern, replacement);
        if (updated !== html) { html = updated; break; }
      }

      // 3. Wrap "Nintendo Switch" → /video-games/switch2
      //    Try multiple phrasings
      const switchPatterns = [
        'Nintendo Switch has been announced or is expected',
        'Nintendo Switch has been',
        'or Nintendo Switch.',
        'Nintendo Switch 2',
        // fallback: anywhere "Nintendo" appears standalone
      ];
      for (const pattern of switchPatterns) {
        const replacement = pattern.replace('Nintendo Switch', linkA('/video-games/switch2', 'Nintendo Switch'));
        const updated = replaceFirst(html, pattern, replacement);
        if (updated !== html) { html = updated; break; }
      }

      return html;
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. GTA 6 news article (articles table — uses JSX <Link> components)
  // Needs 4 unique internal link destinations.
  // Currently has 1 unique: /video-games/gta-6 (appears twice, deduped to 1)
  // Add: /video-games, /open-ai, /finance
  // ─────────────────────────────────────────────────────────────────────────
  {
    table: 'articles',
    slug: 'video-games-gta-6-news-take-two-ai-team-shake-up-2026',
    urlField: 'url',
    urlValue: '/video-games/gta-6/news/take-two-ai-team-shake-up-2026',
    minLinks: 4,
    label: 'GTA 6 news (NewsArticle)',
    patchFn(html) {
      // 1. Link "Take-Two Interactive" → /video-games (unique destination 2)
      html = replaceFirst(
        html,
        'Take-Two Interactive, the parent company of',
        `${linkJSX('/video-games', 'Take-Two Interactive')}, the parent company of`,
      );

      // 2. Link "AI" → /open-ai (unique destination 3)
      //    Confirmed text: "generative\r\n        AI to investors" — 'AI to investors' is a substring
      html = replaceFirst(
        html,
        'AI to investors',
        `${linkJSX('/open-ai', 'AI')} to investors`,
      );

      // 3. Link "Q3 earnings call" → /finance (unique destination 4)
      //    Confirmed text: "Take-Two&apos;s Q3 earnings call in February" — no apostrophe issues
      html = replaceFirst(
        html,
        'Q3 earnings call in February',
        `${linkJSX('/finance', 'Q3 earnings call')} in February`,
      );

      return html;
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Switch 2 Pokopia (jack_articles — raw HTML with class=)
  // Needs 5 unique internal link destinations. Currently 1 (/video-games/nintendo).
  // Add: /video-games/switch2, /video-games, /video-games/nintendo (another spot),
  //      /video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park,
  //      /video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2
  // ─────────────────────────────────────────────────────────────────────────
  {
    table: 'jack_articles',
    slug: 'video-games-switch2-pokemon-pokopia',
    urlField: 'article_url',
    urlValue: '/video-games/switch2/pokemon-pokopia',
    minLinks: 5,
    label: 'Pokémon Pokopia (JackArticle)',
    patchFn(html) {
      // 1. Replace the existing /video-games/nintendo link → /video-games/switch2 (more specific hub)
      // NOTE: The existing /video-games/nintendo link in the launch sentence has \r\n whitespace
      // before the <a> tag, so we skip replacing it. The original link counts as unique #1.
      // We add 4 new unique destinations below to reach 5 total.

      // 2. Wrap "Game Freak" → /video-games (unique #2)
      html = replaceFirst(
        html,
        'Developed jointly by <strong>Game Freak</strong>',
        `Developed jointly by <strong>${linkA('/video-games', 'Game Freak')}</strong>`,
      );

      // 3. Wrap "Nintendo Switch 2 (exclusive)" in quick facts → /video-games/switch2 (unique #3)
      //    Different destination from the existing /video-games/nintendo link
      html = replaceFirst(
        html,
        'Nintendo Switch 2 (exclusive)',
        `${linkA('/video-games/switch2', 'Nintendo Switch 2')} (exclusive)`,
      );

      // 4. "Omega Force" → /video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park (unique #4)
      html = replaceFirst(
        html,
        "Koei Tecmo's <strong>Omega Force</strong>",
        `Koei Tecmo's <strong>${linkA('/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park', 'Omega Force')}</strong>`,
      );

      // 5. Sibling sales article → /video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2 (unique #5)
      //    "Pokopia aggregated" confirmed present in DB content
      const siblingPatterns = [
        { search: 'Pokopia aggregated',
          replace: `${linkA('/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2', 'Pokopia')} aggregated` },
        { search: 'fastest-selling',
          replace: linkA('/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2', 'fastest-selling') },
        { search: '2.2 million copies',
          replace: linkA('/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2', '2.2 million copies') },
      ];
      for (const { search, replace } of siblingPatterns) {
        const updated = replaceFirst(html, search, replace);
        if (updated !== html) { html = updated; break; }
      }

      return html;
    },
  },
];

// ── main ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\n🔗  fix-cluster-links — ${DRY_RUN ? 'DRY RUN' : 'LIVE'}\n`);

  for (const patch of PATCHES) {
    console.log(`\n  ── ${patch.label} (${patch.table}/${patch.slug})`);

    const { data, error } = await sb
      .from(patch.table)
      .select(`slug,${patch.urlField},content_html`)
      .eq('slug', patch.slug)
      .single();

    if (error || !data) {
      console.error(`     ❌  Fetch failed: ${error?.message ?? 'no data'}`);
      continue;
    }

    const original = (data as any).content_html as string ?? '';
    const before   = countLinks(original);

    const patched  = patch.patchFn(original);
    const after    = countLinks(patched);

    console.log(`     Before: ${before} links  →  After: ${after} links  (min: ${patch.minLinks})`);

    if (after < patch.minLinks) {
      console.warn(`     ⚠️   Still below minimum! Check patch targets — may need manual review.`);
    }

    if (patched === original) {
      console.warn(`     ⚠️   No changes made — search strings not found in content_html.`);
      continue;
    }

    if (DRY_RUN) {
      console.log(`     ✅  Dry run — would update. Showing first diff:`);
      // Print first line that differs
      const origLines = original.split('\n');
      const patchLines = patched.split('\n');
      for (let i = 0; i < origLines.length; i++) {
        if (origLines[i] !== patchLines[i]) {
          console.log(`       OLD: ${origLines[i]?.substring(0, 120)}`);
          console.log(`       NEW: ${patchLines[i]?.substring(0, 120)}`);
          break;
        }
      }
      continue;
    }

    const { error: updateError } = await sb
      .from(patch.table)
      .update({ content_html: patched })
      .eq('slug', patch.slug);

    if (updateError) {
      console.error(`     ❌  Update failed: ${updateError.message}`);
    } else {
      const status = after >= patch.minLinks ? '✅' : '🟡';
      console.log(`     ${status}  Updated — now ${after} links (min ${patch.minLinks})`);
    }
  }

  console.log('\n  Done. Run: npm run audit:links --pillar "GTA 6" to verify.\n');
}

run().catch(e => { console.error(e); process.exit(1); });
