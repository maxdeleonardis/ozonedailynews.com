import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ArticleQuote,
  ProcessDiagram,
} from '@/components/DynamicNewsArticle';

// Article UUID for tracking and archival
const ARTICLE_UUID = 'b2e4f5a1-7c3d-4e2b-bb93-1242ac110003';
const ARTICLE_VERSION = '1.0';

export const metadata: Metadata = {
  title: 'The Dawn of the Orbital AI Era: SpaceX and xAI Move the Cloud to the Stars | ObjectWire',
  description: 'Analysis of the SpaceX and xAI merger and the transition toward orbital computing, solving terrestrial bottlenecks in power, land, and cooling.',
  keywords: [
    'SpaceX',
    'xAI',
    'Orbital Computing',
    'AI Infrastructure',
    'Starship',
    'Starlink',
    'Satellite Servers',
    'Industrial Revolution'
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/technology/articles/dawn-of-orbital-ai',
  },
  openGraph: {
    title: 'The Dawn of the Orbital AI Era: Moving the Cloud to the Stars',
    description: 'The $1.25 trillion union of SpaceX and xAI is not merely a corporate restructuring; it is the launchpad for a planetary-scale computer.',
    type: 'article',
    url: 'https://www.objectwire.org/technology/articles/dawn-of-orbital-ai',
    publishedTime: '2026-02-10T14:00:00Z',
    section: 'Technology',
  },
};

