import { useState } from 'react';
import { Search, MapPin, Star, Navigation, Filter } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const MapExplore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const attractions = [
    {
      id: 1,
      name: 'Temple of Literature',
      name_vn: 'Văn Miếu - Quốc Tử Giám',
      category: 'temple',
      rating: 4.8,
      distance: '2.0 km',
      lat: 21.0285,
      lng: 105.8355
    },
    {
      id: 2,
      name: 'Hoan Kiem Lake',
      name_vn: 'Hồ Hoàn Kiếm',
      category: 'nature',
      rating: 4.9,
      distance: '500 m',
      lat: 21.0285,
      lng: 105.8522
    },
    {
      id: 3,
      name: 'Pho Gia Truyen',
      name_vn: 'Phở Gia Truyền',
      category: 'restaurant',
      rating: 4.9,
      distance: '300 m',
      lat: 21.0335,
      lng: 105.8500
    },
    {
      id: 4,
      name: 'Vietnam Museum of Ethnology',
      name_vn: 'Bảo Tàng Dân Tộc Học',
      category: 'museum',
      rating: 4.7,
      distance: '8.5 km',
      lat: 21.0377,
      lng: 105.7995
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: '🗺️' },
    { id: 'temple', label: 'Temples', icon: '🏛️' },
    { id: 'museum', label: 'Museums', icon: '🏛️' },
    { id: 'restaurant', label: 'Food', icon: '🍜' },
    { id: 'nature', label: 'Nature', icon: '🌳' }
  ];

  const filteredAttractions = attractions.filter(a =>
    (selectedCategory === 'all' || a.category === selectedCategory) &&
    (a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.name_vn.includes(searchQuery))
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1">
        {/* Search Bar */}
        <div style={{ backgroundColor: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem' }}>
          <div className="container mx-auto px-4">
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#9CA3AF' }} />
              <input
                type="text"
                className="input-field"
                style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
                placeholder="Search attractions, restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
                <Filter style={{ width: '1.25rem', height: '1.25rem', color: '#6B7280' }} />
              </button>
            </div>

            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    backgroundColor: selectedCategory === cat.id ? '#0066CC' : '#F3F4F6',
                    color: selectedCategory === cat.id ? 'white' : '#6B7280'
                  }}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Map Placeholder */}
            <div style={{ gridColumn: '1 / -1', height: '400px', backgroundColor: '#E5E7EB', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ textAlign: 'center' }}>
                <MapPin style={{ width: '3rem', height: '3rem', color: '#6B7280', margin: '0 auto 1rem' }} />
                <p style={{ color: '#6B7280', fontWeight: 600 }}>📍 Interactive Map</p>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Your location: Hanoi, Vietnam</p>
              </div>

              {/* Mock markers */}
              {filteredAttractions.map(attr => (
                <div
                  key={attr.id}
                  style={{
                    position: 'absolute',
                    left: `${20 + attr.id * 15}%`,
                    top: `${30 + attr.id * 10}%`,
                    transform: 'translate(-50%, -100%)'
                  }}
                >
                  <div style={{ width: '2rem', height: '2rem', backgroundColor: '#EF4444', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                    <div style={{ transform: 'rotate(45deg)', color: 'white', fontSize: '1rem' }}>📍</div>
                  </div>
                </div>
              ))}

              {/* Current Location */}
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ width: '1rem', height: '1rem', backgroundColor: '#3B82F6', borderRadius: '50%', border: '3px solid white', boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)' }} />
              </div>
            </div>

            {/* Nearby Results */}
            <div style={{ gridColumn: '1 / -1' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Nearby Places ({filteredAttractions.length})
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {filteredAttractions.map(attr => (
                  <div key={attr.id} className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s', padding: '1rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ marginBottom: '0.75rem' }}>
                      <h3 className="text-lg font-bold text-gray-900">{attr.name}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>{attr.name_vn}</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Star style={{ width: '1rem', height: '1rem', color: '#FFD700', fill: '#FFD700' }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{attr.rating}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#6B7280' }}>
                        <Navigation style={{ width: '1rem', height: '1rem' }} />
                        <span style={{ fontSize: '0.875rem' }}>{attr.distance}</span>
                      </div>
                    </div>

                    <button className="btn-primary" style={{ width: '100%', padding: '0.5rem' }}>
                      Get Directions
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapExplore;
