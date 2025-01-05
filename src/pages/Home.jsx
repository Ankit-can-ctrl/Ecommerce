import Header from "../components/Header";
import Carousel from "../components/Carousel";
import TopProducts from "../components/Homepage/TopProducts";
import { AltRoute } from "@mui/icons-material";
import ProductOffer from "../components/ProductOffer";

function Home() {
  const topProduct = [
    {
      src: "https://cmsimages.shoppersstop.com/W_web_149fdc0907/W_web_149fdc0907.png",
      alt: "Sport shoes",
    },
    {
      src: "https://cmsimages.shoppersstop.com/W_web_149fdc0907/W_web_149fdc0907.png",
      alt: "Kids winter wear",
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
          <div className="product_offer">
            <ProductOffer />
          </div>
          {/* <div className="top_two_products rounded-lg flex flex-row lg:flex-col gap-5 overflow-hidden">
            {topProduct?.map((product) => (
              <TopProducts
                key={product.alt}
                src={product.src}
                alt={product.alt}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
