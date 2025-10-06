import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Check, ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const TourBooking = () => {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    guests: 2,
    pickupLocation: ''
  });

  const tours = [
    {
      id: 1,
      name: 'Halong Bay 2D1N Luxury Cruise',
      duration: '2 days 1 night',
      price: 150,
      rating: 4.9,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400',
      includes: ['Meals included', 'Hotel pickup', 'English guide', 'Kayaking', 'Sunset party'],
      highlights: ['UNESCO World Heritage Site', 'Overnight on boat', 'Cave exploration']
    },
    {
      id: 2,
      name: 'Hanoi Street Food Tour',
      duration: '4 hours',
      price: 35,
      rating: 4.8,
      reviews: 892,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw4ICGhXFQF-R9rfMEZm0xh-Y5xkwhdbLJA&s?w=400',
      includes: ['10+ food stops', 'Local guide', 'Water & wet tissues'],
      highlights: ['Hidden local spots', 'Try authentic Pho', 'Market visit']
    },
    {
      id: 3,
      name: 'Hoi An Ancient Town Walking Tour',
      duration: '3 hours',
      price: 25,
      rating: 4.7,
      reviews: 654,
      image: 'https://vietnam.travel/sites/default/files/inline-images/11125-Qu%E1%BA%A3ng%20Nam-huybank%40gmail.com-hoi%20an%20ve%20dem%20.jpg?w=400',
      includes: ['Professional guide', 'Entrance fees', 'Traditional tea'],
      highlights: ['Japanese Bridge', 'Lantern making', 'UNESCO site']
    }
  ];

  const handleBooking = () => {
    const booking = {
      tour: selectedTour,
      ...bookingData,
      total: selectedTour.price * bookingData.guests,
      confirmationCode: 'TB' + Date.now().toString().slice(-8)
    };
    localStorage.setItem('tourBooking', JSON.stringify(booking));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Book a Tour</h1>

        {!selectedTour ? (
          /* Tour Selection */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {tours.map(tour => (
              <div key={tour.id} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedTour(tour)}>
                <img src={tour.image} alt={tour.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Star style={{ width: '1rem', height: '1rem', color: '#FFD700', fill: '#FFD700' }} />
                    <span style={{ fontWeight: 600 }}>{tour.rating}</span>
                    <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>({tour.reviews} reviews)</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.875rem', color: '#6B7280' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock style={{ width: '1rem', height: '1rem' }} />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    {tour.includes.slice(0, 3).map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.25rem' }}>
                        <Check style={{ width: '1rem', height: '1rem', color: '#059669' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>From</p>
                      <p className="text-2xl font-bold text-primary">${tour.price}</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>per person</p>
                    </div>
                    <button className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Booking Form */
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedTour(null)} style={{ marginBottom: '1rem', color: '#0066CC', fontSize: '0.875rem', fontWeight: 500 }}>
              ← Back to tours
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* Tour Details */}
              <div className="card">
                <img src={selectedTour.image} alt={selectedTour.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '1rem' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Star style={{ width: '1.25rem', height: '1.25rem', color: '#FFD700', fill: '#FFD700' }} />
                  <span className="text-xl font-bold">{selectedTour.rating}</span>
                  <span style={{ color: '#6B7280' }}>({selectedTour.reviews} reviews)</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedTour.name}</h2>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                  {selectedTour.includes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Check style={{ width: '1.25rem', height: '1.25rem', color: '#059669' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  {selectedTour.highlights.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#0066CC' }}>•</span>
                      <span style={{ color: '#6B7280' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Tour</h3>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
                    <input
                      type="date"
                      className="input-field"
                      style={{ paddingLeft: '2.5rem' }}
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                      onClick={() => setBookingData({ ...bookingData, guests: Math.max(1, bookingData.guests - 1) })}
                      style={{ width: '2.5rem', height: '2.5rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', fontSize: '1.25rem', fontWeight: 600 }}
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold" style={{ minWidth: '3rem', textAlign: 'center' }}>{bookingData.guests}</span>
                    <button
                      onClick={() => setBookingData({ ...bookingData, guests: bookingData.guests + 1 })}
                      style={{ width: '2.5rem', height: '2.5rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', fontSize: '1.25rem', fontWeight: 600 }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
                    <input
                      type="text"
                      className="input-field"
                      style={{ paddingLeft: '2.5rem' }}
                      placeholder="Your hotel address"
                      value={bookingData.pickupLocation}
                      onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: '#F9FAFB', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#6B7280' }}>${selectedTour.price} x {bookingData.guests} guests</span>
                    <span className="font-semibold">${selectedTour.price * bookingData.guests}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid #E5E7EB' }}>
                    <span className="font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">${selectedTour.price * bookingData.guests}</span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  disabled={!bookingData.date || !bookingData.pickupLocation}
                  className="btn-primary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: (!bookingData.date || !bookingData.pickupLocation) ? 0.5 : 1 }}
                >
                  Book Now
                  <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TourBooking;
