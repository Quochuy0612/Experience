import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const TourReview: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    title: '',
    review: '',
    tourGuideRating: 0,
    valueRating: 0,
    safetyRating: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.MY_BOOKINGS);
  };

  const RatingStars = ({ value, onChange }: { value: number; onChange: (val: number) => void }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="text-3xl"
        >
          {star <= value ? '⭐' : '☆'}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">⭐</div>
          <h1 className="text-3xl font-bold mb-2">WRITE A REVIEW</h1>
          <p className="text-gray-600">Ha Long Bay Luxury Cruise</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-semibold mb-4">OVERALL RATING *</h2>
            <div className="flex justify-center mb-4">
              <RatingStars value={rating} onChange={setRating} />
            </div>
            <p className="text-center text-gray-600">
              {rating === 0 && 'Select a rating'}
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-semibold mb-4">DETAILED RATINGS</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tour Guide</label>
                <RatingStars
                  value={reviewData.tourGuideRating}
                  onChange={(val) => setReviewData(prev => ({ ...prev, tourGuideRating: val }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Value for Money</label>
                <RatingStars
                  value={reviewData.valueRating}
                  onChange={(val) => setReviewData(prev => ({ ...prev, valueRating: val }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Safety</label>
                <RatingStars
                  value={reviewData.safetyRating}
                  onChange={(val) => setReviewData(prev => ({ ...prev, safetyRating: val }))}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Review Title *</label>
                <input
                  type="text"
                  value={reviewData.title}
                  onChange={(e) => setReviewData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Summarize your experience"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Review *</label>
                <textarea
                  value={reviewData.review}
                  onChange={(e) => setReviewData(prev => ({ ...prev, review: e.target.value }))}
                  rows={6}
                  placeholder="Share your experience with other travelers..."
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                ></textarea>
                <p className="text-sm text-gray-600 mt-1">Minimum 50 characters</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
            >
              CANCEL
            </button>
            <button
              type="submit"
              disabled={rating === 0 || reviewData.review.length < 50}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
            >
              SUBMIT REVIEW
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default TourReview;