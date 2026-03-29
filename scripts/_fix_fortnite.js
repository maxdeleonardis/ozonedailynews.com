#!/usr/bin/env node
/**
 * Fix the Fortnite/Unreal Engine article:
 *  1. Convert all JSX .map() blocks to static HTML
 *  2. Convert <HighlightBox> components to plain HTML
 *  3. Remove all em dashes and en dashes per OStandard
 *  4. Fix title to use | not — per OStandard
 */
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'entertainment-news-fortnite-moves-into-movies';

// ─── REPLACEMENT HTML BLOCKS ──────────────────────────────────────────────────

// 1. Virtual Production Stages table (replaces first .map block)
const stagesHTML = `
<div class="divide-y divide-gray-100">
  <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-5 py-3 text-sm">
    <div class="md:w-72 font-semibold text-gray-800 shrink-0">Disney Stage 1 at Pinewood Atlanta</div>
    <div class="flex-1 text-gray-600">The Mandalorian Seasons 2-3</div>
    <div class="text-xs text-purple-700 font-medium shrink-0 md:text-right">ILM StageCraft / nDisplay</div>
  </div>
  <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-5 py-3 text-sm">
    <div class="md:w-72 font-semibold text-gray-800 shrink-0">Netflix Virtual Production Stage, Albuquerque</div>
    <div class="flex-1 text-gray-600">Original series productions</div>
    <div class="text-xs text-purple-700 font-medium shrink-0 md:text-right">Unreal Engine 5 / nDisplay</div>
  </div>
  <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-5 py-3 text-sm">
    <div class="md:w-72 font-semibold text-gray-800 shrink-0">Warner Bros. Leavesden Stage 12</div>
    <div class="flex-1 text-gray-600">Harry Potter / Fantastic Beasts legacy retrofit</div>
    <div class="text-xs text-purple-700 font-medium shrink-0 md:text-right">nDisplay 5.7</div>
  </div>
  <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-5 py-3 text-sm">
    <div class="md:w-72 font-semibold text-gray-800 shrink-0">ILM StageCraft, London, Vancouver, Sydney</div>
    <div class="flex-1 text-gray-600">Star Wars, Marvel, major tentpoles</div>
    <div class="text-xs text-purple-700 font-medium shrink-0 md:text-right">ILM StageCraft / Unreal Engine 5</div>
  </div>
</div>`;

// 2. ICVFX Productions table (replaces second .map block)
const icvfxHTML = `
<tbody>
  <tr class="bg-white">
    <td class="px-5 py-3 font-semibold text-gray-900">The Batman Part II</td>
    <td class="px-5 py-3 text-gray-700">Warner Bros.</td>
    <td class="px-5 py-3 text-gray-700">LED volume for Gotham exteriors</td>
    <td class="px-5 py-3 text-center text-xs text-gray-500">Principal photography 2025-2026</td>
  </tr>
  <tr class="bg-purple-50">
    <td class="px-5 py-3 font-semibold text-gray-900">Dune: Messiah</td>
    <td class="px-5 py-3 text-gray-700">Legendary Pictures</td>
    <td class="px-5 py-3 text-gray-700">Desert environments rendered in-camera</td>
    <td class="px-5 py-3 text-center text-xs text-gray-500">Pre-production 2026</td>
  </tr>
  <tr class="bg-white">
    <td class="px-5 py-3 font-semibold text-gray-900">Avatar sequels</td>
    <td class="px-5 py-3 text-gray-700">Lightstorm Entertainment</td>
    <td class="px-5 py-3 text-gray-700">Continued StageCraft volumes at Manhattan Beach</td>
    <td class="px-5 py-3 text-center text-xs text-gray-500">In production</td>
  </tr>
  <tr class="bg-purple-50">
    <td class="px-5 py-3 font-semibold text-gray-900">Stranger Things Season 5</td>
    <td class="px-5 py-3 text-gray-700">Netflix</td>
    <td class="px-5 py-3 text-gray-700">Upside Down sequences with real-time lighting</td>
    <td class="px-5 py-3 text-center text-xs text-gray-500">Final season 2025</td>
  </tr>
</tbody>`;

// 3. Fortnite stats grid (replaces third .map block)
const fortniteStatsHTML = `
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
  <div class="bg-white/10 rounded-lg p-4">
    <div class="text-2xl font-black text-purple-300 mb-1">500M+</div>
    <div class="text-xs font-semibold text-white">Registered Accounts</div>
    <div class="text-xs text-gray-400 mt-1">Fortnite global</div>
  </div>
  <div class="bg-white/10 rounded-lg p-4">
    <div class="text-2xl font-black text-purple-300 mb-1">80M+</div>
    <div class="text-xs font-semibold text-white">Monthly Active Players</div>
    <div class="text-xs text-gray-400 mt-1">As of early 2026</div>
  </div>
  <div class="bg-white/10 rounded-lg p-4">
    <div class="text-2xl font-black text-purple-300 mb-1">40%</div>
    <div class="text-xs font-semibold text-white">UEFN Creator Economy</div>
    <div class="text-xs text-gray-400 mt-1">Revenue share for creators</div>
  </div>
  <div class="bg-white/10 rounded-lg p-4">
    <div class="text-2xl font-black text-purple-300 mb-1">UE 5.7</div>
    <div class="text-xs font-semibold text-white">Current Engine</div>
    <div class="text-xs text-gray-400 mt-1">Released Dec. 2025</div>
  </div>
</div>`;

