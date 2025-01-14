function WatchBanner() {
  return (
    <div className="h-[100px] md:h-[450px] overflow-hidden rounded-md relative group cursor-pointer">
      <img
        className="object-cover object-center w-full h-full group-hover:scale-110 transition-all duration-[1000ms]"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7348e6213111577.6744a9254f8b2.png"
        alt="Watch"
      />
    </div>
  );
}

export default WatchBanner;
