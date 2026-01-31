import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ProcessDiagram,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';

export const metadata: Metadata = {
  title: 'Novartis AG - Pharmaceutical Company Profile | ObjectWire',
  description: 'Complete profile of Novartis AG, Swiss multinational pharmaceutical corporation. History, major drugs, R&D pipeline, and latest developments including Medicare pricing challenges.',
  keywords: [
    'Novartis',
    'Novartis AG',
    'Swiss pharmaceutical company',
    'Entresto',
    'cardiovascular drugs',
    'oncology drugs',
    'Novartis history',
    'pharmaceutical industry',
    'Basel Switzerland',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/novartis',
  },
  openGraph: {
    title: 'Novartis AG - Pharmaceutical Company Profile',
    description: 'Swiss multinational pharmaceutical corporation: history, products, and latest developments.',
    type: 'article',
    url: 'https://www.objectwire.org/novartis',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novartis AG - Company Profile',
    description: 'Complete guide to Novartis pharmaceutical company.',
  },
};

export default function NovartisPage() {
  return (
    <>
      <NewsArticleSchema
        title="Novartis AG - Pharmaceutical Company Profile"
        description="Complete profile of Novartis AG, Swiss multinational pharmaceutical corporation headquartered in Basel."
        author="ObjectWire Healthcare Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2024-05-12T00:00:00Z"
        modifiedTime="2026-01-31T10:00:00Z"
        articleUrl="https://objectwire.org/novartis"
        section="Healthcare"
        keywords={['Novartis', 'pharmaceutical', 'healthcare', 'drug development']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
        ]}
        categories={[
          { label: 'COMPANY PROFILE', color: 'blue' },
        ]}
        readTime="15 min read"
        title="Novartis AG"
        subtitle="Swiss multinational pharmaceutical corporation headquartered in Basel, Switzerland, focused on innovative medicines in cardiovascular, oncology, and immunology"
        author={{
          name: 'ObjectWire Healthcare Desk',
          department: 'Company Profiles & Analysis',
          initials: 'OW',
        }}
        publishDate="May 12, 2024"
        updatedDate="January 31, 2026"
        heroImage={{
          src: '/thumbnail_feb26/novartis.PNG',
          alt: 'Novartis AG headquarters and logo',
          caption: 'Novartis AG - Swiss pharmaceutical leader',
          credit: 'Novartis Corporate',
        }}
        relatedArticles={[
          {
            href: '/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations',
            category: 'BREAKING',
            categoryColor: 'text-red-600',
            title: 'Novartis Challenges Medicare Drug Price Negotiations at Supreme Court',
          },
          {
            href: '/news',
            category: 'HEALTHCARE NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest Healthcare Coverage',
          },
        ]}
        timeline={[
          { date: '1758', description: 'Geigy founded (predecessor company)' },
          { date: '1886', description: 'Sandoz founded as dye manufacturer' },
          { date: 'December 20, 1996', description: 'Novartis formed through Ciba-Geigy and Sandoz merger', highlight: true },
          { date: '2010', description: 'Acquired Alcon for $52 billion' },
          { date: '2015', description: 'FDA approves Entresto, blockbuster heart failure drug', highlight: true },
          { date: '2017', description: 'First CAR-T therapy Kymriah approved' },
          { date: '2018', description: 'Vas Narasimhan becomes CEO' },
          { date: '2023', description: 'Sandoz generics spun off as independent company', highlight: true },
          { date: 'January 2026', description: 'Challenges Medicare pricing at Supreme Court' },
        ]}
        documents={[
          {
            href: 'https://www.novartis.com/',
            label: 'Novartis Official Website',
            icon: '🌐',
          },
          {
            href: 'https://www.novartis.com/investors',
            label: 'Investor Relations',
            icon: '📊',
          },
          {
            href: 'https://www.novartis.com/research-development/novartis-pipeline',
            label: 'R&D Pipeline',
            icon: '🔬',
          },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://www.novartis.com/',
            title: 'Novartis AG',
            description: 'Official company website and product information',
          },
          {
            number: 2,
            url: 'https://www.novartis.com/investors',
            title: 'Novartis Investor Relations',
            description: 'Financial reports and shareholder information',
          },
          {
            number: 3,
            url: 'https://www.sec.gov/',
            title: 'U.S. Securities and Exchange Commission',
            description: 'SEC filings and financial disclosures',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        {/* Company Overview Box */}
        <CaseOverview
          title="COMPANY OVERVIEW"
          color="blue"
          items={[
            { label: 'Founded:', value: 'December 20, 1996 (merger)' },
            { label: 'Headquarters:', value: 'Basel, Switzerland' },
            { label: 'CEO:', value: 'Vas Narasimhan (since 2018)' },
            { label: 'Employees:', value: '~76,000 (2025)' },
            { label: 'Revenue:', value: '$46.8 billion (2025)' },
            { label: 'Market Cap:', value: '~$200 billion' },
          ]}
        />

        {/* Introduction */}
        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <strong>Novartis AG</strong> is a Swiss multinational pharmaceutical corporation headquartered in Basel, Switzerland. Founded in 1996 through the merger of Ciba-Geigy and Sandoz, Novartis is one of the world's largest pharmaceutical companies by revenue and market capitalization. The company focuses on innovative prescription medicines in cardiovascular, oncology, immunology, neuroscience, and ophthalmology therapeutic areas.
        </p>

        <p>
          Novartis operates primarily through its Innovative Medicines division following the spin-off of eye care division Alcon in 2019 and the divestiture of generics unit Sandoz in 2023. The company maintains one of the largest pharmaceutical R&D budgets globally, investing nearly 20% of revenue into drug discovery and development.
        </p>

        <StatisticsBox
          title="KEY METRICS (2025)"
          color="blue"
          stats={[
            { value: '$46.8B', label: 'Annual Revenue' },
            { value: '$200B', label: 'Market Cap' },
            { value: '76K', label: 'Employees' },
            { value: '$9.1B', label: 'R&D Investment' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Company History
        </h2>
        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Company History
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Pre-Merger Heritage (1758-1996)</h3>

        <p>
          Novartis's roots trace back to the 18th century chemical industry in Basel, Switzerland. The company formed through the 1996 merger of two Swiss pharmaceutical giants:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ciba-Geigy:</strong> Formed in 1970 through merger of Ciba (founded 1859) and Geigy (founded 1758), with expertise in dyes, agricultural chemicals, and pharmaceuticals</li>
          <li><strong>Sandoz:</strong> Founded in 1886 as a dye manufacturer, pioneering psychopharmacology research (LSD synthesis in 1938) and becoming a major pharmaceutical producer</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">1996: Formation of Novartis</h3>

        <p>
          On December 20, 1996, Ciba-Geigy and Sandoz merged to form Novartis in what was then the largest corporate merger in history, valued at $27 billion. The company name derives from the Latin "novae artes" meaning "new skills."
        </p>

        <p>
          The merger created a pharmaceutical powerhouse with combined annual sales of $21 billion, 82,000 employees, and a diverse portfolio spanning prescription drugs, over-the-counter medicines, generics, animal health, and agricultural products.
        </p>

        <p>
          Daniel Vasella became the first CEO, leading a strategic restructuring that would define Novartis as a focused innovative pharmaceutical company over the following two decades.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">1997-2010: Diversification Era</h3>

        <p>
          <strong>Strategic Acquisitions:</strong>
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>2010: Acquired Alcon (eye care) for $52 billion, largest acquisition in pharmaceutical history</li>
          <li>2006: Acquired Chiron (vaccines/diagnostics) for $5.4 billion</li>
          <li>2005: Sandoz generics business expanded through acquisition of German generics maker Hexal and Eon Labs</li>
        </ul>

        <p>
          During this period, Novartis operated as a diversified healthcare conglomerate with four divisions: Pharmaceuticals, Alcon (eye care), Sandoz (generics), and Consumer Health.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">2011-2017: Pipeline Transformation</h3>

        <p>
          Under CEO Joseph Jimenez, Novartis underwent significant R&D restructuring, shifting focus toward breakthrough therapies in oncology, cardiology, and immunology:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>2015: FDA approved Entresto (sacubitril/valsartan), groundbreaking heart failure drug</li>
          <li>2017: FDA approved Kymriah, first CAR-T cell therapy for cancer treatment</li>
          <li>Divested non-core assets including animal health and vaccines businesses</li>
          <li>Closed or consolidated 25% of manufacturing sites as part of efficiency drive</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">2018-Present: Focus Strategy</h3>

        <p>
          <strong>2018:</strong> Vas Narasimhan appointed CEO at age 42, youngest CEO in Novartis history. Implemented "focused medicines" strategy:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>2019: Spun off Alcon eye care division as independent publicly traded company</li>
          <li>2020: Divested stake in Roche (held since 2001)</li>
          <li>2023: Completed separation of Sandoz generics business</li>
          <li>2024-2025: Major investments in radioligand therapy and cell/gene therapy platforms</li>
        </ul>

        <p>
          By 2026, Novartis operates exclusively as a focused innovative pharmaceutical company, concentrating R&D on five therapeutic areas where it aims for leadership: cardiovascular/renal/metabolic, immunology, oncology, neuroscience, and ophthalmology.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Major Products & Drug Portfolio
        </h2>

        <p>
          Novartis's pharmaceutical portfolio includes numerous blockbuster drugs generating over $1 billion annually in sales. The company's top therapeutic areas and flagship medications include:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Cardiovascular & Renal</h3>

        <p>
          <strong>Entresto (sacubitril/valsartan)</strong> — 2025 Sales: $7.2 billion<br/>
          First-in-class heart failure treatment combining neprilysin inhibitor and angiotensin receptor blocker. Approved for heart failure with reduced ejection fraction (HFrEF). Considered a landmark therapy that significantly reduces cardiovascular death and hospitalization compared to ACE inhibitors.
        </p>

        <p>
          <strong>Leqvio (inclisiran)</strong> — 2025 Sales: $880 million<br/>
          First siRNA therapy for high cholesterol, administered twice yearly. Breakthrough technology using RNA interference to lower LDL cholesterol for patients at high cardiovascular risk.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Oncology</h3>

        <p>
          <strong>Kisqali (ribociclib)</strong> — 2025 Sales: $3.1 billion<br/>
          CDK4/6 inhibitor for hormone receptor-positive, HER2-negative advanced or metastatic breast cancer. Proven to extend overall survival in multiple clinical trials.
        </p>

        <p>
          <strong>Promacta/Revolade (eltrombopag)</strong> — 2025 Sales: $1.8 billion<br/>
          Oral thrombopoietin receptor agonist for chronic immune thrombocytopenia and severe aplastic anemia.
        </p>

        <p>
          <strong>Pluvicto (lutetium-177 vipivotide tetraxetan)</strong> — 2025 Sales: $1.6 billion<br/>
          First FDA-approved radioligand therapy for PSMA-positive metastatic castration-resistant prostate cancer. Represents Novartis's leadership in radioligand therapy technology.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Immunology</h3>

        <p>
          <strong>Cosentyx (secukinumab)</strong> — 2025 Sales: $5.3 billion<br/>
          First fully human monoclonal antibody targeting IL-17A for psoriasis, psoriatic arthritis, and ankylosing spondylitis. Novartis's second-largest selling drug globally.
        </p>

        <p>
          <strong>Ilaris (canakinumab)</strong> — 2025 Sales: $980 million<br/>
          IL-1β inhibitor for rare auto-inflammatory diseases including Still's disease and systemic juvenile idiopathic arthritis.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Ophthalmology</h3>

        <p>
          <strong>Lucentis (ranibizumab)</strong> — 2025 Sales: $1.2 billion<br/>
          Anti-VEGF therapy for wet age-related macular degeneration and diabetic macular edema. Faces biosimilar competition but remains important treatment option.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Cell & Gene Therapy</h3>

        <p>
          <strong>Kymriah (tisagenlecleucel)</strong> — 2025 Sales: $620 million<br/>
          First FDA-approved CAR-T cell therapy for certain types of leukemia and lymphoma. One-time treatment with curative potential for previously untreatable cancers.
        </p>

        <p>
          Novartis's top 10 drugs account for approximately 65% of total pharmaceutical sales, with Entresto and Cosentyx serving as the company's flagship franchises. The company has over 30 drugs in late-stage clinical development and aims to launch 15+ new molecular entities by 2029.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Research & Development
        </h2>

        <p>
          Novartis maintains one of the pharmaceutical industry's largest R&D operations, investing $9.6 billion annually (19.5% of net sales) into drug discovery and development. The company operates major research facilities in Basel (Switzerland), Cambridge (Massachusetts), and East Hanover (New Jersey).
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Technology Platforms & Focus Areas</h3>

        <p>
          <strong>Radioligand Therapy (RLT):</strong> Novartis is the global leader in radioligand therapy, which uses targeted radiation to destroy cancer cells. Following success with Pluvicto for prostate cancer, the company has 10+ radioligand candidates in clinical development for various solid tumors. Expects RLT to become multi-billion dollar franchise by 2030.
        </p>

        <p>
          <strong>Cell & Gene Therapy:</strong> Building on Kymriah's foundation, Novartis is developing next-generation CAR-T and cell therapies for solid tumors and autoimmune diseases. The company operates manufacturing facilities in New Jersey and Singapore dedicated to autologous cell therapy production.
        </p>

        <p>
          <strong>RNA Therapeutics:</strong> Following success with Leqvio (siRNA for cholesterol), Novartis is expanding RNA-based approaches including siRNA, antisense oligonucleotides, and mRNA technologies. Multiple cardiovascular and neurological programs in clinical stages.
        </p>

        <p>
          <strong>Precision Medicine & Biomarkers:</strong> Heavy investment in companion diagnostics and biomarker-driven drug development. Partners with genetic testing companies to identify patient populations most likely to benefit from Novartis therapies.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Clinical Pipeline Highlights</h3>

        <p>
          As of January 2026, Novartis has 65+ compounds in clinical development:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Phase III:</strong> 22 programs including radioligand therapies, next-gen immunology drugs, and cardiovascular innovations</li>
          <li><strong>Phase II:</strong> 28 programs spanning oncology, neuroscience, and rare diseases</li>
          <li><strong>Phase I:</strong> 15+ early-stage candidates including novel cell therapies and first-in-class mechanisms</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Corporate Leadership
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Executive Team</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Vas Narasimhan, MD</h4>
            <p className="text-sm text-gray-500 mb-2">Chief Executive Officer (since 2018)</p>
            <p className="text-sm">
              Physician-scientist who previously served as Novartis's Global Head of Drug Development and Chief Medical Officer. Trained at Harvard Medical School and Harvard Business School. At 42, became youngest CEO of a major pharmaceutical company when appointed.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Harry Kirsch</h4>
            <p className="text-sm text-gray-500 mb-2">Chief Financial Officer</p>
            <p className="text-sm">
              Oversees financial strategy, capital allocation, and investor relations. Previously held senior finance roles at Novartis and Pfizer.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Fiona Marshall, PhD</h4>
            <p className="text-sm text-gray-500 mb-2">President, Biomedical Research</p>
            <p className="text-sm">
              Leads global R&D organization with responsibility for drug discovery and early development. Previously held senior research positions at Heptares Therapeutics.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Joerg Reinhardt</h4>
            <p className="text-sm text-gray-500 mb-2">Chairman of the Board (since 2013)</p>
            <p className="text-sm">
              Former Chief Operating Officer of Novartis and former CEO of Bayer HealthCare.
            </p>
          </div>
        </div>

        <p>
          Novartis is governed by a Board of Directors elected by shareholders at the Annual General Meeting. The Board operates under Swiss corporate governance standards and includes independent directors with expertise in pharmaceuticals, biotechnology, finance, and healthcare policy.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Recent Developments
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <h4 className="font-bold mb-2">🆕 Latest: Medicare Pricing Legal Challenge</h4>
          <p className="text-sm mb-3">
            In January 2026, Novartis became the sixth major drugmaker to challenge Medicare's drug price negotiation program at the Supreme Court, joining Merck, Bristol Myers Squibb, and others in arguing the program violates constitutional protections.
          </p>
          <Link 
            href="/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations"
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Read full coverage: Novartis Challenges Medicare Drug Price Negotiations →
          </Link>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">2024-2026 Key Developments</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sandoz Separation (2023):</strong> Completed spin-off of generics business as independent company</li>
          <li><strong>Radioligand Expansion:</strong> Major investments in RLT manufacturing and clinical development</li>
          <li><strong>Entresto Growth:</strong> Continued expansion reaching $7.2B annual sales</li>
          <li><strong>Legal Challenges:</strong> Supreme Court challenge to Medicare drug pricing negotiations</li>
          <li><strong>Manufacturing Quality:</strong> FDA warning letters addressed with $400M remediation</li>
          <li><strong>Pipeline Advances:</strong> Multiple Phase III readouts expected in cardiovascular and oncology</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          External Links
        </h2>

        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.novartis.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Official Novartis Website
            </a>
          </li>
          <li>
            <a 
              href="https://www.novartis.com/investors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Novartis Investor Relations
            </a>
          </li>
          <li>
            <a 
              href="https://www.novartis.com/research-development/novartis-pipeline" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Clinical Pipeline Information
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/company/novartis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Novartis on LinkedIn
            </a>
          </li>
        </ul>

      </DynamicNewsArticle>
    </>
  );
}
