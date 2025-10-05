import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const ReviewSubmit: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [digitalId, setDigitalId] = useState('');

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setDigitalId('VN-2025010001');
      setSuccess(true);
      setIsSubmitting(false);
    }, 3000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-4">VERIFICATION SUCCESSFUL!</h1>
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-6">CONGRATULATIONS JOHN!</h2>
          <p className="text-lg text-gray-600 mb-8">Your Digital ID has been created</p>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 mb-6">
            <h3 className="text-xl font-semibold mb-4">VIETNAM DIGITAL ID</h3>
            <p className="text-2xl font-bold mb-4">{digitalId}</p>
            <div className="bg-white p-4 rounded inline-block">
              <div className="text-6xl text-gray-800">📱</div>
              <p className="text-sm text-gray-600 mt-2">[QR Code]</p>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p>John Smith</p>
              <p>Australia</p>
              <p>Issued: 15 Jan 2025</p>
            </div>
          </div>

          <button className="mb-6 bg-white border border-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50">
            📥 DOWNLOAD DIGITAL ID CARD
          </button>

          <div className="text-left bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3">You can now:</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2"><span>✓</span><span>Submit entry/exit declarations</span></li>
              <li className="flex items-start space-x-2"><span>✓</span><span>Book tours and activities</span></li>
              <li className="flex items-start space-x-2"><span>✓</span><span>Apply for VAT refunds</span></li>
              <li className="flex items-start space-x-2"><span>✓</span><span>Register temporary residence</span></li>
              <li className="flex items-start space-x-2"><span>✓</span><span>Access all platform services</span></li>
            </ul>
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
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-6xl mb-4 animate-spin">🔄</div>
          <h1 className="text-2xl font-bold mb-4">VERIFICATION IN PROGRESS</h1>
          <p className="text-gray-600 mb-6">Your documents are being verified by C06...</p>

          <div className="text-left space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-green-600">✓</span>
              <span>Documents uploaded successfully</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600">✓</span>
              <span>Identity verification completed</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="animate-pulse">🔄</span>
              <span>Submitting to C06 system...</span>
            </div>
            <div className="flex items-center space-x-3">
              <span>⏳</span>
              <span>Government verification (2-5 min)</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '50%' }}></div>
          </div>

          <p className="text-sm text-gray-600">⏰ Estimated completion: 3 minutes</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Step 3 of 4</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-3xl font-bold mb-2">REVIEW YOUR INFORMATION</h1>
          <p className="text-gray-600">Please verify all details before submitting</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">PERSONAL INFORMATION</h2>
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-600">Full Name:</span> <span className="font-medium">John Smith</span></div>
              <div><span className="text-gray-600">Date of Birth:</span> <span className="font-medium">15 May 1988 (36 years old)</span></div>
              <div><span className="text-gray-600">Gender:</span> <span className="font-medium">Male</span></div>
              <div><span className="text-gray-600">Nationality:</span> <span className="font-medium">Australia</span></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">PASSPORT INFORMATION</h2>
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-600">Passport Number:</span> <span className="font-medium">N1234567</span></div>
              <div><span className="text-gray-600">Issue Date:</span> <span className="font-medium">10 Jan 2020</span></div>
              <div><span className="text-gray-600">Expiry Date:</span> <span className="font-medium">10 Jan 2030 ✓ Valid</span></div>
              <div><span className="text-gray-600">Place of Issue:</span> <span className="font-medium">Australia</span></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">CONTACT INFORMATION</h2>
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-600">Email:</span> <span className="font-medium">john.smith@example.com ✓ Verified</span></div>
              <div><span className="text-gray-600">Phone:</span> <span className="font-medium">+61 400-123-456</span></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">UPLOADED DOCUMENTS</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">📄 Passport Bio Page</span>
                <div className="space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">Preview</button>
                  <button className="text-blue-600 hover:underline text-sm">Replace</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">🤳 Selfie Photo</span>
                <div className="space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">Preview</button>
                  <button className="text-blue-600 hover:underline text-sm">Replace</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" defaultChecked />
              <span className="text-sm">I confirm that all information provided is accurate and matches my official documents</span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" defaultChecked />
              <span className="text-sm">I authorize C06 (Ministry of Public Security) to verify my identity and create a Digital ID</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button onClick={() => navigate(-1)} className="px-6 py-3 border border-gray-300 rounded-lg">BACK</button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            SUBMIT FOR VERIFICATION
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReviewSubmit;