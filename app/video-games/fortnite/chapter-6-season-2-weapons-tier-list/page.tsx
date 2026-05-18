import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline codebase article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-static';
export const revalidate = false;

const SLUG = '/video-games/fortnite/chapter-6-season-2-weapons-tier-list';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1634287847376-06de6b0132bc?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Fortnite Season 2 Weapons Tier List | Katana, SMGs, LMGs Ranked',
  description:
    'Full Fortnite Chapter 6 Season 2 weapons tier list. Katana, new SMGs, LMGs, and all current loot pool weapons ranked S through D with damage stats and best use cases.',
  keywords: [
    'Fortnite Chapter 6 Season 2 weapons',
    'Fortnite Season 2 weapons tier list',
    'Fortnite Katana tier',
    'Fortnite Lawless weapons',
    'Fortnite best weapons Season 2',
    'Fortnite Chapter 6 Season 2 gun tier list',
    'Fortnite SMG Season 2',
    'Fortnite LMG Season 2',
    'Fortnite weapon rankings 2026',
    'Fortnite S tier weapons',
    'Fortnite Katana damage',
    'Fortnite loot pool Season 2',
    'Fortnite Chapter 6 weapons',
    'Epic Games Fortnite weapons',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fortnite Chapter 6 Season 2 Weapons Tier List | Katana, SMGs & LMGs Ranked',
    description:
      'Every weapon in the Fortnite Chapter 6 Season 2 loot pool ranked S through D. Katana tops the melee class, new SMG and LMG additions change the mid-range meta.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-29T16:00:00Z',
    modifiedTime: '2026-04-29T16:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Fortnite Chapter 6 Season 2 weapons tier list all guns ranked' }],
    tags: ['Fortnite', 'Epic Games', 'Gaming', 'Battle Royale'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite C6S2 Weapons Tier List | Best Guns This Season',
    description:
      'Katana, SMGs, LMGs, and every weapon in the Season 2 loot pool ranked S-to-D. Best weapons for competitive and casual play.',
    images: [OG_IMAGE],
  },
};

