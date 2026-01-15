'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// Interactive Poll Component
function BoxOfficePoll() {
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({
    'under1.5b': 12,
    '1.5to2b': 28,
    '2to2.5b': 35,
    'over2.5b': 25,
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
    { key: 'under1.5b', label: 'Under $1.5 billion' },
    { key: '1.5to2b', label: '$1.5 - $2 billion' },
    { key: '2to2.5b', label: '$2 - $2.5 billion' },
    { key: 'over2.5b', label: 'Over $2.5 billion' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 my-8">
      <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Reader Poll: Final Box Office Prediction</h3>
      <p className="text-gray-600 text-sm mb-4">Where do you think Avatar: Fire and Ash will end its theatrical run?</p>
      <div className="space-y-3">
        {options.map(({ key, label }) => {
          const percentage = Math.round((votes[key as keyof typeof votes] / totalVotes) * 100);
          return (
            <button
              key={key}
              onClick={() => handleVote(key)}
              disabled={voted}
              className={`w-full text-left p-3 rounded-lg border transition-all relative overflow-hidden ${
                selected === key 
                  ? 'border-blue-500 bg-blue-100' 
                  : voted 
                    ? 'border-gray-200 bg-white' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {voted && (
                <div 
                  className="absolute inset-0 bg-blue-100 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              )}
              <div className="relative flex justify-between items-center">
                <span className="font-medium text-gray-800">{label}</span>
                {voted && <span className="text-blue-600 font-bold">{percentage}%</span>}
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

// Interactive Timeline Component
function ProductionTimeline() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  
  const events = [
    { 
      year: '2010', 
      title: 'Sequels Announced', 
      description: 'Following the massive success of Avatar (2009), James Cameron announces plans for two sequels.',
      icon: '📢'
    },
    { 
      year: '2013', 
      title: 'Expanded to 4 Sequels', 
      description: 'Cameron reveals Avatar will become a 5-film saga, with sequels 2 and 3 filming simultaneously.',
      icon: '🎬'
    },
    { 
      year: '2017', 
      title: 'Production Begins', 
      description: 'Principal photography starts in Wellington, New Zealand on September 25, 2017. Underwater performance capture technology debuts.',
      icon: '🎥'
    },
    { 
      year: '2020', 
      title: 'Filming Wraps', 
      description: 'After over 3 years of shooting and COVID-19 delays, principal photography completes in December 2020.',
      icon: '✅'
    },
    { 
      year: '2022', 
      title: 'Way of Water Released', 
      description: 'Avatar: The Way of Water releases, earning $2.32 billion worldwide and validating the franchise.',
      icon: '🌊'
    },
    { 
      year: '2024', 
      title: 'Jon Landau Passes', 
      description: 'Beloved producer Jon Landau dies. Fire and Ash is dedicated to his memory.',
      icon: '🕯️'
    },
    { 
      year: '2025', 
      title: 'Fire and Ash Premiere', 
      description: 'World premiere at Dolby Theatre, Hollywood on December 1, 2025. Wide release December 19.',
      icon: '🎉'
    },
  ];

  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Production Timeline</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="relative pl-20 cursor-pointer group"
              onMouseEnter={() => setActiveEvent(index)}
              onMouseLeave={() => setActiveEvent(null)}
            >
              {/* Year bubble */}
              <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                activeEvent === index 
                  ? 'bg-blue-600 scale-110 shadow-lg' 
                  : 'bg-gray-100 group-hover:bg-blue-100'
              }`}>
                {event.icon}
              </div>
              
              <div className={`bg-white rounded-lg border p-4 transition-all duration-300 ${
                activeEvent === index 
                  ? 'border-blue-400 shadow-lg' 
                  : 'border-gray-200 group-hover:border-blue-200'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-blue-600">{event.year}</span>
                  <h4 className="font-semibold text-gray-900">{event.title}</h4>
                </div>
                <p className={`text-gray-600 text-sm transition-all duration-300 ${
                  activeEvent === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:max-h-40 md:opacity-100'
                }`}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Cast Reveal Component
function CastGrid() {
  const [revealedCast, setRevealedCast] = useState<Set<number>>(new Set());
  
  const cast = [
    { name: 'Sam Worthington', role: 'Jake Sully', character: 'Human-turned-Na\'vi leader of the Omatikaya clan', image: '👨‍🚀' },
    { name: 'Zoe Saldaña', role: 'Neytiri', character: 'Na\'vi warrior, grieving mother, and Jake\'s mate', image: '🏹' },
    { name: 'Sigourney Weaver', role: 'Kiri', character: 'Adopted teenage daughter of Jake and Neytiri', image: '🌿' },
    { name: 'Stephen Lang', role: 'Colonel Miles Quaritch', character: 'Recombinant villain hunting the Sully family', image: '⚔️' },
    { name: 'Kate Winslet', role: 'Ronal', character: 'Free-diver leader of the Metkayina reef people', image: '🌊' },
    { name: 'Oona Chaplin', role: 'Varang', character: 'Leader of the Mangkwan, the "Ash People" tribe', image: '🔥' },
  ];

  const revealAll = () => {
    setRevealedCast(new Set(cast.map((_, i) => i)));
  };

  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Main Cast</h3>
        <button 
          onClick={revealAll}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Reveal All →
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cast.map((member, index) => (
          <div
            key={index}
            onClick={() => setRevealedCast(prev => new Set([...prev, index]))}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
              revealedCast.has(index) ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="p-6 text-center">
              <div className="text-5xl mb-3">{member.image}</div>
              <h4 className={`font-bold ${revealedCast.has(index) ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h4>
              <p className={`text-sm font-medium ${revealedCast.has(index) ? 'text-blue-200' : 'text-gray-500'}`}>
                as {member.role}
              </p>
              {revealedCast.has(index) && (
                <p className="text-xs text-white/80 mt-2 animate-fadeIn">
                  {member.character}
                </p>
              )}
              {!revealedCast.has(index) && (
                <p className="text-xs text-gray-400 mt-2">Click to reveal</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Box Office Tracker Component
function BoxOfficeTracker() {
  const milestones = [
    { amount: 100, label: '$100M', reached: true },
    { amount: 250, label: '$250M', reached: true },
    { amount: 500, label: '$500M', reached: true },
    { amount: 750, label: '$750M', reached: true },
    { amount: 1000, label: '$1B', reached: true },
    { amount: 1235, label: '$1.235B', reached: true, current: true },
    { amount: 1500, label: '$1.5B', reached: false },
    { amount: 2000, label: '$2B', reached: false },
  ];

  const currentAmount = 1235;
  const maxAmount = 2000;
  const progress = (currentAmount / maxAmount) * 100;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 my-8">
      <h3 className="font-bold text-lg text-gray-900 mb-2">💰 Global Box Office Tracker</h3>
      <p className="text-3xl font-bold text-green-600 mb-4">$1.235 Billion</p>
      
      {/* Progress bar */}
      <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000 rounded-full"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white drop-shadow">{Math.round(progress)}% to $2B</span>
        </div>
      </div>

      {/* Milestones */}
      <div className="flex justify-between text-xs">
        {milestones.filter((_, i) => i % 2 === 0).map((milestone, index) => (
          <div key={index} className={`text-center ${milestone.reached ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${
              milestone.current ? 'bg-green-500 ring-4 ring-green-200' : milestone.reached ? 'bg-green-500' : 'bg-gray-300'
            }`} />
            {milestone.label}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-green-200 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Domestic</p>
          <p className="font-bold text-gray-900">$412M</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">International</p>
          <p className="font-bold text-gray-900">$823M</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Rank (2025)</p>
          <p className="font-bold text-gray-900">#3</p>
        </div>
      </div>
    </div>
  );
}

// FAQ Accordion
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'When was Avatar: Fire and Ash released?',
      answer: 'Avatar: Fire and Ash had its world premiere at Dolby Theatre in Hollywood on December 1, 2025, and was released widely in the United States on December 19, 2025.'
    },
    {
      question: 'How long is Avatar 3?',
      answer: 'The film has a runtime of 197 minutes (3 hours and 17 minutes), slightly shorter than The Way of Water\'s 192 minutes theatrical cut.'
    },
    {
      question: 'Who are the Mangkwan (Ash People)?',
      answer: 'The Mangkwan, also known as the "Ash People," are a tribe of Na\'vi who have allied with the human RDA forces. Led by Varang (Oona Chaplin), they serve as antagonists alongside Colonel Quaritch.'
    },
    {
      question: 'Is Jon Landau involved in the film?',
      answer: 'Producer Jon Landau was heavily involved in production before his death in 2024. The film is dedicated to his memory, along with editor John Refoua who passed in 2023.'
    },
    {
      question: 'Will there be more Avatar sequels?',
      answer: 'Yes, Avatar 4 is planned for 2029 and Avatar 5 for 2031, though Cameron has stated their production depends on the box office performance of Fire and Ash.'
    },
    {
      question: 'What is the production budget?',
      answer: 'Avatar: Fire and Ash had an estimated production budget of $350-400 million, making it one of the most expensive films ever made.'
    },
  ];

  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className={`text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AvatarFireAndAshPage() {
  // Structured data for Google News / SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Avatar: Fire and Ash - Complete Guide to James Cameron's Epic Third Installment",
    "description": "Everything you need to know about Avatar 3: Fire and Ash. Box office performance, cast, plot details, and production history of James Cameron's 2025 sci-fi epic.",
    "image": "https://objectwire.org/images/avatar-fire-and-ash.jpg",
    "datePublished": "2025-12-20T08:00:00+00:00",
    "dateModified": "2026-01-14T12:00:00+00:00",
    "author": {
      "@type": "Organization",
      "name": "ObjectWire",
      "url": "https://objectwire.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ObjectWire",
      "logo": {
        "@type": "ImageObject",
        "url": "https://objectwire.org/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://objectwire.org/james-cameron/avatar-fire-and-ash"
    },
    "about": {
      "@type": "Movie",
      "name": "Avatar: Fire and Ash",
      "director": {
        "@type": "Person",
        "name": "James Cameron"
      },
      "datePublished": "2025-12-19"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://objectwire.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "James Cameron",
        "item": "https://objectwire.org/james-cameron"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Avatar: Fire and Ash",
        "item": "https://objectwire.org/james-cameron/avatar-fire-and-ash"
      }
    ]
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-white" itemScope itemType="https://schema.org/NewsArticle">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-orange-600 via-red-600 to-purple-800 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative container mx-auto px-4 py-16 max-w-5xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-orange-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/james-cameron" className="hover:text-white">James Cameron</Link></li>
                <li>/</li>
                <li className="text-white">Avatar: Fire and Ash</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Film Analysis
              </span>
              <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                Updated Jan 14, 2026
              </span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              itemProp="headline"
            >
              Avatar: Fire and Ash
              <span className="block text-2xl md:text-3xl font-normal text-orange-200 mt-2">
                Complete Guide to James Cameron's Epic Third Installment
              </span>
            </h1>

            <p className="text-xl text-orange-100 max-w-3xl mb-8" itemProp="description">
              The third chapter in the Avatar saga introduces the terrifying Mangkwan tribe, 
              explores Neytiri's grief-driven rage, and has already grossed $1.235 billion worldwide. 
              Here's everything you need to know.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-orange-200">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <time itemProp="datePublished" dateTime="2025-12-20">December 20, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✍️</span>
                <span itemProp="author">ObjectWire Entertainment Desk</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Body */}
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              
              {/* Quick Facts Box */}
              <div className="not-prose bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
                <h2 className="font-bold text-lg text-gray-900 mb-4">📋 Quick Facts</h2>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-gray-500">Director</dt>
                    <dd className="font-semibold">James Cameron</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Release Date</dt>
                    <dd className="font-semibold">December 19, 2025</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Runtime</dt>
                    <dd className="font-semibold">197 minutes</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Budget</dt>
                    <dd className="font-semibold">$350-400 million</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Box Office</dt>
                    <dd className="font-semibold text-green-600">$1.235 billion</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">2025 Rank</dt>
                    <dd className="font-semibold">#3 Worldwide</dd>
                  </div>
                </dl>
              </div>

              <h2>Overview</h2>
              <p>
                <strong>Avatar: Fire and Ash</strong> is a 2025 American epic science fiction film directed by 
                <Link href="/james-cameron" className="text-blue-600 hover:underline"> James Cameron</Link>, 
                who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with 
                Josh Friedman and Shane Salerno. Distributed by <a href="https://en.wikipedia.org/wiki/20th_Century_Studios" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">20th Century Studios</a> and produced by 
                Lightstorm Entertainment, it is the sequel to <em>Avatar: The Way of Water</em> (2022) and the 
                third installment in the <em>Avatar</em> film series.
              </p>

              <p>
                The film follows the human-turned-Na'vi Jake Sully (Sam Worthington) and his family on the moon 
                Pandora, as they face the combined threat of the human RDA forces and the <strong>Mangkwan</strong>, 
                a tribe of savage, warmongering, collaborationist Na'vi known as the "Ash People."
              </p>

              <div className="not-prose">
                <BoxOfficeTracker />
              </div>

              <h2>Plot Summary</h2>
              <p>
                Shortly after settling in with the Metkayina reef people, Jake Sully and his family continue to 
                grieve over Neteyam's death. Neytiri has developed a consuming hatred toward humans that 
                threatens to tear the family apart and potentially ignite a larger conflict.
              </p>

              <p>
                When the <a href="https://james-camerons-avatar.fandom.com/wiki/Resources_Development_Administration" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RDA forces</a> return with a new ally, the Mangkwan (a volcanic-region tribe of Na'vi who 
                have chosen to collaborate with humans), Jake must unite the scattered clans of <a href="https://en.wikipedia.org/wiki/Pandora_(Avatar)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pandora</a> against 
                enemies both human and Na'vi.
              </p>

              <blockquote className="border-l-4 border-orange-500 bg-orange-50 p-4 my-6">
                <p className="text-gray-700 italic">
                  "Fire and Ash takes everything we love about Pandora and sets it ablaze. This isn't just a 
                  sequel. It's a reckoning."
                </p>
                <footer className="text-sm text-gray-500 mt-2">— Cameron at the world premiere</footer>
              </blockquote>

              <div className="not-prose">
                <CastGrid />
              </div>

              <h2>Production History</h2>
              <p>
                Cameron, who had stated in mid-2006 that he would like to make sequels to <em>Avatar</em> (2009) 
                if it was successful, announced the first two sequels in early 2010 following the success of 
                the first film, with the then-untitled Avatar 3 aiming for a December 2015 release.
              </p>

              <p>
                However, the addition of two more sequels (four in total), and the development of new <a href="https://en.wikipedia.org/wiki/Motion_capture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">performance capture technology</a> 
                required to film scenes underwater (a feat never accomplished before) led to 
                significant delays to allow the crew more time to work on the writing, pre-production, and 
                <a href="https://en.wikipedia.org/wiki/Weta_Digital" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">visual effects</a>.
              </p>

              <p>
                Avatar: Fire and Ash started shooting simultaneously with The Way of Water in <a href="https://en.wikipedia.org/wiki/Wellington" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wellington, New Zealand</a> on September 25, 2017. Filming completed in late December 2020, after over three 
                years of shooting. With an estimated production budget of at least <a href="https://www.boxofficemojo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">$350 million</a>, it is one of 
                the most expensive films ever made.
              </p>

              <div className="not-prose">
                <ProductionTimeline />
              </div>

              <h2>Box Office Performance</h2>
              <p>
                As of January 2026, Avatar: Fire and Ash has grossed <strong>$1.235 billion</strong> worldwide, 
                ranking as the <strong>third-highest grossing film of 2025</strong> and the 29th highest-grossing 
                film of all time. The film opened to $412 million domestically and $823 million internationally.
              </p>

              <p>
                While these numbers are impressive by any standard, they fall short of <a href="https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Way of Water's</a> 
                $2.32 billion total, leading to speculation about the future of Avatar 4 and Avatar 5. <a href="https://www.imdb.com/name/nm0000116/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cameron</a> 
                has maintained that the sequels will proceed as planned, though production schedules may be 
                adjusted.
              </p>

              <div className="not-prose">
                <BoxOfficePoll />
              </div>

              <h2>Critical Reception</h2>
              <p>
                Fire and Ash received generally positive reviews from critics, who praised the <a href="https://en.wikipedia.org/wiki/Visual_effects" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">visual effects</a> 
                but offered mixed opinions on the plot. The film was named among the top ten films of 2025 by 
                both the <a href="https://www.afi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Film Institute</a> and the <a href="https://nationalboardofreview.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Board of Review</a>, and received two <a href="https://goldenglobes.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Golden Globe Award</a> nominations.
              </p>

              <div className="not-prose bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">🎬 Review Aggregator Scores</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-500">78%</div>
                    <div className="text-sm text-gray-500">Rotten Tomatoes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-500">72</div>
                    <div className="text-sm text-gray-500">Metacritic</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-500">B+</div>
                    <div className="text-sm text-gray-500">CinemaScore</div>
                  </div>
                </div>
              </div>

              <h2>Future of the Franchise</h2>
              <p>
                Two further sequels, <strong>Avatar 4</strong> (planned for 2029) and <strong>Avatar 5</strong> (planned for 2031), are in 
                development. <a href="https://en.wikipedia.org/wiki/James_Cameron" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cameron</a> has indicated that the continuation of these films depends on the 
                box-office performance of Fire and Ash, though current earnings suggest the franchise 
                will continue.
              </p>

              <p>
                Cameron has also teased that Avatar 4 will introduce yet another biome of Pandora and 
                possibly explore the "dark side" of the Na'vi in ways that Fire and Ash only began to hint at.
              </p>

              <div className="not-prose">
                <FAQSection />
              </div>

              {/* Related Reading */}
              <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 mt-12">
                <h3 className="font-bold text-lg text-gray-900 mb-4">📚 Related Reading</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/james-cameron" className="text-blue-600 hover:underline font-medium">
                      James Cameron — Complete Filmmaker Profile →
                    </Link>
                  </li>
                  <li>
                    <Link href="/conan-doyle" className="text-blue-600 hover:underline font-medium">
                      Author Profile: Sir Arthur Conan Doyle →
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      Explore another legendary storyteller who shaped popular culture
                    </p>
                  </li>
                  <li>
                    <Link href="/news" className="text-blue-600 hover:underline font-medium">
                      Latest Entertainment News →
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Film Poster Card */}
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 border border-orange-200 text-center">
                  <div className="text-8xl mb-4">🔥</div>
                  <h3 className="font-bold text-gray-900">Avatar: Fire and Ash</h3>
                  <p className="text-sm text-gray-600">2025 • Sci-Fi Epic</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">PG-13</span>
                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">3h 17m</span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">IMAX</span>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">📖 In This Article</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Overview</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Plot Summary</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Main Cast</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Production History</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Box Office Performance</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Critical Reception</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">Future of the Franchise</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600">FAQ</a>
                  </nav>
                </div>

                {/* Author Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">✍️ About This Article</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Written by the ObjectWire Entertainment Desk. We provide verified, 
                    source-cited coverage of film and entertainment news.
                  </p>
                  <Link 
                    href="/editorial-standards" 
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Read our editorial standards →
                  </Link>
                </div>

                {/* Share Buttons */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">📤 Share This Article</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      Twitter
                    </button>
                    <button className="flex-1 bg-blue-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                      Facebook
                    </button>
                    <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Dedication Section */}
        <section className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">In Memoriam</p>
            <p className="text-xl mb-2">
              This film is dedicated to the memory of
            </p>
            <p className="text-2xl font-bold mb-1">Jon Landau</p>
            <p className="text-gray-400">(1960-2024)</p>
            <p className="text-xl font-bold mt-4 mb-1">John Refoua</p>
            <p className="text-gray-400">(1967-2023)</p>
          </div>
        </section>
      </article>
    </>
  );
}
