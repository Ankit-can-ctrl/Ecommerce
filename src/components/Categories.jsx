import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CategorySidebar from "./CategorySidebar";

function Categories() {
  const categories = [
    "Home",
    "Electronics",
    "Fashion",
    "Furniture",
    "Beauty",
    "Sports",
    "Stationery",
    "Games",
    "Health",
  ];
  return (
    <div className="hidden md:flex items-center justify-between py-1 px-5 border-b-2 border-gray-100">
      <div className="2xl:hidden">
        <CategorySidebar />
      </div>

      <div className="categories hidden 2xl:flex">
        <ul className="flex gap-5">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/${category.toLowerCase()}`}>
                <Button
                  sx={{
                    color: "#000", // Custom text color
                    "&:hover": {
                      color: "#fff", // Hover text color
                      backgroundColor: "#FF5252", // Hover color
                    },
                  }}
                  variant="text"
                >
                  {category}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p>🚀 Free International Delivery</p>
    </div>
  );
}

export default Categories;
