import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

// Static evergreen page — rendered at build time, no Supabase round-trip.
export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/about';

export const metadata: Metadata = {
  title: 'About OzoneNews',
  description:
    'OzoneNews is a self-funded, nonprofit newsroom focused on verified, source-cited reporting. Read our mission, ownership, and funding.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'About ObjectWire',
    description: 'Self-funded, nonprofit newsroom. Verified, source-cited reporting.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ObjectWire',
    description: 'Self-funded, nonprofit newsroom. Verified, source-cited reporting.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
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
          ObjectWire is an independent, self-funded nonprofit newsroom.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          We exist to publish verified, source-cited reporting. We are not owned by, controlled by, or
          financially tied to any corporation, political party, government, or private investor.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Ownership</h2>
          <p>
            ObjectWire is a formally registered 501(c)(3) nonprofit organization, incorporated in the
            State of Wyoming as <strong>ObjectWire LLC</strong>. There are no outside shareholders,
            parent companies, or holding entities. Editorial decisions are made by named editors whose
            bios are public on our{' '}
            <Link href="/authors" className="text-blue-600 hover:text-blue-800 underline">
              authors page
            </Link>
            .
          </p>

          <h2>Funding</h2>
          <p>ObjectWire is self-funded by its founders and staff. We do not accept:</p>
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
            ObjectWire reports on technology, finance, politics, gaming, entertainment, and culture, with
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
            All ObjectWire reporters publish under their real names with full bios, beats, and contact
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
              , Science and Technology Writer (biotech, medical research, AI hardware)
            </li>
          </ul>

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
            This disclosure page is maintained directly in the ObjectWire codebase. Material changes
            (ownership, funding model, leadership) are committed to the public repository and dated in
            the change log. Last updated: April 29, 2026.
          </p>
        </div>
      </article>
    </main>
  );
}
