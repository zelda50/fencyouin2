
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
    </div>
  );
};

export default Gallery;

