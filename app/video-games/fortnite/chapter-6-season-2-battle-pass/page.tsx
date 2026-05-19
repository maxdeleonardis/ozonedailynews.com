import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline codebase article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-dynamic';
export const revalidate = false;

const SLUG = '/video-games/fortnite/chapter-6-season-2-battle-pass';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1627891127978-e33338a159d6?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Fortnite Chapter 6 Season 2 Battle Pass | All Skins & Rewards',
  description:
    'Full breakdown of the Fortnite Chapter 6 Season 2 Battle Pass: all skins, secret styles, Page 2 bonus cosmetics, and the fastest XP routes to tier 100.',
  keywords: [
    'Fortnite Chapter 6 Season 2 Battle Pass',
    'Fortnite Season 2 Battle Pass skins',
    'Fortnite Lawless Battle Pass',
    'Fortnite Chapter 6 Season 2 skins',
    'Fortnite Battle Pass tier list',
    'Fortnite Chapter 6 Battle Pass',
    'Fortnite Season 2 secret skin',
    'Fortnite Battle Pass 2026',
    'Fortnite Battle Pass styles',
    'Fortnite Chapter 6 Season 2 rewards',
    'Fortnite V-Bucks Battle Pass',
    'Fortnite tier 100 skin',
    'Epic Games Battle Pass',
    'Fortnite cosmetics Season 2',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fortnite Chapter 6 Season 2 Battle Pass | All Skins, Styles & Rewards',
    description:
      'Every skin, back bling, pickaxe, glider, and secret style in the Fortnite Chapter 6 Season 2 "Lawless" Battle Pass. Plus the fastest XP routes to tier 100.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Gaming Desk'],
    publishedTime: '2026-04-29T16:00:00Z',
    modifiedTime: '2026-04-29T16:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Fortnite Chapter 6 Season 2 Battle Pass all skins and rewards' }],
    tags: ['Fortnite', 'Epic Games', 'Gaming', 'Battle Royale'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite C6S2 Battle Pass | Every Skin, Style, and Reward',
    description:
      'Complete guide to the Chapter 6 Season 2 Battle Pass: all 100 tiers, secret skins, and Page 2 bonuses.',
    images: [OG_IMAGE],
  },
};

