import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const VisaExtension: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentVisaType: '',
    expiryDate: '',
    extensionDays: '30',
    reason: '',
    supportingDocs: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.VISA_EXTENSION_STATUS);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-3xl font-bold mb-2">VISA EXTENSION</h1>
          <p className="text-gray-600">Apply for visa extension online</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">CURRENT VISA INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Visa Type *</label>
                <select className="w-full px-3 py-2 border rounded-lg" required>
                  <option value="">Select Type</option>
                  <option value="tourist">Tourist Visa (DL)</option>
                  <option value="business">Business Visa (DN)</option>
                  <option value="student">Student Visa (DH)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Current Expiry Date *</label>
                <input type="date" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">EXTENSION REQUEST</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Extension Period *</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reason for Extension *</label>
                <textarea rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700">
            SUBMIT APPLICATION
          </button>
        </form>
      </main>
    </div>
  );
};

export default VisaExtension;