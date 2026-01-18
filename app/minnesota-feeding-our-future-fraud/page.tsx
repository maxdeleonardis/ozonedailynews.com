import Link from "next/link";
import type { Metadata } from "next";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme | ObjectWire",
  description: "A comprehensive investigation into the largest pandemic-era fraud case in U.S. history. 70+ defendants, $250 million stolen, and the federal response.",
  keywords: [
    "Feeding Our Future",
    "Minnesota fraud",
    "pandemic fraud",
    "Aimee Bock",
    "$250 million fraud",
    "federal indictment",
    "child nutrition fraud",
    "COVID fraud scheme"
  ],
  authors: [{ name: "ObjectWire Investigations" }],
  openGraph: {
    type: "article",
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    description: "Comprehensive investigation into the largest pandemic-era fraud case in U.S. history.",
    publishedTime: "2025-12-30T10:00:00Z",
    modifiedTime: "2026-01-15T12:00:00Z",
    section: "Investigation",
    tags: ["Fraud", "Minnesota", "Pandemic", "Federal Investigation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feeding Our Future: $250 Million Minnesota Fraud Scheme",
    description: "Inside the largest pandemic-era fraud case in U.S. history.",
  },
};

export default function FeedingOurFutureFraudPage() {
  return (
    <>
      <NewsArticleSchema
        title="Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme"
        description="A comprehensive investigation into the largest pandemic-era fraud case in U.S. history."
        author="ObjectWire Investigations"
        authorUrl="https://objectwire.org/team"
        publishedTime="2025-12-30T10:00:00Z"
        modifiedTime="2026-01-15T12:00:00Z"
        articleUrl="https://objectwire.org/minnesota-feeding-our-future-fraud"
        section="Investigation"
        keywords={["Feeding Our Future", "Minnesota fraud", "pandemic fraud", "Aimee Bock", "federal investigation"]}
      />

      <article className="min-h-screen bg-white">
        {/* Article Header */}
        <header className="border-b-2 border-black">
          <div className="container py-8 md:py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-black">Home</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-black">News</Link>
              <span>/</span>
              <Link href="/minesoda" className="hover:text-black">Minnesota</Link>
              <span>/</span>
              <span className="text-black">Investigation</span>
            </nav>

            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1">
                INVESTIGATION
              </span>
              <span className="bg-black text-white text-xs font-bold px-3 py-1">
                FEDERAL CASE
              </span>
              <span className="text-sm text-gray-500">15 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 max-w-4xl">
              Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
              A comprehensive investigation into one of the largest pandemic-era fraud cases in U.S. history, 
              involving falsified meal counts, shell companies, and more than 70 federal indictments.
            </p>

            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-4 text-sm border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">OW</span>
                </div>
                <div>
                  <p className="font-semibold">ObjectWire Investigations</p>
                  <p className="text-gray-500">Minneapolis Bureau</p>
                </div>
              </div>
              <div className="text-gray-500">
                <time dateTime="2025-12-30">December 30, 2025</time>
                <span className="mx-2">•</span>
                <span>Updated January 15, 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container py-8 md:py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Article Body */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                
                {/* Key Facts Box */}
                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 not-prose">
                  <h3 className="font-bold text-sm tracking-wider mb-3">CASE OVERVIEW</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>$250 million</strong> stolen from federal child nutrition programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>70+ individuals</strong> federally indicted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Feeding Our Future</strong> - nonprofit at the center of the scheme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>2020-2022</strong> - peak of fraudulent activity during pandemic</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  In what federal prosecutors have called the largest pandemic-era fraud case in the United States, 
                  a Minnesota-based nonprofit called Feeding Our Future allegedly facilitated the theft of more than 
                  $250 million from federal child nutrition programs designed to feed low-income children during the 
                  COVID-19 pandemic.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  The Federal Child Nutrition Programs
                </h2>

                <p>
                  The fraud centered on the{" "}
                  <a 
                    href="https://www.fns.usda.gov/cacfp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Child and Adult Care Food Program (CACFP)
                  </a>{" "}
                  and the{" "}
                  <a 
                    href="https://www.fns.usda.gov/sfsp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Summer Food Service Program (SFSP)
                  </a>, both administered by the U.S. Department of Agriculture (USDA). These programs reimburse 
                  organizations for providing free meals to children in low-income areas.
                </p>

                <p>
                  During the pandemic, the USDA relaxed oversight requirements to ensure children could continue 
                  receiving meals despite school closures. This created vulnerabilities that were allegedly exploited 
                  by Feeding Our Future and its network of sub-sponsors.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  How the Scheme Worked
                </h2>

                <p>
                  According to the{" "}
                  <a 
                    href="https://www.justice.gov/usao-mn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    U.S. Attorney's Office for the District of Minnesota
                  </a>, the fraud operated through a multi-layered structure:
                </p>

                <div className="bg-gray-50 p-6 my-8 not-prose">
                  <h4 className="font-bold text-sm mb-4">THE FRAUD STRUCTURE</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                      <div>
                        <p className="font-semibold">Feeding Our Future (Sponsor)</p>
                        <p className="text-sm text-gray-600">The nonprofit served as an official "sponsor" organization, authorized to receive federal funds and distribute them to meal sites.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                        <p className="font-semibold">Shell Companies (Sub-Sponsors)</p>
                        <p className="text-sm text-gray-600">Fraudulent "meal sites" were created—many existed only on paper or served minimal meals while claiming thousands.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                        <p className="font-semibold">Falsified Documentation</p>
                        <p className="text-sm text-gray-600">Fake invoices, rosters, and meal counts were submitted to justify reimbursement claims.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                      <div>
                        <p className="font-semibold">Money Laundering</p>
                        <p className="text-sm text-gray-600">Funds were moved through multiple accounts and used to purchase luxury cars, property, and international wire transfers.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  Key Figures
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                  <div className="border-2 border-black p-6">
                    <h4 className="font-bold mb-2">Aimee Bock</h4>
                    <p className="text-sm text-gray-500 mb-2">Founder & Executive Director</p>
                    <p className="text-sm text-gray-600">
                      Founded Feeding Our Future in 2016. Charged with conspiracy to commit wire fraud, 
                      wire fraud, and bribery. Allegedly received kickbacks from sub-sponsors.
                    </p>
                  </div>
                  <div className="border-2 border-black p-6">
                    <h4 className="font-bold mb-2">Multiple Co-Conspirators</h4>
                    <p className="text-sm text-gray-500 mb-2">70+ Defendants</p>
                    <p className="text-sm text-gray-600">
                      Includes business owners, accountants, and individuals who operated fraudulent 
                      meal sites. Several have pleaded guilty and are cooperating with prosecutors.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  The Minnesota Department of Education's Response
                </h2>

                <p>
                  The{" "}
                  <a 
                    href="https://education.mn.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Minnesota Department of Education (MDE)
                  </a>, which oversees the distribution of federal food program funds in the state, faced 
                  intense scrutiny over its handling of the case. Internal documents revealed that MDE staff 
                  raised concerns about Feeding Our Future as early as 2020.
                </p>

                <blockquote className="border-l-4 border-black pl-6 italic my-8 text-xl">
                  "The red flags were there. The question is why they weren't acted upon sooner."
                  <footer className="text-sm text-gray-500 mt-2 not-italic">
                    — State Legislative Auditor, 2023 Report
                  </footer>
                </blockquote>

                <p>
                  MDE attempted to suspend Feeding Our Future's sponsorship in early 2021, but a state court 
                  issued a temporary restraining order that allowed the organization to continue operating while 
                  the case was reviewed. During this period, prosecutors allege hundreds of millions more in 
                  fraudulent claims were submitted.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  Federal Investigation & Indictments
                </h2>

                <p>
                  The{" "}
                  <a 
                    href="https://www.fbi.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    FBI
                  </a>{" "}and{" "}
                  <a 
                    href="https://www.usda.gov/oig" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    USDA Office of Inspector General
                  </a>{" "}
                  launched a joint investigation in 2021. In September 2022, federal prosecutors unsealed 
                  indictments against 48 individuals—the first wave of what would become the largest pandemic 
                  fraud prosecution in the country.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-6 my-8 not-prose">
                  <h4 className="font-bold text-sm mb-3">📊 BY THE NUMBERS</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-black text-red-600">$250M+</p>
                      <p className="text-xs text-gray-500">Alleged Fraud</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-red-600">70+</p>
                      <p className="text-xs text-gray-500">Indicted</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-red-600">200+</p>
                      <p className="text-xs text-gray-500">Fake Meal Sites</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-red-600">5</p>
                      <p className="text-xs text-gray-500">Trials Expected</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  Current Status & Trials
                </h2>

                <p>
                  As of January 2026, the case remains active with multiple trials completed or underway:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Multiple convictions</strong> have been secured, with sentences ranging from probation to federal prison terms.</li>
                  <li><strong>Asset seizures</strong> have recovered millions in cash, property, and luxury vehicles.</li>
                  <li><strong>Aimee Bock's trial</strong> remains one of the most-watched proceedings in Minnesota federal court history.</li>
                  <li><strong>Cooperating witnesses</strong> have provided testimony implicating additional defendants.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
                  Broader Implications
                </h2>

                <p>
                  The Feeding Our Future case has prompted nationwide reforms to pandemic-era relief programs and 
                  renewed scrutiny of nonprofit oversight. Congressional hearings have examined how similar fraud 
                  could be prevented in future emergencies.
                </p>

                <p>
                  For Minnesota's Somali-American community, which was disproportionately represented among both 
                  the accused and the legitimate organizations serving meals, the case has been particularly painful—
                  casting suspicion on genuine charitable work while exposing how trust was allegedly exploited.
                </p>

                {/* Source Citations */}
                <div className="border-t-2 border-black pt-6 mt-10 not-prose">
                  <h3 className="font-bold text-sm tracking-wider mb-4">SOURCES & REFERENCES</h3>
                  <ul className="text-sm space-y-3 text-gray-600">
                    <li>
                      <span className="font-semibold">[1]</span>{" "}
                      <a 
                        href="https://www.justice.gov/usao-mn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        U.S. Attorney's Office, District of Minnesota
                      </a>{" "}
                      — Official indictments and press releases
                    </li>
                    <li>
                      <span className="font-semibold">[2]</span>{" "}
                      <a 
                        href="https://www.fbi.gov/contact-us/field-offices/minneapolis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        FBI Minneapolis Field Office
                      </a>{" "}
                      — Investigation updates
                    </li>
                    <li>
                      <span className="font-semibold">[3]</span>{" "}
                      <a 
                        href="https://education.mn.gov/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Minnesota Department of Education
                      </a>{" "}
                      — State oversight and audit documents
                    </li>
                    <li>
                      <span className="font-semibold">[4]</span>{" "}
                      <a 
                        href="https://www.fns.usda.gov/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        USDA Food and Nutrition Service
                      </a>{" "}
                      — Federal nutrition program guidelines
                    </li>
                    <li>
                      <span className="font-semibold">[5]</span>{" "}
                      <a 
                        href="https://www.startribune.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Star Tribune
                      </a>{" "}
                      — Ongoing local coverage and court reporting
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              
              {/* Related Stories */}
              <div className="border border-gray-200 mb-8">
                <div className="bg-black text-white px-4 py-2">
                  <h3 className="font-bold text-sm">RELATED COVERAGE</h3>
                </div>
                <div className="p-4 space-y-4">
                  <Link href="/minesoda/nick-shirley-drops-second-part-of-fraud-investigation" className="block group">
                    <span className="text-xs text-red-600 font-bold">INVESTIGATION</span>
                    <h4 className="font-semibold text-sm group-hover:underline mt-1">
                      Nick Shirley Drops Second Part of Fraud Investigation
                    </h4>
                  </Link>
                  <Link href="/minesoda/Ilhan-Omar" className="block group">
                    <span className="text-xs text-purple-600 font-bold">BIOGRAPHY</span>
                    <h4 className="font-semibold text-sm group-hover:underline mt-1">
                      Ilhan Omar: From Refugee to Congress
                    </h4>
                  </Link>
                  <Link href="/minesoda" className="block group">
                    <span className="text-xs text-blue-600 font-bold">HUB</span>
                    <h4 className="font-semibold text-sm group-hover:underline mt-1">
                      Minnesota News Hub
                    </h4>
                  </Link>
                </div>
              </div>

              {/* Case Timeline */}
              <div className="bg-gray-50 p-6 mb-8">
                <h3 className="font-bold text-sm tracking-wider mb-4">CASE TIMELINE</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-bold">2016</p>
                      <p className="text-gray-500">Feeding Our Future founded</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-bold">March 2020</p>
                      <p className="text-gray-500">Pandemic restrictions loosen oversight</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-bold">2020-2021</p>
                      <p className="text-gray-500">Peak fraudulent activity alleged</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-bold">January 2022</p>
                      <p className="text-gray-500">FBI raids conducted</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-bold">September 2022</p>
                      <p className="text-gray-500">First indictments unsealed</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <p className="font-bold">2023-2026</p>
                      <p className="text-gray-500">Ongoing trials and convictions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Documents */}
              <div className="border border-gray-200 p-6 mb-8">
                <h3 className="font-bold text-sm tracking-wider mb-4">KEY DOCUMENTS</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a 
                      href="https://www.justice.gov/usao-mn/pr/47-defendants-charged-250-million-federal-fraud-scheme" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <span>📄</span>
                      <span>DOJ Press Release - Initial Indictments</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.auditor.leg.state.mn.us/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      <span>📄</span>
                      <span>State Auditor's Report</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-black text-white p-6">
                <h3 className="font-bold mb-2">Investigation Updates</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get updates on this case and other ObjectWire investigations.
                </p>
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="w-full px-3 py-2 text-black text-sm mb-2"
                />
                <button className="w-full bg-red-600 py-2 text-sm font-bold hover:bg-red-700 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="container py-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">
                  <strong>Originally Published:</strong> December 30, 2025
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Last Updated:</strong> January 15, 2026
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/corrections" className="text-sm text-gray-500 hover:underline">
                  Report a correction
                </Link>
                <Link href="/editorial-standards" className="text-sm text-gray-500 hover:underline">
                  Editorial Standards
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
