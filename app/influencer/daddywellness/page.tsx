import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/creator/daddywellness';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
const OG_IMAGE = 'https://www.owire.org/influncer/daddy_wellness.jpg';

export const metadata: Metadata = {
  title: 'Daddy Wellness (Richie Lovelace) | Wellness Creator, 2M Followers',
  description:
    'Richie Lovelace, known as Daddy Wellness, is a Miami-based wellness creator with 2M+ Instagram followers, founder of Dialed University, and host of TSL Time podcast.',
  keywords: [
    'Richie Lovelace Daddy Wellness',
    'Daddy Wellness Instagram',
    'Daddy Wellness age',
    'Daddy Wellness age 2026',
    'Daddy Wellness 2026',
    'Dialed University',
    'Dialed Degen Method',
    'TSL Time podcast',
    'wellness creator Miami',
    'daddywellness YouTube',
    'Daddy Wellness 2 million followers',
    'Richie Lovelace creator',
    'Daddy Wellness Skool',
    'wellness content creator 2026',
    'SIUUUP Daddy Wellness',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Daddy Wellness (Richie Lovelace) | 2M+ Follower Wellness Creator',
    description:
      'Miami-based wellness creator Richie Lovelace, founder of Dialed University, host of TSL Time podcast. Full profile: Instagram, YouTube, background, and content.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    publishedTime: '2026-04-10T12:00:00Z',
    modifiedTime: '2026-05-06T12:00:00Z',
    section: 'Creator',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Richie Lovelace, Daddy Wellness, Miami-based wellness creator and founder of Dialed University',
      },
    ],
    tags: ['Daddy Wellness', 'Richie Lovelace', 'Wellness', 'Miami', 'Creator'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daddy Wellness (Richie Lovelace) | 2M+ Instagram, Dialed University',
    description:
      'Miami-based wellness entrepreneur with 2M+ Instagram followers. Founder of Dialed University, host of TSL Time podcast.',
    images: [OG_IMAGE],
  },
};