export default function OrbitalAIEraPage() {
  const publishDate = "February 10, 2026";
  const isoPublishDate = new Date("2026-02-10T14:00:00Z").toISOString();

  const articleMetadata = {
    uuid: ARTICLE_UUID,
    version: ARTICLE_VERSION,
    slug: 'dawn-of-orbital-ai',
    category: 'Technology',
  };

  return (
    <>
      <NewsArticleSchema
        title="The Dawn of the Orbital AI Era: SpaceX and xAI Move the Cloud to the Stars"
        description="Analysis of the SpaceX and xAI merger and the transition toward orbital computing, solving terrestrial bottlenecks in power, land, and cooling."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/about"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        articleUrl="https://www.objectwire.org/technology/articles/dawn-of-orbital-ai"
        section="Technology"
        keywords={['SpaceX', 'xAI', 'Orbital Computing', 'AI', 'Infrastructure']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/technology', label: 'Technology' },
          { href: '/technology/articles', label: 'Articles' },
        ]}
        categories={[{ label: 'TECHNOLOGY', color: 'blue' }, { label: 'ORBITAL COMPUTING', color: 'purple' }]}
        readTime="10 min read"
        title="The Dawn of the Orbital AI Era: SpaceX and xAI Move the Cloud to the Stars"
        subtitle="Moving AI training and inference from terrestrial data centers to the vacuum of space to solve the bottlenecks of land, power, and thermal management."
        author={{
          name: 'ObjectWire Technology Desk',
          initials: 'OW',
        }}
        publishDate={publishDate}
        heroImage={{
          src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
          alt: 'Satellite in orbit over Earth',
          caption: 'The next frontier of computing: Infrastructure that exists beyond the atmosphere.',
          credit: 'NASA/Unsplash',
        }}
      >
        <div className="bg-gray-50 border border-gray-200 rounded px-4 py-2 text-[10px] font-mono text-gray-500 mb-8 inline-block">
          UUID: {articleMetadata.uuid} | v{articleMetadata.version}
        </div>

        <p className="text-xl font-semibold leading-relaxed mb-6">
          For decades, "The Cloud" has been a terrestrial construct—a nebulous collection of data centers scattered across the Earth's surface. However, on February 2, 2026, the announcement of the merger between SpaceX and xAI signaled a fundamental shift. This $1.25 trillion union establishes the foundation for Orbital Computing, moving AI training and inference from the ground to the stars.
        </p>

        <CaseOverview 
          title="The Orbital Computing Shift"
          items={[
            { label: "Announcement Date", value: "February 2, 2026" },
            { label: "Entity Valuation", value: "$1.25 Trillion" },
            { label: "Core Objective", value: "Decouple AI from Terrestrial Resource Limits" },
            { label: "Key Infrastructure", value: "Starship, Starlink, xAI Grok" }
          ]}
        />

        <h2 className="text-3xl font-bold mt-12 mb-6">I. Breaking the Terrestrial Bottleneck</h2>
        <p className="mb-6">
          Artificial Intelligence training requires immense resources: land for facilities, consistent power for operations, and massive quantities of water for cooling. On Earth, these resources are reaching critical scarcity. Data centers are increasingly straining local power grids and competing for water resources.
        </p>
        
        <StatisticsBox 
          title="The Space Advantage"
          stats={[
            { label: "Solar Availability", value: "24/7" },
            { label: "Cooling Method", value: "Radiative" },
            { label: "Manufacturing", value: "Zero-G" }
          ]}
        />

        <h2 className="text-3xl font-bold mt-12 mb-6">II. The Strategic Synergy: SpaceX and xAI</h2>
        <p className="mb-6">
          The merger creates a closed-loop system that competitors currently cannot replicate. It leverages the logistical capability of Starship, the global connectivity of Starlink, and the intelligence engine of xAI.
        </p>

        <ProcessDiagram 
          title="The Orbital AI Lifecycle"
          steps={[
            { title: "Launch (Starship)", description: "High-capacity server deployment at costs below $100/kg." },
            { title: "Networking (Starlink)", description: "Inter-satellite laser links for high-bandwidth, low-latency data transit." },
            { title: "Processing (xAI)", description: "On-orbit inference and model training using constant solar power." },
            { title: "Downlink", description: "Refined intelligence transmitted directly to end-users on Earth." }
          ]}
        />

        <h2 className="text-3xl font-bold mt-12 mb-6">III. Industrial Infrastructure: Supply Chain Sectors</h2>
        <p className="mb-6">
          The transition to orbital computing requires specialized hardware capable of surviving the vacuum and radiation of space. This creates new opportunities in specific industrial sectors.
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50 uppercase text-[10px] font-black tracking-widest text-gray-500">
                <th className="border border-gray-200 px-4 py-3 text-left">Sector</th>
                <th className="border border-gray-200 px-4 py-3 text-left">Key Focus</th>
                <th className="border border-gray-200 px-4 py-3 text-left">Significance</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-bold">Semiconductors</td>
                <td className="border border-gray-200 px-4 py-3">Radiation Hardening</td>
                <td className="border border-gray-200 px-4 py-3">Protecting logic from bit-flips caused by cosmic rays.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-bold">Thermal Management</td>
                <td className="border border-gray-200 px-4 py-3">Radiative Cooling</td>
                <td className="border border-gray-200 px-4 py-3">High-emissivity materials and heat exchangers for heat venting.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-bold">Communications</td>
                <td className="border border-gray-200 px-4 py-3">Laser Inter-links</td>
                <td className="border border-gray-200 px-4 py-3">High-bandwidth data transfer without radio interference.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-bold">Robotics</td>
                <td className="border border-gray-200 px-4 py-3">On-Orbit Servicing</td>
                <td className="border border-gray-200 px-4 py-3">Automated maintenance and hardware upgrades in vacuum.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">IV. Risks and Regulatory Oversight</h2>
        <p className="mb-6">
          Despite the technological advantages, the path remains complex. The financial pressure on SpaceX's balance sheet is significant, as xAI remains a capital-intensive operation. Furthermore, the consolidation of global launch capability, satellite internet, and advanced AI under a single entity will inevitably invite rigorous regulatory and national security scrutiny from sovereign nations.
        </p>

        <ArticleQuote 
          quote="Orbital computing is the moment AI stopped being a software story and became a civilizational infrastructure story."
          author="ObjectWire Editorial"
        />

        <p className="mb-6 mt-6 font-semibold">
          Final Conclusion:
        </p>
        <p className="mb-6">
          We are witnessing the transition from building isolated data centers on the ground to developing a planetary-scale computer. For technologists and investors, the message is clear: the most strategically significant architecture for the next decade is not located on a map—it is located in the stars.
        </p>
      </DynamicNewsArticle>
    </>
  );
}
