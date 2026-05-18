import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/service/investigative-reporting';

export const metadata: Metadata = {
  title: 'Investigative Reporting Austin TX | ObjectWire',
  description:
    'ObjectWire is an Austin-based investigative media company. We publish source-cited, fact-checked reporting on public figures, institutions, and stories the public deserves to know. Submit a tip or commission a story.',
  keywords: [
    'investigative reporting Austin TX',
    'investigative journalism Austin Texas',
    'Austin investigative media',
    'accountability journalism Austin',
    'Austin news investigation',
    'investigative news Austin TX',
    'local investigative journalism Austin',
    'ObjectWire investigative reporting',
    'submit news tip Austin',
    'whistleblower Austin Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Investigative Reporting Austin TX | ObjectWire',
    description: 'Source-cited, fact-checked accountability journalism from Austin. Submit a tip or learn how ObjectWire investigates.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investigative Reporting Austin TX | ObjectWire',
    description: 'Accountability journalism from Austin, TX. How ObjectWire investigates and how to submit a tip.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Investigative Reporting',
  description: 'Source-cited, fact-checked investigative journalism on public figures, institutions, and matters of public interest in Austin, Texas.',
  serviceType: 'Investigative Journalism',
  areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  provider: {
    '@type': ['LocalBusiness', 'NewsMediaOrganization'],
    name: 'ObjectWire',
    url: 'https://www.ozonenetwork.news',
  },
  url: PAGE_URL,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ozonenetwork.news' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.ozonenetwork.news/service' },
    { '@type': 'ListItem', position: 3, name: 'Investigative Reporting', item: PAGE_URL },
  ],
};

