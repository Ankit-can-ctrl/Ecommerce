import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import CategorySidebar from "./CategorySidebar";

function Categories() {
  const categories = [
    {
      name: "Men",
      item: ["T-Shirts", "Shirts", "Pants", "Jackets"],
    },
    {
      name: "Women",
      item: ["Dresses", "Tops", "Skirts", "Accessories"],
    },
    {
      name: "Kids",
      item: ["Boys", "Girls", "Shoes"],
    },
    {
      name: "Electronics",
      item: [
        "TV",
        "Refrigerator",
        "Washing Machine",
        "Microwave",
        "Air Conditioner",
        "Water Purifier",
        "Vacuum Cleaner",
        "Iron",
        "Fan",
      ],
    },
    {
      name: "Furniture",
      item: [
        "Sofa",
        "Dining Table",
        "Bed Frame",
        "Wardrobe",
        "Coffee Table",
        "Bookshelf",
      ],
    },
    {
      name: "Beauty",
      item: [
        "Lipstick",
        "Foundation",
        "Mascara",
        "Eyeliner",
        "Blush",
        "Eyeshadow Palette",
        "Makeup Brushes",
        "Primer",
        "Concealer",
      ],
    },
    {
      name: "Sports",
      item: [
        "Football",
        "Cricket",
        "Basketball",
        "Tennis",
        "Badminton",
        "Table Tennis",
        "Golf",
        "Hockey",
        "Volleyball",
      ],
    },
    {
      name: "Stationery",
      item: [
        "Pen",
        "Pencil",
        "Eraser",
        "Sharpener",
        "Ruler",
        "Glue",
        "Scissors",
        "Stapler",
        "Highlighter",
      ],
    },
    {
      name: "Games",
      item: [
        "Chess",
        "Ludo",
        "Carrom",
        "Monopoly",
        "Scrabble",
        "Uno",
        "Pictionary",
        "Jenga",
        "Battleship",
      ],
    },
    {
      name: "Health",
      item: [
        "Protein Powder",
        "Vitamin Tablets",
        "Energy Drink",
        "Weight Loss Capsules",
        "Multivitamin Capsules",
        "Fish Oil Capsules",
        "Calcium Tablets",
        "Iron Tablets",
        "Zinc Tablets",
      ],
    },
  ];

  return (
    <div className="hidden md:flex items-center justify-between py-1 px-5 border-b-2 border-gray-100">
      <div className="2xl:hidden">
        <CategorySidebar />
      </div>

      <div className="relative hidden 2xl:flex">
        <ul className="flex gap-5">
          {categories.map((category, index) => (
            <li key={index} className="relative group">
              <Link to={`/${category.name.toLowerCase()}`}>
                <Button
                  sx={{
                    color: "#000",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#FF5252",
                    },
                  }}
                  variant="text"
                >
                  {category.name}
                </Button>
              </Link>

              <div className="absolute left-0 z-50 hidden group-hover:block">
                <div
                  className="transform transition-all duration-300 ease-in-out 
                    opacity-0 group-hover:opacity-100 
                    translate-y-2 group-hover:translate-y-0"
                >
                  <div className="p-2 mt-2 bg-white rounded-lg shadow-xl min-w-[200px]">
                    {category.item?.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={`/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 rounded-md
                         hover:bg-red hover:text-white
                         transition-colors duration-200"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p>🚀 Free International Delivery</p>
    </div>
  );
}

export default Categories;
