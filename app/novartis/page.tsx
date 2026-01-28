import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Novartis: Swiss Pharmaceutical Company Profile & History | ObjectWire',
  description: 'Complete profile of Novartis AG, one of the world\'s largest pharmaceutical companies. Founded 1996, specializing in cardiovascular, oncology, and immunology drugs with $49B annual revenue.',
  keywords: [
    'Novartis',
    'Novartis AG',
    'Swiss pharmaceutical company',
    'Entresto',
    'cardiovascular drugs',
    'oncology drugs',
    'Novartis history',
    'pharmaceutical industry',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/novartis',
  },
  openGraph: {
    title: 'Novartis: Swiss Pharmaceutical Company Profile & History',
    description: 'Complete profile of Novartis AG, one of the world\'s largest pharmaceutical companies.',
    type: 'article',
    url: 'https://www.objectwire.org/novartis',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novartis: Swiss Pharmaceutical Company Profile',
    description: 'One of the world\'s largest pharmaceutical companies specializing in innovative medicines.',
  },
};

export default function NovartisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <NewsArticleSchema
        headline="Novartis: Swiss Pharmaceutical Company Profile & History"
        description="Complete profile of Novartis AG, one of the world's largest pharmaceutical companies. Founded 1996, specializing in cardiovascular, oncology, and immunology drugs."
        datePublished="2024-05-12T00:00:00Z"
        dateModified="2026-01-27T17:00:00Z"
        authorName="ObjectWire Editorial Team"
        publisherName="ObjectWire"
        publisherLogoUrl="https://www.objectwire.org/logo.png"
        imageUrl="https://www.objectwire.org/novartis-company.jpg"
        url="https://www.objectwire.org/novartis"
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Novartis', href: '/novartis' },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Novartis AG
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Global Leader in Innovative Pharmaceutical Research and Development
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-12 bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Company Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Novartis AG</strong> is a Swiss multinational pharmaceutical corporation headquartered in Basel, Switzerland. As one of the world's largest pharmaceutical companies by revenue and market capitalization, Novartis focuses on innovative medicines in areas of significant unmet medical need, including cardiovascular disease, oncology, immunology, ophthalmology, and neuroscience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-5 border border-blue-500/30">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Company Information</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Founded:</strong> 1996 (merger)</li>
                  <li><strong>Headquarters:</strong> Basel, Switzerland</li>
                  <li><strong>CEO:</strong> Vas Narasimhan (since 2018)</li>
                  <li><strong>Employees:</strong> ~74,000 (2025)</li>
                  <li><strong>Stock Symbol:</strong> NVS (NYSE), NOVN (SIX)</li>
                  <li><strong>Market Cap:</strong> ~$220B (Jan 2026)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg p-5 border border-red-500/30">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Financial Performance</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Net Sales (2025):</strong> $49.2 billion</li>
                  <li><strong>R&D Investment:</strong> $9.6 billion (19.5% of sales)</li>
                  <li><strong>Operating Income:</strong> $11.8 billion</li>
                  <li><strong>Net Income:</strong> $8.4 billion</li>
                  <li><strong>Geographic Mix:</strong> 45% Americas, 30% Europe, 25% Asia</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Novartis operates primarily through its Innovative Medicines division following the spin-off of eye care division Alcon in 2019 and the divestiture of generics unit Sandoz in 2023. The company maintains one of the largest pharmaceutical R&D budgets globally, investing nearly 20% of revenue into drug discovery and development.
            </p>
          </section>

          {/* Company History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Company History</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Pre-Merger Heritage (1758-1996)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Novartis's roots trace back to the 18th century chemical industry in Basel, Switzerland. The company formed through the 1996 merger of two Swiss pharmaceutical giants:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Ciba-Geigy:</strong> Formed in 1970 through merger of Ciba (founded 1859) and Geigy (founded 1758), with expertise in dyes, agricultural chemicals, and pharmaceuticals</li>
                  <li><strong>Sandoz:</strong> Founded in 1886 as a dye manufacturer, pioneering psychopharmacology research (LSD synthesis in 1938) and becoming a major pharmaceutical producer</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-green-400 mb-3">1996: Formation of Novartis</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  On December 20, 1996, Ciba-Geigy and Sandoz merged to form Novartis in what was then the largest corporate merger in history, valued at $27 billion. The company name derives from the Latin "novae artes" meaning "new skills."
                </p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The merger created a pharmaceutical powerhouse with combined annual sales of $21 billion, 82,000 employees, and a diverse portfolio spanning prescription drugs, over-the-counter medicines, generics, animal health, and agricultural products.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Daniel Vasella became the first CEO, leading a strategic restructuring that would define Novartis as a focused innovative pharmaceutical company over the following two decades.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">1997-2010: Diversification Era</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  <strong>Strategic Acquisitions:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-3">
                  <li>2010: Acquired Alcon (eye care) for $52 billion, largest acquisition in pharmaceutical history</li>
                  <li>2006: Acquired Chiron (vaccines/diagnostics) for $5.4 billion</li>
                  <li>2005: Sandoz generics business expanded through acquisition of German generics maker Hexal and Eon Labs</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  During this period, Novartis operated as a diversified healthcare conglomerate with four divisions: Pharmaceuticals, Alcon (eye care), Sandoz (generics), and Consumer Health.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">2011-2017: Pipeline Transformation</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Under CEO Joseph Jimenez, Novartis underwent significant R&D restructuring, shifting focus toward breakthrough therapies in oncology, cardiology, and immunology:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>2015: FDA approved Entresto (sacubitril/valsartan), groundbreaking heart failure drug</li>
                  <li>2017: FDA approved Kymriah, first CAR-T cell therapy for cancer treatment</li>
                  <li>Divested non-core assets including animal health and vaccines businesses</li>
                  <li>Closed or consolidated 25% of manufacturing sites as part of efficiency drive</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-red-400 mb-3">2018-Present: Focus Strategy</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  <strong>2018:</strong> Vas Narasimhan appointed CEO at age 42, youngest CEO in Novartis history. Implemented "focused medicines" strategy:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-3">
                  <li>2019: Spun off Alcon eye care division as independent publicly traded company</li>
                  <li>2020: Divested stake in Roche (held since 2001)</li>
                  <li>2023: Completed separation of Sandoz generics business</li>
                  <li>2024-2025: Major investments in radioligand therapy and cell/gene therapy platforms</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  By 2026, Novartis operates exclusively as a focused innovative pharmaceutical company, concentrating R&D on five therapeutic areas where it aims for leadership: cardiovascular/renal/metabolic, immunology, oncology, neuroscience, and ophthalmology.
                </p>
              </div>
            </div>
          </section>

          {/* Key Drugs & Products */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Major Products & Drug Portfolio</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Novartis's pharmaceutical portfolio includes numerous blockbuster drugs generating over $1 billion annually in sales. The company's top therapeutic areas and flagship medications include:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-lg p-6 border border-red-500/30">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4">Cardiovascular & Renal</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">Entresto (sacubitril/valsartan)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $7.2 billion</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      First-in-class heart failure treatment combining neprilysin inhibitor and angiotensin receptor blocker. Approved for heart failure with reduced ejection fraction (HFrEF). Considered a landmark therapy that significantly reduces cardiovascular death and hospitalization compared to ACE inhibitors.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Leqvio (inclisiran)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $880 million</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      First siRNA therapy for high cholesterol, administered twice yearly. Breakthrough technology using RNA interference to lower LDL cholesterol for patients at high cardiovascular risk.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-6 border border-purple-500/30">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4">Oncology</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">Kisqali (ribociclib)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $3.1 billion</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      CDK4/6 inhibitor for hormone receptor-positive, HER2-negative advanced or metastatic breast cancer. Proven to extend overall survival in multiple clinical trials.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">Promacta/Revolade (eltrombopag)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $1.8 billion</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Oral thrombopoietin receptor agonist for chronic immune thrombocytopenia and severe aplastic anemia.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Pluvicto (lutetium-177 vipivotide tetraxetan)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $1.6 billion</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      First FDA-approved radioligand therapy for PSMA-positive metastatic castration-resistant prostate cancer. Represents Novartis's leadership in radioligand therapy technology.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg p-6 border border-green-500/30">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Immunology</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">Cosentyx (secukinumab)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $5.3 billion</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      First fully human monoclonal antibody targeting IL-17A for psoriasis, psoriatic arthritis, and ankylosing spondylitis. Novartis's second-largest selling drug globally.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Ilaris (canakinumab)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $980 million</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      IL-1β inhibitor for rare auto-inflammatory diseases including Still's disease and systemic juvenile idiopathic arthritis.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-6 border border-yellow-500/30">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Ophthalmology</h3>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Lucentis (ranibizumab)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $1.2 billion</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Anti-VEGF therapy for wet age-related macular degeneration and diabetic macular edema. Faces biosimilar competition but remains important treatment option.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-6 border border-pink-500/30">
                  <h3 className="text-2xl font-semibold text-pink-400 mb-4">Cell & Gene Therapy</h3>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Kymriah (tisagenlecleucel)</h4>
                    <p className="text-gray-300 text-sm mb-2"><strong>2025 Sales:</strong> $620 million</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      First FDA-approved CAR-T cell therapy for certain types of leukemia and lymphoma. One-time treatment with curative potential for previously untreatable cancers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Portfolio Summary</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Novartis's top 10 drugs account for approximately 65% of total pharmaceutical sales, with Entresto and Cosentyx serving as the company's flagship franchises. The company has over 30 drugs in late-stage clinical development and aims to launch 15+ new molecular entities by 2029.
                </p>
              </div>
            </div>
          </section>

          {/* Research & Development */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Research & Development</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Novartis maintains one of the pharmaceutical industry's largest R&D operations, investing $9.6 billion annually (19.5% of net sales) into drug discovery and development. The company operates major research facilities in Basel (Switzerland), Cambridge (Massachusetts), and East Hanover (New Jersey).
              </p>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Technology Platforms & Focus Areas</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-5 border border-purple-500/30">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Radioligand Therapy (RLT)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Novartis is the global leader in radioligand therapy, which uses targeted radiation to destroy cancer cells. Following success with Pluvicto for prostate cancer, the company has 10+ radioligand candidates in clinical development for various solid tumors. Expects RLT to become multi-billion dollar franchise by 2030.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-5 border border-blue-500/30">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Cell & Gene Therapy</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Building on Kymriah's foundation, Novartis is developing next-generation CAR-T and cell therapies for solid tumors and autoimmune diseases. The company operates manufacturing facilities in New Jersey and Singapore dedicated to autologous cell therapy production.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg p-5 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">RNA Therapeutics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Following success with Leqvio (siRNA for cholesterol), Novartis is expanding RNA-based approaches including siRNA, antisense oligonucleotides, and mRNA technologies. Multiple cardiovascular and neurological programs in clinical stages.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-5 border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Precision Medicine & Biomarkers</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Heavy investment in companion diagnostics and biomarker-driven drug development. Partners with genetic testing companies to identify patient populations most likely to benefit from Novartis therapies.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Clinical Pipeline Highlights</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As of January 2026, Novartis has 65+ compounds in clinical development:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Phase III:</strong> 22 programs including radioligand therapies, next-gen immunology drugs, and cardiovascular innovations</li>
                <li><strong>Phase II:</strong> 28 programs spanning oncology, neuroscience, and rare diseases</li>
                <li><strong>Phase I:</strong> 15+ early-stage candidates including novel cell therapies and first-in-class mechanisms</li>
              </ul>
            </div>
          </section>

          {/* Corporate Structure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Corporate Structure & Leadership</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Executive Leadership</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">Vas Narasimhan, MD</h4>
                  <p className="text-gray-400 text-sm mb-2">Chief Executive Officer (since 2018)</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Physician-scientist who previously served as Novartis's Global Head of Drug Development and Chief Medical Officer. Trained at Harvard Medical School and Harvard Business School. At 42, became youngest CEO of a major pharmaceutical company when appointed. Led strategic transformation focusing Novartis exclusively on innovative medicines.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Harry Kirsch</h4>
                  <p className="text-gray-400 text-sm mb-2">Chief Financial Officer</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Oversees financial strategy, capital allocation, and investor relations. Previously held senior finance roles at Novartis and Pfizer.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">Fiona Marshall, PhD</h4>
                  <p className="text-gray-400 text-sm mb-2">President, Biomedical Research</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Leads global R&D organization with responsibility for drug discovery and early development. Previously held senior research positions at Heptares Therapeutics (acquired by Sosei Group).
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Board of Directors</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Novartis is governed by a Board of Directors elected by shareholders at the Annual General Meeting. The Board operates under Swiss corporate governance standards and includes independent directors with expertise in pharmaceuticals, biotechnology, finance, and healthcare policy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Chairman:</strong> Joerg Reinhardt (since 2013), former Chief Operating Officer of Novartis and former CEO of Bayer HealthCare.
              </p>
            </div>
          </section>

          {/* Market Position & Competition */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Market Position & Competition</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Novartis ranks among the top 5 global pharmaceutical companies by prescription drug revenue, competing directly with Pfizer, Roche, Johnson & Johnson, Merck, and AstraZeneca for market share across major therapeutic categories.
              </p>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Competitive Positioning</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-900/30 rounded-lg p-5 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Competitive Strengths</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Leadership in radioligand therapy</li>
                    <li>• Strong cardiovascular franchise (Entresto)</li>
                    <li>• Diversified oncology portfolio</li>
                    <li>• First-mover advantage in CAR-T therapy</li>
                    <li>• High R&D productivity (19.5% of sales)</li>
                    <li>• Swiss headquarters provides tax efficiency</li>
                  </ul>
                </div>

                <div className="bg-red-900/30 rounded-lg p-5 border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Competitive Challenges</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Patent expirations (Gilenya 2019, others pending)</li>
                    <li>• <Link href="/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations" className="text-blue-400 hover:text-blue-300 underline">Medicare price negotiations</Link> pressure</li>
                    <li>• Biosimilar competition (Lucentis, others)</li>
                    <li>• High cost structure vs. emerging biotech</li>
                    <li>• Limited consumer health presence post-divestiture</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Key Competitors by Therapeutic Area</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Cardiovascular:</strong> Boehringer Ingelheim (Jardiance), AstraZeneca (Farxiga), Amgen (Repatha)</li>
                <li><strong>Oncology:</strong> Roche (Keytruda competitor), Bristol Myers Squibb, Merck</li>
                <li><strong>Immunology:</strong> AbbVie (Humira/Skyrizi), Johnson & Johnson (Stelara), Eli Lilly</li>
                <li><strong>Ophthalmology:</strong> Regeneron (Eylea), Roche (biosimilar Lucentis)</li>
              </ul>
            </div>
          </section>

          {/* Recent Controversies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Recent Developments & Challenges</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Medicare Price Negotiations Challenge</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                In January 2026, Novartis became the <Link href="/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations" className="text-blue-400 hover:text-blue-300 underline">sixth pharmaceutical company to petition the U.S. Supreme Court</Link> to block Medicare drug price negotiations under the Inflation Reduction Act. The company argues that mandatory negotiations for Entresto (heart failure drug) violate constitutional protections against government takings and compelled speech.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Analysts estimate that Medicare price negotiations could reduce Entresto's annual U.S. revenue by $800 million to $1.2 billion, significantly impacting Novartis's cardiovascular franchise profitability.
              </p>

              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Manufacturing Quality Issues (2024)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Novartis received FDA warning letters for manufacturing deficiencies at facilities in Nebraska and Austria, resulting in temporary production suspensions. The company invested $400 million in remediation efforts and third-party quality audits, with full regulatory compliance restored by Q4 2025.
              </p>

              <h3 className="text-2xl font-semibold text-green-400 mb-4">Sandoz Separation (2023)</h3>
              <p className="text-gray-300 leading-relaxed">
                Completed spin-off of Sandoz generics and biosimilars business as independent publicly traded company, allowing Novartis to focus exclusively on innovative medicines. The separation unlocked shareholder value and simplified corporate structure, though reduced overall revenue scale.
              </p>
            </div>
          </section>

          {/* Future Outlook */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Future Outlook & Strategic Priorities</h2>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg p-8 border border-indigo-500/30">
              <p className="text-gray-300 leading-relaxed mb-6">
                Under CEO Vas Narasimhan's leadership, Novartis has articulated a clear strategic vision for 2026-2030 focused on becoming a "focused medicines company" delivering transformative therapies in areas of high unmet need.
              </p>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Strategic Priorities Through 2030</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Pipeline Execution:</strong> Launch 15+ new molecular entities targeting $25B+ peak sales potential</li>
                <li><strong>Radioligand Leadership:</strong> Establish RLT as standard of care across multiple cancers; 10+ programs in development</li>
                <li><strong>Technology Platforms:</strong> Advance cell therapy, RNA therapeutics, and precision medicine capabilities</li>
                <li><strong>Geographic Expansion:</strong> Grow presence in China and emerging markets (target 30% of sales by 2030)</li>
                <li><strong>Operational Excellence:</strong> Improve gross margins from 76% to 80%+ through manufacturing optimization</li>
                <li><strong>M&A Strategy:</strong> Pursue bolt-on acquisitions in radioligand therapy and neuroscience</li>
              </ul>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Financial Guidance</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Novartis projects mid-single-digit revenue growth through 2030, driven by new product launches offsetting patent expirations and pricing pressures. The company aims to return $15+ billion to shareholders annually through dividends and share buybacks while maintaining investment-grade credit ratings.
              </p>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Analyst Consensus</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wall Street analysts maintain generally positive outlooks on Novartis, citing strong pipeline execution, radioligand therapy leadership, and disciplined capital allocation. Concerns focus on Medicare pricing pressures, patent cliff risks, and execution challenges with complex cell/gene therapies. Average 12-month price target: $115-$125 per share (current: ~$108).
                </p>
              </div>
            </div>
          </section>

          {/* Related Coverage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations"
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-6 hover:from-blue-800/50 hover:to-purple-800/50 transition-all border border-blue-500/30"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Novartis Supreme Court Challenge</h3>
                <p className="text-gray-300 text-sm">
                  Latest news on Novartis's legal challenge to Medicare drug price negotiations.
                </p>
              </Link>

              <Link 
                href="/news"
                className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-lg p-6 hover:from-red-800/50 hover:to-orange-800/50 transition-all border border-red-500/30"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2">Pharmaceutical Industry News</h3>
                <p className="text-gray-300 text-sm">
                  Breaking coverage of drug approvals, clinical trials, and healthcare policy.
                </p>
              </Link>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">External Resources</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.novartis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Official Novartis Website
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.novartis.com/investors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Novartis Investor Relations
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.novartis.com/research-development/novartis-pipeline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Clinical Pipeline Information
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/novartis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Novartis on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
