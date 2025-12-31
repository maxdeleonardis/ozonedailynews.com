import { ActivityChart } from '@/components/dashboard/activity-chart';
import { MetricCard } from '@/components/dashboard/metric-card';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { CategoryChart } from '@/components/dashboard/category-chart';
import { Skeleton } from '@/components/ui/skeleton';
import { DashboardMetrics } from '@/lib/types';
import { Metadata } from 'next';
import { Users, TrendingUp, DollarSign, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard | ObjectWire',
  description: 'Real-time market analytics and user statistics',
};

async function getDashboardData(): Promise<DashboardMetrics> {
  try {
    // Fetch from backend API
    const response = await fetch('http://localhost:8000/api/dashboard/metrics', {
      cache: 'no-store', // Always get fresh data
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Dashboard data fetch error:', error);
    // Return fallback data
    return {
      totalUsers: 0,
      activeMarkets: 0,
      volume24h: 0,
      totalArticles: 0,
      publishedArticles: 0,
      draftArticles: 0,
      totalCategories: 0,
      weeklyVolume: [],
      recentActivity: [],
      topCategories: [],
    };
  }
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Overview of market performance and content analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value={data.totalUsers.toLocaleString()}
            description="Platform registered users"
            icon={<Users className="h-4 w-4" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Active Markets"
            value={data.activeMarkets}
            description="Currently trading"
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: 5, isPositive: true }}
          />
          <MetricCard
            title="24h Volume"
            value={`$${data.volume24h.toLocaleString()}`}
            description="Trading volume"
            icon={<DollarSign className="h-4 w-4" />}
            trend={{ value: 2.4, isPositive: false }}
          />
          <MetricCard
            title="Published Articles"
            value={data.publishedArticles}
            description={`${data.totalArticles} total articles`}
            icon={<FileText className="h-4 w-4" />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ActivityChart 
            data={data.weeklyVolume.map(item => ({
              name: item.label || item.date,
              users: 0,
              volume: item.value
            }))} 
          />
          <CategoryChart categories={data.topCategories} />
        </div>

        {/* Activity Feed */}
        <ActivityFeed activities={data.recentActivity} maxItems={10} />
      </div>
    </main>
  );
}

