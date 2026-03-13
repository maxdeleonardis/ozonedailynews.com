import type { Metadata } from 'next';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/tech/news/tenstorrent-tt-quietbox-2-risc-v-ai-workstation-9999';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Tenstorrent Disrupts AI Workstation Market with $9,999 RISC-V "QuietBox 2" | ObjectWire',
  description:
    "Jim Keller's Tenstorrent unveiled the TT-QuietBox 2 on March 10, 2026 — a $9,999 liquid-cooled RISC-V AI workstation capable of running 120B-parameter models locally. The first developer-ready workstation to deliver teraflop-class inference without Nvidia's CUDA.",
  keywords: [
    'Tenstorrent QuietBox 2 RISC-V workstation 2026',
    'TT-QuietBox 2 $9999 AI workstation',
    'Jim Keller Tenstorrent AI hardware',
    'RISC-V AI inference workstation',
    'Tenstorrent vs Nvidia CUDA alternative',
    'TT-Buda TT-Metalium open source AI compiler',
    'teraflop local LLM inference workstation',
    '120 billion parameter local inference',
    'Tenstorrent liquid cooled AI developer machine',
    'open source AI hardware RISC-V 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Tenstorrent Fires at Nvidia With $9,999 RISC-V "QuietBox 2" AI Workstation',
    description:
      "The TT-QuietBox 2 runs 120B-parameter models locally, delivers teraflop-class inference, uses a fully open-source stack, and costs $2,000 less than its predecessor. Jim Keller's CUDA alternative is here.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Tenstorrent', 'RISC-V', 'AI Hardware', 'QuietBox 2', 'Jim Keller', 'Nvidia', 'Open Source AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenstorrent QuietBox 2: $9,999 RISC-V Workstation Runs 120B-Param Models Locally',
    description:
      "Jim Keller's Tenstorrent just shipped a liquid-cooled, fully open-source AI workstation for $9,999. No CUDA. No Nvidia. Teraflop inference. 120B parameters. It's real.",
  },
};

