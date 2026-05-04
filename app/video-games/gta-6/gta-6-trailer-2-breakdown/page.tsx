import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/gta-6/gta-6-trailer-2-breakdown';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'GTA 6 Trailer 2 Breakdown | Every Confirmed Detail, Release Date',
  description:
    'GTA 6 Trailer 2 confirmed dual protagonists Jason and Lucia, Vice City open world, November 19 2026 release date, and a map larger than any previous Rockstar game. Full breakdown.',
  keywords: [
    'GTA 6 trailer 2',
    'GTA 6 Trailer 2 breakdown',
    'GTA 6 Trailer 2 details',
    'GTA 6 Jason Lucia',
    'GTA 6 Vice City Leonida',
    'GTA 6 release date November 2026',
    'GTA 6 map size',
    'GTA 6 gameplay confirmed',
    'GTA 6 Rockstar Games trailer',
    'Grand Theft Auto 6 trailer breakdown',
    'GTA 6 PS5 Xbox Series X',
    'GTA 6 dual protagonists',
    'GTA 6 Vice City confirmed',
    'GTA 6 November 19 2026',
    'Rockstar Games GTA 6 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GTA 6 Trailer 2 Breakdown | Jason, Lucia, Vice City, Nov 19',
    description:
      'GTA 6 Trailer 2 confirmed: dual protagonist Jason and Lucia, the state of Leonida (Vice City), November 19, 2026 release, and a map designed around social media-era Florida.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-29T14:00:00Z',
    modifiedTime: '2026-04-29T14:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Grand Theft Auto 6 GTA 6 Vice City trailer breakdown' }],
    tags: ['GTA 6', 'Rockstar Games', 'Grand Theft Auto', 'Vice City', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Trailer 2 | Every Confirmed Detail',
    description:
      'Jason and Lucia confirmed, Leonida open world, November 19 2026 release, and a Vice City larger than anything Rockstar has built. Full breakdown.',
    images: [OG_IMAGE],
  },
};

