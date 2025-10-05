import { useNavigate } from 'react-router-dom';
import { User, Mail, Globe, CreditCard, Bell, Lock, HelpCircle, LogOut, ChevronRight, Award } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const digitalId = localStorage.getItem('digitalId') || '#12345';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', path: '/profile/personal' },
        { icon: CreditCard, label: 'Digital ID & Documents', path: '/profile/documents' },
        { icon: Award, label: 'Loyalty Program', path: '/profile/loyalty', badge: '2,450 pts' }
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Globe, label: 'Language', path: '/profile/language', value: 'English' },
        { icon: Bell, label: 'Notifications', path: '/profile/notifications', value: 'On' },
        { icon: Lock, label: 'Privacy & Security', path: '/profile/privacy' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', path: '/help' },
        { icon: Mail, label: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                backgroundColor: '#0066CC',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'white'
              }}>
                {(user.fullName || 'John Smith').charAt(0)}
              </div>

              <div style={{ flex: 1 }}>
                <h2 className="text-2xl font-bold text-gray-900">{user.fullName || 'John Smith'}</h2>
                <p style={{ color: '#6B7280', marginTop: '0.25rem' }}>{user.email || 'john@example.com'}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                    Digital ID: <strong style={{ color: '#0066CC' }}>{digitalId}</strong>
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                    🇺🇸 {user.nationality || 'United States'}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
              <div style={{ textAlign: 'center' }}>
                <p className="text-2xl font-bold text-primary">3</p>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Trips to VN</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p className="text-2xl font-bold text-primary">2,450</p>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Points</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p className="text-2xl font-bold text-primary">2024</p>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Member Since</p>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          {menuSections.map((section, idx) => (
            <div key={idx} className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {section.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => item.path && navigate(item.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem',
                        backgroundColor: '#F9FAFB',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Icon style={{ width: '1.25rem', height: '1.25rem', color: '#6B7280' }} />
                        <span className="font-medium text-gray-900">{item.label}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {item.badge && (
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: '#DBEAFE',
                            color: '#1E40AF',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 600
                          }}>
                            {item.badge}
                          </span>
                        )}
                        {item.value && (
                          <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{item.value}</span>
                        )}
                        <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#9CA3AF' }} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Documents */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 className="text-lg font-bold text-gray-900 mb-4">📄 My Documents</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: '0.5rem' }}>
                <div>
                  <p className="font-semibold text-gray-900">Passport</p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>US123456789 • Expires 2030</p>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#059669', fontWeight: 600 }}>✓ Verified</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: '0.5rem' }}>
                <div>
                  <p className="font-semibold text-gray-900">e-Visa</p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Valid until Nov 30, 2025</p>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#059669', fontWeight: 600 }}>✓ Active</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#F9FAFB', borderRadius: '0.5rem' }}>
                <div>
                  <p className="font-semibold text-gray-900">Travel Insurance</p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Coverage: $100,000</p>
                </div>
                <button style={{ fontSize: '0.875rem', color: '#0066CC', fontWeight: 600 }}>View</button>
              </div>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1rem',
              backgroundColor: '#FEE2E2',
              border: '1px solid #FECACA',
              borderRadius: '0.75rem',
              color: '#DC2626',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <LogOut style={{ width: '1.25rem', height: '1.25rem' }} />
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
