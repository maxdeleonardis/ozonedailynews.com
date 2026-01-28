import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Johns Hopkins Releases First Clinical Guidance on Psychedelic Psychiatry | ObjectWire",
  description: "Johns Hopkins Medicine launches groundbreaking clinical guidance for psychedelic medicine, covering psilocybin, ketamine, and MDMA treatments. First evidence-based resource for healthcare providers in emerging psychedelic psychiatry field.",
  keywords: [
    "Johns Hopkins psychedelic medicine",
    "psychedelic psychiatry guidance",
    "psilocybin clinical guidance",
    "ketamine treatment",
    "MDMA therapy",
    "psychedelic-assisted therapy",
    "mental health treatment",
    "Johns Hopkins Medicine",
    "Unbound Medicine",
    "POC-IT Guide",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/johns-hopkins-psychedelic-psychiatry-clinical-guidance',
  },
  openGraph: {
    title: "Johns Hopkins Releases First Clinical Guidance on Psychedelic Psychiatry",
    description: "Groundbreaking clinical resource covers psilocybin, ketamine, and MDMA treatments for mental health conditions. First evidence-based guidance for healthcare providers.",
    type: "article",
    url: "https://www.objectwire.org/news/johns-hopkins-psychedelic-psychiatry-clinical-guidance",
    images: [
      {
        url: "https://www.objectwire.org/images/johns-hopkins-psychedelic-guidance-og.jpg",
        width: 1200,
        height: 630,
        alt: "Johns Hopkins Psychedelic Psychiatry Clinical Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johns Hopkins Releases First Clinical Guidance on Psychedelic Psychiatry",
    description: "Groundbreaking resource covers psilocybin, ketamine, and MDMA for mental health treatment.",
    images: ["https://www.objectwire.org/images/johns-hopkins-psychedelic-guidance-twitter.jpg"],
  },
};

export default function JohnsHopkinsPsychedelicGuidancePage() {
  const publishedDate = new Date("2026-01-27T18:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Johns Hopkins Releases First Clinical Guidance on Psychedelic Psychiatry"
        description="Johns Hopkins Medicine and Unbound Medicine launch the first evidence-based clinical guidance for psychedelic medicine, covering psilocybin, ketamine, and MDMA treatments for mental health conditions."
        author="ObjectWire Health Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/johns-hopkins-psychedelic-guidance.jpg"
        articleUrl="https://www.objectwire.org/news/johns-hopkins-psychedelic-psychiatry-clinical-guidance"
        section="Health & Science"
        keywords={["psychedelic medicine", "Johns Hopkins", "psilocybin", "ketamine", "MDMA", "mental health"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-purple-200 text-sm font-mono tracking-wider mb-4">
              HEALTH & SCIENCE • BREAKING NEWS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Johns Hopkins Releases First Clinical Guidance on Psychedelic Psychiatry
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Groundbreaking resource covers psilocybin, ketamine, and MDMA treatments, 
              marking a major milestone in evidence-based psychedelic medicine
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Published January 27, 2026</span>
              <span>•</span>
              <span>Health & Science</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "News", item: "/news" },
            { name: "Johns Hopkins Psychedelic Guidance", item: "/news/johns-hopkins-psychedelic-psychiatry-clinical-guidance" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Featured Image Placeholder */}
          <div className="my-8 bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🍄</div>
                <p className="text-gray-600 font-mono text-sm">
                  [IMAGE PLACEHOLDER: Johns Hopkins Medicine Building / Psychedelic Medicine Lab]
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic p-4 bg-gray-50">
              Johns Hopkins Medicine has released the first comprehensive clinical guidance for psychedelic psychiatry
            </p>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Johns Hopkins Medicine and Unbound Medicine have released the first evidence-based clinical guidance on psychedelic 
            medicine, providing healthcare providers with standardized protocols for psilocybin, ketamine, and MDMA treatments.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included in the Guidance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The new modules have been integrated into the <strong>Johns Hopkins Psychiatry POC-IT Guide</strong>, covering:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <div className="text-3xl mb-2">🍄</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Psilocybin</h3>
                <p className="text-sm text-gray-700">Treatment-resistant depression and anxiety</p>
              </div>
              <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50">
                <div className="text-3xl mb-2">💊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Ketamine</h3>
                <p className="text-sm text-gray-700">FDA-approved for depression, off-label for PTSD</p>
              </div>
              <div className="border border-pink-200 rounded-lg p-4 bg-pink-50">
                <div className="text-3xl mb-2">💗</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">MDMA</h3>
                <p className="text-sm text-gray-700">Phase 3 trials for PTSD, FDA approval expected 2026</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The guidance includes a new <strong>patient education section</strong> to help providers explain treatments 
              in accessible language—addressing a critical gap in informed consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many healthcare providers lack formal training in psychedelic-assisted therapy despite growing patient 
              interest. The guidance provides standardized protocols for patient screening, safety considerations, and 
              integration therapy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Johns Hopkins' <strong>Center for Psychedelic and Consciousness Research</strong> has published over 100 
              peer-reviewed studies since 2000, uniquely positioning it to create evidence-based standards.
            </p>
            <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700 my-6 bg-gray-50 p-4 rounded-r-lg text-sm">
              "This guidance bridges the gap between cutting-edge research and clinical practice as psychedelic medicine 
              transitions from experimental to mainstream."
              <footer className="text-sm text-gray-600 mt-2 not-italic">— Dr. Matthew Johnson, Johns Hopkins</footer>
            </blockquote>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Current State of Psychedelic Medicine</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The guidance arrives as psychedelic psychiatry reaches critical milestones:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Ketamine/Esketamine:</strong> FDA-approved for treatment-resistant depression (2019)</li>
              <li><strong>MDMA:</strong> Completed Phase 3 trials; 67% of PTSD participants no longer met diagnostic criteria</li>
              <li><strong>Psilocybin:</strong> FDA "Breakthrough Therapy" designation; decriminalized in Oregon, Colorado</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Recent Johns Hopkins trials showed psilocybin produced a 71% reduction in depressive symptoms lasting at least 
              one year, while ketamine demonstrated rapid reduction in suicidal thoughts within hours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges Ahead</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite promise, significant barriers remain: treatment costs ($10,000-$15,000 per protocol), limited insurance 
              coverage, lack of standardized therapist certification, and concerns about over-commercialization as venture 
              capital floods the space.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access and Next Steps</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthcare professionals can access the guidance through <a href="https://www.unboundmedicine.com/" 
              target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">
              Unbound Medicine's</a> POC-IT platform via subscription or mobile app. CME credits are available.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Looking ahead: MDMA approval for PTSD expected in 2026, psilocybin for depression by 2027-2028, and more 
              states likely to decriminalize therapeutic use. The next decade may see psychedelic-assisted therapy become 
              as routine as antidepressants for treatment-resistant conditions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Learn more at <a href="https://www.hopkinsmedicine.org/psychiatry/specialty_areas/psychedelic-consciousness-research" 
              target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">
              Johns Hopkins Center for Psychedelic Research</a> or <a href="https://maps.org/" 
              target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">MAPS</a>.
            </p>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <a 
                href="https://www.hopkinsmedicine.org/psychiatry/specialty_areas/psychedelic-consciousness-research"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Johns Hopkins Psychedelic Research →</h4>
                <p className="text-sm text-gray-600">Official research center information</p>
              </a>
              <a 
                href="https://www.unboundmedicine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Unbound Medicine POC-IT Guide →</h4>
                <p className="text-sm text-gray-600">Access clinical guidance tool</p>
              </a>
              <a 
                href="https://maps.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">MAPS Research →</h4>
                <p className="text-sm text-gray-600">Psychedelic research and advocacy</p>
              </a>
              <a 
                href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-new-nasal-spray-medication-treatment-resistant-depression-only-available-certified"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">FDA Esketamine Approval →</h4>
                <p className="text-sm text-gray-600">First FDA-approved psychedelic treatment</p>
              </a>
            </div>

            <div className="mt-8">
              <Link 
                href="/news"
                className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                ← Back to News
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
