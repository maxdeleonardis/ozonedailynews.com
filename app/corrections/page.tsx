import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/corrections';

export const metadata: Metadata = {
  title: 'Corrections Policy',
  description:
    'How ObjectWire handles corrections. Errors are fixed publicly, timestamped, and the original text is preserved. Report an issue here.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Corrections Policy',
    description: 'How ObjectWire handles corrections. Errors fixed publicly and timestamped.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corrections Policy',
    description: 'How ObjectWire handles corrections. Errors fixed publicly and timestamped.',
  },
};

export default function CorrectionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 pt-4 max-w-3xl">
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            { name: 'Corrections', item: '/corrections' },
          ]}
        />
      </div>

      <article className="container mx-auto px-4 max-w-3xl pb-20 pt-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3 font-mono">
          Corrections Policy
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          How ObjectWire handles corrections
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          We make mistakes. Hiding them is not acceptable. Every error is corrected publicly,
          timestamped, and the original text is preserved alongside the corrected version.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>What we correct</h2>
          <ul>
            <li>Factual errors (names, numbers, dates, titles, locations, attributions)</li>
            <li>Misquotations or misleading paraphrases</li>
            <li>Misrepresentation of source documents</li>
            <li>Headline or subhead claims that overstate the reporting</li>
            <li>Material omissions that change the meaning of a story</li>
          </ul>

          <h2>How a correction looks on the page</h2>
          <p>
            When an article is corrected, the article body is updated and a clearly labeled
            <strong> Correction</strong> note is appended at the top of the article. The note includes:
          </p>
          <ul>
            <li>The date and time of the correction (UTC)</li>
            <li>The exact original text that was wrong</li>
            <li>The corrected text</li>
            <li>A short explanation of why the change was made</li>
          </ul>
          <p>
            The original byline remains. Editorial responsibility is not anonymized. For substantive
            corrections (a wrong central claim, a mis-identified subject), we also publish the correction
            on our public corrections log on this page.
          </p>

          <h2>What is not a correction</h2>
          <p>
            Routine updates as a story develops (new statements, follow-on reporting, additional context)
            are added with an <strong>Update</strong> timestamp, not a correction note. Typo fixes that
            do not change meaning are made silently. Style edits do not require a note.
          </p>

          <h2>How to report an error</h2>
          <p>If you believe ObjectWire has published something inaccurate, contact us with:</p>
          <ul>
            <li>The article URL</li>
            <li>The specific claim or sentence at issue</li>
            <li>The source or document that contradicts it</li>
            <li>Your name and how to reach you (we may need to follow up)</li>
          </ul>
          <p>
            Email:{' '}
            <a
              href="mailto:corrections@objectwire.org"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              corrections@objectwire.org
            </a>
            . We aim to acknowledge correction requests within 48 hours and to publish a correction or a
            written response within 5 business days.
          </p>

          <h2>Right of reply</h2>
          <p>
            If you are the subject of an ObjectWire article and were not contacted before publication, or
            if your response was not adequately reflected, write to{' '}
            <a
              href="mailto:editorial@objectwire.org"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              editorial@objectwire.org
            </a>
            . We will review and, where warranted, update the article with your response and a
            timestamp.
          </p>

          <h2>Removals and unpublishing</h2>
          <p>
            We do not unpublish articles to satisfy reputational requests. Removal is reserved for
            narrow, defined cases: legal compulsion, doxxing risk to a private individual, or a story
            built on a source we later determine fabricated material. In every removal case, we publish a
            short notice at the original URL explaining that the article was removed and why.
          </p>

          <h2>Editorial standards</h2>
          <p>
            For the full set of rules our reporters and editors operate under, see our{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
              editorial standards
            </Link>
            . For ownership and funding, see our{' '}
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              about page
            </Link>
            .
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: April 29, 2026.
          </p>
        </div>
      </article>
    </main>
  );
}
