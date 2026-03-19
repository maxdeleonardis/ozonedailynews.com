import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, { ScienceCallout, FactList } from '@/components/JackArticle';

const SLUG = '/bio-hacking/eledon-pharmaceuticals-eldn-cd40l-tegoprubart-transplant-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/bio-hacking/eledon-pharmaceuticals-tegoprubart-cd40l.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Eledon Pharmaceuticals (ELDN): CD40L Pathway, Tegoprubart, Transplant & ALS Pipeline — February 2026 | ObjectWire',
  description:
    "Eledon Pharmaceuticals (Nasdaq: ELDN) is a clinical-stage biotech targeting the CD40L pathway with tegoprubart, an IgG1 anti-CD40L antibody. Phase 2 BESTOW kidney trial topline data, islet transplant insulin-independence results, $57.5M raise, and Q2 2027 cash runway — as of February 2026.",
  keywords: [
    'Eledon Pharmaceuticals ELDN stock 2026',
    'tegoprubart anti-CD40L antibody transplant',
    'CD40L pathway immunosuppression kidney transplant',
    'BESTOW trial NCT05983770 tegoprubart Phase 2',
    'Eledon islet cell transplant Type 1 diabetes',
    'ELDN Nasdaq clinical-stage biotech 2026',
    'tegoprubart vs tacrolimus kidney function',
    'CD40 ligand monoclonal antibody rejection prevention',
    'Eledon $57.5 million offering 2026',
    'organ transplant rejection CD40L antibody',
    'insulin independence islet transplant CD40L',
    'Eledon Pharmaceuticals ALS CD40L trial',
    'one transplant for life Eledon mission',
    'tegoprubart xenotransplantation eGenesis',
    'calcineurin inhibitor alternative transplant 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Eledon Pharmaceuticals (ELDN): Tegoprubart, CD40L Pathway & the Push for One Transplant for Life',
    description:
      "Phase 2 BESTOW kidney data, islet cell insulin independence, $57.5M raise, and Q2 2027 runway — a full overview of Eledon Pharmaceuticals' CD40L pipeline as of February 2026.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-02-27T12:00:00Z',
    modifiedTime: '2026-03-01T09:00:00Z',
    section: 'Bio-Hacking & Longevity',
    tags: [
      'Eledon Pharmaceuticals',
      'ELDN',
      'Tegoprubart',
      'CD40L',
      'Transplant',
      'Kidney',
      'Islet Cell',
      'Type 1 Diabetes',
      'ALS',
      'Biotech',
      'Clinical Trial',
      'BESTOW',
      'eGenesis',
      'Immunosuppression',
      'Bio-Hacking',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Eledon Pharmaceuticals (ELDN): Anti-CD40L Antibody Keeps Transplanted Kidneys & Islets Alive Without Tacrolimus',
    description:
      "Tegoprubart's Phase 2 kidney data and islet insulin-independence results signal a potential new era in transplant medicine. Full company overview — February 2026.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const companyFacts = [
  { label: 'Company',         value: 'Eledon Pharmaceuticals, Inc.' },
  { label: 'Ticker',          value: 'Nasdaq: ELDN' },
  { label: 'Headquarters',    value: 'Irvine, California' },
  { label: 'Stage',           value: 'Clinical-Stage Biotechnology' },
  { label: 'Focus',           value: 'CD40 Ligand (CD40L) pathway — immune modulation' },
  { label: 'Lead Asset',      value: 'Tegoprubart (formerly AT-1501)' },
  { label: 'Lead Indication', value: 'Kidney transplant rejection prevention' },
  { label: 'Other Programs',  value: 'Islet cell transplant, ALS, xenotransplantation (eGenesis)' },
  { label: 'Share Price',     value: '$2.62 (Feb 27, 2026 close, +8.26% daily)' },
  { label: 'Market Cap',      value: '~$208.6 million (Feb 27, 2026)' },
  { label: '52-Week Range',   value: '$1.35 – $4.60' },
  { label: 'Cash Runway',     value: 'Into Q2 2027 (post $57.5M offering, Jan 2026)' },
  { label: 'Former Name',     value: 'Novus Therapeutics, Inc. (renamed Jan 2021)' },
  { label: 'Mission',         value: '"One Transplant for Life"' },
];

const trialSummary = [
  { label: 'BESTOW (Ph. 2)',  value: 'NCT05983770 — Kidney transplant. Topline Nov 2025. Phase 3 planned.' },
  { label: 'Ph. 1b LTE',     value: 'Kidney — 24-month data, 8 patients, presented Jan 23, 2026 (ASTS).' },
  { label: 'Islet Ph. 1/II', value: 'NCT06305286 — U. of Chicago. 6 patients insulin-free. Extended to 12.' },
  { label: 'ALS / Other',    value: 'CD40L exploration in ALS and autoimmune conditions ongoing.' },
  { label: 'Xenotransplant', value: 'Preclinical collaboration with eGenesis (pig-to-human models).' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EledonPharmaceuticalsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Eledon Pharmaceuticals (ELDN): CD40L Pathway, Tegoprubart, Transplant & ALS Pipeline — February 2026"
        description="Eledon Pharmaceuticals (Nasdaq: ELDN) is a clinical-stage biotech targeting the CD40L pathway with tegoprubart. Phase 2 BESTOW kidney trial topline data, islet cell insulin independence, $57.5M raise, and Q2 2027 cash runway — as of February 2026."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-02-27T12:00:00Z"
        modifiedTime="2026-03-01T09:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Bio-Hacking & Longevity"
        keywords={[
          'Eledon Pharmaceuticals ELDN',
          'tegoprubart CD40L antibody',
          'kidney transplant rejection prevention 2026',
          'BESTOW trial NCT05983770',
          'islet cell transplant insulin independence',
          'CD40 ligand immunosuppression',
          'clinical biotech Nasdaq 2026',
          'anti-CD40L organ transplant',
        ]}
      />

      <JackArticle
        layout="news"
        title="Eledon Pharmaceuticals (ELDN): Clinical-Stage Biotech Focused on CD40L Pathway Therapies"
        subtitle="From Phase 2 kidney transplant data to insulin independence in islet cell patients — a full overview of Eledon Pharmaceuticals, tegoprubart, and the CD40L pipeline as of February 2026."
        categoryLabel="Bio-Hacking & Longevity"
        categories={[
          { label: 'Clinical Biotech', color: 'blue' },
          { label: 'ELDN', color: 'black' },
        ]}
        publishDate="February 27, 2026"
        publishDateISO="2026-02-27T12:00:00Z"
        modifiedDateISO="2026-03-01T09:00:00Z"
        readTime="9 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Science & Longevity Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/bio-hacking', label: 'Bio-Hacking' },
          { href: SLUG, label: 'Eledon Pharmaceuticals — ELDN Overview' },
        ]}
        relatedArticles={[
          {
            href: '/bio-hacking',
            category: 'Bio-Hacking',
            categoryColor: 'text-teal-600',
            title: 'Bio-Hacking Hub — ObjectWire',
          },
          {
            href: '/bio-hacking/life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026',
            category: 'Bio-Hacking',
            categoryColor: 'text-teal-600',
            title: 'Life Biosciences ER-100 FDA Clearance — Epigenetic Reprogramming for Optic Neuropathy',
          },
          {
            href: '/bio-hacking/bianca-dias-bbl-death-brazil-insurance-shift',
            category: 'Bio-Hacking',
            categoryColor: 'text-teal-600',
            title: 'Bianca Dias and the BBL Crisis — Brazil Cosmetic Surgery Safety Shift',
          },
          {
            href: '/saas/novartis',
            category: 'Finance',
            categoryColor: 'text-blue-600',
            title: 'Novartis Pipeline Overview',
          },
          {
            href: '/finance',
            category: 'Finance',
            categoryColor: 'text-blue-600',
            title: 'ObjectWire Finance Desk',
          },
          {
            href: '/research',
            category: 'Research',
            categoryColor: 'text-gray-600',
            title: 'ObjectWire Research Desk',
          },
        ]}
        timeline={[
          { date: 'Jan 2021', description: 'Renamed from Novus Therapeutics following Anelixis Therapeutics acquisition.' },
          { date: 'Nov 2025', description: 'BESTOW Phase 2 (NCT05983770) topline results — kidney transplant vs. tacrolimus.', highlight: true },
          { date: 'Nov 2025', description: 'Islet cell trial: 6 patients achieve insulin independence — University of Chicago.', highlight: true },
          { date: 'Jan 8, 2026', description: '$57.5M underwritten public offering completed — cash runway extended to Q2 2027.' },
          { date: 'Jan 23, 2026', description: 'ASTS Winter Symposium — 24-month Phase 1b kidney data presented.' },
          { date: 'Feb 5, 2026', description: 'Guggenheim Emerging Outlook: Biotech Summit 2026 fireside chat announced.' },
          { date: 'Feb 27, 2026', description: 'ELDN closes at $2.62 (+8.26%) — market cap ~$208.6M.', highlight: true },
        ]}
        documents={[
          { href: 'https://www.eledonpharma.com', label: 'Eledon Pharmaceuticals — Official Site', icon: '🔗' },
          { href: 'https://clinicaltrials.gov/study/NCT05983770', label: 'ClinicalTrials.gov — BESTOW Phase 2 (NCT05983770)', icon: '📄' },
          { href: 'https://clinicaltrials.gov/study/NCT06305286', label: 'ClinicalTrials.gov — Islet Cell Trial (NCT06305286)', icon: '📄' },
        ]}
        accentColor="blue"
        articleUrl={ARTICLE_URL}
        description="Eledon Pharmaceuticals (Nasdaq: ELDN) — CD40L pathway, tegoprubart, BESTOW Phase 2, islet cell insulin independence, $57.5M raise. February 2026."
        section="Bio-Hacking & Longevity"
        keywords={['Eledon Pharmaceuticals ELDN', 'tegoprubart CD40L', 'BESTOW trial kidney transplant', 'islet cell insulin independence']}
        showCorrections
        showEditorialStandards
        footerTagline="When an anti-CD40L antibody keeps transplanted islets producing insulin without tacrolimus side effects in early patients, the path to one transplant for life runs through fewer daily injections."
        footerLinks={[
          { href: '/bio-hacking', label: 'Bio-Hacking' },
          { href: '/finance', label: 'Finance' },
          { href: '/research', label: 'Research' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          <strong>Eledon Pharmaceuticals, Inc.</strong> (Nasdaq:{' '}
          <strong>ELDN</strong>), headquartered in Irvine, California, is a clinical-stage
          biotechnology company targeting the <strong>CD40 Ligand (CD40L) pathway</strong> to
          develop immune-modulating therapies. The company&apos;s lead candidate,{' '}
          <strong>tegoprubart</strong> (formerly AT-1501), is an IgG1 anti-CD40L monoclonal
          antibody designed to prevent organ and cell transplant rejection, with active exploration
          in autoimmune and neurodegenerative conditions including ALS.
        </p>
        <p>
          As of <strong>February 27, 2026</strong>, ELDN closed at <strong>$2.62 per share</strong>{' '}
          — an 8.26% daily increase — with a market capitalization of approximately{' '}
          <strong>$208.6 million</strong> and a 52-week range of <strong>$1.35 to $4.60</strong>.
          In January 2026, Eledon raised <strong>$57.5 million</strong> through an underwritten
          public offering, extending cash runway into <strong>Q2 2027</strong>.
        </p>

        <ScienceCallout type="key-finding">
          <strong>Why this matters for longevity and transplant medicine:</strong> Tegoprubart
          targets the CD40/CD40L costimulatory pathway — a central immune activation node — to
          prevent rejection without calcineurin inhibitors like tacrolimus, which carry significant
          long-term toxicity burdens. If Phase 3 data replicate Phase 2 results, it would
          represent the most significant shift in transplant immunosuppression in decades.
        </ScienceCallout>

        {/* ── Infoboxes ─────────────────────────────────────────── */}
        <FactList title="Eledon Pharmaceuticals — Company at a Glance" items={companyFacts} />
        <FactList title="Active Clinical Programs" items={trialSummary} />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <h2 id="background">Company Background and Rebranding</h2>
        <p>
          Eledon Pharmaceuticals was formerly known as{' '}
          <strong>Novus Therapeutics, Inc.</strong>, and changed its name in{' '}
          <strong>January 2021</strong> following the acquisition of{' '}
          <strong>Anelixis Therapeutics</strong> and its anti-CD40L drug assets. The pivot
          shifted the company&apos;s focus entirely to immunology, specifically the{' '}
          <strong>CD40/CD40L costimulatory pathway</strong> — a critical node in both adaptive
          and innate immune responses that governs T-cell activation, B-cell maturation, and
          inflammatory signaling.
        </p>
        <p>
          The company&apos;s stated mission is{' '}
          <em>&quot;One Transplant for Life&quot;</em> — aiming to extend organ and cell graft
          longevity and improve recipient quality of life by reducing rejection risk without the
          toxicity profile of traditional <strong>calcineurin inhibitors (CNIs)</strong> such as
          tacrolimus or cyclosporine. CNI-related adverse effects — including nephrotoxicity,
          new-onset diabetes, tremors, and neurotoxicity — remain a leading cause of long-term
          graft loss and patient morbidity in transplant medicine.
        </p>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <h2 id="tegoprubart">Lead Candidate: Tegoprubart (Anti-CD40L Antibody)</h2>
        <p>
          <strong>Tegoprubart</strong> binds with high affinity to <strong>CD40 Ligand (CD154)</strong>,
          blocking the CD40/CD40L interaction that drives T-cell-mediated immune activation,
          dendritic cell maturation, and downstream rejection cascades in transplant recipients.
        </p>
        <p>Key attributes of tegoprubart:</p>
        <ul>
          <li>
            <strong>High-affinity IgG1 monoclonal antibody</strong> targeting CD40L (CD154).
          </li>
          <li>
            <strong>Fc-engineered design</strong> to avoid the thromboembolic risks associated
            with earlier first-generation anti-CD40L antibodies (e.g., ruplizumab), which caused
            dangerous platelet activation through FcγRIIa binding.
          </li>
          <li>
            <strong>Transplant rejection prevention</strong> — both allogeneic (human-to-human)
            and xenogeneic (animal-to-human) settings.
          </li>
          <li>
            Explored across <strong>kidney allograft</strong>,{' '}
            <strong>islet cell transplantation</strong>, and{' '}
            <strong>amyotrophic lateral sclerosis (ALS)</strong>.
          </li>
        </ul>
        <p>
          A preclinical collaboration with{' '}
          <strong>eGenesis</strong> incorporates tegoprubart into xenotransplantation immunosuppression
          regimens — including pig-to-human kidney and cardiac transplant experiments — making
          Eledon a key player at the cutting edge of{' '}
          <a
            href="https://www.egenesisbio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            cross-species organ replacement science
          </a>
          .
        </p>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <h2 id="kidney-transplant">Kidney Transplantation: Phase 1b and Phase 2 BESTOW Data</h2>

        <h3>Phase 1b Long-Term Extension — 24-Month Data</h3>
        <p>
          On <strong>January 23, 2026</strong>, Eledon presented 24-month data from the{' '}
          <strong>Phase 1b open-label long-term extension</strong> trial at the{' '}
          <strong>American Society of Transplant Surgeons (ASTS) Winter Symposium</strong>.
          Eight patients on tegoprubart-based immunosuppression showed:
        </p>
        <ul>
          <li>
            <strong>Preserved kidney function</strong> — mean estimated glomerular filtration
            rate (eGFR) increase sustained at 24 months.
          </li>
          <li>
            Continued safety and tolerability with no thromboembolic events.
          </li>
          <li>
            No clinical rejection episodes in the reported cohort.
          </li>
        </ul>

        <h3>Phase 2 BESTOW Trial — NCT05983770</h3>
        <p>
          Topline results from the <strong>Phase 2 BESTOW trial</strong> (NCT05983770) were
          presented in <strong>November 2025</strong>. Compared to standard tacrolimus-based
          immunosuppression, tegoprubart demonstrated:
        </p>
        <ul>
          <li>
            <strong>Excellent kidney function</strong> — comparable or superior eGFR outcomes.
          </li>
          <li>
            <strong>Reduced new-onset diabetes after transplant (NODAT)</strong> — a major
            tacrolimus adverse effect.
          </li>
          <li>
            <strong>Reduced tremor</strong> — a common CNI neurotoxicity complaint.
          </li>
          <li>
            <strong>Reduced delayed graft function</strong> — suggesting early post-transplant
            benefits beyond rejection prevention.
          </li>
        </ul>
        <p>
          Eledon has announced plans to advance tegoprubart to{' '}
          <strong>Phase 3</strong> pending regulatory discussions — the critical gate that would
          set the stage for potential approval and commercial launch.
        </p>

        <ScienceCallout type="clinical-data">
          <strong>BESTOW vs. Tacrolimus — Key Comparison Points:</strong>
          <ul className="mt-2 space-y-1">
            <li>✓ Kidney function (eGFR): Tegoprubart maintained or improved vs. tacrolimus baseline</li>
            <li>✓ New-onset diabetes: Reduced incidence with tegoprubart</li>
            <li>✓ Tremor / neurotoxicity: Reduced with tegoprubart</li>
            <li>✓ Delayed graft function: Lower rate with tegoprubart</li>
            <li>✓ Thromboembolic events: None reported (Fc-engineering resolved historic risk)</li>
          </ul>
        </ScienceCallout>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <h2 id="islet-cell">Islet Cell Transplantation in Type 1 Diabetes</h2>
        <p>
          One of the most clinically compelling results in Eledon&apos;s pipeline comes from the
          investigator-sponsored <strong>Phase 1/II islet cell transplant trial</strong>{' '}
          (NCT06305286), conducted at the <strong>University of Chicago</strong>. In{' '}
          <strong>November 2025</strong>, preliminary data from the first six patients showed:
        </p>
        <ul>
          <li>
            <strong>Insulin-free management</strong> achieved in multiple patients following
            islet cell transplantation with tegoprubart-based immunosuppression.
          </li>
          <li>
            <strong>Sustained HbA1c control</strong> without calcineurin inhibitors — removing
            a key barrier that previously caused transplanted islets to fail due to CNI
            nephrotoxicity in the very patients whose kidneys needed protecting.
          </li>
          <li>
            No thromboembolic events. Safety profile consistent with the kidney data.
          </li>
        </ul>
        <p>
          The trial has been extended to <strong>12 subjects</strong>. A separate additional
          study has been funded by <strong>Breakthrough T1D</strong> (formerly JDRF), targeting
          patients with <strong>Type 1 diabetes and chronic kidney disease</strong> — a
          population for whom standard CNI-based protocols are effectively contraindicated due
          to renal toxicity. Media coverage has highlighted an Arkansas participant who achieved{' '}
          <strong>insulin independence</strong> following enrollment — reported by KARK News in
          February 2026.
        </p>

        <ScienceCallout type="definition">
          <strong>Why islet cell transplantation matters for longevity:</strong> Islet cells are
          the insulin-producing beta cells of the pancreas. In Type 1 diabetes, the immune system
          destroys them. Transplanting donor islets can restore insulin production — but
          traditional tacrolimus-based immunosuppression is itself toxic to islet cells and
          kidneys, limiting long-term success. CD40L blockade with tegoprubart offers a potential
          path to durable insulin independence without the toxicity trade-off. This connects
          directly to the broader bio-hacking theme of{' '}
          <Link
            href="/bio-hacking"
            className="text-teal-700 underline hover:text-teal-900"
          >
            reversing or halting disease at the cellular and immune system level
          </Link>
          .
        </ScienceCallout>

        {/* ── Section 5 ────────────────────────────────────────── */}
        <h2 id="other-programs">Other Indications: ALS, Xenotransplantation, Autoimmune</h2>
        <p>
          Beyond transplantation, Eledon is exploring tegoprubart in:
        </p>
        <ul>
          <li>
            <strong>Amyotrophic lateral sclerosis (ALS):</strong> The CD40/CD40L axis has been
            implicated in neuroinflammation, microglia activation, and motor neuron death in ALS
            models. Eledon is investigating whether CD40L blockade can modulate the
            neuroinflammatory environment in ALS patients.
          </li>
          <li>
            <strong>Autoimmune conditions:</strong> Broader CD40L pathway exploration for
            indications beyond transplant, leveraging tegoprubart&apos;s mechanism in
            T-cell/B-cell co-stimulation blockade.
          </li>
          <li>
            <strong>Xenotransplantation with eGenesis:</strong> A preclinical collaboration
            incorporating tegoprubart into immunosuppression regimens for genetically modified
            pig-to-human organ transplants — part of the broader xenotransplantation wave
            following high-profile pig kidney and heart cases in 2023–2025.
          </li>
        </ul>

        {/* ── Section 6 ────────────────────────────────────────── */}
        <h2 id="financials">Recent Corporate and Financial Updates — 2026</h2>
        <p>
          Eledon has moved aggressively to capitalize its pipeline heading into Phase 3
          discussions:
        </p>
        <ul>
          <li>
            <strong>January 8, 2026:</strong> Published 2025 milestone summary and 2026 outlook.
            Announced completion of a{' '}
            <strong>$57.5 million underwritten public offering</strong>, extending cash runway
            into <strong>Q2 2027</strong> — providing the financial stability needed to execute
            Phase 3 preparation and ongoing investigator-sponsored trial support.
          </li>
          <li>
            <strong>January 23, 2026:</strong> 24-month Phase 1b kidney data presented at the
            ASTS Winter Symposium. Simultaneous release of the 24-month data and investor
            materials.
          </li>
          <li>
            <strong>February 5, 2026:</strong> Announced participation in a{' '}
            <strong>Guggenheim Emerging Outlook: Biotech Summit 2026</strong> fireside chat
            scheduled for February 12, 2026.
          </li>
          <li>
            <strong>Analyst consensus:</strong> Strong Buy from limited sell-side coverage per
            available research summaries.
          </li>
        </ul>

        <ScienceCallout type="warning">
          <strong>Investor note:</strong> ELDN is a small-cap clinical-stage biotech with a
          market cap of approximately $208 million as of late February 2026. Clinical-stage
          biotechs carry substantial binary risk around trial outcomes and regulatory decisions.
          The Phase 3 pathway for tegoprubart in kidney transplant has not been finalized with
          regulators. This article is informational only and is not investment advice. Always
          review SEC filings and trial registry data independently before making investment
          decisions.
        </ScienceCallout>

        {/* ── Section 7 ────────────────────────────────────────── */}
        <h2 id="context">Why Eledon Fits the Bio-Hacking & Longevity Narrative</h2>
        <p>
          The longevity and bio-hacking conversation typically focuses on interventions for
          healthy individuals — supplements, protocols, gene therapies, epigenetic reprogramming.
          But the most immediate frontline of extending functional human lifespan runs through
          medicine that solves irreversible organ failure: keeping transplanted kidneys working
          for decades, restoring pancreatic function in diabetics, and eventually integrating
          cross-species organs into human patients.
        </p>
        <p>
          Eledon sits at the intersection of all three. Tegoprubart&apos;s mechanism — blocking
          the CD40/CD40L costimulatory checkpoint — is the same biology that regulates
          autoimmune destruction, cancer immune evasion, and inflammatory neurodegeneration.
          A drug that can suppress allograft rejection without CNI toxicity has downstream
          implications far beyond organ transplant waiting lists.
        </p>
        <p>
          This connects to themes covered across ObjectWire&apos;s science and longevity
          coverage — from{' '}
          <Link
            href="/bio-hacking/life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026"
            className="text-teal-700 underline hover:text-teal-900 font-medium"
          >
            Life Biosciences&apos; FDA-cleared ER-100 epigenetic reprogramming trial
          </Link>{' '}
          to the broader question of how biological age, immune competence, and organ longevity
          intersect.
        </p>
        <p>
          <em>
            When an anti-CD40L antibody keeps transplanted islets producing insulin without
            tacrolimus side effects in early patients, the path to one transplant for life runs
            through fewer daily injections.
          </em>
        </p>

        {/* ── Sources ───────────────────────────────────────────── */}
        <ScienceCallout type="source">
          <strong>Primary sources:</strong>{' '}
          <a href="https://www.eledonpharma.com" target="_blank" rel="noopener noreferrer">
            Eledon Pharmaceuticals official site
          </a>{' '}
          · Eledon press releases (Jan 8, Jan 23, Feb 5, 2026) ·{' '}
          <a
            href="https://clinicaltrials.gov/study/NCT05983770"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClinicalTrials.gov NCT05983770
          </a>{' '}
          ·{' '}
          <a
            href="https://clinicaltrials.gov/study/NCT06305286"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCT06305286
          </a>{' '}
          · Yahoo Finance ELDN quote (Feb 27, 2026) · Nasdaq real-time data · KARK News
          February 2026 · ASTS Winter Symposium January 2026.
        </ScienceCallout>

        {/* ── Related Coverage ─────────────────────────────────── */}
        <h2 id="related">Related Coverage</h2>
        <ul>
          <li>
            <Link
              href="/bio-hacking"
              className="font-medium"
            >
              Bio-Hacking Hub: Human Enhancement, Longevity &amp; Performance Optimization →
            </Link>
          </li>
          <li>
            <Link href="/bio-hacking/life-biosciences-fda-clearance-er-100-epigenetic-reprogramming-optic-neuropathy-2026">
              Life Biosciences FDA Clearance: ER-100 Epigenetic Reprogramming Trial for Glaucoma &amp; NAION →
            </Link>
          </li>
          <li>
            <Link href="/bio-hacking/bianca-dias-bbl-death-brazil-insurance-shift">
              Bianca Dias and the BBL Crisis: Brazil&apos;s 30% Safety Tax on Cosmetic Surgery →
            </Link>
          </li>
          <li>
            <Link href="/saas/novartis">
              Novartis Pipeline Overview →
            </Link>
          </li>
          <li>
            <Link href="/finance">
              ObjectWire Finance Desk →
            </Link>
          </li>
          <li>
            <Link href="/research">
              ObjectWire Research Desk →
            </Link>
          </li>
        </ul>

      </JackArticle>
    </SEOWrapper>
  );
}
