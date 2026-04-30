import type { Metadata } from 'next';
import CreatorArticle, {
  CreatorSection,
  CreatorStat,
  CreatorTable,
  CreatorCalloutBox,
  CreatorQuote,
} from '@/components/articles/CreatorArticle';

// Inline creator article — content lives in the codebase, no Supabase sync.
// Images: placeholder paths — replace with real assets before deploying to production.

export const dynamic = 'force-dynamic';

const SLUG = '/influencer/charli-damelio';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/charli-damelio-profile.jpg';

export const metadata: Metadata = {
  title: 'Charli D\'Amelio | Age, TikTok, Net Worth, Bio 2026',
  description:
    'Charli D\'Amelio, 21, was the first TikTok creator to reach 100M followers. Full biography: net worth, dancing career, D\'Amelio Show, social media handles, and 2026 updates.',
  keywords: [
    'Charli D\'Amelio',
    'Charli D\'Amelio age',
    'Charli D\'Amelio age 2026',
    'Charli D\'Amelio TikTok',
    'Charli D\'Amelio net worth',
    'Charli D\'Amelio Instagram',
    'Charli D\'Amelio biography 2026',
    'Charli D\'Amelio boyfriend',
    'Charli D\'Amelio 2026',
    'Charli D\'Amelio dance',
    'D\'Amelio Show',
    'Charli D\'Amelio Hulu',
    'first TikTok 100 million followers',
    'Charli D\'Amelio Landon Barker',
    'D\'Amelio family',
    'Dixie D\'Amelio sister',
    'Charli D\'Amelio BORN DREAMER',
    'TikTok most followed',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Charli D\'Amelio | Age, TikTok, Net Worth & Bio 2026',
    description:
      'Full profile of Charli D\'Amelio, 21, first person to 100M TikTok followers. Dancing career, D\'Amelio Show, BORN DREAMER brand, and social media 2026.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    tags: ['Charli D\'Amelio', 'Influencer', 'TikTok', 'Dancing', 'Connecticut'],
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Charli D\'Amelio, TikTok creator and dancer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charli D\'Amelio | 150M TikTok, First to 100M, Bio 2026',
    description: 'Charli D\'Amelio profile: age 21, TikTok dancer, first to 100M followers, D\'Amelio Show, BORN DREAMER, and relationship with Landon Barker.',
    images: [`https://www.objectwire.org${IMAGE_URL}`],
  },
};

