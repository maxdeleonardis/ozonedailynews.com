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

const SLUG = '/influencer/sssniperwolf';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/sssniperwolf-profile.jpg';

export const metadata: Metadata = {
  title: 'SSSniperWolf | Age, YouTube, Net Worth, Bio 2026',
  description:
    'SSSniperWolf (Alia Shelesh), 32, is a British-American YouTube creator with 34M subscribers known for gaming reactions. Full biography: net worth, controversy, Little Lia channel, and social media 2026.',
  keywords: [
    'SSSniperWolf',
    'SSSniperWolf age',
    'SSSniperWolf age 2026',
    'SSSniperWolf real name',
    'Alia Shelesh',
    'SSSniperWolf YouTube',
    'SSSniperWolf net worth',
    'SSSniperWolf Instagram',
    'SSSniperWolf TikTok',
    'SSSniperWolf biography 2026',
    'SSSniperWolf boyfriend',
    'SSSniperWolf JacksFilms controversy',
    'SSSniperWolf Little Lia',
    'SSSniperWolf 2026',
    'female YouTube gaming creator',
    'reaction YouTube channel',
    'SSSniperWolf 34 million subscribers',
    'SSSniperWolf dox controversy',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'SSSniperWolf | Age, 34M YouTube, Net Worth & Bio 2026',
    description:
      'Full profile of SSSniperWolf (Alia Shelesh), 32, YouTube creator with 34M subscribers. Gaming reactions, Little Lia channel, JacksFilms controversy, net worth 2026.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    tags: ['SSSniperWolf', 'Influencer', 'YouTube', 'Gaming', 'Reactions'],
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'SSSniperWolf, YouTube gaming creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSSniperWolf | 34M YouTube Subscribers, Gaming Reactions',
    description: 'SSSniperWolf profile: real name Alia Shelesh, age 32, YouTube gaming reactions, Little Lia channel, JacksFilms controversy, and net worth 2026.',
    images: [`https://www.objectwire.org${IMAGE_URL}`],
  },
};

