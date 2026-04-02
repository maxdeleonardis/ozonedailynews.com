// scripts/test-discord-webhook.mjs
// Run: node scripts/test-discord-webhook.mjs

const WEBHOOK = 'https://discord.com/api/webhooks/1485011145059205273/bmzyM2KHM82gC3YphUA_jAbsEcSt_VOKaTUElKX1BXJk99UQ2Sj6Dq829UrrEuoV71SJ';
const CHANNEL = 'https://discord.com/channels/1385068774549360772/1485009785048010934';

async function run() {
  const slug = 'test-article-' + Date.now();
  const articleUrl = 'https://www.objectwire.org/' + slug;
  const threadTitle = 'Integration Test | ObjectWire';

  // Step 1: Create a new Forum thread (simulates first comment on an article)
  const params1 = new URLSearchParams({ wait: 'true' });
  const payload1 = {
    username: 'TestUser via ObjectWire',
    thread_name: threadTitle,
    embeds: [{
      color: 0x5865f2,
      author: { name: 'TestUser' },
      description: 'First comment — creates a new Forum thread.',
      fields: [{ name: '📰 Article', value: `[${threadTitle}](${articleUrl})` }],
      footer: { text: 'objectwire.org' },
      timestamp: new Date().toISOString(),
    }],
  };

  console.log('Step 1: Creating new Forum thread...');
  const r1 = await fetch(`${WEBHOOK}?${params1}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload1),
  });
  const d1 = await r1.json();
  const threadId = d1.channel_id;
  console.log('  HTTP:', r1.status, '| thread_id:', threadId);

  if (!threadId) {
    console.error('  FAILED — no thread_id in response. Full response:', JSON.stringify(d1));
    return;
  }

  // Step 2: Append a second comment to the same thread
  await new Promise(r => setTimeout(r, 800));
  const params2 = new URLSearchParams({ wait: 'true', thread_id: threadId });
  const payload2 = {
    username: 'AnotherUser via ObjectWire',
    embeds: [{
      color: 0x5865f2,
      author: { name: 'AnotherUser' },
      description: 'Reply — appended to the existing thread. URL bug fix confirmed.',
      footer: { text: 'objectwire.org' },
      timestamp: new Date().toISOString(),
    }],
  };

  console.log(`Step 2: Appending reply to thread ${threadId}...`);
  const r2 = await fetch(`${WEBHOOK}?${params2}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload2),
  });
  const d2 = await r2.json();
  console.log('  HTTP:', r2.status, '| message_id:', d2.id, '| same thread:', d2.channel_id === threadId);

  if (r2.status === 200 && d2.channel_id === threadId) {
    console.log('\n✅ Full flow works — both steps passed.');
    console.log(`   Check Discord: ${CHANNEL}`);
  } else {
    console.error('\n❌ Step 2 failed:', JSON.stringify(d2));
  }
}

run().catch(e => console.error('Fatal:', e.message));
