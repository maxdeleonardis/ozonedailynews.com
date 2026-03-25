import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/dell/dell-pro-max-gb300-grace-blackwell-ultra-desktop-gtc-2026';

export const metadata: Metadata = {
  title: "Dell Ships First Desktop with Nvidia GB300 Grace Blackwell Ultra for AI Agents | ObjectWire",
  description:
    "Dell Technologies announced at Nvidia GTC 2026 that it is the first OEM to ship a desktop powered by Nvidia's GB300 Grace Blackwell Ultra Desktop Superchip. The Dell Pro Max with GB300 delivers 20 petaFLOPS of FP4 AI performance and 784GB of unified memory for autonomous AI agent workloads.",
  keywords: [
    'Dell Pro Max GB300 desktop 2026',
    'Nvidia GB300 Grace Blackwell Ultra desktop',
    'Dell Technologies GTC 2026 announcement',
    'Dell first OEM GB300 desktop superchip',
    'Grace Blackwell Ultra Desktop Superchip',
    '20 petaFLOPS FP4 AI desktop',
    '784GB unified memory desktop AI',
    'Dell autonomous AI agents desktop 2026',
    'NVIDIA OpenShell Dell Pro Max',
    'Jeff Clarke Dell COO GB300',
    'data center GPU desktop form factor 2026',
    'Nvidia GTC 2026 Dell partnership',
    'Dell AI workstation GB300',
    'Blackwell GPU desktop 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Dell Ships First Desktop with Nvidia's GB300 Grace Blackwell Ultra — 20 PetaFLOPS for AI Agents",
    description:
      "Announced at GTC 2026, the Dell Pro Max with GB300 is the first OEM desktop powered by Nvidia's Grace Blackwell Ultra Superchip. 20 petaFLOPS FP4, 784GB unified memory — data center AI in a desktop box built for autonomous agent development.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-17T16:00:00Z',
    modifiedTime: '2026-03-18T10:00:00Z',
    section: 'Technology',
    tags: [
      'Dell', 'Nvidia', 'GB300', 'Grace Blackwell Ultra', 'GTC 2026',
      'AI Agents', 'Desktop Workstation', 'Hardware', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dell Becomes First OEM to Ship a Desktop with Nvidia's GB300 — 20 PetaFLOPS, 784GB RAM | ObjectWire",
    description:
      "At GTC 2026, Dell unveiled the Pro Max with GB300 Grace Blackwell Ultra Superchip. 20 petaFLOPS FP4 AI performance and 784GB unified memory in a desktop — the same processor class used by OpenAI, Google, and Microsoft.",
  },
  other: {
    news_keywords:
      'Dell GB300, Nvidia Grace Blackwell Ultra, GTC 2026, Dell Pro Max, AI agents desktop, 20 petaFLOPS, Jeff Clarke, NVIDIA OpenShell, autonomous AI, desktop superchip',
  },
};

export default function DellGB300GraceBlackwellPage() {
  return <NewsArticleDB slug="tech-dell-dell-pro-max-gb300-grace-blackwell-ultra-desktop-gtc-2026" />;
}
