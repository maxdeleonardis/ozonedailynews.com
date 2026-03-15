import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/entertainment/conan_obrian';

export const metadata: Metadata = {
  title: '98th Oscars Air Sunday on ABC and Hulu With Conan O\'Brien Hosting | ObjectWire',
  description:
    "The 98th Academy Awards take place Sunday, March 15, 2026 at the Dolby Theatre in Hollywood. Conan O'Brien returns as host for a second consecutive year. Watch live on ABC at 7 p.m. ET or stream on Hulu. Red carpet coverage begins at 3:30 p.m. ET.",
  keywords: [
    '98th Academy Awards',
    'Oscars 2026',
    'Conan O\'Brien Oscars host',
    'Oscars on ABC',
    'Oscars on Hulu',
    'Academy Awards March 2026',
    'Dolby Theatre Oscars',
    '98th Oscars date time',
    'Oscars red carpet 2026',
    'Conan O\'Brien host 2026',
    'watch Oscars 2026',
    'Academy Awards host',
    'Oscars ABC stream',
    'Hollywood awards 2026',
  ],
  openGraph: {
    title: '98th Oscars Air Sunday on ABC and Hulu With Conan O\'Brien Hosting',
    description:
      "The 98th Academy Awards are Sunday, March 15 at 7 p.m. ET on ABC and Hulu. Conan O'Brien hosts for the second straight year. Red carpet coverage kicks off at 3:30 p.m. ET.",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: "Conan O'Brien hosting the 98th Academy Awards" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '98th Oscars Tonight: Conan O\'Brien Hosts on ABC and Hulu',
    description:
      "7 p.m. ET on ABC and Hulu. Red carpet at 3:30 p.m. ET. Conan O'Brien returns as host for the second consecutive year at the Dolby Theatre, Hollywood.",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

const breadcrumbItems = [
  { name: 'Home', item: '/' },
  { name: 'Entertainment', item: '/entertainment' },
  { name: 'News', item: '/entertainment/news' },
];

const articleTags = [
  '98th Oscars',
  'Academy Awards',
  "Conan O'Brien",
  'ABC',
  'Hulu',
  'Hollywood',
  'Dolby Theatre',
  'Awards Season',
  'Entertainment',
  'Live TV',
];

export default function Oscars98ConanOBrienPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="98th Oscars Air Sunday on ABC and Hulu With Conan O'Brien Hosting"
        description="The 98th Academy Awards take place Sunday, March 15, 2026 at the Dolby Theatre at Ovation Hollywood. Conan O'Brien hosts for a second consecutive year. Broadcast live on ABC at 7 p.m. ET and streamed on Hulu. Red carpet begins 3:30 p.m. ET."
        author="ObjectWire Entertainment Desk"
        publishedTime="2026-03-14T00:00:00Z"
        modifiedTime="2026-03-14T00:00:00Z"
        articleUrl={FULL_URL}
        imageUrl={IMAGE_URL}
        section="Entertainment"
        keywords={[
          '98th Academy Awards',
          'Oscars 2026',
          "Conan O'Brien",
          'ABC',
          'Hulu',
          'Dolby Theatre',
          'Awards Season',
        ]}
      />
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <NewsArticle
        title="98th Oscars Air Sunday on ABC and Hulu With Conan O'Brien Hosting"
        subtitle="The 98th Academy Awards take place Sunday, March 15 at the Dolby Theatre at Ovation Hollywood. Conan O'Brien returns as host for the second consecutive year. The ceremony airs live on ABC at 7 p.m. ET — 4 p.m. PT — and streams on Hulu, with red carpet coverage beginning at 3:30 p.m. ET."
        category="Entertainment"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="March 14, 2026"
        readTime="3 min read"
        author={{ name: 'ObjectWire Entertainment Desk', role: 'Entertainment Reporter' }}
        thumbnail={{ src: IMAGE_URL, alt: "Conan O'Brien hosting the 98th Academy Awards" }}
        tags={articleTags}
        trending={true}
        slug={SLUG}
        url={FULL_URL}
      >

        {/* LEDE */}
        <p>
          <strong>HOLLYWOOD, CA</strong> — The <strong>98th Academy Awards</strong> will
          take place on <strong>Sunday, March 15, 2026</strong>, at the{' '}
          <strong>Dolby Theatre at Ovation Hollywood</strong>, with comedian{' '}
          <strong>Conan O'Brien</strong> returning as host for a second consecutive year.
          The ceremony begins at <strong>7 p.m. ET / 4 p.m. PT</strong> and will be
          broadcast live on <strong>ABC</strong> and streamed on{' '}
          <a href="/entertainment/hulu">Hulu</a>, with pre-show red carpet coverage on
          ABC starting at <strong>3:30 p.m. ET</strong>.
        </p>

        <HighlightBox color="purple">
          <ul>
            <li><strong>Event:</strong> 98th Academy Awards</li>
            <li><strong>Date:</strong> Sunday, March 15, 2026</li>
            <li><strong>Venue:</strong> Dolby Theatre at Ovation Hollywood</li>
            <li><strong>Host:</strong> Conan O'Brien (second consecutive year)</li>
            <li><strong>Ceremony:</strong> 7 p.m. ET / 4 p.m. PT — ABC &amp; Hulu</li>
            <li><strong>Red Carpet Pre-Show:</strong> 3:30 p.m. ET — ABC</li>
          </ul>
        </HighlightBox>

        {/* CONAN */}
        <h2>Conan O'Brien Returns: "We Have a Lot of Fun Ideas"</h2>
        <p>
          O'Brien, who hosted last year's ceremony to strong reviews, is back for a
          second straight Oscars — a relatively rare occurrence in the modern history
          of the show, which has frequently cycled through hosts or opted for no-host
          formats throughout the 2010s and early 2020s.
        </p>
        <p>
          Speaking to <em>ABC News</em> in an interview that aired on{' '}
          <strong>Good Morning America</strong> this week, O'Brien struck a measured but
          confident tone about his preparation.
        </p>

        <HighlightBox color="blue">
          <p>
            "I'm chill, because we've been working really hard. We have a lot of fun ideas."
          </p>
          <p>
            <em>— Conan O'Brien, speaking to ABC News on Good Morning America</em>
          </p>
        </HighlightBox>

        <p>
          He acknowledged the perpetual uncertainty of live television, adding that
          it's <em>"always a running battle up until the moment the Oscars begins."</em>{' '}
          The remark reflects the well-known reality of hosting Hollywood's biggest night —
          where monologue jokes, presenter lineups, and production segments remain in flux
          until airtime.
        </p>

        {/* HOW TO WATCH */}
        <h2>How to Watch the 98th Oscars</h2>
        <p>
          The ceremony is broadcast live on <strong>ABC</strong> and available to stream
          simultaneously on <a href="/entertainment/hulu">Hulu</a> — making this one of
          the most accessible Oscars in recent memory for cord-cutters. Viewers without
          cable can access the show directly through Hulu's live TV tier or, in some
          markets, via the ABC app with a participating TV provider login.
        </p>
        <p>
          Pre-show red carpet coverage begins at <strong>3:30 p.m. ET on ABC</strong>,
          giving audiences nearly three and a half hours of arrivals, interviews, and
          fashion coverage before O'Brien takes the stage for the main ceremony at 7 p.m.
        </p>

        {/* CONTEXT */}
        <h2>The Oscars in a Year of Streaming Consolidation</h2>
        <p>
          The 98th ceremony arrives at a pivotal moment for Hollywood. The{' '}
          <a href="/entertainment/news/paramount-skydance-acquires-warner-bros-discovery-110-billion">
            Paramount Skydance acquisition of Warner Bros. Discovery
          </a>{' '}
          for $110 billion has reshaped the studio landscape heading into the awards season
          closing weekend, while streaming platforms have increasingly dominated
          the nominees list across major categories. The dual broadcast on ABC and{' '}
          <a href="/entertainment/hulu">Hulu</a> reflects the industry's hybrid
          distribution reality — live appointment television delivered simultaneously
          to both cable and streaming audiences.
        </p>
        <p>
          ObjectWire will provide live coverage and full results from the{' '}
          <a href="/entertainment">98th Academy Awards</a> as the ceremony unfolds
          on Sunday evening.
        </p>

        <TagsSection tags={articleTags} />
      </NewsArticle>
    </SEOWrapper>
  );
}
