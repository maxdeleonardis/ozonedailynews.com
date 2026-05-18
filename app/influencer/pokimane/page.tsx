import type { Metadata } from 'next';
import CreatorArticle, {
  CreatorSection,
  CreatorStat,
  CreatorTable,
  CreatorCalloutBox,
  CreatorQuote,
} from '@/components/articles/CreatorArticle';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

// Inline creator article — content lives in the codebase, no Supabase sync.
// Images: placeholder paths — replace with real assets before deploying to production.

export const dynamic = 'force-dynamic';

const SLUG = '/creator/pokimane';
const PAGE_URL = `https://www.owire.org${SLUG}`;
const IMAGE_URL = '/influncer/pokimane-profile.jpg';

export const metadata: Metadata = {
  title: 'Pokimane | Age, Net Worth, YouTube, Twitch Retirement Bio 2026',
  description:
    'Pokimane (Imane Anys), 29, retired from Twitch in 2024 after 10 years. Full biography: real name, net worth, Midnight snack brand, YouTube 2026, and relationship history.',
  keywords: [
    'Pokimane',
    'Pokimane age',
    'Pokimane age 2026',
    'Pokimane real name',
    'Imane Anys',
    'Pokimane Twitch retirement',
    'Pokimane net worth',
    'Pokimane YouTube',
    'Pokimane boyfriend',
    'Pokimane Midnight brand',
    'Pokimane biography 2026',
    'Pokimane Instagram',
    'Pokimane TikTok',
    'Pokimane 2026',
    'female Twitch streamer biography',
    'Pokimane streaming career',
    'Pokimane what is she doing now',
    'Pokimane relationship',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Pokimane | Age, Twitch Retirement & Net Worth Bio 2026',
    description:
      'Full profile of Pokimane (Imane Anys), 29, who retired from Twitch in 2024. YouTube, Midnight brand, net worth, real name, and life after streaming.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    tags: ['Pokimane', 'Creator', 'Twitch', 'YouTube', 'Midnight'],
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Pokimane, gaming creator and Midnight founder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokimane | Retired from Twitch, 8M YouTube Subscribers',
    description: 'Pokimane profile: real name Imane Anys, age 29, Twitch retirement 2024, Midnight snack brand, net worth, and YouTube 2026.',
    images: [`https://www.owire.org${IMAGE_URL}`],
  },
};

