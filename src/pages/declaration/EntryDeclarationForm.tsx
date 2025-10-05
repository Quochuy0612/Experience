import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const EntryDeclarationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    arrivalDate: '',
    arrivalFlight: '',
    departureDate: '',
    purposeOfVisit: 'tourism',
    accommodationName: '',
    accommodationAddress: '',
    accommodationCity: '',
    contactInVietnam: '',
    contactPhone: '',
    declareCash: false,
    cashAmount: '',
    declareGoods: false,
    goodsDescription: '',
    healthDeclaration: {
      fever: false,
      cough: false,
      breathing: false,
      visitedCountries: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith('health.')) {
        const field = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          healthDeclaration: { ...prev.healthDeclaration, [field]: checked }
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.DECLARATION_CONFIRMATION);
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
          <div className="text-5xl mb-4">🛬</div>
          <h1 className="text-3xl font-bold mb-2">ENTRY DECLARATION</h1>
          <p className="text-gray-600">Required for all travelers entering Vietnam</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Travel Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">✈️ TRAVEL INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Arrival Date *</label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Flight Number *</label>
                <input
                  type="text"
                  name="arrivalFlight"
                  value={formData.arrivalFlight}
                  onChange={handleChange}
                  placeholder="VN123"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Departure Date *</label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Purpose of Visit *</label>
                <select
                  name="purposeOfVisit"
                  value={formData.purposeOfVisit}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="tourism">Tourism</option>
                  <option value="business">Business</option>
                  <option value="visiting_relatives">Visiting Relatives</option>
                  <option value="study">Study</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">🏨 ACCOMMODATION IN VIETNAM</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Hotel/Residence Name *</label>
                <input
                  type="text"
                  name="accommodationName"
                  value={formData.accommodationName}
                  onChange={handleChange}
                  placeholder="Hotel Metropole Hanoi"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address *</label>
                <input
                  type="text"
                  name="accommodationAddress"
                  value={formData.accommodationAddress}
                  onChange={handleChange}
                  placeholder="15 Ngo Quyen Street"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <select
                  name="accommodationCity"
                  value={formData.accommodationCity}
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

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">📞 CONTACT IN VIETNAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Contact Name</label>
                <input
                  type="text"
                  name="contactInVietnam"
                  value={formData.contactInVietnam}
                  onChange={handleChange}
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

          {/* Customs Declaration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">💰 CUSTOMS DECLARATION</h2>
            <div className="space-y-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="declareCash"
                  checked={formData.declareCash}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span className="text-sm">I am carrying cash exceeding USD $5,000 (or equivalent)</span>
              </label>
              {formData.declareCash && (
                <div>
                  <label className="block text-sm font-medium mb-1">Amount (USD)</label>
                  <input
                    type="number"
                    name="cashAmount"
                    value={formData.cashAmount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              )}
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="declareGoods"
                  checked={formData.declareGoods}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span className="text-sm">I am carrying goods subject to customs duties</span>
              </label>
              {formData.declareGoods && (
                <div>
                  <label className="block text-sm font-medium mb-1">Description of Goods</label>
                  <textarea
                    name="goodsDescription"
                    value={formData.goodsDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-lg"
                  ></textarea>
                </div>
              )}
            </div>
          </div>

          {/* Health Declaration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">🏥 HEALTH DECLARATION</h2>
            <p className="text-sm text-gray-600 mb-4">In the past 14 days, have you experienced any of the following?</p>
            <div className="space-y-3">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="health.fever"
                  checked={formData.healthDeclaration.fever}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span className="text-sm">Fever (≥38°C)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="health.cough"
                  checked={formData.healthDeclaration.cough}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span className="text-sm">Cough</span>
              </label>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="health.breathing"
                  checked={formData.healthDeclaration.breathing}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span className="text-sm">Shortness of breath</span>
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">Countries/Territories Visited (past 14 days)</label>
                <input
                  type="text"
                  name="healthDeclaration.visitedCountries"
                  value={formData.healthDeclaration.visitedCountries}
                  onChange={handleChange}
                  placeholder="Singapore, Thailand"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm">
              🔒 <strong>Privacy Notice:</strong> Your declaration will be encrypted and securely transmitted to Vietnam Immigration (C06).
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
              REVIEW & SUBMIT
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EntryDeclarationForm;