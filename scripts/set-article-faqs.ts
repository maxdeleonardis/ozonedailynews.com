/**
 * set-article-faqs.ts
 *
 * Sets SEO-optimised FAQ items on key high-traffic articles.
 * FAQs are rendered as FAQAccordion + FAQPage JSON-LD schema, eligible for
 * Google FAQ rich results.
 *
 * Run: npx tsx scripts/set-article-faqs.ts
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleFAQ {
  slug: string;
  label: string;
  faq_items: FAQItem[];
}

const articles: ArticleFAQ[] = [
  // ─── Unreal Engine / Fortnite ─────────────────────────────────────────────
  {
    slug: 'entertainment-news-fortnite-moves-into-movies',
    label: 'Unreal Engine entertainment',
    faq_items: [
      {
        question: 'How many film and TV productions used Unreal Engine in 2025?',
        answer:
          'According to Epic Games at GDC 2026, 153 film and TV productions used Unreal Engine 5 in 2025 alone, representing a 44% year-over-year increase in in-camera VFX adoption. Cumulative adoption across all productions now exceeds 500 projects.',
      },
      {
        question: 'What is in-camera VFX (ICVFX)?',
        answer:
          'In-camera visual effects (ICVFX) is a virtual production technique where high-resolution digital environments are displayed on large LED volume stages. Actors perform in front of the screens and the final composited image is captured in-camera, eliminating traditional post-production green screen work and reducing costs.',
      },
      {
        question: 'Does Fortnite run on Unreal Engine?',
        answer:
          'Yes. Fortnite is developed and runs on Unreal Engine, the same real-time rendering technology now powering film and television productions at ILM, Netflix, and Warner Bros. Epic Games built Unreal Engine 5.7 features on lessons learned shipping Fortnite at scale.',
      },
      {
        question: 'What is ILM StageCraft?',
        answer:
          'ILM StageCraft is Industrial Light and Magic\'s proprietary virtual production system, built on Unreal Engine. It uses curved LED volume stages to generate photo-realistic digital environments displayed behind actors in real time. The technology debuted on The Mandalorian (2019) and has since been used on dozens of major productions.',
      },
      {
        question: 'What did Epic Games announce at GDC 2026?',
        answer:
          'At GDC 2026, Epic Games announced that Unreal Engine 5.7 now powers 153 active film and TV projects, up 44% year-over-year. Key new features include MetaHuman Creator 5.7, improved nDisplay 5.7 for LED volume rendering, and expanded UEFN tools bridging game development and entertainment production.',
      },
    ],
  },

  // ─── Paramount / WBD merger ───────────────────────────────────────────────
  {
    slug: 'entertainment-news-paramount-skydance-acquires-warner-bros-discovery-110-billion',
    label: 'Paramount-WBD merger',
    faq_items: [
      {
        question: 'How much is the Warner Bros. Discovery and Paramount merger worth?',
        answer:
          'The combined entity is valued at approximately $110 billion, making the Skydance-Paramount-WBD consolidation one of the largest media mergers in history. The deal combines the CBS broadcast network, Paramount+, Max (formerly HBO Max), CNN, and a content library spanning tens of thousands of hours.',
      },
      {
        question: 'What happens to CNN and CBS after the merger?',
        answer:
          'Under the proposed merger structure, CBS would continue operating as a broadcast network and CNN would remain a standalone news operation. Both brands are expected to be maintained under the combined Skydance-led parent company, though specific structural decisions are subject to regulatory approval.',
      },
      {
        question: 'Which streaming services will the merged company control?',
        answer:
          'The combined company would control Paramount+, Max (formerly HBO Max), and Pluto TV (the free ad-supported streaming platform). Combining these libraries would create one of the largest streaming content catalogues in the world, rivaling Netflix and Disney+.',
      },
      {
        question: 'Who is Skydance Media and why are they involved?',
        answer:
          'Skydance Media is a production and technology company founded by David Ellison, son of Oracle co-founder Larry Ellison. Skydance first acquired Paramount Global and is now leading the broader acquisition of Warner Bros. Discovery assets, positioning the Ellison family as one of the most influential forces in the global media industry.',
      },
    ],
  },

  // ─── Take-Two AI / GTA 6 ──────────────────────────────────────────────────
  {
    slug: 'video-games-gta-6-news-take-two-ai-team-shake-up-2026',
    label: 'Take-Two AI GTA 6',
    faq_items: [
      {
        question: 'Is GTA 6 still on track for its 2026 release?',
        answer:
          'Take-Two Interactive has not announced any changes to the GTA 6 release schedule as a result of its AI team restructuring. Rockstar Games\' Grand Theft Auto VI remains one of the highest-anticipated video game releases of 2026, with Take-Two maintaining its fiscal year guidance around the title.',
      },
      {
        question: 'What AI changes did Take-Two make in 2026?',
        answer:
          'Take-Two Interactive restructured its internal AI development organization in 2026, shifting focus from broad experimental AI research toward applied AI tools that directly accelerate game production. The move follows an industry-wide trend of publishers integrating AI into QA, animation, and procedural asset generation pipelines.',
      },
      {
        question: 'Does GTA 6 use artificial intelligence in its development?',
        answer:
          'Rockstar Games applies machine learning and AI tools across multiple stages of GTA 6 development, including automated quality assurance testing, NPC behavioral modeling, and procedural generation of environmental assets. These tools allow teams to iterate faster on the open-world environment of Vice City.',
      },
      {
        question: 'What is Take-Two Interactive?',
        answer:
          'Take-Two Interactive is the parent company of Rockstar Games (Grand Theft Auto, Red Dead Redemption), 2K Games (NBA 2K, Borderlands, BioShock), and Private Division. It is one of the largest video game publishers in the world by revenue and market capitalisation.',
      },
    ],
  },

  // ─── Nvidia Blackwell B300 ────────────────────────────────────────────────
  {
    slug: 'nvidia-news-nvidia-blackwell-b300-data-center-demand-surge-2026',
    label: 'Nvidia Blackwell B300 data center',
    faq_items: [
      {
        question: 'What is the Nvidia Blackwell B300 GPU?',
        answer:
          'The Blackwell B300 is Nvidia\'s next-generation data center GPU built on the Blackwell architecture. It delivers significantly higher AI inference and training performance compared to the H100 and H200, with improved memory bandwidth, NVLink 5.0 high-speed interconnect, and enhanced transformer engine optimisations targeting large language model workloads.',
      },
      {
        question: 'Why is demand for Nvidia AI chips surging in 2026?',
        answer:
          'Demand is surging because AI model training and inference workloads are growing faster than manufacturing capacity can supply. The proliferation of large language models, agentic AI systems, and enterprise AI deployments has created sustained hyperscale demand from AWS, Microsoft Azure, Google Cloud, and Meta, all of whom are in multi-year procurement cycles for Nvidia GPUs.',
      },
      {
        question: 'How does the Blackwell B300 compare to the H100?',
        answer:
          'The Blackwell B300 delivers roughly 2.5 times the aggregate compute density of the H100, with substantially improved memory bandwidth and a new NVLink 5.0 interconnect that allows larger GPU clusters to work together efficiently. These gains make the B300 better suited for real-time inference at scale and training runs requiring hundreds or thousands of GPUs.',
      },
      {
        question: 'Who manufactures Nvidia GPUs?',
        answer:
          'Nvidia GPUs are manufactured by TSMC (Taiwan Semiconductor Manufacturing Company) using advanced process nodes. Nvidia designs the chips and relies on TSMC for fabrication, which is a key bottleneck limiting how quickly supply can scale to meet AI chip demand.',
      },
    ],
  },

  // ─── OpenAI GPT-5 / Five Eyes ─────────────────────────────────────────────
  {
    slug: 'open-ai-news-openai-gpt-5-4-cyber-federal-briefings-five-eyes-2026',
    label: 'OpenAI GPT-5 Five Eyes cyber',
    faq_items: [
      {
        question: 'What is GPT-5?',
        answer:
          'GPT-5 is OpenAI\'s most advanced large language model, featuring enhanced reasoning capabilities, improved multimodal understanding, reduced hallucination rates, and better factual accuracy than GPT-4. It has been briefed to national security agencies including Five Eyes partners due to its potential national security implications.',
      },
      {
        question: 'What is the Five Eyes intelligence alliance?',
        answer:
          'Five Eyes is a multilateral intelligence-sharing alliance comprising the United States (NSA/CIA), United Kingdom (GCHQ/MI6), Canada (CSE/CSIS), Australia (ASD/ASIS), and New Zealand (GCSB). Its member agencies collaborate on signals intelligence, cybersecurity threats, and emerging technology risks including AI.',
      },
      {
        question: 'Why is OpenAI briefing intelligence agencies on GPT-5?',
        answer:
          'OpenAI has engaged with Five Eyes intelligence agencies to brief them on GPT-5\'s capabilities due to concerns about potential misuse, including AI-generated misinformation at scale, automated cyberattack tooling, and state-sponsored influence operations that could exploit advanced language models.',
      },
      {
        question: 'Can AI like GPT-5 be used in cyberattacks?',
        answer:
          'Researchers and government agencies have identified that advanced language models can assist in writing malicious code, automating spear-phishing campaigns, and generating persuasive disinformation. OpenAI implements use policies and safety layers to prevent such misuse, but the dual-use nature of the technology is a key concern for intelligence communities worldwide.',
      },
    ],
  },

  // ─── Super Mario Galaxy movie ─────────────────────────────────────────────
  {
    slug: 'entertainment-news-super-mario-galaxy-movie-371m-global-box-office-opening',
    label: 'Super Mario Galaxy movie box office',
    faq_items: [
      {
        question: 'How much did the Super Mario Galaxy movie make opening weekend?',
        answer:
          'The Super Mario Galaxy animated film earned $371 million globally in its opening weekend, making it one of the biggest animated film openings of all time and surpassing the opening weekend of the 2023 Super Mario Bros. Movie domestically.',
      },
      {
        question: 'Who made the Super Mario Galaxy movie?',
        answer:
          'The Super Mario Galaxy movie was produced by Universal Pictures and Illumination, the animation studio behind Despicable Me and the 2023 Super Mario Bros. Movie, in partnership with Nintendo. The film continues the collaboration between Illumination CEO Chris Meledandri and Nintendo.',
      },
      {
        question: 'Is Super Mario Galaxy a movie or a video game?',
        answer:
          'Super Mario Galaxy originated as a critically acclaimed Nintendo Wii video game released in November 2007, widely considered one of the greatest games ever made. The 2026 film is an animated adaptation by Illumination and Universal based on the game\'s space-exploration premise, following the commercial success of the 2023 Mario film.',
      },
      {
        question: 'Is the Super Mario Galaxy movie part of a Nintendo cinematic universe?',
        answer:
          'Nintendo and Illumination have not officially announced a cinematic universe, but the commercial success of the 2023 Super Mario Bros. Movie and the 2026 Super Mario Galaxy film suggests Nintendo intends to continue adapting its IP to the big screen. Additional Nintendo properties are expected to follow.',
      },
    ],
  },

  // ─── Conan O'Brien / Oscars ───────────────────────────────────────────────
  {
    slug: 'entertainment-news-conan-obrien-hosting-98th-oscars-abc-hulu',
    label: "Conan O'Brien 98th Oscars host",
    faq_items: [
      {
        question: "When is Conan O'Brien hosting the Oscars?",
        answer:
          "Conan O'Brien is hosting the 98th Academy Awards ceremony. The Oscars air live on ABC and are available to stream on Hulu.",
      },
      {
        question: "Has Conan O'Brien hosted the Oscars before?",
        answer:
          "No. The 98th Oscars marks Conan O'Brien's first time hosting the Academy Awards. He is best known for hosting Late Night with Conan O'Brien, The Tonight Show, and Conan, and more recently for his podcast Conan O'Brien Needs a Friend.",
      },
      {
        question: 'Where can I watch the Oscars?',
        answer:
          'The Oscars broadcast on ABC and are available to stream live on Hulu, which holds exclusive streaming rights to the Academy Awards ceremony.',
      },
      {
        question: 'What are the Academy Awards?',
        answer:
          'The Academy Awards, commonly known as the Oscars, are annual awards presented by the Academy of Motion Picture Arts and Sciences (AMPAS) recognising excellence in the film industry. They are among the most prestigious awards in global entertainment and have been held annually since 1929.',
      },
    ],
  },
];

async function main() {
  console.log(`Setting FAQ items for ${articles.length} articles...\n`);
  let ok = 0;
  let fail = 0;

  for (const article of articles) {
    const { error } = await supabase
      .from('articles')
      .update({ faq_items: article.faq_items })
      .eq('slug', article.slug);

    if (error) {
      console.error(`  FAIL [${article.label}] ${article.slug}: ${error.message}`);
      fail++;
    } else {
      console.log(`  OK   [${article.label}] ${article.faq_items.length} FAQs`);
      ok++;
    }
  }

  console.log(`\nDone: ${ok} updated, ${fail} failed.`);
  if (fail > 0) process.exit(1);
}

main();
