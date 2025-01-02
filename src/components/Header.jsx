import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <div className="main_header_container">
      <div className="top_strip px-[10%] m-auto flex justify-between items-center text-gray-500 h-10 text-sm border-b-2 border-gray-100">
        <p className="hidden md:flex hover:text-orange-500">
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
      {/* ============================================== */}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Searchbar">
          <input
            type="text"
            placeholder="Search for products"
            className="search_input"
          />
          <button className="search_btn">Search</button>
        </div>
        <div className="right_nav_links">
          <div className="Auth_links"></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
