import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

interface DutyFreeStore {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  categories: string[];
  distance?: number;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const DutyFreeMap: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState<DutyFreeStore | null>(null);

  const stores: DutyFreeStore[] = [
    {
      id: '1',
      name: 'Duty Free Tan Son Nhat Airport',
      city: 'Ho Chi Minh City',
      address: 'Tan Son Nhat International Airport, Terminal 1, Tan Binh District',
      phone: '+84 28 3848 5383',
      hours: '24/7',
      categories: ['cosmetics', 'electronics', 'fashion', 'spirits', 'tobacco'],
      rating: 4.5,
      coordinates: { lat: 10.8188, lng: 106.6519 }
    },
    {
      id: '2',
      name: 'Duty Free Noi Bai Airport',
      city: 'Hanoi',
      address: 'Noi Bai International Airport, Terminal 2, Soc Son District',
      phone: '+84 24 3886 5047',
      hours: '24/7',
      categories: ['cosmetics', 'electronics', 'fashion', 'spirits', 'souvenirs'],
      rating: 4.3,
      coordinates: { lat: 21.2212, lng: 105.8072 }
    },
    {
      id: '3',
      name: 'Duty Free Da Nang Airport',
      city: 'Da Nang',
      address: 'Da Nang International Airport, Terminal 1',
      phone: '+84 236 3830 339',
      hours: '05:00 - 23:00',
      categories: ['cosmetics', 'spirits', 'souvenirs'],
      rating: 4.2,
      coordinates: { lat: 16.0439, lng: 108.1993 }
    },
    {
      id: '4',
      name: 'Le Thanh Ton Duty Free',
      city: 'Ho Chi Minh City',
      address: '52A Le Thanh Ton, District 1',
      phone: '+84 28 3822 5808',
      hours: '09:00 - 21:00',
      categories: ['cosmetics', 'fashion', 'watches'],
      rating: 4.6,
      coordinates: { lat: 10.7764, lng: 106.7009 }
    },
    {
      id: '5',
      name: 'Duty Free Cam Ranh Airport',
      city: 'Nha Trang',
      address: 'Cam Ranh International Airport, Cam Lam District',
      phone: '+84 258 3989 898',
      hours: '05:00 - 22:00',
      categories: ['cosmetics', 'spirits', 'souvenirs'],
      rating: 4.1,
      coordinates: { lat: 12.0068, lng: 109.2195 }
    },
    {
      id: '6',
      name: 'Duty Free Phu Quoc Airport',
      city: 'Phu Quoc',
      address: 'Phu Quoc International Airport, Duong To Commune',
      phone: '+84 297 3980 088',
      hours: '05:00 - 23:00',
      categories: ['cosmetics', 'spirits', 'souvenirs', 'local_products'],
      rating: 4.4,
      coordinates: { lat: 10.1698, lng: 103.9938 }
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: '🛍️' },
    { value: 'cosmetics', label: 'Cosmetics & Perfumes', icon: '💄' },
    { value: 'electronics', label: 'Electronics', icon: '📱' },
    { value: 'fashion', label: 'Fashion & Accessories', icon: '👗' },
    { value: 'spirits', label: 'Spirits & Wine', icon: '🍷' },
    { value: 'tobacco', label: 'Tobacco', icon: '🚬' },
    { value: 'souvenirs', label: 'Souvenirs', icon: '🎁' },
    { value: 'watches', label: 'Watches', icon: '⌚' },
    { value: 'local_products', label: 'Local Products', icon: '🇻🇳' }
  ];

  const cities = [
    { value: 'all', label: 'All Cities', icon: '🌍' },
    { value: 'Ho Chi Minh City', label: 'Ho Chi Minh City', icon: '🏙️' },
    { value: 'Hanoi', label: 'Hanoi', icon: '🏛️' },
    { value: 'Da Nang', label: 'Da Nang', icon: '🏖️' },
    { value: 'Nha Trang', label: 'Nha Trang', icon: '🌊' },
    { value: 'Phu Quoc', label: 'Phu Quoc', icon: '🏝️' }
  ];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'all' || store.city === selectedCity;
    const matchesCategory = selectedCategory === 'all' || store.categories.includes(selectedCategory);
    return matchesSearch && matchesCity && matchesCategory;
  });

  const getCategoryIcon = (categoryValue: string) => {
    return categories.find(c => c.value === categoryValue)?.icon || '🛍️';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(ROUTES.VAT_TRACKING)} className="text-blue-600">← Back</button>
          <h1 className="text-xl font-bold">Duty Free Stores</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm"
            >
              {cities.map(city => (
                <option key={city.value} value={city.value}>
                  {city.icon} {city.label}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        {/* Map Placeholder */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 flex items-center justify-center relative">
            <div className="text-center text-white">
              <div className="text-6xl mb-3">🗺️</div>
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm opacity-90">Showing {filteredStores.length} stores</p>
            </div>
            {/* Map markers preview */}
            <div className="absolute inset-0 flex items-center justify-center gap-8">
              {filteredStores.slice(0, 3).map((_, idx) => (
                <div key={idx} className="text-3xl animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}>
                  📍
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            {filteredStores.length} {filteredStores.length === 1 ? 'Store' : 'Stores'} Found
          </h2>
          <button className="text-blue-600 text-sm">
            📍 Use My Location
          </button>
        </div>

        {/* Store List */}
        <div className="space-y-4">
          {filteredStores.map(store => (
            <div
              key={store.id}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedStore(selectedStore?.id === store.id ? null : store)}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{store.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <span className="mr-1">📍</span>
                    {store.city}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-medium">{store.rating}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-700 mb-3">
                <p className="flex items-start">
                  <span className="mr-2 mt-0.5">🏢</span>
                  <span>{store.address}</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>{store.phone}</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🕐</span>
                  <span className="font-medium">{store.hours}</span>
                </p>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {store.categories.map(cat => (
                  <span key={cat} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {getCategoryIcon(cat)} {categories.find(c => c.value === cat)?.label}
                  </span>
                ))}
              </div>

              {/* Expanded Details */}
              {selectedStore?.id === store.id && (
                <div className="border-t pt-4 mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center text-sm">
                      <span className="mr-2">🧭</span>
                      Get Directions
                    </button>
                    <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 flex items-center justify-center text-sm">
                      <span className="mr-2">📞</span>
                      Call Now
                    </button>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-2">💡 Shopping Tips</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Bring your passport for tax-free shopping</li>
                      <li>• Keep all receipts for VAT refund claims</li>
                      <li>• Check customs allowance limits before purchasing</li>
                    </ul>
                  </div>
                </div>
              )}

              <button className="w-full text-center text-blue-600 text-sm mt-2">
                {selectedStore?.id === store.id ? '▲ Show Less' : '▼ View Details'}
              </button>
            </div>
          ))}

          {filteredStores.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No Stores Found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCity('all');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* VAT Refund Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-start">
            <span className="text-4xl mr-4">💰</span>
            <div>
              <h3 className="font-bold text-lg mb-2">Don't Forget Your VAT Refund!</h3>
              <p className="text-sm mb-3 opacity-90">
                Get up to 10% VAT refund on eligible purchases. Make sure to claim at the airport before departure.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(ROUTES.VAT_SUBMIT_REQUEST)}
                  className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 text-sm font-medium"
                >
                  Submit Request →
                </button>
                <button
                  onClick={() => navigate(ROUTES.VAT_TRACK_STATUS)}
                  className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white/10 text-sm font-medium"
                >
                  Track Status →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DutyFreeMap;
