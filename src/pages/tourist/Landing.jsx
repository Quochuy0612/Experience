import { ArrowRight, Shield, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-6xl">🇻🇳</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Vietnam
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Your Digital Companion
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Experience Vietnam like never before with our comprehensive digital platform.
            From visa applications to emergency support, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/login" className="btn-secondary text-lg px-8 py-4">
              Login
            </Link>
          </div>

          {/* Language Selection */}
          <div className="flex items-center justify-center space-x-4">
            <Globe className="w-5 h-5 text-gray-500" />
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium">EN</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">VI</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">中文</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">日本語</button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">한국어</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Experience Vietnam?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital ID & Security</h3>
              <p className="text-gray-600">
                Get your digital identity and access all services securely with blockchain-backed verification
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">All-in-One Platform</h3>
              <p className="text-gray-600">
                From visa applications to hotel bookings, everything you need in one place
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Emergency assistance and support available round the clock for your safety
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 text-lg">Join thousands of travelers who trust Experience Vietnam</p>
          <Link to="/register" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Create Your Account Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
