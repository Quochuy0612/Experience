import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const MyBookings: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings = [
    {
      id: 'TRV-20250115-0042',
      tourName: 'Ha Long Bay Luxury Cruise',
      date: '2025-01-20',
      participants: 2,
      total: 305,
      status: 'confirmed',
      pickupTime: '08:00 AM',
      image: '🚢'
    }
  ];

  const pastBookings = [
    {
      id: 'TRV-20241210-0031',
      tourName: 'Hanoi Street Food Tour',
      date: '2024-12-15',
      participants: 1,
      total: 35,
      status: 'completed',
      image: '🍜'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-gray-100 text-gray-700',
      cancelled: 'bg-red-100 text-red-700'
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(ROUTES.DASHBOARD)} className="text-blue-600">← Dashboard</button>
          <h1 className="text-xl font-bold">My Bookings</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <div className="flex space-x-4 border-b">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`pb-3 px-4 ${activeTab === 'upcoming' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
            >
              Upcoming ({upcomingBookings.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`pb-3 px-4 ${activeTab === 'past' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'}`}
            >
              Past ({pastBookings.length})
            </button>
          </div>
        </div>

        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingBookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-32 flex items-center justify-center text-6xl">
                    {booking.image}
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{booking.tourName}</h3>
                        <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(booking.status)}`}>
                        {booking.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium ml-2">{new Date(booking.date).toLocaleDateString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Pickup:</span>
                        <span className="font-medium ml-2">{booking.pickupTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Participants:</span>
                        <span className="font-medium ml-2">{booking.participants}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Total:</span>
                        <span className="font-medium ml-2">${booking.total}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm">
                        📥 VIEW E-TICKET
                      </button>
                      <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                        📧 EMAIL
                      </button>
                      <button className="flex-1 border border-red-300 text-red-600 py-2 rounded-lg hover:bg-red-50 text-sm">
                        CANCEL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {upcomingBookings.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-2">No Upcoming Bookings</h3>
                <p className="text-gray-600 mb-6">Browse tours and start your adventure</p>
                <button
                  onClick={() => navigate(ROUTES.TOURS)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
                >
                  EXPLORE TOURS
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastBookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                  <div className="bg-gray-200 w-32 flex items-center justify-center text-6xl">
                    {booking.image}
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{booking.tourName}</h3>
                        <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(booking.status)}`}>
                        {booking.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium ml-2">{new Date(booking.date).toLocaleDateString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Total:</span>
                        <span className="font-medium ml-2">${booking.total}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm">
                        ⭐ WRITE REVIEW
                      </button>
                      <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                        📄 VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyBookings;