import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline codebase article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-static';
export const revalidate = false;

const SLUG = '/video-games/fortnite/chapter-6-season-2-map-changes';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1635372730136-06b29022281c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Fortnite Chapter 6 Season 2 Map Changes | All New POIs',
  description:
    "Fortnite Chapter 6 Season 2 map changes: Shogun's Sorrow castle POI, cherry blossom zones, Katana Shrine, yakuza districts, and every new named location. Full breakdown.",
  keywords: [
    'Fortnite Chapter 6 Season 2 map',
    'Fortnite Season 2 map changes',
    'Fortnite Shogun POI',
    "Fortnite Shogun's Sorrow",
    'Fortnite cherry blossoms',
    'Fortnite Chapter 6 map',
    'Fortnite Lawless map',
    'Fortnite new POIs 2026',
    'Fortnite named locations Season 2',
    'Fortnite yakuza map',
    'Fortnite Katana Shrine',
    'Fortnite map guide',
    'Fortnite Chapter 6 Season 2 locations',
    'Epic Games Fortnite map',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Fortnite Chapter 6 Season 2 Map Changes | Shogun's Sorrow, Cherry Blossoms",
    description:
      "Every new POI in Fortnite Chapter 6 Season 2: Shogun's Sorrow castle, cherry blossom zones, Katana Shrine, and yakuza crime districts across the updated map.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-29T16:00:00Z',
    modifiedTime: '2026-04-29T16:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Fortnite Chapter 6 Season 2 map changes all new POIs' }],
    tags: ['Fortnite', 'Epic Games', 'Gaming', 'Battle Royale'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fortnite C6S2 Map | Shogun's Sorrow, Cherry Blossoms, Katana Shrine",
    description:
      "Full breakdown of every new POI and map change in Fortnite Chapter 6 Season 2 Lawless.",
    images: [OG_IMAGE],
  },
};

