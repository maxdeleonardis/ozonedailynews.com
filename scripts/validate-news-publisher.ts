/**
 * validate-news-publisher.ts
 *
 * Pre-submission technical checklist for Google News, Bing News, and Apple News.
 * Run this before submitting applications or after major changes to catch blockers.
 *
 * Usage:
 *   npm run validate:news
 *   npm run validate:news -- --verbose
 *
 * Checks:
 *   GOOGLE  — Technical requirements for Google News / Top Stories eligibility
 *   BING    — Requirements for Bing News Publisher Portal application
 *   APPLE   — Requirements for Apple News Publisher application
 *   FEEDS   — RSS/feed health checks
 *   SCHEMA  — JSON-LD NewsArticle schema coverage
 *   EEAT    — E-E-A-T signals checked on this site
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const VERBOSE = process.argv.includes('--verbose');

// ─── Color helpers ────────────────────────────────────────────────────────────
const c = {
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
};

interface CheckResult {
  id: string;
  label: string;
  status: 'pass' | 'fail' | 'warn' | 'manual';
  detail?: string;
}

const results: CheckResult[] = [];

function pass(id: string, label: string, detail?: string) {
  results.push({ id, label, status: 'pass', detail });
}
function fail(id: string, label: string, detail?: string) {
  results.push({ id, label, status: 'fail', detail });
}
function warn(id: string, label: string, detail?: string) {
  results.push({ id, label, status: 'warn', detail });
}
function manual(id: string, label: string, detail?: string) {
  results.push({ id, label, status: 'manual', detail });
}

// ─── File existence helpers ───────────────────────────────────────────────────

function fileExists(rel: string): boolean {
  return fs.existsSync(path.join(ROOT, rel));
}

function readFile(rel: string): string {
  try { return fs.readFileSync(path.join(ROOT, rel), 'utf-8'); }
  catch { return ''; }
}

function findFiles(dir: string, ext: string): string[] {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const results: string[] = [];
  function walk(d: string) {
    for (const f of fs.readdirSync(d)) {
      const full = path.join(d, f);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (f.endsWith(ext)) results.push(full);
    }
  }
  walk(abs);
  return results;
}

// ─── Check groups ─────────────────────────────────────────────────────────────

function checkFeeds() {
  console.log(c.bold('\n── RSS / Feeds ──────────────────────────────────────────\n'));

  // RSS route exists
  if (fileExists('app/rss.xml/route.ts')) {
    const src = readFile('app/rss.xml/route.ts');

    // Content-Type: must be application/rss+xml
    if (src.includes('application/rss+xml')) {
      pass('FEED1', 'RSS Content-Type is application/rss+xml');
    } else {
      fail('FEED1', 'RSS Content-Type must be application/rss+xml (not application/xml)',
        'Apple News and W3C validator require application/rss+xml');
    }

    // content:encoded namespace
    if (src.includes('content:encoded') && src.includes('purl.org/rss/1.0/modules/content')) {
      pass('FEED2', 'RSS has content:encoded namespace (required for Apple News)');
    } else {
      fail('FEED2', 'RSS missing content:encoded — Apple News requires full article body',
        'Add xmlns:content="http://purl.org/rss/1.0/modules/content/" and <content:encoded> per item');
    }

    // enclosure length attribute
    if (src.includes('length=')) {
      pass('FEED3', 'RSS <enclosure> has length attribute (W3C required)');
    } else {
      fail('FEED3', 'RSS <enclosure> missing length attribute — W3C spec requires it',
        'Add length="0" when actual byte size is unknown');
    }

    // media:thumbnail
    if (src.includes('media:thumbnail')) {
      pass('FEED4', 'RSS has media:thumbnail (Google Discover / aggregators)');
    } else {
      warn('FEED4', 'RSS missing media:thumbnail — recommended for Google Discover',
        'Add <media:thumbnail url="..." width="1200" height="675"/> per item');
    }

    // dc:creator
    if (src.includes('dc:creator')) {
      pass('FEED5', 'RSS has dc:creator (author field for aggregators)');
    } else {
      warn('FEED5', 'RSS missing dc:creator — recommended for aggregators');
    }

    // published_at fallback
    if (src.includes('published_at')) {
      pass('FEED6', 'RSS uses ISO published_at for precise pubDate');
    } else {
      warn('FEED6', 'RSS pubDate relies on display string publish_date — ISO timestamp preferred');
    }
  } else {
    fail('FEED1', 'RSS route missing at app/rss.xml/route.ts');
  }

  // News sitemap
  if (fileExists('app/news-sitemap.xml/route.ts')) {
    const src = readFile('app/news-sitemap.xml/route.ts');
    if (src.includes('force-dynamic')) {
      pass('FEED7', 'News sitemap is force-dynamic (required for freshness)');
    } else {
      fail('FEED7', 'News sitemap must be force-dynamic — Google News requires real-time freshness');
    }
    if (src.includes('NEWS_WINDOW_DAYS')) {
      pass('FEED8', 'News sitemap has configurable freshness window');
    }
    if (src.includes('news:publication_date')) {
      pass('FEED9', 'News sitemap has news:publication_date element');
    } else {
      fail('FEED9', 'News sitemap missing news:publication_date — required by Google News protocol');
    }
  } else {
    fail('FEED7', 'News sitemap missing at app/news-sitemap.xml/route.ts');
  }

  // feed.json exists (Apple News can also ingest JSON Feed)
  if (fileExists('app/feed.json/route.ts')) {
    pass('FEED10', 'JSON Feed exists at /feed.json (Apple News fallback)');
  } else {
    warn('FEED10', 'No JSON Feed at /feed.json — Apple News can use this as fallback');
  }
}

function checkSchema() {
  console.log(c.bold('\n── Schema / JSON-LD ─────────────────────────────────────\n'));

  const schemaFile = readFile('components/articles/NewsArticleSchema.tsx');

  // NewsArticle type
  if (schemaFile.includes('"NewsArticle"')) {
    pass('SCH1', 'NewsArticleSchema uses @type: NewsArticle');
  } else {
    fail('SCH1', 'NewsArticleSchema missing @type: NewsArticle');
  }

  // Image dimensions — must be 1200x675 for Top Stories
  if (schemaFile.includes('675')) {
    pass('SCH2', 'NewsArticle schema image height is 675 (Google Top Stories 16:9 requirement)');
  } else if (schemaFile.includes('630')) {
    fail('SCH2', 'NewsArticle schema image height is 630 — must be 675 for Google Top Stories eligibility',
      'Google Top Stories requires 1200x675 minimum (16:9). 1200x630 fails silently.');
  } else {
    warn('SCH2', 'NewsArticle schema image dimensions not detected — verify 1200x675');
  }

  // speakable
  if (schemaFile.includes('SpeakableSpecification')) {
    pass('SCH3', 'NewsArticle schema has speakable (voice/AI assistant)');
  } else {
    warn('SCH3', 'NewsArticle schema missing speakable — add for voice search and AI citation');
  }

  // isAccessibleForFree
  if (schemaFile.includes('isAccessibleForFree')) {
    pass('SCH4', 'NewsArticle schema has isAccessibleForFree: true (Google News requirement)');
  } else {
    fail('SCH4', 'NewsArticle schema missing isAccessibleForFree — required for Google News');
  }

  // Publisher as NewsMediaOrganization
  if (schemaFile.includes('NewsMediaOrganization')) {
    pass('SCH5', 'Publisher type is NewsMediaOrganization');
  } else {
    warn('SCH5', 'Publisher should be @type: NewsMediaOrganization (not just Organization)');
  }

  // OrganizationSchema policies
  if (schemaFile.includes('ethicsPolicy') && schemaFile.includes('correctionsPolicy')) {
    pass('SCH6', 'OrganizationSchema has ethicsPolicy and correctionsPolicy (CLAIMREVIEW signals)');
  } else {
    warn('SCH6', 'OrganizationSchema missing ethicsPolicy/correctionsPolicy — Google News quality signals');
  }

  // False nonprofit claim removed
  if (!schemaFile.includes('Nonprofit501c3')) {
    pass('SCH7', 'No false Nonprofit501c3 claim in schema');
  } else {
    fail('SCH7', 'Schema contains nonprofitStatus: Nonprofit501c3 — remove if not actually 501(c)(3)',
      'False structured data claims can trigger manual penalties. Use @type: NGO only if verified.');
  }
}

function checkPages() {
  console.log(c.bold('\n── Required Pages ───────────────────────────────────────\n'));

  // About page
  if (fileExists('app/about/page.tsx')) {
    pass('PAGE1', '/about page exists (Google News, Bing News, Apple News requirement)');
  } else {
    fail('PAGE1', '/about page missing — required by all news publisher programs');
  }

  // Editorial standards
  if (fileExists('app/editorial-standards/page.tsx')) {
    pass('PAGE2', '/editorial-standards page exists');
  } else {
    fail('PAGE2', '/editorial-standards page missing — required for Google News');
  }

  // Corrections
  if (fileExists('app/corrections/page.tsx')) {
    pass('PAGE3', '/corrections page exists');
  } else {
    fail('PAGE3', '/corrections page missing — required for Google News');
  }

  // Contact
  const hasContact = fileExists('app/get-help/page.tsx') ||
    fileExists('app/contact/page.tsx') ||
    readFile('app/about/page.tsx').toLowerCase().includes('contact');
  if (hasContact) {
    pass('PAGE4', 'Contact information exists (required for Apple News, Bing News)');
  } else {
    fail('PAGE4', 'No contact page — Apple News and Bing News require reachable contact info');
  }

  // Privacy policy
  if (fileExists('app/privacy-policy/page.tsx')) {
    pass('PAGE5', '/privacy-policy exists (Apple News requirement)');
  } else {
    fail('PAGE5', '/privacy-policy missing — required for Apple News Publisher');
  }

  // Author pages
  const authorPages = findFiles('app/authors', 'page.tsx');
  if (authorPages.length >= 2) {
    pass('PAGE6', `Author pages exist (${authorPages.length} found) — E-E-A-T signal`);
  } else {
    fail('PAGE6', 'Author pages missing or insufficient — named author bios required for E-E-A-T');
  }
}

function checkRobots() {
  console.log(c.bold('\n── Robots / Crawlers ────────────────────────────────────\n'));

  const robotsSrc = readFile('app/robots.ts');

  // Googlebot-News not blocked
  if (!robotsSrc.includes('Googlebot-News')) {
    pass('BOT1', 'Googlebot-News not blocked (good — do not add it unless intentionally blocking)');
  } else if (robotsSrc.includes("userAgent: 'Googlebot-News'") && robotsSrc.includes("allow: '/'")) {
    pass('BOT1', 'Googlebot-News explicitly allowed');
  } else {
    fail('BOT1', 'Googlebot-News may be blocked — verify it can crawl article pages');
  }

  // Bingbot allowed
  if (robotsSrc.includes("'Bingbot'") || robotsSrc.includes('"Bingbot"')) {
    pass('BOT2', 'Bingbot explicitly configured in robots.ts');
  } else {
    warn('BOT2', 'Bingbot not explicitly configured — relies on wildcard allow');
  }

  // No static robots.txt in public
  if (!fileExists('public/robots.txt')) {
    pass('BOT3', 'No static public/robots.txt (correct — would override dynamic robots.ts)');
  } else {
    fail('BOT3', 'public/robots.txt exists and OVERRIDES app/robots.ts — delete it immediately',
      'Next.js serves /public before App Router. Static robots.txt silences your dynamic robots.ts.');
  }

  // No static sitemap.xml in public
  if (!fileExists('public/sitemap.xml')) {
    pass('BOT4', 'No static public/sitemap.xml (correct)');
  } else {
    fail('BOT4', 'public/sitemap.xml exists and overrides dynamic sitemap.ts — delete it');
  }
}

function checkIndexNow() {
  console.log(c.bold('\n── IndexNow (Bing / Yandex / Seznam / Naver / Mojeek) ───\n'));

  const hasKey = process.env.INDEXNOW_KEY || readFile('.env.local').includes('INDEXNOW_KEY=');
  if (hasKey) {
    pass('IDX1', 'INDEXNOW_KEY is set in .env.local');
  } else {
    fail('IDX1', 'INDEXNOW_KEY not set — run npm run indexnow:setup',
      'Without a key, IndexNow pings will fail silently. No Bing/Yandex auto-notification on publish.');
  }

  // Check key file in public
  const envContent = readFile('.env.local');
  const keyMatch = envContent.match(/INDEXNOW_KEY=([a-f0-9]+)/);
  if (keyMatch) {
    const key = keyMatch[1];
    const keyFile = `public/${key}.txt`;
    if (fileExists(keyFile)) {
      pass('IDX2', `IndexNow key verification file exists at ${keyFile}`);
    } else {
      fail('IDX2', `IndexNow key file missing at ${keyFile}`,
        'Bing fetches this file to verify domain ownership. Without it, all IndexNow pings return 403.');
    }
  }

  if (fileExists('scripts/indexnow-ping.ts')) {
    pass('IDX3', 'IndexNow ping script exists (scripts/indexnow-ping.ts)');
  } else {
    fail('IDX3', 'IndexNow ping script missing — run npm run indexnow:setup');
  }

  const publishSrc = readFile('scripts/wiki-publish.ts');
  if (publishSrc.includes('pingIndexNow')) {
    pass('IDX4', 'wiki:publish auto-pings IndexNow on every successful publish');
  } else {
    warn('IDX4', 'wiki:publish does not call pingIndexNow — Bing will not be notified on publish');
  }
}

function checkManualSteps() {
  console.log(c.bold('\n── Manual Steps Required (external) ────────────────────\n'));

  manual('MAN1', 'Bing Webmaster Tools — verify site ownership',
    'https://www.bing.com/webmasters → Add site → verify via DNS TXT or XML file');
  manual('MAN2', 'Bing Webmaster Tools — submit sitemaps',
    'Submit: /sitemap.xml and /news-sitemap.xml after verification');
  manual('MAN3', 'Bing News Publisher Portal — apply',
    'https://www.bing.com/news/publisher — requires Bing Webmaster Tools verification first');
  manual('MAN4', 'Apple News Publisher — apply',
    'https://news.apple.com/publisher — submit /rss.xml as your feed URL');
  manual('MAN5', 'W3C Feed Validator — validate RSS before submitting to Apple/Bing',
    'https://validator.w3.org/feed/ → enter https://www.ozonenetwork.news/rss.xml');
  manual('MAN6', 'Google Search Console — submit news sitemap',
    'https://search.google.com/search-console → Sitemaps → submit /news-sitemap.xml');
  manual('MAN7', 'Online News Association membership',
    'https://journalists.org/membership — ~$100/year — E-E-A-T signal for all platforms');
  manual('MAN8', 'Society of Professional Journalists membership (key authors)',
    'https://spj.org/join.asp — ~$75/person/year — link from author pages after joining');
  manual('MAN9', 'WHOIS transparency check',
    'https://whois.domaintools.com/ozonenetwork.news — registrant should show org name, not privacy protect');
  manual('MAN10', 'Perplexity — no submission needed, crawls automatically',
    'Ensure top articles have DirectAnswer + KeyTakeaways GEO components for citation eligibility');
}

// ─── Run all checks ───────────────────────────────────────────────────────────

function main() {
  console.log(c.bold(c.cyan('\n╔══════════════════════════════════════════════════════╗')));
  console.log(c.bold(c.cyan('║   ObjectWire — News Publisher Pre-Submission Check   ║')));
  console.log(c.bold(c.cyan('╚══════════════════════════════════════════════════════╝')));
  console.log(c.gray(`   Date: ${new Date().toISOString().split('T')[0]}`));
  console.log(c.gray('   Target: Google News, Bing News, Apple News\n'));

  checkFeeds();
  checkSchema();
  checkPages();
  checkRobots();
  checkIndexNow();
  checkManualSteps();

  // ── Summary ──────────────────────────────────────────────────────────────
  const passed  = results.filter(r => r.status === 'pass');
  const failed  = results.filter(r => r.status === 'fail');
  const warned  = results.filter(r => r.status === 'warn');
  const manuals = results.filter(r => r.status === 'manual');

  console.log(c.bold('\n── Results ──────────────────────────────────────────────\n'));
  for (const r of results) {
    const icon = r.status === 'pass' ? c.green('✅') : r.status === 'fail' ? c.red('❌') : r.status === 'warn' ? c.yellow('⚠️ ') : c.cyan('📋');
    const label = r.status === 'fail' ? c.red(r.label) : r.status === 'warn' ? c.yellow(r.label) : r.label;
    console.log(`  ${icon}  [${r.id}] ${label}`);
    if (r.detail && (VERBOSE || r.status === 'fail')) {
      console.log(c.gray(`          ${r.detail}`));
    }
  }

  console.log(c.bold('\n── Summary ──────────────────────────────────────────────\n'));
  console.log(`  ${c.green(`✅ ${passed.length} passed`)}  |  ${failed.length > 0 ? c.red(`❌ ${failed.length} failed`) : c.green('❌ 0 failed')}  |  ${c.yellow(`⚠️  ${warned.length} warnings`)}  |  ${c.cyan(`📋 ${manuals.length} manual steps`)}`);

  if (failed.length > 0) {
    console.log(c.red('\n  ⛔  Fix all failed checks before submitting to Bing News or Apple News.'));
    console.log(c.red('      A single technical failure can cause your application to be rejected.\n'));
    process.exit(1);
  } else if (warned.length > 0) {
    console.log(c.yellow('\n  ⚠️   Warnings present — fix before submission for best results.\n'));
  } else {
    console.log(c.green('\n  ✅  All automated checks passed. Complete the manual steps above before submitting.\n'));
  }
}

main();