export default function InvestigativeReportingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ArticlePage
        title="Investigative Reporting | ObjectWire Austin"
        subtitle="ObjectWire is an Austin-based investigative media company. We publish source-cited accountability journalism on public figures, institutions, and stories the public deserves to know."
        category="Media Services"
        lastUpdated="May 4, 2026"
        slug="service-investigative-reporting"
        url="/service/investigative-reporting"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Services' },
          { href: '/service/investigative-reporting', label: 'Investigative Reporting' },
        ]}
        infoBox={{
          title: 'Investigative Reporting',
          sections: [
            {
              heading: 'What We Cover',
              list: [
                'Public figures and elected officials',
                'Institutional misconduct',
                'Corporate fraud and consumer harm',
                'Missing persons and cold cases',
                'Financial fraud and white-collar crime',
                'Local Austin and Texas stories',
              ],
            },
            {
              heading: 'Standards',
              items: [
                { label: 'Sources', value: 'Primary only. No aggregation.' },
                { label: 'Verification', value: 'Every factual claim sourced' },
                { label: 'Corrections', value: 'Public, timestamped' },
                { label: 'Anonymity', value: 'Available to sources when warranted' },
              ],
            },
            {
              heading: 'Get Involved',
              links: [
                { href: '/service/tip-the-newsroom', label: 'Submit a Tip' },
                { href: '/service/document-review', label: 'Share Documents' },
                { href: '/investigations', label: 'Read Our Investigations' },
              ],
            },
          ],
        }}
        tableOfContents={[
          { id: 'what-is', label: 'What We Investigate' },
          { id: 'how-we-work', label: 'How We Investigate' },
          { id: 'standards', label: 'Editorial Standards' },
          { id: 'sources', label: 'Working With Sources' },
          { id: 'pi-vs-journalism', label: 'PI Services vs. Journalism' },
          { id: 'contact', label: 'Submit a Tip or Story Lead' },
        ]}
        relatedLinks={[
          { href: '/service', label: 'All Services', description: 'PI and media services' },
          { href: '/service/tip-the-newsroom', label: 'Tip the Newsroom', description: 'Submit a confidential news tip' },
          { href: '/service/document-review', label: 'Document Review', description: 'Share records for investigation' },
          { href: '/investigations', label: 'Our Investigations', description: 'Published investigative reporting' },
          { href: '/service/corporate-investigations', label: 'Corporate Investigations', description: 'Private corporate case work' },
        ]}
        backLink={{ href: '/service', label: 'Services' }}
      >
        <Section id="what-is" title="What We Investigate | Scope of ObjectWire Reporting">
          <p>
            ObjectWire investigates people in power, institutions that affect the public, and stories
            that would otherwise go untold. Our reporting covers Austin and Texas, with national stories
            when the evidence and public interest warrant it.
          </p>
          <ul className="space-y-2 mt-3">
            <li><strong>Public figures and elected officials</strong> — accountability reporting on conduct, finances, and use of public trust</li>
            <li><strong>Institutional misconduct</strong> — government agencies, law enforcement, courts, and public institutions</li>
            <li><strong>Corporate fraud and consumer harm</strong> — businesses that defraud, endanger, or exploit the public</li>
            <li><strong>Missing persons and cold cases</strong> — applying investigative PI methods to public-interest locate stories</li>
            <li><strong>Financial fraud and white-collar crime</strong> — following money trails and document evidence</li>
            <li><strong>Local Austin stories</strong> — city, county, and Travis County accountability</li>
          </ul>
          <p className="mt-3">
            Published investigations are indexed in the{' '}
            <Link href="/investigations" className="text-blue-600 hover:text-blue-800 underline">
              investigations section
            </Link>
            .
          </p>
        </Section>

        <Section id="how-we-work" title="How We Investigate | The ObjectWire Method">
          <p>
            Every ObjectWire investigation begins with a verifiable tip, document, or public record.
            We do not publish based on rumor, single anonymous sources, or unverified claims. The
            investigation methodology borrows directly from licensed PI practice: establish facts first,
            document everything, corroborate independently, and build toward a claim that can withstand
            challenge.
          </p>
          <p>
            Investigations typically combine public records requests, primary source interviews, financial
            document analysis, digital OSINT research via our{' '}
            <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
              digital forensics
            </Link>{' '}
            capability, and, where relevant, physical surveillance by our licensed investigators.
          </p>
          <p>
            Subjects of investigations are always contacted for comment before publication. Responses
            are included in the published record. Corrections are published publicly and timestamped.
            See our{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
              editorial standards
            </Link>{' '}
            for the full policy framework.
          </p>
        </Section>

        <Section id="standards" title="Editorial Standards | Accuracy Over Speed">
          <p>
            ObjectWire publishes when a story is verifiable, not when it is first. We do not chase
            breaking news without primary sourcing. Every factual claim in a published investigation
            is attributed to a named source, a document, or a verified public record.
          </p>
          <p>
            We maintain a{' '}
            <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
              public corrections record
            </Link>
            . Errors are acknowledged, corrected, and the original text is preserved with a timestamp.
            We do not quietly edit published stories to remove mistakes.
          </p>
        </Section>

        <Section id="sources" title="Working With Sources | Confidentiality and Protection">
          <p>
            Sources who provide information to ObjectWire under an expectation of confidentiality are
            protected. We do not disclose source identities without explicit permission. We do not
            store identifying source information in systems that could be compelled in discovery without
            legal counsel review.
          </p>
          <p>
            If you have information about wrongdoing and need to communicate securely, visit the{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              tip the newsroom
            </Link>{' '}
            page for secure submission options and guidance on protecting yourself as a source.
          </p>
        </Section>

        <Section id="pi-vs-journalism" title="PI Services vs. Journalism | Understanding the Difference">
          <p>
            ObjectWire offers both licensed PI services and investigative journalism. These are distinct
            engagements with different outcomes, obligations, and costs.
          </p>
          <p>
            <strong>PI services</strong> are private, confidential, and produce a report for the client.
            The findings remain with the client. Cost is agreed in advance.
          </p>
          <p>
            <strong>Investigative journalism</strong> results in published reporting. The story belongs
            to the public record. Sources are protected but the findings become public. ObjectWire
            decides editorially what to publish and when. Journalism is not commissioned — we pursue
            stories based on public interest, not client payment.
          </p>
          <p>
            If your matter is private and you need results delivered to you confidentially, see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              PI services hub
            </Link>
            . If you have information that the public deserves to know, submit a{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              news tip
            </Link>
            .
          </p>
        </Section>

        <Section id="contact" title="Submit a Tip or Story Lead">
          <p>
            If you have a tip, document, or story lead for ObjectWire's investigative team, visit the{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              tip the newsroom page
            </Link>
            . For document submission and records review, visit the{' '}
            <Link href="/service/document-review" className="text-blue-600 hover:text-blue-800 underline">
              document review page
            </Link>
            . For private investigative services, use the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              PI consultation page
            </Link>
            .
          </p>
        </Section>
      </ArticlePage>
    </>
  );
}
