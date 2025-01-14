function ProductOffer({ src }) {
  return (
    <div className=" overflow-hidden cursor-pointer rounded-md">
      <img
        className=" h-[300px] w-full  rounded-md object-cover object-center hover:scale-105 transition-all duration-[700ms] ease-in-out"
        src={src}
        alt="Ads"
      />
    </div>
  );
}

export default ProductOffer;
