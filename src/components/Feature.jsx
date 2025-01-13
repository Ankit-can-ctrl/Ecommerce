import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { BsHeadset } from "react-icons/bs";
function Feature() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between flex-wrap p-10 border-b-2 border-gray-200">
      <div className=" flex flex-col items-center justify-center gap-2 p-5 group ">
        <LiaShippingFastSolid className="text-6xl group-hover:text-red group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500" />
        <h2 className="text-lg font-medium">Free Shipping</h2>
        <p className="text-gray-500">On orders above $100.</p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-2 p-5 group ">
        <TbTruckReturn className="text-6xl group-hover:text-red group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500" />
        <h2 className="text-lg font-medium">30 Days Returns</h2>
        <p className="text-gray-500">For an Exchange Product.</p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-2 p-5 group ">
        <LuWallet className="text-6xl group-hover:text-red group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500" />
        <h2 className="text-lg font-medium">Secured Payment</h2>
        <p className="text-gray-500">Payment Cards Accepted.</p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-2 p-5 group ">
        <GoGift className="text-6xl group-hover:text-red group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500" />
        <h2 className="text-lg font-medium">Special Gifts</h2>
        <p className="text-gray-500">Our First Product Order.</p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-2 p-5 group ">
        <BsHeadset className="text-6xl group-hover:text-red group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500" />
        <h2 className="text-lg font-medium">Support 24/7</h2>
        <p className="text-gray-500">Contact us Anytime.</p>
      </div>
    </div>
  );
}

export default Feature;
