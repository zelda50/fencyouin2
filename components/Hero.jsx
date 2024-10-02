import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/clfence.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />
      <div className='p-5 text-white z-[2]'>
        <h2 className='text-5xl font-bold font-serif text-green-400'>{heading}</h2>
        <p className='py-5 text-xl text-center'>{message}</p>
      </div>
    </div>
  );
};

export default Hero;

