import React from 'react';

const StarRating = ({ rating }) => {
  // Number of stars
  const numStars = 5;

  // Create an array of stars
  const stars = Array.from({ length: numStars }, (_, index) => {
    const starValue = index + 1;
    return (
      <span
        key={starValue}
        className={`text-2xl ${starValue <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
      >
        ★
      </span>
    );
  });

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
