import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/creator/mrbeast-launches-beast-games-season-2-casting';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
const OG_IMAGE = 'https://www.owire.org/influncer/usa/mr_beast.png';

export const metadata: Metadata = {
  title: 'MrBeast Beast Games Season 2 | Casting, How to Apply',
  description:
    'MrBeast has officially opened casting for Beast Games Season 2 on Amazon Prime Video. How to apply, what to expect, prize details, and why this season could top Season 1.',
  keywords: [
    'MrBeast Beast Games Season 2',
    'Beast Games Season 2 casting',
    'Beast Games Season 2 how to apply',
    'MrBeast Season 2',
    'Beast Games Prime Video',
    'MrBeast game show casting',
    'Beast Games audition',
    'Beast Games Season 2 2026',
    'MrBeast Amazon Prime',
    'Beast Games casting 2026',
    'Jimmy Donaldson game show',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MrBeast Beast Games Season 2 | Casting & How to Apply',
    description:
      'MrBeast has opened casting for Beast Games Season 2 on Amazon Prime Video. Apply link, what producers are looking for, prize amount, and Season 1 recap.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    publishedTime: '2026-03-20T14:00:00Z',
    modifiedTime: '2026-05-06T14:00:00Z',
    section: 'Creator',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'MrBeast, Jimmy Donaldson, host of Beast Games on Amazon Prime Video',
      },
    ],
    tags: ['MrBeast', 'Beast Games', 'Season 2', 'Amazon Prime Video', 'Casting'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrBeast Beast Games Season 2 | Casting Opens',
    description:
      'Casting is open for Beast Games Season 2. How to apply, prize size, and everything we know about the Amazon Prime production.',
    images: [OG_IMAGE],
  },
};