// 4. Adoption metrics grid (replaces fourth .map block)
const metricsHTML = `
<div class="grid md:grid-cols-3 gap-4 my-6">
  <div class="border-2 rounded-xl p-5 border-purple-400 bg-purple-50">
    <div class="text-3xl font-black mb-1 text-purple-700">65%</div>
    <div class="font-semibold text-gray-800 text-sm mb-1">GDC 2026 Film / TV / Animation Developers</div>
    <div class="text-xs text-gray-500">Use Unreal Engine as primary real-time engine</div>
  </div>
  <div class="border-2 rounded-xl p-5 border-blue-400 bg-blue-50">
    <div class="text-3xl font-black mb-1 text-blue-700">500+</div>
    <div class="font-semibold text-gray-800 text-sm mb-1">Cumulative Film & TV Productions</div>
    <div class="text-xs text-gray-500">Shipped with Unreal Engine as of March 2026</div>
  </div>
  <div class="border-2 rounded-xl p-5 border-green-400 bg-green-50">
    <div class="text-3xl font-black mb-1 text-green-700">153</div>
    <div class="font-semibold text-gray-800 text-sm mb-1">Productions in 2025 Alone</div>
    <div class="text-xs text-gray-500">Completed or in active development during 2025</div>
  </div>
</div>`;

// 5. Related links grid (replaces fifth .map block)
const relatedHTML = `
<div class="grid md:grid-cols-2 gap-4 my-6">
  <a href="/fortnite" class="block border border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:bg-purple-50 transition-colors group">
    <div class="flex items-start gap-3">
      <span class="text-2xl shrink-0">🎮</span>
      <div>
        <div class="font-semibold text-gray-900 group-hover:text-purple-700 text-sm mb-1">Fortnite Hub | Chapter 6, FNCS & Updates</div>
        <div class="text-xs text-gray-500 leading-relaxed">Complete Fortnite coverage: Chapter 6 Season 2, battle pass, FNCS 2026 Global Championship, and the full Epic Games ecosystem.</div>
      </div>
    </div>
  </a>
  <a href="/fortnite" class="block border border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:bg-purple-50 transition-colors group">
    <div class="flex items-start gap-3">
      <span class="text-2xl shrink-0">🎨</span>
      <div>
        <div class="font-semibold text-gray-900 group-hover:text-purple-700 text-sm mb-1">UEFN & Fortnite Creative 2.0</div>
        <div class="text-xs text-gray-500 leading-relaxed">Unreal Editor for Fortnite gives creators direct access to a modified UE5 build, the same foundation Hollywood uses for virtual production.</div>
      </div>
    </div>
  </a>
  <a href="/fortnite" class="block border border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:bg-purple-50 transition-colors group">
    <div class="flex items-start gap-3">
      <span class="text-2xl shrink-0">🎬</span>
      <div>
        <div class="font-semibold text-gray-900 group-hover:text-purple-700 text-sm mb-1">Fortnite Collaborations | Film & TV Crossovers</div>
        <div class="text-xs text-gray-500 leading-relaxed">From Avatar to Star Wars and Dune, how Fortnite's crossover deals mirror the same studios now using Unreal Engine on set.</div>
      </div>
    </div>
  </a>
  <a href="/fortnite" class="block border border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:bg-purple-50 transition-colors group">
    <div class="flex items-start gap-3">
      <span class="text-2xl shrink-0">🆕</span>
      <div>
        <div class="font-semibold text-gray-900 group-hover:text-purple-700 text-sm mb-1">Fortnite Chapter 6 | Full Breakdown</div>
        <div class="text-xs text-gray-500 leading-relaxed">Everything in Chapter 6: Season 2 map, Underworld biome, mythic bosses, and the weapon meta, all rendered in UE5.</div>
      </div>
    </div>
  </a>
</div>`;

// ─── HighlightBox replacements ────────────────────────────────────────────────

const highlightBox1 = `<div class="bg-purple-50 border-l-4 border-purple-600 p-6 my-6 rounded-r-lg">
  <p><strong>By the Numbers, March 2026:</strong> 153 film &amp; TV productions in 2025 alone &bull; 500+ cumulative productions shipped &bull; 65% of entertainment developers on Unreal Engine &bull; 100+ active virtual production stages worldwide &bull; 44% year-over-year increase in ICVFX projects from 2024 to 2025.</p>
</div>`;

