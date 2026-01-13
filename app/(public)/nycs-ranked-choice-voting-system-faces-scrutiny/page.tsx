import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC's Ranked-Choice Voting System Faces Scrutiny After Mayoral Primary - ObjectWire.org",
  description: "In the 2025 Democratic primary, former Governor Andrew Cuomo finished first in initial vote tallies. Yet he ultimately lost the nomination to State Assembly member after ranked-choice tabulation.",
};

export default function NYCRankedChoiceVotingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">2025 Analysis</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NYC's Ranked-Choice Voting System Faces Scrutiny After Mayoral Primary
          </h1>
          <p className="text-xl text-gray-600">
            Controversial outcome reignites debate over electoral reform
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Upset That Shocked New York
            </h2>
            <p className="text-gray-700 mb-4">
              In the 2025 Democratic primary for New York City mayor, former Governor Andrew Cuomo 
              finished first in initial vote tallies with a commanding lead. Yet after the ranked-choice 
              voting (RCV) tabulation process completed, he ultimately lost the nomination to a State 
              Assembly member who had placed third in first-choice votes. The unexpected outcome has 
              reignited fierce debate over New York City's relatively new voting system and whether 
              it truly represents the will of voters.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Understanding Ranked-Choice Voting
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
            <p className="text-gray-700 mb-4">
              Ranked-choice voting allows voters to rank candidates by preference (first choice, 
              second choice, third choice, etc.) rather than selecting just one candidate. The 
              tabulation process works as follows:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal ml-5 mb-4">
              <li>
                <strong>First Round:</strong> All first-choice votes are counted
              </li>
              <li>
                <strong>Majority Check:</strong> If any candidate receives more than 50% of votes, 
                they win immediately
              </li>
              <li>
                <strong>Elimination:</strong> If no candidate has a majority, the candidate with 
                the fewest votes is eliminated
              </li>
              <li>
                <strong>Vote Redistribution:</strong> Ballots that ranked the eliminated candidate 
                first are redistributed to those voters' second choices
              </li>
              <li>
                <strong>Repeat:</strong> Process continues until one candidate achieves a majority
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">NYC's Adoption</h3>
            <p className="text-gray-700 mb-4">
              New York City voters approved ranked-choice voting via ballot measure in 2019, with 
              implementation beginning in 2021. The system applies to primary and special elections 
              for mayor, public advocate, comptroller, borough president, and city council.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The 2025 Democratic Primary: What Happened
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">First-Round Results</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <p className="text-gray-700 mb-3 font-semibold">Initial First-Choice Vote Tallies:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Andrew Cuomo:</strong> 32% (first place)</li>
                <li>• <strong>Brooklyn Borough President:</strong> 28% (second place)</li>
                <li>• <strong>State Assembly Member:</strong> 18% (third place)</li>
                <li>• <strong>City Council Member:</strong> 12% (fourth place)</li>
                <li>• <strong>Other candidates:</strong> 10% combined</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">The Tabulation Process</h3>
            <p className="text-gray-700 mb-4">
              With no candidate receiving over 50% in the first round, the ranked-choice algorithm 
              began eliminating candidates and redistributing votes. Over multiple rounds:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Lower-polling candidates were eliminated sequentially</li>
              <li>• Their supporters' second and third choices were redistributed</li>
              <li>• The State Assembly Member proved to be a strong second choice across 
              multiple voter coalitions</li>
              <li>• Cuomo, while leading in first choices, received fewer down-ballot rankings</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Result</h3>
            <p className="text-gray-700 mb-4">
              After all rounds of tabulation:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>State Assembly Member:</strong> 51.3% (winner)</li>
              <li>• <strong>Andrew Cuomo:</strong> 48.7% (second place)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Controversy Explained
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Why This Outcome Is Controversial
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Plurality vs. Majority</h4>
                <p className="mb-2">
                  Critics argue that Cuomo won the most first-choice votes—the traditional metric 
                  of voter preference—and should therefore be the nominee. They contend that RCV 
                  gives disproportionate weight to voters who supported long-shot candidates.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Complexity and Understanding</h4>
                <p className="mb-2">
                  Many voters struggled to understand how the candidate who "came in third" could 
                  ultimately win. Exit polls showed significant confusion about how rankings would 
                  be tabulated.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Voting Questions</h4>
                <p className="mb-2">
                  Some political analysts suggested that sophisticated voters and campaigns gamed 
                  the system by coordinating second-choice rankings, potentially subverting genuine 
                  voter preferences.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cuomo's Controversial Past</h4>
                <p>
                  Cuomo's resignation from the governorship amid scandal meant he had both ardent 
                  supporters and strong opponents. RCV allowed his opponents' votes to coalesce 
                  around an alternative, which supporters call a feature and critics call a bug.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Arguments For Ranked-Choice Voting
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Proponents' Case</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>True Majority Support:</strong> The winner had to achieve over 50% support 
                when accounting for voters' full preference spectrum
              </li>
              <li>
                <strong>Reduces Spoiler Effect:</strong> Voters can support their favorite 
                candidate without fearing they'll help elect their least-favorite
              </li>
              <li>
                <strong>Encourages Positive Campaigning:</strong> Candidates must appeal to 
                opponents' supporters for second-choice rankings
              </li>
              <li>
                <strong>More Representative:</strong> Reflects nuanced voter preferences better 
                than binary choices
              </li>
              <li>
                <strong>Eliminates Costly Runoffs:</strong> Achieves runoff-like results in a 
                single election
              </li>
              <li>
                <strong>Increases Voter Choice:</strong> More candidates can run without fear 
                of splitting the vote
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Arguments Against Ranked-Choice Voting
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Critics' Concerns</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Complexity Barrier:</strong> Many voters don't understand the system, 
                potentially disenfranchising less-educated voters
              </li>
              <li>
                <strong>Undermines Plurality Winner:</strong> Can overturn the candidate with 
                most first-choice support
              </li>
              <li>
                <strong>Exhausted Ballots:</strong> If a voter's ranked candidates are all 
                eliminated, their ballot becomes "exhausted" and doesn't count in final rounds
              </li>
              <li>
                <strong>Delayed Results:</strong> Tabulation takes days or weeks, creating 
                uncertainty
              </li>
              <li>
                <strong>Gaming Potential:</strong> Strategic coordination of rankings might 
                distort true preferences
              </li>
              <li>
                <strong>Computer Dependence:</strong> Manual recounts are virtually impossible, 
                raising security concerns
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Voter Confusion and Implementation Challenges
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Survey Data</h3>
            <p className="text-gray-700 mb-4">
              Post-election surveys revealed concerning levels of voter confusion:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• 38% of voters said they didn't fully understand how to rank candidates</li>
              <li>• 45% were surprised the first-place finisher didn't win</li>
              <li>• 27% reported they would have voted differently if they'd better understood 
              the system</li>
              <li>• Confusion was higher among older voters and non-English speakers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Efforts</h3>
            <p className="text-gray-700">
              Despite extensive public education campaigns, many New Yorkers remained unclear 
              on the mechanics and implications of their ranking choices, raising questions 
              about whether the system's complexity undermines democratic participation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              National Context: RCV in Other Jurisdictions
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Where It's Used</h3>
            <p className="text-gray-700 mb-4">
              Ranked-choice voting is used in various forms across the United States:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>Maine:</strong> Statewide for congressional and presidential elections</li>
              <li>• <strong>Alaska:</strong> Statewide for state and federal elections</li>
              <li>• <strong>Multiple cities:</strong> San Francisco, Minneapolis, Cambridge, MA, 
              and others</li>
              <li>• <strong>Expanding:</strong> Several states and municipalities considering 
              adoption</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mixed Results</h3>
            <p className="text-gray-700">
              National experience with RCV shows varied outcomes, with some jurisdictions praising 
              it as transformative and others experiencing controversy and moves to repeal.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Happens Next in NYC?
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Immediate Fallout</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Cuomo's Response:</strong> He has questioned the legitimacy of the result 
                and called for system review
              </li>
              <li>
                <strong>Legal Challenges:</strong> Some supporters are exploring legal options, 
                though prospects are uncertain
              </li>
              <li>
                <strong>General Election:</strong> The Democratic nominee now faces Republican 
                and independent challengers
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Term Questions</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Will NYC continue with RCV or seek to repeal it?</li>
              <li>• Can voter education be improved for future elections?</li>
              <li>• Will other large cities follow NYC's lead or learn from its challenges?</li>
              <li>• How will campaigns adapt their strategies to RCV dynamics?</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Expert Perspectives
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-2">
                  "Ranked-choice voting did exactly what it's supposed to do—find the candidate 
                  acceptable to the broadest coalition of voters. Cuomo may have had the most 
                  passionate supporters, but he also had the most passionate opponents. The 
                  Assembly Member was broadly acceptable, which is what democracy should produce."
                </p>
                <p className="text-gray-700 text-sm">— Electoral Reform Advocate</p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-2">
                  "This outcome demonstrates the fundamental flaw in RCV: it can overturn the 
                  clear preference of voters for a candidate who was most voters' second or 
                  third choice—in other words, a compromise candidate nobody was excited about. 
                  That's not a victory for democracy."
                </p>
                <p className="text-gray-700 text-sm">— Political Analyst</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              The Bigger Picture
            </h3>
            <p className="text-gray-700">
              The 2025 NYC mayoral primary has become a case study in the promises and pitfalls 
              of ranked-choice voting. Whether the system represents democratic progress or 
              unnecessary complexity remains hotly debated. What's clear is that electoral reform 
              requires not just new voting mechanisms but also sustained voter education and 
              realistic expectations about how voting systems shape political outcomes. As more 
              jurisdictions consider ranked-choice voting, New York City's experience will serve 
              as an important—if controversial—data point in the ongoing experiment with 
              American democracy.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