export default function PokimanePage() {
  return (
    <CreatorArticle
      schema={{
        title: 'Pokimane | Imane Anys, Twitch Retirement, YouTube Creator & Midnight Brand Profile',
        description:
          'Pokimane (Imane Anys), 29, is a Canadian-Moroccan content creator who retired from Twitch in January 2024 after a decade. Full biography: net worth, YouTube, Midnight brand, and life in 2026.',
        publishedTime: '2026-04-29T12:00:00Z',
        modifiedTime: '2026-04-29T12:00:00Z',
        author: 'OzoneNews Creator Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.owire.org${IMAGE_URL}`,
        section: 'Creator',
        keywords: [
          'Pokimane', 'Imane Anys', 'Pokimane age 2026', 'Pokimane Twitch retirement',
          'Pokimane net worth', 'Midnight brand', 'Pokimane YouTube', 'Pokimane biography',
          'female streamer', 'Twitch retirement 2024', 'Pokimane 2026',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.owire.org' },
        { name: 'Creator', item: 'https://www.owire.org/creator' },
        { name: 'Pokimane', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Pokimane gaming creator and Midnight founder' },
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
        badges: [
          { label: 'Morocco / Canada', style: 'default' },
          { label: 'Retired Twitch 2024', style: 'achievement' },
          { label: 'Midnight Founder', style: 'default' },
        ],
        name: 'Pokimane',
        subtitle: 'YouTube Creator, Former Twitch Streamer, Midnight Brand Founder',
        description:
          'Pokimane (Imane Anys) spent a decade as one of Twitch\'s most-watched creators before stepping away in January 2024. Now 29, she focuses on YouTube content, her snack brand Midnight, and select brand partnerships.',
        ctaButtons: [
          { href: 'https://www.youtube.com/@pokimane', label: 'YouTube', icon: '▶', variant: 'secondary' },
          { href: 'https://www.tiktok.com/@pokimanelol', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/pokimanelol', label: 'Instagram', icon: '📷', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Pokimane profile photo' },
          name: 'Pokimane',
          subtitle: 'Creator, Entrepreneur',
          rows: [
            { label: 'Real Name', value: 'Imane Anys' },
            { label: 'Born', value: 'May 14, 1996' },
            { label: 'Age (2026)', value: '29' },
            { label: 'Nationality', value: 'Canadian-Moroccan' },
            { label: 'Based In', value: 'Los Angeles, CA' },
            { label: 'Occupation', value: 'Creator, Entrepreneur' },
            {
              label: 'YouTube',
              value: '@pokimane',
              href: 'https://www.youtube.com/@pokimane',
            },
            {
              label: 'Instagram',
              value: '@pokimanelol',
              href: 'https://www.instagram.com/pokimanelol',
            },
            {
              label: 'TikTok',
              value: '@pokimanelol',
              href: 'https://www.tiktok.com/@pokimanelol',
            },
            { label: 'YouTube Subs', value: '8.3M' },
            { label: 'Instagram', value: '7.2M followers' },
            { label: 'Brand', value: 'Midnight (snacks)' },
            { label: 'Former Platform', value: 'Twitch (10 years)' },
          ],
        },
        timeline: [
          { year: '2013', event: 'Started streaming on Twitch at age 17' },
          { year: '2017', event: 'Reached 1M Twitch followers; became one of the top female streamers globally' },
          { year: '2019', event: 'Signed multi-year Twitch exclusive deal' },
          { year: '2020', event: 'Among Us streams peaked with hundreds of millions of views' },
          { year: '2022', event: 'Launched Midnight, a co-founded snack and lifestyle brand' },
          { year: '2024', event: 'Announced retirement from Twitch in January 2024; pivoted to YouTube-first' },
          { year: '2026', event: 'Active on YouTube and social media; Midnight brand expanding' },
        ],
        relatedLinks: [
          { href: '/creator', label: 'Creator Hub' },
          { href: '/creator/valkyrae', label: 'Valkyrae Profile' },
          { href: '/tiktok', label: 'TikTok News' },
        ],
        meta: {
          publishedDate: 'April 29, 2026',
          updatedDate: 'April 29, 2026',
          author: 'OzoneNews Creator Desk',
          category: 'Creator',
        },
      }}
      tags={['Pokimane', 'Imane Anys', 'Twitch', 'YouTube', 'Midnight', 'Gaming Creator', 'Los Angeles']}
    >

      <CreatorSection heading="Who Is Pokimane">
        <p>
          Pokimane, whose real name is Imane Anys, is a Canadian-Moroccan content creator born on May 14, 1996. She is one of the most recognized names in streaming history, having spent a decade as one of{' '}
          <a href="/tiktok" className="text-blue-600 hover:text-blue-800 underline">Twitch's</a> top female creators before retiring in January 2024.
        </p>
        <p>
          In 2026, Pokimane is 29 years old and based in Los Angeles. She now focuses primarily on YouTube, her snack brand Midnight, and selective public appearances. Her Twitch channel still exists with nearly 9.3 million followers, though she has not streamed there since her retirement announcement.
        </p>
      </CreatorSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="8.3M" label="YouTube Subscribers" color="blue" />
        <CreatorStat value="9.3M" label="Twitch Followers" color="purple" />
        <CreatorStat value="29" label="Age in 2026" color="green" />
      </div>

      <CreatorSection heading="Pokimane Twitch Retirement | 10 Years, 9.3M Followers">
        <p>
          Pokimane began streaming on Twitch in 2013 at age 17. Over the next decade, she became one of the platform's most-followed creators, eventually reaching 9.3 million followers, the highest follower count ever achieved by a female streamer on Twitch.
        </p>
        <p>
          In January 2024, she announced her retirement from Twitch, stating that she wanted to reduce her reliance on a single platform and focus on other creative projects. The announcement generated widespread coverage across gaming and entertainment media.
        </p>
        <p>
          The decision was not abrupt. She had been publicly discussing streaming fatigue and work-life balance for over two years before the retirement, and had already been reducing her Twitch hours significantly through 2023.
        </p>
      </CreatorSection>

      <CreatorSection heading="Pokimane YouTube | 8.3M Subscribers and Post-Twitch Career">
        <p>
          Pokimane's YouTube channel predates her Twitch fame, but has grown substantially since her 2024 pivot. The channel hosts VODs of gaming sessions, vlog content, podcast-style videos, and collaborations with other creators.
        </p>
        <p>
          Since leaving Twitch, her YouTube upload frequency has increased. The channel passed 8 million subscribers in 2025. Her content mix in 2026 includes lifestyle vlogs, gaming reaction videos, and commentary on internet culture.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="Pokimane Twitch Career at a Glance"
        color="blue"
        items={[
          { label: 'Active Years', detail: '2013 to January 2024 (10 years)' },
          { label: 'Peak Followers', detail: '9.3M (highest female count ever)' },
          { label: 'Best Year', detail: '2020, Among Us era, 100M+ stream views' },
          { label: 'Contracts', detail: 'Multi-year Twitch exclusive, then non-exclusive' },
          { label: 'Retirement Date', detail: 'January 2024' },
        ]}
      />

      <CreatorSection heading="Pokimane Midnight | Co-Founded Snack Brand 2022">
        <p>
          In 2022, Pokimane co-founded Midnight, a snack brand targeting the gaming and late-night creator audience. The brand launched with a line of cookies and snack products positioned as a better-for-you option compared to traditional gaming snacks.
        </p>
        <p>
          Midnight represents Pokimane's most significant business venture outside of content creation. The brand has expanded its product line since launch and maintains an active e-commerce presence. The co-founder structure means Pokimane holds equity in the business, not merely a brand ambassador role.
        </p>
      </CreatorSection>

      <CreatorQuote
        quote="I spent 10 years giving Twitch everything. It was home. But at some point, you have to ask what the next chapter looks like, and for me that chapter looks different."
        attribution="Pokimane"
        role="Creator, Midnight Co-Founder"
      />

      <CreatorSection heading="Pokimane Net Worth | Estimating a Decade of Streaming Revenue">
        <p>
          Pokimane's net worth in 2026 is estimated between $5 million and $10 million. Her income sources over her career include: Twitch subscription revenue and ad share, YouTube ad revenue, brand sponsorships (fashion, food, gaming), Midnight equity, and merchandise sales.
        </p>
        <p>
          She has been publicly vocal about not disclosing exact earnings, and has historically limited the number of brand partnerships she takes on compared to her peers, prioritizing long-term reputation over short-term sponsorship income.
        </p>
      </CreatorSection>

      <CreatorTable
        columns={[
          { key: 'platform', header: 'Platform' },
          { key: 'handle', header: 'Handle' },
          { key: 'followers', header: 'Followers' },
          { key: 'status', header: 'Status' },
        ]}
        rows={[
          { platform: 'YouTube', handle: '@pokimane', followers: '8.3M', status: 'Active (primary)' },
          { platform: 'Instagram', handle: '@pokimanelol', followers: '7.2M', status: 'Active' },
          { platform: 'TikTok', handle: '@pokimanelol', followers: '4.5M', status: 'Active' },
          { platform: 'Twitter/X', handle: '@pokimanelol', followers: '2.9M', status: 'Active' },
          { platform: 'Twitch', handle: '@pokimane', followers: '9.3M', status: 'Retired (Jan 2024)' },
        ]}
        highlightKey="status"
        highlightValue="Active (primary)"
      />

      <CreatorSection heading="Pokimane Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.youtube.com/@pokimane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @pokimane (8.3M subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pokimanelol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @pokimanelol (7.2M followers)
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@pokimanelol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TikTok: @pokimanelol (4.5M followers)
            </a>
          </li>
          <li>
            <a href="https://twitter.com/pokimanelol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Twitter/X: @pokimanelol (2.9M followers)
            </a>
          </li>
        </ul>
      </CreatorSection>

      <CreatorSection heading="Pokimane 2026 | Life After Twitch Summary">
        <p>
          Pokimane in 2026 is one of the clearest examples of a creator successfully transitioning away from a single dominant platform. Her Midnight brand, YouTube channel, and reduced but consistent social media presence allow her to maintain relevance without the all-consuming schedule Twitch demanded.
        </p>
        <p>
          For more gaming and creator coverage, see the{' '}
          <a href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator Hub</a> and the{' '}
          <a href="/creator/valkyrae" className="text-blue-600 hover:text-blue-800 underline">Valkyrae profile</a>.
        </p>
      </CreatorSection>

      <SourcesInterlink
        accentColor="blue"
        internalLinks={[
          { href: '/influencer', label: 'Influencer Hub', description: 'All creator profiles on OzoneNews' },
          { href: '/influencer/valkyrae', label: 'Valkyrae Profile', description: 'YouTube-exclusive gaming creator, 100 Thieves co-owner' },
          { href: '/influencer/sssniperwolf', label: 'SSSniperWolf Profile', description: '34M YouTube subscribers, reaction content' },
          { href: '/influencer/emma-chamberlain', label: 'Emma Chamberlain Profile', description: 'YouTube creator, Chamberlain Coffee founder' },
        ]}
      />

    </CreatorArticle>
  );
}
