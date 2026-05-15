import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service';

export const metadata: Metadata = {
  title: 'Investigative Services Austin TX | ObjectWire',
  description:
    'ObjectWire is an Austin-based investigative media company. Licensed PI services, investigative journalism, document review, and newsroom tips. Serving Travis County and Central Texas.',
  keywords: [
    'investigative services Austin TX',
    'private investigator Austin Texas',
    'Austin PI agency',
    'investigative journalism Austin',
    'surveillance Austin Texas',
    'missing persons Austin',
    'digital forensics Austin',
    'background check Austin TX',
    'corporate investigations Austin',
    'skip tracing Austin Texas',
    'tip the newsroom Austin',
    'FOIA Austin Texas',
    'ObjectWire investigative services',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Investigative Services Austin TX | ObjectWire',
    description:
      'Austin investigative media company. Licensed PI services and investigative journalism. Surveillance, missing persons, digital forensics, background checks, corporate investigations, FOIA, and newsroom tips.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investigative Services Austin TX | ObjectWire',
    description:
      'Austin PI and investigative journalism services. Surveillance, missing persons, digital forensics, and newsroom tips.',
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'ObjectWire Investigative Services',
  description:
    'Austin-based investigative media company offering licensed private investigator services including surveillance, missing persons, digital forensics, background checks, infidelity investigations, skip tracing, child custody, workers compensation fraud, and corporate investigations.',
  url: PAGE_URL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'AdministrativeArea', name: 'Travis County' },
    { '@type': 'AdministrativeArea', name: 'Williamson County' },
    { '@type': 'AdministrativeArea', name: 'Hays County' },
  ],
  knowsAbout: [
    'Private Investigation',
    'Surveillance',
    'Digital Forensics',
    'Missing Persons',
    'Background Checks',
    'Corporate Investigations',
    'Investigative Journalism',
    'FOIA',
    'Source Protection',
    'Whistleblower Reporting',
    'Public Records',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Investigative Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Surveillance Investigations', url: 'https://www.objectwire.org/service/surveillance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infidelity Investigations', url: 'https://www.objectwire.org/service/infidelity-investigations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Missing Persons Investigations', url: 'https://www.objectwire.org/service/missing-persons' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Background Check Investigations', url: 'https://www.objectwire.org/service/background-checks' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skip Tracing', url: 'https://www.objectwire.org/service/skip-tracing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Child Custody Investigations', url: 'https://www.objectwire.org/service/child-custody-investigations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workers Compensation Fraud', url: 'https://www.objectwire.org/service/workers-compensation-fraud' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Investigations', url: 'https://www.objectwire.org/service/corporate-investigations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Forensics', url: 'https://www.objectwire.org/service/digital-forensics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Investigative Reporting', url: 'https://www.objectwire.org/service/investigative-reporting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newsroom Tip Submission', url: 'https://www.objectwire.org/service/tip-the-newsroom' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Review and FOIA', url: 'https://www.objectwire.org/service/document-review' } },
    ],
  },
  sameAs: ['https://www.objectwire.org'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.objectwire.org' },
    { '@type': 'ListItem', position: 2, name: 'Investigative Services', item: PAGE_URL },
  ],
};

const SERVICES = [
  { href: '/service/surveillance', label: 'Surveillance', icon: '🎥', desc: 'Covert photo and video documentation for domestic, legal, and corporate cases.' },
  { href: '/service/infidelity-investigations', label: 'Infidelity Investigations', icon: '🔍', desc: 'Cheating spouse and domestic partner cases with timestamped evidence.' },
  { href: '/service/missing-persons', label: 'Missing Persons', icon: '📍', desc: 'Locate missing adults, runaways, and estranged family members.' },
  { href: '/service/background-checks', label: 'Background Checks', icon: '📋', desc: 'Criminal history, employment verification, and identity research.' },
  { href: '/service/skip-tracing', label: 'Skip Tracing', icon: '🗺️', desc: 'Locate debtors, witnesses, defendants, and estranged contacts.' },
  { href: '/service/child-custody-investigations', label: 'Child Custody', icon: '⚖️', desc: 'Parental surveillance and verification for Travis County family court.' },
  { href: '/service/workers-compensation-fraud', label: 'Workers Comp Fraud', icon: '🏥', desc: 'Claimant surveillance for insurers and defense attorneys.' },
  { href: '/service/corporate-investigations', label: 'Corporate Investigations', icon: '🏢', desc: 'Employee misconduct, IP theft, fraud, and executive due diligence.' },
  { href: '/service/digital-forensics', label: 'Digital Forensics', icon: '💻', desc: 'Online harassment, identity fraud, social media aliases, and dark-web exposure.' },
];

const JOURNALISM_SERVICES = [
  { href: '/service/investigative-reporting', label: 'Investigative Reporting', icon: '📰', desc: 'Published accountability journalism on public figures, institutions, and matters of public interest.' },
  { href: '/service/tip-the-newsroom', label: 'Tip the Newsroom', icon: '📬', desc: 'Submit a confidential tip. We protect sources and pursue stories the public deserves to know.' },
  { href: '/service/document-review', label: 'Document Review and FOIA', icon: '📁', desc: 'Submit public records, FOIA responses, or leaked materials for investigative analysis.' },
];

