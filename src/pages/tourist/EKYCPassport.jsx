import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, ArrowRight, CheckCircle } from 'lucide-react';

const EKYCPassport = () => {
  const navigate = useNavigate();
  const [passportImage, setPassportImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResult, setOcrResult] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassportImage(reader.result);
        // Simulate OCR processing
        setIsProcessing(true);
        setTimeout(() => {
          setOcrResult({
            passportNumber: 'US123456789',
            fullName: 'SMITH, JOHN',
            dob: '1990-01-15',
            nationality: 'USA',
            expiry: '2030-12-31'
          });
          setIsProcessing(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    localStorage.setItem('passportData', JSON.stringify(ocrResult));
    navigate('/ekyc-face');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Identity</h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span>Step 2/3</span>
            <div className="flex space-x-1">
              <div className="w-8 h-1 bg-primary rounded"></div>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Camera className="w-6 h-6 mr-2 text-primary" />
            Scan Your Passport
          </h3>
          <p className="text-gray-600">
            Please upload a clear photo of your passport data page
          </p>
        </div>

        {/* Upload Area */}
        {!passportImage ? (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              id="passport-upload"
            />
            <label htmlFor="passport-upload" className="cursor-pointer">
              <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium text-gray-700 mb-2">Click to upload passport photo</p>
              <p className="text-sm text-gray-500">or drag and drop</p>
              <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 10MB</p>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Preview */}
            <div className="relative">
              <img
                src={passportImage}
                alt="Passport"
                className="w-full rounded-xl border-2 border-gray-200"
              />
              {isProcessing && (
                <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-2"></div>
                    <p>Processing passport...</p>
                  </div>
                </div>
              )}
            </div>

            {/* OCR Results */}
            {ocrResult && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold text-green-800">Passport Verified</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Passport Number</p>
                    <p className="font-semibold">{ocrResult.passportNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Full Name</p>
                    <p className="font-semibold">{ocrResult.fullName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date of Birth</p>
                    <p className="font-semibold">{ocrResult.dob}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Nationality</p>
                    <p className="font-semibold">{ocrResult.nationality}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Expiry Date</p>
                    <p className="font-semibold">{ocrResult.expiry}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Re-upload */}
            <button
              onClick={() => {
                setPassportImage(null);
                setOcrResult(null);
              }}
              className="w-full btn-secondary"
            >
              Re-upload Passport
            </button>
          </div>
        )}

        {/* Tips */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4">
          <p className="font-medium text-blue-900 mb-2">💡 Tips for best results:</p>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use good lighting, avoid shadows</li>
            <li>• Place passport on a flat surface</li>
            <li>• Ensure all text is readable</li>
            <li>• Avoid glare and reflections</li>
          </ul>
        </div>

        {/* Actions */}
        {ocrResult && (
          <button onClick={handleNext} className="w-full btn-primary mt-6 flex items-center justify-center">
            Next: Face Verification
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default EKYCPassport;
