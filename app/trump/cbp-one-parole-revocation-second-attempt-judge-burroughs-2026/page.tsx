import type { Metadata } from 'next';
import JackArticle, {
  JackSection,
  JackStats,
  JackCallout,
  JackCardGrid,
  JackCard,
  JackSideBlock,
  JackQuote,
} from '@/components/articles/JackArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/trump/cbp-one-parole-revocation-second-attempt-judge-burroughs-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'CBP One Parole Revocation | Trump Second Attempt, May 6 Hearing',
  description:
    'Trump administration filed new CBP One parole termination notices April 24, 2026, one month after Judge Burroughs ruled the first attempt violated the APA. A May 6 hearing will determine if DHS can proceed.',
  keywords: [
    'CBP One parole revocation 2026',
    'Trump CBP One second termination attempt',
    'Judge Allison Burroughs CBP One ruling',
    'DHS parole termination Administrative Procedure Act',
    'Sileiri Doe v Department of Homeland Security',
    'CBP One 900000 migrants parole',
    'Rodney Scott CBP memo parole termination',
    'Democracy Forward immigration lawsuit 2026',
    'Massachusetts Law Reform Institute CBP One',
    'Venezuelan Association Massachusetts immigration',
    'CBP One Biden parole program 2026',
    'Trump immigration court ruling circumvention',
    'CBP One APA violation ruling March 2026',
    'CBP One May 6 hearing DHS injunction',
    'Trump parole revocation mass termination',
    'CBP One Temporary Protected Status migrants',
    'immigration enforcement federal court 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Moves to Revoke CBP One Parole Again | Court Battle, 900,000 Affected',
    description:
      "One month after Judge Burroughs ruled DHS acted unlawfully, the Trump administration filed new parole termination notices backed by a CBP Commissioner memo. A May 6 hearing will decide if the second attempt can proceed.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    section: 'Politics',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "Migrants gathered representing the 900,000 CBP One parole recipients affected by the Trump administration's second termination attempt",
      },
    ],
    tags: ['Trump', 'Immigration', 'CBP One', 'DHS', 'Federal Court', 'Parole'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Files Second CBP One Parole Termination. Judge Already Blocked the First. May 6 Hearing Set.',
    description:
      'New notices are based on an unpublished Rodney Scott memo. Over 900,000 migrants affected. Democracy Forward calls it deliberate court circumvention. Hearing: May 6.',
    images: [OG_IMAGE],
  },
};

