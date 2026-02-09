import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

// Google News optimized author profile metadata
export const metadata: Metadata = {
  title: "Conan Boyle - Science & Technology Journalist | ObjectWire",
  description: "Conan Boyle is the founding writer of ObjectWire based in Austin, Texas. NCSU journalism graduate specializing in biotechnology, CRISPR, medical research, and emerging technologies.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contributors/conan-boyle`,
  },
  openGraph: {
    title: "Conan Boyle | ObjectWire Founding Writer",
    description: "Science & technology journalist covering biotechnology, CRISPR, medical breakthroughs, and emerging tech.",
    url: `${SITE_CONFIG.url}/contributors/conan-boyle`,
    siteName: "ObjectWire",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Conan Boyle - Science Journalist",
    description: "Founding writer at ObjectWire. NCSU journalism grad covering biotech, CRISPR & medical innovation.",
  },
};

// Schema.org Person markup for Google News author verification
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Conan Boyle",
  jobTitle: "Founding Writer & Science Journalist",
  description: "Science and technology journalist specializing in biotechnology, CRISPR gene editing, medical research breakthroughs, and emerging technologies.",
  url: `${SITE_CONFIG.url}/contributors/conan-boyle`,
  worksFor: {
    "@type": "Organization",
    name: "ObjectWire",
    url: SITE_CONFIG.url,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "North Carolina State University",
    department: "School of Journalism and Mass Communication",
  },
  knowsAbout: [
    "Biotechnology",
    "CRISPR Gene Editing",
    "Medical Research",
    "Science Journalism",
    "Emerging Technologies",
    "Healthcare Innovation",
    "Genetic Therapies",
    "Clinical Trials",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "Texas",
    addressCountry: "United States",
  },
  sameAs: [
    "https://twitter.com/conan_boyle_ow",
    "https://linkedin.com/in/conanboyle-objectwire",
  ],
};

