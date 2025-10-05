import { Users, ArrowUpRight, ArrowDownRight, AlertTriangle, CheckCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import AdminSidebar from '../../components/layout/AdminSidebar';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Foreigners',
      value: '12,345',
      change: '+5.2%',
      icon: Users,
      color: 'primary'
    },
    {
      title: 'Entry Today',
      value: '456',
      change: '+12.3%',
      icon: ArrowUpRight,
      color: 'success'
    },
    {
      title: 'Exit Today',
      value: '123',
      change: '-3.1%',
      icon: ArrowDownRight,
      color: 'warning'
    },
    {
      title: 'Currently Staying',
      value: '8,234',
      change: '+2.5%',
      icon: Users,
      color: 'primary'
    }
  ];

  const alerts = [
    { type: 'warning', message: '3 visa overstays detected', count: 3 },
    { type: 'info', message: '12 accommodation registrations pending review', count: 12 },
    { type: 'success', message: '1 emergency report - resolved', count: 1 }
  ];

  const recentActivities = [
    { name: 'John Smith', country: '🇺🇸', activity: 'Registered at Hanoi Hotel', time: '10 mins ago' },
    { name: 'Maria Garcia', country: '🇪🇸', activity: 'Entry declaration submitted', time: '25 mins ago' },
    { name: 'Wang Wei', country: '🇨🇳', activity: 'VAT refund claimed - $45', time: '1 hour ago' },
    { name: 'Tanaka Yuki', country: '🇯🇵', activity: 'Tour booked - Halong Bay', time: '2 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="admin" />
      <AdminSidebar />

      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Quảng Ninh Province</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  </div>
                  <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Entry/Exit Trends</h2>
            <button className="text-primary hover:text-blue-700 text-sm font-medium">View Details →</button>
          </div>
          <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-around p-4">
            {[65, 78, 82, 90, 88, 95, 92, 98, 85, 89, 93, 96, 88, 92, 95, 98, 94, 97, 92, 89, 91, 95, 98, 100, 96, 94, 92, 88, 90, 93].map((height, i) => (
              <div
                key={i}
                className="w-2 bg-primary rounded-t transition-all hover:bg-blue-700"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Last 30 days</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Alerts */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Alerts & Notifications</h2>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`flex items-start space-x-3 p-4 rounded-lg ${
                  alert.type === 'warning' ? 'bg-orange-50' :
                  alert.type === 'info' ? 'bg-blue-50' :
                  'bg-green-50'
                }`}>
                  {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />}
                  {alert.type === 'info' && <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />}
                  {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />}
                  <div className="flex-1">
                    <p className={`font-medium ${
                      alert.type === 'warning' ? 'text-orange-900' :
                      alert.type === 'info' ? 'text-blue-900' :
                      'text-green-900'
                    }`}>
                      {alert.message}
                    </p>
                  </div>
                  <span className={`text-sm font-bold ${
                    alert.type === 'warning' ? 'text-orange-600' :
                    alert.type === 'info' ? 'text-blue-600' :
                    'text-green-600'
                  }`}>
                    {alert.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="text-2xl">{activity.country}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{activity.name}</p>
                    <p className="text-sm text-gray-600">{activity.activity}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
