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
import HeaderTopStrip from "./HeaderTopStrip";
import ProfileMenu from "./ProfileMenu";
import MenuSidebar from "./MenuSidebar";

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
      <HeaderTopStrip />
      {/* ===================== Navigation========================= */}
      <div className="navbar border-b-[2px] border-gray-100">
        <div className=" top_big_screen flex justify-between items-center gap-8 md:gap-0 px-3 md:px-5 m-auto py-5 ">
          <div className="logo flex items-center gap-2 ">
            <MenuSidebar />
            <Link to="/">
              <img className=" h-[30.23px] md:h-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="Searchbar hidden xl:flex">
            <SearchBar />
          </div>
          <div className="right_nav_links flex gap-5 items-center justify-center">
            <div className="Auth_links text-md hidden 2xl:flex">
              <Link className=" hover:text-red" to="/login">
                Login{" "}
              </Link>
              <span>/</span>
              <Link className=" hover:text-red" to="/register">
                {" "}
                Register
              </Link>
            </div>
            <div className=" hidden 2xl:flex w-[2px] h-[20px] border-r-2 border-gray-200" />
            <div className="Shopping_icons">
              <ul className="flex md:gap-5 items-center justify-center">
                <li className="2xl:hidden">
                  <ProfileMenu />
                </li>
                <li>
                  <Tooltip title="Compare" placement="bottom">
                    <IconButton aria-label="compare">
                      <StyledBadge
                        badgeContent={1}
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: "#FF5252",
                            color: "white",
                          },
                        }}
                      >
                        <GoGitCompare className="w-[24px] md:w-[32px]" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li className=" hidden lg:flex">
                  <Tooltip title="Wishlist" placement="bottom">
                    <IconButton aria-label="wishlist">
                      <StyledBadge
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: "#FF5252",
                            color: "white",
                          },
                        }}
                        badgeContent={2}
                      >
                        <IoMdHeartEmpty size={30} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip title="Cart" placement="bottom">
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={3}
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: "#FF5252",
                            color: "white",
                          },
                        }}
                      >
                        <IoCartOutline size={30} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" bottom_sidebar_small_screen xl:hidden w-full px-5 pb-2">
          <SearchBar />
        </div>
      </div>
      {/* ===================== Navigation Categories ================================ */}
    </div>
  );
}

export default Header;
