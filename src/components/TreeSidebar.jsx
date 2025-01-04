import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export default function BasicSimpleTreeView() {
  return (
    <Box sx={{ minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="grid-community" label="Home" />
        <TreeItem itemId="grid" label="Fashion">
          <TreeItem itemId="apparel-grid" label="Apparel">
            <TreeItem itemId="apparel-1" label="Smart Tablet" />
            <TreeItem itemId="apparel-2" label="Crepe T-Shirt" />
            <TreeItem itemId="apparel-3" label="Leather Watch" />
            <TreeItem itemId="apparel-4" label="Rolling Diamond" />
          </TreeItem>
          <TreeItem itemId="Outwear-grid" label="Outerwear">
            <TreeItem itemId="Outerwear-1" label="Wooden Chair" />
            <TreeItem itemId="Outerwear-2" label="Sneakers Shoes" />
            <TreeItem itemId="Outerwear-3" label="Purse" />
            <TreeItem itemId="Outerwear-4" label="Xbox Controller" />
          </TreeItem>
          <TreeItem itemId="Footwear-grid" label="Footwear">
            <TreeItem itemId="Footwear-1" label="Wooden Chair" />
            <TreeItem itemId="Footwear-2" label="Sneakers Shoes" />
            <TreeItem itemId="Footwear-3" label="Purse" />
            <TreeItem itemId="Footwear-4" label="Xbox Controller" />
          </TreeItem>
        </TreeItem>
        <TreeItem itemId="new-arrivals" label="New Arrivals" />
      </SimpleTreeView>
    </Box>
  );
}
