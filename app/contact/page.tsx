import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const PAGE_URL = 'https://www.ozonenetwork.news/contact';

export const metadata: Metadata = {
  title: 'Contact OzoneNews | Editorial, Corrections, Tips',
  description:
    'Contact the OzoneNews newsroom. Editorial inquiries, corrections, news tips, and general questions. We respond within one business day.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Contact OzoneNews',
    description:
      'Reach the OzoneNews newsroom for editorial inquiries, corrections, and news tips.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary',
    title: 'Contact OzoneNews',
    description: 'Editorial, corrections, tips, and general inquiries.',
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">Home</Link>
        <span className="mx-2">/</span>
        <span>Contact</span>
      </nav>

      <h1 className="text-4xl font-black tracking-tight mb-3">Contact OzoneNews</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
        Reach the OzoneNews newsroom directly. We respond to verified press inquiries, corrections, and news tips within one business day.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Editorial</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Press inquiries, interview requests, story pitches, and general editorial questions.
          </p>
          <p>
            <a
              href="mailto:editorial@ozonenetwork.news"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              editorial@ozonenetwork.news
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Corrections</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Found a factual error in one of our articles? Email us with the article URL and the correction. We log every correction at the top of the amended article with a timestamp, original text preserved.
          </p>
          <p>
            <a
              href="mailto:corrections@ozonenetwork.news"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              corrections@ozonenetwork.news
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Read our full{' '}
            <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
              corrections policy
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">News Tips</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Have a verified tip? Send documents, sourcing, and contact details. Anonymous tips are welcome, but verifiable ones move fastest.
          </p>
          <p>
            <a
              href="mailto:tips@ozonenetwork.news"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              tips@ozonenetwork.news
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">General Inquiries</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Anything else, partnership questions, technical issues with the site, or general feedback.
          </p>
          <p>
            <a
              href="mailto:contact@ozonenetwork.news"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              contact@ozonenetwork.news
            </a>
          </p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-2">Mailing Address</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Ozone Network News LLC<br />
            Austin, Texas, United States
          </p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-3">Related</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
                About OzoneNews
              </Link>
            </li>
            <li>
              <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
                Editorial Standards
              </Link>
            </li>
            <li>
              <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
                Corrections Policy
              </Link>
            </li>
            <li>
              <Link href="/authors" className="text-blue-600 hover:text-blue-800 underline">
                Our Team
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
