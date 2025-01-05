import Header from "../components/Header";
import Carousel from "../components/Carousel";

import ProductOffer from "../components/ProductOffer";

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
      </div>
    </div>
  );
}

export default Home;
