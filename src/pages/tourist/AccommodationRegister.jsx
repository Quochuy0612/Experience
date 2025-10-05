import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hotel, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const AccommodationRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hotelName: '',
    address: '',
    city: 'Hanoi',
    roomNumber: '',
    checkinDate: '',
    checkoutDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('accommodation', JSON.stringify(formData));
    setSubmitted(true);
    setTimeout(() => navigate('/dashboard'), 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
          <CheckCircle style={{ width: '4rem', height: '4rem', color: '#059669', margin: '0 auto 1rem' }} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
            Local police have been notified of your stay
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Accommodation</h1>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
            Required by Vietnamese law for foreign visitors
          </p>

          <form onSubmit={handleSubmit} className="card">
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hotel/Guesthouse Name</label>
              <div style={{ position: 'relative' }}>
                <Hotel style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
                <input
                  type="text"
                  className="input-field"
                  style={{ paddingLeft: '2.5rem' }}
                  placeholder="Hanoi Hotel"
                  value={formData.hotelName}
                  onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
              <div style={{ position: 'relative' }}>
                <MapPin style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
                <textarea
                  className="input-field"
                  style={{ paddingLeft: '2.5rem', minHeight: '5rem' }}
                  placeholder="15 Trang Tien St, Hoan Kiem"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City/Province</label>
                <select
                  className="input-field"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option>Hanoi</option>
                  <option>Ho Chi Minh City</option>
                  <option>Da Nang</option>
                  <option>Hoi An</option>
                  <option>Halong</option>
                  <option>Hue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Number</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="501"
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                <input
                  type="date"
                  className="input-field"
                  value={formData.checkinDate}
                  onChange={(e) => setFormData({ ...formData, checkinDate: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                <input
                  type="date"
                  className="input-field"
                  value={formData.checkoutDate}
                  onChange={(e) => setFormData({ ...formData, checkoutDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ backgroundColor: '#EFF6FF', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#1E40AF' }}>
                <strong>Auto-notification:</strong> Local police will be automatically notified of your stay as required by law.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" onClick={() => navigate('/dashboard')} className="btn-secondary" style={{ flex: 1 }}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Register Stay
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccommodationRegister;
