import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ className = "" }) => {
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
    <div id="Review-section"
      className={`w-[1440px] relative bg-background-color-primary max-w-full overflow-hidden shrink-0 flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-29xl text-text-primary font-text-medium-normal ${className}`}
    >
      <div className="w-[560px] flex flex-col items-center justify-start gap-6">
        <b className="self-stretch relative leading-[120%]">
          Customer testimonials
        </b>
        <div className="self-stretch relative text-lg leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      <Slider {...settings} className="w-full">
        <div className="w-full flex flex-col items-center justify-center gap-8 text-xl">
          <img
            className="w-[140px] h-14 object-contain"
            alt="Logo 1"
            src="/logo2-colordark1.svg"
          />
          <b className="w-[368px] text-center leading-[140%]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique."
          </b>
          <div className="w-[300px] flex flex-col items-center justify-center gap-4 text-base">
            <img
              className="w-14 h-14 rounded-full object-cover"
              alt="Customer 1"
              src="/avatar-image@2x.png"
            />
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold">
                Name Surname
              </div>
              <div className="text-center">
                Position, Company name
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-8 text-xl">
          <img
            className="w-[140px] h-14 object-contain"
            alt="Logo 2"
            src="/logo2-colordark1.svg"
          />
          <b className="w-[368px] text-center leading-[140%]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique."
          </b>
          <div className="w-[300px] flex flex-col items-center justify-center gap-4 text-base">
            <img
              className="w-14 h-14 rounded-full object-cover"
              alt="Customer 2"
              src="/avatar-image@2x.png"
            />
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold">
                Name Surname
              </div>
              <div className="text-center">
                Position, Company name
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-8 text-xl">
          <img
            className="w-[140px] h-14 object-contain"
            alt="Logo 3"
            src="/logo2-colordark1.svg"
          />
          <b className="w-[368px] text-center leading-[140%]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique."
          </b>
          <div className="w-[300px] flex flex-col items-center justify-center gap-4 text-base">
            <img
              className="w-14 h-14 rounded-full object-cover"
              alt="Customer 3"
              src="/avatar-image@2x.png"
            />
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold">
                Name Surname
              </div>
              <div className="text-center">
                Position, Company name
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;



// const Testimonial = ({ className = "" }) => {
//   return (
//     <div
//       className={`w-[1440px] relative bg-background-color-primary max-w-full overflow-hidden shrink-0 flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-29xl text-text-primary font-text-medium-normal ${className}`}
//     >
//       <div className="w-[560px] flex flex-col items-center justify-start gap-6">
//         <b className="self-stretch relative leading-[120%]">
//           Customer testimonials
//         </b>
//         <div className="self-stretch relative text-lg leading-[150%]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </div>
//       </div>
//       <div className="self-stretch flex flex-col items-center justify-start gap-12 text-xl">
//         <div className="self-stretch flex flex-row items-center justify-start gap-8">
//           <div className="rounded-31xl border-text-primary border-[1px] border-solid flex flex-row items-center justify-center p-3">
//             <img
//               className="w-6 relative h-6 overflow-hidden shrink-0"
//               alt=""
//               src="/icon.svg"
//             />
//           </div>
//           <div className="flex-1 flex flex-row items-start justify-center gap-6">
//             <div className="w-[368px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-8">
//               <img
//                 className="w-[140px] relative h-14 overflow-hidden shrink-0"
//                 alt=""
//                 src="/logo2-colordark1.svg"
//               />
//               <b className="self-stretch relative leading-[140%]">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique."
//               </b>
//               <div className="w-[300px] flex flex-col items-center justify-start gap-4 text-base">
//                 <img
//                   className="w-14 relative rounded-[50%] h-14 object-cover"
//                   alt=""
//                   src="/avatar-image@2x.png"
//                 />
//                 <div className="self-stretch flex flex-col items-start justify-start">
//                   <div className="self-stretch relative leading-[150%] font-semibold">
//                     Name Surname
//                   </div>
//                   <div className="self-stretch relative leading-[150%]">
//                     Position, Company name
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[368px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-8">
//               <img
//                 className="w-[140px] relative h-14 overflow-hidden shrink-0"
//                 alt=""
//                 src="/logo2-colordark1.svg"
//               />
//               <b className="self-stretch relative leading-[140%]">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique."
//               </b>
//               <div className="w-[300px] flex flex-col items-center justify-start gap-4 text-base">
//                 <img
//                   className="w-14 relative rounded-[50%] h-14 object-cover"
//                   alt=""
//                   src="/avatar-image@2x.png"
//                 />
//                 <div className="self-stretch flex flex-col items-start justify-start">
//                   <div className="self-stretch relative leading-[150%] font-semibold">
//                     Name Surname
//                   </div>
//                   <div className="self-stretch relative leading-[150%]">
//                     Position, Company name
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[368px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-8">
//               <img
//                 className="w-[140px] relative h-14 overflow-hidden shrink-0"
//                 alt=""
//                 src="/logo2-colordark1.svg"
//               />
//               <b className="self-stretch relative leading-[140%]">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique."
//               </b>
//               <div className="w-[300px] flex flex-col items-center justify-start gap-4 text-base">
//                 <img
//                   className="w-14 relative rounded-[50%] h-14 object-cover"
//                   alt=""
//                   src="/avatar-image@2x.png"
//                 />
//                 <div className="self-stretch flex flex-col items-start justify-start">
//                   <div className="self-stretch relative leading-[150%] font-semibold">
//                     Name Surname
//                   </div>
//                   <div className="self-stretch relative leading-[150%]">
//                     Position, Company name
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-31xl border-text-primary border-[1px] border-solid flex flex-row items-center justify-center p-3">
//             <img
//               className="w-6 relative h-6 overflow-hidden shrink-0"
//               alt=""
//               src="/icon1.svg"
//             />
//           </div>
//         </div>
//         <div className="flex flex-row items-start justify-start p-2.5 gap-[9px]">
//           <div className="w-2 relative rounded-[50%] bg-text-primary h-2" />
//           <div className="w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter h-2" />
//           <div className="w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter h-2" />
//           <div className="w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter h-2" />
//           <div className="w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter h-2" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;