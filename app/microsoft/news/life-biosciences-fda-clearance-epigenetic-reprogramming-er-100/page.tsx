import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/microsoft/news/life-biosciences-fda-clearance-epigenetic-reprogramming-er-100';

export const metadata: Metadata = {
  title: 'Life Biosciences Receives FDA Clearance for First Human Trial of Partial Epigenetic Reprogramming Therapy ER-100 | ObjectWire',
  description:
    'The FDA cleared Life Biosciences IND for ER-100, an AAV-delivered OSK gene therapy for partial epigenetic reprogramming targeting glaucoma and NAION. First human trial of cellular rejuvenation.',
  keywords: [
    'Life Biosciences FDA clearance',
    'ER-100 gene therapy',
    'partial epigenetic reprogramming',
    'OSK Yamanaka factors',
    'glaucoma gene therapy',
    'NAION treatment',
    'retinal ganglion cell rejuvenation',
    'cellular rejuvenation human trial',
    'AAV2 OSK gene therapy',
    'optic neuropathy clinical trial',
    'Phase 1 epigenetic reprogramming',
    'Life Biosciences IND approval',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Life Biosciences Receives FDA Clearance for First Human Trial of ER-100 Epigenetic Reprogramming',
    description:
      'FDA clears first human trial of partial epigenetic reprogramming. ER-100 delivers OSK Yamanaka factors via AAV to treat glaucoma and NAION.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Science Desk'],
    publishedTime: '2026-03-05T10:00:00Z',
    modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Science & Biotech',
    tags: ['Life Biosciences', 'ER-100', 'FDA', 'Gene Therapy', 'Epigenetic Reprogramming', 'Glaucoma'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDA Clears First Human Trial of Epigenetic Reprogramming Therapy ER-100',
    description: 'Life Biosciences receives IND clearance for ER-100, delivering OSK Yamanaka factors to treat optic neuropathies.',
  },
};

export default function LifeBiosciencesFDAPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Life Biosciences Receives FDA Clearance for First Human Trial of Partial Epigenetic Reprogramming Therapy ER-100 in Optic Neuropathies"
        description="The FDA cleared Life Biosciences' IND for ER-100, an AAV-delivered OSK gene therapy for partial epigenetic reprogramming, marking the first human trial of cellular rejuvenation."
        author="ObjectWire Science Desk"
        publishedTime="2026-03-05T10:00:00Z"
        modifiedTime="2026-03-05T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Science & Biotech"
        keywords={['Life Biosciences', 'ER-100', 'FDA', 'epigenetic reprogramming', 'OSK', 'glaucoma', 'NAION']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Microsoft', item: '/microsoft' },
              { name: 'News', item: '/microsoft/news' },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Life Biosciences Receives FDA Clearance for First Human Trial of Partial Epigenetic Reprogramming Therapy ER-100 in Optic Neuropathies"
        subtitle="The U.S. Food and Drug Administration cleared Life Biosciences' IND application for ER-100, a gene therapy using AAV2-delivered OCT4, SOX2, and KLF4 to restore youthful epigenetic patterns in retinal ganglion cells."
        category="Science & Biotech"
        categoryColor="purple"
        topicTag="science"
        publishDate="March 5, 2026"
        readTime="6 min read"
        author={{
          name: 'ObjectWire Science Desk',
          role: 'Science & Biotech Reporter',
        }}
        tags={[
          'Life Biosciences',
          'ER-100',
          'FDA',
          'Gene Therapy',
          'Epigenetic Reprogramming',
          'Glaucoma',
          'NAION',
          'OSK',
          'Yamanaka Factors',
          'Clinical Trial',
        ]}
      >

        <p>
          The U.S. Food and Drug Administration cleared Life Biosciences&apos; Investigational New Drug application for ER-100 on January 28, 2026. ER-100 is a gene therapy using an adeno-associated virus vector to deliver three Yamanaka transcription factors, OCT4, SOX2, and KLF4 (OSK), for controlled, partial epigenetic reprogramming in retinal ganglion cells. The approach aims to restore youthful epigenetic patterns and cellular function without inducing full pluripotency. The Phase 1 trial (NCT07290244) focuses on safety and tolerability in adults with primary open-angle glaucoma (OAG) and non-arteritic anterior ischemic optic neuropathy (NAION), with vision assessments as secondary endpoints. Enrollment begins in the first quarter of 2026, starting with dose escalation in OAG patients followed by expansion in NAION. This marks the first human trial of partial epigenetic reprogramming for cellular rejuvenation, though limited to localized ocular delivery for specific vision diseases. No systemic anti-aging application has received clearance.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>First in humans:</strong> ER-100 is the first therapy using partial epigenetic reprogramming to enter human clinical trials. It targets eye diseases, not systemic aging reversal.
        </HighlightBox>

        <h2>What the FDA Cleared in the IND Application</h2>
        <p>
          The FDA authorized ER-100 as an investigational epigenetic therapy candidate for age-related optic neuropathies. Key elements include a modified AAV2 vector delivering inducible OSK genes, a mechanism that restores methylation patterns and gene function in aged or damaged retinal ganglion cells, single intravitreal injection with systemic doxycycline for induction control, and indications for primary open-angle glaucoma and NAION. The trial design is Phase 1 first-in-human, single-dose with sequential cohorts: dose escalation in OAG, then dose expansion in NAION.
        </p>
        <p>
          The clearance follows preclinical data in mice and non-human primates showing restored vision, increased nerve axon survival, and improved electrical signaling without altering genomic DNA.
        </p>

        <h2>ER-100 Delivery and Partial Reprogramming Mechanism</h2>
        <p>
          ER-100 uses AAV2-OSK to express OCT4, SOX2, and KLF4 transiently under doxycycline control. This partial reprogramming modifies epigenetic marks (DNA methylation) without full cellular dedifferentiation, targets retinal ganglion cells affected by age, glaucoma pressure, or ischemic damage, and avoids c-MYC to reduce oncogenic potential seen in full OSKM protocols.
        </p>
        <p>
          Preclinical outcomes in animal models include restored vision in mouse glaucoma models, improved vision in naturally aged mice, increased nerve regeneration after optic nerve crush, and enhanced visual function and axon survival in non-human primate NAION models. The therapy does not edit existing genes; expression is inducible and localized to the eye.
        </p>

        <h2>Target Diseases: Open-Angle Glaucoma and NAION</h2>
        <p>
          Primary open-angle glaucoma (OAG) involves progressive optic nerve damage from elevated intraocular pressure, leading to retinal ganglion cell loss and irreversible vision field defects. Non-arteritic anterior ischemic optic neuropathy (NAION) causes sudden, painless vision loss from reduced blood flow to the optic nerve head and is the most common acute optic neuropathy in adults over 50, with no approved treatments. Both conditions feature age-related retinal ganglion cell dysfunction, making them initial test cases for localized rejuvenation.
        </p>

        <h2>Phase 1 Trial Design and Endpoints</h2>
        <p>
          The study (NCT07290244) evaluates safety and tolerability of a single intravitreal dose as its primary endpoint, with immune responses and multiple visual function assessments (visual acuity, field testing, electrophysiology) as secondary endpoints. The structure includes a dose escalation cohort in OAG patients followed by a dose expansion cohort in NAION patients using the selected safe dose from escalation. No efficacy claims are primary; the trial prioritizes human safety data for this novel approach.
        </p>

        <HighlightBox type="stat" color="blue">
          <strong>Trial timeline:</strong> Phase 1 initiates Q1 2026, with data readout anticipated in Q4 2026. No broader systemic rejuvenation trials are cleared; application remains ocular-specific.
        </HighlightBox>

        <h2>Preclinical Foundation Leading to Clearance</h2>
        <p>
          Non-human primate studies demonstrated controlled OSK expression, restoration of methylation patterns, and improved visual function in NAION-like models. These data, combined with mouse efficacy and safety results, supported the IND submission.
        </p>

        <h2>Current Status and Next Steps</h2>
        <p>
          The Phase 1 trial initiates in Q1 2026, with data readout anticipated in Q4 2026 per company presentations. No broader systemic rejuvenation trials are cleared, and application remains ocular-specific.
        </p>

        <p className="text-sm text-gray-500 mt-6 italic">
          When the first human dose of OSK arrives via eye injection for glaucoma rather than a systemic youth serum, the path from Nobel discovery to clinic stays firmly on the optic nerve.
        </p>

        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/microsoft/news/yamanaka-factors-reverse-cellular-aging-markers" className="text-blue-600 hover:underline font-medium">
              Yamanaka Factors Can Reverse Cellular Aging Markers &rarr;
            </Link>
          </li>
          <li>
            <Link href="/research" className="text-blue-600 hover:underline font-medium">
              Research Hub &rarr;
            </Link>
          </li>
          <li>
            <Link href="/bio-hacking" className="text-blue-600 hover:underline font-medium">
              Bio-Hacking Hub &rarr;
            </Link>
          </li>
        </ul>

        <TagsSection
          tags={[
            'Life Biosciences',
            'ER-100',
            'FDA',
            'Gene Therapy',
            'Epigenetic Reprogramming',
            'Glaucoma',
            'NAION',
            'OSK',
            'Yamanaka Factors',
            'Clinical Trial',
            'Rejuvenation',
          ]}
        />

      </NewsArticle>
    </SEOWrapper>
  );
}
