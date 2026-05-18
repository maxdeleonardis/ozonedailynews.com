// =============================================================================
// /account — Your Digital Vault
//
// A comprehensive dashboard of the user's interests, engagement, and identity.
// Backed by Supabase auth. Tabs: Overview | Liked | Saved | History | Profile
// =============================================================================

import type { Metadata } from 'next';
import VaultDashboard     from './VaultDashboard';

export const metadata: Metadata = {
  title:       'Your Vault | ObjectWire',
  description: 'Your digital vault of interests, saved articles, reading history, and engagement on ObjectWire.',
  robots:      { index: false, follow: false },
  openGraph: {
    title: "Your Vault | ObjectWire",
    description: "Your digital vault of interests, saved articles, reading history, and engagement on ObjectWire.",
    type: 'article',
    url: 'https://www.ozonenetwork.news',
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Vault | ObjectWire",
    description: "Your digital vault of interests, saved articles, reading history, and engagement on ObjectWire.",
  },
};

export default function AccountPage() {
  return <VaultDashboard />;
}
