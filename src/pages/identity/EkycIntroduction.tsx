import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const EkycIntroduction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to={ROUTES.DASHBOARD} className="text-blue-600">☰ Dashboard</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎫</div>
          <h1 className="text-3xl font-bold mb-4">GET YOUR DIGITAL ID</h1>
          <p className="text-xl text-gray-600">Complete eKYC to unlock all platform features</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">YOUR DIGITAL ID: Not Yet Created</h2>
            <p className="text-gray-600 mb-4">Complete verification to receive:</p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="text-green-600">✓</span>
                <span>Official Vietnam Digital ID (VN-XXXXXXXXXXXX)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">✓</span>
                <span>Fast-track entry/exit at borders</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">✓</span>
                <span>Access to all government services</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">✓</span>
                <span>Book tours and activities</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">✓</span>
                <span>Apply for visa extensions</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">✓</span>
                <span>VAT refund eligibility</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">VERIFICATION PROCESS</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1">
                <div className="font-medium">Upload Passport</div>
                <div className="text-sm text-gray-600">⏱️ 1 min</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <div className="font-medium">Take Selfie</div>
                <div className="text-sm text-gray-600">⏱️ 1 min</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <div className="font-medium">Review & Submit</div>
                <div className="text-sm text-gray-600">⏱️ 30 sec</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1">
                <div className="font-medium">Government Verification</div>
                <div className="text-sm text-gray-600">⏱️ 2-5 min</div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
            Total Time: ~5 minutes
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">📋 REQUIREMENTS:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span>•</span>
              <span>Valid passport (not expired)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>•</span>
              <span>Clear photo of passport bio page</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>•</span>
              <span>Good lighting for selfie</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>•</span>
              <span>Stable internet connection</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <span className="text-green-600 text-xl">🔒</span>
            <div className="text-sm text-gray-700">
              <strong>Your data is encrypted and protected by</strong><br />
              Vietnam Ministry of Public Security (C06)
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={() => navigate(ROUTES.EKYC_PASSPORT)}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            START VERIFICATION
          </button>
          <button
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="text-gray-600 hover:text-gray-900"
          >
            I'll do this later
          </button>
        </div>
      </main>
    </div>
  );
};

export default EkycIntroduction;
