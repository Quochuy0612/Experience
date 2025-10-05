import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const ResidenceConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-4">REGISTRATION SUCCESSFUL!</h1>
        <p className="text-lg text-gray-600 mb-8">Your temporary residence has been registered</p>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">RESIDENCE CONFIRMATION</h2>
          <div className="bg-white p-6 rounded inline-block">
            <div className="text-8xl text-gray-800">📱</div>
          </div>
          <p className="mt-4 text-sm">Reference: RES-20250115-001</p>
          <p className="text-sm">Hotel Metropole Hanoi</p>
          <p className="text-sm">Valid: 15 Jan - 25 Jan 2025</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm">🔔 You will be notified if any updates are needed</p>
        </div>

        <button
          onClick={() => navigate(ROUTES.DASHBOARD)}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700"
        >
          GO TO DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default ResidenceConfirmation;