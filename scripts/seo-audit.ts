#!/usr/bin/env tsx
/**
 * SEO Audit Script
 * 
 * Scans all pages in the app directory and validates SEO configuration
 * against ObjectWire standards.
 * 
 * Usage: npx tsx scripts/seo-audit.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface PageAudit {
  path: string;
  hasMetadata: boolean;
  hasTitle: boolean;
  hasDescription: boolean;
  hasKeywords: boolean;
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;
  hasCanonical: boolean;
  hasPublishedDate: boolean;
  hasModifiedDate: boolean;
  titleLength: number;
  descriptionLength: number;
  keywordCount: number;
  warnings: string[];
  errors: string[];
}

function scanDirectory(dir: string, results: PageAudit[] = []): PageAudit[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'api') {
        scanDirectory(fullPath, results);
      }
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      const audit = auditPage(fullPath);
      if (audit) {
        results.push(audit);
      }
    }
  }

  return results;
}

function auditPage(filePath: string): PageAudit | null {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = filePath.replace(process.cwd(), '');

  const audit: PageAudit = {
    path: relativePath,
    hasMetadata: false,
    hasTitle: false,
    hasDescription: false,
    hasKeywords: false,
    hasOpenGraph: false,
    hasTwitterCard: false,
    hasCanonical: false,
    hasPublishedDate: false,
    hasModifiedDate: false,
    titleLength: 0,
    descriptionLength: 0,
    keywordCount: 0,
    warnings: [],
    errors: [],
  };

  // Check for metadata export
  if (content.includes('export const metadata')) {
    audit.hasMetadata = true;

    // Extract title
    const titleMatch = content.match(/title:\s*["'](.+?)["']/);
    if (titleMatch) {
      audit.hasTitle = true;
      audit.titleLength = titleMatch[1].length;

      if (audit.titleLength < 50) {
        audit.warnings.push(`Title too short: ${audit.titleLength} chars (aim for 50-60)`);
      } else if (audit.titleLength > 70) {
        audit.warnings.push(`Title too long: ${audit.titleLength} chars (aim for 50-60)`);
      }

      if (!titleMatch[1].includes('ObjectWire') && !titleMatch[1].includes('|')) {
        audit.warnings.push('Title missing ObjectWire branding');
      }

      // Check for year/date freshness
      const currentYear = new Date().getFullYear();
      const hasYear = titleMatch[1].includes(String(currentYear)) || 
                      titleMatch[1].includes(String(currentYear - 1));
      if (!hasYear && !titleMatch[1].toLowerCase().includes('updated')) {
        audit.warnings.push('Title missing year/date for freshness signal');
      }
    } else {
      audit.errors.push('No title found in metadata');
    }

    // Extract description
    const descMatch = content.match(/description:\s*["'](.+?)["']/s);
    if (descMatch) {
      audit.hasDescription = true;
      // Clean description (remove escaped newlines, etc.)
      const cleanDesc = descMatch[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
      audit.descriptionLength = cleanDesc.length;

      if (audit.descriptionLength < 150) {
        audit.warnings.push(`Description too short: ${audit.descriptionLength} chars (aim for 150-160)`);
      } else if (audit.descriptionLength > 165) {
        audit.warnings.push(`Description too long: ${audit.descriptionLength} chars (aim for 150-160)`);
      }

      if (!cleanDesc.toLowerCase().includes('updated') && !cleanDesc.toLowerCase().includes('2026') && !cleanDesc.toLowerCase().includes('2025')) {
        audit.warnings.push('Description missing freshness indicator (date/updated)');
      }
    } else {
      audit.errors.push('No description found in metadata');
    }

    // Check for keywords
    if (content.includes('keywords:')) {
      audit.hasKeywords = true;
      const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
      if (keywordsMatch) {
        const keywords = keywordsMatch[1].split(',').filter(k => k.trim().length > 0);
        audit.keywordCount = keywords.length;

        if (audit.keywordCount < 5) {
          audit.warnings.push(`Too few keywords: ${audit.keywordCount} (aim for 10-15)`);
        } else if (audit.keywordCount > 20) {
          audit.warnings.push(`Too many keywords: ${audit.keywordCount} (aim for 10-15)`);
        }
      }
    } else {
      audit.errors.push('No keywords array found');
    }

    // Check for Open Graph
    if (content.includes('openGraph:')) {
      audit.hasOpenGraph = true;
      
      if (!content.includes('publishedTime:') && !content.includes('article:published_time')) {
        audit.warnings.push('Missing publishedTime in Open Graph');
      } else {
        audit.hasPublishedDate = true;
      }

      if (!content.includes('modifiedTime:') && !content.includes('article:modified_time')) {
        audit.warnings.push('Missing modifiedTime in Open Graph (consider adding for updates)');
      } else {
        audit.hasModifiedDate = true;
      }

      if (!content.includes('authors:')) {
        audit.warnings.push('Missing authors in Open Graph');
      }
    } else {
      audit.warnings.push('No Open Graph tags found');
    }

    // Check for Twitter Card
    if (content.includes('twitter:')) {
      audit.hasTwitterCard = true;
    } else {
      audit.warnings.push('No Twitter Card tags found');
    }

    // Check for canonical URL
    if (content.includes('canonical:')) {
      audit.hasCanonical = true;
      
      const canonicalMatch = content.match(/canonical:\s*['"](.+?)['"]/);
      if (canonicalMatch && !canonicalMatch[1].startsWith('https://')) {
        audit.errors.push('Canonical URL must use HTTPS');
      }
    } else {
      audit.errors.push('No canonical URL found');
    }

  } else {
    audit.errors.push('No metadata export found');
  }

  // Check for external authoritative links
  const externalLinks = [
    'apnews.com', 'reuters.com', 'bloomberg.com', 'wsj.com', 'ft.com',
    'nytimes.com', 'washingtonpost.com', 'sec.gov', 'justice.gov',
    'federalreserve.gov', 'whitehouse.gov', 'congress.gov'
  ];
  
  const hasExternalLinks = externalLinks.some(domain => content.includes(domain));
  if (!hasExternalLinks) {
    audit.warnings.push('No external authoritative sources linked (add 3-5 links to AP, Reuters, WSJ, .gov sites)');
  }

  // Check for internal links
  const internalLinkCount = (content.match(/href="\/[^"]+"/g) || []).length;
  if (internalLinkCount < 5) {
    audit.warnings.push(`Only ${internalLinkCount} internal links found (aim for 5-10)`);
  }

  return audit;
}

function generateReport(audits: PageAudit[]): void {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║           ObjectWire SEO Audit Report                        ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const totalPages = audits.length;
  const pagesWithErrors = audits.filter(a => a.errors.length > 0).length;
  const pagesWithWarnings = audits.filter(a => a.warnings.length > 0).length;
  const perfectPages = audits.filter(a => a.errors.length === 0 && a.warnings.length === 0).length;

  console.log('📊 SUMMARY');
  console.log('─────────────────────────────────────────────────────────────');
  console.log(`Total Pages Scanned:      ${totalPages}`);
  console.log(`✅ Perfect SEO:           ${perfectPages} (${Math.round(perfectPages/totalPages*100)}%)`);
  console.log(`⚠️  Pages with Warnings:  ${pagesWithWarnings} (${Math.round(pagesWithWarnings/totalPages*100)}%)`);
  console.log(`❌ Pages with Errors:     ${pagesWithErrors} (${Math.round(pagesWithErrors/totalPages*100)}%)`);
  console.log('');

  // Pages with errors
  if (pagesWithErrors > 0) {
    console.log('\n❌ PAGES WITH ERRORS (Critical - Fix Immediately)');
    console.log('─────────────────────────────────────────────────────────────');
    
    audits.filter(a => a.errors.length > 0).forEach(audit => {
      console.log(`\n📄 ${audit.path}`);
      audit.errors.forEach(error => {
        console.log(`   ❌ ${error}`);
      });
    });
  }

  // Pages with warnings
  if (pagesWithWarnings > 0) {
    console.log('\n\n⚠️  PAGES WITH WARNINGS (Recommended Improvements)');
    console.log('─────────────────────────────────────────────────────────────');
    
    audits.filter(a => a.warnings.length > 0 && a.errors.length === 0).forEach(audit => {
      console.log(`\n📄 ${audit.path}`);
      console.log(`   Title: ${audit.titleLength} chars | Description: ${audit.descriptionLength} chars | Keywords: ${audit.keywordCount}`);
      audit.warnings.slice(0, 3).forEach(warning => {
        console.log(`   ⚠️  ${warning}`);
      });
      if (audit.warnings.length > 3) {
        console.log(`   ... and ${audit.warnings.length - 3} more warnings`);
      }
    });
  }

  // Perfect pages
  if (perfectPages > 0) {
    console.log('\n\n✅ PAGES WITH PERFECT SEO');
    console.log('─────────────────────────────────────────────────────────────');
    audits.filter(a => a.errors.length === 0 && a.warnings.length === 0).forEach(audit => {
      console.log(`   ✅ ${audit.path}`);
    });
  }

  // Statistics
  console.log('\n\n📈 SEO STATISTICS');
  console.log('─────────────────────────────────────────────────────────────');
  console.log(`Pages with metadata:      ${audits.filter(a => a.hasMetadata).length}/${totalPages}`);
  console.log(`Pages with Open Graph:    ${audits.filter(a => a.hasOpenGraph).length}/${totalPages}`);
  console.log(`Pages with Twitter Card:  ${audits.filter(a => a.hasTwitterCard).length}/${totalPages}`);
  console.log(`Pages with canonical URL: ${audits.filter(a => a.hasCanonical).length}/${totalPages}`);
  console.log(`Pages with keywords:      ${audits.filter(a => a.hasKeywords).length}/${totalPages}`);
  console.log(`Pages with pub date:      ${audits.filter(a => a.hasPublishedDate).length}/${totalPages}`);
  console.log(`Pages with mod date:      ${audits.filter(a => a.hasModifiedDate).length}/${totalPages}`);

  const avgTitle = Math.round(audits.reduce((sum, a) => sum + a.titleLength, 0) / totalPages);
  const avgDesc = Math.round(audits.reduce((sum, a) => sum + a.descriptionLength, 0) / totalPages);
  const avgKeywords = Math.round(audits.reduce((sum, a) => sum + a.keywordCount, 0) / totalPages);

  console.log(`\nAverage title length:     ${avgTitle} chars (target: 50-60)`);
  console.log(`Average desc length:      ${avgDesc} chars (target: 150-160)`);
  console.log(`Average keywords:         ${avgKeywords} (target: 10-15)`);

  console.log('\n');
}

// Run audit
console.log('🔍 Starting SEO audit...\n');
const appDir = path.join(process.cwd(), 'app');
const audits = scanDirectory(appDir);
generateReport(audits);

console.log('💡 TIP: Run `npx tsx scripts/seo-enhance.ts <path>` to auto-fix common issues\n');
