import { TbTruckDelivery } from "react-icons/tb";
function FreeShippingBanner() {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-between text-lg md:text-xl lg:text-2xl font-semibold  border-2 border-red rounded-md p-5 md:p-10">
      {" "}
      <h1 className=" uppercase flex items-center justify-center gap-5">
        <span>
          <TbTruckDelivery size={36} />
        </span>
        Free shipping
      </h1>{" "}
      <span className=" text-center">
        Free delivery on your first order (above $50){" "}
      </span>{" "}
      <span>-ONLY $100.</span>
    </div>
  );
}

export default FreeShippingBanner;
