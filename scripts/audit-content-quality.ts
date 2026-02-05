import fs from 'fs';
import path from 'path';

interface AuditResult {
  route: string;
  filePath: string;
  issues: string[];
  wordCount?: number;
  hasMetaDescription?: boolean;
  hasCanonical?: boolean;
}

const results: AuditResult[] = [];

async function auditPages() {
  const appPath = path.join(process.cwd(), 'app');
  
  // Get all page.tsx files
  const getAllPageFiles = (dir: string): string[] => {
    const files: string[] = [];
    
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          // Skip certain directories
          if (['.next', 'node_modules', '.git'].includes(entry.name)) continue;
          files.push(...getAllPageFiles(fullPath));
        } else if (entry.name === 'page.tsx') {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip permission errors
    }
    
    return files;
  };
  
  const pageFiles = getAllPageFiles(appPath);
  
  for (const filePath of pageFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const route = filePath.replace(appPath, '').replace('/page.tsx', '').replace(/\((.*?)\)/g, '');
    
    const issues: string[] = [];
    let wordCount = 0;
    let hasMetaDescription = false;
    let hasCanonical = false;
    
    // Check for metadata export
    const hasMetadata = /export const metadata/.test(content);
    const hasGenerateMetadata = /export.*generateMetadata/.test(content);
    
    if (!hasMetadata && !hasGenerateMetadata) {
      issues.push('❌ No metadata export');
    } else {
      // Check for description
      if (/description:/.test(content)) {
        hasMetaDescription = true;
      } else {
        issues.push('⚠️  Missing meta description');
      }
      
      // Check for canonical
      if (/canonical:/.test(content)) {
        hasCanonical = true;
      } else if (!route.includes('admin') && !route.includes('api')) {
        issues.push('⚠️  Missing canonical tag');
      }
    }
    
    // Extract and count words in content (excluding imports, code)
    const textContent = content
      .replace(/import.*?from.*?['"]/g, '')
      .replace(/<.*?>/g, '') // Remove JSX tags
      .replace(/export.*?{/g, '')
      .replace(/function.*?{/g, '')
      .replace(/const.*?=/g, '')
      .replace(/interface.*?{/g, '')
      .replace(/type.*?=/g, '');
    
    const words = textContent.split(/\s+/).filter(w => w.length > 0);
    wordCount = words.length;
    
    // Flag thin content
    if (wordCount < 150 && !route.includes('admin') && !route.includes('api') && !route.includes('search')) {
      issues.push(`⚠️  Thin content: ${wordCount} words (min 150)`);
    }
    
    // Check for client component with no metadata
    if (/['"]use client['"]/.test(content) && !hasMetadata && !hasGenerateMetadata) {
      issues.push('❌ Client component without metadata (inherits from layout)');
    }
    
    if (issues.length > 0 || wordCount < 300) {
      results.push({
        route: route || '/',
        filePath: filePath.replace(process.cwd(), ''),
        issues,
        wordCount,
        hasMetaDescription,
        hasCanonical,
      });
    }
  }
  
  // Sort by severity
  results.sort((a, b) => b.issues.length - a.issues.length);
  
  // Generate report
  console.log('\n' + '='.repeat(80));
  console.log('📊 CONTENT QUALITY AUDIT REPORT');
  console.log('='.repeat(80) + '\n');
  
  console.log(`📈 SUMMARY:`);
  console.log(`   Total pages scanned: ${pageFiles.length}`);
  console.log(`   Pages with issues: ${results.length}`);
  
  const thinContent = results.filter(r => r.wordCount && r.wordCount < 150).length;
  const missingDesc = results.filter(r => !r.hasMetaDescription).length;
  const missingCanonical = results.filter(r => !r.hasCanonical).length;
  
  console.log(`\n⚠️  ISSUE BREAKDOWN:`);
  console.log(`   Thin content (<150 words): ${thinContent}`);
  console.log(`   Missing meta descriptions: ${missingDesc}`);
  console.log(`   Missing canonical tags: ${missingCanonical}`);
  
  console.log('\n' + '-'.repeat(80));
  console.log('🚨 PAGES WITH ISSUES (sorted by severity):');
  console.log('-'.repeat(80) + '\n');
  
  for (const result of results.slice(0, 30)) {
    console.log(`Route: ${result.route}`);
    console.log(`File: ${result.filePath}`);
    console.log(`Words: ${result.wordCount}`);
    console.log(`Issues:`);
    for (const issue of result.issues) {
      console.log(`  ${issue}`);
    }
    console.log();
  }
  
  if (results.length > 30) {
    console.log(`... and ${results.length - 30} more pages with issues\n`);
  }
  
  // Save detailed report
  fs.writeFileSync(
    path.join(process.cwd(), 'content-audit-report.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log('='.repeat(80));
  console.log('✅ Detailed report saved to content-audit-report.json');
  console.log('='.repeat(80) + '\n');
  
  process.exit(0);
}

auditPages().catch(error => {
  console.error('Audit failed:', error);
  process.exit(1);
});
