#!/usr/bin/env tsx
/**
 * scripts/enrich-jack-articles.ts
 *
 * Phase 2 — AlfasaAutoSEO
 *
 * Reads every static JSON file in content/static/jack_articles/ and enriches:
 *   1. breadcrumbs  — auto-generated from article_url path
 *   2. related_articles — auto-selected from content_registry.json by category match
 *   3. footer_links — standard OzoneNews footer nav
 *
 * Writes files in-place. Safe to re-run — only updates fields that are empty/missing.
 *
 * Usage:
 *   npx tsx scripts/enrich-jack-articles.ts
 *   npx tsx scripts/enrich-jack-articles.ts --force   (overwrites even if already set)
 *   npx tsx scripts/enrich-jack-articles.ts --dry-run (preview only, no writes)
 */

import fs from 'fs';
import path from 'path';

const JACK_DIR = path.join(process.cwd(), 'content', 'static', 'jack_articles');
const REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');
const BASE_URL = 'https://www.ozonenetwork.news';
const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');

// ─── Load registry ────────────────────────────────────────────────────────────
interface RegistryEntry {
  slug: string;
  title: string;
  category: string;
  tags?: string[];
  publishDate?: string;
  imageUrl?: string;
}

function loadRegistry(): RegistryEntry[] {
  try {
    const raw = fs.readFileSync(REGISTRY_PATH, 'utf8');
    return JSON.parse(raw) as RegistryEntry[];
  } catch {
    console.error('❌ Could not load content_registry.json');
    return [];
  }
}

// ─── Breadcrumb builder ───────────────────────────────────────────────────────
interface Breadcrumb {
  href: string;
  label: string;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
}

// Known hub labels
const HUB_LABELS: Record<string, string> = {
  'crypto':           'Crypto',
  'tech':             'Tech',
  'technology':       'Technology',
  'finance':          'Finance',
  'video-games':      'Video Games',
  'entertainment':    'Entertainment',
  'trump':            'Trump',
  'open-ai':          'OpenAI',
  'google':           'Google',
  'nvidia':           'Nvidia',
  'microsoft':        'Microsoft',
  'apple':            'Apple',
  'meta':             'Meta',
  'amazon':           'Amazon',
  'bio-hacking':      'Bio-Hacking',
  'copyright':        'Copyright',
  'california':       'California',
  'airlines':         'Airlines',
  'shopify':          'Shopify',
  'news':             'News',
  'define':           'Define',
  'cars':             'Cars',
  'claude':           'Claude',
  'cursor':           'Cursor',
  'events':           'Events',
  'winter-olympics':  'Winter Olympics',
  'world-cup':        'World Cup 2026',
  'politics':         'Politics',
  'saas':             'SaaS',
  'blackrock':        'BlackRock',
  'elon-musk':        'Elon Musk',
  'influencer':       'Influencer',
  'github':           'GitHub',
  'netflix':          'Netflix',
};

