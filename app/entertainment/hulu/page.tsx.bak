import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/entertainment/hulu';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/vaughn-marsden.PNG';

export const metadata: Metadata = {
  title:
    'Hulu Releases Red Band Trailer for Mike & Nick & Nick & Alice — Vince Vaughn & James Marsden Time-Travel Comedy | ObjectWire',
  description:
    'Hulu published the official red band trailer for Mike & Nick & Nick & Alice on March 1, 2026, starring Vince Vaughn and James Marsden in an R-rated action-comedy about two criminal best friends, a time machine, and a cannibal assassin. Theatrical release April 18, 2026.',
  keywords: [
    'Mike Nick Nick Alice Hulu trailer',
    'Vince Vaughn James Marsden time travel comedy 2026',
    'Mike Nick Nick Alice red band trailer',
    'BenDavid Grabinski Hulu film 2026',
    'Hulu April 2026 release',
    'Eiza Gonzalez Vince Vaughn film',
    'Stephen Root cannibal assassin comedy',
    'time loop action comedy 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Hulu Red Band Trailer: Mike & Nick & Nick & Alice — Vince Vaughn & James Marsden',
    description:
      'Hulu dropped the red band trailer for Mike & Nick & Nick & Alice on March 1, 2026. Two criminal best friends, a time machine, a cannibal assassin, and Eiza González. In theaters April 18, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Entertainment',
    tags: [
      'Hulu', 'Mike Nick Nick Alice', 'Vince Vaughn', 'James Marsden',
      'Eiza González', 'Stephen Root', 'Time Travel', 'Comedy', 'Entertainment',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hulu Drops Red Band Trailer for Mike & Nick & Nick & Alice',
    description:
      'Vince Vaughn. James Marsden. A time machine. A cannibal assassin. Hulu\'s R-rated time-loop comedy hits theaters April 18, 2026.',
    images: [IMAGE_URL],
  },
};

export default function HuluMikeNickPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Hulu Releases Red Band Trailer for Mike & Nick & Nick & Alice — Vince Vaughn and James Marsden Time-Travel Comedy"
        description="Hulu published the official red band trailer for Mike & Nick & Nick & Alice on March 1, 2026, starring Vince Vaughn and James Marsden in an R-rated action-comedy about two criminal best friends, a time machine, and a cannibal assassin. Theatrical release April 18, 2026."
        author="ObjectWire Entertainment Desk"
        authorUrl="https://www.objectwire.org/team"
        publishedTime="2026-03-02T12:00:00Z"
        modifiedTime="2026-03-02T12:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Entertainment"
        keywords={[
          'Mike Nick Nick Alice Hulu 2026',
          'Vince Vaughn James Marsden time travel comedy',
          'Hulu red band trailer March 2026',
          'BenDavid Grabinski film',
          'time loop action comedy',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Entertainment', item: '/entertainment' },
              { name: 'Hulu', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Hulu Releases Red Band Trailer for Mike & Nick & Nick & Alice — Vince Vaughn and James Marsden in an R-Rated Time-Travel Comedy"
        subtitle="Hulu published the official red band trailer on March 1, 2026, for the action-comedy starring Vince Vaughn and James Marsden as criminal best friends caught in a time loop involving a cannibal assassin. Theatrical release is set for April 18, 2026."
        category="Entertainment"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="March 2, 2026"
        readTime="5 min read"
        trending
        author={{
          name: 'ObjectWire Entertainment Desk',
          role: 'Entertainment Reporter',
        }}
        thumbnail={{
          src: '/entertainment/vaughn-marsden.PNG',
          alt: 'Vince Vaughn and James Marsden in Mike & Nick & Nick & Alice — Hulu 2026',
        }}
        tags={[
          'Hulu', 'Mike Nick Nick Alice', 'Vince Vaughn', 'James Marsden',
          'Eiza González', 'Stephen Root', 'Time Loop', 'Comedy', 'Entertainment',
          'Red Band Trailer', 'April 2026', 'BenDavid Grabinski',
        ]}
      >

        {/* YouTube Embed */}
        <div className="not-prose my-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/pI-2t18TXqs"
              title="Mike & Nick & Nick & Alice — Official Red Band Trailer | Hulu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center italic">
            Official red band trailer for Mike &amp; Nick &amp; Nick &amp; Alice. Published by Hulu on March 1, 2026.
          </p>
        </div>

        {/* Lede */}
        <p>
          <strong>Hulu</strong> published the official red band trailer for{' '}
          <em>Mike &amp; Nick &amp; Nick &amp; Alice</em> on{' '}
          <strong>March 1, 2026</strong>, providing the first extended footage of the R-rated
          action-comedy starring <strong>Vince Vaughn</strong> and{' '}
          <strong>James Marsden</strong>. Directed and written by{' '}
          <strong>BenDavid Grabinski</strong>, the film centers on two criminal best friends —
          Nick (Vaughn) and Mike (Marsden) — along with Alice (<strong>Eiza González</strong>),
          the woman both men love, as they navigate a single chaotic night involving a time
          machine and a cannibal assassin portrayed by <strong>Stephen Root</strong>.
        </p>
        <p>
          The trailer highlights time-loop elements, graphic violence, and rapid-fire dialogue,
          consistent with the red band rating that permits unrestricted strong language and
          gore. The film is scheduled for <strong>theatrical release on April 18, 2026</strong>,
          followed by streaming availability on Hulu approximately 45 days later, following the
          standard Hulu theatrical-to-streaming window.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>At a Glance:</strong> Red band trailer dropped March 1, 2026 &bull; Director:
          BenDavid Grabinski &bull; Stars: Vince Vaughn, James Marsden, Eiza González, Stephen
          Root &bull; In theaters: April 18, 2026 &bull; Streaming: Hulu (~45 days post-theatrical)
          &bull; 2.8M trailer views in first 24 hours.
        </HighlightBox>

        {/* Plot Summary */}
        <h2>Plot Summary</h2>
        <p>
          The story follows career criminals Nick and Mike, lifelong friends who share a
          complicated romantic history with Alice. When Mike is killed by a cannibalistic hitman
          during a botched job, Nick discovers a working time machine and repeatedly travels back
          to the same night in an attempt to alter the outcome and save his friend.
        </p>
        <p>
          Each loop introduces new complications, escalating body counts, and shifting alliances.
          The trailer shows multiple iterations of the same violent sequence, with characters
          aware of prior resets in later cycles — a structure similar to time-loop films such as{' '}
          <em>Edge of Tomorrow</em> and <em>Palm Springs</em>. Stephen Root appears as the
          relentless assassin who consumes parts of his victims, adding a horror-comedy element
          to the gangster premise.
        </p>

        {/* Cast and Creative */}
        <h2>Cast and Creative Team</h2>
        <ul>
          <li>
            <strong>Vince Vaughn as Nick</strong> — the more impulsive of the two friends who
            first discovers the time machine.
          </li>
          <li>
            <strong>James Marsden as Mike</strong> — the more calculated partner whose death
            triggers the loops.
          </li>
          <li>
            <strong>Eiza González as Alice</strong> — the shared romantic interest caught between
            the duo.
          </li>
          <li>
            <strong>Stephen Root as the cannibal assassin</strong> — the primary antagonist
            across timelines.
          </li>
          <li>
            Supporting cast: <strong>Beck Bennett</strong>, <strong>Dove Cameron</strong>, and{' '}
            <strong>Lamorne Morris</strong>.
          </li>
        </ul>
        <p>
          BenDavid Grabinski serves as writer and director, marking his feature directorial
          debut after writing credits on <em>The Sleepover</em> (2020) and{' '}
          <em>The Babysitter: Killer Queen</em> (2020). The film is produced by{' '}
          <strong>Broken Road Productions</strong> (Adam Sandler&apos;s company) and{' '}
          <strong>Endeavor Content</strong>, with Netflix originally developing the project
          before it moved to Hulu.
        </p>

        {/* Production Timeline */}
        <h2>Production and Release Timeline</h2>

        <Timeline
          events={[
            {
              time: 'Spring 2025',
              title: 'Principal Photography',
              description:
                'Filmed in Los Angeles under the working title Time Loop Gangsters.',
            },
            {
              time: 'Late 2025',
              title: 'Post-Production Wrap',
              description: 'Editing and post-production completed ahead of 2026 marketing push.',
            },
            {
              time: 'February 9, 2026',
              title: 'Super Bowl LIX Teaser',
              description:
                'First teaser images and spot released during Super Bowl LIX.',
            },
            {
              time: 'March 1, 2026',
              title: 'Official Red Band Trailer',
              description:
                'Full red band trailer debuted on Hulu\'s YouTube channel and social platforms — 2.8 million views in first 24 hours.',
            },
            {
              time: 'April 18, 2026',
              title: 'Nationwide Theatrical Release',
              description: 'Opens in theaters nationwide.',
            },
            {
              time: 'Early June 2026 (est.)',
              title: 'Hulu Streaming Premiere',
              description:
                'Approximately 45 days after theatrical release, following standard Hulu distribution window.',
            },
          ]}
        />

        {/* Comparable Films */}
        <h2>Comparable Time-Loop and Action-Comedy Films</h2>
        <p>
          Recent films in the time-loop action-comedy subgenre provide useful benchmarks for
          how <em>Mike &amp; Nick &amp; Nick &amp; Alice</em> might perform:
        </p>

        {/* Comparison Table */}
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="text-left px-5 py-3 font-semibold">Film</th>
                <th className="text-left px-5 py-3 font-semibold">Year</th>
                <th className="text-right px-5 py-3 font-semibold">Box Office / Result</th>
                <th className="text-right px-5 py-3 font-semibold">Critic Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                { film: 'Palm Springs', year: '2020', result: '$1.8M theatrical + Hulu hit', score: '—' },
                { film: 'Happy Death Day', year: '2017', result: '$125M worldwide', score: '71%' },
                { film: 'Boss Level', year: '2021', result: '$1.2M domestic', score: '74%' },
                { film: 'The Map of Tiny Perfect Things', year: '2021', result: 'Amazon streaming', score: '87%' },
                { film: 'The Dead Don\'t Die', year: '2019', result: 'Limited theatrical', score: '54%' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-5 py-3 font-medium text-gray-900">{row.film}</td>
                  <td className="px-5 py-3 text-gray-600">{row.year}</td>
                  <td className="px-5 py-3 text-right text-gray-700">{row.result}</td>
                  <td className="px-5 py-3 text-right text-gray-700">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          <em>Mike &amp; Nick &amp; Nick &amp; Alice</em> combines the time-loop mechanic with
          R-rated gangster violence, placing it closer to{' '}
          <em>Happy Death Day</em> in tone and potential commercial scale than the quieter,
          romance-driven entries in the subgenre.
        </p>

        <HighlightBox type="quote" color="purple">
          When two best friends share a girl and a time machine but not the same night twice,
          the only thing looping faster than the plot is the body count.
        </HighlightBox>

        <p>
          For more Hulu originals and streaming news, visit the{' '}
          <Link href="/entertainment" className="text-purple-600 font-medium hover:underline">
            ObjectWire Entertainment desk
          </Link>
          .
        </p>
      </NewsArticle>
    </SEOWrapper>
  );
}
