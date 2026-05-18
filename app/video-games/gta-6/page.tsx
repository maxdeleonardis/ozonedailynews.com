import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section, TableOfContents } from '@/components/articles/ArticlePage';

// Migrated to codebase — no Supabase fetch. Rendered at build time.
export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/video-games/gta-6';
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'GTA 6 | Release Date, Price, Characters & Complete Guide',
  description:
    'GTA 6 releases November 19, 2026 on PS5 and Xbox Series X|S. Full guide covering release date, price, dual protagonists Jason and Lucia, Vice City map, PC release, and GTA Online successor.',
  keywords: [
    'GTA 6',
    'Grand Theft Auto VI',
    'GTA 6 release date',
    'GTA 6 price',
    'GTA 6 November 2026',
    'GTA 6 characters',
    'GTA 6 Jason Lucia',
    'GTA 6 Vice City',
    'GTA 6 Leonida',
    'GTA 6 PS5',
    'GTA 6 Xbox Series X',
    'GTA 6 PC',
    'GTA 6 map size',
    'Rockstar Games GTA 6',
    'Take-Two Interactive',
    'GTA 6 multiplayer',
    'GTA 6 online',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'GTA 6 | Release Date, Price, Characters & Complete Guide',
    description:
      'November 19, 2026 confirmed. Dual protagonists Jason and Lucia. The state of Leonida. Everything Rockstar has confirmed.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Grand Theft Auto VI GTA 6 complete guide' }],
    tags: ['GTA 6', 'Rockstar Games', 'Grand Theft Auto', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 | Everything Confirmed | Release Date, Price, Characters',
    description:
      'November 19, 2026 on PS5 and Xbox. Jason and Lucia, Vice City, the state of Leonida. Complete guide.',
    images: [OG_IMAGE],
  },
};

