import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/nasa/news/esa-corrosion-lunar-gateway-halo-ihab-modules-cancelled-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'ESA Confirms Corrosion on Lunar Gateway HALO, I-HAB Modules',
  description:
    'ESA confirmed corrosion on both the HALO and I-HAB modules of NASA\'s cancelled Lunar Gateway, built by Thales Alenia Space. Isaacman told Congress the damage would have pushed operations past 2030.',
  keywords: [
    'ESA Lunar Gateway corrosion',
    'HALO module corrosion NASA',
    'I-HAB module ESA corrosion',
    'Lunar Gateway cancelled NASA 2026',
    'Jared Isaacman Gateway testimony',
    'Thales Alenia Space corrosion modules',
    'Northrop Grumman HALO Gilbert Arizona',
    'Gateway hardware repurposed lunar surface',
    'NASA Lunar Gateway cancellation 2026',
    'ESA HALO corrosion confirmation April 2026',
    'NASA budget cuts 2027 Brian Babin',
    'Gateway Power Propulsion Element nuclear fission',
    'lunar gateway station corrosion problem',
    'NASA House Science Committee Gateway hearing',
    'Eric Berger Gateway corrosion Ars Technica',
    'NASA lunar surface infrastructure 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'ESA Confirms Corrosion on Lunar Gateway HALO, I-HAB Modules',
    description:
      'ESA acknowledged corrosion on both Gateway habitation modules on April 24, two days after NASA chief Jared Isaacman told lawmakers the damage would have delayed any operational use of the station past 2030.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T12:00:00Z',
    modifiedTime: '2026-04-26T12:00:00Z',
    section: 'Science',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Moon surface representing the cancelled NASA Lunar Gateway space station program',
      },
    ],
    tags: ['NASA', 'Lunar Gateway', 'ESA', 'HALO Module', 'Space Exploration'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESA Confirms Corrosion on NASA\'s Cancelled Lunar Gateway Modules | Station Could Not Have Operated Before 2030',
    description:
      'Both the HALO and I-HAB modules built by Thales Alenia Space show corrosion. Isaacman told Congress Gateway was already dead. The Power Propulsion Element survives for a nuclear fission demo.',
    images: [OG_IMAGE],
  },
};

