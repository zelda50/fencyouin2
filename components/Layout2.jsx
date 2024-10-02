const Layout2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative bg-background-color-primary max-w-full overflow-hidden shrink-0 flex flex-col items-center justify-start py-28 px-16 box-border text-left text-21xl text-text-primary font-text-medium-normal ${className}`}
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-start gap-20">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[300px] md:h-[640px] object-cover"
          alt=""
          src="/customfence.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
         
          <b className="self-stretch relative text-3xl leading-[120%]">
            Choose Landmark Creations for durable, aesthetically appealing, and cost-effective fences.
          </b>
          <div className="self-stretch relative text-lg leading-[150%]">
            Our fences are built to last, enhancing the beauty of your property while saving you money.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
