import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticlePage,
  InfoBox,
  TableOfContents,
  Section,
  RelatedLinks,
  ExternalLinks,
  Quote,
} from '@/components/ArticlePage';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/youtube/mat-armstrong';

export const metadata: Metadata = {
  title: 'Mat Armstrong — Automotive YouTube Creator, 6.2M Subscribers | ObjectWire',
  description:
    'Mat Armstrong (@MatArmstrongbmx) is a UK-based YouTube automotive creator with over 6.2 million subscribers and 870 million views. A former professional BMX rider from Leicester, he specialises in rebuilding wrecked supercars including Ferrari, Porsche, Rolls-Royce, and more.',
  keywords: [
    'Mat Armstrong YouTube',
    'Mat Armstrong BMX',
    'MatArmstrongbmx',
    'Mat Armstrong car rebuilds',
    'Mat Armstrong Leicester',
    'Mat Armstrong supercar restoration',
    'Mat Armstrong 6 million subscribers',
    'Mat Armstrong wrecked Ferrari rebuild',
    'Mat Armstrong Porsche GT3 rebuild',
    'automotive YouTube UK',
    'car restoration YouTube channel',
    'Mat Armstrong MK2',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Mat Armstrong — From Professional BMX Rider to 6.2M-Subscriber Automotive YouTube Creator',
    description:
      'Profile of Mat Armstrong (@MatArmstrongbmx) — Leicester-born former pro BMX rider turned automotive content creator, with 870M+ total views specialising in wrecked supercar rebuilds.',
    type: 'profile',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
};

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'early-life', label: 'Early Life & BMX Career' },
  { id: 'youtube-launch', label: 'YouTube Channel Launch (2013)' },
  { id: 'content-focus', label: 'Content Focus & Popular Rebuilds' },
  { id: 'featured-video', label: 'Featured Video' },
  { id: 'growth-stats', label: 'Growth Statistics' },
  { id: 'channels', label: 'Channels & Sub-Brands' },
  { id: 'business', label: 'Business & Collaborations' },
  { id: 'personal', label: 'Personal Details' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Mat Armstrong' },
  { label: 'Born', value: 'June 11, 1993, Leicester, England' },
  { label: 'Nationality', value: 'British' },
  { label: 'YouTube Handle', value: '@MatArmstrongbmx' },
  { label: 'Subscribers (Main)', value: '6.23M+ (Feb 2026)' },
  { label: 'Total Views', value: '870M+ across 511 videos' },
  { label: 'Channel Created', value: 'April 6, 2013' },
  { label: 'Content Focus', value: 'Supercar & prestige car rebuilds, automotive restoration' },
  { label: 'Prior Career', value: 'Professional freestyle BMX rider (ages 16–20)' },
  { label: 'Education', value: 'Lutterworth College' },
  { label: 'Instagram', value: '@matarmstrongbmx' },
  { label: 'Partner', value: 'Hannah Smith' },
];

