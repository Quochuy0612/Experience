import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const VatRefundScan: React.FC = () => {
  const navigate = useNavigate();
  const [receipts, setReceipts] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanReceipt = () => {
    setIsScanning(true);
    setTimeout(() => {
      const newReceipt = {
        id: receipts.length + 1,
        store: 'Vincom Mega Mall',
        date: '2025-01-15',
        amount: 2500000,
        vat: 250000,
        eligible: true
      };
      setReceipts([...receipts, newReceipt]);
      setIsScanning(false);
    }, 2000);
  };

  const totalVATRefund = receipts.reduce((sum, r) => sum + (r.eligible ? r.vat : 0), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(ROUTES.DASHBOARD)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💰</div>
          <h1 className="text-3xl font-bold mb-2">VAT REFUND</h1>
          <p className="text-gray-600">Scan your receipts to claim tax refund</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          {!isScanning ? (
            <div className="text-center">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-4">SCAN YOUR RECEIPT</h3>
              <p className="text-gray-600 mb-6">Place receipt flat and ensure all text is visible</p>
              <button
                onClick={handleScanReceipt}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
              >
                📷 START SCANNING
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
              <p className="text-gray-600">🔍 Scanning receipt... Extracting VAT information</p>
            </div>
          )}
        </div>

        {receipts.length > 0 && (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">SCANNED RECEIPTS ({receipts.length})</h2>
              <div className="space-y-3">
                {receipts.map(receipt => (
                  <div key={receipt.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{receipt.store}</h3>
                      <p className="text-sm text-gray-600">Date: {new Date(receipt.date).toLocaleDateString()}</p>
                      <p className="text-sm">Amount: {receipt.amount.toLocaleString()} VND</p>
                      <p className="text-sm font-semibold text-green-600">VAT Refund: {receipt.vat.toLocaleString()} VND</p>
                    </div>
                    <div>
                      {receipt.eligible ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">✓ Eligible</span>
                      ) : (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">✗ Not Eligible</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">TOTAL VAT REFUND</h3>
              <p className="text-4xl font-bold">{totalVATRefund.toLocaleString()} VND</p>
              <p className="text-sm mt-2">≈ ${(totalVATRefund / 25000).toFixed(2)} USD</p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleScanReceipt}
                className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
              >
                + SCAN MORE
              </button>
              <button
                onClick={() => navigate(ROUTES.VAT_REFUND_REVIEW)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                CONTINUE
              </button>
            </div>
          </>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="font-semibold mb-3">ELIGIBILITY CRITERIA:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Minimum purchase: 2,000,000 VND per receipt</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Purchased within last 60 days</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Goods must leave Vietnam with you</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Original receipts required at airport</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default VatRefundScan;