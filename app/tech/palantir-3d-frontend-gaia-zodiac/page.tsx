import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const dynamic = 'force-dynamic';

const SLUG = '/tech/palantir-3d-frontend-gaia-zodiac';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1614728263952-84ea256f9d4a?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Palantir 3D Frontend | Gaia, Zodiac, Three.js for DOD',
  description: 'Palantir engineers built Zodiac on Three.js to power 3D Gaia, rendering satellite orbits, defense operations, and intelligence objects in real time in a browser.',
  keywords: [
    'Palantir 3D frontend engineering',
    'Palantir Gaia 3D map',
    'Palantir Zodiac Three.js',
    'Palantir Gotham geospatial rendering',
    'Palantir frontend engineering blog',
    'Three.js defense intelligence visualization',
    'Palantir Foundry Ontology rendering',
    'Palantir satellite orbit visualization',
    'Palantir DOD browser rendering',
    '3D geospatial engineering',
    'Palantir WebGL performance',
    'Palantir Gaia satellite tracking',
    'Palantir frontend Lasse engineer',
    'Palantir Foundry map API',
    'creator football 2026',
    'Palantir engineering blog series 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Palantir 3D Frontend | Gaia, Zodiac & Three.js for DOD',
    description: 'Inside Palantir\'s 3D Gaia: how frontend engineers built Zodiac on Three.js to render satellite orbits, Starlink debris, and defense intelligence objects live in a browser.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-28T14:00:00Z',
    modifiedTime: '2026-04-28T14:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Palantir 3D Gaia geospatial rendering Zodiac Three.js' }],
    tags: ['Palantir', 'Three.js', 'Gaia', 'Frontend Engineering'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palantir Built a 3D Globe for the DOD Using Three.js',
    description: 'Zodiac renders satellites, near-misses, and defense ops in real time in a browser. Inside Palantir\'s 3D Gaia engineering.',
    images: [OG_IMAGE],
  },
};

