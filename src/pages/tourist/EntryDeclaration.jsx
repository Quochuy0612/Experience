import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plane, CheckCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const EntryDeclaration = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const passportData = JSON.parse(localStorage.getItem('passportData') || '{}');

  const [formData, setFormData] = useState({
    flightNumber: '',
    arrivalDate: '',
    port: 'Noi Bai International Airport',
    fever: false,
    cough: false,
    healthy: true,
    itemsToDeclare: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('entryDeclaration', JSON.stringify(formData));
    navigate('/entry-qr');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div style={{ marginBottom: '2rem' }}>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Entry Declaration</h1>
            <p style={{ color: '#6B7280' }}>Complete your arrival information for Vietnam customs and immigration</p>
          </div>

          <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem' }}>
            {/* Auto-filled Section */}
            <div style={{ backgroundColor: '#DBEAFE', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#2563EB', marginRight: '0.5rem' }} />
                <span style={{ fontWeight: 600, color: '#1E40AF' }}>Auto-filled from your profile</span>
              </div>
            </div>

            {/* Personal Info */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Full Name</p>
                  <p className="font-semibold text-gray-900">{passportData.fullName || 'SMITH, JOHN'}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Passport Number</p>
                  <p className="font-semibold text-gray-900">{passportData.passportNumber || 'US123456789'}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Date of Birth</p>
                  <p className="font-semibold text-gray-900">{passportData.dob || '1990-01-15'}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Nationality</p>
                  <p className="font-semibold text-gray-900">{passportData.nationality || 'USA'}</p>
                </div>
              </div>
            </div>

            {/* Flight Info */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Flight Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Flight Number</label>
                  <div style={{ position: 'relative' }}>
                    <Plane style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
                    <input
                      type="text"
                      className="input-field"
                      style={{ paddingLeft: '2.5rem' }}
                      placeholder="VN123"
                      value={formData.flightNumber}
                      onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Date & Time</label>
                  <input
                    type="datetime-local"
                    className="input-field"
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Port of Entry</label>
                <select
                  className="input-field"
                  value={formData.port}
                  onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                >
                  <option>Noi Bai International Airport (Hanoi)</option>
                  <option>Tan Son Nhat International Airport (HCMC)</option>
                  <option>Da Nang International Airport</option>
                  <option>Cam Ranh International Airport</option>
                </select>
              </div>
            </div>

            {/* Health Declaration */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Declaration</h3>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem' }}>
                Do you have any of the following symptoms?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#F9FAFB', borderRadius: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.fever}
                    onChange={(e) => setFormData({ ...formData, fever: e.target.checked, healthy: false })}
                    style={{ marginRight: '0.75rem', width: '1.25rem', height: '1.25rem' }}
                  />
                  <span>Fever (≥ 38°C)</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#F9FAFB', borderRadius: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.cough}
                    onChange={(e) => setFormData({ ...formData, cough: e.target.checked, healthy: false })}
                    style={{ marginRight: '0.75rem', width: '1.25rem', height: '1.25rem' }}
                  />
                  <span>Cough or difficulty breathing</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#ECFDF5', borderRadius: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.healthy}
                    onChange={(e) => setFormData({ ...formData, healthy: e.target.checked, fever: false, cough: false })}
                    style={{ marginRight: '0.75rem', width: '1.25rem', height: '1.25rem' }}
                  />
                  <span style={{ fontWeight: 600, color: '#059669' }}>I am healthy</span>
                </label>
              </div>
            </div>

            {/* Customs Declaration */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customs Declaration</h3>
              <label style={{ display: 'flex', alignItems: 'center', padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.itemsToDeclare}
                  onChange={(e) => setFormData({ ...formData, itemsToDeclare: e.target.checked })}
                  style={{ marginRight: '0.75rem', width: '1.25rem', height: '1.25rem' }}
                />
                <div>
                  <p className="font-medium">I have items to declare</p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                    Goods exceeding duty-free allowance, restricted items, etc.
                  </p>
                </div>
              </label>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="btn-secondary"
                style={{ flex: 1 }}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Submit Declaration
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
              </button>
            </div>
          </form>

          {/* Info */}
          <div style={{ backgroundColor: '#EFF6FF', borderRadius: '0.75rem', padding: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#1E40AF' }}>
              <strong>Note:</strong> This information will be submitted to Vietnam Immigration and Customs.
              You will receive a QR code to show at the immigration counter.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EntryDeclaration;
