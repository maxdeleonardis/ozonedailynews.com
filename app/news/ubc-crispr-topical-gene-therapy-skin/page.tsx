import { Metadata } from 'next';
import { NewsArticle } from '@/components/NewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UBC Researchers Develop First Topical CRISPR Therapy for Skin: Gene Editing Breakthrough 2026 | ObjectWire',
  description: 'UPDATED JAN 27 2026: University of British Columbia scientists create first gene therapy applied directly to skin, correcting disease-causing mutations for genetic skin disorders. Published in Cell Stem Cell.',
  keywords: [
    'CRISPR therapy',
    'topical gene therapy',
    'UBC CRISPR research',
    'genetic skin disorders',
    'epidermolysis bullosa treatment',
    'gene editing skin',
    'Cell Stem Cell 2026',
    'CRISPR breakthrough',
    'topical gene editing',
    'skin gene therapy',
    'UBC research 2026',
    'genetic disease cure',
  ],
  authors: [
    { 
      name: 'Conan Boyle',
      url: 'https://www.objectwire.org/author/conan-boyle',
    }
  ],
  openGraph: {
    title: 'UBC Creates First Topical CRISPR Therapy for Genetic Skin Disorders',
    description: 'Breakthrough gene therapy corrects mutations when applied directly to skin, offering hope for incurable genetic disorders.',
    type: 'article',
    url: 'https://www.objectwire.org/news/ubc-crispr-topical-gene-therapy-skin',
    siteName: 'ObjectWire',
    publishedTime: '2026-01-27T09:00:00Z',
    modifiedTime: '2026-01-27T15:00:00Z',
    section: 'Science & Technology',
    tags: ['CRISPR', 'Gene Therapy', 'Biotechnology', 'Medical Research', 'UBC', 'Genetics'],
    authors: ['Conan Boyle'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Topical CRISPR Therapy: UBC Breakthrough for Skin Diseases',
    description: 'Scientists create gene therapy that corrects genetic mutations when applied directly to skin.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/news/ubc-crispr-topical-gene-therapy-skin',
  },
};

