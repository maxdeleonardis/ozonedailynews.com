import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/editorial-standards';

export const metadata: Metadata = {
  title: 'Editorial Standards | OzoneNews',
  description:
    'How OzoneNews reports, sources, verifies, and corrects. Our standards on accuracy, attribution, AI use, Information Gain, and conflicts of interest.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Editorial Standards | OzoneNews',
    description: 'How OzoneNews reports, sources, verifies, corrects, and applies AI policy.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Standards | OzoneNews',
    description: 'How OzoneNews reports, sources, verifies, and corrects.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ozonenetwork.news' },
    { '@type': 'ListItem', position: 2, name: 'Editorial Standards', item: PAGE_URL },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'Editorial Standards | OzoneNews',
  description: 'OzoneNews editorial policy covering accuracy, sourcing, AI use, Information Gain, and corrections.',
  publisher: {
    '@type': 'NewsMediaOrganization',
    name: 'OzoneNews',
    legalName: 'Ozone Network News LLC',
    url: 'https://www.ozonenetwork.news',
  },
};

export default function EditorialStandardsPage() {
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
            { name: 'Editorial Standards', item: '/editorial-standards' },
          ]}
        />
      </div>

      <article className="container mx-auto px-4 max-w-3xl pb-20 pt-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3 font-mono">
          Editorial Policy
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          OzoneNews Editorial Standards
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          Accuracy over speed. Primary sources only. Transparent corrections. These are not slogans, they
          are the rules every OzoneNews reporter and editor works by, enforced on every publish.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">

          <h2>0. Information Gain requirement (post-March 2026)</h2>
          <p>
            Following the Google March 2026 Core Update, every article published on the Ozone Network
            must contain at least one piece of <strong>Information Gain</strong>, original content that
            does not exist anywhere else on the open web. Generic AI rewrites of existing articles are
            not journalism and will not be published.
          </p>
          <p>Every article must contain at least one of the following before publication:</p>
          <ul>
            <li>An original quote from a named source obtained through direct contact</li>
            <li>A contrarian perspective with explicit reasoning not present in the source reporting</li>
            <li>A custom chart, raw data screenshot, or primary-source dataset the wider web has not summarized</li>
            <li>A &ldquo;Why This Matters&rdquo; section written by a human editor tying the story to a macro trend</li>
          </ul>
          <p>
            <strong>Banned transition phrases.</strong> The following phrases are prohibited in all published
            article body copy. They are markers of low-effort AI generation and will cause the
            prebuild lint to fail:
          </p>
          <ul>
            <li>&ldquo;In conclusion&rdquo;</li>
            <li>&ldquo;It is important to note&rdquo;</li>
            <li>&ldquo;It is important to remember&rdquo;</li>
            <li>&ldquo;Furthermore, it is crucial&rdquo;</li>
            <li>&ldquo;In today&rsquo;s fast-paced world&rdquo;</li>
            <li>&ldquo;In the ever-evolving landscape&rdquo;</li>
            <li>&ldquo;It is worth noting that&rdquo;</li>
            <li>&ldquo;Moreover, it should be noted&rdquo;</li>
            <li>&ldquo;Navigating the complex&rdquo;</li>
            <li>&ldquo;Delve into&rdquo;</li>
            <li>&ldquo;In summary&rdquo;</li>
          </ul>

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
            OzoneNews reporters and editors disclose any financial or personal interest that could
            reasonably be perceived as a conflict with their reporting. Reporters do not cover companies
            in which they hold individual stock positions. Crypto holdings are disclosed when relevant to
            coverage.
          </p>
          <p>
            OzoneNews as an organization accepts no advertising, sponsored content, or political
            donations. See our{' '}
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              ownership and funding disclosure
            </Link>
            .
          </p>

          <h2>6. AI use in the newsroom</h2>
          <p>
            AI tools are used internally for research assistance, transcription, and first-draft
            structuring. AI is <strong>never</strong> used to generate published article copy without
            human editorial review and complete rewrite by the named reporter. Every published sentence
            is written or substantially edited by a named human reporter who is accountable for it.
            We do not use AI to fabricate quotes, invent sources, or produce synthetic data.
          </p>
          <p>
            The Ozone Network does not publish fully automated AI-generated articles. Every article that
            uses AI assistance must have measurable Information Gain added by a human before publish
            (see Section 0 above).
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
            When OzoneNews reports a substantive claim about a person or organization, we contact the
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
            Last updated: May 19, 2026. Published by Ozone Network News LLC, Austin, Texas. Material
            changes to this policy are committed to the public repository.
          </p>
        </div>
      </article>
    </main>
  );
}
