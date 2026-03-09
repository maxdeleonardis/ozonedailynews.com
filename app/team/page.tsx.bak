import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Our Team | ObjectWire",
  description: "Meet the ObjectWire editorial team. Our journalists, analysts, and contributors are dedicated to delivering verified, source-cited intelligence.",
  alternates: {
    canonical: 'https://www.objectwire.org/team',
  },
  openGraph: {
    title: "Our Team | ObjectWire",
    description: "Meet the journalists and analysts behind ObjectWire's precision intelligence reporting.",
  },
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  expertise: string[];
  education: string;
  experience: string;
  email: string;
  twitter?: string;
  linkedin?: string;
  articles?: number;
  skinTone: 'light' | 'medium' | 'dark';
  hairColor: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'conan-doyle',
    name: 'Conan Doyle',
    role: 'Technology Editor & Lead Developer',
    location: 'Austin, Texas',
    bio: `Conan Doyle is a seasoned technology journalist and full-stack developer with over a decade of experience at the intersection of software engineering and tech reporting. Before joining ObjectWire, Conan worked as a senior developer at multiple Austin-based startups, giving him firsthand insight into the technology he now covers.

His unique background allows him to break down complex technical topics—from AI infrastructure to blockchain protocols—into accessible, accurate reporting. Conan specializes in deep-dive investigations into emerging technologies, startup ecosystems, and the business of software development.

When not writing or coding, Conan contributes to open-source projects and mentors aspiring developers through Austin's tech community programs.`,
    expertise: ['Software Development', 'AI & Machine Learning', 'Startup Analysis', 'Blockchain Technology', 'Cloud Infrastructure'],
    education: 'B.S. Computer Science, University of Texas at Austin',
    experience: '12+ years in technology and journalism',
    email: 'conan@objectwire.com',
    twitter: 'conan_doyle_ow',
    linkedin: 'conandoyle-objectwire',
    articles: 47,
    skinTone: 'light',
    hairColor: '#4A3728',
  },
  {
    id: 'jack-sterling',
    name: 'Jack Sterling',
    role: 'Financial Markets Analyst',
    location: 'Dallas, Texas',
    bio: `Jack Sterling brings Wall Street expertise to ObjectWire's financial coverage. A former proprietary trader with experience at major financial institutions, Jack now applies his market acumen to investigative financial journalism.

With a background spanning equities, derivatives, and cryptocurrency markets, Jack provides unique insights into market movements, corporate financial health, and investment trends. His analysis combines quantitative rigor with accessible explanations, making complex financial topics understandable without sacrificing accuracy.

Jack's reporting has uncovered market manipulation schemes, analyzed major corporate acquisitions, and provided early warnings on economic shifts. He is particularly focused on how technological disruption is reshaping traditional financial markets.

Based in Dallas's thriving financial district, Jack maintains connections across the investment community while adhering to strict ethical guidelines regarding conflicts of interest.`,
    expertise: ['Financial Markets', 'Trading & Investment', 'Cryptocurrency', 'Corporate Finance', 'Economic Analysis', 'Fraud Investigations'],
    education: 'MBA Finance, Southern Methodist University; B.A. Economics, Howard University',
    experience: '15+ years in finance and financial journalism',
    email: 'jack@objectwire.com',
    twitter: 'jacksterling_ow',
    linkedin: 'jacksterling-objectwire',
    articles: 63,
    skinTone: 'dark',
    hairColor: '#1a1a1a',
  },
];