export default function DaddyWellnessPage() {
  return (
    <>
      <NewsArticleSchema
        title="Daddy Wellness (Richie Lovelace) | Wellness Creator, 2M+ Followers"
        description="Richie Lovelace (Daddy Wellness) is a Miami-based wellness creator with 2M+ Instagram followers, founder of Dialed University, and host of TSL Time podcast."
        author="ObjectWire Creator Desk"
        publishedTime="2026-04-10T12:00:00Z"
        modifiedTime="2026-05-06T12:00:00Z"
        imageUrl={OG_IMAGE}
        articleUrl={ARTICLE_URL}
        section="Creator"
        keywords={['Daddy Wellness', 'Richie Lovelace', 'Dialed University', 'wellness creator', 'Miami']}
      />
      <NewsArticle
      title="Daddy Wellness (Richie Lovelace) | Wellness Creator, 2M+ Followers"
      subtitle="From growth equity to Miami wellness, building Dialed University and the TSL Time podcast"
      category="Creator"
      categoryColor="green"
      topicTag="lifestyle"
      publishDate="April 10, 2026"
      readTime="6 min read"
      author={{ name: 'ObjectWire Creator Desk', role: 'Creator Profiles' }}
      thumbnail={{
        src: '/influncer/daddy_wellness.jpg',
        alt: 'Richie Lovelace, Daddy Wellness, wellness creator and founder of Dialed University',
      }}
      tags={['Daddy Wellness', 'Richie Lovelace', 'Wellness', 'Miami', 'Dialed University']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Creator', item: '/creator' },
        { name: 'Daddy Wellness', item: SLUG },
      ]}
      slug="creator-daddywellness"
      url={SLUG}
    >
      <p>
        <strong>Richie Lovelace</strong>, known online as <strong>Daddy Wellness</strong>, is a Miami-based wellness entrepreneur and content creator. He built an audience of over 2 million Instagram followers by documenting his own transformation from a career in growth equity and private markets to a full-time wellness lifestyle focused on fitness, nutrition, mindset, and high-performance habits. His account handle <em>@daddywellness</em> became a shorthand for a specific flavor of aspirational wellness content, mixing finance-world discipline with physique-first aesthetics and practical health frameworks.
      </p>
      <p>
        His catchphrase <em>SIUUUP</em>, a wellness-coded riff on Cristiano Ronaldo's iconic "SIUU" celebration, became a signature identifier across his content and community. Lovelace posts consistently across Instagram, YouTube, and Skool, where he operates a paid community under the Dialed University brand.
      </p>

      <h2>Richie Lovelace Background | From Finance to Wellness</h2>
      <p>
        Before building his creator brand, Lovelace worked in growth equity and private market investing, a career path that instilled the analytical and operational frameworks he now applies to his wellness coaching and content business. He has discussed the transition publicly in podcast appearances and long-form videos, framing the move not as leaving finance but as redirecting high-performance skills into a different operating environment.
      </p>
      <p>
        His background in private markets is a point of differentiation in the wellness creator space, where most figures come from fitness, nutrition, or athletics backgrounds. Lovelace explicitly targets an audience of driven professionals, early-stage founders, and finance-adjacent men who want to optimize their physical and mental output without sacrificing career ambition.
      </p>

      <h2>Daddy Wellness Instagram | 2M+ Followers, Content Strategy</h2>
      <p>
        Lovelace's Instagram presence is built around short-form video content documenting workouts, nutrition protocols, mindset clips, and glimpses of his Miami lifestyle. His feed prioritizes physicality and performance over aesthetic softness, with an emphasis on morning routines, cold exposure, strength training, and high-protein eating. The style blends documentary realism with aspirational polish, a combination that resonated with an audience segment the standard fitness influencer content had not fully captured.
      </p>
      <p>
        He passed 1 million followers in 2023 and crossed 2 million in 2024. The account grew organically without major viral moments or platform algorithm events, driven by consistent posting and a clear target persona that his content spoke to directly.
      </p>

      <h2>Dialed University | Online Wellness Coaching Platform</h2>
      <p>
        Dialed University is Lovelace's flagship educational product, a structured online coaching program built around his Dialed Degen Method. The program covers nutrition, training methodology, sleep optimization, supplementation strategy, and performance mindset. It is delivered through a Skool community, combining structured curriculum with peer accountability and direct coaching access.
      </p>
      <p>
        The name <em>Degen</em> is a deliberate appropriation of a term from crypto and finance culture, referring to a risk-tolerant, all-in approach. Applied to wellness, the Dialed Degen Method positions extreme consistency and high-tolerance for discomfort as the primary drivers of physical transformation. The framing appeals specifically to the finance and startup demographics that make up a significant portion of his following.
      </p>
      <p>
        Dialed University operates on a subscription model. Lovelace has not publicly disclosed revenue figures, but the program's price point, combined with his follower base, places it among the higher-revenue creator-education products in the wellness space.
      </p>

      <h2>TSL Time Podcast | Topics, Format, Guests</h2>
      <p>
        <em>TSL Time</em> is Lovelace's podcast, released in audio and video format. The show covers topics at the intersection of high-performance living, entrepreneurship, and personal development. Guests have included other wellness creators, founders, and investors who share Lovelace's framework of applying professional-grade discipline to personal health and business building.
      </p>
      <p>
        The podcast functions as a top-of-funnel content channel, introducing new audiences to his worldview and methodologies before funneling interested listeners toward Dialed University or his Instagram content. It is distributed on Spotify, Apple Podcasts, and YouTube.
      </p>

      <h2>Daddy Wellness Social Media Accounts | 2026</h2>
      <p>
        Official accounts as of May 2026:
      </p>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/daddywellness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Instagram: @daddywellness
          </a>{' '}
          — 2M+ followers, primary platform, daily content
        </li>
        <li>
          <a
            href="https://www.youtube.com/@daddywellness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            YouTube: @daddywellness
          </a>{' '}
          — long-form content, podcast video, coaching breakdowns
        </li>
        <li>
          <a
            href="https://www.skool.com/dialed-university"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Skool: Dialed University
          </a>{' '}
          — paid community, Dialed Degen Method curriculum
        </li>
      </ul>
      <p>
        For more creator profiles, see the{' '}
        <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator hub</Link>.
      </p>

      <SourcesInterlink
        accentColor="green"
        internalLinks={[
          { href: '/influencer', label: 'Influencer Hub', description: 'All creator profiles on ObjectWire' },
          { href: '/influencer/mrbeast', label: 'MrBeast Profile', description: 'Most-subscribed solo YouTube creator, Beast Games' },
          { href: '/influencer/charli-damelio', label: 'Charli D\u2019Amelio Profile', description: 'First TikTok creator to 100M followers' },
        ]}
      />
    </NewsArticle>
    </>
  );
}
