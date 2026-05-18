import type { Metadata } from 'next';
import CreatorArticle, {
  CreatorSection,
  CreatorStat,
  CreatorTable,
  CreatorCalloutBox,
  CreatorQuote,
} from '@/components/articles/CreatorArticle';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/creator/ed-matthews';
const PAGE_URL = `https://www.owire.org${SLUG}`;
const IMAGE_URL = '/influncer/ed-matthews.jpg';

export const metadata: Metadata = {
  title: 'Ed Matthews | TikTok, Boxing, Instagram, Bio 2026',
  description:
    'Ed Matthews is a British creator and influencer boxer with 1M+ TikTok followers. Full biography: boxing record, Elsa Rae relationship, net worth, and social media 2026.',
  keywords: [
    'Ed Matthews',
    'Ed Matthews TikTok',
    'Ed Matthews boxing',
    'Ed Matthews age',
    'Ed Matthews age 2026',
    'Ed Matthews Instagram',
    'Ed Matthews YouTube',
    'Ed Matthews net worth',
    'Ed Matthews biography',
    'Ed Matthews Elsa Rae',
    'edmatthewstokky',
    'Ed Matthews KingPyn',
    'Ed Matthews Simple Simon',
    'Ed Matthews Blueface',
    'Ed Matthews HED Fitness',
    'Ed Matthews UK creator',
    'influencer boxer UK',
    'Ed Matthews 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Ed Matthews | TikTok, Influencer Boxing & Bio 2026',
    description:
      'Full profile of Ed Matthews, British creator and influencer boxer. TikTok @edmatthewstokky, boxing record, Elsa Rae relationship, net worth $800K-$1.7M.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    tags: ['Ed Matthews', 'TikTok', 'Boxing', 'UK Creator', 'Influencer', 'British'],
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Ed Matthews, British creator and influencer boxer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ed Matthews | British Creator, Influencer Boxer, Bio 2026',
    description:
      'Ed Matthews profile: TikTok @edmatthewstokky, influencer boxing record, Elsa Rae, HED Fitness, net worth, and 2026 creator career.',
    images: [`https://www.owire.org${IMAGE_URL}`],
  },
};