export default function SSSniperWolfPage() {
  return (
    <CreatorArticle
      schema={{
        title: 'SSSniperWolf | Alia Shelesh, YouTube Gaming Creator, 34M Subscribers Biography 2026',
        description:
          'SSSniperWolf (Alia Shelesh), 32, is a British-American YouTube creator with 34 million subscribers known for gaming reactions and challenge videos. Full biography: net worth, JacksFilms controversy, Little Lia channel, and 2026 career.',
        publishedTime: '2026-04-29T12:00:00Z',
        modifiedTime: '2026-04-29T12:00:00Z',
        author: 'ObjectWire Influencer Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.objectwire.org${IMAGE_URL}`,
        section: 'Influencer',
        keywords: [
          'SSSniperWolf', 'Alia Shelesh', 'SSSniperWolf age 2026', 'SSSniperWolf YouTube',
          'SSSniperWolf net worth', 'SSSniperWolf biography', 'gaming reaction creator',
          'Little Lia YouTube', 'SSSniperWolf 2026',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.objectwire.org' },
        { name: 'Influencer', item: 'https://www.objectwire.org/influencer' },
        { name: 'SSSniperWolf', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'SSSniperWolf YouTube gaming creator' },
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #0a2a2a 100%)',
        badges: [
          { label: 'England / Arizona', style: 'default' },
          { label: '34M YouTube', style: 'achievement' },
          { label: 'Gaming Reactions', style: 'default' },
        ],
        name: 'SSSniperWolf',
        subtitle: 'YouTube Creator, Gaming Reactions, Little Lia Channel',
        description:
          'SSSniperWolf (Alia Shelesh) built one of YouTube\'s largest female-led channels through gaming content and reaction videos. With 34 million subscribers on her main channel and a second channel under her real name, she remains one of the platform\'s most-watched creators in 2026.',
        ctaButtons: [
          { href: 'https://www.youtube.com/@SSSniperWolf', label: 'YouTube', icon: '▶', variant: 'secondary' },
          { href: 'https://www.tiktok.com/@sssniperwolf', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/sssniperwolf', label: 'Instagram', icon: '📷', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'SSSniperWolf profile photo' },
          name: 'SSSniperWolf',
          subtitle: 'YouTube Creator',
          rows: [
            { label: 'Real Name', value: 'Alia Shelesh' },
            { label: 'Born', value: 'October 22, 1992' },
            { label: 'Age (2026)', value: '33' },
            { label: 'Nationality', value: 'British-American' },
            { label: 'From', value: 'England, raised in Arizona' },
            { label: 'Based In', value: 'Las Vegas, NV' },
            { label: 'Occupation', value: 'YouTube Creator' },
            {
              label: 'YouTube (main)',
              value: '@SSSniperWolf',
              href: 'https://www.youtube.com/@SSSniperWolf',
            },
            {
              label: 'YouTube (second)',
              value: '@LittleLia',
              href: 'https://www.youtube.com/@LittleLia',
            },
            {
              label: 'Instagram',
              value: '@sssniperwolf',
              href: 'https://www.instagram.com/sssniperwolf',
            },
            {
              label: 'TikTok',
              value: '@sssniperwolf',
              href: 'https://www.tiktok.com/@sssniperwolf',
            },
            { label: 'YouTube Subs', value: '34M (main), 9M (Little Lia)' },
            { label: 'Instagram', value: '5.7M followers' },
            { label: 'TikTok', value: '19M followers' },
          ],
        },
        timeline: [
          { year: '2013', event: 'Launched SSSniperWolf YouTube channel; initial Call of Duty gaming content' },
          { year: '2015', event: 'Reached 3M subscribers; expanded into gaming challenges and reaction videos' },
          { year: '2018', event: 'Passed 15M subscribers; among top 20 most-subscribed YouTube channels' },
          { year: '2020', event: 'Launched Little Lia (second channel under real name Alia)' },
          { year: '2023', event: 'YouTube suspension following doxing controversy with JacksFilms; channel reinstated' },
          { year: '2024', event: 'Returned to regular uploads; 34M subscribers milestone reached' },
          { year: '2026', event: 'Active on YouTube, TikTok, and Instagram; Little Lia channel at 9M subscribers' },
        ],
        relatedLinks: [
          { href: '/influencer', label: 'Influencer Hub' },
          { href: '/influencer/valkyrae', label: 'Valkyrae Profile' },
          { href: '/video-games', label: 'Gaming News' },
        ],
        meta: {
          publishedDate: 'April 29, 2026',
          updatedDate: 'April 29, 2026',
          author: 'ObjectWire Influencer Desk',
          category: 'Influencer',
        },
      }}
      tags={['SSSniperWolf', 'Alia Shelesh', 'YouTube', 'Gaming', 'Reactions', 'Influencer', 'Las Vegas']}
    >

      <CreatorSection heading="Who Is SSSniperWolf">
        <p>
          SSSniperWolf, whose real name is Alia Shelesh, is a British-American YouTube creator born on October 22, 1992, in England, and raised in Arizona. She is one of YouTube's longest-tenured female creators, with over a decade of active content and 34 million subscribers on her primary channel.
        </p>
        <p>
          In 2026, Alia is 33 years old and based in Las Vegas. Her content spans{' '}
          <a href="/video-games" className="text-blue-600 hover:text-blue-800 underline">gaming</a> reactions, challenge videos, and short-form content across TikTok. She also runs a second YouTube channel called Little Lia, which has reached 9 million subscribers.
        </p>
      </CreatorSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="34M" label="YouTube Subscribers (Main)" color="green" />
        <CreatorStat value="19M" label="TikTok Followers" color="blue" />
        <CreatorStat value="9M" label="Little Lia Subscribers" color="purple" />
      </div>

      <CreatorSection heading="SSSniperWolf YouTube | 10 Years of Gaming Content and Reactions">
        <p>
          SSSniperWolf launched her YouTube channel in 2013, initially posting Call of Duty gameplay videos. She built an early audience through competitive gaming content, particularly sniper-focused gameplay, which inspired the "SSSniperWolf" username.
        </p>
        <p>
          Over time, the channel evolved away from pure gameplay into reaction content, viral video commentary, and challenge videos. This pivot proved highly effective, accelerating subscriber growth significantly. By 2018 she had passed 15 million subscribers and was among YouTube's most-subscribed channels globally.
        </p>
        <p>
          Her content format in 2026 focuses heavily on reaction videos to viral TikTok content, Reddit posts, and trending challenges. The format drives consistent views with relatively low production cost, contributing to her longevity on the platform.
        </p>
      </CreatorSection>

      <CreatorSection heading="Little Lia | Second YouTube Channel Under Real Name">
        <p>
          In 2020, SSSniperWolf launched a second YouTube channel called Little Lia, using her real first name "Alia" (stylized as Lia) as the channel identity. Little Lia targets a younger demographic with content focused on cosplay, DIY, and family-friendly challenges.
        </p>
        <p>
          The channel has grown to 9 million subscribers as of 2026, making it one of the largest YouTube secondary channels launched by a creator from their existing audience. The Little Lia brand has its own merchandise line separate from the SSSniperWolf brand.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="SSSniperWolf and JacksFilms | 2023 Controversy"
        color="red"
        items={[
          { label: 'Background', detail: 'YouTuber JacksFilms made a series of videos criticizing SSSniperWolf\'s reaction content as low-effort theft of small creators\' work' },
          { label: 'Incident', detail: 'SSSniperWolf posted a photo of JacksFilms\' home address and home to her Instagram story, constituting doxing' },
          { label: 'YouTube Response', detail: 'YouTube suspended the SSSniperWolf channel temporarily; the channel was reinstated after review' },
          { label: 'Outcome', detail: 'The incident generated widespread media coverage and creator community debate about doxing, platform accountability, and reaction content ethics' },
          { label: '2026 Status', detail: 'Channel fully reinstated; SSSniperWolf has not publicly addressed the incident in depth since reinstatement' },
        ]}
      />

      <CreatorSection heading="SSSniperWolf TikTok | 19M Followers and Short-Form Expansion">
        <p>
          SSSniperWolf's TikTok account @sssniperwolf holds 19 million followers, making it one of the larger creator accounts in the gaming-adjacent TikTok space. Her TikTok content repurposes reaction clips from her YouTube videos and posts standalone short-form content.
        </p>
        <p>
          The TikTok audience skews younger than her YouTube demographic, and the platform has introduced her content to a new generation of viewers. TikTok follower counts for her account have grown steadily since 2020.
        </p>
      </CreatorSection>

      <CreatorQuote
        quote="I've been doing this for over ten years. The internet changes constantly, but the idea of making content people enjoy never really changes."
        attribution="SSSniperWolf"
        role="YouTube Creator"
      />

      <CreatorSection heading="SSSniperWolf Net Worth | Estimating 10-Plus Years of YouTube Revenue">
        <p>
          SSSniperWolf's net worth in 2026 is estimated between $6 million and $10 million. Her income sources span YouTube ad revenue from two active channels, brand sponsorships across gaming peripherals and consumer products, TikTok creator fund revenue, merchandise sales for both the SSSniperWolf and Little Lia brands, and real estate investments.
        </p>
        <p>
          Her main channel generates an estimated $2 million to $5 million annually in YouTube ad revenue alone based on public analytics estimates, with Little Lia adding additional revenue. She has been one of the more financially successful long-term female YouTubers.
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
          { platform: 'YouTube (main)', handle: '@SSSniperWolf', followers: '34M', focus: 'Reactions, gaming, challenges' },
          { platform: 'YouTube (Little Lia)', handle: '@LittleLia', followers: '9M', focus: 'Cosplay, DIY, family-friendly' },
          { platform: 'TikTok', handle: '@sssniperwolf', followers: '19M', focus: 'Reaction clips, viral content' },
          { platform: 'Instagram', handle: '@sssniperwolf', followers: '5.7M', focus: 'Lifestyle, brand content' },
          { platform: 'Twitter/X', handle: '@sssniperwolf', followers: '1.1M', focus: 'Fan interaction' },
        ]}
        highlightKey="platform"
        highlightValue="YouTube (main)"
      />

      <CreatorSection heading="SSSniperWolf Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.youtube.com/@SSSniperWolf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @SSSniperWolf (34M subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@LittleLia" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube Little Lia: @LittleLia (9M subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@sssniperwolf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TikTok: @sssniperwolf (19M followers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sssniperwolf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @sssniperwolf (5.7M followers)
            </a>
          </li>
        </ul>
      </CreatorSection>

      <CreatorSection heading="SSSniperWolf 2026 | Creator Profile Summary">
        <p>
          SSSniperWolf in 2026 represents one of the longest continuously active female creator careers on YouTube. Her ability to adapt content from competitive gaming to reaction videos to short-form TikTok clips across more than a decade has kept her audience growing when many contemporaries have faded.
        </p>
        <p>
          For more gaming and creator coverage, see the{' '}
          <a href="/influencer" className="text-blue-600 hover:text-blue-800 underline">Influencer Hub</a>, the{' '}
          <a href="/influencer/valkyrae" className="text-blue-600 hover:text-blue-800 underline">Valkyrae profile</a>, and{' '}
          <a href="/video-games" className="text-blue-600 hover:text-blue-800 underline">gaming news</a>.
        </p>
      </CreatorSection>

    </CreatorArticle>
  );
}
