import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/sam-altman-core-memory-podcast-sendcutsend-100k-unlock';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Sam Altman Core Memory Podcast | $100K Unlock, Anthropic Jab',
  description:
    'A Nevada manufacturing CEO paid $100,000 to unlock Sam Altman and Greg Brockman\'s paywalled Core Memory podcast episode. Altman accused Anthropic of "fear-based marketing" over Claude Mythos restrictions.',
  keywords: [
    'Sam Altman Core Memory podcast',
    'Sam Altman Ashlee Vance interview 2026',
    'Jim Belosic SendCutSend $100000',
    'OpenAI Core Memory podcast unlocked',
    'Sam Altman Anthropic fear-based marketing',
    'Claude Mythos Project Glasswing',
    'Sam Altman Greg Brockman podcast',
    'OpenAI GPT-5.5 personal AGI',
    'Core Memory podcast Ashlee Vance',
    'Sam Altman doomerism AI',
    'OpenAI Elon Musk lawsuit podcast',
    'SendCutSend manufacturing sponsor OpenAI',
    'Sam Altman Anthropic criticism 2026',
    'Greg Brockman podcast appearance 2026',
    'OpenAI news April 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sam Altman Core Memory Podcast | $100K Unlock, Anthropic Criticism',
    description:
      'Manufacturing CEO Jim Belosic paid $100K to free the paywalled Sam Altman and Greg Brockman episode. Altman called Anthropic\'s Claude Mythos rollout "clearly incredible marketing... selling a bomb shelter."',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-25T16:30:00Z',
    modifiedTime: '2026-04-25T16:30:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Podcast microphone in a recording studio representing the Core Memory episode with Sam Altman' }],
    tags: ['Sam Altman', 'OpenAI', 'Anthropic', 'Core Memory', 'Greg Brockman', 'Podcast'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Someone Paid $100K to Unlock the Sam Altman Podcast | He Called Anthropic a "Bomb Shelter" Salesman',
    description:
      'Nevada CEO Jim Belosic paid Ashlee Vance $100K to free the paywalled Altman episode. Altman\'s Anthropic dig went viral: "We will sell you a bomb shelter for $100 million."',
    images: [OG_IMAGE],
  },
};

export default function OpenAiNewsSamAltmanCoreMemoryPodcast100kUnlockPage() {
  return (
    <NewsArticle
      title="Sam Altman and Greg Brockman's Paywalled Podcast Unlocked for $100,000 | Altman Takes Aim at Anthropic"
      subtitle="Nevada manufacturing CEO Jim Belosic paid $100,000 to free the paywalled Core Memory episode featuring Sam Altman and Greg Brockman, their first joint podcast appearance, after journalist Ashlee Vance publicly floated the idea"
      category="Tech"
      categoryColor="blue"
      topicTag="ai"
      publishDate="April 25, 2026"
      readTime="4 min read"
      breaking={false}
      trending={true}
      author={{
        name: 'Jack Brennan',
        role: 'Tech Reporter',
        authorSlug: 'jack-brennan',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Podcast microphone in a studio representing the Core Memory episode featuring Sam Altman and Greg Brockman',
      }}
      tags={['Sam Altman', 'OpenAI', 'Anthropic', 'Core Memory Podcast', 'Greg Brockman']}
      slug="open-ai-news-sam-altman-core-memory-podcast-sendcutsend-100k-unlock"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          A Nevada manufacturing CEO has paid <strong>$100,000</strong> to make a paywalled podcast episode freely available to the public, setting off an unusual chain of events that ended with <strong>Sam Altman</strong> and <strong>Greg Brockman's</strong> first joint media podcast appearance reaching every major platform without a subscription. The benefactor, <strong>Jim Belosic</strong>, founder and CEO of on-demand sheet metal fabrication company <a href="https://sendcutsend.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">SendCutSend</a>, responded to an open call from journalist <strong>Ashlee Vance</strong>, who had publicly floated the unlock price on X. Vance confirmed on April 22 that the episode was "officially unlocked" on all platforms, with the funds going toward supporting Core Memory's podcast and YouTube channel and SendCutSend becoming a new show sponsor.
        </p>

        <h2>Altman on Anthropic | "Selling a Bomb Shelter for $100 Million"</h2>
        <p>
          The wide-ranging interview, which first posted on April 20, covered OpenAI's decade-long arc from research lab to the most commercially significant AI company in the world. But it was Altman's pointed criticism of rival <strong>Anthropic</strong> that generated the most immediate attention after the episode was freed.
        </p>
        <p>
          Altman took direct aim at Anthropic's decision to restrict its <strong>Claude Mythos</strong> cybersecurity model to just 11 organizations through a program called "<strong>Project Glasswing</strong>." He framed the move as calculated fear-driven positioning rather than genuine safety caution:
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-700">
          <p>"It is clearly incredible marketing to say, 'We have built a bomb. We were about to drop it on your head. We will sell you a bomb shelter for $100 million to run across all your stuff, but only if we pick you as a customer.'"</p>
          <footer className="text-sm text-gray-500 mt-2 not-italic">, Sam Altman, CEO of OpenAI, Core Memory podcast, April 2026</footer>
        </blockquote>

        <p>
          Altman also pushed back on broader "doomerism" rhetoric in the AI industry, connecting it directly to hostility OpenAI and he personally have faced. "I think the doomerism talk hasn't helped. I think the way certain other labs talk about us hasn't helped," he said. For context on the Claude Mythos restriction that Altman was responding to, see ObjectWire's earlier reporting on <Link href="/open-ai/news/openai-gpt-5-4-cyber-federal-briefings-five-eyes-2026" className="text-blue-600 hover:text-blue-800 underline">OpenAI's own cybersecurity model federal briefings</Link>.
        </p>

        <h2>What Else Altman Covered | GPT-5.5, Elon Musk, Personal AGI</h2>
        <p>
          Beyond the Anthropic remarks, the episode touched on several other forward-looking topics. Altman described an upcoming product he called a <strong>"personal AGI"</strong> that would ship with <strong>GPT-5.5</strong>, framing it as a step toward AI systems that know their users well enough to act as genuine personal assistants rather than generic tools. The interview also addressed <strong>OpenAI's ongoing legal battle with Elon Musk</strong>, though Altman did not elaborate on legal strategy. Brockman, who returned to OpenAI in late 2025 after a leave of absence, appeared alongside Altman in what Vance described as the duo's first joint podcast sit-down.
        </p>

        <h2>Jim Belosic and the Unconventional Sponsorship Model</h2>
        <p>
          Belosic's $100,000 payment was not pre-arranged with Vance or OpenAI. He hosts his own manufacturing podcast, "<strong>Just Gonna Send It</strong>," and runs SendCutSend, which specializes in on-demand laser cutting and sheet metal fabrication for engineers and manufacturers. His decision to respond to Vance's public unlock offer was spontaneous and, for Vance, strategically valuable: the open question of who would pay generated days of speculation on X before the reveal, functioning as unpaid promotion for the episode.
        </p>
        <p>
          The episode's release and subsequent unlock landed during a week of significant OpenAI news. For a full picture of where the company stands, see the <Link href="/open-ai" className="text-blue-600 hover:text-blue-800 underline">ObjectWire OpenAI hub</Link> and related coverage of <Link href="/open-ai/news/openai-safety-fellowship-new-yorker-probe" className="text-blue-600 hover:text-blue-800 underline">OpenAI's Safety Fellowship launch</Link>.
        </p>
      </div>
    </NewsArticle>
  );
}
