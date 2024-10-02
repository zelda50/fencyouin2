const Layout1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative bg-background-color-primary max-w-full overflow-hidden shrink-0 flex flex-col items-start justify-start py-28 px-16 box-border text-left text-21xl text-text-primary font-text-medium-normal ${className}`}
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-start gap-20">
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <img
            className="w-25 relative h-25 overflow-hidden shrink-0"
            alt=""
            src="/"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <b className="self-stretch font-family:roboto text-3xl">
              Building Beautiful Fences That Stand the Test of Time
            </b>
            <div className="self-stretch relative text-lg leading-[150%]">
              At Landmark Creations, we specialize in creating high-quality fences that not only enhance the beauty of your property but also provide security and privacy. With our team of skilled craftsmen and attention to detail, we ensure that every fence we build is built to last.
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[300px] md:h-[640px] object-cover"
          alt=""
          src="/cedarfence.jpg"
        />
      </div>
    </div>
  );
};

export default Layout1;
