import Image from 'next/image';
import React from 'react';
import TrckImg from '../public/crew.webp';

const AboutUs = () => {
  return (
    <div className='relative'>
      {/* Background Section */}
      <div className='relative w-full h-[100vh] bg-fixed bg-center bg-cover'>
        <div className='absolute inset-0'>
          <Image
            src={TrckImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50' />
        {/* Text Content */}
        <div className='relative flex flex-col items-center justify-center w-full h-full p-5 text-white z-[2]'>
          <h2 className='text-5xl font-bold mb-4'>About Us</h2>
          <p className='text-xl'>
            Landmark Creations is the premier provider of fencing solutions for residential and commercial clients alike. Our years of experience and dedication to quality workmanship are unparalleled in the industry. We work closely with our clients to determine their needs and help them make the right choice for their fence project. From ornamental wrought iron to durable chain link, we install and repair all types of fences. No project is too big or too small for our team. Get in touch today and let us help secure your property!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