export default function GTA6Page() {
  return (
    <ArticlePage
      title="Grand Theft Auto VI | Complete Guide"
      subtitle="Release date, dual protagonists, the state of Leonida, pricing, and everything Rockstar Games has confirmed about GTA 6"
      category="Gaming"
      lastUpdated="April 29, 2026"
      slug="video-games-gta-6"
      url="/video-games/gta-6"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/gta-6', label: 'GTA 6' },
      ]}
      infoBox={{
        title: 'Grand Theft Auto VI',
        image: { src: OG_IMAGE, alt: 'GTA 6 Vice City Rockstar Games', caption: 'State of Leonida, Rockstar Games' },
        sections: [
          {
            heading: 'Quick Facts',
            items: [
              { label: 'Developer', value: 'Rockstar Games' },
              { label: 'Publisher', value: 'Take-Two Interactive' },
              { label: 'Release Date', value: 'November 19, 2026' },
              { label: 'Platforms', value: 'PS5, Xbox Series X|S' },
              { label: 'PC Release', value: 'Not announced' },
              { label: 'Genre', value: 'Action-adventure, Open World' },
              { label: 'Setting', value: 'State of Leonida (Vice City)' },
              { label: 'Protagonists', value: 'Jason Duval, Lucia Caminos' },
            ],
          },
          {
            heading: 'Related Coverage',
            links: [
              { href: '/video-games/gta-6', label: 'Trailer 2 Full Breakdown' },
              { href: '/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay', label: 'GTA 6 Pre-Orders' },
              { href: '/video-games/gta-6/news/take-two-ai-team-shake-up-2026', label: 'Take-Two AI Team Restructure' },
            ],
          },
          {
            heading: 'Video Games Hub',
            links: [
              { href: '/video-games', label: 'All Gaming Coverage' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'release-date', label: 'Release Date | November 19, 2026' },
        { id: 'characters', label: 'Characters | Jason and Lucia' },
        { id: 'map', label: 'Map | State of Leonida' },
        { id: 'price', label: 'Price | Expected Editions' },
        { id: 'pc-release', label: 'PC Release | No Date Set' },
        { id: 'multiplayer', label: 'Multiplayer | GTA Online Successor' },
        { id: 'sub-articles', label: 'More GTA 6 Coverage' },
      ]}
      relatedLinks={[
        { href: '/video-games/gta-6', label: 'GTA 6 Trailer 2 Breakdown', description: 'Every detail confirmed in the second official trailer' },
        { href: '/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay', label: 'GTA 6 Pre-Orders', description: 'PlayStation Store title IDs signal imminent launch window' },
        { href: '/video-games/gta-6/news/take-two-ai-team-shake-up-2026', label: 'Take-Two AI Team Restructure', description: 'Hundreds of AI pilots pledged ahead of GTA 6 launch' },
        { href: '/video-games/gta-6/news/rockstar-gta5-crunch-overtime-pay', label: 'GTA 5 Crunch Overtime Pay', description: 'Former Rockstar developers say they were never compensated for 100-hour crunch weeks' },
        { href: '/video-games', label: 'Video Games Hub', description: 'All gaming news and guides on ObjectWire' },
      ]}
      backLink={{ href: '/video-games', label: 'Video Games' }}
    >
      <TableOfContents items={[
        { id: 'release-date', label: 'Release Date | November 19, 2026' },
        { id: 'characters', label: 'Characters | Jason and Lucia' },
        { id: 'map', label: 'Map | State of Leonida' },
        { id: 'price', label: 'Price | Expected Editions' },
        { id: 'pc-release', label: 'PC Release | No Date Set' },
        { id: 'multiplayer', label: 'Multiplayer | GTA Online Successor' },
        { id: 'sub-articles', label: 'More GTA 6 Coverage' },
      ]} />

      <Section id="release-date" title="Release Date | November 19, 2026 Confirmed for PS5 and Xbox">
        <p>
          Grand Theft Auto VI launches on <strong>November 19, 2026</strong> for PlayStation 5 and Xbox
          Series X|S. Rockstar Games confirmed the date in the second official trailer, released May 6, 2025.
          This followed the initial December 2023 announcement, which revealed the setting and protagonist
          lineup but not a precise date.
        </p>
        <p>
          Take-Two Interactive, Rockstar's parent company, has publicly assured platform holders Sony and
          Microsoft that there will be no further delay beyond November 2026. The assurance was significant
          enough that both PlayStation Store and Xbox marketplace listings began showing GTA 6 title ID
          entries in early 2026, signaling that pre-order infrastructure was being prepared for an
          imminent formal announcement. See the full{' '}
          <Link href="/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" className="text-blue-600 hover:text-blue-800 underline">
            GTA 6 pre-order coverage
          </Link>
          {' '}for the latest on early-access details.
        </p>
        <p>
          The November 2026 window was chosen to avoid the summer gaming drought and to land before the
          holiday quarter. GTA 5 launched in September 2013 on the same strategic window. Rockstar has
          historically favored autumn launches for its flagship titles. No specific hour or regional
          release-time stagger has been confirmed as of April 2026.
        </p>
      </Section>

      <Section id="characters" title="Characters | Jason Duval and Lucia Caminos, Dual Protagonists">
        <p>
          GTA 6 features two playable protagonists: <strong>Jason Duval</strong> and <strong>Lucia
          Caminos</strong>. This marks the first dual-protagonist structure in the series since GTA 5
          (2013), which used three: Michael, Trevor, and Franklin. Both Jason and Lucia are featured
          prominently in both trailers.
        </p>
        <p>
          Lucia appears first in Trailer 1, shown in a prison setting before being released and beginning
          what appears to be a crime partnership with Jason. Their relationship is framed as both romantic
          and criminal, drawing comparisons to a modern Bonnie and Clyde dynamic. Lucia speaks first in
          the trailer, establishing her as at least co-equal in the narrative.
        </p>
        <p>
          Jason, the male protagonist, is shown alongside Lucia in most action sequences. His backstory has
          not been explicitly disclosed in official materials, but trailer footage places him firmly in the
          Leonida criminal ecosystem. Voice casting for both characters has not been officially announced
          by Rockstar as of publication.
        </p>
        <p>
          The player can switch between Jason and Lucia during open-world exploration, a mechanic confirmed
          by Rockstar's trailer framing and consistent with GTA 5's character-switching system. How the
          narrative branches or differs by character choice has not been detailed.
        </p>
        <p>
          For a complete breakdown of every character detail confirmed in both trailers, see the{' '}
          <Link href="/video-games/gta-6" className="text-blue-600 hover:text-blue-800 underline">
            GTA 6 Trailer 2 Breakdown
          </Link>.
        </p>
      </Section>

      <Section id="map" title="Map | The State of Leonida, Vice City Reimagined">
        <p>
          GTA 6 is set in the <strong>State of Leonida</strong>, a fictional analogue to Florida. The map
          encompasses Vice City (a reimagined Miami), the Leonida Keys (Florida Keys), and a vast
          Everglades-style wetland interior. Rockstar has described the map as the largest the studio has
          ever built.
        </p>
        <p>
          Vice City itself is designed around the social-media-saturated, influencer-economy Miami of the
          2020s. Trailer footage shows strip malls, luxury condominiums, beaches, nightclubs, and footage
          depicting the surveillance-heavy modern Florida cultural backdrop. This is a significant tonal
          update from the 1980s Miami pastiche of the original Vice City (2002).
        </p>
        <p>
          The Leonida Keys section of the map was visible in Trailer 2 as an island chain connected by
          causeways. Water travel and boating appear to be first-class mechanics based on the volume of
          boat, jet-ski, and coastal footage in both trailers. The Everglades analog interior features
          swampland, rural towns, and what appears to be a significant rural criminal operation network.
        </p>
        <p>
          No confirmed square-mile figures have been released. Rockstar has not published official map
          dimensions, and third-party estimates from trailer analysis range widely. What is confirmed is
          that the map will be larger than GTA 5's Los Santos, which itself was a record-size open world
          at launch in 2013.
        </p>
      </Section>

      <Section id="price" title="Price | Expected Editions and Global Cost">
        <p>
          Rockstar and Take-Two Interactive have not published official pricing for GTA 6. However,
          retailer listings and Take-Two executive commentary indicate the game will be positioned in the
          premium tier, with a US launch price expected between <strong>$70 and $80</strong>.
        </p>
        <p>
          UK retailer listings have appeared showing prices of <strong>£89.99</strong> for the standard
          edition. Indian market estimates from gaming publications place the price at{' '}
          <strong>₹5,999 to ₹6,999</strong>. European pricing has been tentatively listed at{' '}
          <strong>€89.99</strong> in several pre-announcement retailer placeholders.
        </p>
        <p>
          Take-Two CEO Strauss Zelnick has repeatedly stated in earnings calls that the company believes
          consumers will pay a premium for a product of GTA 6's scale and development cost. The game is
          widely reported to be the most expensive video game ever produced, with development costs
          estimated in the range of $1 billion to $2 billion over its development cycle.
        </p>
        <p>
          A Deluxe or Special Edition with bonus in-game content is expected, as is standard for major
          Rockstar launches. Pre-order bonuses have not been confirmed. No subscription-tier (PlayStation
          Plus, Xbox Game Pass) day-one inclusion has been announced, and Take-Two's track record strongly
          suggests GTA 6 will not launch on Game Pass.
        </p>
      </Section>

      <Section id="pc-release" title="PC Release | Console-First Window, No PC Date Confirmed">
        <p>
          GTA 6 has no confirmed PC release date. The November 19, 2026 launch is exclusive to PS5 and
          Xbox Series X|S. Rockstar's historical pattern is a significant delay between console and PC
          releases.
        </p>
        <p>
          GTA 5 launched on PS3 and Xbox 360 in September 2013. The PC version did not arrive until
          April 2015, a gap of 19 months. Red Dead Redemption 2 launched on consoles in October 2018 and
          reached PC in November 2019, a 13-month gap. Both cases involved substantial optimization work
          for PC hardware configurations.
        </p>
        <p>
          Based on this precedent, a GTA 6 PC release would likely arrive in late 2027 or early 2028 at
          the earliest. No leaks or insider reporting has indicated an accelerated timeline for PC. NVIDIA
          and AMD have not made any co-marketing announcements related to GTA 6 PC, which would typically
          precede a near-term PC release date.
        </p>
      </Section>

      <Section id="multiplayer" title="Multiplayer | GTA Online Successor Confirmed">
        <p>
          GTA 6 will include a multiplayer mode described as the successor to{' '}
          <strong>GTA Online</strong>. The exact structure, whether it will be embedded in GTA 6 or
          launched as a separate title (as GTA Online was eventually sold separately), has not been
          confirmed.
        </p>
        <p>
          GTA Online, despite launching with GTA 5 in 2013, remains an active revenue source for
          Rockstar in 2026. The platform generated an estimated $1 billion in revenue in its first year
          and has continued to receive updates for over a decade. The GTA 6 multiplayer platform is
          expected to be a central business model component for Take-Two post-launch.
        </p>
        <p>
          Trailer 2 did not show explicit multiplayer footage. Rockstar has confirmed that multiplayer
          details will be revealed closer to launch. Given the scale of investment, the GTA 6 online
          component is likely to be more ambitious than GTA Online, incorporating dynamic world events,
          player-driven criminal enterprises, and content tied to the State of Leonida setting.
        </p>
        <p>
          Take-Two's AI-focused restructuring of Rockstar's development teams, announced in early 2026,
          is understood to be partly aimed at powering the procedural and AI-driven elements of GTA 6's
          multiplayer world. See coverage of the{' '}
          <Link href="/video-games/gta-6/news/take-two-ai-team-shake-up-2026" className="text-blue-600 hover:text-blue-800 underline">
            Take-Two AI team restructure
          </Link>
          {' '}for context on the development direction.
        </p>
      </Section>

      <Section id="sub-articles" title="More GTA 6 Coverage">
        <p>
          ObjectWire covers GTA 6 in depth across multiple articles. Start with the{' '}
          <Link href="/video-games/gta-6" className="text-blue-600 hover:text-blue-800 underline">
            Trailer 2 full breakdown
          </Link>
          {' '}for every confirmed detail. For the latest business and development news, see the{' '}
          <Link href="/video-games/gta-6/news/take-two-ai-team-shake-up-2026" className="text-blue-600 hover:text-blue-800 underline">
            Take-Two AI restructure article
          </Link>
          . Pre-order and platform-holder news is covered in the{' '}
          <Link href="/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" className="text-blue-600 hover:text-blue-800 underline">
            GTA 6 pre-orders story
          </Link>
          . An investigation into the labor conditions behind GTA 5's development, and why developers
          say they were never paid overtime for the crunch that built a $8 billion franchise, is available in{' '}
          <Link href="/video-games/gta-6/news/rockstar-gta5-crunch-overtime-pay" className="text-blue-600 hover:text-blue-800 underline">
            Rockstar GTA 5 Crunch | Developers Were Never Paid Overtime
          </Link>
          . All gaming coverage is indexed on the{' '}
          <Link href="/video-games" className="text-blue-600 hover:text-blue-800 underline">
            video games hub
          </Link>.
        </p>
      </Section>
    </ArticlePage>
  );
}
