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
import AIChatbot from '../../components/ai/AIChatbot';
import VoiceAssistant from '../../components/ai/VoiceAssistant';

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

        {/* Essential Services (Government/Public) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Essential Services</h2>
              <p className="text-sm text-gray-600">Government & Public Services</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/entry-declaration" className="card hover:shadow-xl transition-shadow text-center border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Entry Declaration</p>
              <span className="text-xs text-blue-600 mt-1 inline-block">Required</span>
            </Link>

            <Link to="/accommodation" className="card hover:shadow-xl transition-shadow text-center border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Hotel className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Register Stay</p>
              <span className="text-xs text-blue-600 mt-1 inline-block">Required</span>
            </Link>

            <Link to="/visa-apply" className="card hover:shadow-xl transition-shadow text-center border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Visa Services</p>
              <span className="text-xs text-blue-600 mt-1 inline-block">Government</span>
            </Link>

            <Link to="/vat-refund" className="card hover:shadow-xl transition-shadow text-center border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">VAT Refund</p>
              <span className="text-xs text-blue-600 mt-1 inline-block">Tax Service</span>
            </Link>
          </div>
        </div>

        {/* Value-Added Services (Commercial) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <Ticket className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Tourism & Travel</h2>
              <p className="text-sm text-gray-600">Explore Vietnam</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/tickets" className="card hover:shadow-xl transition-shadow text-center bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Ticket className="w-6 h-6 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-900">Attraction Tickets</p>
              <span className="text-xs text-purple-600 mt-1 inline-block">🎫 Popular</span>
            </Link>

            <Link to="/tours" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Tours & Activities</p>
            </Link>

            <Link to="/hotels" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Hotels</p>
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

            <Link to="/map" className="card hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-gray-900">Explore Map</p>
            </Link>
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card overflow-hidden p-0">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?w=400"
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
                src="https://vietnam.travel/sites/default/files/inline-images/11125-Qu%E1%BA%A3ng%20Nam-huybank%40gmail.com-hoi%20an%20ve%20dem%20.jpg?w=400"
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
                src="https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/1704292755_iStock-2153199185.jpg?w=400"
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

      {/* AI Features */}
      <AIChatbot />
      <VoiceAssistant />
    </div>
  );
};

export default Dashboard;