export default function ConanBoyleAuthorPage() {
  return (
    <>
      {/* Schema.org JSON-LD for Google News verification */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <Link href="/news" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              ← Back to News
            </Link>
          </div>
        </div>

        {/* Author Profile Header */}
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Cover Banner */}
            <div className="h-32 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600"></div>

            {/* Profile Info */}
            <div className="relative px-8 pb-8">
              {/* Avatar - Realistic 3D Style for 6'2" Filipino-American */}
              <div className="relative -mt-16 mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Realistic 3D Avatar SVG - Filipino-American features */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Background gradient */}
                      <defs>
                        <radialGradient id="skinGradient" cx="50%" cy="40%">
                          <stop offset="0%" stopColor="#D4A574" />
                          <stop offset="100%" stopColor="#C89968" />
                        </radialGradient>
                        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#1A1A1A" />
                          <stop offset="100%" stopColor="#0D0D0D" />
                        </linearGradient>
                        <radialGradient id="eyeGradient" cx="30%" cy="30%">
                          <stop offset="0%" stopColor="#4A2511" />
                          <stop offset="100%" stopColor="#2C1810" />
                        </radialGradient>
                      </defs>
                      
                      {/* Neck with shadow */}
                      <ellipse cx="100" cy="145" rx="28" ry="25" fill="url(#skinGradient)" opacity="0.9"/>
                      
                      {/* Head - slightly angular jawline */}
                      <ellipse cx="100" cy="90" rx="42" ry="52" fill="url(#skinGradient)"/>
                      <path d="M 58 95 L 65 120 Q 100 138 135 120 L 142 95" fill="url(#skinGradient)"/>
                      
                      {/* Hair - modern swept style */}
                      <path d="M 58 65 Q 50 40 70 30 Q 85 25 100 28 Q 115 25 130 30 Q 150 40 142 65 Q 145 50 100 45 Q 55 50 58 65" 
                            fill="url(#hairGradient)"/>
                      <ellipse cx="75" cy="62" rx="20" ry="15" fill="url(#hairGradient)"/>
                      <ellipse cx="125" cy="62" rx="20" ry="15" fill="url(#hairGradient)"/>
                      
                      {/* Ears */}
                      <ellipse cx="58" cy="90" rx="8" ry="14" fill="#C89968"/>
                      <ellipse cx="142" cy="90" rx="8" ry="14" fill="#C89968"/>
                      
                      {/* Eyebrows - defined, professional */}
                      <path d="M 70 72 Q 80 70 88 72" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M 112 72 Q 120 70 130 72" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      
                      {/* Eyes - almond shaped, Filipino features */}
                      <ellipse cx="78" cy="82" rx="8" ry="6" fill="white"/>
                      <ellipse cx="122" cy="82" rx="8" ry="6" fill="white"/>
                      <circle cx="78" cy="83" r="4" fill="url(#eyeGradient)"/>
                      <circle cx="122" cy="83" r="4" fill="url(#eyeGradient)"/>
                      <circle cx="79" cy="82" r="1.5" fill="white" opacity="0.8"/>
                      <circle cx="123" cy="82" r="1.5" fill="white" opacity="0.8"/>
                      
                      {/* Nose - refined bridge */}
                      <path d="M 100 75 L 98 95" stroke="#B08760" strokeWidth="1.5" fill="none"/>
                      <path d="M 95 96 Q 100 100 105 96" stroke="#B08760" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <ellipse cx="96" cy="97" rx="2" ry="3" fill="#A67858" opacity="0.5"/>
                      <ellipse cx="104" cy="97" rx="2" ry="3" fill="#A67858" opacity="0.5"/>
                      
                      {/* Subtle smile - confident, intelligent */}
                      <path d="M 82 108 Q 100 116 118 108" stroke="#8B5A3C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                      <path d="M 84 109 Q 100 114 116 109" stroke="#C89968" strokeWidth="1" fill="none" opacity="0.7"/>
                      
                      {/* Facial shadow/definition */}
                      <ellipse cx="70" cy="95" rx="8" ry="12" fill="#B08760" opacity="0.15"/>
                      <ellipse cx="130" cy="95" rx="8" ry="12" fill="#B08760" opacity="0.15"/>
                      
                      {/* Professional shirt collar */}
                      <path d="M 60 150 L 75 155 L 85 145 L 100 148 L 115 145 L 125 155 L 140 150 L 140 200 L 60 200 Z" 
                            fill="#2D3748"/>
                      <path d="M 85 145 L 92 155 L 100 148 L 108 155 L 115 145" fill="#4A5568"/>
                      
                      {/* Subtle highlights for depth */}
                      <ellipse cx="85" cy="78" rx="15" ry="18" fill="white" opacity="0.08"/>
                      <ellipse cx="115" cy="78" rx="15" ry="18" fill="white" opacity="0.08"/>
                    </svg>
                  </div>
                </div>
                
                {/* Verified Badge */}
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Name & Title */}
              <div className="mb-6">
                <h1 className="text-4xl font-black text-gray-900 mb-2">
                  Conan Boyle
                </h1>
                <p className="text-xl text-purple-600 font-semibold mb-3">
                  Founding Writer & Science Journalist
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Austin, Texas
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                    ObjectWire
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                    NCSU Journalism
                  </span>
                </div>
              </div>

              {/* Biography */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-purple-600">📝</span>
                  About Conan
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Born in 1997 in <strong>Hoboken, New Jersey</strong>, <strong>Conan Boyle</strong> grew up immersed in stories of heroism and truth—from the magical halls of Hogwarts in J.K. Rowling's <em>Harry Potter</em> series to the morally complex narratives of Christopher Nolan's cinema. These formative influences shaped his understanding that great storytelling isn't just entertainment—it's a vehicle for truth, justice, and exposing the extraordinary in the ordinary.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    That philosophy led Conan to journalism. "I realized that the real world had stories far more compelling than fiction," he recalls. "Scientists editing human DNA, entrepreneurs building the future, investigators uncovering fraud—these weren't fantasy. They were happening right now, and someone needed to tell those stories with the same clarity and urgency that Rowling brought to her wizarding world."
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    At <strong>North Carolina State University's School of Journalism and Mass Communication</strong>, Conan honed his craft in investigative reporting and science communication, graduating with a focus on making complex technical subjects accessible without sacrificing accuracy. His professors noted his rare ability to find the human story within dense scientific research—a skill that would become his signature.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    After graduating, Conan moved to <strong>Austin, Texas</strong>, drawn by the city's explosive growth as a biotechnology and technology hub. He cut his teeth covering the Austin startup scene for regional publications, profiling researchers at UT Austin's biotech labs and investigating emerging medical technologies. But he quickly realized traditional media's constraints—word counts, editorial gatekeeping, and cautious legal departments—often buried the most important truths.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    In 2024, Conan founded <strong>ObjectWire</strong> with a simple mission: <em>pure heroism and truth</em>. No corporate sponsors dictating coverage. No advertisers pressuring editorial decisions. Just rigorous, fearless journalism that holds power accountable and celebrates genuine innovation. "Christopher Nolan taught me that complexity doesn't require confusion," Boyle explains. "The truth can be intricate, layered, even dark—but it should always be clear. That's what we do at ObjectWire."
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Today, Conan specializes in <strong>CRISPR gene editing</strong>, <strong>biotechnology breakthroughs</strong>, <strong>clinical trial analysis</strong>, and the intersection of science, policy, and ethics. His reporting has exposed fraudulent medical claims, celebrated genuine scientific heroes, and helped readers understand technologies that will reshape humanity—from topical gene therapies to AI-assisted drug discovery.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    When not writing, Conan can be found at Austin coffee shops debating bioethics, attending UT research symposiums, or re-watching <em>The Prestige</em> for the hundredth time, still finding new layers in Nolan's meditation on obsession and truth. He believes journalism, at its best, is a form of magic—not illusion, but revelation.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                  ⚡ Editorial Philosophy
                </h3>
                <blockquote className="text-gray-800 italic text-lg leading-relaxed">
                  "Like the best stories from Rowling to Nolan, journalism should reveal hidden truths, celebrate genuine heroes, and never compromise clarity for convenience. Science isn't a spectator sport—it's the story of humanity solving its greatest challenges. My job is to make sure you're not just watching from the sidelines, but understanding why it matters."
                </blockquote>
                <div className="text-right text-sm text-gray-600 mt-3">— Conan Boyle</div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "CRISPR & Gene Editing",
                    "Biotechnology",
                    "Medical Research",
                    "Clinical Trials",
                    "Healthcare Innovation",
                    "Genetic Therapies",
                    "Science Communication",
                    "Investigative Reporting",
                    "Emerging Technologies",
                    "Biotech Startups",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="mb-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    � Background
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold">Born:</div>
                      <div>1997, Hoboken, New Jersey</div>
                    </div>
                    <div>
                      <div className="font-semibold">Early Influences:</div>
                      <div>J.K. Rowling (Harry Potter), Christopher Nolan films</div>
                    </div>
                    <div>
                      <div className="font-semibold">Current Base:</div>
                      <div>Austin, Texas (2022-Present)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    �🎓 Education
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <div className="font-semibold text-gray-900">Bachelor of Arts, Journalism</div>
                      <div className="text-sm text-gray-600">North Carolina State University</div>
                      <div className="text-xs text-gray-500">School of Journalism and Mass Communication</div>
                      <div className="text-xs text-gray-500 mt-1">Focus: Science Communication & Investigative Reporting</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    🏆 Career Highlights
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Founding Writer, ObjectWire (2024-Present)</li>
                    <li>• Science & Technology Beat Reporter</li>
                    <li>• Austin Biotech Ecosystem Coverage (2022-2024)</li>
                    <li>• UT Austin Research Lab Profiler</li>
                    <li>• Regional Medical Innovation Correspondent</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    🎯 Core Values
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Pure Heroism:</strong> Celebrate genuine innovation</li>
                    <li>• <strong>Unwavering Truth:</strong> No corporate gatekeeping</li>
                    <li>• <strong>Clarity Over Complexity:</strong> Accessible accuracy</li>
                    <li>• <strong>Fearless Investigation:</strong> Hold power accountable</li>
                  </ul>
                </div>
              </div>

              {/* Recent Articles */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-purple-600">📰</span>
                  Recent Articles by Conan Boyle
                </h3>
                <div className="space-y-4">
                  <Link 
                    href="/news/ubc-crispr-topical-gene-therapy-skin"
                    className="block p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 hover:shadow-lg transition group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shrink-0">
                        Breaking
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                          UBC Researchers Develop First Topical CRISPR Therapy for Skin
                        </h4>
                        <p className="text-gray-600 mb-3">
                          Groundbreaking gene editing technique corrects genetic mutations when applied directly to human skin
                        </p>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>January 27, 2026</span>
                          <span>•</span>
                          <span>7 min read</span>
                          <span>•</span>
                          <span className="text-purple-600 font-medium">Science & Technology</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Placeholder for more articles */}
                  <div className="text-center py-8 text-gray-500">
                    More articles by Conan Boyle coming soon...
                  </div>
                </div>
              </div>

              {/* Contact & Social */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with Conan</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:conan@objectwire.com"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Email
                  </a>
                  <a
                    href="https://twitter.com/conan_boyle_ow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/in/conanboyle-objectwire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
