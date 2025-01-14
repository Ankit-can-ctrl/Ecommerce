import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const images = [
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/91503d110494491.5feef8228f77b.png",
      alt: "Image 1",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/cd94a9158700441.639071f8ba1e8.png",
      alt: "Image 2",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/179d9c109464809.604af4c0b79f9.png",
      alt: "Image 3",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/31ae0f190346029.65b9886928828.png",
      alt: "Image 4",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/65c6c6133870811.6527c39bd0ec4.png",
      alt: "Image 5",
    },
  ];
  return (
    <>
      <style>.swiper-n</style>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide key={item.alt}>
            <MainBanner src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={navigationPrevRef}
        className={`absolute left-1 -translate-y-[325px] z-10 bg-[#c2bdbd] shadow-lg rounded-full p-2  disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        ref={navigationNextRef}
        className={`absolute right-1  -translate-y-[325px] z-10 bg-[#c2bdbd] shadow-lg rounded-full p-2  disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </>
  );
}

function MainBanner({ src }) {
  return (
    <div className="main_carousel_image_banner">
      <img
        className=" object-cover object-center lg:w-[1900px] h-[600px] rounded-md"
        src={src}
        alt="image"
      />
    </div>
  );
}
