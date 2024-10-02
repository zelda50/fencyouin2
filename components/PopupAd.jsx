import { useState, useEffect } from 'react';
import styles from './PopupAd.module.css'; // Import CSS module

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show popup after 5 seconds (adjust as needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Function to close the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  // Function to redirect to the estimate page
  const redirectToEstimate = () => {
    window.open("https://myfence.mysalesman.com/?partnerCode=7fc861806afe#UserInfo", "_blank"); // Replace with your actual route in Next.js app
  };

  return isVisible ? (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <span className={styles.closeBtn} onClick={closePopup}>
          &times;
        </span>
        <h2 className={styles.heading}>Get a Quick Fence Estimate Today!</h2>
        <p className={styles.paragraph}>Looking to upgrade or install a new fence? Get a no-obligation quote in minutes.</p>
        <button className={styles.estimateBtn} onClick={redirectToEstimate}>
          Get Your Free Estimate
        </button>
      </div>
    </div>
  ) : null;
};

export default PopupAd;
