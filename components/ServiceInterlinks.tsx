import Link from 'next/link';

const ALL_SERVICES = [
  {
    href: '/austin-private-detective-agency',
    title: 'Austin Private Detective Agency',
    description: 'Digital forensics, background checks, and professional investigative services in Austin, TX.',
    icon: '🔍',
  },
  {
    href: '/service/surveillance',
    title: 'Surveillance Services',
    description: 'Covert surveillance for legal, domestic, and corporate cases with court-admissible documentation.',
    icon: '📡',
  },
  {
    href: '/service/infidelity',
    title: 'Infidelity Investigations',
    description: 'Confidential domestic investigations with compassionate, professional handling.',
    icon: '🔐',
  },
  {
    href: '/service/fact-finding-and-evidence-collection',
    title: 'Fact-Finding & Evidence Collection',
    description: 'Thorough investigation of personal injury, insurance fraud, property disputes, and criminal cases.',
    icon: '📋',
  },
  {
    href: '/service/asset-collection',
    title: 'Asset Collection & Documentation',
    description: 'Professional photography and videography for legal, insurance, and business documentation.',
    icon: '📷',
  },
  {
    href: '/service/photography-videography-austin-tx',
    title: 'Photography & Videography',
    description: 'Court-admissible visual documentation for investigative and legal purposes in Austin, TX.',
    icon: '🎥',
  },
  {
    href: '/service/press-release',
    title: 'Press Release & Distribution',
    description: 'Professional PR writing and media distribution services to get your story in front of major outlets.',
    icon: '📰',
  },
];

interface ServiceInterlinksProps {
  /** The current page's href — will be excluded from the list */
  currentPath: string;
  /** Optional: limit the number of services shown */
  limit?: number;
}

export default function ServiceInterlinks({ currentPath, limit }: ServiceInterlinksProps) {
  const otherServices = ALL_SERVICES.filter((s) => s.href !== currentPath);
  const displayed = limit ? otherServices.slice(0, limit) : otherServices;

  return (
    <section className="mt-12 pt-10 border-t-2 border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-black flex items-center justify-center rounded">
          <span className="text-white text-sm font-bold">O</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">More ObjectWire Services</h2>
          <p className="text-sm text-gray-500">Professional investigative & media services in Austin, TX</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayed.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group block bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-400 hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-3 block">{service.icon}</span>
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
              {service.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black transition-colors"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
}
