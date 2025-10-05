import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const VatRefundReview: React.FC = () => {
  const navigate = useNavigate();

  const receipts = [
    { id: 1, store: 'Vincom Mega Mall', date: '2025-01-15', amount: 2500000, vat: 250000 },
    { id: 2, store: 'Saigon Centre', date: '2025-01-14', amount: 3200000, vat: 320000 }
  ];

  const totalVAT = receipts.reduce((sum, r) => sum + r.vat, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-3xl font-bold mb-2">REVIEW VAT REFUND</h1>
          <p className="text-gray-600">Review your receipts before submitting</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">SCANNED RECEIPTS ({receipts.length})</h2>
          <div className="space-y-3">
            {receipts.map(receipt => (
              <div key={receipt.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{receipt.store}</h3>
                    <p className="text-sm text-gray-600">Date: {new Date(receipt.date).toLocaleDateString()}</p>
                    <p className="text-sm">Purchase: {receipt.amount.toLocaleString()} VND</p>
                    <p className="text-sm font-semibold text-green-600">VAT Refund: {receipt.vat.toLocaleString()} VND</p>
                  </div>
                  <button className="text-blue-600 hover:underline text-sm">View Receipt</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">TOTAL VAT REFUND</h3>
          <p className="text-4xl font-bold">{totalVAT.toLocaleString()} VND</p>
          <p className="text-sm mt-2">≈ ${(totalVAT / 25000).toFixed(2)} USD</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="font-semibold mb-3">IMPORTANT REMINDERS:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">ℹ️</span>
              <span>Bring original receipts to airport VAT refund counter</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">ℹ️</span>
              <span>Goods must be in unopened packaging</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">ℹ️</span>
              <span>Process at airport at least 2 hours before departure</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600">ℹ️</span>
              <span>Refund will be processed within 15 working days</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-gray-300 rounded-lg"
          >
            BACK
          </button>
          <button
            onClick={() => navigate(ROUTES.VAT_REFUND_PAYMENT)}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            CONTINUE TO PAYMENT
          </button>
        </div>
      </main>
    </div>
  );
};

export default VatRefundReview;
