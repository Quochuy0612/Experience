import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: API call
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <Link to={ROUTES.LANDING} className="text-blue-600 mb-4 inline-block">← Back</Link>
        <h1 className="text-3xl font-bold text-center mb-2">WELCOME BACK</h1>
        <p className="text-center text-gray-600 mb-8">Sign in to continue your journey</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email or Phone</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="john.smith@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={formData.rememberMe}
                onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})} />
              <span className="text-sm">Remember me</span>
            </label>
            <Link to={ROUTES.FORGOT_PASSWORD} className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            SIGN IN
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <button type="button" className="w-full flex items-center justify-center space-x-2 px-4 py-3 border rounded-lg hover:bg-gray-50">
            <span>🌐</span><span>Sign in with Google</span>
          </button>

          <button type="button" className="w-full flex items-center justify-center space-x-2 px-4 py-3 border rounded-lg hover:bg-gray-50">
            <span>📘</span><span>Sign in with Facebook</span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account? <Link to={ROUTES.REGISTER} className="text-blue-600 hover:underline font-medium">Sign Up Now</Link>
          </p>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
          🔒 Your data is protected by Vietnam Government encryption standards (AES-256)
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
