import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Star,
  Calendar,
  Users,
  ChevronLeft,
  Share2,
  Heart,
  Info,
  CheckCircle,
  X,
  Ticket
} from 'lucide-react';

const AttractionTicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const [showBooking, setShowBooking] = useState(false);

  // Mock data - would be fetched based on ID
  const attraction = {
    id: id,
    name: 'Halong Bay Cruise',
    location: 'Halong Bay, Quang Ninh',
    rating: 4.9,
    reviews: 2450,
    price: 1200000,
    images: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800'
    ],
    category: 'nature',
    duration: '1 day',
    openingHours: '8:00 AM - 6:00 PM',
    description: 'Experience the breathtaking beauty of Halong Bay, a UNESCO World Heritage Site featuring thousands of limestone karsts and islands in various shapes and sizes.',
    highlights: [
      'Cruise through emerald waters of Halong Bay',
      'Visit stunning caves and grottoes',
      'Kayaking and swimming activities',
      'Traditional Vietnamese lunch on board',
      'Sunset viewing from sundeck',
      'Professional English-speaking guide'
    ],
    included: [
      'Round-trip transportation from Hanoi',
      'Full-day cruise experience',
      'Lunch and refreshments',
      'Kayaking equipment',
      'Professional tour guide',
      'Entrance fees'
    ],
    notIncluded: [
      'Personal expenses',
      'Tips and gratuities',
      'Travel insurance'
    ],
    cancellationPolicy: 'Free cancellation up to 24 hours before the start time. No refund for cancellations within 24 hours.',
    schedule: [
      { time: '8:00 AM', activity: 'Hotel pickup in Hanoi' },
      { time: '12:00 PM', activity: 'Arrive at Halong Bay, board cruise' },
      { time: '1:00 PM', activity: 'Lunch on board' },
      { time: '2:30 PM', activity: 'Cave exploration' },
      { time: '4:00 PM', activity: 'Kayaking and swimming' },
      { time: '6:00 PM', activity: 'Return to harbor' },
      { time: '8:00 PM', activity: 'Drop-off at Hanoi hotel' }
    ]
  };

  const handleBooking = () => {
    if (!selectedDate || ticketCount < 1) {
      alert('Please select date and number of tickets');
      return;
    }
    setShowBooking(true);
  };

  const confirmBooking = () => {
    navigate('/booking-confirmation', {
      state: {
        attraction,
        date: selectedDate,
        tickets: ticketCount,
        total: attraction.price * ticketCount
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 gap-2 h-96">
        <div className="relative">
          <img
            src={attraction.images[0]}
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {attraction.images.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${attraction.name} ${idx + 2}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{attraction.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{attraction.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{attraction.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-gray-900">{attraction.rating}</span>
                  <span className="ml-1">({attraction.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Experience</h2>
              <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {attraction.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Itinerary</h2>
              <div className="space-y-4">
                {attraction.schedule.map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-blue-600 font-semibold">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included/Not Included */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">✓ Included</h3>
                  <ul className="space-y-2">
                    {attraction.included.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">✗ Not Included</h3>
                  <ul className="space-y-2">
                    {attraction.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <X className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                  <p className="text-gray-600">{attraction.cancellationPolicy}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {attraction.price.toLocaleString('vi-VN')} ₫
                  </span>
                  <span className="text-gray-600 ml-2">/ person</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Number of Tickets
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={ticketCount}
                      onChange={(e) => setTicketCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 text-center border-x border-gray-300 py-3 focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setTicketCount(ticketCount + 1)}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">
                    {attraction.price.toLocaleString('vi-VN')} ₫ x {ticketCount}
                  </span>
                  <span className="font-semibold">
                    {(attraction.price * ticketCount).toLocaleString('vi-VN')} ₫
                  </span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">
                    {(attraction.price * ticketCount).toLocaleString('vi-VN')} ₫
                  </span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Book Now
              </button>

              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <Ticket className="w-4 h-4 mr-1" />
                Instant confirmation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm Booking</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Attraction:</span>
                <span className="font-semibold">{attraction.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tickets:</span>
                <span className="font-semibold">{ticketCount}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-blue-600">
                  {(attraction.price * ticketCount).toLocaleString('vi-VN')} ₫
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBooking(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttractionTicketDetail;
