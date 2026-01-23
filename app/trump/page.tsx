import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  Quote,
  DataTable,
  Notice,
  ExternalLinks,
} from "@/components/ArticlePage";
import { createWikiMetadata } from "@/lib/page-seo";

// SEO-optimized metadata with canonical URL enforcement
export const metadata: Metadata = createWikiMetadata({
  title: "Donald Trump - Complete Biography and Presidency",
  description:
    "Comprehensive information about Donald J. Trump, 45th and 47th President of the United States. Business career, television, presidency, controversies, and political legacy.",
  slug: "trump",
  subject: "Donald Trump",
  keywords: [
    "Donald Trump",
    "President Trump",
    "45th President",
    "47th President",
    "Trump Organization",
    "The Apprentice",
    "Republican Party",
    "MAGA",
    "2024 election",
    "Trump biography",
    "Trump presidency",
  ],
  modifiedTime: new Date().toISOString(),
});

export default function TrumpPage() {
  const infoBox = {
    title: "Donald J. Trump",
    image: {
      src: "/images/trump-official.jpg",
      alt: "President Donald Trump",
      caption: "Official presidential portrait",
    },
    items: [
      { label: "Born", value: "June 14, 1946 (age 79)\nQueens, New York City" },
      { 
        label: "Political Party", 
        value: "Republican (1987–1999, 2009–2011, 2012–present)"
      },
      { 
        label: "Spouse(s)", 
        value: "Ivana Zelníčková (m. 1977; div. 1990)\nMarla Maples (m. 1993; div. 1999)\nMelania Knauss (m. 2005)" 
      },
      { label: "Children", value: "Donald Jr., Ivanka, Eric, Tiffany, Barron" },
      { label: "Education", value: "University of Pennsylvania (BS Economics)" },
      { label: "Occupation", value: "Politician, Businessman, Television Personality" },
      {
        label: "Presidency",
        value: "45th President: 2017-2021\n47th President: 2025-present",
      },
      { 
        label: "Vice President(s)", 
        value: "Mike Pence (2017-2021)\nJ.D. Vance (2025-present)" 
      },
      { label: "Net Worth", value: "Est. $2.6 billion (2024)" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "early-life", label: "Early Life and Education" },
    { id: "business-career", label: "Business Career" },
    { id: "media-personality", label: "Media and Television" },
    { id: "first-presidency", label: "First Presidency (2017-2021)" },
    { id: "post-presidency", label: "Post-Presidency Period" },
    { id: "legal-issues", label: "Legal Challenges" },
    { id: "2024-campaign", label: "2024 Presidential Campaign" },
    { id: "second-presidency", label: "Second Presidency (2025-Present)" },
    { id: "political-positions", label: "Political Positions" },
    { id: "controversies", label: "Controversies" },
    { id: "cultural-impact", label: "Cultural Impact and Legacy" },
  ];

  const relatedLinks = [
    {
      href: "/joe-biden",
      label: "Joe Biden",
      description: "46th President of the United States",
    },
    {
      href: "/republican-party",
      label: "Republican Party",
      description: "Political party Trump represents",
    },
    {
      href: "/maga-movement",
      label: "MAGA Movement",
      description: "Make America Great Again political movement",
    },
    {
      href: "/2024-presidential-election",
      label: "2024 Presidential Election",
      description: "Trump's return to the presidency",
    },
  ];

  return (
    <ArticlePage
      title="Donald J. Trump"
      subtitle="45th and 47th President of the United States"
      category="Politics"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>Donald John Trump</strong> (born June 14, 1946) is an American politician,
        businessman, and media personality who served as the 45th president of the United
        States from 2017 to 2021, and returned to office as the 47th president in January
        2025, becoming only the second person in U.S. history to serve non-consecutive terms
        (after Grover Cleveland).
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Before entering politics, Trump was a real estate developer and businessman, building
        his career on his family real estate business and expanding it into a global brand
        encompassing hotels, casinos, golf courses, and various licensing deals. He gained
        additional fame as a television personality, hosting the reality show{" "}
        <em>The Apprentice</em> from 2004 to 2015.
      </p>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          Trump political career has been marked by his unconventional approach, "America
          First" policy agenda, and his ability to mobilize a devoted base of supporters. His
          presidency and political movement have profoundly shaped American politics, media,
          and culture in the 21st century.
        </p>

        <Quote source="Donald Trump, Campaign Rally, 2016">
          I will be the greatest jobs president that God ever created.
        </Quote>
      </Section>

      <Section id="early-life" title="Early Life and Education">
        <h3 className="text-xl font-bold mt-6 mb-3">Family Background</h3>
        <p className="text-gray-700 mb-4">
          Donald John Trump was born on June 14, 1946, in Queens, New York City, to Frederick
          Christ Trump and Mary Anne MacLeod Trump. He was the fourth of five children. His
          father, Fred Trump, was a prominent real estate developer in New York City,
          particularly in Queens and Brooklyn, specializing in middle-class rental housing.
        </p>

        <p className="text-gray-700 mb-4">
          Trump grew up in the affluent Jamaica Estates neighborhood of Queens. His father
          success in real estate provided the family with considerable wealth and introduced
          young Donald to the construction and property development business from an early age.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Education</h3>
        <p className="text-gray-700 mb-4">
          Trump attended the Kew-Forest School in Queens until age 13, when his parents sent
          him to the New York Military Academy, a private boarding school, due to behavioral
          issues. At the academy, Trump thrived, becoming a student leader and excelling in
          both academics and athletics.
        </p>

        <p className="text-gray-700">
          He began his higher education at Fordham University in the Bronx, attending for two
          years before transferring to the Wharton School at the University of Pennsylvania.
          He graduated in 1968 with a Bachelor of Science degree in economics. Trump has
          frequently cited his Wharton education as evidence of his business acumen.
        </p>
      </Section>

      <Section id="business-career" title="Business Career">
        <h3 className="text-xl font-bold mt-6 mb-3">Early Years with Fred Trump</h3>
        <p className="text-gray-700 mb-4">
          After graduating from Wharton, Trump joined his father real estate company,
          Elizabeth Trump & Son. He was given control of the company in 1971 and renamed it
          The Trump Organization. While working with his father, Trump became involved in
          larger building projects and began shifting the company focus to Manhattan.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Manhattan Expansion</h3>
        <p className="text-gray-700 mb-4">
          Trump first major project in Manhattan was the transformation of the old Commodore
          Hotel near Grand Central Terminal into the Grand Hyatt, completed in 1980 with
          financial backing and tax abatements from the city. This project established Trump
          as a significant developer in Manhattan.
        </p>

        <p className="text-gray-700 mb-4">
          His signature project, Trump Tower, a 58-story mixed-use skyscraper on Fifth Avenue,
          was completed in 1983. The building luxurious design and Trump residence in its
          penthouse became synonymous with his public image of wealth and success.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Expansion and Setbacks</h3>
        <p className="text-gray-700 mb-4">
          Throughout the 1980s and 1990s, Trump expanded his real estate holdings to include
          casinos in Atlantic City, hotels, and golf courses. However, he also faced
          significant financial difficulties:
        </p>

        <DataTable
          headers={["Property/Business", "Year", "Status/Outcome"]}
          rows={[
            ["Trump Tower, NYC", "1983", "Active flagship property"],
            ["Trump Plaza Casino, Atlantic City", "1984", "Closed 2014, demolished 2021"],
            ["Trump Taj Mahal Casino", "1990", "Bankruptcy 1991, sold 2017"],
            ["Trump Airlines", "1989-1992", "Failed, sold"],
            ["Trump University", "2005-2010", "Closed, legal settlements"],
            ["Trump Vodka", "2006-2011", "Discontinued"],
            ["Trump International Hotel, DC", "2016", "Sold 2022"],
            ["Trump Golf Courses (Multiple)", "2000s-present", "Various worldwide locations"],
          ]}
        />

        <Notice type="info">
          <p>
            <strong>Business Bankruptcies:</strong> Trump businesses filed for Chapter 11 bankruptcy 
            protection six times between 1991 and 2009, primarily involving his casino and hotel 
            properties in Atlantic City. Trump has stated these were strategic business decisions 
            that allowed restructuring while protecting the Trump brand.
          </p>
        </Notice>

        <h3 className="text-xl font-bold mt-6 mb-3">Brand Licensing</h3>
        <p className="text-gray-700">
          From the 2000s onward, Trump increasingly focused on licensing his name to
          properties and products developed by other companies. The Trump brand was licensed
          for residential towers, hotels, clothing lines, steaks, beverages, and various other
          products, generating significant revenue through royalty agreements.
        </p>
      </Section>

      <Section id="media-personality" title="Media and Television">
        <h3 className="text-xl font-bold mt-6 mb-3">The Apprentice</h3>
        <p className="text-gray-700 mb-4">
          In 2004, Trump became the host and executive producer of{" "}
          <em>The Apprentice</em>, an NBC reality television show where contestants competed
          for a management job within the Trump Organization. The show was a massive success
          and ran for 14 seasons (including <em>The Celebrity Apprentice</em> spin-off).
        </p>

        <p className="text-gray-700 mb-4">
          <em>The Apprentice</em> significantly raised Trump public profile, making him a
          household name beyond New York business circles. His catchphrase "You're fired!"
          became iconic. Reports suggest Trump earned approximately $427 million from the show
          over its run.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Books and Other Media</h3>
        <p className="text-gray-700">
          Trump has authored or co-authored numerous books, the most famous being{" "}
          <em>The Art of the Deal</em> (1987), which became a bestseller and helped establish
          his reputation as a dealmaker. Other books include <em>Think Big and Kick Ass</em>,{" "}
          <em>The Art of the Comeback</em>, and <em>Crippled America</em>.
        </p>
      </Section>

      <Section id="first-presidency" title="First Presidency (2017-2021)">
        <h3 className="text-xl font-bold mt-6 mb-3">2016 Presidential Campaign</h3>
        <p className="text-gray-700 mb-4">
          Trump announced his candidacy for president on June 16, 2015, descending the
          escalator in Trump Tower to deliver his announcement speech. Running as a
          Republican, he campaigned on promises to "Make America Great Again," build a wall on
          the Mexican border, renegotiate trade deals, and adopt an "America First" foreign
          policy.
        </p>

        <p className="text-gray-700 mb-4">
          Despite being initially dismissed by political analysts and facing a crowded
          Republican primary field, Trump dominated media coverage and won the nomination. In
          the general election, he faced Democratic nominee Hillary Clinton and won the
          Electoral College 304-227, though he lost the popular vote by nearly 3 million votes.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Major Policies and Actions</h3>
        
        <h4 className="text-lg font-bold mt-4 mb-2">Economic Policy</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Tax Cuts and Jobs Act (2017):</strong> Major tax reform reducing
            corporate tax rate from 35% to 21%
          </li>
          <li>
            <strong>Deregulation:</strong> Rolled back numerous Obama-era regulations,
            particularly environmental and financial regulations
          </li>
          <li>
            <strong>Trade Policy:</strong> Initiated trade war with China, renegotiated
            NAFTA into USMCA
          </li>
        </ul>

        <h4 className="text-lg font-bold mt-4 mb-2">Immigration</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Border Wall:</strong> Constructed approximately 450 miles of border
            barrier
          </li>
          <li>
            <strong>Travel Ban:</strong> Executive orders restricting travel from several
            Muslim-majority countries
          </li>
          <li>
            <strong>Family Separation Policy:</strong> Controversial "zero tolerance" policy
            at the border
          </li>
        </ul>

        <h4 className="text-lg font-bold mt-4 mb-2">Judicial Appointments</h4>
        <p className="text-gray-700 mb-4">
          Trump appointed three Supreme Court justices—Neil Gorsuch (2017), Brett Kavanaugh
          (2018), and Amy Coney Barrett (2020)—creating a 6-3 conservative majority. He also
          appointed over 200 federal judges, reshaping the judiciary for decades.
        </p>

        <h4 className="text-lg font-bold mt-4 mb-2">Foreign Policy</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Withdrew from Iran nuclear deal and Paris Climate Agreement</li>
          <li>Moved U.S. embassy in Israel to Jerusalem</li>
          <li>Held historic summit with North Korean leader Kim Jong Un</li>
          <li>Brokered Abraham Accords normalizing relations between Israel and Arab states</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">COVID-19 Pandemic</h3>
        <p className="text-gray-700 mb-4">
          The final year of Trump first term was dominated by the COVID-19 pandemic. His
          administration response was controversial, with critics arguing he downplayed the
          virus severity while supporters credited Operation Warp Speed for accelerating
          vaccine development.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Impeachments</h3>
        <p className="text-gray-700 mb-4">
          Trump became the third U.S. president to be impeached and the only president to be
          impeached twice:
        </p>

        <DataTable
          headers={["Date", "Charges", "House Vote", "Senate Outcome"]}
          rows={[
            [
              "December 2019",
              "Abuse of power, obstruction of Congress (Ukraine affair)",
              "230-197, 229-198",
              "Acquitted",
            ],
            [
              "January 2021",
              "Incitement of insurrection (January 6 Capitol riot)",
              "232-197",
              "Acquitted",
            ],
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">2020 Election and January 6</h3>
        <p className="text-gray-700 mb-4">
          Trump lost the 2020 presidential election to Joe Biden by 306-232 in the Electoral
          College and by over 7 million popular votes. He refused to concede, claiming without
          evidence that the election was "stolen" through widespread fraud.
        </p>

        <p className="text-gray-700">
          On January 6, 2021, a mob of Trump supporters stormed the U.S. Capitol as Congress
          was certifying Biden victory. The riot resulted in five deaths and over 140 police
          officers injured. Trump was impeached for incitement of insurrection but acquitted by
          the Senate.
        </p>
      </Section>

      <Section id="post-presidency" title="Post-Presidency Period (2021-2024)">
        <h3 className="text-xl font-bold mt-6 mb-3">Mar-a-Lago and Continued Influence</h3>
        <p className="text-gray-700 mb-4">
          After leaving office, Trump relocated permanently to his Mar-a-Lago resort in Palm
          Beach, Florida. He remained the dominant figure in the Republican Party, endorsing
          candidates in the 2022 midterm elections with mixed results.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Truth Social</h3>
        <p className="text-gray-700">
          After being banned from major social media platforms following January 6, Trump
          launched Truth Social in February 2022, a social media platform owned by Trump Media
          & Technology Group. The platform became his primary means of communicating with
          supporters.
        </p>
      </Section>

      <Section id="legal-issues" title="Legal Challenges (2022-2024)">
        <p className="text-gray-700 mb-4">
          Trump faced unprecedented legal challenges between 2022 and 2024, including multiple
          criminal indictments:
        </p>

        <DataTable
          headers={["Case", "Jurisdiction", "Charges", "Status"]}
          rows={[
            [
              "Classified Documents",
              "Federal (Florida)",
              "Willful retention of national defense information",
              "Dismissed (2024)",
            ],
            [
              "January 6 / Election Interference",
              "Federal (DC)",
              "Conspiracy to defraud the U.S., obstruction",
              "Dismissed after 2024 victory",
            ],
            [
              "Georgia Election Case",
              "Fulton County, GA",
              "RICO, election interference",
              "Ongoing (frozen)",
            ],
            [
              "Hush Money Case",
              "Manhattan, NY",
              "Falsifying business records",
              "Convicted May 2024, sentencing postponed",
            ],
          ]}
        />

        <Notice type="warning">
          <p>
            <strong>Historic Conviction:</strong> In May 2024, Trump became the first former 
            U.S. president to be convicted of a crime when a New York jury found him guilty on 
            34 counts of falsifying business records related to hush money payments. Sentencing 
            was repeatedly postponed and ultimately shelved after his 2024 election victory.
          </p>
        </Notice>
      </Section>

      <Section id="2024-campaign" title="2024 Presidential Campaign">
        <h3 className="text-xl font-bold mt-6 mb-3">Campaign Announcement and Primary</h3>
        <p className="text-gray-700 mb-4">
          Trump announced his 2024 presidential campaign on November 15, 2022, making him the
          first candidate to declare. Despite facing multiple indictments and legal challenges
          throughout 2023 and 2024, he dominated the Republican primary, easily securing the
          nomination.
        </p>

        <p className="text-gray-700 mb-4">
          His primary opponents included Florida Governor Ron DeSantis, former South Carolina
          Governor Nikki Haley, entrepreneur Vivek Ramaswamy, and several others, but Trump
          grip on the Republican base proved unshakeable.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">General Election Campaign</h3>
        <p className="text-gray-700 mb-4">
          Trump 2024 campaign focused on several key themes:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Promises of "retribution" against political opponents</li>
          <li>Mass deportation of undocumented immigrants</li>
          <li>Criticism of Biden handling of inflation and the border</li>
          <li>Claims of election interference through his prosecutions</li>
          <li>Pledge to end the Russia-Ukraine war "within 24 hours"</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Election Victory</h3>
        <p className="text-gray-700 mb-4">
          On November 5, 2024, Trump defeated Democratic nominee Kamala Harris (who had
          replaced Joe Biden after his withdrawal from the race in July 2024). Trump won both
          the Electoral College and, for the first time in his three campaigns, the popular
          vote.
        </p>

        <DataTable
          headers={["Candidate", "Party", "Electoral Votes", "Popular Vote"]}
          rows={[
            ["Donald J. Trump", "Republican", "312", "77.8 million (51.2%)"],
            ["Kamala Harris", "Democratic", "226", "74.1 million (48.8%)"],
          ]}
        />
      </Section>

      <Section id="second-presidency" title="Second Presidency (2025-Present)">
        <h3 className="text-xl font-bold mt-6 mb-3">Inauguration and Early Days</h3>
        <p className="text-gray-700 mb-4">
          Trump was inaugurated as the 47th President of the United States on January 20,
          2025. At 78 years old, he became the oldest person to assume the presidency,
          surpassing Joe Biden record. His inauguration speech emphasized themes of national
          renewal and promised swift action on his campaign promises.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Cabinet and Administration</h3>
        <p className="text-gray-700 mb-4">
          Trump second-term cabinet includes a mix of loyalists from his first term, MAGA
          movement figures, and some establishment Republicans who pledged loyalty during the
          2024 campaign. The administration has signaled a more organized and aggressive
          approach to implementing Trump agenda compared to his first term.
        </p>

        <Notice type="info">
          <p>
            <strong>Developing Story:</strong> As Trump second presidency is less than one 
            week old, this section will be continually updated as policies are implemented and 
            their impacts become clear.
          </p>
        </Notice>
      </Section>

      <Section id="political-positions" title="Political Positions">
        <h3 className="text-xl font-bold mt-6 mb-3">Core Ideology</h3>
        <p className="text-gray-700 mb-4">
          Trump political philosophy, often called "Trumpism," combines elements of populism,
          nationalism, and economic protectionism. Key tenets include:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>America First:</strong> Prioritizing U.S. interests in trade, foreign
            policy, and immigration
          </li>
          <li>
            <strong>Economic Nationalism:</strong> Opposition to free trade agreements,
            support for tariffs
          </li>
          <li>
            <strong>Immigration Restrictionism:</strong> Strong border security, reduced legal
            immigration
          </li>
          <li>
            <strong>Cultural Conservatism:</strong> Opposition to "political correctness" and
            "woke" ideology
          </li>
          <li>
            <strong>Skepticism of Institutions:</strong> Criticism of media, intelligence
            agencies, and "deep state"
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Economic Views</h3>
        <p className="text-gray-700 mb-4">
          Trump advocates for lower taxes, reduced regulation, and protectionist trade
          policies. He has criticized both traditional Republican free-trade orthodoxy and
          Democratic social spending programs.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Foreign Policy</h3>
        <p className="text-gray-700">
          Trump foreign policy emphasizes American sovereignty, skepticism of international
          institutions and alliances, and transactional bilateral relationships. He has been
          critical of NATO allies while expressing admiration for strongman leaders.
        </p>
      </Section>

      <Section id="controversies" title="Controversies">
        <p className="text-gray-700 mb-4">
          Trump career has been marked by numerous controversies spanning business, personal
          conduct, and political actions:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Business Controversies</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Trump University fraud allegations and settlements</li>
          <li>Multiple bankruptcy filings</li>
          <li>Allegations of discriminatory housing practices (1970s)</li>
          <li>Conflicts of interest between presidency and business holdings</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Personal Controversies</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Multiple allegations of sexual misconduct (all denied)</li>
          <li>Access Hollywood tape (2016)</li>
          <li>Three marriages and multiple documented affairs</li>
          <li>Civil fraud verdict in New York (2024)</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Political Controversies</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Birtherism campaign against Barack Obama</li>
          <li>Refusal to release tax returns</li>
          <li>Helsinki summit and relationship with Vladimir Putin</li>
          <li>Charlottesville "both sides" comments</li>
          <li>COVID-19 response and promotion of unproven treatments</li>
          <li>2020 election denial and January 6 Capitol attack</li>
        </ul>
      </Section>

      <Section id="cultural-impact" title="Cultural Impact and Legacy">
        <h3 className="text-xl font-bold mt-6 mb-3">Transformation of Republican Party</h3>
        <p className="text-gray-700 mb-4">
          Trump fundamentally reshaped the Republican Party, moving it away from traditional
          conservatism toward populist nationalism. The GOP became increasingly centered around
          loyalty to Trump personally, with opponents labeled "RINOs" (Republicans In Name
          Only).
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Media and Communication</h3>
        <p className="text-gray-700 mb-4">
          Trump use of Twitter (before his ban) and later Truth Social revolutionized
          political communication, allowing direct engagement with supporters while bypassing
          traditional media. His attacks on media as "fake news" and "enemy of the people"
          significantly eroded trust in journalism among his supporters.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Polarization</h3>
        <p className="text-gray-700 mb-4">
          Political scientists note that American political polarization reached historic
          levels during and after Trump presidency. He remains one of the most divisive
          figures in modern American politics, with strong support from roughly 40-45% of
          Americans and intense opposition from a similar proportion.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">MAGA Movement</h3>
        <p className="text-gray-700 mb-4">
          The "Make America Great Again" movement Trump created has outlasted his first
          presidency and become a lasting force in American politics. MAGA-aligned candidates
          have won numerous Republican primaries, and Trump endorsement remains highly
          sought after.
        </p>

        <Quote source="Political Analyst Commentary, 2024">
          Whether you love him or hate him, Donald Trump changed American politics forever. 
          The Republican Party, the Democratic Party, the media, the way campaigns are run—nothing 
          is the same as it was before 2016.
        </Quote>
      </Section>

      <ExternalLinks
        links={[
          { href: "https://www.whitehouse.gov", label: "White House Official Website" },
          { href: "https://truthsocial.com/@realDonaldTrump", label: "Trump on Truth Social" },
          { href: "https://www.donaldjtrump.com", label: "Official Campaign Website" },
        ]}
      />
    </ArticlePage>
  );
}
