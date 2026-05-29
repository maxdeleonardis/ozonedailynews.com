import { config } from 'dotenv';
config({ path: '.env.local' });

import { writeFileToGitHub, deleteFileFromGitHub } from '../lib/github-bridge';

async function main() {
  console.log('REPO:', process.env.GITHUB_REPO);
  console.log('BRANCH:', process.env.GITHUB_BRANCH);
  console.log('TOKEN present:', !!process.env.GITHUB_TOKEN);

  const r = await writeFileToGitHub(
    'content/static/articles/_cms-test.json',
    JSON.stringify({ _test: true, ts: new Date().toISOString() }, null, 2),
    'chore: cms bridge smoke test'
  );
  console.log('Write result:', r);

  if (r.ok) {
    const d = await deleteFileFromGitHub(
      'content/static/articles/_cms-test.json',
      'chore: remove cms bridge smoke test'
    );
    console.log('Delete result:', d);
    console.log('\n✅ GitHub bridge working!');
  } else {
    console.error('\n❌ Write failed');
    process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
