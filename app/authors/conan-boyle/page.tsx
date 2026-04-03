import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Conan Boyle | Science & Technology Writer | ObjectWire',
  description:
    'Conan Boyle is the founding writer of ObjectWire based in Austin, Texas. NCSU journalism graduate covering biotechnology, CRISPR, medical research, AI hardware, gaming, and emerging technologies.',
  alternates: { canonical: 'https://www.objectwire.org/authors/conan-boyle' },
  openGraph: {
    title: 'Conan Boyle | ObjectWire Founding Writer',
    description: 'Science & technology journalist covering biotech, CRISPR, medical breakthroughs, AI hardware, and emerging tech. Founding writer at ObjectWire.',
    url: 'https://www.objectwire.org/authors/conan-boyle',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Conan Boyle | Science & Technology Writer',
    description: 'Founding writer at ObjectWire. NCSU journalism. Biotech, CRISPR, AI hardware & gaming.',
  },
};

const BEATS = [
  'Biotechnology', 'CRISPR', 'Medical Research', 'AI Hardware',
  'Emerging Technology', 'Video Games', 'Neuroscience', 'Startups',
];

const HIGHLIGHTS = [
  { stat: '3+', label: 'Years at ObjectWire' },
  { stat: '8+', label: 'Beats Covered' },
  { stat: '22+', label: 'Published Articles' },
];

export default function ConanBoyleAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Conan Boyle"
        jobTitle="Science & Technology Writer"
        description="Conan Boyle is the founding writer at ObjectWire covering biotechnology, CRISPR, medical research, AI hardware, video games, and emerging technologies."
        url="https://www.objectwire.org/authors/conan-boyle"
        knowsAbout={['Biotechnology', 'CRISPR', 'Medical Research', 'AI Hardware', 'Emerging Technology', 'Neuroscience', 'Video Games']}
        alumniOf={[{ name: 'North Carolina State University', department: 'Journalism' }]}
        location={{ city: 'Austin', region: 'TX' }}
        articleCount={22}
      />

      {/* â”€â”€ Full-bleed Header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Conan Boyle</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shrink-0">
              <span className="text-gray-900 font-black text-2xl tracking-tight">CB</span>
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                Founding Writer Â· ObjectWire
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Conan Boyle
              </h1>
              <p className="text-gray-300 text-xl font-medium">Science &amp; Technology Writer</p>
            </div>
            {/* Stats */}
            <div className="flex gap-8 md:pb-1 shrink-0">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-right">
                  <p className="text-3xl font-black">{h.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote bar */}
          <div className="mt-10 border-l-4 border-gray-500 pl-5">
            <p className="text-gray-300 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;Peer review is a starting point, not a finish line.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* â”€â”€ Detail Strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>ðŸ“ Austin, Texas</span>
          <span>ðŸŽ“ NC State University, Journalism</span>
          <span>ðŸ”¬ Science &amp; Technology Desk</span>
          <span>ðŸ“… Founding Writer Â· 2023</span>
        </div>
      </div>

      {/* â”€â”€ Body â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* â”€â”€ Sidebar â”€â”€ */}
          <aside className="lg:col-span-4 space-y-7">
            {/* Beats */}
            <div className="border border-gray-200 p-6">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-4">Coverage Beats</h2>
              <div className="flex flex-wrap gap-2">
                {BEATS.map((beat) => (
                  <span key={beat} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200">
                    {beat}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'ObjectWire'],
                ['Role', 'Founding Writer'],
                ['Education', 'NC State, Journalism'],
                ['Location', 'Austin, Texas'],
                ['Joined', '2023'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Editorial */}
            <div className="bg-gray-950 text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-500">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Editorial Standards â†’
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy â†’
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About ObjectWire â†’
              </Link>
            </div>
          </aside>

          {/* â”€â”€ Main column â”€â”€ */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-gray-900 pb-3">
                About Conan Boyle
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Conan Boyle is a founding writer at ObjectWire and the publication&rsquo;s primary
                  voice on science, biotechnology, and emerging technology. Based in Austin, Texas, Boyle
                  brings a research-grounded perspective to complex scientific topics, translating
                  peer-reviewed findings, clinical data, and laboratory breakthroughs into authoritative
                  reporting for a professional audience.
                </p>
                <p>
                  A graduate of North Carolina State University&rsquo;s journalism program, Boyle&rsquo;s
                  science reporting covers the full life-sciences spectrum: CRISPR gene editing,
                  AI-driven drug discovery, photonic computing architectures, and the semiconductor
                  startups challenging NVIDIA&rsquo;s data center dominance, including a deep-dive
                  profile of Neurophos and their photonic AI chip roadmap.
                </p>
                <p>
                  His gaming coverage brings the same analytical precision to video games. He has
                  written extensively on Nintendo&rsquo;s Switch 2 ecosystem, including the technical
                  breakdown of Donkey Kong Bananza&rsquo;s 347-million-voxel destruction engine
                  revealed at GDC 2026, as well as Pokémon Pokopia&rsquo;s record-breaking 2.2 million
                  launch copies, and Bungie&rsquo;s Marathon balance patches.
                </p>
                <p>
                  Boyle&rsquo;s work is characterized by primary-source discipline: sourcing named
                  researchers, published studies, and official regulatory filings before speculation.
                  He has reported on AI hardware startups, LLM infrastructure improvements, and the
                  evolving convergence of neuroscience with machine learning.
                </p>
              </div>
            </section>

            {/* Recent Highlights */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-gray-200 pb-3">
                Recent Highlights
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Donkey Kong Bananza, 347M Voxels',
                    detail: 'GDC 2026 technical breakdown: Nintendo\'s Switch 2 destruction engine and the Odyssey snow prototype connection.',
                    href: '/video-games/nintendo/donkey-kong-bananza',
                    date: 'March 12, 2026',
                  },
                  {
                    label: 'Pokémon Pokopia, 2.2M Copies in 4 Days',
                    detail: 'Switch 2 launch record, Nintendo stock +15%, Japan accounting for nearly 1M of the first-week units.',
                    href: '/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2',
                    date: 'March 12, 2026',
                  },
                  {
                    label: 'Neurophos, Photonic AI Chip Startup',
                    detail: 'Deep-dive profile on the startup betting photonic computing can challenge NVIDIA in data center inference.',
                    href: '/neurophos-ai-hardware-startup',
                    date: 'February 1, 2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-gray-200 p-5 hover:border-gray-900 transition-colors">
                    <p className="text-xs font-mono text-gray-400 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline">{item.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-gray-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-16 bg-gray-100 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="conan-boyle" authorName="Conan Boyle" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* â”€â”€ Footer strip â”€â”€ */}
      <div className="border-t-2 border-gray-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">Â© 2026 ObjectWire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">â† All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
