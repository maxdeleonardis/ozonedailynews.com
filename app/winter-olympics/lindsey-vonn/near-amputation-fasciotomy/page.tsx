import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/winter-olympics/lindsey-vonn/near-amputation-fasciotomy';

export const metadata: Metadata = {
  title:
    "Lindsey Vonn Reveals She Nearly Lost Her Leg to Amputation After Olympic Crash | ObjectWire",
  description:
    'Lindsey Vonn revealed on Monday that she came dangerously close to having her left leg amputated following her crash at the 2026 Winter Olympics. An emergency fasciotomy performed on the mountain by orthopedic surgeon Dr. Hackett saved her leg.',
  keywords: [
    'Lindsey Vonn leg amputation',
    'Lindsey Vonn fasciotomy',
    'Lindsey Vonn near amputation Winter Olympics 2026',
    'Lindsey Vonn crash leg',
    'Vonn emergency surgery leg',
    'fasciotomy skiing injury',
    'Lindsey Vonn Olympics injury',
    'Milano Cortina 2026 Vonn leg',
    'Dr Hackett Vonn surgery',
    'compartment syndrome skiing',
    'Lindsey Vonn leg saved',
    'Winter Olympics downhill crash amputation',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Lindsey Vonn Reveals She Nearly Lost Her Leg to Amputation After Olympic Crash",
    description:
      "Vonn disclosed on Monday that she came within hours of having her left leg amputated. An emergency fasciotomy — performed on the mountain by team surgeon Dr. Hackett — restored blood flow and saved her leg.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-02-23T10:00:00Z',
    modifiedTime: '2026-02-23T10:00:00Z',
    section: 'Winter Olympics 2026',
    tags: ['Lindsey Vonn', 'Winter Olympics', 'Fasciotomy', 'Amputation', 'Alpine Skiing', 'Milano Cortina 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lindsey Vonn: Surgeon 'Filleted It Open' to Save Her Leg From Amputation After Olympic Crash",
    description:
      "Vonn reveals she came close to losing her left leg after her crash at the 2026 Winter Olympics. An emergency fasciotomy performed on the mountain restored blood flow and saved it.",
  },
};

export default function VonnNearAmputationPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Lindsey Vonn Reveals She Nearly Lost Her Leg to Amputation After Olympic Crash"
        description="Lindsey Vonn revealed on Monday that she came dangerously close to having her left leg amputated following her crash at the 2026 Winter Olympics. An emergency fasciotomy performed on the mountain by orthopedic surgeon Dr. Hackett saved her leg and her career."
        author="ObjectWire Sports Desk"
        publishedTime="2026-02-23T10:00:00Z"
        modifiedTime="2026-02-23T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Winter Olympics 2026"
        keywords={[
          'Lindsey Vonn leg amputation',
          'Lindsey Vonn fasciotomy',
          'Winter Olympics 2026 injury',
          'Milano Cortina downhill crash',
          'compartment syndrome skiing',
          'Dr Hackett Vonn',
        ]}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: "How close was Lindsey Vonn to having her leg amputated?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Vonn said on Monday that she came very close to amputation of her left leg following her crash at the 2026 Winter Olympics. The crash caused severe compartment syndrome — dangerous pressure buildup in the muscle tissue that cuts off blood flow — which, if left untreated, can necessitate amputation within hours.",
                },
              },
              {
                '@type': 'Question',
                name: "What is a fasciotomy and why did Lindsey Vonn need one?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A fasciotomy is an emergency surgical procedure in which a surgeon cuts through the fascia — the connective tissue sheath surrounding muscles — to relieve dangerous pressure buildup known as acute compartment syndrome. In Vonn's case, Dr. Hackett sliced open both sides of her calf on the mountain to restore blood flow and prevent tissue death that could have led to amputation.",
                },
              },
              {
                '@type': 'Question',
                name: "Who is Dr. Hackett?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Dr. Hackett is an orthopedic surgeon who works with Lindsey Vonn and the U.S. Ski & Snowboard team. He performed the emergency fasciotomy at the crash site during the 2026 Winter Olympics, a decision Vonn credits with saving her leg.",
                },
              },
              {
                '@type': 'Question',
                name: "What did Lindsey Vonn say about the surgeon who saved her leg?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Vonn said of Dr. Hackett: 'He filleted it open and let it breathe, and he saved me.'",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Winter Olympics 2026', item: '/winter-olympics' },
              { name: 'Lindsey Vonn', item: '/winter-olympics/lindsey-vonn' },
              { name: 'Near Amputation', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Lindsey Vonn Reveals She Nearly Lost Her Leg to Amputation After Olympic Crash"
        subtitle="The 41-year-old skiing legend disclosed on Monday that a surgeon performed an emergency fasciotomy on the mountain — slicing open both sides of her calf to restore blood flow — after her Olympic crash nearly cost her the leg entirely."
        category="Winter Olympics 2026"
        categoryColor="blue"
        topicTag="sports"
        publishDate="February 23, 2026"
        readTime="4 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Sports Desk',
          role: 'Olympics Correspondent',
        }}
        tags={[
          'Lindsey Vonn',
          'Winter Olympics 2026',
          'Alpine Skiing',
          'Fasciotomy',
          'Compartment Syndrome',
          'Milano Cortina',
          'Team USA',
          'Sports Injury',
        ]}
      >

        <p>
          <strong>Lindsey Vonn</strong> revealed on Monday that she came close to losing her left leg
          to amputation following her{' '}
          <Link href="/winter-olympics/lindsey-vonn/emergency-surgery-after-crash" className="text-blue-600 hover:underline font-medium">
            crash at the 2026 Winter Olympics
          </Link>{' '}
          in Cortina d&apos;Ampezzo — disclosing for the first time the full severity of an injury
          that required emergency surgery performed on the mountain within minutes of the fall.
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>&ldquo;He filleted it open and let it breathe, and he saved me.&rdquo;</strong>
          <br />— Lindsey Vonn, on the surgeon who performed an emergency fasciotomy on the mountain
          to prevent amputation of her left leg.
        </HighlightBox>

        <h2>Emergency Surgery on the Mountain</h2>
        <p>
          Dr. Hackett, an orthopedic surgeon who works with Vonn and the{' '}
          <strong>U.S. Ski &amp; Snowboard</strong> team, performed an emergency{' '}
          <strong>fasciotomy</strong> — slicing open both sides of her calf to relieve crushing
          pressure building inside the muscle compartment and restore blood flow to the limb.{' '}
          &ldquo;He filleted it open and let it breathe, and he saved me,&rdquo; Vonn said.
        </p>
        <p>
          The procedure was necessary to treat acute <strong>compartment syndrome</strong> — a
          dangerous complication in which swelling inside a closed muscle compartment cuts off
          circulation. Without intervention, the condition destroys muscle and nerve tissue within
          hours and, left untreated, forces surgeons to amputate the affected limb entirely.
          The decision to operate at the crash site rather than wait for hospital transfer almost
          certainly made the difference between saving and losing the leg.
        </p>

        <h2>What Is a Fasciotomy?</h2>
        <p>
          A fasciotomy is one of the most urgent procedures in trauma surgery. The fascia is the
          dense connective tissue sleeve that wraps around muscle groups. In a severe impact, bleeding
          and swelling inside that sleeve can generate pressure high enough to collapse blood vessels —
          effectively strangling the muscle from the inside. Cutting through the fascia immediately
          decompresses the compartment and allows tissue to survive.
        </p>
        <p>
          Performing the procedure in a field setting, on a mountain, without a sterile operating
          theater, requires significant skill and decisiveness. Dr. Hackett&apos;s call to act
          immediately rather than wait for evacuation reflects the narrow time window that defines
          whether compartment syndrome results in recovery or permanent loss.
        </p>

        <HighlightBox type="stat" color="orange">
          <strong>Acute compartment syndrome</strong> requires fasciotomy within <strong>6 hours</strong>{' '}
          of onset to prevent permanent muscle and nerve damage. Delay beyond that window significantly
          increases the risk of requiring amputation.
        </HighlightBox>

        <h2>Vonn&apos;s Recovery and the Road Ahead</h2>
        <p>
          Vonn, 41, had already been competing at{' '}
          <Link href="/winter-olympics" className="text-blue-600 hover:underline font-medium">
            Milano Cortina 2026
          </Link>{' '}
          on a torn ACL — a fact she had publicly disclosed before the games. The crash compounded
          those injuries significantly, and the fasciotomy leaves her calf with open surgical wounds
          that will require staged closure and a lengthy rehabilitation. The full implications for her
          athletic future remain unclear, though Vonn has consistently refused to discuss retirement
          in definitive terms.
        </p>
        <p>
          What is clear is that without Dr. Hackett&apos;s immediate decision to operate on the
          mountain, the conversation today would be an entirely different one. For Vonn — who has
          now had more than nine major surgeries across a career defined as much by its comebacks
          as its championships — this is one more chapter written not in victories but in survival.
        </p>

        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/winter-olympics/lindsey-vonn/emergency-surgery-after-crash" className="text-blue-600 hover:underline font-medium">
              Lindsey Vonn Undergoes Emergency Surgery After Olympic Crash →
            </Link>
          </li>
          <li>
            <Link href="/winter-olympics/lindsey-vonn-training-downhill" className="text-blue-600 hover:underline font-medium">
              Vonn Posts Third-Fastest Time in Olympic Downhill Training on Torn ACL →
            </Link>
          </li>
          <li>
            <Link href="/winter-olympics" className="text-blue-600 hover:underline font-medium">
              Full Milano Cortina 2026 Winter Olympics Coverage →
            </Link>
          </li>
          <li>
            <Link href="/winter-olympics/mikaela-shiffrin" className="text-blue-600 hover:underline font-medium">
              Mikaela Shiffrin at the 2026 Winter Olympics →
            </Link>
          </li>
        </ul>

        <TagsSection
          tags={[
            'Lindsey Vonn',
            'Winter Olympics 2026',
            'Fasciotomy',
            'Amputation',
            'Compartment Syndrome',
            'Alpine Skiing',
            'Downhill',
            'Team USA',
            'Milano Cortina',
            'Sports Injury',
            'Olympic Crash',
          ]}
        />

      </NewsArticle>
    </SEOWrapper>
  );
}
