import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function Swipeable({ SubComponent, data }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <div className="relative w-full bg-bgcolor mx-auto p-5">
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
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" rounded-lg overflow-hidden !max-w-[300px] !max-h-[450px]"
            >
              <div className="flex  flex-col items-center justify-center   hover:shadow-lg transition-shadow  h-full">
                <SubComponent data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={navigationPrevRef}
          className={`absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-[#c2bdbd] shadow-lg rounded-full p-2  disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          ref={navigationNextRef}
          className={`absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-[#c2bdbd] shadow-lg rounded-full p-2  disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
}
export default Swipeable;
