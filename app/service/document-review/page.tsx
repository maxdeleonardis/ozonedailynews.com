import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/document-review';

export const metadata: Metadata = {
  title: 'Document Review and FOIA | ObjectWire Investigative Services',
  description:
    'Submit public records, FOIA documents, financial filings, or leaked materials for ObjectWire investigative review. Austin TX-based investigative media team handles all document types securely.',
  keywords: [
    'document review investigative journalism',
    'FOIA request assistance Austin TX',
    'submit documents newsroom Austin',
    'public records review Texas',
    'FOIA Austin Texas',
    'leaked documents newsroom',
    'investigative document analysis Austin',
    'ObjectWire document review',
    'public records journalism Texas',
    'FOIA journalism Austin',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Document Review and FOIA | ObjectWire Investigative Services',
    description: 'Submit records, FOIA filings, or leaked materials for investigation. ObjectWire\'s Austin team handles documents securely and legally.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Review and FOIA | ObjectWire Austin',
    description: 'Submit public records, FOIA documents, or leaked materials to ObjectWire\'s investigative team.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Document Review and FOIA Assistance',
  description: 'Secure document submission, public records review, and FOIA assistance for investigative journalism purposes. Austin, Texas.',
  serviceType: 'Document Review and FOIA',
  areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  provider: {
    '@type': ['LocalBusiness', 'NewsMediaOrganization'],
    name: 'ObjectWire',
    url: 'https://www.objectwire.org',
  },
  url: PAGE_URL,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.objectwire.org' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.objectwire.org/service' },
    { '@type': 'ListItem', position: 3, name: 'Document Review and FOIA', item: PAGE_URL },
  ],
};

