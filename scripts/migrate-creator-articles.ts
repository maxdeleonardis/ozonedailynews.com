#!/usr/bin/env tsx
// =============================================================================
// scripts/migrate-creator-articles.ts
// =============================================================================
// Upserts creator_articles rows into Supabase.
//
// Each entry in CREATOR_ARTICLES below maps 1-to-1 with a creator_articles row.
// Image URLs resolve against the Supabase media bucket so production serves
// images from CDN, not from the Next.js /public folder.
//
// Usage:
//   npm run creator:migrate          — upsert all rows
//   npm run creator:migrate-dry      — preview without writing
//
// Requires in .env.local:
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY   (bypasses RLS)
// =============================================================================

import * as path from 'path';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing Supabase env vars in .env.local');
  process.exit(1);
}

const DRY_RUN = process.argv.includes('--dry-run');
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Media bucket base ─────────────────────────────────────────────────────────
// Images live at: <BUCKET_BASE>/<path-relative-to-public>
const BUCKET_BASE = `${SUPABASE_URL}/storage/v1/object/public/blog-images`;

/** Resolve a /public-relative path to the Supabase CDN URL */
function media(publicPath: string): string {
  return `${BUCKET_BASE}${publicPath}`;
}

// =============================================================================
// CREATOR ARTICLES DATA
// Add new entries here; each entry will be upserted by slug.
// =============================================================================

