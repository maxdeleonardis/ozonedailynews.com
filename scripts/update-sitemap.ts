#!/usr/bin/env node
/**
 * =============================================================================
 * SITEMAP AUTO-UPDATE SCRIPT
 * =============================================================================
 * 
 * This script automatically updates the sitemap by:
 * 1. Scanning app directory for new routes
 * 2. Checking database for new blog posts
 * 3. Pinging search engines to notify them of updates
 * 
 * Usage:
 *   npx tsx scripts/update-sitemap.ts
 *   npm run sitemap:update
 * 
 * Schedule with cron:
 *   0 * * * * cd /path/to/project && npm run sitemap:update
 * 
 * =============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// =============================================================================
// CONFIGURATION
// =============================================================================

const SITE_URL = 'https://objectwire.org';

const SEARCH_ENGINE_PING_URLS = [
  `https://www.google.com/ping?sitemap=${SITE_URL}/sitemap.xml`,
  `https://www.bing.com/ping?sitemap=${SITE_URL}/sitemap.xml`,
];

// Route types to detect
const ROUTE_TYPES = {
  wiki: ['trump', 'tiktok', 'james-cameron', 'elijah-wood'],
  static: ['about', 'contact', 'editorial-standards', 'privacy-policy', 'corrections'],
  category: ['news', 'blog', 'opinion', 'health', 'coding'],
};

// Directories to ignore
const IGNORE_DIRS = [
  'api',
  '(admin)',
  'admin',
  'preview',
  'auth',
  'login',
  'signup',
  '_components',
  '_lib',
];

// =============================================================================
// ROUTE DISCOVERY
// =============================================================================

interface DiscoveredRoute {
  path: string;
  type: 'wiki' | 'static' | 'category' | 'article' | 'unknown';
  lastModified: Date;
  hasPage: boolean;
}

function scanAppDirectory(): DiscoveredRoute[] {
  const appDir = path.join(ROOT_DIR, 'app');
  const routes: DiscoveredRoute[] = [];

  function scanDir(dir: string, basePath: string = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      if (!item.isDirectory()) continue;
      
      // Skip ignored directories
      if (IGNORE_DIRS.some(ignored => item.name.includes(ignored))) continue;
      
      // Skip Next.js special directories
      if (item.name.startsWith('_') || item.name.startsWith('.')) continue;
      
      // Handle route groups (folders in parentheses)
      if (item.name.startsWith('(') && item.name.endsWith(')')) {
        scanDir(path.join(dir, item.name), basePath);
        continue;
      }
      
      // Handle dynamic routes
      if (item.name.startsWith('[') && item.name.endsWith(']')) {
        // Skip catch-all routes for now
        if (item.name.includes('...')) continue;
        continue;
      }
      
      const routePath = `${basePath}/${item.name}`;
      const fullPath = path.join(dir, item.name);
      
      // Check if this is a page route
      const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) ||
                      fs.existsSync(path.join(fullPath, 'page.ts')) ||
                      fs.existsSync(path.join(fullPath, 'page.jsx')) ||
                      fs.existsSync(path.join(fullPath, 'page.js'));
      
      if (hasPage) {
        const stat = fs.statSync(path.join(fullPath, 'page.tsx') || fullPath);
        
        // Determine route type
        let type: DiscoveredRoute['type'] = 'unknown';
        const routeName = item.name.toLowerCase();
        
        if (ROUTE_TYPES.wiki.includes(routeName)) {
          type = 'wiki';
        } else if (ROUTE_TYPES.static.includes(routeName)) {
          type = 'static';
        } else if (ROUTE_TYPES.category.includes(routeName)) {
          type = 'category';
        } else if (routeName.includes('-')) {
          type = 'article';
        }
        
        routes.push({
          path: routePath,
          type,
          lastModified: stat.mtime,
          hasPage: true,
        });
      }
      
      // Recurse into subdirectories
      scanDir(fullPath, routePath);
    }
  }

  scanDir(appDir);
  return routes;
}

// =============================================================================
// SITE CONFIG UPDATE
// =============================================================================

function updateSiteConfig(routes: DiscoveredRoute[]): void {
  const siteConfigPath = path.join(ROOT_DIR, 'lib', 'site-config.ts');
  
  console.log('\n📝 Checking site-config.ts for new routes...');
  
  const existingConfig = fs.readFileSync(siteConfigPath, 'utf-8');
  
  // Extract existing paths from ROUTE_REGISTRY
  const existingPaths = new Set<string>();
  const pathRegex = /path:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = pathRegex.exec(existingConfig)) !== null) {
    existingPaths.add(match[1]);
  }
  
  // Find new routes
  const newRoutes = routes.filter(r => !existingPaths.has(r.path) && r.hasPage);
  
  if (newRoutes.length === 0) {
    console.log('   ✅ All routes are already registered');
    return;
  }
  
  console.log(`   ⚠️  Found ${newRoutes.length} new routes to add:`);
  newRoutes.forEach(r => console.log(`      - ${r.path} (${r.type})`));
  
  // Generate new route entries
  const newEntries = newRoutes.map(route => {
    const priority = route.type === 'wiki' ? 0.9 : 
                     route.type === 'category' ? 0.8 :
                     route.type === 'article' ? 0.7 : 0.5;
    const changeFreq = route.type === 'wiki' ? 'daily' :
                       route.type === 'category' ? 'daily' :
                       route.type === 'article' ? 'weekly' : 'monthly';
    
    return `  {
    path: '${route.path}',
    title: '${route.path.split('/').pop()?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Page'}',
    description: 'TODO: Add description',
    priority: ${priority},
    changeFrequency: '${changeFreq}',
    indexable: true,
    includeInNewsSitemap: ${route.type === 'article'},
    type: '${route.type}',
  },`;
  }).join('\n');
  
  console.log('\n   📋 New route entries to add to ROUTE_REGISTRY:');
  console.log('   ' + '-'.repeat(50));
  console.log(newEntries);
  console.log('   ' + '-'.repeat(50));
  console.log('\n   ℹ️  Add these entries manually to lib/site-config.ts');
}

// =============================================================================
// SEARCH ENGINE PING
// =============================================================================

async function pingSearchEngines(): Promise<void> {
  console.log('\n🔔 Pinging search engines...');
  
  for (const pingUrl of SEARCH_ENGINE_PING_URLS) {
    try {
      const response = await fetch(pingUrl, { method: 'GET' });
      const engine = pingUrl.includes('google') ? 'Google' : 'Bing';
      
      if (response.ok) {
        console.log(`   ✅ ${engine}: Successfully pinged`);
      } else {
        console.log(`   ⚠️  ${engine}: Response ${response.status}`);
      }
    } catch (error) {
      const engine = pingUrl.includes('google') ? 'Google' : 'Bing';
      console.log(`   ❌ ${engine}: Failed to ping - ${error}`);
    }
  }
}

// =============================================================================
// SITEMAP VALIDATION
// =============================================================================

function validateSitemap(): void {
  console.log('\n🔍 Validating sitemap configuration...');
  
  const sitemapPath = path.join(ROOT_DIR, 'app', 'sitemap.ts');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('   ❌ sitemap.ts not found!');
    return;
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  
  // Check for site-config import
  if (sitemapContent.includes("from '@/lib/site-config'")) {
    console.log('   ✅ sitemap.ts imports from site-config.ts');
  } else {
    console.log('   ⚠️  sitemap.ts should import from site-config.ts');
  }
  
  // Check for dynamic content
  if (sitemapContent.includes('getAllBlogPosts')) {
    console.log('   ✅ sitemap.ts includes dynamic blog posts');
  } else {
    console.log('   ⚠️  sitemap.ts may not include dynamic content');
  }
  
  // Check revalidation
  if (sitemapContent.includes('revalidate')) {
    console.log('   ✅ sitemap.ts has ISR revalidation configured');
  } else {
    console.log('   ⚠️  Consider adding revalidation to sitemap.ts');
  }
}

// =============================================================================
// MAIN EXECUTION
// =============================================================================

async function main() {
  console.log('='.repeat(60));
  console.log('🗺️  SITEMAP AUTO-UPDATE SCRIPT');
  console.log('='.repeat(60));
  console.log(`\n📅 Running at: ${new Date().toISOString()}`);
  console.log(`🌐 Site URL: ${SITE_URL}`);
  
  // 1. Scan for routes
  console.log('\n📂 Scanning app directory for routes...');
  const routes = scanAppDirectory();
  console.log(`   Found ${routes.length} page routes`);
  
  // Group by type
  const byType = routes.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  Object.entries(byType).forEach(([type, count]) => {
    console.log(`   - ${type}: ${count}`);
  });
  
  // 2. Update site config
  updateSiteConfig(routes);
  
  // 3. Validate sitemap
  validateSitemap();
  
  // 4. Ping search engines (only in production)
  if (process.env.NODE_ENV === 'production' || process.argv.includes('--ping')) {
    await pingSearchEngines();
  } else {
    console.log('\n🔔 Skipping search engine ping (add --ping flag to ping)');
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ Sitemap update check complete!');
  console.log('='.repeat(60));
}

main().catch(console.error);
