import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const categories = {
    Fashion: {
      items: [],
    },
    Jewelry: {
      items: [
        "Necklace",
        "Earrings",
        "Bracelet",
        "Ring",
        "Pendant",
        "Anklet",
        "Brooch",
        "Bangle",
        "Charm",
      ],
    },
    Beauty: {
      items: [
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
    Watches: {
      items: [
        "Rolex",
        "Omega",
        "Cartier",
        "Tag Heuer",
        "Seiko",
        "Citizen",
        "Tissot",
        "Casio",
        "Fossil",
      ],
    },
    Furniture: {
      items: [
        "Sofa",
        "Dining Table",
        "Bed Frame",
        "Wardrobe",
        "Coffee Table",
        "Bookshelf",
        "Office Chair",
        "TV Stand",
        "Recliner",
        "Dresser",
        "Nightstand",
        "Ottoman",
        "Desk",
      ],
    },
    Eyewear: {
      items: ["Sunglasses"],
    },
    Pets: { items: [] },
    Sunglasses: { items: [] },
    "Smart Tablet": { items: [] },
    "Leather Watch": { items: [] },
    Electronic: { items: [] },
    Accessories: { items: [] },
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="mx-3 flex flex-col gap-5">
      <h1 className=" py-5 px-7 font-medium border-b-2 border-gray-100">
        Shop By Categories
      </h1>
      <Box sx={{ minWidth: 250 }}>
        <SimpleTreeView>
          {Object.keys(categories).map((category) => (
            <TreeItem key={category} itemId={category} label={category}>
              {categories[category].items.map((item) => (
                <TreeItem key={item} itemId={item} label={item} />
              ))}
            </TreeItem>
          ))}
        </SimpleTreeView>
      </Box>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          color: "#000", // Custom text color
          "&:hover": {
            color: "#fff", // Hover text color
            backgroundColor: "#FF5252", // Hover color
          },
        }}
        variant="text"
      >
        <RiMenu2Fill /> Shop by Category
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
