import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

interface VatRequest {
  id: string;
  referenceNumber: string;
  submittedDate: string;
  totalAmount: number;
  vatRefund: number;
  invoiceCount: number;
  status: 'pending' | 'verified' | 'customs_review' | 'approved' | 'completed' | 'rejected';
  refundMethod: string;
  timeline: TimelineEvent[];
  estimatedCompletion?: string;
  rejectionReason?: string;
}

interface TimelineEvent {
  status: string;
  date: string;
  time: string;
  description: string;
  completed: boolean;
}

const VatTrackStatus: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRequest, setSelectedRequest] = useState<VatRequest | null>(null);

  const requests: VatRequest[] = [
    {
      id: '1',
      referenceNumber: 'VAT-2025-001234',
      submittedDate: '2025-01-10',
      totalAmount: 5000000,
      vatRefund: 500000,
      invoiceCount: 3,
      status: 'customs_review',
      refundMethod: 'Bank Transfer',
      estimatedCompletion: '2025-01-25',
      timeline: [
        {
          status: 'submitted',
          date: '2025-01-10',
          time: '14:30',
          description: 'Request submitted successfully',
          completed: true
        },
        {
          status: 'verified',
          date: '2025-01-11',
          time: '09:15',
          description: 'Documents verified by system',
          completed: true
        },
        {
          status: 'customs_review',
          date: '2025-01-12',
          time: '11:00',
          description: 'Under customs review at airport',
          completed: true
        },
        {
          status: 'approved',
          date: '',
          time: '',
          description: 'Awaiting customs approval',
          completed: false
        },
        {
          status: 'payment',
          date: '',
          time: '',
          description: 'Processing payment transfer',
          completed: false
        }
      ]
    },
    {
      id: '2',
      referenceNumber: 'VAT-2025-001180',
      submittedDate: '2024-12-28',
      totalAmount: 3200000,
      vatRefund: 320000,
      invoiceCount: 2,
      status: 'completed',
      refundMethod: 'Cash at Airport',
      timeline: [
        {
          status: 'submitted',
          date: '2024-12-28',
          time: '16:20',
          description: 'Request submitted',
          completed: true
        },
        {
          status: 'verified',
          date: '2024-12-29',
          time: '10:00',
          description: 'Documents verified',
          completed: true
        },
        {
          status: 'approved',
          date: '2024-12-30',
          time: '14:30',
          description: 'Approved by customs',
          completed: true
        },
        {
          status: 'completed',
          date: '2025-01-05',
          time: '18:45',
          description: 'Cash collected at airport',
          completed: true
        }
      ]
    },
    {
      id: '3',
      referenceNumber: 'VAT-2025-001156',
      submittedDate: '2024-12-20',
      totalAmount: 1800000,
      vatRefund: 180000,
      invoiceCount: 1,
      status: 'rejected',
      refundMethod: 'Bank Transfer',
      rejectionReason: 'Invoice does not meet minimum purchase requirement of 2,000,000 VND',
      timeline: [
        {
          status: 'submitted',
          date: '2024-12-20',
          time: '13:10',
          description: 'Request submitted',
          completed: true
        },
        {
          status: 'verified',
          date: '2024-12-21',
          time: '09:30',
          description: 'Initial verification',
          completed: true
        },
        {
          status: 'rejected',
          date: '2024-12-21',
          time: '15:45',
          description: 'Request rejected - See reason below',
          completed: true
        }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: { bg: 'bg-yellow-100 text-yellow-700', icon: '⏳', label: 'Pending' },
      verified: { bg: 'bg-blue-100 text-blue-700', icon: '✓', label: 'Verified' },
      customs_review: { bg: 'bg-purple-100 text-purple-700', icon: '🔍', label: 'Customs Review' },
      approved: { bg: 'bg-green-100 text-green-700', icon: '✓', label: 'Approved' },
      completed: { bg: 'bg-gray-100 text-gray-700', icon: '✓', label: 'Completed' },
      rejected: { bg: 'bg-red-100 text-red-700', icon: '✗', label: 'Rejected' }
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
          <h1 className="text-xl font-bold">Track VAT Status</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header Info */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">VAT Refund Status</h2>
          <p className="opacity-90">Track your refund requests in real-time</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => navigate(ROUTES.VAT_DUTY_FREE_MAP)}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <div className="text-3xl mb-2">🛍️</div>
            <h3 className="font-semibold">Duty Free Stores</h3>
            <p className="text-sm text-gray-600">Find shopping locations</p>
          </button>

          <button
            onClick={() => navigate(ROUTES.VAT_CLAIM_LOCATIONS)}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold">Claim Locations</h3>
            <p className="text-sm text-gray-600">Airport counter info</p>
          </button>

          <button
            onClick={() => navigate(ROUTES.VAT_SUBMIT_REQUEST)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <div className="text-3xl mb-2">➕</div>
            <h3 className="font-semibold">New Request</h3>
            <p className="text-sm opacity-90">Submit VAT refund</p>
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">My Requests ({requests.length})</h2>

          {requests.map((request) => {
            const statusStyle = getStatusBadge(request.status);
            const isExpanded = selectedRequest?.id === request.id;

            return (
              <div key={request.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{request.referenceNumber}</h3>
                      <p className="text-sm text-gray-600">
                        Submitted: {new Date(request.submittedDate).toLocaleDateString('en-GB')}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg}`}>
                      {statusStyle.icon} {statusStyle.label}
                    </span>
                  </div>

                  {/* Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-600">Total Purchase:</span>
                      <p className="font-medium">{request.totalAmount.toLocaleString()} VND</p>
                    </div>
                    <div>
                      <span className="text-gray-600">VAT Refund:</span>
                      <p className="font-medium text-green-600">{request.vatRefund.toLocaleString()} VND</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Invoices:</span>
                      <p className="font-medium">{request.invoiceCount} items</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Method:</span>
                      <p className="font-medium">{request.refundMethod}</p>
                    </div>
                  </div>

                  {/* Rejection Reason */}
                  {request.status === 'rejected' && request.rejectionReason && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-red-900 mb-1">❌ Rejection Reason:</h4>
                      <p className="text-sm text-red-700">{request.rejectionReason}</p>
                    </div>
                  )}

                  {/* Estimated Completion */}
                  {request.status === 'customs_review' && request.estimatedCompletion && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-900">
                        <span className="font-semibold">⏱️ Estimated Completion:</span>{' '}
                        {new Date(request.estimatedCompletion).toLocaleDateString('en-GB')}
                      </p>
                    </div>
                  )}

                  {/* Timeline - Expanded */}
                  {isExpanded && (
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-semibold mb-4">📋 Processing Timeline</h4>
                      <div className="space-y-4">
                        {request.timeline.map((event, index) => (
                          <div key={index} className="flex items-start">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              event.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                            }`}>
                              {event.completed ? '✓' : index + 1}
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h5 className={`font-semibold ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                    {event.description}
                                  </h5>
                                  {event.completed && event.date && (
                                    <p className="text-sm text-gray-600">
                                      {new Date(event.date).toLocaleDateString('en-GB')} • {event.time}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <button className="border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                          📄 View Details
                        </button>
                        <button className="border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                          📥 Download Receipt
                        </button>
                      </div>

                      {request.status === 'rejected' && (
                        <button
                          onClick={() => navigate(ROUTES.VAT_SUBMIT_REQUEST)}
                          className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                        >
                          ➕ Submit New Request
                        </button>
                      )}
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    onClick={() => setSelectedRequest(isExpanded ? null : request)}
                    className="w-full mt-4 text-center text-blue-600 text-sm py-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {isExpanded ? '▲ Hide Timeline' : '▼ View Timeline'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {requests.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">No Requests Yet</h3>
            <p className="text-gray-600 mb-6">Submit your first VAT refund request</p>
            <button
              onClick={() => navigate(ROUTES.VAT_SUBMIT_REQUEST)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              ➕ Submit New Request
            </button>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-4">❓ Need Help?</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">How long does the process take?</p>
              <p className="text-gray-600">
                Bank transfers: 5-10 business days. Cash at airport: Instant upon collection.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">What if my request is rejected?</p>
              <p className="text-gray-600">
                Review the rejection reason and ensure your invoices meet all requirements before resubmitting.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Can I cancel a request?</p>
              <p className="text-gray-600">
                Requests can be cancelled before customs approval. Contact support for assistance.
              </p>
            </div>
          </div>
          <button className="mt-4 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 font-medium">
            📞 Contact Support
          </button>
        </div>
      </main>
    </div>
  );
};

export default VatTrackStatus;
