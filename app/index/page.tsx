import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import CoverageMap from '@/components/CoverageMap';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Site Index - Complete Sitemap | ObjectWire",
  description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  keywords: ["sitemap", "site index", "navigation", "ObjectWire pages"],
  alternates: {
    canonical: 'https://www.objectwire.org/index',
  },
};

interface RouteNode {
  name: string;
  path: string;
  children: RouteNode[];
  hasPage: boolean;
  type: 'page' | 'section';
}

// Directories to ignore
const IGNORE_DIRS = new Set([
  'api',
  'components',
  'lib',
  'public',
  'styles',
  'node_modules',
  '.next',
  'dist',
  'build',
]);

// Files to ignore
const IGNORE_FILES = new Set([
  'layout.tsx',
  'loading.tsx',
  'error.tsx',
  'not-found.tsx',
  'template.tsx',
  'default.tsx',
  'sitemap.ts',
  'robots.ts',
  'manifest.ts',
  'icon.tsx',
  'apple-icon.tsx',
  'opengraph-image.tsx',
  'twitter-image.tsx',
]);

async function getRouteTree(): Promise<RouteNode[]> {
  const appDir = path.join(process.cwd(), 'app');
  
  async function scanDirectory(dirPath: string, routePath: string = ''): Promise<RouteNode[]> {
    const routes: RouteNode[] = [];
    
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        // Skip ignored directories and files starting with _ or .
        if (entry.name.startsWith('_') || entry.name.startsWith('.')) {
          continue;
        }
        
        if (entry.isDirectory()) {
          // Skip ignored directories, route groups (wrapped in parentheses), and dynamic routes
          if (
            IGNORE_DIRS.has(entry.name) || 
            (entry.name.startsWith('(') && entry.name.endsWith(')')) ||
            entry.name.startsWith('[') // Skip dynamic routes like [slug] or [...slug]
          ) {
            continue;
          }
          
          const childPath = path.join(dirPath, entry.name);
          const childRoutePath = routePath + '/' + entry.name;
          
          // Check if this directory has a page.tsx
          const hasPage = await fs.access(path.join(childPath, 'page.tsx'))
            .then(() => true)
            .catch(() => false);
          
          // Recursively scan subdirectories
          const children = await scanDirectory(childPath, childRoutePath);
          
          // Only add if it has a page or has children with pages
          if (hasPage || children.length > 0) {
            routes.push({
              name: entry.name,
              path: childRoutePath,
              children,
              hasPage,
              type: hasPage ? 'page' : 'section',
            });
          }
        }
      }
      
      // Sort routes alphabetically
      routes.sort((a, b) => a.name.localeCompare(b.name));
      
    } catch (error) {
      console.error('Error scanning directory:', dirPath, error);
    }
    
    return routes;
  }
  
  // Check for root page
  const routes: RouteNode[] = [];
  const hasRootPage = await fs.access(path.join(appDir, 'page.tsx'))
    .then(() => true)
    .catch(() => false);
  
  if (hasRootPage) {
    routes.push({
      name: 'Home',
      path: '/',
      children: [],
      hasPage: true,
      type: 'page',
    });
  }
  
  // Scan all subdirectories
  const subRoutes = await scanDirectory(appDir);
  routes.push(...subRoutes);
  
  return routes;
}

