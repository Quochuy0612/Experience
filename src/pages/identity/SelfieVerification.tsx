import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const SelfieVerification: React.FC = () => {
  const navigate = useNavigate();
  const [selfie, setSelfie] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [matchScore, setMatchScore] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Camera error:', err);
    }
  };

  const captureSelfie = () => {
    // Simulate capture
    setSelfie('data:image/png;base64,captured_selfie');
    simulateVerification();
  };

  const simulateVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setMatchScore(92);
      setVerified(true);
      setIsVerifying(false);
    }, 3000);
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
          <p className="text-sm text-gray-600 mb-2">Step 2 of 4</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🤳</div>
          <h1 className="text-3xl font-bold mb-2">TAKE A SELFIE</h1>
          <p className="text-gray-600">Take a photo of yourself to verify your identity</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          {!selfie ? (
            <div>
              <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-4">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧑‍💼</div>
                    <p className="text-gray-600">Position your face in the frame</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={startCamera}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  📷 START CAMERA
                </button>
                <button
                  onClick={captureSelfie}
                  className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
                >
                  📁 UPLOAD PHOTO
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {isVerifying && (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-4">VERIFYING YOUR IDENTITY...</h3>
                  <div className="flex justify-center space-x-8 mb-6">
                    <div>
                      <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2"></div>
                      <p className="text-sm">Passport Photo</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl">≈</span>
                    </div>
                    <div>
                      <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2"></div>
                      <p className="text-sm">Your Selfie</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p>🔄 Comparing faces...</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Face detection: Passed</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>⏳</span>
                        <span>Liveness check: Processing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {verified && !isVerifying && (
                <div>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-green-600 mb-4">VERIFICATION SUCCESSFUL!</h3>
                  </div>

                  <div className="flex justify-center space-x-8 mb-6">
                    <div>
                      <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2"></div>
                      <p className="text-sm">Passport Photo</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl text-green-600">✓</span>
                    </div>
                    <div>
                      <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2"></div>
                      <p className="text-sm">Your Selfie</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="font-semibold">Match Score: {matchScore}% HIGH CONFIDENCE</span>
                    </div>
                  </div>

                  <div className="text-sm space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Face detection: Passed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Liveness check: Passed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Face matching: Passed ({matchScore}%)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="font-semibold mb-3">SELFIE REQUIREMENTS:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2"><span className="text-green-600">✓</span><span>Face clearly visible</span></li>
            <li className="flex items-start space-x-2"><span className="text-green-600">✓</span><span>Good lighting (front light, no backlight)</span></li>
            <li className="flex items-start space-x-2"><span className="text-green-600">✓</span><span>Remove glasses and hat</span></li>
            <li className="flex items-start space-x-2"><span className="text-green-600">✓</span><span>Neutral expression, look at camera</span></li>
          </ul>
        </div>

        <div className="flex justify-between">
          <button onClick={() => navigate(-1)} className="px-6 py-3 border border-gray-300 rounded-lg">BACK</button>
          <button
            onClick={() => navigate(ROUTES.EKYC_REVIEW)}
            disabled={!verified}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
          >
            {verified ? 'CONTINUE' : 'SKIP FOR NOW'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default SelfieVerification;