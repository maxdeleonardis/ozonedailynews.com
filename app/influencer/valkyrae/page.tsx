import type { Metadata } from 'next';
import CreatorArticle, {
  CreatorSection,
  CreatorStat,
  CreatorTable,
  CreatorCalloutBox,
  CreatorQuote,
  CreatorImageGallery,
} from '@/components/articles/CreatorArticle';

// Inline creator article — content lives in the codebase, no Supabase sync.
// Images: placeholder paths — replace with real assets before deploying to production.

export const dynamic = 'force-dynamic';

const SLUG = '/influencer/valkyrae';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/valkyrae-profile.jpg';

export const metadata: Metadata = {
  title: 'Valkyrae | Age, 100 Thieves, YouTube Gaming, Bio 2026',
  description:
    'Valkyrae (Rachel Hofstetter) is a 32-year-old Las Vegas creator and co-owner of 100 Thieves. Full biography: YouTube Gaming, RLYRAE brand, net worth, and social media 2026.',
  keywords: [
    'Valkyrae',
    'Valkyrae age',
    'Valkyrae age 2026',
    'Valkyrae real name',
    'Rachel Hofstetter',
    'Valkyrae YouTube',
    'Valkyrae 100 Thieves',
    'Valkyrae net worth',
    'Valkyrae Instagram',
    'Valkyrae TikTok',
    'Valkyrae RLYRAE',
    'Valkyrae boyfriend',
    'Valkyrae biography 2026',
    '100 Thieves co-owner',
    'female gaming creator',
    'YouTube Gaming influencer',
    'Valkyrae streamer',
    'Valkyrae 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Valkyrae | Age, 100 Thieves & YouTube Gaming Bio 2026',
    description:
      'Full profile of Valkyrae (Rachel Hofstetter), 32, co-owner of 100 Thieves esports org and top YouTube Gaming creator. Career, RLYRAE brand, net worth, social handles.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    tags: ['Valkyrae', 'Influencer', '100 Thieves', 'YouTube Gaming', 'Las Vegas'],
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Valkyrae, 100 Thieves co-owner and YouTube Gaming creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valkyrae | Co-Owner of 100 Thieves, 3.7M YouTube Subs',
    description: 'Valkyrae profile: age, real name, YouTube Gaming career, RLYRAE brand, 100 Thieves co-ownership, and 2026 net worth.',
    images: [`https://www.objectwire.org${IMAGE_URL}`],
  },
};