// Animated Avatar Component
function AnimatedAvatar({ member }: { member: TeamMember }) {
  const skinColors = {
    light: { base: '#F5D0C5', shadow: '#E8B4A6' },
    medium: { base: '#D4A574', shadow: '#C4956A' },
    dark: { base: '#8D5524', shadow: '#6B4423' },
  };

  const skin = skinColors[member.skinTone];

  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="2" />
        
        {/* Neck */}
        <path
          d="M 40 75 Q 40 85 35 95 L 65 95 Q 60 85 60 75"
          fill={skin.base}
        />
        
        {/* Shirt/Collar */}
        <path
          d="M 25 95 Q 35 85 50 82 Q 65 85 75 95 L 75 100 L 25 100 Z"
          fill="#374151"
        />
        <path
          d="M 45 82 L 50 90 L 55 82"
          fill="white"
          stroke="white"
          strokeWidth="1"
        />
        
        {/* Head */}
        <ellipse
          cx="50"
          cy="50"
          rx="28"
          ry="32"
          fill={skin.base}
        >
          <animate
            attributeName="cy"
            values="50;49;50"
            dur="3s"
            repeatCount="indefinite"
          />
        </ellipse>
        
        {/* Hair */}
        <path
          d={member.skinTone === 'dark' 
            ? "M 22 45 Q 22 20 50 18 Q 78 20 78 45 Q 75 35 50 33 Q 25 35 22 45"
            : "M 22 48 Q 20 22 50 18 Q 80 22 78 48 Q 78 30 50 28 Q 22 30 22 48"
          }
          fill={member.hairColor}
        >
          <animate
            attributeName="d"
            values={member.skinTone === 'dark'
              ? "M 22 45 Q 22 20 50 18 Q 78 20 78 45 Q 75 35 50 33 Q 25 35 22 45;M 22 46 Q 22 21 50 19 Q 78 21 78 46 Q 75 36 50 34 Q 25 36 22 46;M 22 45 Q 22 20 50 18 Q 78 20 78 45 Q 75 35 50 33 Q 25 35 22 45"
              : "M 22 48 Q 20 22 50 18 Q 80 22 78 48 Q 78 30 50 28 Q 22 30 22 48;M 22 49 Q 20 23 50 19 Q 80 23 78 49 Q 78 31 50 29 Q 22 31 22 49;M 22 48 Q 20 22 50 18 Q 80 22 78 48 Q 78 30 50 28 Q 22 30 22 48"
            }
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Ears */}
        <ellipse cx="22" cy="52" rx="5" ry="7" fill={skin.base} />
        <ellipse cx="78" cy="52" rx="5" ry="7" fill={skin.base} />
        
        {/* Eyes */}
        <g>
          {/* Left Eye */}
          <ellipse cx="38" cy="50" rx="6" ry="4" fill="white" />
          <circle cx="38" cy="50" r="3" fill="#374151">
            <animate
              attributeName="cx"
              values="38;39;38;37;38"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="39" cy="49" r="1" fill="white" />
          
          {/* Right Eye */}
          <ellipse cx="62" cy="50" rx="6" ry="4" fill="white" />
          <circle cx="62" cy="50" r="3" fill="#374151">
            <animate
              attributeName="cx"
              values="62;63;62;61;62"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="63" cy="49" r="1" fill="white" />
          
          {/* Blink Animation */}
          <rect x="32" y="46" width="12" height="8" fill={skin.base}>
            <animate
              attributeName="height"
              values="0;0;0;0;0;0;0;0;0;8;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="56" y="46" width="12" height="8" fill={skin.base}>
            <animate
              attributeName="height"
              values="0;0;0;0;0;0;0;0;0;8;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        
        {/* Eyebrows */}
        <path
          d="M 32 42 Q 38 40 44 42"
          stroke={member.hairColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 56 42 Q 62 40 68 42"
          stroke={member.hairColor}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Nose */}
        <path
          d="M 50 48 Q 52 56 50 60 Q 47 58 46 60"
          stroke={skin.shadow}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Mouth - Slight Smile */}
        <path
          d="M 42 68 Q 50 73 58 68"
          stroke="#9B6B5A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M 42 68 Q 50 73 58 68;M 42 69 Q 50 74 58 69;M 42 68 Q 50 73 58 68"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      
      {/* Status Indicator */}
      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="mb-16 pb-8 border-b border-gray-200 text-center">
          <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider">OUR TEAM</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ObjectWire's editorial team combines deep industry expertise with rigorous journalistic standards. 
            Every story is verified, every source is cited, every claim is documented.
          </p>
        </header>

        {/* Team Grid */}
        <div className="space-y-20">
          {teamMembers.map((member) => (
            <article 
              key={member.id} 
              id={member.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                {/* Avatar & Quick Info */}
                <div className="md:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-center">
                  <AnimatedAvatar member={member} />
                  
                  <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">📍 {member.location}</p>
                  
                  {/* Stats */}
                  <div className="flex justify-center gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{member.articles}</p>
                      <p className="text-xs text-gray-500">Articles</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{member.experience.split(' ')[0]}</p>
                      <p className="text-xs text-gray-500">Years Exp.</p>
                    </div>
                  </div>
                  
                  {/* Contact Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                    >
                      Contact
                    </a>
                    {member.twitter && (
                      <a 
                        href={`https://twitter.com/${member.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 text-sm rounded hover:border-black transition-colors"
                      >
                        𝕏
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 text-sm rounded hover:border-black transition-colors"
                      >
                        in
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Bio & Details */}
                <div className="md:w-2/3 p-8">
                  {/* Bio */}
                  <div className="mb-8">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 tracking-wider">BIOGRAPHY</h3>
                    {member.bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Expertise */}
                  <div className="mb-6">
                    <h3 className="text-sm font-mono text-gray-400 mb-3 tracking-wider">EXPERTISE</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education & Experience */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-mono text-gray-400 mb-2 tracking-wider">EDUCATION</h3>
                      <p className="text-gray-700">{member.education}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-mono text-gray-400 mb-2 tracking-wider">EXPERIENCE</h3>
                      <p className="text-gray-700">{member.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Join Us Section */}
        <section className="mt-20 text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            We're always looking for talented journalists, analysts, and investigators 
            who share our commitment to accuracy and transparency.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </section>

        {/* Editorial Standards Link */}
        <section className="mt-12 text-center">
          <p className="text-gray-500">
            All ObjectWire contributors adhere to our{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:underline">
              Editorial Standards
            </Link>
            {' '}and{' '}
            <Link href="/corrections" className="text-blue-600 hover:underline">
              Corrections Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
