// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Button from "@mui/material/Button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const images = [
    {
      src: "https://cmsimages.shoppersstop.com/main_banner_web_Skechers_Adidas_and_more_4355c5edda/main_banner_web_Skechers_Adidas_and_more_4355c5edda.png",
      alt: "Image 1",
    },
    {
      src: "https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png",
      alt: "Image 2",
    },
    {
      src: "https://cmsimages.shoppersstop.com/main_banner_web_Forever_New_Veromoda_and_more_a917b6c9e2/main_banner_web_Forever_New_Veromoda_and_more_a917b6c9e2.png",
      alt: "Image 3",
    },
    {
      src: "https://cmsimages.shoppersstop.com/main_banner_web_levis_puma_and_more_152c27a76b/main_banner_web_levis_puma_and_more_152c27a76b.png",
      alt: "Image 3",
    },
  ];
  return (
    <>
      <style>
        {`
        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          display: flex !important;
            }
            
          .swiper-button-next,
          .swiper-button-prev {
          display: none !important;
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
        className="mySwiper"
      >
        {images?.map((image) => (
          <SwiperSlide className=" rounded-lg" key={image.alt}>
            <img className=" " src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
