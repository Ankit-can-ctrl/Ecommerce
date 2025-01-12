import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ButtonMain from "./ButtonMain";

// Note: In your actual project, you'll need to import these Swiper styles:
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';

const categories = [
  { id: 1, name: "Electronics", icon: "🔌" },
  { id: 2, name: "Fashion", icon: "👕" },
  { id: 3, name: "Home", icon: "🏠" },
  { id: 4, name: "Sports", icon: "⚽" },
  { id: 5, name: "Books", icon: "📚" },
  { id: 6, name: "Beauty", icon: "💄" },
  { id: 7, name: "Food", icon: "🍔" },
  { id: 8, name: "Travel", icon: "✈️" },
  { id: 9, name: "Travel", icon: "✈️" },
  { id: 10, name: "Travel", icon: "✈️" },
  { id: 11, name: "Travel", icon: "✈️" },
  { id: 12, name: "Travel", icon: "✈️" },
  { id: 13, name: "Travel", icon: "✈️" },
];

const CategorySwiper = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="relative w-full mx-auto  px-14">
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
        className=""
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            className="!w-[150px] !h-[50px] select-none"
          >
            <ButtonMain text={"Furniture"} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="absolute left-0 top-1/2 -translate-y-[25px] z-10 bg-red text-white shadow-lg rounded-full p-2 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 " />
      </button>

      <button
        ref={navigationNextRef}
        className="absolute right-0 top-1/2 -translate-y-[25px] z-10 bg-red text-white shadow-lg rounded-full p-2 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CategorySwiper;
