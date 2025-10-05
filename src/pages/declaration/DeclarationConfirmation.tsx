import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const DeclarationConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-4">DECLARATION SUBMITTED</h1>
          <p className="text-lg text-gray-600">Your entry declaration has been successfully submitted</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">DECLARATION QR CODE</h2>
          <div className="bg-white p-6 rounded inline-block">
            <div className="text-8xl text-gray-800">📱</div>
          </div>
          <p className="mt-4 text-sm">Reference: VN-DEC-20250115-001</p>
          <p className="text-sm">Valid until: 20 Jan 2025</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">📱 IMPORTANT:</h3>
          <p className="text-sm">Present this QR code at immigration counter upon arrival</p>
        </div>

        <div className="space-y-3 mb-6">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            📥 DOWNLOAD QR CODE
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            📧 EMAIL TO MYSELF
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            🖨️ PRINT DECLARATION
          </button>
        </div>

        <div className="bg-white border rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3">NEXT STEPS:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span>1.</span>
              <span>Save or print your QR code</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>2.</span>
              <span>Show QR code at immigration upon arrival</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>3.</span>
              <span>Complete health screening if required</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>4.</span>
              <span>Proceed to baggage claim</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigate(ROUTES.DASHBOARD)}
          className="w-full bg-gray-600 text-white py-4 rounded-lg font-semibold hover:bg-gray-700"
        >
          BACK TO DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default DeclarationConfirmation;