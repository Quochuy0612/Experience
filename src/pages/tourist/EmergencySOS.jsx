import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Phone, MapPin, Navigation, CheckCircle } from 'lucide-react';
import Header from '../../components/layout/Header';

const EmergencySOS = () => {
  const navigate = useNavigate();
  const [location] = useState({
    address: '15 Trang Tien St, Hoan Kiem, Hanoi',
    lat: 21.0285,
    lng: 105.8542
  });
  const [sent, setSent] = useState(false);

  const emergencyContacts = [
    { name: 'Police', number: '113', color: '#3B82F6', icon: '🚓' },
    { name: 'Ambulance', number: '115', color: '#EF4444', icon: '🚑' },
    { name: 'Fire Department', number: '114', color: '#F59E0B', icon: '🚒' },
    { name: 'US Embassy', number: '+84 24 3850 5000', color: '#6B7280', icon: '🇺🇸' }
  ];

  const handleSendAlert = () => {
    setSent(true);
    setTimeout(() => navigate('/dashboard'), 3000);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
          <CheckCircle style={{ width: '4rem', height: '4rem', color: '#059669', margin: '0 auto 1rem' }} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Alert Sent Successfully</h2>
          <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
            Emergency services have been notified of your location
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Warning Header */}
          <div style={{ backgroundColor: '#FEE2E2', borderLeft: '4px solid #DC2626', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertTriangle style={{ width: '1.5rem', height: '1.5rem', color: '#DC2626' }} />
              <div>
                <h2 className="text-xl font-bold text-red-900">Emergency SOS</h2>
                <p style={{ fontSize: '0.875rem', color: '#991B1B' }}>For emergencies only. False alarms may result in penalties.</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Current Location</h3>

            <div style={{ backgroundColor: '#F3F4F6', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                <MapPin style={{ width: '1.5rem', height: '1.5rem', color: '#EF4444', flexShrink: 0, marginTop: '0.25rem' }} />
                <div>
                  <p className="font-semibold text-gray-900">{location.address}</p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                    Coordinates: {location.lat}, {location.lng}
                  </p>
                </div>
              </div>
            </div>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#EFF6FF',
                border: '1px solid #3B82F6',
                borderRadius: '0.5rem',
                color: '#1E40AF',
                fontWeight: 600,
                width: '100%',
                cursor: 'pointer'
              }}
            >
              <Navigation style={{ width: '1.25rem', height: '1.25rem' }} />
              Update GPS Location
            </button>
          </div>

          {/* Emergency Contacts */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Contacts</h3>

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {emergencyContacts.map(contact => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    border: '2px solid #E5E7EB',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = contact.color;
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ fontSize: '1.5rem' }}>{contact.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{contact.name}</p>
                      <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>{contact.number}</p>
                    </div>
                  </div>
                  <Phone style={{ width: '1.5rem', height: '1.5rem', color: contact.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Send Alert */}
          <div className="card" style={{ backgroundColor: '#FEE2E2', border: '2px solid #DC2626' }}>
            <h3 className="text-lg font-bold text-red-900 mb-2">Send Emergency Alert</h3>
            <p style={{ fontSize: '0.875rem', color: '#991B1B', marginBottom: '1rem' }}>
              This will immediately notify local authorities and your embassy of your location and emergency status.
            </p>

            <button
              onClick={handleSendAlert}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#DC2626',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <AlertTriangle style={{ width: '1.5rem', height: '1.5rem' }} />
              SEND EMERGENCY ALERT
            </button>
          </div>

          {/* Cancel */}
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-secondary"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencySOS;
