import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Ads from "../components/Homepage/Ads";
import ProductOffer from "../components/ProductOffer";
// import CategoryCard from "../components/Homepage/CategoryCard";
import CategorySwiper from "../components/Homepage/CategorySwiper";
import FreeShippingBanner from "../components/Homepage/FreeShippingBanner";
import WatchBanner from "../components/Homepage/WatchBanner";
// import ProductCard from "../components/ProductCard";
import ProductSwiper from "../components/ProductSwiper";
// import ButtonMain from "../components/ButtonMain";
import CategoryButtons from "../components/CategoryButtons";
import Label from "../components/Label";
import Timer from "../components/Timer";

// import { categories } from "./data";

function Home() {
  const topProduct = [
    {
      name: "Samsung camera",
      price: "129",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg",
      alt: "cam",
      side: "start",
    },
    {
      name: "Chair",
      price: "200",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg",
      alt: "Chair",
      side: "end",
    },
  ];

  const ads = [
    {
      name: "Samsung",
      price: "129",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg",
      alt: "cam",
      side: "end",
    },
    {
      name: "Chair",
      price: "200",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg",
      alt: "Chair",
      side: "end",
    },
    {
      name: "Headphone",
      price: "200",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg",
      alt: "Chair",
      side: "end",
    },
  ];
  const twoAds = [
    {
      name: "Santa lucia three seater sofa",
      price: "129",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-4.jpg",
      alt: "sofa",
      side: "start",
    },
    {
      name: "women in red crew neck T-shirt",
      price: "200",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-5.jpg",
      alt: "T-shirt",
      side: "start",
    },
  ];

  return (
    <div className=" font-body">
      <div className="header">
        <Header />
      </div>
      <div className="hero_section p-5 bg-[#F5F0F0]">
        <div className="hero_banner w-full h-full flex flex-col  2xl:flex-row gap-10">
          <div className="carousel rounded-lg overflow-hidden">
            <Carousel />
          </div>
          <div className="product_offer flex flex-col md:grid md:grid-cols-2 2xl:flex 2xl:flex-col gap-2 items-center">
            {topProduct?.map((product) => (
              <ProductOffer
                key={product.alt}
                src={product.src}
                side={product.side}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
        <div className="Category_carousel pt-10">
          <CategorySwiper />
        </div>
      </div>
      <div className="p-5 md:p-10 flex flex-col  gap-10">
        <FreeShippingBanner />
        <Ads ads={ads} />
      </div>
      <div className="products_container flex flex-col gap-5  bg-bgcolor rounded-lg overflow-hidden py-5">
        <CategoryButtons />
        <ProductSwiper />
      </div>
      <div className="ads_container p-5">
        <WatchBanner />
      </div>

      <div className=" md:px-10 py-5 ">
        <Label label={"Latest Products"} />
        <ProductSwiper />
        <Ads ads={twoAds} />
        <Label label={"Featured Products"} />
        <ProductSwiper />
        <div className="deals_of_day py-5 flex flex-col  lg:flex-row items-center  gap-5">
          <Label label={"Deals of the day"} />
          <Timer />
        </div>
        <ProductSwiper />
      </div>
    </div>
  );
}

export default Home;
