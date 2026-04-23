import * as fs from 'fs';
import * as path from 'path';

// Unsplash base format
const u = (id: string) => `https://images.unsplash.com/${id}?w=1200&h=675&fit=crop`;

// Semantically matched Unsplash photos per file path
const assignments: Record<string, string> = {
  // Apple
  'app/apple/news/apple-50th-anniversary-apple-park-grand-finale-2026/page.tsx':
    u('photo-1611532736597-de2d4265fba3'), // Apple device/product
  'app/apple/news/apple-removes-anything-vibe-coding-app-store-2026/page.tsx':
    u('photo-1516116216624-53e697fedbea'), // code on screen

  // Bio-hacking / Medical
  'app/bio-hacking/news/oslo-patient-hiv-cure-ccr5-bone-marrow-transplant-2026/page.tsx':
    u('photo-1576091160399-112ba8d25d1d'), // medical/lab
  'app/bio-hacking/news/rockefeller-crispr-stem-cell-living-drug-factory-hiv-malaria-influenza/page.tsx':
    u('photo-1532187863486-abf9dbad1b69'), // lab/microscope
  'app/bio-hacking/news/science-study-3000-genes-sex-differences-human-brain-decasien-2026/page.tsx':
    u('photo-1559757175-5700dde675bc'), // brain scan / neuroscience

  // Copyright / Legal
  'app/copyright/news/circle-class-action-drift-protocol-285m-hack-solana/page.tsx':
    u('photo-1518546305927-5a555bb7020d'), // crypto/legal
  'app/copyright/news/deere-99m-settlement-right-to-repair-digital-tools/page.tsx':
    u('photo-1500937386664-56d1dfef3854'), // tractor/farm field
  'app/copyright/news/ninth-circuit-pauses-app-store-ruling-apple-supreme-court/page.tsx':
    u('photo-1589391886645-d51941baf7fb'), // courthouse
  'app/copyright/nicole-daedone-sentenced-9-years-onetaste-forced-labor-2026/page.tsx':
    u('photo-1589391886645-d51941baf7fb'), // courthouse

  // Crypto
  'app/crypto/news/chainlink-anchorage-blockchain-leadership-fund-pac-2026/page.tsx':
    u('photo-1639762681485-074b7f938ba0'), // blockchain/chain-link
  'app/crypto/news/visa-usdc-solana-settlement-lead-bank-cross-river/page.tsx':
    u('photo-1629193382974-f478714dba26'), // crypto/Bitcoin

  // Define / Cloud / Malware
  'app/define/hetzner-cloud-vs-digitalocean/page.tsx':
    u('photo-1558494949-ef010cbdcc31'), // server room / data center
  'app/define/malware/axios-npm-hijacked-rat-malware/page.tsx':
    u('photo-1526374965328-7f61d4dc18c5'), // dark terminal / cybersecurity
  'app/define/malware/deepload-ai-obfuscation-clickfix-2026/page.tsx':
    u('photo-1510915228340-29c85a43dcfe'), // cybersecurity / code
  'app/define/prediction-market/democrats-warn-government-insider-trading-prediction-markets-2026/page.tsx':
    u('photo-1611974789855-9c2a0a7236a3'), // stock market / trading
  'app/define/prediction-market/sdny-prosecutors-insider-trading-prediction-markets-2026/page.tsx':
    u('photo-1589391886645-d51941baf7fb'), // courthouse / legal

  // Entertainment
  'app/entertainment/hbo-max/harry-potter-series-unprecedented-financial-commitment-hbo/page.tsx':
    u('photo-1481788915-eb25b47f81e3'), // cinema / movie theater
  'app/entertainment/marvel/avengers-doomsday-trailer-cinemacon-2026-robert-downey-jr/page.tsx':
    u('photo-1612036782180-6f0b6cd846fe'), // Marvel / action movie
  'app/entertainment/news/project-hail-mary-vr-game-journey-among-the-stars-meta-quest/page.tsx':
    u('photo-1617802690658-1173a812650d'), // VR headset
  'app/entertainment/news/super-mario-galaxy-movie-371m-global-box-office-opening/page.tsx':
    u('photo-1593642632559-0c6d3fc62b89'), // gaming / Nintendo
  'app/entertainment/news/wbd-paramount-shareholder-vote-cnn-cbs-merger-2026/page.tsx':
    u('photo-1611162617213-7d7a39e9b1d7'), // media / TV streaming

  // Finance
  'app/finance/cross-river-bank-baas-visa-usdc/page.tsx':
    u('photo-1611974789855-9c2a0a7236a3'), // banking / fintech
  'app/finance/news/buffett-dimon-warn-private-credit-risks-threaten-banks/page.tsx':
    u('photo-1611974789855-9c2a0a7236a3'), // finance / banking
  'app/finance/news/charles-schwab-prediction-markets-rick-wurster-2026/page.tsx':
    u('photo-1611974789855-9c2a0a7236a3'), // trading / stocks
  'app/finance/news/cross-river-bank-visa-usdc-solana-baas-settlement/page.tsx':
    u('photo-1629193382974-f478714dba26'), // crypto/fintech
  'app/finance/news/jefferies-upgrades-twilio-buy-voice-ai-growth/page.tsx':
    u('photo-1611974789855-9c2a0a7236a3'), // finance / analyst
  'app/finance/news/lead-bank-visa-usdc-solana-crypto-settlement/page.tsx':
    u('photo-1629193382974-f478714dba26'), // crypto settlement

  // Google / AI / LLM
  'app/google/news/flash-attention-3-vs-turboquant-vs-paged-kv-cache-llm-optimization/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / generative
  'app/google/news/google-deepmind-claude-code-steve-yegge-demis-hassabis-2026/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / DeepMind
  'app/google/news/turboquant-llm-kv-cache-compression/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / LLM

  // Intel / Chips
  'app/intel/news/intel-joins-musk-terafab-ai-chip-project-texas/page.tsx':
    u('photo-1518770660439-4636190af475'), // circuit board / chip

  // Investigations
  'app/investigations/rappers/d4vd-arrested-murder-celeste-rivas-hernandez-tesla/page.tsx':
    u('photo-1494522855154-9297ac14b55f'), // dark city / crime scene moody

  // Meta / Social
  'app/meta/news/instagram-plus-subscription-test-philippines-japan-mexico-2026/page.tsx':
    u('photo-1611162616305-c69b3fa7fbe0'), // Instagram / phone / social

  // Microsoft / AI
  'app/microsoft/news/life-biosciences-fda-clearance-epigenetic-reprogramming-er-100/page.tsx':
    u('photo-1576091160399-112ba8d25d1d'), // biotech / medical
  'app/microsoft/news/microsoft-anthropic-mythos-ai-sdl-integration-2026/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / security
  'app/microsoft/news/nvidia-groq-inference-processor-gtc-2026/page.tsx':
    u('photo-1518770660439-4636190af475'), // GPU / chip hardware
  'app/microsoft/news/valve-ships-cs2-animation-overhaul-not-cs3-april-2026/page.tsx':
    u('photo-1542751371-adc38448a05e'), // gaming / FPS

  // NASA / Space
  'app/nasa/news/black-hole-jet-power-measured-cygnus-x1-curtin-university/page.tsx':
    u('photo-1462331940025-496dfbfc7564'), // deep space / nebula
  'app/nasa/news/first-close-pair-supermassive-black-holes-markarian-501/page.tsx':
    u('photo-1462331940025-496dfbfc7564'), // deep space / galaxy

  // Netflix
  'app/netflix/news/netflix-q1-2026-earnings-tiktok-feed-ben-affleck-interpositive-reed-hastings/page.tsx':
    u('photo-1611162617213-7d7a39e9b1d7'), // streaming / TV

  // News (general)
  'app/news/alibaba-qwen-3-6-model-preview-responses-api-typescript-sdk-2026/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / LLM
  'app/news/binance-prediction-markets-keyless-wallet-on-chain-probability-trading/page.tsx':
    u('photo-1629193382974-f478714dba26'), // crypto / Binance

  // Nvidia
  'app/nvidia/news/blackwell-b300-vs-amd-mi300x-vs-google-tpu-v6-2026-benchmark/page.tsx':
    u('photo-1518770660439-4636190af475'), // GPU / chip benchmark

  // OpenAI
  'app/open-ai/news/chatgpt-carplay-launch/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / ChatGPT
  'app/open-ai/news/openai-gpt-5-4-cyber-federal-briefings-five-eyes-2026/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / security
  'app/open-ai/news/openai-safety-fellowship-new-yorker-probe/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / safety research
  'app/open-ai/news/world-worldcoin-tools-for-humanity-deep-face-tinder-zoom-docusign-human-id/page.tsx':
    u('photo-1598128558393-70ff21433be0'), // biometric / iris scan

  // Red Bull / F1
  'app/redbull/news/red-bull-racing-crisis-2026-verstappen-exit-brain-drain/page.tsx':
    u('photo-1504639725590-34d0984388bd'), // F1 / racing car

  // Social
  'app/social/news/bond-app-launch-ai-memories-no-feed-doomscrolling-2026/page.tsx':
    u('photo-1611162617213-7d7a39e9b1d7'), // social / phone app

  // Tech
  'app/tech/asml-euv-lithography-profile/page.tsx':
    u('photo-1518770660439-4636190af475'), // semiconductor / chip fab
  'app/tech/digital-realty/digital-realty-3-25-billion-hyperscale-data-center-fund-2026/page.tsx':
    u('photo-1558494949-ef010cbdcc31'), // data center
  'app/tech/news/ai-industry-millions-texas-races-2026-midterms/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / politics
  'app/tech/news/palantir-manifesto-ai-arms-race-shares-slide-2026/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / defense tech
  'app/tech/news/softbank-natural-ai-phone-brain-technologies-japan-2026/page.tsx':
    u('photo-1677442135703-1787eea5ce01'), // AI / mobile
  'app/tech/square/bitcoin-payments-4-million-merchants-2026/page.tsx':
    u('photo-1629193382974-f478714dba26'), // crypto / payments
  'app/tech/tsmc-semiconductor-foundry-profile/page.tsx':
    u('photo-1518770660439-4636190af475'), // semiconductor / TSMC

  // Technology (helium)
  'app/technology/news/helium-crisis-semiconductor-iran-conflict-2026/page.tsx':
    u('photo-1518770660439-4636190af475'), // semiconductor / supply chain

  // Trump / Environment
  'app/trump/god-squad-gulf-drilling-esa-exemption/page.tsx':
    u('photo-1472214103451-9374bd1c798e'), // nature / environment / oil rig moody

  // Video Games
  'app/video-games/ark-raiders/flash-point-update/page.tsx':
    u('photo-1542751371-adc38448a05e'), // gaming action
  'app/video-games/mario-kart/version-1-6-0-bob-omb-blast/page.tsx':
    u('photo-1593642632559-0c6d3fc62b89'), // Nintendo / Mario
  'app/video-games/mha/ultra-rumble/season-16/cluster-bakugo/page.tsx':
    u('photo-1542751371-adc38448a05e'), // gaming / anime fighter
  'app/video-games/ubisoft/page.tsx':
    u('photo-1542751371-adc38448a05e'), // gaming / Ubisoft

  // World Cup
  'app/world-cup/news/fifa-world-cup-2026-final-halftime-show-chris-martin/page.tsx':
    u('photo-1461896836934-ffe607ba8211'), // stadium / soccer
};

const root = path.resolve(process.cwd());
let updated = 0;

for (const [relPath, imageUrl] of Object.entries(assignments)) {
  const filePath = path.join(root, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  MISSING: ${relPath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes("OG_IMAGE = ''")) {
    console.log(`⏭️  SKIP (already has value): ${relPath}`);
    continue;
  }
  const newContent = content.replace("const OG_IMAGE = '';", `const OG_IMAGE = '${imageUrl}';`);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ ${relPath}`);
  updated++;
}

console.log(`\nDone. Updated ${updated} files.`);
