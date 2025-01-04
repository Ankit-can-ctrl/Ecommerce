import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import TreeSidebar from "./TreeSidebar";
import { FiMenu } from "react-icons/fi";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (open) {
      const firstFocusableElement = document.querySelector("[data-focus]");
      firstFocusableElement?.focus();
    }
  }, [open]);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="m-3 border-b-2 border-gray-100">
        <h1 className="  text-lg font-semibold px-3 py-2">Menu</h1>
      </div>
      <TreeSidebar />
      <div className="m-3 border-t-2 border-gray-100">
        <p className="py-3 border-b-2 border-gray-100">
          Get up to 50% off new season styles, limited time only
        </p>
        <p className="py-3 border-b-2 border-gray-100">
          🚀 Free International Delivery
        </p>
      </div>
    </Box>
  );

  return (
    <div className="md:hidden">
      <FiMenu
        className=" cursor-pointer"
        onClick={toggleDrawer(true)}
        size={20}
      />

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
