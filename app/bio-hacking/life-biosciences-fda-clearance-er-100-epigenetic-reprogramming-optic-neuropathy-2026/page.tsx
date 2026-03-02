import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  ScienceCallout,
  FactList,
  JackSection,
  JackCaseOverview,
  JackStats,
} from '@/components/JackArticle';

const SLUG =
  '/bio-hacking/life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/bio-hacking/life-biosciences-er100-fda-clearance.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Life Biosciences FDA Clearance: ER-100 Epigenetic Reprogramming Trial for Glaucoma & NAION — January 2026 | ObjectWire',
  description:
    "The FDA cleared Life Biosciences' ER-100 IND application on January 28, 2026 — the first human trial of partial epigenetic reprogramming using OSK Yamanaka factors delivered via AAV2 to retinal ganglion cells in glaucoma and NAION patients.",
  keywords: [
    'Life Biosciences ER-100 FDA clearance 2026',
    'epigenetic reprogramming clinical trial human',
    'OSK Yamanaka factors retinal ganglion cells',
    'partial epigenetic reprogramming AAV2 gene therapy',
    'glaucoma epigenetic therapy IND clearance',
    'NAION treatment gene therapy 2026',
    'NCT07290244 ER-100 phase 1 trial',
    'Life Biosciences IND application FDA',
    'Yamanaka OCT4 SOX2 KLF4 optic neuropathy',
    'cellular rejuvenation retinal FDA first human',
    'epigenetic age reversal clinical trial clearance',
    'AAV gene therapy retinal ganglion cell reprogramming',
    'partial reprogramming without pluripotency glaucoma',
    'bio-hacking longevity clinical trial 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'FDA Clears First Human Trial of Partial Epigenetic Reprogramming — Life Biosciences ER-100',
    description:
      "On January 28, 2026, the FDA cleared Life Biosciences' ER-100 IND — a Phase 1 trial of AAV2-delivered OSK Yamanaka factors for retinal rejuvenation in glaucoma and NAION. The first human test of partial epigenetic reprogramming.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-01-28T12:00:00Z',
    modifiedTime: '2026-03-01T09:00:00Z',
    section: 'Bio-Hacking & Longevity',
    tags: [
      'Life Biosciences',
      'ER-100',
      'FDA',
      'Epigenetic Reprogramming',
      'Gene Therapy',
      'Glaucoma',
      'NAION',
      'Yamanaka Factors',
      'AAV2',
      'Clinical Trial',
      'Longevity',
      'Bio-Hacking',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'FDA Clears ER-100: The First Human Trial of Partial Epigenetic Reprogramming',
    description:
      "Life Biosciences' ER-100 — an AAV2 vector delivering OSK Yamanaka factors to retinal ganglion cells — received FDA IND clearance January 28, 2026. Phase 1 trials begin Q1 2026 in glaucoma and NAION patients.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const trialFacts = [
  { label: 'Therapy Name',    value: 'ER-100' },
  { label: 'Developer',       value: 'Life Biosciences' },
  { label: 'IND Clearance',   value: 'January 28, 2026 (FDA)' },
  { label: 'Trial ID',        value: 'NCT07290244' },
  { label: 'Phase',           value: 'Phase 1 — First-in-Human' },
  { label: 'Vector',          value: 'AAV2 (adeno-associated virus serotype 2)' },
  { label: 'Payload',         value: 'Inducible OSK (OCT4, SOX2, KLF4)' },
  { label: 'Delivery Route',  value: 'Single intravitreal injection' },
  { label: 'Induction',       value: 'Systemic doxycycline (oral)' },
  { label: 'Target Cells',    value: 'Retinal ganglion cells (RGCs)' },
  { label: 'Indications',     value: 'Primary open-angle glaucoma (OAG) & NAION' },
  { label: 'Enrollment Start',value: 'Q1 2026 — dose escalation in OAG first' },
  { label: 'Data Readout',    value: 'Q4 2026 (anticipated)' },
  { label: 'Primary Endpoint',value: 'Safety & tolerability' },
  { label: 'No c-MYC',        value: 'OSK only — oncogenic risk reduced vs. OSKM' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LifeBiosciencesER100Page() {
  return (
    <SEOWrapper slug={SLUG}>
      {/* Google News / structured data */}
      <NewsArticleSchema
        title="Life Biosciences Receives FDA Clearance for First Human Trial of Partial Epigenetic Reprogramming Therapy ER-100 in Optic Neuropathies"
        description="The FDA cleared Life Biosciences' ER-100 IND on January 28, 2026 — the first human trial of partial epigenetic reprogramming using OSK Yamanaka factors delivered via AAV2 intravitreal injection to retinal ganglion cells in glaucoma and NAION patients."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-01-28T12:00:00Z"
        modifiedTime="2026-03-01T09:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Bio-Hacking & Longevity"
        keywords={[
          'Life Biosciences ER-100',
          'FDA IND clearance 2026',
          'epigenetic reprogramming trial',
          'OSK Yamanaka factors',
          'AAV2 retinal gene therapy',
          'glaucoma NAION clinical trial',
          'NCT07290244',
          'partial reprogramming optic neuropathy',
          'cellular rejuvenation retina',
        ]}
      />

      <JackArticle
        layout="news"
        title="Life Biosciences Receives FDA Clearance for First Human Trial of Partial Epigenetic Reprogramming Therapy ER-100 in Optic Neuropathies"
        subtitle="On January 28, 2026, the FDA cleared Life Biosciences' Investigational New Drug application for ER-100 — an AAV2 vector delivering OCT4, SOX2, and KLF4 (OSK) Yamanaka transcription factors to retinal ganglion cells. The first human trial of partial epigenetic reprogramming, limited to localized ocular delivery in glaucoma and NAION patients."
        categoryLabel="Bio-Hacking & Longevity"
        categories={[
          { label: 'Bio-Hacking & Longevity', color: 'green' },
          { label: 'Clinical Trial', color: 'blue' },
        ]}
        publishDate="January 28, 2026"
        publishDateISO="2026-01-28T12:00:00Z"
        modifiedDateISO="2026-03-01T09:00:00Z"
        readTime="8 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Science & Longevity Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/bio-hacking', label: 'Bio-Hacking' },
          { href: SLUG, label: 'ER-100 FDA Clearance' },
        ]}
        relatedArticles={[
          {
            href: '/bio-hacking',
            category: 'Bio-Hacking',
            categoryColor: 'text-green-600',
            title: 'Bio-Hacking Hub: Human Enhancement, Longevity & Performance Optimization',
          },
          {
            href: '/bio-hacking/eledon-pharmaceuticals-eldn-cd40l-tegoprubart-transplant-2026',
            category: 'Clinical Science',
            categoryColor: 'text-blue-600',
            title: 'Eledon Pharmaceuticals (ELDN): CD40L Pathway & Tegoprubart Pipeline',
          },
          {
            href: '/bio-hacking/bianca-dias-bbl-death-brazil-insurance-shift',
            category: 'Bio-Hacking',
            categoryColor: 'text-purple-600',
            title: "Bianca Dias and Brazil's BBL Safety Tax",
          },
          {
            href: '/research',
            category: 'Research',
            categoryColor: 'text-gray-600',
            title: 'ObjectWire Research Desk',
          },
        ]}
        timeline={[
          { date: 'Nobel Prize 2006', description: 'Yamanaka discovers iPSC reprogramming factors (OSKM).' },
          { date: '2013–2019', description: 'Partial reprogramming concept developed in mouse models (Salk Institute).' },
          { date: '2020–2023', description: 'Life Biosciences preclinical program: mouse glaucoma, NHP NAION studies.' },
          { date: 'Jan 28, 2026', description: 'FDA clears ER-100 IND — first human epigenetic reprogramming trial.', highlight: true },
          { date: 'Q1 2026', description: 'Phase 1 enrollment begins — OAG dose escalation cohort.' },
          { date: 'Q3 2026', description: 'NAION cohort initiation (anticipated).' },
          { date: 'Q4 2026', description: 'Preliminary safety data readout (anticipated).' },
        ]}
        documents={[
          { href: 'https://clinicaltrials.gov/study/NCT07290244', label: 'ClinicalTrials.gov — NCT07290244', icon: '🔬' },
          { href: 'https://www.lifebiosciences.com/platform', label: 'Life Biosciences Platform Data', icon: '📄' },
          { href: 'https://www.lifebiosciences.com', label: 'Life Biosciences Press Release — Jan 28, 2026', icon: '📰' },
        ]}
        accentColor="green"
        articleUrl={ARTICLE_URL}
        description="The FDA cleared Life Biosciences' ER-100 IND on January 28, 2026 — the first human trial of partial epigenetic reprogramming using OSK Yamanaka factors in retinal ganglion cells."
        section="Bio-Hacking & Longevity"
        keywords={['Life Biosciences ER-100', 'epigenetic reprogramming', 'OSK Yamanaka factors', 'retinal gene therapy', 'glaucoma NAION trial', 'NCT07290244']}
        showCorrections
        showEditorialStandards
        footerTagline="Science first. Hype second. Always."
        footerLinks={[
          { href: '/bio-hacking', label: 'Bio-Hacking Hub' },
          { href: '/research', label: 'Research Desk' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          On <strong>January 28, 2026</strong>, the U.S. Food and Drug Administration cleared{' '}
          <strong>Life Biosciences&apos;</strong> Investigational New Drug (IND) application for{' '}
          <strong>ER-100</strong> — a gene therapy using an adeno-associated virus vector to deliver
          three Yamanaka transcription factors, <strong>OCT4, SOX2, and KLF4 (OSK)</strong>, for
          controlled, partial epigenetic reprogramming in retinal ganglion cells. The clearance marks
          the <strong>first human clinical trial of partial epigenetic reprogramming</strong> for
          cellular rejuvenation in any disease indication.
        </p>
        <p>
          The Phase 1 trial (<strong>NCT07290244</strong>) focuses on safety and tolerability in
          adults with <strong>primary open-angle glaucoma (OAG)</strong> and{' '}
          <strong>non-arteritic anterior ischemic optic neuropathy (NAION)</strong>, with vision
          assessments as secondary endpoints. Enrollment begins Q1 2026, starting with dose escalation
          in OAG patients followed by expansion in NAION —{' '}
          <a href="https://clinicaltrials.gov/study/NCT07290244" target="_blank" rel="noopener noreferrer">
            ClinicalTrials.gov NCT07290244
          </a>.
        </p>

        <ScienceCallout type="key-finding">
          <strong>What this is and is not:</strong> ER-100 is cleared for age-related optic
          neuropathies delivered directly to the eye. No systemic anti-aging application has received
          clearance. &quot;Rejuvenation&quot; refers strictly to epigenetic restoration in localized
          retinal cells — not whole-body age reversal.
        </ScienceCallout>

        <FactList title="ER-100 Trial at a Glance" items={trialFacts} />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="What the FDA Cleared in the IND Application" accentColor="green">
          <p>
            The FDA authorized ER-100 as an investigational epigenetic therapy candidate for
            age-related optic neuropathies, permitting Life Biosciences to proceed with first-in-human
            dosing under the trial protocol.
          </p>
          <JackCaseOverview
            title="Cleared IND — Key Elements"
            accentColor="green"
            items={[
              { label: 'Vector & Payload:', value: 'Modified AAV2 vector delivering inducible OSK (OCT4, SOX2, KLF4) genes.' },
              { label: 'Mechanism:', value: 'Controlled OSK expression restores methylation patterns and gene function in aged or damaged RGCs.' },
              { label: 'Administration:', value: 'Single intravitreal injection with systemic oral doxycycline for induction control.' },
              { label: 'Indications:', value: 'Primary open-angle glaucoma (OAG) and NAION.' },
              { label: 'Design:', value: 'Phase 1 first-in-human, single-dose, sequential cohorts — dose escalation in OAG, then expansion in NAION.' },
            ]}
          />
          <p>
            The clearance follows preclinical data in mice and non-human primates showing restored
            vision, increased nerve axon survival, and improved electrical signaling without altering
            genomic DNA — per{' '}
            <a href="https://www.lifebiosciences.com/platform" target="_blank" rel="noopener noreferrer">
              Life Biosciences platform data
            </a>.
          </p>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="ER-100 Delivery and Partial Reprogramming Mechanism" accentColor="green">
          <p>
            ER-100 uses an <strong>AAV2-OSK</strong> construct to express OCT4, SOX2, and KLF4
            transiently under doxycycline (Dox) control. OSK expression switches on via oral
            doxycycline and ceases when withdrawn — giving clinicians direct control over the
            reprogramming window.
          </p>
          <p>This partial reprogramming approach:</p>
          <ul>
            <li>Modifies DNA methylation patterns without triggering full cellular dedifferentiation.</li>
            <li>Targets retinal ganglion cells (RGCs) affected by aging, pressure, or ischemic injury.</li>
            <li>Deliberately <strong>excludes c-MYC</strong>, reducing oncogenic potential vs. full OSKM protocols.</li>
          </ul>

          <ScienceCallout type="clinical-data">
            <strong>Preclinical outcomes (Life Biosciences data):</strong>
            <ul className="mt-2 space-y-1">
              <li>✓ Restored vision in mouse glaucoma models</li>
              <li>✓ Improved vision in naturally aged mice</li>
              <li>✓ Increased nerve regeneration after optic nerve crush injury</li>
              <li>✓ Enhanced visual function and axon survival in NHP NAION models</li>
              <li>✓ No alteration of genomic DNA sequence confirmed</li>
            </ul>
          </ScienceCallout>

          <JackStats
            title="Preclinical Program by the Numbers"
            accentColor="green"
            stats={[
              { value: '3', label: 'Yamanaka factors (OSK)' },
              { value: 'AAV2', label: 'Delivery vector' },
              { value: '0', label: 'Genomic edits' },
              { value: '2', label: 'Species studied (mouse + NHP)' },
            ]}
          />
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Target Diseases: Open-Angle Glaucoma and NAION" accentColor="green">
          <p>
            Both conditions feature <strong>age-related retinal ganglion cell dysfunction</strong>,
            making them the logical first test cases for localized epigenetic rejuvenation.
          </p>
          <h3>Primary Open-Angle Glaucoma (OAG)</h3>
          <p>
            OAG involves progressive optic nerve damage from elevated intraocular pressure, producing
            chronic, irreversible RGC loss and visual field defects. Existing treatments address
            pressure but not the underlying neurodegeneration or epigenetic aging of RGCs.
          </p>
          <h3>Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)</h3>
          <p>
            NAION causes <strong>sudden, painless vision loss</strong> from reduced blood flow to
            the optic nerve head. It is the most common acute optic neuropathy in adults over 50, and{' '}
            <strong>no approved treatment exists</strong> — making it a compelling target for a
            regeneration-focused approach.
          </p>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Phase 1 Trial Design and Endpoints" accentColor="green">
          <JackCaseOverview
            title="NCT07290244 — Trial Structure"
            accentColor="green"
            items={[
              { label: 'Cohort 1 (OAG):', value: 'Ascending single doses — safety, tolerability, maximum tolerated dose.' },
              { label: 'Cohort 2 (NAION):', value: 'Confirmed safe dose from Cohort 1 in NAION patients.' },
              { label: 'Primary endpoint:', value: 'Safety and tolerability of a single intravitreal dose.' },
              { label: 'Secondary endpoints:', value: 'Immune responses, visual acuity, visual field, OCT, electrophysiology.' },
            ]}
          />
          <ScienceCallout type="warning">
            No efficacy claims are primary endpoints in Phase 1. Vision improvement results, if
            observed, will be hypothesis-generating for Phase 2 design — not the basis for regulatory
            approval at this stage.
          </ScienceCallout>
        </JackSection>

        {/* ── Section 5 ────────────────────────────────────────── */}
        <JackSection number={5} title="Preclinical Foundation Leading to IND Clearance" accentColor="green">
          <p>The IND submission was supported by a multi-year preclinical program. Key FDA data points:</p>
          <ul>
            <li><strong>Controlled expression:</strong> Dox-regulated induction confirmed in primate retinal tissue with clean shutoff on withdrawal.</li>
            <li><strong>Methylation restoration:</strong> AAV2-OSK measurably reversed age-associated methylation patterns toward a younger epigenetic signature.</li>
            <li><strong>Visual recovery:</strong> Statistically significant improvement in visual acuity and electrophysiology in NHP NAION models vs. controls.</li>
            <li><strong>Genomic integrity:</strong> No off-target edits, chromosomal instability, or tumor formation across all cohorts.</li>
          </ul>
          <p>
            The company&apos;s CSO stated in the press release that primate data &quot;provided the
            confidence that controlled, transient OSK expression can safely restore cellular function
            in the aging retina without the safety liabilities of full reprogramming.&quot;
          </p>
        </JackSection>

        {/* ── Section 6 ────────────────────────────────────────── */}
        <JackSection number={6} title="Current Status and Next Steps" accentColor="green">
          <p>
            Phase 1 initiates <strong>Q1 2026</strong> with site activation underway. Preliminary
            safety data readout is anticipated <strong>Q4 2026</strong> per BIO Summit 2026
            company presentations.
          </p>
          <JackCaseOverview
            title="2026 Milestones"
            accentColor="green"
            items={[
              { label: 'Q1 2026:', value: 'First patient dosing — OAG Cohort 1.' },
              { label: 'Q2–Q3 2026:', value: 'Dose escalation completion and dose selection.' },
              { label: 'Q3 2026:', value: 'NAION cohort initiation.' },
              { label: 'Q4 2026:', value: 'Preliminary safety and immune response readout.' },
              { label: '2027:', value: 'Phase 2 design decisions pending Phase 1 outcomes.' },
            ]}
          />
          <ScienceCallout type="source">
            <strong>Primary sources:</strong>{' '}
            <a href="https://www.lifebiosciences.com" target="_blank" rel="noopener noreferrer">
              Life Biosciences press release, January 28, 2026
            </a>{' · '}
            <a href="https://clinicaltrials.gov/study/NCT07290244" target="_blank" rel="noopener noreferrer">
              ClinicalTrials.gov NCT07290244
            </a>{' · '}
            Nature Biotechnology brief, February 2026 · BIO Summit 2026 company presentation.
          </ScienceCallout>
        </JackSection>

        {/* ── Closing ──────────────────────────────────────────── */}
        <JackSection number={7} title="Why This Matters: The Distinction That Counts" accentColor="green">
          <p>
            The significance of ER-100&apos;s IND clearance lies in what it precisely is — and what
            it is not. This is not a systemic youth serum. It is not an FDA endorsement of age
            reversal. It is a targeted gene therapy, delivered to one eye, for two specific
            degenerative conditions, in a safety trial with no efficacy claims.
          </p>
          <p>
            What it does establish, for the first time, is that a regulatory authority has reviewed
            the science of partial epigenetic reprogramming and judged it safe enough to test in
            humans. The Nobel Prize science behind iPSCs has taken roughly two decades to reach a
            first human injection. When it arrives, it arrives via an intravitreal syringe and a
            glaucoma patient — not a tech billionaire&apos;s longevity protocol.
          </p>
          <p>
            This milestone connects directly to broader themes in{' '}
            <Link href="/bio-hacking" className="text-green-700 underline hover:text-green-900 font-medium">
              ObjectWire&apos;s Bio-Hacking & Longevity coverage
            </Link>{' '}
            and the adjacent clinical science of immune modulation for organ longevity covered in our{' '}
            <Link href="/bio-hacking/eledon-pharmaceuticals-eldn-cd40l-tegoprubart-transplant-2026" className="text-green-700 underline hover:text-green-900 font-medium">
              Eledon Pharmaceuticals (ELDN) overview
            </Link>.
          </p>
          <p>
            <em>
              When the first human dose of OSK arrives via intravitreal injection for glaucoma rather
              than a systemic youth serum, the path from Nobel discovery to clinic stays firmly on
              the optic nerve.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
