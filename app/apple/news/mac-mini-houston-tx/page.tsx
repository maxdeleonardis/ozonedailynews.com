import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ArticleQuote,
  ProcessDiagram,
} from '@/components/DynamicNewsArticle';

export const metadata: Metadata = {
  title: 'Apple to Manufacture Mac Mini in Houston, TX at Foxconn Facility | ObjectWire',
  description:
    'Apple will begin assembling the Mac Mini at a Foxconn facility in Houston, Texas in the second half of 2026 — the first time the compact desktop has been produced in the United States, The Wall Street Journal reported.',
  keywords: [
    'Apple Mac Mini Houston Texas',
    'Mac Mini US manufacturing',
    'Apple Foxconn Houston',
    'Mac Mini assembled in USA',
    'Apple domestic manufacturing 2026',
    'Foxconn Houston facility',
    'Apple supply chain USA',
    'Mac Mini production Texas',
    'Apple Mac Pro Austin Texas',
    'Apple US jobs manufacturing',
    'Apple tariff strategy',
    'Wall Street Journal Apple Mac Mini',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/apple/news/mac-mini-houston-tx',
  },
  openGraph: {
    type: 'article',
    title: 'Apple to Begin Manufacturing Mac Mini in Houston, TX at Foxconn Facility',
    description:
      'Apple plans to assemble the Mac Mini at a Foxconn-operated facility in Houston, Texas, in H2 2026 — making it only the second Mac desktop line to be built in the United States.',
    publishedTime: '2026-02-23T12:00:00Z',
    modifiedTime: '2026-02-23T12:00:00Z',
    url: 'https://www.objectwire.org/apple/news/mac-mini-houston-tx',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    section: 'Technology',
    tags: ['Apple', 'Mac Mini', 'Houston', 'Foxconn', 'US Manufacturing', 'Supply Chain'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple to Make Mac Mini in Houston at Foxconn Plant — WSJ',
    description:
      'Apple will begin Mac Mini assembly in Houston, Texas in H2 2026, its first US-made Mac Mini. Currently only the Mac Pro is assembled domestically.',
  },
};

export default function MacMiniHoustonPage() {
  return (
    <>
      <NewsArticleSchema
        title="Apple to Begin Manufacturing Mac Mini in Houston, TX at Foxconn Facility"
        description="Apple announced plans to start assembling the Mac Mini at a Foxconn facility in Houston, Texas, later in 2026 — the first time the compact desktop has been produced in the United States."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2026-02-23T12:00:00Z"
        modifiedTime="2026-02-23T12:00:00Z"
        articleUrl="https://www.objectwire.org/apple/news/mac-mini-houston-tx"
        imageUrl="https://www.objectwire.org/news/mac_mini.PNG"
        section="Technology"
        keywords={[
          'Apple Mac Mini Houston',
          'Foxconn Texas',
          'US manufacturing Apple',
          'Mac Mini 2026',
          'Apple supply chain',
        ]}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/apple', label: 'Apple' },
          { href: '/apple/news', label: 'News' },
        ]}
        categories={[
          { label: 'BREAKING', color: 'red' },
          { label: 'TECHNOLOGY', color: 'blue' },
        ]}
        readTime="5 min read"
        title="Apple to Begin Manufacturing Mac Mini in Houston, TX at Foxconn Facility"
        subtitle="The compact desktop will become only the second Mac line assembled in the United States — joining the Mac Pro in Austin — as Apple accelerates domestic manufacturing amid trade pressures"
        heroImage={{
          src: '/news/mac_mini.PNG',
          alt: 'Apple Mac Mini — Houston Texas manufacturing announcement',
          caption: 'Apple will begin assembling the Mac Mini at a Foxconn facility in Houston, Texas, in H2 2026.',
          credit: 'Apple Inc.',
        }}
        author={{
          name: 'ObjectWire Technology Desk',
          department: 'Technology & Consumer Electronics',
          initials: 'OW',
        }}
        publishDate="February 23, 2026"
        relatedArticles={[
          {
            href: '/apple',
            category: 'COMPANY',
            categoryColor: 'text-blue-600',
            title: 'Apple Inc — Full Coverage Hub',
          },
          {
            href: '/apple/apple-iphone-18-delay-2027-foldable',
            category: 'PRODUCT',
            categoryColor: 'text-purple-600',
            title: 'Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch',
          },
          {
            href: '/tech',
            category: 'TECH NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest Technology Coverage',
          },
        ]}
        timeline={[
          { date: '2013', description: 'Mac Pro assembly begins in Austin, Texas at Flex facility' },
          { date: '2019', description: 'Mac Pro tower fully assembled in Texas with 70%+ US content by value' },
          { date: '2022', description: 'Apple commits $430 billion to US economy over five years' },
          { date: '2023', description: 'Foxconn announces $100M Houston investment, 500 jobs' },
          { date: '2025', description: 'TSMC Arizona begins 4nm and 3nm Apple silicon production' },
          { date: 'H2 2026', description: 'Mac Mini assembly begins in Houston, Texas at Foxconn facility', highlight: true },
        ]}
        documents={[
          {
            href: 'https://www.apple.com/mac-mini',
            label: 'Apple Mac Mini — Official Product Page',
            icon: '🖥️',
          },
          {
            href: 'https://www.wsj.com/',
            label: 'Wall Street Journal — Original Report',
            icon: '📰',
          },
          {
            href: 'https://www.apple.com/newsroom/',
            label: 'Apple Newsroom',
            icon: '📄',
          },
        ]}
        newsletterTitle="Apple & Tech Industry Updates"
        newsletterDescription="Get the latest breaking news on Apple manufacturing, products, and supply chain developments."
        showNewsletter={true}
        sources={[
          {
            number: 1,
            url: 'https://www.wsj.com/',
            title: 'The Wall Street Journal',
            description: 'Original report citing people familiar with Apple\'s Houston manufacturing plans, February 23, 2026',
          },
          {
            number: 2,
            url: 'https://www.apple.com/',
            title: 'Apple Inc.',
            description: 'Official company statements on US manufacturing and supplier investments',
          },
          {
            number: 3,
            url: 'https://www.foxconn.com/',
            title: 'Foxconn Technology Group',
            description: 'Houston facility expansion and US operations announcements',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >

        <CaseOverview
          title="KEY FACTS"
          color="blue"
          items={[
            { label: 'Assembly start', value: 'Second half of 2026' },
            { label: 'Location', value: 'Houston, Texas (Foxconn / Sharp facility)' },
            { label: 'First reported by', value: 'The Wall Street Journal, Feb 23, 2026' },
            { label: 'Existing US Mac line', value: 'Mac Pro — Austin, Texas (since 2013)' },
          ]}
        />

        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <Link href="/apple" className="font-bold underline">Apple</Link> announced plans to begin
          assembling the{' '}
          <a
            href="https://www.apple.com/mac-mini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Mac Mini
          </a>{' '}
          at a <strong>Foxconn facility in Houston, Texas</strong>, during the second half of 2026
          — marking the first time the compact desktop computer has been manufactured in the United
          States.{' '}
          <a
            href="https://www.wsj.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            The Wall Street Journal
          </a>{' '}
          first reported the move on February 23, 2026, citing people familiar with the plans.
        </p>

        <p>
          The decision adds the Mac Mini to Apple&rsquo;s small but growing list of US-assembled
          products, which currently consists solely of the <strong>Mac Pro</strong> — assembled at
          a Flex facility in Austin, Texas, since 2013. Components for the Houston-assembled Mac Mini
          will continue to be sourced globally, with the facility handling final assembly rather than
          full manufacturing.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Announcement Details and Timeline
        </h2>

        <p>
          The Wall Street Journal cited people familiar with the plans, stating production is
          scheduled to begin in the <strong>second half of 2026</strong>. No exact start month or
          initial production volume was disclosed. Apple had not issued an official press release as
          of February 23, 2026, though the company has historically confirmed US assembly expansions
          once operations are underway and publicly visible.
        </p>

        <p>
          The Houston facility is operated by <strong>Foxconn subsidiary Sharp</strong> in partnership
          with Apple. Foxconn&rsquo;s Houston site sits in the city&rsquo;s industrial corridor and
          has been expanding US operations over recent years, with a focus on server assembly,
          consumer electronics, and advanced manufacturing lines.
        </p>

        <ArticleQuote
          quote="Apple plans to start assembling the Mac Mini at a facility in Houston, Texas, operated by Foxconn."
          author="The Wall Street Journal"
          title="February 23, 2026"
        />

        <StatisticsBox
          title="APPLE US MANUFACTURING SNAPSHOT"
          color="blue"
          stats={[
            { value: '2013', label: 'Mac Pro US assembly began' },
            { value: '$430B', label: 'US economy commitment (5yr)' },
            { value: '2.4M', label: 'US jobs supported (supply chain)' },
            { value: 'H2 2026', label: 'Mac Mini Houston launch' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Comparison to Mac Pro US Manufacturing
        </h2>

        <p>
          The <strong>Mac Pro</strong> — Apple&rsquo;s high-end workstation — has been assembled in
          Austin, Texas since 2019 at a Flex-operated facility. The assembly line employs approximately
          100 workers and handles final integration of globally sourced components. Apple has reported
          that the Austin facility produces the Mac Pro with over <strong>70% US-sourced components
          by value</strong>, qualifying for tariff exemptions under Section 301 exclusions.
        </p>

        <p>
          The Mac Mini represents a meaningful departure in scope: it is a <strong>consumer-grade,
          lower-cost machine</strong> rather than a $7,000+ professional workstation. Volume
          requirements for the Mac Mini are substantially higher than the Mac Pro, making the
          Houston facility&rsquo;s capacity for high-volume production a critical factor in the
          siting decision. This is the first time Apple has extended US assembly beyond its
          flagship professional hardware.
        </p>

        <ProcessDiagram
          title="APPLE US DESKTOP ASSEMBLY FOOTPRINT"
          color="blue"
          steps={[
            {
              title: 'Mac Pro — Austin, Texas (Since 2013)',
              description: 'Assembled at Flex facility; ~100 workers; 70%+ US content by value; tariff-exempt under Section 301',
            },
            {
              title: 'Mac Mini — Houston, Texas (H2 2026)',
              description: 'Final assembly at Foxconn/Sharp facility; globally sourced components; higher volume than Mac Pro',
            },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Houston Facility and Foxconn&rsquo;s US Presence
        </h2>

        <p>
          Foxconn operates multiple US sites, with the Houston plant focused on server and electronics
          assembly. In <strong>2023, Foxconn announced a $100 million investment</strong> in
          Houston-area operations, committing to create 500 jobs for advanced manufacturing. The
          facility has capacity for high-volume production, with recent expansions supporting AI
          server lines and consumer electronics.
        </p>

        <p>
          Apple&rsquo;s selection of the Houston site aligns with its broader strategy of diversifying
          assembly away from concentrated Asian production — a shift accelerated by US-China trade
          tensions, tariff exposure on imported electronics, and growing political pressure on major
          technology companies to invest domestically.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Broader Context: Apple&rsquo;s US Manufacturing Trajectory
        </h2>

        <p>
          Apple has steadily expanded its US manufacturing and supply chain footprint since the
          Mac Pro moved to Texas in 2013. Key milestones in the company&rsquo;s domestic
          investment trajectory include:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>2013</strong> — Mac Pro assembly begins in Austin, Texas
          </li>
          <li>
            <strong>2019</strong> — Mac Pro tower fully assembled in Texas with 70%+ US content
            by value; qualifies for Section 301 tariff exclusions
          </li>
          <li>
            <strong>2022</strong> — Apple commits $430 billion to the US economy over five years,
            including supplier investments and R&amp;D spending
          </li>
          <li>
            <strong>2025</strong> — TSMC Arizona begins 4nm and 3nm Apple silicon chip production,
            targeting supply chain independence for A- and M-series processors
          </li>
          <li>
            <strong>H2 2026</strong> — Mac Mini assembly begins in Houston at Foxconn/Sharp facility
          </li>
        </ul>

        <p>
          As of 2025, Apple reports over <strong>2.4 million US jobs supported</strong> through its
          supply chain, including 80,000 direct supplier jobs — figures the company has used to
          frame its domestic economic contribution in policy discussions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Supply Chain and Economic Implications
        </h2>

        <p>
          The Mac Mini assembly shift is expected to create a <strong>limited number of direct jobs</strong>{' '}
          at the Houston facility — consistent with Apple&rsquo;s final assembly model, which is
          capital-intensive and lightly staffed relative to full manufacturing operations. Analysts
          estimate that US assembly adds <strong>5–10% to production costs</strong> for desktop
          computers due to labor and logistics differentials, though tariff savings and supply chain
          resilience offset a portion of those expenses.
        </p>

        <p>
          The move also responds to ongoing US-China trade dynamics. Potential tariffs on imported
          electronics discussed in 2025–2026 policy circles would disproportionately affect
          companies with concentrated Asian assembly, giving Apple a structural hedge by localizing
          final assembly of a high-volume product in Texas.
        </p>

        <ArticleQuote
          quote="When a compact desktop starts getting assembled in the heart of oil country, the only thing hotter than Houston summers might be the supply chain spreadsheets."
          author="ObjectWire"
          title="Technology Desk"
        />

        <p className="text-sm text-gray-500 italic mt-6">
          Apple has not issued an official press release confirming this report as of February 23, 2026.
          This article is based on reporting by The Wall Street Journal. Components will continue to
          be sourced globally; the Houston facility handles final assembly only.
        </p>

      </DynamicNewsArticle>
    </>
  );
}
