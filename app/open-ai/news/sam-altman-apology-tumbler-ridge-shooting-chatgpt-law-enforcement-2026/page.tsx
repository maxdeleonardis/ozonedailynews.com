import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/sam-altman-apology-tumbler-ridge-shooting-chatgpt-law-enforcement-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Sam Altman Apology | OpenAI Failed to Alert Police Before Tumbler Ridge Shooting',
  description:
    'Sam Altman apologized to Tumbler Ridge, BC after OpenAI failed to report Jesse Van Rootselaar\'s ChatGPT account to police eight months before she killed eight people in a February 2026 mass shooting.',
  keywords: [
    'Sam Altman apology Tumbler Ridge',
    'OpenAI ChatGPT Tumbler Ridge shooting',
    'Jesse Van Rootselaar ChatGPT account',
    'OpenAI failed to alert police mass shooting',
    'OpenAI negligence lawsuit Maya Gebala',
    'ChatGPT mass shooting Canada 2026',
    'OpenAI law enforcement referral policy',
    'Sam Altman letter Tumbler Ridge BC',
    'David Eby OpenAI AI safety',
    'OpenAI Florida State University shooting',
    'Phoenix Ikner ChatGPT Florida shooting',
    'James Uthmeier OpenAI criminal investigation',
    'OpenAI abuse detection mass shooting',
    'ChatGPT banned account shooter',
    'OpenAI safety protocols law enforcement 2026',
    'Tumbler Ridge Secondary School shooting OpenAI',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sam Altman Apology | OpenAI Banned Shooter\'s ChatGPT Account 8 Months Before Attack',
    description:
      'OpenAI flagged and banned Van Rootselaar\'s account in June 2025 but did not alert police. Altman\'s apology letter came as a B.C. negligence suit and a Florida criminal investigation mount simultaneously.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T14:00:00Z',
    modifiedTime: '2026-04-26T14:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Federal courthouse representing the legal proceedings and negligence lawsuit against OpenAI following the Tumbler Ridge mass shooting',
      },
    ],
    tags: ['Sam Altman', 'OpenAI', 'Tumbler Ridge', 'ChatGPT', 'Mass Shooting', 'AI Safety'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Banned the Shooter\'s Account 8 Months Early and Didn\'t Call Police. Now Altman Is Apologizing.',
    description:
      'Jesse Van Rootselaar\'s ChatGPT account was flagged in June 2025. 12 employees reportedly urged a police referral. Leadership declined. Eight people died in February. Altman sent an apology letter Thursday.',
    images: [OG_IMAGE],
  },
};

