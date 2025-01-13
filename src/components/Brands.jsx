import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brandsLogo = [
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/3.jpg",
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/9.jpg",
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/4.jpg",
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/8.jpg",
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/5.jpg",
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/5.jpg",
  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/5.jpg",
];

const Brands = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="relative w-full p-10 mx-auto">
      <Swiper
        modules={[Navigation, FreeMode]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: true,
          momentumVelocityRatio: 0.8,
        }}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className="py-4 flex items-center justify-center"
      >
        {brandsLogo.map((src, index) => (
          <SwiperSlide
            key={index}
            className=" !min-h-[150px] !max-w-fit select-none"
          >
            <img className="px-5 " src={src} alt="Brand Image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="absolute left-0 top-1/2 -translate-y-[60px] z-10 bg-red text-white shadow-lg rounded-full p-2 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        ref={navigationNextRef}
        className="absolute right-0 top-1/2 -translate-y-[60px] z-10 bg-red text-white shadow-lg rounded-full p-2 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Brands;

// function Brands() {
//
//   return <div></div>;
// }

// export default Brands;