export default function DocumentReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServicePage
        icon="📁"
        title="Document Review and FOIA | ObjectWire"
        subtitle="Submit public records, financial filings, FOIA responses, or leaked materials for analysis by ObjectWire's investigative team. All documents handled securely and legally."
        category="Media Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Services' },
          { href: '/service/document-review', label: 'Document Review and FOIA' },
        ]}
        stats={[
          { value: 'Secure', label: 'Encrypted Storage' },
          { value: 'FOIA', label: 'Assistance' },
          { value: 'Metadata', label: 'Stripped on Receipt' },
          { value: 'Free', label: 'Review' },
        ]}
        infoRows={[
          { label: 'Metadata', value: 'Stripped on receipt' },
          { label: 'Access', value: 'Editorial team only' },
          { label: 'Storage', value: 'Encrypted, limited retention' },
          { label: 'Legal review', value: 'Performed before publication' },
        ]}
        tableOfContents={[
          { id: 'what-we-accept', label: 'Document Types Accepted' },
          { id: 'foia', label: 'FOIA and Public Records' },
          { id: 'handling', label: 'How We Handle Documents' },
          { id: 'legal', label: 'Legal Considerations' },
          { id: 'metadata', label: 'Stripping Metadata Before You Submit' },
          { id: 'submit', label: 'How to Submit' },
        ]}
        relatedServices={[
          { href: '/service/tip-the-newsroom', icon: '📨', label: 'Tip the Newsroom', desc: 'Submit a confidential news tip.' },
          { href: '/service/investigative-reporting', icon: '📰', label: 'Investigative Reporting', desc: 'How ObjectWire investigates.' },
          { href: '/service/digital-forensics', icon: '💻', label: 'Digital Forensics', desc: 'OSINT and digital evidence analysis.' },
          { href: '/service/corporate-investigations', icon: '🏢', label: 'Corporate Investigations', desc: 'Private corporate case work.' },
        ]}
        ctaHeading="Submit Documents for Review"
        ctaBody="Contact us via the secure consultation page and indicate you are submitting materials for editorial review. We will establish a safe transfer method."
      >
        <ServiceSection id="what-we-accept" title="Document Types We Accept | What to Submit">
          <p>
            ObjectWire's investigative team analyzes public records, leaked materials, and submitted
            documents as the evidentiary backbone of published investigations. We accept:
          </p>
          <ul className="space-y-2 mt-2">
            <li><strong>FOIA responses and public records</strong> — federal, state, and local agency responses to Freedom of Information requests</li>
            <li><strong>Financial filings</strong> — SEC filings, 990s, campaign finance disclosures, property records, UCC filings</li>
            <li><strong>Corporate documents</strong> — contracts, NDAs, board minutes, internal memos, termination records</li>
            <li><strong>Government records</strong> — meeting agendas, public budgets, zoning filings, licensing records</li>
            <li><strong>Legal filings</strong> — court complaints, pleadings, judgments, deposition transcripts</li>
            <li><strong>Communications</strong> — emails, text messages, or screenshots of relevant correspondence</li>
            <li><strong>Photographic or video evidence</strong> — timestamped images or recordings of events, conditions, or conduct</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="foia" title="FOIA and Public Records | How ObjectWire Uses Public Filings">
          <p>
            Public records are the foundation of most ObjectWire investigations. We file FOIA requests
            with federal agencies under 5 U.S.C. § 552 and Texas Public Information Act requests with
            state and local agencies under Texas Government Code Chapter 552. Responses to these
            requests are analyzed for patterns, inconsistencies, and evidence that supports or
            contradicts official accounts.
          </p>
          <p>
            If you have already filed a FOIA request and received a response you believe contains
            evidence of wrongdoing, submit it to us for review. Our team will analyze the records and
            determine whether a public interest story exists within the disclosed materials.
          </p>
          <p>
            If you are aware of a public record that has not been requested but likely contains relevant
            information, contact us via the{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              tip page
            </Link>{' '}
            and we will initiate the appropriate request.
          </p>
        </ServiceSection>

        <ServiceSection id="handling" title="How We Handle Documents | Security and Access Controls">
          <p>
            Documents submitted to ObjectWire are handled under strict access controls. Only members
            of the editorial team directly involved in the related investigation have access to submitted
            materials. Documents are stored in encrypted environments and are not retained beyond the
            conclusion of the related investigation unless the source authorizes longer-term storage.
          </p>
          <p>
            We strip metadata from received documents on intake. This includes EXIF data from images,
            document author fields, revision history in PDFs and Office files, and printer-tracking dots
            in scanned materials where technically feasible.
          </p>
          <p>
            We do not share submitted documents with third parties, law enforcement, or subjects of
            stories without explicit source authorization or a valid court order. In the event we
            receive a subpoena, we consult legal counsel before complying and notify the source to the
            extent legally permitted.
          </p>
        </ServiceSection>

        <ServiceSection id="legal" title="Legal Considerations | What Sources Should Know">
          <p>
            Submitting documents that belong to an employer, a government agency, or a third party
            can carry legal risk depending on how those documents were obtained. ObjectWire is not
            your attorney and this page is not legal advice.
          </p>
          <p>
            Before submitting documents taken from an employer's systems, review any confidentiality
            agreements or employment contracts you are subject to. Texas and federal whistleblower
            protection statutes may protect certain disclosures, but the scope of those protections
            depends on the specific facts of your situation.
          </p>
          <p>
            If you are concerned about legal exposure from submitting documents, consult an employment
            or media law attorney before submission. ObjectWire can refer you to Texas media law
            resources on request.
          </p>
          <p>
            Once documents are legally in our possession and relevant to a matter of public interest,
            we have the right to analyze and publish the information they contain. The source's act of
            submission and our act of publication are legally distinct.
          </p>
        </ServiceSection>

        <ServiceSection id="metadata" title="Stripping Metadata Before You Submit | Protecting Yourself">
          <p>
            Digital documents contain hidden metadata that can identify who created, modified, or
            printed them. Before submitting sensitive documents, strip this metadata to reduce your
            exposure. Recommended free tools:
          </p>
          <ul className="space-y-2 mt-2">
            <li>
              <a
                href="https://exiftool.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                ExifTool
              </a>{' '}
              — command-line tool for stripping EXIF and metadata from images and PDFs
            </li>
            <li><strong>Adobe Acrobat</strong> — Document Properties &gt; Description &gt; remove author, creation date, and application name before saving</li>
            <li><strong>Microsoft Office</strong> — File &gt; Info &gt; Check for Issues &gt; Inspect Document &gt; Remove All, then Save As a new file</li>
            <li><strong>Printed and scanned documents</strong> — laser printer tracking dots cannot be fully removed; scan in grayscale at low DPI and crop margins to reduce dot visibility</li>
          </ul>
          <p className="mt-3">
            For full secure submission guidance, see the{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              tip the newsroom page
            </Link>
            .
          </p>
        </ServiceSection>

        <ServiceSection id="submit" title="How to Submit Documents | Contact and Channels">
          <p>
            To submit documents for investigative review, use the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              contact page
            </Link>{' '}
            and indicate you are submitting materials for editorial review. For sensitive submissions,
            request a secure channel before transmitting files. We will establish a secure transfer
            method appropriate to your situation.
          </p>
          <p>
            If your documents relate to a tip you have already submitted, reference your original
            submission so we can connect the records to the active investigation. If this is your first
            contact, provide context on what the documents show and how you obtained them.
          </p>
          <p>
            For our full investigative process, see the{' '}
            <Link href="/service/investigative-reporting" className="text-blue-600 hover:text-blue-800 underline">
              investigative reporting overview
            </Link>
            . For digital evidence and OSINT analysis, see{' '}
            <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
              digital forensics
            </Link>
            .
          </p>
        </ServiceSection>
      </ServicePage>
    </>
  );
}
