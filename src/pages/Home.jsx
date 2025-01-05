import Header from "../components/Header";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className=" font-body">
      <div className="header">
        <Header />
      </div>
      <div className="hero_section p-20 bg-[#F5F0F0]">
        <div className="carouse rounded-lg overflow-hidden w-full h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
