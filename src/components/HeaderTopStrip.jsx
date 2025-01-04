import { Link } from "react-router-dom";

function HeaderTopStrip() {
  return (
    <div className="top_strip px-[10%] m-auto flex justify-between items-center text-gray-500 h-10 text-sm border-b-[2px] border-gray-100">
      <p className="hidden md:flex hover:text-red">
        Get up to 50% off new season styles, limited time only
      </p>
      <div className="top_strip_links ml-auto">
        <ul className=" flex gap-5">
          <li className=" list-none">
            <Link to="#">Help Center</Link>
          </li>
          <div className="w-[1px] border-r-2 border-gray-300 rounded-lg" />
          <li className=" list-none">
            <Link to="#">Order Tracking</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTopStrip;
