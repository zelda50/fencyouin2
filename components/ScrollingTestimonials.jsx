import { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import StarRating from './StarRating';

// // Custom hook for scrolling into view
// const useScrollIntoView = (ref) => {
//   useEffect(() => {
//     if (ref.current) {
//       window.scrollTo({
//         top: ref.current.offsetTop - 80, // Adjust based on your header height
//         behavior: 'smooth',
//       });
//     }
//   }, [ref]);
// };

const ScrollingTestimonials = ({ placeId }) => {
  const [testimonials, setTestimonials] = useState({ top: [], middle: [], bottom: [] });
  const [error, setError] = useState(null);
  const testimonialsRef = useRef(null);

  // useScrollIntoView(testimonialsRef);

  useEffect(() => {
    async function fetchAndSetTestimonials() {
      try {
        console.log('Fetching reviews...');
        const response = await axios.get(`/api/google-reviews?placeId=${placeId}`);
        const reviews = response.data;

        console.log('Fetched reviews:', reviews);
  
        setTestimonials({
          top: reviews.slice([]),
          middle: reviews.slice([]),
          // bottom: reviews.slice([]),
        });
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials. Please try again later.');
      }
    }
  
    if (placeId) {
      fetchAndSetTestimonials();
    }
  }, [placeId]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div id="testimonials"  className="py-20">
      <div className="bg-slate-950 py-15">
        <div className="mb-8 px-4">
          <h3 className="text-slate-50 text-4xl font-semibold text-center">
            Testimonials
          </h3>
          <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
            What our customers are saying about us
          </p>
        </div>
        <div className="p-4 overflow-x-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />
          
          {/* Middle Testimonials */}
          <div className="flex gap-4 overflow-hidden mt-8">
            {testimonials.middle.length > 0 && generateTestimonialLists(testimonials.middle, 75, true)}
          </div>

          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
        </div>
      </div>
    </div>
  );
};

// Function to generate TestimonialList components dynamically
const generateTestimonialLists = (list, duration, reverse = false) => {
  if (list.length === 0) return null;
  
  const duplicatedList = [...list, ...list]; // Duplicate list for seamless scrolling
  
  return (
    <TestimonialList
      list={duplicatedList}
      duration={duration}
      reverse={reverse}
    />
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ x: reverse ? "-100%" : "100%" }}
      animate={{ x: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
      style={{ minWidth: '100%' }} // Ensure each list takes full width
    >
      {list.length > 0 ? (
        list.map((t, index) => (
          <div
            key={t.id || index} // Ensure that each element has a unique key
            className="shrink-0 w-[950px] h-[300px] grid grid-cols-[5rem,_1fr] rounded-lg overflow-hidden relative bg-gray-800 text-white"
          >
            <img src="logo.png" className="w-auto h-44 object-contain" alt="Testimonial" />
            <div className="bg-slate-900 text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1">{t.author_name}</span>
              <StarRating rating={t.rating} /> 
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-slate-300">{t.text}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700">
              "
            </span>
          </div>
        ))
      ) : (
        <p className="text-slate-300">No reviews available</p>
      )}
    </motion.div>
  );
};

export default ScrollingTestimonials;




