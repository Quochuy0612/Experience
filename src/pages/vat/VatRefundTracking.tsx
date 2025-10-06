import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const VatRefundTracking: React.FC = () => {
  const navigate = useNavigate();
  const [requests] = useState([
    {
      id: 'VAT-20250115-001',
      submittedDate: '2025-01-15',
      amount: 570000,
      status: 'processing',
      receipts: 2,
      expectedDate: '2025-02-05'
    },
    {
      id: 'VAT-20241220-042',
      submittedDate: '2024-12-20',
      amount: 350000,
      status: 'completed',
      receipts: 1,
      completedDate: '2025-01-10',
      transferredAmount: 350000
    }
  ]);

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: { bg: 'bg-yellow-100 text-yellow-700', icon: '⏳' },
      processing: { bg: 'bg-blue-100 text-blue-700', icon: '🔄' },
      approved: { bg: 'bg-green-100 text-green-700', icon: '✓' },
      completed: { bg: 'bg-gray-100 text-gray-700', icon: '✓' },
      rejected: { bg: 'bg-red-100 text-red-700', icon: '✗' }
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getStatusText = (status: string) => {
    const texts = {
      pending: 'Pending Verification',
      processing: 'Processing at Airport',
      approved: 'Approved - Awaiting Transfer',
      completed: 'Refund Completed',
      rejected: 'Rejected'
    };
    return texts[status as keyof typeof texts] || status;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(ROUTES.DASHBOARD)} className="text-blue-600">← Dashboard</button>
          <h1 className="text-xl font-bold">VAT Refund Tracking</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">MY VAT REFUNDS</h2>
            <p className="text-gray-600">{requests.length} total requests</p>
          </div>
          <button
            onClick={() => navigate(ROUTES.VAT_REFUND)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + NEW REQUEST
          </button>
        </div>

        <div className="space-y-4">
          {requests.map(request => {
            const statusStyle = getStatusBadge(request.status);
            return (
              <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Request #{request.id}</h3>
                    <p className="text-sm text-gray-600">Submitted: {new Date(request.submittedDate).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg}`}>
                    {statusStyle.icon} {getStatusText(request.status).toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Refund Amount:</span>
                    <span className="font-medium ml-2">{request.amount.toLocaleString()} VND</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Receipts:</span>
                    <span className="font-medium ml-2">{request.receipts} items</span>
                  </div>
                  {request.status === 'processing' && (
                    <div className="col-span-2">
                      <span className="text-gray-600">Expected completion:</span>
                      <span className="font-medium ml-2">{new Date(request.expectedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {request.status === 'completed' && (
                    <>
                      <div>
                        <span className="text-gray-600">Completed:</span>
                        <span className="font-medium ml-2">{new Date(request.completedDate!).toLocaleDateString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Transferred:</span>
                        <span className="font-medium ml-2 text-green-600">{request.transferredAmount!.toLocaleString()} VND</span>
                      </div>
                    </>
                  )}
                </div>

                {request.status === 'processing' && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-sm mb-2">Processing Steps:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Request submitted</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Documents verified</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="animate-pulse text-blue-600">🔄</span>
                        <span>Processing at airport customs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">⏳</span>
                        <span className="text-gray-400">Payment transfer</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                    📄 View Details
                  </button>
                  <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                    📥 Download Receipt
                  </button>
                  {request.status === 'processing' && (
                    <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                      💬 Contact Support
                    </button>
                  )}
                </div>

                {/* New Quick Links Section */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => navigate(ROUTES.VAT_DUTY_FREE_MAP)}
                    className="bg-blue-50 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-100 text-sm font-medium flex items-center justify-center"
                  >
                    <span className="mr-2">🛍️</span>
                    Duty Free Stores
                  </button>
                  <button
                    onClick={() => navigate(ROUTES.VAT_CLAIM_LOCATIONS)}
                    className="bg-purple-50 text-purple-600 py-2 px-3 rounded-lg hover:bg-purple-100 text-sm font-medium flex items-center justify-center"
                  >
                    <span className="mr-2">📍</span>
                    Claim Locations
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {requests.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">No VAT Refund Requests</h3>
            <p className="text-gray-600 mb-6">Submit your first VAT refund request</p>
            <button
              onClick={() => navigate(ROUTES.VAT_REFUND)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              START NEW REQUEST
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default VatRefundTracking;