export default function CharliDameliioPage() {
  return (
    <CreatorArticle
      schema={{
        title: 'Charli D\'Amelio | TikTok Dancer, First to 100M Followers, Biography 2026',
        description:
          'Charli D\'Amelio, 21, is an American dancer and TikTok creator from Norwalk, Connecticut. She was the first person to reach 100 million TikTok followers. Full biography: net worth, D\'Amelio Show, BORN DREAMER brand, and 2026 career.',
        publishedTime: '2026-04-29T12:00:00Z',
        modifiedTime: '2026-04-29T12:00:00Z',
        author: 'ObjectWire Influencer Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.objectwire.org${IMAGE_URL}`,
        section: 'Influencer',
        keywords: [
          'Charli D\'Amelio', 'Charli D\'Amelio age 2026', 'Charli D\'Amelio TikTok',
          'first 100M TikTok followers', 'Charli D\'Amelio net worth', 'D\'Amelio Show',
          'BORN DREAMER', 'Charli D\'Amelio biography', 'Charli D\'Amelio 2026',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.objectwire.org' },
        { name: 'Influencer', item: 'https://www.objectwire.org/influencer' },
        { name: 'Charli D\'Amelio', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Charli D\'Amelio, TikTok dancer and creator' },
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f64f59 100%)',
        badges: [
          { label: 'Norwalk, CT', style: 'default' },
          { label: 'First to 100M on TikTok', style: 'achievement' },
          { label: 'Dancer', style: 'default' },
        ],
        name: 'Charli D\'Amelio',
        subtitle: 'TikTok Dancer, Creator, BORN DREAMER Founder',
        description:
          'Charli D\'Amelio became a global phenomenon at age 15, rising to become TikTok\'s most-followed creator and the first person in history to reach 100 million followers on the platform. Now 21, she continues to expand her brand across dance, television, and fashion.',
        ctaButtons: [
          { href: 'https://www.tiktok.com/@charlidamelio', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/charlidamelio', label: 'Instagram', icon: '📷', variant: 'secondary' },
          { href: 'https://www.youtube.com/@charlidamelio', label: 'YouTube', icon: '▶', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Charli D\'Amelio profile photo' },
          name: 'Charli D\'Amelio',
          subtitle: 'TikTok Creator, Dancer',
          rows: [
            { label: 'Full Name', value: 'Charli Grace D\'Amelio' },
            { label: 'Born', value: 'May 1, 2004' },
            { label: 'Age (2026)', value: '21' },
            { label: 'Nationality', value: 'American' },
            { label: 'From', value: 'Norwalk, Connecticut' },
            { label: 'Based In', value: 'Los Angeles, CA' },
            { label: 'Occupation', value: 'Creator, Dancer, Actress, Entrepreneur' },
            { label: 'Family', value: 'Sister: Dixie D\'Amelio; Parents: Marc & Heidi' },
            {
              label: 'TikTok',
              value: '@charlidamelio',
              href: 'https://www.tiktok.com/@charlidamelio',
            },
            {
              label: 'Instagram',
              value: '@charlidamelio',
              href: 'https://www.instagram.com/charlidamelio',
            },
            {
              label: 'YouTube',
              value: '@charlidamelio',
              href: 'https://www.youtube.com/@charlidamelio',
            },
            { label: 'TikTok Followers', value: '155M+' },
            { label: 'Instagram', value: '48M followers' },
            { label: 'Brand', value: 'BORN DREAMER (fragrance)' },
            { label: 'Partner', value: 'Landon Barker' },
          ],
        },
        timeline: [
          { year: '2019', event: 'Posted first TikTok dance video; reached 1M followers in under 2 months' },
          { year: '2020', event: 'Became #1 most-followed TikTok creator; first to reach 100M followers' },
          { year: '2021', event: 'The D\'Amelio Show premiered on Hulu; competed on Dancing with the Stars Season 31' },
          { year: '2022', event: 'Won Dancing with the Stars Season 31 with partner Mark Ballas' },
          { year: '2023', event: 'Launched BORN DREAMER fragrance brand' },
          { year: '2024', event: 'D\'Amelio Show Season 3; continued brand expansion' },
          { year: '2026', event: 'Active across all platforms; BORN DREAMER expanding product line' },
        ],
        relatedLinks: [
          { href: '/influencer', label: 'Influencer Hub' },
          { href: '/influencer/alix-earle', label: 'Alix Earle Profile' },
          { href: '/tiktok', label: 'TikTok News' },
        ],
        meta: {
          publishedDate: 'April 29, 2026',
          updatedDate: 'April 29, 2026',
          author: 'ObjectWire Influencer Desk',
          category: 'Influencer',
        },
      }}
      tags={['Charli D\'Amelio', 'TikTok', 'Dancer', 'Influencer', 'Connecticut', 'BORN DREAMER']}
    >

      <CreatorSection heading="Who Is Charli D'Amelio">
        <p>
          Charli Grace D'Amelio is an American dancer, content creator, and entrepreneur born on May 1, 2004, in Norwalk, Connecticut. She became a cultural phenomenon at 15 when her TikTok dance videos went viral, making her the platform's most-followed creator and the first person in history to reach 100 million followers on{' '}
          <a href="/tiktok" className="text-blue-600 hover:text-blue-800 underline">TikTok</a>.
        </p>
        <p>
          In 2026, Charli is 21 years old and based in Los Angeles. Beyond social media, she has pursued dancing professionally, starred in a Hulu reality series with her family, won Dancing with the Stars, and launched her own fragrance brand, BORN DREAMER.
        </p>
      </CreatorSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="155M+" label="TikTok Followers" color="purple" />
        <CreatorStat value="48M" label="Instagram Followers" color="blue" />
        <CreatorStat value="21" label="Age in 2026" color="green" />
      </div>

      <CreatorSection heading="Charli D'Amelio TikTok | First to 100 Million Followers">
        <p>
          Charli D'Amelio joined TikTok in 2019 and reached 1 million followers within two months. By March 2020, she had surpassed Loren Gray to become the most-followed creator on TikTok. She was the first person to reach 50 million, then 100 million followers on the platform.
        </p>
        <p>
          Her content is primarily dance-focused, featuring trending dances, original choreography, and collaborations with other creators. The "Renegade" dance, which she popularized in late 2019, became one of the most-replicated dances in TikTok history, generating significant controversy over the original creator not receiving credit.
        </p>
        <p>
          As of 2026, her account @charlidamelio holds over 155 million followers. While her upload pace has slowed compared to 2020, her videos consistently generate tens of millions of views.
        </p>
      </CreatorSection>

      <CreatorSection heading="Charli D'Amelio Dancing | Competitive Background and Dancing with the Stars">
        <p>
          Charli D'Amelio's TikTok success is grounded in real dance training. She trained competitively in dance for over a decade before joining TikTok, specializing in contemporary and jazz styles.
        </p>
        <p>
          In 2022, she competed on Dancing with the Stars Season 31 alongside professional partner Mark Ballas. She won the competition, becoming the youngest finalist and champion in the show's history up to that point. The win validated her dancing credentials beyond social media and expanded her audience to a mainstream television demographic.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="The D'Amelio Show | Hulu Reality Series"
        color="purple"
        items={[
          { label: 'Network', detail: 'Hulu' },
          { label: 'Cast', detail: 'Charli, Dixie, Marc and Heidi D\'Amelio' },
          { label: 'Premiere', detail: 'Season 1 debuted September 2021' },
          { label: 'Format', detail: 'Reality docuseries following the D\'Amelio family in LA' },
          { label: 'Seasons', detail: '3 seasons produced through 2024' },
        ]}
      />

      <CreatorSection heading="Charli D'Amelio BORN DREAMER | Fragrance Brand 2023">
        <p>
          In 2023, Charli D'Amelio launched BORN DREAMER, a fragrance brand targeting the Gen Z market. The brand's initial product line includes eau de parfum bottles with packaging designed to appeal to her core demographic.
        </p>
        <p>
          BORN DREAMER positions itself as an accessible luxury fragrance brand, available through major retailers. The launch generated significant sales volume, supported by Charli's cross-platform social media promotion.
        </p>
      </CreatorSection>

      <CreatorQuote
        quote="Dance was always what I loved. TikTok just let me share it. I never expected any of this, but I'm grateful every single day."
        attribution="Charli D'Amelio"
        role="TikTok Creator, Dancer"
      />

      <CreatorSection heading="Charli D'Amelio Net Worth | Estimating the Youngest TikTok Billionaire">
        <p>
          Charli D'Amelio's net worth in 2026 is estimated between $20 million and $25 million, making her one of the wealthiest creator-age influencers globally. Her income sources include TikTok creator revenue, brand partnerships (Dunkin', Morphe, PUMA, Amazon), The D'Amelio Show fees, Dancing with the Stars appearance fees, and BORN DREAMER sales.
        </p>
        <p>
          Her Dunkin' collaboration, which produced a drink named "The Charli," was one of the most successful creator-brand beverage partnerships in the fast food industry. Dunkin' reported it drove the largest single-day app download spike in company history on launch day.
        </p>
      </CreatorSection>

      <CreatorTable
        columns={[
          { key: 'platform', header: 'Platform' },
          { key: 'handle', header: 'Handle' },
          { key: 'followers', header: 'Followers' },
          { key: 'focus', header: 'Content' },
        ]}
        rows={[
          { platform: 'TikTok', handle: '@charlidamelio', followers: '155M+', focus: 'Dance, trends, vlogs' },
          { platform: 'Instagram', handle: '@charlidamelio', followers: '48M', focus: 'Lifestyle, brand content' },
          { platform: 'YouTube', handle: '@charlidamelio', followers: '10M', focus: 'Vlogs, behind-the-scenes' },
          { platform: 'Twitter/X', handle: '@charlidamelio', followers: '6.8M', focus: 'Fan interaction' },
        ]}
        highlightKey="platform"
        highlightValue="TikTok"
      />

      <CreatorSection heading="Charli D'Amelio Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.tiktok.com/@charlidamelio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TikTok: @charlidamelio (155M+ followers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/charlidamelio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @charlidamelio (48M followers)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@charlidamelio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @charlidamelio (10M subscribers)
            </a>
          </li>
        </ul>
      </CreatorSection>

      <CreatorSection heading="Charli D'Amelio 2026 | Creator Profile Summary">
        <p>
          Charli D'Amelio in 2026 represents the maturation of TikTok's first generation of superstars. Her trajectory from teenage dancer to multi-hyphenate creator, television star, and brand founder in just six years is one of the defining stories of the short-form video era.
        </p>
        <p>
          For more creator profiles, see the{' '}
          <a href="/influencer" className="text-blue-600 hover:text-blue-800 underline">Influencer Hub</a>, the{' '}
          <a href="/influencer/alix-earle" className="text-blue-600 hover:text-blue-800 underline">Alix Earle profile</a>, and{' '}
          <a href="/tiktok" className="text-blue-600 hover:text-blue-800 underline">TikTok news coverage</a>.
        </p>
      </CreatorSection>

    </CreatorArticle>
  );
}