export default function FortniteC6S2BattlePassPage() {
  return (
    <NewsArticle
      title="Fortnite Chapter 6 Season 2 Battle Pass | All Skins and Rewards"
      subtitle="Every skin, style, back bling, pickaxe, and secret unlock in the Fortnite Chapter 6 Season 2 'Lawless' Battle Pass, plus the fastest routes to tier 100"
      category="Gaming"
      categoryColor="purple"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="7 min read"
      author={{ name: 'OzoneNews Gaming Desk', authorSlug: 'OzoneNews-gaming-desk' }}
      tags={['Fortnite', 'Epic Games', 'Gaming', 'Battle Royale', 'Chapter 6']}
      thumbnail={{ src: OG_IMAGE, alt: 'Fortnite Chapter 6 Season 2 Battle Pass skins and cosmetics' }}
      slug="video-games-fortnite-chapter-6-season-2-battle-pass"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'Fortnite', item: '/video-games/fortnite' },
        { name: 'Chapter 6 Season 2 Battle Pass', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'video-games-fortnite', title: 'Fortnite | Chapter 6 Season 2 Hub, News & Guides', url: '/video-games/fortnite', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-fortnite-chapter-6-season-2-map-changes', title: 'Fortnite Chapter 6 Season 2 Map Changes | All New POIs', url: '/video-games/fortnite/chapter-6-season-2-map-changes', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-fortnite-chapter-6-season-2-weapons-tier-list', title: 'Fortnite Season 2 Weapons Tier List | Katana, SMGs, LMGs Ranked', url: '/video-games/fortnite/chapter-6-season-2-weapons-tier-list', publishDate: 'April 29, 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="Fortnite Chapter 6 Season 2"
      moreFromHubHref="/video-games/fortnite"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The Fortnite Chapter 6 Season 2 Battle Pass, part of the <strong>Lawless</strong> season,
          spans 100 standard tiers plus a supplementary Page 2 reward track that unlocks after
          tier 100. The pass costs 950 V-Bucks (approximately $7.99 USD) and is also included in
          Fortnite Crew subscriptions. The yakuza and samurai crime aesthetic runs through the
          entire cosmetic slate, from the lead character skin to back blings and loading screens.
          For an overview of all Season 2 map and gameplay changes, see the{' '}
          <Link href="/video-games/fortnite" className="text-blue-600 hover:text-blue-800 underline">
            Fortnite Chapter 6 Season 2 hub
          </Link>.
        </p>

        <h2>Flagship Skin | The Crime Boss and Unlockable Styles</h2>
        <p>
          The tier 100 flagship skin is a high-ranking yakuza crime boss character with four
          distinct style variants. The base style is available at tier 100. Three additional styles
          are unlocked by reaching bonus milestones on the Page 2 track or by completing named
          challenges spread across the season.
        </p>
        <p>
          Style 1 (base): The crime boss in formal attire, consistent with the season&apos;s
          opening cinematic presentation. Deep navy suit, intricate back tattoo partially visible
          in built-in emote.
        </p>
        <p>
          Style 2 (combat): Full yakuza battle armor variant with a traditional leather-and-metal
          pauldron structure. Available after completing the seasonal questline&apos;s final
          chapter.
        </p>
        <p>
          Style 3 (ceremonial): A ceremonial kimono variant with a white-and-gold color scheme.
          Unlocks via reaching Page 2 tier 10.
        </p>
        <p>
          Style 4 (shadow): A black-on-black variant with red geometric lighting. Requires
          completing all secret challenge chains across the season.
        </p>

        <h2>Battle Pass Skins | Tiers 1 Through 100</h2>
        <p>
          The standard track includes six unique character skins spread across tiers 1, 15, 30,
          45, 60, and 100. Each skin is thematically linked to a different role within the
          season&apos;s crime-syndicate narrative:
        </p>
        <ul>
          <li><strong>Tier 1:</strong> Enforcer character — a ground-level crime operative in casual street wear. Multiple unlockable color styles via bonus challenges.</li>
          <li><strong>Tier 15:</strong> Kunoichi character — a female ninja assassin with a katana prop built into the idle animation. Base plus one alternate style at this tier.</li>
          <li><strong>Tier 30:</strong> The Fixer — a problem-solver archetype in business attire. Intended as the season&apos;s &quot;everyday carry&quot; casual skin for players who want a lower-profile look.</li>
          <li><strong>Tier 45:</strong> Shogun Elite Guard — heavy-armored samurai character themed to the Shogun&apos;s Sorrow POI. The most visually striking mid-pass skin.</li>
          <li><strong>Tier 60:</strong> Licensed crossover skin (specific property subject to Epic announcement; consistent with the season&apos;s crime-entertainment collaboration pattern).</li>
          <li><strong>Tier 100:</strong> Crime Boss flagship skin — see section above for style variants.</li>
        </ul>

        <h2>Back Blings, Pickaxes, and Gliders</h2>
        <p>
          Each character skin includes a matching back bling unlocked at the same tier. Additional
          standalone back blings are scattered across intervening tiers as filler rewards alongside
          V-Bucks, XP boosts, sprays, and loading screens.
        </p>
        <p>
          Notable cosmetics outside the skin track:
        </p>
        <ul>
          <li><strong>Katana Pickaxe (Tier 20):</strong> A functional katana used as the harvesting tool. Pairs naturally with the Katana weapon in-game and became one of the season&apos;s most-used cosmetics.</li>
          <li><strong>Noren Glider (Tier 40):</strong> A traditional Japanese noren fabric banner used as the glider. Unusual visual design that stands out in drop sequences.</li>
          <li><strong>Crimson Dragon Glider (Tier 80):</strong> A larger, premium glider with animated red dragon wing motifs. The Battle Pass&apos;s most visually impressive non-skin cosmetic.</li>
          <li><strong>Lantern Back Bling (Tier 55):</strong> A hanging paper lantern with ambient orange glow. Pairs with all six character skins due to its neutral color profile.</li>
        </ul>

        <h2>Secret Skin | How to Unlock the Hidden Character</h2>
        <p>
          Chapter 6 Season 2 includes one secret skin unlockable through a multi-stage challenge
          chain rather than tier progression. The challenge chain is triggered by interacting with
          a specific object at the Katana Shrine (see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-map-changes" className="text-blue-600 hover:text-blue-800 underline">
            Season 2 map changes guide
          </Link>
          ) and then completing seven time-gated discovery quests released weekly across the season.
        </p>
        <p>
          The secret skin is a masked ronin character with a burned-paper-and-ash visual aesthetic,
          distinct from the polished crime-boss skins on the main track. It includes two style
          variants unlocked by completing the bonus stage of each weekly quest.
        </p>
        <p>
          Because the quests are time-gated, players who started the season late need to complete
          the catch-up quest bundles released in the final three weeks of the season to unlock all
          seven stages before the season ends.
        </p>

        <h2>Page 2 Rewards | What Unlocks After Tier 100</h2>
        <p>
          Page 2 is the post-tier-100 reward track that continues accumulating XP after the main
          pass is complete. Page 2 does not include new character skins, but contains:
        </p>
        <ul>
          <li>Style 3 and Style 4 for the Crime Boss flagship skin</li>
          <li>Two additional back blings not on the main track</li>
          <li>Wrap cosmetics (three total on Page 2)</li>
          <li>Loading screens (five seasonal loading screens tied to the narrative arc)</li>
          <li>An exclusive emoticon and spray set</li>
          <li>A built-in emote for the tier 100 skin, unlocked at Page 2 tier 5</li>
        </ul>

        <h2>V-Bucks in the Pass | How Many You Recover</h2>
        <p>
          The Chapter 6 Season 2 Battle Pass contains <strong>1,500 V-Bucks</strong> distributed
          across the 100-tier track. At 950 V-Bucks purchase price, completing the full pass
          returns a net positive of 550 V-Bucks, which can be rolled into the following season&apos;s
          pass. Page 2 contains no additional V-Bucks.
        </p>

        <h2>Fastest XP Routes to Tier 100</h2>
        <p>
          The fastest legitimate XP routes in Chapter 6 Season 2:
        </p>
        <ul>
          <li><strong>Daily quests:</strong> Complete all three daily quests every day. Each awards 15,000 XP. Over a full season, daily quests alone provide enough XP to reach approximately tier 60–65.</li>
          <li><strong>Weekly quest bundles:</strong> Each weekly bundle awards 200,000–300,000 total XP across 8–10 tasks. Prioritize these over individual match performance for the highest XP-per-hour rate.</li>
          <li><strong>Milestone quests:</strong> Long-form milestones (e.g., eliminate 100 opponents total, deal 100,000 damage) award large XP chunks at completion. These run passively alongside regular play.</li>
          <li><strong>Match survival:</strong> Survival time in-match awards incremental XP even without eliminations. Passive survival builds are viable for XP grinding if you are not focused on competitive performance.</li>
          <li><strong>Creative XP farms:</strong> Certain Epic-approved Creative maps provide accelerated XP within Epic&apos;s sanctioned limits. Check the current XP farm map codes on the Fortnite community hub.</li>
        </ul>
        <p>
          For a full breakdown of every weapon in the Season 2 loot pool, see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-weapons-tier-list" className="text-blue-600 hover:text-blue-800 underline">
            Season 2 weapons tier list
          </Link>. All Season 2 guides are indexed on the{' '}
          <Link href="/video-games/fortnite" className="text-blue-600 hover:text-blue-800 underline">
            Fortnite hub
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
