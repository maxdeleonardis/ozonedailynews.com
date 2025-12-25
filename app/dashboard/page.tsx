import { ActivityChart } from '@/components/dashboard/activity-chart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | ObjectWire',
  description: 'Real-time market analytics and user statistics',
};

async function getDashboardData() {
  // In a real app, you might call your DB directly here.
  // For this demo, we'll call our own API route.
  // Note: When fetching from localhost in a server component, you need the full URL.
  // However, it's often better to call the logic directly if it's internal.
  // Let's simulate the API call logic directly to avoid localhost URL issues during build/dev.
  
  // Simulating the data that would come from the API
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
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
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-2">Overview of market performance and user activity.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Total Users" 
            value={data.totalUsers.toLocaleString()} 
            change="+12%" 
            positive={true}
          />
          <StatCard 
            title="Active Markets" 
            value={data.activeMarkets.toString()} 
            change="+5" 
            positive={true}
          />
          <StatCard 
            title="24h Volume" 
            value={`$${data.volume24h.toLocaleString()}`} 
            change="-2.4%" 
            positive={false}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ActivityChart data={data.recentActivity} />
          
          {/* Recent Transactions / Activity Feed Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[300px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                      U{i}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">New prediction placed</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">+$500</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, change, positive }: { title: string, value: string, change: string, positive: boolean }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}
