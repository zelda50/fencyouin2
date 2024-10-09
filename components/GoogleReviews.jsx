import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GoogleReviews({ placeId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/google-reviews?placeId=${placeId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [placeId]);

  return (
    <div id="Reviews-section" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">What Our Customers Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-800">{review.author_name}</p>
                <p className="text-yellow-500">Rating: {Array(review.rating).fill('⭐').join('')}</p>
                <p className="text-gray-600 mt-2">{review.text}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No reviews available.</div>
        )}
      </div>
    </div>
  );
}





