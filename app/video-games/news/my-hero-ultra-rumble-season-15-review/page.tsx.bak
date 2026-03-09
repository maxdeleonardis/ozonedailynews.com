import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/my-hero-ultra-rumble-season-15-review';
const AUTHOR_NAME = 'Alfasa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfasa';

export const metadata: Metadata = {
  title: 'My Hero Ultra Rumble Season 15 Review: Tokoyami, Neo Academia & Patch 1.14.0 | ObjectWire',
  description:
    'My Hero Ultra Rumble Season 15 launched January 21, 2026, adding Fumikage Tokoyami as a new Assault character, the Neo Academia stage rotating every 2 hours, and events running through March 25, 2026. Full patch notes, gacha schedule, Steam metrics, and review.',
  keywords: [
    'My Hero Ultra Rumble Season 15 review',
    'MHUR Season 15 Tokoyami',
    'My Hero Ultra Rumble patch 1.14.0',
    'Fumikage Tokoyami Ultra Rumble',
    'Neo Academia stage Ultra Rumble',
    'My Hero Ultra Rumble January 2026',
    'MHUR Dark Shadow quirk',
    'Ultra Rumble Season 15 gacha',
    'My Hero Ultra Rumble Nejire Hado',
    'MHUR Steam concurrent players 2026',
    'My Hero Ultra Rumble Overhaul Season 15',
    'Bandai Namco Ultra Rumble update',
    'MHUR battle style adjustments patch',
    'My Hero Ultra Rumble events March 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'My Hero Ultra Rumble Season 15: Tokoyami, Neo Academia & Everything New',
    description:
      "Full breakdown of Season 15 — Tokoyami's Dark Shadow kit, the Neo Academia rotating stage, all event rewards through March 25, gacha schedule, and Steam player data.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Video Games',
    tags: [
      'My Hero Ultra Rumble',
      'Season 15',
      'Tokoyami',
      'Bandai Namco',
      'Gaming',
      'Battle Royale',
      'My Hero Academia',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MHUR Season 15: Tokoyami Drops, Neo Academia Launches, Steam Peaks at 4,558',
    description:
      'Everything in My Hero Ultra Rumble Season 15 — Dark Shadow kit, Neo Academia stage, all event rewards, gacha calendar, and Steam concurrent data through February 2026.',
  },
};

// ─── Quirk skill table data ───────────────────────────────────────────────────
const tokoyamiQuirks = [
  {
    key: 'α',
    name: 'Ragnarok',
    description:
      'Sends Dark Shadow dashing in aim direction; pierces opponents, travels along walls and ground.',
  },
  {
    key: 'β',
    name: 'Spiral Shadow Born of the Gloaming',
    description:
      'Dark Shadow dashes, then circles the area after collision for continued attacks.',
  },
  {
    key: 'γ',
    name: 'Jet-Black Shadow Shield',
    description:
      'Summons Dark Shadow to deflect attacks and projectiles. Usable when downed; hold to fix to camera.',
  },
];

// ─── Events timeline ──────────────────────────────────────────────────────────
const eventsTimeline = [
  {
    period: 'Jan 21 – Feb 11',
    name: 'Mission Event',
    rewards: 'Midoriya U.A. Track Suit (Heat), Monoma Hero Costume (Fancy), emote & voice',
    color: 'border-green-500 bg-green-50',
    dot: 'bg-green-500',
    status: 'Ended',
  },
  {
    period: 'Feb 11 – Feb 25',
    name: 'Drop Event',
    rewards: 'Tuning Slot Enhancement Part, Gallery Pieces (Red / Green / Blue)',
    color: 'border-blue-500 bg-blue-50',
    dot: 'bg-blue-500',
    status: 'Ended',
  },
  {
    period: 'Feb 25 – Mar 25',
    name: 'Agency Event Vol. 7',
    rewards: 'Bakugo U.A. Summer Uniform (Villain), Aizawa Hero Costume (Bandaged)',
    color: 'border-purple-500 bg-purple-50',
    dot: 'bg-purple-500',
    status: 'Active',
  },
  {
    period: 'Mar 4 – Mar 25',
    name: 'Battle Event',
    rewards: 'Mt. Lady Party Outfit (Dangerous), Shinso U.A. Track Suit (Heat)',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
    status: 'Upcoming',
  },
  {
    period: 'Mar 18 – Mar 25',
    name: 'License Event',
    rewards: 'Earn License EXP via missions',
    color: 'border-yellow-500 bg-yellow-50',
    dot: 'bg-yellow-500',
    status: 'Upcoming',
  },
];

// ─── Gacha rolls ──────────────────────────────────────────────────────────────
const gachaRolls = [
  { name: 'Original (S15) Tokoyami', window: 'Jan 21 – Mar 25', active: true },
  { name: 'Original (S15) Present Mic', window: 'Feb 4 – Mar 4', active: false },
  { name: 'Alternative (S15) Hado — Fairy (Support)', window: 'Feb 4 – Mar 25', active: true },
  { name: 'Alternative (S15) Togata — Sheer Counter', window: 'Feb 18 – Mar 25', active: true },
  { name: 'Alternative (S15) Overhaul', window: 'Feb 18 – Mar 25', active: true },
  { name: '(S15) Vol. Cyber Hero Costume Pick-Up Roll', window: 'Feb 18 – Mar 25', active: true },
];

// ─── Steam metrics ────────────────────────────────────────────────────────────
const steamMetrics = [
  { month: 'Dec 2025', avg: '4,551.4', change: '—', up: null },
  { month: 'Jan 2026', avg: '4,557.6', change: '+6.2% (+6.2)', up: true },
  { month: 'Feb 2026', avg: '4,139.6', change: '−418', up: false },
];

export default function MHURSeason15ReviewPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="My Hero Ultra Rumble Season 15 Review: Tokoyami, Neo Academia & Patch 1.14.0"
        description="My Hero Ultra Rumble Season 15 launched January 21, 2026, adding Fumikage Tokoyami as a new Assault character, the Neo Academia stage, and events running through March 25, 2026."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-03-02T00:00:00Z"
        modifiedTime="2026-03-02T00:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Video Games"
        keywords={[
          'My Hero Ultra Rumble Season 15',
          'Tokoyami Ultra Rumble',
          'MHUR patch 1.14.0',
          'Neo Academia stage',
          'My Hero Academia game 2026',
          'Bandai Namco Ultra Rumble',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'MHUR Season 15 Review', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="My Hero Ultra Rumble Season 15: Tokoyami, Neo Academia & Patch 1.14.0 — Full Review"
        subtitle="Season 15 launched January 21, 2026, dropping Fumikage Tokoyami with the Dark Shadow Quirk, a rotating Neo Academia stage, and events loaded with free rewards running through March 25."
        category="Video Games"
        categoryColor="purple"
        topicTag="gaming"
        publishDate="March 2, 2026"
        readTime="7 min read"
        trending
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Reporter',
          authorSlug: 'alfasa',
        }}
        thumbnail={{
          src: '/entertainment/my_hero_qs.PNG',
          alt: 'My Hero Ultra Rumble Season 15 — Tokoyami and Neo Academia',
        }}
        tags={[
          'My Hero Ultra Rumble',
          'Season 15',
          'Tokoyami',
          'Neo Academia',
          'Bandai Namco',
          'Battle Royale',
          'Gaming',
          'My Hero Academia',
          'Patch 1.14.0',
        ]}
      >

        {/* Lede */}
        <p>
          <strong>My Hero Ultra Rumble Season 15</strong> launched on{' '}
          <strong>January 21, 2026</strong>, following scheduled maintenance, with Bandai Namco
          deploying{' '}
          <Link href="/video-games/mha/ultra-rumble/season-15" className="text-purple-600 font-medium hover:underline">
            Patch 1.14.0
          </Link>{' '}
          across all platforms. The headline addition is{' '}
          <strong>Fumikage Tokoyami</strong>, a new Assault-role playable character whose kit
          revolves entirely around the <em>Dark Shadow</em> Quirk. Alongside Tokoyami, the update
          introduced the <strong>Neo Academia</strong> rotating stage and a multi-phase event calendar
          that runs through <strong>March 25, 2026, at 12:59 JST</strong>.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>Season 15 at a Glance:</strong> Launched Jan 21, 2026 &bull; Ends Mar 25, 2026
          (12:59 JST) &bull; New character: Tokoyami (Assault) &bull; New stage: Neo Academia
          (rotates every 2 hrs) &bull; 5 event phases &bull; Steam January avg: 4,557.6 concurrent players.
        </HighlightBox>

        {/* Related coverage band */}
        <div className="not-prose my-6 rounded-xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">Related Coverage — My Hero Universe</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/video-games/mha', label: '🏠 My Hero Academia Hub', desc: 'Final season, Vigilantes & all games' },
              { href: '/video-games/mha/ultra-rumble', label: '⚡ Ultra Rumble — Game Guide & Wiki', desc: 'Characters, gameplay, competitive scene' },
              { href: '/video-games/mha/ultra-rumble/season-15', label: '📋 Season 15 Overview', desc: 'Official launch page & character list' },
              { href: '/video-games/mha/ultra-rumble/season-15/strike-overhaul', label: '💀 Strike Overhaul — Blighted Precipice', desc: 'Full stats, quirks & tuning guide' },
              { href: '/video-games/mha/alls-justice', label: '🥊 All\'s Justice Review (2026)', desc: '3v3 Final War Arc fighting game' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col rounded-lg border border-purple-200 bg-white p-3 hover:border-purple-400 hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-purple-700">{link.label}</span>
                <span className="text-gray-500 text-xs mt-0.5">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Patch 1.14.0 */}
        <h2>Season 15 Launch and Patch 1.14.0 Details</h2>
        <p>
          Patch 1.14.0 deployed on{' '}
          <strong>January 21, 2026</strong>, marking the official start of Season 15. Beyond the
          new character and stage, the patch introduced several quality-of-life and system changes:
        </p>
        <ul>
          <li>
            <strong>Neo Academia stage</strong> — rotates every 2 hours in unranked and ranked
            matches; other stages such as U.S.J. ver. 03 rotate every 1 hour for 5-hour windows
          </li>
          <li>
            <strong>Step-up Costume Pick-Up Roll</strong> — advances every 10 rolls; Step 3
            guarantees a pick-up costume
          </li>
          <li>
            <strong>My Room customization</strong> expanded with new background parts
          </li>
          <li>
            <strong>Item Bag</strong> now displays capacity numbers; recovery items from K.O.&apos;d
            characters automatically group together
          </li>
        </ul>
        <p>
          A follow-up maintenance on <strong>February 18, 2026</strong> introduced additional
          battle style tweaks across the roster (detailed in the Battle Style section below).
        </p>

        {/* Tokoyami */}
        <h2>New Playable Character: Fumikage Tokoyami (Assault)</h2>
        <p>
          Tokoyami is{' '}
          <Link href="/video-games/mha/ultra-rumble/season-15" className="text-purple-600 font-medium hover:underline">
            Season 15&apos;s
          </Link>{' '}
          headline character — an Assault-role fighter whose entire kit is built around projecting
          and repositioning <em>Dark Shadow</em>. All three Quirk Skills interact with the shadow
          independently, giving him strong area control and wall/ground-skimming coverage.
        </p>

        {/* Quirk table */}
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="text-center px-4 py-3 font-semibold w-10">Key</th>
                <th className="text-left px-4 py-3 font-semibold">Quirk Skill</th>
                <th className="text-left px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {tokoyamiQuirks.map((q, i) => (
                <tr key={q.key} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                  <td className="px-4 py-3 text-center font-black text-purple-700 text-base">{q.key}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{q.name}</td>
                  <td className="px-4 py-3 text-gray-700 leading-relaxed">{q.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p><strong>Special Actions:</strong></p>
        <ul>
          <li>
            <strong>Black Ankh (tap)</strong> — Cloaks the user in Dark Shadow for a melee and
            mobility boost.
          </li>
          <li>
            <strong>Twin Wings of the Black Arm (hold)</strong> — High leap / glide; usable
            midair or during Black Ankh activation.
          </li>
        </ul>

        {/* Neo Academia */}
        <h2>Neo Academia Stage Rotation</h2>
        <p>
          Neo Academia recreates locations from the anime&apos;s final chapter arc, including
          Coffin in the Sky, Todoroki House, and Jaku City Hospital. It was developed alongside
          the Season 15 content and detailed in the developer blog vol. 24.
        </p>
        <ul>
          <li>Rotates every <strong>2 hours</strong> in unranked and ranked matches</li>
          <li>Excluded from Tutorial, Training, and Custom game modes</li>
          <li>
            Final phase time has been <strong>increased across all stages</strong> as part of
            the 1.14.0 balance pass
          </li>
        </ul>

        {/* Events */}
        <h2>Special Events and Rewards Timeline</h2>
        <p>
          All events run from <strong>January 21</strong> through{' '}
          <strong>March 25, 2026</strong>, staggered across five phases. Rewards include free
          costumes, emotes, voice lines, and gallery pieces.
        </p>

        <div className="not-prose my-6 space-y-3">
          {eventsTimeline.map((ev) => (
            <div key={ev.name} className={`border-l-4 rounded-r-xl p-4 ${ev.color} flex items-start gap-4`}>
              <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${ev.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900 text-sm">{ev.name}</span>
                  <span className="text-xs text-gray-500">{ev.period}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    ev.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : ev.status === 'Ended'
                      ? 'bg-gray-100 text-gray-500'
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {ev.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{ev.rewards}</p>
              </div>
            </div>
          ))}
        </div>

        <p><strong>Rank Rewards:</strong></p>
        <ul>
          <li><strong>Amateur–Ace:</strong> Variants of Mr. Compress Skull and Bones costume</li>
          <li><strong>Pro License:</strong> Tokoyami Casual Style ×6, Bakugo Casual Wear (Combat)</li>
          <li><strong>Hero License:</strong> Bakugo Casual Wear</li>
        </ul>

        {/* Gacha */}
        <h2>Gacha Rolls and Costume Schedule</h2>
        <p>
          All character and costume rolls are active through <strong>March 25, 2026</strong>.
          The step-up system introduced in Patch 1.14.0 guarantees a pick-up costume at Step 3
          (every 30 rolls from the start of a new step-up cycle).
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="text-left px-4 py-3 font-semibold">Roll / Costume</th>
                <th className="text-left px-4 py-3 font-semibold">Window</th>
                <th className="text-center px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {gachaRolls.map((roll, i) => (
                <tr key={roll.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-medium text-gray-900">{roll.name}</td>
                  <td className="px-4 py-3 text-gray-600">{roll.window}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      roll.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {roll.active ? 'Active' : 'Ended'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Battle Styles */}
        <h2>Battle Style and System Adjustments</h2>
        <p>
          Patch 1.14.0 adjusted <strong>26+ battle styles</strong>. The February 18, 2026
          maintenance follow-up added further refinements. Key changes include:
        </p>
        <ul>
          <li>
            <strong>All styles:</strong> Aerial melee now activates before liftoff completes
          </li>
          <li>
            <strong>Overhaul (Original):</strong> Restoration now heals off-screen allies —
            see the full breakdown in our{' '}
            <Link href="/video-games/mha/ultra-rumble/season-15/strike-overhaul" className="text-purple-600 font-medium hover:underline">
              Strike: Overhaul Blighted Precipice guide
            </Link>
          </li>
          <li>
            <strong>Endeavor:</strong> Burning Ray gauge now displays in percentage; hold input
            enables continuous fire
          </li>
          <li>
            <strong>Armored All Might:</strong> Main HP reduced from previous value to{' '}
            <strong>350</strong>
          </li>
        </ul>

        {/* Steam */}
        <h2>Steam Player Metrics Post-Launch</h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="text-left px-4 py-3 font-semibold">Month</th>
                <th className="text-right px-4 py-3 font-semibold">Avg. Concurrent</th>
                <th className="text-right px-4 py-3 font-semibold">Change</th>
              </tr>
            </thead>
            <tbody>
              {steamMetrics.map((row, i) => (
                <tr key={row.month} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.month}</td>
                  <td className="px-4 py-3 text-right text-gray-800">{row.avg}</td>
                  <td className={`px-4 py-3 text-right font-semibold ${
                    row.up === true ? 'text-green-600' : row.up === false ? 'text-red-500' : 'text-gray-400'
                  }`}>
                    {row.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          January 2026 averaged <strong>4,557.6 concurrent players</strong> on Steam — up 6.2%
          from December&apos;s 4,551.4 — reflecting a modest but positive launch-month bump from
          Tokoyami&apos;s release. February reversed that trend, averaging{' '}
          <strong>4,139.6</strong> (down ~418). The recent 24-hour peak stands at{' '}
          <strong>4,558</strong>, with a live count of approximately<strong> 3,311</strong> at
          time of writing.
        </p>
        <p>
          MHUR remains a niche but stable free-to-play title on Steam. The platform figures
          represent only a fraction of total player counts, as the game&apos;s primary audience
          is on PlayStation and Xbox consoles.
        </p>

        <HighlightBox type="stat" color="purple">
          <strong>Steam Jan 2026 Peak:</strong> 4,558 concurrent &bull;{' '}
          <strong>Jan Avg:</strong> 4,557.6 (+6.2% MoM) &bull;{' '}
          <strong>Feb Avg:</strong> 4,139.6 (−418) &bull;{' '}
          <strong>Season 15 End:</strong> March 25, 2026, 12:59 JST
        </HighlightBox>

        {/* More MHA coverage */}
        <h2>More My Hero Academia Coverage</h2>
        <p>
          ObjectWire covers the full My Hero Academia gaming and anime universe. Explore our
          dedicated pages below.
        </p>

        <div className="not-prose my-4 grid sm:grid-cols-2 gap-4">
          {[
            {
              href: '/video-games/mha',
              title: 'My Hero Academia Hub',
              desc: 'Central coverage of the final anime season, the Vigilantes spin-off, and all MHA game releases on ObjectWire.',
              tag: 'Hub',
              color: 'border-red-300 hover:border-red-400',
              tagColor: 'bg-red-100 text-red-700',
            },
            {
              href: '/video-games/mha/ultra-rumble',
              title: 'Ultra Rumble — Complete Game Guide',
              desc: 'All characters, battle styles, season history, and competitive tips for the free-to-play 24-player battle royale.',
              tag: 'Game Guide',
              color: 'border-blue-300 hover:border-blue-400',
              tagColor: 'bg-blue-100 text-blue-700',
            },
            {
              href: '/video-games/mha/ultra-rumble/season-15',
              title: 'Season 15 — Official Overview',
              desc: 'Full season launch page covering Tokoyami, Neo Academia, event schedule, and all patch notes for Season 15.',
              tag: 'Season Guide',
              color: 'border-purple-300 hover:border-purple-400',
              tagColor: 'bg-purple-100 text-purple-700',
            },
            {
              href: '/video-games/mha/ultra-rumble/season-15/strike-overhaul',
              title: 'Strike: Overhaul — Blighted Precipice',
              desc: 'Detailed stats, quirk breakdowns, tuning guide, and roll strategy for Season 15\'s Overhaul alt-style.',
              tag: 'Character Guide',
              color: 'border-orange-300 hover:border-orange-400',
              tagColor: 'bg-orange-100 text-orange-700',
            },
            {
              href: '/video-games/mha/alls-justice',
              title: "All's Justice — 3v3 Fighting Game Review (2026)",
              desc: "Review and full breakdown of MY HERO ACADEMIA: All's Justice, the Final War Arc 3v3 fighter released February 6, 2026.",
              tag: 'Review',
              color: 'border-green-300 hover:border-green-400',
              tagColor: 'bg-green-100 text-green-700',
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`flex flex-col border-2 rounded-xl p-4 bg-white transition-all hover:shadow-md ${card.color}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.tagColor}`}>
                  {card.tag}
                </span>
              </div>
              <span className="font-bold text-gray-900 mb-1">{card.title}</span>
              <span className="text-sm text-gray-500 leading-relaxed">{card.desc}</span>
            </Link>
          ))}
        </div>

        <HighlightBox type="quote" color="purple">
          &ldquo;When a free-to-play battle royale adds bird-headed shadows mid-season, the
          concurrent count shadows the prior month&apos;s average.&rdquo;
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
