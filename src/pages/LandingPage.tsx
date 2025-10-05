import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const LandingPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('EN');

  const features = [
    {
      icon: '📱',
      title: 'Digital ID in 5min',
      description: 'Complete eKYC and get your Vietnam ID',
    },
    {
      icon: '✈️',
      title: 'Entry Declaration',
      description: 'Submit before your flight lands',
    },
    {
      icon: '🎫',
      title: 'Tours & Activities',
      description: 'Book verified tours easily',
    },
    {
      icon: '💰',
      title: 'VAT Refund',
      description: 'Get tax back on shopping',
    },
    {
      icon: '🏨',
      title: 'Temporary Residence',
      description: 'Register your stay online',
    },
    {
      icon: '🆘',
      title: '24/7 Emergency',
      description: 'Instant help when needed',
    },
  ];

  const whyChooseUs = [
    'Government-backed platform (C06 - Ministry of Public Security)',
    '100% secure & compliant with Vietnam laws',
    'Available in English, Vietnamese, Chinese, Japanese, Korean',
    '24/7 support for foreign visitors',
  ];

  const testimonials = [
    {
      rating: 5,
      author: 'John S., Australia',
      text: 'Made my Vietnam trip so much easier!',
    },
    {
      rating: 5,
      author: 'Sarah J., USA',
      text: 'Fast eKYC, got my Digital ID in 3 minutes',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-blue-600">EXPERIENCE VIETNAM</h1>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="EN">EN ▼</option>
              <option value="VI">VI ▼</option>
              <option value="ZH">中文 ▼</option>
              <option value="JA">日本語 ▼</option>
              <option value="KO">한국어 ▼</option>
            </select>

            <Link
              to={ROUTES.LOGIN}
              className="px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-4">🇻🇳</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            WELCOME TO VIETNAM
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your Digital Identity for Seamless Travel
          </p>

          <Link
            to={ROUTES.REGISTER}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            GET STARTED FREE
          </Link>

          <p className="mt-4 text-gray-600">
            Already have account?{' '}
            <Link to={ROUTES.LOGIN} className="text-blue-600 hover:underline">
              Sign In →
            </Link>
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            WHY CHOOSE US?
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          TRUSTED BY 125,000+ VISITORS
        </h2>

        <div className="flex items-center justify-center space-x-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
          <span className="ml-2 text-xl font-semibold text-gray-900">4.8/5 Rating</span>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
              <p className="text-sm text-gray-500">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Vietnam?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who trust our platform
          </p>
          <Link
            to={ROUTES.REGISTER}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-sm space-x-4">
              <a href="#" className="hover:text-blue-400">About</a>
              <a href="#" className="hover:text-blue-400">Privacy</a>
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Contact</a>
              <a href="#" className="hover:text-blue-400">FAQ</a>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              © 2025 Experience Vietnam - Ministry of Public Security (C06)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