export default function EdMatthewsPage() {
  return (
    <CreatorArticle
      schema={{
        title: 'Ed Matthews | British Creator, Influencer Boxer, TikTok Biography 2026',
        description:
          'Ed Matthews is a British social media influencer and influencer boxer, born around 2002-2004, known for TikTok @edmatthewstokky, KingPyn and MF & DAZN X Series boxing events, and a fitness background through HED Fitness LTD.',
        publishedTime: '2026-05-04T12:00:00Z',
        modifiedTime: '2026-05-04T12:00:00Z',
        author: 'OzoneNews Creator Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.owire.org${IMAGE_URL}`,
        section: 'Creator',
        keywords: [
          'Ed Matthews',
          'Ed Matthews TikTok',
          'edmatthewstokky',
          'Ed Matthews boxing',
          'Ed Matthews age 2026',
          'Ed Matthews net worth',
          'Ed Matthews biography',
          'influencer boxer UK',
          'KingPyn Boxing',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.owire.org' },
        { name: 'Creator', item: 'https://www.owire.org/creator' },
        { name: 'Ed Matthews', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Ed Matthews, British creator and influencer boxer' },
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 45%, #e63946 100%)',
        badges: [
          { label: 'United Kingdom', style: 'default' },
          { label: 'Influencer Boxer', style: 'achievement' },
          { label: 'TikTok Creator', style: 'default' },
        ],
        name: 'Ed Matthews',
        subtitle: 'British Creator, Influencer Boxer, Fitness Instructor',
        description:
          'Ed Matthews is a British content creator who rose through TikTok and YouTube before entering the influencer boxing scene via KingPyn and MF & DAZN X Series events. Known for his bold personality, boxing rivalries with Simple Simon and Blueface, and a documented three-year fitness transformation.',
        ctaButtons: [
          { href: 'https://www.tiktok.com/@edmatthewstokky', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/edmatthews', label: 'Instagram', icon: '📷', variant: 'secondary' },
          { href: 'https://www.youtube.com/@edmatthews', label: 'YouTube', icon: '▶', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Ed Matthews profile photo' },
          name: 'Ed Matthews',
          subtitle: 'Creator, Influencer Boxer',
          rows: [
            { label: 'Nationality', value: 'British' },
            { label: 'Born', value: 'c. 2002-2004' },
            { label: 'Age (2026)', value: 'Approx. 22-24' },
            { label: 'Based In', value: 'England, UK' },
            { label: 'Occupation', value: 'Content Creator, Influencer Boxer, Fitness Instructor' },
            { label: 'Company', value: 'HED Fitness LTD (co-founder)' },
            {
              label: 'TikTok',
              value: '@edmatthewstokky',
              href: 'https://www.tiktok.com/@edmatthewstokky',
            },
            {
              label: 'Instagram',
              value: '@edmatthews',
              href: 'https://www.instagram.com/edmatthews',
            },
            {
              label: 'YouTube',
              value: '@edmatthews',
              href: 'https://www.youtube.com/@edmatthews',
            },
            { label: 'Boxing Org', value: 'KingPyn Boxing, MF & DAZN X Series' },
            { label: 'Net Worth', value: '$800K-$1.7M (est. 2026)' },
            { label: 'Partner', value: 'Elsa Rae (TikTok star)' },
          ],
        },
        timeline: [
          { year: '2019-2020', event: 'Co-founded HED Fitness LTD; began building TikTok and Instagram presence during teenage years' },
          { year: '2021', event: 'Gained viral traction on TikTok through lifestyle, comedy, and challenge content; collaborations with Hstikkytokky' },
          { year: '2022', event: 'Entered influencer boxing; defeated Simple Simon via first-round knockout in July 2022' },
          { year: '2023', event: 'Fought Blueface (TKO loss, April 2023); defeated Swarmz (October 2023); online rivalry with Astrid Wett and Cal The Dragon' },
          { year: '2024', event: 'Lost to Luis Alcaraz Pineda in January 2024; continued content creation across TikTok and YouTube' },
          { year: '2026', event: 'Active creator with 1M+ TikTok followers; net worth estimated at $800K-$1.7M' },
        ],
        relatedLinks: [
          { href: '/creator', label: 'Creator Hub' },
          { href: '/creator/charli-damelio', label: 'Charli D\'Amelio Profile' },
          { href: '/creator/sssniperwolf', label: 'SSSniperwolf Profile' },
        ],
        meta: {
          publishedDate: 'May 4, 2026',
          updatedDate: 'May 4, 2026',
          author: 'OzoneNews Creator Desk',
          category: 'Creator',
        },
      }}
      tags={['Ed Matthews', 'TikTok', 'Boxing', 'UK Creator', 'KingPyn', 'Influencer Boxer']}
    >

      <CreatorSection heading="Who Is Ed Matthews">
        <p>
          Ed Matthews is a British social media influencer, content creator, and influencer boxer born in the United Kingdom around 2002-2004, making him approximately 22-24 years old in 2026. He grew up in England, developed an early interest in sports and fitness, and began building his social media presence on TikTok and Instagram during his teenage years.
        </p>
        <p>
          Before gaining widespread recognition online, Matthews co-founded HED Fitness LTD, a fitness company that reflected his early interest in health and physical training. His transition from fitness entrepreneur to viral content creator to competitive influencer boxer traces a career arc that has made him one of the more recognizable British creators in the digital entertainment space.
        </p>
      </CreatorSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="1M+" label="TikTok Followers" color="purple" />
        <CreatorStat value="4" label="Boxing Matches" color="red" />
        <CreatorStat value="$1.7M" label="Est. Net Worth" color="green" />
      </div>

      <CreatorSection heading="Ed Matthews TikTok | @edmatthewstokky and Early Career">
        <p>
          Matthews built his initial following on{' '}
          <a href="https://www.tiktok.com/@edmatthewstokky" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">TikTok at @edmatthewstokky</a> through lifestyle content, comedy skits, challenge videos, and commentary. His direct communication style and bold persona drove consistent engagement and distinguished him from creators playing safer, more sanitized content strategies.
        </p>
        <p>
          Key early collaborations with Hstikkytokky helped expand his reach into overlapping UK creator audiences. His Instagram handle{' '}
          <a href="https://www.instagram.com/edmatthews" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@edmatthews</a> and{' '}
          <a href="https://www.youtube.com/@edmatthews" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">YouTube channel</a> extended his audience beyond TikTok, allowing longer-form content and deeper engagement with his fanbase.
        </p>
        <p>
          He also documented a three-year fitness transformation publicly on social media, which reinforced his credibility in both the fitness and boxing spaces and provided a narrative through-line for his audience.
        </p>
      </CreatorSection>

      <CreatorSection heading="Ed Matthews Boxing Record | KingPyn and MF & DAZN X Series">
        <p>
          Matthews entered the influencer boxing scene through MF & DAZN X Series and{' '}
          <a href="https://www.youtube.com/@edmatthews" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">KingPyn Boxing</a> events, organizations that have brought together social media creators for professional-grade boxing productions. His willingness to compete in a physically demanding arena against both fellow creators and more established fighters elevated his public profile beyond typical creator metrics.
        </p>
        <p>
          His most notable win came in July 2022, when he defeated online rival Simple Simon via first-round knockout, a result that generated significant attention across the UK creator community. He followed that up with a win over Swarmz in October 2023.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="Ed Matthews Boxing Record | 2022-2024"
        color="red"
        items={[
          { label: 'July 2022', detail: 'WIN vs. Simple Simon, first-round knockout, MF & DAZN X Series' },
          { label: 'April 2023', detail: 'LOSS vs. Blueface, technical knockout, KingPyn Boxing' },
          { label: 'October 2023', detail: 'WIN vs. Swarmz, KingPyn Boxing' },
          { label: 'January 2024', detail: 'LOSS vs. Luis Alcaraz Pineda, KingPyn Boxing' },
        ]}
      />

      <CreatorSection heading="Ed Matthews Rivals | Simple Simon, Blueface, Astrid Wett, Cal The Dragon">
        <p>
          A significant part of Ed Matthews' public brand is built around online rivalries and pre-fight callouts with fellow influencers. His feud with Simple Simon predated their July 2022 fight and generated substantial pre-event content, making the first-round knockout a satisfying narrative payoff for his audience.
        </p>
        <p>
          His April 2023 bout against American rapper and social media figure Blueface ended in a technical knockout loss, exposing him to a wider international audience even in defeat. Online rivalries with Astrid Wett and Cal The Dragon further cemented his position as one of the most vocal and combative personalities in UK influencer boxing, generating engagement through confrontational social media exchanges.
        </p>
      </CreatorSection>

      <CreatorQuote
        quote="Boxing is the ultimate test. You can talk on TikTok all day, but stepping in that ring separates the ones who actually back it up."
        attribution="Ed Matthews"
        role="Creator, Influencer Boxer"
      />

      <CreatorSection heading="Ed Matthews Fitness | HED Fitness LTD and Three-Year Transformation">
        <p>
          Before his boxing career, Matthews co-founded HED Fitness LTD, a fitness company that served as his first significant business venture outside of social media. His fitness background provided the physical foundation for his later boxing participation and differentiated his content from purely lifestyle-focused creators.
        </p>
        <p>
          He publicly documented a three-year physical transformation online, a format that resonated with his fitness-minded audience and added a long-running narrative arc to his social media channels. The documented transformation also served as organic credibility for any fitness-related brand partnerships.
        </p>
      </CreatorSection>

      <CreatorSection heading="Ed Matthews Net Worth | Estimated $800K to $1.7M in 2026">
        <p>
          As of 2026, Ed Matthews' net worth is estimated between $800,000 and $1.7 million, according to multiple creator wealth tracking sources. His income combines social media monetization from TikTok, Instagram, and YouTube, alongside brand sponsorships, event appearance fees from boxing promotions, and earnings from HED Fitness LTD.
        </p>
        <p>
          Influencer boxing event fees for mid-tier creators on platforms like KingPyn and MF & DAZN X Series can range from five to six figures per event, contributing meaningfully to the upper bound of his estimated net worth alongside ongoing social media revenue.
        </p>
      </CreatorSection>

      <CreatorSection heading="Ed Matthews and Elsa Rae | Relationship">
        <p>
          Matthews has had a publicized relationship with TikTok creator Elsa Rae, which has drawn social media attention and commentary from both their audiences. The relationship has been described as on-and-off, with its visibility on social media contributing additional content and audience engagement for both creators.
        </p>
        <p>
          Beyond his relationship with Elsa Rae, Matthews keeps most of his personal life private, directing public attention primarily toward his content, boxing career, and fitness work.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="Ed Matthews Controversies | Key Incidents"
        color="red"
        items={[
          { label: 'Boxing Backstage', detail: 'Altercations reported backstage during boxing events' },
          { label: 'Substance Allegations', detail: 'Allegations of banned substance use in connection with boxing competitions' },
          { label: 'Kick Streaming', detail: 'Legal issues related to online activities on the Kick streaming platform' },
        ]}
      />

      <CreatorTable
        columns={[
          { key: 'platform', header: 'Platform' },
          { key: 'handle', header: 'Handle' },
          { key: 'followers', header: 'Following' },
          { key: 'focus', header: 'Content' },
        ]}
        rows={[
          { platform: 'TikTok', handle: '@edmatthewstokky', followers: '1M+', focus: 'Lifestyle, challenges, boxing updates, commentary' },
          { platform: 'Instagram', handle: '@edmatthews', followers: 'Active', focus: 'Lifestyle, fitness, boxing promotion' },
          { platform: 'YouTube', handle: '@edmatthews', followers: 'Active', focus: 'Vlogs, boxing build-up, challenge content' },
        ]}
        highlightKey="platform"
        highlightValue="TikTok"
      />

      <CreatorSection heading="Ed Matthews Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.tiktok.com/@edmatthewstokky" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TikTok: @edmatthewstokky (1M+ followers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/edmatthews" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @edmatthews
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@edmatthews" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @edmatthews
            </a>
          </li>
        </ul>
      </CreatorSection>

      <CreatorSection heading="Ed Matthews 2026 | Creator Profile Summary">
        <p>
          Ed Matthews represents a growing category of UK digital creators who have extended their influence into real-world competitive entertainment through influencer boxing. His combination of TikTok reach, a documented fitness background, and actual ring competition makes him a distinctive figure in the British creator landscape.
        </p>
        <p>
          Despite losses to Blueface and Luis Alcaraz Pineda, his continued participation in high-profile events alongside sustained social media output keeps him a relevant presence in the UK influencer boxing conversation. For more creator profiles, visit the{' '}
          <a href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator Hub</a> or read about{' '}
          <a href="/creator/sssniperwolf" className="text-blue-600 hover:text-blue-800 underline">SSSniperwolf</a> and{' '}
          <a href="/creator/mrbeast" className="text-blue-600 hover:text-blue-800 underline">MrBeast</a>.
        </p>
      </CreatorSection>

      <SourcesInterlink
        accentColor="red"
        internalLinks={[
          { href: '/influencer', label: 'Influencer Hub', description: 'All creator profiles on OzoneNews' },
          { href: '/influencer/sssniperwolf', label: 'SSSniperWolf Profile', description: '34M YouTube subscribers, UK creator' },
          { href: '/influencer/mrbeast', label: 'MrBeast Profile', description: 'Most-subscribed solo YouTube creator, Beast Games' },
        ]}
      />

    </CreatorArticle>
  );
}
