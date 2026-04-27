import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/politics/news/us-eases-sanctions-venezuela-maduro-legal-fees-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'US Eases Venezuela Sanctions | Maduro Legal Fees Approved',
  description:
    'The US Treasury modified Venezuela sanctions to allow Maduro and Cilia Flores to fund their federal drug trafficking defense. Judge Hellerstein warned constitutional counsel rights are paramount.',
  keywords: [
    'Venezuela sanctions eased Maduro 2026',
    'Maduro legal fees OFAC license',
    'Venezuela drug trafficking prosecution',
    'Cilia Flores indictment 2026',
    'OFAC Venezuela amended license',
    'Jay Clayton US Attorney Maduro',
    'Barry Pollack Maduro defense',
    'Judge Alvin Hellerstein Venezuela',
    'Maduro Sixth Amendment right to counsel',
    'Venezuela US diplomatic relations 2026',
    'Maduro federal charges New York',
    'US Venezuela diplomacy sanctions 2026',
    'Maduro motion to dismiss withdrawn',
    'Kyle Wirshba Maduro prosecutor',
    'Venezuela OFAC Treasury 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'US Eases Venezuela Sanctions to Fund Maduro\'s Defense',
    description:
      'Treasury\'s OFAC issued amended licenses allowing Venezuela to cover Maduro and Flores\'s legal costs. Defense withdrew dismissal motion. Trial hearing set in 60 days.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Marcus Webb'],
    publishedTime: '2026-04-25T14:00:00Z',
    modifiedTime: '2026-04-25T14:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Federal courthouse exterior representing Maduro drug trafficking case in Manhattan' }],
    tags: ['Venezuela', 'Nicolas Maduro', 'OFAC', 'US Sanctions', 'Federal Prosecution'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Lets Venezuela Pay Maduro\'s Legal Fees | Sanctions Modified',
    description:
      'Treasury amended OFAC licenses so Venezuela can fund Maduro\'s drug trafficking defense. Judge questioned whether Maduro still poses any national security threat.',
    images: [OG_IMAGE],
  },
};

export default function PoliticsNewsUsSanctionsVenezuelaMaduroLegalFees2026Page() {
  return (
    <NewsArticle
      title="US Eases Venezuela Sanctions | Maduro and Flores Legal Fees Approved"
      subtitle="The Treasury Department modified its sanctions regime to allow Venezuela to fund the federal drug trafficking defense of former President Nicolas Maduro and his wife Cilia Flores, ending a constitutional standoff that had threatened to collapse the prosecution"
      category="Politics"
      categoryColor="blue"
      topicTag="politics"
      publishDate="April 25, 2026"
      readTime="5 min read"
      breaking={false}
      trending={true}
      author={{
        name: 'Marcus Webb',
        role: 'Politics Correspondent',
        authorSlug: 'marcus-webb',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Federal courthouse exterior representing the Maduro drug trafficking case in Manhattan',
      }}
      tags={['Venezuela', 'Nicolas Maduro', 'OFAC', 'US Sanctions', 'Federal Drug Case']}
      slug="politics-news-us-eases-sanctions-venezuela-maduro-legal-fees-2026"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          The United States has agreed to modify its sanctions on Venezuela to allow the government in Caracas to pay the legal fees of former President <strong>Nicolas Maduro</strong> and his wife <strong>Cilia Flores</strong>, resolving a months-long constitutional standoff that had threatened to derail their federal drug trafficking prosecution in New York.
        </p>

        <p>
          US Attorney <strong>Jay Clayton</strong> filed a letter with the court on Friday stating that the Treasury Department's Office of Foreign Assets Control had issued amended sanctions licenses permitting Venezuela to cover the couple's legal costs. The modification carries one condition: payments may only draw on funds available to Venezuela after <strong>March 5, 2026</strong>, the date diplomatic relations between Washington and Caracas formally resumed. Following the concession, defense attorneys withdrew their motion to dismiss the indictment, and prosecutors requested a status hearing in 60 days to chart next steps toward trial.
        </p>

        <h2>OFAC Reversed Course | A License Revoked in Under 3 Hours</h2>
        <p>
          The legal battle traces back to <strong>January 9</strong>, when OFAC initially granted a license authorizing Venezuela to fund the defense of both Maduro and Flores. The license was revoked less than three hours later without explanation, triggering a constitutional crisis within the case.
        </p>
        <p>
          Defense attorney <strong>Barry Pollack</strong> argued in February that the revocation violated Maduro's Sixth Amendment right to counsel of his choosing. Venezuelan law obligates the state to cover legal expenses for its president and first lady. Because Maduro "cannot otherwise afford counsel," Pollack contended, the federal government had effectively stripped him of a constitutionally guaranteed right. Pollack filed a motion to dismiss the indictment entirely.
        </p>

        <h2>Judge Hellerstein, 92 | "Right to Counsel Is Paramount"</h2>
        <p>
          On <strong>March 26</strong>, US District Judge <strong>Alvin Hellerstein</strong>, 92, heard more than two hours of arguments in a Manhattan federal courtroom. He declined to dismiss the case but delivered a pointed rebuke to the government's position. Hellerstein stated from the bench that Maduro and Flores "no longer represent any threat to national security" and that the "right to constitutionally guaranteed legal counsel" is "paramount."
        </p>
        <p>
          Prosecutor <strong>Kyle Wirshba</strong> had argued that national security concerns justified the funding block and that the defendants could draw on personal funds to pay for representation. The defense contested both claims. Judge Hellerstein's skepticism of the government's framing applied public pressure that preceded Treasury's eventual decision to amend the licenses.
        </p>

        <h2>What Comes Next | 60-Day Status Hearing, Trial Path Unresolved</h2>
        <p>
          With the dismissal motion withdrawn and funding now authorized, the Maduro and Flores prosecution moves toward a trial track for the first time. Prosecutors have asked for a status conference in 60 days. The timeline to actual trial remains uncertain given the complexity of the case, potential pretrial motions, and the diplomatic sensitivity of prosecuting a sitting foreign head of state whose government just restored formal diplomatic ties with Washington.
        </p>
        <p>
          The drug trafficking charges against Maduro and Flores, unsealed in 2020, allege that the couple conspired with narcoterrorist organizations to flood the United States with cocaine. Maduro has denied all charges and previously described the indictment as a US political attack. The resumption of diplomatic relations on March 5 introduced a new variable into how aggressively the Justice Department will pursue the case toward a courtroom verdict.
        </p>
        <p>
          For more on US-Latin America policy and federal prosecutions, see <Link href="/politics" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Politics</Link> and <Link href="/trump" className="text-blue-600 hover:text-blue-800 underline">ObjectWire's Trump administration coverage</Link>.
        </p>
      </div>
    </NewsArticle>
  );
}
