import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

// Static evergreen page — rendered at build time, no Supabase round-trip.
export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/about';

export const metadata: Metadata = {
  title: 'About OzoneNews | Ozone Network News LLC',
  description:
    'Ozone Network News LLC is an independent, self-funded newsroom delivering verified, source-cited reporting. Read our mission, ownership, funding, and editorial independence statement.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'About OzoneNews | Ozone Network News LLC',
    description: 'Independent, self-funded newsroom. Verified, source-cited reporting. No advertising, no political donations.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About OzoneNews | Ozone Network News LLC',
    description: 'Independent, self-funded newsroom. Verified, source-cited reporting.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ozonenetwork.news' },
    { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'About OzoneNews | Ozone Network News LLC',
  description: 'Ozone Network News LLC is an independent, self-funded newsroom. Ownership, funding, and editorial independence disclosure.',
  publisher: {
    '@type': 'NewsMediaOrganization',
    name: 'OzoneNews',
    legalName: 'Ozone Network News LLC',
    url: 'https://www.ozonenetwork.news',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <div className="container mx-auto px-4 pt-4 max-w-3xl">
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            { name: 'About', item: '/about' },
          ]}
        />
      </div>

      <article className="container mx-auto px-4 max-w-3xl pb-20 pt-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3 font-mono">
          Ownership and Funding Disclosure
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          About Ozone Network News
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          We exist to publish verified, source-cited reporting. We are not owned by, controlled by, or
          financially tied to any corporation, political party, government, or private investor.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Ownership</h2>
          <p>
            OzoneNews is published by <strong>Ozone Network News LLC</strong>, a limited liability
            company organized and headquartered in <strong>Austin, Texas</strong>. There are no outside
            shareholders, parent companies, or holding entities. Editorial decisions are made by named
            editors whose bios are public on our{' '}
            <Link href="/authors" className="text-blue-600 hover:text-blue-800 underline">
              authors page
            </Link>
            .
          </p>

          <h2>Funding</h2>
          <p>OzoneNews is self-funded by its founders and staff. We do not accept:</p>
          <ul>
            <li>Advertising of any kind</li>
            <li>Sponsored content, native ads, or paid placements</li>
            <li>Affiliate commissions</li>
            <li>Political donations or PAC funding</li>
            <li>Government grants tied to coverage</li>
          </ul>
          <p>
            No outside party has influence over our reporting, editorial decisions, or coverage choices.
            If our funding model ever changes, we will disclose it here before any change takes effect.
          </p>

          <h2>What we cover</h2>
          <p>
            OzoneNews reports on technology, finance, politics, gaming, entertainment, and culture, with
            a focus on stories that can be verified against primary documents: court filings, SEC
            disclosures, government records, peer-reviewed research, and named on-record sources. We do
            not aggregate or rewrite competitors&rsquo; coverage as our own.
          </p>

          <h2>Editorial accountability</h2>
          <ul>
            <li>Every article carries a named author with a public bio.</li>
            <li>Every factual claim is sourced and traceable to a primary document or named source.</li>
            <li>News and analysis are clearly labeled and never blended without disclosure.</li>
            <li>Errors are corrected publicly, timestamped, and the original text is preserved.</li>
          </ul>
          <p>
            Read our{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
              editorial standards
            </Link>{' '}
            and{' '}
            <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
              corrections policy
            </Link>{' '}
            for the full process.
          </p>

          <h2>Our authors</h2>
          <p>
            All OzoneNews reporters publish under their real names with full bios, beats, and contact
            paths:
          </p>
          <ul>
            <li>
              <Link href="/authors/jack-sterling" className="text-blue-600 hover:text-blue-800 underline">
                Jack Sterling
              </Link>
              , Reporter (Congress, federal investigations, AI policy)
            </li>
            <li>
              <Link href="/authors/tina-boyle" className="text-blue-600 hover:text-blue-800 underline">
                Tina Boyle
              </Link>
              , Investigations Reporter (environmental law, national security, regulatory agencies)
            </li>
            <li>
              <Link href="/authors/max-deleonardis" className="text-blue-600 hover:text-blue-800 underline">
                Max DeLeonardis
              </Link>
              , Founding Writer (science, biotechnology, AI hardware, video games) &mdash;{' '}
              <a href="https://x.com/ozonedailynews" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@ozonedailynews</a>
              {' '}&middot;{' '}
              <a href="https://www.linkedin.com/in/maximillion-deleonardis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">LinkedIn</a>
            </li>
          </ul>

          <h2>AI and technology policy</h2>
          <p>
            AI tools are used internally for research assistance, transcription, and first-draft
            structuring. AI is <strong>never</strong> used to generate published article copy without
            human editorial review and rewrite. Every published sentence is the product of a named human
            reporter who is accountable for it. We do not use AI to fabricate quotes, invent sources, or
            produce synthetic data. See our{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
              editorial standards
            </Link>{' '}
            for the full AI policy.
          </p>

          <h2>Contact</h2>
          <p>
            Editorial contact:{' '}
            <a
              href="mailto:editorial@ozonenetwork.news"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              editorial@ozonenetwork.news
            </a>
            . Tips, document leads, and corrections are welcome. We protect source identities.
          </p>

          <h2>Updates to this page</h2>
          <p>
            This disclosure page is maintained directly in the OzoneNews codebase. Material changes
            (ownership, funding model, leadership) are committed to the public repository and dated in
            the change log. Last updated: May 19, 2026.
          </p>
        </div>
      </article>
    </main>
  );
}