export default function PalantirGaiaZodiacFrontendPage() {
  return (
    <NewsArticle
      title="Palantir 3D Frontend | Gaia, Zodiac, and Three.js for the DOD"
      subtitle="How Palantir engineers built a real-time 3D geospatial rendering engine for defense and intelligence operations using Three.js"
      category="Tech"
      categoryColor="blue"
      topicTag="technology"
      publishDate="April 28, 2026"
      readTime="7 min read"
      author={{ name: 'ObjectWire Tech Desk', slug: 'objectwire-tech-desk' }}
      tags={['Palantir', 'Three.js', 'Gaia', 'Frontend Engineering', 'DOD', 'WebGL']}
      thumbnail={{ src: OG_IMAGE, alt: 'Palantir 3D Gaia geospatial globe rendering' }}
      slug="tech-palantir-3d-frontend-gaia-zodiac"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Frontend engineering at Palantir goes far beyond building standard web apps. Engineers there design interfaces
          for mission-critical decision-making, build operational applications that translate insight into action, and
          create systems that handle massive datasets while accounting for unreliable networks, high stakes, and zero
          margin for error. A new blog series from Palantir pulls back the curtain on what that work actually looks like,
          and the most technically demanding piece so far is the company's 3D rendering engine for defense and intelligence
          operations.
        </p>

        <p>
          In the latest post in the series, Lasse, a frontend engineer based in New York, details the architecture behind
          <strong> 3D Gaia</strong>, Palantir's geospatial visualization layer inside{' '}
          <a href="https://www.palantir.com/platforms/gotham/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
            Gotham
          </a>. The work is powered by <strong>Zodiac</strong>, an internal library built on Three.js, and exposes the
          challenge of rendering anything and everything, from satellite orbits to intelligence objects, in a browser
          accessible to anyone in the Department of Defense.
        </p>

        <h2 id="why-3d">Why 3D | What Mercator Projection Cannot Show</h2>

        <p>
          Two-dimensional maps have a well-documented limitation: polar distortion. Mercator projections stretch landmasses
          near the poles, compress equatorial distances, and make satellite orbit paths appear curved when they are not.
          For Palantir's customers, that is not a cosmetic problem. It is an operational one.
        </p>

        <p>
          "3D introduces a new dimension for users to experience geospatial data," Lasse writes. "It allows users to gain
          a conceptual understanding of spaces as the real world will see it."
        </p>

        <p>
          Rendering objects at altitude, resolving polar distortion, and tracking objects in orbit all require a true 3D
          visualization of space. The use case Palantir cites directly: Starlink. The company contributes to hundreds of
          satellite launches annually, and Gaia users need to visualize near misses, orbit projections, and space debris
          in real time. A Mercator globe cannot do that faithfully.
        </p>

        <h2 id="zodiac-architecture">Zodiac Architecture | Three.js and the Foundry Serving Layer</h2>

        <p>
          The architecture behind 3D Gaia splits cleanly between backend and frontend. The backend handles data storage,
          filtering, and heavier computation. The frontend is responsible only for rendering: it receives simplified
          geometry and style information and does not need to know how the data was computed, only where to draw it and
          what it should look like.
        </p>

        <p>
          The client pulls generalized renderables from a Foundry-based map rendering API and renders them on the globe
          across every animation frame. The API accepts any object in a Foundry Ontology that carries a piece of location
          data, whether that is a point, a shape, or a styled element, and serves it up for display.
        </p>

        <p>
          The core rendering primitives Lasse shares are straightforward TypeScript interfaces:
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed not-prose my-8">
          <code>{`interface EarthLineItem {
  id?: string;
  points: LatLngHeight[];
  color?: string;
}

interface LineVisualProps {
  color?: string;
  lineWidth?: number;
  opacity?: number;
  dashed?: boolean;
}`}</code>
        </pre>

        <p>
          Those interfaces translate directly into a JSX component:
        </p>

        <pre className="bg-gray-950 text-gray-100 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed not-prose my-8">
          <code>{`<EarthLine
  points={[
    { lat: 40.7128, lng: -74.0060, height: 10_000 },
    { lat: 38.9072, lng: -77.0369, height: 10_000 },
  ]}
  color="#3b82f6"
  lineWidth={2}
/>`}</code>
        </pre>

        <p>
          From those building blocks, Palantir's engineers compose highly complex visualizations. High-density sets of
          lines can be aggregated using grouped geometries. Custom colors and styles can be applied dynamically. Visibility
          can be toggled based on time or other filters without rebuilding the geometry, which is where performance
          engineering becomes the core challenge.
        </p>

        <h2 id="performance-challenge">Performance at Scale | Dense Geometry in a DOD Browser</h2>

        <p>
          The term "render anything and everything" is not a casual marketing phrase at Palantir. In practice it means
          the rendering layer must handle hundreds of thousands of simultaneously visible objects, many of which are
          updating their positions every frame, all inside a browser with no tolerance for dropped frames or latency
          in a defense operations context.
        </p>

        <p>
          Lasse describes the performance approach as being driven by the constraint that the DOD-accessible browser
          environment cannot rely on the same hardware assumptions a desktop application might make. The result is a
          rendering pipeline that:
        </p>

        <ul>
          <li>Offloads heavy geometry computation to the backend, keeping the client payload small</li>
          <li>Uses grouped and instanced geometries to minimize draw calls for high-density line sets</li>
          <li>Toggles object visibility through material or layer flags rather than remounting components</li>
          <li>Manages the Three.js scene graph to avoid per-frame garbage collection pressure</li>
        </ul>

        <p>
          The backend-first philosophy is intentional. By keeping the client dumb about computation and smart about
          rendering, the Zodiac library can stay lean while the Foundry API handles the dataset complexity that would
          otherwise make the browser unusable at operational scale.
        </p>

        <h2 id="globe-precedent">The Globe Arms Race | Stripe, GitHub, and What Palantir Does Differently</h2>

        <p>
          Lasse opens with a historical note that positions the work in a broader context. September 2019 marked five
          years since Stripe launched its cinematic globe to render live purchase orders. GitHub followed three and a
          half months later with a globe showing connection lines between where a pull request was opened and where it
          was merged.
        </p>

        <p>
          Those globes are visual. Palantir's is operational. The difference is not just aesthetic: a Stripe globe
          dropping a frame loses a data point in a marketing visualization. A Gaia rendering failing mid-operation
          for a DOD user is a different category of problem. That distinction drives every architectural decision
          Lasse describes, from the serving layer design to the performance constraints on the Three.js scene graph.
        </p>

        <p>
          For more on the broader engineering context at companies building at this scale, see ObjectWire's coverage of{' '}
          <Link href="/tech/stripe/stripe-stablecoins-aws-for-money-payments-2026" className="text-blue-600 hover:text-blue-800 underline">
            Stripe's infrastructure strategy
          </Link>{' '}
          and{' '}
          <Link href="/tech" className="text-blue-600 hover:text-blue-800 underline">
            the latest from the tech desk
          </Link>.
          Part 5 of Palantir's frontend engineering series is expected to continue with more detail on specific
          performance workflows and 3D tooling.
        </p>

      </div>
    </NewsArticle>
  );
}
