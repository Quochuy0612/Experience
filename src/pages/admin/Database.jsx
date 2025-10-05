import { useState } from 'react';
import { Search, Download, Eye, Filter } from 'lucide-react';
import Header from '../../components/layout/Header';
import AdminSidebar from '../../components/layout/AdminSidebar';

const Database = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 'USR_001',
      digitalId: '#12345',
      name: 'John Smith',
      country: '🇺🇸 USA',
      passport: 'US123456789',
      status: 'active',
      visa: 'Tourist - Valid until Nov 30, 2025',
      location: 'Hanoi Hotel, Room 501',
      activities: [
        { date: '2025-11-01', action: 'Entry declaration submitted' },
        { date: '2025-11-01', action: 'Accommodation registered' },
        { date: '2025-11-03', action: 'Booked Halong Bay tour' }
      ]
    },
    {
      id: 'USR_002',
      digitalId: '#12346',
      name: 'Maria Garcia',
      country: '🇪🇸 ESP',
      passport: 'ES987654321',
      status: 'active',
      visa: 'Business - Valid until Dec 15, 2025',
      location: 'Sheraton Hotel, Hanoi',
      activities: [
        { date: '2025-10-15', action: 'Entry declaration submitted' },
        { date: '2025-10-15', action: 'Work permit verified' }
      ]
    },
    {
      id: 'USR_003',
      digitalId: '#12347',
      name: 'Wang Wei',
      country: '🇨🇳 CHN',
      passport: 'CN456789123',
      status: 'warning',
      visa: 'Tourist - Expires in 5 days',
      location: 'Halong Bay Hotel',
      activities: [
        { date: '2025-10-20', action: 'Entry declaration submitted' },
        { date: '2025-11-05', action: 'VAT refund claimed - $45' }
      ]
    },
    {
      id: 'USR_004',
      digitalId: '#12348',
      name: 'Tanaka Yuki',
      country: '🇯🇵 JPN',
      passport: 'JP789456123',
      status: 'active',
      visa: 'Tourist - Valid until Dec 01, 2025',
      location: 'Hoi An Ancient House',
      activities: [
        { date: '2025-11-02', action: 'Entry declaration submitted' },
        { date: '2025-11-04', action: 'Booked cooking class' }
      ]
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.passport.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.digitalId.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userType="admin" />
      <AdminSidebar />

      <div className="ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Foreigners Database</h1>
          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>

        {/* Search & Filters */}
        <div className="card mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, passport, or Digital ID..."
                className="input-field pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select className="input-field w-48">
              <option>All Status</option>
              <option>Active</option>
              <option>Expired</option>
              <option>Flagged</option>
            </select>
            <select className="input-field w-48">
              <option>All Types</option>
              <option>Tourist</option>
              <option>Worker</option>
              <option>Student</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="card mb-6">
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">{filteredUsers.length}</span> records found
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Country</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Digital ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">{user.name}</td>
                    <td className="py-4 px-4">{user.country}</td>
                    <td className="py-4 px-4 font-mono text-sm">{user.digitalId}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {user.status === 'active' ? '✅ Active' : '⚠️ Warning'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="flex items-center space-x-2 text-primary hover:text-blue-700 font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              ← Previous
            </button>
            <span className="text-gray-600">Page 1 of 24</span>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next →
            </button>
          </div>
        </div>

        {/* Detail View Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">User Details</h2>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="font-semibold text-gray-900">{selectedUser.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Digital ID</p>
                    <p className="font-semibold text-gray-900 font-mono">{selectedUser.digitalId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Passport Number</p>
                    <p className="font-semibold text-gray-900">{selectedUser.passport}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Nationality</p>
                    <p className="font-semibold text-gray-900">{selectedUser.country}</p>
                  </div>
                </div>

                {/* Visa Info */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Visa Status</p>
                  <p className="font-semibold text-gray-900">{selectedUser.visa}</p>
                </div>

                {/* Current Location */}
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Current Address</p>
                  <p className="font-semibold text-gray-900">{selectedUser.location}</p>
                </div>

                {/* Activities */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Recent Activities</h3>
                  <div className="space-y-3">
                    {selectedUser.activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="btn-secondary flex-1">Flag User</button>
                  <button className="btn-secondary flex-1">Send Notification</button>
                  <button className="btn-primary flex-1">Print Report</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Database;
