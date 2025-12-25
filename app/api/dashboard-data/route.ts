import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const data = {
    totalUsers: 12543,
    activeMarkets: 84,
    volume24h: 452000,
    recentActivity: [
      { name: 'Mon', users: 4000, volume: 2400 },
      { name: 'Tue', users: 3000, volume: 1398 },
      { name: 'Wed', users: 2000, volume: 9800 },
      { name: 'Thu', users: 2780, volume: 3908 },
      { name: 'Fri', users: 1890, volume: 4800 },
      { name: 'Sat', users: 2390, volume: 3800 },
      { name: 'Sun', users: 3490, volume: 4300 },
    ],
  };

  return NextResponse.json(data);
}
