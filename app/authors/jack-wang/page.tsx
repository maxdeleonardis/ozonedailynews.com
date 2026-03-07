import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { AuthorSchema } from "@/components/AuthorSchema";
import AuthorArticles from "@/components/AuthorArticles";
import { getEntriesByAuthor } from '@/lib/content-registry';

const AUTHOR_SLUG = "jack-wang";
const authorArticles = getEntriesByAuthor(AUTHOR_SLUG);

export const metadata: Metadata = {
  title: "Jack Wang | Contributor & Journalist — ObjectWire",
  description: `Jack Wang is a co-founder and contributor at ObjectWire. ${authorArticles.length} published articles covering technology, gaming, finance, and digital culture.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/authors/jack-wang`,
  },
  openGraph: {
    title: "Jack Wang | ObjectWire Contributor",
    description: "Co-founder bringing insightful metaphors and deep perspectives to journalism.",
    type: "profile",
    url: `${SITE_CONFIG.url}/authors/jack-wang`,
  },
};

export default function JackSAuthorPage() {
  return (
    <>
      <AuthorSchema
        name="Jack Wang"
        jobTitle="Co-Founder & Contributor"
        description="Co-founder of ObjectWire with a long history of cunning and insightful metaphors for life and art."
        url={`${SITE_CONFIG.url}/authors/jack-wang`}
        knowsAbout={[
          "Technology",
          "Software Engineering",
          "Gaming",
          "Digital Culture",
          "AI & Machine Learning",
          "SaaS",
          "Startups",
        ]}
        sameAs={[]}
        location={{ city: "Austin", region: "Texas" }}
        articleCount={authorArticles.length}
      />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/authors" className="hover:text-gray-900">Authors</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Jack Wang</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-start gap-6">
              {/* Author Avatar Placeholder */}
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
                JW
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Jack Wang
                </h1>
                <p className="text-xl text-gray-600 mb-1">
                  Co-Founder &amp; Contributor
                </p>
                <p className="text-gray-500 mb-3">
                  Austin, TX
                </p>
                {/* Publication stats */}
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                    {authorArticles.length} Articles Published
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-semibold">
                    📍 Austin, TX
                  </span>
                </div>
              </div>
            </div>
          </header>

          <section className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About Jack Wang
              </h2>
              <p className="text-gray-700 mb-4">
                Jack Wang is a co-founder and contributor at ObjectWire, covering technology,
                gaming, SaaS, and digital culture. His writing combines rigorous research with
                incisive analysis — every article is grounded in verified data and primary sources.
              </p>
              <p className="text-gray-700">
                His work spans AI developer tools, gaming industry coverage, and startup
                analysis, bringing the same depth to a Cursor ARR milestone as to a Pokémon
                franchise record or Gran Turismo deep-dive.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Core Values & Specializations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Core Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Truth and accuracy</li>
                    <li>• Fairness and balance</li>
                    <li>• Independence</li>
                    <li>• Accountability</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Beats</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 💻 Technology & SaaS</li>
                    <li>• 🎮 Gaming & Reviews</li>
                    <li>• 🤖 AI Developer Tools</li>
                    <li>• 📊 Startup Analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <AuthorArticles authorSlug={AUTHOR_SLUG} />
          </section>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="/authors"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              ← All Authors
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
