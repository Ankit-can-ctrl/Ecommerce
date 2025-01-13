import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Ads from "../components/Homepage/Ads";
import ProductOffer from "../components/ProductOffer";
// import CategoryCard from "../components/Homepage/CategoryCard";
// import CategorySwiper from "../components/Homepage/CategorySwiper";
import FreeShippingBanner from "../components/Homepage/FreeShippingBanner";
import WatchBanner from "../components/Homepage/WatchBanner";
// import ProductCard from "../components/ProductCard";
import ProductSwiper from "../components/ProductSwiper";
// import ButtonMain from "../components/ButtonMain";
// import CategoryButtons from "../components/CategoryButtons";
import Label from "../components/Label";
import Timer from "../components/Timer";
// import Brands from "../components/Brands";
// import ClientCard from "../components/ClientCard";
// import BlogsSwiper from "../components/BlogsSwiper";
// import Testimonial from "../components/Homepage/Testimonial";
import Swipeable from "../components/Swipeable";
import CategoryCard from "../components/Homepage/CategoryCard";
// import ButtonMain from "../components/ButtonMain";
import CategorybuttonsCard from "../components/Homepage/CategorybuttonsCard";
import CompaniesCard from "../components/Homepage/CompaniesCard";
import ClientCard from "../components/ClientCard";
// import { categories } from "./data";
import BlogCard from "../components/Homepage/BlogCard";
import SocialPosts from "../components/Homepage/SocialPosts";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
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

  const categoriesButtons = [
    "Furniture",
    "Clothing",
    "Shoes",
    "Watches",
    "Accessories",
    "Toys & Games",
    "Health & Beauty",
    "Grocery",
    "Appliances",
    "Automotive",
  ];
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
  const twoNewAds = [
    {
      name: "Mobile Shope-Smart Watch T-55",
      price: "129",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-6.jpg",
      alt: "sofa",
      side: "start",
    },
    {
      name: "Decoration Design Lamp Light",
      price: "200",
      src: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-7.jpg",
      alt: "T-shirt",
      side: "start",
    },
  ];
  const brandsLogo = [
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/3.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/9.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/4.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/8.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/5.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/5.jpg",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/5.jpg",
  ];

  return (
    <div className=" font-body">
      <div className="header">
        <Header />
      </div>
      <div className="hero_section p-4  bg-[#F5F0F0]">
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
      </div>
      <div className="Category_carousel ">
        <Swipeable
          SubComponent={CategoryCard}
          buttonColor={"#FF5252"}
          data={categories}
        />
        {/* <CategorySwiper /> */}
      </div>
      <div className="p-5 md:p-10 flex flex-col  gap-10">
        <FreeShippingBanner />
        <Ads ads={ads} />
      </div>
      <div className="products_container flex flex-col gap-5  bg-bgcolor rounded-lg overflow-hidden py-5">
        <Swipeable
          SubComponent={CategorybuttonsCard}
          data={categoriesButtons}
          buttonColor={"#c2bdbd"}
        />
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
      <Ads ads={twoNewAds} />

      {/* <Brands /> */}
      <div className="review flex flex-col gap-5 pt-10 bg-bgcolor  text-gray-500 font-semibold">
        <Swipeable
          SubComponent={CompaniesCard}
          buttonColor={"#FF5252"}
          data={brandsLogo}
          autoplay={true}
        />
        <h1 className="px-5 pt-5 text-3xl md:text-4xl">
          What our clients say about us?
        </h1>
        <Swipeable SubComponent={ClientCard} data={categories} />
        <h2 className=" px-5 text-3xl md:text-4xl">From Our Blog</h2>
        <Swipeable SubComponent={BlogCard} data={categories} />
      </div>
      <div className="md:flex items-center justify-center pt-10 bg-bgcolor">
        <h2 className="px-5 text-3xl  text-center md:text-5xl font-semibold text-gray-500">
          Follow Us On Instagram
        </h2>
        <SocialPosts />
      </div>
      <Feature />
      <Footer />

      {/* <Swipeable SubComponent={ClientCard} buttonColor={"#FF5252"} /> */}
    </div>
  );
}

export default Home;
