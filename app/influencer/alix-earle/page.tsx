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

const SLUG = '/creator/alix-earle';
const PAGE_URL = `https://www.owire.org${SLUG}`;
const IMAGE_URL = '/influncer/alix-earle-profile.jpg';

export const metadata: Metadata = {
  title: 'Alix Earle | Age, TikTok, Net Worth, GRWM Bio 2026',
  description:
    'Alix Earle, 25, is a Florida-born TikTok creator with 7M followers known for GRWM videos. Full biography: net worth, brand deals, college career, and social media 2026.',
  keywords: [
    'Alix Earle',
    'Alix Earle age',
    'Alix Earle age 2026',
    'Alix Earle TikTok',
    'Alix Earle Instagram',
    'Alix Earle GRWM',
    'Alix Earle net worth',
    'Alix Earle boyfriend',
    'Alix Earle biography 2026',
    'Alix Earle University of Miami',
    'Alix Earle brand deals',
    'Alix Earle acne',
    'Alix Earle real name',
    'GRWM creator',
    'TikTok creator biography',
    'Alix Earle 2026',
    'Alix Earle L\'Oreal',
    'Alix Earle Braxton Berrios',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Alix Earle | Age, TikTok, GRWM & Net Worth Bio 2026',
    description:
      'Full profile of Alix Earle, 25, TikTok\'s defining GRWM creator with 7M followers. Net worth, brand deals, University of Miami, acne story, and 2026 career.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    tags: ['Alix Earle', 'Creator', 'TikTok', 'GRWM', 'Florida'],
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Alix Earle, TikTok GRWM creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alix Earle | 7M TikTok Followers, GRWM Creator Bio 2026',
    description: 'Alix Earle profile: age 25, TikTok @alixearle, GRWM videos, University of Miami, L\'Oreal deals, and relationship with Braxton Berrios.',
    images: [`https://www.owire.org${IMAGE_URL}`],
  },
};

