import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/service/tip-the-newsroom';

export const metadata: Metadata = {
  title: 'Tip the Newsroom | Submit a Confidential News Tip',
  description:
    'Submit a confidential news tip to OzoneNews. We protect sources. Share documents, whistleblower information, or story leads about wrongdoing, fraud, or public interest matters in Austin and Texas.',
  keywords: [
    'tip the newsroom Austin',
    'submit news tip Austin TX',
    'confidential news tip Texas',
    'whistleblower Austin Texas',
    'anonymous news tip Austin',
    'OzoneNews news tip',
    'report wrongdoing Austin',
    'investigative tip Austin',
    'source protection news Texas',
    'submit documents newsroom',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tip the Newsroom | Submit a Confidential News Tip',
    description: 'Submit a tip to OzoneNews\'s investigative team. We protect sources and pursue stories the public deserves to know.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tip the Newsroom | OzoneNews',
    description: 'Submit a confidential tip to OzoneNews. Source protection guaranteed.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tip the Newsroom',
  description: 'Secure and confidential news tip submission for OzoneNews\'s investigative journalism team. Source protection guaranteed.',
  serviceType: 'Newsroom Tip Submission',
  areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  provider: {
    '@type': ['LocalBusiness', 'NewsMediaOrganization'],
    name: 'OzoneNews',
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
    { '@type': 'ListItem', position: 3, name: 'Tip the Newsroom', item: PAGE_URL },
  ],
};

export default function TipTheNewsroomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ArticlePage
        title="Tip the Newsroom | Submit a Confidential News Tip"
        subtitle="OzoneNews protects sources. If you have information about wrongdoing, fraud, or a story the public deserves to know, we want to hear from you."
        category="Media Services"
        lastUpdated="May 4, 2026"
        slug="service-tip-the-newsroom"
        url="/service/tip-the-newsroom"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Services' },
          { href: '/service/tip-the-newsroom', label: 'Tip the Newsroom' },
        ]}
        infoBox={{
          title: 'Tip Submission',
          sections: [
            {
              heading: 'What Makes a Strong Tip',
              list: [
                'First-hand knowledge of events',
                'Supporting documents or records',
                'Specific names, dates, and places',
                'Multiple independent sources',
                'A public interest angle',
              ],
            },
            {
              heading: 'Source Protection',
              items: [
                { label: 'Confidentiality', value: 'Guaranteed when requested' },
                { label: 'Anonymous tips', value: 'Accepted' },
                { label: 'Document handling', value: 'Secure, limited access' },
                { label: 'Disclosure', value: 'Never without permission' },
              ],
            },
            {
              heading: 'Related',
              links: [
                { href: '/service/investigative-reporting', label: 'How We Investigate' },
                { href: '/service/document-review', label: 'Share Documents' },
                { href: '/investigations', label: 'Published Investigations' },
              ],
            },
          ],
        }}
        tableOfContents={[
          { id: 'what-we-need', label: 'What We Need From You' },
          { id: 'strong-tip', label: 'What Makes a Strong Tip' },
          { id: 'source-protection', label: 'Source Protection Policy' },
          { id: 'secure-submission', label: 'How to Submit Securely' },
          { id: 'what-happens', label: 'What Happens After You Tip' },
          { id: 'documents', label: 'Sharing Documents' },
        ]}
        relatedLinks={[
          { href: '/service', label: 'All Services', description: 'PI and media services' },
          { href: '/service/investigative-reporting', label: 'Investigative Reporting', description: 'How OzoneNews investigates' },
          { href: '/service/document-review', label: 'Document Review', description: 'Submit records for analysis' },
          { href: '/investigations', label: 'Our Investigations', description: 'Published investigative reporting' },
          { href: '/editorial-standards', label: 'Editorial Standards', description: 'Our accuracy and ethics policy' },
        ]}
        backLink={{ href: '/service', label: 'Services' }}
      >
        <Section id="what-we-need" title="What We Need From You | Starting a Tip">
          <p>
            OzoneNews investigates matters of genuine public interest. To begin an investigation we
            need more than a vague concern. The stronger your tip, the faster and more thoroughly we
            can act on it. Anonymous tips are accepted, but named sources with supporting documentation
            allow us to move faster and publish more.
          </p>
          <p>
            Before submitting, ask yourself: Is there a specific person, organization, or event at the
            center of this? Do you have documents, records, or direct knowledge? Is there a harm to the
            public, a community, or an identifiable group of people? If yes to all three, your tip is
            worth submitting.
          </p>
        </Section>

        <Section id="strong-tip" title="What Makes a Strong Tip | Qualities That Move Stories Forward">
          <p>The tips that result in published investigations typically have most of the following:</p>
          <ul className="space-y-2 mt-2">
            <li><strong>First-hand knowledge</strong> — you witnessed it, participated in it, or have direct access to someone who did</li>
            <li><strong>Supporting documents</strong> — contracts, emails, financial records, filings, photographs, or other physical evidence</li>
            <li><strong>Specificity</strong> — named people, organizations, dates, dollar amounts, and locations</li>
            <li><strong>A public interest angle</strong> — public money, public trust, public safety, or elected/appointed officials involved</li>
            <li><strong>Corroboratable claims</strong> — something that can be verified through independent records or additional sources</li>
          </ul>
          <p className="mt-3">
            Tips that are vague, entirely anonymous with no documents, or based on personal grievance
            without a public interest angle are harder to pursue. We will still log them, and if a
            pattern emerges from multiple tips on the same subject, we may initiate an investigation.
          </p>
        </Section>

        <Section id="source-protection" title="Source Protection Policy | OzoneNews's Commitment">
          <p>
            OzoneNews does not disclose source identities without explicit permission from the source.
            This commitment is unconditional for sources who request confidentiality at the time of
            submission. We do not negotiate source identities with subjects of stories, law enforcement,
            or legal counsel absent a valid court order.
          </p>
          <p>
            Sources who provide information under a confidentiality agreement are referenced in published
            stories only as "a source with direct knowledge" or similar attribution that does not
            identify them. We do not include identifying details that could be traced back to a source's
            position, location, or access level without their approval.
          </p>
          <p>
            If you are a whistleblower in an employment context, we recommend consulting an employment
            attorney before submission. OzoneNews can provide information about federal and Texas
            whistleblower protection statutes on request.
          </p>
        </Section>

        <Section id="secure-submission" title="How to Submit Securely | Protecting Your Identity">
          <p>
            For tips involving significant personal risk, use the following practices to reduce your
            exposure before contacting us:
          </p>
          <ul className="space-y-2 mt-2">
            <li><strong>Device</strong> — use a device not issued by your employer. Personal phone or personal computer only.</li>
            <li><strong>Network</strong> — avoid your home WiFi or work network. Submit from a public network or cellular data not tied to your employer account.</li>
            <li><strong>Email</strong> — use a new email address created for this purpose, not your personal or work email.</li>
            <li><strong>Documents</strong> — strip metadata from PDFs and images before attaching. Free tools like ExifTool or Adobe Acrobat can do this.</li>
            <li><strong>VPN</strong> — use a reputable VPN service to mask your IP address during submission.</li>
          </ul>
          <p className="mt-3">
            For extremely sensitive matters, contact us via the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            and request a secure communication channel to be established before you transmit any documents.
          </p>
        </Section>

        <Section id="what-happens" title="What Happens After You Tip | The Follow-Up Process">
          <p>
            Every tip received by OzoneNews is logged and reviewed by the editorial team within 5
            business days. We evaluate the public interest angle, the quality of supporting evidence,
            and the feasibility of independent verification.
          </p>
          <p>
            If we move forward with an investigation, a reporter will contact you via the channel you
            used to submit, or a secure channel we establish together. Not all tips result in a story.
            We do not publish tips that cannot be independently verified, regardless of how credible the
            source appears.
          </p>
          <p>
            Subjects of investigations are always given an opportunity to respond before publication.
            Their response, or their refusal to respond, becomes part of the public record.
          </p>
        </Section>

        <Section id="documents" title="Sharing Documents | Records, FOIA Files, and Leaked Materials">
          <p>
            OzoneNews accepts documents, filings, financial records, photographs, and other materials
            relevant to matters of public interest. For full guidance on document submission, metadata
            stripping, and how we handle third-party records legally, visit the{' '}
            <Link href="/service/document-review" className="text-blue-600 hover:text-blue-800 underline">
              document review and FOIA page
            </Link>
            .
          </p>
          <p>
            To begin a tip submission or request a secure channel, use the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              contact page
            </Link>
            . For our full investigative reporting process, see the{' '}
            <Link href="/service/investigative-reporting" className="text-blue-600 hover:text-blue-800 underline">
              investigative reporting overview
            </Link>
            .
          </p>
        </Section>
      </ArticlePage>
    </>
  );
}
