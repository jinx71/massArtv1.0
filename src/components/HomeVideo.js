const HomeVideo = () => {
  return (
    // <div className="h-[626px] pt-[150px] bg-white">
    <div
      className="relative 
      xs:mt-[60px] lg:mt-[150px] xs:mb-[30px]
     xs:h-[550px]"
    >
      <video
        autoPlay
        loop
        muted
        className="rounded-[10px]  h-full w-full 
   
       object-cover"
      >
        <source src="/videos/Show Reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeVideo;
