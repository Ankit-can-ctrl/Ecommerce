import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoGitCompare } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  return (
    <div className="main_header_container">
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
      {/* ===================== Navigation========================= */}
      <div className="navbar flex justify-between items-center px-5 m-auto py-5 border-b-[2px] border-gray-100">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="Searchbar">
          <SearchBar />
        </div>
        <div className="right_nav_links flex gap-5 items-center justify-center">
          <div className="Auth_links text-md">
            <Link className=" hover:text-red" to="/login">
              Login{" "}
            </Link>
            <span>/</span>
            <Link className=" hover:text-red" to="/register">
              {" "}
              Register
            </Link>
          </div>
          <div className=" w-[2px] h-[20px] border-r-2 border-gray-200" />
          <div className="Shopping_icons">
            <ul className="flex gap-5 items-center justify-center">
              <li>
                <Tooltip title="Compare" placement="bottom">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={1} color="secondary">
                      <GoGitCompare size={30} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist" placement="bottom">
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={2} color="secondary">
                      <IoMdHeartEmpty size={30} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart" placement="bottom">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={3} color="secondary">
                      <IoCartOutline size={30} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