export default function TenstorrentQuietBox2Page() {
  return (
    <NewsArticle
      title='Tenstorrent Disrupts AI Workstation Market with $9,999 RISC-V "QuietBox 2"'
      subtitle="Jim Keller's Tenstorrent has unveiled the TT-QuietBox 2 — the first developer-ready AI workstation built on RISC-V with a fully open-source software stack. At $9,999, it runs 120-billion-parameter models locally and delivers teraflop-class inference without a single line of CUDA."
      category="Technology"
      categoryColor="purple"
      topicTag="technology"
      publishDate="March 12, 2026"
      readTime="6 min read"
      author={{
        name: 'Jack Wang',
        role: 'Technology Desk',
        authorSlug: 'jack-wang',
      }}
      tags={[
        'Tenstorrent',
        'RISC-V',
        'AI Hardware',
        'QuietBox 2',
        'Jim Keller',
        'Nvidia',
        'Open Source AI',
        'TT-Buda',
        'LLM Inference',
        'AI Workstation',
      ]}
      slug="tenstorrent-tt-quietbox-2-risc-v-ai-workstation-9999"
      url={SLUG}
    >

      {/* ── LEAD ───────────────────────────────────────────────────────── */}
      <p>
        <strong>SANTA CLARA, CA</strong> — On Tuesday, March 10, 2026, Jim Keller&apos;s{' '}
        <strong>Tenstorrent</strong> delivered the most credible challenge yet to Nvidia&apos;s
        dominance of the AI workstation market. The company unveiled the{' '}
        <strong>TT-QuietBox 2</strong> — a liquid-cooled desktop AI powerhouse built on the{' '}
        <strong>RISC-V architecture</strong>, packaged with a fully open-source software stack
        and priced at <strong>$9,999</strong>.
      </p>
      <p>
        That price point is nearly <strong>$2,000 cheaper</strong> than the original QuietBox,
        signaling a deliberate push to move RISC-V AI hardware from niche research labs into
        the mainstream developer&apos;s office. The QuietBox 2 is the first system of its kind
        to deliver <strong>teraflop-class local LLM inference</strong> without relying on a
        traditional GPU — and without locking developers into Nvidia&apos;s proprietary CUDA
        ecosystem.
      </p>

      <HighlightBox type="key-point" color="purple">
        The TT-QuietBox 2 is the first developer-ready AI workstation to combine RISC-V
        architecture, teraflop-class local inference, 120B-parameter model support, liquid
        cooling, and a fully open-source compiler and kernel stack — at a sub-$10,000 price
        point.
      </HighlightBox>

      {/* ── SPECS AT A GLANCE ──────────────────────────────────────────── */}
      <h2>TT-QuietBox 2 — At a Glance</h2>

      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#7c3aed', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Specification</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Detail</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Price (base)', '$9,999 — ~$2,000 less than the original QuietBox'],
              ['Architecture', 'RISC-V — open instruction set, full hardware transparency'],
              ['Performance class', 'Teraflop-class inference — first RISC-V workstation to reach this tier'],
              ['Max model size (base config)', '120 billion parameters (e.g., Llama 3 variants, Grok-1)'],
              ['Cooling', 'High-efficiency liquid cooling loop — designed for silent office deployment'],
              ['Software stack', 'TT-Buda (compiler) + TT-Metalium (kernel suite) — fully open source'],
              ['GPU dependency', 'None — no Nvidia GPU, no CUDA required'],
              ['Announced', 'March 10, 2026 — Santa Clara, CA'],
            ].map(([spec, detail], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#faf5ff' : '#fff', borderBottom: '1px solid #e9d5ff' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{spec}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── BREAKING THE CUDA LOCK ─────────────────────────────────────── */}
      <h2>Breaking the CUDA Lock</h2>
      <p>
        The QuietBox 2&apos;s most strategically significant feature is not its performance —
        it is its independence. <strong>CUDA</strong>, Nvidia&apos;s proprietary parallel
        computing platform, has been the de facto standard for AI model training and inference
        since the first deep learning boom. The result is a decade-long lock-in: most AI
        frameworks, model checkpoints, and production pipelines are optimized specifically for
        CUDA, making migration to alternative hardware extremely costly even when alternatives
        exist.
      </p>
      <p>
        Tenstorrent&apos;s RISC-V approach offers a fundamentally different value proposition.
        Because RISC-V is an <strong>open instruction set architecture</strong>, developers
        have full visibility — and full control — from the compiler layer down to the kernel.
        Tenstorrent describes this as transparency &quot;from compiler to kernel,&quot; enabling
        engineers to optimize AI models at a granular hardware level that proprietary GPU
        architectures actively prevent.
      </p>

      <HighlightBox type="key-point" color="blue">
        CUDA lock-in is not just a licensing problem — it is an optimization ceiling. On
        Nvidia hardware, developers can only tune what Nvidia&apos;s closed drivers expose.
        On a RISC-V system with an open-source stack, the ceiling does not exist in the same
        way. That matters most for researchers and engineers who need to understand exactly
        what their model is doing at the hardware level.
      </HighlightBox>

      {/* ── OPEN SOURCE EDGE ───────────────────────────────────────────── */}
      <h2>The Open-Source Software Edge: TT-Buda & TT-Metalium</h2>
      <p>
        Tenstorrent&apos;s software strategy is built on two open-source components:
      </p>

      <h3>TT-Buda — The Compiler</h3>
      <p>
        TT-Buda is Tenstorrent&apos;s open-source AI compiler suite. It handles the
        translation of high-level model definitions (PyTorch, JAX, ONNX) into optimized
        instruction sequences for the RISC-V hardware. Because the compiler is open source,
        developers can inspect, modify, and contribute optimization passes — something
        impossible with Nvidia&apos;s proprietary TensorRT.
      </p>

      <h3>TT-Metalium — The Kernel Suite</h3>
      <p>
        TT-Metalium provides the low-level kernel primitives that execute directly on the
        Tenstorrent silicon. The suite&apos;s open-source nature means that debugging
        complex model behavior — tracing a numerical instability, for example, or profiling
        a memory bandwidth bottleneck — can be done with full hardware visibility rather
        than relying on opaque vendor profiling tools.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Advantage</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>What It Means in Practice</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Transparency', 'Full access to hardware instructions — debug model behavior at the silicon level, not just the framework level'],
              ['Portability', 'Code written for QuietBox 2 avoids CUDA-specific idioms, making it easier to port to other RISC-V server architectures as they emerge'],
              ['Community optimization', 'Open compiler and kernel repos allow the broader developer community to contribute performance improvements Nvidia cannot'],
              ['No licensing risk', 'No proprietary SDK terms — model optimization work is owned entirely by the developer'],
            ].map(([adv, meaning], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600 }}>{adv}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── LOCAL INFERENCE CASE ───────────────────────────────────────── */}
      <h2>120 Billion Parameters — Locally, Silently</h2>
      <p>
        The base configuration of the QuietBox 2 supports running models with up to{' '}
        <strong>120 billion parameters</strong> entirely locally — covering specialized
        variants of Llama 3, Grok-1, and comparable open-weight models. For enterprises
        and researchers with data privacy requirements that prohibit sending inference
        requests to cloud APIs, this is the critical capability: frontier-class reasoning
        on hardware you physically control, in a room you can work in.
      </p>
      <p>
        The liquid cooling system is central to that last point. Previous RISC-V AI
        systems capable of this parameter scale have required server rack hardware —
        noisy, power-hungry, and incompatible with standard office infrastructure. The
        QuietBox 2&apos;s high-efficiency liquid cooling loop keeps the processors at peak
        performance levels without the acoustic footprint of air-cooled alternatives,
        making it deployable in a standard developer workspace.
      </p>

      <HighlightBox type="quote" color="green">
        For developers who need to run 100B+ models locally — for privacy, for latency, for
        offline capability — the QuietBox 2 is the first time that option has been available
        in a form factor that fits under a desk rather than in a data center.
      </HighlightBox>

      {/* ── MARKET CONTEXT ─────────────────────────────────────────────── */}
      <h2>Market Context: Who Is This For?</h2>
      <p>
        The QuietBox 2 is not positioned as a consumer product. At $9,999, it targets three
        specific buyer profiles:
      </p>
      <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.9', marginBottom: '1rem' }}>
        <li>
          <strong>AI researchers</strong> who need full hardware transparency to debug and
          understand model behavior — not just benchmark it
        </li>
        <li>
          <strong>Enterprise security and compliance teams</strong> with data residency
          requirements that prohibit cloud inference for sensitive workloads
        </li>
        <li>
          <strong>Independent developers and labs</strong> exploring RISC-V as an alternative
          to Nvidia-dependent infrastructure ahead of potential CUDA ecosystem disruption
        </li>
      </ul>
      <p>
        The competitive framing is explicit: Tenstorrent is not trying to match Nvidia&apos;s
        training throughput on large clusters. It is targeting the inference and local
        deployment market — specifically the developers building production applications who
        currently rent cloud GPU time for every inference call and want an alternative.
      </p>

      <HighlightBox type="stat" color="purple">
        The TT-QuietBox 2 is available for order as of March 10, 2026, at <strong>$9,999</strong>{' '}
        for the base configuration. Tenstorrent has not announced an upper configuration tier
        or a shipping timeline for enterprise bulk orders.
      </HighlightBox>

    </NewsArticle>
  );
}
