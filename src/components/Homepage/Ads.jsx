import ProductOffer from "../ProductOffer";

function Ads({ ads }) {
  return (
    <div
      className=" w-full flex flex-col lg:flex-row
     gap-5 items-center py-5"
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
  );
}

export default Ads;
