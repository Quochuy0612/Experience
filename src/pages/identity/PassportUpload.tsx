import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const PassportUpload: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [extractedData, setExtractedData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        simulateOCR();
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const simulateOCR = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setExtractedData({
        firstName: 'JOHN',
        lastName: 'SMITH',
        passportNumber: 'N1234567',
        nationality: 'AUSTRALIA',
        dateOfBirth: '1988-05-15',
        issueDate: '2020-01-10',
        expiryDate: '2030-01-10',
        gender: 'MALE',
        confidence: 95,
      });
      setIsProcessing(false);
    }, 2000);
  };

  const handleContinue = () => {
    if (extractedData) {
      navigate(ROUTES.EKYC_SELFIE);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Step 1 of 4</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-3xl font-bold mb-2">UPLOAD PASSPORT</h1>
          <p className="text-gray-600">Take a clear photo of your passport bio page</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          {!preview ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold mb-2">UPLOAD PASSPORT</h3>
              <p className="text-gray-600 mb-4">Click or Drag & Drop</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="passport-upload"
              />
              <label
                htmlFor="passport-upload"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700"
              >
                Choose File
              </label>
              <p className="text-sm text-gray-500 mt-4">
                Supported formats: JPG, PNG, PDF (Max 10MB)
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">PASSPORT UPLOADED ✓</h3>
                <img src={preview} alt="Passport" className="max-w-md mx-auto rounded-lg shadow" />
                <button
                  onClick={() => {
                    setFile(null);
                    setPreview('');
                    setExtractedData(null);
                  }}
                  className="mt-4 text-red-600 hover:underline"
                >
                  🗑️ Remove
                </button>
              </div>

              {isProcessing && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">🔄 Processing... Extracting information from passport</p>
                </div>
              )}

              {extractedData && !isProcessing && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">EXTRACTED INFORMATION:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600">First Name:</label>
                      <input
                        type="text"
                        value={extractedData.firstName}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                      />
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Last Name:</label>
                      <input
                        type="text"
                        value={extractedData.lastName}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                      />
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Passport Number:</label>
                      <input
                        type="text"
                        value={extractedData.passportNumber}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                      />
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Nationality:</label>
                      <input
                        type="text"
                        value={extractedData.nationality}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                      />
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Date of Birth:</label>
                      <input
                        type="date"
                        value={extractedData.dateOfBirth}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                      />
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Gender:</label>
                      <input
                        type="text"
                        value={extractedData.gender}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                      />
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 p-4 bg-green-50 rounded">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="font-medium">Confidence Score: {extractedData.confidence}% HIGH</span>
                  </div>

                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">Information is correct</span>
                  </label>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="font-semibold mb-3">📸 TIPS FOR BEST RESULTS:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Use good lighting</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Place passport on flat, dark surface</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>Ensure all text is clearly visible</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>No glare or shadows</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600">✓</span>
              <span>All 4 corners of passport visible</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            CANCEL
          </button>
          <button
            onClick={handleContinue}
            disabled={!extractedData}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            CONFIRM & NEXT
          </button>
        </div>
      </main>
    </div>
  );
};

export default PassportUpload;
