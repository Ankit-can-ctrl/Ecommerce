import ProductOffer from "../ProductOffer";

function Ads({ ads }) {
  return (
    <div className="px-5">
      <div
        className=" md:w-full flex flex-col lg:flex-row
     gap-10 items-center p-5"
      >
        {ads.map((ad) => (
          <ProductOffer
            key={ad.name}
            src={ad.src}
            side={ad.side}
            name={ad.name}
            price={ad.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Ads;
