
const Gallery = ({ className = "" }) => {
  return (
    <div id="Gallary-section"
      className={`w-[1640px] relative bg-background-color-primary max-w-full overflow-hidden shrink-0 flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-29xl text-text-primary font-text-medium-normal ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center justify-start gap-6">
        <b className="self-stretch relative text-2xl leading-[120%]">Image Gallery</b>
        <div className="self-stretch items-center relative text-lg leading-[150%]">
          Our Work
        </div>
      </div>
      {/* <div className="self-stretch flex flex-col sm:flex-row items-start justify-start gap-11">
        <div className="flex-1 h-[300px] relative max-w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Chain Link"
            src="/IMG_4601.jpg"
          />
        </div>
        <div className="flex-1 h-[300px] relative max-w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Cedar Panel"
            src="/IMG_4380.jpg"
          />
        </div>
        <div className="flex-1 h-[300px] relative max-w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Work Image"
            src="/IMG_5137.jpg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Gallery;

