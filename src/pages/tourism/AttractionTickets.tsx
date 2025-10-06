import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ticket,
  MapPin,
  Clock,
  Star,
  Calendar,
  Users,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';

interface Attraction {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  category: string;
  duration: string;
  openingHours: string;
  description: string;
}

const AttractionTickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const attractions: Attraction[] = [
    {
      id: '1',
      name: 'Halong Bay Cruise',
      location: 'Halong Bay, Quang Ninh',
      rating: 4.9,
      reviews: 2450,
      price: 1200000,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      category: 'nature',
      duration: '1 day',
      openingHours: '8:00 AM - 6:00 PM',
      description: 'UNESCO World Heritage Site with stunning limestone karsts'
    },
    {
      id: '2',
      name: 'Temple of Literature',
      location: 'Hanoi',
      rating: 4.7,
      reviews: 1820,
      price: 30000,
      image: 'https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/1704292755_iStock-2153199185.jpg?w=800&q=80',
      category: 'culture',
      duration: '2 hours',
      openingHours: '8:30 AM - 5:30 PM',
      description: "Vietnam's first national university, built in 1070"
    },
    {
      id: '3',
      name: 'Hoi An Ancient Town',
      location: 'Hoi An, Quang Nam',
      rating: 4.9,
      reviews: 3200,
      price: 120000,
      image: 'https://vietnam.travel/sites/default/files/inline-images/11125-Qu%E1%BA%A3ng%20Nam-huybank%40gmail.com-hoi%20an%20ve%20dem%20.jpg?w=800',
      category: 'culture',
      duration: 'Full day',
      openingHours: '24/7',
      description: 'Historic UNESCO site with ancient architecture'
    },
    {
      id: '4',
      name: 'Cu Chi Tunnels',
      location: 'Ho Chi Minh City',
      rating: 4.6,
      reviews: 1950,
      price: 90000,
      image: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/16/91/7e/94.jpg?w=800&q=80',
      category: 'history',
      duration: 'Half day',
      openingHours: '7:00 AM - 5:00 PM',
      description: 'Historic underground tunnel network from Vietnam War'
    },
    {
      id: '5',
      name: 'Phong Nha Cave',
      location: 'Quang Binh',
      rating: 4.8,
      reviews: 1560,
      price: 150000,
      image: 'https://statics.vinwonders.com/Phong-Nha-Ke-Bang-National-Park-02_1678776818.jpg?w=800',
      category: 'nature',
      duration: '4 hours',
      openingHours: '7:00 AM - 4:00 PM',
      description: 'Spectacular cave system with unique formations'
    },
    {
      id: '6',
      name: 'Saigon Opera House',
      location: 'Ho Chi Minh City',
      rating: 4.5,
      reviews: 980,
      price: 200000,
      image: 'https://image-tc.galaxy.tf/wijpeg-44bbhfxaldx46qfr0osntcxp7/opera-house-3_standard.jpg?crop=204%2C0%2C907%2C680?w=800&q=80',
      category: 'culture',
      duration: '2 hours',
      openingHours: 'Show times vary',
      description: 'Beautiful French colonial architecture with cultural performances'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Attractions' },
    { id: 'nature', label: 'Nature & Parks' },
    { id: 'culture', label: 'Culture & Heritage' },
    { id: 'history', label: 'Historical Sites' }
  ];

  const filteredAttractions = attractions.filter(attraction => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         attraction.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || attraction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Attraction Tickets</h1>
          <p className="text-xl text-blue-100">Book tickets to Vietnam's top attractions</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search attractions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map(attraction => (
            <Link
              key={attraction.id}
              to={`/tickets/${attraction.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {attraction.price.toLocaleString('vi-VN')} ₫
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {attraction.name}
                </h3>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {attraction.location}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-gray-900">{attraction.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({attraction.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{attraction.duration}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-sm">Book Now</span>
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <Ticket className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No attractions found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Why Book With Us */}
        <div className="mt-12 bg-white rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Book With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
              <p className="text-gray-600 text-sm">Get your e-tickets immediately via email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Booking</h3>
              <p className="text-gray-600 text-sm">Free cancellation up to 24 hours before</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Guaranteed lowest prices or we'll refund the difference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionTickets;