export default function BeastGamesSeason2CastingPage() {
  return (
    <>
      <NewsArticleSchema
        title="MrBeast Beast Games Season 2 | Casting, How to Apply"
        description="MrBeast has officially opened casting for Beast Games Season 2 on Amazon Prime Video. How to apply, what to expect, prize details, and production timeline."
        author="ObjectWire Creator Desk"
        publishedTime="2026-03-20T14:00:00Z"
        modifiedTime="2026-05-06T14:00:00Z"
        imageUrl={OG_IMAGE}
        articleUrl={ARTICLE_URL}
        section="Creator"
        keywords={['Beast Games Season 2', 'MrBeast casting', 'Amazon Prime Video game show', 'MrBeast']}
      />
      <NewsArticle
      title="MrBeast Beast Games Season 2 | Casting, How to Apply"
      subtitle="Amazon Prime Video's record-breaking game show returns, and casting is open"
      category="Creator"
      categoryColor="red"
      topicTag="entertainment"
      publishDate="March 20, 2026"
      readTime="5 min read"
      author={{ name: 'ObjectWire Creator Desk', role: 'Creator News' }}
      thumbnail={{
        src: '/influncer/usa/mr_beast.png',
        alt: 'MrBeast, Jimmy Donaldson, host of Beast Games on Amazon Prime Video',
      }}
      tags={['MrBeast', 'Beast Games', 'Season 2', 'Amazon Prime Video', 'Casting']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Creator', item: '/creator' },
        { name: 'MrBeast Beast Games Season 2', item: SLUG },
      ]}
      slug="creator-mrbeast-launches-beast-games-season-2-casting"
      url={SLUG}
      moreFromHub={[
        { slug: 'creator-mrbeast', title: 'MrBeast | 350M Subscribers, Beast Games & Full Bio', url: '/creator/mrbeast', category: 'Creator' },
      ]}
      moreFromHubLabel="MrBeast"
      moreFromHubHref="/creator/mrbeast"
    >
      <p>
        <strong>MrBeast</strong> (Jimmy Donaldson) has officially announced that casting is open for <strong>Beast Games Season 2</strong>, the Amazon Prime Video game show that premiered in December 2024 as the largest game show in television history. The Season 2 announcement confirms the show's renewal and signals an expanded production following the first season's record-breaking debut.
      </p>
      <p>
        For the full MrBeast profile, including his YouTube analytics, brand empire, and Beast Games Season 1 details, see the{' '}
        <Link href="/creator/mrbeast" className="text-blue-600 hover:text-blue-800 underline">MrBeast creator page</Link>.
      </p>

      <h2>Beast Games Season 2 Casting | How to Apply</h2>
      <p>
        Casting for Beast Games Season 2 is being managed directly through the official Beast Games application portal. Applicants must be 18 years or older, hold valid US documentation, and be available for the full production period, which is expected to span several weeks. The exact shooting schedule has not been disclosed publicly.
      </p>
      <p>
        The application process requires:
      </p>
      <ul>
        <li>A video submission introducing yourself and explaining why you should be selected</li>
        <li>Basic personal information and social media handles</li>
        <li>Confirmation of availability for the full filming window</li>
        <li>Agreement to standard reality production terms including NDA provisions</li>
      </ul>
      <p>
        Donaldson and his production team have stated they are looking for contestants who are competitive, charismatic, and capable of performing under extreme pressure. The Season 1 format required contestants to demonstrate both physical and strategic capabilities across a series of large-scale elimination challenges.
      </p>

      <h2>Beast Games Season 2 Prize | What Is at Stake</h2>
      <p>
        Season 1 of Beast Games offered a single grand prize of <strong>$5 million</strong>, the largest cash prize in game show history at the time of production. The prize amount for Season 2 has not been officially confirmed, but Donaldson has stated in interviews that each season is intended to be bigger than the last, suggesting the prize could meet or exceed $5 million.
      </p>
      <p>
        Amazon MGM Studios, which produces the show in partnership with Donaldson's media company, has committed to a multi-season deal. The scale of production, which required 1,000 contestants in Season 1, means that production costs are expected to be substantial regardless of the final prize amount.
      </p>

      <h2>Beast Games Season 1 Recap | 1,000 Contestants, Amazon Prime Record</h2>
      <p>
        Beast Games Season 1 premiered on Amazon Prime Video on December 19, 2024. The show featured 1,000 contestants competing in elimination-style challenges for the $5 million grand prize. It debuted as one of Amazon Prime Video's most-watched originals in its opening week, drawing significant media coverage both for its scale and for allegations of contestant mistreatment that surfaced after filming.
      </p>
      <p>
        A group of former contestants filed a lawsuit in January 2025 alleging unsafe filming conditions, inadequate food and water during multi-day shoots, and failure to pay agreed appearance fees. Donaldson's legal team denied the claims. The lawsuit was ongoing as of early 2026. Amazon did not directly comment on the production allegations.
      </p>
      <p>
        Despite the controversy, Beast Games was renewed for a second season within weeks of its premiere, a signal that Amazon and Donaldson's team consider the format a viable long-term franchise.
      </p>

      <h2>MrBeast Amazon Prime | Season 2 Production Timeline</h2>
      <p>
        Production timing for Season 2 has not been officially disclosed. Based on the Season 1 production timeline, which required approximately 18 months of pre-production before filming began in mid-2024, a Season 2 premiere on Amazon Prime Video is estimated to arrive no earlier than late 2026 or early 2027. Casting is typically the first step in a multi-phase production pipeline.
      </p>
      <p>
        Donaldson has stated that his goal is to address the logistical failures from Season 1, particularly around contestant welfare and communication during filming. He acknowledged in interviews following the Season 1 lawsuit that the production was operating at a scale that no game show production had previously attempted, and that lessons from Season 1 would directly inform Season 2 operations.
      </p>
      <p>
        For the latest MrBeast news and the full profile of the show's creator, see the{' '}
        <Link href="/creator/mrbeast" className="text-blue-600 hover:text-blue-800 underline">MrBeast creator profile</Link>{' '}
        and the{' '}
        <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator hub</Link>.
      </p>

      <SourcesInterlink
        accentColor="orange"
        sources={[
          { number: 1, url: 'https://www.primevideo.com/detail/Beast-Games/0NMXBMQJP0XRQB1FI2WKDNXF5', title: 'Beast Games on Amazon Prime Video', author: 'Amazon MGM Studios', date: '2024' },
        ]}
        internalLinks={[
          { href: '/influencer/mrbeast', label: 'MrBeast Profile', description: '350M+ subscribers, Beast Games, Feastables' },
          { href: '/influencer', label: 'Influencer Hub', description: 'All creator profiles on ObjectWire' },
          { href: '/influencer/mrbeast/last-to-leave-grocery-store-wins-250k', label: 'MrBeast Grocery Store Challenge', description: 'Last to leave wins $250K' },
        ]}
      />
    </NewsArticle>
    </>
  );
}