const CREATOR_ARTICLES = [

  // ──────────────────────────────────────────────────────────────────────────
  // ALYSA LIU — 2026 Olympic Gold Medalist, Women's Figure Skating
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: 'winter-olympics/usa/alysa-liu',
    status: 'published',

    // ── JSON-LD Schema ────────────────────────────────────────────────────
    schema_title:          "Alysa Liu - Olympic Gold Medalist, Figure Skater | Milano Cortina 2026",
    schema_description:    "Full biography of Alysa Liu, 2026 Olympic gold medalist in women's singles figure skating and three-time U.S. Champion.",
    schema_author:         'ObjectWire Olympic Bureau',
    schema_author_url:     null,
    schema_article_url:    'https://www.objectwire.org/winter-olympics/usa/alysa-liu',
    schema_image_url:      media('/winter-olympics/alysa-liu-2026-olympic-gold.jpeg'),
    schema_section:        'Winter Olympics',
    schema_keywords:       ['Alysa Liu', 'figure skating', "women's singles", 'Olympic gold', 'Milano Cortina 2026', 'Team USA'],
    schema_published_time: '2026-02-19T18:00:00Z',
    schema_modified_time:  '2026-02-20T10:00:00Z',

    // ── Breadcrumbs ───────────────────────────────────────────────────────
    breadcrumbs: [
      { name: 'Home',           item: '/' },
      { name: 'Winter Olympics', item: '/winter-olympics' },
      { name: 'Team USA',        item: '/winter-olympics/usa' },
      { name: 'Alysa Liu',       item: '/winter-olympics/usa/alysa-liu' },
    ],

    // ── Hero ──────────────────────────────────────────────────────────────
    hero_image_src:   media('/winter-olympics/alysa-liu-2026-olympic-gold.jpeg'),
    hero_image_alt:   'Alysa Liu - Olympic gold medalist at Milano Cortina 2026',
    hero_gradient:    'linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #b45309 100%)',
    hero_name:        'Alysa Liu',
    hero_subtitle:    "Olympic Gold Medalist · Women's Figure Skating · Milano Cortina 2026",
    hero_description: 'California-born Chinese-American figure skater who ended a 20-year American medal drought in women\'s singles with a breathtaking 233.17-point performance in Milan, Italy. The youngest U.S. Champion in history, reborn as an Olympic gold medalist.',
    hero_badges: [
      { label: 'Winter Olympics 2026',              style: 'default' },
      { label: 'Team USA · Figure Skating · Gold',  style: 'secondary' },
      { label: '🥇 Olympic Champion',               style: 'achievement' },
    ],
    hero_cta_buttons: [
      { href: '/winter-olympics',              label: '🏅 Olympics Hub',       variant: 'secondary' },
      { href: '/winter-olympics/usa',          label: '🇺🇸 Team USA',         variant: 'secondary' },
      { href: '/winter-olympics/usa/ilia-malinin', label: '⛸ Ilia Malinin Profile', variant: 'accent' },
    ],

    // ── Sidebar: Infobox ──────────────────────────────────────────────────
    sidebar_infobox_image_src:  media('/winter-olympics/alysa-liu-2026-olympic-gold.jpeg'),
    sidebar_infobox_image_alt:  'Alysa Liu at the 2026 Winter Olympics',
    sidebar_infobox_name:       'Alysa Liu',
    sidebar_infobox_subtitle:   '2026 Olympic Champion',
    sidebar_infobox_rows: [
      { label: 'Full Name',        value: 'Alysa Liu' },
      { label: 'Born',             value: 'August 8, 2005' },
      { label: 'Age',              value: '20 years old' },
      { label: 'Origin',           value: 'Fremont, California, USA' },
      { label: 'Nationality',      value: 'American (Chinese-American)' },
      { label: 'Discipline',       value: "Ladies' Singles Figure Skating" },
      { label: 'Olympic Gold',     value: '2026 Milano Cortina' },
      { label: 'Score',            value: '233.17 pts (Olympic gold)' },
      { label: 'US Champion',      value: '2019, 2020, 2026' },
      { label: 'Grand Prix Final', value: 'Champion 2024-25' },
      { label: 'Signature Jump',   value: 'Triple Axel' },
      { label: 'Status',           value: 'Active (2026)' },
    ],

    // ── Sidebar: Callout ──────────────────────────────────────────────────
    sidebar_callout: {
      title:    '🥇 Olympic Champion',
      body:     'Alysa Liu won gold at the 2026 Winter Olympics in Milano Cortina with a score of 233.17 points, ending a 20-year American medal drought in women\'s singles figure skating.',
      ctaLabel: 'Full Olympics Coverage',
      ctaHref:  '/winter-olympics',
      color:    'yellow',
    },

    // ── Sidebar: Timeline ─────────────────────────────────────────────────
    sidebar_timeline: [
      { year: '2005', event: 'Born August 8 in Fremont, California. Chinese-American heritage.' },
      { year: '2015', event: 'Begins competing in figure skating; rapid progression through junior ranks.' },
      { year: '2019', event: 'Wins first U.S. Championship at age 13, the youngest U.S. champion in history.' },
      { year: '2020', event: 'Defends U.S. Championship title at age 14.' },
      { year: '2022', event: 'Left off Team USA for Beijing 2022 Olympics. Begins full technical rebuild.' },
      { year: '2023', event: 'Returns to competition with overhauled programs and refined artistry.' },
      { year: '2024', event: 'Grand Prix Final champion 2024-25 season; named U.S. team favorite for 2026.' },
      { year: '2026', event: 'Wins third U.S. Championship in January 2026.' },
      { year: '2026', event: 'Wins Olympic gold at Milano Cortina on 233.17 points, ending a 20-year American medal drought.' },
    ],

    // ── Sidebar: Related Links ────────────────────────────────────────────
    sidebar_related_links: [
      { href: '/winter-olympics',                                      label: 'Milano Cortina 2026 Hub' },
      { href: '/winter-olympics/usa',                                  label: 'Team USA Medal Results' },
      { href: '/winter-olympics/usa/ilia-malinin',                     label: 'Ilia Malinin Profile' },
      { href: '/winter-olympics/usa/elana-meyers-taylor-bobsled-gold', label: 'Elana Meyers Taylor Gold' },
      { href: '/winter-olympics/usa/hannah-bilka',                     label: 'Hannah Bilka - Hockey Gold' },
      { href: '/winter-olympics/mikaela-shiffrin',                     label: 'Mikaela Shiffrin' },
    ],

    // ── Sidebar: Meta ─────────────────────────────────────────────────────
    sidebar_meta_published_date: 'February 19, 2026',
    sidebar_meta_updated_date:   'February 20, 2026',
    sidebar_meta_author:         'ObjectWire Olympic Bureau',
    sidebar_meta_category:       'Winter Olympics · Figure Skating',

    // ── Flags ─────────────────────────────────────────────────────────────
    tiktok_embed: true,

    // ── Article Body HTML ─────────────────────────────────────────────────
    content_html: `
<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Is Alysa Liu?</h2>
  <div class="prose prose-lg max-w-none">
    <p><strong>Alysa Liu</strong> is an American competitive figure skater, born on <strong>August 8, 2005</strong>, in <strong>Fremont, California</strong>. Of Chinese-American heritage, she is a three-time U.S. Champion and the <strong>2026 Olympic gold medalist</strong> in women's singles figure skating at the <a href="/winter-olympics" class="text-blue-600 hover:underline">Milano Cortina Winter Olympics</a>.</p>
    <p>She first made history in <strong>2019</strong>, winning the U.S. Championship at just <strong>13 years old</strong>, making her the <strong>youngest U.S. Champion in the event's history</strong>. She defended the title in 2020, cementing an early reputation as arguably the most talented young female figure skater in the United States in a generation.</p>
    <p>After a painful omission from the 2022 Beijing Olympics team, Liu underwent a full athletic and artistic rebuild that ultimately produced the most dominant stretch of her career. Her 2026 gold medal, delivered with a total score of <strong>233.17 points</strong>, ended a <strong>20-year American medal drought</strong> in the women's singles figure skating event at the Olympic Games.</p>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Gold Medalist - Going Viral</h2>
  <p class="text-gray-600 text-sm mb-5">Alysa Liu's Olympic gold sparked a wave of reaction content across social media. This fan-made tribute spread rapidly across TikTok in the days following her win at Milano Cortina.</p>
  <div class="flex justify-center">
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@breezoiscrazy/video/7608837069921668383" data-video-id="7608837069921668383" style="max-width:605px;min-width:325px;width:100%">
      <section>
        <a target="_blank" rel="noopener noreferrer" title="@breezoiscrazy" href="https://www.tiktok.com/@breezoiscrazy?refer=embed">@breezoiscrazy</a>
        Gold medalist!!! Champ&#127; |
        <a title="alysaliu" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/alysaliu?refer=embed">#alysaliu</a>
        <a title="figureskating" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/figureskating?refer=embed">#figureskating</a>
        <a title="2026olympics" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/2026olympics?refer=embed">#2026olympics</a>
        <a title="edit" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/edit?refer=embed">#edit</a>
        <a target="_blank" rel="noopener noreferrer" title="original sound - BRËËZO" href="https://www.tiktok.com/music/original-sound-7608837114402261791?refer=embed">&#9836; original sound - BRËËZO</a>
      </section>
    </blockquote>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">The Olympic Gold Medal Performance</h2>
  <div class="prose prose-lg max-w-none">
    <p>Skating last in the final group at the <strong>Mediolanum Forum</strong> in Milan on February 19, 2026, Liu delivered a free skate to Beethoven's <em>Moonlight Sonata</em> that will be remembered as one of the great performances in the event's Olympic history.</p>
    <p>Her opening <strong>triple Axel</strong> was textbook. From there, she strung together seven triple jumps and one triple-triple combination without a single fall, downgrade, or wobble. Her free skate score of <strong>156.44</strong> was a personal best by nearly four points. Her program components score was the highest of the night, with multiple judges awarding <strong>9.25 and above</strong>.</p>
    <p>When her scores confirmed the gold medal, Liu collapsed into the arms of her coaching team. The arena, packed with thousands of American fans who had traveled to Milan, erupted.</p>
    <p>"I just told myself: this is what you trained for," Liu said. "There was no noise when I was on that ice. Just the music and me."</p>
  </div>
  <div class="not-prose mt-6 overflow-x-auto rounded-xl border border-gray-200">
    <table class="w-full text-sm">
      <thead>
        <tr style="background:#0f172a;color:#fff">
          <th class="px-4 py-3 text-left font-semibold">Medal</th>
          <th class="px-4 py-3 text-left font-semibold">Skater</th>
          <th class="px-4 py-3 text-left font-semibold">Country</th>
          <th class="px-4 py-3 text-left font-semibold">Score</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr class="even:bg-gray-50"><td class="px-4 py-2.5 text-lg">🥇</td><td class="px-4 py-2.5 font-semibold text-gray-900">Alysa Liu</td><td class="px-4 py-2.5 text-gray-600">USA</td><td class="px-4 py-2.5 font-bold text-gray-900">233.17</td></tr>
        <tr class="even:bg-gray-50"><td class="px-4 py-2.5 text-lg">🥈</td><td class="px-4 py-2.5 font-semibold text-gray-900">You Young</td><td class="px-4 py-2.5 text-gray-600">South Korea</td><td class="px-4 py-2.5 font-bold text-gray-900">228.44</td></tr>
        <tr class="even:bg-gray-50"><td class="px-4 py-2.5 text-lg">🥉</td><td class="px-4 py-2.5 font-semibold text-gray-900">Kaori Sakamoto</td><td class="px-4 py-2.5 text-gray-600">Japan</td><td class="px-4 py-2.5 font-bold text-gray-900">224.92</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Early Life &amp; Career</h2>
  <div class="prose prose-lg max-w-none">
    <p>Alysa Liu was born on <strong>August 8, 2005</strong>, in <strong>Fremont, California</strong>, to a Chinese-American family. She began figure skating as a young child and rapidly progressed through the junior ranks, demonstrating a rare combination of natural athleticism, technical fearlessness, and artistic instinct.</p>
    <p>At just <strong>13 years old</strong> in <strong>2019</strong>, Liu won the U.S. Figure Skating Championships, becoming the <strong>youngest U.S. Champion in the event's history</strong>. She repeated the feat in <strong>2020</strong>, one of only a handful of champions to defend the U.S. title in back-to-back years at that age.</p>
    <p>Her signature element is the <strong>triple Axel</strong>, one of figure skating's most demanding jumps and one that only a small number of women in the world can execute reliably in competition. Her consistent and technically clean triple Axel has been a cornerstone of her competitive programs throughout her career.</p>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">The Beijing Omission &amp; The Rebuild</h2>
  <div class="prose prose-lg max-w-none">
    <p>In one of the more controversial selection decisions in recent U.S. figure skating history, Liu was <strong>left off the Team USA roster for the 2022 Beijing Winter Olympics</strong> following the U.S. Championships selection event. The decision drew significant public debate, given her record as a two-time national champion and her trajectory as one of the sport's brightest young performers.</p>
    <p>What followed was a quiet, disciplined rebuild. Liu overhauled her technical program, deepened her artistic presentation, and returned to competition with a more complete version of herself as a skater. She later described the Beijing omission as the catalyst for the growth that made her an Olympic champion.</p>
    <p>"Not making Beijing was the most painful thing that ever happened to me athletically," she said after her gold medal. "And it was the best thing that ever happened to me. I came back a different skater."</p>
  </div>
  <div class="not-prose mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
    <h3 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Road to Gold: Turning Points</h3>
    <div class="space-y-3">
      <div class="flex gap-3 text-sm"><span class="text-blue-600 font-bold shrink-0">→</span><div><span class="font-semibold text-gray-900">2022 Omission: </span><span class="text-gray-600">Left off Team USA for Beijing Olympics. Publicly controversial decision that became her greatest motivation.</span></div></div>
      <div class="flex gap-3 text-sm"><span class="text-blue-600 font-bold shrink-0">→</span><div><span class="font-semibold text-gray-900">2022-24 Rebuild: </span><span class="text-gray-600">Full technical and artistic overhaul. Rebuilt from the ice up with a new coaching philosophy.</span></div></div>
      <div class="flex gap-3 text-sm"><span class="text-blue-600 font-bold shrink-0">→</span><div><span class="font-semibold text-gray-900">2024-25 Season: </span><span class="text-gray-600">Grand Prix Final champion. Established as the overwhelming favorite heading into the 2026 cycle.</span></div></div>
      <div class="flex gap-3 text-sm"><span class="text-blue-600 font-bold shrink-0">→</span><div><span class="font-semibold text-gray-900">January 2026: </span><span class="text-gray-600">Wins third U.S. Championship title, arriving in Milan as the top American contender.</span></div></div>
    </div>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Why Alysa Liu Matters for American Figure Skating</h2>
  <div class="prose prose-lg max-w-none">
    <p>Liu's gold medal is not just a personal achievement. It represents a fundamental shift in the global landscape of women's figure skating. The sport's center of gravity had moved decisively to Asia, with Japan, South Korea, and China collecting the last five Olympic gold medals in the women's event. American programs had quietly accepted a reduced role on the podium.</p>
    <p>At <strong>20 years old</strong>, Liu has multiple Olympic cycles ahead of her. U.S. Figure Skating president Ramsey Baker described her gold as "a transformational moment for the sport in this country" and validation of the federation's investment in elite athlete development programs launched after the 2022 Beijing cycle.</p>
    <p>The women's figure skating final at Milano Cortina 2026 drew what NBC Sports estimated to be the largest American television audience of the Games, over <strong>22 million viewers</strong> across linear and streaming platforms.</p>
    <p>"I want this to be the beginning of something," Liu said. "Not just for me, but for every little girl who puts on skates in America and dreams about this moment."</p>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Celebrity Support &amp; Mainstream Crossover</h2>
  <div class="prose prose-lg max-w-none">
    <p>In the days before competition, Liu received what may be the most unconventional pre-Olympic send-offs in figure skating history. <strong>Madonna</strong> posted on social media calling Liu "a true artist on ice," while <strong>Taylor Swift</strong> posted a story wishing her "all the magic" before the short program.</p>
    <p>The dual celebrity endorsements ignited the internet. Search interest in Liu spiked by over <strong>800 percent</strong> in the week leading up to competition, and her social media following doubled. The moment transformed her from a known commodity in figure skating circles into a genuine mainstream sports celebrity heading into the most-watched event of the Games.</p>
  </div>
</section>
`.trim(),
  },

];

// =============================================================================
// UPSERT RUNNER
// =============================================================================

async function run() {
  console.log(`\n${DRY_RUN ? '🔍  DRY RUN — no writes' : '🚀  Upserting creator_articles'}\n`);

  let ok = 0;
  let fail = 0;

  for (const entry of CREATOR_ARTICLES) {
    if (DRY_RUN) {
      console.log(`  ✓ [dry] ${entry.slug}`);
      ok++;
      continue;
    }

    const { error } = await supabase
      .from('creator_articles')
      .upsert(entry, { onConflict: 'slug' });

    if (error) {
      console.error(`  ✗ ${entry.slug}\n    ${error.message}`);
      fail++;
    } else {
      console.log(`  ✓ ${entry.slug}`);
      ok++;
    }
  }

  console.log(`\n${DRY_RUN ? 'Preview' : 'Done'}: ${ok} ok, ${fail} failed\n`);
  if (fail > 0) process.exit(1);
}

run();