export default function MatArmstrongPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <ArticlePage
        title="Mat Armstrong"
        subtitle="Professional BMX rider turned automotive YouTube creator — Leicester, England"
        category="YouTube"
        lastUpdated="February 24, 2026"
        backLink={{ href: '/youtube', label: 'YouTube Hub' }}
        infoBox={{
          title: 'Mat Armstrong',
          image: {
            src: '/influncer/mat_armstrong.PNG',
            alt: 'Mat Armstrong — automotive YouTube creator',
            caption: 'Mat Armstrong (@MatArmstrongbmx)',
          },
          items: infoBoxItems,
        }}
        tableOfContents={tocItems}
        relatedLinks={[
          {
            href: '/youtube',
            label: 'YouTube Hub — ObjectWire',
            description: 'Full coverage of YouTube creators, channels, and platform news',
          },
          {
            href: '/youtube/logan-paul',
            label: 'Logan Paul — YouTube Creator Profile',
            description: 'American YouTube creator, boxer, and entrepreneur',
          },
          {
            href: '/influencer',
            label: 'Influencer Hub',
            description: 'ObjectWire profiles of content creators and digital entrepreneurs',
          },
          {
            href: '/entertainment',
            label: 'Entertainment Coverage',
            description: 'Broader entertainment and creator economy news',
          },
        ]}
      >
        <Section id="overview" title="Overview">
          <p>
            <strong>Mat Armstrong</strong> is a British automotive content creator and former professional
            freestyle BMX rider, best known for his YouTube channel{' '}
            <strong>@MatArmstrongbmx</strong>, where he documents the restoration and modification of
            severely damaged prestige and supercar vehicles. As of February 2026, the channel has
            accumulated over <strong>6.23 million subscribers</strong> and more than{' '}
            <strong>870 million total views</strong> across 511 videos — making him one of the most
            prominent automotive creators in the United Kingdom.
          </p>
          <p>
            Born on <strong>June 11, 1993</strong>, in Leicester, England, Armstrong grew up in a
            household with strong mechanical foundations: his father Tony Armstrong ran a garage as
            a skilled mechanic, giving Mat early exposure to automotive repair that would later define
            his content. After a career in competitive BMX that ended prematurely due to injury,
            Armstrong launched his YouTube channel in 2013 and gradually transitioned from BMX stunt
            clips to a format centred on rebuilding written-off supercars — Ferraris, Porsches,
            Rolls-Royces, and beyond — often within extreme time constraints.
          </p>
        </Section>

        <Section id="early-life" title="Early Life & BMX Career">
          <p>
            Mat Armstrong was raised in <strong>Leicester</strong>, a city in the East Midlands of
            England. His father, <strong>Tony Armstrong</strong>, operated a local garage and worked
            as a skilled mechanic — an environment that gave Mat practical exposure to vehicle
            maintenance, diagnostics, and repair from a young age, despite his own early ambitions
            lying firmly in action sports rather than automotive work.
          </p>
          <p>
            Armstrong attended <strong>Lutterworth College</strong> and during his teenage years
            became seriously invested in freestyle BMX, a discipline combining trick riding with
            street, park, and flatland environments. From approximately ages{' '}
            <strong>16 to 20</strong>, he competed as a professional BMX rider, securing sponsorships
            and travelling internationally to compete in events. The career offered exposure to
            audience-building, sponsor relationships, and the content demands of action sports — all
            skills that would transfer directly to YouTube.
          </p>
          <p>
            A career-ending injury forced Armstrong to retire from professional BMX competition
            before reaching his mid-twenties. Rather than abandoning the creative and performance
            instincts cultivated through action sports, he redirected them — and the mechanical
            knowledge absorbed growing up in his father&rsquo;s garage — into a new format
            entirely: automotive video content.
          </p>
          <Quote source="Mat Armstrong, YouTube">
            &ldquo;My dad was a mechanic. I grew up around cars. When BMX was done, I just went
            back to what I knew.&rdquo;
          </Quote>
        </Section>

        <Section id="youtube-launch" title="YouTube Channel Launch (2013)">
          <p>
            Armstrong created his YouTube channel on <strong>April 6, 2013</strong>, initially
            uploading BMX stunt videos intended for enthusiasts and potential sponsors. The channel
            predates his full pivot to automotive content by several years, giving it an unusually
            early creation date relative to its eventual content category.
          </p>
          <p>
            Following his retirement from BMX, Armstrong began supplementing his skateboarding and
            stunt clips with car-related content, drawing on skills absorbed from his father and
            from hands-on work in local garages. The pivot to full automotive content was gradual
            rather than abrupt — early car videos intermingled with lifestyle and BMX content before
            the rebuild format took hold and began consistently outperforming everything else on
            the channel.
          </p>
          <p>
            The channel gained significant traction through videos showing full car repairs,
            modifications, and — most formatively — complete rebuilds of severely wrecked vehicles.
            Armstrong developed a particular affinity for damaged examples of German prestige brands
            (Audi, BMW, Volkswagen) and high-end exotics (Porsche, Ferrari, Rolls-Royce), typically
            purchased at salvage auction at a fraction of their market value and restored to
            roadworthy condition on camera.
          </p>
        </Section>

        <Section id="content-focus" title="Content Focus & Popular Rebuilds">
          <p>
            Armstrong&rsquo;s core content format involves purchasing heavily damaged or written-off
            prestige vehicles — typically cars that have been involved in crashes, flooded, stripped
            by thieves, or otherwise deemed uneconomical to repair by insurers — and rebuilding them
            to functional and often market-ready condition, with the entire process documented on
            camera. The format combines mechanical process content with a performance structure:
            many videos carry time-challenge framing (&ldquo;rebuilt in 24 hours&rdquo;) that
            creates narrative tension alongside the technical detail.
          </p>
          <p>
            His videos average approximately <strong>1.3 million views per upload</strong>, with
            many surpassing 10–20 million views. Notable high-performing uploads include:
          </p>
          <ul>
            <li>
              <strong>&ldquo;I BOUGHT A WRECKED PORSCHE 911 GT3 &amp; REBUILT IT IN 24 HOURS&rdquo;</strong>{' '}
              — over 21 million views, one of the most-viewed automotive rebuild videos on the
              platform from a UK creator
            </li>
            <li>
              <strong>&ldquo;I BOUGHT A WRECKED FERRARI 812 &amp; ATTEMPTED TO REBUILD IT IN
              24 HOURS&rdquo;</strong> — multi-million view performance, part of a recurring
              Ferrari rebuild series
            </li>
            <li>
              <strong>&ldquo;FERRARI STOPPED ME REBUILDING MY WRECKED 296 GTB&rdquo;</strong>{' '}
              — posted in early 2026, notable for involving direct intervention from Ferrari and
              attracting rapid audience engagement on the legal and manufacturer-relations angle
            </li>
          </ul>
          <p>
            The channel&rsquo;s consistent success across rebuild formats reflects a format
            that appeals simultaneously to mechanical hobbyists, supercar enthusiasts, and
            general audiences drawn to the high-stakes nature of working on damaged six- and
            seven-figure vehicles.
          </p>
        </Section>

        <Section id="featured-video" title="Featured Video">
          <p>
            The following video is one of Armstrong&rsquo;s most representative uploads, showcasing
            the rebuild format, time-challenge structure, and mechanical depth that define the channel:
          </p>
          <div className="not-prose my-6 aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.youtube.com/embed/6fKVVoPVH9U"
              title="Mat Armstrong YouTube — Supercar Rebuild"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-500 italic mt-2 text-center">
            Mat Armstrong (@MatArmstrongbmx) — YouTube
          </p>
        </Section>

        <Section id="growth-stats" title="Growth Statistics">
          <p>
            As of <strong>February 23, 2026</strong>, Armstrong&rsquo;s main channel metrics are:
          </p>
          <div className="not-prose my-4 grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Subscribers', value: '6.23M+' },
              { label: 'Total Views', value: '870,587,576' },
              { label: 'Videos Published', value: '511' },
              { label: 'Avg. Views per Video', value: '~1.3M' },
              { label: 'Monthly Views (30d)', value: '~35M' },
              { label: 'Est. Monthly Earnings', value: '$8,800–$141,000' },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-xl font-black text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
          <p>
            The channel ranks in the <strong>top 6,000 globally by subscribers</strong> and
            maintains a consistent weekly upload cadence. Armstrong has grown from 0 to 6.2 million
            subscribers primarily through organic search and YouTube recommendation traffic, with
            thumbnail and title optimisation playing a significant role in his discovery funnel.
          </p>
          <p>
            Monthly earnings estimates vary widely depending on CPM rates applied (automotive
            content commands among the highest CPMs on YouTube due to advertiser demand), making
            the $8,800–$141,000 range a modelling artefact rather than a disclosed figure. Channel
            monetisation combines YouTube ad revenue with brand deals and, likely, vehicle resale
            margins from completed rebuilds.
          </p>
        </Section>

        <Section id="channels" title="Channels & Sub-Brands">
          <p>
            Armstrong operates a multi-channel YouTube presence beyond his primary account:
          </p>
          <ul>
            <li>
              <strong>@MatArmstrongbmx (Main)</strong> — 6.23M subscribers, 511 videos; primary
              vehicle for long-form rebuild and restoration content
            </li>
            <li>
              <strong>Mat Armstrong MK2</strong> — 2.77 million subscribers; secondary channel
              publishing additional project content, behind-the-scenes material, and overflow
              uploads that complement the main channel without competing with it algorithmically
            </li>
            <li>
              <strong>Mat Armstrong Shorts</strong> — 327,000 subscribers; dedicated short-form
              vertical video channel for YouTube Shorts, repurposing highlights and reaction moments
              from longer rebuild videos
            </li>
          </ul>
          <p>
            The combined subscriber base across all three channels exceeds <strong>9.3 million</strong>,
            making Armstrong&rsquo;s total network one of the larger automotive creator ecosystems
            on the platform in the UK.
          </p>
        </Section>

        <Section id="business" title="Business & Collaborations">
          <p>
            Armstrong has collaborated with brands in the automotive, aftermarket parts, and
            lifestyle spaces — a common monetisation path for high-CPM automotive channels where
            brand integration can be embedded naturally within rebuild narratives (sponsored tools,
            parts suppliers, performance upgrades). He has also documented projects involving
            vehicles linked to public figures, generating crossover audiences from celebrity and
            entertainment content.
          </p>
          <p>
            The Ferrari 296 GTB rebuild saga — in which Ferrari reportedly intervened to prevent
            Armstrong from completing or publicising the rebuild of a wrecked example of its
            hypercar — attracted significant media coverage in early 2026, raising questions about
            manufacturer rights over salvage vehicles and the boundaries of content documentation
            for prestige brands. The video generated substantial organic reach, demonstrating how
            manufacturer conflict can itself become a content driver.
          </p>
          <p>
            Armstrong has discussed the economics of rebuild content in interviews: salvage vehicles
            are purchased at auction, rebuilt using a combination of purchased parts and fabrication,
            and typically sold after filming — creating a revenue loop that supplements YouTube ad
            income and makes the format financially self-sustaining at scale.
          </p>
        </Section>

        <Section id="personal" title="Personal Details & Public Presence">
          <p>
            Mat Armstrong is based in the United Kingdom, with his content increasingly filmed
            across multiple locations including his workshop, auction sites, and occasionally
            abroad for parts sourcing or event coverage. He maintains an active presence on{' '}
            <strong>Instagram (@matarmstrongbmx)</strong>, where he shares project updates,
            personal content, and channel promotion to a parallel audience.
          </p>
          <p>
            Armstrong&rsquo;s partner, <strong>Hannah Smith</strong>, has been referenced in
            personal content and social media posts. The couple appear occasionally in lifestyle
            and vlog content alongside the automotive material.
          </p>
          <p>
            His public identity centres on the self-taught mechanic archetype — a creator whose
            authority comes not from formal training but from documented problem-solving, inherited
            knowledge from his father&rsquo;s garage background, and a decade of learning on camera.
            This framing resonates strongly with an audience that values practical competence and
            transparency about mistakes and setbacks during the rebuild process.
          </p>
          <Quote source="Mat Armstrong, YouTube description">
            &ldquo;When a former BMX pro turns scrapyard supercars into million-view rebuilds,
            the channel stats prove that some pivots land harder than a 500 kg deadlift.&rdquo;
          </Quote>
        </Section>

        <RelatedLinks
          links={[
            {
              href: '/youtube',
              label: 'YouTube Hub — ObjectWire',
              description: 'Full coverage of YouTube creators, platform news, and creator economy',
            },
            {
              href: '/youtube/logan-paul',
              label: 'Logan Paul — Creator Profile',
              description: 'American YouTube creator, boxer, and entrepreneur profile',
            },
            {
              href: '/influencer',
              label: 'Influencer Hub',
              description: 'ObjectWire profiles of content creators and digital entrepreneurs',
            },
            {
              href: '/entertainment',
              label: 'Entertainment Coverage',
              description: 'Broader entertainment and creator economy news from ObjectWire',
            },
          ]}
        />

        <ExternalLinks
          links={[
            {
              href: 'https://www.youtube.com/@MatArmstrongbmx',
              label: 'YouTube — @MatArmstrongbmx (6.2M+ subscribers)',
            },
            {
              href: 'https://www.instagram.com/matarmstrongbmx/',
              label: 'Instagram — @matarmstrongbmx',
            },
            {
              href: 'https://www.youtube.com/@MatArmstrongMK2',
              label: 'YouTube — Mat Armstrong MK2 (2.77M subscribers)',
            },
          ]}
        />
      </ArticlePage>
    </SEOWrapper>
  );
}
