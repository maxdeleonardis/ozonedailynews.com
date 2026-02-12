import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Investigative & Media Services | ObjectWire",
  description:
    "ObjectWire offers licensed private detective services in Austin, TX — surveillance, infidelity investigations, fact-finding, evidence collection, photography, videography, and press release distribution.",
  keywords: [
    "private detective Austin",
    "Austin PI",
    "surveillance services Texas",
    "infidelity investigation",
    "evidence collection",
    "press release writing",
    "investigative photography Austin",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/service",
  },
  openGraph: {
    title: "Professional Investigative & Media Services | ObjectWire",
    description:
      "Licensed private detective agency in Austin, TX. Surveillance, digital forensics, infidelity investigations, evidence collection, and media services.",
    url: "https://www.objectwire.org/service",
    siteName: "ObjectWire",
    type: "website",
  },
};

const SERVICES = [
  {
    href: "/service/surveillance",
    title: "Surveillance",
    description:
      "Covert surveillance for infidelity, child custody verification, worker's compensation claims, corporate investigations, and insurance fraud. Multi-vehicle mobile and extended stationary operations.",
    icon: "📡",
    tags: ["Domestic", "Corporate", "Insurance"],
  },
  {
    href: "/service/infidelity",
    title: "Infidelity Investigations",
    description:
      "Confidential domestic investigations including spousal surveillance, digital communications analysis, background checks on third parties, and court-admissible photo/video documentation.",
    icon: "🔐",
    tags: ["Domestic", "Digital", "Confidential"],
  },
  {
    href: "/service/fact-finding-and-evidence-collection",
    title: "Fact-Finding & Evidence Collection",
    description:
      "Investigation of personal injury incidents, insurance fraud, property disputes, harassment allegations, and criminal cases. Witness location, interviews, and detailed legal reports.",
    icon: "📋",
    tags: ["Civil", "Criminal", "Legal"],
  },
  {
    href: "/service/asset-collection",
    title: "Asset Collection & Documentation",
    description:
      "Comprehensive visual documentation of property, equipment, and assets for legal proceedings, insurance claims, business records, and real estate. Court-admissible standards.",
    icon: "📷",
    tags: ["Legal", "Insurance", "Business"],
  },
  {
    href: "/service/photography-videography-austin-tx",
    title: "Photography & Videography",
    description:
      "Professional investigative photography and videography in Austin, TX. Evidence documentation, scene photography, witness interviews, video depositions, and aerial drone services.",
    icon: "🎥",
    tags: ["Austin TX", "Evidence", "Drone"],
  },
  {
    href: "/service/press-release",
    title: "Press Release Writing & Distribution",
    description:
      "Get your story in front of major media outlets with professionally written press releases, strategic distribution, and media relations support.",
    icon: "📰",
    tags: ["PR", "Media", "Distribution"],
  },
];

export default function ServiceHubPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-20 max-w-5xl">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>

          <div className="flex items-start gap-6 mb-6">
            <div className="hidden sm:flex w-16 h-16 bg-white/10 rounded-xl items-center justify-center shrink-0">
              <span className="text-3xl">🔍</span>
            </div>
            <div>
              <p className="text-blue-400 text-xs font-mono tracking-widest mb-3">
                LICENSED PRIVATE DETECTIVE AGENCY • AUSTIN, TX
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                Investigative &amp;&nbsp;Media Services
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                ObjectWire is a licensed private detective agency based in Austin, Texas. We combine
                traditional investigative expertise with cutting-edge digital forensics to deliver
                court-admissible results with complete confidentiality.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/austin-private-detective-agency"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              About Our Agency →
            </Link>
            <Link
              href="/get-help/contact"
              className="px-5 py-2.5 border border-gray-500 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured: Detective Agency Card */}
      <section className="container mx-auto px-4 -mt-8 max-w-5xl relative z-10 mb-12">
        <Link
          href="/austin-private-detective-agency"
          className="group block bg-white border border-gray-200 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🕵️</span>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                Featured
              </span>
              <h2 className="text-2xl font-black text-gray-900 group-hover:text-blue-700 transition-colors">
                Austin Private Detective Agency
              </h2>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
            Our digital forensics unit uncovers hidden email accounts, social-media aliases,
            cryptocurrency transactions, and dark-web references linked to harassment, fraud, and
            other criminal activities. We provide discreet, professional investigative services
            throughout Texas and beyond.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Digital Forensics", "Background Checks", "Cryptocurrency Tracking", "Dark Web Monitoring", "Corporate Investigations"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </Link>
      </section>

      {/* All Services Grid */}
      <section className="container mx-auto px-4 max-w-5xl pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-300" />
          <h2 className="text-xs font-black tracking-[.3em] uppercase text-gray-500">
            Our Services
          </h2>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <span className="text-3xl block mb-4">{service.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-semibold rounded-full tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Need Professional Investigation?</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            All consultations are confidential. Contact our licensed team for a discreet assessment
            of your case.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-help/contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Free Consultation
            </Link>
            <Link
              href="/austin-private-detective-agency"
              className="px-6 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn About Our Agency
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
