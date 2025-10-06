import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

interface InvoiceItem {
  id: string;
  storeName: string;
  invoiceNumber: string;
  purchaseDate: string;
  totalAmount: number;
  vatAmount: number;
  image?: File;
  imagePreview?: string;
}

const VatSubmitRequest: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [invoices, setInvoices] = useState<InvoiceItem[]>([]);
  const [refundMethod, setRefundMethod] = useState<'bank' | 'cash' | 'card'>('bank');
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    accountName: '',
    swiftCode: ''
  });

  const [newInvoice, setNewInvoice] = useState<Partial<InvoiceItem>>({
    storeName: '',
    invoiceNumber: '',
    purchaseDate: '',
    totalAmount: 0,
    vatAmount: 0
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewInvoice({
          ...newInvoice,
          image: file,
          imagePreview: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddInvoice = () => {
    if (newInvoice.storeName && newInvoice.invoiceNumber && newInvoice.totalAmount) {
      const invoice: InvoiceItem = {
        id: Date.now().toString(),
        storeName: newInvoice.storeName || '',
        invoiceNumber: newInvoice.invoiceNumber || '',
        purchaseDate: newInvoice.purchaseDate || new Date().toISOString().split('T')[0],
        totalAmount: newInvoice.totalAmount || 0,
        vatAmount: newInvoice.vatAmount || (newInvoice.totalAmount || 0) * 0.1,
        image: newInvoice.image,
        imagePreview: newInvoice.imagePreview
      };
      setInvoices([...invoices, invoice]);
      setNewInvoice({
        storeName: '',
        invoiceNumber: '',
        purchaseDate: '',
        totalAmount: 0,
        vatAmount: 0
      });
    }
  };

  const handleRemoveInvoice = (id: string) => {
    setInvoices(invoices.filter(inv => inv.id !== id));
  };

  const totalRefund = invoices.reduce((sum, inv) => sum + inv.vatAmount, 0);

  const handleSubmit = () => {
    // Simulate submission
    alert('VAT Refund Request Submitted Successfully!');
    navigate(ROUTES.VAT_TRACKING);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">📋 Step 1: Add Your Invoices</h3>
        <p className="text-sm text-blue-700">Upload photos of your shopping receipts to claim VAT refund</p>
      </div>

      {/* Add Invoice Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg mb-4">Add New Invoice</h3>

        <div className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Photo *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {newInvoice.imagePreview ? (
                <div className="relative">
                  <img src={newInvoice.imagePreview} alt="Invoice" className="max-h-48 mx-auto rounded" />
                  <button
                    onClick={() => setNewInvoice({ ...newInvoice, image: undefined, imagePreview: undefined })}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="text-6xl mb-2">📷</div>
                  <p className="text-sm text-gray-600">Click to upload invoice photo</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Name *</label>
              <input
                type="text"
                value={newInvoice.storeName}
                onChange={(e) => setNewInvoice({ ...newInvoice, storeName: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="e.g. Vincom Mega Mall"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Number *</label>
              <input
                type="text"
                value={newInvoice.invoiceNumber}
                onChange={(e) => setNewInvoice({ ...newInvoice, invoiceNumber: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="e.g. INV-2025-001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Date *</label>
              <input
                type="date"
                value={newInvoice.purchaseDate}
                onChange={(e) => setNewInvoice({ ...newInvoice, purchaseDate: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount (VND) *</label>
              <input
                type="number"
                value={newInvoice.totalAmount || ''}
                onChange={(e) => {
                  const amount = parseFloat(e.target.value) || 0;
                  setNewInvoice({
                    ...newInvoice,
                    totalAmount: amount,
                    vatAmount: amount * 0.1
                  });
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="e.g. 2500000"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Estimated VAT Refund (10%):</span>
              <span className="font-bold text-lg text-green-600">
                {(newInvoice.vatAmount || 0).toLocaleString()} VND
              </span>
            </div>
          </div>

          <button
            onClick={handleAddInvoice}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
            disabled={!newInvoice.storeName || !newInvoice.invoiceNumber || !newInvoice.totalAmount}
          >
            ➕ Add Invoice
          </button>
        </div>
      </div>

      {/* Invoice List */}
      {invoices.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-4">Added Invoices ({invoices.length})</h3>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="border rounded-lg p-4 flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  {invoice.imagePreview && (
                    <img src={invoice.imagePreview} alt="Invoice" className="w-20 h-20 object-cover rounded" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold">{invoice.storeName}</h4>
                    <p className="text-sm text-gray-600">Invoice: {invoice.invoiceNumber}</p>
                    <p className="text-sm text-gray-600">Date: {invoice.purchaseDate}</p>
                    <p className="text-sm font-medium text-green-600">
                      VAT Refund: {invoice.vatAmount.toLocaleString()} VND
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveInvoice(invoice.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total VAT Refund:</span>
              <span className="text-2xl font-bold">{totalRefund.toLocaleString()} VND</span>
            </div>
            <p className="text-sm mt-1 opacity-90">≈ ${(totalRefund / 25000).toFixed(2)} USD</p>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Continue to Refund Method →
          </button>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">💳 Step 2: Choose Refund Method</h3>
        <p className="text-sm text-blue-700">Select how you want to receive your VAT refund</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg mb-4">Refund Method</h3>

        <div className="space-y-3">
          {/* Bank Transfer */}
          <div
            onClick={() => setRefundMethod('bank')}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              refundMethod === 'bank' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🏦</div>
                <div>
                  <h4 className="font-semibold">Bank Transfer</h4>
                  <p className="text-sm text-gray-600">5-10 business days</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                refundMethod === 'bank' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              }`}>
                {refundMethod === 'bank' && <span className="text-white">✓</span>}
              </div>
            </div>
          </div>

          {/* Cash at Airport */}
          <div
            onClick={() => setRefundMethod('cash')}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              refundMethod === 'cash' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">💵</div>
                <div>
                  <h4 className="font-semibold">Cash at Airport</h4>
                  <p className="text-sm text-gray-600">Instant, collect before departure</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                refundMethod === 'cash' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              }`}>
                {refundMethod === 'cash' && <span className="text-white">✓</span>}
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div
            onClick={() => setRefundMethod('card')}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              refundMethod === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">💳</div>
                <div>
                  <h4 className="font-semibold">Credit Card Refund</h4>
                  <p className="text-sm text-gray-600">7-14 business days</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                refundMethod === 'card' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              }`}>
                {refundMethod === 'card' && <span className="text-white">✓</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details Form */}
        {refundMethod === 'bank' && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-4">Bank Account Details</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name *</label>
                <input
                  type="text"
                  value={bankDetails.bankName}
                  onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="e.g. Vietcombank"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number *</label>
                <input
                  type="text"
                  value={bankDetails.accountNumber}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter account number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Name *</label>
                <input
                  type="text"
                  value={bankDetails.accountName}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountName: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter account name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SWIFT Code (Optional)</label>
                <input
                  type="text"
                  value={bankDetails.swiftCode}
                  onChange={(e) => setBankDetails({ ...bankDetails, swiftCode: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="For international transfers"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setCurrentStep(1)}
            className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
          >
            ← Back
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-medium"
          >
            Submit Request ✓
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(ROUTES.VAT_TRACKING)} className="text-blue-600">← Back</button>
          <h1 className="text-xl font-bold">Submit VAT Refund</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                {currentStep > 1 ? '✓' : '1'}
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Invoices</span>
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Refund Method</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
      </main>
    </div>
  );
};

export default VatSubmitRequest;