export default function ValkyraePage() {
  return (
    <CreatorArticle
      schema={{
        title: 'Valkyrae | 100 Thieves Co-Owner, YouTube Gaming Creator & RLYRAE Founder Profile',
        description:
          'Valkyrae (Rachel Hofstetter), 32, is a Las Vegas-based YouTube Gaming creator, co-owner of 100 Thieves esports organization, and founder of the RLYRAE beauty brand. Full biography, net worth, and social media 2026.',
        publishedTime: '2026-04-29T12:00:00Z',
        modifiedTime: '2026-04-29T12:00:00Z',
        author: 'ObjectWire Influencer Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.objectwire.org${IMAGE_URL}`,
        section: 'Influencer',
        keywords: [
          'Valkyrae', 'Rachel Hofstetter', 'Valkyrae age 2026', 'Valkyrae YouTube',
          '100 Thieves co-owner', 'RLYRAE', 'Valkyrae net worth', 'Valkyrae biography',
          'female gaming creator', 'YouTube Gaming', 'Valkyrae 2026',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.objectwire.org' },
        { name: 'Influencer', item: 'https://www.objectwire.org/influencer' },
        { name: 'Valkyrae', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Valkyrae gaming creator and 100 Thieves co-owner' },
        gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        badges: [
          { label: 'Las Vegas', style: 'default' },
          { label: '100 Thieves', style: 'achievement' },
          { label: 'YouTube Gaming', style: 'default' },
        ],
        name: 'Valkyrae',
        subtitle: 'YouTube Gaming Creator, 100 Thieves Co-Owner, RLYRAE Founder',
        description:
          'Valkyrae (Rachel Hofstetter) is one of the biggest names in gaming content creation. Born in 1994, the Las Vegas-based creator holds co-ownership in 100 Thieves and built RLYRAE, her own beauty brand. She was the most-watched female gaming creator on YouTube in 2020.',
        ctaButtons: [
          { href: 'https://www.youtube.com/@valkyrae', label: 'YouTube', icon: '▶', variant: 'secondary' },
          { href: 'https://www.tiktok.com/@valkyrae', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/valkyrae', label: 'Instagram', icon: '📷', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Valkyrae profile photo' },
          name: 'Valkyrae',
          subtitle: 'YouTube Gaming Creator',
          rows: [
            { label: 'Real Name', value: 'Rachel Hofstetter' },
            { label: 'Born', value: 'January 8, 1994' },
            { label: 'Age (2026)', value: '32' },
            { label: 'Nationality', value: 'American' },
            { label: 'Based In', value: 'Los Angeles, CA' },
            { label: 'Occupation', value: 'Creator, Co-Owner, Entrepreneur' },
            {
              label: 'YouTube',
              value: '@valkyrae',
              href: 'https://www.youtube.com/@valkyrae',
            },
            {
              label: 'Instagram',
              value: '@valkyrae',
              href: 'https://www.instagram.com/valkyrae',
            },
            {
              label: 'TikTok',
              value: '@valkyrae',
              href: 'https://www.tiktok.com/@valkyrae',
            },
            { label: 'Twitch', value: '@valkyrae (inactive)' },
            { label: 'YouTube Subs', value: '3.7M' },
            { label: 'Instagram', value: '2.1M followers' },
            { label: 'Brand', value: 'RLYRAE (beauty)' },
            { label: 'Org', value: '100 Thieves (co-owner)' },
          ],
        },
        timeline: [
          { year: '2014', event: 'Started streaming on Twitch playing Call of Duty' },
          { year: '2018', event: 'Joined YouTube Gaming full-time' },
          { year: '2020', event: 'Signed exclusive deal with YouTube Gaming; most-watched female gaming creator' },
          { year: '2021', event: 'Named co-owner of 100 Thieves esports organization' },
          { year: '2022', event: 'Launched RLYRAE beauty brand' },
          { year: '2023', event: 'Expanded content to Valorant and variety gaming' },
          { year: '2026', event: 'Active on YouTube, TikTok, and Instagram; 100 Thieves continues to grow' },
        ],
        relatedLinks: [
          { href: '/influencer', label: 'Influencer Hub' },
          { href: '/influencer/pokimane', label: 'Pokimane Profile' },
          { href: '/video-games', label: 'Gaming News' },
        ],
        meta: {
          publishedDate: 'April 29, 2026',
          updatedDate: 'April 29, 2026',
          author: 'ObjectWire Influencer Desk',
          category: 'Influencer',
        },
      }}
      tags={['Valkyrae', 'Rachel Hofstetter', '100 Thieves', 'YouTube Gaming', 'RLYRAE', 'Las Vegas', 'Gaming Creator']}
    >

      <CreatorSection heading="Who Is Valkyrae">
        <p>
          Valkyrae, born Rachel Hofstetter on January 8, 1994, is an American gaming content creator, co-owner of esports organization{' '}
          <a href="/video-games" className="text-blue-600 hover:text-blue-800 underline">100 Thieves</a>, and founder of beauty brand RLYRAE.
          Based in Los Angeles, she is widely regarded as one of the most influential female creators in gaming history.
        </p>
        <p>
          She rose to prominence on Twitch before signing an exclusive deal with YouTube Gaming in 2020, a move that made her the platform's top female gaming creator that year.
          In 2021, 100 Thieves co-founder Matthew Nadeshot named her a co-owner of the organization, making her one of the first women to hold an ownership stake in a major esports team.
        </p>
      </CreatorSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="3.7M" label="YouTube Subscribers" color="purple" />
        <CreatorStat value="2.1M" label="Instagram Followers" color="blue" />
        <CreatorStat value="32" label="Age in 2026" color="green" />
      </div>

      <CreatorSection heading="Valkyrae YouTube | 3.7M Subscribers and YouTube Gaming Contract">
        <p>
          Valkyrae's YouTube channel launched in 2014 primarily as a Call of Duty gaming channel. After growing her audience on Twitch through 2019, she made a pivotal decision in January 2020 to sign an exclusive deal with YouTube Gaming, stepping away from Twitch entirely.
        </p>
        <p>
          The bet paid off. By the end of 2020, Valkyrae had become the most-watched female gaming creator on YouTube, surpassing previous records with hundreds of millions of views. Her content spans variety gaming (Valorant, Among Us, Minecraft), vlogs, and collaborative streams with fellow creators.
        </p>
        <p>
          Her channel currently holds 3.7 million subscribers. While streaming hours have become less frequent since 2023, her VOD library and TikTok presence continue to drive significant traffic to her YouTube catalog.
        </p>
      </CreatorSection>

      <CreatorSection heading="Valkyrae 100 Thieves | Co-Owner of an Esports Organization">
        <p>
          In January 2021, Valkyrae was named a co-owner of 100 Thieves, the Los Angeles-based esports organization founded by former Call of Duty professional and content creator Nadeshot (Matthew Haag). She joins Nadeshot, Drake, and Scooter Braun as co-owners.
        </p>
        <p>
          The announcement made Valkyrae one of the only female co-owners in professional esports. 100 Thieves competes in Valorant, League of Legends, and other titles, and operates a full content house and lifestyle brand alongside its competitive teams.
        </p>
        <p>
          Her role at 100 Thieves extends beyond brand ambassador. She participates in organizational decisions, is featured in 100 Thieves merchandise campaigns, and represents the org at major gaming events. The organization has been valued at over $460 million.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="100 Thieves Key Facts"
        color="purple"
        items={[
          { label: 'Founded', detail: '2017 by Matthew "Nadeshot" Haag' },
          { label: 'Co-Owners', detail: 'Nadeshot, Valkyrae, Drake, Scooter Braun' },
          { label: 'Valuation', detail: '$460M+ (2021 funding round)' },
          { label: 'Games', detail: 'Valorant, League of Legends, PUBG Mobile' },
          { label: 'HQ', detail: 'Los Angeles, California' },
        ]}
      />

      <CreatorSection heading="Valkyrae RLYRAE | Beauty Brand and Business Expansion">
        <p>
          In 2022, Valkyrae launched RLYRAE, a beauty brand targeted at the gaming and content creator audience. The brand represents a significant expansion of her business portfolio beyond content creation and esports.
        </p>
        <p>
          RLYRAE focuses on makeup products designed for creators who spend long hours on camera and in front of screens. The launch was well-received by her community and generated substantial coverage in both beauty and gaming media.
          The brand operates independently and is not affiliated with 100 Thieves.
        </p>
      </CreatorSection>

      <CreatorSection heading="Valkyrae Content | Variety Gaming, Valorant, and Among Us Era">
        <p>
          While Valkyrae built her initial audience through Call of Duty, her content has always been variety-first. She was one of the central figures in the massive 2020 Among Us streaming wave, regularly streaming with a rotating group that included Sykkuno, Corpse Husband, Disguised Toast, and other top creators.
        </p>
        <p>
          Since 2022, her primary gaming focus has shifted to Valorant, where she plays casually rather than competitively. She regularly participates in community Valorant tournaments and collaborative streams with the broader creator ecosystem.
        </p>
      </CreatorSection>

      <CreatorQuote
        quote="I never really planned to become a co-owner of an esports organization. I just wanted to make content and have fun. But when opportunities come that align with what you love, you say yes."
        attribution="Valkyrae"
        role="100 Thieves Co-Owner, YouTube Creator"
      />

      <CreatorSection heading="Valkyrae Net Worth | YouTube, 100 Thieves, and RLYRAE Revenue">
        <p>
          Valkyrae's net worth in 2026 is estimated between $2 million and $4 million, based on YouTube ad revenue, brand partnerships, 100 Thieves equity, and RLYRAE sales. Exact figures have not been publicly disclosed.
        </p>
        <p>
          Her income streams include: YouTube ad revenue from her 3.7M subscriber channel, brand sponsorships (gaming peripherals, lifestyle brands), equity value from 100 Thieves co-ownership, and RLYRAE product sales. The YouTube exclusive deal signed in 2020 was reported to be worth several million dollars over its term.
        </p>
      </CreatorSection>

      <CreatorTable
        columns={[
          { key: 'platform', header: 'Platform' },
          { key: 'handle', header: 'Handle' },
          { key: 'followers', header: 'Followers' },
          { key: 'focus', header: 'Focus' },
        ]}
        rows={[
          { platform: 'YouTube', handle: '@valkyrae', followers: '3.7M', focus: 'Gaming streams, vlogs' },
          { platform: 'Instagram', handle: '@valkyrae', followers: '2.1M', focus: 'Lifestyle, brand content' },
          { platform: 'TikTok', handle: '@valkyrae', followers: '1.8M', focus: 'Clips, highlights' },
          { platform: 'Twitter/X', handle: '@valkyrae', followers: '1.1M', focus: 'Gaming commentary' },
          { platform: 'Twitch', handle: '@valkyrae', followers: '3.9M', focus: 'Inactive (YouTube exclusive)' },
        ]}
        highlightKey="platform"
        highlightValue="YouTube"
      />

      <CreatorSection heading="Valkyrae Social Media | Official Accounts 2026">
        <p>Valkyrae's official verified accounts:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.youtube.com/@valkyrae" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @valkyrae (3.7M subscribers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/valkyrae" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @valkyrae (2.1M followers)
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@valkyrae" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TikTok: @valkyrae (1.8M followers)
            </a>
          </li>
          <li>
            <a href="https://twitter.com/valkyrae" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Twitter/X: @valkyrae (1.1M followers)
            </a>
          </li>
        </ul>
      </CreatorSection>

      <CreatorSection heading="Valkyrae 2026 | Creator Profile Summary">
        <p>
          In 2026, Valkyrae remains one of the most prominent female voices in gaming content. While the ultra-high streaming frequency of 2020 has settled into a more sustainable schedule, her influence through 100 Thieves, RLYRAE, and her YouTube catalog continues to grow.
        </p>
        <p>
          Her dual identity as both a content creator and an esports executive is rare in the industry, giving her credibility across entertainment, business, and gaming media. For related profiles, see the{' '}
          <a href="/influencer" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Influencer Hub</a> and the{' '}
          <a href="/influencer/pokimane" className="text-blue-600 hover:text-blue-800 underline">Pokimane profile</a>.
        </p>
      </CreatorSection>

    </CreatorArticle>
  );
}
