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
          <div className="product_offer flex flex-col md:grid md:grid-cols-2 2xl:flex 2xl:flex-col gap-2">
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
      <div className="products_container flex flex-col gap-5 bg-gray-200 rounded-lg overflow-hidden p-5">
        <CategoryButtons />
        <ProductSwiper />
      </div>
      <div className="ads_container p-5">
        <WatchBanner />
      </div>
      <div className="latest_products p-5 bg-gray-200 flex flex-col gap-5">
        <Label label={"Latest Products"} />
        <ProductSwiper />
      </div>
    </div>
  );
}

export default Home;