export default function FortniteC6S2MapChangesPage() {
  return (
    <NewsArticle
      title="Fortnite Chapter 6 Season 2 Map Changes | All New POIs"
      subtitle="Shogun's Sorrow, cherry blossom zones, Katana Shrine, and every named location added or changed in Fortnite Chapter 6 Season 2 'Lawless'"
      category="Gaming"
      categoryColor="purple"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="6 min read"
      author={{ name: 'ObjectWire Gaming Desk', authorSlug: 'objectwire-gaming-desk' }}
      tags={['Fortnite', 'Epic Games', 'Gaming', 'Battle Royale', 'Chapter 6']}
      thumbnail={{ src: OG_IMAGE, alt: "Fortnite Chapter 6 Season 2 Shogun's Sorrow yakuza map" }}
      slug="video-games-fortnite-chapter-6-season-2-map-changes"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'Fortnite', item: '/video-games/fortnite' },
        { name: 'Chapter 6 Season 2 Map Changes', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'video-games-fortnite', title: 'Fortnite | Chapter 6 Season 2 Hub, News & Guides', url: '/video-games/fortnite', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-fortnite-chapter-6-season-2-battle-pass', title: 'Fortnite Chapter 6 Season 2 Battle Pass | All Skins and Rewards', url: '/video-games/fortnite/chapter-6-season-2-battle-pass', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-fortnite-chapter-6-season-2-weapons-tier-list', title: 'Fortnite Season 2 Weapons Tier List | Katana, SMGs, LMGs Ranked', url: '/video-games/fortnite/chapter-6-season-2-weapons-tier-list', publishDate: 'April 29, 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="Fortnite Chapter 6 Season 2"
      moreFromHubHref="/video-games/fortnite"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Fortnite Chapter 6 Season 2, subtitled <strong>Lawless</strong>, reshaped a substantial
          portion of the Chapter 6 island with a Japanese crime-syndicate aesthetic. The headline
          addition is <strong>Shogun&apos;s Sorrow</strong>, a large feudal castle POI that functions
          as the season&apos;s highest-density loot hotspot. The map changes extend across the
          northern and central sections of the island, introducing yakuza-themed districts, a
          dedicated Katana spawn location, and widespread cherry blossom canopies. For a full
          overview of Season 2 content including the Battle Pass and new weapons, see the{' '}
          <Link href="/video-games/fortnite" className="text-blue-600 hover:text-blue-800 underline">
            Fortnite Chapter 6 Season 2 hub
          </Link>.
        </p>

        <h2>Shogun&apos;s Sorrow | The Season&apos;s Landmark POI</h2>
        <p>
          Shogun&apos;s Sorrow is a multi-story feudal Japanese castle built into the elevated
          central ridge of the Chapter 6 island. It replaced a mid-tier neutral zone that existed
          in Season 1 and immediately became one of the most-contested drop spots.
        </p>
        <p>
          The castle layout spans four main floors with open interior corridors, wooden balcony
          structures, and rooftop watchtowers that offer wide sightlines across the surrounding
          terrain. Loot density is among the highest of any named location this season, with chest
          spawns on every floor and a guaranteed legendary-rarity weapon spawn in the top-floor
          throne room.
        </p>
        <p>
          The exterior grounds are equally large. Cherry blossom trees line the approach roads,
          a stone gate serves as a natural chokepoint for teams rotating into the location, and a
          moat-adjacent area provides waterside cover for players pushed off the main structure.
          The surrounding foliage is the densest in the game this season, rewarding players who
          know the bush-and-peek angles around the castle walls.
        </p>
        <p>
          Shogun&apos;s Sorrow sits approximately in the map&apos;s geographic center, meaning
          storm circles that track north, east, or west will almost always include it in the
          first three rings. High loot combined with central positioning makes it the
          statistically most-contested drop point in competitive lobbies.
        </p>

        <h2>Katana Shrine | Guaranteed Legendary Katana Spawn</h2>
        <p>
          The Katana Shrine is a smaller named location on the elevated ridge system northeast
          of Shogun&apos;s Sorrow. It is a dedicated weapon spawn point rather than a full loot
          zone, guaranteeing at least one legendary-rarity{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-weapons-tier-list" className="text-blue-600 hover:text-blue-800 underline">
            Katana
          </Link>
          {' '}per match. The spawn is tied to a ceremonial altar object in the center of the
          shrine clearing.
        </p>
        <p>
          Because the Katana is Season 2&apos;s most powerful close-range weapon and the Shrine
          is the only guaranteed spawn, it draws a consistent contest drop. The location itself
          has minimal additional loot, making it a risk-versus-reward decision: fight for
          the Katana with limited healing support, or skip it and hope for a floor Katana
          spawn elsewhere on the map.
        </p>
        <p>
          The Shrine&apos;s ridge position provides a natural height advantage for teams that
          win the contest, allowing them to rotate toward the interior while maintaining
          elevation above lower-positioned players heading toward Shogun&apos;s Sorrow.
        </p>

        <h2>Yakuza Crime Districts | New Urban Zones</h2>
        <p>
          Three mid-tier named locations introduced in Season 2 use yakuza crime aesthetics:
          neon-lit urban storefronts, gambling dens, and underground fighting arenas embedded
          into existing town structures. These replaced more neutral commercial POIs from
          Season 1 and significantly increased the mid-map loot volume.
        </p>
        <p>
          The crime districts are designed for mid-range engagement. Building density is higher
          than Shogun&apos;s Sorrow, providing more interior cover but tighter sightlines.
          SMG and shotgun players benefit most from the district geometry. The districts also
          house NPC bosses that drop augmented loot on defeat, adding a PvE element to the
          early-game loop for players who drop there.
        </p>

        <h2>Cherry Blossom Coverage | Visual and Tactical Changes</h2>
        <p>
          Cherry blossom trees spread across the northern and central sections of the map.
          Beyond the visual signal that locates players within the Season 2 thematic zones,
          the blossom trees provide meaningful foliage cover that was absent from many of
          these areas in Season 1.
        </p>
        <p>
          The blossom canopies are densest in the corridor between Shogun&apos;s Sorrow and
          the coast. Third-party rotations through this corridor now have more consistent
          concealment compared to the open-field equivalent in Season 1. Teams using the
          blossom coverage can approach Shogun&apos;s Sorrow from the north without being
          visible to players on the castle rooftop.
        </p>
        <p>
          Autumn-toned blossom variants appear in the eastern section of the map around the
          Katana Shrine, creating a distinct visual biome. These trees are slightly shorter
          than the northern variety, providing less full-body cover but more ambient
          concealment at crouching height.
        </p>

        <h2>Season 1 Locations Removed or Changed</h2>
        <p>
          Several Season 1 named locations were vaulted or substantially changed. The
          neutral industrial zone that occupied the central ridge was fully replaced by
          Shogun&apos;s Sorrow. Two coastal villages were converted into crime-district
          variants. The Season 1 shrine area, which was an ambient unnamed zone, was
          formalized as the Katana Shrine with a dedicated loot mechanic.
        </p>
        <p>
          The map&apos;s southern portion saw minimal changes. The Season 1 biomes in the
          south remain largely intact, providing a contrast to the heavily modified northern
          two-thirds of the island. End-circle play in southern zones should feel familiar
          to players who optimized rotations in Season 1.
        </p>

        <h2>Rotation Paths | How the Map Changes Affect Movement</h2>
        <p>
          The addition of Shogun&apos;s Sorrow as a central high-ground POI creates a new
          rotation hub. Teams that secure the castle early have elevation advantage across
          multiple rotation vectors. The typical late-game meta has shifted toward contesting
          height from Shogun&apos;s Sorrow earlier than players would have pushed for the
          old central ridge.
        </p>
        <p>
          The increased foliage in the north makes rotation paths from northern drop zones
          into the circle more forgiving. Players who drop Shogun&apos;s Sorrow early and
          take a fight loss can retreat into the blossom cover and reset rather than
          being immediately exposed on an open field rotation.
        </p>
        <p>
          For a full ranking of every weapon available this season including the Katana,
          see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-weapons-tier-list" className="text-blue-600 hover:text-blue-800 underline">
            Season 2 weapons tier list
          </Link>
          . For the complete Battle Pass skin list, see the{' '}
          <Link href="/video-games/fortnite/chapter-6-season-2-battle-pass" className="text-blue-600 hover:text-blue-800 underline">
            Battle Pass breakdown
          </Link>. All Season 2 guides are indexed on the{' '}
          <Link href="/video-games/fortnite" className="text-blue-600 hover:text-blue-800 underline">
            Fortnite hub
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
