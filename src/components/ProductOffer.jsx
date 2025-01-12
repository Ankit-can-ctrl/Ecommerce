import ButtonMain from "./ButtonMain";
function ProductOffer({ src, side, name, price }) {
  return (
    <div
      className={`min-h-[200px] cursor-pointer min-w-[300px] w-full flex flex-col items-${side} justify-end gap-2 p-5 rounded-lg bg-cover bg-center`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div
        className={`flex flex-col w-[80%] items-${side} justify-center gap-2`}
      >
        <h1 className=" text-2xl  font-semibold truncate items-end w-[70%] text-end">
          {name}
        </h1>
        <p className=" text-2xl text-red font-semibold">${price}</p>
        <ButtonMain text="Shop Now" size={150} />
      </div>
    </div>
  );
}

export default ProductOffer;
