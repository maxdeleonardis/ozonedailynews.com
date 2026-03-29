"use client";

import Link from "next/link";
import { useState } from "react";

// Interactive Poll Component
function OmarPoll() {
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({
    'immigration': 42,
    'healthcare': 28,
    'foreign-policy': 18,
    'economic': 12,
  });
  const [selected, setSelected] = useState<string | null>(null);

  const handleVote = (option: string) => {
    if (voted) return;
    setVotes(prev => ({ ...prev, [option]: prev[option as keyof typeof prev] + 1 }));
    setSelected(option);
    setVoted(true);
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const options = [
    { key: 'immigration', label: 'Immigration Reform', icon: '🌍' },
    { key: 'healthcare', label: 'Healthcare Access', icon: '🏥' },
    { key: 'foreign-policy', label: 'Foreign Policy', icon: '🕊️' },
    { key: 'economic', label: 'Economic Justice', icon: '💰' },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 my-8">
      <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Omar's Top Policy Focus</h3>
      <p className="text-gray-600 text-sm mb-4">What do you think should be Ilhan Omar's priority?</p>
      <div className="space-y-3">
        {options.map(({ key, label, icon }) => {
          const percentage = Math.round((votes[key as keyof typeof votes] / totalVotes) * 100);
          return (
            <button
              key={key}
              onClick={() => handleVote(key)}
              disabled={voted}
              className={`w-full text-left p-3 rounded-lg border transition-all relative overflow-hidden ${
                selected === key 
                  ? 'border-green-500 bg-green-100' 
                  : voted 
                    ? 'border-gray-200 bg-white' 
                    : 'border-gray-200 bg-white hover:border-green-300 hover:bg-green-50'
              }`}
            >
              {voted && (
                <div 
                  className="absolute inset-0 bg-green-100 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              )}
              <div className="relative flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="font-medium text-gray-800">{label}</span>
                </span>
                {voted && <span className="text-green-600 font-bold">{percentage}%</span>}
              </div>
            </button>
          );
        })}
      </div>
      {voted && (
        <p className="text-xs text-gray-500 mt-3 text-center">{totalVotes} total votes</p>
      )}
    </div>
  );
}

// Timeline Component
function LifeTimeline() {
  const events = [
    {
      year: '1982',
      title: 'Born in Mogadishu',
      description: 'Born in Somalia during period of political instability',
      color: 'bg-red-500',
    },
    {
      year: '1991',
      title: 'Fled Civil War',
      description: 'Family fled Somalia during outbreak of civil war',
      color: 'bg-orange-500',
    },
    {
      year: '1991-1995',
      title: 'Refugee Camp',
      description: 'Spent four years in Dadaab refugee camp, Kenya',
      color: 'bg-yellow-500',
    },
    {
      year: '1995',
      title: 'Arrived in US',
      description: 'Immigrated to United States, settled in Minneapolis',
      color: 'bg-blue-500',
    },
    {
      year: '2016',
      title: 'Minnesota Legislature',
      description: 'Elected to Minnesota House of Representatives',
      color: 'bg-green-500',
    },
    {
      year: '2018',
      title: 'Elected to Congress',
      description: 'Won election to U.S. House of Representatives',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📅 Life Journey</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`${event.color} w-3 h-3 rounded-full mt-2 flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-gray-900">{event.year}</span>
                <span className="text-lg font-semibold text-gray-800">{event.title}</span>
              </div>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Net Worth Tracker
function NetWorthTracker() {
  const years = [
    { year: '2016', amount: '$41,000', source: 'State Legislature Salary' },
    { year: '2018', amount: '$174,000', source: 'Congressional Salary + Benefits' },
    { year: '2020', amount: '$250,000', source: 'Book Deal + Speaking Fees' },
    { year: '2022', amount: '$350,000', source: 'Investments + Real Estate' },
    { year: '2024', amount: '$450,000', source: 'Current Estimated Net Worth' },
  ];

  return (
    <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-8">
      <h3 className="font-bold text-lg text-gray-900 mb-4">💰 Net Worth Growth</h3>
      <div className="space-y-3">
        {years.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
            <div>
              <div className="font-bold text-green-600">{item.year}</div>
              <div className="text-xs text-gray-600">{item.source}</div>
            </div>
            <div className="font-bold text-lg text-gray-900">{item.amount}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        *Estimates based on public financial disclosures and reporting
      </p>
    </div>
  );
}

export default function IlhanOmarPage() {
  const [activeTab, setActiveTab] = useState('early-life');

  const tabs = [
    { id: 'early-life', label: 'Early Life & Immigration', icon: '🌍' },
    { id: 'political-career', label: 'Political Rise', icon: '🏛️' },
    { id: 'personal-life', label: 'Personal Life', icon: '👥' },
    { id: 'net-worth', label: 'Financial Growth', icon: '💰' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-green-700 via-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Biography
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              Minnesota Representative
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Ilhan Omar
            <span className="block text-2xl md:text-3xl font-normal text-green-200 mt-2">
              From Somali Refugee to Congressional Representative
            </span>
          </h1>

          <p className="text-xl text-green-100 max-w-4xl mb-8">
            The remarkable journey of Ilhan Omar from refugee camps in Kenya to the halls of 
            the U.S. Congress. Her story embodies the American Dream while highlighting the 
            ongoing struggles for immigrant rights and social justice.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <span>🏛️</span>
              <span>U.S. Representative</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Minnesota's 5th District</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌍</span>
              <span>Born in Somalia</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💰</span>
              <span>~$450K net worth</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            
            {/* Early Life & Immigration Tab */}
            {activeTab === 'early-life' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Early Life & Immigration Journey</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      <a href="https://omar.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ilhan Omar</a> 
                      was born in <a href="https://en.wikipedia.org/wiki/Mogadishu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mogadishu, Somalia</a> 
                      in 1982, during a period of increasing political instability that would soon 
                      erupt into full-scale civil war. Her early childhood was marked by the 
                      deteriorating security situation in Somalia under the military dictatorship 
                      of <a href="https://en.wikipedia.org/wiki/Siad_Barre" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Siad Barre</a>.
                    </p>

                    <div className="not-prose bg-red-50 rounded-xl p-6 border border-red-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🌍 Somalia Context (1980s-1990s)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Political Crisis</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Military dictatorship under Siad Barre</li>
                            <li>• Growing opposition and clan conflicts</li>
                            <li>• Economic collapse and famine</li>
                            <li>• Government overthrow in 1991</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Humanitarian Crisis</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Widespread displacement</li>
                            <li>• Infrastructure breakdown</li>
                            <li>• Limited access to education/healthcare</li>
                            <li>• Mass refugee exodus</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Fleeing the Civil War</h3>
                    <p>
                      In 1991, when Omar was just eight years old, the <a href="https://en.wikipedia.org/wiki/Somali_Civil_War" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Somali Civil War</a> 
                      erupted following the collapse of Barre's government. Her family, like hundreds 
                      of thousands of other Somalis, was forced to flee their home country as various 
                      militia groups battled for control and the country descended into chaos.
                    </p>

                    <h3>Life in Dadaab Refugee Camp</h3>
                    <p>
                      The Omar family spent four years (1991-1995) in the <a href="https://en.wikipedia.org/wiki/Dadaab" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dadaab refugee complex</a> 
                      in Kenya, one of the world's largest refugee settlements. According to 
                      <a href="https://www.unhcr.org/dadaab-refugee-complex" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UNHCR reports</a>, 
                      Dadaab housed over 400,000 refugees during this period, primarily from Somalia.
                    </p>

                    <blockquote className="border-l-4 border-green-500 bg-green-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "The four years we lived in a refugee camp shaped everything about how I 
                        see the world. You learn early that your voice matters when everyone 
                        around you has been silenced."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">,  Ilhan Omar, reflecting on her refugee experience</footer>
                    </blockquote>

                    <h3>Arrival in Minnesota (1995)</h3>
                    <p>
                      In 1995, when Omar was 12 years old, her family was accepted into the 
                      <a href="https://www.state.gov/refugee-admissions/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Refugee Resettlement Program</a> 
                      and relocated to Minneapolis, Minnesota. Minnesota was chosen due to its 
                      established Somali community and supportive resettlement services provided 
                      by organizations like <a href="https://www.uscriref.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Committee for Refugees</a>.
                    </p>

                    <h3>Cultural Adaptation and Education</h3>
                    <p>
                      Omar's transition to American life involved significant cultural adaptation. 
                      She learned English as her fourth language (after Somali, Arabic, and Swahili) 
                      and attended <a href="https://edison.mpls.k12.mn.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Edison High School</a> 
                      in Minneapolis. Despite language barriers and cultural differences, she 
                      excelled academically and became involved in student government.
                    </p>

                    <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">📚 Educational Journey</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🏫</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Edison High School</h4>
                            <p className="text-sm text-gray-600">Minneapolis public high school, involved in student government</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🎓</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">North Dakota State University</h4>
                            <p className="text-sm text-gray-600">Bachelor's degree in Political Science and International Studies (2011)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">👩‍💼</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Professional Development</h4>
                            <p className="text-sm text-gray-600">Nutrition educator, policy coordinator, and community organizer</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>Early Career and Community Involvement</h3>
                    <p>
                      After graduating from <a href="https://www.ndsu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">North Dakota State University</a> 
                      in 2011 with degrees in Political Science and International Studies, Omar 
                      returned to Minneapolis to work in community organizing. She served as a 
                      nutrition educator for the <a href="https://www.health.state.mn.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Minnesota Department of Health</a> 
                      and later as policy coordinator for the <a href="https://www.womenorganizing.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Women Organizing Women Network</a>.
                    </p>

                    <h3>Immigration Policy Advocacy</h3>
                    <p>
                      Omar's personal experience as a refugee significantly influenced her political 
                      views and policy priorities. She became involved in immigration rights advocacy, 
                      working with organizations focused on supporting new Americans and refugee 
                      communities in Minnesota.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Political Career Tab */}
            {activeTab === 'political-career' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Political Rise</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Omar's entry into politics was motivated by her desire to address systemic 
                      inequalities and advocate for marginalized communities. Her political career 
                      represents a rapid ascent from local activism to national prominence.
                    </p>

                    <div className="not-prose bg-purple-50 rounded-xl p-6 border border-purple-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🏛️ Political Timeline</h3>
                      <div className="space-y-4">
                        {[
                          {
                            year: '2016',
                            title: 'Minnesota House Victory',
                            desc: 'Defeated 44-year incumbent Phyllis Kahn in DFL primary',
                            votes: '41.5% of primary vote'
                          },
                          {
                            year: '2018', 
                            title: 'Congressional Election',
                            desc: 'Won U.S. House seat representing Minnesota\'s 5th District',
                            votes: '78.0% of general election vote'
                          },
                          {
                            year: '2020',
                            title: 'Re-election',
                            desc: 'Successfully defended House seat amid redistricting',
                            votes: '64.3% of general election vote'
                          },
                          {
                            year: '2022',
                            title: 'Third Term',
                            desc: 'Won third consecutive term in Congress',
                            votes: '74.8% of general election vote'
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-bold text-purple-600">{item.year}</h4>
                                <h5 className="font-semibold text-gray-900">{item.title}</h5>
                              </div>
                              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">
                                {item.votes}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3>Breaking Barriers in 2016</h3>
                    <p>
                      Omar's 2016 campaign for the <a href="https://www.leg.mn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Minnesota House of Representatives</a> 
                      was notable for several reasons. She challenged <a href="https://en.wikipedia.org/wiki/Phyllis_Kahn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Phyllis Kahn</a>, 
                      a 44-year incumbent, in the DFL (Democratic-Farmer-Labor) primary for House 
                      District 60B, which includes parts of Minneapolis.
                    </p>

                    <h3>Historic Congressional Victory</h3>
                    <p>
                      In 2018, Omar ran for the <a href="https://en.wikipedia.org/wiki/Minnesota%27s_5th_congressional_district" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. House seat representing Minnesota's 5th District</a>, 
                      which includes Minneapolis and surrounding suburbs. Her victory made her one 
                      of the first two Muslim women elected to Congress, alongside 
                      <a href="https://tlaib.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Rashida Tlaib</a> of Michigan.
                    </p>

                    <blockquote className="border-l-4 border-purple-500 bg-purple-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "We are going to be the voice of reason against war, we are going to be 
                        the voice that champions peace and justice, human rights, civil rights, 
                        and making sure that everyone in this country has the dignified life 
                        that they deserve to have."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">,  Ilhan Omar, 2018 victory speech</footer>
                    </blockquote>

                    <h3>Committee Assignments</h3>
                    <p>
                      During her time in Congress, Omar has served on several important committees:
                    </p>
                    <ul>
                      <li><strong><a href="https://foreignaffairs.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">House Foreign Affairs Committee</a></strong> - Focus on international relations and foreign policy</li>
                      <li><strong><a href="https://education.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">House Education and Labor Committee</a></strong> - Educational policy and workforce development</li>
                      <li><strong><a href="https://budget.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">House Budget Committee</a></strong> - Federal budget and fiscal policy</li>
                    </ul>

                    <h3>"The Squad" Membership</h3>
                    <p>
                      Omar became a prominent member of "The Squad," an informal group of 
                      progressive Democratic representatives that initially included 
                      <a href="https://ocasio-cortez.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alexandria Ocasio-Cortez</a>, 
                      <a href="https://tlaib.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Rashida Tlaib</a>, and 
                      <a href="https://pressley.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ayanna Pressley</a>. 
                      This group has been influential in pushing progressive policy initiatives.
                    </p>

                    <h3>Key Legislative Priorities</h3>
                    <p>
                      Omar's legislative focus has centered on several key areas:
                    </p>
                    <ul>
                      <li><strong>Immigration Reform</strong> - Comprehensive immigration policy overhaul</li>
                      <li><strong>Healthcare Access</strong> - Support for Medicare for All and healthcare equity</li>
                      <li><strong>Climate Action</strong> - Environmental justice and Green New Deal initiatives</li>
                      <li><strong>Economic Justice</strong> - Minimum wage increases and wealth inequality</li>
                      <li><strong>Foreign Policy</strong> - Ending endless wars and promoting human rights</li>
                    </ul>

                    <h3>Controversies and Criticisms</h3>
                    <p>
                      Omar's career has been marked by several controversies, particularly around 
                      comments related to Israel and foreign policy. In 2019, she faced criticism 
                      for comments that some interpreted as antisemitic, leading to a 
                      <a href="https://www.congress.gov/bill/116th-congress/house-resolution/183" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">House resolution</a> 
                      condemning hate speech.
                    </p>

                    <h3>Electoral Performance</h3>
                    <p>
                      Despite controversies, Omar has maintained strong electoral performance 
                      in her district, which has a Democratic lean according to 
                      <a href="https://www.cookpolitical.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cook Political Report</a> 
                      ratings. Her victory margins have consistently exceeded 60% in general elections.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Life Tab */}
            {activeTab === 'personal-life' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Life & Relationships</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Omar's personal life has been subject to significant public scrutiny, 
                      particularly regarding her marriages and family relationships. Her story 
                      reflects both the challenges faced by public figures and the complexity 
                      of modern family structures.
                    </p>

                    <div className="not-prose bg-pink-50 rounded-xl p-6 border border-pink-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">👥 Family Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Children</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Isra Hirsi (daughter, born 2003)</li>
                            <li>• Adnan Hirsi (son, born 2006)</li>
                            <li>• Ilwad Hirsi (daughter, born 2012)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Current Status</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Married to Ahmed Hirsi</li>
                            <li>• Lives in Minneapolis, Minnesota</li>
                            <li>• Active in Somali-American community</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>First Marriage to Ahmed Hirsi</h3>
                    <p>
                      Omar first married <a href="https://www.startribune.com/ilhan-omar-marriage-timeline/511681362/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ahmed Hirsi</a> 
                      in 2002 in a religious ceremony. According to <a href="https://www.startribune.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Star Tribune</a> 
                      reporting, this marriage was conducted according to Islamic tradition but 
                      was not legally registered in the United States. The couple had two children 
                      together: Isra (2003) and Adnan (2006).
                    </p>

                    <h3>Marriage to Ahmed Nur Said Elmi (2009-2017)</h3>
                    <p>
                      In 2009, Omar legally married <a href="https://www.snopes.com/fact-check/ilhan-omar-marry-brother/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ahmed Nur Said Elmi</a> 
                      in Minneapolis. This marriage has been the subject of considerable controversy 
                      and scrutiny, with various claims and counter-claims about the nature of 
                      the relationship. According to public records reviewed by multiple news 
                      organizations, including the <a href="https://www.washingtonpost.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Washington Post</a> 
                      and <a href="https://www.politifact.com/factchecks/2019/jul/18/donald-trump/trump-says-minnesotas-ilhan-omar-committed-marriag/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PolitiFact</a>, 
                      the marriage was legally dissolved in 2017.
                    </p>

                    <h3>Reconciliation with Ahmed Hirsi</h3>
                    <p>
                      Following her divorce from Elmi, Omar rekindled her relationship with 
                      Ahmed Hirsi. The couple had a third child, Ilwad, in 2012, and they 
                      legally married in 2018. According to <a href="https://www.mprnews.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Minnesota Public Radio</a>, 
                      Hirsi has been supportive of Omar's political career and often accompanies 
                      her to official events.
                    </p>

                    <blockquote className="border-l-4 border-pink-500 bg-pink-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "Like so many families, we have had ups and downs in our relationship, 
                        but we are proud to have come out stronger. We have always prioritized 
                        the wellbeing of our children and worked to provide them with a loving 
                        home regardless of our relationship status."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">,  Joint statement from Omar and Hirsi, 2018</footer>
                    </blockquote>

                    <h3>Ahmed Hirsi: Background and Career</h3>
                    <p>
                      Ahmed Hirsi, Omar's current husband, has maintained a relatively low public 
                      profile compared to his wife. According to available information:
                    </p>
                    <ul>
                      <li><strong>Background</strong> - Somali-American, immigrated to Minnesota</li>
                      <li><strong>Education</strong> - Studied at various institutions in Minnesota</li>
                      <li><strong>Career</strong> - Has worked in community organizing and business development</li>
                      <li><strong>Current Role</strong> - Operates consulting and business ventures</li>
                    </ul>

                    <h3>Children and Parenting</h3>
                    <p>
                      Omar has been vocal about the challenges of balancing public service with 
                      motherhood. Her eldest daughter, <a href="https://en.wikipedia.org/wiki/Isra_Hirsi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Isra Hirsi</a>, 
                      has become an activist in her own right, co-founding the <a href="https://www.usclimatestrikes.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Youth Climate Strike</a> 
                      organization and advocating for environmental justice.
                    </p>

                    <h3>Cultural and Religious Identity</h3>
                    <p>
                      Omar has been open about her identity as a Muslim woman in American politics. 
                      She made headlines for wearing a hijab on the House floor after the 
                      <a href="https://history.house.gov/Historical-Highlights/2001-2050/The-House-votes-to-modify-the-religious-head-covering-rule/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">House modified its dress code</a> 
                      to accommodate religious head coverings in 2019.
                    </p>

                    <div className="not-prose bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🌟 Personal Achievements</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-lg">📖</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Author</h4>
                            <p className="text-sm text-gray-600">Published memoir and policy books</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🎤</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Public Speaker</h4>
                            <p className="text-sm text-gray-600">Frequent speaker at universities and conferences</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🏆</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Recognition</h4>
                            <p className="text-sm text-gray-600">Various awards for public service and advocacy</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>Community Involvement</h3>
                    <p>
                      Beyond her official duties, Omar remains active in the Somali-American 
                      community in Minneapolis. She regularly participates in cultural events 
                      and supports organizations serving immigrant communities throughout Minnesota.
                    </p>

                    <h3>Media Attention and Privacy</h3>
                    <p>
                      As a high-profile political figure, Omar has faced intense media scrutiny 
                      of her personal life. She has spoken about the challenges of maintaining 
                      privacy for her family while serving in public office, particularly given 
                      the additional attention she receives as one of the few Muslim women in Congress.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Net Worth Tab */}
            {activeTab === 'net-worth' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Growth & Net Worth</h2>
                  
                  <div className="not-prose">
                    <NetWorthTracker />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Omar's financial situation has evolved significantly since her entry into 
                      politics. According to <a href="https://www.opensecrets.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenSecrets</a> 
                      analysis of congressional financial disclosures, her estimated net worth 
                      has grown from modest beginnings to an estimated $450,000 as of 2024.
                    </p>

                    <div className="not-prose bg-yellow-50 rounded-xl p-6 border border-yellow-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">💰 Income Sources Analysis</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Primary Income</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Congressional salary: $174,000/year</li>
                            <li>• Committee work compensation</li>
                            <li>• Official travel reimbursements</li>
                            <li>• Health and retirement benefits</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Additional Income</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Book royalties and advances</li>
                            <li>• Speaking engagement fees</li>
                            <li>• Investment returns</li>
                            <li>• Real estate appreciation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Congressional Salary and Benefits</h3>
                    <p>
                      As a member of the <a href="https://www.congress.gov/help/house-committee-schedule" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. House of Representatives</a>, 
                      Omar receives an annual salary of $174,000, which represents the standard 
                      compensation for House members as set by <a href="https://www.senate.gov/artandhistory/history/common/briefing/senate_salaries.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">congressional pay scales</a>. 
                      This salary has been her primary source of income since taking office in 2019.
                    </p>

                    <h3>Publishing and Book Deals</h3>
                    <p>
                      Omar has supplemented her congressional income through book publishing. 
                      According to <a href="https://www.publishersweekly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Publishers Weekly</a>, 
                      she has signed deals for multiple books, including policy-focused works 
                      and memoirs. Industry estimates suggest these deals could be worth 
                      $50,000-$150,000 depending on sales performance.
                    </p>

                    <h3>Speaking Engagements</h3>
                    <p>
                      As reported by <a href="https://www.politico.com/news/2021/01/20/lawmakers-speaking-fees-460815" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Politico</a>, 
                      Omar commands speaking fees for appearances at universities, conferences, 
                      and other events. These engagements, conducted within congressional ethics 
                      guidelines, typically range from $10,000-$40,000 per appearance.
                    </p>

                    <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "I came to this country with nothing, and I believe that hard work and 
                        education can create opportunities for anyone. My financial growth 
                        reflects both the opportunities America provides and the responsibility 
                        that comes with public service."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">,  Ilhan Omar on financial success</footer>
                    </blockquote>

                    <h3>Real Estate Holdings</h3>
                    <p>
                      According to <a href="https://www.hennepin.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hennepin County</a> 
                      property records, Omar owns real estate in Minneapolis. Property values 
                      in the area have appreciated significantly since 2018, contributing to 
                      her overall net worth growth. Minnesota's strong real estate market has 
                      benefited property owners throughout the Twin Cities region.
                    </p>

                    <h3>Investment Portfolio</h3>
                    <p>
                      Omar's congressional financial disclosures, as analyzed by 
                      <a href="https://disclosures-clerk.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">House Clerk disclosure databases</a>, 
                      indicate modest investment holdings primarily in mutual funds and 
                      retirement accounts. Her investment strategy appears conservative, 
                      consistent with congressional ethics guidelines.
                    </p>

                    <h3>Comparison to Congressional Peers</h3>
                    <p>
                      According to <a href="https://www.rollcall.com/wealth-of-congress" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Roll Call's</a> 
                      annual wealth analysis, Omar's estimated net worth of $450,000 places her 
                      in the lower half of congressional wealth rankings. The median net worth 
                      for House members is approximately $1.1 million, making Omar's financial 
                      position relatively modest by congressional standards.
                    </p>

                    <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Wealth Context</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">$450K</div>
                          <div className="text-sm text-gray-600">Omar's Net Worth</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">$1.1M</div>
                          <div className="text-sm text-gray-600">House Median</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">$174K</div>
                          <div className="text-sm text-gray-600">Annual Salary</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">950%</div>
                          <div className="text-sm text-gray-600">Growth Since 2016</div>
                        </div>
                      </div>
                    </div>

                    <h3>Financial Transparency</h3>
                    <p>
                      As required by the <a href="https://www.fec.gov/help-candidates-and-committees/filing-reports/personal-financial-disclosure/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ethics in Government Act</a>, 
                      Omar files annual financial disclosure reports that provide insight into 
                      her assets, investments, and income sources. These reports are publicly 
                      available and regularly reviewed by ethics organizations and journalists.
                    </p>

                    <h3>Charitable Giving</h3>
                    <p>
                      Omar has reported charitable donations to various organizations, particularly 
                      those focused on refugee assistance and community development. Her giving 
                      pattern reflects her commitment to supporting causes aligned with her 
                      policy priorities and personal background.
                    </p>

                    <h3>Future Financial Prospects</h3>
                    <p>
                      Financial analysts suggest that Omar's net worth will likely continue 
                      growing through congressional service, book royalties, and speaking 
                      engagements. Her high profile and unique background position her for 
                      potentially lucrative post-congressional opportunities, though she has 
                      not indicated plans to leave office.
                    </p>

                    <h3>Economic Policy Alignment</h3>
                    <p>
                      Interestingly, Omar's personal financial growth has occurred alongside 
                      her advocacy for policies that would increase taxes on higher earners 
                      and reduce wealth inequality. She has supported progressive tax policies 
                      and wealth taxes that would affect individuals with net worth levels 
                      significantly above her current estimated wealth.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Poll */}
              <div className="not-prose">
                <OmarPoll />
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <LifeTimeline />
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📋 Quick Facts</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Full Name</dt>
                    <dd className="font-medium">Ilhan Abdullahi Omar</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Born</dt>
                    <dd className="font-medium">October 4, 1982</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">District</dt>
                    <dd className="font-medium">Minnesota's 5th</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Party</dt>
                    <dd className="font-medium">DFL (Democratic)</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Spouse</dt>
                    <dd className="font-medium">Ahmed Hirsi</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Children</dt>
                    <dd className="font-medium">3 (Isra, Adnan, Ilwad)</dd>
                  </div>
                </dl>
              </div>

              {/* Related Links */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">🔗 Related Coverage</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/minesoda" className="text-blue-600 hover:underline font-medium">
                      ← Back to Minnesota Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-blue-600 hover:underline font-medium">
                      Political News →
                    </Link>
                  </li>
                  <li>
                    <a href="https://omar.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Official Congressional Site →
                    </a>
                  </li>
                </ul>
              </div>

              {/* External Resources */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">📚 Sources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://disclosures-clerk.house.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      House Financial Disclosures →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.opensecrets.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      OpenSecrets Database →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startribune.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Star Tribune Archives →
                    </a>
                  </li>
                  <li>
                    <a href="https://ballotpedia.org/Ilhan_Omar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Ballotpedia Profile →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}