function formatRouteName(name: string): string {
  // Convert kebab-case and snake_case to Title Case
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function RouteTreeItem({ route, level = 0 }: { route: RouteNode; level?: number }) {
  const indent = level * 24; // 24px per level
  const hasChildren = route.children.length > 0;
  
  return (
    <div className="route-item">
      <div 
        className="flex items-start py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors group"
        style={{ paddingLeft: `${indent + 16}px` }}
      >
        {/* Tree line indicator */}
        {level > 0 && (
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" style={{ left: `${indent - 12}px` }} />
        )}
        
        {/* Folder/Page icon */}
        <span className="text-xl mr-3 flex-shrink-0">
          {hasChildren ? '📁' : route.hasPage ? '📄' : '📂'}
        </span>
        
        {/* Route info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            {route.hasPage ? (
              <Link 
                href={route.path} 
                className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                {formatRouteName(route.name)}
              </Link>
            ) : (
              <span className="font-medium text-gray-700">
                {formatRouteName(route.name)}
              </span>
            )}
            
            <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
              {route.path || '/'}
            </span>
            
            {!route.hasPage && hasChildren && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Section
              </span>
            )}
          </div>
          
          {hasChildren && (
            <div className="text-xs text-gray-500 mt-1">
              {route.children.length} {route.children.length === 1 ? 'page' : 'pages'}
            </div>
          )}
        </div>
      </div>
      
      {/* Render children */}
      {hasChildren && (
        <div className="relative">
          {route.children.map((child, index) => (
            <RouteTreeItem key={child.path} route={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function IndexPage() {
  const routes = await getRouteTree();
  const totalPages = routes.reduce((count, route) => {
    const countPages = (r: RouteNode): number => {
      return (r.hasPage ? 1 : 0) + r.children.reduce((sum, child) => sum + countPages(child), 0);
    };
    return count + countPages(route);
  }, 0);

  return (
    <main className="min-h-screen bg-white">
      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Site Tree */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
            Site Index
          </h2>
          
          <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="p-6">
              {routes.length > 0 ? (
                <div className="space-y-1">
                  {routes.map(route => (
                    <RouteTreeItem key={route.path} route={route} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-xl mb-2">No routes found</p>
                  <p className="text-sm">The site structure could not be loaded.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════ COVERAGE MAP (auto-updating component) ═══════════════════ */}
        <CoverageMap showLatest={true} />

        {/* Quick Links by Category */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
            Quick Access by Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News & Articles */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">📰</span>
                News & Articles
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/news" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/opinion" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Opinion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Entertainment */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎬</span>
                Entertainment
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/beast-games" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Beast Games
                  </Link>
                </li>
                <li>
                  <Link href="/survivor" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Survivor Season 50
                  </Link>
                </li>
              </ul>
            </div>

            {/* Gaming */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎮</span>
                Gaming
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/marvels-wolverine" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Marvel's Wolverine
                  </Link>
                </li>
                <li>
                  <Link href="/007-first-light" className="text-blue-600 hover:text-blue-800 hover:underline">
                    007 First Light
                  </Link>
                </li>
                <li>
                  <Link href="/resident-evil-requiem" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Resident Evil Requiem
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">💻</span>
                Technology
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/coding" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Coding
                  </Link>
                </li>
                <li>
                  <Link href="/alphabet-inc-the-history-of-google" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Alphabet Inc
                  </Link>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎉</span>
                Events
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sxsw" className="text-blue-600 hover:text-blue-800 hover:underline">
                    SXSW 2026
                  </Link>
                </li>
                <li>
                  <Link href="/github-universe-october-28th-and-29th-san-francisco" className="text-blue-600 hover:text-blue-800 hover:underline">
                    GitHub Universe
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">ℹ️</span>
                About
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Editorial Standards
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
            Technical Information
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">How This Index Works</h3>
                <p className="text-sm text-gray-700 mb-3">
                  This site index is dynamically generated by scanning the <code className="bg-gray-200 px-2 py-1 rounded text-xs">app</code> directory 
                  at build time. It automatically discovers all pages and organizes them into a hierarchical tree structure.
                </p>
                <p className="text-sm text-gray-700">
                  The index updates automatically whenever you add, remove, or reorganize pages—no manual maintenance required.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Features</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Automatic discovery of all routes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Hierarchical tree visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Real-time statistics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Quick access categories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No manual updates needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Explore ObjectWire</h2>
            <p className="text-lg mb-8 text-gray-50">
              Use this index to discover all our content, or start from the home page.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
            >
              Back to Home →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
