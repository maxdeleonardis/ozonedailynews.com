import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/editorial-standards';

export const metadata: Metadata = {
  title: 'Editorial Standards',
  description:
    'How ObjectWire reports, sources, verifies, and corrects. Our standards on accuracy, attribution, and conflicts of interest.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Editorial Standards',
    description: 'How ObjectWire reports, sources, verifies, and corrects.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Standards',
    description: 'How ObjectWire reports, sources, verifies, and corrects.',
  },
};

export default function EditorialStandardsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 pt-4 max-w-3xl">
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            { name: 'Editorial Standards', item: '/editorial-standards' },
          ]}
        />
      </div>

      <article className="container mx-auto px-4 max-w-3xl pb-20 pt-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3 font-mono">
          Editorial Policy
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          ObjectWire Editorial Standards
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          Accuracy over speed. Primary sources only. Transparent corrections. These are not slogans, they
          are the rules every ObjectWire reporter and editor works by.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Accuracy over speed</h2>
          <p>
            We do not chase breaking news without sourcing. If a story cannot be verified, it does not
            run, regardless of competitive pressure. Speed-to-publish is never a defense for an
            unsupported claim.
          </p>
          <p>
            Every article is reviewed against its source material before publication. Headlines must
            reflect what the article actually establishes, not what the story might suggest.
          </p>

          <h2>2. Primary sources only</h2>
          <p>Reporting must trace back to a primary source. Acceptable primary sources include:</p>
          <ul>
            <li>Court filings, indictments, and dockets</li>
            <li>SEC, FTC, FCC, FEC, and other regulatory disclosures</li>
            <li>Government records, FOIA responses, congressional testimony</li>
            <li>Peer-reviewed research and preprints (clearly labeled)</li>
            <li>Company press releases and earnings reports (labeled as such)</li>
            <li>Named on-record sources speaking from direct knowledge</li>
          </ul>
          <p>
            Aggregating another publication&rsquo;s reporting is not journalism. When we cite another
            outlet, we credit and link to the original, and we do our own verification before repeating
            the claim.
          </p>

          <h2>3. Attribution and sourcing</h2>
          <p>
            Every factual claim must be attributable. If a claim is not in the linked source material,
            it is not in the article. Quotes are reproduced verbatim. We do not clean up quotes to
            sharpen them.
          </p>
          <p>
            Anonymous sources are used only when the information is in the public interest, the source
            faces credible risk for speaking on the record, and a second source or document corroborates
            the claim. The reason for granting anonymity is disclosed in the article.
          </p>

          <h2>4. News versus analysis</h2>
          <p>
            News reporting and analysis are different products and are labeled as such. Opinion is
            labeled opinion. Analysis is labeled analysis. We do not blend reporting and commentary in a
            way that obscures which is which.
          </p>

          <h2>5. Conflicts of interest</h2>
          <p>
            ObjectWire reporters and editors disclose any financial or personal interest that could
            reasonably be perceived as a conflict with their reporting. Reporters do not cover companies
            in which they hold individual stock positions. Crypto holdings are disclosed when relevant to
            coverage.
          </p>
          <p>
            ObjectWire as an organization accepts no advertising, sponsored content, or political
            donations. See our{' '}
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              ownership and funding disclosure
            </Link>
            .
          </p>

          <h2>6. AI use in the newsroom</h2>
          <p>
            AI tools are used internally for research assistance, transcription, and code review. AI is
            not used to generate published article copy or to fabricate quotes, sources, or facts. Every
            published sentence is written or edited by a named human reporter who is accountable for it.
          </p>

          <h2>7. Corrections and accountability</h2>
          <p>
            Errors are inevitable. Hidden errors are not acceptable. Every correction is published
            publicly, timestamped, and the original text is preserved alongside the corrected version.
            See our{' '}
            <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
              corrections policy
            </Link>
            .
          </p>

          <h2>8. Right of reply</h2>
          <p>
            When ObjectWire reports a substantive claim about a person or organization, we contact the
            subject for comment before publication and give a reasonable response window. If a response
            arrives after publication, the article is updated and the update is timestamped.
          </p>

          <h2>9. Source protection</h2>
          <p>
            We protect the identity of confidential sources. We do not turn over notes, drafts, or
            communications to third parties absent a lawful, narrowly-scoped order, and we will resist
            such orders.
          </p>

          <h2>10. Diversity of coverage</h2>
          <p>
            Our coverage decisions aim to reflect the breadth of subjects affected by the stories we
            cover. We seek out perspectives beyond the most easily reachable sources, particularly when
            reporting on policy, technology, and finance stories with disparate impact.
          </p>

          <h2>Contact and questions</h2>
          <p>
            Questions about our standards, or a specific article&rsquo;s sourcing:{' '}
            <a
              href="mailto:editorial@ozonenetwork.news"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              editorial@ozonenetwork.news
            </a>
            .
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: April 29, 2026. Material changes to this policy are committed to the public
            repository.
          </p>
        </div>
      </article>
    </main>
  );
}
