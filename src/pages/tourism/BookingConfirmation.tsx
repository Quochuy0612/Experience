import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const booking = {
    id: 'TRV-20250115-0042',
    tourName: 'Ha Long Bay Luxury Cruise',
    date: '2025-01-20',
    participants: 2,
    total: 305,
    pickupTime: '08:00 AM',
    pickupLocation: 'Hotel Metropole Hanoi'
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-4">BOOKING CONFIRMED!</h1>
          <p className="text-lg text-gray-600">Your tour has been successfully booked</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">BOOKING DETAILS</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Booking ID:</strong> {booking.id}</p>
            <p><strong>Tour:</strong> {booking.tourName}</p>
            <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p><strong>Participants:</strong> {booking.participants} people</p>
            <p><strong>Pickup Time:</strong> {booking.pickupTime}</p>
            <p><strong>Pickup Location:</strong> {booking.pickupLocation}</p>
            <p className="text-2xl font-bold mt-4">Total: ${booking.total}</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">📧 CONFIRMATION EMAIL SENT</h3>
          <p className="text-sm">Check your email for booking details and e-tickets</p>
        </div>

        <div className="space-y-3 mb-6">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            📥 DOWNLOAD E-TICKET
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            📧 RESEND CONFIRMATION EMAIL
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            💬 CONTACT TOUR OPERATOR
          </button>
        </div>

        <div className="bg-white border rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3">WHAT'S NEXT:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span>1.</span>
              <span>You'll receive a reminder 24 hours before the tour</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>2.</span>
              <span>Be ready at your pickup location 10 minutes early</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>3.</span>
              <span>Bring your passport and booking confirmation</span>
            </li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => navigate(ROUTES.MY_BOOKINGS)}
            className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700"
          >
            MY BOOKINGS
          </button>
          <button
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
          >
            DASHBOARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;