import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, CheckCircle, ArrowRight } from 'lucide-react';

const EKYCFace = () => {
  const navigate = useNavigate();
  const [selfieImage, setSelfieImage] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const fileInputRef = useRef(null);

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelfieImage(reader.result);
        // Simulate face verification
        setIsVerifying(true);
        setTimeout(() => {
          setIsVerified(true);
          setIsVerifying(false);
          // Generate Digital ID
          const digitalId = '#' + Math.floor(10000 + Math.random() * 90000);
          localStorage.setItem('digitalId', digitalId);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Face Verification</h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span>Step 3/3</span>
            <div className="flex space-x-1">
              <div className="w-8 h-1 bg-primary rounded"></div>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <div className="w-8 h-1 bg-primary rounded"></div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Camera className="w-6 h-6 mr-2 text-primary" />
            Take a Selfie
          </h3>
          <p className="text-gray-600">
            We'll compare this with your passport photo to verify your identity
          </p>
        </div>

        {/* Camera/Upload Area */}
        {!selfieImage ? (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleCapture}
                className="hidden"
                id="selfie-capture"
              />
              <label htmlFor="selfie-capture" className="cursor-pointer">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-gray-300 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-lg font-medium text-gray-700 mb-2">Position your face in the circle</p>
                <p className="text-sm text-gray-500">Click to take a photo</p>
              </label>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-medium text-blue-900 mb-2">✓ Instructions:</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Look straight at the camera</li>
                <li>• Remove glasses and hat</li>
                <li>• Ensure good lighting</li>
                <li>• Keep a neutral expression</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Selfie Preview */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={selfieImage}
                  alt="Selfie"
                  className="w-full h-full object-cover"
                />
              </div>
              {isVerifying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Verifying your face...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Verification Result */}
            {isVerified && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Verification Successful!</h4>
                <p className="text-green-700 mb-4">Your digital identity has been created</p>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <p className="text-sm text-gray-600">Your Digital ID</p>
                  <p className="text-3xl font-bold text-primary">{localStorage.getItem('digitalId')}</p>
                </div>
              </div>
            )}

            {/* Retake Button */}
            {!isVerified && !isVerifying && (
              <button
                onClick={() => setSelfieImage(null)}
                className="w-full btn-secondary"
              >
                Retake Photo
              </button>
            )}

            {/* Complete Button */}
            {isVerified && (
              <button onClick={handleComplete} className="w-full btn-primary flex items-center justify-center">
                Continue to Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EKYCFace;
