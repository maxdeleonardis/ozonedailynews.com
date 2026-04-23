/**
 * seed-define-articles.ts
 *
 * Inserts all /define/* articles into the wiki_articles table.
 * Run: npx tsx scripts/seed-define-articles.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface WikiArticleRow {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  topic_tag?: string;
  content: { type: string; content: string }[];
  tags: string[];
  published_at: string;
  read_time: string;
}

const articles: WikiArticleRow[] = [
  // ── 1. Agentic AI ──────────────────────────────────────────────────────────
  {
    slug: 'define-agentic-ai',
    title: 'What Is Agentic AI? | Autonomous AI Agents Explained',
    subtitle: 'Agentic AI',
    category: 'Definitions',
    topic_tag: 'ai',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '6 min read',
    tags: ['Agentic AI', 'AI Agents', 'OpenAI', 'Anthropic', 'LangChain', 'AutoGPT'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>Agentic AI refers to artificial intelligence systems designed to operate autonomously, making decisions and executing multi-step tasks without requiring human approval at each stage. Unlike traditional chatbots that respond to single prompts, agentic AI systems can plan, reason about subtasks, use external tools, and adapt their approach based on intermediate results.</p>

<h2>How Agentic AI Works</h2>
<p>An agentic AI system typically follows a loop: perceive the current state, plan the next action, execute it using available tools (APIs, web browsers, code interpreters, file systems), observe the outcome, and repeat until the goal is achieved. This loop is often called a ReAct (Reasoning + Acting) cycle.</p>

<p>Key capabilities that distinguish agentic AI from standard AI assistants include:</p>
<ul>
<li><strong>Goal decomposition</strong> - Breaking complex objectives into smaller, manageable subtasks</li>
<li><strong>Tool use</strong> - Calling external APIs, running code, browsing the web, and reading files</li>
<li><strong>Memory</strong> - Maintaining context across long task sequences and multiple sessions</li>
<li><strong>Self-correction</strong> - Detecting errors in outputs and adjusting the approach</li>
<li><strong>Multi-agent collaboration</strong> - Multiple specialized agents working together on a shared task</li>
</ul>

<h2>Real-World Examples in 2026</h2>
<p>OpenAI's Operator and Codex agents can browse the web and write software autonomously. Anthropic's Claude computer use feature lets Claude control a desktop environment. Google's Project Mariner navigates web pages on behalf of users. Microsoft's Copilot Agents handle enterprise workflows across Microsoft 365 apps.</p>

<p>In software development, tools like Cursor, Windsurf, and GitHub Copilot agent mode can implement features across entire codebases, running tests, debugging errors, and committing code with minimal human intervention.</p>

<h2>Agentic AI vs. AI Assistants</h2>
<p>A standard AI assistant like ChatGPT responds to individual prompts and waits for the next instruction. An agentic AI system takes a high-level goal ("book me the cheapest flight to Tokyo next month") and autonomously performs the research, comparison, and booking steps required to achieve it.</p>

<table>
<thead><tr><th>Feature</th><th>AI Assistant</th><th>Agentic AI</th></tr></thead>
<tbody>
<tr><td>Interaction</td><td>Single prompt-response</td><td>Multi-step autonomous</td></tr>
<tr><td>Tool use</td><td>Limited or none</td><td>Extensive (APIs, browsers, code)</td></tr>
<tr><td>Planning</td><td>No task decomposition</td><td>Breaks goals into subtasks</td></tr>
<tr><td>Error handling</td><td>User must correct</td><td>Self-corrects and retries</td></tr>
<tr><td>Memory</td><td>Single conversation</td><td>Persistent across sessions</td></tr>
</tbody>
</table>

<h2>Risks and Limitations</h2>
<p>Agentic AI introduces new safety concerns. Autonomous systems can take irreversible actions (deleting files, sending emails, making purchases) without human review. Prompt injection attacks can hijack agent behavior. Multi-step reasoning can compound small errors into large failures. The AI safety research community is actively developing guardrails including human-in-the-loop checkpoints, sandboxed execution environments, and action approval policies.</p>

<h2>Key Frameworks</h2>
<p>Popular frameworks for building agentic AI systems include LangChain/LangGraph, CrewAI, AutoGen (Microsoft), and the OpenAI Agents SDK. These provide the scaffolding for tool registration, memory management, and multi-agent orchestration.</p>

</div>`
      }
    ]
  },

  // ── 2. Model Context Protocol ──────────────────────────────────────────────
  {
    slug: 'define-model-context-protocol',
    title: 'What Is MCP? | Model Context Protocol Explained 2026',
    subtitle: 'Model Context Protocol',
    category: 'Definitions',
    topic_tag: 'ai',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '5 min read',
    tags: ['MCP', 'Model Context Protocol', 'Anthropic', 'Claude', 'AI Tools', 'Agentic AI'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>The Model Context Protocol (MCP) is an open standard created by Anthropic that defines how AI models connect to external tools, data sources, and services. Think of it as a universal adapter: instead of building custom integrations for every AI model and every tool, developers implement the MCP specification once and any MCP-compatible model can use it.</p>

<h2>How MCP Works</h2>
<p>MCP uses a client-server architecture. The AI application (like Claude Desktop or Cursor) acts as the MCP client. External services (databases, APIs, file systems, web scrapers) run as MCP servers. The protocol defines three core primitives:</p>

<ul>
<li><strong>Tools</strong> - Functions the AI can call (e.g., "search_database", "send_email", "create_file")</li>
<li><strong>Resources</strong> - Data the AI can read (e.g., file contents, database schemas, API documentation)</li>
<li><strong>Prompts</strong> - Reusable prompt templates that servers can expose to clients</li>
</ul>

<p>When a user asks Claude to "check the latest sales numbers," Claude's MCP client discovers available tools from connected MCP servers, selects the appropriate database query tool, calls it with the right parameters, and incorporates the results into its response.</p>

<h2>Why MCP Matters</h2>
<p>Before MCP, every AI integration was a custom build. Connecting Claude to Slack required different code than connecting GPT-4 to Slack. MCP standardizes this. One Slack MCP server works with any MCP-compatible AI client. This is similar to how USB standardized hardware connections, replacing dozens of proprietary cables.</p>

<p>By April 2026, MCP has been adopted by major AI development tools including Cursor, Windsurf, VS Code (GitHub Copilot), and Zed. The ecosystem includes thousands of community-built MCP servers covering databases (PostgreSQL, MongoDB), developer tools (GitHub, Jira), communication platforms (Slack, Discord), and cloud services (AWS, GCP).</p>

<h2>MCP vs. Function Calling</h2>
<p>Function calling (used by OpenAI and others) lets models invoke predefined functions within a single API call. MCP goes further: it provides a persistent connection between AI and tools, supports tool discovery at runtime, handles authentication, and enables bi-directional communication. Function calling is a feature; MCP is a protocol.</p>

<h2>Technical Architecture</h2>
<p>MCP servers communicate over JSON-RPC 2.0, either through stdio (local processes) or HTTP with Server-Sent Events (remote servers). Each server declares its capabilities (tools, resources, prompts) when a client connects. The protocol handles capability negotiation, error reporting, and progress tracking.</p>

<h2>Security Considerations</h2>
<p>Because MCP servers can access sensitive systems (databases, email, file systems), security is critical. Best practices include running servers with minimal permissions, validating all tool inputs, requiring user confirmation for destructive actions, and auditing tool usage logs.</p>

</div>`
      }
    ]
  },

  // ── 3. Tariff ──────────────────────────────────────────────────────────────
  {
    slug: 'define-tariff',
    title: 'What Is a Tariff? | Definition, Types & 2026 Examples',
    subtitle: 'Tariff',
    category: 'Definitions',
    topic_tag: 'finance',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '6 min read',
    tags: ['Tariff', 'Trade Policy', 'US Tariffs', 'Import Tax', 'Trade War', 'Economics'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>A tariff is a tax imposed by a government on goods imported from (or, less commonly, exported to) another country. Tariffs increase the price of foreign products, making domestically produced alternatives more competitive. They are one of the oldest tools of trade policy and remain central to international economic relations in 2026.</p>

<h2>How Tariffs Work</h2>
<p>When a company imports goods into the United States, it must pay the applicable tariff rate to U.S. Customs and Border Protection before the goods clear customs. The importer, not the foreign manufacturer, pays the tariff. Importers typically pass this cost to consumers through higher retail prices.</p>

<p>For example, if the U.S. imposes a 25% tariff on imported steel and a shipment is valued at $1 million, the importer pays $250,000 in tariff duties on top of the purchase price.</p>

<h2>Types of Tariffs</h2>
<ul>
<li><strong>Ad valorem tariff</strong> - A percentage of the imported good's value (e.g., 10% on all imported electronics)</li>
<li><strong>Specific tariff</strong> - A fixed dollar amount per unit (e.g., $0.50 per kilogram of imported sugar)</li>
<li><strong>Compound tariff</strong> - Combines both ad valorem and specific rates</li>
<li><strong>Protective tariff</strong> - Designed to shield domestic industries from foreign competition</li>
<li><strong>Revenue tariff</strong> - Primarily intended to generate government income</li>
<li><strong>Retaliatory tariff</strong> - Imposed in response to another country's trade restrictions</li>
<li><strong>Reciprocal tariff</strong> - Set to match the tariff rate another country charges on U.S. exports</li>
</ul>

<h2>US Tariff Policy in 2026</h2>
<p>The United States has significantly expanded its use of tariffs since 2025. The current administration has imposed broad tariffs on imports from China (ranging from 60-145%), a baseline 10% tariff on most other imports, and sector-specific tariffs on steel (25%), aluminum (25%), and automobiles (25%). These represent the most aggressive U.S. tariff regime since the Smoot-Hawley Tariff Act of 1930.</p>

<h2>Economic Effects</h2>
<p>Economists broadly agree that tariffs raise consumer prices, reduce trade volumes, and can trigger retaliatory tariffs from trading partners. Supporters argue tariffs protect domestic jobs, reduce trade deficits, and strengthen national security by preserving critical manufacturing capacity. Critics counter that tariffs function as a regressive tax on consumers and disrupt global supply chains.</p>

<table>
<thead><tr><th>Effect</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Consumer prices</td><td>Rise as importers pass tariff costs to buyers</td></tr>
<tr><td>Domestic production</td><td>May increase if tariffs make local goods cheaper</td></tr>
<tr><td>Government revenue</td><td>Tariff payments flow to the federal treasury</td></tr>
<tr><td>Trade volume</td><td>Typically declines as tariffs reduce imports</td></tr>
<tr><td>Retaliation risk</td><td>Trading partners often impose counter-tariffs</td></tr>
</tbody>
</table>

<h2>Tariff vs. Quota vs. Sanction</h2>
<p>A tariff taxes imports but still allows them. A quota caps the quantity of goods that can be imported. A sanction bans trade with specific countries or entities entirely. All three are tools of trade policy but operate through different mechanisms.</p>

</div>`
      }
    ]
  },

  // ── 4. Vibe Coding ────────────────────────────────────────────────────────
  {
    slug: 'define-vibe-coding',
    title: 'What Is Vibe Coding? | AI-Assisted Programming Trend',
    subtitle: 'Vibe Coding',
    category: 'Definitions',
    topic_tag: 'ai',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '5 min read',
    tags: ['Vibe Coding', 'AI Coding', 'Cursor', 'GitHub Copilot', 'Andrej Karpathy', 'Software Development'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>Vibe coding is a software development approach where the programmer describes what they want in natural language and lets an AI model generate the code. The term was coined by Andrej Karpathy (co-founder of OpenAI, former Tesla AI director) in February 2025, who described it as "fully giving in to the vibes" and accepting AI-generated code without fully understanding every line.</p>

<h2>How Vibe Coding Works</h2>
<p>In a vibe coding workflow, the developer writes plain-English instructions (or speaks them), and an AI coding assistant generates, edits, and debugs the code. The developer's role shifts from writing code to reviewing results, describing desired changes, and guiding the AI toward the correct output.</p>

<p>A typical vibe coding session:</p>
<ol>
<li>Developer describes a feature: "Add a dark mode toggle to the navbar that persists in localStorage"</li>
<li>AI generates the component, state management, and CSS</li>
<li>Developer reviews the result in the browser</li>
<li>Developer asks for adjustments: "Make the toggle icon animate when switching"</li>
<li>AI modifies the code accordingly</li>
</ol>

<h2>Tools That Enable Vibe Coding</h2>
<p>The vibe coding workflow is powered by AI coding assistants that integrate directly into development environments:</p>
<ul>
<li><strong>Cursor</strong> - AI-native code editor with agent mode, inline editing, and multi-file context</li>
<li><strong>GitHub Copilot</strong> - AI pair programmer integrated into VS Code with agent and chat modes</li>
<li><strong>Windsurf</strong> - AI coding IDE with persistent context (Cascade) and autonomous coding flows</li>
<li><strong>Claude Code</strong> - Anthropic's terminal-based coding agent for agentic development</li>
<li><strong>Replit Agent</strong> - Builds and deploys full applications from natural language descriptions</li>
<li><strong>Bolt / Lovable</strong> - Browser-based AI app builders for rapid prototyping</li>
</ul>

<h2>The Debate</h2>
<p>Vibe coding is controversial in the software engineering community. Supporters say it dramatically lowers the barrier to building software, allowing non-engineers to create functional applications and experienced developers to move faster. Critics argue that accepting code without understanding it leads to security vulnerabilities, technical debt, unmaintainable codebases, and a generation of developers who cannot debug without AI assistance.</p>

<h2>Vibe Coding vs. Traditional Development</h2>
<table>
<thead><tr><th>Aspect</th><th>Traditional</th><th>Vibe Coding</th></tr></thead>
<tbody>
<tr><td>Primary input</td><td>Code written by developer</td><td>Natural language instructions</td></tr>
<tr><td>Code understanding</td><td>Developer writes and understands every line</td><td>Developer may not review all generated code</td></tr>
<tr><td>Speed</td><td>Hours to days per feature</td><td>Minutes to hours per feature</td></tr>
<tr><td>Skill floor</td><td>Requires programming knowledge</td><td>Requires clear communication</td></tr>
<tr><td>Debugging</td><td>Manual inspection and reasoning</td><td>AI-assisted or AI-led debugging</td></tr>
</tbody>
</table>

<h2>Who Uses Vibe Coding</h2>
<p>Karpathy described vibe coding in the context of weekend projects and prototypes. In practice, the approach has been adopted most widely for rapid prototyping, internal tools, personal projects, and by non-technical founders building MVPs. Production engineering teams at major companies still require code review and understanding, though AI assistance is standard.</p>

</div>`
      }
    ]
  },

  // ── 5. Smart Contract ─────────────────────────────────────────────────────
  {
    slug: 'define-what-is-a-smart-contract',
    title: 'What Is a Smart Contract? | Ethereum, Solana Explained',
    subtitle: 'Smart Contract',
    category: 'Definitions',
    topic_tag: 'crypto',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '5 min read',
    tags: ['Smart Contract', 'Ethereum', 'Solana', 'Blockchain', 'DeFi', 'Solidity'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>A smart contract is a self-executing program stored on a blockchain that automatically runs when predefined conditions are met. Once deployed, the code cannot be altered, and its execution is verified by every node on the network. Smart contracts eliminate the need for intermediaries by encoding agreement terms directly into code.</p>

<h2>How Smart Contracts Work</h2>
<p>A smart contract follows an if-then logic: if condition X is satisfied, then action Y executes automatically. The contract lives at a specific address on the blockchain, holds its own balance, and maintains its own state (stored data). Anyone can interact with it by sending a transaction to its address.</p>

<p>Example: A freelancer and client agree on a smart contract that releases payment when the client confirms delivery. The client deposits funds into the contract. When the client calls the "approve" function, the contract automatically transfers the funds to the freelancer. No bank, no escrow service, no payment processor.</p>

<h2>Where Smart Contracts Run</h2>
<ul>
<li><strong>Ethereum</strong> - The original and largest smart contract platform. Uses Solidity as its primary programming language. Processes ~15-30 transactions per second on mainnet, with Layer 2 networks (Arbitrum, Optimism, Base) handling thousands more.</li>
<li><strong>Solana</strong> - High-throughput chain processing 4,000+ TPS. Smart contracts (called "programs") are written in Rust. Lower fees than Ethereum mainnet.</li>
<li><strong>Other chains</strong> - Avalanche (Solidity-compatible), Cosmos (CosmWasm), Polkadot (ink!), and others each support smart contracts with different tradeoffs.</li>
</ul>

<h2>Real-World Applications</h2>
<p>Smart contracts power most of the decentralized application (dApp) ecosystem:</p>
<ul>
<li><strong>DeFi</strong> - Lending (Aave), trading (Uniswap), stablecoins (USDC, DAI)</li>
<li><strong>NFTs</strong> - Minting, royalties, and marketplace logic (OpenSea, Blur)</li>
<li><strong>DAOs</strong> - Governance voting and treasury management</li>
<li><strong>Gaming</strong> - In-game asset ownership and trading</li>
<li><strong>Insurance</strong> - Parametric policies that pay out automatically based on data feeds</li>
</ul>

<h2>Risks and Limitations</h2>
<p>Smart contracts are immutable, meaning bugs cannot be patched after deployment (unless the contract includes upgrade mechanisms). Code vulnerabilities have led to billions in losses: the 2016 DAO hack ($60M), the 2022 Wormhole exploit ($320M), and the Ronin bridge theft ($625M) were all smart contract exploits. Security audits by firms like Trail of Bits, OpenZeppelin, and Certora are standard practice before deploying high-value contracts.</p>

<p>Smart contracts also cannot access off-chain data on their own. Oracles (like Chainlink) feed real-world data (prices, weather, sports scores) into contracts, but this introduces a trust dependency on the oracle provider.</p>

</div>`
      }
    ]
  },

  // ── 6. Stablecoin ─────────────────────────────────────────────────────────
  {
    slug: 'define-what-is-a-stablecoin',
    title: 'What Is a Stablecoin? | USDC, USDT & How They Work',
    subtitle: 'Stablecoin',
    category: 'Definitions',
    topic_tag: 'crypto',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '6 min read',
    tags: ['Stablecoin', 'USDC', 'USDT', 'Tether', 'Circle', 'GENIUS Act', 'Crypto Regulation'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>A stablecoin is a cryptocurrency designed to maintain a stable value, typically pegged 1:1 to a fiat currency like the US dollar. Unlike Bitcoin or Ethereum, whose prices fluctuate significantly, stablecoins aim to stay at exactly $1.00 per token. They serve as the primary medium of exchange within the crypto ecosystem, enabling trading, lending, payments, and remittances without exposure to price volatility.</p>

<h2>Types of Stablecoins</h2>
<ul>
<li><strong>Fiat-backed (custodial)</strong> - Each token is backed by real dollars (or dollar equivalents like Treasury bills) held in reserve by the issuer. Examples: USDC (Circle), USDT (Tether). This is the dominant model.</li>
<li><strong>Crypto-backed (overcollateralized)</strong> - Backed by cryptocurrency worth more than the stablecoin's value, held in smart contracts. Example: DAI (MakerDAO), backed by 150%+ collateral in ETH and other assets.</li>
<li><strong>Algorithmic</strong> - Uses smart contract algorithms to expand or contract supply to maintain the peg, with no (or minimal) reserves. The collapse of TerraUSD (UST) in May 2022, which lost $40 billion in value, demonstrated the fragility of this model.</li>
</ul>

<h2>USDC vs. USDT</h2>
<table>
<thead><tr><th>Feature</th><th>USDC (Circle)</th><th>USDT (Tether)</th></tr></thead>
<tbody>
<tr><td>Market cap (2026)</td><td>~$60 billion</td><td>~$140 billion</td></tr>
<tr><td>Issuer</td><td>Circle (US-based)</td><td>Tether Limited (BVI)</td></tr>
<tr><td>Reserve transparency</td><td>Monthly attestations by Deloitte</td><td>Quarterly reports, historically questioned</td></tr>
<tr><td>Regulation</td><td>Registered MSB, state-licensed</td><td>Operates outside US regulatory framework</td></tr>
<tr><td>Primary chains</td><td>Ethereum, Solana, Base, Arbitrum</td><td>Ethereum, Tron</td></tr>
<tr><td>Use case strength</td><td>Institutional, US-compliant</td><td>Trading pairs, emerging markets</td></tr>
</tbody>
</table>

<h2>How Stablecoins Are Used</h2>
<p>Stablecoins are the backbone of crypto markets. Traders use them to move in and out of volatile positions. DeFi protocols use them as lending collateral and liquidity pool assets. Cross-border payment companies use them as a settlement rail, sending value internationally in seconds rather than days. In 2025, stablecoins settled over $10 trillion in on-chain transaction volume.</p>

<h2>Regulation | The GENIUS Act</h2>
<p>The GENIUS Act (Guiding and Establishing National Innovation for US Stablecoins), introduced in the US Senate in 2025, establishes the first comprehensive federal framework for stablecoin issuance. Key provisions include mandatory 1:1 reserve backing, regular audits, consumer protection requirements, and a dual federal-state licensing regime. The bill passed the Senate Banking Committee and is expected to shape global stablecoin regulation.</p>

<h2>Risks</h2>
<p>Stablecoins carry several risks: reserve adequacy (does the issuer actually hold enough dollars?), depegging events (when the price drops below $1.00), smart contract vulnerabilities, regulatory action (freezing or blacklisting addresses), and counterparty risk on centralized issuers. The TerraUSD collapse in 2022 remains the most significant stablecoin failure, triggering industry-wide contagion.</p>

</div>`
      }
    ]
  },

  // ── 7. LLM ────────────────────────────────────────────────────────────────
  {
    slug: 'define-what-is-an-llm',
    title: 'What Is an LLM? | Large Language Models Explained',
    subtitle: 'Large Language Model (LLM)',
    category: 'Definitions',
    topic_tag: 'ai',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '6 min read',
    tags: ['LLM', 'Large Language Model', 'GPT-4', 'Claude', 'Transformer', 'OpenAI', 'Anthropic'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>A large language model (LLM) is a type of artificial intelligence trained on massive amounts of text data to understand, generate, and reason about human language. LLMs power chatbots (ChatGPT, Claude), coding assistants (GitHub Copilot), search engines (Google AI Overview), and a growing range of enterprise applications. The "large" refers to the number of parameters (learned weights), which range from billions to trillions.</p>

<h2>How LLMs Work</h2>
<p>LLMs are built on the transformer architecture, introduced in the 2017 paper "Attention Is All You Need" by Google researchers. Training happens in two phases:</p>

<ol>
<li><strong>Pre-training</strong> - The model reads billions of pages of text (books, websites, code, academic papers) and learns to predict the next word in a sequence. This builds general knowledge of language, facts, reasoning patterns, and code syntax. Pre-training requires thousands of GPUs running for months and costs tens to hundreds of millions of dollars.</li>
<li><strong>Fine-tuning / RLHF</strong> - The pre-trained model is refined using human feedback. Annotators rate model responses, and the model is trained to produce outputs humans prefer. This phase teaches the model to follow instructions, refuse harmful requests, and provide helpful answers. Anthropic uses RLAIF (reinforcement learning from AI feedback) as a complement to human annotation.</li>
</ol>

<h2>Key Models in 2026</h2>
<table>
<thead><tr><th>Model</th><th>Developer</th><th>Notable Features</th></tr></thead>
<tbody>
<tr><td>GPT-4o / GPT-4.5</td><td>OpenAI</td><td>Multimodal (text, image, audio, video), powers ChatGPT</td></tr>
<tr><td>Claude 3.5 / Opus 4</td><td>Anthropic</td><td>200K context window, strong coding, Constitutional AI safety</td></tr>
<tr><td>Gemini 2.5</td><td>Google DeepMind</td><td>Multimodal, integrated into Google products, 1M+ token context</td></tr>
<tr><td>Llama 3.1</td><td>Meta</td><td>Open-source, 405B parameters, commercially licensable</td></tr>
<tr><td>Grok</td><td>xAI</td><td>Integrated with X (Twitter), real-time data access</td></tr>
<tr><td>DeepSeek V3</td><td>DeepSeek</td><td>671B MoE parameters, strong coding and math, open-weight</td></tr>
</tbody>
</table>

<h2>What LLMs Can and Cannot Do</h2>
<p>LLMs excel at: generating fluent text, summarizing long documents, translating languages, writing and debugging code, answering questions, and creative writing. They struggle with: reliable factual accuracy (hallucination), mathematical computation, real-time information (without search integration), and consistent long-term reasoning.</p>

<h2>LLM vs. AI vs. Machine Learning</h2>
<p>AI is the broadest term, covering any system that mimics human intelligence. Machine learning (ML) is the subset of AI that learns from data. Deep learning uses neural networks with many layers. An LLM is a specific type of deep learning model focused on language. All LLMs are AI, but not all AI is an LLM.</p>

<h2>Cost and Access</h2>
<p>Training a frontier LLM costs $100M-$1B+. Running (inference) costs have dropped dramatically: GPT-4 API pricing fell ~90% between 2023 and 2026. Open-source models (Llama, Mistral, DeepSeek) can run on consumer hardware for local inference, while cloud providers offer hosted APIs on a pay-per-token basis.</p>

</div>`
      }
    ]
  },

  // ── 8. Bitcoin Halving ────────────────────────────────────────────────────
  {
    slug: 'define-what-is-bitcoin-halving',
    title: 'What Is Bitcoin Halving? | 2024 Halving Explained',
    subtitle: 'Bitcoin Halving',
    category: 'Definitions',
    topic_tag: 'crypto',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '5 min read',
    tags: ['Bitcoin Halving', 'Bitcoin', 'BTC', 'Bitcoin Mining', 'Crypto', 'Satoshi Nakamoto'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>Bitcoin halving is a programmed event that cuts the reward miners receive for validating transactions in half. It occurs every 210,000 blocks, approximately every four years. The halving is hardcoded into Bitcoin's protocol and cannot be changed. It is the mechanism that enforces Bitcoin's fixed supply cap of 21 million coins.</p>

<h2>How It Works</h2>
<p>Bitcoin miners compete to solve cryptographic puzzles and add new blocks to the blockchain. The first miner to solve each block earns a "block reward" paid in newly created bitcoin. The halving reduces this reward by 50%:</p>

<table>
<thead><tr><th>Halving</th><th>Date</th><th>Block Height</th><th>Reward Before</th><th>Reward After</th></tr></thead>
<tbody>
<tr><td>1st</td><td>November 28, 2012</td><td>210,000</td><td>50 BTC</td><td>25 BTC</td></tr>
<tr><td>2nd</td><td>July 9, 2016</td><td>420,000</td><td>25 BTC</td><td>12.5 BTC</td></tr>
<tr><td>3rd</td><td>May 11, 2020</td><td>630,000</td><td>12.5 BTC</td><td>6.25 BTC</td></tr>
<tr><td>4th</td><td>April 19, 2024</td><td>840,000</td><td>6.25 BTC</td><td>3.125 BTC</td></tr>
</tbody>
</table>

<p>The next halving (5th) is expected around March-April 2028 at block 1,050,000, when the reward will drop to 1.5625 BTC per block.</p>

<h2>Why It Matters for Price</h2>
<p>The halving reduces the rate of new bitcoin entering circulation. If demand stays constant or grows while new supply is cut in half, basic economics suggests upward price pressure. Historically, each halving has preceded a significant bull run, though the relationship is debated:</p>

<ul>
<li>2012 halving: BTC went from ~$12 to ~$1,100 within 12 months</li>
<li>2016 halving: BTC went from ~$650 to ~$20,000 within 18 months</li>
<li>2020 halving: BTC went from ~$8,600 to ~$69,000 within 18 months</li>
<li>2024 halving: BTC was trading at ~$63,000 at the halving, reaching new all-time highs above $100,000 by late 2024</li>
</ul>

<p>Skeptics note that halving events are known years in advance and should theoretically be priced in by efficient markets. The post-halving rallies may reflect broader market cycles, increased media attention, or speculation rather than a direct supply-side effect.</p>

<h2>Impact on Miners</h2>
<p>Each halving immediately halves miner revenue (in BTC terms). Miners with high electricity costs or older hardware become unprofitable and shut down, causing a temporary drop in hash rate. The network adjusts difficulty every 2,016 blocks (~2 weeks) to maintain 10-minute block times. After the 2024 halving, publicly traded miners like Marathon Digital and Riot Platforms reported significant revenue pressure.</p>

<h2>The 21 Million Cap</h2>
<p>By design, halvings will continue approximately every four years until the block reward reaches zero around the year 2140. At that point, all 21 million bitcoin will have been mined. Miners will then be compensated solely through transaction fees. As of 2026, approximately 19.8 million bitcoin (94.3%) have already been mined.</p>

</div>`
      }
    ]
  },

  // ── 9. DeFi ───────────────────────────────────────────────────────────────
  {
    slug: 'define-what-is-defi',
    title: 'What Is DeFi? | Decentralized Finance Explained 2026',
    subtitle: 'DeFi (Decentralized Finance)',
    category: 'Definitions',
    topic_tag: 'crypto',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '6 min read',
    tags: ['DeFi', 'Decentralized Finance', 'Ethereum', 'Aave', 'Uniswap', 'Smart Contracts'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>Decentralized finance (DeFi) is a category of financial applications built on blockchain smart contracts that replicate traditional banking and brokerage services without centralized intermediaries. Instead of a bank approving your loan or a broker executing your trade, DeFi protocols use algorithms and smart contracts to perform these functions autonomously, transparently, and (in most cases) permissionlessly.</p>

<h2>How DeFi Works</h2>
<p>DeFi applications run as smart contracts on blockchain networks, primarily Ethereum and its Layer 2 scaling solutions (Arbitrum, Base, Optimism). Users interact with these protocols through crypto wallets (MetaMask, Phantom, Coinbase Wallet) by connecting directly to the smart contracts, with no account creation, no KYC (Know Your Customer), and no bank approval.</p>

<p>Core DeFi primitives include:</p>
<ul>
<li><strong>Lending and borrowing</strong> - Deposit crypto to earn interest; borrow against your holdings without selling. Protocols: Aave, Compound, Morpho.</li>
<li><strong>Decentralized exchanges (DEXs)</strong> - Swap tokens without a centralized intermediary using automated market makers (AMMs). Protocols: Uniswap, Curve, Jupiter (Solana).</li>
<li><strong>Yield farming</strong> - Provide liquidity to protocols and earn rewards (fees + token incentives).</li>
<li><strong>Stablecoins</strong> - Crypto assets pegged to the dollar, used as DeFi's base currency. USDC, USDT, DAI.</li>
<li><strong>Derivatives</strong> - Perpetual futures, options, and synthetic assets traded on-chain. Protocols: dYdX, GMX, Synthetix.</li>
<li><strong>Liquid staking</strong> - Stake ETH while retaining a tradable token representing the staked position. Protocols: Lido, Rocket Pool, Jito (Solana).</li>
</ul>

<h2>DeFi by the Numbers (2026)</h2>
<table>
<thead><tr><th>Metric</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Total Value Locked (TVL)</td><td>~$180 billion across all chains</td></tr>
<tr><td>Ethereum DeFi TVL</td><td>~$90 billion (50% share)</td></tr>
<tr><td>Solana DeFi TVL</td><td>~$15 billion</td></tr>
<tr><td>DEX monthly volume</td><td>$150-250 billion</td></tr>
<tr><td>Stablecoin supply</td><td>$200+ billion</td></tr>
</tbody>
</table>

<h2>DeFi vs. Traditional Finance</h2>
<p>In traditional finance (TradFi), banks custody your funds, set interest rates, decide who qualifies for loans, and operate during business hours in specific jurisdictions. DeFi protocols operate 24/7, are accessible globally with only an internet connection, set rates algorithmically based on supply and demand, and allow anyone to participate regardless of credit score or nationality.</p>

<p>The tradeoff: DeFi removes intermediaries but also removes the consumer protections those intermediaries provide. There is no FDIC insurance, no fraud department to call, and no recourse if you send funds to the wrong address or interact with a malicious contract.</p>

<h2>Risks</h2>
<ul>
<li><strong>Smart contract risk</strong> - Bugs in code can be exploited. DeFi hacks have cost billions.</li>
<li><strong>Impermanent loss</strong> - Liquidity providers can lose value relative to simply holding tokens.</li>
<li><strong>Oracle manipulation</strong> - Price feed attacks can drain lending protocols.</li>
<li><strong>Regulatory risk</strong> - Governments may restrict DeFi access or require KYC.</li>
<li><strong>Rug pulls</strong> - Fraudulent projects that steal deposited funds.</li>
</ul>

</div>`
      }
    ]
  },

  // ── 10. Esports ───────────────────────────────────────────────────────────
  {
    slug: 'define-what-is-esports',
    title: 'What Is Esports? | Competitive Gaming Explained 2026',
    subtitle: 'Esports',
    category: 'Definitions',
    topic_tag: 'gaming',
    published_at: '2026-04-03T12:00:00Z',
    read_time: '6 min read',
    tags: ['Esports', 'Competitive Gaming', 'League of Legends', 'Valorant', 'Counter-Strike', 'Fortnite'],
    content: [
      {
        type: 'html',
        content: `<div class="prose prose-lg max-w-none">

<h2>Definition</h2>
<p>Esports (electronic sports) is organized competitive video gaming at a professional level. Players and teams compete in structured tournaments and leagues for prize money, sponsorships, and salaries, with matches broadcast to millions of viewers on platforms like Twitch, YouTube Gaming, and dedicated broadcast networks. Esports spans multiple game genres including first-person shooters, MOBAs, battle royales, fighting games, sports simulations, and real-time strategy titles.</p>

<h2>How Professional Esports Works</h2>
<p>The esports ecosystem mirrors traditional sports in many ways. Professional players sign contracts with organizations (teams), practice 8-12 hours daily, and compete in seasonal leagues with playoffs and championships. Teams employ coaches, analysts, sports psychologists, and content creators. Major esports organizations include T1, Cloud9, Fnatic, Team Liquid, Gen.G, and Sentinels.</p>

<p>Tournament structures vary by game:</p>
<ul>
<li><strong>Franchised leagues</strong> - Teams buy permanent slots. Examples: League of Legends Championship Series (LCS), Call of Duty League (CDL), Overwatch League (pre-2024).</li>
<li><strong>Open circuit</strong> - Teams qualify through open competition. Examples: Counter-Strike Major system, Valorant Champions Tour (VCT).</li>
<li><strong>Publisher-run events</strong> - Game developers organize premier tournaments. Examples: The International (Dota 2), Fortnite Champion Series (FNCS).</li>
</ul>

<h2>Biggest Esports Games in 2026</h2>
<table>
<thead><tr><th>Game</th><th>Genre</th><th>Peak Prize Pool</th><th>Developer</th></tr></thead>
<tbody>
<tr><td>League of Legends</td><td>MOBA</td><td>$2.2M (Worlds)</td><td>Riot Games</td></tr>
<tr><td>Valorant</td><td>Tactical FPS</td><td>$2M+ (Champions)</td><td>Riot Games</td></tr>
<tr><td>Counter-Strike 2</td><td>Tactical FPS</td><td>$1.25M (Major)</td><td>Valve</td></tr>
<tr><td>Dota 2</td><td>MOBA</td><td>$40M+ (TI, crowdfunded)</td><td>Valve</td></tr>
<tr><td>Fortnite</td><td>Battle Royale</td><td>$2M+ (FNCS)</td><td>Epic Games</td></tr>
<tr><td>Rocket League</td><td>Vehicle Soccer</td><td>$2M (RLCS)</td><td>Psyonix/Epic</td></tr>
</tbody>
</table>

<h2>Viewership and Revenue</h2>
<p>The global esports audience reached an estimated 600 million viewers in 2025, with revenues exceeding $2 billion from sponsorships, media rights, merchandise, and ticket sales. The 2024 League of Legends World Championship drew over 6 million peak concurrent viewers. Despite these numbers, many esports organizations operate at a loss, with investor-driven spending outpacing sustainable revenue.</p>

<h2>Esports vs. Traditional Sports</h2>
<p>Esports share structural similarities with traditional sports (leagues, teams, broadcasts, fanbases) but differ in key ways: game publishers control the competitive rules entirely, titles can become obsolete (unlike permanent sports like soccer or basketball), player careers are shorter (most pros retire by their late 20s due to reaction-time decline), and the audience skews heavily toward 16-34 year olds.</p>

<h2>Path to Pro</h2>
<p>Aspiring esports professionals typically start in ranked online play, join amateur teams, compete in open qualifiers, and build visibility through streaming. College esports programs have expanded rapidly, with over 300 US universities now offering varsity or club esports programs, some with scholarship funding. The path is brutally competitive: for every professional player earning a salary, thousands of skilled players compete at the semi-pro level without compensation.</p>

</div>`
      }
    ]
  },
];

async function main() {
  console.log(`Inserting ${articles.length} define articles into wiki_articles...`);

  for (const article of articles) {
    const { error } = await supabase
      .from('wiki_articles')
      .upsert(article, { onConflict: 'slug' });

    if (error) {
      console.error(`❌ Failed: ${article.slug} — ${error.message}`);
    } else {
      console.log(`✅ ${article.slug}`);
    }
  }

  console.log('\nDone.');
}

main();
