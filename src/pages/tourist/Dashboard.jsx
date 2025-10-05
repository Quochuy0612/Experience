import { Link } from 'react-router-dom';
import {
  CreditCard,
  AlertCircle,
  Hotel,
  Ticket,
  Car,
  UtensilsCrossed,
  DollarSign,
  Map,
  FileText,
  CheckCircle
} from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const digitalId = localStorage.getItem('digitalId') || '#12345';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header userType="tourist" />

      <div className="flex-1 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2 text-white">Hello, {user.fullName || 'John'}! 👋</h1>
          <p className="text-white/90 mb-4">Digital ID: {digitalId}</p>
          <div className="flex gap-4">
            <Link to="/visa-apply" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply e-Visa
            </Link>
            <Link to="/emergency" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              SOS
            </Link>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">e-Visa Status</h3>
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold">Active</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Valid until: Nov 30, 2025</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Current Location</h3>
              <Map className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold text-gray-900">Hanoi, Vietnam</p>
            <Link to="/map" className="text-sm text-primary hover:underline mt-2 inline-block">
              View on Map →
            </Link>
          </div>
        </div>

        {/* Quick Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/hotels" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Hotels</p>
            </Link>

            <Link to="/tours" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Tours</p>
            </Link>

            <Link to="/transport" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Transport</p>
            </Link>

            <Link to="/restaurants" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Restaurants</p>
            </Link>

            <Link to="/vat-refund" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">VAT Refund</p>
            </Link>

            <Link to="/entry-declaration" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Entry Form</p>
            </Link>

            <Link to="/accommodation" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Register Stay</p>
            </Link>

            <Link to="/map" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Explore</p>
            </Link>
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card overflow-hidden p-0">
              <img
                src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400"
                alt="Halong Bay"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Halong Bay</h3>
                <p className="text-gray-600 text-sm mb-3">UNESCO World Heritage Site</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">⭐ 4.9</span>
                  <Link to="/tours" className="text-primary hover:underline text-sm">View Tours →</Link>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <img
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400"
                alt="Hoi An"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Hoi An Ancient Town</h3>
                <p className="text-gray-600 text-sm mb-3">Historic UNESCO site</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">⭐ 4.9</span>
                  <Link to="/tours" className="text-primary hover:underline text-sm">View Tours →</Link>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?w=400"
                alt="Temple"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Temple of Literature</h3>
                <p className="text-gray-600 text-sm mb-3">Vietnam's first university</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">⭐ 4.8</span>
                  <Link to="/map" className="text-primary hover:underline text-sm">Get Directions →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
