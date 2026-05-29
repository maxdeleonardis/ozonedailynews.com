/**
 * Quick smoke test for the GitHub bridge.
 * Run: npx tsx scripts/test-github-bridge.mts
 *
 * Writes a test file, confirms the commit SHA, then deletes it.
 */
import { config } from 'dotenv';
config({ path: '.env.local' });

import { writeFileToGitHub, deleteFileFromGitHub } from '../lib/github-bridge.js';

const TEST_PATH = 'content/static/articles/_cms-bridge-test.json';
const TEST_CONTENT = JSON.stringify({ _test: true, ts: new Date().toISOString() }, null, 2);

async function main() {
  console.log('GITHUB_REPO:', process.env.GITHUB_REPO);
  console.log('GITHUB_BRANCH:', process.env.GITHUB_BRANCH);
  console.log('GITHUB_TOKEN present:', !!process.env.GITHUB_TOKEN);
  console.log('');

  // 1. Write
  console.log('→ Writing test file…');
  const writeResult = await writeFileToGitHub(TEST_PATH, TEST_CONTENT, 'chore: cms bridge smoke test');
  console.log('Write result:', writeResult);

  if (!writeResult.ok) {
    console.error('❌ Write failed. Aborting.');
    process.exit(1);
  }

  console.log('✅ Write succeeded. Commit SHA:', writeResult.commitSha);

  // 2. Delete (clean up)
  console.log('\n→ Deleting test file…');
  const deleteResult = await deleteFileFromGitHub(TEST_PATH, 'chore: remove cms bridge smoke test');
  console.log('Delete result:', deleteResult);

  if (!deleteResult.ok) {
    console.warn('⚠️  Delete failed — remove manually:', TEST_PATH);
  } else {
    console.log('✅ Delete succeeded. Commit SHA:', deleteResult.commitSha);
  }

  console.log('\n🎉 GitHub bridge is working correctly.');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
