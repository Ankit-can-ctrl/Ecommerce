import ProductOffer from "../ProductOffer";

function Ads({ ads, count }) {
  return (
    <div
      className={`md:w-full px-4 flex flex-col md:grid grid-cols-${count}
     gap-5`}
    >
      {ads.map((ad) => (
        <ProductOffer key={ad.src} src={ad.src} />
      ))}
    </div>
  );
}

export default Ads;