export default function TrumpCbpOneParoleRevocationSecondAttemptJudgeBurroughs2026Page() {
  return (
    <JackArticle
      layout="news"
      accentColor="blue"
      title="Trump Administration Files Second CBP One Parole Termination | Judge Burroughs Schedules May 6 Hearing After March APA Ruling"
      subtitle="One month after U.S. District Judge Allison Burroughs ruled that DHS acted unlawfully by revoking parole for over 900,000 CBP One migrants without individualized review, the administration filed new termination notices on April 24 backed by an unpublished memo from CBP Commissioner Rodney Scott"
      publishDate="April 27, 2026"
      publishDateISO="2026-04-27T12:00:00Z"
      modifiedDateISO="2026-04-27T12:00:00Z"
      readTime="7 min read"
      categories={[
        { label: 'Politics', color: 'gray' },
        { label: 'Immigration', color: 'blue' },
        { label: 'Law', color: 'gray' },
      ]}
      breadcrumbs={[
        { href: '/trump', label: 'Trump' },
        { href: '/trump/news', label: 'News' },
        { href: SLUG, label: 'CBP One Second Parole Termination' },
      ]}
      author={{
        name: 'Jack Sterling',
        slug: 'jack-sterling',
        department: 'Politics and Legal Affairs Desk',
      }}
      heroImage={{
        src: OG_IMAGE,
        alt: "Migrants representing the 900,000 CBP One parole recipients at the center of the Trump administration's second attempt to terminate their legal status",
        caption: "The Trump administration's second attempt to revoke CBP One parole status arrives less than a month after a federal judge ruled the first attempt violated the Administrative Procedure Act",
      }}
      slug="trump-cbp-one-parole-revocation-second-attempt-judge-burroughs-2026"
      articleUrl={ARTICLE_URL}
      description="Analysis of the Trump administration's second attempt to terminate CBP One parole for 900,000 migrants, the legal arguments from Democracy Forward and the Massachusetts Law Reform Institute, and what the May 6 hearing before Judge Burroughs will decide."
      section="Politics"
      keywords={[
        'CBP One parole revocation Trump 2026',
        'Judge Burroughs APA ruling CBP One',
        'DHS second termination attempt migrants',
        'Sileiri Doe v DHS class action',
        'Rodney Scott CBP memo parole termination',
      ]}
      timeline={[
        {
          date: '2023',
          description: 'Biden administration launches the CBP One app, allowing migrants to schedule appointment-based entry at southern border ports of entry, undergo vetting, and receive temporary parole of up to two years while asylum claims are processed.',
          highlight: false,
        },
        {
          date: 'Apr 2025',
          description: "Trump administration sends mass emails to over 900,000 CBP One parole recipients informing them their status has been terminated and instructing them to leave the United States immediately.",
          highlight: true,
        },
        {
          date: 'Mar 31, 2026',
          description: "U.S. District Judge Allison Burroughs rules that DHS exceeded its legal authority in Sileiri Doe et al. v. DHS. The ruling finds DHS violated the Administrative Procedure Act by revoking parole en masse without conducting individualized reviews. 'The regulations do not give the agency unfettered discretion to terminate parole,' Burroughs writes.",
          highlight: true,
        },
        {
          date: 'Apr 22, 2026',
          description: 'CBP Commissioner Rodney Scott issues an internal memo offering justification for his determination that parole is no longer appropriate for affected migrants. The memo is not made publicly available.',
          highlight: false,
        },
        {
          date: 'Apr 24, 2026',
          description: 'DOJ files with the federal court in Boston informing Judge Burroughs that while the administration is complying with her March ruling, it is simultaneously issuing new termination notices based on the Scott memo. Democracy Forward and the Massachusetts Law Reform Institute file a response urging the court to block what they characterize as deliberate circumvention.',
          highlight: true,
        },
        {
          date: 'May 6, 2026',
          description: 'Judge Burroughs has scheduled a hearing to consider whether DHS should be barred from proceeding with the new round of terminations.',
          highlight: true,
        },
      ]}
      relatedArticles={[
        {
          href: '/trump/prediction-markets-truth-predict-trump-jr-kalshi-polymarket-2026',
          category: 'Politics',
          categoryColor: 'gray',
          title: 'Trump Family Prediction Market Ties | Truth Predict, Kalshi, Polymarket',
        },
        {
          href: '/politics/news/us-eases-sanctions-venezuela-maduro-legal-fees-2026',
          category: 'Politics',
          categoryColor: 'gray',
          title: 'US Eases Venezuela Sanctions | Maduro Legal Fees 2026',
        },
        {
          href: '/trump/news/trump-iran-warning-pakistan-negotiations',
          category: 'Politics',
          categoryColor: 'gray',
          title: 'Trump Iran Warning | Pakistan Negotiations',
        },
        {
          href: '/trump',
          category: 'Politics',
          categoryColor: 'gray',
          title: 'Trump Administration Coverage Hub',
        },
        {
          href: '/politics',
          category: 'Politics',
          categoryColor: 'gray',
          title: 'ObjectWire Politics Hub',
        },
      ]}
      sources={[
        {
          number: 1,
          url: 'https://www.aljazeera.com',
          title: 'Al Jazeera: Trump Administration Moves to Again Revoke Parole for CBP One Migrants, April 24, 2026',
          description: 'Primary report on the new termination notices, the Rodney Scott memo, and the DOJ filing before Judge Burroughs.',
        },
        {
          number: 2,
          url: 'https://www.courtlistener.com',
          title: 'Sileiri Doe et al. v. Department of Homeland Security, U.S. District Court, District of Massachusetts',
          description: 'Class-action docket, including the March 31 ruling by Judge Allison Burroughs and the April 24 DOJ filing.',
        },
        {
          number: 3,
          url: 'https://www.democracyforward.org',
          title: "Democracy Forward: Filing Urging Court to Block DHS's Second Termination Attempt as Circumvention of March Order",
          description: "Attorney response characterizing the new notices as a deliberate attempt to circumvent the court's March ruling.",
        },
        {
          number: 4,
          url: 'https://www.reuters.com',
          title: 'Reuters: Judge Sets May 6 Hearing on Trump Bid to Resume CBP One Parole Terminations',
          description: "Reporting on Judge Burroughs' May 6 scheduling order and the scope of the renewed termination effort.",
        },
        {
          number: 5,
          url: 'https://apnews.com',
          title: 'AP News: What Is CBP One and Who Are the 900,000 Migrants Affected by the Parole Fight?',
          description: "Explainer on the Biden-era CBP One program's design, the vetting process, and the status of migrants who have already been deported, left voluntarily, or obtained TPS.",
        },
      ]}
    >
      <JackSection number={1} title="The CBP One Program | 900,000 Parolees, Biden-Era App, and the Temporary Status Architecture">
        <p>
          The <strong>CBP One app</strong>, launched by the <strong>Biden administration in 2023</strong>, was designed to manage southern border asylum demand through an appointment-based system. Migrants could use the app to schedule arrival appointments at designated ports of entry, submit to vetting by Customs and Border Protection, and receive <strong>temporary parole for up to two years</strong> while their asylum cases moved through the immigration court backlog. By the end of the Biden administration, more than <strong>900,000 people</strong> had entered the country through this pathway. For the broader context of the Trump administration's immigration enforcement posture, see the <Link href="/trump" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Trump hub</Link>.
        </p>

        <JackStats
          stats={[
            { label: 'CBP One Parolees', value: '900,000+' },
            { label: 'Parole Duration', value: 'Up to 2 yrs' },
            { label: 'Program Launch', value: '2023' },
          ]}
        />

        <p>
          Parole under U.S. immigration law is a discretionary grant by DHS that allows a person to be physically present in the United States without being formally admitted as an immigrant. It is not a path to permanent residency, but it confers legal status, work authorization eligibility, and protection from immediate deportation while the underlying asylum claim is adjudicated. The Trump administration's legal theory is that the Biden-era parole grants were improper uses of the parole authority and that DHS has the power to revoke them. The courts have become the venue where that theory is being tested.
        </p>

        <JackCallout label="Why the CBP One Parole Architecture Matters Legally" accentColor="blue">
          The parole statute (8 U.S.C. § 1182(d)(5)) grants the Secretary of Homeland Security discretion to parole individuals "on a case-by-case basis for urgent humanitarian reasons or significant public benefit." The Biden administration's use of CBP One as a systematic, programmatic parole pathway is what the Trump administration characterizes as an overreach of that case-by-case authority. That characterization is exactly what the APA litigation is now testing at scale.
        </JackCallout>
      </JackSection>

      <JackSection number={2} title="Judge Burroughs' March 31 Ruling | APA Violation, Individualized Review Mandate">
        <p>
          On <strong>March 31, 2026</strong>, U.S. District Judge <strong>Allison Burroughs</strong> of the District of Massachusetts issued a ruling in <em>Sileiri Doe et al. v. Department of Homeland Security</em> that directly invalidated the Trump administration's first attempt to revoke CBP One parole. The class-action lawsuit was brought by immigration advocacy organizations including <strong>Democracy Forward</strong> and the <strong>Massachusetts Law Reform Institute</strong>, representing affected individuals and institutional plaintiffs including the <strong>Venezuelan Association of Massachusetts</strong>.
        </p>

        <JackSideBlock title="The March 31 Ruling | Key Findings">
          <p><strong>APA Violation:</strong> Burroughs ruled that DHS violated the <strong>Administrative Procedure Act</strong> by revoking parole en masse without following proper legal procedures. The APA requires agencies to follow defined rulemaking or adjudication processes when taking actions that affect individual legal rights. Bulk revocation via mass email did not satisfy that standard.</p>
          <p className="mt-3"><strong>Individualized Review Requirement:</strong> The central holding was that DHS was required to conduct individualized reviews of each parole grant before terminating it. A determination that parole should end must account for the specific circumstances of each person, not simply announce a category-wide policy reversal.</p>
          <p className="mt-3"><strong>No Unfettered Discretion:</strong> Burroughs was explicit about the limits of agency authority, writing that "the regulations do not give the agency unfettered discretion to terminate parole." That phrase directly anticipates the administration's legal theory that DHS retains inherent executive power to revoke discretionary grants at will.</p>
        </JackSideBlock>

        <JackQuote
          quote="The regulations do not give the agency unfettered discretion to terminate parole."
          author="Judge Allison Burroughs"
          title="U.S. District Court, District of Massachusetts, March 31, 2026"
        />

        <p>
          The ruling applied to the April 2025 mass email campaign in which the administration sent termination notices to parole recipients instructing them to leave the United States immediately. Burroughs found that DHS had exceeded its legal authority in that action. The administration informed the court it would comply with the ruling. What it did not inform the court was that it was simultaneously preparing a new round of terminations structured to address the procedural deficiencies the ruling had identified.
        </p>
      </JackSection>

      <JackSection number={3} title="The Second Attempt | Rodney Scott's Memo and the April 24 Court Filing">
        <p>
          On <strong>April 22, 2026</strong>, <strong>CBP Commissioner Rodney Scott</strong> issued an internal memo offering what the Department of Justice described as a legal justification for his determination that "parole is no longer appropriate for those aliens." The memo was not made publicly available. Two days later, on <strong>April 24</strong>, the DOJ filed with Judge Burroughs' court in Boston, informing the judge that while the administration was complying with her March ruling, it was simultaneously issuing new termination notices to affected migrants based on the Scott memo.
        </p>

        <JackCardGrid>
          <JackCard title="The Scott Memo">
            <p className="font-semibold text-gray-800 mb-2">Unpublished, April 22, 2026</p>
            <p>CBP Commissioner Rodney Scott issued an internal memo on April 22 concluding that parole is no longer appropriate for CBP One recipients. The administration characterizes the memo as the individualized justification that distinguishes this round of terminations from the mass-email approach that Burroughs struck down. The memo's specific legal reasoning has not been publicly disclosed.</p>
          </JackCard>
          <JackCard title="The DOJ Filing">
            <p className="font-semibold text-gray-800 mb-2">April 24, simultaneous compliance and termination</p>
            <p>The DOJ's April 24 filing is structurally unusual: it simultaneously informed the court of compliance with the March ruling and disclosed that new terminations were being issued. This transparency was legally required, but it also put the administration's strategy directly before the judge who will decide whether it constitutes circumvention.</p>
          </JackCard>
          <JackCard title="The May 6 Hearing">
            <p className="font-semibold text-gray-800 mb-2">Injunction consideration, DHS authority at stake</p>
            <p>Judge Burroughs scheduled the May 6 hearing to consider whether DHS should be barred from proceeding with the new terminations while the litigation continues. If she issues a preliminary injunction, the second attempt is halted pending full merits review. If she declines, the new notices take effect.</p>
          </JackCard>
        </JackCardGrid>

        <JackCallout label="The Procedural Gap the Administration Is Trying to Close" accentColor="blue">
          The March ruling did not hold that CBP One parole can never be revoked. It held that the method used, a mass email without individualized review, was procedurally defective under the APA. The Scott memo is the administration's attempt to supply the missing individualized justification. Whether a single commissioner memo constitutes "individualized review" for 900,000 separate parole grants is the precise question that Judge Burroughs will examine on May 6.
        </JackCallout>
      </JackSection>

      <JackSection number={4} title="Sileiri Doe et al. | The Circumvention Argument and the Class Action Response">
        <p>
          Attorneys from <strong>Democracy Forward</strong> and the <strong>Massachusetts Law Reform Institute</strong> filed a response in the hours after the DOJ's April 24 submission, urging Judge Burroughs to block the new terminations. Their argument is not primarily that the Scott memo is legally deficient, though they contest that as well. The core argument is that the new termination effort constitutes a <strong>deliberate attempt to circumvent the court's order</strong>, a characterization that, if accepted by Burroughs, would implicate not just the validity of the terminations but the administration's compliance posture before the court.
        </p>

        <JackSideBlock title="The Class Action | Sileiri Doe et al. v. DHS">
          <p><strong>Plaintiffs:</strong> Named plaintiff Sileiri Doe, additional affected individuals, the Venezuelan Association of Massachusetts, and other community organizations represented by Democracy Forward and the Massachusetts Law Reform Institute.</p>
          <p className="mt-3"><strong>Defendant:</strong> Department of Homeland Security.</p>
          <p className="mt-3"><strong>Venue:</strong> U.S. District Court, District of Massachusetts, before Judge Allison Burroughs.</p>
          <p className="mt-3"><strong>Core Claim:</strong> DHS violated the APA and exceeded statutory authority by revoking parole en masse without individualized review or proper administrative process.</p>
          <p className="mt-3"><strong>Current Status:</strong> March 31 ruling in plaintiffs' favor on first termination attempt. Second attempt filed April 24. Injunction hearing May 6. Merits litigation ongoing.</p>
        </JackSideBlock>

        <p>
          The circumvention argument carries specific legal weight in federal court. A finding that an agency deliberately structured a new action to evade a court order, rather than genuinely remedying the procedural deficiency the order identified, can support contempt proceedings, heightened injunctive relief, and adverse inference findings in subsequent litigation. The administration has acknowledged the court's March ruling and has not publicly argued that the ruling was wrong, only that the new notices satisfy its requirements. That framing gives plaintiffs' attorneys a narrow but viable path: demonstrate that a single commissioner-level memo covering all 900,000 cases simultaneously cannot constitute the individualized review the March ruling demanded. For the administration's broader pattern of immigration policy actions and legal responses, see ObjectWire's <Link href="/politics/news/us-eases-sanctions-venezuela-maduro-legal-fees-2026" className="text-blue-600 hover:text-blue-800 underline">coverage of the Venezuela sanctions modification</Link> and the <Link href="/trump" className="text-blue-600 hover:text-blue-800 underline">Trump administration hub</Link>.
        </p>
      </JackSection>

      <JackSection number={5} title="What Comes Next | Deportations Already Complete, TPS Recipients, and the Shrinking 900,000">
        <p>
          The 900,000 figure that anchors this litigation has already contracted in ways that complicate both the legal fight and any enforcement effort. DHS has not provided a current count of how many of the original CBP One parolees remain in the country with active parole status. Three distinct populations have effectively exited the class since the April 2025 mass email.
        </p>

        <JackCardGrid>
          <JackCard title="Already Deported">
            <p className="font-semibold text-gray-800 mb-2">Removed before or after the March ruling</p>
            <p>Some number of the original 900,000 have already been deported. Those individuals are no longer inside the country and are not directly affected by the current injunction proceedings, though their removal may be contestable in separate proceedings if the underlying parole revocation is ultimately found to have been unlawful.</p>
          </JackCard>
          <JackCard title="Voluntary Departures">
            <p className="font-semibold text-gray-800 mb-2">Left the country after April 2025 mass email</p>
            <p>Following the April 2025 mass email instructing parole recipients to leave immediately, an undisclosed number departed voluntarily. These individuals are also outside the active class for purposes of the current injunction, but may have grounds to challenge the coercive effect of the unlawfully issued notices.</p>
          </JackCard>
          <JackCard title="Temporary Protected Status Recipients">
            <p className="font-semibold text-gray-800 mb-2">Obtained alternative legal status</p>
            <p>Some CBP One parolees applied for and received Temporary Protected Status, which is a distinct legal protection tied to country conditions rather than to the CBP One parole grant. TPS recipients have a separate basis for remaining in the country that does not depend on the outcome of the CBP One parole litigation.</p>
          </JackCard>
        </JackCardGrid>

        <p>
          DHS has not commented publicly on the total current size of the affected population. The May 6 hearing before Judge Burroughs will determine whether the new termination notices are paused pending further litigation. If Burroughs issues a preliminary injunction, the legal status of everyone remaining in the class is preserved until the court resolves the merits of whether the Scott memo satisfies the individualized review standard her March ruling required. If she declines to issue an injunction, the second round of terminations proceeds while the litigation continues, creating the same enforcement-while-litigating dynamic that produced the first legal challenge. For coverage of this story as it develops, see the <Link href="/politics" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Politics hub</Link>.
        </p>
      </JackSection>
    </JackArticle>
  );
}
