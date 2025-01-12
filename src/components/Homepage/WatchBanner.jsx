function WatchBanner() {
  return (
    <div className="h-[150px] overflow-hidden rounded-md relative group cursor-pointer">
      <img
        className="object-cover object-center w-full h-full group-hover:scale-110 transition-all duration-700 ease-in-out"
        src="https://images.pexels.com/photos/10488980/pexels-photo-10488980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Watch"
      />
      <div className="absolute flex items-center justify-center inset-0 text-white p-4 md:p-10">
        <div className="text-center flex items-center gap-5 justify-center md:justify-between w-full">
          <h1 className="text-4xl md:text-6xl font-semibold hidden md:inline-block">
            Watch
          </h1>
          <span className=" text-xl md:text-xl font-bold shadow-lg flex flex-col items-center">
            LIGE Luxury Watch{" "}
            <span className="hidden md:inline-block">
              Fashion Diver Men Watch 30ATM LIGE 10045
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default WatchBanner;
