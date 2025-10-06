import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

interface ClaimLocation {
  id: string;
  airport: string;
  airportCode: string;
  city: string;
  terminal: string;
  location: string;
  floor: string;
  area: string;
  hours: string;
  description: string;
  procedures: string[];
  requiredDocuments: string[];
  processingTime: string;
  contactPhone: string;
  tips: string[];
  mapUrl?: string;
}

const VatClaimLocations: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAirport, setSelectedAirport] = useState<string>('all');
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  const claimLocations: ClaimLocation[] = [
    {
      id: '1',
      airport: 'Tan Son Nhat International Airport',
      airportCode: 'SGN',
      city: 'Ho Chi Minh City',
      terminal: 'Terminal 1 - International Departures',
      location: 'After Immigration, Before Duty Free Area',
      floor: '2nd Floor',
      area: 'Gate Area - Near Gates 20-25',
      hours: '24/7',
      description: 'Main VAT refund counter for international departures from Ho Chi Minh City',
      procedures: [
        'Complete immigration and security check',
        'Locate VAT refund counter near gates 20-25',
        'Present passport, boarding pass, and VAT refund forms',
        'Show original receipts and purchased items if requested',
        'Receive refund via cash or card credit (processing time varies)'
      ],
      requiredDocuments: [
        'Valid passport',
        'Boarding pass for international flight',
        'VAT refund application form (completed)',
        'Original tax invoices/receipts',
        'Purchased items (must be unused and in original packaging)'
      ],
      processingTime: '10-15 minutes average',
      contactPhone: '+84 28 3848 5383',
      tips: [
        'Arrive 3-4 hours before departure for adequate processing time',
        'Keep items in original packaging with tags attached',
        'Have all documents organized and ready',
        'Take photos of receipts as backup',
        'Check minimum purchase requirements (usually 2,000,000 VND)'
      ],
      mapUrl: '/maps/sgn-vat-claim.jpg'
    },
    {
      id: '2',
      airport: 'Noi Bai International Airport',
      airportCode: 'HAN',
      city: 'Hanoi',
      terminal: 'Terminal 2 - International Departures',
      location: 'After Security Check, Departure Hall',
      floor: '3rd Floor',
      area: 'Near Gate 21',
      hours: '24/7',
      description: 'VAT refund service center for international travelers departing from Hanoi',
      procedures: [
        'Check in and obtain boarding pass',
        'Complete immigration procedures',
        'Proceed to VAT refund counter at Gate 21 area',
        'Submit required documents and forms',
        'Customs officer may inspect purchased items',
        'Receive refund confirmation and payment'
      ],
      requiredDocuments: [
        'Passport with valid visa/entry stamp',
        'International departure boarding pass',
        'Completed VAT refund form',
        'Original purchase invoices',
        'Items purchased (if inspection required)'
      ],
      processingTime: '15-20 minutes average',
      contactPhone: '+84 24 3886 5047',
      tips: [
        'Allow extra time during peak hours (6-9 AM, 2-5 PM)',
        'Declare high-value items at customs first',
        'Refund can be in USD or VND',
        'Service fee typically 10-15% of refund amount',
        'Keep customs stamp on your refund form'
      ],
      mapUrl: '/maps/han-vat-claim.jpg'
    },
    {
      id: '3',
      airport: 'Da Nang International Airport',
      airportCode: 'DAD',
      city: 'Da Nang',
      terminal: 'International Terminal',
      location: 'Departure Hall, After Security',
      floor: '2nd Floor',
      area: 'Central Departure Area',
      hours: '05:00 - 23:00',
      description: 'VAT refund desk serving international passengers from Da Nang',
      procedures: [
        'Check-in for international flight',
        'Pass through security screening',
        'Find VAT refund desk in central departure area',
        'Present all required documentation',
        'Wait for verification process',
        'Collect refund'
      ],
      requiredDocuments: [
        'Original passport',
        'Boarding pass',
        'VAT refund forms (properly filled)',
        'Tax invoices and receipts',
        'Purchased goods for verification'
      ],
      processingTime: '10-15 minutes',
      contactPhone: '+84 236 3830 339',
      tips: [
        'Limited operating hours - check before travel',
        'Staff speaks English, Vietnamese, and basic Chinese',
        'Cash refunds available in VND only',
        'Keep flight departure time in mind',
        'Smaller queue compared to SGN/HAN'
      ],
      mapUrl: '/maps/dad-vat-claim.jpg'
    },
    {
      id: '4',
      airport: 'Cam Ranh International Airport',
      airportCode: 'CXR',
      city: 'Nha Trang',
      terminal: 'International Terminal',
      location: 'Departure Lounge',
      floor: '2nd Floor',
      area: 'Near Duty Free Shops',
      hours: '05:00 - 22:00',
      description: 'VAT refund service for international departures from Nha Trang/Cam Ranh',
      procedures: [
        'Complete check-in and immigration',
        'Locate VAT counter near duty free area',
        'Submit passport and boarding pass',
        'Provide purchase receipts and forms',
        'Items may be inspected by customs',
        'Receive refund payment'
      ],
      requiredDocuments: [
        'Passport (with Vietnam entry stamp)',
        'Boarding pass - international flight',
        'Completed VAT refund application',
        'Original invoices from VAT-registered stores',
        'Items in original condition'
      ],
      processingTime: '10-12 minutes',
      contactPhone: '+84 258 3989 898',
      tips: [
        'Smaller airport with faster processing',
        'English support available',
        'Check operating hours match your flight time',
        'Refunds primarily in cash (VND)',
        'Keep all receipts in chronological order'
      ],
      mapUrl: '/maps/cxr-vat-claim.jpg'
    },
    {
      id: '5',
      airport: 'Phu Quoc International Airport',
      airportCode: 'PQC',
      city: 'Phu Quoc',
      terminal: 'International Terminal',
      location: 'Post-Security Departure Area',
      floor: '2nd Floor',
      area: 'Main Departure Hall',
      hours: '05:00 - 23:00',
      description: 'VAT refund facility for tourists departing from Phu Quoc Island',
      procedures: [
        'Check in for your international flight',
        'Go through immigration and security',
        'Find VAT refund counter in departure hall',
        'Hand over all necessary documents',
        'Wait for customs verification',
        'Receive your refund'
      ],
      requiredDocuments: [
        'Valid passport',
        'International flight boarding pass',
        'VAT refund claim forms',
        'Original receipts and invoices',
        'Purchased items (unopened/unused)'
      ],
      processingTime: '8-12 minutes',
      contactPhone: '+84 297 3980 088',
      tips: [
        'Popular for beach resort shopping refunds',
        'Pearl and local product purchases common',
        'Arrive early during holiday seasons',
        'Multilingual staff (EN/VI/RU/CN)',
        'Express service available for urgent cases'
      ],
      mapUrl: '/maps/pqc-vat-claim.jpg'
    }
  ];

  const airports = [
    { value: 'all', label: 'All Airports', icon: '✈️' },
    { value: 'SGN', label: 'Ho Chi Minh (SGN)', icon: '🏙️' },
    { value: 'HAN', label: 'Hanoi (HAN)', icon: '🏛️' },
    { value: 'DAD', label: 'Da Nang (DAD)', icon: '🏖️' },
    { value: 'CXR', label: 'Nha Trang (CXR)', icon: '🌊' },
    { value: 'PQC', label: 'Phu Quoc (PQC)', icon: '🏝️' }
  ];

  const filteredLocations = selectedAirport === 'all'
    ? claimLocations
    : claimLocations.filter(loc => loc.airportCode === selectedAirport);

  const toggleExpand = (id: string) => {
    setExpandedLocation(expandedLocation === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(ROUTES.VAT_TRACKING)} className="text-blue-600">← Back</button>
          <h1 className="text-xl font-bold">VAT Claim Locations</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Info Banner */}
        <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <span className="text-4xl mr-4">📋</span>
            <div>
              <h2 className="font-bold text-xl mb-2">VAT Refund Claim Guide</h2>
              <p className="text-sm opacity-90 mb-3">
                Find VAT refund counters at all major Vietnamese airports. Follow the step-by-step procedures to claim your tax refund before departure.
              </p>
              <div className="bg-white/20 rounded-lg p-3 text-sm">
                <p className="font-semibold mb-1">⚠️ Important Reminders:</p>
                <ul className="space-y-1 opacity-95">
                  <li>• Minimum purchase: 2,000,000 VND per invoice</li>
                  <li>• Items must be claimed within 30 days of purchase</li>
                  <li>• Goods must be unused and in original packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Airport Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Airport</label>
          <select
            value={selectedAirport}
            onChange={(e) => setSelectedAirport(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
          >
            {airports.map(airport => (
              <option key={airport.value} value={airport.value}>
                {airport.icon} {airport.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location Cards */}
        <div className="space-y-4">
          {filteredLocations.map(location => {
            const isExpanded = expandedLocation === location.id;
            return (
              <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-blue-600">{location.airport}</h3>
                      <p className="text-sm text-gray-600">{location.city} • {location.airportCode}</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {location.hours}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-start">
                      <span className="mr-2">📍</span>
                      <div>
                        <span className="font-medium">Location:</span>
                        <p className="text-gray-600">{location.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2">🏢</span>
                      <div>
                        <span className="font-medium">Terminal:</span>
                        <p className="text-gray-600">{location.terminal}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2">⏱️</span>
                      <div>
                        <span className="font-medium">Processing Time:</span>
                        <p className="text-gray-600">{location.processingTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2">📞</span>
                      <div>
                        <span className="font-medium">Contact:</span>
                        <p className="text-gray-600">{location.contactPhone}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">{location.description}</p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t pt-4 mt-4 space-y-4">
                      {/* Step-by-step Procedures */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="mr-2">📝</span>
                          Step-by-Step Procedures
                        </h4>
                        <ol className="space-y-2 text-sm">
                          {location.procedures.map((step, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Required Documents */}
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="mr-2">📄</span>
                          Required Documents
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {location.requiredDocuments.map((doc, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-yellow-600 mr-2">✓</span>
                              <span className="text-gray-700">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="mr-2">💡</span>
                          Helpful Tips
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {location.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                          <span className="mr-2">🗺️</span>
                          View Map
                        </button>
                        <button className="border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 flex items-center justify-center">
                          <span className="mr-2">📞</span>
                          Call Counter
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => toggleExpand(location.id)}
                    className="w-full text-center text-blue-600 text-sm mt-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {isExpanded ? '▲ Show Less' : '▼ View Full Details'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* General VAT Refund Info */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="font-bold text-lg mb-3">📱 Track Your VAT Refund Status</h3>
          <p className="text-sm mb-4 opacity-90">
            Submit your VAT refund requests digitally and track the status in real-time through our app.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(ROUTES.VAT_REFUND)}
              className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 text-sm font-medium"
            >
              Submit New Request
            </button>
            <button
              onClick={() => navigate(ROUTES.VAT_TRACKING)}
              className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 text-sm font-medium"
            >
              Track Status
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-4">❓ Frequently Asked Questions</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">What is the minimum purchase amount for VAT refund?</p>
              <p className="text-gray-600">You need to spend at least 2,000,000 VND per invoice to be eligible for VAT refund.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">How long does the refund process take?</p>
              <p className="text-gray-600">At the airport: 10-20 minutes. Bank transfer: 5-10 business days after customs approval.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Can I claim VAT refund after leaving Vietnam?</p>
              <p className="text-gray-600">No, you must claim the refund at the airport before departure. Post-departure claims are not accepted.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">What items are not eligible for VAT refund?</p>
              <p className="text-gray-600">Services, consumed food/drinks, hotel accommodations, and items already used are not eligible.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VatClaimLocations;
