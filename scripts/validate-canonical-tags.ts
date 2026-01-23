#!/usr/bin/env tsx
// =============================================================================
// CANONICAL TAG VALIDATOR
// Scans all page.tsx files to ensure they have proper canonical URLs
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

interface PageAnalysis {
  path: string;
  hasCanonical: boolean;
  method: 'helper-function' | 'hardcoded' | 'none';
  route: string;
  issues: string[];
}

const BASE_URL = 'https://www.objectwire.org';
const APP_DIR = path.join(process.cwd(), 'app');

// Helper functions that generate canonical URLs
const HELPER_FUNCTIONS = [
  'createPageMetadata',
  'createArticleMetadata',
  'createWikiMetadata',
  'generateArticleMetadata',
  'generateBlogSEOMetadata',
  'generateSEOMetadata',
];

// Routes that should be noindex (admin, previews, etc.)
const NOINDEX_ROUTES = [
  '/(admin)',
  '/admin',
  '/preview',
  '/api',
];

function getAllPageFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!file.startsWith('.') && file !== 'node_modules') {
        getAllPageFiles(filePath, fileList);
      }
    } else if (file === 'page.tsx' || file === 'page.ts') {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

function getRouteFromPath(filePath: string): string {
  const relativePath = path.relative(APP_DIR, filePath);
  let route = relativePath
    .replace(/\\/g, '/')
    .replace(/page\.tsx?$/, '')
    .replace(/\/$/, '');
  
  // Handle special routes
  if (route === '') return '/';
  if (route.startsWith('(')) {
    // Route groups like (public) or (admin)
    route = route.replace(/^\([^)]+\)/, '');
  }
  
  return '/' + route;
}

