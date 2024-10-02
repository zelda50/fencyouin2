// components/ImageSlider.js

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/chainlink2.jpg" alt="Chain Link2" className="slider-image"/>
        </div>
        <div>
          <img src="/blkchainlink.jpg" alt="Blk Chainlink" className="slider-image"/>
        </div>
        <div>
          <img src="/securityfence2.jpg" alt="Security Fence2" className="slider-image"/>
        </div>
        <div>
          <img src="/securityfence.jpg" alt="Security Fence" className="slider-image"/>
        </div>
        <div>
          <img src="/customfence.jpg" alt="Custom Fence" className="slider-image"/>
        </div>
        <div>
          <img src="/metalfence.jpg" alt="Metal Fence" className="slider-image"/>
        </div>
        <div>
          <img src="/cedar-fence5.jpg" alt="cedar fence5" className="slider-image"/>
        </div>
        <div>
          <img src="/cedar-fence4.jpg" alt="cedar fence4" className="slider-image"/>
        </div>
        <div>
          <img src="/cedar-fence3.jpg" alt="cedar fence3" className="slider-image"/>
        </div>
      </Slider>
      <style>{`
        .slider-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .slider-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
