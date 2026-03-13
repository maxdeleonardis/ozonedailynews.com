import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    'Marathon Update 1.0.0.4 — Bungie Nerfs UESC AI, Thermal Scopes, & More | ObjectWire',
  description:
    'Bungie has deployed Marathon Update 1.0.0.4 on March 11, 2026. The first major balance pass reduces UESC enemy health by 10–15%, cuts boss shield HP by 25%, nerfs thermal scope range from 180m to 100m, and adds Med Cabinets and Munitions Crates to the Perimeter map. Full patch notes breakdown.',
  keywords: [
    'Marathon Update 1.0.0.4 patch notes',
    'Marathon Bungie UESC nerf March 2026',
    'Marathon UESC health reduction boss shield nerf',
    'Marathon thermal scope nerf range cap',
    'Marathon 1.0.0.4 balance patch',
    'Marathon Perimeter med cabinets munitions crates',
    'Marathon Traxus Contract UESC Commander nerf',
    'Marathon Broken Wing Pinwheel Outpost disabled',
    'Marathon extraction shooter patch notes 2026',
    'Bungie Marathon solo balance update',
    'Marathon sponsored kits MIDA CyberAcme Arachne',
    'Marathon Rook backpack bug fix',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes',
  },
  openGraph: {
    title: 'Marathon Update 1.0.0.4: UESC Nerfed, Thermal Nerfed, Perimeter Buffed',
    description:
      'Bungie\'s first major balance pass for Marathon (2026) reduces UESC health by 10–15%, slashes boss shield HP by 25%, and caps thermal scope tracking at 100m. Full breakdown.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T10:00:00Z',
    modifiedTime: '2026-03-12T10:00:00Z',
    section: 'Video Games',
    tags: ['Marathon', 'Bungie', 'Patch Notes', 'UESC', 'Extraction Shooter', 'Video Games', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marathon 1.0.0.4: Bungie Nerfs UESC Bullet Sponges & Thermal Scopes',
    description:
      'UESC standard enemies: -10–15% HP. Boss shields: -25%. Thermal tracking: 180m → 100m. Perimeter gets more Med Cabinets. Full patch notes breakdown.',
  },
};

export default function MarathonBungieUpdate1004UescNerfPatchNotesPage() {
  return <WikiArticle slug="/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes" />;
}