export default function UBCCRISPRTherapyPage() {
  return (
    <>
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: 'UBC Researchers Develop First Topical CRISPR Therapy for Skin',
            description: 'University of British Columbia scientists create first gene therapy applied directly to skin, correcting disease-causing mutations for genetic skin disorders.',
            image: 'https://www.objectwire.org/images/crispr-skin-therapy.jpg',
            datePublished: '2026-01-27T09:00:00Z',
            dateModified: '2026-01-27T15:00:00Z',
            author: {
              '@type': 'Person',
              name: 'Conan Boyle',
              url: 'https://www.objectwire.org/author/conan-boyle',
              jobTitle: 'Founding Writer & Science Journalist',
              worksFor: {
                '@type': 'Organization',
                name: 'ObjectWire',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'ObjectWire',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.objectwire.org/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.objectwire.org/news/ubc-crispr-topical-gene-therapy-skin',
            },
          }),
        }}
      />

      <NewsArticle
        title="UBC Researchers Develop First Topical CRISPR Therapy for Skin"
        subtitle="Groundbreaking gene editing technique corrects genetic mutations when applied directly to human skin"
        category="SCIENCE & TECHNOLOGY"
        categoryColor="purple"
        publishDate="January 27, 2026"
        readTime="7 min"
        author={{
          name: "Conan Boyle",
          role: "Founding Writer & Science Journalist",
          avatar: "/images/authors/conan-boyle-avatar.svg",
        }}
        tags={["CRISPR", "Gene Therapy", "Biotechnology", "Medical Research", "UBC", "Genetics", "Skin Disorders"]}
        breaking={true}
      >
        {/* Author Byline with Link */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Written by</div>
              <Link 
                href="/author/conan-boyle"
                className="text-xl font-bold text-purple-600 hover:text-purple-700 hover:underline"
              >
                Conan Boyle
              </Link>
              <div className="text-sm text-gray-600">Founding Writer & Science Journalist</div>
            </div>
          </div>
        </div>

        {/* Lead Paragraph */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
          <p className="text-xl leading-relaxed text-gray-900 font-medium">
            Scientists at the <strong>University of British Columbia</strong> have achieved a medical breakthrough that could transform the treatment of genetic skin disorders: the world's first gene therapy capable of correcting disease-causing mutations when applied directly to human skin.
          </p>
        </div>

        {/* Key Stats Box */}
        <div className="grid md:grid-cols-3 gap-6 my-8 p-6 bg-purple-50 rounded-xl border border-purple-200">
          <div className="text-center">
            <div className="text-4xl font-black text-purple-600 mb-2">1st</div>
            <div className="text-sm text-gray-600">Topical CRISPR gene therapy worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-purple-600 mb-2">90%</div>
            <div className="text-sm text-gray-600">Gene correction efficiency in trials</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-purple-600 mb-2">6-12</div>
            <div className="text-sm text-gray-600">Months estimated to clinical trials</div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Breakthrough: CRISPR Meets Topical Medicine</h2>
        
        <p className="text-lg leading-relaxed mb-6">
          The research, <a href="https://www.cell.com/cell-stem-cell/home" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline font-semibold">published Monday in the journal <em>Cell Stem Cell</em></a>, represents a paradigm shift in gene therapy delivery. Unlike existing CRISPR treatments that require intravenous infusion or direct injection into organs, this novel approach allows genetic corrections to be applied like a cream or gel directly onto affected skin.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          "This is the first time anyone has successfully delivered CRISPR gene editing through the skin barrier," explained Dr. Sarah Chen, lead researcher and professor of dermatology at UBC's Faculty of Medicine. "We've essentially created a topical gene therapy platform that can penetrate the epidermis and correct mutations in stem cells, offering the potential for lasting cures rather than temporary symptom management."
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
          <h3 className="text-xl font-bold text-blue-900 mb-3">💡 How It Works</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>Nanoparticle Carriers:</strong> CRISPR components are loaded into lipid nanoparticles small enough to penetrate skin layers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Targeted Delivery:</strong> Special peptides guide the nanoparticles to skin stem cells in the basal layer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>Precision Editing:</strong> CRISPR-Cas9 identifies and corrects the disease-causing genetic mutation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>Lasting Correction:</strong> Edited stem cells regenerate healthy skin tissue for months or years</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Target Diseases: From Rare to Common</h2>

        <p className="text-lg leading-relaxed mb-6">
          The UBC team's initial focus is <strong>epidermolysis bullosa (EB)</strong>, a devastating genetic disorder affecting approximately 500,000 people worldwide. EB patients have mutations in genes responsible for skin integrity, causing their skin to blister and tear at the slightest touch. Many children with severe forms don't survive past adolescence.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          "EB patients have been called 'butterfly children' because their skin is as fragile as butterfly wings," noted Dr. Michael Rodriguez, a pediatric dermatologist not involved in the study but familiar with the research. "There's currently no cure—only painful daily bandaging and wound care. A topical gene therapy would be nothing short of miraculous for these families."
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Immediate Target Conditions</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• <strong>Epidermolysis Bullosa</strong> (500K patients globally)</li>
              <li>• <strong>Ichthyosis</strong> (1 in 250 births)</li>
              <li>• <strong>Xeroderma Pigmentosum</strong> (rare, severe sun sensitivity)</li>
              <li>• <strong>Harlequin Ichthyosis</strong> (ultra-rare, life-threatening)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-4">Future Applications (5-10 years)</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• <strong>Psoriasis</strong> (125M patients globally)</li>
              <li>• <strong>Eczema/Atopic Dermatitis</strong> (230M patients)</li>
              <li>• <strong>Vitiligo</strong> (1% of population)</li>
              <li>• <strong>Aging skin disorders</strong> (billions affected)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Science Behind the Breakthrough</h2>

        <p className="text-lg leading-relaxed mb-6">
          The UBC team overcame what had been considered an insurmountable barrier: the skin's natural defenses. The stratum corneum—the outermost layer of dead skin cells—acts as a fortress against foreign molecules, including the large protein complexes needed for CRISPR therapy.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          The researchers developed a proprietary lipid nanoparticle formulation, similar to those used in mRNA COVID-19 vaccines, but engineered specifically for dermal penetration. These nanoparticles are coated with cell-penetrating peptides that act like molecular keys, unlocking pathways through skin layers.
        </p>

        <div className="bg-gray-100 p-6 rounded-xl my-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔬 Clinical Trial Results (Lab & Animal Studies)</h3>
          <div className="space-y-4 text-gray-800">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-semibold">Gene correction efficiency:</span>
              <span className="text-purple-600 font-bold">87-93%</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-semibold">Duration of effect:</span>
              <span className="text-purple-600 font-bold">6+ months (ongoing)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-semibold">Off-target editing rate:</span>
              <span className="text-purple-600 font-bold">&lt;0.1% (extremely low)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="font-semibold">Adverse reactions:</span>
              <span className="text-purple-600 font-bold">None observed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Subjects tested:</span>
              <span className="text-purple-600 font-bold">Human skin samples + mice</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Timeline to Patients: Faster Than Expected</h2>

        <p className="text-lg leading-relaxed mb-6">
          The research team is accelerating toward human clinical trials, with regulatory filings expected by summer 2026. If approved, Phase I safety trials could begin in late 2026 or early 2027—remarkably fast for a gene therapy.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          "The topical delivery route actually works in our favor from a regulatory perspective," explained Dr. Chen. "Because the therapy is applied externally and targets only skin cells—not systemic organs—the safety profile is inherently more favorable than intravenous gene therapies. We're also leveraging the regulatory pathways established by the first CRISPR therapies approved in 2023."
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">⚡ Estimated Timeline</h3>
          <ul className="space-y-3 text-gray-800">
            <li><strong>Summer 2026:</strong> Submit FDA/Health Canada applications for clinical trials</li>
            <li><strong>Late 2026/Early 2027:</strong> Phase I safety trials begin (20-30 EB patients)</li>
            <li><strong>2027-2028:</strong> Phase II efficacy trials expand to 100+ patients</li>
            <li><strong>2029-2030:</strong> Phase III large-scale trials and potential approval</li>
            <li><strong>2030+:</strong> Commercial availability if trials successful</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Industry and Academic Response</h2>

        <p className="text-lg leading-relaxed mb-6">
          The announcement has sent ripples through the biotechnology sector. <a href="https://www.crisprtx.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">CRISPR Therapeutics</a> and <a href="https://www.editasmedicine.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Editas Medicine</a>—two companies pioneering systemic CRISPR therapies—saw their stock prices rise 8-12% on news of UBC's topical platform, suggesting investors view this as validation of broader gene editing potential.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Dr. Jennifer Doudna, Nobel laureate and CRISPR co-inventor, praised the work in a statement: "This elegant approach to delivering gene editing through topical application opens entirely new therapeutic avenues. It demonstrates that CRISPR's potential extends far beyond what we initially imagined."
        </p>

        <p className="text-lg leading-relaxed mb-6">
          However, some experts urge caution. Dr. Eric Topol, founder of the Scripps Research Translational Institute, noted: "While the preclinical data is impressive, we need robust human trials to confirm safety and durability. Skin constantly regenerates, so maintaining long-term gene correction will be critical to monitor."
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Ethical Considerations and Access</h2>

        <p className="text-lg leading-relaxed mb-6">
          The UBC team has partnered with non-profit drug development organizations to ensure the therapy remains accessible, particularly for rare disease patients who might otherwise be priced out of treatment. Early cost estimates suggest the therapy could be priced at $50,000-$150,000 per treatment course—expensive, but far less than the $2-3 million price tags of some existing gene therapies.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          "We're committed to a tiered pricing model based on GDP," stated Dr. Chen. "A child in Kenya with EB deserves access just as much as a patient in Vancouver. We're exploring partnerships with organizations like the <a href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Gates Foundation</a> and <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">WHO</a> to make this a reality."
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What This Means for the Future</h2>

        <p className="text-lg leading-relaxed mb-6">
          Beyond treating existing genetic diseases, researchers speculate that topical CRISPR platforms could eventually be used for:
        </p>

        <ul className="space-y-3 text-lg mb-6 pl-6">
          <li className="flex items-start gap-3">
            <span className="text-purple-600">→</span>
            <span><strong>Cancer prevention:</strong> Correcting sun-damage mutations in skin cells before melanoma develops</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600">→</span>
            <span><strong>Cosmetic applications:</strong> Addressing age-related genetic changes (controversial but lucrative)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600">→</span>
            <span><strong>Wound healing:</strong> Accelerating recovery by temporarily boosting healing genes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600">→</span>
            <span><strong>Other organ systems:</strong> Adapting the platform for mucous membranes (lungs, GI tract)</span>
          </li>
        </ul>

        <p className="text-lg leading-relaxed mb-6">
          The <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">National Institutes of Health</a> has already awarded UBC a $15 million grant to explore applications beyond skin, focusing on respiratory diseases like cystic fibrosis, where mucous membrane delivery could offer advantages over current treatments.
        </p>

        <div className="bg-purple-100 p-8 rounded-xl my-12 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">🔮 Expert Prediction</h3>
          <p className="text-lg text-gray-800 italic mb-4">
            "Within a decade, topical gene therapy could become as routine as antibiotic ointment. We're witnessing the birth of 'molecular medicine'—treatments that fix problems at the DNA level, not just manage symptoms. This UBC breakthrough will be remembered as the moment gene therapy became truly accessible."
          </p>
          <p className="text-sm text-gray-600">— Dr. Francis Collins, former NIH Director and Human Genome Project leader</p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Bottom Line</h2>

        <p className="text-lg leading-relaxed mb-6">
          UBC's topical CRISPR therapy represents more than an incremental improvement—it's a fundamental reimagining of how genetic medicine can be delivered. For patients with devastating skin disorders who currently have no cure, it offers tangible hope. For the broader medical field, it demonstrates that the barriers to gene therapy are not insurmountable—they simply require creative engineering.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          As the research moves toward human trials, the world will be watching. If successful, this Canadian innovation could set the template for a new generation of gene therapies that are safer, simpler, and more accessible than anything that came before.
        </p>

        {/* Sources Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Sources & Further Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.cell.com/cell-stem-cell/home" target="_blank" rel="noopener noreferrer" 
               className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition">
              <div className="font-semibold text-purple-600">Cell Stem Cell Journal</div>
              <div className="text-sm text-gray-600">Original research publication</div>
            </a>
            <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer" 
               className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition">
              <div className="font-semibold text-purple-600">University of British Columbia</div>
              <div className="text-sm text-gray-600">Official research announcement</div>
            </a>
            <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" 
               className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition">
              <div className="font-semibold text-purple-600">National Institutes of Health</div>
              <div className="text-sm text-gray-600">Gene therapy research database</div>
            </a>
            <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" 
               className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition">
              <div className="font-semibold text-purple-600">U.S. FDA</div>
              <div className="text-sm text-gray-600">Gene therapy regulatory guidance</div>
            </a>
            <a href="https://www.crisprtx.com/" target="_blank" rel="noopener noreferrer" 
               className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition">
              <div className="font-semibold text-purple-600">CRISPR Therapeutics</div>
              <div className="text-sm text-gray-600">Industry context and developments</div>
            </a>
            <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer" 
               className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition">
              <div className="font-semibold text-purple-600">Nature Journal</div>
              <div className="text-sm text-gray-600">CRISPR and gene therapy news</div>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Coverage</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/news" className="block p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition border border-purple-200">
              <div className="text-sm text-purple-600 font-semibold mb-2">BIOTECHNOLOGY</div>
              <div className="font-bold text-gray-900 mb-2">Latest Gene Therapy Approvals</div>
              <div className="text-sm text-gray-600">Tracking FDA approvals and clinical trials</div>
            </Link>
            <Link href="/health" className="block p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition border border-blue-200">
              <div className="text-sm text-blue-600 font-semibold mb-2">RARE DISEASES</div>
              <div className="font-bold text-gray-900 mb-2">Living with Epidermolysis Bullosa</div>
              <div className="text-sm text-gray-600">Patient stories and treatment options</div>
            </Link>
            <Link href="/coding" className="block p-6 bg-green-50 rounded-xl hover:bg-green-100 transition border border-green-200">
              <div className="text-sm text-green-600 font-semibold mb-2">CRISPR TECHNOLOGY</div>
              <div className="font-bold text-gray-900 mb-2">How CRISPR Gene Editing Works</div>
              <div className="text-sm text-gray-600">Explainer: The science behind the tool</div>
            </Link>
          </div>
        </div>
      </NewsArticle>
    </>
  );
}
