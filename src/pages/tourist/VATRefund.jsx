import { useState } from 'react';
import { Upload, Scan, DollarSign, CheckCircle, Plus } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const VATRefund = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, shop: 'Hanoi Silk Shop', amount: 200, vat: 20, date: '2025-11-02' },
    { id: 2, shop: 'Handicraft Store', amount: 150, vat: 15, date: '2025-11-04' },
    { id: 3, shop: 'Jewelry Shop', amount: 100, vat: 10, date: '2025-11-05' },
  ]);
  const [showScanner, setShowScanner] = useState(false);

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalVAT = invoices.reduce((sum, inv) => sum + inv.vat, 0);

  const handleScanInvoice = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulate OCR processing
      setTimeout(() => {
        const newInvoice = {
          id: invoices.length + 1,
          shop: 'New Shop',
          amount: 80,
          vat: 8,
          date: new Date().toISOString().split('T')[0]
        };
        setInvoices([...invoices, newInvoice]);
        setShowScanner(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">VAT Refund</h1>

          {/* Summary Card */}
          <div className="card mb-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-green-100 mb-1">Total VAT Eligible</p>
                <h2 className="text-4xl font-bold">${totalAmount}</h2>
              </div>
              <DollarSign className="w-16 h-16 opacity-50" />
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-green-100 text-sm">Refund Amount (10%)</p>
                  <p className="text-2xl font-bold">${totalVAT}</p>
                </div>
                <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Claim at Airport
                </button>
              </div>
            </div>
          </div>

          {/* Invoices List */}
          <div className="card mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Invoices ({invoices.length})</h3>
              <button
                onClick={() => setShowScanner(true)}
                className="flex items-center space-x-2 text-primary hover:text-blue-700 font-semibold"
              >
                <Plus className="w-5 h-5" />
                <span>Add Invoice</span>
              </button>
            </div>

            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{invoice.shop}</p>
                      <p className="text-sm text-gray-600">{invoice.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${invoice.amount}</p>
                    <p className="text-sm text-green-600">VAT: ${invoice.vat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scanner Modal */}
          {showScanner && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold mb-4">Scan Invoice</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-6">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScanInvoice}
                    className="hidden"
                    id="invoice-scan"
                  />
                  <label htmlFor="invoice-scan" className="cursor-pointer">
                    <Scan className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="font-medium text-gray-700">Tap to scan invoice</p>
                    <p className="text-sm text-gray-500 mt-2">AI will extract data automatically</p>
                  </label>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="font-medium text-blue-900 mb-2">💡 Tips:</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Clear image with all 4 corners visible</li>
                    <li>• Good lighting, no shadows</li>
                    <li>• All text readable</li>
                  </ul>
                </div>

                <button
                  onClick={() => setShowScanner(false)}
                  className="w-full btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-3">How to Claim VAT Refund</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-blue-800 text-sm">Add all shopping invoices by scanning them in the app</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-blue-800 text-sm">Before departure, go to VAT Refund counter at the airport</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-blue-800 text-sm">Show your Digital ID and invoices to claim refund</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  4
                </div>
                <p className="text-blue-800 text-sm">Receive refund in cash or bank transfer (7-10 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VATRefund;