export default function ServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-950">

        {/* ── HERO ── */}
        <section className="bg-gray-950 text-white">
          <div className="container mx-auto px-4 pt-6 max-w-6xl">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Investigative Services', item: '/service' },
              ]}
              className="text-gray-400"
            />
          </div>
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
              Austin, Texas · Licensed PI Agency · 501(c)(3) Nonprofit
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
              Austin&apos;s Investigative<br />
              <span className="text-blue-400">Media Agency.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              We investigate, document, and publish. Licensed PI services for private clients.
              Accountability journalism for the public. The same discipline applied to both.
            </p>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { stat: 'Licensed', label: 'Texas PI Agency' },
                { stat: '501(c)(3)', label: 'Nonprofit Organization' },
                { stat: 'Austin, TX', label: 'Travis County Based' },
                { stat: 'Free', label: 'Initial Consultation' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-help"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Start a Free Consultation
              </Link>
              <Link
                href="/austin-private-detective-agency"
                className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                PI Agency Details
              </Link>
            </div>
          </div>
        </section>

        {/* ── PI SERVICES GRID ── */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                Private Investigative Services
              </p>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                PI Services for Private Clients
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                All case work is private and confidential. Results are delivered directly to you, not published.
                Every investigation is handled by a licensed Texas PI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOURNALISM SERVICES ── */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                Media and Journalism
              </p>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
                Investigative Journalism Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Our journalism is editorially independent. We decide what to publish based on public
                interest, not client fees. Results become public record.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JOURNALISM_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-800"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY OBJECTWIRE ── */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                  Why ObjectWire
                </p>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                  A PI agency that is also a newsroom.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  Most PI agencies collect evidence. ObjectWire also knows how to document it for
                  publication, court proceedings, and public record, because we do all three.
                </p>
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                >
                  About ObjectWire →
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '✅', text: 'Licensed under Texas Occupations Code Chapter 1702' },
                  { icon: '✅', text: 'Free initial consultation, no commitment required' },
                  { icon: '✅', text: 'All findings are fully confidential, never published without consent' },
                  { icon: '✅', text: '501(c)(3) nonprofit, no profit motive or shareholder pressure' },
                  { icon: '✅', text: 'Court-ready documentation chain of custody on every case' },
                  { icon: '✅', text: 'Scientific and digital forensics expertise on staff' },
                  { icon: '✅', text: 'Coordinated directly with attorneys on litigation cases' },
                  { icon: '✅', text: 'Source identity protection on all journalism tips' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{icon}</span>
                    <p className="text-gray-700 dark:text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                Case Process
              </p>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Free Consultation', desc: 'Confidential call or message. We assess your case, objectives, and what evidence is achievable.' },
                { step: '02', title: 'Case Brief', desc: 'We define scope, legal parameters, timeline, and cost before any field work begins.' },
                { step: '03', title: 'Investigation', desc: 'Licensed investigators gather timestamped, geotagged documentation using professional equipment.' },
                { step: '04', title: 'Delivery', desc: 'You receive a written case report, full photo and video file set, and a chain-of-custody record.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COVERAGE AREA ── */}
        <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-600 mb-3 font-mono">
                  Service Area
                </p>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                  Austin and Central Texas
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Primary field coverage across Travis County and the greater Central Texas region.
                  Out-of-area cases handled with travel fees disclosed at consultation.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {['Austin', 'Travis County', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'San Marcos', 'Kyle', 'Buda', 'Bastrop County', 'Williamson County'].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600">📍</span> {city}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-black mb-2">Licensed PI Agency</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Regulated under Texas Occupations Code Chapter 1702.<br />
                  Enforced by the Texas Department of Public Safety.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="font-semibold text-white">Organization</span>
                    <span>ObjectWire LLC</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="font-semibold text-white">Type</span>
                    <span>501(c)(3) Nonprofit</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="font-semibold text-white">Jurisdiction</span>
                    <span>State of Texas</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="font-semibold text-white">HQ</span>
                    <span>Austin, TX</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">Consulting</span>
                    <span className="text-blue-400">Free, confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-black mb-4">Ready to Start Your Case?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Free consultation. No commitment. We will tell you honestly what is achievable,
              what evidence standards apply, and what it costs, before any work begins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-help"
                className="bg-white text-blue-700 hover:bg-blue-50 font-black px-10 py-4 rounded-lg transition-colors text-lg"
              >
                Start a Free Consultation
              </Link>
              <Link
                href="/austin-private-detective-agency"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
              >
                PI Agency Overview
              </Link>
            </div>
            <p className="mt-8 text-blue-200 text-sm">
              Editorial tips and newsroom contact:{' '}
              <a href="mailto:editorial@objectwire.org" className="underline text-white hover:text-blue-100">
                editorial@objectwire.org
              </a>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