function analyzePageFile(filePath: string): PageAnalysis {
  const content = fs.readFileSync(filePath, 'utf-8');
  const route = getRouteFromPath(filePath);
  const issues: string[] = [];
  
  const analysis: PageAnalysis = {
    path: filePath,
    route,
    hasCanonical: false,
    method: 'none',
    issues,
  };
  
  // Check if it's a noindex route
  const isNoindexRoute = NOINDEX_ROUTES.some(nr => route.includes(nr));
  if (isNoindexRoute) {
    analysis.hasCanonical = true; // Don't require canonical for noindex pages
    analysis.method = 'hardcoded';
    issues.push('Noindex route - canonical not required');
    return analysis;
  }
  
  // Check for helper function usage
  const usesHelperFunction = HELPER_FUNCTIONS.some(fn => 
    content.includes(fn)
  );
  
  if (usesHelperFunction) {
    analysis.hasCanonical = true;
    analysis.method = 'helper-function';
    return analysis;
  }
  
  // Check for hardcoded canonical in metadata
  const hasAlternatesCanonical = /alternates\s*:\s*\{[^}]*canonical/s.test(content);
  const hasCanonicalInMetadata = content.includes('canonical:');
  
  if (hasAlternatesCanonical || hasCanonicalInMetadata) {
    analysis.hasCanonical = true;
    analysis.method = 'hardcoded';
    
    // Verify it's properly formatted
    if (!content.includes(BASE_URL) && !content.includes('SITE_CONFIG.url')) {
      issues.push('Canonical URL may not use base URL constant');
    }
  }
  
  // Check for "use client" directive
  const isClientComponent = content.match(/^['"]use client['"]/m);
  if (isClientComponent && !analysis.hasCanonical) {
    issues.push('Client component without canonical tag');
  }
  
  // Check if metadata is exported
  const hasMetadataExport = content.includes('export const metadata') || 
                           content.includes('export async function generateMetadata');
  
  if (!hasMetadataExport && !isNoindexRoute) {
    issues.push('No metadata export found');
  }
  
  return analysis;
}

function printReport(analyses: PageAnalysis[]) {
  const withCanonical = analyses.filter(a => a.hasCanonical);
  const withoutCanonical = analyses.filter(a => !a.hasCanonical);
  const byHelperFunction = analyses.filter(a => a.method === 'helper-function');
  const byHardcoded = analyses.filter(a => a.method === 'hardcoded');
  
  console.log('\n=============================================================================');
  console.log('CANONICAL TAG VALIDATION REPORT');
  console.log('=============================================================================\n');
  
  console.log(`📊 SUMMARY:`);
  console.log(`   Total pages: ${analyses.length}`);
  console.log(`   ✅ With canonical: ${withCanonical.length} (${Math.round(withCanonical.length / analyses.length * 100)}%)`);
  console.log(`   ❌ Without canonical: ${withoutCanonical.length} (${Math.round(withoutCanonical.length / analyses.length * 100)}%)`);
  console.log(`   📚 Using helper functions: ${byHelperFunction.length}`);
  console.log(`   ✍️  Hardcoded: ${byHardcoded.length}`);
  console.log('');
  
  if (withoutCanonical.length > 0) {
    console.log('❌ PAGES MISSING CANONICAL TAGS:');
    console.log('─────────────────────────────────────────────────────────────────────────────\n');
    
    withoutCanonical.forEach(page => {
      console.log(`   Route: ${page.route}`);
      console.log(`   File:  ${path.relative(process.cwd(), page.path)}`);
      if (page.issues.length > 0) {
        console.log(`   Issues: ${page.issues.join(', ')}`);
      }
      console.log('');
    });
  }
  
  console.log('\n✅ PAGES WITH CANONICAL TAGS (BREAKDOWN):');
  console.log('─────────────────────────────────────────────────────────────────────────────\n');
  
  console.log(`📚 Using Helper Functions (${byHelperFunction.length}):`);
  byHelperFunction.slice(0, 10).forEach(page => {
    console.log(`   ${page.route}`);
  });
  if (byHelperFunction.length > 10) {
    console.log(`   ... and ${byHelperFunction.length - 10} more`);
  }
  
  console.log(`\n✍️  Hardcoded Canonical (${byHardcoded.length}):`);
  byHardcoded.slice(0, 10).forEach(page => {
    console.log(`   ${page.route}`);
    if (page.issues.length > 0 && !page.issues.includes('Noindex route')) {
      console.log(`      ⚠️  ${page.issues.join(', ')}`);
    }
  });
  if (byHardcoded.length > 10) {
    console.log(`   ... and ${byHardcoded.length - 10} more`);
  }
  
  console.log('\n=============================================================================');
  
  if (withoutCanonical.length > 0) {
    console.log('\n⚠️  ACTION REQUIRED:');
    console.log(`   ${withoutCanonical.length} pages need canonical tags added.`);
    console.log('   Use helper functions from lib/page-seo.ts or add alternates.canonical');
    console.log('   to the metadata export.\n');
    
    // Generate fix suggestions
    console.log('💡 SUGGESTED FIX:');
    console.log('   Add to each page metadata:');
    console.log('   alternates: {');
    console.log('     canonical: \'https://www.objectwire.org/your-route\'');
    console.log('   }\n');
  } else {
    console.log('\n✅ ALL PAGES HAVE CANONICAL TAGS!\n');
  }
  
  // Save detailed report to file
  const reportPath = path.join(process.cwd(), 'canonical-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      total: analyses.length,
      withCanonical: withCanonical.length,
      withoutCanonical: withoutCanonical.length,
      byHelperFunction: byHelperFunction.length,
      byHardcoded: byHardcoded.length,
    },
    pagesWithoutCanonical: withoutCanonical.map(p => ({
      route: p.route,
      path: path.relative(process.cwd(), p.path),
      issues: p.issues,
    })),
    allPages: analyses.map(p => ({
      route: p.route,
      path: path.relative(process.cwd(), p.path),
      hasCanonical: p.hasCanonical,
      method: p.method,
      issues: p.issues,
    })),
  }, null, 2));
  
  console.log(`📄 Detailed JSON report saved to: canonical-report.json\n`);
}

async function main() {
  console.log('🔍 Scanning for page.tsx files...\n');
  
  const pageFiles = getAllPageFiles(APP_DIR);
  console.log(`Found ${pageFiles.length} page files.\n`);
  
  console.log('📋 Analyzing canonical tag presence...\n');
  
  const analyses: PageAnalysis[] = [];
  
  for (const filePath of pageFiles) {
    const analysis = analyzePageFile(filePath);
    analyses.push(analysis);
  }
  
  printReport(analyses);
  
  // Exit with error code if issues found
  const withoutCanonical = analyses.filter(a => !a.hasCanonical);
  if (withoutCanonical.length > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('❌ Error running validation:', error);
  process.exit(1);
});
