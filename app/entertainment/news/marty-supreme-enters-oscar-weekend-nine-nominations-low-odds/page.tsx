import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/entertainment/news/marty-supreme-enters-oscar-weekend-nine-nominations-low-odds';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/entertainment/marty_supreme';

export const metadata: Metadata = {
  title: "'Marty Supreme' Enters Oscar Weekend With Nine Nods but Low Odds | ObjectWire",
  description:
    "Josh Safdie's A24 sports drama Marty Supreme carries nine Oscar nominations into the 98th Academy Awards, including Best Picture, Best Director, and Best Actor for Timothée Chalamet. But prediction markets on Kalshi and Polymarket favor Ryan Coogler's Sinners to dominate the night.",
  keywords: [
    'Marty Supreme Oscars',
    'Timothée Chalamet Best Actor',
    'Josh Safdie Oscar nomination',
    'A24 Oscars 2026',
    '98th Academy Awards nominees',
    'Marty Supreme nominations',
    'Sinners Ryan Coogler Oscars',
    'Michael B Jordan Best Actor',
    'Marty Supreme streaming',
    'Marty Supreme Prime Video',
    'Marty Supreme Apple TV',
    'Oscars 2026 Best Picture',
    'Timothée Chalamet third Oscar nomination',
    'Kalshi Polymarket Oscars odds',
    'awards season 2026',
  ],
  openGraph: {
    title: "'Marty Supreme' Enters Oscar Weekend With Nine Nods but Low Odds",
    description:
      "Timothée Chalamet's A24 film enters the 98th Oscars with nine nominations but faces long odds. Prediction markets favor Sinners and Michael B. Jordan as momentum shifts heading into Sunday night.",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: "Timothée Chalamet in Marty Supreme" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "'Marty Supreme' Has Nine Oscar Noms — but the Odds Say Zero Wins",
    description:
      "Josh Safdie's A24 sports drama heads into the 98th Oscars with Best Picture, Director, and Actor nods. Kalshi and Polymarket bettors are betting on Sinners stealing the night.",
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
  'Marty Supreme',
  'Timothée Chalamet',
  'Josh Safdie',
  'A24',
  '98th Oscars',
  'Academy Awards 2026',
  'Best Picture',
  'Best Actor',
  'Sinners',
  'Ryan Coogler',
  'Michael B. Jordan',
  'Oscars Odds',
  'Awards Season',
  'Entertainment',
  'Streaming',
];

export default function MartySupremeOscarsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="'Marty Supreme' Enters Oscar Weekend With Nine Nods but Low Odds"
        description="Josh Safdie's A24 sports drama Marty Supreme carries nine Oscar nominations into the 98th Academy Awards, including Best Picture, Best Director, and Best Actor for Timothée Chalamet. Prediction markets on Kalshi and Polymarket favor the film to leave the ceremony empty-handed as momentum shifts toward Ryan Coogler's Sinners."
        author="ObjectWire Entertainment Desk"
        publishedTime="2026-03-15T08:00:00Z"
        modifiedTime="2026-03-15T08:00:00Z"
        articleUrl={FULL_URL}
        imageUrl={IMAGE_URL}
        section="Entertainment"
        keywords={[
          'Marty Supreme',
          'Timothée Chalamet',
          'Josh Safdie',
          'A24',
          '98th Academy Awards',
          'Oscars 2026',
          'Sinners',
          'Ryan Coogler',
          'Best Picture',
          'Best Actor',
        ]}
      />
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <NewsArticle
        title="'Marty Supreme' Enters Oscar Weekend With Nine Nods but Low Odds"
        subtitle="Josh Safdie's A24 sports drama arrives at the 98th Academy Awards as one of the season's most nominated films — but prediction markets suggest the ceremony may leave Timothée Chalamet and company empty-handed as Ryan Coogler's Sinners commands the night."
        category="Entertainment"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="March 15, 2026"
        readTime="4 min read"
        author={{ name: 'ObjectWire Entertainment Desk', role: 'Entertainment Reporter' }}
        thumbnail={{ src: IMAGE_URL, alt: "Timothée Chalamet in Marty Supreme" }}
        tags={articleTags}
        trending={true}
        slug={SLUG}
        url={FULL_URL}
      >

        {/* LEDE */}
        <p>
          <strong>HOLLYWOOD, CA</strong> — <em>Marty Supreme</em>, the A24 sports drama
          directed by <strong>Josh Safdie</strong> and starring{' '}
          <strong>Timothée Chalamet</strong>, heads into{' '}
          <a href="/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu">
            the 98th Academy Awards
          </a>{' '}
          on Sunday as one of the most nominated films of the season — and, according to
          prediction markets, one of the least likely to win. The film carries{' '}
          <strong>nine nominations</strong>, including Best Picture, Best Director,
          and Best Actor, yet bettors on <strong>Kalshi</strong> and{' '}
          <strong>Polymarket</strong> are broadly forecasting a shutout, with momentum
          swinging sharply toward <strong>Ryan Coogler</strong>'s{' '}
          <em>Sinners</em> and the performance of{' '}
          <strong>Michael B. Jordan</strong>, per <em>Yahoo Entertainment</em>.
        </p>

        <HighlightBox color="purple">
          <ul>
            <li><strong>Film:</strong> Marty Supreme (A24)</li>
            <li><strong>Director:</strong> Josh Safdie</li>
            <li><strong>Star:</strong> Timothée Chalamet</li>
            <li><strong>Total Nominations:</strong> 9, including Best Picture, Best Director, Best Actor</li>
            <li><strong>Chalamet's Oscars history:</strong> Third nomination at age 30 (<em>Call Me by Your Name</em>, <em>A Complete Unknown</em>)</li>
            <li><strong>Prediction market consensus:</strong> Zero wins — Kalshi &amp; Polymarket</li>
            <li><strong>Favored competition:</strong> <em>Sinners</em> (Ryan Coogler / Michael B. Jordan)</li>
          </ul>
        </HighlightBox>

        {/* CHALAMET */}
        <h2>Chalamet's Third Nomination at 30</h2>
        <p>
          The Best Actor nod represents a milestone for Chalamet regardless of the outcome
          on Sunday night. At <strong>30 years old</strong>, he is competing for his{' '}
          <strong>third Academy Award nomination</strong> — the first came for his
          breakthrough work in <em>Call Me by Your Name</em>, followed by last year's
          recognition for <em>A Complete Unknown</em>, Mangold's Bob Dylan biopic.
        </p>
        <p>
          His performance in <em>Marty Supreme</em> as the obsessive, charismatic table
          tennis phenom has drawn its own wave of critical praise, with many reviewers
          describing it as his most physically and emotionally demanding screen work yet.
          Safdie's frenetic direction — hallmarks of his prior collaborations including
          <em>Uncut Gems</em> — puts Chalamet inside an almost non-stop pressure cooker
          across the film's runtime.
        </p>
        <p>
          Still, the Academy's preferential ballot system and the late-season momentum
          swing toward <em>Sinners</em> appear to be working against the film's chances
          in the top categories, despite its broad recognition across nine nomination slots.
        </p>

        {/* STREAMING */}
        <h2>Watch Before the Ceremony: Now on Prime Video and Apple TV</h2>
        <p>
          For viewers catching up before Sunday's broadcast, <em>Marty Supreme</em> has
          been available for home viewing since <strong>February 10</strong>. The film
          can be rented for <strong>$19.99</strong> or purchased for <strong>$24.99</strong>{' '}
          on both <strong>Prime Video</strong> and{' '}
          <a href="/entertainment/apple-tv">Apple TV</a>.
        </p>
        <p>
          The early digital release reflects a growing industry norm for awards-season
          films, allowing studios to capture home-viewing revenue during the final push
          while simultaneously expanding the film's audience ahead of the ceremony. A24's
          decision to window the title this broadly also positions it well for a potential
          post-Oscars subscription streaming deal, regardless of how Sunday unfolds.
        </p>

        <HighlightBox color="blue">
          <ul>
            <li><strong>Rent:</strong> $19.99 — Prime Video &amp; <a href="/entertainment/apple-tv">Apple TV</a></li>
            <li><strong>Buy:</strong> $24.99 — Prime Video &amp; <a href="/entertainment/apple-tv">Apple TV</a></li>
            <li><strong>Available since:</strong> February 10, 2026</li>
          </ul>
        </HighlightBox>

        {/* COMPETITION */}
        <h2>Sinners and the Market Shift</h2>
        <p>
          Despite its impressive nomination count, <em>Marty Supreme</em> has found
          itself on the wrong side of a late-season momentum swing. Ryan Coogler's{' '}
          <em>Sinners</em>, which arrives at the ceremony with its own significant
          nomination tally, has captured the imagination of the prediction market
          community in the final weeks before the vote closed.
        </p>
        <p>
          On <strong>Kalshi</strong> and <strong>Polymarket</strong>, both real-money
          prediction markets that have demonstrated reasonable accuracy in forecasting
          Oscar outcomes in recent years, a majority of bettors have positioned toward
          zero wins for <em>Marty Supreme</em>. The Best Actor race, in particular, is
          trending toward <strong>Michael B. Jordan</strong> for <em>Sinners</em>,
          which would deny Chalamet his first win despite the recognition of a third nod.
        </p>
        <p>
          The Best Director category, where Safdie competes, and Best Picture are
          similarly seen as favorable terrain for <em>Sinners</em>, according to
          aggregated prediction data cited by <em>Yahoo Entertainment</em>.
        </p>
        <p>
          Whether the markets prove correct will be known by Sunday evening. ObjectWire
          will publish full{' '}
          <a href="/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu">
            98th Oscars results
          </a>{' '}
          as winners are announced live on <strong>ABC and Hulu</strong> beginning at{' '}
          7 p.m. ET.
        </p>

        <TagsSection tags={articleTags} />
      </NewsArticle>
    </SEOWrapper>
  );
}
