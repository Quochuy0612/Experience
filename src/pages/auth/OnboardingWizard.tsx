import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, VISIT_PURPOSES, VIETNAM_CITIES, TOUR_CATEGORIES } from '../../constants';

const OnboardingWizard: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    purpose: '',
    destination: '',
    arrivalDate: '',
    lengthOfStay: '',
    cities: [] as string[],
    interests: [] as string[],
    notifications: { email: true, sms: false, push: true },
    privacy: 'private',
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      // TODO: Save onboarding data
      navigate(ROUTES.DASHBOARD);
    }
  };

  const toggleInterest = (interest: string) => {
    setData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">EXPERIENCE VIETNAM</h1>
          <button onClick={() => navigate(ROUTES.DASHBOARD)} className="text-gray-600 hover:text-gray-900">
            Skip
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-2">Step {step} of 3</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl mb-4">👋</div>
                <h2 className="text-2xl font-bold mb-2">WELCOME JOHN!</h2>
                <p className="text-gray-600">Let's set up your digital profile</p>
              </div>

              <div>
                <div className="text-4xl text-center mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-center mb-6">WHAT BRINGS YOU TO VIETNAM?</h3>

                <div className="grid grid-cols-2 gap-4">
                  {VISIT_PURPOSES.map((purpose) => (
                    <button
                      key={purpose.value}
                      onClick={() => setData({...data, purpose: purpose.value})}
                      className={`p-4 border-2 rounded-lg text-center hover:border-blue-500 transition ${
                        data.purpose === purpose.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="text-3xl mb-2">{purpose.icon}</div>
                      <div className="font-semibold">{purpose.label}</div>
                      <div className="text-xs text-gray-600">{purpose.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <h2 className="text-2xl font-bold mb-2">YOUR VIETNAM JOURNEY</h2>
                <p className="text-gray-600">Where will you stay in Vietnam?</p>
              </div>

              <div>
                <label className="block font-medium mb-2">Primary Destination</label>
                <select
                  value={data.destination}
                  onChange={(e) => setData({...data, destination: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select city</option>
                  {VIETNAM_CITIES.map(city => (
                    <option key={city.code} value={city.code}>{city.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">Arrival Date</label>
                <input
                  type="date"
                  value={data.arrivalDate}
                  onChange={(e) => setData({...data, arrivalDate: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Length of Stay</label>
                <select
                  value={data.lengthOfStay}
                  onChange={(e) => setData({...data, lengthOfStay: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select duration</option>
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <h2 className="text-2xl font-bold">CUSTOMIZE YOUR EXPERIENCE</h2>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Interests (Select all that apply)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {TOUR_CATEGORIES.map(cat => (
                    <label key={cat.value} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={data.interests.includes(cat.value)}
                        onChange={() => toggleInterest(cat.value)}
                      />
                      <span className="text-sm">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Communication Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" checked={data.notifications.email}
                      onChange={(e) => setData({...data, notifications: {...data.notifications, email: e.target.checked}})} />
                    <span className="text-sm">Email notifications</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" checked={data.notifications.push}
                      onChange={(e) => setData({...data, notifications: {...data.notifications, push: e.target.checked}})} />
                    <span className="text-sm">Push notifications on app</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Privacy Settings</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="privacy" value="private"
                      checked={data.privacy === 'private'}
                      onChange={(e) => setData({...data, privacy: e.target.value})} />
                    <span className="text-sm">Only me and government agencies</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="privacy" value="operators"
                      checked={data.privacy === 'operators'}
                      onChange={(e) => setData({...data, privacy: e.target.value})} />
                    <span className="text-sm">Tour operators I book with</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              BACK
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {step === 3 ? 'COMPLETE SETUP' : 'NEXT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
