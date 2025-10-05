import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const DeclarationHistory: React.FC = () => {
  const navigate = useNavigate();
  const [declarations] = useState([
    {
      id: 'VN-DEC-20250115-001',
      type: 'Entry',
      submittedDate: '15 Jan 2025 10:30',
      arrivalDate: '20 Jan 2025',
      status: 'approved',
      flight: 'VN123',
      qrCode: true
    },
    {
      id: 'VN-DEC-20241220-045',
      type: 'Exit',
      submittedDate: '20 Dec 2024 08:15',
      departureDate: '25 Dec 2024',
      status: 'completed',
      flight: 'VN456',
      qrCode: false
    }
  ]);

  const getStatusBadge = (status: string) => {
    const styles = {
      approved: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-gray-100 text-gray-700',
      rejected: 'bg-red-100 text-red-700'
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
          <h1 className="text-xl font-bold">Declaration History</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">MY DECLARATIONS</h2>
            <p className="text-gray-600">{declarations.length} total declarations</p>
          </div>
          <button
            onClick={() => navigate(ROUTES.ENTRY_DECLARATION)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + NEW DECLARATION
          </button>
        </div>

        <div className="space-y-4">
          {declarations.map(declaration => (
            <div key={declaration.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{declaration.type} Declaration</h3>
                  <p className="text-sm text-gray-600">Reference: {declaration.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(declaration.status)}`}>
                  {declaration.status.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">Flight:</span>
                  <span className="font-medium ml-2">{declaration.flight}</span>
                </div>
                <div>
                  <span className="text-gray-600">Submitted:</span>
                  <span className="font-medium ml-2">{declaration.submittedDate}</span>
                </div>
                <div>
                  <span className="text-gray-600">{declaration.type} Date:</span>
                  <span className="font-medium ml-2">
                    {declaration.type === 'Entry' ? declaration.arrivalDate : declaration.departureDate}
                  </span>
                </div>
                <div>
                  {declaration.qrCode && (
                    <span className="text-green-600">✓ QR Code Available</span>
                  )}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                  📄 View Details
                </button>
                {declaration.qrCode && (
                  <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                    📱 Show QR Code
                  </button>
                )}
                <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                  📥 Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {declarations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">No Declarations Yet</h3>
            <p className="text-gray-600 mb-6">Submit your first entry/exit declaration</p>
            <button
              onClick={() => navigate(ROUTES.ENTRY_DECLARATION)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              CREATE DECLARATION
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default DeclarationHistory;