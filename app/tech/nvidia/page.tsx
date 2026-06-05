import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllEntries } from '@/lib/registry-service';

export const revalidate = 3600;

const CANONICAL = 'https://www.ozonedailynews.com/tech/nvidia';

export const metadata: Metadata = {
  title: 'NVIDIA | Blackwell Architecture, AI Infrastructure & Roadmap',
  description: 'OzoneNews NVIDIA coverage: Blackwell GPU architecture, RTX 50-series specs, data center AI infrastructure, NVLink networking, and the Vera Rubin roadmap through 2028.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'NVIDIA | Blackwell Architecture, AI Infrastructure & Roadmap',
    description: 'OzoneNews NVIDIA coverage: Blackwell GPU architecture, RTX 50-series specs, data center AI infrastructure, NVLink networking, and the Vera Rubin roadmap through 2028.',
    type: 'website',
    url: CANONICAL,
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVIDIA | Blackwell Architecture, AI Infrastructure & Roadmap',
    description: 'OzoneNews NVIDIA coverage: Blackwell GPU architecture, RTX 50-series specs, data center AI infrastructure, NVLink networking, and the Vera Rubin roadmap through 2028.',
  },
};

// ─── Financial snapshot data ─────────────────────────────────────────────────
const FINANCIALS = [
  { label: 'FY2026 Total Revenue',        value: '$215.9B' },
  { label: 'FY2026 Net Income',           value: '$120.1B' },
  { label: 'FY2026 Data Center Share',    value: '~91%' },
  { label: 'FY2026 Gross Margin',         value: '71.1%' },
  { label: 'Q1 FY2027 Revenue',           value: '$81.6B' },
  { label: 'Q1 FY2027 Data Center Rev',   value: '$75.2B' },
  { label: 'Q1 FY2027 Gross Margin',      value: '74.9%' },
  { label: 'Cash Reserves',               value: '$62B+' },
];

// ─── Architecture roadmap ─────────────────────────────────────────────────────
const ROADMAP = [
  {
    name: 'Hopper (H100 / H200)',
    node: 'TSMC 4N',
    memory: 'HBM2e / HBM3',
    status: 'Production',
    color: 'border-gray-400 text-gray-500',
  },
  {
    name: 'Blackwell (B200 / GB300)',
    node: 'TSMC 4N custom',
    memory: 'HBM3e',
    status: 'Current',
    color: 'border-green-500 text-green-600',
  },
  {
    name: 'Vera Rubin (R200 / VR200)',
    node: 'TSMC 3nm',
    memory: 'HBM4 — 22 TB/s',
    status: 'Late 2026',
    color: 'border-blue-500 text-blue-600',
  },
  {
    name: 'Rubin Ultra',
    node: 'TSMC 3nm+',
    memory: '12x HBM4 stacks',
    status: 'Mid-2027',
    color: 'border-purple-500 text-purple-600',
  },
  {
    name: 'Feynman',
    node: 'TBD',
    memory: 'TBD',
    status: '2028 Target',
    color: 'border-orange-500 text-orange-600',
  },
];

