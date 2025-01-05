import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Test = () => {
  return (
    <div className="relative w-full">
      <style>
        {`
        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
            opacity: 1;
            }
            
          .swiper-button-next,
          .swiper-button-prev {
          opacity: 0;
            color: white !important;
            height: 30px !important;
            width: 30px !important;
            background-color: #FF5252;
            overflow: hidden;
            padding: 10px !important;
            border-radius: 10%;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
                font-size: 15px !important; /* Add this line to control arrow size */
            }

          

          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background-color: #000 !important;
            opacity: 0.5 !important;
          }

          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background-color: #FF5252 !important;
          }
        `}
      </style>

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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 p-12 text-center">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