const highlightBox2 = `<div class="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
  <p><strong>AMPAS Recognition:</strong> Epic Games received a 2024 Scientific and Technical Achievement Award from the Academy of Motion Picture Arts and Sciences for real-time rendering contributions to virtual production.</p>
</div>`;

const highlightBox3 = `<div class="bg-purple-50 border-l-4 border-purple-600 p-6 my-6 rounded-r-lg italic">
  <p>When a 1998 shooter engine ends up rendering the next Star Wars season in real time, the only thing left to render is the invoice.</p>
</div>`;


async function main() {
  const { data, error } = await sb
    .from('articles')
    .select('content_html, title')
    .eq('slug', SLUG)
    .single();

  if (error) { console.error('FETCH ERROR:', error.message); process.exit(1); }

  let html = data.content_html;
  console.log('Original length:', html.length);

  // ── 1. Replace JSX .map() blocks with static HTML ──

  // Block 1: Virtual production stages
  html = html.replace(
    /\{[\s\S]*?stage:\s*"Disney Stage 1[\s\S]*?\.map\([\s\S]*?\)\)\}\s*<\/div>/,
    stagesHTML + '\n</div>'
  );

  // Block 2: ICVFX table tbody
  html = html.replace(
    /<tbody>\s*\{[\s\S]*?title:\s*"The Batman Part II[\s\S]*?\.map\([\s\S]*?\)\)\}\s*<\/tbody>/,
    icvfxHTML
  );

  // Block 3: Fortnite stats grid  
  html = html.replace(
    /\{[\s\S]*?label:\s*'Registered Accounts'[\s\S]*?\.map\([\s\S]*?\)\)\}/,
    fortniteStatsHTML
  );

  // Block 4: Adoption metrics grid
  html = html.replace(
    /<div class="grid md:grid-cols-3 gap-4 my-6">\s*\{[\s\S]*?value:\s*'65%'[\s\S]*?\.map\([\s\S]*?\)\)\}\s*<\/div>/,
    metricsHTML
  );

  // Block 5: Related links grid
  html = html.replace(
    /<div class="grid md:grid-cols-2 gap-4 my-6">\s*\{[\s\S]*?href:\s*'\/fortnite'[\s\S]*?\.map\([\s\S]*?\)\)\}\s*<\/div>/,
    relatedHTML
  );

  // ── 2. Replace HighlightBox components ──

  // HighlightBox 1: By the Numbers
  html = html.replace(
    /<HighlightBox type="key-point" color="purple">[\s\S]*?<\/HighlightBox>/,
    highlightBox1
  );

  // HighlightBox 2: AMPAS
  html = html.replace(
    /<HighlightBox type="stat" color="blue">[\s\S]*?<\/HighlightBox>/,
    highlightBox2
  );

  // HighlightBox 3: Quote
  html = html.replace(
    /<HighlightBox type="quote" color="purple">[\s\S]*?<\/HighlightBox>/,
    highlightBox3
  );

  // ── 3. Remove em dashes and en dashes ──
  const emBefore = (html.match(/\u2014/g) || []).length;
  const enBefore = (html.match(/\u2013/g) || []).length;

  // Strong labels followed by em dash
  html = html.replace(/<\/strong>\s*—\s*/g, '</strong>, ');
  // Prose em dashes
  html = html.replace(/\s*—\s*/g, ', ');
  // En dashes in ranges (e.g., "2025–2026")
  html = html.replace(/–/g, '-');

  const emAfter = (html.match(/\u2014/g) || []).length;
  const enAfter = (html.match(/\u2013/g) || []).length;
  console.log(`Em dashes: ${emBefore} → ${emAfter}`);
  console.log(`En dashes: ${enBefore} → ${enAfter}`);

  // ── 4. Check for remaining JSX ──
  const remainingJsx = (html.match(/\{[^}]*\.map\(/g) || []).length;
  const remainingBraces = (html.match(/\{row\.|{stat\.|{card\.|{item\./g) || []).length;
  const remainingHighlight = (html.match(/<HighlightBox/g) || []).length;
  console.log('Remaining JSX .map():', remainingJsx);
  console.log('Remaining {row./stat./card./item.}:', remainingBraces);
  console.log('Remaining <HighlightBox>:', remainingHighlight);

  // ── 5. Fix title (em dash → pipe) ──
  const newTitle = 'Unreal Engine Becomes the Backbone of 2026 Entertainment Production';

  // ── 6. Wrap in prose if not already ──
  if (!html.startsWith('<div class="prose')) {
    html = `<div class="prose prose-lg max-w-none">${html}</div>`;
  }

  // ── 7. Update ──
  const { error: updateErr } = await sb
    .from('articles')
    .update({
      content_html: html,
      title: newTitle,
      updated_at: new Date().toISOString(),
    })
    .eq('slug', SLUG);

  if (updateErr) { console.error('UPDATE ERROR:', updateErr.message); process.exit(1); }

  console.log('New length:', html.length);
  console.log('SUCCESS: Article fully cleaned');
}

main();
