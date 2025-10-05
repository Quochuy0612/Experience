import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Share2, Home } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const EntryQRCode = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const digitalId = localStorage.getItem('digitalId') || '#12345';

  // Generate reference number
  const refNumber = 'EXV-2025-' + Math.floor(100000 + Math.random() * 900000);
  const validUntil = new Date();
  validUntil.setHours(23, 59, 59);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          {/* Success Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', backgroundColor: '#ECFDF5', borderRadius: '9999px', marginBottom: '1rem' }}>
              <CheckCircle style={{ width: '2rem', height: '2rem', color: '#059669' }} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Entry Confirmation</h2>
            <p style={{ color: '#6B7280' }}>Your declaration has been submitted successfully</p>
          </div>

          {/* QR Code */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem', fontWeight: 500 }}>
              Show this QR code to Immigration Officer
            </p>

            {/* QR Code Placeholder */}
            <div style={{ display: 'inline-block', padding: '1.5rem', backgroundColor: 'white', border: '2px solid #E5E7EB', borderRadius: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '16rem', height: '16rem', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {/* Simple QR Code Pattern */}
                <svg width="256" height="256" viewBox="0 0 256 256" fill="none">
                  {/* Corner markers */}
                  <rect x="10" y="10" width="60" height="60" fill="black"/>
                  <rect x="20" y="20" width="40" height="40" fill="white"/>
                  <rect x="30" y="30" width="20" height="20" fill="black"/>

                  <rect x="186" y="10" width="60" height="60" fill="black"/>
                  <rect x="196" y="20" width="40" height="40" fill="white"/>
                  <rect x="206" y="30" width="20" height="20" fill="black"/>

                  <rect x="10" y="186" width="60" height="60" fill="black"/>
                  <rect x="20" y="196" width="40" height="40" fill="white"/>
                  <rect x="30" y="206" width="20" height="20" fill="black"/>

                  {/* Random pattern */}
                  {Array.from({length: 400}).map((_, i) => {
                    const x = (i % 20) * 12 + 80;
                    const y = Math.floor(i / 20) * 12 + 80;
                    const show = Math.random() > 0.5;
                    return show ? <rect key={i} x={x} y={y} width="10" height="10" fill="black"/> : null;
                  })}
                </svg>
              </div>
            </div>

            {/* Reference Info */}
            <div style={{ backgroundColor: '#F9FAFB', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: '0.25rem' }}>Reference Number</p>
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', fontFamily: 'monospace' }}>{refNumber}</p>
            </div>

            <div style={{ backgroundColor: '#FEF3C7', borderRadius: '0.5rem', padding: '1rem' }}>
              <p style={{ fontSize: '0.75rem', color: '#92400E', marginBottom: '0.25rem' }}>Valid Until</p>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#78350F' }}>{validUntil.toLocaleString()}</p>
            </div>
          </div>

          {/* User Info */}
          <div style={{ backgroundColor: '#EFF6FF', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div>
                <p style={{ color: '#6B7280' }}>Name</p>
                <p style={{ fontWeight: 600, color: '#111827' }}>{user.fullName || 'John Smith'}</p>
              </div>
              <div>
                <p style={{ color: '#6B7280' }}>Digital ID</p>
                <p style={{ fontWeight: 600, color: '#0066CC' }}>{digitalId}</p>
              </div>
              <div>
                <p style={{ color: '#6B7280' }}>Nationality</p>
                <p style={{ fontWeight: 600, color: '#111827' }}>{user.nationality || 'USA'}</p>
              </div>
              <div>
                <p style={{ color: '#6B7280' }}>Status</p>
                <p style={{ fontWeight: 600, color: '#059669' }}>✓ Approved</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
              <Download style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
              Save to Gallery
            </button>

            <button
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
              <Share2 style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
              Share QR Code
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
              <Home style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
              Go to Dashboard
            </button>
          </div>

          {/* Info */}
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#FEF2F2', borderRadius: '0.5rem' }}>
            <p style={{ fontSize: '0.75rem', color: '#991B1B' }}>
              <strong>Important:</strong> Keep this QR code safe. You will need to show it at the immigration counter when you arrive in Vietnam.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EntryQRCode;