export default async function NvidiaHubPage() {
  const all = await getAllEntries();

  const articles = all
    .filter((e) => {
      const slugMatch =
        e.slug.startsWith('/tech/nvidia') ||
        e.slug.includes('nvidia') ||
        e.tags?.some((t: string) => t.toLowerCase() === 'nvidia');
      return slugMatch;
    })
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hub header ────────────────────────────────────────────────── */}
      <header className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/tech" className="hover:text-black transition-colors">Tech</Link>
            <span className="mx-2">→</span>
            <span className="text-black font-semibold">NVIDIA</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="h-12 w-1.5 bg-green-500 shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                NVIDIA
              </h1>
              <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl">
                Blackwell architecture, RTX 50-series hardware, data center AI infrastructure, and the Vera Rubin roadmap through 2028.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">

        {/* ── Editorial overview ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b border-gray-200 pb-3">
            NVIDIA's Engineering Philosophy
          </h2>
          <div className="prose prose-gray max-w-none text-base leading-relaxed">
            <p>
              NVIDIA no longer treats the GPU as a standalone piece of silicon. The company's
              current engineering standard views the entire data center network as a single unified
              supercomputer. The central bottleneck in modern AI training and inference is not raw
              single-die compute, it is communication latency across nodes. NVIDIA's answer is
              full-rack scale liquid-cooled integration built around NVLink switch chips and
              ConnectX-8 SuperNICs that eliminate the bottleneck before data ever reaches the
              processor.
            </p>
            <p>
              The <strong>GB300 NVL72</strong> rack system couples Grace CPUs and Blackwell Ultra
              GPUs into a completely fluid-cooled 72-GPU cluster that acts as one coherent memory
              pool. NVLink Switch Chips allow all 72 GPUs to communicate at full unidirectional
              speed. ConnectX-8 SuperNICs handle multi-tenant data offloading over 400GbE to
              800GbE fabrics. NVIDIA's internal networking revenue grew more than 260%
              year-over-year on the back of this architecture becoming the hyperscaler deployment
              standard.
            </p>
            <p>
              That infrastructure demand is why NVIDIA's Data Center division accounts for over
              91% of total company revenue. Consumer gaming, historically the company's identity,
              is now a secondary business line in financial terms. The <strong>RTX 50-series
              desktop cards</strong> launched in early 2025 sell to both gamers and AI researchers
              who need large local VRAM pools, creating a supply dynamic where consumer GPU
              availability is partly constrained by the same AI compute buildout driving hyperscale
              infrastructure investment.
            </p>
          </div>
        </section>

        {/* ── Financial snapshot ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b border-gray-200 pb-3">
            Financial Snapshot
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FINANCIALS.map((f) => (
              <div
                key={f.label}
                className="border border-gray-200 rounded p-4 bg-gray-50"
              >
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide leading-tight mb-1">
                  {f.label}
                </p>
                <p className="text-xl font-black text-black">{f.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Source: NVIDIA FY2026 annual report and Q1 FY2027 earnings release. Data Center
            contribution includes compute and networking segments.
          </p>
        </section>

        {/* ── Architecture roadmap ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b border-gray-200 pb-3">
            Architecture Roadmap
          </h2>
          <div className="space-y-3">
            {ROADMAP.map((r) => (
              <div
                key={r.name}
                className={`border-l-4 ${r.color} pl-4 py-3 bg-gray-50 rounded-r`}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="font-bold text-black text-sm">{r.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {r.node} &nbsp;·&nbsp; {r.memory}
                    </p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 border rounded ${r.color}`}>
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900 leading-relaxed">
            <strong>Vera Rubin (late 2026):</strong> Moves to TSMC 3nm with 336B transistors
            across a multi-chip module combining two compute dies and HBM4 at a 2,048-bit
            interface per stack, achieving 22 TB/s per GPU. TDP ranges from 1,800W to 2,300W,
            making air cooling obsolete. The paired <strong>Vera CPU</strong> features 88 custom
            Olympus cores with native FP8 vector execution for data-loading acceleration.
            <br /><br />
            <strong>Feynman (2028):</strong> Teased by NVIDIA leadership as engineered explicitly
            for physical AI, multi-agent foundational models, and extreme-scale simulation
            frameworks.
          </div>
        </section>

        {/* ── Articles grid ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-6 border-b border-gray-200 pb-3">
            NVIDIA Coverage
          </h2>
          {articles.length === 0 ? (
            <p className="text-gray-400">No articles indexed yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group flex flex-col border border-gray-200 rounded-sm overflow-hidden hover:border-black hover:shadow-md transition-all"
                >
                  {article.imageUrl ? (
                    <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt ?? article.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] bg-green-50 border-green-200 border-b flex items-center justify-center shrink-0">
                      <span className="text-green-700 text-3xl font-black opacity-30">NV</span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white bg-green-600 self-start mb-2">
                      {article.category}
                    </span>
                    <h2 className="font-serif text-base font-black leading-snug group-hover:underline line-clamp-3 flex-1">
                      {article.title}
                    </h2>
                    <p className="text-[10px] text-gray-500 font-mono mt-3 pt-2 border-t border-gray-100">
                      {article.author} · {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ── Related hubs ───────────────────────────────────────────── */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
            Related Coverage
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/tech', label: 'Tech Hub' },
              { href: '/tech/google', label: 'Google' },
              { href: '/tech/intel', label: 'Intel' },
              { href: '/finance', label: 'Finance' },
              { href: '/science', label: 'Science' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-blue-600 hover:text-blue-800 underline text-sm border border-blue-200 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