function buildBreadcrumbs(articleUrl: string): Breadcrumb[] {
  if (!articleUrl) return [];
  const parts = articleUrl.replace(/^\//, '').split('/').filter(Boolean);
  const crumbs: Breadcrumb[] = [{ href: '/', label: 'Home' }];

  // Add intermediate hubs (all except the last segment which is the article)
  for (let i = 0; i < parts.length - 1; i++) {
    const slug = '/' + parts.slice(0, i + 1).join('/');
    const label = HUB_LABELS[parts[i]] ?? capitalize(parts[i]);
    crumbs.push({ href: slug, label });
  }

  return crumbs;
}

// ─── Category-based color for related articles ────────────────────────────────
const CATEGORY_COLOR: Record<string, string> = {
  'Crypto':         'green',
  'Tech':           'blue',
  'Technology':     'blue',
  'Finance':        'yellow',
  'Gaming':         'purple',
  'Entertainment':  'orange',
  'Politics':       'red',
  'Science':        'cyan',
  'Sports':         'green',
  'World':          'gray',
  'News':           'gray',
  'Business':       'blue',
};

function categoryColor(cat: string): string {
  return CATEGORY_COLOR[cat] ?? 'gray';
}

// ─── Related article selector ─────────────────────────────────────────────────
interface RelatedArticle {
  href: string;
  category: string;
  categoryColor: string;
  title: string;
}

function findRelated(
  currentSlug: string,
  category: string,
  tags: string[],
  registry: RegistryEntry[],
  count = 4,
): RelatedArticle[] {
  const normalCat = category?.toLowerCase() ?? '';
  const tagSet = new Set(tags.map((t) => t.toLowerCase()));

  // Score each registry entry
  const scored = registry
    .filter((e) => {
      // Exclude self
      if (e.slug === currentSlug || e.slug.endsWith(currentSlug)) return false;
      // Must be a real article (at least 2 path segments)
      if (e.slug.split('/').filter(Boolean).length < 2) return false;
      return true;
    })
    .map((e) => {
      let score = 0;
      const eCat = (e.category ?? '').toLowerCase();
      // Strong same-category match
      if (eCat === normalCat) score += 5;
      // Same top-level slug prefix (same cluster)
      const currentTop = currentSlug.split('/').filter(Boolean)[0] ?? '';
      const entryTop = e.slug.split('/').filter(Boolean)[0] ?? '';
      if (currentTop && entryTop === currentTop) score += 3;
      // Tag overlap
      for (const t of e.tags ?? []) {
        if (tagSet.has(t.toLowerCase())) score += 1;
      }
      // Penalise cross-category noise: if current article is gaming, never recommend finance/politics
      const INCOMPATIBLE: Record<string, string[]> = {
        gaming: ['Finance', 'Politics', 'Crypto', 'Business'],
        finance: ['Gaming', 'Gaming'],
        crypto: ['Gaming'],
      };
      const incompatible = INCOMPATIBLE[normalCat] ?? [];
      if (incompatible.map((c) => c.toLowerCase()).includes(eCat)) score -= 10;
      return { entry: e, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || (b.entry.publishDate ?? '').localeCompare(a.entry.publishDate ?? ''))
    .slice(0, count);

  return scored.map(({ entry: e }) => ({
    href: e.slug,
    category: e.category ?? category,
    categoryColor: categoryColor(e.category ?? category),
    title: e.title,
  }));
}

// ─── owire.org cross-link map ─────────────────────────────────────────────────
// Maps slug keywords → owire.org cross-link
// Add entries here as owire.org content grows.
const OWIRE_LINK_MAP: Array<{
  match: string | RegExp;
  link: { heading: string; description: string; href: string; cta?: string };
}> = [
  {
    match: /entertainment|hbo|netflix|disney|streaming|movie|film|box.office|super.mario|euphoria|paramount|wbd/i,
    link: {
      heading: 'Entertainment Coverage on owire.org',
      description: 'Deeper coverage of streaming, film, and pop culture on our sister site.',
      href: 'https://owire.org/entertainment',
      cta: 'Explore Entertainment →',
    },
  },
  {
    match: /mrbeast|creator|influencer|tiktok.creator|youtube.creator|twitch/i,
    link: {
      heading: 'Creator Economy Coverage on owire.org',
      description: 'Full creator profiles, earnings data, and platform analysis on owire.org.',
      href: 'https://owire.org/creators',
      cta: 'Browse Creator Profiles →',
    },
  },
  {
    match: /gaming.*culture|esport|streamer|gaming.influencer/i,
    link: {
      heading: 'Gaming Culture on owire.org',
      description: 'Gaming personalities, esports coverage, and streamer profiles.',
      href: 'https://owire.org/gaming',
      cta: 'Read Gaming Coverage →',
    },
  },
  {
    match: /athlete|sports.brand|nba|nfl|mls.player|formula.1.driver/i,
    link: {
      heading: 'Sports Personalities on owire.org',
      description: 'Athlete profiles, brand deals, and sports culture coverage.',
      href: 'https://owire.org/sports',
      cta: 'Read Athlete Coverage →',
    },
  },
];

function findOwireLink(article: Record<string, unknown>) {
  const text = [
    String(article.title ?? ''),
    String(article.subtitle ?? ''),
    String(article.description ?? ''),
    String(article.category_label ?? ''),
    ...(article.keywords as string[] ?? []),
  ].join(' ').toLowerCase();

  for (const { match, link } of OWIRE_LINK_MAP) {
    if (typeof match === 'string' ? text.includes(match) : match.test(text)) {
      return link;
    }
  }
  return null;
}

// ─── Standard footer links ────────────────────────────────────────────────────
const STANDARD_FOOTER_LINKS = [
  { href: '/editorial-standards', label: 'Editorial Standards' },
  { href: '/corrections',         label: 'Corrections Policy' },
  { href: '/about',               label: 'About OzoneNews' },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const registry = loadRegistry();
  console.log(`📚 Registry: ${registry.length} entries loaded`);

  const files = fs.readdirSync(JACK_DIR).filter((f) => f.endsWith('.json') && !f.startsWith('_'));
  console.log(`📁 Jack articles: ${files.length} files found\n`);

  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    const fp = path.join(JACK_DIR, file);
    const raw = fs.readFileSync(fp, 'utf8');
    let article: Record<string, unknown>;
    try {
      article = JSON.parse(raw);
    } catch {
      console.warn(`⚠️  Could not parse ${file} — skipping`);
      continue;
    }

    let changed = false;

    // 1. Breadcrumbs
    const existingCrumbs = (article.breadcrumbs as unknown[]) ?? [];
    if ((FORCE || existingCrumbs.length === 0) && article.article_url) {
      const crumbs = buildBreadcrumbs(String(article.article_url));
      if (crumbs.length > 1) {
        article.breadcrumbs = crumbs;
        changed = true;
      }
    }

    // 2. Related articles
    const existingRelated = (article.related_articles as unknown[]) ?? [];
    if (FORCE || existingRelated.length === 0) {
      const articleSlug = String(article.article_url ?? '/' + file.replace('.json', '').replace(/__/g, '/'));
      const category = String(article.category_label ?? article.section ?? 'News');
      const tags = (article.keywords as string[]) ?? [];
      const related = findRelated(articleSlug, category, tags, registry);
      if (related.length > 0) {
        article.related_articles = related;
        changed = true;
      }
    }

    // 3. Footer links
    const existingFooter = (article.footer_links as unknown[]) ?? [];
    if (FORCE || existingFooter.length === 0) {
      article.footer_links = STANDARD_FOOTER_LINKS;
      changed = true;
    }

    // 4. owire.org cross-link (entertainment/creator/sports categories only)
    if (FORCE || !article.owire_link) {
      const owireLink = findOwireLink(article);
      if (owireLink) {
        article.owire_link = owireLink;
        changed = true;
      }
    }

    if (changed) {
      if (!DRY_RUN) {
        fs.writeFileSync(fp, JSON.stringify(article, null, 2) + '\n');
      }
      updated++;
      console.log(`  ✅ ${DRY_RUN ? '[DRY] ' : ''}Updated: ${file}`);
    } else {
      skipped++;
    }
  }

  console.log(`\n📊 Done — ${updated} updated, ${skipped} already complete`);
  if (DRY_RUN) console.log('   (dry run — no files written)');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