export default function GTA6Trailer2BreakdownPage() {
  return (
    <NewsArticle
      title="GTA 6 Trailer 2 Breakdown | Every Confirmed Detail"
      subtitle="Dual protagonists, the state of Leonida, and a November 19, 2026 release date: everything Rockstar confirmed in GTA 6 Trailer 2"
      category="Gaming"
      categoryColor="orange"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="7 min read"
      author={{ name: 'ObjectWire Gaming Desk', authorSlug: 'objectwire-gaming-desk' }}
      tags={['GTA 6', 'Rockstar Games', 'Grand Theft Auto', 'Vice City', 'Gaming', 'Take-Two']}
      thumbnail={{ src: OG_IMAGE, alt: 'GTA 6 Vice City Leonida Rockstar Games' }}
      slug="video-games-gta-6-gta-6-trailer-2-breakdown"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'GTA 6', item: '/video-games/gta-6' },
        { name: 'Trailer 2 Breakdown', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'video-games-gta-6', title: 'Grand Theft Auto VI | Complete Guide | Release Date, Price', url: '/video-games/gta-6', publishDate: 'March 2026', category: 'Gaming' },
        { slug: 'video-games-news-gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay', title: 'GTA 6 Pre-Orders | PlayStation Store Title IDs Signal Imminent Launch', url: '/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay', publishDate: 'March 1, 2026', category: 'Gaming' },
        { slug: 'video-games-gta-6-news-take-two-ai-team-shake-up-2026', title: 'Take-Two AI Team Restructure | Hundreds of Pilots Pledged', url: '/video-games/gta-6/news/take-two-ai-team-shake-up-2026', publishDate: 'March 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="GTA 6 Coverage"
      moreFromHubHref="/video-games/gta-6"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Grand Theft Auto 6 is releasing <strong>November 19, 2026</strong> on PlayStation 5 and Xbox Series
          X|S. That date was confirmed in the second official GTA 6 trailer, which Rockstar Games released on
          May 6, 2025. The trailer built on Trailer 1 (December 4, 2023) and made specific elements canonical
          that had previously been speculative: the two-protagonist structure, the Vice City setting within the
          fictional state of Leonida, and the cultural backdrop of a surveillance and social-media-saturated
          Florida analogue.
        </p>

        <p>
          This is the full breakdown of what Rockstar confirmed via both trailers and subsequent official
          communications. For a complete evergreen guide including pricing, editions, and PC release
          information, see the{' '}
          <Link href="/video-games/gta-6" className="text-blue-600 hover:text-blue-800 underline">
            GTA 6 complete guide
          </Link>.
        </p>

        <h2 id="protagonists">Dual Protagonists | Jason and Lucia</h2>

        <p>
          GTA 6 features two playable protagonists: <strong>Jason Duval</strong> and{' '}
          <strong>Lucia Caminos</strong>. Lucia is the first playable female protagonist in the mainline GTA
          series. Trailer 1 opened with Lucia speaking directly to the camera from what appears to be a prison
          or detention setting, with an ankle monitor visible. The circumstances of her situation, and her
          relationship to Jason, drive the early narrative.
        </p>

        <p>
          Trailer 2 confirmed that Jason and Lucia operate together as a couple engaged in criminal activity.
          Gameplay sections showed both characters being controlled in a Bonnie and Clyde-style partnership,
          with the player presumably switching between them as in GTA 5&apos;s three-protagonist structure.
          Rockstar has not confirmed the exact switching mechanic, but the dual framing is present throughout
          all official footage.
        </p>

        <h2 id="leonida-vice-city">Leonida and Vice City | The Setting Confirmed</h2>

        <p>
          The game is set in the fictional <strong>state of Leonida</strong>, a stand-in for Florida. The main
          city is <strong>Vice City</strong>, the Miami-inspired location last seen in GTA Vice City (2002) and
          GTA Vice City Stories (2006). Trailer 2 showed Vice City in 2026-era detail: dense urban coastline,
          luxury real estate, swamps and rural stretches of Leonida beyond the city limits, and a highway
          system connecting multiple distinct environments.
        </p>

        <p>
          Rockstar has described the map as the largest and most detailed open world it has ever built. The
          studio&apos;s previous record was Red Dead Redemption 2 (2018), itself described as taking
          Rockstar four years and a substantial portion of its 2,000+ person team to construct. GTA 6&apos;s
          Leonida state encompasses Vice City proper, surrounding suburbs, rural marshlands, beaches, and at
          least one additional named location visible in the trailers.
        </p>

        <h2 id="social-media-saturation">Social Media Florida | The Cultural Setting</h2>

        <p>
          One of the clearest thematic signals in both trailers is the role of social media, content creation,
          and surveillance culture in the world of GTA 6. Trailer 1 featured clips styled as vertical-format
          viral videos shot by characters within the game world, depicting crimes, stunts, and interactions
          that echo real-world platforms like TikTok and Instagram. Characters film each other during incidents.
          Influencers and creators appear to be a recurring NPC archetype.
        </p>

        <p>
          This represents a deliberate creative choice by Rockstar to satirize the current moment in the
          same way GTA 5 (2013) satirized the post-2008 financial crisis and media excess. The Florida setting
          is particularly apt: the state has produced a disproportionate volume of viral social media content,
          and the term "Florida Man" has become cultural shorthand for the kind of absurdist chaos GTA traffics in.
        </p>

        <h2 id="vehicles-gameplay">Vehicles and Gameplay | What the Trailers Showed</h2>

        <p>
          Both trailers confirmed a broad vehicle roster including cars, motorcycles, boats, jet skis, and
          aircraft. Outdoor recreational activities are visible in the footage: swamp boat tours, beach scenes,
          and off-road pursuits in the Leonida countryside. Police pursuits shown in Trailer 2 appeared
          significantly more dynamic than GTA 5, with individual officers calling for backup, roadblocks being
          assembled in real time, and pursuits extending across both urban and rural terrain.
        </p>

        <p>
          Rockstar has not released formal gameplay demonstrations or a dedicated gameplay reveal. All confirmed
          gameplay elements have been observed in the trailers or discussed in official statements. A third
          trailer or gameplay direct is anticipated before the November 19 launch date, though no date has been
          announced as of April 2026.
        </p>

        <h2 id="release-platforms">Release | PS5 and Xbox Series X|S First, PC Later</h2>

        <p>
          GTA 6 launches <strong>November 19, 2026</strong> on <strong>PlayStation 5</strong> and{' '}
          <strong>Xbox Series X|S</strong>. A PC version has not been announced. Historically, Rockstar has
          released PC versions of its titles 12 to 18 months after console launch: GTA 5 released on PS3/Xbox
          360 in September 2013 and reached PC in April 2015, a 19-month gap. Red Dead Redemption 2 released
          on consoles October 2018 and PC in November 2019. A GTA 6 PC release in late 2027 or early 2028
          would be consistent with that pattern, though Rockstar has made no official statement.
        </p>

        <p>
          Pre-orders are expected imminently. PlayStation Store title IDs for GTA 6 surfaced in the backend in
          March 2026, the standard indicator of an upcoming product listing. Take-Two CEO Strauss Zelnick
          confirmed at the time that there would be no further delay beyond November 2026, addressing concerns
          after multiple GTA 6 release window adjustments between 2023 and 2025.
        </p>

        <p>
          For pricing and edition details, see the{' '}
          <Link href="/video-games/gta-6" className="text-blue-600 hover:text-blue-800 underline">
            full GTA 6 guide
          </Link>. For related news on Take-Two&apos;s AI development direction ahead of launch, see the{' '}
          <Link href="/video-games/gta-6/news/take-two-ai-team-shake-up-2026" className="text-blue-600 hover:text-blue-800 underline">
            Take-Two AI team restructure coverage
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
