import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const EmailVerification: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const verificationCode = code.join('');
    if (verificationCode.length === 6) {
      // TODO: API verification
      navigate(ROUTES.ONBOARDING);
    }
  };

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    // TODO: API resend
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">✉️</div>
        <h1 className="text-2xl font-bold mb-4">VERIFY YOUR EMAIL ADDRESS</h1>

        <p className="text-gray-600 mb-2">We've sent a verification email to:</p>
        <p className="font-medium text-gray-900 mb-6">john.smith@example.com</p>

        <p className="text-sm text-gray-600 mb-6">
          Click the link in the email to verify your account.
        </p>

        <div className="space-y-4">
          <p className="text-sm font-medium">Enter 6-digit verification code:</p>
          <div className="flex justify-center space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={code.join('').length !== 6}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            VERIFY EMAIL
          </button>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-sm text-gray-600">Didn't receive the email?</p>
          <button
            onClick={handleResend}
            disabled={!canResend}
            className="text-blue-600 hover:underline disabled:text-gray-400 disabled:no-underline"
          >
            {canResend ? 'Resend Verification Email' : `Resend in ${countdown}s`}
          </button>
          <div>
            <button className="text-blue-600 hover:underline text-sm">Change Email Address</button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-sm text-gray-700">
          💡 Tip: Check your spam folder if you don't see the email within 2 minutes
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
