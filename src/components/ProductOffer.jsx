import ButtonMain from "./ButtonMain";
function ProductOffer({ src, side, name, price }) {
  return (
    <div
      className={`min-h-[200px] cursor-pointer min-w-[300px] flex flex-col items-${side} justify-end gap-2 p-5 rounded-lg bg-cover bg-center`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className=" flex flex-col items-start justify-center gap-2">
        <h1 className=" text-2xl w-[50%] font-semibold">{name}</h1>
        <p className=" text-2xl text-red font-semibold">${price}</p>
        <ButtonMain text="Shop Now" size={150} />
      </div>
    </div>
  );
}

export default ProductOffer;
