import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const ResidenceRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accommodationType: 'hotel',
    accommodationName: '',
    address: '',
    city: '',
    ward: '',
    district: '',
    checkInDate: '',
    checkOutDate: '',
    purpose: 'tourism',
    numberOfGuests: 1,
    contactPerson: '',
    contactPhone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.RESIDENCE_CONFIRMATION);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🏨</div>
          <h1 className="text-3xl font-bold mb-2">TEMPORARY RESIDENCE REGISTRATION</h1>
          <p className="text-gray-600">Register your accommodation in Vietnam</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">ACCOMMODATION TYPE</h2>
            <div className="grid grid-cols-3 gap-4">
              <label className={`p-4 border-2 rounded-lg cursor-pointer text-center ${formData.accommodationType === 'hotel' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="accommodationType"
                  value="hotel"
                  checked={formData.accommodationType === 'hotel'}
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="text-3xl mb-2">🏨</div>
                <div className="font-medium">Hotel</div>
              </label>
              <label className={`p-4 border-2 rounded-lg cursor-pointer text-center ${formData.accommodationType === 'airbnb' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="accommodationType"
                  value="airbnb"
                  checked={formData.accommodationType === 'airbnb'}
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="text-3xl mb-2">🏠</div>
                <div className="font-medium">Airbnb/Hostel</div>
              </label>
              <label className={`p-4 border-2 rounded-lg cursor-pointer text-center ${formData.accommodationType === 'private' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
                <input
                  type="radio"
                  name="accommodationType"
                  value="private"
                  checked={formData.accommodationType === 'private'}
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="text-3xl mb-2">👨‍👩‍👦</div>
                <div className="font-medium">Private Home</div>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">ACCOMMODATION DETAILS</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Accommodation Name *</label>
                <input
                  type="text"
                  name="accommodationName"
                  value={formData.accommodationName}
                  onChange={handleChange}
                  placeholder="e.g., Hotel Metropole Hanoi"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street number and name"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Ward *</label>
                  <input
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">District *</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  >
                    <option value="">Select City</option>
                    <option value="hanoi">Hanoi</option>
                    <option value="hcmc">Ho Chi Minh City</option>
                    <option value="danang">Da Nang</option>
                    <option value="halong">Ha Long</option>
                    <option value="hue">Hue</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">STAY INFORMATION</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Check-in Date *</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Check-out Date *</label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Purpose of Stay *</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="tourism">Tourism</option>
                  <option value="business">Business</option>
                  <option value="study">Study</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Guests</label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">CONTACT INFORMATION</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Host or reception name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Phone *</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="+84 xxx-xxx-xxx"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm">
              📋 <strong>Note:</strong> Temporary residence registration is required for all foreign visitors staying in Vietnam. Your accommodation may have already registered on your behalf.
            </p>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-300 rounded-lg"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              REGISTER
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ResidenceRegistration;
