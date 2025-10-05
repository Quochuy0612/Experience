import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - just navigate to dashboard
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
      fullName: 'John Smith',
      nationality: 'USA'
    }));
    localStorage.setItem('digitalId', '#12345');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-6xl">🇻🇳</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Login to your Experience Vietnam account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
              <input
                type="email"
                className="input-field"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF', pointerEvents: 'none' }} />
              <input
                type="password"
                className="input-field"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem' }} />
              <span style={{ color: '#6B7280' }}>Remember me</span>
            </label>
            <a href="#" style={{ fontSize: '0.875rem', color: '#0066CC', fontWeight: 500 }}>
              Forgot password?
            </a>
          </div>

          <button type="submit" style={{ width: '100%' }} className="btn-primary">
            <span>Login</span>
            <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
          </button>
        </form>

        {/* Divider */}
        <div style={{ position: 'relative', margin: '1.5rem 0' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', borderTop: '1px solid #D1D5DB' }}></div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', fontSize: '0.875rem' }}>
            <span style={{ padding: '0 0.5rem', backgroundColor: 'white', color: '#6B7280' }}>OR</span>
          </div>
        </div>

        {/* Social Login */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', backgroundColor: 'white', cursor: 'pointer', transition: 'background-color 0.2s' }}>
            <span style={{ color: '#1877F2', fontSize: '1.25rem' }}>f</span>
            <span style={{ fontWeight: 500 }}>Continue with Facebook</span>
          </button>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', backgroundColor: 'white', cursor: 'pointer', transition: 'background-color 0.2s' }}>
            <span style={{ color: '#EA4335', fontSize: '1.25rem' }}>G</span>
            <span style={{ fontWeight: 500 }}>Continue with Google</span>
          </button>
        </div>

        {/* Register Link */}
        <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6B7280', marginTop: '1.5rem' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#0066CC', fontWeight: 500, cursor: 'pointer', textDecoration: 'none' }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
