import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const TourDetail: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);

  const tour = {
    id: 1,
    name: 'Ha Long Bay Luxury Cruise',
    image: '🚢',
    price: 150,
    rating: 4.8,
    reviews: 1247,
    duration: '2D1N',
    category: 'Nature & Adventure',
    description: 'Experience the breathtaking beauty of Ha Long Bay aboard a luxury cruise. Visit stunning limestone caves, enjoy kayaking, and savor delicious Vietnamese cuisine.',
    highlights: [
      'Overnight on luxury cruise ship',
      'Visit Sung Sot Cave (Surprise Cave)',
      'Kayaking through limestone karsts',
      'Tai Chi session at sunrise',
      'Fresh seafood meals included',
      'Swimming in emerald waters'
    ],
    included: [
      'Hotel pickup (Hanoi Old Quarter)',
      'All meals (lunch, dinner, breakfast)',
      'English-speaking guide',
      'Entrance fees',
      'Kayaking equipment',
      'Insurance'
    ],
    notIncluded: [
      'Personal expenses',
      'Tips and gratuities',
      'Drinks and beverages'
    ],
    itinerary: [
      { day: 'Day 1', time: '08:00', activity: 'Pickup from Hanoi hotel' },
      { day: 'Day 1', time: '12:00', activity: 'Board cruise, welcome lunch' },
      { day: 'Day 1', time: '14:00', activity: 'Visit Sung Sot Cave' },
      { day: 'Day 1', time: '16:00', activity: 'Kayaking & swimming' },
      { day: 'Day 1', time: '19:00', activity: 'Dinner on board' },
      { day: 'Day 2', time: '06:30', activity: 'Tai Chi session, sunrise' },
      { day: 'Day 2', time: '08:00', activity: 'Breakfast & check-out' },
      { day: 'Day 2', time: '11:00', activity: 'Arrive back in Hanoi' }
    ],
    availableDates: ['2025-01-20', '2025-01-22', '2025-01-25', '2025-01-27'],
    cancellationPolicy: 'Free cancellation up to 48 hours before departure. 50% refund within 48 hours. No refund on departure day.'
  };

  const handleBookNow = () => {
    navigate(ROUTES.TOUR_BOOKING);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back to Tours</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden mb-6">
          <div className="h-64 flex items-center justify-center text-9xl">
            {tour.image}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{tour.name}</h1>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{tour.category}</span>
                    <span>⭐ {tour.rating} ({tour.reviews} reviews)</span>
                    <span>🕐 {tour.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">✨ HIGHLIGHTS</h2>
              <ul className="space-y-2">
                {tour.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included/Not Included */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">📋 WHAT'S INCLUDED</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-green-600">✓ Included:</h3>
                  <ul className="space-y-1 text-sm">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-red-600">✗ Not Included:</h3>
                  <ul className="space-y-1 text-sm">
                    {tour.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">🗓️ ITINERARY</h2>
              <div className="space-y-3">
                {tour.itinerary.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 border-l-2 border-blue-500 pl-4">
                    <div className="text-sm">
                      <div className="font-semibold">{item.day}</div>
                      <div className="text-gray-600">{item.time}</div>
                    </div>
                    <div className="flex-1">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">🔄 CANCELLATION POLICY</h2>
              <p className="text-sm">{tour.cancellationPolicy}</p>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-1">${tour.price}</div>
                <div className="text-sm text-gray-600">per person</div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Select Date *</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="">Choose date...</option>
                    {tour.availableDates.map(date => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Participants *</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setParticipants(Math.max(1, participants - 1))}
                      className="w-10 h-10 border rounded-lg"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold">{participants}</span>
                    <button
                      onClick={() => setParticipants(participants + 1)}
                      className="w-10 h-10 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${tour.price * participants}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Service fee:</span>
                    <span>$5</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-blue-600">${tour.price * participants + 5}</span>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  disabled={!selectedDate}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300"
                >
                  BOOK NOW
                </button>

                <div className="text-xs text-gray-600 text-center">
                  🔒 Secure booking • Instant confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TourDetail;