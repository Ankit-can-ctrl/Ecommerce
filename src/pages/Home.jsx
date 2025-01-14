import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Ads from "../components/Homepage/Ads";
import ProductOffer from "../components/ProductOffer";
import FreeShippingBanner from "../components/Homepage/FreeShippingBanner";
import WatchBanner from "../components/Homepage/WatchBanner";
import ProductSwiper from "../components/ProductSwiper";
import Label from "../components/Label";
import Timer from "../components/Timer";
import Swipeable from "../components/Swipeable";
import CategoryCard from "../components/Homepage/CategoryCard";
import CategorybuttonsCard from "../components/Homepage/CategorybuttonsCard";
import CompaniesCard from "../components/Homepage/CompaniesCard";
import ClientCard from "../components/ClientCard";
import BlogCard from "../components/Homepage/BlogCard";
import SocialPosts from "../components/Homepage/SocialPosts";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
function Home() {
  const topProduct = [
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b530f7110494491.5feef8228f2b8.png",
      alt: "cam",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/facc48204509849.66aa25531a8b8.png",
      alt: "Chair",
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

  // https://mir-cdn.behance.net/v1/rendition/project_modules/2800_opt_1/1c06cd215220503.6766a5bed048b.jpg
  const ads = [
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0f8103214675655.675c151ddbba9.jpg",
      alt: "cam",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ca3f4c204509849.66aa255319c67.png",
      alt: "Chair",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b44a68213211573.67425991b3d57.jpg",
      alt: "Chair",
    },
  ];
  const twoAds = [
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3b73ff182730865.653292b7057e7.jpg",
      alt: "sofa",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/712869118965343.6093bf04eb5d5.jpg",
      alt: "T-shirt",
    },
  ];
  const twoNewAds = [
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7d4e17195124683.660805298a2c7.jpg",
      alt: "sofa",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/d54af8208835139.66f528e4dd065.jpg",
      alt: "T-shirt",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/964902201295863.6671f349c860d.png",
      alt: "T-shirt",
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
        <div className="hero_banner w-full h-full flex flex-col  gap-10">
          <div className="carousel rounded-lg overflow-hidden">
            <Carousel />
          </div>
          <div className="product_offer w-full flex flex-col md:grid grid-cols-2 gap-3 overflow-hidden pb-10">
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
      </div>
      <div className="p-5 md:p-10 flex flex-col  gap-10">
        <FreeShippingBanner />
      </div>
      <Ads ads={ads} count={3} />
      <div className="products_container flex flex-col  bg-bgcolor rounded-lg overflow-hidden ">
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

      <div className=" bg-bgcolor my-5 pt-1">
        <Label label={"Latest Products"} />
        <ProductSwiper />
      </div>

      <Ads ads={twoAds} count={2} />

      <div className=" bg-bgcolor mt-5 pt-1">
        <Label label={"Featured Products"} />
        <ProductSwiper />
        <div className="deals_of_day py-5 flex flex-col  lg:flex-row items-center  gap-5">
          <Label label={"Deals of the day"} />
          <Timer />
        </div>
        <ProductSwiper />
      </div>
      <div className="my-5">
        <Ads ads={twoNewAds} />
      </div>

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
      <div className="md:flex items-center justify-center pt-10 bg-bgcolor overflow-hidden">
        <h2 className="px-5 text-3xl  text-center md:text-5xl font-semibold text-gray-500">
          Follow Us On Instagram
        </h2>
        <SocialPosts />
      </div>
      <Feature />
      <Footer />
    </div>
  );
}

export default Home;
