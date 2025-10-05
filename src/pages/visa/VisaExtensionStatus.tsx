import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const VisaExtensionStatus: React.FC = () => {
  const navigate = useNavigate();
  const [applications] = useState([
    { id: 'VE-20250115-001', status: 'processing', submittedDate: '2025-01-15', days: 30 },
    { id: 'VE-20241205-012', status: 'approved', submittedDate: '2024-12-05', days: 60 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(ROUTES.DASHBOARD)} className="text-blue-600">← Dashboard</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">VISA EXTENSION STATUS</h1>
        
        <div className="space-y-4">
          {applications.map(app => (
            <div key={app.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Application #{app.id}</h3>
                  <p className="text-sm text-gray-600">Submitted: {new Date(app.submittedDate).toLocaleDateString()}</p>
                  <p className="text-sm">Extension: {app.days} days</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${app.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {app.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VisaExtensionStatus;