export default function FortniteC6S2WeaponsTierListPage() {
  return (
    <NewsArticle
      title="Fortnite Season 2 Weapons Tier List | Katana, SMGs and LMGs Ranked"
      subtitle="Every weapon in the Fortnite Chapter 6 Season 2 loot pool ranked S through D, covering the new Katana, SMG, and LMG additions and what got vaulted from Season 1"
      category="Gaming"
      categoryColor="purple"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="8 min read"
      author={{ name: 'ObjectWire Gaming Desk', authorSlug: 'objectwire-gaming-desk' }}
      tags={['Fortnite', 'Epic Games', 'Gaming', 'Battle Royale', 'Chapter 6']}
      thumbnail={{ src: OG_IMAGE, alt: 'Fortnite Chapter 6 Season 2 weapons tier list ranked' }}
      slug="video-games-fortnite-chapter-6-season-2-weapons-tier-list"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'Fortnite', item: '/video-games/fortnite' },
        { name: 'Season 2 Weapons Tier List', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'video-games-fortnite', title: 'Fortnite | Chapter 6 Season 2 Hub, News & Guides', url: '/video-games/fortnite', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-fortnite-chapter-6-season-2-map-changes', title: 'Fortnite Chapter 6 Season 2 Map Changes | All New POIs', url: '/video-games/fortnite/chapter-6-season-2-map-changes', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-fortnite-chapter-6-season-2-battle-pass', title: 'Fortnite Chapter 6 Season 2 Battle Pass | All Skins and Rewards', url: '/video-games/fortnite/chapter-6-season-2-battle-pass', publishDate: 'April 29, 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="Fortnite Chapter 6 Season 2"
      moreFromHubHref="/video-games/fortnite"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Fortnite Chapter 6 Season 2 introduced the <strong>Katana</strong> as a melee weapon
          class, two new SMG variants, and a high-capacity LMG, while vaulting several Season 1
          weapons. The overall meta shifted toward aggressive close-to-mid-range play. This tier
          list ranks every weapon currently in the Season 2 loot pool from S (best-in-slot,
          game-warping impact) down to D (situationally viable at best). For a full overview of
          the season including map changes and Battle Pass, see the{' '}
          <Link href="/video-games/fortnite" className="text-blue-600 hover:text-blue-800 underline">
            Fortnite Chapter 6 Season 2 hub
          </Link>.
        </p>

        <h2>S Tier | Best Weapons in the Season 2 Loot Pool</h2>

        <h3>Katana (Legendary Melee)</h3>
        <p>
          The Katana is the Season 2 signature weapon and the strongest weapon in the current
          loot pool when used in the right range. It deals 75 damage per swing at legendary
          rarity, with a dash-slash combo that covers approximately 8 meters and deals 120
          damage on a direct dash hit. It has no ammo requirement and cannot be countered by
          building (the dash goes through recently placed walls due to a confirmed hitbox
          behavior).
        </p>
        <p>
          In close-range fights, the Katana eliminates fully-shielded players in two to three
          swings. The legendary variant spawns guaranteed at the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-map-changes" className="text-blue-600 hover:text-blue-800 underline">
            Katana Shrine
          </Link>
          {' '}and as a low-probability floor loot item elsewhere. The combination of high
          damage, no ammo dependency, and dash range earns it an uncontested S-tier placement.
        </p>
        <p>
          The primary counter is maintaining distance above 15 meters. The Katana user has no
          reliable response to sustained mid-range fire if they cannot close the gap.
        </p>

        <h3>Compact SMG (New, Season 2)</h3>
        <p>
          The Season 2 Compact SMG fires at 900 RPM with 45 damage per shot at epic rarity,
          giving it the highest close-range DPS of any SMG in the current pool. Magazine size
          is 30 rounds. Reload is 1.8 seconds. It outperforms the shotgun class in sustained
          spray at 0–5 meters and trades approximately even with shotguns in the burst-fire
          range.
        </p>
        <p>
          It fills the SMG&apos;s traditional role as the anti-build weapon due to its structure
          damage multiplier (2x per bullet against placed walls), making it essential in
          build-mode lobbies. In no-build modes, it is slightly less dominant but still the
          strongest SMG available.
        </p>

        <h2>A Tier | Strong Weapons with Clear Use Cases</h2>

        <h3>Plasma Assault Rifle (Carryover from Season 1)</h3>
        <p>
          The Plasma AR is the best mid-range weapon in the pool for consistent damage output.
          50 damage per shot at epic, 18 rounds per magazine, 2.1-second reload. It rewards
          accurate burst fire and is the weapon of choice for players contesting at 20–50
          meters. Its main weakness is per-magazine capacity: you can lose fights purely to
          reload timing if you miss more than three shots.
        </p>

        <h3>Heavy LMG (New, Season 2)</h3>
        <p>
          The new Heavy LMG has 60 rounds per magazine and deals 40 damage per shot. Its
          DPS is lower than the Compact SMG, but the 60-round magazine enables sustained
          suppression for an extended period without reload. At ranges where the SMG loses
          accuracy, the LMG maintains consistent chip damage.
        </p>
        <p>
          It is particularly strong in end-circle fights where players are forced into
          tight positions: the LMG can pour enough chip damage onto a boxed opponent to
          force them out of cover before switching to a finisher. It is too heavy for
          aggressive push-and-dash plays, but as a second or third-slot support weapon
          it is A-tier without qualification.
        </p>

        <h3>Tactical Shotgun (Carryover, re-balanced)</h3>
        <p>
          The Tactical Shotgun received a damage buff in the Season 2 balance patch, bringing
          its base damage to 85 per shot at epic. It was borderline A/B tier at the end of
          Season 1. The buff elevates it firmly into A tier as the primary burst-damage option
          in the 0–10 meter range where the SMG is less reliable.
        </p>

        <h2>B Tier | Viable, Context-Dependent</h2>

        <h3>Burst SMG (Season 2 Addition)</h3>
        <p>
          The second new SMG added this season fires in three-round bursts at 750 RPM.
          Per-burst damage is high, but the burst mechanic introduces a rhythm that punishes
          players who mistime their shots. It is outclassed by the Compact SMG in both
          sustained DPS and learning curve, but it has an argument as a B-tier option for
          players who prefer the burst-fire mechanic. Effective range is slightly longer than
          the Compact SMG, giving it a small window at 10–15 meters where it outperforms
          its counterpart.
        </p>

        <h3>Precision Sniper Rifle (Carryover)</h3>
        <p>
          The Precision Sniper deals 120 damage to the body and 250 to the head at epic rarity.
          It is mechanically unchanged from Season 1. Its B-tier ranking reflects the Season 2
          meta, not an inherent weapon weakness: the combination of aggressive Katana rushes
          and SMG spam in close quarters reduces the number of opportunities to leverage
          long-range positioning compared to previous seasons. If you play passive and find
          elevation, the sniper performs at A-tier effectiveness.
        </p>

        <h3>Standard AR (Carryover)</h3>
        <p>
          The standard assault rifle is a reliable all-rounder but has been power-crept by
          the Plasma AR in every meaningful metric. It remains B-tier rather than C because
          it is significantly easier to obtain (floor loot is abundant) and requires no
          accuracy discipline to be functional. For casual play it is a solid choice. In
          competitive lobbies, the Plasma AR is strictly preferred.
        </p>

        <h2>C Tier | Situationally Useful</h2>

        <h3>Pistol (Carryover)</h3>
        <p>
          The pistol is 40 damage per shot at rare rarity with a fast fire rate. It is the
          best emergency weapon when caught reloading a primary, but there is almost never
          a situation where actively running a pistol as a primary slot is optimal. Keep it
          until a better weapon is available, then replace it immediately.
        </p>

        <h3>Hunting Rifle (Carryover)</h3>
        <p>
          No scope, high damage (100 per shot), slow fire rate. The hunting rifle rewards
          mechanically skilled players who can reliably land shots without a scope. For
          everyone else, the Precision Sniper or even the standard AR is a more consistent
          choice. It is not worth dropping a Plasma AR for in most scenarios.
        </p>

        <h2>D Tier | Avoid or Replace Immediately</h2>

        <h3>Suppressed Pistol (Carryover, nerfed)</h3>
        <p>
          The Suppressed Pistol received a damage nerf in the Season 2 patch, bringing it to
          32 damage per shot. Its suppression mechanic (no audio cue from the firing location)
          had situational value in Season 1. At 32 damage per shot, the time-to-kill is too
          high in Season 2&apos;s aggressive meta for the suppression to matter before you are
          eliminated. Replace with any B-tier weapon as soon as possible.
        </p>

        <h3>Common SMG (Floor Loot)</h3>
        <p>
          The common-rarity SMG that drops as filler floor loot. It deals 28 damage per shot
          at common rarity. The only reason to use it is as a temporary hold before finding
          a Compact SMG or the Burst SMG. Do not commit a permanent inventory slot to it.
        </p>

        <h2>What Got Vaulted from Season 1</h2>
        <p>
          The following Season 1 weapons are no longer in the standard loot pool as of
          Season 2&apos;s launch:
        </p>
        <ul>
          <li>Striker Burst AR — replaced by the Plasma AR as the primary burst-fire long-range option</li>
          <li>Shockwave Launcher — removed from standard loot; may return in limited-time modes</li>
          <li>Combat Shotgun — replaced by the re-balanced Tactical Shotgun</li>
          <li>Twin Mag SMG — absorbed into the two new SMG additions</li>
        </ul>

        <h2>Ranked Loot Pool Differences</h2>
        <p>
          In ranked matches, the Katana spawn rate is reduced to approximately 30% of its
          casual-mode frequency. The Katana Shrine still guarantees a spawn in ranked play,
          but floor Katana drops are significantly rarer. The Heavy LMG spawn rate is also
          slightly reduced in ranked. Everything else is consistent with the unranked pool.
          See the{' '}
          <Link href="/video-games/fortnite" className="text-blue-600 hover:text-blue-800 underline">
            Fortnite hub
          </Link>
          {' '}for ranked mode details and links to all other Season 2 guides. For the
          Battle Pass skin list, see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-battle-pass" className="text-blue-600 hover:text-blue-800 underline">
            Chapter 6 Season 2 Battle Pass breakdown
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
