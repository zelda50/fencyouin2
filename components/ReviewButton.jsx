// // components/ReviewButton.js

// import React from 'react';

// const ReviewButton = () => {
//   const handleReviewClick = () => {
//     window.open('https://search.google.com/local/writereview?placeid=ChIJdVeC5pgBkVQRo55oO8yDTg8', '_blank'); 
//   };
  
//   return (
//     <button
//       onClick={handleReviewClick}
//       style={{
//         backgroundColor: '#4285F4',
//         color: 'white',
//         padding: '10px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         cursor: 'pointer',
//       }}
//     >
//       Leave a Google Review
//     </button>
//   );
// };

// export default ReviewButton;

import React from 'react';

const ReviewButton = () => {
  const handleReviewClick = () => {
    window.open('https://search.google.com/local/writereview?placeid=ChIJdVeC5pgBkVQRo55oO8yDTg8', '_blank');
  };

  return (
    <button
      onClick={handleReviewClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: '1px solid #d9d9d9',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" // You can replace this URL with your own image link or local image path
        alt="Google Logo"
        style={{
          width: '24px',
          height: '24px',
          marginRight: '10px',
        }}
      />
      <span style={{ color: '#4285F4' }}>Leave a Google Review</span>
    </button>
  );
};

export default ReviewButton;


