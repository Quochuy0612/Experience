import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CreditCard } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const VisaApply = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    visaType: 'tourist',
    entryType: 'single',
    arrivalDate: '',
    port: 'Noi Bai International Airport'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment and approval
    localStorage.setItem('visaStatus', 'approved');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Apply for e-Visa</h1>

          <form onSubmit={handleSubmit} className="card space-y-6">
            {/* Visa Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Visa Type</label>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="visaType"
                    value="tourist"
                    checked={formData.visaType === 'tourist'}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">Tourist Visa (30 days)</p>
                    <p className="text-sm text-gray-600">For leisure and tourism purposes</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="visaType"
                    value="business"
                    checked={formData.visaType === 'business'}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">Business Visa</p>
                    <p className="text-sm text-gray-600">For business meetings and conferences</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Entry Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Entry Type</label>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="entryType"
                    value="single"
                    checked={formData.entryType === 'single'}
                    onChange={(e) => setFormData({ ...formData, entryType: e.target.value })}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">Single Entry</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="entryType"
                    value="multiple"
                    checked={formData.entryType === 'multiple'}
                    onChange={(e) => setFormData({ ...formData, entryType: e.target.value })}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">Multiple Entries</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Arrival Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Date</label>
              <input
                type="date"
                className="input-field"
                value={formData.arrivalDate}
                onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                required
              />
            </div>

            {/* Port of Entry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Port of Entry</label>
              <select
                className="input-field"
                value={formData.port}
                onChange={(e) => setFormData({ ...formData, port: e.target.value })}
              >
                <option>Noi Bai International Airport (Hanoi)</option>
                <option>Tan Son Nhat International Airport (HCMC)</option>
                <option>Da Nang International Airport</option>
                <option>Cam Ranh International Airport</option>
              </select>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Visa Fee</span>
                  <span className="font-semibold">$25 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-semibold">3 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Validity</span>
                  <span className="font-semibold">30 days</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary flex-1 flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VisaApply;
