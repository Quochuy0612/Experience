import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const TourSearch: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const [tours] = useState([
    {
      id: 1,
      name: 'Ha Long Bay Cruise',
      category: 'nature',
      city: 'halong',
      price: 150,
      duration: '2D1N',
      rating: 4.8,
      reviews: 1247,
      image: '🚢',
      description: 'Luxury overnight cruise through stunning limestone karsts',
      included: ['Meals', 'Kayaking', 'Cave Visit']
    },
    {
      id: 2,
      name: 'Hanoi Street Food Tour',
      category: 'food',
      city: 'hanoi',
      price: 35,
      duration: '4 hours',
      rating: 4.9,
      reviews: 892,
      image: '🍜',
      description: 'Authentic local food experience with expert guide',
      included: ['10+ dishes', 'Guide', 'Drinks']
    },
    {
      id: 3,
      name: 'Hoi An Ancient Town Walking',
      category: 'culture',
      city: 'hoian',
      price: 25,
      duration: '3 hours',
      rating: 4.7,
      reviews: 654,
      image: '🏮',
      description: 'Explore UNESCO heritage site with local historian',
      included: ['Guide', 'Entrance Fees', 'Tea']
    },
    {
      id: 4,
      name: 'Mekong Delta Adventure',
      category: 'adventure',
      city: 'hcmc',
      price: 85,
      duration: '1 day',
      rating: 4.6,
      reviews: 543,
      image: '🛶',
      description: 'River cruise, floating markets, and local life',
      included: ['Transport', 'Lunch', 'Boat Ride']
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Tours', icon: '🎯' },
    { id: 'nature', name: 'Nature', icon: '🏞️' },
    { id: 'culture', name: 'Culture', icon: '🏛️' },
    { id: 'food', name: 'Food', icon: '🍜' },
    { id: 'adventure', name: 'Adventure', icon: '🎿' }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesCity = selectedCity === 'all' || tour.city === selectedCity;
    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(ROUTES.DASHBOARD)} className="text-blue-600">← Dashboard</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">DISCOVER VIETNAM</h1>
          <p className="text-gray-600">Find and book amazing tours & activities</p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tours, activities, destinations..."
                className="w-full pl-12 pr-4 py-3 border rounded-lg"
              />
              <span className="absolute left-4 top-3.5 text-xl">🔍</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="all">All Categories</option>
                  <option value="nature">Nature & Adventure</option>
                  <option value="culture">Culture & Heritage</option>
                  <option value="food">Food & Dining</option>
                  <option value="adventure">Adventure Sports</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="all">All Cities</option>
                  <option value="hanoi">Hanoi</option>
                  <option value="hcmc">Ho Chi Minh City</option>
                  <option value="danang">Da Nang</option>
                  <option value="halong">Ha Long</option>
                  <option value="hoian">Hoi An</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">{filteredTours.length} tours found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTours.map(tour => (
            <div
              key={tour.id}
              onClick={() => navigate(`${ROUTES.TOUR_DETAIL}?id=${tour.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-48 flex items-center justify-center text-8xl">
                {tour.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{tour.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${tour.price}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3">{tour.description}</p>

                <div className="flex items-center space-x-4 mb-3 text-sm">
                  <span>⭐ {tour.rating}</span>
                  <span className="text-gray-600">({tour.reviews} reviews)</span>
                  <span>🕐 {tour.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.included.map((item, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                      ✓ {item}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No tours found</h3>
            <p className="text-gray-600">Try adjusting your search filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TourSearch;