export default function AlixEarlePage() {
  return (
    <CreatorArticle
      schema={{
        title: 'Alix Earle | TikTok GRWM Creator, Age, Brand Deals & Biography 2026',
        description:
          'Alix Earle, 25, is a Tequesta, Florida-born TikTok creator with 7M followers, best known for GRWM (Get Ready With Me) videos. Full biography: net worth, brand deals, University of Miami, and 2026 career.',
        publishedTime: '2026-04-29T12:00:00Z',
        modifiedTime: '2026-04-29T12:00:00Z',
        author: 'OzoneNews Creator Desk',
        articleUrl: PAGE_URL,
        imageUrl: `https://www.owire.org${IMAGE_URL}`,
        section: 'Creator',
        keywords: [
          'Alix Earle', 'Alix Earle age 2026', 'Alix Earle TikTok', 'GRWM creator',
          'Alix Earle net worth', 'Alix Earle brand deals', 'Alix Earle biography',
          'University of Miami creator', 'Alix Earle 2026',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: 'https://www.owire.org' },
        { name: 'Creator', item: 'https://www.owire.org/creator' },
        { name: 'Alix Earle', item: PAGE_URL },
      ]}
      hero={{
        image: { src: IMAGE_URL, alt: 'Alix Earle TikTok GRWM creator' },
        gradient: 'linear-gradient(135deg, #f8cdda 0%, #1d2b64 100%)',
        badges: [
          { label: 'Florida', style: 'default' },
          { label: 'GRWM Queen', style: 'achievement' },
          { label: 'TikTok Creator', style: 'default' },
        ],
        name: 'Alix Earle',
        subtitle: 'TikTok Creator, GRWM Creator, Brand Partner',
        description:
          'Alix Earle went from University of Miami student to one of TikTok\'s fastest-rising creators in 2022. Known for her candid GRWM videos, acne transparency, and relatable humor, she built 7M TikTok followers and major brand deals before graduating.',
        ctaButtons: [
          { href: 'https://www.tiktok.com/@alixearle', label: 'TikTok', icon: '♪', variant: 'secondary' },
          { href: 'https://www.instagram.com/alixearle', label: 'Instagram', icon: '📷', variant: 'secondary' },
          { href: 'https://www.youtube.com/@alixearle', label: 'YouTube', icon: '▶', variant: 'secondary' },
        ],
      }}
      sidebar={{
        infobox: {
          image: { src: IMAGE_URL, alt: 'Alix Earle profile photo' },
          name: 'Alix Earle',
          subtitle: 'TikTok GRWM Creator',
          rows: [
            { label: 'Full Name', value: 'Alix Earle' },
            { label: 'Born', value: 'December 16, 2000' },
            { label: 'Age (2026)', value: '25' },
            { label: 'Nationality', value: 'American' },
            { label: 'From', value: 'Tequesta, Florida' },
            { label: 'Based In', value: 'Miami / New York' },
            { label: 'Education', value: 'University of Miami (Marketing, 2023)' },
            { label: 'Occupation', value: 'Creator, Brand Partner' },
            {
              label: 'TikTok',
              value: '@alixearle',
              href: 'https://www.tiktok.com/@alixearle',
            },
            {
              label: 'Instagram',
              value: '@alixearle',
              href: 'https://www.instagram.com/alixearle',
            },
            {
              label: 'YouTube',
              value: '@alixearle',
              href: 'https://www.youtube.com/@alixearle',
            },
            { label: 'TikTok Followers', value: '7M+' },
            { label: 'Instagram', value: '5.2M followers' },
            { label: 'Partner', value: 'Braxton Berrios (NFL)' },
          ],
        },
        timeline: [
          { year: '2020', event: 'Created TikTok account while at University of Miami' },
          { year: '2022', event: 'Viral growth — from 300K to 4M TikTok followers in under 3 months' },
          { year: '2023', event: 'Graduated University of Miami; signed L\'Oreal Paris deal; went to Coachella' },
          { year: '2023', event: 'Began relationship with NFL wide receiver Braxton Berrios' },
          { year: '2024', event: 'Expanded to podcast and YouTube; Amazon and Tarte Cosmetics deals' },
          { year: '2026', event: 'Active across TikTok, Instagram, YouTube; major brand partnerships ongoing' },
        ],
        relatedLinks: [
          { href: '/creator', label: 'Creator Hub' },
          { href: '/creator/charli-damelio', label: 'Charli D\'Amelio Profile' },
          { href: '/tiktok', label: 'TikTok News' },
        ],
        meta: {
          publishedDate: 'April 29, 2026',
          updatedDate: 'April 29, 2026',
          author: 'OzoneNews Creator Desk',
          category: 'Creator',
        },
      }}
      tags={['Alix Earle', 'TikTok', 'GRWM', 'Creator', 'Florida', 'Beauty Creator']}
    >

      <CreatorSection heading="Who Is Alix Earle">
        <p>
          Alix Earle is an American content creator born on December 16, 2000 in Tequesta, Florida. She is best known for popularizing the "GRWM" (Get Ready With Me) video format on{' '}
          <a href="/tiktok" className="text-blue-600 hover:text-blue-800 underline">TikTok</a>, building one of the platform's most engaged beauty audiences through candid, unfiltered storytelling.
        </p>
        <p>
          In 2026 she is 25 years old and based between Miami and New York. Having graduated from the University of Miami in 2023 with a degree in marketing, she now runs her creator career full-time, with brand deals, a podcast, and a YouTube channel supplementing her primary TikTok income.
        </p>
      </CreatorSection>

      <div className="grid grid-cols-3 gap-4 my-6">
        <CreatorStat value="7M+" label="TikTok Followers" color="blue" />
        <CreatorStat value="5.2M" label="Instagram Followers" color="purple" />
        <CreatorStat value="25" label="Age in 2026" color="green" />
      </div>

      <CreatorSection heading="Alix Earle TikTok | GRWM Videos and Viral Growth in 2022">
        <p>
          Alix Earle's TikTok growth story is one of the fastest in creator history. She had approximately 300,000 followers at the start of December 2022. By February 2023, she had passed 4 million, adding roughly 100,000 followers per day at peak.
        </p>
        <p>
          The growth was driven almost entirely by her GRWM format: a video style where she gets ready for a party or event while narrating recent life events in a chatty, friend-like tone. What set her apart from earlier GRWM creators was her willingness to discuss acne, mental health, family dynamics, and college social life without filtering or PR-speak.
        </p>
        <p>
          Her account @alixearle passed 7 million followers in 2024 and remains one of the highest-engagement creator accounts in the beauty-adjacent TikTok space in 2026.
        </p>
      </CreatorSection>

      <CreatorSection heading="Alix Earle Acne | Authenticity That Built Her Audience">
        <p>
          One of the defining elements of Alix Earle's brand is her public discussion of adult acne. Rather than editing out breakouts or posting only flawless skin content, she discussed her skincare struggles openly in GRWM videos, including dermatologist visits, accutane use, and the emotional impact of acne on self-confidence.
        </p>
        <p>
          This transparency resonated strongly with her audience and created a loyalty that purely aesthetic-focused creators rarely achieve. Her openness about acne is frequently cited by media commentators as a key driver of the parasocial connection her followers feel.
        </p>
      </CreatorSection>

      <CreatorCalloutBox
        heading="Alix Earle Brand Deals and Partnerships"
        color="blue"
        items={[
          { label: 'L\'Oreal Paris', detail: 'Global ambassador; appeared in major campaign content' },
          { label: 'Amazon', detail: 'Storefront partnership; product links across beauty and lifestyle' },
          { label: 'Tarte Cosmetics', detail: 'Coachella trip creator group; ongoing partnership' },
          { label: 'Rare Beauty', detail: 'Collaboration with Selena Gomez\'s brand' },
          { label: 'NFL Crossover', detail: 'Dating NFL wide receiver Braxton Berrios brought sports media coverage' },
        ]}
      />

      <CreatorSection heading="Alix Earle University of Miami | Marketing Degree and Creator Career">
        <p>
          Alix Earle enrolled at the University of Miami in 2019 and graduated in May 2023 with a degree in marketing. Unusually for a creator of her scale, she completed her degree while simultaneously managing a full-time content career, often posting GRWM videos from her dorm or sorority chapter events.
        </p>
        <p>
          Her college experience was central to her content. She documented game days, sorority life, and campus events in a way that resonated with college-age viewers who saw their own experiences reflected. The combination of relatability and aspiration (attending Miami, going to Coachella, dating an NFL player) created a uniquely compelling narrative.
        </p>
      </CreatorSection>

      <CreatorQuote
        quote="I never tried to be perfect. I think that's what connected. People can tell when something is real, and I was just being myself."
        attribution="Alix Earle"
        role="TikTok Creator, Brand Partner"
      />

      <CreatorSection heading="Alix Earle Net Worth | Estimating Creator Economy Revenue">
        <p>
          Alix Earle's net worth in 2026 is estimated between $3 million and $6 million. Her income streams include TikTok creator fund and series revenue, sponsored posts (estimated $50,000 to $150,000 per post at her follower level), YouTube ad revenue, Amazon affiliate commissions, and formal brand ambassador contracts.
        </p>
        <p>
          Her deal with L'Oreal Paris alone is estimated to be worth seven figures annually. While exact figures are not public, multiple creator economy analysts have cited her as one of the highest-earning TikTok personalities in the beauty category.
        </p>
      </CreatorSection>

      <CreatorTable
        columns={[
          { key: 'platform', header: 'Platform' },
          { key: 'handle', header: 'Handle' },
          { key: 'followers', header: 'Followers' },
          { key: 'focus', header: 'Content Focus' },
        ]}
        rows={[
          { platform: 'TikTok', handle: '@alixearle', followers: '7M+', focus: 'GRWM, vlogs, beauty' },
          { platform: 'Instagram', handle: '@alixearle', followers: '5.2M', focus: 'Lifestyle, brand content' },
          { platform: 'YouTube', handle: '@alixearle', followers: '1.4M', focus: 'Long-form vlogs, podcast clips' },
          { platform: 'Twitter/X', handle: '@alixearle', followers: '580K', focus: 'Commentary, fan interaction' },
        ]}
        highlightKey="platform"
        highlightValue="TikTok"
      />

      <CreatorSection heading="Alix Earle Social Media | Official Accounts 2026">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a href="https://www.tiktok.com/@alixearle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              TikTok: @alixearle (7M+ followers)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/alixearle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Instagram: @alixearle (5.2M followers)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@alixearle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              YouTube: @alixearle (1.4M subscribers)
            </a>
          </li>
        </ul>
      </CreatorSection>

      <CreatorSection heading="Alix Earle 2026 | Creator Profile Summary">
        <p>
          Alix Earle in 2026 is a fully established creator with a diverse income portfolio, major brand relationships, and an audience that spans beauty, lifestyle, and sports demographics. Her growth arc from college student to A-list brand partner in under three years remains one of the most studied cases in the modern creator economy.
        </p>
        <p>
          For more creator profiles, see the{' '}
          <a href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator Hub</a> and the{' '}
          <a href="/creator/charli-damelio" className="text-blue-600 hover:text-blue-800 underline">Charli D'Amelio profile</a>.
        </p>
      </CreatorSection>

      <SourcesInterlink
        accentColor="blue"
        internalLinks={[
          { href: '/influencer', label: 'Influencer Hub', description: 'All creator profiles on OzoneNews' },
          { href: '/influencer/charli-damelio', label: 'Charli D\u2019Amelio Profile', description: 'First TikTok creator to 100M followers' },
          { href: '/influencer/emma-chamberlain', label: 'Emma Chamberlain Profile', description: 'YouTube creator, Chamberlain Coffee, Louis Vuitton ambassador' },
          { href: '/tiktok', label: 'TikTok News', description: 'Latest TikTok platform coverage' },
        ]}
      />

    </CreatorArticle>
  );
}