export default function NasaNewsEsaCorrosionLunarGatewayHaloIhabModulesCancelled2026Page() {
  return (
    <NewsArticle
      title="ESA Confirms Corrosion on NASA's Cancelled Lunar Gateway HALO and I-HAB Modules"
      subtitle="The European Space Agency acknowledged corrosion on both habitation modules built by Thales Alenia Space, two days after NASA Administrator Jared Isaacman told Congress the damage would have pushed Gateway operations beyond 2030"
      category="Science"
      categoryColor="green"
      topicTag="science"
      publishDate="April 26, 2026"
      readTime="4 min read"
      breaking={false}
      trending={false}
      author={{
        name: 'Jack Brennan',
        role: 'Science Reporter',
        authorSlug: 'jack-brennan',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Moon surface representing the cancelled NASA Lunar Gateway space station and its corroded HALO and I-HAB modules',
      }}
      tags={['NASA', 'Lunar Gateway', 'ESA', 'HALO Module', 'Thales Alenia Space']}
      slug="nasa-news-esa-corrosion-lunar-gateway-halo-ihab-modules-cancelled-2026"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          The <strong>European Space Agency</strong> confirmed on April 24, 2026, that corrosion has been found on both the <strong>HALO</strong> (Habitation and Logistics Outpost) and <strong>I-HAB</strong> modules of <strong>NASA's now-cancelled Lunar Gateway</strong> space station. The acknowledgment came two days after NASA Administrator <strong>Jared Isaacman</strong> testified before the House Science, Space, and Technology Committee that the corrosion on both structures would have pushed any operational use of the station beyond 2030. For context on NASA's broader program changes, see the <Link href="/nasa" className="text-blue-600 hover:text-blue-800 underline">ObjectWire NASA hub</Link>.
        </p>

        <h2>ESA Corrosion Confirmation | Forging Process, Surface Treatment, Material Factors</h2>
        <p>
          ESA attributed the corrosion to a "combination of factors," including the forging process, surface treatment, and inherent material characteristics of the aluminum alloy structures. The agency indicated that the <strong>I-HAB</strong> module's corrosion was less severe than that found on HALO, and characterized the issue as "technically manageable" for that component. Both structures were fabricated by <strong>Thales Alenia Space</strong> at its facility in Turin, Italy.
        </p>
        <p>
          Reports of corrosion on the HALO module had been circulating for weeks before Isaacman's congressional testimony. Ars Technica senior space editor <strong>Eric Berger</strong> reported rumors of the problem as early as March 2026. <strong>Northrop Grumman</strong> and ESA have since confirmed that the problem is "real and significant." The HALO structure had been shipped from Turin to Northrop Grumman's facility in <strong>Gilbert, Arizona</strong>, in April 2025 for final outfitting work ahead of a planned launch when the corrosion findings emerged.
        </p>
        <p>
          Isaacman told lawmakers on April 22 that the corrosion damage across both modules was severe enough that restoring them to flight readiness would have taken years of remediation work, making a pre-2030 operational date effectively impossible even before accounting for Gateway's already strained budget situation.
        </p>

        <h2>Gateway Already Cancelled | Hardware May Still Reach Lunar Surface</h2>
        <p>
          NASA had announced in <strong>March 2026</strong> its decision to cancel the Gateway program in its original configuration as a cislunar outpost. The agency said it would redirect those resources toward building infrastructure directly on the lunar surface rather than in lunar orbit, aligning with a revised Artemis strategy that emphasizes permanent surface presence over orbital staging. The corrosion findings, while a compounding factor, were not the primary driver of cancellation according to the agency.
        </p>
        <p>
          Isaacman indicated to Congress that NASA intends to work with international partners, including ESA, to explore whether the Gateway modules could be repurposed for lunar surface applications. The question of whether corroded hardware can be adapted for a radically different mission environment, surface pressure, dust, and thermal cycling rather than vacuum station operation, remains technically open.
        </p>
        <p>
          One element escaped the corrosion problem entirely: the <strong>Power and Propulsion Element (PPE)</strong>, Gateway's non-habitable engine and power unit, was unaffected. It is now being adapted for a <strong>nuclear fission-powered propulsion demonstration mission</strong>, preserving some of the program's technical investment even as the station concept is retired. For related reporting on US space and defense programs operating in parallel orbital domains, see ObjectWire's coverage of the <Link href="/trump/space-force-building-golden-dome" className="text-blue-600 hover:text-blue-800 underline">Space Force's $3.2 billion Golden Dome contracts</Link>.
        </p>

        <h2>Congressional Budget Fight | 23% NASA Cut Called "Dead on Arrival"</h2>
        <p>
          The April 22 hearing produced sharp bipartisan friction over the Trump administration's proposed <strong>23% cut to NASA's fiscal year 2027 budget</strong>. Committee Chairman <strong>Brian Babin</strong>, a Texas Republican, called the proposed reductions "dead on arrival" and pledged that Congress would reject them. His remarks reflected broader unease among lawmakers with a scale of cuts that would affect NASA's science mission directorate, its deep space exploration programs, and support for the commercial launch sector simultaneously. For broader context on Trump administration budget and policy priorities, see <Link href="/trump" className="text-blue-600 hover:text-blue-800 underline">ObjectWire's Trump administration coverage</Link>.
        </p>
        <p>
          The Gateway corrosion story, arriving in the middle of an already contentious budget debate, gave lawmakers on both sides additional ammunition to question the administration's management of NASA's long-range programs. Critics argued that years of funding instability and shifting priorities, rather than any single technical failure, had produced the conditions that allowed hardware to sit in storage long enough for corrosion to become a program-ending liability.
        </p>
        <p>
          ESA has not indicated whether it will seek compensation from Thales Alenia Space for the HALO and I-HAB modules, nor has it confirmed a timeline for any final disposition of the hardware. NASA is expected to publish an updated Artemis implementation plan later this year that will formally address how Gateway-era assets will be reallocated. For more on NASA's deep space science programs continuing in parallel with the Artemis pivot, see ObjectWire's <Link href="/nasa/europa" className="text-blue-600 hover:text-blue-800 underline">Europa mission coverage</Link>.
        </p>
      </div>
    </NewsArticle>
  );
}