export default function OpenAiNewsSamAltmanApologyTumblerRidgeShootingChatgptLawEnforcement2026Page() {
  return (
    <NewsArticle
      title="Sam Altman Apologizes to Tumbler Ridge After OpenAI Failed to Report Shooter's ChatGPT Account to Police"
      subtitle="OpenAI's automated systems banned Jesse Van Rootselaar's account in June 2025, eight months before she killed eight people, but leadership determined the activity did not meet the threshold for a police referral, a decision now at the center of a negligence lawsuit and a Florida criminal investigation"
      category="Tech"
      categoryColor="blue"
      topicTag="ai"
      publishDate="April 26, 2026"
      readTime="5 min read"
      breaking={false}
      trending={true}
      author={{
        name: 'Jack Brennan',
        role: 'Tech Reporter',
        authorSlug: 'jack-brennan',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Federal courthouse steps representing the legal pressure facing OpenAI following the Tumbler Ridge mass shooting',
      }}
      tags={['Sam Altman', 'OpenAI', 'Tumbler Ridge Shooting', 'ChatGPT Safety', 'AI Accountability']}
      slug="open-ai-news-sam-altman-apology-tumbler-ridge-shooting-chatgpt-law-enforcement-2026"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          <strong>Sam Altman</strong> has formally apologized to the community of <strong>Tumbler Ridge, British Columbia</strong>, acknowledging that <strong>OpenAI</strong> failed to notify law enforcement about the <strong>ChatGPT</strong> account of <strong>Jesse Van Rootselaar</strong>, the 18-year-old who killed eight people in a February 2026 mass shooting. In a letter dated Thursday, Altman wrote that he was "deeply sorry that we did not alert law enforcement to the account that was banned in June," adding, "While I know words can never be enough, I believe an apology is necessary to recognize the harm and irreversible loss your community has suffered." For broader context on OpenAI's recent policy moves, see the <Link href="/open-ai" className="text-blue-600 hover:text-blue-800 underline">ObjectWire OpenAI hub</Link>.
        </p>

        <h2>What OpenAI Knew | Account Banned in June 2025, Eight Months Before the Attack</h2>
        <p>
          Van Rootselaar killed her mother and 11-year-old half-brother at their home on February 10 before opening fire at <strong>Tumbler Ridge Secondary School</strong>, killing five students and an education assistant and wounding dozens of others. She then took her own life. OpenAI has acknowledged that its automated abuse detection systems flagged Van Rootselaar's account and banned it in <strong>June 2025</strong>, eight months before the shooting, but that leadership determined the flagged activity did not meet the company's internal threshold for a law enforcement referral.
        </p>
        <p>
          That decision has become the central fact in a negligence lawsuit filed in March 2026 in B.C. Supreme Court by the family of <strong>Maya Gebala</strong>, a student who was critically injured in the attack. The suit alleges that approximately <strong>12 OpenAI employees</strong> internally flagged the account as an "imminent risk" and recommended notifying police, but that the recommendation was overruled by leadership. OpenAI has not confirmed or denied the internal communications described in the complaint.
        </p>
        <p>
          <strong>British Columbia Premier David Eby</strong> announced in February that Altman had agreed to apologize and cooperate with provincial officials on AI safety recommendations. After receiving the letter Thursday, Eby called it "necessary, and yet grossly insufficient."
        </p>

        <h2>Florida Criminal Probe | "If That Bot Were a Person, They'd Be Charged with Murder"</h2>
        <p>
          The Tumbler Ridge apology arrived as OpenAI faces a separate and more immediately threatening legal action in the United States. On April 21, <strong>Florida Attorney General James Uthmeier</strong> announced that his office has opened a criminal investigation into whether <strong>ChatGPT</strong> "bears criminal responsibility" in connection with a shooting at <strong>Florida State University</strong> in April 2025. The suspect in that case, <strong>Phoenix Ikner</strong>, allegedly used ChatGPT to research firearms, ammunition types, and the locations on FSU's campus where he could encounter the highest concentration of students before killing two people and wounding six.
        </p>
        <p>
          Uthmeier was direct in characterizing what his office believed the evidence showed: "If that bot were a person, they would be charged as a principal in first-degree murder." The statement signals an intent to test whether existing criminal facilitation statutes can reach an AI company for outputs its systems generated, a legal theory that has no clear precedent in American courts.
        </p>
        <p>
          OpenAI disputed the framing in a formal response, stating that ChatGPT "delivered factual answers to inquiries based on information widely available from public sources" and "did not incite or endorse illegal or harmful conduct." The company has not commented further on the Florida investigation's scope or timeline.
        </p>

        <h2>OpenAI's Safety Protocol Revisions | Direct Police Channel, Mental Health Consultation</h2>
        <p>
          In his letter to Tumbler Ridge, Altman outlined several changes OpenAI has made to its abuse detection and referral procedures following the shooting. The company has established a <strong>direct communication channel with law enforcement</strong> for high-priority flagged accounts, has brought in mental health and law enforcement experts to help recalibrate what constitutes a credible threat worthy of external referral, and has revised the internal escalation policy that previously gave leadership discretion to not act on line-level employee recommendations.
        </p>
        <p>
          Altman wrote: "Going forward, our focus will continue to be on working with all levels of government to help ensure something like this never happens again." The changes represent OpenAI's first public acknowledgment that its pre-existing safety infrastructure was materially insufficient in at least one documented case, a concession that will have consequences in both the B.C. civil proceedings and the Florida criminal investigation.
        </p>
        <p>
          For related coverage of OpenAI's policy engagements with federal and international governments, see earlier reporting on <Link href="/open-ai/news/openai-safety-fellowship-new-yorker-probe" className="text-blue-600 hover:text-blue-800 underline">OpenAI's Safety Fellowship and the New Yorker probe</Link> and the company's <Link href="/open-ai/altman-government-oversight-pentagon-deal" className="text-blue-600 hover:text-blue-800 underline">government oversight and Pentagon deal positions</Link>. The Tumbler Ridge case is now the most consequential test of whether AI platform companies can be held legally liable for harms they had advance notice of and chose not to act on.
        </p>
      </div>
    </NewsArticle>
  );
}
