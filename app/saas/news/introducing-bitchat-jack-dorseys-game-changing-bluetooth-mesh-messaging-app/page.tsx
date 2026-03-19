import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Introducing BitChat: Jack Dorsey\'s Game-Changing Bluetooth Mesh Messaging App | Object Wire',
  description: 'Jack Dorsey unveils BitChat, a revolutionary Bluetooth mesh messaging app that works without internet or cellular networks. Learn about the technology, privacy features, and implications.',
  keywords: ['BitChat', 'Jack Dorsey', 'mesh networking', 'Bluetooth messaging', 'decentralized communication', 'privacy messaging', 'offline messaging', 'Block Inc'],
  openGraph: {
    title: 'Introducing BitChat: Jack Dorsey\'s Game-Changing Bluetooth Mesh Messaging App',
    description: 'Jack Dorsey unveils BitChat, a revolutionary Bluetooth mesh messaging app that works without internet or cellular networks.',
    type: 'article',
    publishedTime: '2024-02-15T10:00:00Z',
    authors: ['Object Wire Staff'],
  },
};

export default function BitChatArticle() {
  return <WikiArticle slug="saas-news-introducing-bitchat-jack-dorseys-game-changing-bluetooth-mesh-messaging-app" />;
}
